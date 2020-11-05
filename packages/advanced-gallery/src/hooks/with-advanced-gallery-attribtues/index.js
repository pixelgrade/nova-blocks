import attributes from '../../attributes';

import { addFilter } from '@wordpress/hooks';

const enableAdvancedMediaAttributeOnBlocks = [
	'novablocks/media',
	'novablocks/advanced-gallery',
];

function addAdvancedGalleryAttributes( block ) {

	if ( ! enableAdvancedMediaAttributeOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ) {
		Object.assign( block.attributes, attributes );
	}

	return block;
}

addFilter( 'blocks.registerBlockType', 'novablocks/add-advanced-gallery-attributes', addAdvancedGalleryAttributes );
