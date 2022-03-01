/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';
import iconSvg from './icon.svg';

const CARDS_COUNT = 3;

const attributes = {
  contentType: 'fields',
  layoutStyle: 'classic',

  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,
  layoutGutter: 10,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,

  defaultsGenerated: false,
};

const innerBlockAttributes = Object.assign( {}, attributes, {
  colorSignal: attributes.contentColorSignal,
  paletteVariation: attributes.contentPaletteVariation,
  useSourceColorAsReference: false
} );

const classicGrid = {
  name: 'novablocks/supernova/cards-collection/classic-grid',
  title: __( 'Cards Collection: Classic Grid', '__plugin_txtd' ),
  description: __( 'Display a list of related items in a classic grid layout.', '__plugin_txtd' ),
  keywords: [ 'card', 'collection', 'layout', 'grid', 'columns', 'rows' ],
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerBlockAttributes ] ),
  scope: [ 'inserter', ],
};

export default classicGrid;
