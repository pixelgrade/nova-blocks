import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, useEffect } from "@wordpress/element";

import Controls from "./controls";

export const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  const EnhancedBlockEdit = ( props ) => {
    const { setControlsVisibility } = props;

    useEffect( () => {
      setControlsVisibility( {
        'color-signal-settings': false,
        'palette-picker': false,
      } );
    }, [] );

    return (
      <BlockEdit { ...props } />
    )
  }

  return ( props ) => {

    if ( 'core/list' !== props.name ) {
      return (
        <BlockEdit { ...props } />
      );
    }

    return (
      <Fragment>
        <EnhancedBlockEdit { ...props } />
        <Controls { ...props } />
      </Fragment>
    )
  }
} );
