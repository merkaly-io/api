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

for (const group of exportGroups) {
  for (const file of group.sources) {
    if (copiedTargets.has(file.targetPath)) {
      continue;
    }

    copyCompiledFile(sourceRoot, file.sourcePath, file.targetPath, 'd.ts');
    copyCompiledFile(sourceRoot, file.sourcePath, file.targetPath, 'js');
    copiedTargets.add(file.targetPath);
  }
}

console.log(`\nRead ${exportGroups.length} public export group(s).`);
console.log(`Copied ${copiedTargets.size} source file(s).`);
NODE

find "$PACKAGE_ROOT/src" -name ".DS_Store" -delete 2>/dev/null || true

echo
echo "Sync complete"
