const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

test('legacy hero block is hidden and migrates itself to a supernova hero card', () => {
  assert.match(
    source,
    /registerBlockType\(\s*'novablocks\/hero'[\s\S]*?scope:\s*\[\s*\]/
  );

  assert.match(
    source,
    /const replacementBlock = useMemo\([\s\S]*?createBlock\(\s*'novablocks\/supernova'[\s\S]*?createBlock\(\s*'novablocks\/supernova-item'/
  );

  assert.match(
    source,
    /replaceBlock\(\s*clientId,\s*replacementBlock\s*\)/
  );

  assert.match(
    source,
    /images:\s*getLegacyHeroImages\( attributes \)/
  );

  assert.match(
    source,
    /innerBlocks\[0\]\.name === 'core\/group'/
  );

  assert.match(
    source,
    /getLegacyHeroInnerBlocks\( innerBlocks \)/
  );

  assert.match(
    source,
    /createBlock\(\s*block\.name,\s*getLegacyHeroBlockAttributes\( block \)/
  );

  assert.match(
    source,
    /replace\(\s*\/\\bhas-text-align-\[a-z\]\+\\b\/g/
  );
});
