# Nova Blocks - Build & Release Procedure

## Critical Warnings

- **MUST use Node 22 LTS** — Older versions (e.g. Node 14, 16) are no longer supported and will not work.
- **NEVER run `npm run build` or `npm run zip` with the wrong Node version** — it runs `preclean:packages` which DELETES the `build/` directory BEFORE building. If the build then fails, the plugin is left broken with no `build/` dir.
- **Always use `npm run zip`** (not `npx gulp zip` alone) — `npm run zip` runs the full build first via `prezip` hook. Running `gulp zip` alone skips the JS/CSS compilation and produces an incomplete zip (~270KB instead of ~1MB).
- **AGENTS.md, CLAUDE.md, and `.ai/` are excluded from zip** via `.zipignore` — keep it that way.
- **Do not launch the first Playwriter CLI commands in parallel** — if no relay is running yet, concurrent `playwriter` startup calls can race each other and one can fail with `EADDRINUSE` on `127.0.0.1:19988`.

## Playwriter Startup Guardrail

Before using Playwriter in a fresh session, warm up the relay with one sequential command first:

```bash
playwriter session list
```

or:

```bash
playwriter session new
```

Only after that first command completes should you run additional `playwriter` commands or parallel Playwriter work.

## Prerequisites

Switch Node version before any build command:
```bash
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
```

- `--legacy-peer-deps` is configured in `.npmrc` — no manual flag needed when running `npm install`.
- A postinstall patch script (`bin/patch-node22-compat.js`) runs automatically after `npm install` to patch webpack 4 for Node 22 compatibility.

## Development Verification Matrix

Choose checks by the behavior changed; release-only checks are not required for every edit.

| Change | Required verification |
| --- | --- |
| Pure JS helper or editor component | Targeted Jest/Node test, then `npm test` before commit |
| PHP rendering or registration | Targeted standalone PHP contract, then `npm test` |
| Editor interaction or CSS | Automated contract plus a live Site Editor check; also test the Post Editor when the rule is shared |
| Frontend rendering or token behavior | Automated contract plus computed runtime values on `style-manager.local` |
| Runtime JS/CSS bundle | `npm run build` under Node 22 and a live browser reload |
| Release artifact | Full release checklist below, beginning with `npm run zip` under Node 22 |

`npm test` is the canonical local suite. `bin/run-fast-tests.cjs` discovers and groups standalone PHP contracts, native `node:test` files, ordinary Jest tests, and the narrow compatibility Jest bucket. Use `npm run test:wp` only for contracts that need a live WordPress install.

## Build & Create Release Zip

Single command does everything (build + zip):
```bash
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
cd /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks
npm run zip
```

What `npm run zip` does internally:
1. `prezip` → `npm run build` → `build:packages` (compiles packages) + `wp-scripts build` (webpack)
2. `gulp zip`:
   - **build:folder** — rsync to `../build/nova-blocks/`, applies `.zipignore`, removes empty folders
   - **build:fix** — fixes permissions and line endings
   - **build:translate** — replaces text domains, generates `.pot` file
   - **build:zip** — creates `../nova-blocks-X-Y-Z.zip` and deletes the temporary build folder

Output zip location: **one directory up** from the plugin (e.g., `.../plugins/nova-blocks-2-1-10.zip`)

### Verify the zip before releasing:

`npm run zip` now verifies its own artifact: the `postzip` hook runs `bin/verify-zip.sh` (size floor, `build/` present, private-file deny-list, version-field sync, `.pot` + text-domain replacement, freshness) and fails the whole command on a bad zip. Run `bash bin/verify-zip.sh [zip]` to re-verify any artifact standalone. The manual commands below remain as the reference for what is being checked:
```bash
# Should be ~1MB (NOT ~270KB — that means build/ is missing)
ls -la ../nova-blocks-X-Y-Z.zip

# Must contain build/ directory
unzip -l ../nova-blocks-X-Y-Z.zip | grep "nova-blocks/build/" | head -3

# Must NOT contain AGENTS.md, CLAUDE.md, or .ai/
unzip -l ../nova-blocks-X-Y-Z.zip | grep -E "AGENTS.md|CLAUDE.md|\\.ai/"

# Check version fields
unzip -p ../nova-blocks-X-Y-Z.zip nova-blocks/readme.txt | grep -E "Tested up to|Stable tag"
unzip -p ../nova-blocks-X-Y-Z.zip nova-blocks/nova-blocks.php | grep "Version:"
```

## Release on GitHub

