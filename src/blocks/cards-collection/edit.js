/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;
const {
	InnerBlocks,
} = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'novablocks/card' ];
const CARDS_COLLECTION_TEMPLATE = [ [ 'novablocks/card' ] ];

function CardsCollectionEdit( props ) {

	const { className } = props;

	return (
		<Fragment>
			<div className={ `novablocks-cards-collection ${ className }` }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ CARDS_COLLECTION_TEMPLATE }
					__experimentalMoverDirection="horizontal"
				/>
			</div>
		</Fragment>
	);
}

export default CardsCollectionEdit;

