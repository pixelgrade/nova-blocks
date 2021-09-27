import { __ } from "@wordpress/i18n";
import { getSvg } from "@novablocks/block-editor";
import iconSvg from "./hero.svg";

const heroAttributes = {
  sourceType: 'blocks',
  layoutStyle: 'classic',
  contentPadding: 100,
  layoutGutter: 25,
  cardLayout: 'stacked',

  postsToShow: 1,
  columns: 1,

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  contentPosition: 'bottom center',
  cardMediaOpacity: 40,

  colorSignal: 0,
  paletteVariation: 12,
  contentColorSignal: 0,
  contentPaletteVariation: 12,
  overlayFilterStrength: 70,

  align: 'full',
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,
  scrollingEffect: 'parallax',
}

const heroVariation = {
  name: __( 'Hero of the Galaxy', '__plugin_txtd' ),
  title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
  description: __( 'Hero of the Galaxy', '__plugin_txtd' ),
  attributes: heroAttributes,
  icon: getSvg( iconSvg ),
  innerBlocks: [
    [
      'novablocks/supernova-item',
      heroAttributes,
      [
        [ 'novablocks/headline', { level: 2, className: "has-larger-font-size", fontSize: "larger" } ],
        [ 'core/separator', {} ],
        [
          'core/paragraph',
          { content: 'We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to make the unknown known.' }
        ],
      ]
    ]
  ]
};

export default heroVariation;
