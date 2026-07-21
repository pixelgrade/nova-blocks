# Sidecar Layout Engine Modernization Design

Date: 2026-07-21
Status: Validated (design review with George, 2026-07-21)

## Goal

Modernize the Sidecar layout engine from a convention-enforced "fake subgrid" (every container re-declares one identical viewport-wide named-line grid and must overlap its parent perfectly) to a browser-enforced real `subgrid` architecture, replace the measurement-only break system with a layered hybrid (server-known → CSS `:has()` → measured `auto`), extend the block model to at most three areas driven by curated Layout Recipes on the Preset Engine, and fix every defect found in the 2026-07-21 system study — all without any saved-content migration and with an evidence-based ship decision from a before/after Studio comparison harness.

## Context: what the current system is

- One 13-track named-line grid (`fs ws frs gs cs gcs cc gce ce ge fre we fe`) defined in `packages/base-styles/mixins/_content-layout.scss`, re-instantiated on ~10 container types (`packages/core/src/scss/_layout.scss`), each pinned `grid-column: fs / fe !important` so all levels overlap pixel-perfectly and share one coordinate system.
- Semantic placement aliases (`--block-content-start/end`, `--block-wide-*`, `--block-full-*`, `--block-left/right-*`) as inherited custom properties; context (sidebar position, nesting) overrides them.
- `break-align-left/right` classes added by runtime JS collision detection (`packages/utils/src/break-align.js`) let wide/full blocks extend over the sidebar and left/right-aligned blocks jump into sidebar tracks (`grid-row-end: span 5`).
- Sidecar saves only `InnerBlocks.Content`; PHP renders the wrapper (`packages/block-library/src/blocks/sidecar/init.php`). Nothing layout-specific lives in saved markup — this is why no migration is ever needed.

Known defects (full study in the 2026-07-21 session; the ledger below carries every fix): unenforced perfect-overlap invariant, CLS from runtime-only break classes, order-dependent single-pass measurement with per-element reflow thrash, measurement before webfonts settle, `span 5` magic number, phantom sidebar tracks defining content width by subtraction, JS/SCSS container-list drift, one-shot overlap-set collection, sticky-fade leaving an invisible click-intercepting element, dead code, near-zero test coverage of the geometry logic.

## Decisions (settled in design review)

1. **Break model: hybrid.** Server-known and CSS-known cases stop involving JS; measurement survives only as the `auto` mode of an explicit per-block control (Auto / Always / Never), defaulting to Auto so existing content keeps its behavior.
2. **Block model: at most three areas, recipe-driven.** Content plus optional left and right rails. Geometry (rail existence, widths, asymmetric gutters, sticky, per-area type scale) is owned by a Layout Recipes family on the Preset Engine. No raw column-builder UI — generalized N-columns was explicitly rejected because Sidecar's moat is the shared site-aligned coordinate system with cross-area escape semantics, not "columns" (which core Columns already owns as isolated flex boxes).
3. **Migration: rewrite-first, evidence-based ship.** Develop the rewrite on a branch, compare against a baseline on the `sidecar-lab` Studio site; ship in-place under `@supports` if parity holds, gate behind a v2 flag only if real content breaks.

## Engine architecture

Split the current mixin into two roles:

- **`nb-layout-root`** — declares the 13 tracks and computes `nb-layout-settings`. Applied only where a coordinate system genuinely starts: root container, post content, template parts, and the intentionally independent small-scale instances (e.g. `supernova-item__inner-container`, which builds a card-internal mini grid and must NOT align with the page).
- **`nb-layout-passthrough`** — `grid-template-columns: subgrid` spanning `fs / fe`. Applied to Sidecar, sidecar areas, query, page-level supernova, and (later phase) Group. Line names inherit natively; the perfect-overlap convention becomes a browser guarantee, and the `!important` pin plus per-container track math disappear.

Deliberate carry-overs:

- The content area still spans `fs / fe` — subgrid children can only address lines inside the spanned range, and content children must be able to escape to full-bleed.
- The rail area stays a block container on desktop (rail children do not participate in the alignment system), spanning its region of the parent grid.
- Only columns are subgridded; row behavior (`grid-row: 1` areas, `grid-auto-rows: min-content`) is unchanged.

Fallback: all modern rules ship inside `@supports (grid-template-columns: subgrid)`; the current re-declared-grid math remains verbatim as the fallback, so pre-subgrid browsers render exactly today's output.

Track derivation flips: `--nb-content-width` becomes the source of truth and rail track widths derive from it, replacing today's phantom-track subtraction (`_layout.scss:32-36`) that reserves invisible sidebar tracks on every page and forced Anima to reverse-engineer its reading column. Roots without rails zero the rail track vars explicitly. This is a cross-repo coordination point with Style Manager tokens and Anima (`--nb-container-width-setting`, `--nb-content-inset-setting`).

## Block model and Layout Recipes

- `sidecar-area` gains `areaName: sidebar-left | sidebar-right`. Legacy `areaName: sidebar` remains valid forever: PHP render and the editor map it to a side from the parent's `sidebarPosition` at runtime. No content migration.
- The Sidecar block accepts up to three areas: optional left rail, content, optional right rail. Existing two-area content is untouched.
- Geometry is a Preset Engine family (`sidecar-layout`). Managed attributes: rail existence and widths, asymmetric gutter offsets, sticky, content/rail font scales. Per the engine contract: every recipe declares the full managed set, the active recipe is derived by attribute comparison (never stored), applying is one `setAttributes()` patch, changed published recipes get new versions.
- Launch recipes: **Centered**, **Right Rail**, **Left Rail**, **Hive** (narrow meta rail · content · rail — the classic Hive magazine layout in one block), **Offset Editorial** (asymmetric empty gutter with no left area).
- The insert-time variation picker becomes the recipe picker. Nesting keeps working (pass-throughs chain) but stops being the only route to creative layouts.

