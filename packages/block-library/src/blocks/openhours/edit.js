import OpenHoursPreview from "./preview";
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';

const OpenHours = function( props ) {
	return (
		<Fragment>
			<InspectorControls { ...props }/>
			<OpenHoursPreview { ...props }/>
		</Fragment>
	);
};

export default OpenHours;
