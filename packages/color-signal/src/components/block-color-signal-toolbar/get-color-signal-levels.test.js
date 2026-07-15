const {
  getColorSignalLevels,
  getNextColorSignalLevel,
  COLOR_SIGNAL_LEVEL_LABELS,
} = require( './get-color-signal-levels' );

test( 'defaults to the full 0-3 range when there is no min/max declared', () => {
  expect( getColorSignalLevels( { controls: true } ) ).toEqual( [
    { value: 0, label: COLOR_SIGNAL_LEVEL_LABELS[ 0 ] },
    { value: 1, label: COLOR_SIGNAL_LEVEL_LABELS[ 1 ] },
    { value: 2, label: COLOR_SIGNAL_LEVEL_LABELS[ 2 ] },
    { value: 3, label: COLOR_SIGNAL_LEVEL_LABELS[ 3 ] },
  ] );
} );

test( 'clamps out "None" when minColorSignal is 1 (e.g. core/button, core/separator)', () => {
  const levels = getColorSignalLevels( { controls: true, minColorSignal: 1 } );

  expect( levels.map( level => level.value ) ).toEqual( [ 1, 2, 3 ] );
  expect( levels.some( level => level.value === 0 ) ).toBe( false );
} );

test( 'clamps the top of the range when maxColorSignal is 2', () => {
  const levels = getColorSignalLevels( { controls: true, maxColorSignal: 2 } );

  expect( levels.map( level => level.value ) ).toEqual( [ 0, 1, 2 ] );
} );

test( 'combines minColorSignal and maxColorSignal clamping', () => {
  const levels = getColorSignalLevels( { controls: true, minColorSignal: 1, maxColorSignal: 2 } );

  expect( levels.map( level => level.value ) ).toEqual( [ 1, 2 ] );
} );

test( 'treats the boolean `true` support shorthand as the unclamped 0-3 range', () => {
  expect( getColorSignalLevels( true ).map( level => level.value ) ).toEqual( [ 0, 1, 2, 3 ] );
} );

test( 'treats a missing/undefined support value as the unclamped 0-3 range', () => {
  expect( getColorSignalLevels( undefined ).map( level => level.value ) ).toEqual( [ 0, 1, 2, 3 ] );
} );

test( 'advances to the next valid Color Signal level', () => {
  const levels = getColorSignalLevels( { controls: true } );

  expect( getNextColorSignalLevel( levels, 0 ) ).toEqual( levels[ 1 ] );
  expect( getNextColorSignalLevel( levels, 2 ) ).toEqual( levels[ 3 ] );
} );

test( 'wraps from the last valid Color Signal level to the first', () => {
  const levels = getColorSignalLevels( { controls: true } );

  expect( getNextColorSignalLevel( levels, 3 ) ).toEqual( levels[ 0 ] );
} );

test( 'cycles only inside a block-clamped Color Signal range', () => {
  const levels = getColorSignalLevels( {
    controls: true,
    minColorSignal: 1,
    maxColorSignal: 2,
  } );

  expect( getNextColorSignalLevel( levels, 1 ) ).toEqual( levels[ 1 ] );
  expect( getNextColorSignalLevel( levels, 2 ) ).toEqual( levels[ 0 ] );
  expect( getNextColorSignalLevel( levels, 0 ) ).toEqual( levels[ 0 ] );
} );
