import $ from 'jquery';
import { hasTouchScreen } from "@novablocks/utils";
import { getProps, getState, getStylesFromProps } from "./utils";

const getScrollContainerHeight = () => {
	const useOrientation = hasTouchScreen() && 'orientation' in window;
	return useOrientation && window.screen && window.screen.availHeight || window.innerHeight
};

const getAttributes = ( $container ) => {

  return {
    followThroughStart: !! $container.data( 'smooth-start' ),
    followThroughEnd: !! $container.data( 'smooth-end' ),
    scrollingEffect: $container.data( 'scrolling-effect' ),
    focalPoint: $container.data( 'focal-point' ),
    finalFocalPoint: $container.data( 'final-focal-point' ),
    initialBackgroundScale: $container.data( 'initial-background-scale' ),
    finalBackgroundScale: $container.data( 'final-background-scale' ),
  };
}

const getConfig = ( container ) => {

  return {
    scrollContainerBox: { top: 0, left: 0 },
    scrollContainerHeight: getScrollContainerHeight(),
    containerWidth: container.offsetWidth,
    containerHeight: container.offsetHeight,
    containerBox: container.getBoundingClientRect(),
  }
}

$( function() {

	let frameRendered = false;
	let $blocks = $( '.novablocks-doppler' );

	$blocks.each( function( i, container ) {
		const $container = $( container );
		const attributes = getAttributes( $container );
		const config = getConfig( container );

		$container.data( {
			state: getState( config, attributes ),
			config: config,
		} );

		const $parallax = $container.find( '.novablocks-parallax' );

		$container.data( 'parallax', $parallax );

		function parallaxUpdateState() {
			const newConfig = Object.assign( {}, config, getConfig( container ) );

			const state = getState( newConfig, attributes );

			$container.data( 'state', state );
			$container.data( 'config', newConfig );
			frameRendered = false;
		}

		$( window ).on( 'scroll', parallaxUpdateState );
		$( window ).on( 'resize', parallaxUpdateState );

    parallaxUpdateState();
	} );

	function parallaxUpdateLoop() {

		if ( ! frameRendered ) {

			$blocks.each( function( i, obj ) {
				const $container = $( obj );
        const attributes = getAttributes( $container );
				const $background = $container.data( 'parallax' );
				const $foreground = $background.find( '.novablocks-foreground' );
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

				$container.data( 'parallax' ).css( styles );
			} );
			frameRendered = true;
		}
		requestAnimationFrame( parallaxUpdateLoop );
	}

	requestAnimationFrame( parallaxUpdateLoop );

} );
