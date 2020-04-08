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
	registerBlockType('novablocks/openhours', {
		title: __('OpenHours', '__plugin_txtd'),
		description: __('Display Opening Hours for any kind of venue.', '__plugin_txtd'),
		category: 'nova-blocks',
		icon: icons.openhours,
		save: function() {},
		edit,
	})
}

export default init;
