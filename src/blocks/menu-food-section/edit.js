/**
 * WordPress dependencies
 */

const {Fragment} = wp.element;
const {withSelect} = wp.data;

/**
 * Internal dependencies
 */
import FoodMenuSectionPreview from "./preview";

const FoodMenuSectionEdit = function( props ) {
	return (
		<Fragment>
			<FoodMenuSectionPreview {...props}/>
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

export default withInnerBlocks( FoodMenuSectionEdit );
