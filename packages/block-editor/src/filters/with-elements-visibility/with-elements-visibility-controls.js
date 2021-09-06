import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";
import { useSupports } from "../../hooks";

const withElementsVisibilityControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.elementsVisibility !== true && supports?.novaBlocks?.elementsVisibility?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
}, 'withElementsVisibilityControls' );

export default withElementsVisibilityControls;
