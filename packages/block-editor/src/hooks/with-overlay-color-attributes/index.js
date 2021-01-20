import { addFilter } from '@wordpress/hooks';

import { colorAttributes } from '../../components';

const enableOverlayColorAttributesOnBlocks = [
	'novablocks/hero',
	'novablocks/slideshow',
];

function addOverlayColorAttributes( block ) {

	if ( ! enableOverlayColorAttributesOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, colorAttributes );
	}

	return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-overlay-color-attributes', addOverlayColorAttributes );
