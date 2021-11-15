import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { useSupports } from "../../hooks";

import Controls from "./controls";

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const { setAttributes, clientId } = props;
    const supports = useSupports( props.name );
    const clientIds = useSelect( 'core/block-editor' ).getClientIdsWithDescendants();

    useEffect( () => {
      if ( clientId === clientIds[0] ) {
        setAttributes( { blockTopSpacing: 0 } );
      }
    }, [ clientId, clientIds ] );

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
