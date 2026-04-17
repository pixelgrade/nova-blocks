import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";
import { useSupports } from "../../hooks";

const withCardDescriptionSizeControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.cardDescriptionSize !== true && supports?.novaBlocks?.cardDescriptionSize?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
}, 'withCardDescriptionSizeControls' );

export default withCardDescriptionSizeControls;
