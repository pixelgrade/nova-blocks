# sidecar-lab harness

Fixture generator (Task 1.2) + probe/screenshot capture harness (Task 1.3)
for the Sidecar Subgrid Modernization plan
(`docs/plans/2026-07-21-sidecar-subgrid-modernization-implementation.md`).
The generator is the reproducible spec of the verification matrix from the
design doc (`docs/plans/2026-07-21-sidecar-subgrid-modernization-design.md`,
Verification section); the capture harness is the before/after evidence
engine for the Phase 2+ engine rewrite.

## Site

The dedicated Studio site (provisioned in Task 1.1 via the `pxg-smoke` flow):

- **Path:** `/Users/georgeolaru/Studio/pxg-smoke-sidecar-lab`
  (NOT `~/Studio/sidecar-lab` — pxg-smoke prefixes the label)
- **URL:** `http://localhost:8902`
- Environment snapshot: `.ai/sidecar-lab/ENV.md` (dated; re-verify at runtime)

## Run

```bash
studio wp --path=/Users/georgeolaru/Studio/pxg-smoke-sidecar-lab \
  eval-file "/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/bin/sidecar-lab/generate-fixtures.php"
```

Idempotent: every run force-deletes all pages whose slug starts with
`sidecar-lab-` and recreates them; the fixture attachment is looked up by
slug (`sidecar-lab-fixture`) and reused, never re-uploaded. Page/attachment
counts do not grow across runs (page IDs do change; slugs and URLs are
stable).

## What it creates

- **1 attachment** — a deterministic 2400x1600 PNG drawn with GD (horizontal
  gradient, rule-of-thirds lines, center circle, distinct corner markers,
  200px ticks) so cropping/mirroring/scaling regressions are visible in
  screenshots. Slug: `sidecar-lab-fixture`.
- **3 lab posts** (`sidecar-lab-post-1..3`) — deterministic posts (fixed
  excerpt, featured image = the fixture attachment) backing the query-loop
  pass-through fixture. Recreated each run; deleted by the same prefix sweep.
