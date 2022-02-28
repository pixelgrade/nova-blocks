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
  variation: 'novablocks-posts-parametric',
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
  variation: 'novablocks-posts-parametric',

  showCollectionTitle: true,
  showCollectionSubtitle: true,

  title: __('Our latest brainy posts', '__plugin_txtd' ),
  subtitle: __('A super-duper-parametric collection of our latest brain-dumps.', '__plugin_txtd' ),

  emphasisBySpace: 1,
  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,

  contentType: 'auto',
  layoutStyle: 'parametric',
  contentPosition: 'center left',
  contentPadding: 0,
  layoutGutter: 10,

  postsToShow: CARDS_COUNT,
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

export const postsParametricQuery = {
  name: 'novablocks/supernova/query-posts-parametric',
  title: __( 'Posts Collection', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a beautiful, consistent manner.', '__plugin_txtd' ),
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
  scope: [ 'inserter', ],
};
