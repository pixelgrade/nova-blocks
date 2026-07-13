# Anima Collage Grid and Header Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use $executing-plans to implement this plan task-by-task.

**Goal:** Make Patch's collage a free, block-local Anima LT composition in Nova Cards Collection, with all ordinary Nova modifiers preserved and one standard WordPress Header Template Part optionally participating as its first grid item.

**Architecture:** Nova retains `layoutStyle: masonry` as the placement engine and adds a theme-registerable `layoutRecipe` axis. Anima registers `anima-collage`, owns its theme expression, and uses a shared `anima-collection-canvas` template context. Header integration keeps the real `core/template-part` Header before `<main>` and gives Nova an empty measured proxy inside masonry; Anima positions the real external header over that proxy in frontend and editor without cloning its markup.

**Tech Stack:** WordPress 7 block editor and FSE templates, React, PHP render filters, Nova collection JavaScript, Anima JavaScript/SCSS, Style Manager tokens, Node 22, Jest/`node:test`, standalone PHP contracts, WordPress Studio, Playwriter.

---

### Task 1: Registered layout-recipe contract in Nova

**Files:**
- Modify: `packages/block-editor/src/filters/with-collection-layout/attributes.json`
- Create: `packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipes.js`
- Create: `packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipes.test.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/style-tiles.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/style-tiles.test.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/index.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/settings-tab.js`

1. Write failing tests for normalization of theme-provided recipes, selection identity, base-layout defaults, free/gated state, thumbnail kind, and capability flags.
2. Run `node --test packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipes.test.js` and confirm the missing module/behavior failure.
3. Implement a pure normalizer and selector. Built-in tiles select `layoutRecipe: ""`; a registered recipe selects its `baseLayout` plus stable recipe id and only applies its defaults at selection time.
4. Make `StyleTiles` merge `settings.collectionLayoutRecipes` after built-ins. Render Anima Collage with the existing Masonry thumbnail and no Plus badge.
5. Derive Settings visibility from the recipe's base layout/capabilities so Items Gap, fit columns, aspect ratio, hover, and Motion links remain available.
6. Run the focused tests, then existing style-tile/free-preset tests.

### Task 2: Persisted recipe classes and modifier compatibility

**Files:**
- Modify: `packages/block-library/src/blocks/supernova/edit.js`
- Modify: `packages/block-library/src/blocks/supernova/edit.test.js`
- Modify: `packages/block-library/src/blocks/supernova/init.php`
- Modify: `tests/php/collection-layout-recipe-contract.php`
- Modify: `lib/block-rendering.php`
- Modify: `lib/plus-gating.php`

1. Write failing JS/PHP tests requiring `nb-supernova--layout-recipe-anima-collage` in editor and frontend, while retaining `nb-supernova--layout-masonry`.
2. Require Collage to remain outside Plus gates and require existing `gridGap`, `verticalGapModifier`, `pile3dEffect`, hover, aspect-ratio, and scrolling attributes to survive normalization unchanged.
3. Add sanitized recipe classes and data attributes without treating a recipe as a new placement engine.
4. Keep 3D eligibility based on the underlying Masonry layout. Do not force gap, aspect ratio, hover, or 3D values after the initial recipe selection.
5. Run the focused PHP/JS tests and Plus-gating contracts.

### Task 3: External Header participant proxy in Nova

**Files:**
- Modify: `packages/block-editor/src/filters/with-collection-layout/attributes.json`
- Create: `packages/collection/src/components/external-layout-participant/index.js`
- Create: `packages/collection/src/components/external-layout-participant/index.test.js`
- Modify: `packages/collection/src/components/masonry-layout/index.js`
- Modify: `packages/collection/src/components/index.js`
- Modify: `lib/block-rendering.php`
- Modify: `tests/php/collection-external-participant-contract.php`
- Modify: `packages/collection/src/frontend/grid/handle-masonry-grid.js`
- Modify: `packages/collection/src/frontend/grid/masonry-layout-events.test.js`
- Modify: `packages/collection/src/frontend/load-more/extract-payload.js`
- Modify: `packages/collection/src/frontend/load-more/extract-payload.test.js`

1. Add `headerIntegration` with `standard` default and `grid-item` supported value.
2. Write failing tests for exactly one empty header proxy in Masonry editor/frontend, no proxy in standard mode, semantic data attributes, and exclusion from Load More payloads.
3. Render a proxy, never Header markup. Its measured height is supplied through `--nb-external-participant-height` and it participates in ordinary Masonry packing.
4. Dispatch layout events for one-column/reset layouts as well as multi-column layouts so Anima can release the Header to normal mobile flow.
5. Preserve multi-collection locality by associating proxy, collection, and canvas through the closest explicit context rather than a global selector.
6. Run focused collection and Load More tests.

