/**
 * Internal dependencies
 */
import * as icons from "@novablocks/icons";
import edit from "./edit";

import { parallaxAttributes } from '../../components/with-parallax';
import styles from "./styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function init() {

	registerBlockType( 'novablocks/google-map', {
		title: __( 'Map of the World', '__plugin_txtd' ),
		description: __( 'Display an interactive map to show the location of your venue.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.map,
		// Additional search terms
		keywords: [ __( 'google', '__plugin_txtd' ), __( 'maps', '__plugin_txtd' ), __( 'google maps', '__plugin_txtd' ), __( 'location', '__plugin_txtd' ) ],
		getEditWrapperProps( attributes ) {
			const { align } = attributes;
			if ( 'center' === align || 'full' === align ) {
				return { 'data-align': align };
			}
		},
		edit,
		save: function() {}
	} )
}

export default init;
