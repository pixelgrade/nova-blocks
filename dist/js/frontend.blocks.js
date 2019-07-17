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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_hero_frontend__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_hero_frontend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_hero_frontend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_slideshow_frontend__ = __webpack_require__(157);



/***/ }),

/***/ 156:
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(31);


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

/***/ 31:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGQzNzIxODdlMzU5Nzk2N2FjNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVyby9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9mcm9udGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImZuIiwicmVsbGF4IiwiZmluZCIsImNvbnRhaW5lciIsImpRdWVyeSIsIkJMT0NLX1NFTEVDVE9SIiwiU0xJREVSX1NFTEVDVE9SIiwiU0xJREVfU0VMRUNUT1IiLCJDT05URU5UX1NFTEVDVE9SIiwiQkFDS0dST1VORF9TRUxFQ1RPUiIsIkZPUkVHUk9VTkRfU0VMRUNUT1IiLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiVFJBTlNJVElPTl9FQVNJTkciLCIkYmxvY2tzIiwiJHJlbGxheFRhcmdldCIsImNoaWxkcmVuIiwiZWFjaCIsImluZGV4IiwiYmxvY2siLCIkYmxvY2siLCIkc2xpZGVyIiwiJGFycm93Q29udGFpbmVyIiwibGVuZ3RoIiwiYXBwZW5kVG8iLCJyZXNldEJsb2NrTWluSGVpZ2h0IiwiYWRkQ2xhc3MiLCJvbiIsIm9uQmVmb3JlU2xpZGVDaGFuZ2UiLCJzbGljayIsInJvd3MiLCJmYWRlIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXBwZW5kQXJyb3dzIiwic3BlZWQiLCJkZWJvdW5jZSIsIm9uUmVzaXplIiwiY3NzIiwiZ2V0QmxvY2tNaW5IZWlnaHQiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJzbGlkZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsInNsaWRlck1pbkhlaWdodCIsInBhcnNlSW50IiwiZGF0YSIsIm1lZGlhTWluSGVpZ2h0Iiwic2xpZGVNYXhIZWlnaHQiLCJtYXhBc3BlY3RSYXRpbyIsImkiLCJvYmoiLCIkc2xpZGUiLCIkbWVkaWEiLCJ3aWR0aCIsImhlaWdodCIsImFzcGVjdFJhdGlvIiwic2xpZGVIZWlnaHQiLCJvdXRlckhlaWdodCIsIk1hdGgiLCJtYXgiLCJpcyIsImV2ZW50IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsIiRzbGlkZXMiLCIkbmV4dFNsaWRlIiwidHJhbnNpdGlvbiIsImdldERpcmVjdGlvbiIsIiRjdXJyZW50IiwiJG5leHQiLCJzaWduIiwic2xpZGVXaWR0aCIsIm1vdmUiLCJ2ZWxvY2l0eSIsInR3ZWVuIiwiZHVyYXRpb24iLCJlYXNpbmciLCJwcm9ncmVzcyIsImVsZW1lbnRzIiwicGVyY2VudENvbXBsZXRlIiwicmVtYWluaW5nIiwidHdlZW5WYWx1ZSIsImFjdGl2ZUNhbGwiLCJuZXh0IiwiZ2V0IiwibmV4dEJnIiwibmV4dEZnIiwiY3VycmVudCIsImN1cnJlbnRCZyIsImN1cnJlbnRGZyIsIm1vdmVYIiwieCIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlyZWN0aW9uIiwic2xpZGVDb3VudCIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDQUEsQ0FBQyxVQUFTQSxDQUFULEVBQVlDLE1BQVosRUFBb0JDLFNBQXBCLEVBQStCOztBQUUvQjtBQUNBLEtBQUssT0FBT0YsRUFBRUcsRUFBRixDQUFLQyxNQUFaLEtBQXVCLFdBQTVCLEVBQTBDO0FBQ3pDSixJQUFHLHNCQUFILEVBQTRCSyxJQUE1QixDQUFrQyx3QkFBbEMsRUFBNkRELE1BQTdELENBQW9FO0FBQ25FRSxjQUFXO0FBRHdELEdBQXBFO0FBR0E7QUFFRCxDQVRELEVBU0dDLE1BVEgsRUFTV04sTUFUWCxFOzs7Ozs7OztBQ0FBO0FBQUE7O0FBRUEsSUFBTU8saUJBQWlCLGlCQUF2QjtBQUNBLElBQU1DLGtCQUFrQix5QkFBeEI7QUFDQSxJQUFNQyxpQkFBaUIsd0JBQXZCO0FBQ0EsSUFBTUMsbUJBQW1CLDBCQUF6QjtBQUNBLElBQU1DLHNCQUFzQiw2QkFBNUI7QUFDQSxJQUFNQyxzQkFBc0IsNkJBQTVCO0FBQ0EsSUFBTUMsc0JBQXNCLElBQTVCO0FBQ0EsSUFBTUMsb0JBQW9CLGVBQTFCOztBQUVBLENBQUMsVUFBU2YsQ0FBVCxFQUFZQyxNQUFaLEVBQW9CQyxTQUFwQixFQUErQjs7QUFFL0IsS0FBTWMsVUFBVWhCLEVBQUdRLGNBQUgsQ0FBaEI7QUFDQSxLQUFNUyxnQkFBZ0JqQixFQUFHLDJCQUFILEVBQWlDSyxJQUFqQyxDQUF1Q0ksZUFBdkMsQ0FBdEI7O0FBRUE7QUFDQSxLQUFLLE9BQU9ULEVBQUVHLEVBQUYsQ0FBS0MsTUFBWixLQUF1QixXQUE1QixFQUEwQztBQUN6Q2EsZ0JBQWNiLE1BQWQsQ0FBc0I7QUFDckJFLGNBQVcsdUJBRFU7QUFFckJZLGFBQVVQO0FBRlcsR0FBdEI7QUFJQTs7QUFFREssU0FBUUcsSUFBUixDQUFjLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXlCO0FBQ3RDLE1BQUlDLFNBQVN0QixFQUFHcUIsS0FBSCxDQUFiO0FBQUEsTUFDQ0UsVUFBVUQsT0FBT2pCLElBQVAsQ0FBYUksZUFBYixDQURYO0FBQUEsTUFFQ2UsZUFGRDs7QUFJQSxNQUFLRCxRQUFRTCxRQUFSLEdBQW1CTyxNQUFuQixHQUE0QixDQUFqQyxFQUFxQztBQUNwQ0QscUJBQWtCeEIsRUFBRyx3Q0FBSCxFQUE4QzBCLFFBQTlDLENBQXdESixNQUF4RCxDQUFsQjs7QUFFQUssdUJBQXFCTCxNQUFyQjtBQUNBQSxVQUFPTSxRQUFQLENBQWlCLFVBQWpCOztBQUVBTCxXQUFRTSxFQUFSLENBQVksY0FBWixFQUE0QkMsbUJBQTVCOztBQUVBUCxXQUFRUSxLQUFSLENBQWM7QUFDYkMsVUFBTSxDQURPO0FBRWI7QUFDQUMsVUFBTSxJQUhPO0FBSWJDLGVBQVcsdUVBSkU7QUFLYkMsZUFBVyx1RUFMRTtBQU1iQyxrQkFBY1osZUFORDtBQU9iYSxXQUFPdkI7QUFQTSxJQUFkO0FBU0E7QUFDRCxFQXZCRDs7QUF5QkFkLEdBQUdDLE1BQUgsRUFBWTRCLEVBQVosQ0FBZ0IsUUFBaEIsRUFBMEJTLGdFQUFRQSxDQUFFQyxRQUFWLEVBQW9CLEdBQXBCLENBQTFCOztBQUVBLFVBQVNaLG1CQUFULENBQThCTCxNQUE5QixFQUF1QztBQUN0Q0EsU0FBT2tCLEdBQVAsQ0FBWSxXQUFaLEVBQXlCLEVBQXpCO0FBQ0FsQixTQUFPa0IsR0FBUCxDQUFZLFdBQVosRUFBeUJDLGtCQUFtQm5CLE1BQW5CLENBQXpCO0FBQ0E7O0FBRUQsVUFBU21CLGlCQUFULENBQTRCbkIsTUFBNUIsRUFBcUM7QUFDcEMsTUFBSW9CLGNBQWN6QyxPQUFPMEMsVUFBekI7QUFDQSxNQUFJcEIsVUFBVUQsT0FBT2pCLElBQVAsQ0FBYUksZUFBYixDQUFkO0FBQ0EsTUFBSW1DLGNBQWN0QixPQUFPakIsSUFBUCxDQUFhSSxlQUFiLEVBQStCb0MsVUFBL0IsRUFBbEI7QUFDQSxNQUFJQyxlQUFlN0MsT0FBTzhDLFdBQTFCO0FBQ0EsTUFBSUMsa0JBQWtCQyxTQUFVM0IsT0FBTzRCLElBQVAsQ0FBYSxZQUFiLENBQVYsSUFBMENKLFlBQTFDLEdBQXlELEdBQS9FO0FBQ0EsTUFBSUssaUJBQWlCLENBQXJCO0FBQ0EsTUFBSUMsaUJBQWlCLENBQXJCO0FBQ0EsTUFBSUMsaUJBQWlCLENBQXJCOztBQUVBL0IsU0FBT2pCLElBQVAsQ0FBYUssY0FBYixFQUE4QlMsSUFBOUIsQ0FBb0MsVUFBVW1DLENBQVYsRUFBYUMsR0FBYixFQUFtQjtBQUN0RCxPQUFJQyxTQUFTeEQsRUFBR3VELEdBQUgsQ0FBYjtBQUFBLE9BQ0NFLFNBQVNELE9BQU9uRCxJQUFQLENBQWEsd0JBQWIsQ0FEVjtBQUFBLE9BRUNxRCxRQUFRRCxPQUFPUCxJQUFQLENBQWEsT0FBYixDQUZUO0FBQUEsT0FHQ1MsU0FBU0YsT0FBT1AsSUFBUCxDQUFhLFFBQWIsQ0FIVjtBQUFBLE9BSUNVLGNBQWNGLFFBQVFDLE1BSnZCO0FBQUEsT0FLQ0UsY0FBY0wsT0FBT00sV0FBUCxFQUxmOztBQU9BVCxvQkFBaUJPLGNBQWNQLGNBQWQsR0FBK0JPLFdBQS9CLEdBQTZDUCxjQUE5RDtBQUNBRixvQkFBaUJQLGNBQWNTLGNBQS9CO0FBQ0FELG9CQUFpQlMsY0FBY1QsY0FBZCxHQUErQlMsV0FBL0IsR0FBNkNULGNBQTlEO0FBRUEsR0FaRDs7QUFjQSxTQUFPVyxLQUFLQyxHQUFMLENBQVVoQixlQUFWLEVBQTJCSSxjQUEzQixFQUEyQ0QsY0FBM0MsQ0FBUDtBQUNBOztBQUVELFVBQVNaLFFBQVQsR0FBb0I7O0FBRW5CdkIsVUFBUUcsSUFBUixDQUFjLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXlCO0FBQ3RDLE9BQUlDLFNBQVN0QixFQUFHcUIsS0FBSCxDQUFiO0FBQ0EsT0FBSUUsVUFBVUQsT0FBT2pCLElBQVAsQ0FBYUksZUFBYixDQUFkOztBQUVBa0IsdUJBQXFCTCxNQUFyQjtBQUNBTCxpQkFBY2IsTUFBZCxDQUFzQixTQUF0Qjs7QUFFQSxPQUFLbUIsUUFBUTBDLEVBQVIsQ0FBWSxvQkFBWixDQUFMLEVBQTBDO0FBQ3pDMUMsWUFBUVEsS0FBUixDQUFlLGFBQWY7QUFDQTtBQUNELEdBVkQ7QUFZQTs7QUFFRCxVQUFTRCxtQkFBVCxDQUE4Qm9DLEtBQTlCLEVBQXFDbkMsS0FBckMsRUFBNENvQyxZQUE1QyxFQUEwREMsU0FBMUQsRUFBc0U7QUFDckUsTUFBTUMsZ0JBQWdCckUsRUFBRytCLE1BQU11QyxPQUFOLENBQWNILFlBQWQsQ0FBSCxDQUF0QjtBQUNBLE1BQU1JLGFBQWF2RSxFQUFHK0IsTUFBTXVDLE9BQU4sQ0FBY0YsU0FBZCxDQUFILENBQW5COztBQUVBcEUsSUFBRytCLE1BQU11QyxPQUFULEVBQW1COUIsR0FBbkIsQ0FBd0IsUUFBeEIsRUFBa0MsR0FBbEM7O0FBRUFnQyxhQUFZSCxhQUFaLEVBQTJCRSxVQUEzQixFQUF1Q0UsYUFBYzFDLEtBQWQsRUFBcUJvQyxZQUFyQixFQUFtQ0MsU0FBbkMsQ0FBdkM7QUFDQTs7QUFFRCxVQUFTSSxVQUFULENBQXFCRSxRQUFyQixFQUErQkMsS0FBL0IsRUFBaUQ7QUFBQSxNQUFYQyxJQUFXLHVFQUFKLENBQUk7O0FBQ2hELE1BQU1DLGFBQWFILFNBQVM3QixVQUFULEVBQW5CO0FBQ0EsTUFBTWlDLE9BQU8sR0FBYjs7QUFFQUosV0FBU0ssUUFBVCxDQUFtQjtBQUNsQkMsVUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKO0FBRFcsR0FBbkIsRUFFRztBQUNGQyxhQUFVbkUsbUJBRFI7QUFFRm9FLFdBQVFuRSxpQkFGTjtBQUdGb0UsYUFBVSxrQkFBU0MsUUFBVCxFQUFtQkMsZUFBbkIsRUFBb0NDLFNBQXBDLEVBQStDQyxVQUEvQyxFQUEyREMsVUFBM0QsRUFBdUU7QUFDaEYsUUFBTUMsT0FBT2QsTUFBTWUsR0FBTixDQUFVLENBQVYsQ0FBYjtBQUNBLFFBQU1DLFNBQVNoQixNQUFNdEUsSUFBTixDQUFZTyxtQkFBWixFQUFrQzhFLEdBQWxDLENBQXNDLENBQXRDLENBQWY7QUFDQSxRQUFNRSxTQUFTakIsTUFBTXRFLElBQU4sQ0FBWVEsbUJBQVosRUFBa0M2RSxHQUFsQyxDQUFzQyxDQUF0QyxDQUFmO0FBQ0EsUUFBTUcsVUFBVW5CLFNBQVNnQixHQUFULENBQWEsQ0FBYixDQUFoQjtBQUNBLFFBQU1JLFlBQVlwQixTQUFTckUsSUFBVCxDQUFlTyxtQkFBZixFQUFxQzhFLEdBQXJDLENBQXlDLENBQXpDLENBQWxCO0FBQ0EsUUFBTUssWUFBWXJCLFNBQVNyRSxJQUFULENBQWVRLG1CQUFmLEVBQXFDNkUsR0FBckMsQ0FBeUMsQ0FBekMsQ0FBbEI7O0FBRUEsUUFBTU0sUUFBUSxTQUFSQSxLQUFRO0FBQUEsWUFBSyxnQkFBZ0JwQixPQUFPcUIsQ0FBdkIsR0FBMkIsS0FBaEM7QUFBQSxLQUFkOztBQUVBUixTQUFLUyxLQUFMLENBQVdDLFNBQVgsR0FBdUJILE1BQU1uQixhQUFhVSxVQUFuQixDQUF2QjtBQUNBSSxXQUFPTyxLQUFQLENBQWFDLFNBQWIsR0FBeUJILE1BQU8sQ0FBQ2xCLE9BQU9ELFVBQVIsSUFBc0JVLFVBQTdCLENBQXpCO0FBQ0FLLFdBQU9NLEtBQVAsQ0FBYUMsU0FBYixHQUF5QkgsTUFBT25CLGFBQWEsQ0FBQ1UsVUFBckIsQ0FBekI7O0FBRUFNLFlBQVFLLEtBQVIsQ0FBY0MsU0FBZCxHQUEwQkgsTUFBTyxDQUFDbEIsSUFBRCxJQUFTLElBQUlTLFVBQWIsQ0FBUCxDQUExQjtBQUNBUSxjQUFVRyxLQUFWLENBQWdCQyxTQUFoQixHQUE0QkgsTUFBT2xCLFFBQVEsSUFBSVMsVUFBWixDQUFQLENBQTVCO0FBQ0E7QUFuQkMsR0FGSDtBQXVCQTs7QUFFRCxVQUFTZCxZQUFULENBQXVCMUMsS0FBdkIsRUFBOEJvQyxZQUE5QixFQUE0Q0MsU0FBNUMsRUFBd0Q7QUFDdkQsTUFBSWdDLFlBQVksQ0FBaEI7QUFDQSxNQUFLckUsTUFBTXNFLFVBQU4sR0FBbUIsQ0FBeEIsRUFBNEI7QUFDM0IsT0FBS2xDLGlCQUFpQixDQUFqQixJQUFzQkMsY0FBY3JDLE1BQU1zRSxVQUFOLEdBQW1CLENBQTVELEVBQWdFO0FBQy9ERCxnQkFBWSxDQUFDLENBQWI7QUFDQTtBQUNELE9BQUtoQyxZQUFZRCxZQUFaLEtBQThCQyxjQUFjLENBQWQsSUFBbUJELGlCQUFpQnBDLE1BQU1zRSxVQUFOLEdBQW1CLENBQXJGLENBQUwsRUFBZ0c7QUFDL0ZELGdCQUFZLENBQUMsQ0FBYjtBQUNBO0FBQ0Q7QUFDRCxTQUFPQSxTQUFQO0FBQ0E7QUFFRCxDQTNJRCxFQTJJRzdGLE1BM0lILEVBMklXTixNQTNJWCxFOzs7Ozs7OztBQ1hBO0FBQU8sSUFBTXFDLFdBQVcsU0FBWEEsUUFBVyxDQUFDZ0UsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3ZDLEtBQUlDLFVBQVUsSUFBZDs7QUFFQSxRQUFPLFlBQVk7QUFDbEIsTUFBTUMsVUFBVSxJQUFoQjtBQUNBLE1BQU1DLE9BQU9DLFNBQWI7O0FBRUEsTUFBTUMsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDbkJOLFFBQUtPLEtBQUwsQ0FBV0osT0FBWCxFQUFvQkMsSUFBcEI7QUFDQSxHQUZEOztBQUlBSSxlQUFhTixPQUFiO0FBQ0FBLFlBQVVPLFdBQVdILEtBQVgsRUFBa0JMLElBQWxCLENBQVY7QUFDQSxFQVZEO0FBV0EsQ0FkTSxDIiwiZmlsZSI6Ii4vZGlzdC9qcy9mcm9udGVuZC5ibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhkMzcyMTg3ZTM1OTc5NjdhYzZmIiwiaW1wb3J0ICcuL2Jsb2Nrcy9oZXJvL2Zyb250ZW5kJztcbmltcG9ydCAnLi9ibG9ja3Mvc2xpZGVzaG93L2Zyb250ZW5kJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQuanMiLCIoZnVuY3Rpb24oJCwgd2luZG93LCB1bmRlZmluZWQpIHtcblxuXHQvLyBpbml0aWFsaXplIHBhcmFsbGF4IGVmZmVjdFxuXHRpZiAoIHR5cGVvZiAkLmZuLnJlbGxheCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHQkKCAnLm5vdmEtaGVyby0tcGFyYWxsYXgnICkuZmluZCggJy5ub3ZhLWhlcm9fX2JhY2tncm91bmQnICkucmVsbGF4KHtcblx0XHRcdGNvbnRhaW5lcjogJy5ub3ZhLWhlcm9fX21hc2snLFxuXHRcdH0pO1xuXHR9XG5cbn0pKGpRdWVyeSwgd2luZG93KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVyby9mcm9udGVuZC5qcyIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBCTE9DS19TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3cnO1xuY29uc3QgU0xJREVSX1NFTEVDVE9SID0gJy5ub3ZhLXNsaWRlc2hvd19fc2xpZGVyJztcbmNvbnN0IFNMSURFX1NFTEVDVE9SID0gJy5ub3ZhLXNsaWRlc2hvd19fc2xpZGUnO1xuY29uc3QgQ09OVEVOVF9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX2NvbnRlbnQnO1xuY29uc3QgQkFDS0dST1VORF9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX2JhY2tncm91bmQnO1xuY29uc3QgRk9SRUdST1VORF9TRUxFQ1RPUiA9ICcubm92YS1zbGlkZXNob3dfX2ZvcmVncm91bmQnO1xuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDEwMDA7XG5jb25zdCBUUkFOU0lUSU9OX0VBU0lORyA9IFwiZWFzZUluT3V0Q2lyY1wiO1xuXG4oZnVuY3Rpb24oJCwgd2luZG93LCB1bmRlZmluZWQpIHtcblxuXHRjb25zdCAkYmxvY2tzID0gJCggQkxPQ0tfU0VMRUNUT1IgKTtcblx0Y29uc3QgJHJlbGxheFRhcmdldCA9ICQoICcubm92YS1zbGlkZXNob3ctLXBhcmFsbGF4JyApLmZpbmQoIFNMSURFUl9TRUxFQ1RPUiApO1xuXG5cdC8vIGluaXRpYWxpemUgcGFyYWxsYXggZWZmZWN0XG5cdGlmICggdHlwZW9mICQuZm4ucmVsbGF4ICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdCRyZWxsYXhUYXJnZXQucmVsbGF4KCB7XG5cdFx0XHRjb250YWluZXI6ICcubm92YS1zbGlkZXNob3dfX21hc2snLFxuXHRcdFx0Y2hpbGRyZW46IENPTlRFTlRfU0VMRUNUT1IsXG5cdFx0fSApO1xuXHR9XG5cblx0JGJsb2Nrcy5lYWNoKCBmdW5jdGlvbiggaW5kZXgsIGJsb2NrICkge1xuXHRcdHZhciAkYmxvY2sgPSAkKCBibG9jayApLFxuXHRcdFx0JHNsaWRlciA9ICRibG9jay5maW5kKCBTTElERVJfU0VMRUNUT1IgKSxcblx0XHRcdCRhcnJvd0NvbnRhaW5lcjtcblxuXHRcdGlmICggJHNsaWRlci5jaGlsZHJlbigpLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHQkYXJyb3dDb250YWluZXIgPSAkKCAnPGRpdiBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPicgKS5hcHBlbmRUbyggJGJsb2NrICk7XG5cblx0XHRcdHJlc2V0QmxvY2tNaW5IZWlnaHQoICRibG9jayApO1xuXHRcdFx0JGJsb2NrLmFkZENsYXNzKCAnaXMtcmVhZHknICk7XG5cblx0XHRcdCRzbGlkZXIub24oICdiZWZvcmVDaGFuZ2UnLCBvbkJlZm9yZVNsaWRlQ2hhbmdlICk7XG5cblx0XHRcdCRzbGlkZXIuc2xpY2soe1xuXHRcdFx0XHRyb3dzOiAwLFxuXHRcdFx0XHQvLyBmb3Igc2ltcGxlciByZXZlYWwgdHJhbnNpdGlvbnMgYmV0d2VlbiBzbGlkZXNcblx0XHRcdFx0ZmFkZTogdHJ1ZSxcblx0XHRcdFx0cHJldkFycm93OiAnPGRpdiBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLXByZXZcIj48L2Rpdj4nLFxuXHRcdFx0XHRuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwibm92YS1zbGlkZXNob3dfX2Fycm93IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tbmV4dFwiPjwvZGl2PicsXG5cdFx0XHRcdGFwcGVuZEFycm93czogJGFycm93Q29udGFpbmVyLFxuXHRcdFx0XHRzcGVlZDogVFJBTlNJVElPTl9EVVJBVElPTixcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0JCggd2luZG93ICkub24oICdyZXNpemUnLCBkZWJvdW5jZSggb25SZXNpemUsIDMwMCApICk7XG5cblx0ZnVuY3Rpb24gcmVzZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICkge1xuXHRcdCRibG9jay5jc3MoICdtaW5IZWlnaHQnLCAnJyApO1xuXHRcdCRibG9jay5jc3MoICdtaW5IZWlnaHQnLCBnZXRCbG9ja01pbkhlaWdodCggJGJsb2NrICkgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEJsb2NrTWluSGVpZ2h0KCAkYmxvY2sgKSB7XG5cdFx0dmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0dmFyICRzbGlkZXIgPSAkYmxvY2suZmluZCggU0xJREVSX1NFTEVDVE9SICk7XG5cdFx0dmFyIHNsaWRlcldpZHRoID0gJGJsb2NrLmZpbmQoIFNMSURFUl9TRUxFQ1RPUiApLm91dGVyV2lkdGgoKTtcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdHZhciBzbGlkZXJNaW5IZWlnaHQgPSBwYXJzZUludCggJGJsb2NrLmRhdGEoICdtaW4taGVpZ2h0JyApICkgKiB3aW5kb3dIZWlnaHQgLyAxMDA7XG5cdFx0dmFyIG1lZGlhTWluSGVpZ2h0ID0gMDtcblx0XHR2YXIgc2xpZGVNYXhIZWlnaHQgPSAwO1xuXHRcdHZhciBtYXhBc3BlY3RSYXRpbyA9IDA7XG5cblx0XHQkYmxvY2suZmluZCggU0xJREVfU0VMRUNUT1IgKS5lYWNoKCBmdW5jdGlvbiggaSwgb2JqICkge1xuXHRcdFx0dmFyICRzbGlkZSA9ICQoIG9iaiApLFxuXHRcdFx0XHQkbWVkaWEgPSAkc2xpZGUuZmluZCggJy5ub3ZhLXNsaWRlc2hvd19fbWVkaWEnICksXG5cdFx0XHRcdHdpZHRoID0gJG1lZGlhLmRhdGEoICd3aWR0aCcgKSxcblx0XHRcdFx0aGVpZ2h0ID0gJG1lZGlhLmRhdGEoICdoZWlnaHQnICksXG5cdFx0XHRcdGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG5cdFx0XHRcdHNsaWRlSGVpZ2h0ID0gJHNsaWRlLm91dGVySGVpZ2h0KCk7XG5cblx0XHRcdG1heEFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW8gPiBtYXhBc3BlY3RSYXRpbyA/IGFzcGVjdFJhdGlvIDogbWF4QXNwZWN0UmF0aW87XG5cdFx0XHRtZWRpYU1pbkhlaWdodCA9IHNsaWRlcldpZHRoIC8gbWF4QXNwZWN0UmF0aW87XG5cdFx0XHRzbGlkZU1heEhlaWdodCA9IHNsaWRlSGVpZ2h0ID4gc2xpZGVNYXhIZWlnaHQgPyBzbGlkZUhlaWdodCA6IHNsaWRlTWF4SGVpZ2h0O1xuXG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIE1hdGgubWF4KCBzbGlkZXJNaW5IZWlnaHQsIHNsaWRlTWF4SGVpZ2h0LCBtZWRpYU1pbkhlaWdodCApO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25SZXNpemUoKSB7XG5cblx0XHQkYmxvY2tzLmVhY2goIGZ1bmN0aW9uKCBpbmRleCwgYmxvY2sgKSB7XG5cdFx0XHR2YXIgJGJsb2NrID0gJCggYmxvY2sgKTtcblx0XHRcdHZhciAkc2xpZGVyID0gJGJsb2NrLmZpbmQoIFNMSURFUl9TRUxFQ1RPUiApO1xuXG5cdFx0XHRyZXNldEJsb2NrTWluSGVpZ2h0KCAkYmxvY2sgKTtcblx0XHRcdCRyZWxsYXhUYXJnZXQucmVsbGF4KCAncmVmcmVzaCcgKTtcblxuXHRcdFx0aWYgKCAkc2xpZGVyLmlzKCAnLnNsaWNrLWluaXRpYWxpemVkJyApICkge1xuXHRcdFx0XHQkc2xpZGVyLnNsaWNrKCAnc2V0UG9zaXRpb24nICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQmVmb3JlU2xpZGVDaGFuZ2UoIGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUgKSB7XG5cdFx0Y29uc3QgJGN1cnJlbnRTbGlkZSA9ICQoIHNsaWNrLiRzbGlkZXNbY3VycmVudFNsaWRlXSApO1xuXHRcdGNvbnN0ICRuZXh0U2xpZGUgPSAkKCBzbGljay4kc2xpZGVzW25leHRTbGlkZV0gKTtcblxuXHRcdCQoIHNsaWNrLiRzbGlkZXMgKS5jc3MoICd6SW5kZXgnLCA4MDAgKTtcblxuXHRcdHRyYW5zaXRpb24oICRjdXJyZW50U2xpZGUsICRuZXh0U2xpZGUsIGdldERpcmVjdGlvbiggc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlICkgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyYW5zaXRpb24oICRjdXJyZW50LCAkbmV4dCwgc2lnbiA9IDEgKSB7XG5cdFx0Y29uc3Qgc2xpZGVXaWR0aCA9ICRjdXJyZW50Lm91dGVyV2lkdGgoKTtcblx0XHRjb25zdCBtb3ZlID0gMzAwO1xuXG5cdFx0JGN1cnJlbnQudmVsb2NpdHkoIHtcblx0XHRcdHR3ZWVuOiBbMCwgMV1cblx0XHR9LCB7XG5cdFx0XHRkdXJhdGlvbjogVFJBTlNJVElPTl9EVVJBVElPTixcblx0XHRcdGVhc2luZzogVFJBTlNJVElPTl9FQVNJTkcsXG5cdFx0XHRwcm9ncmVzczogZnVuY3Rpb24oZWxlbWVudHMsIHBlcmNlbnRDb21wbGV0ZSwgcmVtYWluaW5nLCB0d2VlblZhbHVlLCBhY3RpdmVDYWxsKSB7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSAkbmV4dC5nZXQoMCk7XG5cdFx0XHRcdGNvbnN0IG5leHRCZyA9ICRuZXh0LmZpbmQoIEJBQ0tHUk9VTkRfU0VMRUNUT1IgKS5nZXQoMCk7XG5cdFx0XHRcdGNvbnN0IG5leHRGZyA9ICRuZXh0LmZpbmQoIEZPUkVHUk9VTkRfU0VMRUNUT1IgKS5nZXQoMCk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnQgPSAkY3VycmVudC5nZXQoMCk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRCZyA9ICRjdXJyZW50LmZpbmQoIEJBQ0tHUk9VTkRfU0VMRUNUT1IgKS5nZXQoMCk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRGZyA9ICRjdXJyZW50LmZpbmQoIEZPUkVHUk9VTkRfU0VMRUNUT1IgKS5nZXQoMCk7XG5cblx0XHRcdFx0Y29uc3QgbW92ZVggPSB4ID0+ICd0cmFuc2xhdGVYKCcgKyBzaWduICogeCArICdweCknO1xuXG5cdFx0XHRcdG5leHQuc3R5bGUudHJhbnNmb3JtID0gbW92ZVgoc2xpZGVXaWR0aCAqIHR3ZWVuVmFsdWUgKTtcblx0XHRcdFx0bmV4dEJnLnN0eWxlLnRyYW5zZm9ybSA9IG1vdmVYKCAobW92ZSAtIHNsaWRlV2lkdGgpICogdHdlZW5WYWx1ZSApO1xuXHRcdFx0XHRuZXh0Rmcuc3R5bGUudHJhbnNmb3JtID0gbW92ZVgoIHNsaWRlV2lkdGggKiAtdHdlZW5WYWx1ZSApO1xuXG5cdFx0XHRcdGN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gbW92ZVgoIC1tb3ZlICogKDEgLSB0d2VlblZhbHVlKSApO1xuXHRcdFx0XHRjdXJyZW50Rmcuc3R5bGUudHJhbnNmb3JtID0gbW92ZVgoIG1vdmUgKiAoMSAtIHR3ZWVuVmFsdWUpICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXREaXJlY3Rpb24oIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSApIHtcblx0XHRsZXQgZGlyZWN0aW9uID0gMTtcblx0XHRpZiAoIHNsaWNrLnNsaWRlQ291bnQgPiAyICkge1xuXHRcdFx0aWYgKCBjdXJyZW50U2xpZGUgPT09IDAgJiYgbmV4dFNsaWRlID09PSBzbGljay5zbGlkZUNvdW50IC0gMSApIHtcblx0XHRcdFx0ZGlyZWN0aW9uID0gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG5leHRTbGlkZSA8IGN1cnJlbnRTbGlkZSAmJiAoIG5leHRTbGlkZSAhPT0gMCB8fCBjdXJyZW50U2xpZGUgIT09IHNsaWNrLnNsaWRlQ291bnQgLSAxICkgKSB7XG5cdFx0XHRcdGRpcmVjdGlvbiA9IC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGlyZWN0aW9uO1xuXHR9XG5cbn0pKGpRdWVyeSwgd2luZG93KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9mcm9udGVuZC5qcyIsImV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXHRcdGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cblx0XHRjb25zdCBsYXRlciA9ICgpID0+IHtcblx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9