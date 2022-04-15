import { useEffect } from "@wordpress/element";

const useOnScroll = ( element, onScroll ) => {

  useEffect( () => {
    if ( element ) {
      element.addEventListener( 'scroll', onScroll );
    }

    return (
      () => {
        if ( element ) {
          element.removeEventListener( 'scroll', onScroll );
        }
      }
    )
  }, [ element ] );
};

export default useOnScroll;
