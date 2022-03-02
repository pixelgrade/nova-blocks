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
  contentPadding: 0,
  layoutGutter: 100,

  cardLayout: 'vertical',

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

const vertical = {
  name: 'novablocks/supernova/vertical-card',
  title: __( 'Vertical Card', '__plugin_txtd' ),
  description: __( 'Display media and short pieces of content, one after another.', '__plugin_txtd' ),
  keywords: [ 'card', 'layout', 'vertical', 'panel', 'column' ],
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: [
    [
      'novablocks/supernova-item',
      attributes,
      innerBlocks
    ]
  ],
  isActive: ( blockAttributes, variationAttributes ) => blockAttributes.variation === variationAttributes.variation,
  scope: [ 'inserter', ],
};

export default vertical;
