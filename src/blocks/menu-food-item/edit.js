/**
 * Internal dependencies
 */
import FoodMenuItemPreview from './preview';
import InspectorControls from "./inspector-controls";

/**
 * WordPress dependencies
 */
const {Fragment} = wp.element;

const {
	createHigherOrderComponent
} = wp.compose;

const {
	select,
	dispatch,
} = wp.data;

const FoodMenuItem = function( props ) {
	return (
		<Fragment>
			<FoodMenuItemPreview {...props}/>
			<InspectorControls {...props} />
		</Fragment>
	);
};

const withMenuVisibilityAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( 'novablocks/menu-food-item' === props.name ) {
			const { clientId } = props;
			const { getBlock, getBlockParentsByBlockName } = select( 'core/block-editor' );

			const parents = getBlockParentsByBlockName( clientId, 'novablocks/menu-food' );

			if ( ! parents.length ) {
				return;
			}

			const parentClientId = parents[0];
			const parentBlock = getBlock( parentClientId );

			const newAttributes = (
				( { showPrices, showDescription } ) => (
					{ showPrices, showDescription }
				)
			)( parentBlock.attributes );

			console.log( newAttributes );

			dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, newAttributes );
		}
		return <BlockListBlock { ...props } />
	};
}, 'withCollectionVisibilityAttributes' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-menu-visibility-attributes', withMenuVisibilityAttributes );

export default FoodMenuItem;
