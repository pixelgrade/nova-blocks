/**
 * Internal dependencies
 */
import iconSvg from './media-block.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';

import {
  getRandomArrayFromArray,
  getRandomBetween,
} from "@novablocks/utils";

import {
  attributes as mediaCompositionAttributes,
  getRandomAttributes
} from "@novablocks/media-composition";

import {
  getSvg,
  generateDefaults,
  getPlaceholderImages,
  insertTemplate,
} from "@novablocks/block-editor";

import blockAttributes from './attributes';

const attributes = Object.assign( {}, blockAttributes, mediaCompositionAttributes );

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { select } from "@wordpress/data";

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
    verticalAlignment: "center",
    images: randomImages,
  };
}

const settings = select( 'novablocks' ).getSettings();

generateDefaults( 'novablocks/media', getNewDefaults );
insertTemplate( 'novablocks/media', settings.media.template );

registerBlockType( 'novablocks/media', {
	title: __( 'Media Card Constellation (Deprecated)', '__plugin_txtd' ),
	description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: {
	  src: getSvg( iconSvg )
  },
	// Additional search terms
	keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
	attributes,
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: true,
      shapeModeling: true,
      contentPositionMatrixToolbar: {
        deprecated: true
      },
      spaceAndSizing: {
        attributes: true,
        controls: true,
        advancedSpacing: true,
      },
    },
  },
	edit,
	save,
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
	transforms,
} );
