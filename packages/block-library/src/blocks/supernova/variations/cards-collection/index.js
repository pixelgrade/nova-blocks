/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./cards-collection-icon.svg";

const CARDS_COUNT = 3;

const attributes = {
  variation: 'novablocks-cards-collection',

  contentType: 'fields',
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

const innerBlockAttributes = Object.assign( {}, attributes, {
  colorSignal: attributes.contentColorSignal,
  paletteVariation: attributes.contentPaletteVariation,
  useSourceColorAsReference: false
} );

const cardsCollection = {
  name: 'novablocks/supernova/cards-collection',
  title: __( 'Cards Collection', '__plugin_txtd' ),
  description: __( 'Display a list of related items placed within a coherent layout.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerBlockAttributes ] ),
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter' ],
};

export default cardsCollection;
