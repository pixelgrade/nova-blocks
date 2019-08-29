/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

export default registerBlockType( 'novablocks/menu-food',
	{
		title: __( 'Food Menu', '__plugin_txtd' ),
		description: __( 'Can be used as navigation through multiple menus.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.foodmenu,
		attributes: {
			enableTwoColumns : {
				type: 'boolean',
				default: true
			}
		},
		edit,
		save
	}
)
