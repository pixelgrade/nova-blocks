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
