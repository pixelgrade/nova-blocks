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

const CARDS_COUNT = 5;

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

  align: 'full',
  contentType: 'auto',
  layoutStyle: 'carousel',
  carouselLayout: 'fixed',
  gridGap: 30,

  spacingModifier: 0.5,
  mediaContainerHeight: 50,
  contentPadding: 0,
  layoutGutter: 25,

  emphasisBySpace: 1,
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'center left',

  contentColorSignal: 0,
  contentPaletteVariation: 1,
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
  name: 'novablocks/supernova/query-posts-carousel',
  title: __( 'Query Loop → Posts Collection: Carousel', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a carousel layout.', '__plugin_txtd' ),
  keywords: [
    __( 'query', '__plugin_txtd' ),
    __( 'post', '__plugin_txtd' ),
    __( 'collection', '__plugin_txtd' ),
    __( 'layout', '__plugin_txtd' ),
    __( 'carousel', '__plugin_txtd' ),
    __( 'slideshow', '__plugin_txtd' ),
    __( 'slider', '__plugin_txtd' ),
    __( 'horizontal', '__plugin_txtd' ),
    __( 'section', '__plugin_txtd' ),
  ],
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
