import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import Controls from "./controls";

export const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  return ( props ) => {

    if ( 'core/list' !== props.name ) {
      return (
        <BlockEdit { ...props } />
      );
    }

    return (
      <Fragment>
        <BlockEdit { ...props } />
        <Controls { ...props } />
      </Fragment>
    )
  }
} );
