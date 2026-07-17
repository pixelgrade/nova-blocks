const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const settingsSource = fs.readFileSync( path.join( __dirname, 'settings-tab.js' ), 'utf8' );
const columnsSource = fs.readFileSync( path.join( __dirname, 'items-per-row-control.js' ), 'utf8' );

test( 'Items per Row accepts a recipe-defined range without changing built-in defaults', () => {
  assert.match( columnsSource, /min=\{ min \}/ );
  assert.match( columnsSource, /max=\{ max \}/ );
  assert.match( columnsSource, /min = 1/ );
  assert.match( columnsSource, /max = 4/ );
} );

test( 'Settings derives the active recipe column range and hides seam-breaking controls', () => {
  assert.match( settingsSource, /activeRecipe\?\.capabilities\?\.columnsRange/ );
  assert.match( settingsSource, /<ItemsPerRowControl \{ \.\.\.props \} min=\{ columnsRange\.min \} max=\{ columnsRange\.max \} \/>/ );
  assert.match( settingsSource, /const supportsItemsGap = false !== activeRecipe\?\.capabilities\?\.itemsGap/ );
  assert.match( settingsSource, /const supportsVerticalGap = false !== activeRecipe\?\.capabilities\?\.verticalGap/ );
  assert.match( settingsSource, /const supportsAspectRatio = false !== activeRecipe\?\.capabilities\?\.aspectRatio/ );
  assert.match( settingsSource, /supportsItemsGap && <ItemsGapControls/ );
  assert.match( settingsSource, /supportsVerticalGap && ! isCarousel && <VerticalGapModifierControl/ );
  assert.match( settingsSource, /isGrid && supportsAspectRatio && \([\s\S]*?<ItemsAspectRatioControl/ );
  assert.doesNotMatch( settingsSource, /supportsHoverEffect|cardHoverEffect|Card Hover Effect/ );
} );
