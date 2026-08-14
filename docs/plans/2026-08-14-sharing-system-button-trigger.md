# Sharing System Button Trigger Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Follow superpowers:test-driven-development for every behavior change, load `pxg-smoke` before touching the Studio smoke site, and use superpowers:verification-before-completion before reporting success.

**Goal:** Replace the directly inserted Sharing System block's hard-coded trigger preview with a locked, semantic `core/buttons` → `core/button` composition that exposes the normal Button design tools (including Nova Color Signal), while preserving the existing overlay controls and the PHP fallback used by legacy, Header, and Post Meta embeds.

**Architecture:** Per `docs/plans/2026-08-14-sharing-system-button-trigger-design.md`. The dynamic outer block saves inner blocks, renders them inside a stable `.novablocks-sharing__trigger` boundary, and continues to own only overlay configuration. Its one nested core Button owns trigger text and appearance. PHP emits the former trigger markup only when rendered inner content is empty. Frontend JavaScript resolves the actual `.wp-block-button__link` through the stable boundary and retains a legacy-selector fallback.

**Tech Stack:** WordPress 7 Block API, React/JSX, `@wordpress/block-editor`, dynamic PHP block rendering, jQuery frontend runtime, SCSS, native `node:test`, Jest/jsdom, standalone PHP contracts, webpack 4 through `@wordpress/scripts`, Node 22.

**Working rules:**

- Work only on `feature/sharing-system-button-trigger` in `.worktrees/sharing-system-button-trigger`; do not disturb the unrelated changes in the primary checkout.
- Run all npm/build commands under Node 22: `export NVM_DIR="/Users/georgeolaru/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 22`.
- Use RED → GREEN → REFACTOR for each task. Never change production code before the new targeted test has failed for the expected reason.
- Keep the two Color Signal contexts independent. Use the existing Button and overlay token systems; add no colors or new design tokens.
- Build before live verification because editor and frontend bundle sources change.
- Stop the Studio code-mirror watcher and preserve the exact installed plugin before any temporary worktree deployment. Restore it and confirm the mirror is clean afterward.

---

## Task 1: Pin the editable trigger composition

**Files:**

- Modify: `packages/block-library/src/blocks/sharing-overlay/block.test.js`
- Create: `packages/block-library/src/blocks/sharing-overlay/template.js`
- Create: `packages/block-library/src/blocks/sharing-overlay/template.test.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/block.json`
- Modify: `packages/block-library/src/blocks/sharing-overlay/edit.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/controls.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/index.js`

### Step 1: Write the failing metadata and source contract

Extend `block.test.js` to assert:

- `block.json.allowedBlocks` is exactly `[ 'core/buttons' ]`;
- the editor uses `useInnerBlocksProps` with `templateLock: 'all'`;
- the editor wrapper is `.novablocks-sharing__trigger`;
- the registration saves `<InnerBlocks.Content />` instead of returning `null`;
- `controls.js` no longer imports or renders `TextControl` for `buttonLabel`;
- Sharing System still declares its own Color Signal attributes and controls for the overlay.

Run:

```bash
node --test packages/block-library/src/blocks/sharing-overlay/block.test.js
```

Expected: FAIL because the block has no inner-block metadata or save implementation and still owns the label field.

### Step 2: Write the failing template behavior test

Create `template.test.js` for a pure `createSharingTriggerTemplate( buttonLabel )` helper. Assert the exact nested array:

```js
[
	[
		'core/buttons',
		{},
		[
			[
				'core/button',
				{
					tagName: 'button',
					type: 'button',
					text: buttonLabel,
				},
			],
		],
	],
]
```

Run:

```bash
npx jest packages/block-library/src/blocks/sharing-overlay/template.test.js --runInBand
```

Expected: FAIL because `template.js` does not exist.

### Step 3: Implement the smallest editor composition

