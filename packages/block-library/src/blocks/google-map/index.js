/**
 * Internal dependencies
 */
import * as icons from "@novablocks/icons";
import edit from "./edit";

import blockAttributes from "./attributes"
import { scrollingAttributes } from "@novablocks/components";

const attributes = Object.assign( {}, blockAttributes, scrollingAttributes );

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/google-map', {
	title: __( 'Map of the World', '__plugin_txtd' ),
	description: __( 'Display an interactive map to show the location of your venue.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.map,
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
	edit,
	save: function() {}
} );
