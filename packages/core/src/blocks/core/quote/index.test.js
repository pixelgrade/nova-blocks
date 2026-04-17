const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const quoteBlockStylePath = path.join(__dirname, 'index.js');

test('core/quote registers the Editorial block style', () => {
  const source = fs.readFileSync( quoteBlockStylePath, 'utf8' );

  assert.match(
    source,
    /registerBlockStyle\(\s*'core\/quote',\s*\{\s*name:\s*'editorial',\s*label:\s*'Editorial'/s
  );
} );
