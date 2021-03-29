import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import { EmphasisLevelControls } from "../../index";
import attributes from "./attributes.json";

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

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes
    }
  };

}
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addEmphasisLevelAttribute );
