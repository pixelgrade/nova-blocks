import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";

import InspectorControls from './inspector-controls';
import attributes from "./attributes.json";

const blocksWithElementsVisibilitySection = [
  'novablocks/posts-collection',
  'novablocks/supernova',
  'novablocks/supernova-item',
]

const withElementsVisibilityControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    if ( ! blocksWithElementsVisibilitySection.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    );
  };
} );
addFilter( 'editor.BlockEdit', 'novablocks/with-elements-visibility-controls', withElementsVisibilityControls );

const blocksWithElementsVisibilityAttributes = [
  'novablocks/posts-collection',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

function addElementsVisibilityAttributes( block ) {

  if ( ! blocksWithElementsVisibilityAttributes.includes( block.name ) ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/add-elements-visibility-attributes', addElementsVisibilityAttributes );
