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

export default registerBlockType( 'novablocks/header',
	{
		title: __( 'Header', '__plugin_txtd' ),
		description: __( 'Outputs custom header markup.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		edit,
		save: function() {
			return <InnerBlocks.Content />
		}
	}
)
