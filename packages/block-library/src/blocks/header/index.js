/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import variations from './variations';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType( 'novablocks/header', {
	title: __( 'Header', '__plugin_txtd' ),
	description: __( 'Outputs custom header markup.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.header,
	// Additional search terms
	keywords: [ __( 'logo', '__plugin_txtd' ), __( 'menu', '__plugin_txtd' ) ],
	supports: { align: ["wide", "full"], default: "full" },
	variations,
	edit,
	save: function() {
		return <InnerBlocks.Content />
	}
} );
