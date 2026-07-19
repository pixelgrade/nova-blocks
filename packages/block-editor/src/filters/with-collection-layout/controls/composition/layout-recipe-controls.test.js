const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const compositionSource = fs.readFileSync( path.join( __dirname, 'index.js' ), 'utf8' );
const settingsSource = fs.readFileSync( path.join( __dirname, '../settings-tab.js' ), 'utf8' );
const controlsSource = fs.readFileSync( path.join( __dirname, '../index.js' ), 'utf8' );

test( 'composition and settings identify the active registered recipe by its own label', () => {
  [ compositionSource, settingsSource ].forEach( source => {
    assert.match( source, /normalizeLayoutRecipes/ );
    assert.match( source, /getActiveLayoutRecipe/ );
    assert.match( source, /activeRecipe\?\.label/ );
  } );
} );

test( 'a registered recipe does not inherit unrelated base-layout preset cards', () => {
  assert.match(
    compositionSource,
    /activeRecipe \? null : FREE_PRESETS\[ layoutStyle \]/
  );
} );

test( 'a recipe can remove depth presets inherited from its base layout', () => {
  assert.match( compositionSource, /layoutRecipeSupports\( attributes, recipes, 'pile3d' \)/ );
  assert.match(
    compositionSource,
    /supportsPile3d && DEPTH_PRESETS\[ layoutStyle \]/
  );
} );

test( 'a capable recipe exposes a generic standard-versus-layout Header integration control', () => {
  assert.match( settingsSource, /activeRecipe\?\.capabilities\?\.headerIntegration/ );
  assert.match( settingsSource, /label=\{ __\( 'Header Integration'/ );
  assert.match( settingsSource, /label: __\( 'Standard header'/ );
  assert.match( settingsSource, /value: 'standard'/ );
  assert.match( settingsSource, /label: __\( 'Include header in layout'/ );
  assert.match( settingsSource, /value: 'grid-item'/ );
  assert.match( settingsSource, /setAttributes\( \{ headerIntegration: value \} \)/ );
  assert.doesNotMatch( settingsSource, /Collage/ );
} );

test( 'Fit Columns restores the active recipe minimum width with a safe generic fallback', () => {
  assert.match(
    settingsSource,
    /activeRecipe\?\.defaults\?\.columnsFitMinWidth/
  );
  assert.match(
    settingsSource,
    /Number\.isFinite\( recipeColumnsFitMinWidth \)[\s\S]*?recipeColumnsFitMinWidth >= 280[\s\S]*?recipeColumnsFitMinWidth <= 600[\s\S]*?\? recipeColumnsFitMinWidth[\s\S]*?: 400/
  );
  assert.match(
    settingsSource,
    /setAttributes\( \{ columnsFitMinWidth: value \? fitColumnsDefault : 0 \} \)/
  );
} );

test( 'a recipe-declared Fine-tune model opens the generic Fine-tune tab', () => {
  assert.match( controlsSource, /normalizeLayoutRecipes/ );
  assert.match( controlsSource, /getActiveLayoutRecipe/ );
  assert.match( controlsSource, /activeRecipe\?\.fineTune\?\.length/ );
  assert.match( controlsSource, /<RecipeFineTuneControls[\s\S]*?recipe=\{ activeRecipe \}/ );
  assert.doesNotMatch( controlsSource, /anima-lattice/ );
} );
