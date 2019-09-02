/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';

import { parallaxAttributes } from '../../components/with-parallax';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

export default registerBlockType( 'novablocks/slideshow',
	{
		title: __( 'Slideshow Me the Way', '__plugin_txtd' ),
		description: __( 'Display more than one piece of content in a single, coveted space.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.slideshow,
		attributes: {
			contentPadding: {
				type: 'string',
				default: 'small',
			},
			contentPaddingCustom: {
				type: 'number',
				default: 50
			},
			contentWidth: {
				type: 'string',
				default: 'large'
			},
			contentWidthCustom: {
				type: 'number',
				default: 100
			},
			horizontalAlignment: {
				type: 'string',
				default: 'left',
			},
			verticalAlignment: {
				type: 'string',
				default: 'bottom'
			},
			minHeight: {
				type: 'number',
				default: 75,
			},
			contentColor: {
				type: 'string',
				default: '#FFF'
			},
			overlayFilterStyle: {
				type: 'string',
				default: 'none'
			},
			overlayFilterStrength: {
				type: 'number',
				default: 30
			},
			slideshowType: {
				type: 'string',
				default: 'gallery'
			},
			galleryImages: {
				type: 'array',
				default: [],
			},
			...parallaxAttributes,
		},
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	}
);
