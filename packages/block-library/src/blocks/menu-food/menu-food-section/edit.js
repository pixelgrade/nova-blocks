/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';

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

export default FoodMenuSectionEdit;
