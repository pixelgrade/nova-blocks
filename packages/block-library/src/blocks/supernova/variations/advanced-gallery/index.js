import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./advanced-gallery-block-icon.svg";

const attributes = {
  variation: 'advanced-gallery',

  sourceType: 'fields',
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
  name: __( 'Advanced Gallery', '__plugin_txtd' ),
  title: __( 'Advanced Gallery', '__plugin_txtd' ),
  description: __( 'Display galleries of images in unique and creative compositions.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: [
    [ 'novablocks/supernova-item', { ...attributes, multiplePlaceholderImages: true } ]
  ],
  isActive: ( block, variation ) => block.variation === variation.variation
}

export default advancedGallery;
