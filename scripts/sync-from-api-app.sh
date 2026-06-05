#!/usr/bin/env bash
set -euo pipefail

PACKAGE_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST_FILE="$PACKAGE_ROOT/manifest.json"

if [ ! -f "$MANIFEST_FILE" ]; then
  echo "manifest.json not found at $MANIFEST_FILE" >&2
  exit 1
fi

echo "Syncing @merkaly/api from manifest"
echo

rm -rf "$PACKAGE_ROOT/app" "$PACKAGE_ROOT/src" "$PACKAGE_ROOT/compiled"

node - "$MANIFEST_FILE" "$PACKAGE_ROOT" <<'NODE'
const fs = require('fs');
const path = require('path');

const manifestFile = process.argv[2];
const packageRoot = process.argv[3];
const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));

function assertRelativePath(value, fieldName) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`${fieldName} must be a non-empty string.`);
  }

  if (path.isAbsolute(value) || value.split(/[\\/]+/).includes('..')) {
    throw new Error(`${fieldName} must stay inside the configured root: ${value}`);
  }
}

function assertPublicPath(value) {
  if (
    typeof value !== 'string' ||
    (value !== '@' && !value.startsWith('@/'))
  ) {
    throw new Error(`Public path must be "@" or "@/*": ${value}`);
  }
}

