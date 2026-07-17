const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const controlsSource = fs.readFileSync( path.join( __dirname, 'controls.js' ), 'utf8' );

test( 'Card Hover Effect belongs to Elements Visibility without composition gating', () => {
  assert.match( controlsSource, /label=\{__\( 'Elements Visibility'/ );
  assert.match( controlsSource, /label=\{__\( 'Card Hover Effect'/ );
  assert.match( controlsSource, /value=\{attributes\.cardHoverEffect \|\| 'none'\}/ );
  assert.match( controlsSource, /setAttributes\( \{ cardHoverEffect: value \} \)/ );
  assert.match( controlsSource, /value: 'none'/ );
  assert.match( controlsSource, /value: 'reveal'/ );
  assert.doesNotMatch( controlsSource, /layoutStyle|layoutRecipe|capabilities|supportsHoverEffect/ );
} );
