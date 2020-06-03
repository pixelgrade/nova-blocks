/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { getRandomArrayFromArray, getRandomBetween } from "../../utils";
import { STORE_NAME } from "../../store";
import { getRandomAttributes } from "../../components/advanced-gallery/util";
import generateDefaults from "../../components/generate-defaults";
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function getNewDefaults() {
	const settings = wp.data.select( STORE_NAME ).getSettings();
	const placeholderImages = settings.placeholderImages;
	const randomImage = getRandomArrayFromArray( placeholderImages, 1 )[0];

	return {
		media: {
			id: randomImage.id,
			url: randomImage.sizes.full.url
		}
	};
}

function init() {

	generateDefaults( 'novablocks/card', getNewDefaults );

	registerBlockType( 'novablocks/card', {
		title: __( 'Card', '__plugin_txtd' ),
		description: __( 'Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd' ),
		category: 'nova-blocks',
		parent: [ 'novablocks/cards-collection' ],
		icon: icons.card,
		keywords: [ __( 'image with text', '__plugin_txtd' ) ],
		attributes,
		deprecated,
		edit,
		save,
	} )
}

export default init;
