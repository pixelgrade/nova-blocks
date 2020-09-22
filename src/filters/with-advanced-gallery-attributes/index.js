import advancedGalleryAttributes from '../../components/advanced-gallery/attributes';

const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;

const enableAdvancedMediaAttributeOnBlocks = [
	'novablocks/media',
	'novablocks/advanced-gallery',
];

function addAdvancedGalleryAttributes( block ) {

	if ( ! enableAdvancedMediaAttributeOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, advancedGalleryAttributes );
	}

	return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-advanced-gallery-attributes', addAdvancedGalleryAttributes );
