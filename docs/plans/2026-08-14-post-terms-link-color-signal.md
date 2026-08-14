# Post Terms Link Color Signal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use $executing-plans to implement this plan task-by-task.

**Goal:** Add an independent, opt-in Color Signal for every rendered term link in `core/post-terms` while preserving the current inherited appearance by default.

**Architecture:** Reuse the existing `contentColorSignal` and `contentPaletteVariation` attributes used by Cards Collection. The editor support map exposes the shared second-signal controls with a Post Terms-specific label, while the dynamic PHP render filter adds the nested Color Signal context directly to term anchors only when the second signal is nonzero.

**Tech Stack:** WordPress Block API filters, React/Jest editor contracts, PHP `WP_HTML_Tag_Processor`, Nova Blocks Color Signal runtime, standalone PHP contract tests.

---

### Task 1: Expose a semantically labelled second signal

**Files:**
- Modify: `packages/core/src/blocks/core/post-terms/index.test.js`
- Modify: `packages/color-signal/src/components/content-color-signal-control/index.js`
- Modify: `packages/color-signal/src/components/content-color-grade-control/index.js`
- Modify: `packages/color-signal/src/components/block-color-signal-toolbar/index.js`
- Modify: `packages/core/src/blocks/core/post-terms/index.js`
- Test: `packages/core/src/blocks/core/post-terms/index.test.js`
- Test: `packages/color-signal/src/components/content-color-signal-control/index.test.js`

**Step 1: Write the failing tests**

Assert that Post Terms support enables `contentColorSignal` and declares `contentColorSignalLabel: 'Term Links Color Signal'`. Add a focused component contract proving the shared content signal control prefers that support label and retains “Content Area Color Signal” as its fallback.

**Step 2: Run the tests to verify RED**

Run:

```bash
npx jest packages/core/src/blocks/core/post-terms/index.test.js packages/color-signal/src/components/content-color-signal-control/index.test.js --runInBand
```

Expected: FAIL because the support flag/label and label override do not exist.

**Step 3: Implement the minimal editor support**

Add `contentColorSignal: true` and the semantic label to Post Terms support. Make the content signal stepper, advanced grade control, and toolbar read the optional support label, falling back to their current translated label for Cards Collection and every existing consumer.

**Step 4: Run the targeted tests to verify GREEN**

Run the same Jest command. Expected: PASS.

### Task 2: Render nonzero term-link contexts without changing defaults

**Files:**
- Modify: `tests/php/post-terms-color-signal-contract.php`
- Modify: `packages/core/src/blocks/core/post-terms/init.php`

**Step 1: Write the failing PHP contract**

Extend the Tag Processor double to traverse tags by name. Assert that:

- the server support map enables the second signal;
- active wrapper markup with the default/zero link signal leaves anchors untouched;
- a nonzero `contentColorSignal` adds `sm-palette-*`, `sm-variation-*`, `sm-color-signal-*`, `data-palette`, `data-palette-variation`, `data-color-signal`, and `data-inherit-parent-palette="true"` to every term anchor;
- wrapper signal values remain unchanged and separators/prefix/suffix markup survive.

**Step 2: Run the contract to verify RED**

Run:

```bash
"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/post-terms-color-signal-contract.php
```

Expected: FAIL because term anchors do not receive nested signal markup.

**Step 3: Implement the minimal PHP rendering change**

Mirror `contentColorSignal: true` in the server support map. After decorating the wrapper, return unchanged nested markup when the content signal is zero. Otherwise, traverse all `<a>` elements and apply a Color Signal attribute set built from the block palette plus `contentPaletteVariation` and `contentColorSignal`, declaring parent-palette inheritance for runtime recomputation.

**Step 4: Run the contract to verify GREEN**

Run the same PHP command. Expected: `post terms Color Signal contract ok`.

### Task 3: Pin frontend runtime inheritance

**Files:**
- Modify: `packages/color-signal/src/frontend/update-block-signal.test.js`
- Modify only if the failing test proves necessary: `packages/color-signal/src/frontend/update-block-signal.js`

**Step 1: Write the failing-or-confirming runtime test**

Build a Post Terms wrapper containing a decorated term anchor. Run `updateBlockSignal()` and assert that the link inherits the wrapper palette while resolving its own nonzero signal.

**Step 2: Run the focused test**

Run:

```bash
npx jest packages/color-signal/src/frontend/update-block-signal.test.js --runInBand
```

If the test already passes, retain it as a characterization contract and do not alter production runtime code. If it fails, make only the minimum runtime correction and rerun to GREEN.

### Task 4: Verify the integrated behavior

**Files:**
- Verify all modified source and test files.

**Step 1: Run targeted contracts**

Run the focused Jest and PHP commands from Tasks 1–3.

**Step 2: Run the canonical suite**

Run under Node 22:

```bash
export NVM_DIR="/Users/georgeolaru/.nvm" && source "/Users/georgeolaru/.nvm/nvm.sh" && nvm use 22
npm test
```

Expected: all fast tests pass.

**Step 3: Build runtime bundles**

Run under the same Node 22 shell:

```bash
npm run build
```

Expected: webpack/package build exits zero and refreshes the active plugin bundles.

**Step 4: Verify Site Editor, Post Editor, and frontend**

On `style-manager.local`, select Categories/Post Terms, activate Color Signal, and confirm separate “Block Color Signal” and “Term Links Color Signal” controls. Confirm signal None preserves inherited badges, nonzero term-link signals change computed `--sm-current-*` values on each anchor, and block/link controls remain independent in both editor contexts. Reload the frontend and verify the same anchor classes, data attributes, and computed badge colors.

**Step 5: Review and commit**

Inspect `git diff`, run `git diff --check`, request code review, resolve actionable findings, and commit the implementation without adding private overlays or unrelated concurrent changes.
