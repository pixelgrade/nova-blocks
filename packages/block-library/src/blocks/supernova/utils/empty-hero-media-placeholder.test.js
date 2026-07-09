import { shouldSuppressEmptyHeroMediaPlaceholder } from './empty-hero-media-placeholder';
import { CURRENT_ITEM_FEATURED_IMAGE_MEDIA_SOURCE } from './media-source-constants';

describe( 'shouldSuppressEmptyHeroMediaPlaceholder', () => {
  test( 'suppresses empty full-width stacked Hero Card media when collection attributes come from the parent block', () => {
    expect( shouldSuppressEmptyHeroMediaPlaceholder(
      {
        contentType: 'custom',
        mediaSource: 'manual',
      },
      [],
      {
        variation: 'novablocks-card-hero',
        align: 'full',
        cardLayout: 'stacked',
        columns: 1,
      }
    ) ).toBe( true );
  } );

  test( 'keeps the media placeholder when the manual Hero Card already has images', () => {
    expect( shouldSuppressEmptyHeroMediaPlaceholder(
      {
        contentType: 'custom',
        mediaSource: 'manual',
        variation: 'novablocks-card-hero',
        align: 'full',
        cardLayout: 'stacked',
        columns: 1,
      },
      [ { id: 7, url: 'https://example.test/image.jpg' } ],
    ) ).toBe( false );
  } );

  test( 'keeps current item featured image media outside the manual placeholder rule', () => {
    expect( shouldSuppressEmptyHeroMediaPlaceholder(
      {
        contentType: 'custom',
        mediaSource: CURRENT_ITEM_FEATURED_IMAGE_MEDIA_SOURCE,
        variation: 'novablocks-card-hero',
        align: 'full',
        cardLayout: 'stacked',
        columns: 1,
      },
      [],
    ) ).toBe( false );
  } );
} );
