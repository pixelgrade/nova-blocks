# sidecar-lab fixtures

Fixture generator for the Sidecar Subgrid Modernization harness
(`docs/plans/2026-07-21-sidecar-subgrid-modernization-implementation.md`,
Task 1.2). It is the reproducible spec of the verification matrix from the
design doc (`docs/plans/2026-07-21-sidecar-subgrid-modernization-design.md`,
Verification section).

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
- **17 published pages**, slug prefix `sidecar-lab-`, grouped one page per
  matrix *family* (each family page carries the full content-variant battery
  as successive sections — wide image, full image, alignleft, alignright,
  Group-wrapped wide image, captioned image — over body copy long enough to
  wrap at 375px):

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
  | `nested-hive` | both rails via nesting: outer left sidecar with its OWN sticky rail (short paragraph + sticky Group spanning the nested block) > content holds inner right sidecar with rail content + sticky last item. A direct three-area fixture (single block, both rails) will be ADDED when Phase 4's explicit area names land. |
  | `nested-deep` | 3 authored nesting levels: left/large > right/medium > left/small |

  The `break {auto, always, never}` axis of the design-doc matrix is Phase 3
  work (the `sidecarBreak` attribute does not exist yet) and gets fixtures
  when that attribute lands.

## Manifest

The generator writes the page manifest consumed by the Task 1.3 capture
harness to:

```
.ai/sidecar-lab/fixtures-manifest.json
```

(array of `{ slug, url, description, families }`; `.ai/` is a private
overlay and stays uncommitted). The path is resolved from the script's repo
location; override with the `SIDECAR_LAB_MANIFEST` env var if needed.

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
