import { calculateFitColumnCount } from './index';

describe( 'calculateFitColumnCount', () => {
  test( 'fits as many min-width columns as the container allows, capped at maxColumns', () => {
    expect( calculateFitColumnCount( { containerWidth: 1284, columnGap: 24, minColumnWidth: 396, maxColumns: 4 } ) ).toBe( 3 );
    expect( calculateFitColumnCount( { containerWidth: 900, columnGap: 24, minColumnWidth: 396, maxColumns: 4 } ) ).toBe( 2 );
    expect( calculateFitColumnCount( { containerWidth: 768, columnGap: 24, minColumnWidth: 396, maxColumns: 4 } ) ).toBe( 1 );
    expect( calculateFitColumnCount( { containerWidth: 3000, columnGap: 24, minColumnWidth: 396, maxColumns: 4 } ) ).toBe( 4 );
  } );

  test( 'never returns less than one column; non-positive min width turns fit mode off', () => {
    expect( calculateFitColumnCount( { containerWidth: 200, columnGap: 24, minColumnWidth: 396, maxColumns: 4 } ) ).toBe( 1 );
    expect( calculateFitColumnCount( { containerWidth: 500, columnGap: 24, minColumnWidth: 0, maxColumns: 4 } ) ).toBe( 4 );
    expect( calculateFitColumnCount( { containerWidth: 500, columnGap: 24, minColumnWidth: -10, maxColumns: 4 } ) ).toBe( 4 );
  } );

  test( 'reproduces the audited Anima Collage threshold boundaries', () => {
    expect( calculateFitColumnCount( { containerWidth: 699.296875, minColumnWidth: 350, maxColumns: 4 } ) ).toBe( 1 );
    expect( calculateFitColumnCount( { containerWidth: 700.25, minColumnWidth: 350, maxColumns: 4 } ) ).toBe( 2 );
    expect( calculateFitColumnCount( { containerWidth: 1049.125, minColumnWidth: 350, maxColumns: 4 } ) ).toBe( 2 );
    expect( calculateFitColumnCount( { containerWidth: 1050.078125, minColumnWidth: 350, maxColumns: 4 } ) ).toBe( 3 );
    expect( calculateFitColumnCount( { containerWidth: 1399.8125, minColumnWidth: 350, maxColumns: 4 } ) ).toBe( 3 );
    expect( calculateFitColumnCount( { containerWidth: 1400.71875, minColumnWidth: 350, maxColumns: 4 } ) ).toBe( 4 );
  } );
} );
