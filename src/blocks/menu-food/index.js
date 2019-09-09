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

const { select } = wp.data;

export default registerBlockType( 'novablocks/menu-food',
	{
		title: __( 'Food Menu', '__plugin_txtd' ),
		description: __( 'Display a list of food or drink items available at your venue.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.foodmenu,
		attributes: {
			enableTwoColumns : {
				type: 'boolean',
				default: true
			},
		},
		example: {
			attributes: {
				enableTwoColumns: false
			}
		},
		getEditWrapperProps() {
			const settings = select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'wide' } : {};
		},
		edit,
		save
	}
)
