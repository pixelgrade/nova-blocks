/**
 * Internal dependencies
 */
import * as icons from "../../icons";
import edit from "./edit";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType( 'novablocks/google-map',
	{
		title: __( 'Map of the World', '__plugin_txtd' ),
		description: __( 'Outputs custom map.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.map,
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