```bash
# 1. Commit and push
git add <files>
git commit -m "message"
git push origin main

# 2. Create/move the version tag
git tag -f X.Y.Z
git push origin X.Y.Z --force

# 3. Create new release OR update existing
# New release:
gh release create X.Y.Z ../nova-blocks-X-Y-Z.zip --title "X.Y.Z - Title" --notes "Release notes"
# Update existing release asset:
gh release upload X.Y.Z ../nova-blocks-X-Y-Z.zip --clobber
# Update release notes:
gh release edit X.Y.Z --notes "Updated notes"

# 4. Verify
gh release view X.Y.Z
```

GitHub repo: `git@github.com:pixelgrade/nova-blocks.git`

## Private Local Files

- Keep `AGENTS.md` as the canonical shared instruction file for both Codex and Claude.
- Keep `CLAUDE.md` as a thin shim to `@AGENTS.md` so the shared instructions stay in one place.
- Keep shared private agent instructions in `AGENTS.local.md`.
- Keep vendor-neutral private research notes, plans, and issue writeups in `.ai/`.
- Keep tool-specific distilled working memory in `.claude/napkin.md`.
- Keep local env values in `.env.local`.
- Do not commit those private overlays; commit only the `*.example` files.
- Use `bin/bootstrap-private` to hydrate the private overlays after cloning the public repo.

Clone/bootstrap flow for a fresh machine:
```bash
# 1. Clone the public repo
git clone git@github.com:pixelgrade/nova-blocks.git
cd nova-blocks

# 2. Point the repo at your private companion repo
git config --local novablocks.privateRepo git@github.com:<you>/nova-blocks-private.git

# 3. Hydrate the private local overlays
bin/bootstrap-private
```

What gets pulled from the private repo when present:
- `AGENTS.local.md`
- `.ai/`
- `.claude/napkin.md`
- `.env.local`

If you prefer to keep an explicit local checkout of the private repo, use:
```bash
git clone git@github.com:<you>/nova-blocks-private.git /path/to/nova-blocks-private
bin/bootstrap-private --source-dir /path/to/nova-blocks-private
```

## Documentation Ownership

- Keep `AGENTS.md` limited to stable, mandatory procedures and architectural contracts that affect future changes.
- Keep detailed research, implementation rationale, environment snapshots, and active project status in `.ai/`; link to those documents instead of copying them into this file.
- Keep `.claude/napkin.md` as a short action-oriented runbook for surprising, recurring gotchas. It is not an issue timeline or a second copy of `AGENTS.md`.
- Put public implementation designs in `docs/plans/`; put private or cross-repo working material in `.ai/`.
- Date environment-specific observations and verify them at runtime before relying on them. Avoid undated words such as “currently” for facts that can change with WordPress, Studio, or plugin versions.

## Cross-Stack Strategy Decisions

When Nova Blocks work changes or settles product, business, positioning, monetization, Pixelgrade.com, Pixelgrade LT vs Pixelgrade Plus, starter strategy, or cross-repo LT stack architecture, save the durable decision in the central strategy folder:

`/Users/georgeolaru/Developer/pixelsite/master-strategy/`

Before making or changing those decisions, read:
- `/Users/georgeolaru/Developer/pixelsite/master-strategy/README.md`
- `/Users/georgeolaru/Developer/pixelsite/master-strategy/decisions/README.md`
- `/Users/georgeolaru/Developer/pixelsite/master-strategy/pixelgrade-lt-stack-strategy.md`
- `/Users/georgeolaru/Developer/pixelsite/master-strategy/source-index.md`

For any meaningful cross-stack strategy decision:
- Create a dated note in `/Users/georgeolaru/Developer/pixelsite/master-strategy/decisions/YYYY-MM-DD-short-title.md` using the template in `decisions/README.md`.
- Update `source-index.md` when the decision depends on a new source document, repo note, issue, or public reference.
- Update `pixelgrade-lt-stack-strategy.md` only when the decision changes the central strategy.

Keep implementation details, tests, and repo-specific plans in the repo where the work happens. Keep cross-stack product direction, positioning, monetization, and Pixelgrade.com strategy in `pixelsite/master-strategy`.

## Issue Resolution Workflow

When a GitHub issue is fixed and the work is considered done:

1. Commit the source changes and push them to GitHub unless the user explicitly says not to push yet.
2. Add a comment on the issue summarizing the root cause, the fix, and how it was verified.
3. Close the issue after the push and comment are done.
4. Assign the issue to the requested milestone if the user asked for one.

## Release on WordPress.org SVN

### SVN Authentication
- Username: `babbardel`
- SVN URL: `https://plugins.svn.wordpress.org/nova-blocks`
- **Credentials are NOT stored in this public repo.** WordPress.org now requires an **app-specific SVN password** (the old account password no longer authenticates SVN commits). Keep `babbardel`'s SVN app password in the gitignored private overlay `.env.local` (synced from the `nova-blocks-private` repo):
  ```
  NOVABLOCKS_WPORG_SVN_USER=babbardel
  NOVABLOCKS_WPORG_SVN_APP_PASSWORD=svn_…   # app password from wordpress.org → Account → SVN
  ```
