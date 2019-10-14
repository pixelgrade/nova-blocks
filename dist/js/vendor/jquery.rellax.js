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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 252);
/******/ })
/************************************************************************/
/******/ ({

/***/ 252:
/***/ (function(module, exports) {

/*!
 * jQuery Rellax Plugin v1.0.0
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2019 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
;(function ($, window, document, undefined) {

	if (!window.requestAnimationFrame) {
		return;
	}

	var $window = $(window),
	    windowWidth,
	    windowHeight,
	    lastScrollY,
	    frameRendered = true,
	    elements = [],
	    useOrientation = hasTouchScreen() && 'orientation' in window;

	function hasTouchScreen() {
		var hasTouchScreen = false;

		if ("maxTouchPoints" in navigator) {
			hasTouchScreen = navigator.maxTouchPoints > 0;
		} else if ("msMaxTouchPoints" in navigator) {
			hasTouchScreen = navigator.msMaxTouchPoints > 0;
		} else {
			var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
			if (mQ && mQ.media === "(pointer:coarse)") {
				hasTouchScreen = !!mQ.matches;
			} else if ('orientation' in window) {
				hasTouchScreen = true;
			} else {
				var UA = navigator.userAgent;
				hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
			}
		}

		return hasTouchScreen;
	}

	function onResize() {
		windowWidth = window.screen && window.screen.availWidth || window.innerWidth;
		windowHeight = window.screen && window.screen.availHeight || window.innerHeight;
	}

	function onScroll() {
		lastScrollY = window.scrollY;
		frameRendered = false;
	}

	$.fn.rellax = function (options) {
		return this.each(function () {
			var element = $.data(this, 'rellax'),
			    idx;

			if (typeof options !== "string" && typeof element === "undefined") {
				$.data(this, 'rellax', new Rellax(this, options));
			} else {
				if (options === "destroy") {
					idx = elements.indexOf(element);
					if (idx > -1) {
						elements.splice(idx, 1);
					}
				}

				if (options === "refresh") {
					restart();
				}
			}
		});
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

	function Rellax(element, options) {
		this.el = element;
		this.$el = $(element);
		this.ready = false;
		this.options = $.extend({}, $.fn.rellax.defaults, options);

		this.parent = {};
		this.parent.$el = this.$el.closest(this.options.container);
		this.children = {};
		this.children.$el = this.$el.find(this.options.children);

		var amount = this.$el.data('rellax-amount'),
		    bleed = this.$el.data('rellax-bleed'),
		    scale = this.$el.data('rellax-scale');

		this.options.amount = amount !== undefined ? parseFloat(amount) : this.options.amount;
		this.options.bleed = bleed !== undefined ? parseFloat(bleed) : this.options.bleed;
		this.options.scale = scale !== undefined ? parseFloat(scale) : this.options.scale;

		if (this.options.amount == 0) {
			return;
		}

		elements.push(this);
		debouncedRestart();
	}

	$.extend(Rellax.prototype, {
		constructor: Rellax,

		_reset: function _reset() {
			this.ready = false;

			this.$el.css({
				position: '',
				top: '',
				left: '',
				width: '',
				height: '',
				transform: ''
			});
		},

		_cachePosition: function _cachePosition() {
			this.width = this.$el.outerWidth();
			this.height = this.$el.outerHeight();
			this.offset = this.$el.offset();

			this.parent.width = this.parent.$el.outerWidth();
			this.parent.height = this.parent.$el.outerHeight();
			this.parent.offset = this.parent.$el.offset();
		},

		_prepareElement: function _prepareElement() {
			this.parent.$el.css({
				clip: 'rect(0,' + this.width + 'px,' + this.height + 'px,0)'
			});

			this._scale();

			if (!this.options.absolute) {

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

			this.ready = true;
		},

		_scale: function _scale() {
			var finalHeight = this.parent.height * (1 - this.options.amount) + windowHeight * this.options.amount,
			    scaleY = finalHeight / this.height,
			    scaleX = this.parent.width / this.width,
			    scale = Math.max(scaleX, scaleY),
			    offsetY = this.parent.height * (1 - scale) / 2,
			    offsetX = this.parent.width * (1 - scale) / 2;

			if (this.options.scaleY) {
				this.height *= scale;
				this.offset.top += offsetY;

				var childrenHeight = this.height + 2 * offsetY;

				this.children.$el.each(function (i, obj) {
					$(obj).css({
						marginTop: -1 * offsetY,
						height: childrenHeight
					});
				});
			}

			if (this.options.scaleX) {
				this.width *= scale;
				this.offset.left += this.parent.width * (1 - scale) / 2;
			}
		},

		_updatePosition: function _updatePosition(forced) {

			if (this.ready !== true) return;

			var progress = this._getProgress(),
			    move = (windowHeight + this.parent.height) * (progress - 0.5) * this.options.amount,
			    moveChildren = -1 * move,
			    scale = 1 + (this.options.scale - 1) * progress,
			    scaleTransform = scale >= 1 ? 'scale(' + scale + ')' : '',
			    childrenScaleTransform = scale >= 1 ? 'scale(' + 1 / scale + ')' : '';

			if (progress < 0 || progress > 1) {
				return;
			}

			if (!this.options.absolute) {
				move -= lastScrollY;
			}

			this.children.$el.each(function (index, el) {
				el.style.transform = 'translate3d(0,' + moveChildren + 'px,0) ' + childrenScaleTransform;
			});

			this.el.style.transform = 'translate3d(0,' + move + 'px,0) ' + scaleTransform;
		},

		_getProgress: function _getProgress() {
			return (lastScrollY - this.parent.offset.top + windowHeight) / (windowHeight + this.parent.height);
		}
	});

	function render() {
		if (frameRendered !== true) {
			updateAll();
		}
		requestAnimationFrame(render);
		frameRendered = true;
	}

	function updateAll(forced) {
		$.each(elements, function (i, element) {
			element._updatePosition(forced);
		});
	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function () {
			var context = this,
			    args = arguments;
			var later = function later() {
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
		$.each(elements, function (i, element) {
			element._reset();
		});
	}

	function cacheAll() {
		$.each(elements, function (i, element) {
			element._cachePosition();
		});
	}

	function restart() {
		resetAll();
		cacheAll();

		$.each(elements, function (i, element) {
			element._prepareElement();
			element._updatePosition();
		});
	}

	var debouncedRestart = debounce(restart, 100);

	$window.on('scroll', onScroll);
	$window.on('resize', onResize);

	if (useOrientation) {
		$window.on('orientationchange', function () {
			$window.one('resize', debouncedRestart);
		});
	} else {
		$window.on('resize', debouncedRestart);
	}

	onResize();
	onScroll();
	render();
})(jQuery, window, document);

/***/ })

/******/ });