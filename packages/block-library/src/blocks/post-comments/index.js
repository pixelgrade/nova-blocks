/**
 * Internal dependencies
 */
import iconSvg from './post-comments-block.svg';
import edit from './edit';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/post-comments', {
  icon: getSvg( iconSvg ),
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
