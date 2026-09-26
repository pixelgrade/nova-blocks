/**
 * Source contract for the color-tile families wiring (Row Surfaces + Button roles) (node:test — the tab component
 * lives behind bare `@novablocks/block-editor` / `@wordpress/*` imports that
 * jest cannot resolve here; the data/engine semantics are pinned for real in
 * resolve-color-tile-values.test.js and color-tiles.test.js).
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const read = (relative) => fs.readFileSync(path.join(__dirname, relative), 'utf8');

const controls = read('../filters/controls.js');
const hook = read('./use-color-tiles.js');

test('the Presets tab renders FIRST in the Color Signal section, gated on the family hook', () => {
  const presetsIndex = controls.indexOf("label={ __( 'Presets', '__plugin_txtd' ) }");
  const customizeIndex = controls.indexOf("label={ __( 'Customize', '__plugin_txtd' ) }");

  assert.ok(presetsIndex !== -1, 'Presets tab exists');
  assert.ok(presetsIndex < customizeIndex, 'Presets tab is declared before Customize');
  assert.match(controls, /\{ !! colorTiles && \(/);
  assert.match(controls, /const colorTiles = useColorTiles\( props \)/);
});

test('the tiles run through PresetCardsControl managed mode with the family boundary', () => {
  assert.match(controls, /<PresetCardsControl[\s\S]*?managedAttributes=\{ colorTiles\.managedAttributes \}/);
  assert.match(controls, /<RowSurfaceThumb palette=\{ option\.palette \} variation=\{ option\.variation \} \/>/);
  assert.match(controls, /<ButtonTileThumb kind=\{ option\.kind \} palette=\{ option\.palette \} variation=\{ option\.variation \} \/>/);
  // ONE raw setAttributes patch: the control gets the block's own
  // setAttributes via { ...props }; no updateBlock()/getUpdatedAttributes
  // detour inside the Presets tab markup.
  const presetsTab = controls.slice(
    controls.indexOf("'color_signal_presets_tab'"),
    controls.indexOf("'color_signal_customize_tab'")
  );
  assert.doesNotMatch(presetsTab, /updateBlock/);
  // The tile patch is completed with the editor's mount normalization, still
  // as one setAttributes call, and that setter wins over the spread props.
  assert.match(presetsTab, /\{ \.\.\.props \}\s*setAttributes=\{ setTileAttributes \}/);
  assert.match(controls, /props\.setAttributes\(\s*getColorTileMountPatch\( patch, props\.attributes, colorSignalSupport \)\s*\)/);
});

test('the family registry + direct-parent contentColorSignal gates are in the hook', () => {
  assert.match(hook, /getColorTileFamily\( name \)/);
  assert.match(hook, /managedAttributes: family\.managedAttributes/);
  assert.match(hook, /support === true \|\| !! support\?\.contentColorSignal/);
  assert.match(hook, /if \( ! tiles \|\| parentForcesContentSync \) \{\s*return null;/);
  // Context reactivity: the reference variation is read through useSelect.
  assert.match(hook, /useSelect\( \(\) => \{\s*return tiles \? getParentVariation\( clientId \) : 1;/);
});

test('no stored tile identity anywhere in the family', () => {
  [controls, hook, read('./row-surfaces.js'), read('./color-tiles.js'), read('./resolve-color-tile-values.js')].forEach((source) => {
    assert.doesNotMatch(source, /setAttributes\(\s*\{[^}]*presetId/);
    assert.doesNotMatch(source, /rowSurfaceId/);
  });
});
