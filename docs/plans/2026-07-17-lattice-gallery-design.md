# Lattice Gallery Collection Design

## Goal

Add a theme-registerable `lattice` placement strategy to Nova Blocks and use it for Anima's `anima-lattice` Cards Collection recipe. Lattice keeps the Classic collection content model while arranging classified cards on a shared modular grid with no skipped interior cells, block-local gallery styling, editor/frontend parity, and a deliberate mobile fallback.

## Product contract

- The recipe starts at five desktop columns and exposes a two-to-six-column desktop range.
- Each module is a portrait `3:4` image area plus one fixed-height caption band. The gutter is `26px` in both axes.
- Card spans are derived from the existing content-expression classes. There are no card-level Lattice controls.
- Placement always consumes the topmost-leftmost empty cell. The next content-order card gets first refusal; up to three later cards may be pulled forward; if none fits, the next card is demoted width-first and then height until it fits.
- Placement order is written back to DOM order, keeping keyboard and reading order aligned with the visible layout.
- Tablet uses two columns and phones use one. One-column cards are normalized to `1x1`; mobile becomes an ordinary, readable vertical gallery without oversized feature plates.
- Anima owns the recipe registration and visual voice. Nova owns only the reusable placement strategy and its runtime/editor contract.

## Ownership and data flow

Anima registers this recipe through `novablocks_collection_layout_recipes`:

```php
[
    'id'             => 'anima-lattice',
    'label'          => 'Lattice',
    'baseLayout'     => 'classic',
    'layoutStrategy' => 'lattice',
    'thumbnail'      => 'lattice',
    'defaults'       => [ /* five columns and gallery card settings */ ],
    'capabilities'   => [ /* column range and intentionally hidden controls */ ],
]
```

Nova normalizes the strategy alongside the existing recipe fields. When the registered recipe is active, PHP emits `data-layout-strategy="lattice"` on that collection only. The editor reads the same normalized setting. Unknown strategies normalize to an empty value and continue using the recipe's base layout.

```text
Anima recipe registration
        |
        v
Nova recipe normalizer -----> editor LatticeLayout
        |
        v
rendered data-layout-strategy="lattice"
        |
        v
frontend Lattice controller -----> pure placement engine
        |
        v
explicit grid rows/columns + placement-order DOM
```

The persisted `layoutStyle` remains `classic`. This avoids a fifth built-in layout mode, preserves existing collection serialization, and keeps Lattice activation entirely local to the recipe class and derived strategy attribute.

## Content classification and spans

The classifier consumes the current Nova/Anima classes in this priority order:

| Expression | Preferred span |
| --- | ---: |
| `.is-sticky-post` | `2x2` |
| `.format-quote` | `2x1` |
| `.nb-card--no-media` | `1x1` |
| `.nb-card--media-wide` | `3x1` |
| `.nb-card--media-landscape` | `2x1` |
| `.nb-card--media-tall` | `1x2` |
| portrait, square, or unclassified | `1x1` |

Sticky and post-format classes must be present in both renderers. Nova already supplies media expressions in PHP and JavaScript; the editor card adds the sticky class from post data so the same item receives the same span before and after publish.

Spans are clamped to the current responsive column count. At one column every item is `1x1`.

## Placement algorithm

The pure engine owns an occupancy matrix and a source-order queue.

1. Find the first unoccupied cell in row-major order.
2. Try the first queued card at its preferred span.
3. If it does not fit, inspect the next three queued cards in order and place the first preferred span that fits.
4. If none fits, return to the first card and generate deterministic demotions: reduce width one column at a time to one, then reduce height one row at a time to one.
5. Reserve the selected rectangle, remove that card from the queue, append its placement to the output, and repeat.

The engine never advances past an empty frontier cell. Because every card can reach `1x1`, the current gap is always filled. The finite queue may leave a ragged final boundary, but it cannot leave a skipped interior hole.

The controller remembers each item's original source index. On every layout it first restores source order, calculates placements, appends nodes in placement order, and applies explicit `grid-column` and `grid-row` values. It reruns after resize and collection mutations, including Load More. Destroying or leaving the strategy restores source order and clears inline layout state.

The controller dispatches `nb:lattice-layout` with placement details before the existing `nb:layout` compatibility event.

## Geometry and presentation

The controller derives the live column width from the collection width, effective column count, and `26px` track gaps. Its grid auto-row height is:

```text
column width * 4 / 3 + fixed caption-band height
```

Anima's recipe scope applies the fixed gap and the playground's `50px` caption height. Cards fill their assigned rectangle. Image wrappers and images fill the available media area, and images use `object-fit: cover`. Existing Nova focal-point `object-position` values are preserved.

The caption band contains the title and primary date metadata. The recipe defaults hide descriptions, subtitles, buttons, and secondary metadata. The date is small uppercase type. Quote and media-less posts become internal typographic plates, while media cards retain the shared caption baseline.

Colors, typography, spacing relationships, and focus/hover states consume Anima/Style Manager semantic tokens. Only the product-mandated `26px` gutter and fixed recipe band dimensions are literal geometry.

## Editor options

Recipe capabilities extend the existing controls without affecting current recipes:

- `columnsRange: { min: 2, max: 6 }` adjusts the Items per row control.
- `itemsGap: false`, `verticalGap: false`, and `aspectRatio: false` hide controls that would violate shared seams.
- Lattice selection defaults to five columns, portrait media, vertical cards, date metadata, and no descriptive/button content.
- Items count remains available. Per-card span controls are intentionally absent.

## Responsive and failure behavior

- Desktop: authored two-to-six column count, default five.
- Tablet: two columns, preferred widths clamped to two.
- Phone: one column and all spans normalized to `1x1`.
- Empty collection: no-op with a compatibility layout event.
- Missing/unknown recipe strategy or JavaScript failure: the underlying Classic CSS grid remains the safe fallback.
- Late media and focal-point changes do not affect track geometry because the row height is based on the module contract, not intrinsic image ratios.

## Alternatives considered

1. **Theme-only placement script.** Rejected because the editor would drift from the frontend and each theme would need to understand Nova's Load More lifecycle.
2. **Generic recipe strategy in Nova plus an Anima recipe/skin.** Selected because it preserves recipe ownership, centralizes renderer parity, and keeps theme aesthetics out of the plugin.
3. **A fifth `layoutStyle` named Lattice.** Rejected because Lattice is a recipe over the Classic engine/content model, not a new permanent top-level collection mode. It would also expose a built-in tile outside Anima and weaken block-local activation.

## Verification

Automated coverage must prove normalization and safe fallback, PHP strategy projection, content-to-span classification, pull-forward behavior, width-first demotion, zero skipped cells, DOM reorder/reset, responsive column selection, controls, thumbnail selection, Anima registration, and tokenized scope. Production builds must pass on Node 22.

Browser verification covers frontend and editor at desktop, tablet, and phone widths; mixed expressions; sticky/quote/no-media cards; keyboard order; Load More; focal-point cropping; exact gutters; fixed caption shelves; and isolation from neighboring Classic collections.
