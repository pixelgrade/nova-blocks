import domReady from "@wordpress/dom-ready";

const TRANSITION_DURATION = 280;
const TRANSITION_EASING = 'cubic-bezier(0.33, 1, 0.68, 1)';
const toggleTimers = new WeakMap();

const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
};

const clearToggleTimer = ( block ) => {
  const timerId = toggleTimers.get( block );

  if ( timerId ) {
    window.clearTimeout( timerId );
    toggleTimers.delete( block );
  }
};

const resetAnimatedStyles = ( block ) => {
  block.style.height = '';
  block.style.opacity = '';
  block.style.overflow = '';
  block.style.transition = '';
  block.style.willChange = '';
  block.style.marginTop = '';
  block.style.marginBottom = '';
};

const slideDown = ( block ) => {
  clearToggleTimer( block );
  block.classList.add( 'is-visible' );

  if ( prefersReducedMotion() ) {
    resetAnimatedStyles( block );
    return;
  }

  const computedStyle = window.getComputedStyle( block );
  const targetMarginTop = parseFloat( computedStyle.marginTop ) || 0;
  const targetMarginBottom = parseFloat( computedStyle.marginBottom ) || 0;

  block.style.transition = `height ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, opacity ${ TRANSITION_DURATION }ms ease, margin-top ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, margin-bottom ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }`;
  block.style.overflow = 'hidden';
  block.style.willChange = 'height, opacity, margin-top, margin-bottom';
  block.style.height = '0px';
  block.style.opacity = '0';
  block.style.marginTop = '0px';
  block.style.marginBottom = '0px';

  // Force layout before animating to the expanded height.
  block.offsetHeight;

  const targetHeight = block.scrollHeight;
  block.style.height = `${ targetHeight }px`;
  block.style.opacity = '1';
  block.style.marginTop = `${ targetMarginTop }px`;
  block.style.marginBottom = `${ targetMarginBottom }px`;

  const timerId = window.setTimeout( () => {
    resetAnimatedStyles( block );
    toggleTimers.delete( block );
  }, TRANSITION_DURATION + 50 );

  toggleTimers.set( block, timerId );
};

const slideUp = ( block ) => {
  clearToggleTimer( block );

  if ( prefersReducedMotion() ) {
    block.classList.remove( 'is-visible' );
    resetAnimatedStyles( block );
    return;
  }

  const computedStyle = window.getComputedStyle( block );
  const currentMarginTop = parseFloat( computedStyle.marginTop ) || 0;
  const currentMarginBottom = parseFloat( computedStyle.marginBottom ) || 0;

  block.style.transition = `height ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, opacity ${ TRANSITION_DURATION }ms ease, margin-top ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }, margin-bottom ${ TRANSITION_DURATION }ms ${ TRANSITION_EASING }`;
  block.style.overflow = 'hidden';
  block.style.willChange = 'height, opacity, margin-top, margin-bottom';
  block.style.height = `${ block.scrollHeight }px`;
  block.style.opacity = '1';
  block.style.marginTop = `${ currentMarginTop }px`;
  block.style.marginBottom = `${ currentMarginBottom }px`;

  // Force layout before collapsing.
  block.offsetHeight;

  block.style.height = '0px';
  block.style.opacity = '0';
  block.style.marginTop = '0px';
  block.style.marginBottom = '0px';

  const timerId = window.setTimeout( () => {
    block.classList.remove( 'is-visible' );
    resetAnimatedStyles( block );
    toggleTimers.delete( block );
  }, TRANSITION_DURATION + 50 );

  toggleTimers.set( block, timerId );
};

domReady( () => {
  const blocks = Array.from( document.querySelectorAll( '.nb-facetwp-filter' ) );
  const hiddenBlocks = blocks.filter( block => block.classList.contains( 'nb-facetwp-filter--section-type-hidden' ) );

  blocks.forEach( block => {
    const toggles = block.querySelectorAll( '.nb-facetwp-toggle' );

    toggles.forEach( toggle => {
      if ( toggle.dataset.novablocksFacetToggleBound === "true" ) {
        return;
      }

      toggle.dataset.novablocksFacetToggleBound = "true";
      toggle.dataset.toggled = "false";

      toggle.addEventListener( 'click', () => {
        const shouldOpen = toggle.dataset.toggled !== "true";
        toggle.dataset.toggled = shouldOpen ? "true" : "false";

        hiddenBlocks.forEach( hiddenBlock => {
          if ( shouldOpen ) {
            slideDown( hiddenBlock );
            return;
          }

          slideUp( hiddenBlock );
        } );
      } );
    } );
  } );
} );
