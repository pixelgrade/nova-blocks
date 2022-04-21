/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { classicGrid as icon } from '../../icons';
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
  showCollectionTitle: true,
  showCollectionSubtitle: false,

  title: __( 'Fresh posts from the grid', '__plugin_txtd' ),
  subtitle: __( 'A collection of our latest articles.', '__plugin_txtd' ),

  contentType: 'auto',
  layoutStyle: 'classic',

  emphasisBySpace: 1,
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,
  layoutGutter: 10,

  minHeightFallback: 66,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,
};

// @todo Not sure why we should send Supernova attributes to each item. It is dirty!
const innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner nb-supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

const classicGrid = {
  name: 'novablocks/supernova/query-posts-classic-grid',
  title: __( 'Query Loop → Posts Collection: Classic Grid', '__plugin_txtd' ),
  description: __( 'Display a queried set of posts in a classic grid format (columns and rows).', '__plugin_txtd' ),
  keywords: [ 'query', 'post', 'collection', 'layout', 'grid', 'columns', 'rows' ],
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

export default classicGrid;
