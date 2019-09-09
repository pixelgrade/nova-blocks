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
		edit,
		attributes: {
			example: {
				type: 'boolean',
				default: true
			}
		},
		example: {
			attributes: {
				example: false
			}
		},
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	}
);
