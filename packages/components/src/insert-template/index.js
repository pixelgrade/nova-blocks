const {
	createBlock
} = wp.blocks;

const {
	dispatch,
	select,
	subscribe,
} = wp.data;

// Copied over from the Columns block. It seems like it should become part of public API.
const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate = [] ) => {
	return innerBlocksTemplate.map(
		( [ name, attributes, innerBlocks = [] ] ) =>
			createBlock(
				name,
				attributes,
				createBlocksFromInnerBlocksTemplate( innerBlocks )
			)
	);
};

export default ( blockType, template ) => {
	const { getBlocksByClientId, getClientIdsWithDescendants } = select( 'core/block-editor' );
	const { insertBlocks, updateBlockAttributes } = dispatch( 'core/block-editor' );

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
				const blocks = createBlocksFromInnerBlocksTemplate( template );

				insertBlocks( blocks, 0, block.clientId );

				updateBlockAttributes( block.clientId, {
					templateInserted: true
				} );
			}
		} );
	} );
}
