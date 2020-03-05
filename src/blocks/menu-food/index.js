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

const { select } = wp.data;

function init() {
	registerBlockType( 'novablocks/menu-food', {
		title: __( 'Food Menu', '__plugin_txtd' ),
		description: __( 'Display a list of food or drink items available at your venue.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.foodmenu,
		// Additional search terms
		keywords: [ __( 'food menu', '__plugin_txtd' ), __( 'restaurant menu', '__plugin_txtd' ), __( 'dishes', '__plugin_txtd' ), __( 'eats', '__plugin_txtd' ), __( 'menu list', '__plugin_txtd' ) ],
		attributes: {
			enableTwoColumns : {
				type: 'boolean',
				default: true
			},
			align: {
				type: 'string',
				default: 'wide'
			}
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
	} )
}

export default init;
