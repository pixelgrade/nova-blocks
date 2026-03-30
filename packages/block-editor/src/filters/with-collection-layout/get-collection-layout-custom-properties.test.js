const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getCollectionLayoutCustomProperties,
} = require('./get-collection-layout-custom-properties');

test('keeps the stored grid gap and doubles the effective spacing for 3D grid collections', () => {
  assert.deepEqual(
    getCollectionLayoutCustomProperties( {
      columns: 3,
      gridGap: 100,
      pile3dEffect: true,
    } ),
    {
      '--nb-collection-columns-count': 3,
      '--nb-grid-spacing-modifier': 100,
      '--nb-grid-spacing-multiplier': 2,
      '--nb-pile-3d-scale': 0.82,
    }
  );
} );
