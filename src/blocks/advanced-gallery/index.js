import * as icons from '../../icons';
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function init() {
	registerBlockType( 'novablocks/advanced-gallery', {
		title: __( 'Gallery of the Stars', '__plugin_txtd' ),
		description: __( 'Display galleries of images in unique and creative compositions.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.gallery,
		supports: {
			align: [ 'wide', 'full' ],
		},
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		edit,
		save() {
			return false;
		},
	} )
}

export default init;
