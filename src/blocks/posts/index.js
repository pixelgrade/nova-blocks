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
	registerBlockType('novablocks/posts', {
		title: __('Latest Nova Posts', '__plugin_txtd' ),
		description: __('Show Latest Posts', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		attributes: {
			displayFeaturedImage: {
				type: 'boolean',
				default: true
			},
			displayDate: {
				type: 'boolean',
				default: true
			},
			displayContent: {
				type: 'boolean',
				default: true
			},
			columnsNumber: {
				type: 'number',
				default: 2
			},
			displayReadMore: {
				type: 'boolean',
				default: true
			},
			numberOfPosts: {
				type: 'number',
				default: '4'
			}
		},
		edit,
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	})
}

export default init;
