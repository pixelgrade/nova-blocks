import {
  ELEMENT,
  getCardContentRegions,
} from './element-order-utils';

const classes = region => region.classNames;

describe( 'getCardContentRegions', () => {
  test( 'marks the default Lattice caption as the trailing title region', () => {
    const regions = getCardContentRegions( [
      ELEMENT.MEDIA,
      ELEMENT.TITLE,
      ELEMENT.META_PRIMARY,
    ], { hasMedia: true } );

    expect( regions ).toHaveLength( 1 );
    expect( regions[0] ).toMatchObject( {
      placement: 'after-media',
      items: [ ELEMENT.TITLE, ELEMENT.META_PRIMARY ],
    } );
    expect( classes( regions[0] ) ).toEqual( expect.arrayContaining( [
      'nb-supernova-item__content--after-media',
      'nb-supernova-item__content--contains-title',
      'nb-supernova-item__content--trailing-boundary',
    ] ) );
    expect( classes( regions[0] ) ).not.toContain( 'nb-supernova-item__content--details-only' );
  } );

  test( 'marks an isolated leading Meta and the trailing title independently', () => {
    const regions = getCardContentRegions( [
      ELEMENT.META_PRIMARY,
      ELEMENT.MEDIA,
      ELEMENT.TITLE,
    ], { hasMedia: true } );

    expect( regions.map( region => ( {
      placement: region.placement,
      items: region.items,
      classNames: region.classNames,
    } ) ) ).toEqual( [
      {
        placement: 'before-media',
        items: [ ELEMENT.META_PRIMARY ],
        classNames: [
          'nb-supernova-item__content--before-media',
          'nb-supernova-item__content--details-only',
          'nb-supernova-item__content--leading-boundary',
        ],
      },
      {
        placement: 'after-media',
        items: [ ELEMENT.TITLE ],
        classNames: [
          'nb-supernova-item__content--after-media',
          'nb-supernova-item__content--contains-title',
          'nb-supernova-item__content--trailing-boundary',
        ],
      },
    ] );
  } );

  test( 'marks an isolated trailing Button without treating the title as details-only', () => {
    const regions = getCardContentRegions( [
      ELEMENT.TITLE,
      ELEMENT.MEDIA,
      ELEMENT.BUTTONS,
    ], { hasMedia: true } );

    expect( classes( regions[0] ) ).toEqual( [
      'nb-supernova-item__content--before-media',
      'nb-supernova-item__content--contains-title',
      'nb-supernova-item__content--leading-boundary',
    ] );
    expect( classes( regions[1] ) ).toEqual( [
      'nb-supernova-item__content--after-media',
      'nb-supernova-item__content--details-only',
      'nb-supernova-item__content--trailing-boundary',
    ] );
  } );

  test( 'keeps Title and Meta in one content-only region when no media renders', () => {
    const regions = getCardContentRegions( [
      ELEMENT.MEDIA,
      ELEMENT.TITLE,
      ELEMENT.META_PRIMARY,
    ], { hasMedia: false } );

    expect( regions ).toEqual( [ {
      placement: 'content-only',
      items: [ ELEMENT.TITLE, ELEMENT.META_PRIMARY ],
      classNames: [
        'nb-supernova-item__content--content-only',
        'nb-supernova-item__content--contains-title',
        'nb-supernova-item__content--leading-boundary',
        'nb-supernova-item__content--trailing-boundary',
      ],
    } ] );
  } );

  test( 'does not mark Meta as a boundary when Media and Title bound it', () => {
    const regions = getCardContentRegions( [
      ELEMENT.MEDIA,
      ELEMENT.META_PRIMARY,
      ELEMENT.TITLE,
    ], { hasMedia: true } );

    expect( classes( regions[0] ) ).toContain( 'nb-supernova-item__content--trailing-boundary' );
    expect( classes( regions[0] ) ).not.toContain( 'nb-supernova-item__content--leading-boundary' );
    expect( regions[0].items ).toEqual( [ ELEMENT.META_PRIMARY, ELEMENT.TITLE ] );
  } );
} );
