# Core container spacing — making the Group / Columns lever reachable from the server

Date: 2026-09-03 · Status: implemented (`lib/core-container-spacing.php`)

## The finding that reframes the problem

The premise this work started from was "`core/group` and `core/columns` have no Nova spacing
lever, so authored content pins px". **That premise is wrong at the editor layer, and right at
the server layer.**

`core/group` has carried the full `spaceAndSizing` support bundle since commit `8cf7ddf5`
(2022-05-02); `core/columns` carries it too. `packages/core/src/blocks/core/group/index.js` and
`.../columns/index.js` set `supports.novaBlocks.spaceAndSizing`, and the generic filters in
`packages/block-editor/src/filters/with-space-and-sizing/` then register the attributes, render
the "Space and Sizing" panel, preview the change live in the canvas, and bake the `--nb-*`
custom properties into the saved markup. In the editor, the lever works and always has.

Two things were nevertheless missing, and both hit the same author — anyone writing block
markup outside the editor:

**1. The attributes are invisible to the server.** They are added by a JS
`blocks.registerBlockType` filter only. PHP's `WP_Block_Type_Registry` entry for `core/group`
listed 16 core attributes and none of Nova's, so every server-readable surface — the REST
block-type endpoint, and `wp pixelgrade blocks describe core/group` — reported that the block
has no spacing lever. Measured before the change:

```
$ wp pixelgrade blocks describe core/group
Described core/group: 16 attributes (0 bundle, 0 curated vocabulary).
```

The curated vocabulary rows for `blockTopSpacing` et al. already existed in
`lib/cli/blocks-describe-vocabulary.php`; they simply had no block to attach to.

**2. The attributes have no effect unless an editor saved them.** The custom properties are
emitted by a save-time JS filter, `with-space-and-sizing-save-custom-props.js`. Markup that never
passed through an editor save carries no `--nb-*` properties at all, and
`detect-legacy-spacing.js` then flags it `noSpacingMarkup: true` — which makes that save filter
deliberately keep its hands off it forever (correctly: injecting a manufactured default property
set into pre-feature content would invalidate every stored block). So

```
<!-- wp:group {"blockTopSpacing":2} -->
<div class="wp-block-group">…</div>
<!-- /wp:group -->
```

stored the attribute and rendered nothing. The lever was write-only.

## The spacing chain (unchanged by this work)

One step is `--nb-current-spacing`, and there is exactly one rule that turns it into geometry —
`block-spacing-container` in `packages/base-styles/mixins/_block-spacing.scss`, applied to the
direct children of every spacing container listed in
`packages/core/src/scss/components/layout/_style.scss`:

```scss
> * {
  --nb-block-top-spacing: 1;
  --nb-current-spacing: calc(var(--nb-spacing) * var(--nb-spacing-current-multiplier));
  margin-top: calc(var(--nb-block-top-spacing) * var(--nb-current-spacing) * var(--nb-spacing-multiplier-override, 1));
  /* …bottom margin, and emphasis top/bottom as padding */
}
```

