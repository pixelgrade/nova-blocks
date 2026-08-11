/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import FoodMenuSectionPreview from "./preview";

const FoodMenuSectionEdit = function( props ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<FoodMenuSectionPreview {...props}/>
		</div>
	);
};

export default FoodMenuSectionEdit;
