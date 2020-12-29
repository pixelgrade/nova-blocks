/**
 * Internal dependencies
 */
import iconSvg from './menu-food-block.svg';
import edit from './edit';
import save from './save';

import './menu-food-section';
import './menu-food-item';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import { select } from '@wordpress/data';

import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/menu-food', {
	title: __( 'Food Menu', '__plugin_txtd' ),
	description: __( 'Display a list of food or drink items available at your venue.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [
		__( 'food menu', '__plugin_txtd' ),
		__( 'restaurant menu', '__plugin_txtd' ),
		__( 'dishes', '__plugin_txtd' ),
		__( 'eats', '__plugin_txtd' ),
		__( 'menu list', '__plugin_txtd' )
	],
	attributes: {
		enableTwoColumns : {
			type: 'boolean',
			default: true
		},
		align: {
			type: 'string',
			default: 'wide'
		},
		showPrices: {
			type: 'boolean',
			default: true
		},
		showDescription: {
			type: 'boolean',
			default: true
		}
	},
	example: {
		attributes: {
			enableTwoColumns: false
		},
		innerBlocks: [
			{
				name: 'novablocks/menu-food-section',
				innerBlocks: [
					{
						name: 'novablocks/menu-food-item',
					},
					{
						name: 'novablocks/menu-food-item',
					},
				],
			},
		],
	},
	styles: [
		{
			name: 'classic',
			label: __( 'Classic', '__plugin_txtd' ),
			isDefault: true
		},
		{
			name: 'basic',
			label: __( 'Basic', '__plugin_txtd' )
		},
	],
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'wide' } : {};
	},
	edit,
	save
} );
