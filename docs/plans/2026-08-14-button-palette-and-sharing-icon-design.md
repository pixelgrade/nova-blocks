# Button Palette Override and Sharing Icon Design

## Goal

Give every Nova-augmented core Button access to the Color Signal palette picker without changing the appearance of existing buttons, and let editors hide the automatic Share icon on the Button nested inside a Sharing System block.

## Button palette ownership

Core Button currently declares `inheritParentPalette: true`, so the shared Color Signal UI deliberately hides its palette picker. Change Button to the optional-inheritance contract already used by Separator: add `paletteInheritanceAttribute: 'useParentPalette'` and `legacyInheritedPalette: '1'` to its Color Signal support. Untouched buttons with the default palette continue to inherit their nearest Color Signal context. Choosing a palette writes `useParentPalette: false` in the same attribute update and makes the Button an independent palette boundary. Resetting the Color Signal controls can return the attribute to its inherited default.

This remains owned by Nova Blocks and reuses the existing Style Manager palette payload, `sm-palette-*` classes, and `--sm-current-*` contextual aliases. It introduces no new hard-coded color or parallel token. The behavior applies consistently to all core Buttons, including the Sharing trigger, rather than adding parent-specific palette logic to the shared Color Signal package.

## Sharing icon visibility

The Share icon is interaction-specific decoration, so its control appears only when a selected `core/button` is nested below `novablocks/sharing-overlay`. A small editor HOC adds a **Sharing** panel in the Button Settings tab with a **Show sharing icon** toggle. The default is on.

Visibility is serialized through the negative custom class `is-sharing-icon-hidden` on the Button wrapper. Absence means visible, preserving every existing Sharing System and the PHP fallback. A class is preferable to a new global Button attribute because it survives Nova deactivation, is available to the editor and frontend DOM without parsing block comments, and does not add irrelevant schema to unrelated Buttons.

The existing editor and frontend decorators remain the sole SVG owners. Before prepending, they inspect the Button wrapper; when the hidden marker is present they remove or skip the decorative icon and clear editor-only layout classes and custom properties. No SVG enters saved content. The overlay click binding remains attached to the authored Button whether the icon is visible or hidden.

## Verification

Tests cover the Button optional-palette support contract, the class toggle helper, parent-scoped control visibility, and both editor/frontend icon decorators. The full Nova test suite and Node 22 build must pass. Live checks cover a normal Button and the Sharing trigger in the Site Editor, saved markup, reload persistence, frontend icon visibility, overlay opening, and unchanged inherited palette behavior before an override.
