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

export default registerBlockType( 'novablocks/navigation',
	{
		title: __( 'Space Navigation', '__plugin_txtd' ),
		description: __( 'Outputs chosen navigaiton menu markup.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		parent: ['novablocks/header'],
		save: function() {},
		edit,
	}
)
