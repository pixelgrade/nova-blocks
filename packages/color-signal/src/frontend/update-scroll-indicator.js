import { addClass, getColorSignalClassnames, removeClass } from "@novablocks/utils";

export const updateScrollIndicator = () => {
  const blocks = document.querySelectorAll( '[data-scroll-indicator-block]' );
  const blocksArray = [ ...blocks ].filter( block => !! block.dataset.scrollIndicatorBlock );

  blocksArray.forEach( block => {
    const indicator = block.querySelector( '.nb-scroll-indicator:not(.nb-scroll-indicator--middle)' );
    const nextElement = block.nextElementSibling;

    if ( ! nextElement ) {
      applySiteColorSignal( indicator );
      return;
    }

    const nextElementStyles = window.getComputedStyle( nextElement );
    const marginTop = nextElementStyles.getPropertyValue( 'margin-top' );

    if ( parseInt( marginTop, 10 ) !== 0 ) {
      applySiteColorSignal( indicator );
      return;
    }

    if ( !! indicator && !! nextElement?.dataset?.colorSignal ) {
      const attributes = nextElement.dataset;
      const classNamesToAdd = getColorSignalClassnames( attributes, true );
      const classNamesToRemove = [ ...indicator.classList ].filter( className => {
        return className.indexOf( 'sm-palette-' ) > -1 ||
               className.indexOf( 'sm-variation-' ) > -1 ||
               className.indexOf( 'sm-color-signal-' ) > -1;
      } ).join( " " );

      removeClass( indicator, classNamesToRemove );
      addClass( indicator, classNamesToAdd );
    }

  } );
}
