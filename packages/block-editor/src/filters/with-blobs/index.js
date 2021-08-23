import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { select } from '@wordpress/data';

import attributes from "./attributes.json";

import InspectorControls from './inspector-controls';

const withBlobsControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.blobs ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <InspectorControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  };
}, 'withBlobsControls' );

addFilter( 'editor.BlockEdit', 'novablocks/with-blobs-controls', withBlobsControls );

function withBlobsAttributes( settings ) {

  if ( ! settings?.supports?.novaBlocks?.blobs ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/with-blobs-attributes', withBlobsAttributes );


