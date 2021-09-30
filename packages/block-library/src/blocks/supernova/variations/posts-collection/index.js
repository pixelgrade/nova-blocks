import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./posts-collection-block-icon.svg";

const CARDS_COUNT = 6;

const attributes = {
  variation: 'posts-collection',

  sourceType: 'content',
  layoutStyle: 'parametric',
  contentPosition: 'center left',
  contentPadding: 0,
  postsToShow: CARDS_COUNT,
}

const postsCollection = {
  name: __( 'Posts Collection', '__plugin_txtd' ),
  title: __( 'Posts Collection', '__plugin_txtd' ),
  description: __( 'Posts Collection', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', attributes ] ),
  isActive: ( block, variation ) => block.variation === variation.variation
}

export default postsCollection;
