import { trackTeardown } from './frontend-lifecycle';

/**
 * Call `callback( scrollY, lastScrollY )` at most once per animation frame,
 * and only after a scroll or resize.
 *
 * Returns a stop function that removes the listeners and ends the frame
 * loop. When called inside a frontend module (see frontend-lifecycle.js) the
 * stop function is also attached to that module's teardown, so AJAX page
 * transitions never pile up loops or listeners.
 */
export const onScrollRAF = ( callback ) => {
  let scrollY = window.pageYOffset;
  let lastScrollY = -1;
  let frameRendered = false;
  let frameId = null;
  let stopped = false;

  const onScroll = () => {
    scrollY = window.pageYOffset;
    frameRendered = false;
  };

  const onResize = () => {
    frameRendered = false;
  };

  window.addEventListener( 'scroll', onScroll );
  window.addEventListener( 'resize', onResize );

  const tick = () => {
    if ( stopped ) {
      return;
    }

    if ( ! frameRendered ) {
      callback( scrollY, lastScrollY );
      lastScrollY = scrollY;
      frameRendered = true;
    }

    frameId = requestAnimationFrame( tick );
  };

  frameId = requestAnimationFrame( tick );

  const stop = () => {
    stopped = true;
    window.removeEventListener( 'scroll', onScroll );
    window.removeEventListener( 'resize', onResize );

    if ( frameId !== null && typeof cancelAnimationFrame === 'function' ) {
      cancelAnimationFrame( frameId );
    }

    frameId = null;
  };

  return trackTeardown( stop );
};
