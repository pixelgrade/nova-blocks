/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/sharing-overlay', {
	title: __( 'Sharing Overlay', '__plugin_txtd' ),
	description: __( 'Add a button that toggles sharing overlay.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.opentable,
	// Additional search terms
	keywords: [ __( 'sharing', '__plugin_txtd' ) ],
	attributes: {},
	edit: function( props ) {
		return 'Button'
	},
	save: function() {
		return null;
	},
} );
