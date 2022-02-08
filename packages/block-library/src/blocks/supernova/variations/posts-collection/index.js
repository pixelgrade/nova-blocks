import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./posts-collection-block-icon.svg";

const CARDS_COUNT = 6;

const attributes = {
  variation: 'posts-collection',

  contentType: 'auto',
  layoutStyle: 'parametric',
  contentPosition: 'center left',
  contentPadding: 0,
  layoutGutter: 10,

  postsToShow: CARDS_COUNT,
};

const innerAttributes = {
  ...attributes,
  // Lock inner supernova-items so they can't be removed or moved.
  lock: {
    remove: true,
    move: true
  }
};

const postsCollection = {
  name: __( 'Posts Collection', '__plugin_txtd' ),
  title: __( 'Posts Collection', '__plugin_txtd' ),
  description: __( 'Show Latest Posts.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerAttributes ] ),
  isActive: ( block, variation ) => block.variation === variation.variation
};

export default postsCollection;
