# Contextual Color Signal Regression Notes

Date: 2026-04-01

## Regressions Covered

1. The contextual palette exists in runtime config but the `Customize` swatch selection does not move immediately to `contextual-post`.
2. The `Settings` tab continues to render grade chips from the previous palette instead of `sm-palette-contextual-post`.
3. Re-entering `Settings` after patching inspector state can break the selected block preview if the inspector remount path reads stale color-signal data.

## Fixed Contracts

- Style Manager now exposes one shared runtime payload helper: `sm_get_palette_runtime_payload()`.
- Nova editor settings now consume one shared palette settings fragment: `novablocks_get_palette_settings_fragment()`.
- The runtime palette, editor settings payload, live preview payload, frontend output, and contextual post card render contract all pass through the committed wp-eval checks.

## Verification Evidence

- `contextual-color-palette-style-manager-contract.php`: pass
- `contextual-color-palette-theme-contract.php`: pass
- `contextual-color-palette-output-contract.php`: pass
- `contextual-color-palette-nova-editor-contract.php`: pass
- `contextual-color-palette-live-preview-contract.php`: pass
- `contextual-post-card-render-contract.php`: pass

## Manual Smoke Artifact

- Script: `tests/manual/contextual-color-signal-editor-smoke.md`
- Exact target: `http://style-manager.local/wp-admin/post.php?post=51&action=edit`
- Block target: first `novablocks/supernova` block with `variation="novablocks-card-hero"`

## Observed Result

- PHP/runtime contract verification passed after the shared payload refactor.
- Browser automation was not available for a trustworthy editor click-through in this session:
  Playwriter transport returned a closed connection and Chrome DevTools snapshots were blocked by tool safety policy.
- The deterministic editor smoke path is committed above and still needs a live in-browser click-through to record UI evidence for the swatch tick and `Settings` chip classes.
