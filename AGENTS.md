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

## Cards Collection Hover Border Integration

- The Pile-style hover frame for stacked Cards Collection blocks is driven by the `overlayFilterHoverBorderSize` attribute under `Overlay Filter`, not by page transitions.
- Keep the style attribute wiring in sync in both `packages/utils/src/overlay-filter/index.js` and `lib/block-rendering.php` so editor and frontend receive the same `--nb-overlay-filter-hover-border-size` CSS variable.
- The `Hover Border Size` control should only appear when the collection has more than one column and media is visible.
- The current `Hover Border Size` UI range is `0–20`.
- The current `Content Area Padding` control step is `10`, not `25`.

## Header Template-Part Pattern Compatibility

### WooCommerce header patterns in the Header Design picker
- The Site Editor `Template Part > Design` picker includes any registered patterns with `blockTypes: core/template-part/header`, including plugin patterns.
- WooCommerce registers header presets under these slugs:
  - `woocommerce-blocks/header-centered-menu`
  - `woocommerce-blocks/header-distraction-free`
  - `woocommerce-blocks/header-essential`
  - `woocommerce-blocks/header-large`
  - `woocommerce-blocks/header-minimal`

### Why they were removed
- Nova augments `core/group`, `core/columns`, and `core/separator` save output with extra `sm-*` classes, `data-*` attributes, and `--nb-*` inline styles.
- WooCommerce header patterns serialize plain core markup, so in the Header Design preview iframe they revalidate as invalid and show `Block contains unexpected or invalid content.`
- The chosen fix was the smallest practical one: hide those broken presets instead of trying to make Nova's custom core block serialization backward-compatible with third-party static pattern HTML.

### Current implementation
- Nova unregisters the five WooCommerce header pattern slugs in `lib/block-patterns.php` on `init` priority `100`.
- The list can be adjusted via the `novablocks/incompatible_template_part_patterns` filter.
- This decision was implemented while fixing issue `#494` in commit `7e0b0902` (`Hide incompatible WooCommerce header patterns`).

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

## Logo Loading Transition System (Anima Theme)

Two independent controls in **Customizer → Style Manager → Motion**:
- **Page Transition Style**: how pages swap during AJAX navigation (Border Iris or Slide Wipe)
- **Logo Loading Style**: what shows on first site visit (Progress Bar or Cycling Images)

All 4 combinations work. Both are AJAX page transition systems using Barba.js v2 + GSAP 3.

### Page Transition Styles