- **IMPORTANT:** `--non-interactive` fails (`svn: E215004: Authentication failed`). Use `--force-interactive` and feed the app password + username over stdin (svn prompts Password → Username; `--username` sets the default). Load the creds from the private overlay first:
  ```bash
  set -a; . ./.env.local; set +a   # run from the plugin dir, before any `cd`
  printf '%s\n%s\n%s\n' "$NOVABLOCKS_WPORG_SVN_APP_PASSWORD" "$NOVABLOCKS_WPORG_SVN_USER" "$NOVABLOCKS_WPORG_SVN_APP_PASSWORD" \
    | svn ci -m "message" --username "$NOVABLOCKS_WPORG_SVN_USER" --force-interactive --no-auth-cache
  ```

### Steps

```bash
# 1. Checkout (only needed once, reuse /tmp/nova-blocks-svn if it exists)
svn co https://plugins.svn.wordpress.org/nova-blocks /tmp/nova-blocks-svn

# 2. Replace trunk contents with release zip
rm -rf /tmp/nova-blocks-svn/trunk/*
unzip -o ../nova-blocks-X-Y-Z.zip -d /tmp/nova-blocks-extract
cp -r /tmp/nova-blocks-extract/nova-blocks/* /tmp/nova-blocks-svn/trunk/
rm -rf /tmp/nova-blocks-extract

# 3. Handle new/deleted files
cd /tmp/nova-blocks-svn
svn add trunk/* --force
svn status trunk | grep '^!' | awk '{print $2}' | xargs -I{} svn rm {}

# 4. Review and commit trunk (creds loaded from .env.local — see SVN Authentication above)
svn status trunk
printf '%s\n%s\n%s\n' "$NOVABLOCKS_WPORG_SVN_APP_PASSWORD" "$NOVABLOCKS_WPORG_SVN_USER" "$NOVABLOCKS_WPORG_SVN_APP_PASSWORD" \
  | svn ci -m "Release X.Y.Z - description" --username "$NOVABLOCKS_WPORG_SVN_USER" --force-interactive --no-auth-cache

# 5. Update or create version tag (delete old tag if it exists from previous release)
svn rm tags/X.Y.Z 2>/dev/null  # ignore error if tag doesn't exist yet
svn cp trunk tags/X.Y.Z
printf '%s\n%s\n%s\n' "$NOVABLOCKS_WPORG_SVN_APP_PASSWORD" "$NOVABLOCKS_WPORG_SVN_USER" "$NOVABLOCKS_WPORG_SVN_APP_PASSWORD" \
  | svn ci -m "Tagging version X.Y.Z" --username "$NOVABLOCKS_WPORG_SVN_USER" --force-interactive --no-auth-cache
```

## Version Bump Checklist

When changing the version number, update ALL of these:
- [ ] `nova-blocks.php` → `Version: X.Y.Z`
- [ ] `nova-blocks.php` → `Tested up to: X.Y`
- [ ] `readme.txt` → `Stable tag: X.Y.Z`
- [ ] `readme.txt` → `Tested up to: X.Y`

## Preset Engine (Managed Bundles)

All preset UIs must run through `packages/block-editor/src/preset-engine/`. Full rationale, family status, and migration history live in `.ai/design-customization/preset-engine.md` and `.ai/design-customization/stage-3a-preset-semantics.md`.

- A preset definition is `{ id, version, managedAttributes, values }`, immutable per `id+version` — a changed published preset gets a NEW version, never a rewrite.
- Applying a preset is ONE `setAttributes()` patch: write every declared value, clear (`undefined`) every managed attribute the preset omits, preserve everything outside the managed set. No follow-up attribute writes (one-step undo is guaranteed by this shape).
- The active preset is DERIVED by comparing attributes (normalized through registered defaults) against definitions — never stored. No match = the first-class **Custom** state. Do not add a stored `presetId`: attributes carry no provenance, so stored identity drifts into a lie on the first fine-tune.
- Every definition in a family must declare the SAME `managedAttributes` set — it is the family's complete capability domain.
- Structural attributes may be managed only when every definition writes an explicit value; never clear structure implicitly.

## Cards Collection Hover Border Integration

- The Pile-style hover frame for stacked Cards Collection blocks is driven by the `overlayFilterHoverBorderSize` attribute under `Overlay Filter`, not by page transitions.
- Keep the style attribute wiring in sync in both `packages/utils/src/overlay-filter/index.js` and `lib/block-rendering.php` so editor and frontend receive the same `--nb-overlay-filter-hover-border-size` CSS variable.
- The `Hover Border Size` control should only appear when the collection has more than one column and media is visible.
- The current `Hover Border Size` UI range is `0–20`.
- The current `Content Area Padding` control step is `10`, not `25`.

