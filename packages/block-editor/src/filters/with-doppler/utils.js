import { findParents } from "@novablocks/utils";

export const createBlockObservers = ( container, callback ) => {
  const observers = [];

  if ( ! container ) {
    return observers;
  }

  findParents( container, '.wp-block' ).map( block => {

    if ( window.MutationObserver ) {
      const mutationObserver = new MutationObserver( movements => {
        movements.forEach( movement => {
          if ( 'style' === movement.attributeName ) {
            if ( movement.oldValue && movement.oldValue.includes( 'transform: translate3d' ) ) {
              callback();
            }
          }
        } );
      } );

      mutationObserver.observe( block, {
        attributes: true,
        attributeOldValue: true,
        childList: false,
        subtree: false,
      } );

      observers.push( mutationObserver );
    }

    if ( window.ResizeObserver ) {

      const resizeObserver = new ResizeObserver( () => {
        callback();
      } );

      resizeObserver.observe( block );

      observers.push( resizeObserver );
    }
  } );

  return observers;
}

export const getParallaxFocalPointImage = ( media ) => {
  let mediaType = media?.type;
  let parallaxFocalPointImage = false;

  if ( mediaType === 'image' ) {
    parallaxFocalPointImage = {
      url: media?.sizes?.novablocks_large?.url || media?.sizes?.novablocks_huge?.url || media?.url,
      width: 218,
      height: 170
    }
  }

  if ( mediaType === 'video' ) {
    parallaxFocalPointImage = {
      url: '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png',
      width: 218,
      height: 170,
    };
  }

  return parallaxFocalPointImage;
}

export const scrollFromTo = ( scrollContainer, start, end, easing = x => x, speed = 1000, onStart = () => {}, onEnd = () => {} ) => {

  const length = end - start;
  const duration = Math.abs( length ) * 1000 / speed;
  const startTime = Date.now();

  function updateScrollTopLoop() {
    const currentTime = Date.now();
    const timePassed = currentTime - startTime;
    const progress = timePassed / duration;

    scrollContainer.scrollTop = start + length * easing( progress );
  }

  scrollContainer.style.pointerEvents = 'none';
  const interval = setInterval( updateScrollTopLoop, 0 );

  onStart();

  setTimeout(() => {
    clearInterval( interval );
    scrollContainer.scrollTop = start + length;
    scrollContainer.style.removeProperty( 'pointer-events' );

    if ( typeof onEnd === "function" ) {
      onEnd();
    }
  }, duration );
}