- Add the pure template helper.
- Add `allowedBlocks` to `block.json`.
- Replace the hard-coded editor button with `useInnerBlocksProps( { className: 'novablocks-sharing__trigger' }, { template, templateLock: 'all' } )`.
- Seed the core Button from the compatibility `buttonLabel` attribute. The template only initializes missing children; after insertion, the child Button text is authoritative.
- Keep overlay preview rendering and parent Controls unchanged.
- Remove the parent `Button Label` control and its now-unused `TextControl` import.
- Register `save: () => <InnerBlocks.Content />`.

Do not remove `buttonLabel` from `attributes.json`; the PHP fallback and existing self-closing embeds still need it.

### Step 4: Verify GREEN and clean up

Run both targeted tests. Then inspect the diff to ensure the trigger child has semantic `tagName: 'button'` and `type: 'button'`, not an anchor.

### Step 5: Commit

```bash
git add packages/block-library/src/blocks/sharing-overlay
git commit -m "Make the Sharing trigger an editable Button"
```

---

## Task 2: Render saved inner content and preserve the legacy PHP fallback

**Files:**

- Create: `tests/php/sharing-overlay-trigger-contract.php`
- Modify: `packages/block-library/src/blocks/sharing-overlay/init.php`

### Step 1: Write the standalone render contract

Use the same WordPress-double style as the existing PHP contracts. Define a minimal `WP_Block` and doubles for the escaping, URL/title, attribute-default, data-attribute, and enqueue helpers used by the renderer.

Assert two real render calls:

1. With rendered child content such as:

   ```html
   <div class="wp-block-buttons"><div class="wp-block-button"><button type="button" class="wp-block-button__link">Styled Share</button></div></div>
   ```

   the renderer outputs that string exactly once inside `.novablocks-sharing__trigger`, does not output `.js-sharing-overlay-trigger`, and does not output the legacy label.

2. With empty content and `buttonLabel: 'Legacy Share'`, the renderer outputs `.novablocks-sharing__trigger`, the existing `.wp-block-buttons` / `.wp-block-button` structure, `.js-sharing-overlay-trigger`, and escaped `Legacy Share` text.

Also assert that the overlay markup and the current sharing data attributes remain present in both paths.

Run:

```bash
"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sharing-overlay-trigger-contract.php
```

Expected: FAIL because the renderer ignores `$content` and has no stable trigger wrapper.

### Step 2: Implement the two render paths

Inside the existing `.novablocks-sharing` root:

- always emit `<div class="novablocks-sharing__trigger">`;
- when `trim( $content ) !== ''`, output the already-rendered inner block content unchanged;
- otherwise emit the existing hard-coded trigger and label markup unchanged;
- close the trigger boundary before the overlay.

Do not alter the attribute merge, overlay Color Signal data, overlay structure, Header embed, or Post Meta embed.

### Step 3: Verify GREEN and related compatibility

Run:

```bash
"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sharing-overlay-trigger-contract.php
"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sharing-overlay-color-signal-defaults-contract.php
```

Inspect `packages/block-library/src/blocks/header/extras.php` and `packages/block-library/src/blocks/post-meta/init.php` to confirm both still generate self-closing Sharing System blocks with `buttonLabel`, which intentionally take the fallback.

### Step 4: Commit

```bash
git add packages/block-library/src/blocks/sharing-overlay/init.php tests/php/sharing-overlay-trigger-contract.php
git commit -m "Render editable Sharing triggers with a legacy fallback"
```

---

## Task 3: Bind frontend behavior through the stable trigger boundary

**Files:**

- Create: `packages/block-library/src/blocks/sharing-overlay/trigger.js`
- Create: `packages/block-library/src/blocks/sharing-overlay/trigger.test.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/block.test.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/frontend.js`

### Step 1: Write failing DOM helper tests

Using jsdom, test a pure `findSharingTrigger( block )` helper:

- it returns `.novablocks-sharing__trigger .wp-block-button__link` for the new nested Button;
- it falls back to `.js-sharing-overlay-trigger` when the stable boundary or nested link is absent;
- it returns `null` for malformed markup.

