import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { useBlockTopSpacingIsDisabled, useSupports } from "../../hooks";

import Controls from "./controls";

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const { setAttributes, clientId } = props;
    const supports = useSupports( props.name );
    const isDisabled = useBlockTopSpacingIsDisabled( clientId );

    useEffect( () => {

      if ( isDisabled ) {
        setAttributes( { blockTopSpacing: 0 } );
      }

    }, [ isDisabled ] );

    if ( supports?.novaBlocks?.spaceAndSizing !== true && supports?.novaBlocks?.spaceAndSizing?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }


    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
}, 'withSpaceAndSizingControls' );

export default withSpaceAndSizingControls;
