const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'scss', '_collection.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('masonry collections opt into absolute positioning only after the runtime marks them ready', () => {
  assert.match(
    styleSource,
    /\.nb-collection__layout--masonry\s*\{[\s\S]*?display:\s*block;[\s\S]*?column-gap:\s*var\(--nb-grid-spacing\);[\s\S]*?row-gap:\s*var\(--nb-grid-spacing\);[\s\S]*?>\s*\.nb-collection__layout-item\s*\+\s*\.nb-collection__layout-item\s*\{[\s\S]*?margin-top:\s*var\(--nb-grid-spacing\);[\s\S]*?\}[\s\S]*?&\.nb-collection__layout--masonry-ready\s*\{[\s\S]*?position:\s*relative;[\s\S]*?\}[\s\S]*?&\.nb-collection__layout--masonry-ready\s*>\s*\.nb-collection__layout-item\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?top:\s*0;[\s\S]*?left:\s*0;[\s\S]*?margin-top:\s*0;/
  );
} );
