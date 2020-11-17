/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { STORE_NAME } from '@novablocks/core';
import { getRandomBetween } from "@novablocks/utils";

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

const settings = select( STORE_NAME ).getSettings();

generateDefaults( 'novablocks/hero', getNewDefaults );
insertTemplate( 'novablocks/hero', settings.hero.template );

registerBlockType( 'novablocks/hero', {
	title: __( 'Hero of the Galaxy', '__plugin_txtd' ),
	description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.hero,
	// Additional search terms
	keywords: [
		__( 'cover', '__plugin_txtd' ),
		__( 'full width', '__plugin_txtd' ),
		__( 'hero image', '__plugin_txtd' ),
		__( 'cover section', '__plugin_txtd' )
	],
	supports: {
		anchor: true,
	},
	deprecated,
	attributes,
	edit,
	save,
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
