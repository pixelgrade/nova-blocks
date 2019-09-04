/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType( 'novablocks/headline',
	{
		title: __( 'Headline', '__plugin_txtd' ),
		description: __( 'Advanced heading block with a fancier display', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		attributes: {
			align: {
				type: "string",
				default: "center"
			},
			primary: {
				type: "string"
			},
			secondary: {
				type: "string"
			},
			level: {
				type: "number",
				default: 2
			},
		},
		save,
		edit,
	}
)
