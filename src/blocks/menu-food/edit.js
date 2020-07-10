/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
import InspectorControls from "./inspector-controls";
import FoodMenuPreview from "./preview";

const FoodMenuEdit = function( props ) {
	return (
		<Fragment>
			<FoodMenuPreview {...props} />
			<InspectorControls {...props} />
		</Fragment>
	);
};

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

export default withInnerBlocks( FoodMenuEdit );

//export default FoodMenuEdit;
