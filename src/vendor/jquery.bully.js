/*!
 * jQuery Bully Plugin v0.1.3
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2016 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
;(
	function( $, window, document, undefined ) {

		var $window = $( window ),
			windowHeight = $window.height(),
			elements = [],
			$bully,
      $current,
			lastScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0),
			current = 0,
			inversed = false,
			frameRendered = true;

    $( function() {
      $bully.appendTo( 'body' );
    } );

    $bully = $( '<div class="c-bully">' );
    $current = $( '<div class="c-bully__bullet c-bully__bullet--active">' ).appendTo( $bully );

		(
			function update() {
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
						setTimeout( function() {
							$current.addClass( 'c-bully__bullet--squash' );
						} );
						$current.css( 'top', offset );
						current = count;
					}
				}

				window.requestAnimationFrame( update );
				frameRendered = true;
			}
		)();

		function reloadAll() {
			$.each( elements, function( i, element ) {
				element._reloadElement();
			} );
		}

		function staggerClass( $elements, classname, timeout ) {

			$.each( $elements, function( i, obj ) {

				var stagger = i * timeout;

				setTimeout( function() {
					obj.$bullet.addClass( classname );
				}, stagger );
			} );
		}

		$window.on( 'load', function( e ) {
			staggerClass( elements, 'c-bully__bullet--pop', 400 );
			frameRendered = false;
		} );

		$window.on( 'scroll', function( e ) {
			if ( frameRendered === true ) {
				lastScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
			}
			frameRendered = false;
		} );

		$window.on( 'load resize', function() {
			reloadAll();
		} );

		function Bully( element, options ) {
			this.element = element;
			this.options = $.extend( {}, $.fn.bully.defaults, options );

			var self = this,
				$bullet = $( '<div class="c-bully__bullet">' );

			$bullet.data( 'bully-data', self ).appendTo( $bully );
			$bullet.on( 'click', function( event ) {
				event.preventDefault();
				event.stopPropagation();

				self.onClick();
			} );

			this.$bullet = $bullet;

			self._reloadElement();
			elements.push( self );
			current = 0;
		}

		Bully.prototype = {
			constructor: Bully,
			_reloadElement: function() {
				this.offset = $( this.element ).offset();
				this.height = $( this.element ).outerHeight();
			},
			onClick: function() {

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

		$window.on( 'rellax load', reloadAll );


	}
)( jQuery, window, document );
