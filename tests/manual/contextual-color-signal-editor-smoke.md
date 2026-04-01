# Contextual Color Signal Editor Smoke

Date: 2026-04-01

## Target

- Editor URL: `http://style-manager.local/wp-admin/post.php?post=51&action=edit`
- Post: `page` `#51` `Work`
- Block target: the first `novablocks/supernova` block with `variation="novablocks-card-hero"`

## Preconditions

- The edited post keeps a contextual post color set.
- The target block is selected in the inspector.
- The `Color Signal` section is visible for the selected block.

## Steps

1. Open the editor URL and wait for the block editor to finish loading.
2. Select the first Hero Card block (`novablocks/supernova`, `novablocks-card-hero`).
3. Open `Color Signal`.
4. In `Customize`, click the palette whose id is `contextual-post`.
5. Confirm the selected block attributes now include `palette: "contextual-post"`.
6. Confirm the selected swatch tick moves immediately onto the contextual palette.
7. Switch to `Settings`.
8. Confirm the block color-grade chips render with `sm-palette-contextual-post`.
9. Switch back to `Customize`, then again to `Settings`.
10. Confirm the block preview does not show a block error and the contextual palette selection is preserved.

## Expected Evidence

- The selected block keeps `palette: "contextual-post"` after the first click.
- The active swatch in `Customize` matches the contextual palette without requiring a reload.
- Each grade chip in `Settings` includes the contextual palette classname:
  `sm-palette-contextual-post`.
- No Gutenberg block preview error appears while switching between `Customize` and `Settings`.
