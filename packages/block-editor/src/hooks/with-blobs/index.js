import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { select } from '@wordpress/data';

import attributes from "./attributes.json";

const blocksWithBlobs = [
  'novablocks/media',
  'novablocks/advanced-gallery',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

import InspectorControls from './inspector-controls';

const withBlobControls = createHigherOrderComponent(OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! blocksWithBlobs.includes( props.name ) && ! supports?.novaBlocks?.blobs ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <InspectorControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-blob-controls', withBlobControls );


function addBlobAttributes( block ) {

  if ( ! blocksWithBlobs.includes( block ) && ! block?.supports?.novaBlocks?.blobs ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addBlobAttributes );


