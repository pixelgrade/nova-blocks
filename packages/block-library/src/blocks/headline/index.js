/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './headline-block.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';

registerBlockType( 'novablocks/headline', {
	title: __( 'Headline', '__plugin_txtd' ),
	description: __( 'Advanced heading block with a fancier display.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [ __( 'heading', '__plugin_txtd' ), __( 'title', '__plugin_txtd' ), __( 'cta', '__plugin_txtd' ), __( 'call to action', '__plugin_txtd' ) ],
	attributes: {
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
