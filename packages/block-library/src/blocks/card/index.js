/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import iconSvg from './card-block.svg';

import {
  getRandomArrayFromArray,
} from "@novablocks/utils";

import {
	generateDefaults,
	getPlaceholderImages,
  getSvg,
} from "@novablocks/block-editor";

import attributes from "./attributes";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

async function getNewDefaults() {
	const placeholderImages = await getPlaceholderImages();
	const randomImage = getRandomArrayFromArray( placeholderImages, 1 )[0];

	if ( typeof randomImage?.download === "function" ) {
		randomImage.download();
	}

	return {
		media: randomImage
	};
}

generateDefaults( 'novablocks/card', getNewDefaults );

registerBlockType( 'novablocks/card', {
	title: __( 'Card', '__plugin_txtd' ),
	description: __( 'Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd' ),
	category: 'nova-blocks',
	parent: [ 'novablocks/cards-collection' ],
	icon: getSvg( iconSvg ),
	keywords: [ __( 'image with text', '__plugin_txtd' ) ],
	attributes,
  supports: {
    html: false,
    novaBlocks: {
      customDefaults: true,
      colorSignal: {
        attributes: true
      },
      contentPositionMatrixToolbar: true,
      elementsVisibility: {
        attributes: true
      }
    }
  },
	edit,
	save,
} );
