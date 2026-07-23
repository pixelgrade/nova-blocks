import {
  GridItemCollection,
  GridItem,
  getChainItemSize,
} from './grid-item';

const img = ( id ) => ( { id } );
const images = ( n ) => Array.from( { length: n }, ( _, i ) => img( i + 1 ) );
const boxes = ( coll ) => coll.gridItems.map( g => ( { x: g.x, y: g.y, width: g.width, height: g.height } ) );

// ---------------------------------------------------------------------------
// (a) Regression pins for the EXISTING classic presets ("grid" arrangement).
//
// These are captured from the pre-change implementation. The continuous model
// only adds a second arrangement ("chain"); the default ("grid") must stay
// byte-identical to the classic placement math for every composition.
// ---------------------------------------------------------------------------

const CLASSIC_ATTRS = {
  cloudAtlas: { sizeContrast: 0, positionShift: 0, imageRotation: 0, elementsDistance: 20, placementVariation: 25 },
  prideAndPrejudice: { sizeContrast: 60, positionShift: 70, imageRotation: 0, elementsDistance: 40, placementVariation: 0 },
  aWalkToRemember: { sizeContrast: 100, positionShift: 50, imageRotation: 0, elementsDistance: 20, placementVariation: 25 },
  memoirs: { sizeContrast: 80, positionShift: 0, imageRotation: 0, elementsDistance: 20, placementVariation: 50 },
};

const CLASSIC_PINS = {
  cloudAtlas_2: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 21, y: 1, width: 20, height: 20 } ],
  cloudAtlas_3: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 21, y: 1, width: 20, height: 20 }, { x: 11, y: 21, width: 20, height: 20 } ],
  cloudAtlas_5: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 21, y: 1, width: 20, height: 20 }, { x: 21, y: 21, width: 20, height: 20 }, { x: 1, y: 21, width: 20, height: 20 }, { x: 1, y: 41, width: 20, height: 20 } ],
  prideAndPrejudice_2: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 7, y: 18, width: 17, height: 17 } ],
  prideAndPrejudice_3: [ { x: 5, y: 1, width: 20, height: 20 }, { x: 15, y: 18, width: 17, height: 17 }, { x: 1, y: 21, width: 14, height: 14 } ],
  prideAndPrejudice_5: [ { x: 9, y: 1, width: 20, height: 20 }, { x: 15, y: 18, width: 17, height: 17 }, { x: 1, y: 21, width: 14, height: 14 }, { x: 4, y: 7, width: 11, height: 11 }, { x: 9, y: 35, width: 20, height: 20 } ],
  aWalkToRemember_2: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 11, y: 16, width: 15, height: 15 } ],
  aWalkToRemember_3: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 11, y: 16, width: 15, height: 15 }, { x: 1, y: 21, width: 10, height: 10 } ],
  aWalkToRemember_5: [ { x: 1, y: 1, width: 20, height: 20 }, { x: 11, y: 16, width: 15, height: 15 }, { x: 1, y: 21, width: 10, height: 10 }, { x: 6, y: 11, width: 5, height: 5 }, { x: 1, y: 31, width: 20, height: 20 } ],
  memoirs_2: [ { x: 17, y: 1, width: 20, height: 20 }, { x: 1, y: 5, width: 16, height: 16 } ],
  memoirs_3: [ { x: 17, y: 1, width: 20, height: 20 }, { x: 1, y: 5, width: 16, height: 16 }, { x: 15, y: 21, width: 12, height: 12 } ],
  memoirs_5: [ { x: 17, y: 1, width: 20, height: 20 }, { x: 1, y: 5, width: 16, height: 16 }, { x: 5, y: 21, width: 12, height: 12 }, { x: 17, y: 21, width: 8, height: 8 }, { x: 17, y: 33, width: 20, height: 20 } ],
};

describe( 'classic placement regression pins', () => {
  for ( const [ name, attrs ] of Object.entries( CLASSIC_ATTRS ) ) {
    for ( const n of [ 2, 3, 5 ] ) {
      test( `${ name } / ${ n } images stays byte-identical`, () => {
        const coll = new GridItemCollection( images( n ), attrs );
        expect( boxes( coll ) ).toEqual( CLASSIC_PINS[ `${ name }_${ n }` ] );
      } );
    }
  }

  test( 'a classic stylePreset value never triggers chain math', () => {
    const attrs = { ...CLASSIC_ATTRS.cloudAtlas, stylePreset: 'the-cloud-atlas' };
    const coll = new GridItemCollection( images( 2 ), attrs );
    expect( boxes( coll ) ).toEqual( CLASSIC_PINS.cloudAtlas_2 );
  } );

  test( 'arrangement:"grid" is identical to the default (no arrangement)', () => {
    const withGrid = boxes( new GridItemCollection( images( 5 ), { ...CLASSIC_ATTRS.cloudAtlas, arrangement: 'grid' } ) );
    const withDefault = boxes( new GridItemCollection( images( 5 ), CLASSIC_ATTRS.cloudAtlas ) );
    expect( withGrid ).toEqual( withDefault );
    expect( withGrid ).toEqual( CLASSIC_PINS.cloudAtlas_5 );
  } );
} );

