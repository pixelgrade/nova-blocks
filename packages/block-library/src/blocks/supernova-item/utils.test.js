const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'utils.js'), 'utf8');

test('Supernova item placeholder defaults skip images already used by sibling cards', () => {
  assert.match(
    source,
    /export async function getNewDefaults\( attributes,\s*usedImages = \[\] \)/
  );

  assert.match(
    source,
    /const randomImages = getUniquePlaceholderImages\( placeholderImages,\s*usedImages,\s*numberOfImages \);/
  );
});
