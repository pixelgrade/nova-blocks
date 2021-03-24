/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import edit from './edit';
import iconSvg from './super-nova-block.svg';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

import { getRandomArrayFromArray, getRandomBetween } from "@novablocks/utils";
import { generateDefaults, getPlaceholderImages } from "@novablocks/block-editor";
import AdvancedGallery from "@novablocks/advanced-gallery";
import Blob from "@novablocks/blob";

import attributes from './attributes.json';
import {select} from "@wordpress/data";

const { getRandomAttributes } = AdvancedGallery.utils;

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
  title: __( 'Super Nova Item', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes: {
    ...attributes,
    ...Blob.attributes
  },
  supports: {
    html: false,
    inserter: false,
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'wide' } : {};
  },
} );