Test a pure `prependSharingTriggerIcon( trigger, iconMarkup )` helper:

- it prepends the icon before the authored Button label;
- it marks the injected SVG with `.novablocks-sharing__trigger-icon` and `aria-hidden="true"`;
- calling it twice leaves exactly one icon;
- an empty trigger or empty icon string is harmless.

Run:

```bash
npx jest packages/block-library/src/blocks/sharing-overlay/trigger.test.js --runInBand
```

Expected: FAIL because the helper does not exist.

### Step 2: Pin handler behavior in the source contract

Extend `block.test.js` to require:

- `frontend.js` imports and uses `findSharingTrigger`;
- the open handler calls `e.preventDefault()` before showing the overlay;
- the existing `data-nb-sharing-initialized` guard remains;
- popup positioning still prefers the core `.wp-block-button` wrapper.

Run the Node contract and observe the expected failure for the new helper/prevent-default behavior.

### Step 3: Implement the helper and wire the runtime

- Resolve the DOM trigger through `.novablocks-sharing__trigger .wp-block-button__link`, then the legacy class.
- Wrap the returned element in jQuery for the existing event and positioning code.
- Replace direct `$openButton.prepend( getIcon( 'share' ) )` with the idempotent helper.
- Change the click callback to receive `e`, call `e.preventDefault()`, then open and position the overlay.
- Keep event propagation, close, body click, resize, sharing services, and initialization guard behavior intact.

### Step 4: Verify GREEN

Run the Jest helper test and the native Node block contract.

### Step 5: Commit

```bash
git add packages/block-library/src/blocks/sharing-overlay
git commit -m "Bind Sharing behavior to editable Button triggers"
```

---

## Task 4: Keep editor overlay spacing attached to the new boundary

**Files:**

- Modify: `packages/block-library/src/blocks/sharing-overlay/block.test.js`
- Modify: `packages/block-library/src/blocks/sharing-overlay/editor-styles.scss`

### Step 1: Write the failing selector contract

Assert that the editor stylesheet uses:

```scss
.novablocks-sharing__trigger + .novablocks-sharing__wrap
```

and no longer keys spacing to `.wp-block-buttons + ...`.

Run the native Node block contract. Expected: FAIL on the old selector.

### Step 2: Change only the structural selector

Keep `margin-top: var(--nb-spacing)` unchanged. Add no color, size, or appearance overrides for the core Button.

### Step 3: Verify GREEN and commit

```bash
node --test packages/block-library/src/blocks/sharing-overlay/block.test.js
git add packages/block-library/src/blocks/sharing-overlay/editor-styles.scss packages/block-library/src/blocks/sharing-overlay/block.test.js
git commit -m "Align Sharing preview spacing with the trigger boundary"
```

---

## Task 5: Run the complete automated verification and production build

### Step 1: Run all focused contracts together

```bash
node --test packages/block-library/src/blocks/sharing-overlay/block.test.js
npx jest packages/block-library/src/blocks/sharing-overlay/template.test.js packages/block-library/src/blocks/sharing-overlay/trigger.test.js --runInBand
"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sharing-overlay-trigger-contract.php
"/Users/georgeolaru/Library/Application Support/Local/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php" tests/php/sharing-overlay-color-signal-defaults-contract.php
```

All must pass.

### Step 2: Run the canonical suite

```bash
npm test
```

Expected: all PHP contracts, native Node tests, main Jest bucket, and compatibility Jest bucket pass.

### Step 3: Build the runtime bundles under Node 22

```bash
npm run build
```

The command is safe in the isolated worktree. Confirm the sharing editor/frontend bundle timestamps changed and the build exits zero. Do not run it from the dirty primary checkout.

### Step 4: Re-run the canonical suite after build

```bash
npm test
```

### Step 5: Review generated and source diffs

