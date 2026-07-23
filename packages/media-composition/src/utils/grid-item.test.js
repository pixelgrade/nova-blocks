import {
  GridItemCollection,
  GridItem,
  getEditorialPlacement,
  isEditorialPair,
  EDITORIAL_PAIR_PRESET,
} from './grid-item';

const img = ( id ) => ( { id } );
const images = ( n ) => Array.from( { length: n }, ( _, i ) => img( i + 1 ) );
const boxes = ( coll ) => coll.gridItems.map( g => ( { x: g.x, y: g.y, width: g.width, height: g.height } ) );

// ---------------------------------------------------------------------------
// (a) Regression pins for the EXISTING classic presets.
//
// These are captured from the pre-change implementation. The editorial branch
// is purely additive, so every classic composition must stay byte-identical.
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

  test( 'a classic stylePreset value never triggers editorial math', () => {
    const attrs = { ...CLASSIC_ATTRS.cloudAtlas, stylePreset: 'the-cloud-atlas' };
    const coll = new GridItemCollection( images( 2 ), attrs );
    expect( boxes( coll ) ).toEqual( CLASSIC_PINS.cloudAtlas_2 );
  } );
} );

// ---------------------------------------------------------------------------
// (b) Editorial Pair preset.
// ---------------------------------------------------------------------------

const EDITORIAL_BASE = {
  stylePreset: EDITORIAL_PAIR_PRESET,
  sizeContrast: 0,
  positionShift: 0,
  imageRotation: 0,
  elementsDistance: 0,   // 0 = corners touch exactly
  placementVariation: 25, // base: small top-left, large bottom-right
  objectPosition: 50,
  imageResizing: 'cropped',
};

describe( 'editorial pair — eligibility', () => {
  test( 'active only for exactly two images', () => {
    expect( isEditorialPair( EDITORIAL_BASE, 2 ) ).toBe( true );
    expect( isEditorialPair( EDITORIAL_BASE, 1 ) ).toBe( false );
    expect( isEditorialPair( EDITORIAL_BASE, 3 ) ).toBe( false );
    expect( isEditorialPair( { ...EDITORIAL_BASE, stylePreset: 'the-cloud-atlas' }, 2 ) ).toBe( false );
  } );
} );

describe( 'editorial pair — corner touch at distance 0', () => {
  test( 'image 2 top-left corner meets image 1 bottom-right corner exactly', () => {
    const coll = new GridItemCollection( images( 2 ), EDITORIAL_BASE );
    const [ small, large ] = coll.gridItems;

    // Small item pinned top-left.
    expect( { x: small.x, y: small.y } ).toEqual( { x: 1, y: 1 } );

    // Portrait (width span < height span).
    expect( small.width ).toBeLessThan( small.height );

    // Image 1's bottom-right grid line == image 2's top-left grid line.
    expect( large.x ).toBe( small.x + small.width );
    expect( large.y ).toBe( small.y + small.height );

    // Large item is landscape and larger than the small one.
    expect( large.width ).toBeGreaterThan( large.height );
    expect( large.width * large.height ).toBeGreaterThan( small.width * small.height );

    // Exact coordinates for the calibrated default anatomy.
    expect( boxes( coll ) ).toEqual( [
      { x: 1, y: 1, width: 21, height: 33 },
      { x: 22, y: 34, width: 44, height: 33 },
    ] );
  } );
} );

describe( 'editorial pair — elementsDistance sign', () => {
  test( 'positive elementsDistance opens a diagonal gap (no overlap)', () => {
    const coll = new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, elementsDistance: 40 } );
    const [ small, large ] = coll.gridItems;
    const offset = Math.round( 40 / 10 );
    // Image 2 starts strictly past image 1's bottom-right corner.
    expect( large.x ).toBe( small.x + small.width + offset );
    expect( large.y ).toBe( small.y + small.height + offset );
    expect( large.x ).toBeGreaterThan( small.x + small.width );
  } );

  test( 'negative elementsDistance overlaps the corners', () => {
    const coll = new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, elementsDistance: -20 } );
    const [ small, large ] = coll.gridItems;
    const offset = Math.round( -20 / 10 ); // -2
    expect( large.x ).toBe( small.x + small.width + offset );
    expect( large.y ).toBe( small.y + small.height + offset );
    // Overlap: image 2 starts before image 1's right/bottom edge.
    expect( large.x ).toBeLessThan( small.x + small.width );
    expect( large.y ).toBeLessThan( small.y + small.height );
  } );
} );

