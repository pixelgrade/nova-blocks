const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'block-controls.js'), 'utf8');

test('Add New Card clones the card design and content with a unique placeholder image', () => {
  assert.match(
    source,
    /const usedImages = getUsedPlaceholderImages\( innerBlocks \);[\s\S]*?const images = getUniquePlaceholderImages\( placeholderImages,\s*usedImages,\s*1 \);/
  );

  assert.match(
    source,
    /cloneBlock\( lastBlock,\s*\{[\s\S]*?images,[\s\S]*?defaultsGenerated:\s*true[\s\S]*?\}\s*\)/
  );

  assert.match(
    source,
    /insertCard\( newBlock \);/
  );
});

test('card insertion and parent count update are committed as one editor transaction', () => {
  assert.match(
    source,
    /const registry = useRegistry\(\);/
  );

  assert.match(
    source,
    /const insertCard = useCallback\( block => \{[\s\S]*?registry\.batch\( \(\) => \{[\s\S]*?replaceInnerBlocks\( clientId, newInnerBlocks \);[\s\S]*?updateBlockAttributes\( clientId, \{ postsToShow: newInnerBlocks\.length \} \);[\s\S]*?\}\s*\);/
  );
});

test('Add Blank Card is fully initialized before entering editor history', () => {
  assert.match(
    source,
    /const addBlankCard = useCallback\( async \(\) => \{[\s\S]*?const defaults = await getNewDefaults\( innerBlockAttributes, usedImages \);[\s\S]*?createBlock\( 'novablocks\/supernova-item', \{[\s\S]*?\.\.\.defaults,[\s\S]*?defaultsGenerated: true[\s\S]*?insertCard\( newBlock \);/
  );

  assert.match(
    source,
    /onClick=\{ \(\) => \{\s*addBlankCard\(\);\s*onClose\(\);/
  );
});
