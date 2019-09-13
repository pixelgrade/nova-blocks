/*!
 * jQuery Rellax Plugin v1.0.0
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2019 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
;(
	function( $, window, document, undefined ) {

		if ( ! window.requestAnimationFrame ) {
			return;
		}

		var $window = $( window ),
			windowWidth,
			windowHeight,
			lastScrollY,
			frameRendered = true,
			elements = [];

		function onResize() {
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
		}

		function onScroll() {
			lastScrollY = window.scrollY;
			frameRendered = false;
		}

		$.fn.rellax = function( options ) {
			return this.each( function() {
				var element = $.data( this, 'rellax' ),
					idx;

				if ( typeof options !== "string" && typeof element === "undefined" ) {
					$.data( this, 'rellax', new Rellax( this, options ) );
				} else {
					if ( options === "destroy" ) {
						idx = elements.indexOf( element );
						if ( idx > -1 ) {
							elements.splice( idx, 1 );
						}
					}

					if ( options === "refresh" ) {
						restart();
					}
				}
			} );
		};

		$.fn.rellax.defaults = {
			amount: 0.5,
			bleed: 0,
			container: "[data-rellax-container]",
			children: "[data-rellax-child]",
			absolute: false,
			scale: 1,
			scaleX: false,
			scaleY: true
		};

		function Rellax( element, options ) {
			this.el = element;
			this.$el = $( element );
			this.ready = false;
			this.options = $.extend( {}, $.fn.rellax.defaults, options );

			this.parent = {};
			this.parent.$el = this.$el.closest( this.options.container );
			this.children = {};
			this.children.$el = this.$el.find( this.options.children );

			var amount = this.$el.data( 'rellax-amount' ),
				bleed = this.$el.data( 'rellax-bleed' ),
				scale = this.$el.data( 'rellax-scale' );

			this.options.amount = amount !== undefined ? parseFloat( amount ) : this.options.amount;
			this.options.bleed = bleed !== undefined ? parseFloat( bleed ) : this.options.bleed;
			this.options.scale = scale !== undefined ? parseFloat( scale ) : this.options.scale;

			if ( this.options.amount == 0 ) {
				return;
			}

			elements.push( this );
			restart();
		}

		$.extend( Rellax.prototype, {
			constructor: Rellax,

			_reset: function() {
				this.$el.css({
					position: '',
					top: '',
					left: '',
					width: '',
					height: '',
					transform: '',
				});
				this.ready = false;
			},

			_cachePosition: function() {
				this.offset = this.$el.offset();
				this.width = this.$el.outerWidth();
				this.height = this.$el.outerHeight();

				this.parent.width = this.parent.$el.outerWidth();
				this.parent.height = this.parent.$el.outerHeight();
				this.parent.offset = this.parent.$el.offset();

				this.ready = true;
			},

			_prepareElement: function() {
				this.parent.$el.css({
					clip: 'rect(0,'+ this.width + 'px,' + this.height + 'px,0)',
				});

				this._scale();

				if ( ! this.options.absolute ) {

					this.$el.css({
						position: 'fixed',
						top: this.offset.top,
						left: this.offset.left,
						width: this.width,
						height: this.height
					});

				} else {

					this.$el.css({
						position: 'absolute',
						top: this.offset.top - this.parent.offset.top,
						left: this.offset.left - this.parent.offset.left,
						width: this.width,
						height: this.height
					});

				}
			},

			_scale: function() {
				var finalHeight = this.parent.height * (1 - this.options.amount) + windowHeight * this.options.amount,
					scaleY = finalHeight / this.height,
					scaleX = this.parent.width / this.width,
					scale = Math.max( scaleX, scaleY ),
					offsetY = this.parent.height * ( 1 - scale ) / 2,
					offsetX = this.parent.width * ( 1 - scale ) / 2;

				if ( this.options.scaleY ) {
					this.height *= scale;
					this.offset.top += offsetY;

					var childrenHeight = this.height + 2 * offsetY;

					this.children.$el.each( function( i, obj ) {
						$( obj ).css( {
							marginTop: -1 * offsetY,
							height: childrenHeight
						} )
					} );
				}

				if ( this.options.scaleX ) {
					this.width *= scale;
					this.offset.left += this.parent.width * ( 1 - scale ) / 2;
				}
			},

			_updatePosition: function( forced ) {

				if ( this.ready !== true ) return;

				var progress = this._getProgress(),
					move = ( windowHeight + this.parent.height ) * ( progress - 0.5 ) * this.options.amount,
					moveChildren = -1 * move,
					scale = 1 + ( this.options.scale - 1 ) * progress,
					scaleTransform = scale >= 1 ? 'scale(' + scale + ')' : '',
					childrenScaleTransform = scale >= 1 ? 'scale(' + 1 / scale + ')' : '';

				if ( progress < 0 || progress > 1 ) {
					return;
				}

				if ( ! this.options.absolute ) {
					move -= lastScrollY;
				}

				this.children.$el.each( function( index, el ) {
					el.style.transform = 'translate3d(0,' + moveChildren + 'px,0) ' + childrenScaleTransform;
				} );

				this.el.style.transform = 'translate3d(0,' + move + 'px,0) ' + scaleTransform;
			},

			_getProgress: function() {
				return ( lastScrollY - this.parent.offset.top + windowHeight ) / ( windowHeight + this.parent.height );
			}


		} );

		function render() {
			if ( frameRendered !== true ) {
				updateAll();
			}
			requestAnimationFrame( render );
			frameRendered = true;
		}

		function updateAll( forced ) {
			$.each(elements, function(i, element) {
				element._updatePosition( forced );
			});
		}

		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		}

		function resetAll() {
			$.each(elements, function(i, element) {
				element._reset();
			});
		}

		function cacheAll() {
			$.each(elements, function(i, element) {
				element._cachePosition();
			});
		}

		function badRestart() {
			onResize();
			resetAll();
			cacheAll();
			requestAnimationFrame( function() {
				$.each(elements, function(i, element) {
					element._prepareElement();
					element._updatePosition();
				});
			});
		}

		var restart = debounce( badRestart, 300 );

		$( window ).on( 'resize', restart );
		$( window ).on( 'scroll', onScroll );

		onResize();
		onScroll();
		render();
	}
)( jQuery, window, document );
