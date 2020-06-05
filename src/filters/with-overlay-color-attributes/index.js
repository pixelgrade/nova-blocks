import overlayColorAttributes from '../../components/color-controls/attributes';

const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Component, Fragment } = wp.element;

const enableOverlayColorAttributesOnBlocks = [
	'novablocks/hero',
	'novablocks/slideshow',
];

function addOverlayColorAttributes( block ) {

	if ( ! enableOverlayColorAttributesOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, overlayColorAttributes );
	}

	return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-overlay-color-attributes', addOverlayColorAttributes );
