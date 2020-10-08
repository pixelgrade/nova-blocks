/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import deprecated from './deprecated';

import { getPlaceholderImages, getRandomArrayFromArray, getRandomBetween } from "@novablocks/utils";
import { AdvancedGallery } from "@novablocks/components";
import { generateDefaults } from "@novablocks/utils";

const { getRandomAttributes } = AdvancedGallery.utils;

import blockAttributes from './attributes';
const attributes = Object.assign( {}, blockAttributes, AdvancedGallery.attributes );

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';

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
		images: randomImages
	};
}

generateDefaults( 'novablocks/media', getNewDefaults );

registerBlockType( 'novablocks/media', {
	title: __( 'Media Card Constellation', '__plugin_txtd' ),
	description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: icons.media,
	// Additional search terms
	keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
	attributes,
	edit,
	save,
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
	deprecated,
	transforms,
} );

registerBlockStyle( 'novablocks/media', [ {
	name: 'default',
	label: 'Default',
	isDefault: true,
}, {
	name: 'alternate',
	label: 'Alternate',
} ] );
