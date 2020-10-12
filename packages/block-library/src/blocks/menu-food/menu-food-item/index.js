/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/menu-food-item', {
	title: __( 'Menu Item', '__plugin_txtd' ),
	description: __( 'A food or drink item contained in a menu or menu section.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.foodmenu,
	// Additional search terms
	keywords: [ __( 'menu item', '__plugin_txtd' ), __( 'food item', '__plugin_txtd' ), __( 'dish', '__plugin_txtd' ), __( 'list item', '__plugin_txtd' ) ],
	parent: ['novablocks/menu-food-section'],
	attributes: {
		title: {
			type: 'string',
			default: __( 'Sweet Shrimp Salad', '__plugin_txtd' )
		},
		description: {
			type: 'string',
			default: __( 'Tomatillo, Baja Crema, Cabbage, Fried Okra', '__plugin_txtd' )
		},
		price: {
			type: 'string',
			default: '$7.95'
		},
		salePrice: {
			type: 'string',
			default: '$9.50'
		},
		highlightLabel: {
			type: 'string',
			default: __( 'Our top pick', '__plugin_txtd' )
		},
		enableHighlightFoodItem: {
			type: 'boolean',
			default: false
		},
		enableSalePrice: {
			type: 'boolean',
			default: false
		},
		showPrices: {
			type: 'boolean',
			default: true
		},
		showDescription: {
			type: 'boolean',
			default: true
		},
	},
	edit,
	save
} );
