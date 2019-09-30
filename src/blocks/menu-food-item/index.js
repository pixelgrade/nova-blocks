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
const {registerBlockType,} = wp.blocks;

export default registerBlockType( 'novablocks/menu-food-item',
	{
		title: __( 'Menu Item', '__plugin_txtd' ),
		description: __( 'A food or drink item contained in a menu or menu section.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.foodmenu,
		// Additional search terms
		keywords: [ __( 'menu item' ), __( 'food item' ), __( 'dish' ), __( 'list item' ) ],
		parent: ['novablocks/menu-food-section'],
		attributes: {
			title: {
				type: 'string',
				default: 'Sweet Shrimp Salad'
			},
			description: {
				type: 'string',
				default: 'Tomatillo, Baja Crema, Cabbage, Fried Okra'
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
				default: 'Our top pick'
			},
			enableHighlightFoodItem: {
				type: 'boolean',
				default: false
			},
			enableSalePrice: {
				type: 'boolean',
				default: false
			}
		},
		edit,
		save
	}
)