### Task 4: Anima registers Collage and removes global activation

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/novablocks.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/inc/template-functions.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/style-manager/tweak-board.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/scss/utility/_collection-collage.scss`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/scss/utility/_collection-hover-reveal.scss`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/test/collection-layout-recipe-contract.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/test/patch-collage-token-contract.test.js`

1. Write failing contracts for an always-available free `anima-collage` recipe in Nova editor settings, including Masonry base layout, initial defaults, Header capability, and no entitlement metadata.
2. Register the recipe through `novablocks_block_editor_settings` without a Style Manager option.
3. Replace frontend and editor SCSS gates with `.nb-supernova--layout-recipe-anima-collage`; both runtimes must use the same block-local selector.
4. Make collage offsets consume `--nb-grid-spacing`/existing theme spacing tokens. Remove the forced `gridGap: 0` assumption.
5. Remove Collage ownership from body classes/Tweak Board. Do not add singular reading or Footer rules: those remain standard block/template compositions outside the collection recipe.
6. Keep color/type on `--sm-current-*`, `--theme-*`, `--nb-*`, and `@include apply-font(...)`; add no raw palette values or named fonts.
7. Run PHP and token/SCSS contracts.

### Task 5: Standard Header Template Part relationship

**Files:**
- Create: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/components/collection-header-integration/runtime.js`
- Create: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/components/collection-header-integration/runtime.test.js`
- Create: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/components/collection-header-integration/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/components/app.js`
- Create: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/editor/collection-header-integration.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/editor.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/scss/utility/_collection-collage.scss`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/test/collection-leading-items-contract.php`

1. Replace the old generated-header contract with failing tests proving no Anima Header descriptor/markup provider remains.
2. Write runtime tests using real DOM fixtures: one `core/template-part`-rendered Header before `<main>`, one explicit `.anima-collection-canvas`, one integrated Collage and proxy.
3. Bind only within the closest canvas; measure the real Header, size the proxy, then position the Header over its proxy after `nb:masonry-layout`/`nb:layout`.
4. On one column, missing proxy, disabled integration, removed collection, or JS failure, remove positioning and leave the standard Header in normal flow.
5. Keep Header markup in its original DOM location; do not clone, reparent, suppress, or duplicate it. Preserve editor selection through the actual Template Part and List View.
6. Add an editor control with `Standard header` and `Include header in Collage`, visible only for recipes advertising Header integration.
7. Verify two canvases/collections bind locally and an empty collection still has a stable Header relationship.

### Task 6: Archive title and semantic card affordances

**Files:**
- Modify: `/Users/georgeolaru/Studio/pixelgrade-integrated-check/data-seed/` or the canonical Patch seed source under `/Users/georgeolaru/Studio/patch-lt-starter/data-seed/`
- Modify: `lib/block-rendering.php`
- Modify: `tests/php/collection-post-card-markup-contract.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/scss/utility/_collection-hover-reveal.scss`

1. Move archive/search titles to an explicit `core/query-title` (or an explicit contextual editor preview block) in the starter template so frontend and Site Editor share structure.
2. Write failing card-markup tests requiring linked category, author, and date where URLs exist.
3. Render a real translatable Read More element in card markup and style it through Anima; remove CSS-generated English content.
4. Verify keyboard/accessibility behavior and that hover remains presentation-only.

### Task 7: Idempotent Patch starter migration

**Files:**
- Create: `/Users/georgeolaru/Studio/patch-lt-starter/data-seed/apply-patch-state.php`
- Modify: `/Users/georgeolaru/Studio/patch-lt-starter/data-seed/seed-templates-v2.php`
- Modify: `/Users/georgeolaru/Studio/patch-lt-starter/data-seed/seed-fonts.php`
- Create: `/Users/georgeolaru/Studio/patch-lt-starter/data-seed/remove-retired-patch-chrome.php`
- Create: `/Users/georgeolaru/Studio/patch-lt-starter/data-seed/verify-patch-state.php`

1. Write a verification script that fails against the legacy global-toggle/header-descriptor state.
2. Make one idempotent entry point apply palette, connected typography, frame, explicit template canvas/Header Template Part, Collage recipe attributes, query/pagination, and navigation projection; remove retired Single/Footer customizations without creating replacements.
3. Use Style Manager's public APIs and call `invalidate_all_caches()`, `wp_cache_flush()`, and details regeneration after state changes.
4. Re-running the seed must produce byte-identical templates/options and one Header Template Part per template.
5. Verify no Custom CSS, no `sm_collection_collage_grid`, no `anima-reading-layout`, no customized Patch Footer entity, and a valid Anima LT Footer fallback.

### Task 8: Build and integrated runtime verification

**Files:**
- Update generated Nova `build/` assets through the Node 22 build.
- Update Anima generated `dist/`, `style.css`, RTL files, POT, and the `anima-lt` install through `npm run build:wporg:install`.
- Update `.ai/patch-lt/architecture-audit.md`, `.ai/patch-lt/GOAL.md`, and recurring napkin guidance only after evidence exists.

1. Run Nova focused tests after every red-green cycle, then `npm test`, then the Node 22 full build.
2. Run Anima PHP/Node contracts, scripts/styles builds, then the wp.org install build.
3. Confirm `wp-code-mirror` sync hashes on `/Users/georgeolaru/Studio/pixelgrade-integrated-check` and restart Studio only if PHP bytecode is stale.
4. Test `http://localhost:8889/wp-admin/` with Pixelgrade Plus inactive for the free baseline; restore the site's initial plugin state after compatibility checks.
5. Use Playwriter sequential warm-up, then verify frontend, Site Editor, Post Editor, archive/search, singular, empty/multiple collections, and Load More.
6. Exercise Collage with nonzero Items Gap, fit columns, alternate aspect ratio, hover, scrolling effect, and 3D Grid where entitled; verify Collage neither unlocks nor disables them.
7. Compare the classic Patch demo at desktop, tablet, and mobile. Capture exact collection/header rectangles and close the known 1728/768/375 geometry gaps.
8. Run `git diff --check`, inspect only intended paths, restore all temporary site/plugin/content state, and use `$verification-before-completion` before any completion claim.
