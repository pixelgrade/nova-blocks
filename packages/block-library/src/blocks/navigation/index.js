/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/navigation', {
	title: __( 'Space Navigation', '__plugin_txtd' ),
	description: __( 'Outputs chosen navigaiton menu markup.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.navigation,
	// Additional search terms
	keywords: [ __( 'menu', '__plugin_txtd' ), __( 'site menu', '__plugin_txtd' ), __( 'primary', '__plugin_txtd' ), __( 'secondary', '__plugin_txtd' ) ],
	parent: ['novablocks/header'],
	attributes,
	edit: function( props ) {
		return (
			<wp.serverSideRender
				block="novablocks/navigation"
				attributes={ props.attributes }
			/>
		)
	},
	save: function() {},
} );
