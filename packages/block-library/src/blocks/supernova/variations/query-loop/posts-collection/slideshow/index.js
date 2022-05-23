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

  contentPosition: 'center center',
  minHeightFallback: 66,

  postsToShow: CARDS_COUNT,
  columns: 1,

  emphasisBySpace: 1,
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,

  cardTitleLevel: 1,

  cardLayout: 'stacked',

  scrollingEffect: 'static',

  overlayFilterStrength: 30,
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
  title: __( 'Query Loop → Posts Collection: Slideshow', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a slideshow layout.', '__plugin_txtd' ),
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
