import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// =============================================================================
// Configuration
// =============================================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_DIST = path.resolve(__dirname, 'src');
const PKG_DIST = path.resolve(__dirname, 'dist');
const MANIFEST_FILE = path.resolve(__dirname, 'manifest.json');

// =============================================================================
// Types
// =============================================================================

interface ParsedExport {
  names: string[];
  snapshotPath: string;
  sourcePath: string;
  isTypeOnly: boolean;
  isStar: boolean;
}

interface ModuleExports {
  filePath: string;
  exports: ParsedExport[];
}

interface Manifest {
  paths: Record<string, ManifestNode>;
  sourceRoot: string;
}

type ManifestNode = string[] | ManifestNodeMap;

interface ManifestNodeMap {
  [key: string]: ManifestNode;
}

// =============================================================================
// Path Utilities
// =============================================================================

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getDestDir(modulePath: string): string {
  if (modulePath === 'index.ts') return PKG_DIST;
  return path.join(PKG_DIST, modulePath.replace(/\.ts$/, ''));
}

function getSourceDtsPath(sourcePath: string): string {
  return path.join(API_DIST, sourcePath.replace(/^src\//, '') + '.d.ts');
}

function getSourceJsPath(sourcePath: string): string {
  return path.join(API_DIST, sourcePath.replace(/^src\//, '') + '.js');
}

function getRelativePath(fromFile: string, toDir: string): string {
  const fromDir = path.dirname(fromFile);
  const relative = path.relative(fromDir, toDir);
  return relative.startsWith('.') ? relative : './' + relative;
}

function getRelativeModulePath(fromFile: string, toDir: string): string {
  const relative = getRelativePath(fromFile, toDir);
  return fromFile.endsWith('.js') ? `${relative}/index.js` : relative;
}

function getRelativeFilePath(fromFile: string, toFile: string): string {
  const fromDir = path.dirname(fromFile);
  const relative = path.relative(fromDir, toFile).replace(/\\/g, '/');
  return relative.startsWith('.') ? relative : './' + relative;
}

function isEnumExport(name: string): boolean {
  return name.endsWith('Enum') || name.endsWith('Status') || name.endsWith('Type');
}

function isValidatorExport(name: string): boolean {
  return name.endsWith('Validator');
}

function isTransitionExport(name: string): boolean {
  return name.endsWith('Transition');
}

function isRuntimeExport(name: string): boolean {
  return isEnumExport(name) || isValidatorExport(name) || isTransitionExport(name);
}

function transformCjsToEsm(content: string): string {
  const needsReflectMetadata = content.includes('__metadata(');

  // Step 1: Extract all exported names from "exports.Name = Name;"
  const exportedNames = new Set<string>();
  const exportPattern = /exports\.(\w+)\s*=\s*\1;/g;
  let match;
  while ((match = exportPattern.exec(content)) !== null) {
    exportedNames.add(match[1]);
  }

  // Step 2: Remove CommonJS boilerplate
  let result = content
    .replace(/"use strict";\s*/g, '')
    .replace(/Object\.defineProperty\(exports,\s*"__esModule",\s*\{[^}]+\}\);\s*/g, '')
    .replace(/(?:exports\.\w+\s*=\s*)+void 0;\s*/g, '');

  // Step 3: Remove "exports.Name = Name;" lines (we'll add export to declarations)
  result = result.replace(/exports\.(\w+)\s*=\s*\1;\s*/g, '');

  // Step 4: Add "export" keyword before class and function declarations that were exported
  for (const name of exportedNames) {
    // Export class declarations
    const classPattern = new RegExp(`(^|\\n)(class ${name}\\s)`, 'g');
    result = result.replace(classPattern, '$1export $2');
    // Export function declarations
    const funcPattern = new RegExp(`(^|\\n)(function ${name}\\s*\\()`, 'g');
    result = result.replace(funcPattern, '$1export $2');
  }

  // Step 5: Transform require() to import (for class-validator and other packages)
  result = result.replace(/const (\w+) = require\("([^"]+)"\);/g, 'import * as $1 from "$2";');

  // Step 6: Transform IIFE enum pattern to export
  // Handles both: (Name || (Name = {})) and (Name || (exports.Name = Name = {}))
  result = result.replace(
    /var (\w+);\s*\(function \((\w+)\) \{([^}]+)\}\)\((\w+) \|\| \((?:exports\.\w+ = )?(\w+) = \{\}\)\);/g,
    'export var $1;\n(function ($2) {$3})($4 || ($5 = {}));',
  );

  // Step 7: Convert remaining named CommonJS assignments into ESM const exports.
  result = result.replace(/^exports\.(?!default\b)(\w+)\s*=\s*/gm, 'export const $1 = ');

  // Step 8: Replace remaining property references to previously exported names.
  result = result.replace(/exports\.(?!default\b)(\w+)/g, '$1');

  // Step 9: Remove sourcemap comments
  result = result.replace(/\/\/# sourceMappingURL=.+$/gm, '');

  if (needsReflectMetadata && !result.includes("from 'reflect-metadata'") && !result.includes('from "reflect-metadata"')) {
    result = `import 'reflect-metadata';\n${result}`;
  }

  return result.trim() + '\n';
}

// =============================================================================
// Parsing
// =============================================================================

function discoverModulesFromManifest(): ModuleExports[] {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf-8')) as Manifest;
  const modules: ModuleExports[] = [];

  for (const [publicPath, node] of Object.entries(manifest.paths)) {
    collectManifestModules(publicPath, node, publicPathBase(publicPath), modules);
  }

  return modules;
}

function collectManifestModules(
  publicPath: string,
  node: ManifestNode,
  sourceBase: string,
  modules: ModuleExports[],
): void {
  if (Array.isArray(node)) {
    modules.push({
      exports: node.map((sourcePath) => ({
        isStar: true,
        isTypeOnly: false,
        names: [],
        sourcePath: normalizeManifestSourcePath(sourceBase, sourcePath),
        snapshotPath: manifestSnapshotPath(publicPath, sourcePath),
      })),
      filePath: publicPathToFilePath(publicPath),
    });
    return;
  }

  for (const [key, value] of Object.entries(node)) {
    collectManifestModules(`${publicPath}/${key}`, value, sourceBase, modules);
  }
}

function normalizeManifestSourcePath(sourceBase: string, sourcePath: string): string {
  const normalized = sourcePath.replace(/^src\//, '').replace(/\.ts$/, '');

  if (normalized.startsWith('domain/') || normalized.startsWith('infrastructure/')) {
    return `src/${normalized}`;
  }

  const resolved = sourceBase ? `${sourceBase}/${normalized}` : normalized;

  return `src/${resolved}`;
}

function publicPathBase(publicPath: string): string {
  if (publicPath === '@') {
    return '';
  }

  if (publicPath.startsWith('@/infrastructure')) {
    return publicPath.replace(/^@\//, '');
  }

  if (publicPath.startsWith('@/')) {
    return publicPath.replace(/^@\//, 'domain/');
  }

  throw new Error(`Unsupported public path: ${publicPath}`);
}

function publicPathTargetBase(publicPath: string): string {
  if (publicPath === '@') {
    return '';
  }

  if (publicPath.startsWith('@/')) {
    return publicPath.replace(/^@\//, '');
  }

  throw new Error(`Unsupported public path: ${publicPath}`);
}

function manifestSnapshotPath(publicPath: string, sourcePath: string): string {
  const targetBase = publicPathTargetBase(publicPath);
  const fileBase = path.basename(sourcePath.replace(/^src\//, '').replace(/\.ts$/, ''));
  const resolved = targetBase ? `${targetBase}/${fileBase}` : fileBase;

  return `src/${resolved}`;
}

function publicPathToFilePath(publicPath: string): string {
  if (publicPath === '@') {
    return 'index.ts';
  }

  if (publicPath.startsWith('@/')) {
    return `${publicPath.replace(/^@\//, '')}.ts`;
  }

  throw new Error(`Unsupported public path: ${publicPath}`);
}

function buildImportRewriteMap(modules: ModuleExports[]): Map<string, string> {
  const map = new Map<string, string>();

  for (const module of modules) {
    const destDir = getDestDir(module.filePath);

    for (const exp of module.exports) {
      map.set(exp.sourcePath, destDir);
      map.set(exp.snapshotPath, destDir);
    }
  }

  return map;
}

// =============================================================================
// Import Rewriting
// =============================================================================

function rewriteRelativeImport(
  relativeSrcImport: string,
  srcDir: string,
  destFile: string,
  importMap: Map<string, string>,
  commonDir: string,
): string {
  const resolvedSrcPath = path.normalize(path.join(srcDir, relativeSrcImport));
  let normalizedPath = resolvedSrcPath
    .replace(/\\/g, '/')
    .replace(/\.d\.ts$/, '')
    .replace(/\.js$/, '')
    .replace(/\.ts$/, '');

  if (!normalizedPath.startsWith('src/')) {
    normalizedPath = 'src/' + normalizedPath.replace(/^(\.\.\/)+/, '');
  }

  const targetDir = importMap.get(normalizedPath);
  const destDir = targetDir || commonDir;
  const destFileDir = path.dirname(destFile);
  const fileName = path.basename(normalizedPath);

  // If same directory, return direct file path to avoid circular import via index.js
  if (path.resolve(destFileDir) === path.resolve(destDir)) {
    return `from './${fileName}.js'`;
  }

  // Root-level shared files must be imported directly. Importing the root barrel
  // executes every public module and can trigger unrelated decorator side effects.
  if (targetDir && path.resolve(targetDir) === path.resolve(commonDir)) {
    return `from '${getRelativeFilePath(destFile, path.join(commonDir, `${fileName}.js`))}'`;
  }

  return `from '${getRelativeModulePath(destFile, destDir)}'`;
}

function rewriteMappedImport(
  srcPath: string,
  targetDir: string,
  destFile: string,
  commonDir: string,
): string {
  if (path.resolve(targetDir) === path.resolve(commonDir)) {
    return `from '${getRelativeFilePath(destFile, path.join(commonDir, `${path.basename(srcPath)}.js`))}'`;
  }

  return `from '${getRelativeModulePath(destFile, targetDir)}'`;
}

function rewriteImports(
  content: string,
  srcFile: string,
  destFile: string,
  importMap: Map<string, string>,
  commonDir: string,
): string {
  let result = content;
  const srcDir = path.dirname(srcFile);

  // Pass 1: Rewrite relative imports (./something or ../something)
  result = result.replace(/from ['"](\.[^'"]+)['"]/g, (_, relativeSrcImport) =>
    rewriteRelativeImport(relativeSrcImport, srcDir, destFile, importMap, commonDir),
  );

  // Pass 2: Rewrite absolute src/ imports from importMap
  for (const [srcPath, targetDir] of importMap.entries()) {
    const regex = new RegExp(`from ['"]${escapeRegex(srcPath)}['"]`, 'g');
    result = result.replace(regex, rewriteMappedImport(srcPath, targetDir, destFile, commonDir));
  }

  // Pass 3: Rewrite remaining src/ imports to root
  const relativeToRoot = getRelativeModulePath(destFile, commonDir);
  result = result.replace(/from ['"]src\/[^'"]+['"]/g, `from '${relativeToRoot}'`);

  return result;
}

function normalizeEsmJs(content: string): string {
  return (
    content
      .replace(/^exports\.(?!default\b)(\w+)\s*=\s*/gm, 'export const $1 = ')
      .replace(/exports\.(?!default\b)(\w+)/g, '$1')
      .replace(/\/\/# sourceMappingURL=.+$/gm, '')
      .trim() + '\n'
  );
}

// =============================================================================
// File Operations
// =============================================================================

function ensureDir(dir: string): void {
  if (fs.existsSync(dir)) return;
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(
  src: string,
  dest: string,
  importContextPath: string,
  importMap: Map<string, string>,
  commonDir: string,
  rewrite = false,
): boolean {
  ensureDir(path.dirname(dest));

  if (!fs.existsSync(src)) {
    console.warn(`  ✗ Not found: ${src}`);
    return false;
  }

  const content = fs.readFileSync(src, 'utf-8');

  if (rewrite && dest.endsWith('.d.ts')) {
    const rewritten = rewriteImports(content, importContextPath, dest, importMap, commonDir);
    fs.writeFileSync(dest, rewritten);
  } else if (dest.endsWith('.js')) {
    const transformed = transformCjsToEsm(content);
    const rewritten = rewriteImports(transformed, importContextPath, dest, importMap, commonDir);
    fs.writeFileSync(dest, normalizeEsmJs(rewritten));
  } else {
    fs.copyFileSync(src, dest);
  }

  console.log(`  ✓ ${path.relative(PKG_DIST, dest)}`);
  return true;
}

// =============================================================================
// Barrel Generation
// =============================================================================

function generateStarExportJs(fromPath: string): string {
  return `export * from '${fromPath}.js';`;
}

function generateNamedExportJs(fromPath: string, enumNames: string[]): string {
  return `export { ${enumNames.join(', ')} } from '${fromPath}.js';`;
}

function createBarrel(destDir: string, exports: ParsedExport[]): void {
  const dtsLines: string[] = [];
  const jsLines: string[] = [];

  const processedFiles = new Set<string>();

  for (const exp of exports) {
    const fileName = path.basename(exp.sourcePath);

    if (processedFiles.has(fileName)) continue;
    processedFiles.add(fileName);

    const fromPath = './' + fileName;

    if (exp.isStar) {
      dtsLines.push(`export * from '${fromPath}';`);

      const needsRuntime =
        exp.sourcePath.includes('/enums/') ||
        exp.sourcePath.includes('/validators/') ||
        exp.sourcePath.endsWith('abstract.validator') ||
        exp.sourcePath.includes('/transitions/') ||
        exp.sourcePath.endsWith('abstract.transition') ||
        exp.sourcePath.includes('/decorators/');

      if (needsRuntime) {
        jsLines.push(generateStarExportJs(fromPath));
      }
      continue;
    }

    // Named exports
    const runtimeNames = exp.names.filter(isRuntimeExport);
    const typeNames = exp.names.filter((n) => !isRuntimeExport(n));

    if (typeNames.length > 0) {
      dtsLines.push(`export type { ${typeNames.join(', ')} } from '${fromPath}';`);
    }

    if (runtimeNames.length > 0) {
      dtsLines.push(`export { ${runtimeNames.join(', ')} } from '${fromPath}';`);
      jsLines.push(generateNamedExportJs(fromPath, runtimeNames));
    }
  }

  fs.writeFileSync(path.join(destDir, 'index.d.ts'), dtsLines.join('\n') + '\n');
  fs.writeFileSync(path.join(destDir, 'index.js'), jsLines.join('\n') + '\n');
}

// =============================================================================
// Module Building
// =============================================================================

function generateRepositoryTypes(): void {
  fs.copyFileSync(
    path.join(API_DIST, 'repository.types.d.ts'),
    path.join(PKG_DIST, 'repository.types.d.ts'),
  );
  console.log(`  ✓ repository.types.d.ts`);

  // Append export to root index
  const indexDts = path.join(PKG_DIST, 'index.d.ts');
  const currentContent = fs.readFileSync(indexDts, 'utf-8');
  fs.writeFileSync(
    indexDts,
    currentContent + "export type { SaveEntityArgs } from './repository.types';\n",
  );
  console.log(`  ✓ index.d.ts (added SaveEntityArgs)`);
}

function generateRootIndex(modules: ModuleExports[]): void {
  const indexDts = path.join(PKG_DIST, 'index.d.ts');
  const indexJs = path.join(PKG_DIST, 'index.js');
  const existingDts = fs.existsSync(indexDts) ? fs.readFileSync(indexDts, 'utf-8').trim() : '';
  const existingJs = fs.existsSync(indexJs) ? fs.readFileSync(indexJs, 'utf-8').trim() : '';
  const publicModules = modules.filter((module) => module.filePath !== 'index.ts');
  const dtsLines = publicModules
    .map((module) => `export * from './${module.filePath.replace(/\.ts$/, '')}';`)
    .join('\n');
  const jsLines = publicModules
    .map((module) => `export * from './${module.filePath.replace(/\.ts$/, '')}/index.js';`)
    .join('\n');

  fs.writeFileSync(indexDts, [existingDts, dtsLines].filter(Boolean).join('\n') + '\n');
  fs.writeFileSync(indexJs, [existingJs, jsLines].filter(Boolean).join('\n') + '\n');
  console.log(`  ✓ index.d.ts`);
  console.log(`  ✓ index.js`);
}

function buildModule(module: ModuleExports, importMap: Map<string, string>): void {
  const destDir = getDestDir(module.filePath);
  ensureDir(destDir);

  const copiedFiles = new Set<string>();

  for (const exp of module.exports) {
    // Copy .d.ts file
    const dtsFileName = path.basename(exp.sourcePath) + '.d.ts';

    if (!copiedFiles.has(dtsFileName)) {
      copyFile(
        getSourceDtsPath(exp.snapshotPath),
        path.join(destDir, dtsFileName),
        exp.snapshotPath,
        importMap,
        PKG_DIST,
        true,
      );
      copiedFiles.add(dtsFileName);
    }

    // Copy .js file for enums, validators, and transitions (they need runtime)
    // Only include abstract.validator and abstract.transition (not entity/repository which have backend deps)
    const isEnum = exp.sourcePath.includes('/enums/');
    const isValidator =
      exp.sourcePath.includes('/validators/') || exp.sourcePath.endsWith('abstract.validator');
    const isTransition =
      exp.sourcePath.includes('/transitions/') || exp.sourcePath.endsWith('abstract.transition');
    const isDecorator = exp.sourcePath.includes('/decorators/');
    if ((!isEnum && !isValidator && !isTransition && !isDecorator) || exp.isTypeOnly) continue;

    const jsFileName = path.basename(exp.sourcePath) + '.js';
    const srcJs = getSourceJsPath(exp.snapshotPath);

    if (copiedFiles.has(jsFileName) || !fs.existsSync(srcJs)) continue;

    copyFile(
      srcJs,
      path.join(destDir, jsFileName),
      exp.snapshotPath,
      importMap,
      PKG_DIST,
      false,
    );
    copiedFiles.add(jsFileName);
  }

  createBarrel(destDir, module.exports);
}

// =============================================================================
// Main
// =============================================================================

console.log('\n📦 Building @merkaly/api package\n');
console.log('Using compiled API snapshot from src/.\n');

if (!fs.existsSync(API_DIST)) {
  throw new Error('Compiled API snapshot not found. Run pnpm sync:api before pnpm build.');
}

console.log('Discovering public modules from manifest.json...\n');

// Clean and create dist
if (fs.existsSync(PKG_DIST)) {
  fs.rmSync(PKG_DIST, { recursive: true });
}
ensureDir(PKG_DIST);

// Discover and parse all modules
const modules = discoverModulesFromManifest();
console.log(`Found ${modules.length} modules\n`);

// Build import rewrite map
const importMap = buildImportRewriteMap(modules);

// Build each module (index.ts goes to root, others to subfolders)
for (const module of modules) {
  const displayName =
    module.filePath === 'index.ts' ? '(root)' : module.filePath.replace(/\.ts$/, '');
  console.log(`\n${displayName}:`);
  buildModule(module, importMap);
}

console.log('\n(root index):');
generateRootIndex(modules);

// Generate repository types utility
console.log('\n(utilities):');
generateRepositoryTypes();

console.log('\n✅ Build complete!\n');
