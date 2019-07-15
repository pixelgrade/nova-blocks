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

	if (typeof $.fn.bully !== "undefined") {
		//		$( '.nova-hero-bullets' ).find( '.nova-hero' ).bully();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWVlNmFmYmNjZDUyZTNkMzIyNzciLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJmbiIsInJlbGxheCIsImZpbmQiLCJjb250YWluZXIiLCJidWxseSIsImpRdWVyeSIsIkJMT0NLX1NFTEVDVE9SIiwiU0xJREVSX1NFTEVDVE9SIiwiU0xJREVfU0VMRUNUT1IiLCJDT05URU5UX1NFTEVDVE9SIiwiQkFDS0dST1VORF9TRUxFQ1RPUiIsIkZPUkVHUk9VTkRfU0VMRUNUT1IiLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiVFJBTlNJVElPTl9FQVNJTkciLCIkYmxvY2tzIiwiJHJlbGxheFRhcmdldCIsImNoaWxkcmVuIiwiZWFjaCIsImluZGV4IiwiYmxvY2siLCIkYmxvY2siLCIkc2xpZGVyIiwiJGFycm93Q29udGFpbmVyIiwibGVuZ3RoIiwiYXBwZW5kVG8iLCJyZXNldEJsb2NrTWluSGVpZ2h0IiwiYWRkQ2xhc3MiLCJvbiIsIm9uQmVmb3JlU2xpZGVDaGFuZ2UiLCJzbGljayIsInJvd3MiLCJmYWRlIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXBwZW5kQXJyb3dzIiwic3BlZWQiLCJkZWJvdW5jZSIsIm9uUmVzaXplIiwiY3NzIiwiZ2V0QmxvY2tNaW5IZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJzbGlkZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsInNsaWRlck1pbkhlaWdodCIsInBhcnNlSW50IiwiZGF0YSIsIm1lZGlhTWluSGVpZ2h0Iiwic2xpZGVNYXhIZWlnaHQiLCJtYXhBc3BlY3RSYXRpbyIsImkiLCJvYmoiLCIkc2xpZGUiLCIkbWVkaWEiLCJ3aWR0aCIsImhlaWdodCIsImFzcGVjdFJhdGlvIiwic2xpZGVIZWlnaHQiLCJvdXRlckhlaWdodCIsIk1hdGgiLCJtYXgiLCJpcyIsImV2ZW50IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsIiRzbGlkZXMiLCIkbmV4dFNsaWRlIiwidHJhbnNpdGlvbiIsImdldERpcmVjdGlvbiIsIiRjdXJyZW50IiwiJG5leHQiLCJzaWduIiwic2xpZGVXaWR0aCIsIm1vdmUiLCJ2ZWxvY2l0eSIsInR3ZWVuIiwiZHVyYXRpb24iLCJlYXNpbmciLCJwcm9ncmVzcyIsImVsZW1lbnRzIiwicGVyY2VudENvbXBsZXRlIiwicmVtYWluaW5nIiwidHdlZW5WYWx1ZSIsImFjdGl2ZUNhbGwiLCJuZXh0IiwiZ2V0IiwibmV4dEJnIiwibmV4dEZnIiwiY3VycmVudCIsImN1cnJlbnRCZyIsImN1cnJlbnRGZyIsIm1vdmVYIiwieCIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlyZWN0aW9uIiwic2xpZGVDb3VudCIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFF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akIsSUFBc0JDLGNBQWNyQyxNQUFNc0UsVUFBTixHQUFtQixDQUE1RCxFQUFnRTtBQUMvREQsZ0JBQVksQ0FBQyxDQUFiO0FBQ0E7QUFDRCxPQUFLaEMsWUFBWUQsWUFBWixLQUE4QkMsY0FBYyxDQUFkLElBQW1CRCxpQkFBaUJwQyxNQUFNc0UsVUFBTixHQUFtQixDQUFyRixDQUFMLEVBQWdHO0FBQy9GRCxnQkFBWSxDQUFDLENBQWI7QUFDQTtBQUNEO0FBQ0QsU0FBT0EsU0FBUDtBQUNBO0FBRUQsQ0EzSUQsRUEySUc3RixNQTNJSCxFQTJJV1AsTUEzSVgsRTs7Ozs7Ozs7QUNYQTtBQUFPLElBQU1zQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ2dFLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUN2QyxLQUFJQyxVQUFVLElBQWQ7O0FBRUEsUUFBTyxZQUFZO0FBQ2xCLE1BQU1DLFVBQVUsSUFBaEI7QUFDQSxNQUFNQyxPQUFPQyxTQUFiOztBQUVBLE1BQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQ25CTixRQUFLTyxLQUFMLENBQVdKLE9BQVgsRUFBb0JDLElBQXBCO0FBQ0EsR0FGRDs7QUFJQUksZUFBYU4sT0FBYjtBQUNBQSxZQUFVTyxXQUFXSCxLQUFYLEVBQWtCTCxJQUFsQixDQUFWO0FBQ0EsRUFWRDtBQVdBLENBZE0sQyIsImZpbGUiOiIuL2Fzc2V0cy9qcy9mcm9udGVuZC5ibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVlZTZhZmJjY2Q1MmUzZDMyMjc3IiwiaW1wb3J0ICcuL2hlcm8vZnJvbnRlbmQnO1xuaW1wb3J0ICcuL3NsaWRlc2hvdy9mcm9udGVuZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2Zyb250ZW5kLmpzIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscyc7XG5cbihmdW5jdGlvbigkLCB3aW5kb3csIHVuZGVmaW5lZCkge1xuXG5cdC8vIGluaXRpYWxpemUgcGFyYWxsYXggZWZmZWN0XG5cdGlmICggdHlwZW9mICQuZm4ucmVsbGF4ICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdCQoICcubm92YS1oZXJvLS1wYXJhbGxheCcgKS5maW5kKCAnLm5vdmEtaGVyb19fYmFja2dyb3VuZCcgKS5yZWxsYXgoe1xuXHRcdFx0Y29udGFpbmVyOiAnLm5vdmEtaGVyb19fbWFzaycsXG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoIHR5cGVvZiAkLmZuLmJ1bGx5ICE9PSBcInVuZGVmaW5lZFwiICkge1xuLy9cdFx0JCggJy5ub3ZhLWhlcm8tYnVsbGV0cycgKS5maW5kKCAnLm5vdmEtaGVybycgKS5idWxseSgpO1xuXHR9XG5cbn0pKGpRdWVyeSwgd2luZG93KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vZnJvbnRlbmQuanMiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgQkxPQ0tfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93JztcbmNvbnN0IFNMSURFUl9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX3NsaWRlcic7XG5jb25zdCBTTElERV9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX3NsaWRlJztcbmNvbnN0IENPTlRFTlRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19jb250ZW50JztcbmNvbnN0IEJBQ0tHUk9VTkRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kJztcbmNvbnN0IEZPUkVHUk9VTkRfU0VMRUNUT1IgPSAnLm5vdmEtc2xpZGVzaG93X19mb3JlZ3JvdW5kJztcbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAxMDAwO1xuY29uc3QgVFJBTlNJVElPTl9FQVNJTkcgPSBcImVhc2VJbk91dENpcmNcIjtcblxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cblx0Y29uc3QgJGJsb2NrcyA9ICQoIEJMT0NLX1NFTEVDVE9SICk7XG5cdGNvbnN0ICRyZWxsYXhUYXJnZXQgPSAkKCAnLm5vdmEtc2xpZGVzaG93LS1wYXJhbGxheCcgKS5maW5kKCBTTElERVJfU0VMRUNUT1IgKTtcblxuXHQvLyBpbml0aWFsaXplIHBhcmFsbGF4IGVmZmVjdFxuXHRpZiAoIHR5cGVvZiAkLmZuLnJlbGxheCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHQkcmVsbGF4VGFyZ2V0LnJlbGxheCgge1xuXHRcdFx0Y29udGFpbmVyOiAnLm5vdmEtc2xpZGVzaG93X19tYXNrJyxcblx0XHRcdGNoaWxkcmVuOiBDT05URU5UX1NFTEVDVE9SLFxuXHRcdH0gKTtcblx0fVxuXG5cdCRibG9ja3MuZWFjaCggZnVuY3Rpb24oIGluZGV4LCBibG9jayApIHtcblx0XHR2YXIgJGJsb2NrID0gJCggYmxvY2sgKSxcblx0XHRcdCRzbGlkZXIgPSAkYmxvY2suZmluZCggU0xJREVSX1NFTEVDVE9SICksXG5cdFx0XHQkYXJyb3dDb250YWluZXI7XG5cblx0XHRpZiAoICRzbGlkZXIuY2hpbGRyZW4oKS5sZW5ndGggPiAxICkge1xuXHRcdFx0JGFycm93Q29udGFpbmVyID0gJCggJzxkaXYgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fY29udHJvbHNcIj4nICkuYXBwZW5kVG8oICRibG9jayApO1xuXG5cdFx0XHRyZXNldEJsb2NrTWluSGVpZ2h0KCAkYmxvY2sgKTtcblx0XHRcdCRibG9jay5hZGRDbGFzcyggJ2lzLXJlYWR5JyApO1xuXG5cdFx0XHQkc2xpZGVyLm9uKCAnYmVmb3JlQ2hhbmdlJywgb25CZWZvcmVTbGlkZUNoYW5nZSApO1xuXG5cdFx0XHQkc2xpZGVyLnNsaWNrKHtcblx0XHRcdFx0cm93czogMCxcblx0XHRcdFx0Ly8gZm9yIHNpbXBsZXIgcmV2ZWFsIHRyYW5zaXRpb25zIGJldHdlZW4gc2xpZGVzXG5cdFx0XHRcdGZhZGU6IHRydWUsXG5cdFx0XHRcdHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2XCI+PC9kaXY+Jyxcblx0XHRcdFx0bmV4dEFycm93OiAnPGRpdiBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLW5leHRcIj48L2Rpdj4nLFxuXHRcdFx0XHRhcHBlbmRBcnJvd3M6ICRhcnJvd0NvbnRhaW5lcixcblx0XHRcdFx0c3BlZWQ6IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoIHdpbmRvdyApLm9uKCAncmVzaXplJywgZGVib3VuY2UoIG9uUmVzaXplLCAzMDAgKSApO1xuXG5cdGZ1bmN0aW9uIHJlc2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApIHtcblx0XHQkYmxvY2suY3NzKCAnbWluSGVpZ2h0JywgJycgKTtcblx0XHQkYmxvY2suY3NzKCAnbWluSGVpZ2h0JywgZ2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApICk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICkge1xuXHRcdHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHZhciAkc2xpZGVyID0gJGJsb2NrLmZpbmQoIFNMSURFUl9TRUxFQ1RPUiApO1xuXHRcdHZhciBzbGlkZXJXaWR0aCA9ICRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKS5vdXRlcldpZHRoKCk7XG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR2YXIgc2xpZGVyTWluSGVpZ2h0ID0gcGFyc2VJbnQoICRibG9jay5kYXRhKCAnbWluLWhlaWdodCcgKSApICogd2luZG93SGVpZ2h0IC8gMTAwO1xuXHRcdHZhciBtZWRpYU1pbkhlaWdodCA9IDA7XG5cdFx0dmFyIHNsaWRlTWF4SGVpZ2h0ID0gMDtcblx0XHR2YXIgbWF4QXNwZWN0UmF0aW8gPSAwO1xuXG5cdFx0JGJsb2NrLmZpbmQoIFNMSURFX1NFTEVDVE9SICkuZWFjaCggZnVuY3Rpb24oIGksIG9iaiApIHtcblx0XHRcdHZhciAkc2xpZGUgPSAkKCBvYmogKSxcblx0XHRcdFx0JG1lZGlhID0gJHNsaWRlLmZpbmQoICcubm92YS1zbGlkZXNob3dfX21lZGlhJyApLFxuXHRcdFx0XHR3aWR0aCA9ICRtZWRpYS5kYXRhKCAnd2lkdGgnICksXG5cdFx0XHRcdGhlaWdodCA9ICRtZWRpYS5kYXRhKCAnaGVpZ2h0JyApLFxuXHRcdFx0XHRhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuXHRcdFx0XHRzbGlkZUhlaWdodCA9ICRzbGlkZS5vdXRlckhlaWdodCgpO1xuXG5cdFx0XHRtYXhBc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvID4gbWF4QXNwZWN0UmF0aW8gPyBhc3BlY3RSYXRpbyA6IG1heEFzcGVjdFJhdGlvO1xuXHRcdFx0bWVkaWFNaW5IZWlnaHQgPSBzbGlkZXJXaWR0aCAvIG1heEFzcGVjdFJhdGlvO1xuXHRcdFx0c2xpZGVNYXhIZWlnaHQgPSBzbGlkZUhlaWdodCA+IHNsaWRlTWF4SGVpZ2h0ID8gc2xpZGVIZWlnaHQgOiBzbGlkZU1heEhlaWdodDtcblxuXHRcdH0gKTtcblxuXHRcdHJldHVybiBNYXRoLm1heCggc2xpZGVyTWluSGVpZ2h0LCBzbGlkZU1heEhlaWdodCwgbWVkaWFNaW5IZWlnaHQgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuXG5cdFx0JGJsb2Nrcy5lYWNoKCBmdW5jdGlvbiggaW5kZXgsIGJsb2NrICkge1xuXHRcdFx0dmFyICRibG9jayA9ICQoIGJsb2NrICk7XG5cdFx0XHR2YXIgJHNsaWRlciA9ICRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKTtcblxuXHRcdFx0cmVzZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICk7XG5cdFx0XHQkcmVsbGF4VGFyZ2V0LnJlbGxheCggJ3JlZnJlc2gnICk7XG5cblx0XHRcdGlmICggJHNsaWRlci5pcyggJy5zbGljay1pbml0aWFsaXplZCcgKSApIHtcblx0XHRcdFx0JHNsaWRlci5zbGljayggJ3NldFBvc2l0aW9uJyApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkJlZm9yZVNsaWRlQ2hhbmdlKCBldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlICkge1xuXHRcdGNvbnN0ICRjdXJyZW50U2xpZGUgPSAkKCBzbGljay4kc2xpZGVzW2N1cnJlbnRTbGlkZV0gKTtcblx0XHRjb25zdCAkbmV4dFNsaWRlID0gJCggc2xpY2suJHNsaWRlc1tuZXh0U2xpZGVdICk7XG5cblx0XHQkKCBzbGljay4kc2xpZGVzICkuY3NzKCAnekluZGV4JywgODAwICk7XG5cblx0XHR0cmFuc2l0aW9uKCAkY3VycmVudFNsaWRlLCAkbmV4dFNsaWRlLCBnZXREaXJlY3Rpb24oIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSApICk7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmFuc2l0aW9uKCAkY3VycmVudCwgJG5leHQsIHNpZ24gPSAxICkge1xuXHRcdGNvbnN0IHNsaWRlV2lkdGggPSAkY3VycmVudC5vdXRlcldpZHRoKCk7XG5cdFx0Y29uc3QgbW92ZSA9IDMwMDtcblxuXHRcdCRjdXJyZW50LnZlbG9jaXR5KCB7XG5cdFx0XHR0d2VlbjogWzAsIDFdXG5cdFx0fSwge1xuXHRcdFx0ZHVyYXRpb246IFRSQU5TSVRJT05fRFVSQVRJT04sXG5cdFx0XHRlYXNpbmc6IFRSQU5TSVRJT05fRUFTSU5HLFxuXHRcdFx0cHJvZ3Jlc3M6IGZ1bmN0aW9uKGVsZW1lbnRzLCBwZXJjZW50Q29tcGxldGUsIHJlbWFpbmluZywgdHdlZW5WYWx1ZSwgYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gJG5leHQuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBuZXh0QmcgPSAkbmV4dC5maW5kKCBCQUNLR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBuZXh0RmcgPSAkbmV4dC5maW5kKCBGT1JFR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gJGN1cnJlbnQuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50QmcgPSAkY3VycmVudC5maW5kKCBCQUNLR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50RmcgPSAkY3VycmVudC5maW5kKCBGT1JFR1JPVU5EX1NFTEVDVE9SICkuZ2V0KDApO1xuXG5cdFx0XHRcdGNvbnN0IG1vdmVYID0geCA9PiAndHJhbnNsYXRlWCgnICsgc2lnbiAqIHggKyAncHgpJztcblxuXHRcdFx0XHRuZXh0LnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKHNsaWRlV2lkdGggKiB0d2VlblZhbHVlICk7XG5cdFx0XHRcdG5leHRCZy5zdHlsZS50cmFuc2Zvcm0gPSBtb3ZlWCggKG1vdmUgLSBzbGlkZVdpZHRoKSAqIHR3ZWVuVmFsdWUgKTtcblx0XHRcdFx0bmV4dEZnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCBzbGlkZVdpZHRoICogLXR3ZWVuVmFsdWUgKTtcblxuXHRcdFx0XHRjdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCAtbW92ZSAqICgxIC0gdHdlZW5WYWx1ZSkgKTtcblx0XHRcdFx0Y3VycmVudEZnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCBtb3ZlICogKDEgLSB0d2VlblZhbHVlKSApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUgKSB7XG5cdFx0bGV0IGRpcmVjdGlvbiA9IDE7XG5cdFx0aWYgKCBzbGljay5zbGlkZUNvdW50ID4gMiApIHtcblx0XHRcdGlmICggY3VycmVudFNsaWRlID09PSAwICYmIG5leHRTbGlkZSA9PT0gc2xpY2suc2xpZGVDb3VudCAtIDEgKSB7XG5cdFx0XHRcdGRpcmVjdGlvbiA9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBuZXh0U2xpZGUgPCBjdXJyZW50U2xpZGUgJiYgKCBuZXh0U2xpZGUgIT09IDAgfHwgY3VycmVudFNsaWRlICE9PSBzbGljay5zbGlkZUNvdW50IC0gMSApICkge1xuXHRcdFx0XHRkaXJlY3Rpb24gPSAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcblx0fVxuXG59KShqUXVlcnksIHdpbmRvdyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9mcm9udGVuZC5qcyIsImV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXHRcdGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cblx0XHRjb25zdCBsYXRlciA9ICgpID0+IHtcblx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9