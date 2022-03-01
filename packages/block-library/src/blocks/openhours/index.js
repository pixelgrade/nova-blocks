/**
 * Internal dependencies
 */
import iconSvg from './icon.svg';
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
  supports: {
    html: false
  },
	edit,
	save: function() {
	  return false
  },
} );
