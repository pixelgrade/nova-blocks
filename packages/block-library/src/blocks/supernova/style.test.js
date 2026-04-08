const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'style.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('carousel blocks with no block color signal still mask stacked slide layers', () => {
  assert.doesNotMatch(
    styleSource,
    /&\.nb-supernova--layout-carousel\.sm-color-signal-0\s+\.nb-supernova-item__frame\s*>\s*:is\(\.nb-supernova-item__content,\s*\.nb-supernova-item__media-wrapper\)\s*\{/
  );

  assert.match(
    styleSource,
    /&\.nb-supernova--layout-carousel\s+\.nb-supernova-item\.sm-color-signal-0\s+\.nb-supernova-item__frame\s*>\s*:is\(\.nb-supernova-item__content,\s*\.nb-supernova-item__media-wrapper\)\s*\{[\s\S]*?background-color:\s*var\(--sm-current-bg-color,\s*var\(--nb-bg-color\)\);/
  );
} );
