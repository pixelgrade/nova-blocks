import { EmphasisLevelControls } from "../../index";

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

const enableEmphasisLevelControls = [
	'novablocks/media',
	'novablocks/cards-collection',
	'novablocks/posts-collection',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

const withEmphasisLevelControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! enableEmphasisLevelControls.includes( props.name ) ) {
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
addFilter( 'editor.BlockEdit', 'novablocks/with-ehphasis-level-controls', withEmphasisLevelControls );

function addEmphasisLevelAttribute( block ) {

	if ( ! enableEmphasisLevelControls.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes === 'undefined' ) {
		block.attributes = {};
	}

	block.attributes = Object.assign( block.attributes, {
		contentStyle: {
			type: 'string',
			default: block.name === 'novablocks/media' ? 'moderate' : 'basic',
		},
		emphasisByContrast: {
			type: 'number',
			default: 1
		}
	} );

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addEmphasisLevelAttribute );
