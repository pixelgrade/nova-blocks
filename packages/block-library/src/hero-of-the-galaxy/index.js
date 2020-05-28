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
import { select } from '@wordpress/data';

registerBlockType( 'novablocks/hero', {
	title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
	description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.hero,
	// Additional search terms
	keywords: [ __( 'cover', '__plugin_txtd' ), __( 'full width', '__plugin_txtd' ), __( 'hero image', '__plugin_txtd' ), __( 'cover section', '__plugin_txtd' ) ],
	example: {},
	supports: {
		anchor: true,
	},
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
