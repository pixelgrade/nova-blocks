import { parallaxInit } from "../../utils";
import { getStyles, getState } from "../../components/with-parallax/util";

(function($, window, undefined) {


	$(function() {
		const $body = $( 'body' );
		const shouldHaveBullets = $body.is( '.novablocks-has-position-indicators' ) && $( '.novablocks-hero' ).length > 1;
		const $heroes = $( '.novablocks-hero' );

		let frameRendered = false;
		let scrollY = 0;

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
				scrollY = window.scrollY;
				$container.data( 'state', state );
				frameRendered = false;
			} );
		} );

		function updateLoop() {
			if ( ! frameRendered ) {
				$heroes.each( function( i, obj ) {
					let $container = $( obj );
					let state = $container.data( 'state' );
					let config = $container.data( 'config' );

					config = Object.assign( {}, state, config );

					let styles = getStyles( config );
					let { containerWidth, containerHeight } = config;

					$container.data( 'parallax' ).css( styles );
					$container.data( 'mask' ).css( {
						clip: `rect(0 ${ containerWidth }px ${ containerHeight }px 0)`
					} )
				} );
				frameRendered = true;
			}
			requestAnimationFrame( updateLoop );
		}
		requestAnimationFrame( updateLoop );

		if ( shouldHaveBullets && typeof $.fn.bully !== 'undefined' ) {
			$( '.novablocks-hero' ).bully();
		}

		scrollButtonInit();
	})

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
