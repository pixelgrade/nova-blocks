/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from "@wordpress/hooks";

/**
 * Internal dependencies
 */
import {
  getRandomArrayFromArray,
  getRandomBetween,
} from "@novablocks/utils";

import {
	getPlaceholderImages,
	generateDefaults,
  getSvg
} from "@novablocks/block-editor";

import iconSvg from './slideshow-block.svg';
import edit from './edit';
import save from './save';
import attributes from "./attributes";
import attributesOverwrite from "./attributes-overwrite.json";

import transforms from './transforms';
import './deprecated';

const BLOCK_NAME = 'novablocks/slideshow';

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
addFilter( 'blocks.registerBlockType', 'novablocks/slideshow/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  apiVersion: 2,
	title: __( 'Slideshow Me the Way (Deprecated)', '__plugin_txtd' ),
	description: __( 'Display more than one piece of content in a single, coveted space.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [
	  __( 'slider', '__plugin_txtd' ),
    __( 'carousel', '__plugin_txtd' ),
    __( 'images', '__plugin_txtd' ),
    __( 'cover', '__plugin_txtd' )
  ],
	attributes,
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: {
        attributes: true,
        addOverlayColorDeprecatedMethod: true,
        controls: true,
      },
      overlayFilter: {
        attributes: true,
        controls: true,
      },
      contentPosition: {
        attributes: true,
        deprecated: true,
      },
      customDefaults: true,
      scrollingEffect: {
        attributes: true,
        controls: true,
        customWrapper: true,
      },
      spaceAndSizing: true,
      customAlign: true,
      elementsVisibility: {
        attributes: true,
      }
    },
  },
	edit,
	save,
  transforms,
} );
