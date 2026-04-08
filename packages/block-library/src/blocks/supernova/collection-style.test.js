const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'scss', '_collection.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('pile 3D stacked collections normalize item wrapper tracks before shrinking cards', () => {
  assert.match(
    styleSource,
    /\.nb-supernova--pile-3d\.nb-supernova--card-layout-stacked\s*\{[\s\S]*?\.nb-collection__layout-item\s*\{[\s\S]*?padding-left:\s*0\s*!important;[\s\S]*?padding-right:\s*0\s*!important;[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)\s*!important;/
  );
} );
