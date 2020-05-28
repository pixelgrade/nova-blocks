import { Collection } from "../../components";
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
const {
	Component,
	Fragment
} = wp.element;

const { __ } = wp.i18n;

const {
	InnerBlocks,
} = wp.blockEditor;

const {
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
			<InspectorControls { ...props } />
		</Fragment>
	);
}

const withInnerBlocks = withSelect( ( select, props ) => {
	const { clientId } = props;
	const { getBlock } = select( 'core/block-editor' );
	const parentBlock = getBlock( clientId );
	const innerBlocks = parentBlock.innerBlocks;

	return {
		innerBlocks,
		...props
	}
} );

export default withInnerBlocks( CardsCollectionEdit );

