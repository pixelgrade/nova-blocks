# Contextual Color Signal Palette Design

Date: 2026-04-01

## Summary

Introduce a contextual color palette derived from the current post's `Project / Page / Post Color` and expose it as a separate Style Manager palette that is available only on that post's singular frontend and in that post's block editor.

The palette must:

- be generated from the current post's contextual color using the existing Style Manager palette-generation logic
- appear alongside the global Style Manager palettes and functional palettes
- remain transient to the current post context and never persist into the global `sm_advanced_palette_output` option
- be selectable explicitly in Nova Blocks `Color Signal`
- work identically on the frontend and in the editor

## Goals

- Reuse Style Manager as the natural home for palette generation and palette CSS serialization.
- Keep Nova Blocks compatible with its current `Color Signal` contract based on `window.styleManager.colorsConfig` and the editor `palettes` setting.
- Generalize the feature to any public post type that has a contextual color set, not only `portfolio`.
- Avoid mutating or replacing global site palettes.

## Non-Goals

- Auto-switch existing blocks to the contextual palette.
- Persist contextual palettes in site options.
- Rework Nova Blocks `Color Signal` calculations or palette data shape.
- Introduce a second, Nova-specific palette-generation algorithm.

## Existing Constraints

### Nova Blocks

- Nova reads available palettes from the editor settings injected in `lib/client-assets.php`.
- Nova frontend and editor logic read palette data from `window.styleManager.colorsConfig`.
- `Color Signal` expects Style Manager palette objects with `id`, `label`, `sourceIndex`, `variations`, and `darkVariations`.
- The palette picker already works with whatever palettes exist in the config; the missing piece is scoped injection of an extra palette plus its CSS.

### Style Manager

- Style Manager already owns the palette-generation algorithm in JS and the CSS serialization format in PHP.
- Style Manager prints `window.styleManager.colorsConfig` and frontend dynamic styles globally.
- Style Manager functional palettes use underscore-prefixed ids, so the contextual palette must avoid that namespace.

### Theme / context color source

- Anima already resolves contextual color through `anima_get_project_color()`, with priority `manual > cached auto > lazy extract from featured image`.
- The concept should be treated as a generic contextual post color even if the current helper name still says `project`.

## Recommended Architecture

### 1. Add a contextual palette API in Style Manager

Style Manager will expose a reusable API that accepts:

- a hex color
- a stable palette id
- a human-readable label

and returns a complete palette object compatible with `sm_advanced_palette_output`.

The implementation should reuse the existing palette builder logic so the contextual palette behaves like a first-class Style Manager palette rather than a Nova-only approximation.

Expected output shape:

- `id`
- `label`
- `source`
- `sourceIndex`
- `variations`
- `darkVariations`
- any other fields currently relied on by the preview or Color Signal logic

### 2. Add runtime palette extension points in Style Manager

Style Manager will support contextual, request-scoped palettes through dedicated filters/helpers rather than by mutating the saved option.

Two derived outputs must be able to consume the same runtime palette list:

- JS config: `window.styleManager.colorsConfig`
- CSS output: `.sm-palette-*` custom properties for frontend and editor

This keeps one source of truth for:

- saved global palettes
- optional request-scoped contextual palettes
- functional palettes

### 3. Resolve contextual color outside Nova Blocks

The current post's contextual color should be resolved where it is already naturally owned: the theme integration layer.

The theme should expose a generic helper that returns the current singular post color when available. In Anima, this can initially wrap `anima_get_project_color()` while being named generically enough to cover pages, posts, and portfolio entries.

Nova Blocks should not be responsible for:

- discovering the current post color
- knowing post type rules
- deciding when a contextual palette exists

Nova should only consume the extended palette config provided through Style Manager.

### 4. Inject the contextual palette only in valid contexts

The contextual palette should exist only when all of the following are true:

- the current request is editing or rendering a singular post context
- a contextual color exists for that post
- the contextual color sanitizes to a valid hex value

The contextual palette should not appear:

- on archives
- on unrelated editor screens
- on singular posts without a contextual color

### 5. Use one stable contextual palette id

Use a stable string id such as `contextual-post`.

Requirements:

- must not collide with numeric site palettes
- must not begin with `_`, because underscore ids are already treated as functional palettes
- must remain stable between frontend and editor so saved block attributes remain meaningful

