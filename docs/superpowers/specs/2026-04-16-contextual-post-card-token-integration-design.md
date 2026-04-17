# Contextual Post Card Token Integration Design

Date: 2026-04-16

## Summary

Refactor `novablocks/contextual-post-card` so it renders through the existing Style Manager and Nova Blocks color-token pipeline instead of using block-local semantic colors.

The block should continue to promote an adjacent or manually selected post using that post's contextual color, but it should do so by deriving a runtime contextual palette from the target post color and then consuming the normal Nova color-signal contract.

This keeps the block visually tied to the destination post while preserving compatibility with:

- Style Manager runtime palette generation
- Nova Blocks `Color Signal` expectations
- theme-level semantic token changes
- frontend and editor parity

## Goals

- Keep the contextual post card use-case intact: a large end-cap card that inherits the visual identity of the destination post.
- Remove hardcoded semantic colors from the block stylesheet.
- Reuse the contextual runtime palette path already introduced for contextual color signal work.
- Make the block consume palette-aware CSS variables such as `--sm-current-*` and the existing `--nb-*` bridge vars.
- Ensure the block fails back to the ambient page palette when no valid target post color exists.

## Non-Goals

- Rework the block's layout, typography, or interaction design.
- Solve the block's spacing-token drift in the same pass.
- Introduce a second contextual-palette generation algorithm in Nova Blocks.
- Add automatic migration of existing saved block attributes beyond what is needed to preserve behavior.

## Problem

The current `contextual-post-card` implementation bypasses the LT token pipeline:

- PHP resolves a target post color and writes it into block-local inline CSS.
- SCSS defines local semantic colors such as surface, text, and hover text with raw hex defaults.
- The block does not opt into Nova's `colorSignal` contract and therefore does not receive the normal `sm-*` palette context.

As a result:

- the block does not respond consistently to Style Manager palette logic
- theme-level semantic color changes do not propagate into the block
- contrast behavior is defined by local assumptions instead of palette generation
- the block effectively owns a second frontend color system

## Existing Constraints

### Style Manager and contextual palettes

- The repo already contains a contextual runtime palette flow based on `sm_build_contextual_palette_from_color()` and `style_manager/runtime_palettes`.
- Nova editor settings already merge runtime palettes through `novablocks_get_palette_settings_fragment()`.
- The contextual palette id is already designed to be stable across frontend and editor.

### Contextual Post Card

- The block resolves a target post on the frontend and in editor preview context.
- The target post can be adjacent or manually selected.
- The target post color comes from the same contextual color source used elsewhere in the LT stack.

### Ownership

- Style Manager owns palette generation and runtime palette output.
- Nova Blocks owns block-level palette context and `Color Signal` runtime behavior.
- The block should only own its structure and state transitions.

## Recommended Architecture

### 1. Treat the target post color as palette source input

`contextual-post-card` should continue resolving the target post and its effective contextual color. That color is the source input to the contextual palette system, not the final rendered block color.

The render flow should stop treating the target post color as a standalone surface or hover color.

### 2. Register a runtime contextual palette for the target post

When the target post exposes a valid contextual color, Nova should register a runtime palette for the current request using the existing Style Manager contextual palette flow.

Requirements:

- reuse the existing contextual palette builder instead of cloning palette logic
- use a stable palette id strategy
- keep the palette request-scoped and never persist it into saved site palettes

If the contextual palette infrastructure already exposes a shared helper for this registration path, the block should use it directly. If not, add a Nova-side helper that is only a thin adapter over the existing Style Manager runtime palette hook.

### 3. Make the block participate in normal Nova color context

The block should opt into Nova's normal palette and color-signal rendering contract.

That means the rendered wrapper should carry the same palette context shape used by other Nova blocks:

- `palette`
- `paletteVariation`
- `colorSignal`
- `data-palette`
- `data-palette-variation`
- `data-color-signal`
- the matching `sm-palette-*`, `sm-variation-*`, and `sm-color-signal-*` classes when applicable

