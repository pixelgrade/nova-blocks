# Sharing System Button Trigger Design

**Date:** 2026-08-14
**Status:** Validated with George on 2026-08-14

## Goal

Make the Sharing System trigger a fully editable, semantic core Button while keeping its appearance independent from the sharing overlay. A directly placed Sharing System block should gain the same Button styles and controls available elsewhere in the editor—including Nova Color Signal—without duplicating Button behavior inside the Sharing System block.

## Current Behavior

`novablocks/sharing-overlay` currently renders hard-coded Button-shaped markup in both editor and PHP. The markup uses `.wp-block-buttons`, `.wp-block-button`, and `.wp-block-button__link`, so themes style it like a Button, but it is not a `core/button` block and exposes none of the Button block's inspector controls.

The Sharing System's existing Color Signal belongs to `.novablocks-sharing__wrap` and therefore styles the overlay panel. It does not establish a separate authored context for the trigger. The trigger label is stored in `buttonLabel`, while the frontend script injects the Share icon and binds the overlay behavior to `.js-sharing-overlay-trigger`.

## Decisions

1. **Use a real inner core Button.** Directly placed Sharing System blocks contain a locked `core/buttons` → `core/button` composition instead of reimplementing Button controls.
2. **Keep trigger and overlay styling independent.** The inner Button owns its styles, dimensions, typography, and Color Signal. The outer Sharing System keeps its existing Color Signal for the overlay.
3. **Preserve semantic action markup.** The inner Button is initialized with `tagName: "button"` and `type: "button"`. Nova Blocks requires WordPress 7.0, where this core Button contract is available.
4. **Lock structure, not design.** Users may edit the label and Button appearance but may not remove, replace, duplicate, or reorder the trigger structure.
5. **Keep legacy and programmatic embeds working.** Existing self-closing blocks, Post Meta embeds, and Header embeds retain the current PHP-generated trigger whenever no saved inner Button content is present.

## Block Architecture

The editable composition is:

```text
Sharing System
└── Buttons
    └── Button: “Share”
```

The outer block uses a locked inner-block template containing one `core/buttons` block and one `core/button`. The Button starts with:

```js
{
  tagName: 'button',
  type: 'button',
  text: 'Share'
}
```

The intermediate Buttons block preserves core's expected parent relationship and exposes familiar justification controls. The nested Button exposes Anima's Primary, Secondary, and Text styles, Nova Color Signal, editable text, width, and any typography, spacing, border, or other controls enabled by the active theme.

Sharing System remains responsible only for overlay configuration and interaction: enabled sharing sections and services, heading level, preview, positioning, and overlay Color Signal.

## Editor Experience

Selecting Sharing System shows its overlay preview and overlay settings. The existing Color Signal section continues to describe the overlay boundary; nearby Sharing System copy should make that scope explicit as “Overlay appearance.”

Selecting the nested Button shows the ordinary Button inspector and Nova Color Signal controls. Clicking the trigger in the editor selects or edits the Button; it does not open the frontend overlay. The locked composition stays visible in List View so the parent and trigger remain discoverable, but structural operations are unavailable.

The parent and child use separate attributes. Changing the Button signal must not recolor the overlay, and changing the overlay signal must not recolor the Button. The nested Button's rich-text value becomes the only source of truth for the trigger label after inner content exists.

## Serialization and Backward Compatibility

Sharing System saves `InnerBlocks.Content` inside its block delimiters. On the frontend, the dynamic PHP renderer receives the rendered inner content and places it inside a stable `.novablocks-sharing__trigger` wrapper.

For blocks with no inner content, PHP renders the legacy trigger exactly as it does today and reads its label from `buttonLabel`. When an existing directly placed block is opened in the editor, the locked template seeds the nested Button from the legacy label. Once saved, the nested Button is authoritative; `buttonLabel` may remain in attributes for compatibility but is not synchronized with the child, avoiding two competing text sources.

Post Meta and Header generate self-closing Sharing System blocks on the server. They continue through the fallback path and remain theme-default buttons because they are not independently editable compositions.

Dynamic blocks do not validate their rendered HTML against a static save function, but the migration must still preserve clean editor state: after the first save with inner content, reload must not recreate children, alter attributes, or dirty the template again.

## Frontend Interaction

JavaScript binds to the stable trigger wrapper and resolves its descendant `.wp-block-button__link`; it no longer depends on a user-editable custom class. The handler prevents default navigation defensively, opens and positions the existing overlay, and stops propagation as it does today.

The frontend script continues to inject the Share icon into the actual button. Initialization remains idempotent so page transitions or repeated bundle evaluation cannot add duplicate icons or event handlers. Popup positioning uses the core Button wrapper when present and falls back to the trigger element for legacy markup.

No new overlay behavior is introduced. Close, outside-click, resize, copy-link, social sharing, email, and print behavior remain under the current Sharing System runtime.

## Styling Ownership

Nova owns the separation of the two block-level Color Signal contexts but introduces no new hard-coded colors or parallel color tokens.

- The nested `core/button` uses the existing core Button Color Signal adapter and inherits the nearest contextual palette according to that adapter's contract.
- The overlay continues to consume its existing `--sm-current-*` values through `.novablocks-sharing__wrap`.
- Anima continues to own Button semantics through its existing `--theme-button-*` variables and Primary, Secondary, and Text styles.

## Verification

Add source and editor contracts proving the locked template, semantic Button attributes, allowed structure, saved inner content, and independent Color Signal ownership. Add standalone PHP contracts for both render paths: supplied inner Button content and the legacy `buttonLabel` fallback. Pin Post Meta and Header compatibility.

On `localhost:8903`, verify:

- parent selection shows overlay controls and preview;
- Button selection exposes its normal styles and Color Signal;
- trigger and overlay signals can resolve to different computed `--sm-current-*` values;
- label editing, justification, width, undo, save, and reload remain clean;
- the locked structure cannot be removed or converted into unrelated content;
- Primary, Secondary, and Text styles render correctly on the frontend;
- the trigger remains `<button type="button">`;
- icon insertion, open, positioning, outside-click close, and repeated initialization work;
- legacy Post Meta and Header triggers remain unchanged.

Run targeted Jest/Node and standalone PHP contracts first, then the canonical `npm test`. Because editor and frontend runtime sources change, build under Node 22 and perform live Site Editor plus frontend reload checks.

## Out of Scope

- Making Post Meta or Header embeds independently editable.
- Replacing or redesigning the sharing overlay.
- Adding new Button styles, design tokens, or overlay interaction features.
- Broad accessibility or focus-management changes unrelated to the trigger composition.
