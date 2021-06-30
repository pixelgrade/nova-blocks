/**
 * Internal dependencies
 */
import iconSvg from './opentable-block.svg';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/opentable', {
	title: __( 'OpenTable Reservation', '__plugin_txtd' ),
	description: __( 'Add OpenTable online reservation booking to your site.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
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
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: true
    }
  },
	edit,
	save
} );
