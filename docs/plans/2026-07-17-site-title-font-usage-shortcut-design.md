# Site Title Font Usage Shortcut Design

Date: 2026-07-17
Status: Decided
Repos affected: Style Manager, Nova Blocks, Anima LT

## Objective

Expose the existing Style Manager **Site Title** font Usage setting directly in the Typography panel of `core/site-title`.

The in-block selector is a contextual shortcut. It edits the same global setting as **Pixelgrade Design → Typography → Usage → Site Title**, so changing the font from either surface updates the other and changes every semantic Site Title across the site.

## Product Contract

- There is one Site Title typography decision and two synchronized entry points.
- The shortcut changes the global `site_title_font` setting; it does not write a block attribute or `style.typography.fontFamily` override.
- The control is labeled as site-wide, for example **Site Title Font** with the help text **Changes the Site Title everywhere.**
- Style Manager's existing Pixelgrade Cloud, Google, system, theme, and third-party catalogs remain the only font catalog.
- The existing Plus trial, entitlement, and save behavior applies unchanged.
- A curated **Staff Picks · Wordmarks** collection helps users find display faces suited to textual logos without restricting access to the full catalog.

## Ownership

### Style Manager

Style Manager owns the feature:

- the reusable font-family picker;
- font catalog and source grouping;
- searchable/windowed results and lazy previews;
- the `site_title_font` setting adapter;
- two-way synchronization between Usage and the block inspector;
- webfont loading in the editor canvas;
- Plus trial/save behavior and premium-font entitlements;
- registration of the `core/site-title` inspector extension when the semantic setting exists.

The existing picker UI should be extracted from `src/_js/site-editor/font-control.js` into a reusable component rather than copied into a Nova bundle.

### Anima LT

Anima continues to declare the semantic field:

- setting: `site_title_font`;
- properties prefix: `--theme-site-title-`;
- connected font defaults and supported subfields.

Anima does not add a second inspector implementation. Themes that do not expose a compatible semantic Site Title font setting simply do not receive the shortcut.

### Nova Blocks

Nova continues to consume `--theme-site-title-*` for `core/site-title` and to provide Wordmark/Fit Text mechanics. It does not own font discovery, persistence, or entitlement.

Nova may need a small Fit Text invalidation bridge only if live verification proves core does not remeasure after an asynchronously loaded family becomes active. Such a bridge must reuse the existing local, non-persistent Fit Text revision and must not serialize the font choice.

## UI Behavior

The control appears inside Site Title → Typography when all of the following are true:

1. Style Manager is active in the Site Editor.
2. The active theme registered a compatible `site_title_font` font setting.
3. The selected block is `core/site-title`.
4. The user can edit the global design setting.

The collapsed control shows the current global family. Opening it uses the same picker as Usage:

- search;
- source groups;
- font previews;
- Staff Picks filters, including Wordmarks;
- selected-family indication;
- keyboard and listbox behavior.

The shortcut must not hide or silently override a native core control. If a theme exposes a separate block-local font-family control, the global shortcut remains explicitly labeled as site-wide and authored local overrides remain visible as local decisions.

## Data Flow

1. Both controls subscribe to the same `wp.customize( 'site_title_font' )` value through one shared setting hook/adapter.
2. Selecting a family creates the same next setting value regardless of which control initiated the change.
3. The family change preserves compatible Site Title subfields and refreshes incompatible variants through the existing Style Manager font-selection logic.
4. Style Manager updates `--theme-site-title-*`, loads the chosen face into the editor canvas, and previews every Site Title.
5. The other control receives the setting update and immediately reflects the same selected family.
6. Saving persists the existing global setting once. No Site Title block markup or undo history records a font-family choice.
7. The frontend consumes the unchanged semantic token chain.

## Curated Wordmark Fonts

Add a `wordmarks` Staff Picks collection alongside headings, body, and handwriting. It may combine Pixelgrade Cloud and Google families; source is metadata, not the organizing principle.

The bundled collection provides a resilient baseline. A Pixelgrade Cloud payload may replace it through the existing `styleManager.fonts.staff_picks` override. Families unavailable in the site's catalog are filtered out, matching the existing Staff Picks behavior.

The first collection should favor distinctive display faces that remain legible as short, fitted marks. Curation should consider uppercase quality, distinctive rhythm, available weights, and width diversity rather than treating every heading face as a logo face.

## Failure Modes

- If `site_title_font` is unavailable, do not render a disabled or misleading shortcut.
- If a previously selected family is missing from the current catalog, preserve and display its value rather than silently replacing it.
- If preview loading fails, keep the saved selection and render through its fallback stack; a network failure must not corrupt the setting.
- If Fit Text measures before the webfont activates, remeasure after activation without adding a persistent attribute or undo level.
- If Style Manager is inactive, Nova's existing Site Title behavior remains unchanged.

## Verification

### Automated

- The inspector extension appears only for `core/site-title` with a compatible setting.
- Picking in the block inspector updates `site_title_font` and writes no block attribute.
- Picking in Usage updates the inspector's selected value.
- The shared picker still exposes Cloud, Google, system, theme, third-party, and recommended sources.
- Wordmarks is filtered to locally available families and accepts a cloud override.
- Trial/save and premium-font entitlement behavior matches Usage.
- A missing setting or inactive Style Manager leaves core behavior untouched.

### Browser

- Change the family from the block inspector, open Typography → Usage, and confirm the same family is selected.
- Change it from Usage and confirm the open Site Title inspector updates without reselecting the block.
- Confirm every Site Title changes in the Site Editor and frontend after save/reload.
- Test Pixelgrade Cloud and Google families, including an uncached face.
- With Fit Text enabled, verify the title remeasures after the chosen face loads and does not flash, disappear, or overflow.
- Verify free trial, Plus save, and unavailable-premium-font states.

## Non-Goals

- A per-block arbitrary font override.
- A Nova-specific font catalog or loader.
- A second Site Title setting or token family.
- A logo-only typography system separate from Style Manager Usage.
- Replacing the existing Site Title Appearance, letter-spacing, case, or Fit Text controls.
