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
 *     dead drift.
 *   - ADDED `.edit-post-visual-editor__post-title-wrapper` and
 *     `[data-block-name="woocommerce/legacy-template"]` (were SCSS-only):
 *     genuine layout roots. Harmless in JS — a no-op when absent (the first
 *     is editor-only), correct when present.
 *   - DROPPED `[id="main"]`: it is a generic classic-theme wrapper, not a
 *     Nova/Anima marker. Making it a root collapses direct theme children into
 *     Nova's content track at desktop widths (GitHub #608).
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
	'.nb-content-layout-grid',
	'.nb-sidecar',
	'.nb-sidecar-area--content',
	'.wp-block-query',
	'.nb-supernova',
];

/** The list as a single comma-joined selector string. */
export const LAYOUT_GRID_SELECTOR = LAYOUT_GRID_CONTAINERS.join( ', ' );

/**
 * The PASS-THROUGH subset — the track-neutral containers that inherit the
 * parent grid's tracks instead of starting a new coordinate system.
 *
 * A pass-through never resizes a track var, so `grid-template-columns: subgrid`
 * is geometrically identical to its fallback re-declaration. A rail-less
 * Sidecar qualifies through the server-known rail-absence classes (BOTH rails
 * absent, not `sidebarPosition:none` — a three-area Sidecar must stay
 * track-declaring). `.nb-sidecar` itself and the roots that own the coordinate
 * system are deliberately absent.
 *
 * TWO SCSS consumers must agree on this list or nested chains break apart:
 *   - `_layout.scss` applies `nb-layout-subgrid-override` to it, which is
 *     scoped to direct children of `$nb-layout-grid-parents`.
 *   - `blocks/core/group/style.scss` repeats the override for direct children
 *     of a qualified Group pass-through. A Group is NOT in
 *     `LAYOUT_GRID_CONTAINERS` (it must never become a standalone layout root),
 *     so its own children cannot be reached by the scoped override above.
 *
 * `bin/generate-layout-containers.js` emits this as
 * `$nb-layout-passthrough-containers`; `layout-containers.test.js` pins the JS
 * and SCSS halves equal, exactly like the root union.
 */
export const LAYOUT_PASSTHROUGH_CONTAINERS = [
	'.nb-sidecar--no-left-rail.nb-sidecar--no-right-rail',
	'.nb-sidecar-area--content',
	'.wp-block-query',
	'.nb-supernova',
];

/** The pass-through list as a single comma-joined selector string. */
export const LAYOUT_PASSTHROUGH_SELECTOR = LAYOUT_PASSTHROUGH_CONTAINERS.join( ', ' );
