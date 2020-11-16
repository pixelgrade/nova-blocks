/**
 * Internal dependencies
 */
import edit from './edit';
import * as icons from '@novablocks/icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('novablocks/post-comments-form', {
	title: __( 'Comments Form Nova', '__plugin_txtd' ),
	description: __( 'Show Comments Form', '__plugin_txtd' ),
	icon: icons.postsCollection,
	category: 'nova-blocks',
//	parent: ['novablocks/post-comments'],
	usesContext: ['postId', 'postType'],
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
});
