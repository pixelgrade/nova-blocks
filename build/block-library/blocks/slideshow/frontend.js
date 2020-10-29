this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/slideshow/frontend"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/slideshow/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/slideshow/frontend.js":
/*!*******************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/frontend.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var BLOCK_SELECTOR = '.novablocks-slideshow';
var SLIDER_SELECTOR = '.novablocks-slideshow__slider';
var SLIDE_SELECTOR = '.novablocks-slideshow__slide';
var FOREGROUND_SELECTOR = '.novablocks-slideshow__foreground';
var TRANSITION_DURATION = 1000;
var TRANSITION_EASING = "easeInOutCirc";

(function ($, window, undefined) {
  var $window = $(window);
  var $blocks = $(BLOCK_SELECTOR);
  var useOrientation = (0, _utils.hasTouchScreen)() && 'orientation' in window;
  var onDebouncedResize = (0, _utils.debounce)(onResize, 300);
  $blocks.each(function (index, block) {
    var $block = $(block),
        $slider = $block.find(SLIDER_SELECTOR),
        $arrowContainer;
    resetBlockMinHeight($block);

    if ($slider.children().length > 1) {
      $arrowContainer = $('<div class="novablocks-slideshow__controls">').appendTo($block);
      $slider.on('beforeChange', onBeforeSlideChange);
      $slider.slick({
        rows: 0,
        // for simpler reveal transitions between slides
        fade: true,
        prevArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev"></div>',
        nextArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--next"></div>',
        appendArrows: $arrowContainer,
        speed: 0
      });
    }

    $block.addClass('is-ready');
  });
  (0, _components.parallaxInit)($blocks);

  if (useOrientation) {
    $window.on('orientationchange', function () {
      $window.one('resize', onResize);
    });
  } else {
    $window.on('resize', onDebouncedResize);
  }

  function resetBlockMinHeight($block) {
    $block.css('minHeight', '');
    $block.css('minHeight', getBlockMinHeight($block));
    $(window).trigger('scroll');
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
          $media = $slide.find('.novablocks-slideshow__media'),
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

      if ($slider.is('.slick-initialized')) {
        $slider.slick('setPosition');
      }
    });
  }

  function onBeforeSlideChange(event, slick, currentSlide, nextSlide) {
    var $currentSlide = $(slick.$slides[currentSlide]);
    var $nextSlide = $(slick.$slides[nextSlide]);
    var $slides = $(slick.$slides);
    transition($currentSlide, $nextSlide, getDirection(slick, currentSlide, nextSlide));
  }

  function hasFixedBackground($slide) {
    var fixed = false;

    if ($slide.find('.novablocks-parallax').css('position') === 'fixed') {
      return true;
    }

    return fixed;
  }

  function transition($current, $next) {
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var slideWidth = $current.outerWidth();
    var move = 300;
    var isFixed = hasFixedBackground($current);
    $current.velocity({
      tween: [0, 1]
    }, {
      duration: TRANSITION_DURATION,
      easing: TRANSITION_EASING,
      begin: function begin() {
        $current.addClass('novablocks-slideshow__slide--current');
        $next.addClass('novablocks-slideshow__slide--next');
      },
      progress: function progress(elements, percentComplete, remaining, tweenValue, activeCall) {
        var next = $next.find('.novablocks-slideshow__slide-wrap').get(0);
        var nextBg = $next.find('.novablocks-slideshow__media').get(0);
        var nextFg = $next.find(FOREGROUND_SELECTOR).get(0);
        var current = $current.get(0);
        var currentBg = $current.find('.novablocks-slideshow__media').get(0);
        var currentFg = $current.find(FOREGROUND_SELECTOR).get(0);

        if (isFixed) {
          next.style.left = slideWidth * tweenValue + 'px';
          nextBg.style.left = move * tweenValue + 'px';
          nextFg.style.left = slideWidth * -tweenValue + 'px';
          currentBg.style.left = move * (tweenValue - 1) + 'px';
        } else {
          next.style.left = slideWidth * tweenValue + 'px';
          nextBg.style.left = (move - slideWidth) * tweenValue + 'px';
          nextFg.style.left = (move - slideWidth) * tweenValue + 'px';
          currentBg.style.left = move * (tweenValue - 1) + 'px';
        }
      },
      complete: function complete() {
        $current.removeClass('novablocks-slideshow__slide--current');
        $next.removeClass('novablocks-slideshow__slide--next');
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

/***/ "@novablocks/components":
/*!*****************************************************!*\
  !*** external {"this":["novablocks","components"]} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["components"]; }());

/***/ }),

/***/ "@novablocks/utils":
/*!************************************************!*\
  !*** external {"this":["novablocks","utils"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["utils"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map