const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;

const { withSelect } = wp.data;

const enableInnerBlocks = [
	'novablocks/menu-food',
	'novablocks/menu-food-section',
	'novablocks/cards-collection'
];

const withInnerBlocks = withSelect( ( select, props ) => {
	const { clientId } = props;
	const { getBlock } = select( 'core/block-editor' );
	const parentBlock = getBlock( clientId );
	const innerBlocks = parentBlock.innerBlocks;

	return {
		innerBlocks,
		...props
	}
} );

const withInnerBlocksComponent = createHigherOrderComponent( OriginalComponent => {

	const BetterComponent = withInnerBlocks(OriginalComponent);

	return ( props ) => {

		if ( ! enableInnerBlocks.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return <BetterComponent { ...props } />;
	};
});

addFilter( 'editor.BlockEdit', 'novablocks/with-inner-blocks-component', withInnerBlocksComponent );
