import AdvancedGallery from '@novablocks/advanced-gallery';
import Blob from '@novablocks/blob';

import iconSvg from './advanced-gallery-block.svg';

import {
	generateDefaults,
	getPlaceholderImages,
  getSvg,
} from "@novablocks/block-editor";

import {
	getRandomArrayFromArray,
	getRandomBetween,
} from "@novablocks/utils";

import edit from './edit';
import deprecated from './deprecated';
import transforms from './transforms';

import blockAttributes from './attributes';

const { getRandomAttributes } = AdvancedGallery.utils;

const attributes = Object.assign( {}, blockAttributes, AdvancedGallery.attributes, Blob.attributes );

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

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
	icon: getSvg( iconSvg ),
	supports: {
		align: [ 'wide', 'full' ],
    html: false
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
