# @merkaly/api

Shared contracts (types, enums, validators and transitions) of the Merkaly API, published to npm
and used by the frontends (admin, store, dashboard). The source of truth is
`apps/api.merkaly.io`: nothing here is written by hand except `manifest.json`.

## How it is built

1. `pnpm build` in `apps/api.merkaly.io` produces its `dist/`.
2. `pnpm sync` here copies the `.d.ts`/`.js` files listed in `manifest.json` from that `dist/` into
   `src/`, rewriting imports between them.
3. `pnpm build` here (`build.ts`) generates `dist/` with one barrel per entry point.

### `manifest.json`

- `paths` maps each public entry point to the api files it exports (relative to `api/dist/src`).
- **A leaf that is an array becomes an entry point with a barrel**: `"@/order": { "sale": [...] }`
  is importable as `@merkaly/api/order/sale`. Intermediate maps do not generate one, so
  `@merkaly/api/order` alone does not resolve: add a leaf (`type`, `home`...) instead.
- New domains need their group here (e.g. `"@/dashboard": { "home": [...] }`) or their types
  never reach the package.

### After `pnpm sync`

TypeScript emits `from "x"` with double quotes; the committed files use single quotes. Normalize
only the `from` clauses (inline `import("mongoose")` types keep double quotes):

```bash
find src -name '*.d.ts' -exec perl -pi -e 's/(\bfrom )"([^"]+)"/$1\x27$2\x27/g' {} +
```

If `git status` then shows files you did not mean to change, the api has unsynced changes: review
them before committing.

## Testing in a frontend before publishing

```bash
rm node_modules/@merkaly/api
ln -s ../../../../packages/api node_modules/@merkaly/api   # from the app folder
rm -rf node_modules/.cache/vite                           # then restart its dev server
```

Restore with `pnpm add @merkaly/api@<version>` once published. Frontends always use the
published package, never local types.

## Release

1. Merge the contracts PR (after the api PR it depends on).
2. On `master`: bump `version` in `package.json` and commit `chore: release @merkaly/api vX.Y.Z`.
3. Push the tag `vX.Y.Z`: `release.yml` typechecks, lints, builds and publishes to npm. The tag
   must match `package.json`.
4. Bump the dependency in each frontend (`chore(deps): bump @merkaly/api to X.Y.Z`).

**Versioning**: patch by default (new contracts, fields or fixes); minor only when something a
frontend uses is removed or changes shape.
