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

export default registerBlockType( 'nova/hero',
	{
		title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
		description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
		category: "nova-by-pixelgrade",
		icon: icons.hero,
		edit,
		save() {
			return <InnerBlocks.Content/>
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? {
				'data-align': 'full'
			} : {}
		},
	}
)