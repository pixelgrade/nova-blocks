/**
 * WordPress dependencies
 */
import FoodMenuPreview from "./preview";

const {Fragment} = wp.element;

const FoodMenuEdit = function( props ) {
	return (
		<Fragment>
			<FoodMenuPreview {...props}/>
		</Fragment>
	);
};

export default FoodMenuEdit;
