import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./hero-block-icon.svg";

const attributes = {
  variation: 'hero',

  sourceType: 'blocks',
  layoutStyle: 'classic',
  contentPadding: 100,
  layoutGutter: 25,
  cardLayout: 'stacked',

  postsToShow: 1,
  columns: 1,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  contentPosition: 'center center',
  minHeightFallback: 100,

  contentColorSignal: 3,
  contentPaletteVariation: 12,
  overlayFilterStrength: 70,

  align: 'full',
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,
  scrollingEffect: 'parallax',
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
      [ 'novablocks/headline', { level: 2, className: "has-larger-font-size", fontSize: "larger" } ],
      [ 'core/separator', {} ],
      [ 'core/paragraph', { content: 'We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to make the unknown known.' } ],
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
