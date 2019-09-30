/**
 * Internal dependencies
 */
import * as icons from "../../icons";
import edit from "./edit";

import { parallaxAttributes } from '../../components/with-parallax';
import styles from "./styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType( 'novablocks/google-map',
	{
		title: __( 'Map of the World', '__plugin_txtd' ),
		description: __( 'Display an interactive map to show the location of your venue.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.map,
		// Additional search terms
		keywords: [ __( 'google' ), __( 'maps' ), __( 'google maps' ), __( 'location' ) ],
		getEditWrapperProps( attributes ) {
			const { align } = attributes;
			if ( 'center' === align || 'full' === align ) {
				return { 'data-align': align };
			}
		},
		edit,
		save: function() {}
	}
)
