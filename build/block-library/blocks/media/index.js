this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/media/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/media/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./packages/block-library/build/blocks/media/attributes.json":
/*!*******************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/attributes.json ***!
  \*******************************************************************/
/*! exports provided: align, mediaPosition, blockStyle, contentStyle, horizontalAlignment, verticalAlignment, emphasisArea, contentAreaWidth, balanceEmphasis, balanceFocalPoint, layoutPreset, upgradedToModerate, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"full\"},\"mediaPosition\":{\"type\":\"string\",\"default\":\"left\"},\"blockStyle\":{\"type\":\"string\",\"default\":\"basic\"},\"contentStyle\":{\"type\":\"string\",\"default\":\"moderate\"},\"horizontalAlignment\":{\"type\":\"string\",\"default\":\"center\"},\"verticalAlignment\":{\"type\":\"string\",\"default\":\"\"},\"emphasisArea\":{\"type\":\"number\",\"default\":100},\"contentAreaWidth\":{\"type\":\"number\",\"default\":50},\"balanceEmphasis\":{\"type\":\"number\",\"default\":0},\"balanceFocalPoint\":{\"type\":\"string\",\"default\":\"content\"},\"layoutPreset\":{\"type\":\"string\",\"default\":\"stable\"},\"upgradedToModerate\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/media/block-controls.js":
/*!*********************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/block-controls.js ***!
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

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MEDIA_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-pull-left',
    title: (0, _i18n.__)('Show Media on Left Side', '__plugin_txtd')
  },
  right: {
    icon: 'align-pull-right',
    title: (0, _i18n.__)('Show Media on Right Side', '__plugin_txtd')
  }
};

var MediaBlockControls = function MediaBlockControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var mediaPosition = attributes.mediaPosition;
  return (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_components2.Toolbar, {
    controls: Object.keys(MEDIA_ALIGNMENTS_CONTROLS).map(function (control) {
      return _objectSpread(_objectSpread({}, MEDIA_ALIGNMENTS_CONTROLS[control]), {}, {
        onClick: function onClick() {
          setAttributes({
            mediaPosition: control
          });
        },
        isActive: mediaPosition === control
      });
    })
  }), (0, _element.createElement)(_components.AlignmentToolbar, props));
};

var _default = MediaBlockControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/media/deprecated.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/deprecated.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/media/save.js"));

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/media/attributes.json"));

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
    var contentStyle = attributes.contentStyle,
        gallery = attributes.gallery;
    var images = Array.isArray(gallery) && !!gallery.length ? gallery : attributes.images;
    return _objectSpread(_objectSpread({}, (0, _lodash.omit)(attributes, ['gallery'])), {}, {
      images: images,
      contentStyle: contentStyle === 'basic' ? 'moderate' : contentStyle,
      upgradedToModerate: true,
      defaultsGenerated: true
    });
  },
  save: _save.default
}];
var _default = deprecated;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/media/edit.js":
/*!***********************************************************!*\
  !*** ./packages/block-library/build/blocks/media/edit.js ***!
  \***********************************************************/
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

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _blockControls = _interopRequireDefault(__webpack_require__(/*! ./block-controls */ "./packages/block-library/build/blocks/media/block-controls.js"));

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/media/preview.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/media/inspector-controls.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MediaEdit = function MediaEdit(props) {
  function updateImages(media) {
    props.setAttributes({
      images: media.map(function (image) {
        return JSON.stringify({
          id: image.id,
          url: image.url,
          alt: image.alt
        });
      })
    });
  }

  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_inspectorControls.default, props), (0, _element.createElement)(_preview.default, _objectSpread(_objectSpread({}, props), {}, {
    updateImages: updateImages
  })), (0, _element.createElement)(_blockControls.default, _objectSpread(_objectSpread({}, props), {}, {
    updateImages: updateImages
  })));
};

var _default = (0, _utils.withSettings)(MediaEdit);

exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/media/index.js":
/*!************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/media/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/media/save.js"));

var _transforms = _interopRequireDefault(__webpack_require__(/*! ./transforms */ "./packages/block-library/build/blocks/media/transforms.js"));

