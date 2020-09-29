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

registerBlockType( 'novablocks/cards-collection', {
	title: __( 'Cards Collection', '__plugin_txtd' ),
	description: __( 'Display a list of related items placed within a coherent layout.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.cardsCollection,
	keywords: [ __( 'grid', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'collection', '__plugin_txtd' ), __( 'group', '__plugin_txtd' ) ],
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );