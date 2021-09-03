/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import iconSvg from './google-map-block.svg';
import edit from "./edit";

import { getSvg } from "@novablocks/block-editor";

import attributes from "./attributes";

registerBlockType( 'novablocks/google-map', {
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
//        altAttributes: true,
//        customWrapper: true,
//      }
    }
  },
	edit,
	save: function() {
	  return false
  }
} );
