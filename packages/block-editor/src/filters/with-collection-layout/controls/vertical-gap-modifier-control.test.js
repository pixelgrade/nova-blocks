const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const controlsDir = __dirname;
const verticalGapControlPath = path.join(controlsDir, 'vertical-gap-modifier-control.js');
const settingsTabPath = path.join(controlsDir, 'settings-tab.js');
const parametricGridAnatomyControlsPath = path.join(
  controlsDir,
  'parametric-layout-controls',
  'grid-anatomy-controls.js'
);

test('vertical gap control exposes the agreed label and range', () => {
  const source = fs.readFileSync(verticalGapControlPath, 'utf8');

  // Renamed from "Vertical Gap Modifier" in the View C reorg; the attribute
  // (verticalGapModifier) and range stay untouched.
  assert.match(source, /'Vertical Gap'/);
  assert.match(source, /verticalGapModifier/);
  assert.match(source, /min=\{\s*0\.5\s*\}/);
  assert.match(source, /max=\{\s*2\s*\}/);
  assert.match(source, /step=\{\s*0\.5\s*\}/);
});

test('the Settings tab owns the gap controls for every composition', () => {
  const settingsSource = fs.readFileSync(settingsTabPath, 'utf8');
  const anatomySource = fs.readFileSync(parametricGridAnatomyControlsPath, 'utf8');

  // Gaps are free-tier basics: they live once, in Settings, and are never
  // swallowed into the gated parametric groups (the pre-reorg bug).
  assert.match(settingsSource, /VerticalGapModifierControl/);
  assert.match(settingsSource, /ItemsGapControls/);
  assert.doesNotMatch(anatomySource, /VerticalGapModifierControl/);
  assert.doesNotMatch(anatomySource, /ItemsGapControls/);
});
