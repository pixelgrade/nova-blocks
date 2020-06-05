import dopplerAttributes from '../../components/scrolling-effect-controls/attributes';

const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;

const enableDopplerAttributeOnBlocks = [
	'novablocks/hero',
	'novablocks/google-map',
	'novablocks/slideshow',
];

function addDopplerAttributes( block ) {

	if ( ! enableDopplerAttributeOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, dopplerAttributes );
	}

	return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-advanced-gallery-attributes', addDopplerAttributes );
