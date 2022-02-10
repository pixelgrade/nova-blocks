/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { slideshowCollection as icon } from '../icons';

const CARDS_COUNT = 3;

const attributes = {
  variation: 'novablocks-slideshow',
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
  variation: 'novablocks-slideshow',

  align: 'full',
  contentType: 'auto',
  layoutStyle: 'carousel',
  contentPadding: 100,

  postsToShow: CARDS_COUNT,
  columns: 1,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

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

export const slideshowQuery = {
  name: 'novablocks/supernova/query-slideshow',
  title: __( 'Slideshow me the Way', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a single, coveted space.', '__plugin_txtd' ),
  icon: icon,
  attributes,
  innerBlocks: [
    [
      'novablocks/supernova',
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
    [ 'core/query-pagination' ],
  ],
  isActive: ( block, variation ) => block.variation === variation.variation,
  scope: [ 'inserter' ],
};
