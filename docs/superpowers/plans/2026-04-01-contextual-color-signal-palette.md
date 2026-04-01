# Contextual Color Signal Palette Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expose a transient contextual palette derived from the current post color as a selectable `Color Signal` palette on that post's singular frontend and in its block editor.

**Architecture:** Add runtime palette extension points in Style Manager, have Anima register a contextual palette for the current post when a contextual color exists, and let Nova consume the merged palette config through its existing editor/frontend contracts. Keep the contextual palette request-scoped and compatible with current `sm-palette-*` CSS variables.

**Tech Stack:** PHP, WordPress hooks, Style Manager runtime config/CSS output, Nova Blocks editor settings, block editor JS.

---

### Task 1: Add Style Manager runtime contextual palette APIs

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/style-manager/src/sm-functions.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/style-manager/src/Provider/GeneralAssets.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/style-manager/src/Provider/FrontendOutput.php`

- [ ] **Step 1: Write the failing PHP integration test or executable contract**

Create a minimal PHP contract test under Nova or Style Manager coverage that asserts a runtime palette can be appended without touching `sm_advanced_palette_output`, and that the generated CSS contains `.sm-palette-contextual-post`.

- [ ] **Step 2: Run the test to verify it fails**

Run the smallest available PHP verification command for the new contract.
Expected: FAIL because Style Manager cannot yet build or expose runtime contextual palettes.

- [ ] **Step 3: Add the minimal Style Manager API surface**

Implement:
- a helper to build a contextual palette object from a hex color, label, and stable id
- a helper/filter path to merge runtime palettes with saved palettes
- a helper/filter path to serialize CSS for runtime palettes into the dynamic style output
- a helper/filter path to expose merged palettes in `window.styleManager.colorsConfig`

- [ ] **Step 4: Run the test to verify it passes**

Run the same PHP verification command.
Expected: PASS, with CSS and runtime config containing the contextual palette.

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/style-manager/src/sm-functions.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/style-manager/src/Provider/GeneralAssets.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/style-manager/src/Provider/FrontendOutput.php
git commit -m "Add Style Manager runtime contextual palette support"
```

### Task 2: Register contextual runtime palettes from Anima

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/project-color.php`

- [ ] **Step 1: Write the failing PHP test**

Add a focused contract test that simulates a post with `_project_color` and asserts the theme registers a `contextual-post` palette only in the matching singular/editor context.

- [ ] **Step 2: Run the test to verify it fails**

Run the test command for the new contract.
Expected: FAIL because Anima does not yet publish a runtime palette to Style Manager.

- [ ] **Step 3: Implement the minimal theme integration**

Add a generic helper around the current contextual color resolution and hook it into the Style Manager runtime palette filters so it returns one contextual palette when a valid color exists for the current post.

- [ ] **Step 4: Run the test to verify it passes**

Run the same contract test.
Expected: PASS, with palette registration scoped to the current post context.

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/project-color.php
git commit -m "Register contextual palettes from post colors"
```

### Task 3: Extend Nova editor palette settings and add editor live refresh

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/lib/client-assets.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/admin/project-color.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/dist/js/admin/project-color.js` or rebuild the theme asset from source

- [ ] **Step 1: Write the failing test**

Add a contract test for Nova editor settings that expects `wp.novaBlocks.settings.palettes` to include the contextual palette when the current editor post has a contextual color.

- [ ] **Step 2: Run the test to verify it fails**

Run the smallest command that exercises the contract.
Expected: FAIL because Nova still reads only saved Style Manager palettes.

- [ ] **Step 3: Implement the minimal wiring**

Update Nova to consume the merged Style Manager palette list for editor settings, and update the Anima editor sidebar script to refresh `window.styleManager.colorsConfig`, the contextual palette CSS, and `wp.novaBlocks.settings.palettes` when `_project_color` or `_project_color_auto` changes.

- [ ] **Step 4: Run the test to verify it passes**

Run the same contract plus a targeted manual/editor verification.
Expected: PASS, and the contextual palette appears in the editor palette picker without full-page reload dependence.

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/lib/client-assets.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima/src/js/admin/project-color.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima/dist/js/admin/project-color.js
git commit -m "Expose contextual palette in Nova editor"
```

### Task 4: Verify frontend/editor behavior end to end

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-post-card-render-contract.php`
- Create or modify any focused runtime palette contract tests needed under `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/`

- [ ] **Step 1: Add the final behavioral assertions**

Extend or add executable contracts that assert:
- contextual palette CSS exists in the right context
- contextual palette does not exist outside that context
- Nova editor settings receive the contextual palette
- existing contextual post card color output still works

- [ ] **Step 2: Run the targeted test suite**

Run the full targeted verification commands for all new/changed contracts.
Expected: PASS.

- [ ] **Step 3: Run build verification only if JS assets changed**

Use Node 22 and run the minimal build commands needed for the touched JS bundles.
Expected: exit 0 and updated built assets.

- [ ] **Step 4: Perform manual smoke verification**

Verify in WordPress:
- a `portfolio` entry with contextual color shows the contextual palette in `Color Signal`
- a `page` or `post` with contextual color also shows it
- an entry without contextual color does not

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval
git commit -m "Verify contextual color signal palette behavior"
```
