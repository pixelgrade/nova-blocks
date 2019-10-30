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

function init() {
	registerBlockType( 'novablocks/navigation', {
		title: __( 'Space Navigation', '__plugin_txtd' ),
		description: __( 'Outputs chosen navigaiton menu markup.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.navigation,
		// Additional search terms
		keywords: [ __( 'menu', '__plugin_txtd' ), __( 'site menu', '__plugin_txtd' ), __( 'primary', '__plugin_txtd' ), __( 'secondary', '__plugin_txtd' ) ],
		parent: ['novablocks/header'],
		save: function() {},
		edit,
	} )
}

export default init;
