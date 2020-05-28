/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

function init() {
	registerBlockType( 'novablocks/media', {
		title: __( 'Media Card Constellation', '__plugin_txtd' ),
		description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
		transforms
	} )
}

export default init;
