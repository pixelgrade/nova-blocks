this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/hero-of-the-galaxy/frontend"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/hero-of-the-galaxy/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/frontend.js":
/*!****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/frontend.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

(function ($, window, undefined) {
  var $heroes = $('.novablocks-hero');
  var windowScrollY;
  var scrollButtonHidden = false;
  var $scrollButton = $('.novablocks-hero__indicator');
  (0, _components.parallaxInit)($heroes);
  bulletsInit();
  scrollButtonInit();
  updateScroll();
  $(window).on('scroll', updateScroll);

  function updateScroll() {
    windowScrollY = window.scrollY;

    if (windowScrollY > 200) {
      hideScrollButton();
    }
  }

  function bulletsInit() {
    var $body = $('body');
    var shouldHaveBullets = $body.is('.novablocks-has-position-indicators') && $('.novablocks-hero').length > 1;

    if (shouldHaveBullets && typeof $.fn.bully !== 'undefined') {
      $('.novablocks-hero').bully();
    }
  }

  function hideScrollButton() {
    if (scrollButtonHidden) {
      return;
    }

    $scrollButton.filter('.novablocks-hero__indicator--middle').addClass('novablocks-hero__indicator--hidden');
    scrollButtonHidden = true;
  }

  function scrollButtonInit() {
    var $hero = $scrollButton.closest('.novablocks-hero');

    if ($hero.length) {
      $scrollButton.on('click', function () {
        var heroBox = $hero.get(0).getBoundingClientRect();
        var heroBoxTop = heroBox.y || heroBox.top;
        window.scrollTo({
          top: heroBoxTop + heroBox.height + windowScrollY,
          behavior: 'smooth'
        });
      });
    }
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

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map