const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'style.scss');
const styleSource = fs.readFileSync(stylePath, 'utf8');

test('contextual post card CTA resets the theme button transition', () => {
  assert.match(
    styleSource,
    /\.nb-contextual-post-card__button\s*\{[\s\S]*?--theme-button-transition:\s*all var\(--theme-transition-duration-fast\) var\(--theme-transition-easing\);/
  );
  assert.match(
    styleSource,
    /\.nb-contextual-post-card__button\s*\{[\s\S]*?--theme-button-hover-transition:\s*var\(--theme-button-transition\);/
  );
  assert.doesNotMatch(
    styleSource,
    /\.nb-contextual-post-card__button\s*\{[\s\S]*?transition:\s*none\b/
  );
} );
