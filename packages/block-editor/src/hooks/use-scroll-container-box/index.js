import { useCallback, useEffect, useState } from "@wordpress/element";
import { useResizeObserver } from "../index";

const useScrollContainerBox = ( element ) => {
  const [ box, setBox ] = useState( null );
  const [ setNode, entry ] = useResizeObserver();

  const updateBox = useCallback( () => {
    setBox( element.getBoundingClientRect() );
  }, [ element ] );

  useEffect( () => {
    if ( element ) {
      setNode( element );
    }
  }, [ element ] );

  useEffect( () => {
    if ( !! element ) {
      setBox( element.getBoundingClientRect() );
    }
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

  return box;
}

export default useScrollContainerBox;