- **32 published pages**, slug prefix `sidecar-lab-`. The first 17 are the
  Phase 1-3 family pages (each carries the full content-variant battery as
  successive sections — wide image, full image, alignleft, alignright,
  Group-wrapped wide image, captioned image — over body copy long enough to
  wrap at 375px). The next 14 are the Phase 4b re-baseline additions
  (Task 4b.3): NEW capabilities with no old-engine behavior to preserve, added
  when **baseline-v2** (new engine) became the canonical reference. The last
  one (`color-signal-group`) is the Phase-5 Task-5.2-gate addition, added at the
  **baseline-v2b** re-baseline.

  | Slug (`sidecar-lab-…`) | Covers |
  | --- | --- |
  | `none-small`, `none-large` | no rail; width-invariance pair |
  | `left-small`, `left-medium`, `left-large` | left rail x widths; short/long rail fill |
  | `left-small-sticky` | left rail + `lastItemIsSticky` (sticky Group last in rail) |
  | `left-empty-rail` | left rail present but EMPTY (Phase 3 `:has()` target) |
  | `right-small`, `right-medium`, `right-large` | right rail x widths; short/long rail fill |
  | `right-small-sticky`, `right-medium-sticky` | right rail + sticky |
  | `right-large-sticky-long` | right rail, large width, sticky last item AFTER long rail content (different sticky offset math) |
  | `right-empty-rail` | right rail present but EMPTY |
  | `right-long-rail` | rail longer than content (overflow edge) |
  | `nested-hive` | both rails via nesting: outer left sidecar with its OWN sticky rail > content holds inner right sidecar with rail content + sticky last item |
  | `nested-deep` | 3 authored nesting levels: left/large > right/medium > left/small |
  | **Phase 4b — pull-outs (a)** | |
  | `wrap-around-right`, `wrap-around-left` | Content Around float over a filled rail (text wraps beside AND under); left+right mirrors |
  | `wrap-extend-right`, `wrap-extend-left` | Extend pull-out pulled over the rail toward the wide edge (track-var margins); left+right |
  | `wrap-extend-empty-right` | Extend over an EMPTY rail (margin still resolves) |
  | `wrap-around-empty-left` | Around over an EMPTY rail |
  | `wrap-coexist-never-right` | a block with BOTH `nb-wrap-around` and `nb-break-never` — wrap-wins pin (renders as Around) |
  | **Phase 4b — per-block break (e)** | |
  | `break-always-filled-right` | `nb-break-always` wide image over a filled rail (extends regardless of measurement) |
  | `break-never-empty-right` | `nb-break-never` wide image over an EMPTY rail (stays constrained despite the `:has()` flip) |
  | **Phase 4b — three areas (f)** | |
  | `three-area-hive` | single-block Hive: sidebar-left + content + sidebar-right (both rails, neither absence class) |
  | `none-legacy-sidebar` | `sidebarPosition:none` + a retained legacy `sidebar` area — back-compat edge (renders as a right rail) |
  | **Phase 4b — pass-throughs (b)** | |
  | `query-loop` | core/query (inherit:false) over the lab posts — `.wp-block-query` subgrid pass-through |
  | `supernova` | page-level Supernova, static `fields` cards — `.nb-supernova` subgrid pass-through |
  | **Phase 4b — substitution context (c)** | |
  | `header-nested-grid` | Sidecar nested in a `novablocks/header-row` (wrapper-sides override). Was **KNOWN-BROKEN in baseline-v2** (~8341px overflow); **FIXED in baseline-v2b** by the Task 5.0 header-row grid gate — now fits (~1376px). |
  | **Phase 5 — Task 5.2 gate (b)** | |
  | `color-signal-group` | No rail; a PLAIN group-wrapped wide (subgrid pass-through: escapes to ws/we) beside a COLOR-SIGNAL group-wrapped wide (a box group EXCLUDED from the pass-through: box stays content-width, background does not bleed, child stays constrained). The two wide-image rects differ — the exclusion regression pin. |

## Manifest

The generator writes the page manifest consumed by the Task 1.3 capture
harness to:

```
.ai/sidecar-lab/fixtures-manifest.json
```

(array of `{ slug, url, description, families }`; `.ai/` is a private
overlay and stays uncommitted). The path is resolved from the script's repo
location; override with the `SIDECAR_LAB_MANIFEST` env var if needed.

## Capture harness (`capture.mjs`)

Probes + screenshots every manifest page across viewports 375 / 1024 /
1440 / 2000 (height 1200), and diffs two runs. Node 22, plain ESM, no npm
dependencies — it shells out to the `playwriter` CLI (headless Chrome; run
`playwriter browser install` once if missing).

```bash
# Capture a run (68 page-loads with the 17-page manifest):
node bin/sidecar-lab/capture.mjs --run baseline

# Overwrite an existing run (deletes the run dir recursively first —
# stale files from a previous capture never leak into the new run):
node bin/sidecar-lab/capture.mjs --run baseline --force

# Compare two runs (e.g. before/after an engine change):
node bin/sidecar-lab/capture.mjs --diff baseline subgrid
```

**Canonical baseline (from 2026-07-22, Phase-5 Task-5.2-gate re-baseline):**
**`baseline-v2b`** — the FINAL Phase-5 build (worktree HEAD of branch
`worktree-agent-af18d9a23b30f81e4`: the Task 5.2 box-group-exclusion gate on top
of `51d17de2`) over the full 32-page / 128-capture matrix. It bakes in all of
Phase 5 (Task 5.0 header ruling, 5.1 container unification, 5.2 Group
pass-through with the box-group exclusion) and adds the `color-signal-group`
fixture. Phase 6+ diffs against it (`--diff baseline-v2b <run>`), and its
annotations live in `.ai/sidecar-lab/expected-changes.md` (which starts empty —
a fresh baseline needs none). Determinism was re-proven the Phase-1 way: two
independent full captures of `baseline-v2b` diffed to zero differences.

