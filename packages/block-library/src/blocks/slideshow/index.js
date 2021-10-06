/**
 * Internal dependencies
 */
import iconSvg from './slideshow-block.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import { select } from '@wordpress/data';

// Load deprecated file
import './deprecated';

import {
  getRandomArrayFromArray,
  getRandomBetween,
} from "@novablocks/utils";

import {
	getPlaceholderImages,
	generateDefaults,
  getSvg
} from "@novablocks/block-editor";

import blockAttributes from "./attributes";

// Load extras file
const attributes = Object.assign( {}, blockAttributes );

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
        deprecated: true,
      },
      customDefaults: true,
      scrollingEffect: {
        attributes: true,
        altAttributes: true,
        controls: true,
        customWrapper: true,
      },
      spaceAndSizing: true
    },
  },
	edit,
	save,
  transforms,
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