function normalizeSourcePath(value) {
  assertRelativePath(value, 'source path');
  return value.replace(/^src\//, '').replace(/\.ts$/, '');
}

function publicPathBase(publicPath) {
  if (publicPath === '@') return '';

  if (publicPath.startsWith('@/infrastructure')) {
    return publicPath.replace(/^@\//, '');
  }

  if (publicPath.startsWith('@/')) {
    return publicPath.replace(/^@\//, 'domain/');
  }

  throw new Error(`Unsupported public path: ${publicPath}`);
}

function resolveSourcePath(sourceBase, sourcePath) {
  const normalized = normalizeSourcePath(sourcePath);

  if (normalized.startsWith('domain/') || normalized.startsWith('infrastructure/')) {
    return `${normalized}.ts`;
  }

  return `${sourceBase ? `${sourceBase}/` : ''}${normalized}.ts`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function publicPathTargetBase(publicPath) {
  if (publicPath === '@') return '';
  if (publicPath.startsWith('@/')) return publicPath.replace(/^@\//, '');
  throw new Error(`Unsupported public path: ${publicPath}`);
}

function resolveTargetPath(publicPath, sourcePath) {
  const targetBase = publicPathTargetBase(publicPath);
  const fileBase = path.basename(sourcePath).replace(/\.ts$/, '');
  return `${targetBase ? `${targetBase}/` : ''}${fileBase}`;
}

function copyCompiledFile(sourceRoot, sourcePath, targetPath, extension) {
  const sourceRelativePath = sourcePath.replace(/^src\//, '').replace(/\.ts$/, '');
  const targetRelativePath = `src/${targetPath}.${extension}`;
  const source = path.resolve(sourceRoot, `${sourceRelativePath}.${extension}`);
  const target = path.resolve(packageRoot, targetRelativePath);

  if (!source.startsWith(`${sourceRoot}${path.sep}`)) {
    throw new Error(`Source escaped sourceRoot: ${sourcePath}`);
  }

  if (!target.startsWith(`${packageRoot}${path.sep}`)) {
    throw new Error(`Target escaped package root: ${targetPath}`);
  }

  if (!fs.existsSync(source)) {
    throw new Error(`Missing source: ${sourceRelativePath}.${extension}`);
  }

  ensureDir(path.dirname(target));
  fs.copyFileSync(source, target);
  console.log(`  copied ${targetRelativePath}`);
}

function stripImportExtension(value) {
  return value
    .replace(/\.d\.ts$/, '')
    .replace(/\.js$/, '')
    .replace(/\.ts$/, '');
}

function normalizeImportSource(value) {
  return stripImportExtension(value.replace(/^src\//, ''));
}

function relativeImport(fromTargetPath, toTargetPath) {
  const fromDir = path.dirname(fromTargetPath);
  const relative = path.relative(fromDir, toTargetPath).replace(/\\/g, '/');
  return relative.startsWith('.') ? relative : `./${relative}`;
}

function rewritePackageImport(specifier, sourcePath, targetPath, targetBySourcePath, strict = true) {
  if (!specifier.startsWith('.') && !specifier.startsWith('src/')) {
    return specifier;
  }

  const sourceBase = sourcePath.replace(/\.ts$/, '');
  const resolvedSourcePath = specifier.startsWith('src/')
    ? normalizeImportSource(specifier)
    : normalizeImportSource(path.join(path.dirname(sourceBase), specifier));

  const resolvedTargetPath = targetBySourcePath.get(resolvedSourcePath);
  if (!resolvedTargetPath) {
    if (!strict) {
      return specifier;
    }

    throw new Error(
      `Import "${specifier}" from ${sourcePath} is not declared in manifest.json.`,
    );
  }

  return relativeImport(`src/${targetPath}`, `src/${resolvedTargetPath}`);
}

function rewriteImports(content, sourcePath, targetPath, targetBySourcePath, strict = true) {
  return content
    .replace(/from\s+['"]([^'"]+)['"]/g, (match, specifier) => {
      const rewritten = rewritePackageImport(
        specifier,
        sourcePath,
        targetPath,
        targetBySourcePath,
        strict,
      );
      return match.replace(specifier, rewritten);
    })
    .replace(/require\(\s*['"]([^'"]+)['"]\s*\)/g, (match, specifier) => {
      const rewritten = rewritePackageImport(
        specifier,
        sourcePath,
        targetPath,
        targetBySourcePath,
        strict,
      );
      return match.replace(specifier, rewritten);
    });
}

function isAbstractTransitionSource(sourcePath) {
  return sourcePath === 'infrastructure/abstracts/abstract.transition.ts';
}

function isTransitionSource(sourcePath) {
  return /^domain\/.+\/transitions\/[^/]+\.transition\.ts$/.test(sourcePath);
}

function findMatchingBraceIndex(content, openIndex) {
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

function extractMethodBlock(content, methodPattern) {
  const match = methodPattern.exec(content);
  if (!match) return null;

  const openIndex = content.indexOf('{', match.index);
  if (openIndex === -1) return null;

  const closeIndex = findMatchingBraceIndex(content, openIndex);
  if (closeIndex === -1) return null;

  return content.slice(match.index, closeIndex + 1).trim();
}

function sanitizeTransitionJs(content) {
  const classMatch = content.match(/class\s+(\w+)\s+extends\s+[^{]+\{/);
  const statesIndex = content.indexOf('$states =');

  if (!classMatch || statesIndex === -1) return content;

  const className = classMatch[1];
  const statesStart = content.indexOf('{', statesIndex);
  const statesEnd = findMatchingBraceIndex(content, statesStart);
  if (statesStart === -1 || statesEnd === -1) return content;

  const statesObject = content.slice(statesStart, statesEnd + 1);
  const constructorBlock = extractMethodBlock(content, /constructor\s*\([^)]*\)\s*\{/);
  const initialStatesBlock = extractMethodBlock(content, /get\s+initialStates\s*\(\)\s*\{/);

  const requireMap = new Map();
  const requiredAliasRegex = /const\s+(\w+)\s*=\s*require\("([^"]+)"\);/g;
  let requireMatch;

  while ((requireMatch = requiredAliasRegex.exec(content)) !== null) {
    requireMap.set(requireMatch[1], requireMatch[2]);
  }

  const runtimeBlocks = [statesObject, constructorBlock, initialStatesBlock]
    .filter(Boolean)
    .join('\n');

  const importAliases = new Set();
  const aliasUsageRegex = /([A-Za-z_]\w*)\.[A-Za-z_]\w*/g;
  let aliasMatch;

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

function sanitizeTransitionDts(content) {
  const classMatch = content.match(
    /export\s+declare\s+class\s+(\w+)\s+extends\s+AbstractTransition<([^,>]+),[^>]+>\s*\{/,
  );
  if (!classMatch) return content;

  const className = classMatch[1];
  const statusType = classMatch[2].trim();
  const abstractImportPathMatch = content.match(/from ['"]([^'"]*abstract\.transition[^'"]*)['"]/);
  const abstractImportPath = abstractImportPathMatch?.[1] ?? 'src/infrastructure/abstracts/abstract.transition';

  const importLines = content.match(/^import[^;]+;$/gm) ?? [];
  const statusImports = [];

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

function sanitizeAbstractTransitionDts() {
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

function sanitizeAbstractTransitionJs() {
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

function isRuntimeSource(sourcePath) {
  return sourcePath.includes('/enums/') ||
    sourcePath.includes('/validators/') ||
    sourcePath.endsWith('abstracts/abstract.validator.ts') ||
    sourcePath.includes('/transitions/') ||
    sourcePath.endsWith('abstracts/abstract.transition.ts') ||
    sourcePath.includes('/decorators/');
}

function sanitizeCopiedImports(packageRoot, copiedFiles, targetBySourcePath) {
  for (const file of copiedFiles) {
    for (const extension of ['d.ts', 'js']) {
      const targetRelativePath = `src/${file.targetPath}.${extension}`;
      const target = path.resolve(packageRoot, targetRelativePath);
      const originalContent = fs.readFileSync(target, 'utf8');
      let content = originalContent;
      const strict = extension === 'd.ts' || isRuntimeSource(file.sourcePath);

      if (isAbstractTransitionSource(file.sourcePath)) {
        content = extension === 'd.ts'
          ? sanitizeAbstractTransitionDts()
          : sanitizeAbstractTransitionJs();
      } else if (isTransitionSource(file.sourcePath)) {
        content = extension === 'd.ts'
          ? sanitizeTransitionDts(content)
          : sanitizeTransitionJs(content);
      }

      const rewritten = rewriteImports(
        content,
        file.sourcePath,
        file.targetPath,
        targetBySourcePath,
        strict,
      );

      if (rewritten !== originalContent) {
        fs.writeFileSync(target, rewritten);
        console.log(`  sanitized ${targetRelativePath}`);
      }
    }
  }
}

function generateRepositoryTypes(packageRoot) {
  const target = path.resolve(packageRoot, 'src/repository.types.d.ts');
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

  fs.writeFileSync(target, content);
  console.log('  generated src/repository.types.d.ts');
}

function flattenExports(node, publicPrefix, sourceBase, output = []) {
  if (Array.isArray(node)) {
    output.push({
      publicPath: publicPrefix,
      sources: node.map((sourcePath) => {
        const resolvedSourcePath = resolveSourcePath(sourceBase, sourcePath);
        return {
          sourcePath: resolvedSourcePath,
          targetPath: resolveTargetPath(publicPrefix, resolvedSourcePath),
        };
      }),
    });
    return output;
  }

  if (!node || typeof node !== 'object') {
    throw new Error(`Invalid manifest node at ${publicPrefix}`);
  }

  for (const [key, value] of Object.entries(node)) {
    flattenExports(value, `${publicPrefix}/${key}`, sourceBase, output);
  }

  return output;
}

if (typeof manifest.sourceRoot !== 'string') {
  throw new Error('manifest.sourceRoot must be a string.');
}

if (!manifest.paths || typeof manifest.paths !== 'object' || Array.isArray(manifest.paths)) {
  throw new Error('manifest.paths must be an object.');
}

const sourceRoot = path.resolve(packageRoot, manifest.sourceRoot);
const exportGroups = [];

for (const [publicPath, node] of Object.entries(manifest.paths)) {
  assertPublicPath(publicPath);
  flattenExports(node, publicPath, publicPathBase(publicPath), exportGroups);
}

const copiedTargets = new Set();
const copiedFiles = [];
const targetBySourcePath = new Map();

for (const group of exportGroups) {
  for (const file of group.sources) {
    targetBySourcePath.set(
      normalizeImportSource(file.sourcePath),
      file.targetPath,
    );
  }
}

targetBySourcePath.set('infrastructure/abstracts/abstract.repository', 'repository.types');

for (const group of exportGroups) {
  for (const file of group.sources) {
    if (copiedTargets.has(file.targetPath)) {
      continue;
    }

    copyCompiledFile(sourceRoot, file.sourcePath, file.targetPath, 'd.ts');
    copyCompiledFile(sourceRoot, file.sourcePath, file.targetPath, 'js');
    copiedTargets.add(file.targetPath);
    copiedFiles.push(file);
  }
}

console.log('\nGenerating package utilities');
generateRepositoryTypes(packageRoot);

console.log('\nSanitizing copied imports');
sanitizeCopiedImports(packageRoot, copiedFiles, targetBySourcePath);

console.log(`\nRead ${exportGroups.length} public export group(s).`);
console.log(`Copied ${copiedTargets.size} source file(s).`);
NODE

find "$PACKAGE_ROOT/src" -name ".DS_Store" -delete 2>/dev/null || true

echo
echo "Sync complete"
