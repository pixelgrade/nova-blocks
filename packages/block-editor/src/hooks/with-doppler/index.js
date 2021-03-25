import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from '@wordpress/compose';

import withDoppler from "./with-doppler";
import withDopplerControls from "./with-doppler-controls";
import withDopplerProvider from "./with-doppler-provider";
import withDopplerContext from "./with-doppler-context";

export {
  withDoppler,
  withDopplerControls,
  withDopplerContext,
  withDopplerProvider,
}

import attributes from './attributes.json';

const blocksWithDoppler = [
  'novablocks/hero',
  'novablocks/slideshow',
  'novablocks/google-map',
];

const addDoppler = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    if ( ! blocksWithDoppler.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    const WrappedComponent = withDoppler( OriginalComponent );

    return <WrappedComponent { ...props } />
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler', addDoppler );

const blocksWithDopplerControls = [
  'novablocks/hero',
  'novablocks/slideshow',
  'novablocks/google-map',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

const addDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    if ( ! blocksWithDopplerControls.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    const WrappedComponent = withDopplerControls( OriginalComponent );

    return <WrappedComponent { ...props } />
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler-controls', addDopplerControls );

const blocksWithDopplerAttributes = [
  'novablocks/hero',
  'novablocks/slideshow',
  'novablocks/google-map',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

function addDopplerAttributes( block ) {

  if ( ! blocksWithDopplerAttributes.includes( block.name ) ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/add-doppler-attributes', addDopplerAttributes );
