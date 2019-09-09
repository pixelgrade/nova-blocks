import OpenTablePreview from "./preview";
import InspectorControls from "./inspector-controls";

import * as images from '../../images';

/**
 * WordPress dependencies
 */
const {Fragment} = wp.element;

const OpenTable = function( props ) {
	const { attributes } = props;
	const { example } = attributes;
	return (
		example ?
		<Fragment>
			<OpenTablePreview {...props}/>
			<InspectorControls {...props}/>
		</Fragment> : images.openTable
	);
};

export default OpenTable;
