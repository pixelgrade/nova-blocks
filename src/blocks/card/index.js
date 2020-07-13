/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { getPlaceholderImages, getRandomArrayFromArray } from "../../utils";
import generateDefaults from "../../components/generate-defaults";
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

async function getNewDefaults() {
	const placeholderImages = await getPlaceholderImages;
	const randomImage = getRandomArrayFromArray( placeholderImages, 1 )[0];

	return {
		media: randomImage
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
