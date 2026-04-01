# Contextual Color Signal Palette Rework Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-implement the Project/Page/Post Color driven palette as a first-class runtime palette that is stable in frontend output, editor settings, and Nova Blocks `Color Signal`, including the `Settings` tab variations.

**Architecture:** Split the work into two contracts instead of one. First, make Style Manager and Anima own a deterministic runtime palette pipeline for the current post color. Second, make Nova `Color Signal` consume that pipeline through a single source of truth for editor state so `Customize` and `Settings` render from the same live palette selection. Avoid further ad-hoc fixes in individual controls until the shared state path is explicit and testable.

**Tech Stack:** PHP, WordPress hooks, Style Manager runtime palette generation, Anima project-color integration, Gutenberg data store, Nova Blocks React controls, executable `wp eval-file` contracts, manual editor verification.

---

### Task 1: Freeze the runtime palette contract outside Nova

**Files:**
- Review: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/docs/superpowers/specs/2026-04-01-contextual-color-signal-palette-design.md`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/style-manager/src/sm-functions.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/style-manager/src/Provider/GeneralAssets.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/project-color.php`
- Test: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-style-manager-contract.php`
- Test: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-theme-contract.php`
- Test: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-output-contract.php`

- [ ] **Step 1: Tighten the failing contracts around the effective runtime palette list**

Add or revise the executable contracts so they assert all of the following from PHP alone:
- the effective palette list for the current request contains `contextual-post`
- the palette shape matches what Nova expects (`id`, `label`, `source`, `sourceIndex`, `variations`, `darkVariations`)
- the generated CSS contains `.sm-palette-contextual-post`
- the contextual palette is absent on unrelated requests

- [ ] **Step 2: Run the runtime palette contracts to verify today’s baseline**

Run:

```bash
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-style-manager-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-theme-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-output-contract.php
```

Expected: the contracts describe the exact runtime contract independently from Nova inspector bugs.

- [ ] **Step 3: Simplify the runtime API until it has one authoritative “effective palettes” entry point**

Make sure all palette consumers use one PHP path:
- Style Manager builds the contextual palette object
- Anima only supplies the current post color and registration conditions
- consumers read the effective palette list through one helper instead of stitching saved palettes and runtime palettes independently

Do not add any Nova-specific branching here.

- [ ] **Step 4: Re-run the contracts and verify they all pass**

Run the same three `studio wp eval-file` commands.
Expected: PASS with identical runtime palette data feeding both JS config and CSS output.

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/style-manager/src/sm-functions.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/style-manager/src/Provider/GeneralAssets.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/project-color.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-style-manager-contract.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-theme-contract.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-output-contract.php
git commit -m "Stabilize contextual runtime palette contract"
```

### Task 2: Make Nova editor settings a dumb consumer of the effective palette list

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/lib/client-assets.php`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/themes/anima/src/js/admin/project-color.js`
- Review: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/core/src/index.js`
- Review: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/block-editor/src/hooks/use-settings/index.js`
- Test: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-nova-editor-contract.php`
- Test: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-live-preview-contract.php`

- [ ] **Step 1: Extend the editor contracts to cover both initial load and live refresh payloads**

Add or revise contracts so they assert:
- `wp.novaBlocks.settings.palettes` is derived from the same effective palette list used by Style Manager
- `select( 'novablocks' ).getSettings().palettes` matches `wp.novaBlocks.settings.palettes`
- the editor live-preview payload includes enough data to replace the contextual palette entry and its CSS without reload

- [ ] **Step 2: Run the editor contracts to capture the current behavior**

Run:

```bash
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-nova-editor-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-live-preview-contract.php
```

Expected: PASS or reveal exactly where initial-load and live-refresh payloads diverge.

- [ ] **Step 3: Reduce the editor bridge to one payload and one updater**

Implement the editor layer so it does only this:
- fetch the effective palette list and contextual CSS payload from the theme/style-manager integration
- write that payload into `window.styleManager.colorsConfig`
- write the same palette list into `wp.novaBlocks.settings.palettes`
- push the same settings object into the `novablocks` data store through one shared updater path so `useSettings()` consumers refresh immediately
- replace the contextual palette CSS tag in the editor on live updates

Do not attempt to patch `Color Signal` selection logic here.

- [ ] **Step 4: Re-run the editor contracts**

Run the same two `studio wp eval-file` commands.
Expected: PASS with identical palette ids and source colors on initial load and after live updates.

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/lib/client-assets.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima/src/js/admin/project-color.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-nova-editor-contract.php /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-live-preview-contract.php
git commit -m "Unify contextual palette editor payloads"
```

### Task 3: Rework Nova Color Signal to use one live attribute source per inspector instance

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/with-color-signal-props/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/palette-picker/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/block-color-signal-control/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/content-color-signal-control/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/block-color-grade-control/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/content-color-grade-control/index.js`
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/editor/utils.js`
- Review and modify as needed: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/block-editor/src/components/controls-sections/index.js`
- Review and modify as needed: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/block-editor/src/components/controls-sections/tabs.js`
- Review and modify as needed: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/block-editor/src/components/controls-sections/utils.js`

