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

test('contextual post card semantic colors come from the active palette tokens', () => {
  assert.match(
    styleSource,
    /\.nb-contextual-post-card\s+\.nb-supernova-item\s*\{[\s\S]*?--current-color:\s*var\(--sm-current-fg1-color,\s*var\(--nb-fg1-color\)\);/
  );
  assert.match(
    styleSource,
    /\.nb-contextual-post-card\s+\.nb-supernova-item\s*\{[\s\S]*?background:\s*var\(--sm-current-bg-color,\s*var\(--nb-bg-color\)\);/
  );
  assert.match(
    styleSource,
    /\.nb-contextual-post-card__media-wrapper\s*\{[\s\S]*?background:\s*var\(--sm-current-accent-color,\s*var\(--nb-accent-color\)\);/
  );
  assert.match(
    styleSource,
    /\.nb-contextual-post-card__surface:is\(:hover,\s*:focus-within\)\s*\{[\s\S]*?--current-color:\s*var\(--sm-current-bg-color,\s*var\(--nb-bg-color\)\);/
  );

  assert.doesNotMatch( styleSource, /--nb-contextual-post-card-project-color/ );
  assert.doesNotMatch( styleSource, /--nb-contextual-post-card-surface-color/ );
  assert.doesNotMatch( styleSource, /--nb-contextual-post-card-text-color/ );
  assert.doesNotMatch( styleSource, /--nb-contextual-post-card-hover-text-color/ );
  assert.doesNotMatch( styleSource, /#eee\b/i );
  assert.doesNotMatch( styleSource, /#333\b/i );
  assert.doesNotMatch( styleSource, /#fff\b/i );
} );
