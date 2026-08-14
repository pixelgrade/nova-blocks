# Post Terms Link Color Signal Design

**Date:** 2026-08-14

## Goal

Give the dynamic `core/post-terms` block two independently editable Color Signal boundaries: the existing block wrapper signal and a second signal for the rendered term links. Categories displayed as badges can then use a different contextual background and foreground from their surrounding block. The same behavior applies to Tags and custom-taxonomy variations because they share `core/post-terms`.

## Architecture

Reuse Color Signal's existing `contentColorSignal` and `contentPaletteVariation` attributes, matching the Cards Collection parent/content model. The Post Terms support map opts into `contentColorSignal` and supplies a semantic editor label such as “Term Links Color Signal”; the shared controls and toolbar continue to perform all signal-to-variation calculations.

The PHP render filter remains the single rendering owner because `core/post-terms` is dynamic. It keeps applying the block-level palette, variation, and signal to the outer wrapper. When `contentColorSignal` is greater than zero, it also adds the corresponding palette, variation, signal classes, and runtime data attributes to every rendered term `<a>`. Each link declares parent-palette inheritance so the frontend Color Signal runtime resolves it against the wrapper after palette or site-basis changes.

A zero term-link signal emits no nested Color Signal markup. Links therefore inherit the wrapper's contextual custom properties exactly as they do today. This preserves existing output and appearance for untouched blocks and for blocks whose second signal is reset to None.

## Styling Ownership

Nova owns the nested Color Signal context. It does not introduce badge-specific colors or new `--nb-*` variables. Themes consume the existing `--sm-current-bg-color`, `--sm-current-fg1-color`, and related aliases. Anima's existing Post Categories tag style already uses those tokens for badge background, text, and hover state, so an explicit link signal changes its appearance without theme-side color duplication.

## Verification

Add editor registration/control-label contracts and extend the standalone PHP render contract to prove:

- the second signal is exposed for `core/post-terms` only;
- inactive and zero-link-signal markup remains unchanged at the nested boundary;
- every rendered term link receives the authored nonzero signal and inherits the wrapper palette;
- wrapper and link signal values remain independent;
- separators, prefix/suffix markup, and unrelated attributes are preserved.

Run targeted Jest and PHP contracts first, then the canonical `npm test`, build under Node 22, and verify Categories in both the Site Editor and Post Editor plus computed frontend badge colors on `style-manager.local`.
