// Fit text for copies of a fit-text title (e.g. the mobile masthead).
//
// Core's fit-text (WordPress `@wordpress/block-editor/utils/fit-text-frontend`)
// runs through Interactivity API directives, which never hydrate on a node
// cloned after page load. This mirrors core's algorithm: binary-search the
// largest whole-pixel font size whose text still fits the container width.

// Largest integer in [min, max] for which `fits` holds (0 when none does).
export const findLargestFittingSize = ( fits, min = 0, max = 2400 ) => {
  let best = 0;
  let low = min;
  let high = max;

  while ( low <= high ) {
    const mid = Math.floor( ( low + high ) / 2 );

    if ( fits( mid ) ) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return best;
};

export const fitTextToContainer = ( textElement ) => {
  if ( ! textElement ) {
    return 0;
  }

  const container = textElement.parentElement || textElement;
  const style = window.getComputedStyle( textElement );
  const available = container.clientWidth -
    ( parseFloat( style.paddingLeft ) || 0 ) -
    ( parseFloat( style.paddingRight ) || 0 );
  textElement.style.removeProperty( 'font-size' );

  const range = document.createRange();
  range.selectNodeContents( textElement );

  // No layout engine (e.g. tests): leave the stylesheet size in place.
  if ( typeof range.getBoundingClientRect !== 'function' || ! container.clientWidth ) {
    return 0;
  }

  const size = findLargestFittingSize( candidate => {
    textElement.style.fontSize = `${ candidate }px`;
    return textElement.scrollWidth <= container.clientWidth && range.getBoundingClientRect().width <= available;
  } );

  if ( size > 0 ) {
    textElement.style.fontSize = `${ size }px`;
  } else {
    textElement.style.removeProperty( 'font-size' );
  }

  if ( range.detach ) {
    range.detach();
  }

  return size;
};

// Fit now and again whenever the container, the text or its font changes.
export const observeFitText = ( textElement ) => {
  fitTextToContainer( textElement );

  if ( ! textElement?.parentElement ) {
    return () => {};
  }

  // The copy is usually fitted before the web font arrives; the swap changes
  // the text's width without resizing the container, so refit on it.
  const fonts = textElement.ownerDocument?.fonts;
  const refitOnFonts = () => fitTextToContainer( textElement );
  fonts?.addEventListener?.( 'loadingdone', refitOnFonts );
  fonts?.ready?.then( refitOnFonts );

  let observer = null;

  if ( window.ResizeObserver ) {
    let fitting = false;
    observer = new window.ResizeObserver( () => {
      // Our own font-size writes resize the text; ignore that echo.
      if ( fitting ) {
        return;
      }
      fitting = true;
      fitTextToContainer( textElement );
      window.requestAnimationFrame( () => {
        fitting = false;
      } );
    } );

    observer.observe( textElement.parentElement );
  }

  return () => {
    observer?.disconnect();
    fonts?.removeEventListener?.( 'loadingdone', refitOnFonts );
  };
};