var _deprecated = _interopRequireDefault(__webpack_require__(/*! ./deprecated */ "./packages/block-library/build/blocks/media/deprecated.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/media/attributes.json"));

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
              verticalAlignment: "center",
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

(0, _utils.generateDefaults)('novablocks/media', getNewDefaults);
(0, _blocks.registerBlockType)('novablocks/media', {
  title: (0, _i18n.__)('Media Card Constellation', '__plugin_txtd'),
  description: (0, _i18n.__)('Display media objects alongside short pieces of content.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.media,
  // Additional search terms
  keywords: [(0, _i18n.__)('image with text', '__plugin_txtd'), (0, _i18n.__)('columns', '__plugin_txtd'), (0, _i18n.__)('side text', '__plugin_txtd')],
  attributes: attributes,
  edit: _edit.default,
  save: _save.default,
  getEditWrapperProps: function getEditWrapperProps() {
    var settings = wp.data.select('core/block-editor').getSettings();
    return settings.alignWide ? {
      'data-align': 'full'
    } : {};
  },
  deprecated: _deprecated.default,
  transforms: _transforms.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/media/inspector-controls.js":
/*!*************************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/inspector-controls.js ***!
  \*************************************************************************/
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

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CONTENT_AREA_MAX_WIDTH = 70;
var CONTENT_AREA_MIN_WIDTH = 30;
var CONTENT_AREA_MID_VALUE = (CONTENT_AREA_MIN_WIDTH + CONTENT_AREA_MAX_WIDTH) * 0.5;

var MediaInspectorControls = function MediaInspectorControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var emphasisArea = attributes.emphasisArea,
      contentAreaWidth = attributes.contentAreaWidth,
      layoutGutter = attributes.layoutGutter,
      blockStyle = attributes.blockStyle,
      balanceEmphasis = attributes.balanceEmphasis,
      balanceFocalPoint = attributes.balanceFocalPoint;

  var getBalanceAttributes = function getBalanceAttributes(_ref) {
    var balanceEmphasis = _ref.balanceEmphasis,
        balanceFocalPoint = _ref.balanceFocalPoint;
    var width = balanceEmphasis * (CONTENT_AREA_MAX_WIDTH - CONTENT_AREA_MID_VALUE) / 100 + CONTENT_AREA_MID_VALUE;
    var contentAreaWidth = 'content' === balanceFocalPoint ? width : 100 - width;
    return {
      balanceEmphasis: balanceEmphasis,
      balanceFocalPoint: balanceFocalPoint,
      contentAreaWidth: contentAreaWidth
    };
  };

  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.EmphasisBlockAreaControls, null, blockStyle !== 'basic' && (0, _element.createElement)(_components2.RangeControl, {
    value: emphasisArea,
    onChange: function onChange(emphasisArea) {
      return setAttributes({
        emphasisArea: emphasisArea
      });
    },
    label: (0, _i18n.__)('Emphasis Area'),
    min: 10,
    max: 100,
    step: 5
  })), (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Visual Balance')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Customize')
  }, (0, _element.createElement)("div", {
    key: 'media-card-visual-balance-customize-1',
    className: (0, _utils.getControlsClasses)(attributes, getBalanceAttributes)
  }, (0, _element.createElement)(_components2.RangeControl, {
    value: balanceEmphasis,
    onChange: function onChange(balanceEmphasis) {
      setAttributes(getBalanceAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        balanceEmphasis: balanceEmphasis
      })));
    },
    label: (0, _i18n.__)('Emphasis by Balance'),
    min: 0,
    max: 100,
    step: 25
  }), (0, _element.createElement)(_components2.RadioControl, {
    label: (0, _i18n.__)('Focal Point', '__plugin_txtd'),
    selected: balanceFocalPoint,
    onChange: function onChange(balanceFocalPoint) {
      setAttributes(getBalanceAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        balanceFocalPoint: balanceFocalPoint
      })));
    },
    options: [{
      label: (0, _i18n.__)('Content Area'),
      value: 'content'
    }, {
      label: (0, _i18n.__)('Media / Gallery'),
      value: 'media'
    }]
  }))), (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Layout')
  }, (0, _element.createElement)(_components2.RangeControl, {
    key: 'media-card-content-area-width',
    value: contentAreaWidth,
    onChange: function onChange(contentAreaWidth) {
      return setAttributes({
        contentAreaWidth: contentAreaWidth
      });
    },
    label: (0, _i18n.__)('Content Area Width'),
    min: CONTENT_AREA_MIN_WIDTH,
    max: CONTENT_AREA_MAX_WIDTH,
    step: 5
  }), (0, _element.createElement)(_components2.RangeControl, {
    key: 'media-card-layout-gutter',
    value: layoutGutter,
    onChange: function onChange(layoutGutter) {
      return setAttributes({
        layoutGutter: layoutGutter
      });
    },
    label: (0, _i18n.__)('Layout Gutter'),
    min: 0,
    max: 100,
    step: 10
  })))));
};