Use `git status --short`, `git diff --check`, and `git diff --stat`. Ensure dependency symlinks and private worktree setup files are not staged.

---

## Task 6: Verify the Site Editor and frontend on localhost:8903

**Site:** `/Users/georgeolaru/Studio/pxg-smoke-gene-single-post-alexia-ponce`

### Step 1: Load the smoke-site operating procedure

Read the full `pxg-smoke` skill and verify the running site's path, port, active Nova version, and wp-code-mirror target at runtime. Do not rely solely on the dated environment note.

### Step 2: Preserve the site and pause mirroring

- Verify the mirror status before touching files.
- Stop the target's code-sync launch agent and deactivate `wp-code-mirror`.
- Back up the exact installed `nova-blocks` directory to a unique temporary path.
- Copy the worktree build one way into the Studio site's installed plugin directory; never symlink the site to the worktree.
- Restart the Studio site only if PHP bytecode/runtime caching requires it.

### Step 3: Migrate the target template through the editor

Open:

`http://localhost:8903/wp-admin/site-editor.php?canvas=edit&p=%2Fwp_template%2Fanima-lt%2F%2Fsingle`

Verify the existing self-closing Sharing System seeds exactly one locked Buttons → Button structure using its existing `Share` label. Save once, reload, and confirm the template is clean and the child structure is not recreated or duplicated.

### Step 4: Verify the authoring experience

In the Site Editor, verify:

- selecting Sharing System shows overlay settings and its overlay Color Signal;
- selecting Button shows the ordinary Button Styles/Settings and Nova Color Signal;
- label editing, Buttons justification, Button width, Primary/Secondary/Text styles, undo, and redo work;
- the Button remains `<button type="button">` in serialized markup;
- List View exposes Sharing System → Buttons → Button while structural removal/reordering is locked;
- trigger and overlay Color Signals can be set differently and produce distinct computed `--sm-current-*` values;
- the overlay preview remains spaced correctly below the trigger;
- the browser console has no new errors.

Also open the Post Editor when the shared Button Color Signal rule is exercised there and confirm its inspector behavior remains available.

### Step 5: Verify frontend behavior

On a frontend single post using the edited template, verify:

- the trigger is a real `<button type="button">` carrying the selected core Button style;
- the Share icon occurs once before the authored label;
- click opens and positions the overlay without navigation;
- close and outside click hide it;
- repeated frontend bundle evaluation does not add another icon or click handler;
- Header and Post Meta fallback triggers still render and open where present.

Record concise DOM/computed-style assertions and a screenshot if the browser skill supports it.

### Step 6: Restore the smoke site

- Restore the exact backed-up plugin directory.
- Reactivate `wp-code-mirror` and restart its watcher.
- Confirm the mirror status for the target is CLEAN.
- If the verification changed the site's Single template, restore the original template content captured before the test unless the user explicitly wants the exploratory edit retained.

---

## Task 7: Final review, commit, and handoff

### Step 1: Run completion verification from a clean source state

Follow superpowers:verification-before-completion. Capture fresh output for:

```bash
git diff --check
npm test
```

Confirm the Node 22 production build and live browser checks already passed on the final source revision.

### Step 2: Inspect the complete branch diff

```bash
git status --short
git diff cd857387...HEAD --stat
git diff cd857387...HEAD -- packages/block-library/src/blocks/sharing-overlay tests/php docs/plans
```

Confirm:

- no unrelated primary-checkout work appears;
- no dependency symlink is staged;
- no generated private file is committed;
- the outer and inner Color Signal responsibilities remain separate;
- legacy embeds retain their fallback.

### Step 3: Commit any final verified changes

```bash
git add <intentional files only>
git commit -m "Add editable Button styling to Sharing System"
```

### Step 4: Apply the branch-finishing procedure

Load superpowers:finishing-a-development-branch. Because the primary checkout contains unrelated user work, do not merge into it destructively. Leave the verified feature branch ready for review or integrate only through a safe, user-approved path.
