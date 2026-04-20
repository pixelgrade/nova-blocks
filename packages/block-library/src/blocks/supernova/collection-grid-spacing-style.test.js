const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'scss', '_collection.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('grid-based collection layouts split the base gap into column and row spacing', () => {
  assert.match(
    styleSource,
    /\.nb-collection__layout\s*\{[\s\S]*?--nb-grid-spacing:\s*calc\(var\(--nb-spacing\)\s*\*\s*var\(--nb-grid-spacing-modifier\)\s*\*\s*var\(--nb-grid-spacing-multiplier,\s*1\)\s*\*\s*0\.02\);[\s\S]*?--nb-grid-row-spacing:\s*calc\(var\(--nb-grid-spacing\)\s*\*\s*var\(--nb-grid-row-spacing-multiplier,\s*1\)\);/
  );

  assert.match(
    styleSource,
    /\.nb-collection__layout--classic,\s*\.nb-collection__layout--parametric\s*\{[\s\S]*?display:\s*grid;[\s\S]*?column-gap:\s*var\(--nb-grid-spacing\);[\s\S]*?row-gap:\s*var\(--nb-grid-row-spacing\);[\s\S]*?grid-template-columns:\s*repeat\(var\(--nb-collection-columns,\s*1\),\s*1fr\);/
  );
});
