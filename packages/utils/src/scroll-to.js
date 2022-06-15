import { linear } from "@novablocks/easings";

// scrollTargetY: the target scrollY property of the window
// speed: time in pixels per second
// easing: easing equation to use
export const scrollTo = ( element, scrollTargetY, speed = 2000, easing = linear, onStart = () => {}, onEnd = () => {} ) => {
  const scrollY = window.scrollY;
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max( .1, Math.min( Math.abs( scrollY - scrollTargetY ) / speed, .8 ) );

  // add animation loop
  function tick() { 
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easing( p );

    if ( p < 1 ) {
      element.scrollTo( 0, scrollY + ( ( scrollTargetY - scrollY ) * t ) );
      window.requestAnimationFrame( tick );
    } else {
      element.scrollTo( 0, scrollTargetY );

      if ( typeof onEnd === "function" ) {
        onEnd();
      }
    }
  }

  if ( typeof onStart === "function" ) {
    onStart();
  }

  tick();
}
