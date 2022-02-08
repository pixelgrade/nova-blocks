import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";
import Controls from "./controls";
import { useSupports } from "../../hooks";

const withCardElementsVisibilityControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( true !== supports?.novaBlocks?.cardElementsVisibility && true !== supports?.novaBlocks?.cardElementsVisibility?.controls ) {
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

export default withCardElementsVisibilityControls;
