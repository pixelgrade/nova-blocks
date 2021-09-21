import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "../../hooks";
import Controls from "./controls";

const withEmphasisAreaControl = createHigherOrderComponent( OriginalComponent => {

  return (props) => {

    const supports = useSupports(props.name);
    const colorSignalSupport = supports?.novaBlocks?.colorSignal;

    if ( colorSignalSupport !== true && colorSignalSupport?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
       <Fragment>
        <OriginalComponent {...props}/>
        <Controls {...props} />
       </Fragment>
    )
  }
}, 'WithEmphasisAreaControl')

export default withEmphasisAreaControl;
