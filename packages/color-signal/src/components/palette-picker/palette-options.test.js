const {
  isFunctionalPaletteOption,
  getVisiblePalettes,
  getNextPalette,
  getPaletteLabel,
  getPaletteDisplayColor,
} = require( './palette-options' );

const PALETTES = [
  { id: '1', label: 'Blue', source: [ '#203ab6' ] },
  { id: '2', label: 'Coral', source: [ '#ff6b57' ] },
  { id: '_info', label: 'Info', source: [ '#3466d6' ] },
  { id: '3', source: [ '#fefefe' ] },
  { id: '_warning', label: 'Warning', source: [ '#e8a33d' ] },
];

test( 'getVisiblePalettes returns brand palettes by default, in payload order', () => {
  expect( getVisiblePalettes( PALETTES ).map( palette => palette.id ) ).toEqual( [ '1', '2', '3' ] );
} );

test( 'getVisiblePalettes returns functional palettes when toggled', () => {
  expect( getVisiblePalettes( PALETTES, true ).map( palette => palette.id ) ).toEqual( [ '_info', '_warning' ] );
} );

test( 'getVisiblePalettes tolerates a missing or non-array payload', () => {
  expect( getVisiblePalettes( undefined ) ).toEqual( [] );
  expect( getVisiblePalettes( null, true ) ).toEqual( [] );
} );

test( 'isFunctionalPaletteOption matches the underscore-prefix rule', () => {
  expect( isFunctionalPaletteOption( { id: '_dark' } ) ).toBe( true );
  expect( isFunctionalPaletteOption( { id: '2' } ) ).toBe( false );
  expect( isFunctionalPaletteOption( { id: 10 } ) ).toBe( false );
} );

test( 'getNextPalette advances to the next visible palette', () => {
  const brand = getVisiblePalettes( PALETTES );

  expect( getNextPalette( brand, '1' ).id ).toBe( '2' );
  expect( getNextPalette( brand, '2' ).id ).toBe( '3' );
} );

test( 'getNextPalette wraps from the last palette back to the first', () => {
  const brand = getVisiblePalettes( PALETTES );

  expect( getNextPalette( brand, '3' ).id ).toBe( '1' );
} );

test( 'getNextPalette starts from the first entry when the current palette is missing', () => {
  const brand = getVisiblePalettes( PALETTES );

  expect( getNextPalette( brand, '_info' ).id ).toBe( '1' );
  expect( getNextPalette( brand, undefined ).id ).toBe( '1' );
} );

test( 'getNextPalette compares ids across string and number types', () => {
  expect( getNextPalette( [ { id: 1 }, { id: 2 } ], '1' ).id ).toBe( 2 );
} );

test( 'getNextPalette returns undefined for an empty list', () => {
  expect( getNextPalette( [], '1' ) ).toBeUndefined();
  expect( getNextPalette( undefined, '1' ) ).toBeUndefined();
} );

test( 'getPaletteLabel falls back to Palette plus the id', () => {
  expect( getPaletteLabel( PALETTES[ 0 ] ) ).toBe( 'Blue' );
  expect( getPaletteLabel( PALETTES[ 3 ] ) ).toBe( 'Palette 3' );
  expect( getPaletteLabel( undefined ) ).toBe( '' );
} );

test( 'getPaletteDisplayColor prefers the sidebar swatch color', () => {
  expect( getPaletteDisplayColor( PALETTES[ 0 ] ) ).toBe( '#203ab6' );
} );

test( 'getPaletteDisplayColor falls back to colors[sourceIndex].value', () => {
  const palette = {
    id: '4',
    sourceIndex: 1,
    colors: [ { value: '#111111' }, { value: '#222222' } ],
  };

  expect( getPaletteDisplayColor( palette ) ).toBe( '#222222' );
} );

test( 'getPaletteDisplayColor falls back to variations[sourceIndex].bg', () => {
  const palette = {
    id: '5',
    sourceIndex: 0,
    variations: [ { bg: '#333333' } ],
  };

  expect( getPaletteDisplayColor( palette ) ).toBe( '#333333' );
} );

test( 'getPaletteDisplayColor returns null when no color can be resolved', () => {
  expect( getPaletteDisplayColor( { id: '6' } ) ).toBeNull();
  expect( getPaletteDisplayColor( undefined ) ).toBeNull();
} );
