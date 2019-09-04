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

const { select } = wp.data;


export default registerBlockType( 'novablocks/opentable',
	{
		title: __( 'OpenTable Reservation Form', '__plugin_txtd' ),
		description: __( 'Short description', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		attributes: {
			restaurantId: {
				type: 'number',
				default: 80221
			},
			dateLabel: {
				type: 'string',
				default: 'Date'
			},
			timeLabel: {
				type: 'string',
				default: 'Time'
			},
			partySizeLabel: {
				type: 'string',
				default: 'Party Size'
			},
			submitButtonText: {
				type: 'string',
				default: 'Find a table'
			}
		},
		edit,
		save
	}
)
