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
const { InnerBlocks } = wp.blockEditor;

function init() {
	registerBlockType('novablocks/openhours', {
		title: __('OpenHours', '__plugin_txtd'),
		description: __('Display Opening Hours for any kind of venue', '__plugin_txtd'),
		category: 'nova-blocks',
		icon: icons.opentable,
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
	})
}

export default init;
