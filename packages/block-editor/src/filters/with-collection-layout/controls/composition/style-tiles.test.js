const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'style-tiles.js'), 'utf8');

test('selecting the Parametric style tile clears stale 3D grid state', () => {
  assert.match(
    source,
    /const getStyleTileAttributes = \( layoutStyle \) => \{[\s\S]*?'parametric' === layoutStyle[\s\S]*?pile3dEffect:\s*false/
  );
  assert.match(
    source,
    /onClick=\{ \(\) => setAttributes\( getStyleTileAttributes\( tile\.value \) \) \}/
  );
});
