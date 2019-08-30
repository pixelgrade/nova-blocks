import OpenTablePreview from "./preview";

import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
const {Fragment} = wp.element;

const OpenTable = function( props ) {
	return(
		<Fragment>
			<OpenTablePreview {...props}/>
			<InspectorControls {...props}/>
		</Fragment>
	);
};

export default OpenTable;
