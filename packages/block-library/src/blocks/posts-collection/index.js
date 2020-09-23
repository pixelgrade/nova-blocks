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
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType( 'novablocks/posts-collection', {
	title: __( 'Posts Collection', '__plugin_txtd' ),
	description: __( 'Show Latest Posts', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.postsCollection,
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
