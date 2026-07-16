# Global Site Identity Wordmark Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use $executing-plans to implement this plan task-by-task.

**Goal:** Extend the semantic Site Title and Site Tagline blocks so a global Nova header recipe can reproduce Hive's fitted wordmark, ruled tagline, and navigation separator.

**Architecture:** Enable core Fit Text on `core/site-title`, store only a responsive maximum width, and give fitted titles a dedicated flex measurement wrapper in editor and frontend. Add reusable block styles plus a thin `novablocks/site-identity` composition block that owns the shared title/tagline measure. Compose those pieces in a new Header layout definition with a compact mobile treatment.

**Tech Stack:** WordPress 7 block editor APIs, React, Sass, PHP render filters, Node test runner/Jest, WordPress build scripts.

---

## Task 1: Specify the Site Title server contract

**Files:**
- Create: `tests/php/site-title-wordmark-contract.php`
- Modify: `bin/run-tests.sh`
- Create: `lib/site-title.php`
- Modify: `nova-blocks.php`

1. Write a contract test asserting Nova enables `supports.typography.fitText`, registers a numeric `fitTextWidth`, omits unsafe invalid widths, clamps valid widths, and creates the flex measurement wrapper without destroying existing markup or styles.
2. Run the PHP contract and confirm it fails because the integration does not exist.
3. Implement the metadata and render filters with a small width-normalization helper.
4. Run the contract and the fast PHP suite.

## Task 2: Extend the Site Title editor and add global styles

**Files:**
- Create: `packages/core/src/blocks/core/site-title/index.js`
- Create: `packages/core/src/blocks/core/site-title/with-site-title-controls.js`
- Create: `packages/core/src/blocks/core/site-title/with-site-title-wrapper.js`
- Create: `packages/core/src/blocks/core/site-title/index.test.js`
- Create: `packages/core/src/blocks/core/site-title/_style.scss`
- Create: `packages/core/src/blocks/core/site-tagline/_style.scss`
- Modify: `packages/core/src/index.js`
- Modify: `packages/core/src/style.scss`

1. Write tests for editor metadata extension, the Wordmark style registration, conditional width controls, and wrapper CSS variable output.
2. Run the focused tests and confirm failure.
3. Add the `blocks.registerBlockType`, `editor.BlockEdit`, and `editor.BlockListBlock` filters.
4. Register Wordmark and Ruled Label styles.
5. Add responsive CSS using semantic Style Manager variables, `currentColor`, and the existing spacing scale.
6. Run focused tests and package lint/test commands.

## Task 3: Add the Site Identity block

**Files:**
- Create: `packages/block-library/src/blocks/site-identity/block.json`
- Create: `packages/block-library/src/blocks/site-identity/index.js`
- Create: `packages/block-library/src/blocks/site-identity/edit.js`
- Create: `packages/block-library/src/blocks/site-identity/save.js`
- Create: `packages/block-library/src/blocks/site-identity/style.scss`
- Create: `packages/block-library/src/blocks/site-identity/editor-styles.scss`
- Create: `packages/block-library/src/blocks/site-identity/index.test.js`

1. Write a block contract for metadata, attributes, allowed inner blocks, default template, and saved class/style hooks.
2. Run it and confirm failure.
3. Register a static composition block with Site Title and Site Tagline InnerBlocks.
4. Add the shared width control, full-width brand-wrapper styling, level-0 Site Title default, and compact mobile presentation.
5. Run the focused test and package tests.

## Task 4: Add the Header Row separator style

**Files:**
- Modify: `packages/block-library/src/blocks/header-row/index.js`
- Modify: `packages/block-library/src/blocks/header-row/edit.js`
- Modify: `packages/block-library/src/blocks/header-row/style.scss`
- Create or modify: `packages/block-library/src/blocks/header-row/index.test.js`

1. Add assertions for the Rule Above style and Site Identity allowance.
2. Confirm the focused test fails.
3. Register the style, allow Site Identity in the row, and draw the separator against the row's inner container.
4. Run focused tests.

## Task 5: Compose the Editorial Masthead header layout

**Files:**
- Modify: `packages/block-library/src/blocks/header/layout-definitions.js`
- Modify: `packages/block-library/src/blocks/header/layout-definitions.test.js`

1. Extend chooser tests with an Editorial Masthead definition and its exact nested semantic block attributes.
2. Confirm the existing test fails.
3. Add the layout using the existing two-row icon, Site Identity in row one, and a Rule Above primary navigation in row two.
4. Run header definition tests.

## Task 6: Build and verify the complete behavior

**Files:** Generated build assets only where the repository's build process requires them.

1. Run `bash ./bin/run-tests.sh` under Node 22.
2. Run the relevant package build under Node 22 and inspect errors/warnings.
3. Sync or load the build in the local WordPress site.
4. Verify in the Site Editor that Site Title exposes Fit Text and Wordmark Width, the global styles appear, and the Editorial Masthead inserts valid blocks without recovery prompts.
5. Verify the frontend at desktop and narrow widths, including a long title and a removed tagline.
6. Inspect git diff for unrelated or generated changes and run the fast suite once more.