describe( 'editorial pair — sizeContrast', () => {
  test( 'higher sizeContrast shrinks the small item while the large item is fixed', () => {
    const low = getEditorialPlacement( 0, { ...EDITORIAL_BASE, sizeContrast: 0 } );
    const high = getEditorialPlacement( 0, { ...EDITORIAL_BASE, sizeContrast: 100 } );
    const largeLow = getEditorialPlacement( 1, { ...EDITORIAL_BASE, sizeContrast: 0 } );
    const largeHigh = getEditorialPlacement( 1, { ...EDITORIAL_BASE, sizeContrast: 100 } );

    expect( high.width ).toBeLessThan( low.width );
    expect( high.height ).toBeLessThan( low.height );

    // The large item's own dimensions never change with sizeContrast.
    expect( largeHigh.width ).toBe( largeLow.width );
    expect( largeHigh.height ).toBe( largeLow.height );

    // Portrait ratio preserved as it shrinks.
    expect( high.width ).toBeLessThan( high.height );

    // Corner still touches (offset 0) at max contrast.
    const coll = new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, sizeContrast: 100 } );
    const [ small, large ] = coll.gridItems;
    expect( large.x ).toBe( small.x + small.width );
    expect( large.y ).toBe( small.y + small.height );
  } );
} );

describe( 'editorial pair — placementVariation mirror forms', () => {
  const cornerOf = ( coll ) => {
    // Returns the small item's anchor quadrant relative to the large item.
    const [ small, large ] = coll.gridItems;
    return {
      smallLeftOfLarge: small.x < large.x,
      smallAboveLarge: small.y < large.y,
    };
  };

  test( 'the four variations produce four distinct mirror forms', () => {
    const v25 = cornerOf( new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, placementVariation: 25 } ) );
    const v50 = cornerOf( new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, placementVariation: 50 } ) );
    const v75 = cornerOf( new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, placementVariation: 75 } ) );
    const v100 = cornerOf( new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, placementVariation: 100 } ) );

    // 25: small top-left. 50: flipX -> small top-right.
    // 75: flipY -> small bottom-left. 100: flipXY -> small bottom-right.
    expect( v25 ).toEqual( { smallLeftOfLarge: true, smallAboveLarge: true } );
    expect( v50 ).toEqual( { smallLeftOfLarge: false, smallAboveLarge: true } );
    expect( v75 ).toEqual( { smallLeftOfLarge: true, smallAboveLarge: false } );
    expect( v100 ).toEqual( { smallLeftOfLarge: false, smallAboveLarge: false } );

    const forms = [ v25, v50, v75, v100 ].map( JSON.stringify );
    expect( new Set( forms ).size ).toBe( 4 );
  } );

  test( 'mirror forms keep the corners touching', () => {
    for ( const placementVariation of [ 25, 50, 75, 100 ] ) {
      const coll = new GridItemCollection( images( 2 ), { ...EDITORIAL_BASE, placementVariation } );
      const [ a, b ] = coll.gridItems;
      // The two items share exactly one corner: one item's edge lines coincide
      // with the other's opposite edge lines.
      const aRight = a.x + a.width, aBottom = a.y + a.height;
      const bRight = b.x + b.width, bBottom = b.y + b.height;
      const touchesX = ( a.x === bRight ) || ( b.x === aRight );
      const touchesY = ( a.y === bBottom ) || ( b.y === aBottom );
      expect( touchesX && touchesY ).toBe( true );
    }
  } );
} );

describe( 'editorial pair — non-2 image counts fall back to classic math', () => {
  test( 'one image renders as a single classic item', () => {
    const coll = new GridItemCollection( images( 1 ), EDITORIAL_BASE );
    // Classic single-item placement (square, top-left), not the editorial pair.
    expect( boxes( coll ) ).toEqual( [ { x: 1, y: 1, width: 20, height: 20 } ] );
  } );

  test( 'three images render as the classic grid (editorial ignored)', () => {
    const editorialThree = boxes( new GridItemCollection( images( 3 ), EDITORIAL_BASE ) );
    const classicThree = boxes( new GridItemCollection( images( 3 ), { ...EDITORIAL_BASE, stylePreset: 'the-cloud-atlas' } ) );
    expect( editorialThree ).toEqual( classicThree );
    // And none of them use the editorial landscape span.
    expect( editorialThree.every( b => b.width === b.height ) ).toBe( true );
  } );
} );

describe( 'editorial pair — GridItem carries per-item aspect + image style', () => {
  test( 'getStyle emits non-square spans and getImageStyle resolves', () => {
    const small = new GridItem( img( 1 ), 0, EDITORIAL_BASE, false, true );
    const style = small.getStyle();
    expect( style.gridColumnEnd ).toBe( 'span 21' );
    expect( style.gridRowEnd ).toBe( 'span 33' );
    expect( small.getImageStyle().objectFit ).toBe( 'cover' );
  } );
} );
