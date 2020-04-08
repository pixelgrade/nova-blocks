import OpenHoursPreview from "./preview";
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
const {Fragment} = wp.element;

const OpenHours = function(props) {
	return (
		<Fragment>
			<InspectorControls {...props}/>
			<OpenHoursPreview {...props}/>
		</Fragment>
	);
}

export default OpenHours;
