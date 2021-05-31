import attributes from "./grid-generator-attributes";
import GridGeneratorControls from "./grid-generator-controls";

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

const enableGridGeneratorControls = [
	'novablocks/posts-collection',
	'novablocks/supernova',
];

const withGridGeneratorControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! enableGridGeneratorControls.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<GridGeneratorControls { ...props } />
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-grid-generator-controls', withGridGeneratorControls );

function addGridGeneratorAttributes( block ) {

	const newAttributes = JSON.parse( JSON.stringify( attributes ) );

	if ( ! enableGridGeneratorControls.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes === 'undefined' ) {
		block.attributes = {};
	}

//  @todo supernova default should be 'classic' check alternate solutions
//	if ( 'novablocks/posts-collection' === block.name ) {
//    newAttributes.layoutStyle.default = 'parametric';
//  }

	block.attributes = Object.assign( block.attributes, newAttributes );

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-grid-generator-attributes', addGridGeneratorAttributes );
