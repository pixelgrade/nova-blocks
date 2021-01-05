/**
 * Internal dependencies
 */
import iconSvg from './post-comments-block.svg';
import edit from './edit';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/post-comments', {
	title: __( 'Comments Nova', '__plugin_txtd' ),
	description: __( 'Display your post comments section.', '__plugin_txtd' ),
  icon: getSvg( iconSvg ),
	category: 'nova-blocks',
  parent: ['novablocks/post-comments-dummy'],
  supports: {
    html: false
  },
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
