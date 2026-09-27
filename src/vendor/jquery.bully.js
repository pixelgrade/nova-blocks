/*!
 * jQuery Bully Plugin v0.2.0
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2016 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
;(
	function( $, window, document, undefined ) {

		var EVENT_NAMESPACE = '.bully',
			$window = $( window ),
			instance = null;

		// Page state lives in an instance so it can end: `$.fn.bully.destroy()`
		// removes the dots, stops the frame loop and unbinds the window
		// listeners, and the next `.bully()` call starts a fresh instance
		// (AJAX page transitions, nova-blocks#661).
		function createInstance() {
			var windowHeight = $window.height(),
				elements = [],
				$bully = $( '<div class="c-bully">' ),
				$current = $( '<div class="c-bully__bullet c-bully__bullet--active">' ).appendTo( $bully ),
				lastScrollY = getScrollY(),
				current = 0,
				inversed = false,
				frameRendered = true,
				frameId = null,
				timers = [],
				destroyed = false,
				// Past window.load (a page reached through an AJAX transition):
				// no load event will pop the bullets, so they pop as they come.
				popOnAdd = document.readyState === 'complete';

			function getScrollY() {
				return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
			}

			function later( fn, delay ) {
				timers.push( setTimeout( fn, delay ) );
			}

			function update() {
				if ( destroyed ) {
					return;
				}

				if ( frameRendered !== true ) {

					var count = 0,
						inverse = false;

					$.each( elements, function( i, element ) {
						if ( lastScrollY >= element.offset.top - windowHeight / 2 ) {
							count = count + 1;
							inverse = lastScrollY < element.offset.top + element.height - windowHeight / 2;
						}
					} );

					if ( inversed !== inverse ) {
						inversed = inverse;
						$bully.toggleClass( 'c-bully--inversed', inversed );
					}

					if ( count !== current ) {
						var offset = $bully.children( '.c-bully__bullet' ).not( '.c-bully__bullet--active' ).first().outerHeight( true ) * (
							count - 1
						);
						$current.removeClass( 'c-bully__bullet--squash' );
						later( function() {
							$current.addClass( 'c-bully__bullet--squash' );
						} );
						$current.css( 'top', offset );
						current = count;
					}
				}

				frameId = window.requestAnimationFrame( update );
				frameRendered = true;
			}

			function reloadAll() {
				$.each( elements, function( i, element ) {
					element._reloadElement();
				} );
			}

			function staggerClass( $elements, classname, timeout ) {

				$.each( $elements, function( i, obj ) {

					var stagger = i * timeout;

					later( function() {
						obj.$bullet.addClass( classname );
					}, stagger );
				} );
			}

			if ( document.readyState === 'loading' ) {
				$( function() {
					if ( ! destroyed ) {
						$bully.appendTo( 'body' );
					}
				} );
			} else {
				$bully.appendTo( 'body' );
			}

			update();

			$window.on( 'load' + EVENT_NAMESPACE, function() {
				staggerClass( elements, 'c-bully__bullet--pop', 400 );
				frameRendered = false;
			} );

			$window.on( 'scroll' + EVENT_NAMESPACE, function() {
				if ( frameRendered === true ) {
					lastScrollY = getScrollY();
				}
				frameRendered = false;
			} );

			$window.on( 'load' + EVENT_NAMESPACE + ' resize' + EVENT_NAMESPACE + ' rellax' + EVENT_NAMESPACE, reloadAll );

			return {
				$bully: $bully,

				add: function( bully ) {
					bully.$bullet.appendTo( $bully );
					bully._reloadElement();
					elements.push( bully );
					current = 0;

					if ( popOnAdd ) {
						later( function() {
							bully.$bullet.addClass( 'c-bully__bullet--pop' );
						}, ( elements.length - 1 ) * 400 );
						frameRendered = false;
					}
				},

				getLastScrollY: function() {
					return lastScrollY;
				},

				destroy: function() {
					destroyed = true;

					if ( frameId !== null ) {
						window.cancelAnimationFrame( frameId );
						frameId = null;
					}

					$.each( timers, function( i, timer ) {
						clearTimeout( timer );
					} );
					timers = [];

					$window.off( EVENT_NAMESPACE );

					$.each( elements, function( i, element ) {
						$.removeData( element.element, 'plugin_bully' );
					} );
					elements = [];

					$bully.remove();
				}
			};
		}

		function getInstance() {
			if ( ! instance ) {
				instance = createInstance();
			}

			return instance;
		}

		function Bully( element, options ) {
			this.element = element;
			this.options = $.extend( {}, $.fn.bully.defaults, options );

			var self = this,
				$bullet = $( '<div class="c-bully__bullet">' );

			$bullet.data( 'bully-data', self );
			$bullet.on( 'click', function( event ) {
				event.preventDefault();
				event.stopPropagation();

				self.onClick();
			} );

			this.$bullet = $bullet;

			getInstance().add( self );
		}

		Bully.prototype = {
			constructor: Bully,
			_reloadElement: function() {
				this.offset = $( this.element ).offset();
				this.height = $( this.element ).outerHeight();
			},
			onClick: function() {

				var self = this,
					$target = $( 'html, body' ),
					lastScrollY = getInstance().getLastScrollY();

				if ( self.options.scrollDuration == 0 ) {
					$target.scrollTop( self.offset.top );
					return;
				}

				if ( self.options.scrollDuration === 'auto' ) {
					var duration = Math.abs( lastScrollY - self.offset.top ) / (
					               self.options.scrollPerSecond / 1000
					);
					$target.animate( {scrollTop: self.offset.top}, duration );
					return;
				}

				$target.animate( {scrollTop: self.offset.top}, self.options.scrollDuration );
			}
		};

		// A re-executed copy of this script replaces the running one instead
		// of leaving its frame loop and listeners behind.
		if ( $.fn.bully && typeof $.fn.bully.destroy === 'function' ) {
			$.fn.bully.destroy();
		}

		$.fn.bully = function( options ) {
			return this.each( function() {
				if ( ! $.data( this, 'plugin_bully' ) ) {
					$.data( this, 'plugin_bully', new Bully( this, options ) );
				}
			} );
		};

		$.fn.bully.defaults = {
			scrollDuration: 'auto',
			scrollPerSecond: 4000
		};

		// End the page state: dots, frame loop, timers and window listeners.
		$.fn.bully.destroy = function() {
			if ( instance ) {
				instance.destroy();
				instance = null;
			}
		};

		// Page load keeps its behaviour: the (empty) dots container is in
		// the page from the start.
		getInstance();

	}
)( jQuery, window, document );
