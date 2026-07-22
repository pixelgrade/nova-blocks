/**
 * THE single source of truth for the Nova layout-grid container list
 * (Sidecar Subgrid Modernization, Task 5.1).
 *
 * These are the containers that instantiate the Nova layout grid — the roots
 * that genuinely start the coordinate system plus the pass-throughs that
 * re-declare it (fallback) / inherit it via `subgrid` (modern). Their direct
 * aligned children are grid items that participate in the break system.
 *
 * TWO consumers must agree on this list or the engine drifts:
 *   - SCSS: the `nb-layout-root` union and `$nb-layout-grid-parents` (the
 *     subgrid scope). At build time `bin/generate-layout-containers.js` reads
 *     THIS array and emits `packages/base-styles/_layout-containers.generated.scss`
 *     defining `$nb-layout-grid-parents`; `_content-layout.scss` imports it and
 *     `_layout.scss` interpolates it.
 *   - JS: `break-align.js` `getContentBlocksArray()` collects aligned children
 *     of these containers to measure break placement.
 *
 * `layout-containers.test.js` (node:test) asserts the JS array here is
 * byte-for-byte the same set as the generated SCSS list, so the two can never
 * drift again.
 *
 * RECONCILIATION (Task 5.1) of the pre-unification drift the napkin recorded
 * (`getContentBlocksArray` vs the `_layout.scss :is()` union):
 *   - DROPPED `.wp-site-blocks` (was JS-only): it wraps the template parts
 *     (header / main / footer) as its direct children, never aligned content
 *     blocks, so it never contributed a single aligned child to break-align —
 *     dead drift. The frontend layout root there is `[id="main"]`.
 *   - ADDED `.edit-post-visual-editor__post-title-wrapper`,
 *     `[data-block-name="woocommerce/legacy-template"]`, `[id="main"]` (were
 *     SCSS-only): genuine layout roots. Harmless in JS — a no-op when absent
 *     (the first is editor-only), correct when present.
 * The canonical set is the SCSS `nb-layout-root` union (the authoritative
 * definition of "a Nova layout grid"), now shared by both runtimes.
 *
 * NOTE: `.wp-block-group` is deliberately NOT in this shared list. A Group is a
 * subgrid PASS-THROUGH (Task 5.2) but not a track-declaring root, and its
 * fallback stays the max-width layout — so it is handled only in
 * `core/group/style.scss` under `@supports (grid-template-columns: subgrid)`,
 * never added to the root union.
 */

export const LAYOUT_GRID_CONTAINERS = [
	'.is-root-container',
	'.edit-post-visual-editor__post-title-wrapper',
	'.wp-block-post-content',
	'.wp-block-template-part',
	'[data-block-name="woocommerce/legacy-template"]',
	'[id="main"]',
	'.nb-content-layout-grid',
	'.nb-sidecar',
	'.nb-sidecar-area--content',
	'.wp-block-query',
	'.nb-supernova',
];

/** The list as a single comma-joined selector string. */
export const LAYOUT_GRID_SELECTOR = LAYOUT_GRID_CONTAINERS.join( ', ' );