var _default = MediaInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/media/preview.js":
/*!**************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/preview.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * External dependencies
 */
var MediaPreview = function MediaPreview(props) {
  var _props$attributes = props.attributes,
      contentStyle = _props$attributes.contentStyle,
      blockStyle = _props$attributes.blockStyle,
      mediaPosition = _props$attributes.mediaPosition,
      images = _props$attributes.images,
      verticalAlignment = _props$attributes.verticalAlignment,
      emphasisArea = _props$attributes.emphasisArea,
      contentAreaWidth = _props$attributes.contentAreaWidth,
      layoutGutter = _props$attributes.layoutGutter,
      className = props.className,
      settings = props.settings;
  var classNames = (0, _classnames.default)(className, "novablocks-media", "has-image-on-the-".concat(mediaPosition), "novablocks-u-valign-".concat(verticalAlignment));
  var passedProps = props;

  if ("undefined" !== typeof images && images.length && typeof images[0] === 'string') {
    passedProps.attributes.images = images.map(function (image) {
      return JSON.parse(image);
    });
  }

  var cssVars = {
    '--emphasis-area': emphasisArea,
    '--novablocks-media-content-width': "".concat(contentAreaWidth, "%"),
    '--novablocks-media-gutter': "calc( ".concat(layoutGutter, " * var(--novablocks-spacing) * 5 / 100 )")
  };
  var blockClassNames = (0, _classnames.default)("novablocks-block", "block-is-".concat(blockStyle), "content-is-".concat(contentStyle));
  return (0, _element.createElement)("div", {
    className: classNames,
    style: cssVars
  }, (0, _element.createElement)("div", {
    className: blockClassNames
  }, (0, _element.createElement)("div", {
    className: "wp-block-group__inner-container"
  }, (0, _element.createElement)("div", {
    className: "wp-block",
    "data-align": "wide"
  }, (0, _element.createElement)("div", {
    className: "novablocks-media__layout"
  }, (0, _element.createElement)("div", {
    className: "novablocks-media__content"
  }, (0, _element.createElement)("div", {
    className: "novablocks-media__inner-container novablocks-block__content"
  }, (0, _element.createElement)(_blockEditor.InnerBlocks, {
    allowedBlocks: settings.media.allowedBlocks,
    template: settings.media.template
  }))), (0, _element.createElement)("div", {
    className: "novablocks-media__aside"
  }, (0, _element.createElement)(_components.AdvancedGallery.Component, passedProps)))))));
};

var _default = MediaPreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/media/save.js":
/*!***********************************************************!*\
  !*** ./packages/block-library/build/blocks/media/save.js ***!
  \***********************************************************/
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

/***/ "./packages/block-library/build/blocks/media/transforms.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/build/blocks/media/transforms.js ***!
  \*****************************************************************/
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
      return (0, _blocks.createBlock)('novablocks/media', {
        images: attributes.images
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['novablocks/advanced-gallery'],
    transform: function transform(attributes) {
      return (0, _blocks.createBlock)('novablocks/advanced-gallery', {
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

/***/ "./packages/block-library/node_modules/classnames/index.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/node_modules/classnames/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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