import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as ts from 'typescript';

// =============================================================================
// Configuration
// =============================================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_DIST = path.resolve(__dirname, 'src');
const PKG_DIST = path.resolve(__dirname, 'dist');
const MANIFEST_FILE = path.resolve(__dirname, 'manifest.json');

const TRANSITION_SOURCE_PATTERN = /^src\/.+\/transitions\/[^/]+\.transition$/;
const ABSTRACT_TRANSITION_SOURCE = 'src/infrastructure/abstracts/abstract.transition';

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

function isTransitionSource(sourcePath: string): boolean {
  return TRANSITION_SOURCE_PATTERN.test(sourcePath);
}

function isAbstractTransitionSource(sourcePath: string): boolean {
  return sourcePath === ABSTRACT_TRANSITION_SOURCE;
}

function findMatchingBraceIndex(content: string, openIndex: number): number {
  let depth = 0;

  for (let i = openIndex; i < content.length; i++) {
    const char = content[i];

    if (char === '{') {
      depth++;
      continue;
    }

    if (char === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function extractMethodBlock(content: string, methodPattern: RegExp): string | null {
  const match = methodPattern.exec(content);
  if (!match) return null;

  const openIndex = content.indexOf('{', match.index);
  if (openIndex === -1) return null;

  const closeIndex = findMatchingBraceIndex(content, openIndex);
  if (closeIndex === -1) return null;

  return content.slice(match.index, closeIndex + 1).trim();
}

function sanitizeTransitionJs(content: string): string {
  const classMatch = content.match(/class\s+(\w+)\s+extends\s+[^{]+\{/);
  const statesIndex = content.indexOf('$states =');

  if (!classMatch || statesIndex === -1) return transformCjsToEsm(content);

  const className = classMatch[1];
  const statesStart = content.indexOf('{', statesIndex);
  const statesEnd = findMatchingBraceIndex(content, statesStart);
  if (statesStart === -1 || statesEnd === -1) return transformCjsToEsm(content);

  const statesObject = content.slice(statesStart, statesEnd + 1);

  const constructorBlock = extractMethodBlock(content, /constructor\s*\([^)]*\)\s*\{/);
  const initialStatesBlock = extractMethodBlock(content, /get\s+initialStates\s*\(\)\s*\{/);

  const requireMap = new Map<string, string>();
  const requiredAliasRegex = /const\s+(\w+)\s*=\s*require\("([^"]+)"\);/g;
  let requireMatch: RegExpExecArray | null;

  while ((requireMatch = requiredAliasRegex.exec(content)) !== null) {
    requireMap.set(requireMatch[1], requireMatch[2]);
  }

  const runtimeBlocks = [statesObject, constructorBlock, initialStatesBlock]
    .filter(Boolean)
    .join('\n');

  const importAliases = new Set<string>();
  const aliasUsageRegex = /([A-Za-z_]\w*)\.[A-Za-z_]\w*/g;
  let aliasMatch: RegExpExecArray | null;

  while ((aliasMatch = aliasUsageRegex.exec(runtimeBlocks)) !== null) {
    const alias = aliasMatch[1];
    const importPath = requireMap.get(alias);
    if (!importPath) continue;
    if (importPath.includes('abstract.transition')) continue;
    importAliases.add(alias);
  }

  const importLines = [
    "import { AbstractTransition } from 'src/infrastructure/abstracts/abstract.transition';",
    ...Array.from(importAliases)
      .sort()
      .map((alias) => `import * as ${alias} from '${requireMap.get(alias)}';`),
  ];

  const classBlocks = [
    `  $states = ${statesObject};`,
    constructorBlock ? `  ${constructorBlock}` : null,
    initialStatesBlock ? `  ${initialStatesBlock}` : null,
  ].filter(Boolean);

  return `${importLines.join('\n')}

export class ${className} extends AbstractTransition {
${classBlocks.join('\n\n')}
}
`;
}

function sanitizeTransitionDts(content: string): string {
  const classMatch = content.match(
    /export\s+declare\s+class\s+(\w+)\s+extends\s+AbstractTransition<([^,>]+),[^>]+>\s*\{/,
  );
  if (!classMatch) return content;

  const className = classMatch[1];
  const statusType = classMatch[2].trim();
  const abstractImportPathMatch = content.match(/from ['"]([^'"]*abstract\.transition[^'"]*)['"]/);
  const abstractImportPath = abstractImportPathMatch?.[1] ?? ABSTRACT_TRANSITION_SOURCE;

  const importLines = content.match(/^import[^;]+;$/gm) ?? [];
  const statusImports: string[] = [];

  for (const line of importLines) {
    const pathMatch = line.match(/from ['"]([^'"]+)['"]/);
    if (!pathMatch) continue;

    const importPath = pathMatch[1];
    if (importPath.includes('abstract.transition') || importPath.includes('/entities/')) continue;
    if (line.includes('TransitionContext')) continue;

    const namedImportsMatch = line.match(/\{([^}]+)\}/);
    if (!namedImportsMatch) continue;

    const localNames = namedImportsMatch[1]
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name) => {
        const [original, alias] = name.split(/\s+as\s+/).map((part) => part.trim());
        return alias || original;
      });

    if (localNames.includes(statusType)) {
      statusImports.push(line.replace(/^import\s+type\s+/, 'import '));
    }
  }

  return `import { AbstractTransition } from '${abstractImportPath}';
${Array.from(new Set(statusImports)).join('\n')}

export declare class ${className} extends AbstractTransition<${statusType}, unknown> {
  protected readonly $states: Readonly<Record<${statusType}, readonly ${statusType}[]>>;
  constructor(status?: ${statusType});
  readonly initialStates: readonly ${statusType}[];
}
`;
}

function sanitizeAbstractTransitionJs(): string {
  return `export class AbstractTransition {
  constructor(current) {
    this.$current = current;
  }

  canTransition(from, to) {
    const allowed = this.$states[from] ?? [];
    return allowed.includes(to);
  }

  get nextStates() {
    return this.$states[this.$current] ?? [];
  }

  get prevStates() {
    return Object.entries(this.$states)
      .filter(([, next]) => next.includes(this.$current))
      .map(([prev]) => prev);
  }

  get isTerminal() {
    return (this.$states[this.$current] ?? []).length === 0;
  }
}
`;
}

function sanitizeAbstractTransitionDts(): string {
  return `export declare abstract class AbstractTransition<S extends string, E = unknown> {
  private $current: S;
  constructor(current: S);
  protected abstract readonly $states: Readonly<Record<S, readonly S[]>>;
  canTransition(from: S, to: S): boolean;
  readonly nextStates: readonly S[];
  readonly prevStates: S[];
  readonly isTerminal: boolean;
}
`;
}

function transformCjsToEsm(content: string): string {
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
  let normalizedPath = resolvedSrcPath.replace(/\\/g, '/');

  if (!normalizedPath.startsWith('src/')) {
    normalizedPath = 'src/' + normalizedPath.replace(/^(\.\.\/)+/, '');
  }

  const targetDir = importMap.get(normalizedPath);
  const destDir = targetDir || commonDir;
  const destFileDir = path.dirname(destFile);

  // If same directory, return direct file path to avoid circular import via index.js
  if (path.resolve(destFileDir) === path.resolve(destDir)) {
    const fileName = path.basename(normalizedPath);
    return `from './${fileName}.js'`;
  }

  return `from '${getRelativeModulePath(destFile, destDir)}'`;
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
    result = result.replace(regex, `from '${getRelativeModulePath(destFile, targetDir)}'`);
  }

  // Pass 3: Rewrite remaining src/ imports to root
  const relativeToRoot = getRelativeModulePath(destFile, commonDir);
  result = result.replace(/from ['"]src\/[^'"]+['"]/g, `from '${relativeToRoot}'`);

  return result;
}

function rewriteTransitionAbstractImport(content: string, destFile: string): string {
  const rootRelative = getRelativePath(destFile, PKG_DIST);
  const rootImportRegex = new RegExp(`from ['"]${escapeRegex(rootRelative)}['"]`, 'g');
  return content.replace(rootImportRegex, `from '${rootRelative}/abstract.transition.js'`);
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
  srcPath: string,
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
    const transformed = isAbstractTransitionSource(srcPath)
      ? sanitizeAbstractTransitionDts()
      : isTransitionSource(srcPath)
        ? sanitizeTransitionDts(content)
        : content;

    const rewritten = rewriteImports(transformed, srcPath, dest, importMap, commonDir);
    const fixed = isTransitionSource(srcPath)
      ? rewriteTransitionAbstractImport(rewritten, dest)
      : rewritten;
    fs.writeFileSync(dest, fixed);
  } else if (dest.endsWith('.js')) {
    const transformed = isAbstractTransitionSource(srcPath)
      ? sanitizeAbstractTransitionJs()
      : isTransitionSource(srcPath)
        ? sanitizeTransitionJs(content)
        : transformCjsToEsm(content);

    const rewritten = rewriteImports(transformed, srcPath, dest, importMap, commonDir);
    const fixed = isTransitionSource(srcPath)
      ? rewriteTransitionAbstractImport(rewritten, dest)
      : rewritten;
    fs.writeFileSync(dest, normalizeEsmJs(fixed));
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
  const content = `import type { AbstractEntity } from './abstract.entity';
import type { Document } from 'mongoose';

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type SystemKeys = '_id' | 'createdAt' | 'updatedAt' | 'deletedAt' | keyof Document;

export type SaveEntityArgs<T> = {
  [K in keyof T as K extends SystemKeys ? never : T[K] extends Function ? never : Equal<{
    [Q in K]: T[K];
  }, {
    -readonly [Q in K]: T[K];
  }> extends true ? K : never]: T[K] extends AbstractEntity ? SaveEntityArgs<T[K]> : T[K];
};
`;

  fs.writeFileSync(path.join(PKG_DIST, 'repository.types.d.ts'), content);
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
        exp.sourcePath,
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

    copyFile(srcJs, path.join(destDir, jsFileName), exp.sourcePath, importMap, PKG_DIST, false);
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
