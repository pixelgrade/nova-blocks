/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';
import iconSvg from './icon.svg';

const attributes = {
  variation: 'novablocks-card-hero',

  showCollectionTitle: false,
  showCollectionSubtitle: false,

  contentType: 'custom',
  layoutStyle: 'classic',
  contentPadding: 100,

  cardLayout: 'stacked',

  postsToShow: 1,
  columns: 1,

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

  scrollingEffect: 'parallax',

  defaultsGenerated: false,
};

const innerBlockAttributes = Object.assign( {}, attributes, {
  colorSignal: 3,
  paletteVariation: 12,
} );

const innerBlocks = [
  [
    'novablocks/supernova-item',
    innerBlockAttributes,
    [
      [ 'core/heading', { level: 1, content: __( 'This is a catchy title', '__plugin_txtd' ) } ],
      [ 'core/paragraph', { content: __( 'A brilliant subtitle to explain its catchiness', '__plugin_txtd' ), className: 'is-style-lead' } ],
      [ 'core/buttons', { layout: { type: 'flex', justifyContent: 'center' } }, [
        [ 'core/button', { text: __( 'Discover more', '__plugin_txtd' ) } ]
      ] ],
    ]
  ]
];

const hero = {
  name: 'novablocks/supernova/card/hero',
  title: __( 'Hero Card', '__plugin_txtd' ),
  description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
  keywords: [
    __( 'card', '__plugin_txtd' ),
    __( 'layout', '__plugin_txtd' ),
    __( 'hero', '__plugin_txtd' ),
    __( 'full-width', '__plugin_txtd' ),
    __( 'cover', '__plugin_txtd' ),
  ],
  icon: getSvg( iconSvg ),
  attributes: attributes,
  innerBlocks,
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter', ],
};

export default hero;
