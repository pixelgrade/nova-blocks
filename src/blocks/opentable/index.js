/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


function init() {
	registerBlockType( 'novablocks/opentable', {
		title: __( 'OpenTable Reservation', '__plugin_txtd' ),
		description: __( 'Add OpenTable online reservation booking to your site.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.opentable,
		// Additional search terms
		keywords: [ __( 'reservations', '__plugin_txtd' ), __( 'bookings', '__plugin_txtd' ) ],
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
			}
		},
		edit,
		save
	} )
}

export default init;
