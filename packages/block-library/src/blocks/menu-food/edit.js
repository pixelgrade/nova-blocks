/**
 * WordPress dependencies
 */
import {
	Fragment
 } from '@wordpress/element';

import {
	createHigherOrderComponent
 } from '@wordpress/compose';

import {
	select,
	dispatch,
 } from '@wordpress/data';

/**
 * Internal dependencies
 */
import InspectorControls from "./inspector-controls";
import FoodMenuPreview from "./preview";

const FoodMenuEdit = function( props ) {
	return (
		<Fragment>
			<FoodMenuPreview {...props} />
			<InspectorControls {...props} />
		</Fragment>
	);
};

const withMenuVisibilityAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( 'novablocks/menu-food' === props.name ) {
			const { clientId, attributes } = props;
			const { getBlock } = select( 'core/block-editor' );
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const menu = getBlock( clientId );
			const sections = menu?.innerBlocks;
			const newAttributes = (
				( { showPrices, showDescription } ) => (
					{ showPrices, showDescription }
				)
			)( attributes );

			if ( Array.isArray( sections ) ) {
				sections.forEach( block => {
					if ( Array.isArray( block.innerBlocks ) ) {
						block.innerBlocks.forEach( innerBlock => {
							updateBlockAttributes( innerBlock.clientId, newAttributes );
						} );
					}
				} );
			}
		}
		return <BlockListBlock { ...props } />
	};
}, 'withCollectionVisibilityAttributes' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-menu-visibility-attributes', withMenuVisibilityAttributes );

export default FoodMenuEdit;
