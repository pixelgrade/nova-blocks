/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { advancedGallery as icon } from '../icons';

const attributes = {
  variation: 'advanced-gallery',

  contentType: 'fields',
  layoutStyle: 'classic',
  contentPadding: 0,
  layoutGutter: 0,

  postsToShow: 1,
  columns: 1,

  cardLayout: 'vertical',
  contentPosition: 'center left',
  cardMediaOpacity: 100,

  showCollectionTitle: false,
  showCollectionSubtitle: false,
  showMeta: false,
  showTitle: false,
  showSubtitle: false,
  showDescription: false,
  showButtons: false,
};

const advancedGallery = {
  name: 'novablocks/supernova/advanced-gallery',
  title: __( 'Advanced Gallery', '__plugin_txtd' ),
  description: __( 'Display galleries of images in unique and creative compositions.', '__plugin_txtd' ),
  icon: icon,
  attributes,
  innerBlocks: [
    [ 'novablocks/supernova-item', { ...attributes, multiplePlaceholderImages: true } ]
  ],
  isActive: ( block, variation ) => block.variation === variation.variation
};

export default advancedGallery;
