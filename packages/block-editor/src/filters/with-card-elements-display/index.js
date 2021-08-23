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
}, 'withElementsVisibilityControls' );

addFilter( 'editor.BlockEdit', 'novablocks/with-elements-visibility-controls', withElementsVisibilityControls );

const blocksWithElementsVisibilityAttributes = [
  'novablocks/posts-collection',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

function withElementsVisibilityAttributes( settings ) {

  if ( ! blocksWithElementsVisibilityAttributes.includes( settings.name ) ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-elements-visibility-attributes', withElementsVisibilityAttributes );
