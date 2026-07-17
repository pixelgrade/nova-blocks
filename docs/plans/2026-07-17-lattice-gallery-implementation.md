# Lattice Gallery Collection Implementation Plan

> **For Codex:** Use the executing-plans workflow to implement this plan task by task, preserving the red-green-refactor and verification checkpoints.

**Goal:** Deliver the Anima `anima-lattice` Cards Collection recipe with a reusable Nova Lattice placement strategy, deterministic hole-free packing, editor/frontend parity, responsive behavior, tokenized styling, and production/browser verification.

**Architecture:** Nova keeps `layoutStyle: classic` and adds a normalized recipe-level `layoutStrategy: lattice`. A pure occupancy engine feeds a DOM controller on the frontend and a React layout component in the editor. Anima registers the recipe, its defaults and control capabilities, and owns all gallery presentation under the active recipe class.

**Tech stack:** WordPress PHP filters and dynamic rendering, Gutenberg React, JavaScript occupancy-grid engine, Jest/jsdom, standalone PHP contracts, Anima SCSS, Style Manager design tokens, Node 22, WordPress Studio, Playwriter.

---

### Task 1: Normalize and project the recipe strategy

**Nova files:**
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipes.test.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/layout-recipes.js`
- Modify: `tests/php/collection-layout-recipe-contract.php`
- Modify: `lib/collection-layout-recipes.php`
- Modify: `packages/block-library/src/blocks/supernova/init.php`

1. Add failing JS and PHP assertions for a whitelisted `lattice` strategy, unknown-strategy fallback, and block-local `data-layout-strategy` projection.
2. Run the focused tests under Node 22 and confirm RED for the missing field/attribute.
3. Add `layoutStrategy` to both normalizers. Accept only `lattice`; normalize all other values to an empty string.
4. Resolve the active registered recipe during server rendering and emit the derived data attribute only when it advertises a supported strategy.
5. Re-run the focused tests and existing recipe contracts.

### Task 2: Build the pure Lattice packing engine

**Nova files:**
- Create: `packages/collection/src/frontend/grid/lattice-layout-engine.js`
- Create: `packages/collection/src/frontend/grid/lattice-layout-engine.test.js`

1. Write failing tests for every class-to-span mapping, priority collisions, responsive clamping, topmost-leftmost placement, content-order first refusal, the three-card pull-forward boundary, width-first/height-second demotion, deterministic output, and no skipped interior cells.
2. Confirm the test fails because the engine module is missing.
3. Implement pure helpers for class normalization, preferred span selection, fit checks, first-gap discovery, demotion generation, and queue placement.
4. Keep the engine independent of DOM APIs. Return placement records containing the item, source index, row, column, row span, column span, and whether it was demoted or pulled forward.
5. Re-run the engine test until GREEN, then refactor names/branches without changing output.

### Task 3: Add the frontend Lattice controller

**Nova files:**
- Create: `packages/collection/src/frontend/grid/handle-lattice-grid.js`
- Create: `packages/collection/src/frontend/grid/handle-lattice-grid.test.js`
- Modify: `packages/collection/src/frontend/grid/index.js`

1. Add jsdom tests for strategy dispatch, source-order capture, placement-order DOM, explicit grid styles, exact row-height calculation, two/one-column responsive behavior, resize/mutation relayout, detailed-before-generic events, and destroy/reset.
2. Confirm RED before adding the controller or dispatch branch.
3. Implement the controller using owner-window APIs, `ResizeObserver` with resize fallback, and `MutationObserver`. Preserve source indices in a `WeakMap` and guard controller re-entry during intentional DOM moves.
4. Compute `rowHeight = columnWidth * 4 / 3 + captionHeight`, using computed gap/custom-property values with safe defaults.
5. Dispatch `nb:lattice-layout`, then `nb:layout`. Restore source order and inline styles on destroy or strategy change.
6. Re-run focused grid tests plus Masonry/Parametric event tests.

### Task 4: Render Lattice in the editor

**Nova files:**
- Create: `packages/collection/src/components/lattice-layout/index.js`
- Create: `packages/collection/src/components/lattice-layout/index.test.js`
- Modify: `packages/collection/src/components/index.js`
- Modify the smallest collection-layout selector that currently selects Classic/Masonry/Parametric.
- Modify: `packages/block-editor/src/components/post-card/index.js`
- Modify or create the focused PostCard class contract.

1. Write failing tests proving an active `layoutStrategy: lattice` selects Lattice while retaining `layoutStyle: classic`, reorders rendered cards by placement order, applies row/column styles, and adds `.is-sticky-post` from post data.
2. Implement a measured React layout wrapper that reuses the pure engine and responds to container width, item/class changes, and authored columns.
3. Ensure editor card expressions mirror frontend expressions, including sticky and format classes.
4. Use the same responsive column helper and placement output as the frontend controller.
5. Run the component and post-card tests plus existing collection component suites.

### Task 5: Expose recipe-aware controls and thumbnail

**Nova files:**
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/items-per-row-control.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/settings-tab.js`
- Modify/add focused control tests.
- Modify: `packages/block-editor/src/components/preset-cards/thumbnails.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/style-tiles.js`
- Modify: `packages/block-editor/src/filters/with-collection-layout/controls/composition/style-tiles.test.js`

