this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/advanced-gallery/frontend"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/advanced-gallery/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/advanced-gallery/frontend.js":
/*!**************************************************************************!*\
  !*** ./packages/block-library/build/blocks/advanced-gallery/frontend.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var GridItemCollection = _components.AdvancedGallery.GridItemCollection;
var _AdvancedGallery$util = _components.AdvancedGallery.utils,
    getGalleryStyle = _AdvancedGallery$util.getGalleryStyle,
    getGridStyle = _AdvancedGallery$util.getGridStyle,
    safariHeightFix = _AdvancedGallery$util.safariHeightFix;

(function ($, window, undefined) {
  $('.novablocks-advanced-gallery').each(function (i, gallery) {
    var $gallery = $(gallery),
        $grid = $gallery.find('.novablocks-advanced-gallery__grid'),
        images = $gallery.find('.novablocks-advanced-gallery__image').toArray();
    var attributes = {
      imageResizing: $gallery.data('imageresizing'),
      containerHeight: $gallery.data('containerheight'),
      positionShift: $gallery.data('positionshift'),
      sizeContrast: $gallery.data('sizecontrast'),
      imageRotation: $gallery.data('imagerotation'),
      placementVariation: $gallery.data('placementvariation'),
      elementsDistance: $gallery.data('elementsdistance'),
      verticalSpacing: $gallery.data('verticalspacing'),
      objectPosition: $gallery.data('objectposition')
    };
    var gridItemsCollection = new GridItemCollection(images, attributes);
    gridItemsCollection.gridItems.map(function (gridItem, index) {
      var $image = $(gridItem.image),
          $item = $image.closest('.novablocks-advanced-gallery__grid-item');
      $item.css(gridItem.getStyle());
      $image.css(gridItem.getImageStyle());
    });
    var galleryStyle = getGalleryStyle(attributes);

    for (var propertyName in galleryStyle) {
      $gallery.css(galleryStyle);

      if (propertyName.indexOf('--') === 0) {
        gallery.style.setProperty(propertyName, galleryStyle[propertyName]);
      }
    }

    if ($grid.length) {
      var gridStyle = getGridStyle(attributes);
      $grid.css(gridStyle);

      for (var _propertyName in gridStyle) {
        if (_propertyName.indexOf('--') === 0) {
          $grid.get(0).style.setProperty(_propertyName, gridStyle[_propertyName]);
        }
      }
    }
  });
  $('.novablocks-advanced-gallery__grid').each(function (i, obj) {
    safariHeightFix(obj);
  });
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