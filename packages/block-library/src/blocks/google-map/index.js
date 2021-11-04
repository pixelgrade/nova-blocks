/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from "@wordpress/hooks";

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './google-map-block.svg';
import edit from "./edit";
import attributes from "./attributes";
import attributesOverwrite from "./attributes-overwrite.json";

const BLOCK_NAME = 'novablocks/google-map';

const overwriteAttributes = ( settings ) => {

  if ( settings.name !== BLOCK_NAME ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributesOverwrite
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/google-map/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
	title: __( 'Map of the World', '__plugin_txtd' ),
	description: __( 'Display an interactive map to show the location of your venue.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	keywords: [
		__( 'google', '__plugin_txtd' ),
		__( 'maps', '__plugin_txtd' ),
		__( 'google maps', '__plugin_txtd' ),
		__( 'location', '__plugin_txtd' )
	],
	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( 'center' === align || 'full' === align ) {
			return { 'data-align': align };
		}
	},
	attributes,
  supports: {
    html: false,
    novaBlocks: {
//      scrollingEffect: {
//        customWrapper: true,
//      }
    }
  },
	edit,
	save: function() {
	  return false
  }
} );
