/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import InspectorControls from "./inspector-controls";
import FoodMenuPreview from "./preview";

import { withInnerBlocks } from "../../utils";

const FoodMenuEdit = function( props ) {
	return (
		<Fragment>
			<FoodMenuPreview {...props} />
			<InspectorControls {...props} />
		</Fragment>
	);
};

export default withInnerBlocks( FoodMenuEdit );
