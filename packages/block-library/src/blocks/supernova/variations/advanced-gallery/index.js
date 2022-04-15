/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { advancedGallery as icon } from '../icons';

const attributes = {
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
  showMedia: true,
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
  keywords:["media", "collection", "layout", "composition"],
  icon: icon,
  attributes,
  innerBlocks: [
    [ 'novablocks/supernova-item', { ...attributes, multiplePlaceholderImages: true } ]
  ],
  scope: [ 'inserter', ],
};

export default advancedGallery;
