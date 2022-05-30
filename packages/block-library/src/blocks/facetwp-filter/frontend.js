import domReady from "@wordpress/dom-ready";
import { hasClass, toggleClass } from "@novablocks/utils";

domReady( () => {
  const blocks = Array.from( document.querySelectorAll( '.nb-facetwp-filter' ) );
  const hiddenBlocks = blocks.filter( block => hasClass( block, 'nb-facetwp-filter--section-type-hidden' ) )

  blocks.forEach( block => {
    const toggles = block.querySelectorAll( '.nb-facetwp-toggle' );

    toggles.forEach( toggle => {
      toggle.dataset.toggled = "false";

      toggle.addEventListener( 'click', () => {
        toggle.dataset.toggled = toggle.dataset.toggled !== "true";
        hiddenBlocks.forEach( hiddenBlock => {
          toggleClass( hiddenBlock, 'is-visible', toggle.dataset.toggled === "true" );
        } );
      } )
    } )
  } );
} );
