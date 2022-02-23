/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { advancedGallery as icon } from '../icons';

const attributes = {
  variation: 'novablocks-advanced-gallery',

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

  defaultsGenerated: false,
};

const advancedGallery = {
  name: 'novablocks/supernova/advanced-gallery',
  title: __( 'Advanced Gallery', '__plugin_txtd' ),
  description: __( 'Display a gallery of images in a unique and creative composition.', '__plugin_txtd' ),
  icon: icon,
  attributes,
  innerBlocks: [
    [ 'novablocks/supernova-item', { ...attributes, multiplePlaceholderImages: true } ]
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter', 'transform' ],
};

export default advancedGallery;
