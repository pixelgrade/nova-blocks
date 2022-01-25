const scrollFromTo = ( scrollContainer, start, end, easing = x => x, speed = 1000, onStart = () => {}, onEnd = () => {} ) => {

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
};

export default scrollFromTo;
