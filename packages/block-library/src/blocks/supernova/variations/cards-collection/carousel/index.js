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
  showCollectionTitle: false,
  showCollectionSubtitle: false,

  align: 'full',
  contentType: 'fields',
  layoutStyle: 'carousel',
  carouselLayout: 'fixed',
  gridGap: 30,

  spacingModifier: 0.5,
  mediaContainerHeight: 50,
  contentPadding: 0,
  layoutGutter: 25,

  emphasisBySpace: 1,
  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'center left',

  contentColorSignal: 0,
  contentPaletteVariation: 1,

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
