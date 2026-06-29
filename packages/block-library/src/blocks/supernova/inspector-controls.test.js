const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'inspector-controls.js'), 'utf8');

test('content type controls stay limited to predefined fields and custom blocks', () => {
  assert.doesNotMatch(
    source,
    /current-post/
  );

  assert.match(
    source,
    /postsToShow === 1 && columns === 1/
  );

  assert.match(
    source,
    /\{ label: __\( 'Pre-defined fields', '__plugin_txtd' \), value: 'fields' \}/
  );

  assert.match(
    source,
    /\{ label: __\( 'Custom Blocks', '__plugin_txtd' \), value: 'custom' \}/
  );
});
