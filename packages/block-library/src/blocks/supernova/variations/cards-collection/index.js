import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./cards-collection-icon.svg";

const CARDS_COUNT = 3;

const attributes = {
  variation: 'cards-collection',

  sourceType: 'fields',
  layoutStyle: 'classic',

  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,
  contentPadding: 50,
  layoutGutter: 0,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,

  colorSignal: 2,
  paletteVariation: 9,
  contentColorSignal: 2,
  contentPaletteVariation: 1,
};

const innerBlockAttributes = Object.assign( {}, attributes, {
  colorSignal: attributes.contentColorSignal,
  paletteVariation: attributes.contentPaletteVariation,
  useSourceColorAsReference: false
} );

const cardsCollection = {
  name: __( 'Cards Collection', '__plugin_txtd' ),
  title: __( 'Cards Collection', '__plugin_txtd' ),
  description: __( 'Cards Collection', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( 3 ) ).map( () => [ 'novablocks/supernova-item', innerBlockAttributes ] )
}

export default cardsCollection;
