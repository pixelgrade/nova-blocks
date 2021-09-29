import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./cards-collection-icon.svg";

const CARDS_COUNT = 3;

const attributes = {
  variation: 'cards-collection',

  sourceType: 'fields',
  layoutStyle: 'classic',
  contentPadding: 0,
  layoutGutter: 25,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,
};

const cardsCollection = {
  name: __( 'Cards Collection', '__plugin_txtd' ),
  title: __( 'Cards Collection', '__plugin_txtd' ),
  description: __( 'Cards Collection', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( 3 ) ).map( () => [ 'novablocks/supernova-item', attributes ] )
}

export default cardsCollection;
