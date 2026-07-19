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
