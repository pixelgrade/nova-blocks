const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const parametricSource = fs.readFileSync(
  path.join( __dirname, 'handle-parametric-grid.js' ),
  'utf8'
);

const scrollingEffectSource = fs.readFileSync(
  path.join( __dirname, '../../../../scrolling-effect/src/frontend/index.js' ),
  'utf8'
);

test( 'parametric grid dispatches a layout event after each (re)build', () => {
  assert.match( parametricSource, /const LAYOUT_EVENT_NAME = 'nb:parametric-layout';/ );
  assert.match( parametricSource, /const BASE_LAYOUT_EVENT_NAME = 'nb:layout';/ );
  assert.match( parametricSource, /window\.dispatchEvent\(\s*new CustomEvent\(\s*LAYOUT_EVENT_NAME/ );
  assert.match( parametricSource, /window\.dispatchEvent\(\s*new Event\(\s*BASE_LAYOUT_EVENT_NAME\s*\)\s*\)/ );
  // Both the initial layout and every resize funnel through createLayout(),
  // so the dispatch must live there — not only in recreateLayout().
  assert.match( parametricSource, /dispatchLayoutEvents\( block, grid \);\n {2}}\n\n {2}function recreateLayout/ );
} );

test( 'recreateLayout clears item transforms before serializing the cards', () => {
  // A mid-drift parallax transform must not get baked into post.outerHTML.
  assert.match(
    parametricSource,
    /post\.style\.transform = '';[\s\S]*?grid\.innerHTML = posts\.reduce/
  );
} );

test( 'scrolling effect refreshes cached container boxes after parametric layout updates', () => {
  assert.match(
    scrollingEffectSource,
    /window\.addEventListener\(\s*'nb:parametric-layout',\s*updateAllContainersState\s*\);/
  );
} );
