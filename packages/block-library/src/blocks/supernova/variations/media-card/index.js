import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./media-card-block-icon.svg";

const attributes = {
  variation: 'media-card',

  sourceType: 'blocks',
  contentPadding: 100,
  layoutGutter: 50,
  cardLayout: 'horizontal',
  layoutStyle: 'classic',
  postsToShow: 1,
  columns: 1,
  showCollectionTitle: false,
  showCollectionSubtitle: false,
  contentPosition: 'center center',
  cardMediaOpacity: 100,
};

const innerBlocks = [
  [ 'novablocks/headline', { level: 2, className: "has-larger-font-size", fontSize: "larger" } ],
  [ 'core/separator', {} ],
  [ 'core/paragraph', { content: 'We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to make the unknown known.' } ],
];

const mediaCard = {
  name: __( 'Media Card Constellation', '__plugin_txtd' ),
  title: __( 'Media Card Constellation', '__plugin_txtd' ),
  description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: [ [ 'novablocks/supernova-item', attributes, innerBlocks ] ],
  isActive: ( block, variation ) => block.variation === variation.variation

}

export default mediaCard;
