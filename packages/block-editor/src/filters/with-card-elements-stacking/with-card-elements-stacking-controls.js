import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import CardElementsStackingInspectorControls from "./inspector-controls";
import { useSupports } from "../../hooks";

const withCardElementsStackingControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.cardElementsStacking !== true && supports?.novaBlocks?.cardElementsStacking?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <CardElementsStackingInspectorControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
}, 'withCardElementsStackingControls' );

export default withCardElementsStackingControls;
