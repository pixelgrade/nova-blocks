# Patch Header Template Part Pattern

Date: 2026-07-12

## Outcome

Add a selectable Anima LT Header Template Part pattern that recalls the Patch
demo without introducing another Header implementation or coupling its markup
to Cards Collection.

## Architecture

- Anima registers `anima/header-patch` with
  `blockTypes: core/template-part/header`, so WordPress exposes it through the
  standard Template Part Design picker.
- The pattern contains Nova's existing Header, Header Row, Site Logo, and
  Navigation blocks. The Template Part remains the sole semantic `<header>`.
- The desktop composition has a large identity row, a two-column Primary menu,
  and a Tertiary menu intended for social links. Anima owns this presentation
  through `is-style-anima-patch-header` and existing Style Manager tokens.
- The Patch style is applied only above Nova's `lap` breakpoint. Below it, no
  Patch-specific layout rules apply, so Nova's normal generated mobile logo
  bar, menu toggle, and navigation overlay remain authoritative.
- Cards Collection Header Integration remains independent. Integrated mode
  positions the existing Template Part over its proxy when the Collage has
  multiple columns; one-column/mobile mode releases that same part back into
  normal flow.

## Compatibility and verification

- Nova's dynamic Header renderer must preserve custom block classes so the
  Anima pattern style matches in both editor and frontend.
- Pattern and CSS contracts cover registration, block composition,
  desktop-only scoping, and token use.
- Live verification covers the Template Part Design picker, integrated desktop
  placement, normal-flow mobile release, the standard mobile Header clone and
  toggle, and absence of invalid blocks.

