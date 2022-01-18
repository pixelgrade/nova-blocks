import $ from 'jquery';
import { debounce, hasTouchScreen, IS_EDITOR, IS_CUSTOMIZER } from "@novablocks/utils";
import { getProps, getState, getStylesFromProps } from "./utils";

const getScrollContainerHeight = () => {
	const useOrientation = hasTouchScreen() && 'orientation' in window;
	return useOrientation && window.screen && window.screen.availHeight || window.innerHeight
};

const getConfig = ( container ) => {

  const containerBox = {
    width: container.offsetWidth,
    height: container.offsetHeight,
    top: container.offsetTop,
    left: container.offsetLeft
  };

  containerBox.right = containerBox.left + containerBox.width;
  containerBox.bottom = containerBox.top + containerBox.height;

  return {
    scrollContainerBox: {
      top: 0,
      left: 0,
      height: getScrollContainerHeight()
    },
    containerBox: containerBox,
  }
}

$( function() {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  const $window = $( window );
  let frameRendered = false;
	let $blocks = $( '.novablocks-doppler__wrapper' );

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
    const $foreground = $container.find( '.novablocks-doppler__foreground' );

		$container.data( 'parallax', $background );
    $container.data( 'foreground', $foreground );

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

		if ( ! frameRendered ) {

			$blocks.each( function( i, container ) {
				const $container = $( container );
        const $block = $container.closest( '[data-scrolling-effect]' );
        const attributes = $block.data();

        if ( ! attributes ) {
          return;
        }

        const $background = $container.find( '.novablocks-doppler__target' );
        const $foreground = $container.find( '.novablocks-doppler__foreground' );

				const state = $container.data( 'state' );
				const config = $container.data( 'config' );
				const cfg = Object.assign( {}, state, config );
				const props = getProps( cfg, attributes, true );

				$foreground.css( 'transform', `translate3d(0,${ -props.moveY * props.parallaxAmount }px,0)` );

				// because of fixed positioning
				props.moveY = -1 * props.moveY;

				if ( 0 < props.progress && props.progress < 1 ) {
					props.parallaxAmount = 1 - props.parallaxAmount;
				}

				let styles = getStylesFromProps( props );

        $background.css( styles );
			} );
			frameRendered = true;
		}
		requestAnimationFrame( parallaxUpdateLoop );
	}

	requestAnimationFrame( parallaxUpdateLoop );

} );
