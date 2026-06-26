import { useCallback, useEffect, useState } from "@wordpress/element";
import { useResizeObserver } from "../index";

// Mirror the frontend's getConfig() scrollContainerBox (scrolling-effect/frontend/
// utils.js): a box pinned to the top of the scroll container's VIEWPORT, using the
// viewport height — NOT the scroll container element's full (content) height.
//
// Previously this returned element.getBoundingClientRect(), i.e. the whole content
// height (e.g. ~2045px), while the frontend measures the viewport (~900px). That
// made the editor preview over-enlarge the parallax media (~2.37x vs the frontend's
// ~1.25x) and skewed the doppler focal-point/progress interpolation, since both the
// media enlargement (getNewImageHeight) and the scroll progress depend on
// scrollContainerBox.height. The parallax still responds to scroll because the
// provider recomputes containerBox (the block's viewport-relative position) on
// scroll — matching how the frontend works.
const getViewportHeight = ( element ) => {
  const view = element?.ownerDocument?.defaultView;

  return view?.visualViewport?.height
    || view?.innerHeight
    || element?.ownerDocument?.documentElement?.clientHeight
    || 0;
};

const useScrollContainerBox = ( element ) => {
  const [ box, setBox ] = useState( null );
  const [ setNode, entry ] = useResizeObserver();

  const updateBox = useCallback( () => {
    if ( element ) {
      setBox( { top: 0, left: 0, height: getViewportHeight( element ) } );
    }
  }, [ element ] );

  useEffect( () => {
    if ( element ) {
      setNode( element );
      updateBox();
    }
  }, [ element ] );

  useEffect( () => {
    if ( !! element ) {
      updateBox();
    }
  }, [ entry ] );

  useEffect( () => {
    const view = element?.ownerDocument?.defaultView;

    if ( view ) {
      view.addEventListener( 'resize', updateBox );
    }

    return (
      () => {
        if ( view ) {
          view.removeEventListener( 'resize', updateBox );
        }
      }
    )
  }, [ element ] );

  return box;
};

export default useScrollContainerBox;
