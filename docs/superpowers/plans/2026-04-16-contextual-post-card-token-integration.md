# Contextual Post Card Token Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `novablocks/contextual-post-card` consume the existing Style Manager and Nova Blocks color-token pipeline instead of block-local semantic colors.

**Architecture:** Keep target-post resolution as-is, but derive a request-scoped contextual palette payload for the target post, emit the serialized runtime palette CSS with the block markup, and render the card with standard Nova palette and color-signal classes/data attributes. Update the block stylesheet so semantic color behavior comes from `--sm-current-*` and Nova bridge vars rather than local hex defaults.

**Tech Stack:** PHP, WordPress block rendering, Style Manager runtime palette helpers, SCSS, Node test runner, Studio `wp eval-file`

---

### Task 1: Lock the New Contracts With Failing Tests

**Files:**
- Modify: `tests/wp-eval/contextual-post-card-render-contract.php`
- Modify: `packages/block-library/src/blocks/contextual-post-card/style.test.js`
- Test: `tests/wp-eval/contextual-post-card-render-contract.php`
- Test: `packages/block-library/src/blocks/contextual-post-card/style.test.js`

- [ ] **Step 1: Write the failing render-contract assertions**

Update `tests/wp-eval/contextual-post-card-render-contract.php` so it expects:
- a contextual palette class tied to the target post, not only a custom project-color var
- standard Nova palette data attributes on the rendered card surface or wrapper
- no `data-color` escape hatch
- no `--nb-contextual-post-card-project-color` inline style

- [ ] **Step 2: Run the render contract to verify it fails**

Run:

```bash
studio wp eval-file /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-post-card-render-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
```

Expected: FAIL because the current markup still emits the project-color variable and lacks the new palette context.

- [ ] **Step 3: Write the failing stylesheet assertions**

Update `packages/block-library/src/blocks/contextual-post-card/style.test.js` so it expects:
- semantic colors to use `--sm-current-*` and/or existing Nova bridge vars
- no hardcoded contextual-post-card semantic color defaults like `#eee`, `#333`, `#fff`
- no use of `--nb-contextual-post-card-project-color` as the final rendered semantic color

- [ ] **Step 4: Run the stylesheet test to verify it fails**

Run:

```bash
node --test packages/block-library/src/blocks/contextual-post-card/style.test.js
```

Expected: FAIL because the stylesheet still declares local semantic color vars and uses the project-color var as rendered background.

### Task 2: Implement Runtime Palette Rendering and Token-Based Styles

**Files:**
- Modify: `packages/block-library/src/blocks/contextual-post-card/init.php`
- Modify: `packages/block-library/src/blocks/contextual-post-card/style.scss`
- Modify: `tests/wp-eval/contextual-post-card-render-contract.php`
- Modify: `packages/block-library/src/blocks/contextual-post-card/style.test.js`

- [ ] **Step 1: Add the minimal PHP helpers for target-post palette payload**

In `packages/block-library/src/blocks/contextual-post-card/init.php`, add focused helpers to:
- sanitize and resolve the target post color without inventing `#333333`
- derive a stable palette id for the target post
- build a contextual palette through `sm_build_contextual_palette_from_color()`
- serialize runtime CSS for that palette through the existing Style Manager serializer
- derive the minimal Nova palette attributes needed for classes and data attributes

- [ ] **Step 2: Render the block with Nova palette context**

Update the render function so the contextual card:
- emits runtime palette CSS alongside the block markup when a valid target color exists
- adds standard Nova palette classes and data attributes to the contextual card surface
- removes the old `data-color` escape hatch and custom project-color inline style
- keeps the existing min-height and structural markup intact

- [ ] **Step 3: Convert the SCSS to token consumption**

Update `packages/block-library/src/blocks/contextual-post-card/style.scss` so:
- surface and text colors use `--sm-current-*` / `--nb-*`
- hover state remains local behavior but switches through token-driven values
- local semantic color defaults are removed
- layout and interaction-specific values stay unchanged unless required for the token integration

- [ ] **Step 4: Run the focused tests and make them pass**

Run:

```bash
node --test packages/block-library/src/blocks/contextual-post-card/style.test.js
studio wp eval-file /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-post-card-render-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
```

Expected: both PASS.

- [ ] **Step 5: Run the neighboring contextual palette contracts for regression coverage**

Run:

```bash
studio wp eval-file /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-style-manager-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
studio wp eval-file /Users/georgeolaru/Local\ Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/contextual-color-palette-runtime-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
```

Expected: PASS, confirming the block reuse did not regress the shared contextual palette pipeline.

- [ ] **Step 6: Commit the implementation**

```bash
git add packages/block-library/src/blocks/contextual-post-card/init.php \
  packages/block-library/src/blocks/contextual-post-card/style.scss \
  packages/block-library/src/blocks/contextual-post-card/style.test.js \
  tests/wp-eval/contextual-post-card-render-contract.php \
  docs/superpowers/plans/2026-04-16-contextual-post-card-token-integration.md
git commit -m "Refactor contextual post card to use runtime palette tokens"
```
