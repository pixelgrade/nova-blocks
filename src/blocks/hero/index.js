/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { getPlaceholderImages, getRandomBetween } from "../../utils";

import blockAttributes from "./attributes"
import alignmentAttributes from "../../components/alignment-controls/attributes";
import colorAttributes from "../../components/color-controls/attributes";
import scrollingAttributes from "../../components/scrolling-effect-controls/attributes";
import layoutAttributes from "../../components/layout-panel/attributes";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes, scrollingAttributes );

import generateDefaults from "../../components/generate-defaults";
import insertTemplate from "../../components/insert-template";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { select } = wp.data;

import { STORE_NAME } from "../../store";

async function getNewDefaults() {
	const placeholderImages = await getPlaceholderImages();
	const index = getRandomBetween( 0, placeholderImages.length - 1 );
	const image = placeholderImages[index];

	if ( typeof image?.download === "function" ) {
		image.download();
	}

	return {
		media: {
			...image,
			type: 'image',
		}
	};
}

function init() {

	const settings = select( STORE_NAME ).getSettings();

	generateDefaults( 'novablocks/hero', getNewDefaults );
	insertTemplate( 'novablocks/hero', settings.hero.template );

	registerBlockType( 'novablocks/hero', {
		title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
		description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.hero,
		// Additional search terms
		keywords: [
			__( 'cover', '__plugin_txtd' ),
			__( 'full width', '__plugin_txtd' ),
			__( 'hero image', '__plugin_txtd' ),
			__( 'cover section', '__plugin_txtd' )
		],
		supports: {
			anchor: true,
		},
		deprecated,
		attributes,
		edit,
		save,
		getEditWrapperProps() {
			const settings = select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	} );
}

export default init;
