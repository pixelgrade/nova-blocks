import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from "@wordpress/data";

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
import altAttributes from './attributes-alt.json';

const addDoppler = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.doppler ) {
      return <OriginalComponent { ...props } />
    }

    const WrappedComponent = withDoppler( OriginalComponent );

    return <WrappedComponent { ...props } />
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler', addDoppler );

const addDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.doppler ) {
      return <OriginalComponent { ...props } />
    }

    const WrappedComponent = withDopplerControls( OriginalComponent );

    return <WrappedComponent { ...props } />
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler-controls', addDopplerControls );

const addDopplerAttributes = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.doppler ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes,
      ...( !! settings?.supports?.novaBlocks?.doppler?.altAttributes ? altAttributes : {} )
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-doppler-attributes', addDopplerAttributes );
