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
/******/ 	return __webpack_require__(__webpack_require__.s = 155);
/******/ })
/************************************************************************/
/******/ ({

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_frontend__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slideshow_frontend__ = __webpack_require__(157);



/***/ }),

/***/ 156:
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
})(jQuery, window);

/***/ }),

/***/ 157:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjI2ODBlYjYyYjUzZmFiOWZiNTYiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJmbiIsInJlbGxheCIsImZpbmQiLCJjb250YWluZXIiLCJqUXVlcnkiLCJCTE9DS19TRUxFQ1RPUiIsIlNMSURFUl9TRUxFQ1RPUiIsIlNMSURFX1NFTEVDVE9SIiwiQ09OVEVOVF9TRUxFQ1RPUiIsIkJBQ0tHUk9VTkRfU0VMRUNUT1IiLCJGT1JFR1JPVU5EX1NFTEVDVE9SIiwiVFJBTlNJVElPTl9EVVJBVElPTiIsIlRSQU5TSVRJT05fRUFTSU5HIiwiJGJsb2NrcyIsIiRyZWxsYXhUYXJnZXQiLCJjaGlsZHJlbiIsImVhY2giLCJpbmRleCIsImJsb2NrIiwiJGJsb2NrIiwiJHNsaWRlciIsIiRhcnJvd0NvbnRhaW5lciIsImxlbmd0aCIsImFwcGVuZFRvIiwicmVzZXRCbG9ja01pbkhlaWdodCIsImFkZENsYXNzIiwib24iLCJvbkJlZm9yZVNsaWRlQ2hhbmdlIiwic2xpY2siLCJyb3dzIiwiZmFkZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFwcGVuZEFycm93cyIsInNwZWVkIiwiZGVib3VuY2UiLCJvblJlc2l6ZSIsImNzcyIsImdldEJsb2NrTWluSGVpZ2h0Iiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwic2xpZGVyV2lkdGgiLCJvdXRlcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzbGlkZXJNaW5IZWlnaHQiLCJwYXJzZUludCIsImRhdGEiLCJtZWRpYU1pbkhlaWdodCIsInNsaWRlTWF4SGVpZ2h0IiwibWF4QXNwZWN0UmF0aW8iLCJpIiwib2JqIiwiJHNsaWRlIiwiJG1lZGlhIiwid2lkdGgiLCJoZWlnaHQiLCJhc3BlY3RSYXRpbyIsInNsaWRlSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJNYXRoIiwibWF4IiwiaXMiLCJldmVudCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCIkc2xpZGVzIiwiJG5leHRTbGlkZSIsInRyYW5zaXRpb24iLCJnZXREaXJlY3Rpb24iLCIkY3VycmVudCIsIiRuZXh0Iiwic2lnbiIsInNsaWRlV2lkdGgiLCJtb3ZlIiwidmVsb2NpdHkiLCJ0d2VlbiIsImR1cmF0aW9uIiwiZWFzaW5nIiwicHJvZ3Jlc3MiLCJlbGVtZW50cyIsInBlcmNlbnRDb21wbGV0ZSIsInJlbWFpbmluZyIsInR3ZWVuVmFsdWUiLCJhY3RpdmVDYWxsIiwibmV4dCIsImdldCIsIm5leHRCZyIsIm5leHRGZyIsImN1cnJlbnQiLCJjdXJyZW50QmciLCJjdXJyZW50RmciLCJtb3ZlWCIsIngiLCJzdHlsZSIsInRyYW5zZm9ybSIsImRpcmVjdGlvbiIsInNsaWRlQ291bnQiLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4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Q0QsT0FBS2hDLFlBQVlELFlBQVosS0FBOEJDLGNBQWMsQ0FBZCxJQUFtQkQsaUJBQWlCcEMsTUFBTXNFLFVBQU4sR0FBbUIsQ0FBckYsQ0FBTCxFQUFnRztBQUMvRkQsZ0JBQVksQ0FBQyxDQUFiO0FBQ0E7QUFDRDtBQUNELFNBQU9BLFNBQVA7QUFDQTtBQUVELENBM0lELEVBMklHN0YsTUEzSUgsRUEySVdOLE1BM0lYLEU7Ozs7Ozs7O0FDWEE7QUFBTyxJQUFNcUMsV0FBVyxTQUFYQSxRQUFXLENBQUNnRSxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDdkMsS0FBSUMsVUFBVSxJQUFkOztBQUVBLFFBQU8sWUFBWTtBQUNsQixNQUFNQyxVQUFVLElBQWhCO0FBQ0EsTUFBTUMsT0FBT0MsU0FBYjs7QUFFQSxNQUFNQyxRQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUNuQk4sUUFBS08sS0FBTCxDQUFXSixPQUFYLEVBQW9CQyxJQUFwQjtBQUNBLEdBRkQ7O0FBSUFJLGVBQWFOLE9BQWI7QUFDQUEsWUFBVU8sV0FBV0gsS0FBWCxFQUFrQkwsSUFBbEIsQ0FBVjtBQUNBLEVBVkQ7QUFXQSxDQWRNLEMiLCJmaWxlIjoiLi9hc3NldHMvanMvZnJvbnRlbmQuYmxvY2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTU1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMjY4MGViNjJiNTNmYWI5ZmI1NiIsImltcG9ydCAnLi9oZXJvL2Zyb250ZW5kJztcbmltcG9ydCAnLi9zbGlkZXNob3cvZnJvbnRlbmQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9mcm9udGVuZC5qcyIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4oZnVuY3Rpb24oJCwgd2luZG93LCB1bmRlZmluZWQpIHtcblxuXHQvLyBpbml0aWFsaXplIHBhcmFsbGF4IGVmZmVjdFxuXHRpZiAoIHR5cGVvZiAkLmZuLnJlbGxheCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHQkKCAnLm5vdmEtaGVyby0tcGFyYWxsYXgnICkuZmluZCggJy5ub3ZhLWhlcm9fX2JhY2tncm91bmQnICkucmVsbGF4KHtcblx0XHRcdGNvbnRhaW5lcjogJy5ub3ZhLWhlcm9fX21hc2snLFxuXHRcdH0pO1xuXHR9XG5cbn0pKGpRdWVyeSwgd2luZG93KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vZnJvbnRlbmQuanMiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgQkxPQ0tfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93JztcbmNvbnN0IFNMSURFUl9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX3NsaWRlcic7XG5jb25zdCBTTElERV9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX3NsaWRlJztcbmNvbnN0IENPTlRFTlRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19jb250ZW50JztcbmNvbnN0IEJBQ0tHUk9VTkRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kJztcbmNvbnN0IEZPUkVHUk9VTkRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19mb3JlZ3JvdW5kJztcbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxMDAwO1xuY29uc3QgVFJBTlNJVElPTl9FQVNJTkcgPSBcImVhc2VJbk91dENpcmNcIjtcblxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cblx0Y29uc3QgJGJsb2NrcyA9ICQoIEJMT0NLX1NFTEVDVE9SICk7XG5cdGNvbnN0ICRyZWxsYXhUYXJnZXQgPSAkKCAnLm5vdmEtc2xpZGVzaG93LS1wYXJhbGxheCcgKS5maW5kKCBTTElERVJfU0VMRUNUT1IgKTtcblxuXHQvLyBpbml0aWFsaXplIHBhcmFsbGF4IGVmZmVjdFxuXHRpZiAoIHR5cGVvZiAkLmZuLnJlbGxheCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHQkcmVsbGF4VGFyZ2V0LnJlbGxheCgge1xuXHRcdFx0Y29udGFpbmVyOiAnLm5vdmEtc2xpZGVzaG93X19tYXNrJyxcblx0XHRcdGNoaWxkcmVuOiBDT05URU5UX1NFTEVDVE9SLFxuXHRcdH0gKTtcblx0fVxuXG5cdCRibG9ja3MuZWFjaCggZnVuY3Rpb24oIGluZGV4LCBibG9jayApIHtcblx0XHR2YXIgJGJsb2NrID0gJCggYmxvY2sgKSxcblx0XHRcdCRzbGlkZXIgPSAkYmxvY2suZmluZCggU0xJREVSX1NFTEVDVE9SICksXG5cdFx0XHQkYXJyb3dDb250YWluZXI7XG5cblx0XHRpZiAoICRzbGlkZXIuY2hpbGRyZW4oKS5sZW5ndGggPiAxICkge1xuXHRcdFx0JGFycm93Q29udGFpbmVyID0gJCggJzxkaXYgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fY29udHJvbHNcIj4nICkuYXBwZW5kVG8oICRibG9jayApO1xuXG5cdFx0XHRyZXNldEJsb2NrTWluSGVpZ2h0KCAkYmxvY2sgKTtcblx0XHRcdCRibG9jay5hZGRDbGFzcyggJ2lzLXJlYWR5JyApO1xuXG5cdFx0XHQkc2xpZGVyLm9uKCAnYmVmb3JlQ2hhbmdlJywgb25CZWZvcmVTbGlkZUNoYW5nZSApO1xuXG5cdFx0XHQkc2xpZGVyLnNsaWNrKHtcblx0XHRcdFx0cm93czogMCxcblx0XHRcdFx0Ly8gZm9yIHNpbXBsZXIgcmV2ZWFsIHRyYW5zaXRpb25zIGJldHdlZW4gc2xpZGVzXG5cdFx0XHRcdGZhZGU6IHRydWUsXG5cdFx0XHRcdHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2XCI+PC9kaXY+Jyxcblx0XHRcdFx0bmV4dEFycm93OiAnPGRpdiBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLW5leHRcIj48L2Rpdj4nLFxuXHRcdFx0XHRhcHBlbmRBcnJvd3M6ICRhcnJvd0NvbnRhaW5lcixcblx0XHRcdFx0c3BlZWQ6IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoIHdpbmRvdyApLm9uKCAncmVzaXplJywgZGVib3VuY2UoIG9uUmVzaXplLCAzMDAgKSApO1xuXG5cdGZ1bmN0aW9uIHJlc2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApIHtcblx0XHQkYmxvY2suY3NzKCAnbWluSGVpZ2h0JywgJycgKTtcblx0XHQkYmxvY2suY3NzKCAnbWluSGVpZ2h0JywgZ2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApICk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICkge1xuXHRcdHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHZhciAkc2xpZGVyID0gJGJsb2NrLmZpbmQoIFNMSURFUl9TRUxFQ1RPUiApO1xuXHRcdHZhciBzbGlkZXJXaWR0aCA9ICRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKS5vdXRlcldpZHRoKCk7XG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR2YXIgc2xpZGVyTWluSGVpZ2h0ID0gcGFyc2VJbnQoICRibG9jay5kYXRhKCAnbWluLWhlaWdodCcgKSApICogd2luZG93SGVpZ2h0IC8gMTAwO1xuXHRcdHZhciBtZWRpYU1pbkhlaWdodCA9IDA7XG5cdFx0dmFyIHNsaWRlTWF4SGVpZ2h0ID0gMDtcblx0XHR2YXIgbWF4QXNwZWN0UmF0aW8gPSAwO1xuXG5cdFx0JGJsb2NrLmZpbmQoIFNMSURFX1NFTEVDVE9SICkuZWFjaCggZnVuY3Rpb24oIGksIG9iaiApIHtcblx0XHRcdHZhciAkc2xpZGUgPSAkKCBvYmogKSxcblx0XHRcdFx0JG1lZGlhID0gJHNsaWRlLmZpbmQoICcubm92YS1zbGlkZXNob3dfX21lZGlhJyApLFxuXHRcdFx0XHR3aWR0aCA9ICRtZWRpYS5kYXRhKCAnd2lkdGgnICksXG5cdFx0XHRcdGhlaWdodCA9ICRtZWRpYS5kYXRhKCAnaGVpZ2h0JyApLFxuXHRcdFx0XHRhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuXHRcdFx0XHRzbGlkZUhlaWdodCA9ICRzbGlkZS5vdXRlckhlaWdodCgpO1xuXG5cdFx0XHRtYXhBc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvID4gbWF4QXNwZWN0UmF0aW8gPyBhc3BlY3RSYXRpbyA6IG1heEFzcGVjdFJhdGlvO1xuXHRcdFx0bWVkaWFNaW5IZWlnaHQgPSBzbGlkZXJXaWR0aCAvIG1heEFzcGVjdFJhdGlvO1xuXHRcdFx0c2xpZGVNYXhIZWlnaHQgPSBzbGlkZUhlaWdodCA+IHNsaWRlTWF4SGVpZ2h0ID8gc2xpZGVIZWlnaHQgOiBzbGlkZU1heEhlaWdodDtcblxuXHRcdH0gKTtcblxuXHRcdHJldHVybiBNYXRoLm1heCggc2xpZGVyTWluSGVpZ2h0LCBzbGlkZU1heEhlaWdodCwgbWVkaWFNaW5IZWlnaHQgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuXG5cdFx0JGJsb2Nrcy5lYWNoKCBmdW5jdGlvbiggaW5kZXgsIGJsb2NrICkge1xuXHRcdFx0dmFyICRibG9jayA9ICQoIGJsb2NrICk7XG5cdFx0XHR2YXIgJHNsaWRlciA9ICRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKTtcblxuXHRcdFx0cmVzZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICk7XG5cdFx0XHQkcmVsbGF4VGFyZ2V0LnJlbGxheCggJ3JlZnJlc2gnICk7XG5cblx0XHRcdGlmICggJHNsaWRlci5pcyggJy5zbGljay1pbml0aWFsaXplZCcgKSApIHtcblx0XHRcdFx0JHNsaWRlci5zbGljayggJ3NldFBvc2l0aW9uJyApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkJlZm9yZVNsaWRlQ2hhbmdlKCBldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlICkge1xuXHRcdGNvbnN0ICRjdXJyZW50U2xpZGUgPSAkKCBzbGljay4kc2xpZGVzW2N1cnJlbnRTbGlkZV0gKTtcblx0XHRjb25zdCAkbmV4dFNsaWRlID0gJCggc2xpY2suJHNsaWRlc1tuZXh0U2xpZGVdICk7XG5cblx0XHQkKCBzbGljay4kc2xpZGVzICkuY3NzKCAnekluZGV4JywgODAwICk7XG5cblx0XHR0cmFuc2l0aW9uKCAkY3VycmVudFNsaWRlLCAkbmV4dFNsaWRlLCBnZXREaXJlY3Rpb24oIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSApICk7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmFuc2l0aW9uKCAkY3VycmVudCwgJG5leHQsIHNpZ24gPSAxICkge1xuXHRcdGNvbnN0IHNsaWRlV2lkdGggPSAkY3VycmVudC5vdXRlcldpZHRoKCk7XG5cdFx0Y29uc3QgbW92ZSA9IDMwMDtcblxuXHRcdCRjdXJyZW50LnZlbG9jaXR5KCB7XG5cdFx0XHR0d2VlbjogWzAsIDFdXG5cdFx0fSwge1xuXHRcdFx0ZHVyYXRpb246IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cdFx0XHRlYXNpbmc6IFRSQU5TSVRJT05fRUFTSU5HLFxuXHRcdFx0cHJvZ3Jlc3M6IGZ1bmN0aW9uKGVsZW1lbnRzLCBwZXJjZW50Q29tcGxldGUsIHJlbWFpbmluZywgdHdlZW5WYWx1ZSwgYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gJG5leHQuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBuZXh0QmcgPSAkbmV4dC5maW5kKCBCQUNLR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBuZXh0RmcgPSAkbmV4dC5maW5kKCBGT1JFR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gJGN1cnJlbnQuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50QmcgPSAkY3VycmVudC5maW5kKCBCQUNLR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50RmcgPSAkY3VycmVudC5maW5kKCBGT1JFR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXG5cdFx0XHRcdGNvbnN0IG1vdmVYID0geCA9PiAndHJhbnNsYXRlWCgnICsgc2lnbiAqIHggKyAncHgpJztcblxuXHRcdFx0XHRuZXh0LnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKHNsaWRlV2lkdGggKiB0d2VlblZhbHVlICk7XG5cdFx0XHRcdG5leHRCZy5zdHlsZS50cmFuc2Zvcm0gPSBtb3ZlWCggKG1vdmUgLSBzbGlkZVdpZHRoKSAqIHR3ZWVuVmFsdWUgKTtcblx0XHRcdFx0bmV4dEZnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCBzbGlkZVdpZHRoICogLXR3ZWVuVmFsdWUgKTtcblxuXHRcdFx0XHRjdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCAtbW92ZSAqICgxIC0gdHdlZW5WYWx1ZSkgKTtcblx0XHRcdFx0Y3VycmVudEZnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCBtb3ZlICogKDEgLSB0d2VlblZhbHVlKSApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUgKSB7XG5cdFx0bGV0IGRpcmVjdGlvbiA9IDE7XG5cdFx0aWYgKCBzbGljay5zbGlkZUNvdW50ID4gMiApIHtcblx0XHRcdGlmICggY3VycmVudFNsaWRlID09PSAwICYmIG5leHRTbGlkZSA9PT0gc2xpY2suc2xpZGVDb3VudCAtIDEgKSB7XG5cdFx0XHRcdGRpcmVjdGlvbiA9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBuZXh0U2xpZGUgPCBjdXJyZW50U2xpZGUgJiYgKCBuZXh0U2xpZGUgIT09IDAgfHwgY3VycmVudFNsaWRlICE9PSBzbGljay5zbGlkZUNvdW50IC0gMSApICkge1xuXHRcdFx0XHRkaXJlY3Rpb24gPSAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcblx0fVxuXG59KShqUXVlcnksIHdpbmRvdyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9mcm9udGVuZC5qcyIsImV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXHRcdGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cblx0XHRjb25zdCBsYXRlciA9ICgpID0+IHtcblx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9