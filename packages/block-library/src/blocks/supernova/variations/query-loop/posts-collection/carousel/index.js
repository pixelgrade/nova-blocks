/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { slideshowCollection as icon } from '../../icons';
import metadata from '../../../../block.json';

const { name: SUPERNOVA_BLOCK } = metadata;

const CARDS_COUNT = 3;

const attributes = {
  query: {
    perPage: CARDS_COUNT,
    pages: 1,
    offset: 0,
    postType: 'post',
    order: 'desc',
    orderBy: 'date',
    author: '',
    search: '',
    sticky: 'exclude',
    inherit: false,
  },
};

const innerSupernovaAttributes = {
  showCollectionTitle: false,
  showCollectionSubtitle: false,

  title: __( 'You should read these', '__plugin_txtd' ),
  subtitle: __( 'A fancy slideshow with our latest posts never hurt nobody.', '__plugin_txtd' ),

  align: 'full',
  contentType: 'auto',
  layoutStyle: 'carousel',
  contentPadding: 100,

  emphasisBySpace: 1,
  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,

  postsToShow: CARDS_COUNT,
  columns: 1,

  cardLayout: 'stacked',
  contentPosition: 'center center',
  overlayFilterStrength: 40,
  contentColorSignal: 3,
  contentPaletteVariation: 12,
};

const innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner nb-supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

const carousel = {
  name: 'novablocks/supernova/query-posts-slideshow',
  title: __( 'Query Loop → Posts Collection: Carousel', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a carousel layout.', '__plugin_txtd' ),
  keywords: [ 'query', 'post', 'collection', 'layout', 'carousel', 'slideshow', 'slider', 'horizontal', 'section', ],
  icon,
  attributes,
  innerBlocks: [
    [
      SUPERNOVA_BLOCK,
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
  ],
  scope: [ 'inserter', 'block' ],
};

export default carousel;
