import { createHigherOrderComponent } from "@wordpress/compose";
import { useCallback, useRef, useState } from "@wordpress/element";

import ControlsVisibilityContext from './context';
import { addFilter } from "@wordpress/hooks";

const withControlsVisibility = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const [ context, setContext ] = useState( {} );
    const contextRef = useRef( context );
    contextRef.current = context;

    const stableSetControlsVisibility = useCallback( ( newContext ) => {
      const current = contextRef.current;
      const merged = Object.assign( {}, current, newContext );

      // Only update state if a value actually changed — prevents
      // unnecessary re-renders of all context consumers.
      const changed = Object.keys( merged ).some(
        key => merged[ key ] !== current[ key ]
      );

      if ( changed ) {
        setContext( merged );
      }
    }, [] );

    return (
      <ControlsVisibilityContext.Provider value={ context }>
        <OriginalComponent { ...props } setControlsVisibility={ stableSetControlsVisibility } />
      </ControlsVisibilityContext.Provider>
    )
  };
}, 'withControlsVisibility' );

addFilter( 'editor.BlockEdit', 'novablocks/with-controls-visibility', withControlsVisibility, Number.MAX_SAFE_INTEGER );

