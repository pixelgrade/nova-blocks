/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import deprecated from './deprecated';

import { getPlaceholderImages, getRandomArrayFromArray, getRandomBetween } from "../../utils";
import { getRandomAttributes } from "../../components/advanced-gallery/util";
import generateDefaults from "../../components/generate-defaults";
import { STORE_NAME } from "../../store";

import blockAttributes from './attributes';
import galleryAttributes from "../../components/advanced-gallery/attributes";

const attributes = Object.assign( {}, blockAttributes, galleryAttributes );


/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

async function getNewDefaults() {
	const numberOfImages = getRandomBetween( 2, 4 );
	const placeholderImages = await getPlaceholderImages;
	const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
	const randomAttributes = getRandomAttributes();

	return {
		...randomAttributes,
		verticalAlignment: "center",
		images: randomImages
	};
}

function init() {

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
		transforms
	} )
}

export default init;
