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
/******/ 	return __webpack_require__(__webpack_require__.s = 150);
/******/ })
/************************************************************************/
/******/ ({

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_frontend__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slideshow_frontend__ = __webpack_require__(152);



/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(25);


(function ($, window, undefined) {

	// initialize parallax effect
	if (typeof $.fn.rellax !== "undefined") {
		$('.nova-hero--parallax').find('.nova-hero__background').rellax({
			container: '.nova-hero__mask'
		});
	}

	if (typeof $.fn.bully !== "undefined") {
		$('.nova-hero-bullets').find('.nova-hero').bully();
	}
})(jQuery, window);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(25);


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
	var $rellaxTarget = $blocks.filter('.nova-slideshow--parallax').find(SLIDER_SELECTOR);

	// initialize parallax effect
	$rellaxTarget.rellax({
		container: '.nova-slideshow__mask',
		children: CONTENT_SELECTOR
	});

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
			resetBlockMinHeight($block);
			$block.find(SLIDER_SELECTOR).slick('refresh');
			$rellaxTarget.rellax('refresh');
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

	$(window).on('resize', Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* debounce */])(onResize, 300));
})(jQuery, window);

/***/ }),

/***/ 25:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmU0ODY5OTQzNTk5MTNjMWRmN2YiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJmbiIsInJlbGxheCIsImZpbmQiLCJjb250YWluZXIiLCJidWxseSIsImpRdWVyeSIsIkJMT0NLX1NFTEVDVE9SIiwiU0xJREVSX1NFTEVDVE9SIiwiU0xJREVfU0VMRUNUT1IiLCJDT05URU5UX1NFTEVDVE9SIiwiQkFDS0dST1VORF9TRUxFQ1RPUiIsIkZPUkVHUk9VTkRfU0VMRUNUT1IiLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiVFJBTlNJVElPTl9FQVNJTkciLCIkYmxvY2tzIiwiJHJlbGxheFRhcmdldCIsImZpbHRlciIsImNoaWxkcmVuIiwiZWFjaCIsImluZGV4IiwiYmxvY2siLCIkYmxvY2siLCIkc2xpZGVyIiwiJGFycm93Q29udGFpbmVyIiwibGVuZ3RoIiwiYXBwZW5kVG8iLCJyZXNldEJsb2NrTWluSGVpZ2h0IiwiYWRkQ2xhc3MiLCJvbiIsIm9uQmVmb3JlU2xpZGVDaGFuZ2UiLCJzbGljayIsInJvd3MiLCJmYWRlIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXBwZW5kQXJyb3dzIiwic3BlZWQiLCJjc3MiLCJnZXRCbG9ja01pbkhlaWdodCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsInNsaWRlcldpZHRoIiwib3V0ZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0Iiwic2xpZGVyTWluSGVpZ2h0IiwicGFyc2VJbnQiLCJkYXRhIiwibWVkaWFNaW5IZWlnaHQiLCJzbGlkZU1heEhlaWdodCIsIm1heEFzcGVjdFJhdGlvIiwiaSIsIm9iaiIsIiRzbGlkZSIsIiRtZWRpYSIsIndpZHRoIiwiaGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJzbGlkZUhlaWdodCIsIm91dGVySGVpZ2h0IiwiTWF0aCIsIm1heCIsIm9uUmVzaXplIiwiZXZlbnQiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwiJHNsaWRlcyIsIiRuZXh0U2xpZGUiLCJ0cmFuc2l0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiJGN1cnJlbnQiLCIkbmV4dCIsInNpZ24iLCJzbGlkZVdpZHRoIiwibW92ZSIsInZlbG9jaXR5IiwidHdlZW4iLCJkdXJhdGlvbiIsImVhc2luZyIsInByb2dyZXNzIiwiZWxlbWVudHMiLCJwZXJjZW50Q29tcGxldGUiLCJyZW1haW5pbmciLCJ0d2VlblZhbHVlIiwiYWN0aXZlQ2FsbCIsIm5leHQiLCJnZXQiLCJuZXh0QmciLCJuZXh0RmciLCJjdXJyZW50IiwiY3VycmVudEJnIiwiY3VycmVudEZnIiwibW92ZVgiLCJ4Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXJlY3Rpb24iLCJzbGlkZUNvdW50IiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7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LENBQUwsRUFBZ0c7QUFDL0ZELGdCQUFZLENBQUMsQ0FBYjtBQUNBO0FBQ0Q7QUFDRCxTQUFPQSxTQUFQO0FBQ0E7O0FBRURwRyxHQUFHQyxNQUFILEVBQVk4QixFQUFaLENBQWdCLFFBQWhCLEVBQTBCdUUsZ0VBQVFBLENBQUVyQyxRQUFWLEVBQW9CLEdBQXBCLENBQTFCO0FBRUEsQ0FsSUQsRUFrSUd6RCxNQWxJSCxFQWtJV1AsTUFsSVgsRTs7Ozs7Ozs7QUNYQTtBQUFPLElBQU1xRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3ZDLEtBQUlDLFVBQVUsSUFBZDs7QUFFQSxRQUFPLFlBQVk7QUFDbEIsTUFBTUMsVUFBVSxJQUFoQjtBQUNBLE1BQU1DLE9BQU9DLFNBQWI7O0FBRUEsTUFBTUMsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDbkJOLFFBQUtPLEtBQUwsQ0FBV0osT0FBWCxFQUFvQkMsSUFBcEI7QUFDQSxHQUZEOztBQUlBSSxlQUFhTixPQUFiO0FBQ0FBLFlBQVVPLFdBQVdILEtBQVgsRUFBa0JMLElBQWxCLENBQVY7QUFDQSxFQVZEO0FBV0EsQ0FkTSxDIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2Zyb250ZW5kLmJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmU0ODY5OTQzNTk5MTNjMWRmN2YiLCJpbXBvcnQgJy4vaGVyby9mcm9udGVuZCc7XG5pbXBvcnQgJy4vc2xpZGVzaG93L2Zyb250ZW5kJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvZnJvbnRlbmQuanMiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcblxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cblx0Ly8gaW5pdGlhbGl6ZSBwYXJhbGxheCBlZmZlY3Rcblx0aWYgKCB0eXBlb2YgJC5mbi5yZWxsYXggIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0JCggJy5ub3ZhLWhlcm8tLXBhcmFsbGF4JyApLmZpbmQoICcubm92YS1oZXJvX19iYWNrZ3JvdW5kJyApLnJlbGxheCh7XG5cdFx0XHRjb250YWluZXI6ICcubm92YS1oZXJvX19tYXNrJyxcblx0XHR9KTtcblx0fVxuXG5cdGlmICggdHlwZW9mICQuZm4uYnVsbHkgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0JCggJy5ub3ZhLWhlcm8tYnVsbGV0cycgKS5maW5kKCAnLm5vdmEtaGVybycgKS5idWxseSgpO1xuXHR9XG5cbn0pKGpRdWVyeSwgd2luZG93KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vZnJvbnRlbmQuanMiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgQkxPQ0tfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93JztcbmNvbnN0IFNMSURFUl9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX3NsaWRlcic7XG5jb25zdCBTTElERV9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX3NsaWRlJztcbmNvbnN0IENPTlRFTlRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19jb250ZW50JztcbmNvbnN0IEJBQ0tHUk9VTkRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kJztcbmNvbnN0IEZPUkVHUk9VTkRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19mb3JlZ3JvdW5kJztcbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxMDAwO1xuY29uc3QgVFJBTlNJVElPTl9FQVNJTkcgPSBcImVhc2VJbk91dENpcmNcIjtcblxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cblx0Y29uc3QgJGJsb2NrcyA9ICQoIEJMT0NLX1NFTEVDVE9SICk7XG5cdGNvbnN0ICRyZWxsYXhUYXJnZXQgPSAkYmxvY2tzLmZpbHRlciggJy5ub3ZhLXNsaWRlc2hvdy0tcGFyYWxsYXgnICkuZmluZCggU0xJREVSX1NFTEVDVE9SICk7XG5cblx0Ly8gaW5pdGlhbGl6ZSBwYXJhbGxheCBlZmZlY3Rcblx0JHJlbGxheFRhcmdldC5yZWxsYXgoe1xuXHRcdGNvbnRhaW5lcjogJy5ub3ZhLXNsaWRlc2hvd19fbWFzaycsXG5cdFx0Y2hpbGRyZW46IENPTlRFTlRfU0VMRUNUT1IsXG5cdH0pO1xuXG5cdCRibG9ja3MuZWFjaCggZnVuY3Rpb24oIGluZGV4LCBibG9jayApIHtcblx0XHR2YXIgJGJsb2NrID0gJCggYmxvY2sgKSxcblx0XHRcdCRzbGlkZXIgPSAkYmxvY2suZmluZCggU0xJREVSX1NFTEVDVE9SICksXG5cdFx0XHQkYXJyb3dDb250YWluZXI7XG5cblx0XHRpZiAoICRzbGlkZXIuY2hpbGRyZW4oKS5sZW5ndGggPiAxICkge1xuXHRcdFx0JGFycm93Q29udGFpbmVyID0gJCggJzxkaXYgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fY29udHJvbHNcIj4nICkuYXBwZW5kVG8oICRibG9jayApO1xuXG5cdFx0XHRyZXNldEJsb2NrTWluSGVpZ2h0KCAkYmxvY2sgKTtcblx0XHRcdCRibG9jay5hZGRDbGFzcyggJ2lzLXJlYWR5JyApO1xuXG5cdFx0XHQkc2xpZGVyLm9uKCAnYmVmb3JlQ2hhbmdlJywgb25CZWZvcmVTbGlkZUNoYW5nZSApO1xuXG5cdFx0XHQkc2xpZGVyLnNsaWNrKHtcblx0XHRcdFx0cm93czogMCxcblx0XHRcdFx0Ly8gZm9yIHNpbXBsZXIgcmV2ZWFsIHRyYW5zaXRpb25zIGJldHdlZW4gc2xpZGVzXG5cdFx0XHRcdGZhZGU6IHRydWUsXG5cdFx0XHRcdHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2XCI+PC9kaXY+Jyxcblx0XHRcdFx0bmV4dEFycm93OiAnPGRpdiBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLW5leHRcIj48L2Rpdj4nLFxuXHRcdFx0XHRhcHBlbmRBcnJvd3M6ICRhcnJvd0NvbnRhaW5lcixcblx0XHRcdFx0c3BlZWQ6IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHJlc2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApIHtcblx0XHQkYmxvY2suY3NzKCAnbWluSGVpZ2h0JywgJycgKTtcblx0XHQkYmxvY2suY3NzKCAnbWluSGVpZ2h0JywgZ2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApICk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICkge1xuXHRcdHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHZhciAkc2xpZGVyID0gJGJsb2NrLmZpbmQoIFNMSURFUl9TRUxFQ1RPUiApO1xuXHRcdHZhciBzbGlkZXJXaWR0aCA9ICRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKS5vdXRlcldpZHRoKCk7XG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR2YXIgc2xpZGVyTWluSGVpZ2h0ID0gcGFyc2VJbnQoICRibG9jay5kYXRhKCAnbWluLWhlaWdodCcgKSApICogd2luZG93SGVpZ2h0IC8gMTAwO1xuXHRcdHZhciBtZWRpYU1pbkhlaWdodCA9IDA7XG5cdFx0dmFyIHNsaWRlTWF4SGVpZ2h0ID0gMDtcblx0XHR2YXIgbWF4QXNwZWN0UmF0aW8gPSAwO1xuXG5cdFx0JGJsb2NrLmZpbmQoIFNMSURFX1NFTEVDVE9SICkuZWFjaCggZnVuY3Rpb24oIGksIG9iaiApIHtcblx0XHRcdHZhciAkc2xpZGUgPSAkKCBvYmogKSxcblx0XHRcdFx0JG1lZGlhID0gJHNsaWRlLmZpbmQoICcubm92YS1zbGlkZXNob3dfX21lZGlhJyApLFxuXHRcdFx0XHR3aWR0aCA9ICRtZWRpYS5kYXRhKCAnd2lkdGgnICksXG5cdFx0XHRcdGhlaWdodCA9ICRtZWRpYS5kYXRhKCAnaGVpZ2h0JyApLFxuXHRcdFx0XHRhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuXHRcdFx0XHRzbGlkZUhlaWdodCA9ICRzbGlkZS5vdXRlckhlaWdodCgpO1xuXG5cdFx0XHRtYXhBc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvID4gbWF4QXNwZWN0UmF0aW8gPyBhc3BlY3RSYXRpbyA6IG1heEFzcGVjdFJhdGlvO1xuXHRcdFx0bWVkaWFNaW5IZWlnaHQgPSBzbGlkZXJXaWR0aCAvIG1heEFzcGVjdFJhdGlvO1xuXHRcdFx0c2xpZGVNYXhIZWlnaHQgPSBzbGlkZUhlaWdodCA+IHNsaWRlTWF4SGVpZ2h0ID8gc2xpZGVIZWlnaHQgOiBzbGlkZU1heEhlaWdodDtcblxuXHRcdH0gKTtcblxuXHRcdHJldHVybiBNYXRoLm1heCggc2xpZGVyTWluSGVpZ2h0LCBzbGlkZU1heEhlaWdodCwgbWVkaWFNaW5IZWlnaHQgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuXHRcdCRibG9ja3MuZWFjaCggZnVuY3Rpb24oIGluZGV4LCBibG9jayApIHtcblx0XHRcdHZhciAkYmxvY2sgPSAkKCBibG9jayApO1xuXHRcdFx0cmVzZXRCbG9ja01pbkhlaWdodCggJGJsb2NrIClcblx0XHRcdCRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKS5zbGljayggJ3JlZnJlc2gnICk7XG5cdFx0XHQkcmVsbGF4VGFyZ2V0LnJlbGxheCggJ3JlZnJlc2gnICk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbkJlZm9yZVNsaWRlQ2hhbmdlKCBldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlICkge1xuXHRcdGNvbnN0ICRjdXJyZW50U2xpZGUgPSAkKCBzbGljay4kc2xpZGVzW2N1cnJlbnRTbGlkZV0gKTtcblx0XHRjb25zdCAkbmV4dFNsaWRlID0gJCggc2xpY2suJHNsaWRlc1tuZXh0U2xpZGVdICk7XG5cblx0XHQkKCBzbGljay4kc2xpZGVzICkuY3NzKCAnekluZGV4JywgODAwICk7XG5cblx0XHR0cmFuc2l0aW9uKCAkY3VycmVudFNsaWRlLCAkbmV4dFNsaWRlLCBnZXREaXJlY3Rpb24oIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSApICk7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmFuc2l0aW9uKCAkY3VycmVudCwgJG5leHQsIHNpZ24gPSAxICkge1xuXHRcdGNvbnN0IHNsaWRlV2lkdGggPSAkY3VycmVudC5vdXRlcldpZHRoKCk7XG5cdFx0Y29uc3QgbW92ZSA9IDMwMDtcblxuXHRcdCRjdXJyZW50LnZlbG9jaXR5KCB7XG5cdFx0XHR0d2VlbjogWzAsIDFdXG5cdFx0fSwge1xuXHRcdFx0ZHVyYXRpb246IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cdFx0XHRlYXNpbmc6IFRSQU5TSVRJT05fRUFTSU5HLFxuXHRcdFx0cHJvZ3Jlc3M6IGZ1bmN0aW9uKGVsZW1lbnRzLCBwZXJjZW50Q29tcGxldGUsIHJlbWFpbmluZywgdHdlZW5WYWx1ZSwgYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gJG5leHQuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBuZXh0QmcgPSAkbmV4dC5maW5kKCBCQUNLR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBuZXh0RmcgPSAkbmV4dC5maW5kKCBGT1JFR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gJGN1cnJlbnQuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50QmcgPSAkY3VycmVudC5maW5kKCBCQUNLR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50RmcgPSAkY3VycmVudC5maW5kKCBGT1JFR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXG5cdFx0XHRcdGNvbnN0IG1vdmVYID0geCA9PiAndHJhbnNsYXRlWCgnICsgc2lnbiAqIHggKyAncHgpJztcblxuXHRcdFx0XHRuZXh0LnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKHNsaWRlV2lkdGggKiB0d2VlblZhbHVlICk7XG5cdFx0XHRcdG5leHRCZy5zdHlsZS50cmFuc2Zvcm0gPSBtb3ZlWCggKG1vdmUgLSBzbGlkZVdpZHRoKSAqIHR3ZWVuVmFsdWUgKTtcblx0XHRcdFx0bmV4dEZnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCBzbGlkZVdpZHRoICogLXR3ZWVuVmFsdWUgKTtcblxuXHRcdFx0XHRjdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCAtbW92ZSAqICgxIC0gdHdlZW5WYWx1ZSkgKTtcblx0XHRcdFx0Y3VycmVudEZnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCBtb3ZlICogKDEgLSB0d2VlblZhbHVlKSApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUgKSB7XG5cdFx0bGV0IGRpcmVjdGlvbiA9IDE7XG5cdFx0aWYgKCBzbGljay5zbGlkZUNvdW50ID4gMiApIHtcblx0XHRcdGlmICggY3VycmVudFNsaWRlID09PSAwICYmIG5leHRTbGlkZSA9PT0gc2xpY2suc2xpZGVDb3VudCAtIDEgKSB7XG5cdFx0XHRcdGRpcmVjdGlvbiA9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBuZXh0U2xpZGUgPCBjdXJyZW50U2xpZGUgJiYgKCBuZXh0U2xpZGUgIT09IDAgfHwgY3VycmVudFNsaWRlICE9PSBzbGljay5zbGlkZUNvdW50IC0gMSApICkge1xuXHRcdFx0XHRkaXJlY3Rpb24gPSAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcblx0fVxuXG5cdCQoIHdpbmRvdyApLm9uKCAncmVzaXplJywgZGVib3VuY2UoIG9uUmVzaXplLCAzMDAgKSApO1xuXG59KShqUXVlcnksIHdpbmRvdyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9mcm9udGVuZC5qcyIsImV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXHRcdGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cblx0XHRjb25zdCBsYXRlciA9ICgpID0+IHtcblx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9