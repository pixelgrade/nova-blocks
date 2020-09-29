/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import save from './save';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/headline', {
	title: __( 'Headline', '__plugin_txtd' ),
	description: __( 'Advanced heading block with a fancier display.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.headline,
	// Additional search terms
	keywords: [ __( 'heading', '__plugin_txtd' ), __( 'title', '__plugin_txtd' ), __( 'cta', '__plugin_txtd' ), __( 'call to action', '__plugin_txtd' ) ],
	attributes: {
		align: {
			type: "string",
			default: "center"
		},
		primary: {
			type: "string",
			default: __( "Our Story", '__plugin_txtd' )
		},
		secondary: {
			type: "string",
			default: __( "Discover", '__plugin_txtd' )
		},
		level: {
			type: "number",
			default: 2
		},
	},
	save,
	edit,
	transforms,
} );