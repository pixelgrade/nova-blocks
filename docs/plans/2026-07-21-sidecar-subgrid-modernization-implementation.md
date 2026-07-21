# Sidecar Subgrid Modernization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Load the `pxg-smoke` skill before any `sidecar-lab` Studio-site work, and re-read `.claude/napkin.md` (worktree/Studio guardrails, Playwriter limits, jsdom caveats) before Phases 1 and 2.

**Goal:** Rewrite the Sidecar layout engine on real CSS subgrid with a layered hybrid break system, three-area recipe-driven block model, and every fix from the 2026-07-21 study — verified by a before/after harness on a dedicated Studio site.

**Architecture:** Per `docs/plans/2026-07-21-sidecar-subgrid-modernization-design.md` (the validated contract — read it first). Roots declare tracks; everything else passes through via `grid-template-columns: subgrid` inside `@supports`, with today's math as fallback. Break decisions layer PHP classes → `:has()` → measured `auto`. No saved-content migration ever; ship decision (in-place vs v2 flag) comes from harness evidence at the end of Phase 2.

**Tech Stack:** SCSS (webpack 4 pipeline, Node 22), PHP render callbacks, Preset Engine, Playwriter headless CLI, WordPress Studio (pxg-smoke flow), standalone PHP contracts + Jest/node:test via `npm test`.

**Working environment rules (apply to every task):**

