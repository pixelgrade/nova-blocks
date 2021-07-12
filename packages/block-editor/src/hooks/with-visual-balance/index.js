import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import InspectorControls from './inspector-controls';
import attributes from './attributes.json';

const blocksWithVisualBalanceInspectorControls = [
  'novablocks/media',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

const withEmphasisLevelControls = createHigherOrderComponent(OriginalComponent => {

  return ( props ) => {

    if ( ! blocksWithVisualBalanceInspectorControls.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    );
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-ehphasis-level-controls', withEmphasisLevelControls );


const blocksWithVisualBalanceAttributes = [
  'novablocks/media',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

function addVisualBalanceAttributes( block ) {

  if ( ! blocksWithVisualBalanceAttributes.includes( block.name ) ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addVisualBalanceAttributes );
