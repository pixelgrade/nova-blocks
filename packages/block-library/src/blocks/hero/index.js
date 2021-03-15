/**
 * Internal dependencies
 */
import iconSvg from './hero-block.svg';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import transforms from './transforms';

import { getRandomBetween } from "@novablocks/utils";
import { getSvg } from "@novablocks/block-editor";

import blockAttributes from "./attributes";

import {
	generateDefaults,
	getPlaceholderImages,
	insertTemplate,
	alignmentAttributes,
	colorAttributes,
	layoutAttributes,
} from "@novablocks/block-editor";

import {
	scrollingAttributes,
} from "@novablocks/doppler";

const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes, scrollingAttributes );

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';

async function getNewDefaults() {
	const placeholderImages = await getPlaceholderImages();
	const index = getRandomBetween( 0, placeholderImages.length - 1 );
	const image = placeholderImages[index];

	if ( typeof image?.download === "function" ) {
		image.download();
	}

	return {
		media: {
			...image,
			type: 'image',
		}
	};
}

const settings = select( 'novablocks' ).getSettings();

generateDefaults( 'novablocks/hero', getNewDefaults );
insertTemplate( 'novablocks/hero', settings.hero.template );

registerBlockType( 'novablocks/hero', {
	title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
	description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [
		__( 'cover', '__plugin_txtd' ),
		__( 'full width', '__plugin_txtd' ),
		__( 'hero image', '__plugin_txtd' ),
		__( 'cover section', '__plugin_txtd' )
	],
	supports: {
		anchor: true,
    html: false,
	},
	deprecated,
	attributes,
	edit,
	save,
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
  transforms
} );
