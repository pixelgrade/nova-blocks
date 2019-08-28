/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType, } = wp.blocks;

export default registerBlockType( 'novablocks/menu-food-item',
	{
		title: __( 'Menu Food Item', '__plugin_txtd' ),
		description: __( 'Outputs menu food item.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		parent: ['novablocks/menu-food'],
		edit,
	}
)
