import * as icons from '@novablocks/icons';

import {
	generateDefaults,
	getPlaceholderImages,
	getRandomArrayFromArray,
	getRandomBetween,
} from "@novablocks/utils";

import edit from './edit';
import deprecated from './deprecated';
import transforms from './transforms';

import blockAttributes from './attributes';
import AdvancedGallery from '@novablocks/components';

const { getRandomAttributes } = AdvancedGallery.utils;

const attributes = Object.assign( {}, blockAttributes, AdvancedGallery.attributes );

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

async function getNewDefaults() {
	const numberOfImages = getRandomBetween( 2, 4 );
	const placeholderImages = await getPlaceholderImages();
	const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
	const randomAttributes = getRandomAttributes();

	randomImages.forEach( image => {
		if ( typeof image?.download === "function" ) {
			image.download();
		}
	} );

	return {
		...randomAttributes,
		images: randomImages
	};
}

generateDefaults( 'novablocks/advanced-gallery', getNewDefaults );

registerBlockType( 'novablocks/advanced-gallery', {
	title: __( 'Gallery of the Stars', '__plugin_txtd' ),
	description: __( 'Display galleries of images in unique and creative compositions.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.gallery,
	supports: {
		align: [ 'wide', 'full' ],
	},
	// Additional search terms
	keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
	edit,
	save() {
		return false;
	},
	attributes,
	deprecated,
	transforms,
} );