- Build/test under Node 22: `export NVM_DIR="/Users/georgeolaru/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 22`.
- Phase 1 (harness) may run from this working tree — it changes no plugin source. Phases 2+ happen in a git worktree (superpowers:using-git-worktrees); install worktree builds into Studio only with the code-mirror watcher stopped (napkin: Shell & Command Reliability #9).
- Playwriter: warm the relay with a sequential `playwriter session list` before anything else; use headless sessions (`playwriter session new --browser headless`); batch all DOM probes into ONE `page.evaluate` (10s cap per `-e`).
- PHP contracts run standalone with the arm64 Local PHP: `"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/<name>-contract.php`.
- Every commit runs the fast suite via the pre-commit hook; keep it green.

---

## Phase 1 — Harness + baseline (no plugin changes)

### Task 1.1: Provision the `sidecar-lab` Studio site

**Files:** none in this repo (site lives under `~/Studio/`).

**Step 1:** Load the `pxg-smoke` skill and create a fresh stack site named `sidecar-lab` from style-manager.local code (Anima LT + Style Manager + Nova Blocks; Assistant/Plus not needed). Record the assigned port in `.ai/sidecar-lab/ENV.md` (dated, per AGENTS environment-snapshot rule).

**Step 2:** Verify the site serves and Nova Blocks is active: `studio wp --path=/Users/georgeolaru/Studio/sidecar-lab plugin get nova-blocks --field=status` → `active`. Install the session-persistence mu-plugin (napkin: Shell & Command Reliability #1).

### Task 1.2: Fixture generator

**Files:**
- Create: `bin/sidecar-lab/generate-fixtures.php` (committed — it is the reproducible spec of the test matrix)
- Create: `bin/sidecar-lab/README.md` (how to run, what it creates)

**Step 1:** Write the generator as a wp-cli `eval-file` script. It must be idempotent (delete pages whose slug starts with `sidecar-lab-` then recreate) and build serialized block markup from the matrix in the design doc. Core shape:

```php
<?php
// Run: studio wp --path=/Users/georgeolaru/Studio/sidecar-lab eval-file bin/sidecar-lab/generate-fixtures.php
$lorem  = '<!-- wp:paragraph --><p>Editorial body copy long enough to wrap on all viewports…</p><!-- /wp:paragraph -->';
$wide   = '<!-- wp:image {"align":"wide"} --><figure class="wp-block-image alignwide"><img src="%s" alt=""/></figure><!-- /wp:image -->';
$full   = '<!-- wp:image {"align":"full"} --><figure class="wp-block-image alignfull"><img src="%s" alt=""/></figure><!-- /wp:image -->';
$left   = '<!-- wp:image {"align":"left"} --><figure class="wp-block-image alignleft"><img src="%s" alt=""/></figure><!-- /wp:image -->';

function sidecar( $attrs, $content_inner, $sidebar_inner = null ) {
    $areas = '<!-- wp:novablocks/sidecar-area {"areaName":"content"} -->' . $content_inner . '<!-- /wp:novablocks/sidecar-area -->';
    if ( null !== $sidebar_inner ) {
        $areas .= '<!-- wp:novablocks/sidecar-area {"areaName":"sidebar"} -->' . $sidebar_inner . '<!-- /wp:novablocks/sidecar-area -->';
    }
    return '<!-- wp:novablocks/sidecar ' . wp_json_encode( $attrs ) . ' -->' . $areas . '<!-- /wp:novablocks/sidecar -->';
}
// Matrix loop: positions {none,left,right} x widths {small,medium,large} x sticky {0,1}
// x content variants {wide,full,alignleft,alignright,group-wrapped-wide,captioned}
// x rail fill {empty,short,long}; plus nested-hive and deep-nested pages.
// One page per combination class (group related combos on one page, one page per family),
// slug pattern: sidecar-lab-<family>-<variant>.
```

Fill in the full matrix exactly as listed in the design doc's Verification section; media uses one committed fixture image uploaded once by the script. Nested-Hive page: outer `sidebarPosition:left` sidecar (rail: one short paragraph + sticky test block) whose content area contains an inner `sidebarPosition:right` sidecar.

**Step 2:** Run it against `sidecar-lab`; verify with `studio wp … post list --post_type=page --s=sidecar-lab --format=count` (expect the matrix count).

**Step 3:** Commit the generator.

### Task 1.3: Probe + screenshot harness

**Files:**
- Create: `bin/sidecar-lab/capture.mjs` (committed)
- Output to: `.ai/sidecar-lab/<runlabel>/` (private overlay — NOT committed to the public repo)

**Step 1:** Write `capture.mjs`: for each fixture page and each viewport (375, 1024, 1440, 2000), drive a Playwriter headless session to (a) screenshot the page, (b) run ONE `page.evaluate` returning a JSON probe: for every `.nb-sidecar`, `.nb-sidecar-area, .alignwide, .alignfull, .alignleft, .alignright` element — computed `gridTemplateColumns` (on grids), `getBoundingClientRect()` left/right/width, and the break-class inventory. Wait for `document.fonts.ready` and image load before probing. Persist per-page JSON + PNG under `.ai/sidecar-lab/<runlabel>/`.

**Step 2:** Write the differ in the same file (`--diff runA runB`): rect deltas over 1px and any gridTemplateColumns or break-class change are reported per page/viewport; exit non-zero on unannotated differences (annotations file: `.ai/sidecar-lab/expected-changes.md`).

**Step 3:** Capture the baseline: `node bin/sidecar-lab/capture.mjs --run baseline`. Spot-check three screenshots by eye. Commit the harness (not the outputs).

---

## Phase 2 — Subgrid engine (worktree; ship decision at the end)

### Task 2.1: Mixin split with @supports

**Files:**
- Modify: `packages/base-styles/mixins/_content-layout.scss`
- Modify: `packages/core/src/scss/_layout.scss`
- Test: probe-diff via harness (CSS has no unit tests; the harness IS the test)

**Step 1:** Split the mixin. Keep `nb-content-layout-grid` as the compatibility entry that composes the two new roles:

```scss
// Root: declares the coordinate system. The ONLY place track math runs.
@mixin nb-layout-root {
  @include nb-layout-settings;
  display: grid;
  max-width: none;
  grid-template-columns: /* current 13-track template, unchanged */;
  grid-auto-rows: min-content;
}

// Pass-through: inherits the parent's tracks and line names.
// Fallback (pre-subgrid): re-declare identical tracks exactly as today.
@mixin nb-layout-passthrough {
  @include nb-layout-root; // fallback path == current behavior
  grid-column: fs / fe !important;

  @supports (grid-template-columns: subgrid) {
    grid-template-columns: subgrid;
    // Track math vars become inert here; line names come from the parent.
  }
}
```

Apply `nb-layout-root` to: `.is-root-container`, `.wp-block-post-content`, `.wp-block-template-part`, `.edit-post-visual-editor__post-title-wrapper`, `[id="main"]`, the WooCommerce legacy template, and `supernova-item__inner-container` (independent instance — must NOT subgrid). Apply `nb-layout-passthrough` to: `.nb-sidecar`, `.nb-sidecar-area--content`, `.wp-block-query`, page-level `.nb-supernova`.

**Step 2:** Build (`npm run build`, Node 22) and deploy to `sidecar-lab` with the code-mirror watcher stopped (napkin guardrail). Run `node bin/sidecar-lab/capture.mjs --run subgrid && node bin/sidecar-lab/capture.mjs --diff baseline subgrid`.

**Step 3:** Triage the diff. Expected: zero unannotated differences (fallback path is byte-identical; subgrid path must be geometrically identical). Iterate until clean or until differences are understood and annotated.

**Step 4: SHIP DECISION.** Parity → continue in-place. Real content breakage that can't be closed → wrap the subgrid block in a `.nb-layout-v2` opt-in class emitted by a Sidecar flag attribute, and record the decision + evidence in the design doc. Commit.

### Task 2.2: Content-width inversion — DONE as built (`315c718f`, reviewed)

As-built record (differs from the original step wording — do not re-derive the old plan): a per-container `--nb-sidecar-content-width` drives both content half-tracks; the `:root` `--nb-content-width` token is byte-unchanged because custom properties substitute `var()` refs at the DECLARING element (a per-container consumer of the root token discards width classes — proven and reverted in iteration 1). Rail-var zeroing on rail-less roots is deferred INTO Task 3.1 (zeroing moves the `gs`/`ge` anchor lines of broken aligned blocks; safe only after rail-absence classes re-anchor the break vars). Anima's reading-column workaround stays until then. Harness: baseline↔task22 exit 0, zero new diffs. Follow-ups owed: one-page editor re-smoke on the task22 build at Phase 3's next deploy (the recorded smoke covered the 55afe4f0 build); a header-nested-grid fixture at re-baseline (header rows override `--nb-wrapper-sides-spacings`, an uncovered substitution-context edge).

---

## Phase 3 — Hybrid break system + fixes ledger (TDD throughout)

### Task 3.0: Engine editor smoke (ship-decision condition — FIRST)

Redeploy the worktree's subgrid build to the lab site (watcher stopped, backup, restore protocol as in Task 2.1), then verify fixture pages in BOTH the Site Editor and Post Editor canvases: grid intact, no collapsed/misplaced sidecar areas beyond known canvas-width behavior, no console errors. Record findings in `.ai/sidecar-lab/`; restore the site. Also address Task 2.1 review minors: remove or document the unused `nb-layout-passthrough` mixin wrapper; tighten the rect-identity phrasing in `.ai/sidecar-lab/expected-changes.md` (horizontal bitwise-equal; vertical within documented tolerance).

### Task 3.0b: Editor canvas-width compensation (George's directive 2026-07-21)

Per the design doc's "Editor canvas preview" section: with the Desktop device preview active the editor must keep the multi-column sidecar layout instead of collapsing at the canvas's media-query width. Investigate device-preview-keyed collapse vs container-relative sizing; clamp rail widths for narrow canvases; verify in both editors (napkin: Editor CSS iframed vs non-iframed rules apply).

### Task 3.1 + 3.2: DONE as built (`18775c3c`, worktree) — see design doc "Break system" layers 1–2 for the as-built record (inherit-keyword flips, per-container `--nb-layout-rail-*` zeroing, valid single-`:has()` selector + content-var pin, no-JS proof). Contract test: `tests/php/sidecar-render-contract.php`. Harness gained `--no-js` (driver-side waits only — script-disabled pages never fire timers/rAF).

### Task 3.1 (original spec): PHP layer — rail-absence classes

**Files:**
- Test: `tests/php/sidecar-render-contract.php` (create — standalone contract, mock WP doubles per existing contracts)
- Modify: `packages/block-library/src/blocks/sidecar/init.php`

**Step 1:** Write the failing contract: rendering a sidecar with `sidebarPosition:none` (or a missing side) asserts `nb-sidecar--no-left-rail nb-sidecar--no-right-rail` in the wrapper classes; `sidebarPosition:right` asserts only `--no-left-rail`. Run with the arm64 Local PHP → expect FAIL. **Step 2:** Emit the classes in `novablocks_render_sidecar_block()`. **Step 3:** Contract passes; add the matching SCSS (`.nb-sidecar--no-right-rail { --block-wide-end: we; --block-full-end: fe; }` etc.), dedupe the `break-align-*` var rules into one partial while there. **Step 4:** Harness diff + commit.

### Task 3.2: CSS layer — `:has()` empty-rail breaking

**Files:**
- Modify: `packages/block-library/src/blocks/sidecar/style.scss`
- Test: harness fixture pages with empty rails (already in matrix)

`.nb-sidecar:has(> .nb-sidecar-area--sidebar:not(:has(*)))` (and per-side variants in Phase 4) flip the side's break vars. Verify on the empty-rail fixtures that break classes are no longer needed for them (probe shows full span with JS disabled — add a `--no-js` capture mode to the harness for this). Commit.

### Task 3.3: Per-block break control (Auto / Always / Never)

**Files:**
- Create: `packages/block-editor/src/filters/with-sidecar-break/index.js` (+ `attributes.json`)
- Modify: PHP save-filter path for the serialized class; register attribute for aligned core blocks (napkin: Execution & Validation #5 and #6 — save-filter changes need deprecations; every editor-written attribute must be registered)
- Test: Jest for the control's gating; PHP contract for class emission

**Steps:** TDD the attribute (`sidecarBreak: "auto" | "always" | "never"`, default `auto`), inspector control gated to aligned blocks inside a Sidecar context, serialized classes `nb-break-always` / `nb-break-never` consumed by SCSS. CRITICAL: because this touches `blocks.getSaveContent.extraProps` for core blocks, ship the deprecation that reproduces prior HTML, per napkin. Commit per sub-step.

### Task 3.4: Measurement v2 (`auto` mode only)

**Files:**
- Rewrite: `packages/utils/src/break-align.js` + `packages/core/src/frontend/break-align/handle-aligned-blocks/index.js`
- Test: `packages/utils/src/break-align.test.js` (create — jsdom caveats: stub `getComputedStyle`, use `style.removeProperty`)

**Steps (TDD):** (1) failing tests for: batched read-then-write (no interleaved reflow), fixpoint second pass when a class changes, skip of `always`/`never`/`:has()`-covered blocks, honest row-span computation replacing `span 5`. (2) Implement: gate on `document.fonts.ready` + image settle (promise chains — no async/await in frontend bundles, napkin), one delegated MutationObserver for overlap-set re-collection, remove dead `wouldOverlap` import. (3) Editor path reuses the module behind structural-signal gating. (4) Harness CLS capture (CDP trace, throttled fonts) before/after — record numbers in `.ai/sidecar-lab/`. Commit.

### Task 3.5: Sticky rail fixes

**Files:**
- Modify: `packages/block-library/src/blocks/sidecar/style.scss:87-105`, `packages/core/src/frontend/break-align/handle-overlapping-on-scroll/index.js`

`visibility: hidden` + `pointer-events: none` join the opacity fade (keep the transition; delay visibility with `transition: visibility 0s .2s`); replace the RAF loop with an IntersectionObserver; re-collect sets on DOM change. Manual check on the sticky fixture: links under a broken full image are clickable while the rail is faded. Commit.

### Task 3.6: Ledger sweep

Remove `--body-font-size`/`--offset-addon` from `scss/_mixins.scss`; move `:root` font-size tokens out of the block stylesheet into `packages/core/src/scss/_layout.scss`; harness diff must stay clean. Commit.

---

## Phase 4 — Three areas + Layout Recipes

### Task 4.1: Explicit area names with legacy mapping

**Files:**
- Modify: `packages/block-library/src/blocks/sidecar-area/init.php`, `edit.js`, `attributes.json`; `sidecar/init.php`, `edit.js`, `variations.js`
- Test: extend `tests/php/sidecar-render-contract.php`

TDD: legacy `areaName:"sidebar"` + parent `sidebarPosition` renders `nb-sidecar-area--sidebar-right` (or left); new explicit `sidebar-left`/`sidebar-right` render directly; three-area sidecar renders both rails plus content. Per-side SCSS variants replace the single-side rules. NO migration of saved attributes.

### Task 4.2: `sidecar-layout` Preset Engine family

**Files:**
- Create: `packages/block-editor/src/preset-engine/families/sidecar-layout.js` (follow an existing family's registration shape)
- Modify: `sidecar/inspector-controls.js` (recipe picker replaces raw radios), `variations.js` (insert-time recipes)
- Test: family managed-boundary test (same pattern as the Motion family tests)

Managed set: `sidebarPosition` (legacy), per-side rail width/existence, gutter offsets, `lastItemIsSticky`, `contentFontSize`, `sidebarFontSize`. Recipes: Centered, Right Rail, Left Rail, Hive, Offset Editorial — every definition declares the full managed set; apply = one patch; active = derived. Verify one-step undo and clean save/reload in the Site Editor (napkin: Execution & Validation #6). Rebuild the Hive fixture with the single-block recipe and screenshot-compare against the nested-Hive fixture.

---

## Phase 4b — Pull-out styles (added 2026-07-21; see design doc "Pull-outs")

### Task 4b.1: Flow segmentation + Text wrap: Around

**Files:**
- Create: `lib/flow-segments.php` (render-time grouping of an aligned block + following plain flow blocks into one `.nb-flow-segment` grid item)
- Modify: sidecar/area render path to apply segmentation only when a contained aligned block opts into `Around`
- Test: `tests/php/flow-segments-contract.php` (create — grouping boundaries: stops at next aligned/wide/full/nested block; segment spans content range; float classes emitted)

TDD the grouping rules first (contract), then the SCSS: real `float` inside `.nb-flow-segment`, rail escape via computed negative outer margins using the track vars. Editor renders the Beside approximation — the control's help text says so (accepted v1 divergence; deeper parity is a later design round).

### Task 4b.2: New content placements (Left Content / Right Content)

**DESIGN GATE FIRST:** present George a short options round rethinking the full alignment vocabulary (core Left/Right/Wide/Full untouched as defaults + new curated placements; consider explicit rail placements replacing the emergent rail-jump) before implementing. Decisions recorded in the design doc.

**Files (after the gate):**
- Extend: `packages/block-editor/src/filters/with-sidecar-break/` (same filter family as Task 3.3) with `sidecarWrap: beside|around` and a placement attribute (e.g. `sidecarPlacement: left-content|right-content`), serialized as Nova classes — core's `align` attribute is never repurposed; toolbar UI presented natively beside core align controls (registration + deprecation rules per napkin apply)
- SCSS: `right-content` = `grid-column: cc / ce` band (mirrored for left) in Beside mode; `width: 50%` + negative outer margin in Around mode
- Test: extend the Task 3.3 Jest gating tests + PHP class-emission contract

### Task 4b.3: New fixtures + extended baseline

Add fixture pages to the generator ONLY at the post-ship-decision re-baseline (differ completeness forbids growing the manifest mid-comparison): (a) placement × wrap combinations at all rail states, (b) **a query-loop fixture and a supernova fixture** — ship-decision condition 2: these pass-through consumers currently have zero harness coverage; (c) **a header-nested-grid fixture** — header rows locally override `--nb-wrapper-sides-spacings`, an uncovered substitution-context edge from Task 2.2 review. Then `--run` a new canonical baseline including them.

## Phase 5 — Group pass-through + container-list unification

### Task 5.1: Single container-list source

**Files:**
- Create: `packages/utils/src/layout-containers.js` (the one exported list) + prebuild step emitting `packages/base-styles/_layout-containers.generated.scss`
- Modify: `packages/utils/src/break-align.js`, `packages/core/src/scss/_layout.scss` to consume it
- Test: `node:test` asserting JS list ⊆ generated SCSS and vice versa

### Task 5.2: Group becomes a pass-through

**Files:**
- Modify: `packages/core/src/blocks/core/group/style.scss` (subgrid path only, inside `@supports`; max-width fallback kept)

Wide/full/pull-out behavior must now work inside a Group in a Sidecar (fixture exists in matrix). Harness diff: this one is an *annotated intentional change*.

---

## Phase 6 — Strategy note + docs

- Flip `master-strategy/decisions/2026-07-21-sidecar-editorial-grid-lt-pillar.md` from Proposed to Decided (with harness evidence linked); update `master-strategy/source-index.md`.
- Update `AGENTS.md` with a short "Sidecar Layout Engine" invariants section (root vs pass-through, break layers, no-migration rule) linking to the design doc.
- Napkin: replace the "perfect-overlap fake subgrid" entry with the new engine's contract.
- Full release checklist per AGENTS.md when shipping.
