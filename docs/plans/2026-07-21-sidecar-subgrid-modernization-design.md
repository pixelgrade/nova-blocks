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
- **`nb-layout-passthrough`** — `grid-template-columns: subgrid`. **Narrowed by Task 2.1 evidence (permanent, not deferred):** the pass-through role applies only to *track-neutral* containers — `.nb-sidecar-area--content`, `.nb-sidecar--sidebar-none`, `.wp-block-query`, page-level `.nb-supernova`, and (later phase) Group. **Positioned sidecars stay track-declaring**: their width classes resize track vars locally, and subgrid inheritance cannot express nested layouts with different same-side rail widths at different depths (proven by the nested-deep fixture — custom properties don't flow upward). The modern rule is parent-scoped — `@supports (grid-template-columns: subgrid) { :is($nb-layout-grid-parents) > … }` — because `subgrid` on a non-grid-item computes to `none` and would collapse the layout (Anima's template-level Sidecar sits inside a non-grid `.wp-site-blocks`). Roots KEEP the `grid-column: fs/fe !important` pin: a root such as `.wp-block-post-content` can itself be a grid item of the template Sidecar's content area.

Deliberate carry-overs:

- The content area still spans `fs / fe` — subgrid children can only address lines inside the spanned range, and content children must be able to escape to full-bleed.
- The rail area stays a block container on desktop (rail children do not participate in the alignment system), spanning its region of the parent grid.
- Only columns are subgridded; row behavior (`grid-row: 1` areas, `grid-auto-rows: min-content`) is unchanged.

Fallback: all modern rules ship inside `@supports (grid-template-columns: subgrid)`; the current re-declared-grid math remains verbatim as the fallback, so pre-subgrid browsers render exactly today's output.

Track derivation flips — **as built in Task 2.2 (`315c718f`), which supersedes this paragraph's original naive reading**: a per-container `--nb-sidecar-content-width` is derived from the actual container minus rail budgets, and both content half-tracks hang off it (algebraic identity with the old per-side subtraction proven in review, exact in both `max()` regimes). The `:root` `--nb-content-width` token is deliberately byte-unchanged: **a custom property substitutes its `var()` refs at the element where it is DECLARED**, so consuming the root token per-container would bake in root defaults and silently discard Sidecar width classes (iteration 1 proved this with a +93.75px overflow the harness caught). Zeroing rail vars on rail-less roots is DEFERRED to Task 3.1: zeroed rails move the `gs`/`ge` lines that `--block-left-end`/`--block-right-start` anchor broken aligned blocks to, so it is safe only after the rail-absence classes re-anchor the break vars. Cross-repo consequence: Anima's reading-column workaround (napkin) stays necessary until the zeroing ships; if Anima/SM ever need a *live* per-context content width, that requires an element-level bridge var — the `:root` token cannot express it.

### Ship decision — Task 2.1 (2026-07-21): in-place `@supports`, conditional

Evidence (worktree commit `55afe4f0`, adversarially reviewed): fallback CSS byte-identical to the old engine except one 426-byte `@supports` rule in `build/core/style.css`; harness diff baseline↔subgrid exit 0 across all 68 captures with zero rect, break-class, element-set, or display differences (only kind-scoped `gtc` readout annotations, which structurally cannot mask geometry); 50/68 screenshots byte-identical, the remainder sub-pixel vertical drift within the documented tolerance. No v2 flag.

Conditions carried forward: (1) **editor smoke in Site Editor AND Post Editor before Phase 3 builds on the engine** — `build/core/style.css` provably ships to editor canvases via `enqueue_block_assets`; (2) **query-loop and supernova fixtures at the next re-baseline** — those two pass-through consumers currently rest on track-neutrality reasoning alone; (3) this section records the positioned-sidecar narrowing.

Known hazards (recorded, not blocking): third-party CSS that defeats `display: grid` on a container-union member (e.g. `#main { display: flex }` at (1,0,0) specificity) makes subgrid-capable browsers degrade *harder* (collapse) than fallback browsers (self-declared grid) — unreachable on the Anima stack, plausible on arbitrary wp.org installs. Subgrid items participate in the parent's *intrinsic* track sizing — the below-lap auto-track redistribution was proven geometry-neutral here, but it is the mechanism most likely to bite in overflow/min-content edge cases.

## Editor canvas preview (added 2026-07-21, George's directive)

The editor canvas is narrower than the frontend viewport (inspector sidebars eat width), so viewport-keyed breakpoints collapse the Sidecar to one column far too early — the desktop layout becomes un-previewable while the frontend is fine. Requirement: with the **Desktop device preview active, the editor renders the multi-column sidecar layout** (proportionally narrower tracks are acceptable); Tablet/Mobile previews key the collapse. Candidate mechanism: drive the collapse from the editor's device-preview state (and/or container-relative sizing) instead of raw canvas media queries, clamping rail widths so two-column geometry survives narrow canvases. Verify in both Site Editor and Post Editor.

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

## Pull-outs (alignleft/right: wrap, anchor, and rail escape)

Floats cannot work on grid items, so the grid engine can only produce *bands* (a paragraph squeezed beside the image for its whole length, dead space under the image). Scope expanded 2026-07-21 at George's request (text-wrap and mid-start asks, with screenshots on the right-medium and left-small fixtures):

- **Baseline behavior (unchanged default):** grid placement, but the `span 5` magic number dies — in Auto mode the measurement JS computes the real row span from following siblings; Always/Never apply; the `+`-sibling adjustment rules get tests.
- **Text wrap: Beside / Around (new, opt-in per aligned block).** *Around* uses **flow segmentation**: PHP groups the aligned block plus the following run of plain flow blocks (paragraphs, lists, headings) into ONE grid item spanning the content range that is a normal flow container; inside it the image gets a real CSS float, so text wraps beside AND continues under it. Rail escape still composes: track widths are known CSS vars, so a computed negative outer margin pulls the float over the rail (the classic Hive technique). Editor parity caveat, accepted for v1: the editor cannot re-wrap sibling blocks, so it shows the *Beside* approximation while the frontend renders the true wrap — stated in the control's help text; deeper editor parity is its own later design round.
- **New placements, not a modifier (George's direction, 2026-07-21).** Core Left/Right stay untouched as the defaults with today's semantics (content-edge anchor, auto-break over the rail). The mid-start behavior ships as *additional named placements* in the alignment vocabulary — working names **Left Content / Right Content**: the pull-out is bounded by the content column's center line (`cs → cc` / `cc → ce`, lines the nested-sidecar rules already use), with text taking the other half and, in *Around* mode, wrapping underneath (`width: 50%` + negative outer margin when floated). Serialized as a Nova placement class; core's `align` attribute is never repurposed.
- **Alignment-vocabulary rethink is a Phase 4b design gate.** Before implementing, the full set (Left, Right, Wide, Full + new placements — possibly explicit rail placements replacing today's emergent "jump into the rail") gets one dedicated design round with George. Curated named placements only, never raw offset fields; *Text wrap* stays an orthogonal modifier applying to any left/right-family placement.
- **Fixture sequencing:** wrap/anchor fixtures are NEW capabilities with no old behavior to preserve; they get added only after the Phase 2 ship decision re-establishes the canonical baseline on the new engine (the differ's completeness check forbids growing the manifest mid-comparison).

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
