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

  contentType: 'custom',
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
      [ 'core/heading', { level: 1, content: 'This is a catchy title' } ],
      [ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', className: 'is-style-lead' } ],
      [ 'core/button', { text: 'Discover more' } ],
    ]
  ]
];

const hero = {
  name: 'novablocks/supernova/card/hero',
  title: __( 'Hero Card', '__plugin_txtd' ),
  description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
  keywords: [ 'card', 'layout', 'hero', 'full-width', 'cover' ],
  icon: getSvg( iconSvg ),
  attributes: attributes,
  innerBlocks,
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter', ],
};

export default hero;
