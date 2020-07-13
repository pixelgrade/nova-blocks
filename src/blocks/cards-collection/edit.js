import { Collection } from "../../components";

/**
 * WordPress dependencies
 */
const {
	Component,
	Fragment
} = wp.element;

const {
	createHigherOrderComponent
} = wp.compose;

const { __ } = wp.i18n;

const {
	InnerBlocks,
} = wp.blockEditor;

const {
	select,
	dispatch,
	withSelect,
} = wp.data;

const ALLOWED_BLOCKS = [ 'novablocks/card' ];
const CARDS_COLLECTION_TEMPLATE = [
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
];

const CardsCollectionEdit = ( props ) => {

	const {
		innerBlocks
	} = props;

	const hasAppender = !! innerBlocks && innerBlocks.length < 4;

	return (
		<Fragment>
			<Collection hasAppender={ hasAppender } { ...props }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ CARDS_COLLECTION_TEMPLATE }
					renderAppender={ hasAppender ? window.undefined : false }
				/>
			</Collection>
		</Fragment>
	);
};

const withCollectionVisibilityAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( 'novablocks/cards-collection' === props.name ) {
			const { clientId, attributes } = props;
			const { getBlock } = select( 'core/block-editor' );
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const collection = getBlock( clientId );
			const cards = collection.innerBlocks;

			const newAttributes = (
				( { level, contentAlign, showMedia, showTitle, showSubtitle, showDescription, showButtons, showMeta } ) => (
					{ level, contentAlign, showMedia, showTitle, showSubtitle, showDescription, showButtons, showMeta }
				)
			)( attributes );

			cards.forEach( block => {
				updateBlockAttributes( block.clientId, newAttributes );

				if ( Array.isArray( block.innerBlocks ) ) {
					block.innerBlocks.forEach( innerBlock => {
						updateBlockAttributes( innerBlock.clientId, {
							align: newAttributes.contentAlign
						} );
					} );
				}
			} )
		}
		return <BlockListBlock { ...props } />
	};
}, 'withCollectionVisibilityAttributes' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-collection-visibility-attributes', withCollectionVisibilityAttributes );

export default CardsCollectionEdit;
