import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import InspectorControls from "./inspector-controls";

const withContentLoaderControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {
    if ( props.name !== 'novablocks/posts-collection' ) {
      return (
        <OriginalComponent { ...props } />
      )
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    )
  }
}, 'withContentLoaderControls' );

export default withContentLoaderControls;
