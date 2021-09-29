import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./slideshow-block-icon.svg";

const CARDS_COUNT = 3;

const attributes = {
  variation: 'slideshow',

  align: 'full',
  sourceType: 'content',
  layoutStyle: 'carousel',
  contentPadding: 100,

  postsToShow: CARDS_COUNT,
  columns: 1,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  cardLayout: 'stacked',
  contentPosition: 'center center',
  cardMediaOpacity: 40,
  paletteVariation: 12,
};

const slideshow = {
  name: __( 'Slideshow me the Way', '__plugin_txtd' ),
  title: __( 'Slideshow me the Way', '__plugin_txtd' ),
  description: __( 'Slideshow me the Way', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', attributes ] ),
  isActive: ( block, variation ) => block.variation === variation.variation
}

export default slideshow;