## Header Template-Part Pattern Compatibility

- The Header Design picker includes every pattern registered for `core/template-part/header`, including third-party patterns.
- Nova augments saved `core/group`, `core/columns`, and `core/separator` markup. Plain WooCommerce header patterns therefore revalidate as invalid after Nova filters run.
- `lib/block-patterns.php` unregisters the five incompatible WooCommerce header patterns on `init` priority `100`. Adjust the list only through `novablocks/incompatible_template_part_patterns`.
- If this compatibility strategy changes, preserve existing serialized core-block markup through deprecations or migrations; do not merely expose patterns that still fail validation. Historical context: issue `#494`, commit `7e0b0902`.

## Separator Styling Architecture

- The parent `.wp-block-separator` owns `color`; lines, arrows, and the center symbol inherit through `currentColor`.
- Keep the PHP and JS Color Signal class generation aligned. The default remains `colorSignal: 3`, `paletteVariation: 12`.
- `--nb-accent-color` bridges to Style Manager's contextual `--sm-current-accent-color`; do not introduce a parallel hardcoded separator color.
- If the lines and symbol diverge, inspect theme rules that color `.c-separator__symbol` directly. Fix the parent inheritance contract in `packages/core/src/blocks/core/separator/_style.scss` rather than compensating each child.
- Styles remain `is-style-simple` (lines), `is-style-decorative` (symbol), and `is-style-blank` (spacer). Historical Anima override details belong in the relevant issue or `.ai/` investigation, not this runbook.

## Logo Loading Transition System (Anima Theme)

This system is owned entirely by the Anima theme, not Nova Blocks. Keep only these cross-repo invariants here:

- Page transition style and logo loading style are independent controls; preserve all four combinations.
- For Progress Bar loading, add `is-loaded` only after `playProgressBarComplete()` resolves or the logo disappears before the fill covers it.
- Snap.svg and Cycling Images assets remain conditional on the selected loading style.
- Implementation architecture, timing tables, option IDs, and build instructions live with Anima in `plans/2026-03-22-decouple-transition-and-loading-styles.md`, `plans/2026-03-22-logo-loading-transition-styles.md`, and `plans/2026-02-25-page-transitions-design.md`.

## Editor CSS: Iframed vs Non-Iframed Post Editor

- The Site Editor is iframe-based. The Post Editor's iframe/rendering mode depends on WordPress version, post type, rendering mode, and meta boxes; do not encode a site snapshot as a universal rule.
- Inspect the actual document before debugging. In an iframe, `editor-styles-wrapper` is commonly on `<body>`; in a non-iframe editor it may be on an inner `<div>`.
- Shared editor CSS must target `.editor-styles-wrapper`, never `body.editor-styles-wrapper`, unless the rule is intentionally iframe-only.
- Verify shared editor CSS in both the Site Editor and Post Editor. Record the observed rendering mode with environment/version-specific findings.
- In stacked-card editor layout, preserve `overflow: hidden` and `min-width: 0` on `.nb-supernova-item__frame`; they prevent implicit-grid max-content expansion from extreme aspect ratios.
- Keep the `page` post type excluded from `NovaBlocks_Comments_Post_Meta`; active meta boxes can affect Post Editor rendering mode.

## WordPress Studio (localhost:8888, verified 2026-07-17)

- The Studio site at `localhost:8888` serves from `/Users/georgeolaru/Studio/pile-lt-starter/`
- Uses the `wp-code-mirror` plugin to rsync the Anima theme and plugins (Nova Blocks, Style Manager, Pixelgrade Care, wp-code-mirror) from the `style-manager.local` site
- Config at `/Users/georgeolaru/Studio/pile-lt-starter/wp-content/uploads/wp-code-mirror/config/`
- Studio's WASM PHP runtime may cache bytecode — restart via `studio site stop --path /Users/georgeolaru/Studio/pile-lt-starter && studio site start --path /Users/georgeolaru/Studio/pile-lt-starter` to pick up PHP changes
- Studio CLI: `/usr/local/bin/studio`
- Treat these paths and ports as an environment snapshot: verify the running site and code-mirror target before changing files.

## Full Release Checklist

- [ ] Source changes committed and pushed to `main`
- [ ] Build completes without errors (`npm run zip` with Node 22)
- [ ] Zip verified: `bin/verify-zip.sh` passed (runs automatically as `postzip`)
- [ ] Fresh-site smoke passed: `bash bin/run-fresh-site-smoke.sh` (fresh WP install + stack activation + seam assertions; needs the Local site running)
- [ ] GitHub: tag updated, release asset uploaded, release notes current
- [ ] SVN: trunk committed, tag created/updated
- [ ] Verify on https://wordpress.org/plugins/nova-blocks/ (may take a few minutes to update)