The exact defaults should be chosen to preserve the block's current visual intent while allowing the generated palette to own semantic colors.

### 4. Convert block styling from local semantics to token consumption

The stylesheet for `contextual-post-card` should stop defining local semantic colors such as:

- surface color
- text color
- hover text color

Instead, the block should consume the active palette context through existing tokens:

- `--sm-current-bg-color`
- `--sm-current-fg1-color`
- `--sm-current-fg2-color`
- `--sm-current-accent-color` where accent behavior is actually intended
- existing Nova bridge vars such as `--nb-bg-color` and `--nb-accent-color` where that is already the established block runtime bridge

The block should keep only layout and interaction-specific CSS locally.

### 5. Preserve hover behavior without creating a second color model

The current design intent is that the card feels ambient at rest and more strongly connected to the target post on interaction.

That interaction should remain, but the implementation should switch between token-driven states rather than between hardcoded semantic colors.

Examples of acceptable implementations:

- rest state uses the contextual palette's background and foreground roles, with hover increasing emphasis through opacity, overlay, or content treatment
- rest state uses the ambient page palette when no contextual color exists, while hover never forces raw white text or raw fallback colors

The implementation should not reintroduce bespoke semantic vars that bypass the palette context.

## Data Flow

### Frontend

1. Resolve the target post.
2. Resolve the target post's effective contextual color.
3. If the color is valid, register or expose the matching runtime contextual palette for the request.
4. Render the block with the appropriate palette and color-signal attributes.
5. Let Style Manager output the contextual palette CSS and Nova consume it through normal `sm-*` and `--sm-current-*` behavior.

### Editor

1. Resolve the preview target post and its contextual color.
2. Ensure the contextual palette is present in the editor runtime palette list through the existing palette settings fragment.
3. Render editor preview markup with the same palette context shape as the frontend.
4. Let the block preview consume the same `--sm-current-*` variables as frontend output.

## Fallback Behavior

- If the target post cannot be resolved, preserve the block's existing empty-state behavior.
- If the target post exists but has no valid contextual color, do not synthesize a raw fallback color such as `#333333`.
- In the no-color case, the block should fall back to the ambient page palette and behave like a normal Nova block inside its surrounding context.
- If runtime palette registration fails, fail closed and render without contextual palette overrides.

## Compatibility Notes

- Existing contextual palette infrastructure remains the single source of truth.
- The block should not depend on Anima for its final rendered semantic colors.
- Saved content should remain meaningful because the block behavior is derived from the current target post context, not from a persisted custom hex value.
- This design intentionally keeps spacing-token cleanup out of scope so the color ownership fix remains focused and reviewable.

## Testing Strategy

### PHP / render contracts

- verify the block registers or exposes the contextual runtime palette when the target post has a valid contextual color
- verify rendered markup contains the expected palette and color-signal context rather than only a custom inline project-color variable
- verify no raw fallback project color is emitted when contextual color is missing

### CSS / token contracts

- verify the block stylesheet no longer defines local semantic colors with hardcoded hex defaults
- verify the block stylesheet references `--sm-current-*` and existing Nova bridge vars for semantic color behavior

### Editor / frontend behavior

- verify the card preview in the editor matches frontend token behavior for the same target post
- verify changing the target post or manual selection changes the effective palette context
- verify a target post without contextual color renders using ambient page tokens rather than custom fallback colors

## Implementation Notes

- Prefer a small helper dedicated to contextual-post-card palette resolution if the existing contextual palette code is otherwise hard to reuse directly.
- Keep the first pass focused on color-token ownership. Spacing-token cleanup can follow as a separate task.
- Do not preserve the current `data-color` escape hatch as a parallel rendering source once the palette integration is in place.

## Open Questions Resolved

- Use-case: keep the block as a destination-driven end-cap card.
- Palette ownership: use the target post color as palette source input, not final rendered color.
- Resting state vs hover state: derive the whole card palette from the target post context rather than limiting contextual color to hover only.
- Missing target color: fall back to ambient page palette, not a hardcoded local fallback.
