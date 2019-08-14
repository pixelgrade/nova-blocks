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
const { InnerBlocks } = wp.blockEditor;

export default registerBlockType( 'novablocks/media',
	{
		title: __( 'Media Card Constellation', '__plugin_txtd' ),
		description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	}
)
