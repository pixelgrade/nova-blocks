this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/slideshow/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/slideshow/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
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

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
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

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
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
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/attributes.json":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/attributes.json ***!
  \***********************************************************************/
/*! exports provided: align, galleryImages, slideshowType, minHeight, defaultsGenerated, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"full\"},\"galleryImages\":{\"type\":\"array\",\"items\":{\"type\":\"object\"},\"default\":[]},\"slideshowType\":{\"type\":\"string\",\"default\":\"gallery\"},\"minHeight\":{\"type\":\"number\",\"default\":75},\"defaultsGenerated\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/background.js":
/*!*********************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/background.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
var SlideshowBackground = function SlideshowBackground(props) {
  var _previewImage$sizes, _previewImage$sizes$n, _previewImage$sizes2, _previewImage$sizes2$, _previewImage$sizes3, _previewImage$sizes3$, _previewImage$sizes4, _previewImage$sizes4$;

  var _props$attributes = props.attributes,
      overlayFilterStyle = _props$attributes.overlayFilterStyle,
      overlayFilterStrength = _props$attributes.overlayFilterStrength,
      previewImage = props.previewImage;
  var focalPoint = previewImage.focalPoint || {
    x: 0.5,
    y: 0.5
  };

  var styles = _objectSpread(_objectSpread({}, props.parallax.style), {}, {
    opacity: 1,
    objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%'
  });

  if (overlayFilterStyle !== 'none') {
    styles.opacity = 1 - overlayFilterStrength / 100;
  }

  var imageURL = (previewImage === null || previewImage === void 0 ? void 0 : (_previewImage$sizes = previewImage.sizes) === null || _previewImage$sizes === void 0 ? void 0 : (_previewImage$sizes$n = _previewImage$sizes.novablocks_large) === null || _previewImage$sizes$n === void 0 ? void 0 : _previewImage$sizes$n.url) || (previewImage === null || previewImage === void 0 ? void 0 : (_previewImage$sizes2 = previewImage.sizes) === null || _previewImage$sizes2 === void 0 ? void 0 : (_previewImage$sizes2$ = _previewImage$sizes2.novablocks_huge) === null || _previewImage$sizes2$ === void 0 ? void 0 : _previewImage$sizes2$.url) || (previewImage === null || previewImage === void 0 ? void 0 : (_previewImage$sizes3 = previewImage.sizes) === null || _previewImage$sizes3 === void 0 ? void 0 : (_previewImage$sizes3$ = _previewImage$sizes3.large) === null || _previewImage$sizes3$ === void 0 ? void 0 : _previewImage$sizes3$.url) || (previewImage === null || previewImage === void 0 ? void 0 : (_previewImage$sizes4 = previewImage.sizes) === null || _previewImage$sizes4 === void 0 ? void 0 : (_previewImage$sizes4$ = _previewImage$sizes4.full) === null || _previewImage$sizes4$ === void 0 ? void 0 : _previewImage$sizes4$.url) || (previewImage === null || previewImage === void 0 ? void 0 : previewImage.url);
  var videoURL = previewImage === null || previewImage === void 0 ? void 0 : previewImage.url;
  return (0, _element.createElement)("div", {
    className: "novablocks-mask"
  }, (0, _element.createElement)("div", {
    className: "novablocks-slideshow__background"
  }, previewImage.type !== 'video' && (0, _element.createElement)("img", {
    className: "novablocks-slideshow__media",
    src: imageURL,
    alt: "",
    style: styles
  }), previewImage.type === 'video' && (0, _element.createElement)("video", {
    className: "novablocks-slideshow__media",
    src: videoURL,
    muted: true,
    autoPlay: true,
    loop: true,
    playsInline: true,
    style: styles
  })));
};

var _default = SlideshowBackground;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/block-controls.js":
/*!*************************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/block-controls.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var ALLOWED_MEDIA_TYPES = ['image', 'video'];

var SlideshowBlockControls = function SlideshowBlockControls(props) {
  var galleryImages = props.attributes.galleryImages,
      onSelectImages = props.onSelectImages;
  var hasImages = !!galleryImages.length;
  return (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_components.AlignmentToolbar, props), (0, _element.createElement)(_components.ColorToolbar, props), (0, _element.createElement)(_components2.Toolbar, null, (0, _element.createElement)(_blockEditor.MediaUpload, {
    accept: "image/*",
    addToGallery: hasImages,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    gallery: true,
    multiple: true,
    onSelect: onSelectImages,
    render: function render(_ref) {
      var open = _ref.open;
      return (0, _element.createElement)(_components2.Button, {
        className: "components-icon-button components-toolbar__control",
        label: (0, _i18n.__)('Change Media', '__plugin_txtd'),
        icon: icons.swap,
        onClick: open
      });
    },
    value: galleryImages.map(function (image) {
      return image.id;
    })
  })));
};

var _default = SlideshowBlockControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/deprecated.js":
/*!*********************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/deprecated.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/slideshow/save.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/slideshow/attributes.json"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var attributes = Object.assign({}, _attributes.default, _components.alignmentAttributes, _components.colorAttributes, _components.layoutAttributes, _components.scrollingAttributes);
var deprecated = [];
deprecated.push({
  attributes: attributes,
  isEligible: function isEligible(attributes, innerBlocks) {
    return "undefined" === typeof attributes.defaultsGenerated;
  },
  migrate: function migrate(attributes, innerBlocks) {
    return _objectSpread(_objectSpread({}, attributes), {}, {
      defaultsGenerated: true
    });
  },
  save: _save.default
});
var _default = deprecated;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/edit.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/edit.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/slideshow/preview.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/slideshow/inspector-controls.js"));

var _blockControls = _interopRequireDefault(__webpack_require__(/*! ./block-controls */ "./packages/block-library/build/blocks/slideshow/block-controls.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _compose = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Edit = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    (0, _classCallCheck2.default)(this, Edit);
    _this = _super.apply(this, arguments);
    _this.state = {
      selectedIndex: 0
    };
    return _this;
  }

  (0, _createClass2.default)(Edit, [{
    key: "onPrevArrowClick",
    value: function onPrevArrowClick() {
      var galleryImages = this.props.attributes.galleryImages;
      var selectedIndex = this.state.selectedIndex;
      var newIndex = (selectedIndex + galleryImages.length - 1) % galleryImages.length;
      this.setState({
        selectedIndex: newIndex
      });
    }
  }, {
    key: "onNextArrowClick",
    value: function onNextArrowClick() {
      var galleryImages = this.props.attributes.galleryImages;
      var selectedIndex = this.state.selectedIndex;
      var newIndex = (selectedIndex + 1) % galleryImages.length;
      this.setState({
        selectedIndex: newIndex
      });
    }
  }, {
    key: "setIndex",
    value: function setIndex(selectedIndex) {
      this.setState({
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: "onSelectImages",
    value: function onSelectImages(images) {
      var setAttributes = this.props.setAttributes;
      (0, _utils.normalizeImages)(images).then(function (newImages) {
        setAttributes({
          galleryImages: newImages
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var galleryImages = this.props.attributes.galleryImages;
      var onSelectImages = this.onSelectImages.bind(this);
      var newProps = Object.assign({}, this.props, {
        onSelectImages: onSelectImages
      });
      var setIndex = this.setIndex.bind(this);
      var selectedIndex = this.state.selectedIndex;

      if (selectedIndex >= galleryImages.length) {
        selectedIndex = galleryImages.length - 1;
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, (0, _extends2.default)({}, newProps, {
        previewImage: galleryImages[selectedIndex],
        onPrevArrowClick: this.onPrevArrowClick.bind(this),
        onNextArrowClick: this.onNextArrowClick.bind(this)
      })), (0, _element.createElement)(_inspectorControls.default, _objectSpread(_objectSpread({}, newProps), {}, {
        setIndex: setIndex,
        selectedIndex: selectedIndex
      })), (0, _element.createElement)(_blockControls.default, newProps));
    }
  }]);
  return Edit;
}(_element.Component);

var _default = (0, _compose.createHigherOrderComponent)((0, _compose.compose)([_utils.withSettings, _components.withParallax]))(Edit);

exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/index.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/slideshow/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/slideshow/save.js"));

var _deprecated = _interopRequireDefault(__webpack_require__(/*! ./deprecated */ "./packages/block-library/build/blocks/slideshow/deprecated.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/slideshow/attributes.json"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */
var attributes = Object.assign({}, _attributes.default, _components.alignmentAttributes, _components.colorAttributes, _components.layoutAttributes, _components.scrollingAttributes);
/**
 * WordPress dependencies
 */

function getNewDefaults() {
  return _getNewDefaults.apply(this, arguments);
}

function _getNewDefaults() {
  _getNewDefaults = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var placeholderImages, count, images;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.getPlaceholderImages)();

          case 2:
            placeholderImages = _context.sent;
            count = (0, _utils.getRandomBetween)(2, 4);
            images = (0, _utils.getRandomArrayFromArray)(placeholderImages, count);
            images.forEach(function (image) {
              if (typeof (image === null || image === void 0 ? void 0 : image.download) === "function") {
                image.download();
              }
            });
            return _context.abrupt("return", {
              galleryImages: images
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNewDefaults.apply(this, arguments);
}

(0, _utils.generateDefaults)('novablocks/slideshow', getNewDefaults);
(0, _blocks.registerBlockType)('novablocks/slideshow', {
  title: (0, _i18n.__)('Slideshow Me the Way', '__plugin_txtd'),
  description: (0, _i18n.__)('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.slideshow,
  // Additional search terms
  keywords: [(0, _i18n.__)('slider', '__plugin_txtd'), (0, _i18n.__)('carousel', '__plugin_txtd'), (0, _i18n.__)('images', '__plugin_txtd'), (0, _i18n.__)('cover', '__plugin_txtd')],
  attributes: attributes,
  edit: _edit.default,
  save: _save.default,
  deprecated: _deprecated.default,
  getEditWrapperProps: function getEditWrapperProps() {
    var settings = wp.data.select('core/block-editor').getSettings();
    return settings.alignWide ? {
      'data-align': 'full'
    } : {};
  }
});


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/inspector-controls.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/inspector-controls.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var SlideshowInspectorControls = function SlideshowInspectorControls(props) {
  var _props$attributes = props.attributes,
      galleryImages = _props$attributes.galleryImages,
      minHeight = _props$attributes.minHeight,
      slideshowType = _props$attributes.slideshowType,
      selectedIndex = props.selectedIndex,
      setIndex = props.setIndex,
      setAttributes = props.setAttributes,
      minHeightOptions = props.settings.slideshow.minHeightOptions;
  var selectedImage = galleryImages[selectedIndex];
  var focalPointPickerClassNames = ['novablocks-focal-point-picker'];

  if (selectedImage) {
    var selectedImageFocalPoint = selectedImage.focalPoint || {
      x: 0.5,
      y: 0.5
    };
    focalPointPickerClassNames.push((0, _utils.getSnapClassname)(selectedImageFocalPoint));
  }

  focalPointPickerClassNames = focalPointPickerClassNames.join(' ');
  var thumbnail, width, height;

  if ('video' === (selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.type)) {
    thumbnail = '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png';
    width = 218;
    height = 170;
  } else {
    var _selectedImage$sizes, _selectedImage$sizes$, _selectedImage$sizes2, _selectedImage$sizes3, _selectedImage$sizes4, _selectedImage$sizes5;

    thumbnail = (selectedImage === null || selectedImage === void 0 ? void 0 : (_selectedImage$sizes = selectedImage.sizes) === null || _selectedImage$sizes === void 0 ? void 0 : (_selectedImage$sizes$ = _selectedImage$sizes.novablocks_tiny) === null || _selectedImage$sizes$ === void 0 ? void 0 : _selectedImage$sizes$.url) || (selectedImage === null || selectedImage === void 0 ? void 0 : (_selectedImage$sizes2 = selectedImage.sizes) === null || _selectedImage$sizes2 === void 0 ? void 0 : (_selectedImage$sizes3 = _selectedImage$sizes2.novablocks_large) === null || _selectedImage$sizes3 === void 0 ? void 0 : _selectedImage$sizes3.url) || (selectedImage === null || selectedImage === void 0 ? void 0 : (_selectedImage$sizes4 = selectedImage.sizes) === null || _selectedImage$sizes4 === void 0 ? void 0 : (_selectedImage$sizes5 = _selectedImage$sizes4.novablocks_huge) === null || _selectedImage$sizes5 === void 0 ? void 0 : _selectedImage$sizes5.url);
    width = selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.width;
    height = selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.height;
  }

  return (0, _element.createElement)(_element.Fragment, null, !!galleryImages.length && (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Slides')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('General')
  }, (0, _element.createElement)(_components.GalleryPreview, {
    key: 'slideshow-gallery-preview',
    galleryImages: galleryImages,
    onSelectImage: setIndex,
    selected: selectedIndex
  }), selectedImage && (0, _element.createElement)(_components2.FocalPointPicker, {
    key: 'slideshow-focal-point-picker',
    className: focalPointPickerClassNames,
    url: thumbnail,
    dimensions: {
      width: selectedImage.width,
      height: selectedImage.height
    },
    value: selectedImage.focalPoint || {
      x: 0.5,
      y: 0.5
    },
    onChange: function onChange(focalPoint) {
      var newGalleryImages = galleryImages;
      newGalleryImages[selectedIndex].focalPoint = (0, _utils.maybeSnapFocalPoint)(focalPoint);
      setAttributes({
        galleryImages: newGalleryImages
      });
    }
  }))), 'gallery' === slideshowType && (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.LayoutControls, props), (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Layout')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.RadioControl, {
    key: 'slideshow-minimum-height-controls',
    label: (0, _i18n.__)('Minimum Height', '__plugin_txtd'),
    selected: minHeight,
    onChange: function onChange(nextMinHeight) {
      setAttributes({
        minHeight: parseInt(nextMinHeight, 10)
      });
    },
    options: minHeightOptions
  })))));
};

var _default = SlideshowInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/preview.js":
/*!******************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/preview.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _background = _interopRequireDefault(__webpack_require__(/*! ./background */ "./packages/block-library/build/blocks/slideshow/background.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SlideshowPreview = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SlideshowPreview, _Component);

  var _super = _createSuper(SlideshowPreview);

  function SlideshowPreview() {
    var _this;

    (0, _classCallCheck2.default)(this, SlideshowPreview);
    _this = _super.apply(this, arguments);
    _this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
    return _this;
  }

  (0, _createClass2.default)(SlideshowPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions.bind(this));
      this.updateDimensions();
    }
  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      if (!this.container) {
        return;
      }

      this.setState({
        dimensions: {
          width: this.container.offsetWidth,
          height: this.container.offsetHeight
        }
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          contentPadding = _this$props$attribute.contentPadding,
          contentPaddingCustom = _this$props$attribute.contentPaddingCustom,
          contentWidth = _this$props$attribute.contentWidth,
          contentWidthCustom = _this$props$attribute.contentWidthCustom,
          minHeight = _this$props$attribute.minHeight,
          verticalAlignment = _this$props$attribute.verticalAlignment,
          horizontalAlignment = _this$props$attribute.horizontalAlignment,
          contentColor = _this$props$attribute.contentColor,
          overlayFilterStyle = _this$props$attribute.overlayFilterStyle,
          galleryImages = _this$props$attribute.galleryImages,
          previewImage = _this$props.previewImage,
          className = _this$props.className;
      var classes = [className, 'novablocks-slideshow is-ready', "novablocks-u-valign-".concat(verticalAlignment), "novablocks-u-halign-".concat(horizontalAlignment), "novablocks-u-spacing-".concat(contentPadding), "novablocks-u-content-width-".concat(contentWidth), "novablocks-u-background", "novablocks-u-background-".concat(overlayFilterStyle)];
      var styles = {
        slideshow: {
          '--novablocks-slideshow-text-color': contentColor
        },
        content: {},
        foreground: {}
      };

      if (contentPadding === 'custom') {
        styles.foreground.paddingTop = "".concat(contentPaddingCustom, "%");
        styles.foreground.paddingBottom = "".concat(contentPaddingCustom, "%");
      }

      if (contentWidth === 'custom') {
        styles.content.maxWidth = "".concat(contentWidthCustom, "%");
      }

      var maxAspectRatio = 0;
      var mediaMinHeight = 0;
      galleryImages.forEach(function (image) {
        var _image$sizes;

        var imageSize = image === null || image === void 0 ? void 0 : (_image$sizes = image.sizes) === null || _image$sizes === void 0 ? void 0 : _image$sizes.full;
        var aspectRatio = !!imageSize ? imageSize.width / imageSize.height : 0;
        maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
        mediaMinHeight = _this2.state.dimensions.width / maxAspectRatio;
      });
      var attributesHeight = this.props.parallax.state.scrollContainerHeight * minHeight / 100;
      styles.slideshow.minHeight = Math.max(attributesHeight, mediaMinHeight, maxAspectRatio) + 'px';
      return (0, _element.createElement)(_element.Fragment, null, !!galleryImages.length && (0, _element.createElement)("div", {
        className: classes.join(' '),
        style: styles.slideshow
      }, (0, _element.createElement)("div", {
        className: "novablocks-slideshow__slider"
      }, (0, _element.createElement)("div", {
        className: "novablocks-slideshow__slide"
      }, previewImage && (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_background.default, this.props), (0, _element.createElement)("div", {
        className: "novablocks-slideshow__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align",
        style: styles.foreground
      }, (0, _element.createElement)("div", {
        className: "novablocks-slideshow__inner-container novablocks-u-content-width",
        style: styles.content,
        dangerouslySetInnerHTML: {
          __html: (typeof previewImage.title === 'string' && "<h2>".concat(previewImage.title, "</h2>") || '') + (typeof previewImage.caption === 'string' && previewImage.caption || '')
        }
      }))))), galleryImages.length > 1 && (0, _element.createElement)("div", {
        className: "novablocks-slideshow__controls"
      }, (0, _element.createElement)("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled",
        onClick: this.props.onPrevArrowClick
      }), (0, _element.createElement)("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled",
        onClick: this.props.onNextArrowClick
      }))), !galleryImages.length && (0, _element.createElement)(_components.GalleryPlaceholder, this.props));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dimensions = this.state.dimensions;
      return (0, _element.createElement)("div", {
        ref: function ref(el) {
          return _this3.container = el;
        }
      }, dimensions && this.renderContent());
    }
  }]);
  return SlideshowPreview;
}(_element.Component);

var _default = SlideshowPreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/slideshow/save.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/slideshow/save.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _default = function _default() {
  return (0, _element.createElement)(_blockEditor.InnerBlocks.Content, null);
};

exports.default = _default;


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

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map