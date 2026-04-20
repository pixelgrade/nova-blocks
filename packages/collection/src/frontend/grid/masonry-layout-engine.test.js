const test = require('node:test');
const assert = require('node:assert/strict');

const {
  calculateColumnWidth,
  calculateMasonryLayout,
  shouldRelayoutForTransitionProperty,
} = require('./masonry-layout-engine');

test('calculateColumnWidth subtracts gutters before dividing by the active column count', () => {
  assert.equal(
    calculateColumnWidth( {
      containerWidth: 980,
      columnCount: 3,
      columnGap: 20,
    } ),
    313.3333333333333
  );
} );

test('calculateMasonryLayout places each card into the current shortest column with separate row and column gaps', () => {
  const layout = calculateMasonryLayout( {
    containerWidth: 320,
    columnCount: 3,
    columnGap: 10,
    rowGap: 20,
    itemHeights: [ 100, 220, 80, 120, 120 ],
  } );

  assert.equal( layout.columnWidth, 100 );
  assert.deepEqual( layout.positions, [
    { x: 0, y: 0 },
    { x: 110, y: 0 },
    { x: 220, y: 0 },
    { x: 220, y: 100 },
    { x: 0, y: 120 },
  ] );
  assert.equal( layout.containerHeight, 240 );
} );

test('calculateMasonryLayout returns a simple stacked layout when only one column is active', () => {
  const layout = calculateMasonryLayout( {
    containerWidth: 320,
    columnCount: 1,
    columnGap: 10,
    rowGap: 20,
    itemHeights: [ 100, 220, 80 ],
  } );

  assert.equal( layout.columnWidth, 320 );
  assert.deepEqual( layout.positions, [
    { x: 0, y: 0 },
    { x: 0, y: 120 },
    { x: 0, y: 360 },
  ] );
  assert.equal( layout.containerHeight, 440 );
} );

test('shouldRelayoutForTransitionProperty targets geometry-affecting transitions only', () => {
  assert.equal( shouldRelayoutForTransitionProperty( 'width' ), true );
  assert.equal( shouldRelayoutForTransitionProperty( 'height' ), true );
  assert.equal( shouldRelayoutForTransitionProperty( 'max-height' ), true );
  assert.equal( shouldRelayoutForTransitionProperty( 'padding-left' ), true );
  assert.equal( shouldRelayoutForTransitionProperty( 'border-right-width' ), true );
  assert.equal( shouldRelayoutForTransitionProperty( 'transform' ), false );
  assert.equal( shouldRelayoutForTransitionProperty( 'opacity' ), false );
  assert.equal( shouldRelayoutForTransitionProperty( '' ), false );
} );
