/**
 * WordPress dependencies
 */

const {Fragment} = wp.element;

/**
 * Internal dependencies
 */
import FoodMenuSectionPreview from "./preview";

import { withInnerBlocks } from "../../utils";

const FoodMenuSectionEdit = function( props ) {
	return (
		<Fragment>
			<FoodMenuSectionPreview {...props}/>
		</Fragment>
	);
};

export default withInnerBlocks( FoodMenuSectionEdit );
