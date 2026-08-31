# Facet choice control styling

Date: 2026-08-31

## Decision

Nova Blocks owns the adapter between Pixelgrade Filters' established `.facetwp-*`
markup and the LT design system. Anima continues to own native form-control semantics;
it should not gain plugin-specific selectors.

The `novablocks/facetwp-facet` block will expose a `choiceStyle` setting:

- `auto` (default): preserve established behavior — radio facets render as text choices,
  checkbox facets render as controls.
- `controls`: render both checkbox and radio facets with visible design-system indicators.
- `text`: render both checkbox and radio facets as indicatorless text choices.

This gives Julia LT's multi-select checkbox facets the Mies LT visual treatment without
changing their FacetWP filtering semantics, while leaving existing content byte-compatible
until an author selects a non-default style.

## Visual and interaction contract

- Scope all rules to `.nb-facetwp-facet`; Nova must not restyle arbitrary FacetWP output.
- Consume the existing Anima/Style Manager input, palette, radius, spacing, and transition
  tokens, with Nova-safe fallbacks. Add no new global token.
- Remove Pixelgrade Filters' bitmap checkbox/radio images inside the Nova adapter.
- Controls: square checkbox, circular radio, palette-aware checked fill, hover feedback,
  visible `:focus-visible`, disabled treatment, and coarse-pointer target sizing.
- Text: no indicator, Mies-compatible underline on hover/focus/selection, stronger selected
  weight, visible focus outline, and the same disabled treatment.
- Support both FacetWP state signals: `.checked` and `[aria-checked="true"]`.
- Respect reduced-motion preferences.

## Verification

1. Contract test fails before implementation and passes after it covers the attribute,
   inspector control, renderer class, scoped selectors, state selectors, palette tokens,
   focus treatment, and absence of bitmap dependencies.
2. Full Nova fast suite passes under Node 22.
3. Runtime bundle builds under Node 22.
4. Local Julia LT shows both Controls and Text styles, filters with mouse and keyboard,
   preserves multi-select behavior, and has visible focus.
5. Local Mies LT remains visually unchanged under `auto` and still filters correctly.
