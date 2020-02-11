import * as icons from '../../icons';
import edit from './edit';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function init() {
	registerBlockType( 'novablocks/advanced-gallery', {
		title: __( 'Advanced Gallery', '__plugin_txtd' ),
		description: __( 'Advanced Gallery', '__plugin_txtd' ),
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
		transforms,
	} )
}

export default init;
