# Collection Leading Items Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use $executing-plans to implement this plan task-by-task.

**Goal:** Turn Patch LT's injected header brick into a first-class, editor-visible Nova Blocks collection-leading-item contract without coupling Nova to Patch markup.

**Architecture:** Nova owns a structured leading-item descriptor, wrapper semantics, editor preview, pagination exclusion, collection targeting, and layout eligibility. Anima registers Patch-specific header and archive-title descriptors, exposes the opt-in as a Supernova block style, and keeps typography, color, spacing, and visual treatment in its tokenized utility layer. Masonry and Classic accept structured leading items in normal flow; Parametric and Carousel reject structured descriptors unless a future explicit placement strategy is added.

**Tech Stack:** WordPress PHP filters and dynamic rendering, Gutenberg React components, Nova's `novablocks` data store, Jest/jsdom, standalone PHP contract tests, Anima SCSS, WordPress Studio, Node 22.

---

## Contract

A leading-item descriptor has this shape:

```php
[
    'id'               => 'anima-site-header',
    'role'             => 'site-header',
    'className'        => 'nb-collection__layout-item--header-brick',
    'markup'           => '<div class="c-header-brick">…</div>',
    'supportedLayouts' => [ 'masonry', 'classic' ],
    'requiredCollectionClassName' => 'is-style-anima-collection-header',
    'editorPreview'    => true,
]
```

Nova renders accepted descriptors as direct children of `.nb-collection__layout` with:

```html
<div
  class="nb-collection__layout-item nb-collection__layout-item--leading …"
  data-nb-collection-item-role="site-header"
  data-nb-collection-item-id="anima-site-header">
  …
</div>
```

Descriptor IDs and CSS classes are normalized in PHP and JavaScript; accepted IDs are first-wins. The `markup` field is a trusted-provider contract and must contain already-escaped dynamic values because Nova renders it verbatim in PHP and Gutenberg `RawHTML`.

The legacy `novablocks/collection_leading_items_markup` filter remains layout-neutral for backward compatibility. New integrations must use structured descriptors so Nova can enforce layout eligibility, semantic wrappers, editor parity, collection targeting, and pagination behavior.

## Alternatives considered

1. **Nest the complete `novablocks/header` block inside a card.** Rejected: that shell emits the global mobile toggle and assumes sticky/transparent page-header behavior.
2. **Create a new editable child block inside Supernova.** Deferred: Query-based collections use their inner block as a post-card blueprint, so arbitrary children would require a larger content-model migration.
3. **Structured provider descriptors with an editor preview.** Selected: it formalizes the existing extension seam, keeps theme markup outside Nova, preserves Query behavior, and can later become an editable block without changing frontend semantics.

### Task 1: Structured PHP contract

**Files:**
- Modify: `tests/php/collection-leading-items-contract.php`
- Modify: `lib/block-rendering.php`

1. Add failing assertions for descriptor normalization, semantic wrapper attributes, supported-layout filtering, ordering before cards, and legacy filter compatibility.
2. Run with the Local arm64 PHP binary and verify the new assertion fails because descriptors are not rendered.
3. Add the smallest normalizer/renderer in `lib/block-rendering.php`.
4. Re-run and verify the contract passes.

### Task 2: Editor descriptor filtering and preview

**Files:**
- Create: `packages/collection/src/components/collection-leading-items/index.js`
- Create: `packages/collection/src/components/collection-leading-items/index.test.js`
- Modify: `packages/collection/src/components/index.js`
- Modify: `packages/block-library/src/blocks/supernova/components/posts-collection-layout/index.js`
- Modify: `packages/block-library/src/blocks/supernova/components/not-posts-collection-layout/index.js`

1. Write failing Jest cases proving Masonry/Classic descriptors render and Parametric/Carousel descriptors are ignored.
2. Run the focused Jest file under Node 22 and confirm RED.
3. Implement a pure filter plus `RawHTML` preview component reading `settings.collectionLeadingItems`.
4. Insert previews before generated posts/cards in both collection edit paths.
5. Re-run the focused tests and existing Supernova edit tests.

### Task 3: Generic pagination semantics

**Files:**
- Modify: `packages/collection/src/frontend/load-more/extract-payload.js`
- Modify: `packages/collection/src/frontend/load-more/extract-payload.test.js`

1. Add a failing test for an unknown leading role marked only with `data-nb-collection-item-role`.
2. Update extraction to exclude semantic leading items while retaining the old class fallback.
3. Verify focused Jest tests pass.

### Task 4: Anima provider migration

**Files:**
- Modify: `inc/integrations/novablocks.php`
- Modify: `src/scss/utility/_collection-collage.scss`
- Modify: `test/patch-collage-token-contract.test.js`
- Create: `test/collection-leading-items-contract.php`

1. Write failing contracts for descriptor registration, editor settings payload, allowed layouts, and tokenized editor selectors.
2. Extract header/archive markup factories and register structured descriptors.
3. Add the header descriptor to `novablocks_block_editor_settings` when the collage treatment is enabled.
4. Share the Patch header styling between frontend Masonry/Classic scopes and the editor preview without moving theme semantics into Nova.
5. Verify Anima contracts.

### Task 5: Build, sync, and live verification

**Files:**
- Generated Nova `build/` assets
- Generated Anima `dist/css/utility*.css`
- Studio mirrors under `/Users/georgeolaru/Studio/patch-lt-starter`

1. Run focused tests, then the relevant Nova and Anima suites.
2. Switch to Node 22 before every build.
3. Build Nova and Anima, sync their generated runtime assets to the Patch Studio site, and restart Studio only if PHP opcode caching requires it.
4. Verify frontend Patch fidelity and one-column fallback.
5. Verify the header brick is visible in the Site Editor.
6. Temporarily exercise Classic and confirm the header is a normal first grid cell.
7. Temporarily exercise Parametric and Carousel and confirm no structured leading item is injected.
8. Restore the Patch starter to Masonry + Original Ratio and review exact diffs.
