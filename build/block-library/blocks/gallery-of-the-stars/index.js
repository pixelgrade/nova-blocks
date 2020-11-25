this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/gallery-of-the-stars/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/gallery-of-the-stars/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/gallery-of-the-stars/attributes.json":
/*!**********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/gallery-of-the-stars/attributes.json ***!
  \**********************************************************************************/
/*! exports provided: align, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"wide\"}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/gallery-of-the-stars/deprecated.js":
/*!********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/gallery-of-the-stars/deprecated.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/gallery-of-the-stars/attributes.json"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var attributes = Object.assign({}, _attributes.default, _components.AdvancedGallery.attributes);
var deprecated = [{
  attributes: _objectSpread(_objectSpread({}, (0, _lodash.omit)(attributes, ['images'])), {}, {
    gallery: attributes.images
  }),
  isEligible: function isEligible(attributes) {
    return "undefined" === typeof attributes.defaultsGenerated;
  },
  migrate: function migrate(attributes) {
    var gallery = attributes.gallery;
    var images = Array.isArray(gallery) && !!gallery.length ? gallery : attributes.images;
    return _objectSpread(_objectSpread({}, (0, _lodash.omit)(attributes, ['gallery'])), {}, {
      images: images,
      defaultsGenerated: true
    });
  },
  save: function save() {
    return false;
  }
}];
var _default = deprecated;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/gallery-of-the-stars/edit.js":
/*!**************************************************************************!*\
  !*** ./packages/block-library/build/blocks/gallery-of-the-stars/edit.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var Edit = function Edit(props) {
  var className = props.attributes.className;
  return (0, _element.createElement)("div", {
    className: className
  }, (0, _element.createElement)(_components.AdvancedGallery.Component, props));
};

var _default = Edit;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/gallery-of-the-stars/index.js":
/*!***************************************************************************!*\
  !*** ./packages/block-library/build/blocks/gallery-of-the-stars/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./packages/block-library/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/gallery-of-the-stars/edit.js"));

var _deprecated = _interopRequireDefault(__webpack_require__(/*! ./deprecated */ "./packages/block-library/build/blocks/gallery-of-the-stars/deprecated.js"));

var _transforms = _interopRequireDefault(__webpack_require__(/*! ./transforms */ "./packages/block-library/build/blocks/gallery-of-the-stars/transforms.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/gallery-of-the-stars/attributes.json"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getRandomAttributes = _components.AdvancedGallery.utils.getRandomAttributes;
var attributes = Object.assign({}, _attributes.default, _components.AdvancedGallery.attributes);
/**
 * WordPress dependencies
 */

function getNewDefaults() {
  return _getNewDefaults.apply(this, arguments);
}

function _getNewDefaults() {
  _getNewDefaults = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var numberOfImages, placeholderImages, randomImages, randomAttributes;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            numberOfImages = (0, _utils.getRandomBetween)(2, 4);
            _context.next = 3;
            return (0, _utils.getPlaceholderImages)();

          case 3:
            placeholderImages = _context.sent;
            randomImages = (0, _utils.getRandomArrayFromArray)(placeholderImages, numberOfImages);
            randomAttributes = getRandomAttributes();
            randomImages.forEach(function (image) {
              if (typeof (image === null || image === void 0 ? void 0 : image.download) === "function") {
                image.download();
              }
            });
            return _context.abrupt("return", _objectSpread(_objectSpread({}, randomAttributes), {}, {
              images: randomImages
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNewDefaults.apply(this, arguments);
}

(0, _utils.generateDefaults)('novablocks/advanced-gallery', getNewDefaults);
(0, _blocks.registerBlockType)('novablocks/advanced-gallery', {
  title: (0, _i18n.__)('Gallery of the Stars', '__plugin_txtd'),
  description: (0, _i18n.__)('Display galleries of images in unique and creative compositions.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.gallery,
  supports: {
    align: ['wide', 'full']
  },
  // Additional search terms
  keywords: [(0, _i18n.__)('image with text', '__plugin_txtd'), (0, _i18n.__)('columns', '__plugin_txtd'), (0, _i18n.__)('side text', '__plugin_txtd')],
  edit: _edit.default,
  save: function save() {
    return false;
  },
  attributes: attributes,
  deprecated: _deprecated.default,
  transforms: _transforms.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/gallery-of-the-stars/transforms.js":
/*!********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/gallery-of-the-stars/transforms.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _default = {
  from: [{
    type: 'block',
    blocks: ['core/gallery'],
    transform: function transform(attributes) {
      return (0, _blocks.createBlock)('novablocks/advanced-gallery', {
        images: attributes.images
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['novablocks/media'],
    transform: function transform(attributes) {
      return (0, _blocks.createBlock)('novablocks/media', {
        images: attributes.images
      });
    }
  }, {
    type: 'block',
    blocks: ['core/gallery'],
    transform: function transform(attributes) {
      return (0, _blocks.createBlock)('core/gallery', {
        images: attributes.images
      });
    }
  }]
};
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!**********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@novablocks/components":
/*!*****************************************************!*\
  !*** external {"this":["novablocks","components"]} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["components"]; }());

/***/ }),

/***/ "@novablocks/icons":
/*!************************************************!*\
  !*** external {"this":["novablocks","icons"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["icons"]; }());

/***/ }),

/***/ "@novablocks/utils":
/*!************************************************!*\
  !*** external {"this":["novablocks","utils"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["utils"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map