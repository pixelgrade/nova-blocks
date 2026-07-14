const test = require('node:test');
const assert = require('node:assert/strict');

const {
  isContentPaddingControlVisible,
} = require('./is-content-padding-control-visible');

test('is visible when spaceAndSizing is the boolean true shorthand (group/columns/separator today)', () => {
  assert.equal(isContentPaddingControlVisible(true), true);
});

test('is visible when spaceAndSizing is an object that omits contentPadding (supernova/supernova-item)', () => {
  assert.equal(
    isContentPaddingControlVisible({ attributes: true, controls: true, advancedSpacing: true }),
    true
  );
});

test('is hidden only when contentPadding is explicitly false (group/columns after the Stage 1 opt-out)', () => {
  assert.equal(
    isContentPaddingControlVisible({ attributes: true, controls: true, contentPadding: false }),
    false
  );
});

test('is visible when contentPadding is explicitly true', () => {
  assert.equal(
    isContentPaddingControlVisible({ attributes: true, controls: true, contentPadding: true }),
    true
  );
});

test('is visible when spaceAndSizing support is entirely absent (defensive default)', () => {
  assert.equal(isContentPaddingControlVisible(undefined), true);
});
