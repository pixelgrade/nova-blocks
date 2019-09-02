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
const { select } = wp.data;

export default registerBlockType( 'novablocks/hero',
	{
		title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
		description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.hero,
		attributes: {
			blockIndex: {
				type: 'number',
				default: -1
			},
			contentPadding: {
				type: 'string',
				default: 'medium',
			},
			contentPaddingCustom: {
				type: 'number',
				default: 75
			},
			contentWidth: {
				type: 'string',
				default: 'large',
			},
			contentWidthCustom: {
				type: 'number',
				default: 100,
			},
			horizontalAlignment: {
				type: 'string',
				default: 'center',
			},
			verticalAlignment: {
				type: 'string',
				default: 'center',
			},
			applyMinimumHeight: {
				type: 'string',
				source: 'meta',
				meta: 'novablocks_hero_apply_minimum_height'
			},
			minHeight: {
				type: 'number',
				source: 'meta',
				meta: 'novablocks_hero_minimum_height'
			},
			applyMinimumHeightBlock: {
				type: 'boolean',
				default: false
			},
			scrollIndicator: {
				type: 'boolean',
				source:	'meta',
				meta: 'novablocks_hero_scroll_indicator'
			},
			scrollIndicatorBlock: {
				type: 'boolean',
				default: false,
			},
			backgroundType: {
				type: 'string',
				default: 'image'
			},
			media: {
				type: 'object',
				default: {
					type: 'image',
					sizes: {
						full: {
							url: 'https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
						}
					}
				}
			},
			contentColor: {
				type: 'string',
				default: '#FFF',
			},
			overlayFilterStyle: {
				type: 'string',
				default: 'dark',
			},
			overlayFilterStrength: {
				type: 'number',
				default: 30,
			},
			...parallaxAttributes,
		},
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	}
);
