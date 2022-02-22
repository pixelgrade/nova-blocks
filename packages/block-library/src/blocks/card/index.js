/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import {
	generateDefaults,
	getPlaceholderImages,
  getSvg,
} from "@novablocks/block-editor";

import { getRandomArrayFromArray } from "@novablocks/utils";

import edit from './edit';
import save from './save';
import iconSvg from './card-block.svg';

import attributes from "./attributes";
import attributesOverwrite from "./attributes-overwrite.json";

const BLOCK_NAME = 'novablocks/card';

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

generateDefaults( BLOCK_NAME, getNewDefaults );

const overwriteAttributes = ( settings ) => {

  if ( settings.name !== BLOCK_NAME ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributesOverwrite
    }
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/card-attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  apiVersion: 2,
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
      cardElementsVisibility: {
        attributes: true
      },
      contentPosition: {
        attributes: true,
        deprecated: true
      },
    }
  },
	edit,
	save,
} );
