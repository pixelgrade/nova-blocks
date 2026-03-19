# Nova Blocks - Build & Release Procedure

## Critical Warnings

- **MUST use Node 22 LTS** — Older versions (e.g. Node 14, 16) are no longer supported and will not work.
- **NEVER run `npm run build` or `npm run zip` with the wrong Node version** — it runs `preclean:packages` which DELETES the `build/` directory BEFORE building. If the build then fails, the plugin is left broken with no `build/` dir.
- **Always use `npm run zip`** (not `npx gulp zip` alone) — `npm run zip` runs the full build first via `prezip` hook. Running `gulp zip` alone skips the JS/CSS compilation and produces an incomplete zip (~270KB instead of ~1MB).
- **AGENTS.md and CLAUDE.md are excluded from zip** via `.zipignore` — keep it that way.

## Prerequisites

Switch Node version before any build command:
```bash
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
```

- `--legacy-peer-deps` is configured in `.npmrc` — no manual flag needed when running `npm install`.
- A postinstall patch script (`bin/patch-node22-compat.js`) runs automatically after `npm install` to patch webpack 4 for Node 22 compatibility.

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
```bash
# Should be ~1MB (NOT ~270KB — that means build/ is missing)
ls -la ../nova-blocks-X-Y-Z.zip

# Must contain build/ directory
unzip -l ../nova-blocks-X-Y-Z.zip | grep "nova-blocks/build/" | head -3

# Must NOT contain AGENTS.md or CLAUDE.md
unzip -l ../nova-blocks-X-Y-Z.zip | grep -E "AGENTS.md|CLAUDE.md"

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

- Keep machine-specific notes in `AGENTS.local.md` or `.claude/napkin.md`.
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
- `.claude/napkin.md`
- `.env.local`

If you prefer to keep an explicit local checkout of the private repo, use:
```bash
git clone git@github.com:<you>/nova-blocks-private.git /path/to/nova-blocks-private
bin/bootstrap-private --source-dir /path/to/nova-blocks-private
```

## Issue Resolution Workflow

When a GitHub issue is fixed and the work is considered done:

1. Commit the source changes and push them to GitHub unless the user explicitly says not to push yet.
2. Add a comment on the issue summarizing the root cause, the fix, and how it was verified.
3. Close the issue after the push and comment are done.
4. Assign the issue to the requested milestone if the user asked for one.

## Release on WordPress.org SVN

### SVN Authentication
- Username: `babbardel`
- Password: `TPjLCUPxK!J9uk01`
- SVN URL: `https://plugins.svn.wordpress.org/nova-blocks`
- **IMPORTANT:** `--non-interactive` does NOT work for commits. Must use `--force-interactive` with password piped via echo:
  ```bash
  echo 'TPjLCUPxK!J9uk01' | svn ci -m "message" --username babbardel --force-interactive
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

# 4. Review and commit trunk
svn status trunk
echo 'TPjLCUPxK!J9uk01' | svn ci -m "Release X.Y.Z - description" --username babbardel --force-interactive

# 5. Update or create version tag (delete old tag if it exists from previous release)
svn rm tags/X.Y.Z 2>/dev/null  # ignore error if tag doesn't exist yet
svn cp trunk tags/X.Y.Z
echo 'TPjLCUPxK!J9uk01' | svn ci -m "Tagging version X.Y.Z" --username babbardel --force-interactive
```

## Version Bump Checklist

When changing the version number, update ALL of these:
- [ ] `nova-blocks.php` → `Version: X.Y.Z`
- [ ] `nova-blocks.php` → `Tested up to: X.Y`
- [ ] `readme.txt` → `Stable tag: X.Y.Z`
- [ ] `readme.txt` → `Tested up to: X.Y`

## Separator Styling Architecture

The separator block (`core/separator`) uses `currentColor` inheritance for all its parts:
- `.c-separator__line` (left/right lines)
- `.c-separator__arrow` (left/right arrows)
- `.c-separator__symbol` (center icon/fleuron)

All parts inherit `color` from the parent `.wp-block-separator` element.

### CSS variable chain
- `--nb-accent-color` is defined as `var(--sm-current-accent-color, #203AB6)` in `packages/core/src/scss/_variables.scss`
- `--sm-current-accent-color` comes from Style Manager (the Anima theme's color system)
- They are effectively the same when Style Manager is active

### Nova Blocks separator styles (`packages/core/src/blocks/core/separator/_style.scss`)
- Default: `color: var(--nb-bg-color)` — all parts are background-colored
- Dark mode: `color: var(--nb-accent-color)` — all parts are accent-colored
- Inside hero/supernova: `color: var(--nb-accent-color)` — matches the theme's symbol override

### Anima theme overrides (compiled CSS, no SCSS source)
- **Frontend** (`dist/css/blocks/style.css`): Sets `.c-separator__symbol { color: var(--sm-current-accent-color) }` inside `.novablocks-hero__inner-container` — overrides ONLY the symbol
- **Editor** (`dist/css/blocks/editor.css`): Does NOT have this symbol override — so all parts match naturally
- **Components** (`dist/css/theme/components.css`): Sets `.novablocks-hero .c-separator__symbol { opacity: 1 }` (opacity only, no color)

### Key insight for future separator bugs
If lines/arrows and symbol colors mismatch, check whether the Anima theme is overriding `.c-separator__symbol` color without also overriding the parent `.wp-block-separator` color. The fix belongs in Nova Blocks' `_style.scss` since the theme CSS is pre-compiled with no SCSS source.

### Color Signal classes
Generated by `novablocks_get_color_signal_classes()` in PHP and `getColorSignalClassnames()` in JS:
- `sm-palette-{n}`, `sm-variation-{n}`, `sm-color-signal-{n}`
- Default separator: `colorSignal: 3`, `paletteVariation: 12`

### Separator markup (from Anima theme `inc/integrations/novablocks.php`)
```html
<div class="c-separator">
  <div class="c-separator__arrow c-separator__arrow--left"></div>
  <div class="c-separator__line c-separator__line--left"></div>
  <div class="c-separator__symbol"><span>{SVG}</span></div>
  <div class="c-separator__line c-separator__line--right"></div>
  <div class="c-separator__arrow c-separator__arrow--right"></div>
</div>
```

Separator styles: `is-style-simple` (lines only), `is-style-decorative` (symbol only), `is-style-blank` (hidden spacer).

## Full Release Checklist

- [ ] Source changes committed and pushed to `main`
- [ ] Build completes without errors (`npm run zip` with Node 22)
- [ ] Zip verified: ~1MB, has `build/`, no `CLAUDE.md`, correct version fields
- [ ] GitHub: tag updated, release asset uploaded, release notes current
- [ ] SVN: trunk committed, tag created/updated
- [ ] Verify on https://wordpress.org/plugins/nova-blocks/ (may take a few minutes to update)
