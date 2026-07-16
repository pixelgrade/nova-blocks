/**
 * Source contract for the Card Styles wiring (node:test — the section lives
 * behind bare `@novablocks/*` imports jest cannot resolve for this package;
 * the data/engine semantics are pinned for real in definitions.test.js).
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const read = (relative) => fs.readFileSync(path.join(__dirname, relative), 'utf8');

const controls = read('./controls.js');
const edit = read('../edit.js');
const thumb = read('./card-style-thumb.js');

test('the section is supernova-only, top of drawer (order 5), one Presets tab', () => {
  assert.match(controls, /<ControlsSection id=\{ 'card-styles' \} label=\{ __\( 'Card Styles', '__plugin_txtd' \) \} order=\{ 5 \}>/);
  assert.match(controls, /<ControlsTab label=\{ __\( 'Presets', '__plugin_txtd' \) \}>/);
  assert.match(edit, /<CardStyleControls \{ \.\.\.props \} key=\{ 'card-style-controls' \}\/>/);
  assert.match(edit, /import CardStyleControls from '\.\/card-styles\/controls'/);
});

test('tiles run through PresetCardsControl managed mode with the 19-attr family boundary', () => {
  assert.match(controls, /managedAttributes=\{ CARD_STYLE_MANAGED_ATTRIBUTES \}/);
  assert.match(controls, /options=\{ options \}/);
  // ONE raw setAttributes patch: props spread provides the block's own
  // setAttributes; no updateBlock()/getUpdatedAttributes call-site detour.
  assert.doesNotMatch(controls, /updateBlock\(|getUpdatedAttributes\(/);
});

test('context resolution is reactive and repaint-aware', () => {
  assert.match(controls, /useSelect\( \(\) => getParentVariation\( clientId \), \[ clientId \] \)/);
  assert.match(controls, /window\.styleManager\?\.colorsConfig/);
  assert.match(controls, /\[ referenceVariation, colorsConfig \]/);
});

test('thumbnails paint from the live palettes payload at the absolute variation', () => {
  assert.match(thumb, /getPaletteConfig\( palette \)/);
  assert.match(thumb, /variations\?\.\[ variation - 1 \]/);
  assert.match(thumb, /nb-card-style-thumb--\$\{ cardLayout \}/);
});

test('no Plus gating chrome was added (plain parallax is free) and no stored tile identity exists', () => {
  assert.doesNotMatch(controls, /TryAndPlay|PlusBadge|usePlusGate/);
  [controls, read('./definitions.js'), thumb].forEach((source) => {
    assert.doesNotMatch(source, /presetId|cardStyleId/);
  });
});
