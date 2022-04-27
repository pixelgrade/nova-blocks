import $ from 'jquery';
import { debounce, hasTouchScreen, IS_EDITOR, IS_CUSTOMIZER } from "@novablocks/utils";
import { getProps, getState, getStylesFromProps } from "./utils";

const getScrollContainerHeight = () => {
	const useOrientation = hasTouchScreen() && 'orientation' in window;
	return useOrientation && window.screen && window.screen.availHeight || window.innerHeight
};

const getConfig = ( container ) => {

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

const isTricky = ( start ) => {

  for ( let element = start.parentNode; element && element !== document; element = element.parentNode ) {
    const style = getComputedStyle( element );

    if ( style.transform && style.transform !== 'none' ) {
      return true;
    }
  }

  return false;
};

$( function() {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  const $window = $( window );
  let frameRendered = false;

	const $blocks = $( '.novablocks-doppler__wrapper' ).filter( ( i, container ) => {
    const $container = $( container );
    const $block = $container.closest( '[data-scrolling-effect]' );
    const attributes = $block.data();

    return attributes?.scrollingEffect && attributes.scrollingEffect !== 'static';
  } );

	$blocks.each( function( i, container ) {
		const $container = $( container );
		const $block = $container.closest( '[data-scrolling-effect]' );
    const attributes = $block.data();

		if ( ! attributes ) {
		  return;
    }

		const config = getConfig( container );

		$container.data( {
			state: getState( config, attributes ),
			config: config,
		} );

		const $background = $container.find( '.novablocks-doppler__target' );

		$container.data( 'target', $background );

    function parallaxUpdateState() {
			const newConfig = Object.assign( {}, config, getConfig( container ) );
			const state = getState( newConfig, attributes );

			$container.data( 'state', state );
			$container.data( 'config', newConfig );
			frameRendered = false;
		}

    const debouncedUpdateState = debounce( parallaxUpdateState, 100 );

		$window.on( 'scroll', parallaxUpdateState );
		$window.on( 'resize', debouncedUpdateState );

		$container.on( 'update', debouncedUpdateState );

    parallaxUpdateState();
	} );

	function parallaxUpdateLoop() {

    $blocks.each( function( i, container ) {
      const $container = $( container );
      const $block = $container.closest( '[data-scrolling-effect]' );
      const attributes = $block.data();

      if ( ! attributes ) {
        return;
      }

      const state = $container.data( 'state' );
      const config = $container.data( 'config' );
      const cfg = Object.assign( {}, state, config );
      const $background = $container.data( 'target' );
      const element = $background.get( 0 );
      const fixed = ! isTricky( element );
      const props = getProps( cfg, attributes, fixed );
      const styles = getStylesFromProps( props );

      $container.data( 'style-data', styles );
    } );

    $blocks.each( function( i, container ) {
      const $container = $( container );
      const $background = $container.data( 'target' );
      $background.css( $container.data( 'style-data' ) );
    } );

    requestAnimationFrame( parallaxUpdateLoop );
	}

	requestAnimationFrame( parallaxUpdateLoop );

} );
