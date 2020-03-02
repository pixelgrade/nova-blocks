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

function init() {

	registerBlockType( 'novablocks/blob', {
		title: __( 'Blob', '__plugin_txtd' ),
		description: __( 'Just a blob.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.logo,
		// Additional search terms
		keywords: [ __( 'blob', '__plugin_txtd' ) ],
		save: function() {},
		edit: edit,
	} )
}

export default init;
