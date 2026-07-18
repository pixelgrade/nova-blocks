import {
  calculateLatticeLayout,
  getLatticeDemotions,
  getLatticePreferredSpan,
  getResponsiveLatticeColumnCount,
} from './lattice-layout-engine';

const item = ( id, className ) => ( { id, className } );

const occupiedCellKeys = ( placements ) => placements.reduce( ( cells, placement ) => {
  for ( let row = placement.row; row < placement.row + placement.rowSpan; row++ ) {
    for ( let column = placement.column; column < placement.column + placement.columnSpan; column++ ) {
      cells.add( `${ row }:${ column }` );
    }
  }

  return cells;
}, new Set() );

const expectNoInteriorHoles = ( placements, columnCount ) => {
  const cells = occupiedCellKeys( placements );
  const indexes = [ ...cells ].map( key => {
    const [ row, column ] = key.split( ':' ).map( Number );
    return ( row - 1 ) * columnCount + column - 1;
  } );
  const lastOccupiedIndex = Math.max( ...indexes );

  for ( let index = 0; index <= lastOccupiedIndex; index++ ) {
    const row = Math.floor( index / columnCount ) + 1;
    const column = index % columnCount + 1;
    expect( cells.has( `${ row }:${ column }` ) ).toBe( true );
  }
};

describe( 'getLatticePreferredSpan', () => {
  test.each( [
    [ 'is-sticky-post nb-card--media-wide', { columnSpan: 2, rowSpan: 2 } ],
    [ 'format-quote nb-card--media-tall', { columnSpan: 2, rowSpan: 1 } ],
    [ 'nb-card--no-media nb-card--media-wide', { columnSpan: 1, rowSpan: 1 } ],
    [ 'nb-card--media-wide', { columnSpan: 3, rowSpan: 1 } ],
    [ 'nb-card--media-landscape', { columnSpan: 2, rowSpan: 1 } ],
    [ 'nb-card--media-tall', { columnSpan: 1, rowSpan: 2 } ],
    [ 'nb-card--media-portrait', { columnSpan: 1, rowSpan: 1 } ],
    [ 'nb-card--media-square', { columnSpan: 1, rowSpan: 1 } ],
    [ '', { columnSpan: 1, rowSpan: 1 } ],
  ] )( '%s maps to its gallery span', ( className, expected ) => {
    expect( getLatticePreferredSpan( item( 'card', className ), 5 ) ).toEqual( expected );
  } );

  test( 'clamps preferred widths and collapses every phone card to one module', () => {
    expect( getLatticePreferredSpan( item( 'wide', 'nb-card--media-wide' ), 2 ) )
      .toEqual( { columnSpan: 2, rowSpan: 1 } );
    expect( getLatticePreferredSpan( item( 'sticky', 'is-sticky-post' ), 1 ) )
      .toEqual( { columnSpan: 1, rowSpan: 1 } );
    expect( getLatticePreferredSpan( item( 'tall', 'nb-card--media-tall' ), 1 ) )
      .toEqual( { columnSpan: 1, rowSpan: 1 } );
  } );

  test( 'reads expression classes from the rendered card inside a layout wrapper', () => {
    const wrapper = document.createElement( 'div' );
    const card = document.createElement( 'article' );
    card.className = 'nb-supernova-item nb-card--media-wide';
    wrapper.appendChild( card );

    expect( getLatticePreferredSpan( wrapper, 5 ) )
      .toEqual( { columnSpan: 3, rowSpan: 1 } );
  } );

  test( 'lets recipe attributes tune only sticky, tall, and panorama expression spans', () => {
    const options = {
      stickyFeatureSize: 1,
      tallMediaSpan: 1,
      panoramaSpan: 2,
    };

    expect( getLatticePreferredSpan( item( 'sticky', 'is-sticky-post' ), 5, options ) )
      .toEqual( { columnSpan: 1, rowSpan: 1 } );
    expect( getLatticePreferredSpan( item( 'tall', 'nb-card--media-tall' ), 5, options ) )
      .toEqual( { columnSpan: 1, rowSpan: 1 } );
    expect( getLatticePreferredSpan( item( 'wide', 'nb-card--media-wide' ), 5, options ) )
      .toEqual( { columnSpan: 2, rowSpan: 1 } );
    expect( getLatticePreferredSpan( item( 'quote', 'format-quote' ), 5, options ) )
      .toEqual( { columnSpan: 2, rowSpan: 1 } );
    expect( getLatticePreferredSpan( item( 'landscape', 'nb-card--media-landscape' ), 5, options ) )
      .toEqual( { columnSpan: 2, rowSpan: 1 } );
  } );
} );