- [ ] **Step 1: Write down the failing interaction contract before changing code**

Capture the intended invariant in a small markdown note inside the plan task or a targeted test helper:
- selecting palette `contextual-post` in `Customize` must immediately update the selected swatch
- switching to `Settings` must render grades with `sm-palette-contextual-post`
- switching back must not throw and must preserve the selection

If there is no practical automated JS harness, keep this as an explicit manual contract and verify it in browser after each code change.

- [ ] **Step 2: Inspect the shared inspector infrastructure before patching local controls**

Audit the `Color Signal` path together with `controls-sections` and tabs:
- verify whether shared `useMemoryState` tab keys, fill-merging, or section remounts are reusing stale children across `Customize` and `Settings`
- fix the shared inspector infrastructure first if it is responsible for stale tab content or remount-triggered crashes

Do not assume the bug is isolated to `Color Signal` until this path is checked.

- [ ] **Step 3: Inspect the current Color Signal state flow and remove duplicate state owners**

Refactor so there is one source of truth for live color-signal attributes per mounted inspector instance, owned by `with-color-signal-props`.

The wrapper should be responsible for:
- reading the current block attributes
- computing `updateBlock`
- passing the same live attribute object to all child controls by overriding `attributes` in child props or through one dedicated context path

Child controls should stop each creating their own partial synchronization logic.

- [ ] **Step 4: Make the wrapper robust against editor remounts**

Harden the shared path so it survives:
- tab switches between `Customize` and `Settings`
- Gutenberg remounts of the selected block inspector
- missing or transient `clientId` lookups

If `getParentVariation()` or related helpers read editor ancestry, guard them defensively and fail closed to site variation instead of throwing.

- [ ] **Step 5: Rebuild Nova and verify the interaction contract manually**

Run:

```bash
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
npm run build
```

Manual verification:
- open the editor for the page with contextual color
- select the `Hero Card`
- open `Color Signal`
- click the contextual palette in `Customize`
- confirm the tick moves to the contextual palette immediately
- open `Settings`
- confirm the color-grade chips use contextual palette classes and colors
- switch back to `Customize` and again to `Settings`
- confirm no block preview error appears

- [ ] **Step 6: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/with-color-signal-props/index.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/palette-picker/index.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/block-color-signal-control/index.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/content-color-signal-control/index.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/block-color-grade-control/index.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/components/content-color-grade-control/index.js /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/packages/color-signal/src/editor/utils.js
git commit -m "Stabilize color signal inspector state"
```

### Task 4: Add regression coverage for the exact bug we hit

**Files:**
- Modify: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-post-card-render-contract.php`
- Create: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/docs/superpowers/notes/2026-04-01-contextual-color-signal-regressions.md`
- Create: `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/manual/contextual-color-signal-editor-smoke.md`
- Modify or create focused test helpers under `/Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/`

- [ ] **Step 1: Record the regression cases explicitly**

Document the regressions we observed:
- palette exists in runtime config but not in the selected swatch
- `Settings` continues to render old palette grades
- re-entering `Settings` can break block preview if the inspector state is patched incorrectly

- [ ] **Step 2: Extend executable contracts where possible and add one deterministic editor smoke artifact**

Add assertions for the PHP-visible parts of the regression:
- contextual palette reaches frontend output
- contextual palette reaches editor settings
- contextual post card rendering still resolves the correct contextual color target

Also add a checked-in editor smoke artifact that documents one deterministic verification path for the inspector bug:
- exact editor URL and block target
- exact interaction sequence across `Customize` and `Settings`
- expected selected block attributes after palette selection
- expected DOM/class evidence for contextual grade chips

Do not leave the inspector interaction path as ad-hoc manual clicking with no committed artifact.

- [ ] **Step 3: Run the targeted verification set**

Run:

```bash
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-style-manager-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-theme-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-output-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-nova-editor-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-live-preview-contract.php
studio wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/contextual-post-card-render-contract.php
```

Then execute the committed editor smoke artifact and record the observed result in the regression note.

Expected: PASS.

- [ ] **Step 4: Run final syntax/build verification**

Run:

```bash
php -l /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/style-manager/src/sm-functions.php
php -l /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/themes/anima/inc/integrations/project-color.php
php -l /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/lib/client-assets.php
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22 && npm run build
```

Expected: all commands exit 0.

- [ ] **Step 5: Commit**

```bash
git add /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/manual/contextual-color-signal-editor-smoke.md /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/docs/superpowers/notes/2026-04-01-contextual-color-signal-regressions.md
git commit -m "Add contextual color signal regression coverage"
```
