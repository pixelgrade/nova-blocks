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
	registerBlockType( 'novablocks/card', {
		title: __( 'Card', '__plugin_txtd' ),
		description: __( 'Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd' ),
		category: 'nova-blocks',
		parent: [ 'novablocks/cards-collection' ],
		icon: icons.media,
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		attributes: {
			media: {
				type: 'object',
				default: {}
			},
			title: {
				type: 'string',
				default: 'Title',
			},
			subtitle: {
				type: 'string',
				default: 'Subtitle',
			},
			description: {
				type: 'string',
				default: 'This is just an example of what a description for this card could look like',
			},
			meta: {
				type: 'string',
				default: '',
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
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
	} )
}

export default init;