// ---------------------------------------------------------------------------
// (b) Chain arrangement (the generalized corner-chain / staircase).
//
// The old Editorial Pair "mode fork" is gone: `stylePreset` is a bundle label
// only, never read for math. Placement is a point in the configuration span
// selected by the `arrangement` attribute. The Editorial Pair preset is just
// a bundle that sets arrangement:"chain".
//
// Model (base orientation, before mirrors), item i (0-based):
//   isPortrait = i even -> aspect 0.65 ; else landscape aspect 1.35
//   height     = round( 33 * heightScale ), heightScale shrinks portraits by
//                sizeContrast (landscapes anchor the chain)
//   width      = round( height * aspect )
//   item 0 anchors at (1,1); item i's top-left corner is placed at item i-1's
//   bottom-right corner, plus:
//     gap   = round( elementsDistance / 10 )  applied to both axes
//     slide = round( positionShift/100 * 20 ) slides the item left along the
//             touching edge (corner-to-corner -> offset arrangements)
// ---------------------------------------------------------------------------

const CHAIN_BASE = {
  arrangement: 'chain',
  sizeContrast: 0,
  positionShift: 0,
  imageRotation: 0,
  elementsDistance: 0,   // 0 = corners touch exactly
  placementVariation: 25, // base: first item top-left, chain steps down-right
  objectPosition: 50,
  imageResizing: 'cropped',
};

describe( 'chain arrangement — selection', () => {
  test( 'arrangement drives the math, not stylePreset', () => {
    const chain = boxes( new GridItemCollection( images( 2 ), CHAIN_BASE ) );
    const grid = boxes( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, arrangement: 'grid' } ) );

    // Chain yields per-item non-square (portrait/landscape) spans.
    expect( chain[ 0 ].width ).not.toBe( chain[ 0 ].height );
    // Grid yields the classic square items.
    expect( grid.every( b => b.width === b.height ) ).toBe( true );

    // A stylePreset value has no effect on the math in either arrangement.
    const chainWithPreset = boxes( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, stylePreset: 'editorial-pair' } ) );
    expect( chainWithPreset ).toEqual( chain );
    const chainOtherPreset = boxes( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, stylePreset: 'the-cloud-atlas' } ) );
    expect( chainOtherPreset ).toEqual( chain );
  } );

  test( 'undefined arrangement falls back to the classic grid', () => {
    const { arrangement, ...noArrangement } = CHAIN_BASE;
    const coll = new GridItemCollection( images( 2 ), noArrangement );
    expect( boxes( coll ).every( b => b.width === b.height ) ).toBe( true );
  } );
} );

describe( 'chain arrangement — the Editorial Pair proportions', () => {
  test( 'two images: portrait (0.65) + landscape (1.35), corners meeting', () => {
    const coll = new GridItemCollection( images( 2 ), CHAIN_BASE );
    const [ first, second ] = coll.gridItems;

    // First item is portrait (narrower than tall).
    expect( first.width ).toBeLessThan( first.height );
    // Second item is landscape (wider than tall) and larger in area.
    expect( second.width ).toBeGreaterThan( second.height );
    expect( second.width * second.height ).toBeGreaterThan( first.width * first.height );

    // Corner meets corner exactly.
    expect( second.x ).toBe( first.x + first.width );
    expect( second.y ).toBe( first.y + first.height );

    // Exact calibrated bundle anatomy.
    expect( boxes( coll ) ).toEqual( [
      { x: 1, y: 1, width: 21, height: 33 },
      { x: 22, y: 34, width: 45, height: 33 },
    ] );
  } );
} );