describe( 'getResponsiveLatticeColumnCount', () => {
  test( 'uses authored desktop columns, then three, two, and one progressive reading columns', () => {
    expect( getResponsiveLatticeColumnCount( { authoredColumns: 5, viewportWidth: 1280 } ) ).toBe( 5 );
    expect( getResponsiveLatticeColumnCount( { authoredColumns: 6, viewportWidth: 987 } ) ).toBe( 3 );
    expect( getResponsiveLatticeColumnCount( { authoredColumns: 6, viewportWidth: 900 } ) ).toBe( 3 );
    expect( getResponsiveLatticeColumnCount( { authoredColumns: 6, viewportWidth: 700 } ) ).toBe( 2 );
    expect( getResponsiveLatticeColumnCount( { authoredColumns: 6, viewportWidth: 599 } ) ).toBe( 1 );
  } );

  test( 'normalizes unsafe authored values', () => {
    expect( getResponsiveLatticeColumnCount( { authoredColumns: 0, viewportWidth: 1400 } ) ).toBe( 1 );
    expect( getResponsiveLatticeColumnCount( { authoredColumns: '5', viewportWidth: 1400 } ) ).toBe( 5 );
  } );
} );

describe( 'getLatticeDemotions', () => {
  test( 'reduces width before height and always ends at one module', () => {
    expect( getLatticeDemotions( { columnSpan: 3, rowSpan: 2 } ) ).toEqual( [
      { columnSpan: 2, rowSpan: 2 },
      { columnSpan: 1, rowSpan: 2 },
      { columnSpan: 1, rowSpan: 1 },
    ] );
  } );
} );

