/**
 * Internal dependencies
 */
import iconSvg from './openhours-block.svg';
import edit from './edit';
import attributes from "./attributes"

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/openhours', {
	title: __( 'OpenHours', '__plugin_txtd' ),
	description: __( 'Display Opening Hours for any kind of venue.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
	attributes,
	edit,
	save: function() {},
} );