describe( 'chain arrangement — corner-touch exactness at distance 0', () => {
  for ( const n of [ 2, 3, 4 ] ) {
    test( `${ n } images: every item's top-left meets the previous bottom-right`, () => {
      const coll = new GridItemCollection( images( n ), CHAIN_BASE );
      const items = coll.gridItems;
      for ( let i = 1; i < items.length; i++ ) {
        expect( items[ i ].x ).toBe( items[ i - 1 ].x + items[ i - 1 ].width );
        expect( items[ i ].y ).toBe( items[ i - 1 ].y + items[ i - 1 ].height );
      }
    } );
  }

  test( 'exact staircase pins for 2, 3 and 4 images', () => {
    expect( boxes( new GridItemCollection( images( 2 ), CHAIN_BASE ) ) ).toEqual( [
      { x: 1, y: 1, width: 21, height: 33 },
      { x: 22, y: 34, width: 45, height: 33 },
    ] );
    expect( boxes( new GridItemCollection( images( 3 ), CHAIN_BASE ) ) ).toEqual( [
      { x: 1, y: 1, width: 21, height: 33 },
      { x: 22, y: 34, width: 45, height: 33 },
      { x: 67, y: 67, width: 21, height: 33 },
    ] );
    expect( boxes( new GridItemCollection( images( 4 ), CHAIN_BASE ) ) ).toEqual( [
      { x: 1, y: 1, width: 21, height: 33 },
      { x: 22, y: 34, width: 45, height: 33 },
      { x: 67, y: 67, width: 21, height: 33 },
      { x: 88, y: 100, width: 45, height: 33 },
    ] );
  } );
} );

describe( 'chain arrangement — aspect alternation (editorial rhythm)', () => {
  test( 'portrait / landscape alternate down the chain', () => {
    const items = new GridItemCollection( images( 4 ), CHAIN_BASE ).gridItems;
    expect( items[ 0 ].width < items[ 0 ].height ).toBe( true );  // portrait
    expect( items[ 1 ].width > items[ 1 ].height ).toBe( true );  // landscape
    expect( items[ 2 ].width < items[ 2 ].height ).toBe( true );  // portrait
    expect( items[ 3 ].width > items[ 3 ].height ).toBe( true );  // landscape
  } );
} );

describe( 'chain arrangement — elementsDistance is the corner gap', () => {
  test( 'positive elementsDistance opens a diagonal gap (no overlap)', () => {
    const coll = new GridItemCollection( images( 2 ), { ...CHAIN_BASE, elementsDistance: 40 } );
    const [ first, second ] = coll.gridItems;
    const gap = Math.round( 40 / 10 );
    expect( second.x ).toBe( first.x + first.width + gap );
    expect( second.y ).toBe( first.y + first.height + gap );
    expect( second.x ).toBeGreaterThan( first.x + first.width );
  } );

  test( 'negative elementsDistance overlaps the corners', () => {
    const coll = new GridItemCollection( images( 2 ), { ...CHAIN_BASE, elementsDistance: -20 } );
    const [ first, second ] = coll.gridItems;
    const gap = Math.round( -20 / 10 ); // -2
    expect( second.x ).toBe( first.x + first.width + gap );
    expect( second.y ).toBe( first.y + first.height + gap );
    expect( second.x ).toBeLessThan( first.x + first.width );
    expect( second.y ).toBeLessThan( first.y + first.height );
  } );
} );

describe( 'chain arrangement — sizeContrast is the size progression', () => {
  test( 'higher sizeContrast shrinks the portrait members; landscapes anchor', () => {
    const lowP = getChainItemSize( 0, { ...CHAIN_BASE, sizeContrast: 0 } );
    const highP = getChainItemSize( 0, { ...CHAIN_BASE, sizeContrast: 100 } );
    const lowL = getChainItemSize( 1, { ...CHAIN_BASE, sizeContrast: 0 } );
    const highL = getChainItemSize( 1, { ...CHAIN_BASE, sizeContrast: 100 } );

    // Portrait shrinks with contrast, keeping its portrait character.
    expect( highP.width ).toBeLessThan( lowP.width );
    expect( highP.height ).toBeLessThan( lowP.height );
    expect( highP.width ).toBeLessThan( highP.height );

    // Landscape anchor never changes size with contrast.
    expect( highL.width ).toBe( lowL.width );
    expect( highL.height ).toBe( lowL.height );

    // Corner still touches at max contrast.
    const coll = new GridItemCollection( images( 2 ), { ...CHAIN_BASE, sizeContrast: 100 } );
    const [ first, second ] = coll.gridItems;
    expect( second.x ).toBe( first.x + first.width );
    expect( second.y ).toBe( first.y + first.height );
  } );
} );

