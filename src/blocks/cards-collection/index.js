/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

function init() {
	registerBlockType( 'novablocks/cards-collection', {
		title: __( 'Cards Collection', '__plugin_txtd' ),
		description: __( 'Display a list of cards placed within a coherent layout.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		attributes: {
			align: {
				type: 'string',
				default: 'full'
			},
			level: {
				type: 'number',
				default: 2,
			},
			title: {
				type: 'string',
				default: 'Collection Title',
			},
			subtitle: {
				type: 'string',
				default: 'Collection Subtitle',
			},
			showCollectionTitle: {
				type: 'boolean',
				default: true,
			},
			showCollectionSubtitle: {
				type: 'boolean',
				default: true,
			},
			showMedia: {
				type: 'boolean',
				default: true,
			},
			showTitle: {
				type: 'boolean',
				default: true,
			},
			showSubtitle: {
				type: 'boolean',
				default: true,
			},
			showDescription: {
				type: 'boolean',
				default: true,
			},
			showButtons: {
				type: 'boolean',
				default: true,
			},
			showMeta: {
				type: 'boolean',
				default: true,
			},
		},
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	} )
}

export default init;