## Break system (hybrid, cheapest layer first)

1. **Server-known (PHP, zero runtime).** A rail that doesn't exist is known at render: PHP emits `nb-sidecar--no-left-rail` / `nb-sidecar--no-right-rail`, flipping that side's break vars unconditionally. The most common case (no sidebar) stops involving JS.
2. **CSS-known (`:has()`, zero JS).** A rail that exists but has no element children: `.nb-sidecar:has(> .nb-sidecar-area--sidebar-right:not(:has(*)))` flips the side's break vars. `:not(:has(*))` rather than `:empty` so whitespace text nodes don't defeat it. Covers the Hive empty-column case with zero layout shift.
3. **Geometry (JS, only `auto` with a partially filled rail).** Aligned blocks inside a Sidecar context get an inspector control — *Extend over sidebar: Auto / Always / Never* — serialized as a class, so Always/Never are SSR-stable. The measurement module is rewritten: runs after `document.fonts.ready` and image settle; batched read-phase/write-phase (no per-element class-toggle reflows); a second fixpoint pass only if any class changed; overlap sets re-collected on DOM change via one delegated observer. The editor reuses the module gated on structural signals, not full-canvas mutation storms.

Sticky rail: the fade gains `visibility: hidden` and `pointer-events: none` (transitioned), and the RAF scroll loop is replaced with an IntersectionObserver between the sticky item and broken blocks.

## Pull-outs (alignleft/right into the rail)

Floats cannot work today because every block is a grid item. Staged honestly:

- **Now:** keep grid placement but kill the `span 5` magic number — in Auto mode the measurement JS computes the real row span from following siblings; Always/Never apply here too; the `+`-sibling adjustment rules get tests.
- **Later (explicitly out of v1 scope):** PHP-side flow segmentation — group consecutive plain blocks into a single grid item that is a real flow context where floats work at any height. The only genuine fix until CSS exclusions exist; deserves its own design round because of editor parity.

## Fixes ledger (all ship with the rewrite)

- `pointer-events: none` + `visibility: hidden` on the hidden sticky block (`sidecar/style.scss:99`).
- Overlap sets re-collected on DOM change (`handle-overlapping-on-scroll/index.js:72` one-shot today).
- Measurement after `document.fonts.ready` + image settle (same bug class as commit `e04f2aea`).
- JS/SCSS container list unified into one generated constant consumed by both at build time (today `getContentBlocksArray` and the `_layout.scss` `:is()` list have drifted).
- Duplicated `break-align-*` var rules deduplicated (`_layout.scss:42` vs `sidecar/style.scss:36`).
- Dead `wouldOverlap` import removed; vestigial `--body-font-size` / `--offset-addon` removed; `:root` font-size tokens moved out of the block stylesheet.
- Content-width derivation inverted (see Engine architecture).
- Test coverage where there was none: standalone PHP render contract for Sidecar/area, placement + `:has()` behavior tests, measurement-module tests under the project's jsdom caveats (use `style.removeProperty`, stub `getComputedStyle`).

## Verification: the sidecar-lab harness

A fresh Studio site via the pxg-smoke/pxgmirror flow (`sidecar-lab`), fixtures generated programmatically so both engines render identical content:

- **Matrix:** rails {none, left, right, both, nested-Hive, deep-nested} × widths {S, M, L} × sticky {on, off} × content {wide image, full image, alignleft, alignright, Group-wrapped wide, captioned image, long/short rail} × break {auto, always, never}.
- **Baseline first:** current engine → Playwriter headless screenshots at 375 / 1024 / 1440 / 2000px plus structural probes: computed `gridTemplateColumns`, per-block rect left/right symmetry, break-class inventory, dumped to JSON. Judge computed values, never var declarations.
- **After each phase:** same suite; pixel-diff + probe-diff; intentional changes annotated, everything else must match. CLS via CDP trace with throttled webfonts on the worst fixture. Editor smoke in both Site Editor and Post Editor.
- **Ship decision from evidence:** parity → in-place under `@supports`; real breakage → v2 flag until parity closes.

## Phases

1. Harness + baseline on `sidecar-lab`.
2. Subgrid engine rewrite → compare → ship decision.
3. Hybrid break system + fixes ledger.
4. Three areas + Layout Recipes + Hive fixture.
5. Group pass-through + container-list unification.
6. Strategy decision note in `master-strategy/decisions/` + docs.

## Strategy tie-in (Pixelgrade LT)

Sidecar is defensible as the **layout contract of the LT design system**, not as a block: (1) a shared named-line editorial grid with cross-area escape is an engine competitors can't lift from markup (nothing layout-specific is saved); (2) Anima's reading column already IS the sidecar tracks — naming that officially yields a coherence promise ("your whole site sits on one grid") that fits LT positioning; (3) recipes are curation-over-configuration applied to layout — engine + core recipes free (LT must be credible standalone), deeper editorial recipes as Plus design depth; (4) the classic magazine identities (Hive, Pile) become reproducible LT starters and a legacy-customer landing path; (5) "the WordPress editorial layout engine" is an unclaimed position. A dated decision note goes to `master-strategy/decisions/` once phase 6 lands.
