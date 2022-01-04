import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, useEffect } from "@wordpress/element";

import Controls from "./controls";

export const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  return ( props ) => {

    const { setControlsVisibility } = props;

    useEffect( () => {
      setControlsVisibility( {
        'emphasis-area': false,
        'color-signal-settings': false,
        'palette-picker': false,
      } );
    }, [] );

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