`--nb-spacing` is bound by anima-lt (`html:root`, specificity (0,1,1), so it always wins over
Nova's `:root` fallback of `24px`) to `--theme-content-spacing` → `--theme-spacing-fluid-normal`
→ `--theme-spacing-fluid`, which is a linear interpolation
`calc(var(--spacing-a) * 100vw + var(--spacing-b) * 1px)` between 20px at a 320px viewport and
`32 × --sm-spacing-level` px at 1440px.

Because there is only this one rule, a `blockTopSpacing` of N on a Group and a `blockTopSpacing`
of N on any Nova block resolve through the identical expression. Nothing here adds a second
scale; this work only adds an authoring surface to the existing one.

## What was added

`lib/core-container-spacing.php`, required from `nova-blocks.php` right after
`lib/core-tools-ownership.php` (the file that already declares core's `spacing.margin` disabled
on these two blocks *because* `blockTopSpacing` replaces it).

**A. `describe` augmentation** (deliberately NOT a registry registration — see below) — six
attributes are surfaced for `core/group` and `core/columns`:

| attribute | CSS property | consumer |
| --- | --- | --- |
| `blockTopSpacing` | `--nb-block-top-spacing` | `margin-top` |
| `blockBottomSpacing` | `--nb-block-bottom-spacing` | `margin-bottom` |
| `emphasisTopSpacing` | `--nb-emphasis-top-spacing` | `padding-top` |
| `emphasisBottomSpacing` | `--nb-emphasis-bottom-spacing` | `padding-bottom` |
| `spacingMultiplierOverride` | `--nb-spacing-multiplier-override` | multiplies all four |
| `spacingModifier` | `--nb-spacing-modifier` | child cascade (`[style*="--nb-spacing-modifier"]`) |

The schema is READ from the same
`packages/block-editor/src/filters/with-space-and-sizing/attributes.json` the editor registers,
so a type or default cannot drift between the two registrations.

Six, not all nineteen: the rest of that bundle is the card/media half
(`mediaContainerHeight`, `thumbnailAspectRatio`, `imageResizing`, `contentAreaWidth`,
`contentPadding`) and has no CSS consumer on a bare container. Registering it would tell a reader
that a Group has a thumbnail aspect ratio. This is the same honesty rule that already hides the
dead "Content Area Padding" control on these two blocks (commit `973824c4`).

**Why not `register_block_type_args`.** That was the first implementation, and it is a
byte-identity regression. `get_block_editor_server_block_settings()` seeds the block type the
editor and the agent harness build, and `serialize()` walks `blockType.attributes` **in order**
to build the block comment's JSON. Server-registered attributes land immediately after the
block.json ones and *before* the supports-derived ones (`align`, `className`, `style`,
`layout`, …), whereas the editor's own `blocks.registerBlockType` filter appends them at the very
end. Dumping `wp.blocks.getBlockType('core/group').attributes` inside the harness with and
without the registration showed the six moving from positions 29-39 to 4-9, which flips the
comment key order for any editor-saved Group carrying both a spacing attribute and a common one:

```
shipped canonical: <!-- wp:group {"align":"full","layout":{…},"blockTopSpacing":2,"contentAreaWidth":60} -->
after registering: <!-- wp:group {"blockTopSpacing":2,…,"align":"full","layout":{…}} -->
```

The first form then reports `not_canonical` / `not_a_fixed_point`. This was reproduced on a real
editor-shaped page. Every ordering variant of a registry merge has the same defect — position is
decided by *when* a key enters the object, and the server always enters before core's supports
and before the JS filters. So the registry is left exactly as it ships, and
`blocks-cli-describe-command.php` merges the attributes in itself: `describe` `ksort()`s its
output, so it has no order to disturb. Each merged attribute is marked
`"registration": "editor"` so a reader is never misled about where it lives. The cost is that
`/wp/v2/block-types` still does not list them, which is honest — the JS registry is the editor's
authority.

**B. Render-time emit** — a `render_block` filter injects the corresponding custom properties
into the rendered wrapper via `WP_HTML_Tag_Processor`, following the existing
`lib/site-tagline.php` pattern. Three guards make it safe:

- it emits **only** attributes explicitly present in the stored attrs AND differing from their
  registered default. Everything that exists today yields an empty set and returns the markup
  untouched;
- it **stands down entirely** when **the wrapper's own `style` attribute** already contains
  `--nb-block-top-spacing` — an editor save wrote the whole bundle and that markup is
  authoritative; never doubled, never overridden by a stale comment attribute. The test is the
  wrapper, never `$block_content`: by the time the filter runs, the content already holds every
  rendered inner block, so scanning the whole string would stand the filter down for a
  headlessly-authored container merely because something nested inside it emits the same
  property, and that container would silently render none of its own spacing;
- `--nb-block-zindex` is emitted only when a negative step actually creates an overlap, mirroring
  `getSpacingCSSProps()`.

**C. Vocabulary** — `lib/cli/blocks-describe-vocabulary.php` gains `core/group` and
`core/columns` entries. The ranges are the cross-cutting ones inherited from the `'*'` bucket;
only the notes are overridden, because what a step *means* on a bare container needs saying —
including the two traps below.

### Why render-time and not save-time

Stored markup is the canonicalization fixed point that
`wp pixelgrade blocks validate` referees (`not_canonical`). Emitting at render time changes the
HTML the browser receives and not one byte of what is stored. Teaching the save filter to emit a
minimal delta for `noSpacingMarkup` content was considered and rejected: it would make freshly
authored content `not_canonical` until canonicalized once, i.e. it would trade a rendering gap
for a fixed-point violation.

Nothing on the editor side needed changing. `with-space-and-sizing-edit-custom-props.js` and
`with-space-and-sizing-wrapper-props.js` apply `getSpacingCSSProps()` unconditionally, with no
legacy gate — so the canvas already previewed these attributes correctly. Only the save and the
frontend were gated, and the frontend is what this file fixes.

## Two traps a caller must know

1. **`spacingMultiplierOverride` is inherited.** No rule re-declares it, so setting it on a
   container multiplies that container's own four spacing steps *and* every descendant's. It is
   a reach extender for a leaf-ish container, not a general "make this band taller" knob.
2. **A step resolves only inside a spacing container.** `--nb-current-spacing` is declared in the
   same rule that consumes it, on `container > *`. A Group that is not a direct child of one of
   the containers in that `:is()` list gets no `margin-top` declaration at all, and the property
   is inert. Two known zeroing rules also apply: a `.is-layout-flex` (Row) parent zeroes its
   children's spacing at (0,3,0), and anima-lt's blank-separator adjacency rule
   (`_separator.scss`) uses `--nb-block-top-spacing: 0 !important`, which beats an inline value.

## Verification

- `tests/php/core-container-spacing-contract.php` — attribute slice, the ban on a
  `register_block_type_args` registration, scope (core/column and everything else untouched), the
  no-op guarantee, the emit, number formatting, and the render filter including the nested
  wrapper-only stand-down (that assertion fails against the whole-content form of the guard).
- Live on a fresh lab site with the released stack:
  - a real 114-block page authored entirely with core blocks and no Nova spacing attributes:
    `validate` → 0 invalid, `canonical: true`; the full `canonicalize --dry-run` payload is
    **byte-identical with and without this file loaded**;
  - a page authored with the attributes: `canonicalize` converges in 2 passes, a second run
    returns `noop` with byte-identical stored markup, `validate` → 0 invalid, `not_canonical` 0.
    A `blockTopSpacing` of `1` (the registered default) is dropped from the comment by
    `serialize()`, exactly as intended;
  - measured `margin-top` at 1440 / 390 and `sm_spacing_level` 1 / 2 scales linearly and matches
    a `core/separator` (the pre-existing Nova spacing path) at the same step to the pixel;
  - the harness's registered attribute key order for `core/group`, `core/columns`, `core/column`
    and `core/separator` is **identical** with and without this file loaded;
  - an editor-shaped page whose Group carries `align` + `layout` + `blockTopSpacing` +
    `contentAreaWidth`, canonicalized by the shipped build, stays `canonical: true` and
    `canonicalize --dry-run` returns `noop` with this file loaded.

## Not done

`core/separator` consumes these attributes at render time already but is likewise absent from
`blocks describe`. Adding it to the registration list is a one-line follow-up.
