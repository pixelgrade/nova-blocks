/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import select from '@wordpress/data';

import {
	getRandomArrayFromArray,
	getRandomBetween
} from "@novablocks/utils";

import {
	alignmentAttributes,
	colorAttributes,
	layoutAttributes,
	getPlaceholderImages,
	generateDefaults
} from "@novablocks/block-editor";

import {
	scrollingAttributes,
} from '@novablocks/doppler';

import blockAttributes from "./attributes";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes, scrollingAttributes );

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

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
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
