const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'style.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('carousel opacity override is limited to the transitioning slides', () => {
  assert.doesNotMatch(
    styleSource,
    /\.slick-slide\s*\{\s*opacity:\s*1\s*!important;/
  );

  assert.match(
    styleSource,
    /\.slick-slide--current,\s*\.slick-slide--next\s*\{[\s\S]*?opacity:\s*1\s*!important;/
  );
} );
