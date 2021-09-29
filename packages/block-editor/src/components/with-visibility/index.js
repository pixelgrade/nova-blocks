import { useContext } from "@wordpress/element";
import ControlsVisibilityContext from '../../filters/with-controls-visibility/context';

const withVisibility = ( id ) => {
  return OriginalComponent => {
    return props => {
      const visibilityContext = useContext( ControlsVisibilityContext );
      const config = visibilityContext[ id ];

      if ( typeof config === "undefined" || config === true || config?.condition === true ) {
        return <OriginalComponent { ...props } />
      }

      return null;
    }
  }
}

export default withVisibility;
