/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { postsCollection as icon } from '../icons';

const CARDS_COUNT = 6;

const attributes = {
  variation: 'novablocks-posts-collection',
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
  variation: 'novablocks-posts-collection',

  contentType: 'auto',
  layoutStyle: 'parametric',
  contentPosition: 'center left',
  contentPadding: 0,
  layoutGutter: 10,

  postsToShow: CARDS_COUNT,
};

const innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

const postsCollection = {
  name: 'novablocks/supernova/query-posts-collection',
  title: __( 'Posts Collection', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a beautiful, consistent manner.', '__plugin_txtd' ),
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

export default postsCollection;
