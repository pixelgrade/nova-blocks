/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { cardsCollection as icon } from '../icons';

const CARDS_COUNT = 5;

const attributes = {
  contentType: 'fields',
  layoutStyle: 'parametric',

  emphasisTopSpacing: 1,
  emphasisBottomSpacing: 1,
  layoutGutter: 10,

  postsToShow: CARDS_COUNT,
  columns: 5,
  rows: 5,

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

const cardsCollectionParametricGrid = {
  name: 'novablocks/supernova/cards-collection-parametric-grid',
  title: __( 'Cards Collection: Parametric Grid', '__plugin_txtd' ),
  description: __( 'Display a list of related items in a parametric grid layout.', '__plugin_txtd' ),
  keywords:["card", "collection", "layout", "grid", "parametric", "composition", "columns", "rows"],
  icon,
  attributes,
  innerBlocks: Array.from( Array( CARDS_COUNT ) ).map( () => [ 'novablocks/supernova-item', innerBlockAttributes ] ),
  scope: [ 'inserter', ],
};

export default cardsCollectionParametricGrid;
