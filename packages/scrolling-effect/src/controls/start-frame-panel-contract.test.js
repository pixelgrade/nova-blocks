/**
 * Source contract for start-frame-panel.js (same source-pin style as
 * motion-recipes-managed-contract.test.js, for the same haste-map reason).
 *
 * Managed motion presets clear omitted attributes to `undefined` in memory
 * (registered defaults only return after reparse). The panel renders for
 * every scrolling effect and its FocalPointPicker onChange reads
 * `finalFocalPoint.y`, so both focal attributes must be normalized at
 * destructure or dragging the picker after applying "Still" over a Doppler
 * recipe throws `Cannot read properties of undefined (reading 'y')`.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'start-frame-panel.js'), 'utf8');

test('focalPoint and finalFocalPoint are normalized against in-memory preset clears', () => {
  assert.match(source, /focalPoint = \{ x: 0\.5, y: 0\.5 \}/);
  assert.match(source, /finalFocalPoint = \{ x: 0\.5, y: 0\.5 \}/);
});

test('the onChange still derives the final frame from the (normalized) finalFocalPoint', () => {
  assert.match(source, /y: finalFocalPoint\.y/);
});
