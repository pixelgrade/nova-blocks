import { select } from '@wordpress/data';

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
import transforms from './transforms';
import attributes from "./attributes";

// Load deprecated file
import './deprecated';


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
        altAttributes: true,
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
        altAttributes: true,
        controls: true,
        customWrapper: true,
      },
      spaceAndSizing: true,
      noDataAlign: true,
      elementsVisibility: {
        attributes: true,
      }
    },
  },
	edit,
	save,
  transforms,
} );
