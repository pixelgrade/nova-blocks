import { getContainers, initializeContainers, REFERENCES, updateContainersStyle, updateContainerState } from "./utils";

import { debounce, IS_CUSTOMIZER, IS_EDITOR, registerFrontendModule } from "@novablocks/utils";

// A frontend module (nova-blocks#661): its listeners and its frame loop end
// on teardown and start again for the next page of an AJAX page swap.
registerFrontendModule( 'novablocks/scrolling-effect', ( scope ) => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  let containers = [];
  let frameId = null;

  const updateAllContainersState = () => {
    containers.forEach( updateContainerState );
  }

  const debouncedUpdateAllContainersState = debounce( scope.bind( updateAllContainersState ), 100 );

  scope.ready( () => {
    containers = getContainers();
    initializeContainers( containers );
    updateAllContainersState();
  } );

  scope.on( window, 'scroll', updateAllContainersState );
  scope.on( window, 'resize', debouncedUpdateAllContainersState );
  scope.on( window, 'nb:slick-update', updateAllContainersState );
  scope.on( window, 'nb:masonry-layout', updateAllContainersState );
  scope.on( window, 'nb:parametric-layout', updateAllContainersState );
  scope.on( window, 'load', updateAllContainersState );

  const parallaxUpdateLoop = () => {
    updateContainersStyle( containers );
    frameId = requestAnimationFrame( parallaxUpdateLoop );
  }

  frameId = requestAnimationFrame( parallaxUpdateLoop );

  scope.add( () => {
    cancelAnimationFrame( frameId );
    containers = [];
    Object.keys( REFERENCES ).forEach( refId => delete REFERENCES[ refId ] );
  } );

} );
