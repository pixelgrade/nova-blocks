const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const controlsPath = path.join(__dirname, 'with-color-signal-controls.js');
const controlsSource = fs.readFileSync(controlsPath, 'utf8');

const currentAttributesPath = path.join(__dirname, '..', 'components', 'use-current-color-signal-attributes.js');
const currentAttributesSource = fs.readFileSync(currentAttributesPath, 'utf8');
const emphasisAreaControlPath = path.join(__dirname, '..', 'components', 'emphasis-area-control', 'index.js');
const emphasisAreaControlSource = fs.readFileSync(emphasisAreaControlPath, 'utf8');

test('color signal controls re-render when emphasis area changes', () => {
  assert.match(
    controlsSource,
    /COLOR_SIGNAL_ATTR_KEYS\s*=\s*\[[\s\S]*?'emphasisArea'/
  );

  assert.match(
    currentAttributesSource,
    /KEYS\s*=\s*\[[\s\S]*?'emphasisArea'/
  );

  assert.match(
    currentAttributesSource,
    /attributes\.emphasisArea/
  );
} );

test('emphasis area control is hidden when block color signal is none', () => {
  assert.match(
    emphasisAreaControlSource,
    /colorSignal/
  );

  assert.match(
    emphasisAreaControlSource,
    /if\s*\(\s*colorSignal\s*===\s*0\s*\)\s*\{[\s\S]*?return\s+null/
  );
} );
