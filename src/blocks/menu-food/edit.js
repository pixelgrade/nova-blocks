/**
 * WordPress dependencies
 */
const {Fragment} = wp.element;

/**
 * Internal dependencies
 */
import InspectorControls from "./inspector-controls";
import FoodMenuPreview from "./preview";

import * as images from '../../images';

const FoodMenuEdit = function( props ) {
	const { attributes } = props;
	const { example } = attributes;
	return (
		example ?
		<Fragment>
			<FoodMenuPreview {...props} />
			<InspectorControls {...props} />
		</Fragment> : images.foodMenu
	);
};

export default FoodMenuEdit;