Archived predecessors, kept on disk (never deleted): **`baseline-v2`** (new
engine, pre-5.2-gate, `ca276dea`, 31 pages) — the previous canonical, superseded
here; and **`baseline`** (old engine, 17 pages) — the original historical record,
whose annotations moved to `expected-changes-old-baseline.md` and apply ONLY to
`--diff baseline <old-run>` (pass via `SIDECAR_LAB_EXPECTED=`). Baselines from
different engines / matrices are never diffed against each other.

> **Lab standing state:** the sidecar-lab Studio site now runs the FINAL Phase-5
> (Task-5.2-gate) build with its code-mirror **watcher STOPPED** (deliberate — a
> running watcher would revert the deploy to `main`). See `.ai/sidecar-lab/ENV.md`.

Run labels become directory names under `.ai/sidecar-lab/runs/` and are
validated (letters, digits, `.`, `_`, `-`; no path separators, no `..`).
A capture whose page load answers HTTP >= 400 is a capture failure (a 404
template must never probe "successfully"), each capture is retried once
after a session reset, and the run fast-aborts after 3 consecutive
capture failures (meta.json records `aborted: true`). Ctrl+C deletes the
playwriter session before exiting.

Outputs land in `.ai/sidecar-lab/runs/<label>/` (private overlay, never
committed): `<slug>.<viewport>.json` (probe), `<slug>.<viewport>.png`
(full-page screenshot), and a run-level `meta.json` (date, engine label,
page count, total probed elements, settlement/image timeouts, failures).

Full-page screenshots are taken by growing the viewport to the document
height (capped at 16000px) rather than Playwright's `fullPage: true` —
Chromium's captureBeyondViewport discards decoded image data for
offscreen images and paints them blank. The resize happens after the
probe payload is collected and never changes the width, so it cannot
affect probe data. Pages over the cap fall back to `fullPage: true` and
carry `screenshotClamped: true` in their probe JSON.

**What a probe records** — for every probed element: a stable structural
path (`tag:childIndex` chain from `<body>` — never "the first sidecar",
because the Anima LT page template wraps post content in its own
`sidebarPosition:none` sidecar on every page), className, computed
`display`, `gridTemplateColumns` (grids only), and its bounding rect
(left/right/width/top/height, 0.1px rounding). Page-level: the
break-class inventory (`break-align-left/right` carriers by path) and the
settlement flags. Elements are collected by ROLE (the diff keys on
`role|path`):

- `sidecar` — every `.nb-sidecar`
- `sidecar-area` — every `.nb-sidecar-area`
- `aligned` — every `.alignwide/.alignfull/.alignleft/.alignright`
- `root` (Task 4b.3 d) — `.wp-block-post-content`, `.wp-block-template-part`,
  `[id="main"]`: the layout ROOTS, to probe rail-var zeroing directly (a
  rail-less root reads `[ws] 0px`), previously only verified indirectly.
- `passthrough` (Task 4b.3 b) — `.wp-block-query`, `.nb-supernova`: the
  subgrid pass-through consumers, so their `grid-template-columns: subgrid`
  resolution has structural coverage, not just screenshots.

**Settlement protocol** (the current engine adds break classes via
debounced JS after domReady — probing early poisons the data): wait for
`document.fonts.ready`, scroll through the page to trigger lazy images
and back to top, wait for every image to complete (bounded), then poll
the page-wide break-class inventory until two consecutive samples 300ms
apart are identical (cap 5s; a timeout sets `settlement.settled: false`
and is listed in `meta.json` + warned about by `--diff`). All DOM reads
for a page happen in ONE `page.evaluate`.

