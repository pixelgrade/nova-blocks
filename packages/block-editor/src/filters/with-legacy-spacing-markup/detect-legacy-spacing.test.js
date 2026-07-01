const test = require('node:test');
const assert = require('node:assert/strict');

const {
  detectLegacySpacingFlags,
} = require('./detect-legacy-spacing');

test('returns null for blocks outside the legacy space-and-sizing list', () => {
  assert.equal(
    detectLegacySpacingFlags( 'core/paragraph', '<div style="--nb-emphasis-top-spacing:0"></div>' ),
    null
  );
});

test('returns null when innerHTML is not a string', () => {
  assert.equal( detectLegacySpacingFlags( 'core/columns', undefined ), null );
});

test('flags content with none of the --nb-* custom properties as legacy', () => {
  assert.deepEqual(
    detectLegacySpacingFlags( 'core/columns', '<div class="wp-block-columns alignwide"></div>' ),
    { noSpacingMarkup: true }
  );
});

test('flags nothing (all-false) for current content that already carries every var', () => {
  const innerHTML = '<div style="--nb-emphasis-top-spacing:0;--nb-card-media-aspect-ratio:1;--nb-min-height-fallback:0;--nb-block-zindex:0"></div>';

  assert.deepEqual(
    detectLegacySpacingFlags( 'core/group', innerHTML ),
    {
      missingAspectRatioVar: false,
      missingMinHeightFallbackVar: false,
      zIndexSerializedAsPx: false,
    }
  );
});

test('flags partial drift when some but not all newer vars are present', () => {
  const innerHTML = '<div style="--nb-emphasis-top-spacing:0;--nb-block-zindex:0px;"></div>';

  assert.deepEqual(
    detectLegacySpacingFlags( 'core/separator', innerHTML ),
    {
      missingAspectRatioVar: true,
      missingMinHeightFallbackVar: true,
      zIndexSerializedAsPx: true,
    }
  );
});
