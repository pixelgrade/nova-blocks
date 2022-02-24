/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import {
  postsCollection as parametricCollectionIcon,
  slideshowCollection as  slideshowCollectionIcon
} from '../icons';
import metadata from '../../block.json';

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

let variation, innerSupernovaAttributes, innerSupernovaItemAttributes;

// The name of the variation is the same as the one used in the inserter scoped variation postsCollectionQuery.
// This way we have consistency of naming regardless of the route taken.
variation = 'novablocks-posts-parametric';
innerSupernovaAttributes = {
  variation,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

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
innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

export const parametricCollection = {
  name: 'novablocks/supernova/query-parametric-collection',
  title: __( 'Parametric Layout', '__plugin_txtd' ),
  icon: parametricCollectionIcon,
  attributes: {
    ...attributes,
    variation,
  },
  innerBlocks: [
    [
      SUPERNOVA_BLOCK,
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
    [ 'core/query-pagination' ],
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'block' ],
};

// The name of the variation is the same as the one used in the inserter scoped variation postsCollectionQuery.
// This way we have consistency of naming regardless of the route taken.
variation = 'novablocks-posts-grid';
innerSupernovaAttributes = {
  variation,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  title: __('Fresh posts from the grid', '__plugin_txtd' ),
  subtitle: __('A collection of our latest articles, supernova style.', '__plugin_txtd' ),

  contentType: 'auto',
  layoutStyle: 'classic',

  emphasisBySpace: 1,
  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,
  layoutGutter: 10,

  postsToShow: 6,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,
};
innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

export const gridCollection = {
  name: 'novablocks/supernova/query-grid-collection',
  title: __( 'Grid Layout', '__plugin_txtd' ),
  icon: parametricCollectionIcon,
  attributes: {
    ...attributes,
    variation,
  },
  innerBlocks: [
    [
      SUPERNOVA_BLOCK,
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
    [ 'core/query-pagination' ],
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'block' ],
};

// The name of the variation is the same as the one used in the inserter scoped variation postsSlideshowQuery.
// This way we have consistency of naming regardless of the route taken.
variation = 'novablocks-posts-slideshow';
innerSupernovaAttributes = {
  variation,

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
innerSupernovaItemAttributes = {
  ...innerSupernovaAttributes,
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

export const slideshowCollection = {
  name: 'novablocks/supernova/query-slideshow-collection',
  title: __( 'Slideshow Layout', '__plugin_txtd' ),
  icon: slideshowCollectionIcon,
  attributes: {
    ...attributes,
    variation,
  },
  innerBlocks: [
    [
      SUPERNOVA_BLOCK,
      innerSupernovaAttributes,
      Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerSupernovaItemAttributes ] ),
    ],
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'block' ],
};
