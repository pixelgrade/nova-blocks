const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const frontendUtilsSource = fs.readFileSync(
  path.join( __dirname, 'utils.js' ),
  'utf8'
);

test( 'scrolling effect viewport height follows viewport APIs on mobile orientation changes', () => {
  assert.match( frontendUtilsSource, /window\.visualViewport\?\.height/ );
  assert.match( frontendUtilsSource, /window\.innerHeight/ );
  assert.match( frontendUtilsSource, /document\.documentElement\.clientHeight/ );
  assert.doesNotMatch( frontendUtilsSource, /screen\.availHeight/ );
  assert.doesNotMatch( frontendUtilsSource, /'orientation'\s+in\s+window/ );
} );
