import { useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";

const shouldGenerateDefaultAttributes = ( attributes ) => ! attributes.defaultsGenerated;

const useCustomDefaults = ( clientId, attributes, getNewDefaults, shouldGenerateDefaults = shouldGenerateDefaultAttributes ) => {
  const { updateBlockAttributes, __unstableMarkNextChangeAsNotPersistent } = useDispatch( 'core/block-editor' );

  return useEffect( () => {
    if ( shouldGenerateDefaults( attributes ) ) {
      getNewDefaults( attributes ).then( defaults => {
        __unstableMarkNextChangeAsNotPersistent();
        updateBlockAttributes( clientId, {
          ...defaults,
          defaultsGenerated: true
        } );
      } )
    }
  }, [ clientId, attributes, getNewDefaults, shouldGenerateDefaults, updateBlockAttributes, __unstableMarkNextChangeAsNotPersistent ] );
}

export default useCustomDefaults;
