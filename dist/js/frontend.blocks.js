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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
/******/ })
/************************************************************************/
/******/ ({

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_hero_frontend__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_hero_frontend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_hero_frontend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_slideshow_frontend__ = __webpack_require__(189);



/***/ }),

/***/ 188:
/***/ (function(module, exports) {

(function ($, window, undefined) {

	// initialize parallax effect
	if (typeof $.fn.rellax !== "undefined") {
		$('.nova-hero--parallax').find('.nova-hero__background').rellax({
			container: '.nova-hero__mask'
		});
	}
})(jQuery, window);

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(49);


var BLOCK_SELECTOR = '.nova-slideshow';
var SLIDER_SELECTOR = '.nova-slideshow__slider';
var SLIDE_SELECTOR = '.nova-slideshow__slide';
var CONTENT_SELECTOR = '.nova-slideshow__content';
var BACKGROUND_SELECTOR = '.nova-slideshow__background';
var FOREGROUND_SELECTOR = '.nova-slideshow__foreground';
var TRANSITION_DURATION = 1000;
var TRANSITION_EASING = "easeInOutCirc";

(function ($, window, undefined) {

	var $blocks = $(BLOCK_SELECTOR);
	var $rellaxTarget = $('.nova-slideshow--parallax').find(SLIDER_SELECTOR);

	// initialize parallax effect
	if (typeof $.fn.rellax !== "undefined") {
		$rellaxTarget.rellax({
			container: '.nova-slideshow__mask',
			children: CONTENT_SELECTOR
		});
	}

	$blocks.each(function (index, block) {
		var $block = $(block),
		    $slider = $block.find(SLIDER_SELECTOR),
		    $arrowContainer;

		if ($slider.children().length > 1) {
			$arrowContainer = $('<div class="nova-slideshow__controls">').appendTo($block);

			resetBlockMinHeight($block);
			$block.addClass('is-ready');

			$slider.on('beforeChange', onBeforeSlideChange);

			$slider.slick({
				rows: 0,
				// for simpler reveal transitions between slides
				fade: true,
				prevArrow: '<div class="nova-slideshow__arrow nova-slideshow__arrow--prev"></div>',
				nextArrow: '<div class="nova-slideshow__arrow nova-slideshow__arrow--next"></div>',
				appendArrows: $arrowContainer,
				speed: TRANSITION_DURATION
			});
		}
	});

	$(window).on('resize', Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* debounce */])(onResize, 300));

	function resetBlockMinHeight($block) {
		$block.css('minHeight', '');
		$block.css('minHeight', getBlockMinHeight($block));
	}

	function getBlockMinHeight($block) {
		var windowWidth = window.innerWidth;
		var $slider = $block.find(SLIDER_SELECTOR);
		var sliderWidth = $block.find(SLIDER_SELECTOR).outerWidth();
		var windowHeight = window.innerHeight;
		var sliderMinHeight = parseInt($block.data('min-height')) * windowHeight / 100;
		var mediaMinHeight = 0;
		var slideMaxHeight = 0;
		var maxAspectRatio = 0;

		$block.find(SLIDE_SELECTOR).each(function (i, obj) {
			var $slide = $(obj),
			    $media = $slide.find('.nova-slideshow__media'),
			    width = $media.data('width'),
			    height = $media.data('height'),
			    aspectRatio = width / height,
			    slideHeight = $slide.outerHeight();

			maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
			mediaMinHeight = sliderWidth / maxAspectRatio;
			slideMaxHeight = slideHeight > slideMaxHeight ? slideHeight : slideMaxHeight;
		});

		return Math.max(sliderMinHeight, slideMaxHeight, mediaMinHeight);
	}

	function onResize() {

		$blocks.each(function (index, block) {
			var $block = $(block);
			var $slider = $block.find(SLIDER_SELECTOR);

			resetBlockMinHeight($block);
			$rellaxTarget.rellax('refresh');

			if ($slider.is('.slick-initialized')) {
				$slider.slick('setPosition');
			}
		});
	}

	function onBeforeSlideChange(event, slick, currentSlide, nextSlide) {
		var $currentSlide = $(slick.$slides[currentSlide]);
		var $nextSlide = $(slick.$slides[nextSlide]);

		$(slick.$slides).css('zIndex', 800);

		transition($currentSlide, $nextSlide, getDirection(slick, currentSlide, nextSlide));
	}

	function transition($current, $next) {
		var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		var slideWidth = $current.outerWidth();
		var move = 300;

		$current.velocity({
			tween: [0, 1]
		}, {
			duration: TRANSITION_DURATION,
			easing: TRANSITION_EASING,
			progress: function progress(elements, percentComplete, remaining, tweenValue, activeCall) {
				var next = $next.get(0);
				var nextBg = $next.find(BACKGROUND_SELECTOR).get(0);
				var nextFg = $next.find(FOREGROUND_SELECTOR).get(0);
				var current = $current.get(0);
				var currentBg = $current.find(BACKGROUND_SELECTOR).get(0);
				var currentFg = $current.find(FOREGROUND_SELECTOR).get(0);

				var moveX = function moveX(x) {
					return 'translateX(' + sign * x + 'px)';
				};

				next.style.transform = moveX(slideWidth * tweenValue);
				nextBg.style.transform = moveX((move - slideWidth) * tweenValue);
				nextFg.style.transform = moveX(slideWidth * -tweenValue);

				current.style.transform = moveX(-move * (1 - tweenValue));
				currentFg.style.transform = moveX(move * (1 - tweenValue));
			}
		});
	}

	function getDirection(slick, currentSlide, nextSlide) {
		var direction = 1;
		if (slick.slideCount > 2) {
			if (currentSlide === 0 && nextSlide === slick.slideCount - 1) {
				direction = -1;
			}
			if (nextSlide < currentSlide && (nextSlide !== 0 || currentSlide !== slick.slideCount - 1)) {
				direction = -1;
			}
		}
		return direction;
	}
})(jQuery, window);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
var debounce = function debounce(func, wait) {
	var timeout = null;

	return function () {
		var context = this;
		var args = arguments;

		var later = function later() {
			func.apply(context, args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

/***/ })

/******/ });