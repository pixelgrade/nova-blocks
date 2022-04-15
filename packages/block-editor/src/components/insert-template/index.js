import {
	createBlocksFromInnerBlocksTemplate
 } from '@wordpress/blocks';

import {
	dispatch,
	select,
	subscribe,
 } from '@wordpress/data';

const insertTemplate = ( blockType, template ) => {
	const { getBlocksByClientId, getClientIdsWithDescendants } = select( 'core/block-editor' );
	const { replaceInnerBlocks, updateBlockAttributes } = dispatch( 'core/block-editor' );

	let blocks = getClientIdsWithDescendants();
	let loadedSavedBlocks = false;

	return subscribe( () => {
		const newBlocks = getClientIdsWithDescendants();

		let addedBlocks = newBlocks.filter( newBlock => ! blocks.includes( newBlock ) );

		if ( newBlocks === blocks || ! addedBlocks.length ) {
			return;
		}

		// if this is the first set of added blocks
		if ( ! loadedSavedBlocks ) {
			loadedSavedBlocks = true;
			return;
		}

		blocks = newBlocks;

		getBlocksByClientId( addedBlocks ).map( block => {

			if ( block.name === blockType && ! block.attributes.templateInserted && ! block.innerBlocks?.length ) {
				replaceInnerBlocks( block.clientId, createBlocksFromInnerBlocksTemplate( template ) );
				updateBlockAttributes( block.clientId, {
					templateInserted: true
				} );
			}
		} );
	} );
};

export default insertTemplate;
