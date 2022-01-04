import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./hero-block-icon.svg";

const attributes = {
  variation: 'hero',

  sourceType: 'blocks',
  layoutStyle: 'classic',
  contentPadding: 100,
  cardLayout: 'stacked',

  postsToShow: 1,
  columns: 1,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  contentPosition: 'center center',
  minHeightFallback: 66,

  contentColorSignal: 3,
  contentPaletteVariation: 12,
  overlayFilterStrength: 30,

  align: 'full',

  blockTopSpacing: 0,
  blockBottomSpacing: 1,
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,

  scrollingEffect: 'static',
}

const innerBlockAttributes = Object.assign( {}, attributes, {
  colorSignal: 3,
  paletteVariation: 12,
} );

const innerBlocks = [
  [
    'novablocks/supernova-item',
    innerBlockAttributes,
    [
      [ 'core/heading', { level: 1, content: 'This is a catchy title' } ],
      [ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', className: "is-style-lead" } ],
      [ 'core/button', { text: 'Discover more' } ],
    ]
  ]
];

const heroVariation = {
  name: 'novablocks/supernova/hero',
  title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
  description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
  attributes: attributes,
  innerBlocks,
  isActive: ( block, variation ) => block.variation === variation.variation,
};

export default heroVariation;
