import * as icons from '../../icons';
import edit from './edit';
import transforms from './transforms';
import { STORE_NAME } from "../../store";
import { getRandomArrayFromArray, getRandomBetween } from "../../utils";
import { getRandomAttributes } from "../../components/advanced-gallery/util";
import generateDefaults from "../../components/generate-defaults";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function getNewDefaults() {
	const settings = wp.data.select( STORE_NAME ).getSettings();
	const numberOfImages = getRandomBetween( 2, 4 );
	const placeholderImages = settings.placeholderImages;
	const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
	const randomAttributes = getRandomAttributes();

	return {
		...randomAttributes,
		images: randomImages
	};
}

function init() {

	generateDefaults( 'novablocks/advanced-gallery', getNewDefaults );

	registerBlockType( 'novablocks/advanced-gallery', {
		title: __( 'Gallery of the Stars', '__plugin_txtd' ),
		description: __( 'Display galleries of images in unique and creative compositions.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.gallery,
		supports: {
			align: [ 'wide', 'full' ],
		},
		// Additional search terms
		keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
		edit,
		save() {
			return false;
		},
		transforms,
	} )
}

export default init;
