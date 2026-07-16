const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const { discoverTestManifest } = require( '../../../../../bin/test-manifest.cjs' );

const masonrySource = fs.readFileSync(
  path.join( __dirname, 'handle-masonry-grid.js' ),
  'utf8'
);

const scrollingEffectSource = fs.readFileSync(
  path.join( __dirname, '../../../../scrolling-effect/src/frontend/index.js' ),
  'utf8'
);

test( 'the behavioral Masonry lifecycle suite is part of the fast test runner', () => {
  const root = path.resolve( __dirname, '../../../../..' );
  const manifest = discoverTestManifest( root );

  assert.ok(
    manifest.jestMainTests.includes(
      'packages/collection/src/frontend/grid/handle-masonry-grid.test.js'
    )
  );
} );

test( 'the frontend Masonry runtime remains compatible with the webpack 4 bundle', () => {
  assert.doesNotMatch( masonrySource, /\basync\b|\bawait\b/ );
} );

test( 'scrolling effect refreshes cached container boxes after masonry layout updates', () => {
  assert.match(
    scrollingEffectSource,
    /window\.addEventListener\(\s*'nb:masonry-layout',\s*updateAllContainersState\s*\);/
  );
} );
