/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType( 'novablocks/menu-food',
	{
		title: __('Food Menu', '__plugin_txtd' ),
		description: __('Display Food Menu', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		edit,
		save() {

		}
	}
)