**Border Iris** (default) — ported from the [Pile theme](https://github.com/pixelgrade/pile):
- Full-screen border overlay using `border-width` animation (iris wipe)
- Page-to-page: border grows inward → swap content → border collapses outward (0.6s each, `quart.inOut`)
- Card-expand variant: border positioned on clicked card → fills inward (0.4s) → scales to viewport (0.5s, `power3.inOut`)

**Slide Wipe** — ported from the [Fargo theme](https://github.com/pixelgrade/fargo):
- Horizontal slide wipe using `translateX` on `.c-loader` and `.c-loader__mask` in opposite directions
- Slide animation: 1s `Quint.easeInOut` (`cubic-bezier(0.860, 0.000, 0.070, 1.000)`)
- Page-to-page: loader slides in from left → swap content → loader slides out right

### Logo Loading Styles

**Progress Bar** (default) — ported from Pile:
- White logo centered on accent-colored overlay inside a dark semi-transparent box (`rgba(0,0,0,0.2)`, `padding: 30px 60px`)
- Uses the transparent header logo (`anima_transparent_logo`) when available, falls back to custom logo with `filter: brightness(0) invert(1)` to make it white
- Two copies of the logo: hidden one inside `.border-logo-background` (sizes the box via `visibility: hidden` + `display: block` + `max-width: none`), visible one in `.border-logo` (on top)
- White fill bar slides left-to-right inside the dark box as a pseudo-progress indicator (CSS `fillMe` keyframe, 10s)
- Minimum display: 2.5s (CSS intro takes 0.8s for box growth + logo fade, then ~1.7s of visible fill progress)
- Dismiss: fill snaps to 100% (0.3s, `circ.in`) → logo blends into white fill naturally → `is-loaded` added → box collapses (`scaleY→0`) → border collapses to 0
- **Critical timing**: `is-loaded` body class must be deferred until AFTER `playProgressBarComplete()` finishes, because the CSS rule `.is-loaded .border-logo .logo { opacity: 0 }` would instantly hide the logo before the fill covers it

**Cycling Images** — ported from Fargo:
- Large SVG letter (first character of site title, or custom symbol via "Transition Symbol" field) centered on the overlay
- Image patterns from random post featured images cycle inside the SVG letter every 300ms using **Snap.svg** (loaded from CDN)
- The SVG letter uses the site's heading font: `font-family: var(--theme-heading-1-font-family, var(--sm-font-primary, 'Roboto', sans-serif))`, `font-size: 180px`, `font-weight: bold`
- Minimum display: 0.9s (3 image swaps at 300ms each), max: 5s
- Dismiss depends on page transition style (border collapse or slide out)

### The 2×2 Matrix

| Page Transition | Logo Loading | Overlay element | Dismiss | Min display |
|---|---|---|---|---|
| Border Iris | Progress Bar | `.c-page-transition-border` | Fill snaps → box collapses → border collapses | 2.5s |
| Border Iris | Cycling Images | `.c-page-transition-border` | Stop patterns → hide logo → border collapses | 0.9s |
| Slide Wipe | Progress Bar | `.c-loader` | Fill snaps → slides out right | 2.5s |
| Slide Wipe | Cycling Images | `.c-loader` | Slides out right | 0.9s |

PHP outputs the overlay element based on page transition style, and the content inside based on logo loading style (`anima_render_loading_content()`). JS reads both settings from `animaPageTransitions.pageTransitionStyle` and `animaPageTransitions.logoLoadingStyle`.

### Architecture

All page transitions code lives in the **Anima theme**, not in Nova Blocks or Style Manager:

| Component | File | Purpose |
|-----------|------|---------|
| Customizer UI | `anima/inc/integrations/style-manager/motion.php` | Toggle + page transition radio + logo loading radio + symbol text |
| PHP backend | `anima/inc/integrations/page-transitions.php` | Matrix markup, helpers, random images, body classes |
| JS entry | `anima/src/js/page-transitions.js` → `components/page-transitions/index.js` | Barba init, 2×2 matrix dispatch |
| Progress Bar loading | `components/page-transitions/loading-animation.js` | Fill bar + logo animations |
| Border Iris transitions | `components/page-transitions/transitions.js` | Barba transition objects (border + card-expand) |
| Slide Wipe loader | `components/page-transitions/slide-wipe-loader.js` | Snap.svg patterns, slide show/hide, wait-for-load timing |
| Slide Wipe transitions | `components/page-transitions/slide-wipe-transitions.js` | Barba transition objects using slide wipe |
| Shared utils | `components/page-transitions/utils.js` | Asset sync, body classes, component reinit |
| Admin bar sync | `components/page-transitions/admin-bar.js` | WordPress admin bar after AJAX |
| SCSS | `anima/src/scss/components/_page-transitions.scss` | Border overlay, slide loader, cycling images logo |
| Asset registration | `anima/functions.php` | GSAP, Snap.svg (conditional on cycling_images), Barba (bundled) |

### Key Implementation Details

- **Snap.svg** (`0.5.1`) is only loaded when Cycling Images is active — registered conditionally as a dependency of `anima-page-transitions` based on `sm_logo_loading_style`.
- **Random images** are sourced from posts with featured images (up to 5), cached via transient for 1 hour (`anima_slide_wipe_random_images`). Falls back to pages if no posts have thumbnails.
- **Transition Symbol** option (`sm_transition_symbol`): accepts plain text (wrapped in SVG `<text>` at font-size 180) or raw inline SVG (passed through directly). Falls back to `anima_first_site_title_character()`.
- Body classes: `has-page-transitions`, `has-page-transitions--{border_iris|slide_wipe}`, `has-logo-loading--{progress_bar|cycling_images}`.
- **`is-loaded` timing is critical for Progress Bar**: must be deferred until after `playProgressBarComplete()` resolves, NOT added at init time. The CSS `.is-loaded .border-logo .logo { opacity: 0 }` fires instantly and would kill the logo before the fill bar covers it.
- `waitForLoadThen(callback, customMinTime)` accepts a custom minimum: 2.5s for Progress Bar, default 0.9s for Cycling Images.
- The hidden logo in `.border-logo-background` needs `visibility: hidden` + `display: block` + `max-width: none` + `opacity: 0` on the `<img>` to maintain its box model for sizing while being invisible and preventing flash during `scaleY` collapse.
- Migration from old `sm_loading_transition_style` option is handled by `anima_migrate_loading_transition_style_option()` on `after_setup_theme` priority 15.

### Customizer Options

| Option ID | Type | Default | Purpose |
|-----------|------|---------|---------|
| `sm_page_transitions_enable` | `sm_toggle` | `false` | Master on/off for page transitions |
| `sm_page_transition_style` | `sm_radio` | `border_iris` | Choose Border Iris or Slide Wipe |
| `sm_logo_loading_style` | `sm_radio` | `progress_bar` | Choose Progress Bar or Cycling Images |
| `sm_transition_symbol` | `text` | `''` (falls back to first site title character) | Custom symbol for Cycling Images |

### Building the Anima Theme

```bash
cd /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
npm run scripts        # JS only (webpack)
npx gulp compile:styles  # SCSS only
npm run build          # Full build + zip
```

### Design Plans

- Decouple plan: `anima/plans/2026-03-22-decouple-transition-and-loading-styles.md`
- Original implementation plan: `anima/plans/2026-03-22-logo-loading-transition-styles.md`
- Original page transitions design: `anima/plans/2026-02-25-page-transitions-design.md`

## Editor CSS: Iframed vs Non-Iframed Post Editor

### The two editor contexts

WordPress has two editing contexts with different CSS environments:
- **Site Editor** (`site-editor.php`): Always iframed. `<body>` has `editor-styles-wrapper` class. Clean CSS isolation.
- **Post Editor** (`post.php`): Non-iframed by default (`renderingMode: "post-only"`). `.editor-styles-wrapper` is on a `<div>`, not `<body>`. Admin CSS can bleed in.

### What enables the iframe in Post Editor

Three conditions must ALL be met:
1. `add_theme_support('editor-styles')` — Anima adds this unconditionally in `anima_setup()`
2. No active meta boxes — meta boxes force the editor out of iframe mode (they need direct DOM access)
3. The rendering mode must be `template-locked` or `all` (not `post-only`, which is the default for pages)

Even with all three, WP 7.0 still uses `post-only` mode for pages, so the Post Editor typically remains non-iframed.

### CSS selector implications

**Never use `body.editor-styles-wrapper` in editor-targeted CSS.** It only matches in the iframed Site Editor. Use `.editor-styles-wrapper` instead — it matches in both contexts.

The Anima theme's `src/scss/utility/_items-aspect-ratio.scss` handles editor CSS for Nova Blocks cards. If adding new editor-only rules there, use `.editor-styles-wrapper` (not `body.editor-styles-wrapper`).

### Stacked card editor layout (editor-styles.scss)

Nova Blocks' `editor-styles.scss` (in `packages/block-library/src/blocks/supernova/`) overrides the frontend stacked card layout for the editor:
- Sets `position: static !important` on media wrapper and content (instead of `position: absolute` from `@include cover`)
- Uses CSS Grid `grid-area: 1/1` for stacking instead of absolute positioning
- Applies `aspect-ratio` based on `--nb-min-height-fallback` to control card height

**Critical constraint**: The `overflow: hidden` and `min-width: 0` on `.nb-supernova-item__frame` prevent a CSS Grid auto-sizing explosion where the implicit grid track expands to ~33 million pixels. This happens when the media wrapper's extreme `aspect-ratio` (from `minHeightFallback=0`) produces an enormous `max-content` width. Without these constraints, card content gets pushed millions of pixels off-screen.

### Discussion Extra Details meta box

The `NovaBlocks_Comments_Post_Meta` class registers a "Discussion Extra Details" meta box on any post type supporting comments. The `page` post type is excluded (`$excluded_post_types`) to avoid blocking the iframed Post Editor.

### Testing editor CSS changes

When testing editor CSS, always verify in BOTH:
1. Post Editor on a page (`post.php?post=X&action=edit`) — non-iframed
2. Site Editor on a template (`site-editor.php?canvas=edit&p=...`) — iframed

CSS that works in the Site Editor may not work in the Post Editor due to the `body.editor-styles-wrapper` selector issue.

## WordPress Studio (localhost:8888)

- The Studio site at `localhost:8888` serves from `/Users/georgeolaru/Studio/pile-lt-starter/`
- Uses the `wp-code-mirror` plugin to rsync the Anima theme and plugins (Nova Blocks, Style Manager, Pixelgrade Care, wp-code-mirror) from the `style-manager.local` site
- Config at `/Users/georgeolaru/Studio/pile-lt-starter/wp-content/uploads/wp-code-mirror/config/`
- Studio's WASM PHP runtime may cache bytecode — restart via `studio site stop --path /Users/georgeolaru/Studio/pile-lt-starter && studio site start --path /Users/georgeolaru/Studio/pile-lt-starter` to pick up PHP changes
- Studio CLI: `/usr/local/bin/studio`

## Full Release Checklist

- [ ] Source changes committed and pushed to `main`
- [ ] Build completes without errors (`npm run zip` with Node 22)
- [ ] Zip verified: ~1MB, has `build/`, no `CLAUDE.md`, correct version fields
- [ ] GitHub: tag updated, release asset uploaded, release notes current
- [ ] SVN: trunk committed, tag created/updated
- [ ] Verify on https://wordpress.org/plugins/nova-blocks/ (may take a few minutes to update)
