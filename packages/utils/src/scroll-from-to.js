import { linear } from "@novablocks/easings";

export const scrollFromTo = ( element, scrollStart, scrollEnd, speed = 2000, easing = linear, onStart = () => {}, onEnd = () => {} ) => {
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max( .1, Math.min( Math.abs( scrollStart - scrollEnd ) / speed, .8 ) );

  // add animation loop
  function tick() { 
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easing( p );

    if ( p < 1 ) {
      element.scrollTo( 0, scrollStart + ( ( scrollEnd - scrollStart ) * t ) );
      window.requestAnimationFrame( tick );
    } else {
      element.scrollTo( 0, scrollEnd );

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
