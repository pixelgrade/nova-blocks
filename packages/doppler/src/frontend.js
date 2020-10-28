import $ from 'jquery';
import { hasTouchScreen } from "@novablocks/utils";
import { getProps, getState, getStylesFromProps } from "./utils";

const getScrollContainerHeight = () => {
	const useOrientation = hasTouchScreen() && 'orientation' in window;
	return useOrientation && window.screen && window.screen.availHeight || window.innerHeight
};

$( function() {

	let frameRendered = false;
	let scrollContainerHeight = getScrollContainerHeight();

	$( '.novablocks-doppler' ).each( function( i, container ) {
		var $container = $( container );
		var followThroughStart = !! $container.data( 'smooth-start' );
		var followThroughEnd = !! $container.data( 'smooth-end' );
		var scrollingEffect = $container.data( 'scrolling-effect' );
		var focalPoint = $container.data( 'focal-point' );
		var finalFocalPoint = $container.data( 'final-focal-point' );
		var initialBackgroundScale = $container.data( 'initial-background-scale' );
		var finalBackgroundScale = $container.data( 'final-background-scale' );
		var scrollContainerBox = {
			top: 0,
			left: 0,
		};

		var config = {
			followThroughStart,
			followThroughEnd,
			scrollingEffect,
			scrollContainerHeight,
			scrollContainerBox,
			focalPoint,
			finalFocalPoint,
			initialBackgroundScale,
			finalBackgroundScale,
		};

		$container.data( {
			state: getState( container, config ),
			config: config,
		} );

		var $parallax = $container.find( '.novablocks-parallax' );

		$container.data( 'parallax', $parallax );

		function parallaxUpdateState() {
			var newConfig = Object.assign( {}, config, {
				scrollContainerHeight: getScrollContainerHeight()
			} );
			var state = getState( container, newConfig );
			$container.data( 'state', state );
			$container.data( 'config', newConfig );
			frameRendered = false;
		}

		$( window ).on( 'scroll', parallaxUpdateState );
		$( window ).on( 'resize', parallaxUpdateState );
	} );

	function parallaxUpdateLoop() {
		if ( ! frameRendered ) {
			$blocks.each( function( i, obj ) {
				let $container = $( obj );
				let $background = $container.data( 'parallax' );
				let $foreground = $background.find( '.novablocks-foreground' );
				let state = $container.data( 'state' );
				let config = $container.data( 'config' );

				config = Object.assign( {}, state, config );

				let props = getProps( config, true );

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
