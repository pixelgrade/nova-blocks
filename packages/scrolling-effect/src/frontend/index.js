import domReady from "@wordpress/dom-ready";
import { getContainers, initializeContainers, updateContainersStyle, updateContainerState } from "./utils";

import { debounce, IS_CUSTOMIZER, IS_EDITOR } from "@novablocks/utils";

const initialize = () => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  let containers = [];

  const updateAllContainersState = () => {
    containers.forEach( updateContainerState );
  }

  const debouncedUpdateAllContainersState = debounce( updateAllContainersState, 100 );

  domReady( () => {
    containers = getContainers();
    initializeContainers( containers );
    updateAllContainersState();
  } );

  window.addEventListener( 'scroll', updateAllContainersState );
  window.addEventListener( 'resize', debouncedUpdateAllContainersState );
  window.addEventListener( 'nb:slick-update', updateAllContainersState );
  window.addEventListener( 'load', updateAllContainersState );

  const parallaxUpdateLoop = () => {
    updateContainersStyle( containers );
    requestAnimationFrame( parallaxUpdateLoop );
  }

  requestAnimationFrame( parallaxUpdateLoop );
}

initialize();
