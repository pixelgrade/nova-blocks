/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import { STORE_NAME } from "../../store";
import { getPlaceholderImages, getRandomArrayFromArray, getRandomBetween } from "../../utils";
import generateDefaults from "../../components/generate-defaults";

import blockAttributes from "./attributes"
import alignmentAttributes from "../../components/alignment-controls/attributes";
import colorAttributes from "../../components/color-controls/attributes";
import scrollingAttributes from "../../components/scrolling-effect-controls/attributes";
import layoutAttributes from "../../components/layout-panel/attributes";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes, scrollingAttributes );

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

async function getNewDefaults() {
	const placeholderImages = await getPlaceholderImages();
	const count = getRandomBetween( 2, 4 );
	const images = getRandomArrayFromArray( placeholderImages, count );

	images.forEach( image => {
		if ( typeof image?.download === "function" ) {
			image.download();
		}
	} );

	return {
		galleryImages: images,
	};
}

function init() {

	generateDefaults( 'novablocks/slideshow', getNewDefaults );

	registerBlockType( 'novablocks/slideshow', {
		title: __( 'Slideshow Me the Way', '__plugin_txtd' ),
		description: __( 'Display more than one piece of content in a single, coveted space.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.slideshow,
		// Additional search terms
		keywords: [ __( 'slider', '__plugin_txtd' ), __( 'carousel', '__plugin_txtd' ), __( 'images', '__plugin_txtd' ), __( 'cover', '__plugin_txtd' ) ],
		attributes,
		edit,
		save,
		deprecated,
		getEditWrapperProps() {
			const settings = wp.data.select( 'core/block-editor' ).getSettings();
			return settings.alignWide ? { 'data-align': 'full' } : {};
		},
	} );
}

export default init;
