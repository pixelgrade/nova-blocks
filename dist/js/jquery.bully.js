/*!
 * jQuery Bully Plugin v0.2.0
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2016 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
;(
	function( $, window, document, undefined ) {

		var $window = $( window ),
			windowWidth,
			windowHeight,
			lastScrollY,
			elements = [],
			popElements = [],
			$bully = $( '<div class="c-bully">' ),
			$current = $( '<div class="c-bully__bullet c-bully__bullet--active">' ).appendTo( $bully ),
			current = 0,
			inversed = false,
			frameRendered = false;

		// bind events
		bindEvents();
		// initialize on DOMContentLoaded
		$(initialize);

		function initialize() {
			// add markup to body
			$bully.appendTo( 'body' );
			// recalculate position of all elements
			reloadAll();
			// start update loop
			requestAnimationFrame( updateLoop );
		}

		function staggerClass( $elements, classname, timeout ) {
			$.each( $elements, function( i, obj ) {
				var stagger = i * timeout;
				setTimeout( function() {
					obj.$bullet.addClass( classname );
				}, stagger );
			} );
		}

		function bindEvents() {
			$window.on( 'resize scroll load', getWindowInfo );
			$window.on( 'resize load', reloadAll );
			$window.on( 'load', function() {
				staggerClass( elements, 'c-bully__bullet--pop', 400 );
			} );
		}

		function reloadAll() {
			$.each( elements, function( i, element ) {
				element._reloadElement();
			} );
		}

		function getWindowInfo() {
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
			lastScrollY = ( window.pageYOffset || document.documentElement.scrollTop ) - ( document.documentElement.clientTop || 0 );

			// force update on next updateLoop iteration
			frameRendered = false;
		}

		function updateLoop() {
			if ( frameRendered !== true ) {

				var count = 0,
					inverse = false,
					eventData = {},
					shouldTriggerEvent = false;

				$.each( elements, function( i, element ) {
					if ( lastScrollY >= element.offset.top - windowHeight / 2 ) {
						count = count + 1;
						inverse = lastScrollY < element.offset.top + element.height - windowHeight / 2;
					}
				} );

				if ( inversed !== inverse ) {
					inversed = inverse;
					$bully.toggleClass( 'c-bully--inversed', inversed );
					eventData.inversed = inversed;
					shouldTriggerEvent = true;
				}

				if ( count !== current ) {
					var offset = $bully.children( '.c-bully__bullet' ).not( '.c-bully__bullet--active' ).first().outerHeight( true ) * (
						count - 1
					);
					$current.removeClass( 'c-bully__bullet--squash' );
					setTimeout( function() {
						$current.addClass( 'c-bully__bullet--squash' );
					} );
					$current.css( 'top', offset );
					current = count;
					eventData.current = count;
					shouldTriggerEvent = true;
				}

				if ( shouldTriggerEvent ) {
					$window.trigger( 'bully', eventData );
				}
			}

			window.requestAnimationFrame( updateLoop );
			frameRendered = true;
		}

		function Bully( element, options ) {
			this.element = element;
			this.options = $.extend( {}, $.fn.bully.defaults, options );
			this.initialized = false;

			this._reloadElement();
			elements.push( this );
			current = 0;
		}

		Bully.prototype = {
			constructor: Bully,
			_reloadElement: function() {
				this.offset = $( this.element ).offset();
				this.height = $( this.element ).outerHeight();

				if ( ! this.initialized ) {
					this.$bullet = $( '<div class="c-bully__bullet">' );
					this.$bullet.data( 'bully-data', this );
					this.$bullet.appendTo( $bully );
					this.$bullet.on( 'click', this.onClick.bind( this ) );
					this.initialized = true;
					popElements.unshift( this.$bullet );
				}
			},
			onClick: function(e) {
				e.preventDefault();
				e.stopPropagation();

				var self = this,
					$target = $( 'html, body' );

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

		$.fn.bully = function( options ) {
			return this.each( function() {
				if ( ! $.data( this, "plugin_" + Bully ) ) {
					$.data( this, "plugin_" + Bully, new Bully( this, options ) );
				}
			} );
		};

		$.fn.bully.defaults = {
			scrollDuration: 'auto',
			scrollPerSecond: 4000
		};
	}
)( jQuery, window, document );
