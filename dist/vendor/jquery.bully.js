/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
			lastScrollY = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0),
			current = 0,
			inversed = false,
			frameRendered = true;

		$bully = $( '<div class="c-bully">' ).appendTo( 'body' );
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


/***/ })
/******/ ]);