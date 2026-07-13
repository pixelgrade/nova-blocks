const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const masonrySource = fs.readFileSync(
  path.join( __dirname, 'handle-masonry-grid.js' ),
  'utf8'
);

const scrollingEffectSource = fs.readFileSync(
  path.join( __dirname, '../../../../scrolling-effect/src/frontend/index.js' ),
  'utf8'
);

test( 'masonry dispatches a layout event after cards are positioned', () => {
  assert.match( masonrySource, /const LAYOUT_EVENT_NAME = 'nb:masonry-layout';/ );
  assert.match( masonrySource, /const BASE_LAYOUT_EVENT_NAME = 'nb:layout';/ );
  assert.match( masonrySource, /const getGridGaps = \( grid \) => \{/ );
  assert.match( masonrySource, /columnGap:\s*getComputedGap\( styles\.columnGap, styles\.gap \),/ );
  assert.match( masonrySource, /rowGap:\s*getComputedGap\( styles\.rowGap, styles\.gap \),/ );
  assert.match( masonrySource, /items\[ index \]\.style\.transform = `translate\(\$\{ x \}px, \$\{ y \}px\)`;/ );
  assert.match( masonrySource, /window\.dispatchEvent\(\s*new CustomEvent\(\s*LAYOUT_EVENT_NAME/ );
  assert.match( masonrySource, /window\.dispatchEvent\(\s*new Event\(\s*BASE_LAYOUT_EVENT_NAME\s*\)\s*\)/ );
} );

test( 'masonry dispatches its layout events after resetting to one-column flow', () => {
  assert.match(
    masonrySource,
    /if \( activeColumns <= 1 \) \{[\s\S]*?resetLayout\(\);[\s\S]*?dispatchLayoutEvents\( block, grid, \{ activeColumns \} \);[\s\S]*?return;/
  );
  assert.match(
    masonrySource,
    /dispatchLayoutEvents\( block, grid, \{ activeColumns \} \);/
  );
} );

test( 'masonry excludes hidden external participants without charging a row gap', () => {
  assert.match(
    masonrySource,
    /const allItems = Array\.from\( grid\.children \)[\s\S]*?const layout = \(\) => \{[\s\S]*?const items = getMasonryLayoutItems\( allItems \);/
  );
  assert.match(
    masonrySource,
    /new MutationObserver\( scheduleLayout \)[\s\S]*?attributeFilter: \[ 'hidden' \]/
  );
} );

test( 'scrolling effect refreshes cached container boxes after masonry layout updates', () => {
  assert.match(
    scrollingEffectSource,
    /window\.addEventListener\(\s*'nb:masonry-layout',\s*updateAllContainersState\s*\);/
  );
} );
