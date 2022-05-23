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

  emphasisTopSpacing: 0,
  emphasisBottomSpacing: 0,
  layoutGutter: 25,

  postsToShow: CARDS_COUNT,
  columns: 3,

  cardLayout: 'vertical',
  contentPosition: 'top left',
  cardMediaOpacity: 100,

  showCollectionTitle: true,
  showCollectionSubtitle: true,
  showMedia: true,
  showMeta: false,
  showTitle: true,
  showSubtitle: false,
  showDescription: true,
  showButtons: true,

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
  keywords: [
    __( 'card', '__plugin_txtd' ),
    __( 'collection', '__plugin_txtd' ),
    __( 'layout', '__plugin_txtd' ),
    __( 'grid', '__plugin_txtd' ),
    __( 'columns', '__plugin_txtd' ),
    __( 'rows', '__plugin_txtd' ),
  ],
  icon: getSvg( iconSvg ),
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerBlockAttributes ] ),
  scope: [ 'inserter', ],
};

export default classicGrid;
