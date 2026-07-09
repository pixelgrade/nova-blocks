const test = require('node:test');
const assert = require('node:assert/strict');

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
