import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./media-card-block-icon.svg";

const attributes = {
  variation: 'novablocks-media-card',

  contentType: 'custom',

  contentPadding: 0,
  layoutGutter: 100,

  cardLayout: 'horizontal',

  layoutStyle: 'classic',
  postsToShow: 1,
  columns: 1,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  contentPosition: 'center left',
  cardMediaOpacity: 100,

  align: 'wide',

  blockTopSpacing: 0,
  blockBottomSpacing: 1,
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,

  defaultsGenerated: false,
};

const innerBlocks = [
  [ 'core/heading', { level: 5, content: 'Shoot for the moon, Even if You Miss.' } ],
  [ 'core/heading', { level: 1, content: 'A catchy title' } ],
  [ 'core/paragraph', { content: 'A brilliant description to explain its catchiness. We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to make the unknown known.' } ],
  [ 'core/button', { text: 'Discover more' } ],
];

const mediaCard = {
  name: 'novablocks/supernova/media-card',
  title: __( 'Media Card Constellation', '__plugin_txtd' ),
  description: __( 'Display media alongside short pieces of content.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: [ [ 'novablocks/supernova-item', attributes, innerBlocks ] ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter', 'transform' ],
};

export default mediaCard;
