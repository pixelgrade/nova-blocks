import { useLayoutEffect } from "@wordpress/element";

const useOnScroll = ( element, onScroll ) => {

  useLayoutEffect( () => {
    const scrollTarget = element?.ownerDocument?.scrollingElement === element
      ? element.ownerDocument
      : element;

    if ( scrollTarget ) {
      scrollTarget.addEventListener( 'scroll', onScroll );
    }

    return (
      () => {
        if ( scrollTarget ) {
          scrollTarget.removeEventListener( 'scroll', onScroll );
        }
      }
    )
  }, [ element, onScroll ] );
};

export default useOnScroll;
