import { addClass, hasClass, getColorSignalClassnames, removeClass } from "@novablocks/utils";
import { getSiteColorVariation } from "../utils";

export const updateScrollIndicator = () => {
  const blocks = document.querySelectorAll( '[data-scroll-indicator-block]' );
  const blocksArray = [ ...blocks ].filter( block => !! block.dataset.scrollIndicatorBlock );

  blocksArray.forEach( block => {
    const indicators = Array.from( block.querySelectorAll( '.nb-scroll-indicator:not(.nb-scroll-indicator--middle)' ) );
    const nextElement = block.nextElementSibling;

    if ( ! nextElement || ! nextElement.dataset.colorSignal ) {
      indicators.forEach( applySiteColorSignal );
      return;
    }

    const nextElementStyles = window.getComputedStyle( nextElement );
    const marginTop = nextElementStyles.getPropertyValue( 'margin-top' );

    indicators.forEach( indicator => {

      if ( parseInt( marginTop, 10 ) !== 0 ) {
        applySiteColorSignal( indicator );
        return;
      }

      if ( !! indicator && !! nextElement?.dataset?.colorSignal ) {
        const attributes = nextElement.dataset;
        const classNamesToAdd = getColorSignalClassnames( attributes, true ).split( " " ).filter( className => {
          return className.indexOf( 'sm-color-signal-' ) < 0;
        } ).join( " " );
        const classNamesToRemove = [ ...indicator.classList ].filter( className => {
          return className.indexOf( 'sm-palette-' ) > -1 ||
                 className.indexOf( 'sm-variation-' ) > -1 ||
                 className.indexOf( 'sm-color-signal-' ) > -1;
        } ).join( " " );

        removeClass( indicator, classNamesToRemove );
        addClass( indicator, classNamesToAdd );
      }

    } );
  } );
};

const applySiteColorSignal = ( indicator ) => {
  if ( indicator ) {
    addClass( indicator, `sm-variation-${ getSiteColorVariation() }` );
  }
};
