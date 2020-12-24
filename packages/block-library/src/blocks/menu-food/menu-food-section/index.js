/**
 * Internal dependencies
 */
import iconSvg from '../menu-food-block.svg';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/menu-food-section', {
	title: __( 'Food Menu Section', '__plugin_txtd' ),
	description: __( 'A subgrouping of the Menu.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [ __( 'menu section', '__plugin_txtd' ), __( 'food section', '__plugin_txtd' ), __( 'list section', '__plugin_txtd' ), __( 'dishes section', '__plugin_txtd' ) ],
	parent: ['novablocks/menu-food'],
	attributes: {
		sectionTitle: {
			type: 'string',
			default: __( 'Drinks', '__plugin_txtd' )
		}
	},
	edit,
	save
} );
