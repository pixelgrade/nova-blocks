/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import transforms from './transforms';
import deprecated from './deprecated';

import { getRandomArrayFromArray, getRandomBetween, changeDefaults } from "../../utils";
import { getRandomAttributes } from "../../components/advanced-gallery/util";
import { STORE_NAME } from "../../store";

import attributes from './attributes';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { select } = wp.data;

function getNewDefaults() {
	const settings = select( STORE_NAME ).getSettings();
	const numberOfImages = getRandomBetween( 2, 4 );
	const placeholderImages = settings.placeholderImages;
	const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
	const randomAttributes = getRandomAttributes();

	return {
		...randomAttributes,
		images: randomImages
	};
}

function init() {

	changeDefaults( 'novablocks/media', getNewDefaults );

	registerBlockType( 'novablocks/media', {
		title: __( 'Media Card Constellation', '__plugin_txtd' ),
		description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		attributes,
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
		deprecated,
		transforms
	} )
}

export default init;
