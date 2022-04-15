/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { carouselCollection as icon } from '../icons';

const CARDS_COUNT = 5;

const attributes = {
  align: 'full',

  contentType: 'fields',
  layoutStyle: 'carousel',
  contentPadding: 100,

  emphasisBySpace: 1,
  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,

  postsToShow: CARDS_COUNT,
  columns: 1,

  cardLayout: 'stacked',
  contentPosition: 'center center',
  overlayFilterStrength: 40,
  contentColorSignal: 3,
  contentPaletteVariation: 12,

  defaultsGenerated: false,
};

const innerBlockAttributes = Object.assign( {}, attributes, {
  colorSignal: attributes.contentColorSignal,
  paletteVariation: attributes.contentPaletteVariation,
  useSourceColorAsReference: false
} );

const carousel = {
  name: 'novablocks/supernova/cards-collection/carousel',
  title: __( 'Cards Collection: Carousel', '__plugin_txtd' ),
  description: __( 'Display a list of related items in a carousel/slideshow layout.', '__plugin_txtd' ),
  keywords: [ 'card', 'collection', 'layout', 'carousel', 'slideshow', 'slider', 'horizontal', 'section' ],
  icon,
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerBlockAttributes ] ),
  scope: [ 'inserter', ],
};

export default carousel;
