/**
 * Internal dependencies
 */
import FoodMenuItemPreview from './preview';
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
const {
	Fragment
} = wp.element;

const FoodMenuItem = function( props ) {
	return (
		<Fragment>
			<FoodMenuItemPreview {...props}/>
			<InspectorControls {...props} />
		</Fragment>
	);
};

export default FoodMenuItem;
