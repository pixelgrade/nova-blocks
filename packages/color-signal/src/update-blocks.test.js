const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'update-blocks.js'), 'utf8');

test('color signal updater does not force-load nested template part entities', () => {
  assert.doesNotMatch(
    source,
    /core\/template-part[\s\S]*?getBlocks\(\s*block\.clientId\s*\)/
  );
});

test('color signal updater only walks blocks when the root block list changes', () => {
  assert.match(
    source,
    /if\s*\(\s*blockListChanged\s*\)\s*\{[\s\S]*?blockList\.forEach/
  );

  assert.doesNotMatch(
    source,
    /\/\/\s*if\s*\(\s*blockListChanged\s*\)/
  );
});
