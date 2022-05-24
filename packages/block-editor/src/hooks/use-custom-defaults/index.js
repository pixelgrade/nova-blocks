import { useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

const useCustomDefaults = ( clientId, attributes, getNewDefaults ) => {
  const { defaultsGenerated } = attributes;
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

  return useEffect( () => {
    if ( ! defaultsGenerated ) {
      getNewDefaults( attributes ).then( defaults => {
        updateBlockAttributes( clientId, {
          ...defaults,
          defaultsGenerated: true
        } );
      } )
    }
  }, [ clientId, defaultsGenerated ] );
}

export default useCustomDefaults;
