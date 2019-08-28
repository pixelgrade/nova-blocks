/**
 * Internal dependencies
 */

import FoodMenuItemPreview from './preview';
import InspectorControls from "./inspector-controls";
import { AlignmentToolbar } from '../../components/alignment-controls';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;

const {
	BlockControls
} = wp.blockEditor;

const FoodMenuItem =function( props ) {
	return (
		<Fragment>
			<FoodMenuItemPreview { ...props }/>
			<InspectorControls { ...props } />
			<BlockControls>
				<AlignmentToolbar { ...props } />
			</BlockControls>
		</Fragment>
	);
};

export default FoodMenuItem;
