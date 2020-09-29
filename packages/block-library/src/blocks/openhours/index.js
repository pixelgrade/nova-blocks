/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import attributes from "./attributes"


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/openhours', {
	title: __( 'OpenHours', '__plugin_txtd' ),
	description: __( 'Display Opening Hours for any kind of venue.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.openhours,
	attributes,
	edit,
	save: function() {},
} );
