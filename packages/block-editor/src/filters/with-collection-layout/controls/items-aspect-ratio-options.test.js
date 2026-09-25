jest.mock( '@wordpress/i18n', () => ( { __: ( text ) => text } ) );

import {
  detectItemsAspectRatio,
  getItemsAspectRatioOptions,
  getItemsAspectRatioPatch,
  supportsRowFitMediaBox,
  MEDIA_ALIGN_DEFAULT,
  isMediaAlignRelevant,
} from './items-aspect-ratio-options';

const values = ( options ) => options.map( option => option.value );

describe( 'Items Aspect Ratio options (#627)', () => {
  it( 'offers Fit to Row only where rows exist: a Classic grid of vertical cards', () => {
    expect( supportsRowFitMediaBox( { layoutStyle: 'classic', cardLayout: 'vertical' } ) ).toBe( true );
    expect( supportsRowFitMediaBox( { layoutStyle: 'classic', cardLayout: 'vertical-reverse' } ) ).toBe( true );
    expect( supportsRowFitMediaBox( { layoutStyle: 'masonry', cardLayout: 'vertical' } ) ).toBe( false );
    expect( supportsRowFitMediaBox( { layoutStyle: 'classic', cardLayout: 'stacked' } ) ).toBe( false );
    expect( supportsRowFitMediaBox( { layoutStyle: 'classic', cardLayout: 'horizontal' } ) ).toBe( false );

    expect( values( getItemsAspectRatioOptions( { layoutStyle: 'classic', cardLayout: 'vertical' } ) ) )
      .toEqual( [ 'original', 'row', 'square', 'landscape', 'portrait' ] );
    expect( values( getItemsAspectRatioOptions( { layoutStyle: 'masonry', cardLayout: 'vertical' } ) ) )
      .toEqual( [ 'original', 'square', 'landscape', 'portrait' ] );
  } );

  it( 'keeps a stored Fit to Row listed after the context stops supporting it, so the select never lies', () => {
    expect( values( getItemsAspectRatioOptions( { layoutStyle: 'masonry', cardLayout: 'vertical', thumbnailAspectRatioString: 'row' } ) ) )
      .toContain( 'row' );
  } );

  it( 'detects the stored ratio, row fit included', () => {
    expect( detectItemsAspectRatio( { thumbnailAspectRatioString: 'row', thumbnailAspectRatio: 42 } ) ).toBe( 'row' );
    expect( detectItemsAspectRatio( { thumbnailAspectRatioString: 'original', thumbnailAspectRatio: 42 } ) ).toBe( 'original' );
    expect( detectItemsAspectRatio( { thumbnailAspectRatioString: 'landscape', thumbnailAspectRatio: 42 } ) ).toBe( 'landscape' );
    expect( detectItemsAspectRatio( { thumbnailAspectRatioString: 'square', thumbnailAspectRatio: 50 } ) ).toBe( 'square' );
    expect( detectItemsAspectRatio( { thumbnailAspectRatioString: 'portrait', thumbnailAspectRatio: 67 } ) ).toBe( 'portrait' );
  } );

  it( 'writes one patch per choice, the ratio string being the only change for the lossless modes', () => {
    expect( getItemsAspectRatioPatch( 'row' ) ).toEqual( { thumbnailAspectRatioString: 'row' } );
    expect( getItemsAspectRatioPatch( 'original' ) ).toEqual( { thumbnailAspectRatioString: 'original' } );
    expect( getItemsAspectRatioPatch( 'landscape' ) ).toEqual( { thumbnailAspectRatio: 42, thumbnailAspectRatioString: 'landscape', imageResizing: 'cropped' } );
    expect( getItemsAspectRatioPatch( 'nope' ) ).toEqual( {} );
  } );

  it( 'shows Media Alignment wherever the picture can move inside its box', () => {
    expect( MEDIA_ALIGN_DEFAULT ).toBe( 'center center' );
    expect( isMediaAlignRelevant( { thumbnailAspectRatioString: 'row' } ) ).toBe( true );
    expect( isMediaAlignRelevant( { thumbnailAspectRatioString: 'landscape' } ) ).toBe( true );
    // Original sizes the box to the picture: there is nowhere to move it.
    expect( isMediaAlignRelevant( { thumbnailAspectRatioString: 'original' } ) ).toBe( false );
    // A stored value stays reachable so it can be reset.
    expect( isMediaAlignRelevant( { thumbnailAspectRatioString: 'original', mediaAlign: 'top left' } ) ).toBe( true );
  } );
} );