### 6. Keep palette selection explicit

The contextual palette appears in the `Color Signal` palette picker, but no block is migrated automatically.

Behavior:

- existing blocks keep their current palette unless the user changes them
- newly selected contextual palette behaves like any other palette in Color Signal
- blocks saved with the contextual palette id rely on that palette being present only in the matching post context

This is acceptable because the palette is intentionally contextual to that post.

## Data Flow

### Frontend

1. Resolve the current singular post id.
2. Resolve the contextual color for that post.
3. Ask Style Manager to build a contextual palette object from the hex color.
4. Merge that palette into the runtime palette config for the request.
5. Print CSS custom properties for the contextual palette together with the existing palette output.
6. Expose the merged palette list to `window.styleManager.colorsConfig`.
7. Nova `Color Signal` and any frontend class-based palette usage work unchanged.

### Editor

1. Resolve the edited post id and its contextual color.
2. Build the same contextual palette object through Style Manager.
3. Extend the palette list exposed to the block editor:
   - `window.styleManager.colorsConfig`
   - `wp.novaBlocks.settings.palettes`
4. Print a style tag with the contextual palette CSS in the editor.
5. Palette picker and Color Signal calculations see the contextual palette as a normal additional palette.

### Editor updates after contextual color changes

The editor integration should react when the contextual color meta changes.

Preferred behavior:

- watch the edited post meta for `_project_color` and `_project_color_auto`
- when the effective contextual color changes, rebuild the contextual palette
- replace the contextual palette entry in the JS config
- replace the contextual palette CSS in the editor style tag

This avoids requiring a manual refresh after changing the post color.

## Ownership Boundaries

### Style Manager

- palette generation from a contextual source color
- request-scoped palette merging
- palette CSS serialization
- editor/frontend config injection hooks for extra runtime palettes

### Theme (Anima)

- determine whether the current post has a contextual color
- provide the effective contextual color value
- register a contextual runtime palette with Style Manager for the current request

### Nova Blocks

- continue consuming palette config through existing settings and `window.styleManager.colorsConfig`
- no special-case logic for contextual palettes beyond receiving the extended config

## Error Handling

- Invalid or empty contextual color: do not register a contextual palette.
- Palette generation failure: fail closed and expose only the normal site palettes.
- Missing Style Manager on a screen: Nova falls back to existing behavior.
- Editor live-update failure: a reload should still recover the correct palette on next load.

No fallback should overwrite or alter global saved palettes.

## Compatibility Notes

- Functional palettes remain untouched and continue to coexist with the contextual palette.
- Existing saved blocks using numeric palettes remain unaffected.
- Saved blocks using the contextual palette id are meaningful only in the post context where the palette is injected. That is an intentional part of the feature design.
- Palette CSS must use the same variable naming and shifted-palette behavior as Style Manager's existing output so `Color Signal` classes continue to behave correctly.

## Testing Strategy

### PHP / integration

- verify contextual palette generation returns a valid Style Manager palette object
- verify the contextual palette is appended only when a valid contextual color exists
- verify frontend CSS output includes `.sm-palette-contextual-post`
- verify no contextual palette is emitted on non-singular requests or when color is missing

### Editor / JS

- verify `window.styleManager.colorsConfig` includes the contextual palette on supported editor screens
- verify `wp.novaBlocks.settings.palettes` includes the contextual palette
- verify the palette picker renders the contextual palette label
- verify changing contextual color updates the palette config and style tag

### Manual behavior

- on a `portfolio` post with contextual color, the palette appears in `Color Signal`
- on a `page` or `post` with contextual color, the palette appears in `Color Signal`
- on a post without contextual color, the palette does not appear
- selecting the contextual palette produces correct frontend colors for Color Signal classes

## Implementation Notes

- Prefer extending Style Manager with explicit helpers and filters instead of parsing and reassembling `sm_advanced_palette_output` ad hoc inside Nova.
- Keep the first iteration limited to one contextual palette per current post.
- Reuse the current contextual color meta keys to avoid a parallel storage system.

## Open Questions Resolved

- Scope: frontend and editor
- Palette behavior: separate selectable palette, not a temporary override of palette 1
- Post type support: any post type with a contextual color
- Natural ownership: Style Manager owns generation and serialization
