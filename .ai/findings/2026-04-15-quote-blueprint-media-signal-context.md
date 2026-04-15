# Quote Blueprint Media Signal Context

## Scope

- Date: `2026-04-15`
- Area: Quote Post Format archive cards rendered from `card-quote`
- Source plugin: `nova-blocks`
- Runtime reference:
  - frontend: `http://localhost:8893/`
  - editor blueprint: `http://localhost:8893/wp-admin/site-editor.php?p=%2Fwp_template_part%2Fanima%2F%2Fcard-quote&canvas=edit`

## Symptom

The Quote blueprint signal was reaching the card item and quote content, but not the media/background surface on the frontend.

Observed mismatch:

- editor preview media mask:
  - `.blob-mix__mask sm-palette-1 sm-variation-11 sm-color-signal-3`
- frontend Quote card media mask before the fix:
  - `.blob-mix__mask sm-palette-1 sm-variation-1 sm-color-signal-0`

Visual effect:

- the quote text used the darker blueprint signal
- the media/background stayed neutral and washed out
- the frontend Quote card looked pale even when the blueprint expected a dark high-signal media surface

## Root Cause

The Quote blueprint renderer was outputting the Quote root with the semantic color data, but it was **not** outputting the media-composition / shape-modeling data attributes that Nova's frontend enhancer uses.

That mattered because the frontend shape-modeling code:

- finds every `[data-shape-modeling-target]`
- climbs to the nearest ancestor with `[data-blob-sides]`
- reads that ancestor's `data-*` attributes
- rebuilds the `.blob-mix__mask` classes from those attributes

For Quote blueprint cards, the nearest `[data-blob-sides]` ancestor was not the Quote blueprint root. It was the **outer parent Cards Collection block**, which still had neutral collection settings like:

- `data-content-color-signal="0"`
- `data-content-palette-variation="1"`

So even though the Quote item itself had `sm-color-signal-3`, the frontend enhancer repainted the media mask using the outer neutral collection context.

## Fix

Quote blueprint roots now publish their own media context, not just their semantic color context.

Implementation in:

- [lib/post-format-card-blueprints.php](/Users/georgeolaru/Local%20Sites/style-manager/app/public/wp-content/plugins/nova-blocks/lib/post-format-card-blueprints.php)

Key change:

- the Quote blueprint root now emits the media-composition and shape-modeling `data-*` attributes needed by the frontend enhancer
- those attributes are copied from the blueprint root first, then from the blueprint item as fallback
- the rendered Quote root becomes the nearest valid shape-modeling context for its own media

Important helpers added:

- `novablocks_get_quote_blueprint_media_context_attribute_keys()`
- `novablocks_get_quote_blueprint_root_data_attribute_names()`

## Verification

Contract:

- [tests/wp-eval/post-format-quote-blueprint-contract.php](/Users/georgeolaru/Local%20Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/post-format-quote-blueprint-contract.php)

The contract now requires Quote blueprint roots to expose:

- `data-content-color-signal="3"` when the blueprint expects it
- `data-blob-sides="3"` (or the blueprint's equivalent shape context)

Live frontend confirmation after the fix:

- the Quote card media mask resolves to:
  - `.blob-mix__mask sm-palette-1 sm-variation-11 sm-color-signal-3`
- the mask now matches the editor blueprint signal context instead of the old neutral collection context

## Rule To Preserve

If Nova renders a Post Format card from a blueprint and that card relies on frontend media enhancers, the blueprint root must expose the same `data-*` context that the frontend enhancer expects to read.

Do not assume that:

- item classes alone are enough
- root semantic color attributes alone are enough

For shape-modeled / media-composed cards, the frontend enhancer resolves from the nearest `data-blob-sides` ancestor. If the blueprint root does not provide that context, the enhancer will fall back to some outer parent and silently repaint the media surface with the wrong signal.
