const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

test('automatic card count synchronization does not create separate undo history entries', () => {
  assert.match(
    source,
    /const \{ replaceInnerBlocks, updateBlockAttributes, __unstableMarkNextChangeAsNotPersistent \} = useDispatch\( 'core\/block-editor' \);/
  );

  assert.match(
    source,
    /__unstableMarkNextChangeAsNotPersistent\(\);\s*updateBlockAttributes\( clientId, \{ postsToShow: innerBlocks\.length \} \);/
  );

  assert.match(
    source,
    /__unstableMarkNextChangeAsNotPersistent\(\);\s*replaceInnerBlocks\( clientId, newInnerBlocks \);/
  );

  assert.match(
    source,
    /if \( postsToShowValue\.current !== innerBlocks\.length \) \{\s*__unstableMarkNextChangeAsNotPersistent\(\);\s*updateBlockAttributes\( clientId, \{ postsToShow: innerBlocks\.length \} \);/
  );
});
