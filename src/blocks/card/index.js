/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import edit from './edit';
import {changeDefaults, getRandomArrayFromArray, getRandomBetween} from "../../utils";
import {STORE_NAME} from "../../store";
import {getRandomAttributes} from "../../components/advanced-gallery/util";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

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

	changeDefaults( 'novablocks/card', getNewDefaults );

	registerBlockType( 'novablocks/card', {
		title: __( 'Card', '__plugin_txtd' ),
		description: __( 'Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd' ),
		category: 'nova-blocks',
		parent: [ 'novablocks/cards-collection' ],
		icon: icons.card,
		keywords: [ __( 'image with text', '__plugin_txtd' ) ],
		edit,
		save() {
			return <InnerBlocks.Content />;
		},
	} )
}

export default init;
