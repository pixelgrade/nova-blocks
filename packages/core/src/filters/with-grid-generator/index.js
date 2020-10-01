import attributes from "./attributes";
import { GridGenerator } from "@novablocks/components";

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

const enableGridGeneratorControls = [
	'novablocks/posts-collection',
];

const withGridGeneratorControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! enableGridGeneratorControls.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return (
			<Fragment>
				<OriginalComponent { ...props } />
				<GridGenerator.Controls { ...props } />
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-grid-generator-controls', withGridGeneratorControls );

function addGridGeneratorAttributes( block ) {

	if ( ! enableGridGeneratorControls.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes === 'undefined' ) {
		block.attributes = {};
	}

	block.attributes = Object.assign( block.attributes, attributes );

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addGridGeneratorAttributes );