describe( 'chain arrangement — positionShift slides along the touching edge (revived)', () => {
  test( 'increasing positionShift slides each stepped item along its edge', () => {
    const shift0 = new GridItemCollection( images( 2 ), { ...CHAIN_BASE, positionShift: 0 } ).gridItems;
    const shift100 = new GridItemCollection( images( 2 ), { ...CHAIN_BASE, positionShift: 100 } ).gridItems;

    // At shift 0 the corners touch exactly.
    expect( shift0[ 1 ].x ).toBe( shift0[ 0 ].x + shift0[ 0 ].width );

    // positionShift has an OBSERVABLE effect: the second item slides left along
    // the shared edge (corner-to-corner morphs toward a stacked offset).
    expect( shift100[ 1 ].x ).not.toBe( shift0[ 1 ].x );
    expect( shift100[ 1 ].x ).toBeLessThan( shift0[ 1 ].x );

    // The vertical meeting is preserved (top edge still meets the edge below).
    expect( shift100[ 1 ].y ).toBe( shift0[ 1 ].y );
  } );

  test( 'positionShift is monotonic across the range', () => {
    const xAt = ( positionShift ) =>
      new GridItemCollection( images( 2 ), { ...CHAIN_BASE, positionShift } ).gridItems[ 1 ].x;
    expect( xAt( 0 ) ).toBeGreaterThan( xAt( 50 ) );
    expect( xAt( 50 ) ).toBeGreaterThan( xAt( 100 ) );
  } );
} );

describe( 'chain arrangement — placementVariation mirror forms', () => {
  const cornerOf = ( coll ) => {
    const [ first, second ] = coll.gridItems;
    return {
      firstLeftOfSecond: first.x < second.x,
      firstAboveSecond: first.y < second.y,
    };
  };

  test( 'the four variations produce four distinct mirror forms', () => {
    const v25 = cornerOf( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, placementVariation: 25 } ) );
    const v50 = cornerOf( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, placementVariation: 50 } ) );
    const v75 = cornerOf( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, placementVariation: 75 } ) );
    const v100 = cornerOf( new GridItemCollection( images( 2 ), { ...CHAIN_BASE, placementVariation: 100 } ) );

    expect( v25 ).toEqual( { firstLeftOfSecond: true, firstAboveSecond: true } );
    expect( v50 ).toEqual( { firstLeftOfSecond: false, firstAboveSecond: true } );
    expect( v75 ).toEqual( { firstLeftOfSecond: true, firstAboveSecond: false } );
    expect( v100 ).toEqual( { firstLeftOfSecond: false, firstAboveSecond: false } );

    const forms = [ v25, v50, v75, v100 ].map( JSON.stringify );
    expect( new Set( forms ).size ).toBe( 4 );
  } );

  test( 'mirror forms keep the corners touching', () => {
    for ( const placementVariation of [ 25, 50, 75, 100 ] ) {
      const coll = new GridItemCollection( images( 3 ), { ...CHAIN_BASE, placementVariation } );
      const [ a, b, c ] = coll.gridItems;
      const touch = ( p, q ) => {
        const pRight = p.x + p.width, pBottom = p.y + p.height;
        const qRight = q.x + q.width, qBottom = q.y + q.height;
        const touchesX = ( p.x === qRight ) || ( q.x === pRight );
        const touchesY = ( p.y === qBottom ) || ( q.y === pBottom );
        return touchesX && touchesY;
      };
      expect( touch( a, b ) ).toBe( true );
      expect( touch( b, c ) ).toBe( true );
    }
  } );
} );

describe( 'chain arrangement — graceful across image counts', () => {
  test( 'one image renders a single portrait plate', () => {
    const coll = new GridItemCollection( images( 1 ), CHAIN_BASE );
    expect( boxes( coll ) ).toEqual( [ { x: 1, y: 1, width: 21, height: 33 } ] );
  } );

  test( 'five images continue the alternating staircase (no cap)', () => {
    const coll = new GridItemCollection( images( 5 ), CHAIN_BASE );
    const items = coll.gridItems;
    expect( items ).toHaveLength( 5 );
    // Alternating aspect keeps going.
    expect( items[ 4 ].width < items[ 4 ].height ).toBe( true ); // portrait again
    // Still a valid touching chain.
    for ( let i = 1; i < items.length; i++ ) {
      expect( items[ i ].x ).toBe( items[ i - 1 ].x + items[ i - 1 ].width );
      expect( items[ i ].y ).toBe( items[ i - 1 ].y + items[ i - 1 ].height );
    }
  } );
} );

describe( 'chain arrangement — GridItem carries per-item aspect + image style', () => {
  test( 'getStyle emits non-square spans and getImageStyle resolves', () => {
    const item = new GridItem( img( 1 ), 0, CHAIN_BASE, false, 'chain' );
    const style = item.getStyle();
    expect( style.gridColumnEnd ).toBe( 'span 21' );
    expect( style.gridRowEnd ).toBe( 'span 33' );
    expect( item.getImageStyle().objectFit ).toBe( 'cover' );
  } );
} );
