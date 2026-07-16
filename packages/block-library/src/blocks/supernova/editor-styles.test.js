const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'editor-styles.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('pile 3D editor items normalize block-editor wrapper tracks before scaling cards', () => {
  assert.match(
    styleSource,
    /\.nb-supernova--pile-3d:where\(\.nb-supernova--layout-classic,\s*\.nb-supernova--layout-masonry\)\.nb-supernova--card-layout-stacked\s+\.nb-collection__layout-item\s*\{[\s\S]*?padding-left:\s*0\s*!important;[\s\S]*?padding-right:\s*0\s*!important;[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)\s*!important;/
  );
} );

test('doppler editor content occupies the first half of the doubled preview', () => {
  assert.match(
    styleSource,
    /&\.nb-supernova-item--scrolling-effect-doppler\s*\{[\s\S]*?>\s*\.nb-supernova-item__frame\s*>\s*\.nb-supernova-item__content\s*\{[\s\S]*?align-self:\s*start\s*!important;[\s\S]*?min-height:\s*50%\s*!important;/
  );
} );
