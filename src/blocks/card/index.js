/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

function init() {
	registerBlockType( 'novablocks/card', {
		title: __( 'Card', '__plugin_txtd' ),
		description: __( 'Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
	} )
}

export default init;
