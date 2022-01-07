import { createHigherOrderComponent } from "@wordpress/compose";
import { useState } from "@wordpress/element";

import ControlsVisibilityContext from './context';
import { addFilter } from "@wordpress/hooks";

const withControlsVisibility = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const [ context, setContext ] = useState( {} );

    return (
      <ControlsVisibilityContext.Provider value={ context }>
        <OriginalComponent { ...props } setControlsVisibility={ ( newContext ) => {
          setContext( Object.assign( {}, context, newContext ) );
        } } />
      </ControlsVisibilityContext.Provider>
    )
  };
}, 'withControlsVisibility' );

addFilter( 'editor.BlockEdit', 'novablocks/with-controls-visibility', withControlsVisibility, Number.MAX_SAFE_INTEGER );

