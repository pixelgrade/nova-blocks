const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  getCollectionLayoutCustomProperties,
} = require('./get-collection-layout-custom-properties');

test('keeps the stored grid gap and doubles the effective spacing for 3D grid collections', () => {
  assert.deepEqual(
    getCollectionLayoutCustomProperties( {
      layoutStyle: 'classic',
      cardLayout: 'stacked',
      columns: 3,
      gridGap: 100,
      verticalGapModifier: 1.5,
      pile3dEffect: true,
    } ),
    {
      '--nb-collection-columns-count': 3,
      '--nb-grid-spacing-modifier': 100,
      '--nb-grid-spacing-multiplier': 2,
      '--nb-grid-row-spacing-multiplier': 1.5,
      '--nb-pile-3d-scale': 0.82,
    }
  );
} );

test('ignores stale 3D grid state for Parametric collections', () => {
  assert.deepEqual(
    getCollectionLayoutCustomProperties( {
      layoutStyle: 'parametric',
      cardLayout: 'stacked',
      columns: 3,
      gridGap: 100,
      verticalGapModifier: 1.5,
      pile3dEffect: true,
    } ),
    {
      '--nb-collection-columns-count': 3,
      '--nb-grid-spacing-modifier': 100,
      '--nb-grid-spacing-multiplier': 1,
      '--nb-grid-row-spacing-multiplier': 1.5,
      '--nb-pile-3d-scale': 1,
    }
  );
} );

test('ignores stale 3D grid state when the active recipe disables collection depth', () => {
  assert.deepEqual(
    getCollectionLayoutCustomProperties( {
      layoutStyle: 'classic',
      cardLayout: 'stacked',
      columns: 5,
      gridGap: 26,
      verticalGapModifier: 1,
      pile3dEffect: true,
    }, { supportsPile3d: false } ),
    {
      '--nb-collection-columns-count': 5,
      '--nb-grid-spacing-modifier': 26,
      '--nb-grid-spacing-multiplier': 1,
      '--nb-grid-row-spacing-multiplier': 1,
      '--nb-pile-3d-scale': 1,
    }
  );
} );

test('editor custom properties resolve depth support from the authoritative active recipe', () => {
  const source = fs.readFileSync(
    path.join(__dirname, 'with-collection-layout-edit-custom-props.js'),
    'utf8'
  );

  assert.match( source, /const settings = useSettings\(\);/ );
  assert.match( source, /normalizeLayoutRecipes\( settings\?\.collectionLayoutRecipes \)/ );
  assert.match(
    source,
    /getCollectionLayoutCustomProperties\( attributes, \{[\s\S]*?supportsPile3d: layoutRecipeSupports\( attributes, collectionLayoutRecipes, 'pile3d' \)[\s\S]*?\} \)/
  );
} );

// #627: Media Alignment places the picture inside its media box. The default
// (center center) is today's rendering, so it must add nothing to the style.
test('media alignment emits an object-position only for a non-default, valid matrix value', () => {
  const base = { layoutStyle: 'classic', cardLayout: 'vertical', columns: 3, gridGap: 50, verticalGapModifier: 1 };

  assert.equal(
    '--nb-card-media-object-position' in getCollectionLayoutCustomProperties( { ...base, mediaAlign: 'center center' } ),
    false
  );
  assert.equal( '--nb-card-media-object-position' in getCollectionLayoutCustomProperties( base ), false );
  assert.equal( '--nb-card-media-object-position' in getCollectionLayoutCustomProperties( { ...base, mediaAlign: 'sideways' } ), false );

  assert.equal(
    getCollectionLayoutCustomProperties( { ...base, mediaAlign: 'bottom center' } )[ '--nb-card-media-object-position' ],
    'center bottom'
  );
  assert.equal(
    getCollectionLayoutCustomProperties( { ...base, mediaAlign: 'top left' } )[ '--nb-card-media-object-position' ],
    'left top'
  );
  assert.equal(
    getCollectionLayoutCustomProperties( { ...base, mediaAlign: 'center right' } )[ '--nb-card-media-object-position' ],
    'right center'
  );
} );

test('media alignment keeps the PHP twin in sync', () => {
  const phpSource = fs.readFileSync( path.join( __dirname, '../../../../../lib/block-rendering.php' ), 'utf8' );
  assert.match( phpSource, /function novablocks_get_card_media_object_position\(/ );
  assert.match( phpSource, /'--nb-card-media-object-position: '/ );
} );

// This module is CommonJS (module.exports) imported by ES modules. Anything
// Babel turns into a runtime-helper import (object spread, for one) makes it
// an ES module with a read-only module.exports, aborting the whole
// novablocks-block-editor bundle in the editor.
test('stays a plain CommonJS module with no Babel-helper syntax', () => {
  const source = fs.readFileSync( path.join( __dirname, 'get-collection-layout-custom-properties.js' ), 'utf8' );

  assert.doesNotMatch( source, /^\s*(import|export)\s/m );
  assert.doesNotMatch( source.replace( /\/\/.*$/gm, "" ), /\.\.\./ );
} );
