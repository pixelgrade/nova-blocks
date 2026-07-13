const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

test('Cards Collection preview does not mark defaults as generated when placeholder images are unavailable', () => {
  assert.match(
    source,
    /getRandomImages\(\)\.then\( placeholderImages => \{[\s\S]*?if \( ! Array\.isArray\( placeholderImages \) \|\| ! placeholderImages\.length \) \{[\s\S]*?return;[\s\S]*?\}/
  );

  assert.match(
    source,
    /updateBlockAttributes\( block\.clientId,\s*\{ defaultsGenerated:\s*true,\s*images \}\s*\);/
  );
});

test('Cards Collection preview treats generated empty image defaults as stale', () => {
  assert.match(
    source,
    /const hasGeneratedImageDefaults = block =>[\s\S]*?block\.attributes\.defaultsGenerated[\s\S]*?Array\.isArray\( block\.attributes\.images \)[\s\S]*?block\.attributes\.images\.length;/
  );

  assert.match(
    source,
    /const defaultsGenerated = innerBlocks\.every\( hasGeneratedImageDefaults \);/
  );

  assert.match(
    source,
    /if \( ! hasGeneratedImageDefaults\( block \) \) \{[\s\S]*?updateBlockAttributes\( block\.clientId,\s*\{ defaultsGenerated:\s*true,\s*images \}\s*\);/
  );
});

test('Cards Collection preview assigns placeholder images without repeating until the set is exhausted', () => {
  assert.match(
    source,
    /const usedImages = getUsedPlaceholderImages\( innerBlocks \);/
  );

  assert.match(
    source,
    /const images = getUniquePlaceholderImages\( placeholderImages,\s*usedImages,\s*1 \);[\s\S]*?usedImages\.push\( \.\.\.images \);[\s\S]*?updateBlockAttributes\( block\.clientId,\s*\{ defaultsGenerated:\s*true,\s*images \}\s*\);/
  );
});
