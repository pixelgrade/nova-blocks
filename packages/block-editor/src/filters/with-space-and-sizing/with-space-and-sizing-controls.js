import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, useState } from "@wordpress/element";

import { useSupports } from "../../hooks";
import ControlsVisibilityContext from '../../context';

import Controls from "./controls";

const withSpaceAndSizingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const [ context, setContext ] = useState( {} );

    if ( supports?.novaBlocks?.spaceAndSizing !== true && supports?.novaBlocks?.spaceAndSizing?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }


    return (
      <Fragment>
        <ControlsVisibilityContext.Provider value={ context }>
          <Controls { ...props } />
        </ControlsVisibilityContext.Provider>
        <OriginalComponent { ...props } setSpaceAndSizingControlsVisibility={ setContext } />
      </Fragment>
    )
  };
}, 'withSpaceAndSizingControls' );

export default withSpaceAndSizingControls;
