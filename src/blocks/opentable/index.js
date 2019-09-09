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
		title: __( 'OpenTable Reservation', '__plugin_txtd' ),
		description: __( 'Add OpenTable online reservation booking to your site.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.opentable,
		attributes: {
			restaurantId: {
				type: 'number',
				default: 1
			},
			language: {
				type: 'string',
				default: 'en-US'
			},
			showOpenTableLogo: {
				type: 'boolean',
				default: true
			},
			layoutForm: {
				type: 'string',
				default: 'wide'
			},
			example: {
				type: 'boolean',
				default: true
			}
		},
		edit,
		save
	}
)
