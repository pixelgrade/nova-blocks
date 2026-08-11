/**
 * Internal dependencies
 */
import FoodMenuItemPreview from './preview';
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const FoodMenuItem = function( props ) {
	const blockProps = useBlockProps();

	return (
		<Fragment>
			<div { ...blockProps }>
				<FoodMenuItemPreview {...props}/>
			</div>
			<InspectorControls {...props} />
		</Fragment>
	);
};

export default FoodMenuItem;
