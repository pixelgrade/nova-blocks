/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;


export default registerBlockType( 'novablocks/opentable',
	{
		title: __( 'OpenTable Reservartion Form', '__plugin_txtd' ),
		description: __( 'Short description', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		edit,
	}
)
