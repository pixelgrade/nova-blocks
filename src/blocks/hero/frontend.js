import { parallaxInit } from "../../utils";
import { getState, getProps, getStylesFromProps } from "../../components/with-parallax/util";

(function($, window, undefined) {

	let $heroes = $( '.novablocks-hero' );
	let heroFrameRendered = false;

	$(function() {
		heroesInit();
		bulletsInit();
		scrollButtonInit();
	})

	function heroesInit() {

		$heroes.each( function( i, container ) {
			var $container = $( container );
			var followThroughStart = !! $container.data( 'smooth-start' );
			var followThroughEnd = !! $container.data( 'smooth-end' );
			var scrollingEffect = $container.data( 'scrolling-effect' );
			var focalPoint = $container.data( 'focal-point' );
			var finalFocalPoint = $container.data( 'final-focal-point' );
			var initialBackgroundScale = $container.data( 'initial-background-scale' );
			var finalBackgroundScale = $container.data( 'final-background-scale' );
			var scrollContainerHeight = window.innerHeight;
			var scrollContainerBox = {
				top: 0,
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

			var $mask = $container.find( '.novablocks-hero__mask' );
			var $parallax = $container.find( '.novablocks-hero__parallax' );

			$container.data( 'mask', $mask );
			$container.data( 'parallax', $parallax );

			$( window ).on( 'scroll', function() {
				var state = getState( container, config );
				$container.data( 'state', state );
				heroFrameRendered = false;
			} );
		} );

		requestAnimationFrame( heroUpdateLoop );
	}

	function heroUpdateLoop() {
		if ( ! heroFrameRendered ) {
			$heroes.each( function( i, obj ) {
				let $container = $( obj );
				let state = $container.data( 'state' );
				let config = $container.data( 'config' );

				config = Object.assign( {}, state, config );

				let props = getProps( config );

				// because of fixed positioning
				props.parallaxAmount = 1 - props.parallaxAmount;
				props.moveY = -1 * props.moveY;

				let styles = getStylesFromProps( props );
				let { containerWidth, containerHeight } = config;

				$container.data( 'parallax' ).css( styles );
				$container.data( 'mask' ).css( {
					clip: `rect(0 ${ containerWidth }px ${ containerHeight }px 0)`
				} )
			} );
			heroFrameRendered = true;
		}
		requestAnimationFrame( heroUpdateLoop );
	}

	function bulletsInit() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}
	}

	function scrollButtonInit() {
		const $scrollButton = $( '.novablocks-hero__indicator' );
		const $hero = $scrollButton.closest( '.novablocks-hero' );

		if ( $hero.length ) {
			$scrollButton.on( 'click', function() {
				const heroBox = $hero.get(0).getBoundingClientRect();
				const heroBoxTop = heroBox.y || heroBox.top;
				const scrollY = window.scrollY;

				window.scrollTo( {
					top: heroBoxTop + heroBox.height + scrollY,
					behavior: 'smooth'
				} );
			} );
		}
	}

})(jQuery, window);
