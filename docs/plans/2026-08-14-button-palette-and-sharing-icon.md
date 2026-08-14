# Button Palette Override and Sharing Icon Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use $executing-plans to implement this plan task-by-task.

**Goal:** Expose an optional Color Signal palette override on every core Button and a sharing-only icon visibility toggle on the nested Sharing trigger.

**Architecture:** Reuse Color Signal's existing optional parent-palette ownership contract for core Button. Persist Sharing icon visibility as the negative `is-sharing-icon-hidden` class and let the existing editor/frontend decorators honor it.

**Tech Stack:** WordPress Block API filters, React inspector controls, Nova Color Signal utilities, Jest/jsdom, Node contracts, SCSS, PHP rendering, WordPress Site Editor.

---

### Task 1: Make Button palette inheritance optional

**Files:**
- Modify: `packages/core/src/blocks/core/button/index.js`
- Modify: `packages/core/src/blocks/core/button/index.test.js`
- Modify: `packages/color-signal/src/filters/core-button-save.test.js`

**Step 1: Write the failing support tests**

Extend the Button support assertion to require:

```js
paletteInheritanceAttribute: 'useParentPalette',
legacyInheritedPalette: '1',
```

Add a save-filter case proving an activated Button with `useParentPalette: false` emits `data-use-parent-palette="false"` alongside its selected palette.

**Step 2: Verify RED**

Run:

```bash
npx jest packages/core/src/blocks/core/button/index.test.js packages/color-signal/src/filters/core-button-save.test.js --runInBand
```

Expected: FAIL because Button has no optional inheritance support and the test fixture does not emit the ownership data attribute.

**Step 3: Implement the support contract**

Add the two optional-inheritance keys to `core/button`'s `novaBlocks.colorSignal` support. Update the save-test support fixture so it exercises the production contract.

**Step 4: Verify GREEN**

Run the same Jest command. Expected: PASS.

**Step 5: Commit**

```bash
git add packages/core/src/blocks/core/button/index.js packages/core/src/blocks/core/button/index.test.js packages/color-signal/src/filters/core-button-save.test.js
git commit -m "Expose palette overrides for Button Color Signal"
```

### Task 2: Add the contextual Sharing icon toggle

**Files:**
- Create: `packages/block-library/src/blocks/sharing-overlay/with-trigger-icon-control.js`
- Create: `packages/block-library/src/blocks/sharing-overlay/with-trigger-icon-control.test.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/index.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/trigger.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/trigger.test.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/edit.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/frontend.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/block.test.js`

**Step 1: Write failing visibility tests**

Test pure helpers that add/remove `is-sharing-icon-hidden` without losing other custom classes, identify a Button nested under Sharing System, and reject ordinary Buttons. Extend decorator tests to require both editor and frontend icon insertion to skip hidden Buttons and to remove an existing editor icon when the marker appears.

**Step 2: Verify RED**

Run:

```bash
npx jest packages/block-library/src/blocks/sharing-overlay/trigger.test.js packages/block-library/src/blocks/sharing-overlay/with-trigger-icon-control.test.js --runInBand
node --test packages/block-library/src/blocks/sharing-overlay/block.test.js
```

Expected: FAIL because the helper, contextual control, registration, and hidden-icon behavior do not exist.

**Step 3: Implement the minimal control and decorator behavior**

Register an `editor.BlockEdit` HOC from Sharing System's editor entry. Render a `PanelBody` and `ToggleControl` only for a selected `core/button` with a Sharing System ancestor. Toggle the marker through a pure class helper. Make `prependSharingTriggerIcon` and `prependSharingTriggerEditorIcon` refuse hidden wrappers, add a cleanup helper for editor decoration, and use those helpers from `edit.js` and `frontend.js`.

**Step 4: Verify GREEN**

Run the same targeted commands. Expected: PASS.

**Step 5: Commit**

```bash
git add packages/block-library/src/blocks/sharing-overlay
git commit -m "Add Sharing trigger icon visibility control"
```

### Task 3: Build and verify the integrated behavior

**Files:**
- Modify only if verification exposes a defect in the files above.

**Step 1: Run the complete local suite**

```bash
npm test
```

Expected: all PHP, Node, and Jest groups pass.

**Step 2: Build the runtime bundles under Node 22**

```bash
export NVM_DIR="/Users/georgeolaru/.nvm"
source "/Users/georgeolaru/.nvm/nvm.sh"
nvm use 22
npm run build
```

Expected: exit 0 and updated Sharing/Core/Color Signal bundles.

**Step 3: Verify in WordPress**

Deploy the worktree build to the dedicated `localhost:8903` smoke site without allowing the root mirror to overwrite it. In the Single template:

- Select a normal Button and confirm the Color Signal palette picker is available while its initial palette remains inherited.
- Select `Sharing System → Buttons → Button`; confirm the same palette picker plus **Sharing → Show sharing icon**.
- Turn the icon off, save, reload, and confirm no icon appears in editor or frontend while the overlay still opens.
- Turn it back on and confirm exactly one decorative icon appears.
- Inspect serialized content to confirm only the marker class is stored, never SVG markup.

**Step 4: Review and integrate**

Request code review against this plan, fix Critical/Important findings, rerun targeted and full verification, merge to `main`, sync `localhost:8903`, and repeat the essential live assertions on the merged build.
