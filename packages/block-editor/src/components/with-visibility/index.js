import { useContext } from "@wordpress/element";
import ControlsVisibilityContext from '../../filters/with-controls-visibility/context';

const withVisibility = ( id, defaultValue = true ) => {
  return OriginalComponent => {
    return props => {
      const visibilityContext = useContext( ControlsVisibilityContext );
      const config = visibilityContext[ id ];
      const fallbackValue = typeof config === "undefined" ? defaultValue : false;

      if ( fallbackValue || config === true ) {
        return <OriginalComponent { ...props } />
      }

      return null;
    }
  }
}

export default withVisibility;
