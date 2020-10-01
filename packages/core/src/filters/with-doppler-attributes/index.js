import scrollingAttributes from '@novablocks/components';

import { addFilter } from '@wordpress/hooks';

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
		Object.assign( block.attributes, scrollingAttributes );
	}

	return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-advanced-gallery-attributes', addDopplerAttributes );
