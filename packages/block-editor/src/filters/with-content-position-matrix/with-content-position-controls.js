import {createHigherOrderComponent} from "@wordpress/compose";
import {Fragment} from "@wordpress/element";
import Controls from "./controls";

import {useSupports} from "../../hooks";

const withContentPositionControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    const supports = useSupports( props.name );

    if ( supports?.novaBlocks?.contentPosition !== true && supports?.novaBlocks?.contentPosition?.controls !== true ) {
      return <OriginalComponent {...props} />
    }

    return (
      <Fragment>
        <Controls {...props} />
        <OriginalComponent {...props} />
      </Fragment>
    )
  }
}, 'withContentPositionControls' );

export default withContentPositionControls;
