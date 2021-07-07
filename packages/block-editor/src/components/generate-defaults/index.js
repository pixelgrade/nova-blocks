import {
	dispatch,
	select,
	subscribe,
} from '@wordpress/data';

const generateDefaults = ( blockType, getNewDefaults ) => {
	const { getBlocksByClientId, getClientIdsWithDescendants } = select( 'core/block-editor' );
	const { updateBlockAttributes } = dispatch( 'core/block-editor' );

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
			if ( block.name === blockType && ! block.attributes.defaultsGenerated && typeof getNewDefaults === "function" ) {
				getNewDefaults( block ).then( defaults => {
					updateBlockAttributes( block.clientId, {
						...defaults,
						defaultsGenerated: true
					} );
				} );
			}
		} );
	} );
}

export default generateDefaults;
