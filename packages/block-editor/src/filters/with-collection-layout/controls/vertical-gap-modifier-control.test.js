const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const controlsDir = __dirname;
const verticalGapControlPath = path.join(controlsDir, 'vertical-gap-modifier-control.js');
const classicLayoutControlsPath = path.join(controlsDir, 'classic-layout-controls.js');
const parametricGridAnatomyControlsPath = path.join(
  controlsDir,
  'parametric-layout-controls',
  'grid-anatomy-controls.js'
);

test('vertical gap modifier control exposes the agreed label and range', () => {
  const source = fs.readFileSync(verticalGapControlPath, 'utf8');

  assert.match(source, /Vertical Gap Modifier/);
  assert.match(source, /min=\{\s*0\.5\s*\}/);
  assert.match(source, /max=\{\s*2\s*\}/);
  assert.match(source, /step=\{\s*0\.5\s*\}/);
});

test('classic and parametric layout panels render the vertical gap modifier control', () => {
  const classicSource = fs.readFileSync(classicLayoutControlsPath, 'utf8');
  const parametricSource = fs.readFileSync(parametricGridAnatomyControlsPath, 'utf8');

  assert.match(classicSource, /VerticalGapModifierControl/);
  assert.match(parametricSource, /VerticalGapModifierControl/);
});
