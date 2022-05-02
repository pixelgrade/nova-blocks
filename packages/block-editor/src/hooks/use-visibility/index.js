import { useContext } from "@wordpress/element";
import ControlsVisibilityContext from '../../filters/with-controls-visibility/context';

const useVisibility = ( id, defaultValue = true ) => {
  const visibilityContext = useContext( ControlsVisibilityContext );
  const config = visibilityContext[ id ];
  const fallbackValue = typeof config === "undefined" ? defaultValue : false;

  if ( fallbackValue || config === true ) {
    return true
  }

  return false;
};

export default useVisibility;
