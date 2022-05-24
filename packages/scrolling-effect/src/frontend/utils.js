import { getAttributes, hasTouchScreen } from "@novablocks/utils";
import { getProps, getState, getStylesFromProps } from "../utils";

export const REFERENCES = {};

export const getScrollContainerHeight = () => {
  const useOrientation = hasTouchScreen() && 'orientation' in window;
  return useOrientation && window.screen && window.screen.availHeight || window.innerHeight
};

export const getConfig = ( container ) => {

  const containerRect = container.getBoundingClientRect();

  return {
    scrollContainerBox: {
      top: 0,
      left: 0,
      height: getScrollContainerHeight()
    },
    containerBox: {
      width: container.offsetWidth,
      height: container.offsetHeight,
      top: containerRect.top,
      right: containerRect.right,
      bottom: containerRect.bottom,
      left: containerRect.left,
      x: containerRect.x,
      y: containerRect.y
    },
  }
};

export const updateContainerState = ( container ) => {
  const refId = container.dataset.refId;
  const { attributes, target, config } = REFERENCES[ refId ];
  const newConfig = Object.assign( {}, config, getConfig( container ) );
  const newState = getState( newConfig, attributes );

  Object.assign( REFERENCES[ refId ], {
    state: newState,
    config: newConfig,
  } );
}

export const initializeContainers = ( containers ) => {
  containers.forEach( ( container, index ) => {
    const block = container.closest( '[data-scrolling-effect]' );
    const attributes = getAttributes( block );
    const refId = `container-${ index }`;

    if ( ! attributes ) {
      return;
    }

    const config = getConfig( container );

    container.dataset.refId = refId;

    REFERENCES[ refId ] = {
      state: getState( config, attributes ),
      config,
      target: container.querySelector( '.novablocks-doppler__target' ),
      style: {},
      attributes,
    };

  } );
}

export const getContainers = () => {
  return Array.from( document.querySelectorAll( '.novablocks-doppler__wrapper' ) ).filter( container => {
    const block = container.closest( '[data-scrolling-effect]' );
    const attributes = getAttributes( block );

    return attributes?.scrollingEffect && attributes.scrollingEffect !== 'static';
  } );
}

export const updateContainersStyle = ( containers ) => {
  containers.forEach( container => {
    const refId = container.dataset.refId;
    const { attributes, target, state, config } = REFERENCES[ refId ];
    const cfg = Object.assign( {}, state, config );
    const props = getProps( cfg, attributes, true );

    REFERENCES[ refId ].style = getStylesFromProps( props );
  } );

  containers.forEach( container => {
    const refId = container.dataset.refId;
    const { target, style } = REFERENCES[ refId ];
    Object.assign( target.style, style );
  } );
}