1. Add failing tests for recipe `columnsRange`, hidden seam-breaking controls, and the `lattice` thumbnail kind.
2. Extend `ItemsPerRowControl` with optional min/max props while retaining the existing one-to-four defaults.
3. Derive range/visibility from the active recipe capabilities. Missing capabilities retain all current behavior.
4. Add a quiet modular-grid Lattice thumbnail and select it by normalized recipe metadata.
5. Re-run focused composition/control tests.

### Task 6: Register and style Anima Lattice

**Anima files:**
- Modify: `test/collection-layout-recipe-contract.php`
- Create: `test/lattice-gallery-token-contract.test.js`
- Modify: `inc/integrations/novablocks.php`
- Create: `src/scss/utility/_collection-lattice.scss`
- Modify: `src/scss/utility.scss`

1. Add failing contracts for `anima-lattice`, Classic base layout, Lattice strategy/thumbnail, five-column defaults, two-to-six range, fixed gallery defaults, and block-local tokenized SCSS import/scope.
2. Register the recipe through `novablocks_collection_layout_recipes` without gating or per-card options.
3. Scope all CSS to `.nb-supernova--layout-recipe-anima-lattice.nb-supernova--layout-classic` and its editor equivalent.
4. Set the `26px` grid gap and fixed caption band; fill card rectangles; crop images with `object-fit: cover` while leaving `object-position` untouched.
5. Style titles/dates, quote plates, no-media plates, and feature cards using semantic type/color/spacing tokens and accessible focus states.
6. Add tablet/touch adjustments and a one-column phone treatment without leaking outside the recipe.
7. Run Anima PHP and Node contracts under Node 22.

### Task 7: Verify builds and integrated behavior

**Generated files:**
- Nova `packages/*/build*`, root `build/`, `dist/`, and the verified plugin zip as dictated by the repository build.
- Anima compiled `style.css`, RTL/utility assets, `dist/`, and the wp.org build/install artifacts dictated by the repository build.

1. Run every focused test after its red-green cycle, then Nova `npm test` and all Anima Node/PHP contracts.
2. Run Nova's production build under Node 22; because package builds wipe root runtime assets, finish with the full `npm run build`. Run the zip verification if packaging is part of the final repository workflow.
3. Run Anima scripts/styles and wp.org build under Node 22. Inspect generated diffs for only expected Lattice and build changes.
4. Run `git diff --check` in both repositories and review status/diffs for unrelated changes.
5. Install the built artifacts into the controlled Studio test site using backups and the repository's local-sync guardrails.
6. With Playwriter, verify frontend and editor mixed-card fixtures at desktop, tablet, and phone widths. Measure the 26px gaps, shared shelf coordinates, fixed caption heights, responsive column counts, DOM/keyboard order, focal-point `object-position`, and recipe isolation.
7. Exercise Load More and a resize cycle. Confirm no interior holes and no stale inline state when switching away from Lattice.
8. Use the verification-before-completion workflow, commit with `Fixes #556` and `Fixes #567` in the respective repositories, push the verified changes, comment evidence on both issues, and close them only after the pushed commits are present.

## Verification record

- Nova `npm test`: all PHP contracts, Node contracts, Jest tests, and Jest compatibility tests passed.
- Nova `npm run zip`: production packages compiled and `verify-zip` passed with 422 build entries, fresh metadata, and no private/development files.
- Anima `node --test test/*.test.js`: 173 tests passed; the standalone PHP recipe contract and PHP syntax checks passed.
- Anima `npm run build:wporg`: production JavaScript, styles, translations, expanded WordPress.org assets, and the release zip built successfully.
- Editor QA: Lattice selected as a five-column Classic recipe; the columns control exposed its two-to-six range and seam-breaking controls stayed hidden.
- Frontend QA: measured 5/2/1 columns at 1600/900/390px, 26px seams, shared shelves, complete row-major occupancy before the trailing edge, placement-order DOM, and no browser console errors.
- Mutation QA: an appended sixteenth card relaid out automatically with no interior holes, retained visual/DOM order, and preserved a custom `object-position` value.
- Review follow-up: explicit editor source indices handle retained/new query-order changes, viewport resize is observed alongside container resize, and sticky titles stay single-line so the fixed date shelf cannot be clipped.
