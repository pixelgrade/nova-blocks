import { useCallback, useEffect, useState } from "@wordpress/element";
import { useResizeObserver } from "../index";

const useScrollContainerBox = ( element ) => {
  const [ box, setBox ] = useState( null );
  const [ setNode, entry ] = useResizeObserver();

  setNode( element );

  const updateBox = useCallback( () => {
    setBox( element.getBoundingClientRect() );
  }, [] );

  useEffect( () => {
    setBox( element.contentRect );
  }, [ entry ] )

  useEffect( () => {

    if ( element ) {
      element.addEventListener( 'scroll', updateBox );
    }

    return (
      () => {
        if ( element ) {
          element.removeEventListener( 'scroll', updateBox );
        }
      }
    )
  }, [] );

  return [ box, scrollHeight ];
}

export default useScrollContainerBox;