**Diff semantics** (`--diff A B`): per capture it reports break-class
inventory changes, element set changes, computed `display` changes,
`gridTemplateColumns` changes (0.5px per-track numeric tolerance), and
left/right/width rect deltas over 1px. `--diff <label> <label>`
(self-diff) must always report zero differences.

**Vertical geometry** (decision 2026-07-21): `top`/`height` are recorded
in every probe but deliberately NOT compared. Two fresh full runs
against the canonical baseline (and against each other) showed
vertical-ONLY jitter above the 1px gate, always on tall (~6800-7600px)
pages at the 2000px viewport: sub-tolerance drifts (0.4-0.7px) on
individual figures accumulate down the page into 1.5-1.8px `top`/
`height` deltas by the footer. Jittering captures observed:
`left-medium@2000`, `left-small-sticky@2000`,
`right-large-sticky-long@2000` — a different subset in each run pair,
with all captures fully settled and all images complete. Horizontal
fields (left/right/width) were 68/68 stable in every pair; horizontal
geometry is the sidecar engine's contract. To re-enable, add `top`/
`height` to `RECT_FIELDS` in `capture.mjs` and re-verify with two fresh
runs against baseline.

**Completeness gate**: `--diff` loads the fixtures manifest and FAILS
(exit 1) unless both runs are complete — every pages x viewports capture
JSON present AND a `meta.json` with zero failures and no abort. An empty
or partial run dir can never diff clean, regardless of annotations.

**Annotations**: differences are acceptable only when annotated in
`.ai/sidecar-lab/expected-changes.md` (override the path with the
`SIDECAR_LAB_EXPECTED` env var) — one per line:

```
<slug> <viewport> [<kind>] <reason>
```

`kind` ∈ `gtc` | `rects` | `breaks` | `all` (absent = `all`) scopes the
annotation to one diff family, so e.g. an expected `gridTemplateColumns`
change cannot mask a rect or break-class regression on the same capture.
Element-set and `display` changes have no dedicated kind; only a
kind-less (`all`) annotation suppresses them. `*` wildcard allowed for
slug/viewport; `#` comment lines and `-` markdown bullets tolerated — do
NOT bullet annotation lines with `*`: a leading `* ` is parsed as a
wildcard slug. Missing file = no annotations. Lines that fail to parse
emit a visible warning; annotations that matched nothing are listed
after the diff as stale (warning, not a failure). The report shows which
kinds each annotation actually suppressed. Exit code 0 only when the
completeness gate passes and every diff of every differing capture is
covered by a matching annotation.

**Playwriter specifics**: the run warms the relay with one sequential
`session list` (concurrent first launches can race on `127.0.0.1:19988`),
creates its own headless session with the repo root as CWD (the eval
sandbox's `fs` is scoped to the session CWD — that is how probe JSONs get
written), drives it with `-e` + `--timeout 90000` (the CLI's default 10s
eval cap would kill the settlement protocol), retries each capture once
after a `session reset`, and deletes the session when done.

## Environment facts the fixtures rely on (verified 2026-07-21)

- Studio's wp-cli PHP (8.3) has GD + zlib and can read/write host paths
  outside the site root, so `eval-file` from this repo and direct manifest
  writes both work.
- The Anima LT page template wraps post content in its OWN
  `sidebarPosition:none` sidecar — every fixture page therefore has one
  extra template-level `.nb-sidecar` root above the authored one(s). Probes
  must select sidecars structurally, not assume the first `.nb-sidecar` is
  the fixture.
- `novablocks/sidecar` and `novablocks/sidecar-area` are dynamic blocks
  (save = `InnerBlocks.Content`); the serialized markup is block comments
  wrapping inner content only, content area first, sidebar area second.
- core/image + core/group fixture markup is plain core save output. Nova's
  editor save filters (Color Signal etc.) may re-serialize with extra
  classes if these pages are edited — the harness measures the frontend,
  where saved static markup renders verbatim.
