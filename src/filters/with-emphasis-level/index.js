import EmphasisLevelControls from "../../components/emphasis-level-controls";

const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;

const enableFontSizeControlOnBlocks = [
	'novablocks/media',
	'novablocks/cards-collection',
	'novablocks/posts-collection',
];

const withEmphasisLevelControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! enableFontSizeControlOnBlocks.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<EmphasisLevelControls { ...props } />
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-ehpasis-level-controls', withEmphasisLevelControls );

function addEmphasisLevelAttribute( block ) {

	if ( ! enableFontSizeControlOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes === 'undefined' ) {
		block.attributes = {};
	}

	block.attributes = Object.assign( block.attributes, {
		blockStyle: {
			type: 'string',
			default: 'basic',
		},
		contentStyle: {
			type: 'string',
			default: block.name === 'novablocks/media' ? 'moderate' : 'basic',
		},
		emphasisByContrast: {
			number: 'number',
			default: 1
		}
	});

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addEmphasisLevelAttribute );