describe( 'calculateLatticeLayout', () => {
  test( 'gives the next content-order card first refusal at every topmost-leftmost gap', () => {
    const cards = [
      item( 'a', 'nb-card--media-square' ),
      item( 'b', 'nb-card--media-landscape' ),
      item( 'c', 'nb-card--media-square' ),
    ];

    const result = calculateLatticeLayout( { items: cards, columnCount: 4 } );

    expect( result.placements.map( placement => [
      placement.item.id,
      placement.row,
      placement.column,
      placement.columnSpan,
      placement.rowSpan,
    ] ) ).toEqual( [
      [ 'a', 1, 1, 1, 1 ],
      [ 'b', 1, 2, 2, 1 ],
      [ 'c', 1, 4, 1, 1 ],
    ] );
    expect( result.placementOrder ).toEqual( cards );
  } );

  test( 'pulls forward the first fitting card from a deterministic three-card window', () => {
    const cards = [
      item( 'feature', 'is-sticky-post' ),
      item( 'wide', 'nb-card--media-wide' ),
      item( 'landscape', 'nb-card--media-landscape' ),
      item( 'square', 'nb-card--media-square' ),
      item( 'tail', 'nb-card--media-square' ),
    ];

    const { placements } = calculateLatticeLayout( { items: cards, columnCount: 4 } );

    expect( placements.slice( 0, 2 ).map( placement => placement.item.id ) )
      .toEqual( [ 'feature', 'landscape' ] );
    expect( placements[1] ).toMatchObject( {
      row: 1,
      column: 3,
      pulledForward: true,
      sourceIndex: 2,
    } );
  } );

  test( 'honors a zero-card pull-forward window without changing top-left packing', () => {
    const cards = [
      item( 'feature', 'is-sticky-post' ),
      item( 'wide', 'nb-card--media-wide' ),
      item( 'landscape', 'nb-card--media-landscape' ),
      item( 'square', 'nb-card--media-square' ),
    ];

    const { placements } = calculateLatticeLayout( {
      items: cards,
      columnCount: 4,
      pullForwardWindow: 0,
    } );

    expect( placements.slice( 0, 2 ).map( placement => placement.item.id ) )
      .toEqual( [ 'feature', 'wide' ] );
    expect( placements[1] ).toMatchObject( {
      row: 1,
      column: 3,
      columnSpan: 2,
      pulledForward: false,
      demoted: true,
    } );
    expectNoInteriorHoles( placements, 4 );
  } );

  test( 'applies tuned spans through the complete deterministic packing pass', () => {
    const cards = [
      item( 'feature', 'is-sticky-post' ),
      item( 'panorama', 'nb-card--media-wide' ),
      item( 'tall', 'nb-card--media-tall' ),
    ];

    const { placements } = calculateLatticeLayout( {
      items: cards,
      columnCount: 5,
      stickyFeatureSize: 1,
      tallMediaSpan: 1,
      panoramaSpan: 2,
    } );

    expect( placements.map( placement => [
      placement.item.id,
      placement.columnSpan,
      placement.rowSpan,
    ] ) ).toEqual( [
      [ 'feature', 1, 1 ],
      [ 'panorama', 2, 1 ],
      [ 'tall', 1, 1 ],
    ] );
  } );

  test( 'never looks beyond the three-card pull-forward window', () => {
    const cards = [
      item( 'feature', 'is-sticky-post' ),
      item( 'wide-1', 'nb-card--media-wide' ),
      item( 'wide-2', 'nb-card--media-wide' ),
      item( 'wide-3', 'nb-card--media-wide' ),
      item( 'wide-4', 'nb-card--media-wide' ),
      item( 'square-outside-window', 'nb-card--media-square' ),
    ];

    const { placements } = calculateLatticeLayout( { items: cards, columnCount: 4 } );

    expect( placements[1] ).toMatchObject( {
      item: cards[1],
      row: 1,
      column: 3,
      columnSpan: 2,
      demoted: true,
      pulledForward: false,
    } );
  } );

  test( 'demotes width before height when no preferred span in the window fits', () => {
    const cards = [
      item( 'feature', 'is-sticky-post' ),
      item( 'wide-1', 'nb-card--media-wide' ),
      item( 'wide-2', 'nb-card--media-wide' ),
      item( 'wide-3', 'nb-card--media-wide' ),
      item( 'wide-4', 'nb-card--media-wide' ),
    ];

    const { placements } = calculateLatticeLayout( { items: cards, columnCount: 4 } );

    expect( placements[1] ).toMatchObject( {
      item: cards[1],
      columnSpan: 2,
      rowSpan: 1,
      demoted: true,
    } );
  } );

  test( 'is deterministic and leaves no skipped interior cell at the trailing frontier', () => {
    const cards = [
      item( 'feature', 'is-sticky-post' ),
      item( 'panorama', 'nb-card--media-wide' ),
      item( 'tall', 'nb-card--media-tall' ),
      item( 'quote', 'format-quote' ),
      item( 'landscape', 'nb-card--media-landscape' ),
      item( 'plain', 'nb-card--no-media' ),
      item( 'portrait', 'nb-card--media-portrait' ),
      item( 'square', 'nb-card--media-square' ),
    ];

    const first = calculateLatticeLayout( { items: cards, columnCount: 5 } );
    const second = calculateLatticeLayout( { items: cards, columnCount: 5 } );

    expect( second.placements ).toEqual( first.placements );
    expectNoInteriorHoles( first.placements, 5 );
  } );

  test( 'returns an empty stable result for an empty collection', () => {
    expect( calculateLatticeLayout( { items: [], columnCount: 5 } ) ).toEqual( {
      columnCount: 5,
      placements: [],
      placementOrder: [],
      rowCount: 0,
    } );
  } );
} );
