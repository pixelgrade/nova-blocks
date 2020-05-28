/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import variations from './variations';


/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

function init() {

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
	} )
}

export default init;
