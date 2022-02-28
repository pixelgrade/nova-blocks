/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { slideshowCollection as icon } from '../icons';
import metadata from '../../block.json';

const { name: SUPERNOVA_BLOCK } = metadata;

const CARDS_COUNT = 3;

const attributes = {
  variation: 'novablocks-posts-slideshow',
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
  variation: 'novablocks-posts-slideshow',

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  title: __('You should read these', '__plugin_txtd' ),
  subtitle: __('A fancy slideshow with our latest posts never hurt nobody.', '__plugin_txtd' ),

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
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

export const postsSlideshowQuery = {
  name: 'novablocks/supernova/query-posts-slideshow',
  title: __( 'Posts Slideshow', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a single, coveted space.', '__plugin_txtd' ),
  icon: icon,
  attributes,
  innerBlocks: [
    [
      SUPERNOVA_BLOCK,
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter', ],
};
