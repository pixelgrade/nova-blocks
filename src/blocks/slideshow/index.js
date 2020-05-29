/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';
import attributes from './attributes';
import deprecated from './deprecated';

import { parallaxAttributes } from '../../components/with-parallax';
import { STORE_NAME } from "../../store";
import { getRandomArrayFromArray, getRandomBetween } from "../../utils";
import generateDefaults from "../../components/generate-defaults";

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
	const count = getRandomBetween( 2, 4 );
	const images = getRandomArrayFromArray( placeholderImages, count );

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
