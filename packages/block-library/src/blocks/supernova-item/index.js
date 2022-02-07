/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

import { getRandomArrayFromArray, getRandomBetween } from "@novablocks/utils";
import { generateDefaults, getPlaceholderImages } from "@novablocks/block-editor";
import { getRandomAttributes } from "@novablocks/media-composition";


import edit from './edit';
import iconSvg from './supernova-block.svg';
import attributes from './attributes.json';

async function getNewDefaults( block ) {
  const numberOfImages = getRandomBetween( 2, 4 );
  const placeholderImages = await getPlaceholderImages();
  const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
  const randomAttributes = getRandomAttributes();

  // @todo maybe allow more than one image in specific scenarios
  if ( ! block?.attributes?.multiplePlaceholderImages ) {
    randomImages.splice( 1 );
  }

  randomImages.forEach( image => {
    delete image.caption;
    delete image.title;

    if ( typeof image?.download === "function" ) {
      image.download();
    }
  } );

  return {
    ...randomAttributes,
    images: randomImages
  };
}

generateDefaults( 'novablocks/supernova-item', getNewDefaults );

registerBlockType( 'novablocks/supernova-item', {
  icon: getSvg( iconSvg ),
  attributes,
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
} );
