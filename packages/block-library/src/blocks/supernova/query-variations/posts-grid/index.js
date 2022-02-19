/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { postsCollection as icon } from '../icons';
import metadata from '../../block.json';

const { name: SUPERNOVA_BLOCK } = metadata;

const CARDS_COUNT = 6;

const attributes = {
  variation: 'novablocks-posts-grid',
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
  variation: 'novablocks-posts-grid',

  contentType: 'auto',
  layoutStyle: 'classic',

  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,
  layoutGutter: 10,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,
};

// @todo Not sure why we should send Supernova attributes to each item. It is dirty!
const innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

export const postsGridQuery = {
  name: 'novablocks/supernova/query-posts-grid',
  title: __( 'Posts Grid', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a grid format (columns and rows).', '__plugin_txtd' ),
  icon: icon,
  attributes,
  innerBlocks: [
    [
      SUPERNOVA_BLOCK,
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
    [ 'core/query-pagination' ],
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter' ],
};
