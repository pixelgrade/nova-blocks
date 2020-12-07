/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';

import edit from './edit';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType( 'novablocks/post-comments', {
	title: __( 'Comments Nova', '__plugin_txtd' ),
	description: __( 'Display your post comments start section.', '__plugin_txtd' ),
	icon: icons.postsCollection,
	category: 'nova-blocks',
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );