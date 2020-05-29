/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import deprecated from './deprecated';
import { STORE_NAME } from "../../store";
import { changeDefaults, getRandomBetween } from "../../utils";
import { getRandomAttributes } from "../../components/advanced-gallery/util";

import attributes from "./attributes";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { select } = wp.data;

function getNewDefaults() {
	const settings = select( STORE_NAME ).getSettings();
	const placeholderImages = settings.placeholderImages;
	const index = getRandomBetween( 0, placeholderImages.length - 1 );
	const image = placeholderImages[index];

	return {
		media: {
			...image,
			type: 'image',
		}
	};
}

function init() {

	changeDefaults( 'novablocks/hero', getNewDefaults );

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
		deprecated,
		attributes,
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
		getEditWrapperProps() {
			const settings = select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	} );
}

export default init;
