import domReady from "@wordpress/dom-ready";

import "@novablocks/collection/frontend";
import { debounce } from "@novablocks/utils";

import { resizeDropcap } from "./utils";

const dropcaps = Array.from( document.querySelectorAll( '.nb-supernova-item__dropcap' ) );

const resizeAllDropcaps = () => {
  dropcaps.forEach( resizeDropcap );
}

const debouncedResizeAllDropcaps = debounce( resizeAllDropcaps, 100 );

domReady( resizeAllDropcaps );

window.addEventListener( 'resize', debouncedResizeAllDropcaps );
