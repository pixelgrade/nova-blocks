this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/google-map/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/google-map/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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

/***/ "./packages/block-library/build/blocks/google-map/api-key-panel-body.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/api-key-panel-body.js ***!
  \******************************************************************************/
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

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ApiKeyPanelBody = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ApiKeyPanelBody, _Component);

  var _super = _createSuper(ApiKeyPanelBody);

  function ApiKeyPanelBody() {
    (0, _classCallCheck2.default)(this, ApiKeyPanelBody);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ApiKeyPanelBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          apiKey = _this$props.apiKey,
          apiKeyInstructions = _this$props.apiKeyInstructions,
          savedApiKey = _this$props.savedApiKey,
          onChangeApiKey = _this$props.onChangeApiKey,
          onSaveApiKey = _this$props.onSaveApiKey;

      if (savedApiKey === '') {
        return null;
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.TextControl, {
        placeholder: (0, _i18n.__)('Paste API key here', '__plugin_txtd'),
        value: apiKey,
        label: (0, _i18n.__)('Google Maps API Key', '__plugin_txtd'),
        onChange: onChangeApiKey,
        help: apiKeyInstructions
      }), (0, _element.createElement)(_components.Button, {
        isSecondary: true,
        onClick: function onClick() {
          onSaveApiKey(apiKey);
        }
      }, (0, _i18n.__)('Save', '__plugin_txtd')));
    }
  }]);
  return ApiKeyPanelBody;
}(_element.Component);

var _default = ApiKeyPanelBody;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/attributes.json":
/*!************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/attributes.json ***!
  \************************************************************************/
/*! exports provided: align, markers, pinColor, showControls, showIcons, showLabels, styleData, styleSlug, zoom, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"center\"},\"markers\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"string\"}},\"pinColor\":{\"type\":\"string\",\"default\":\"#222222\"},\"showControls\":{\"type\":\"boolean\",\"default\":false},\"showIcons\":{\"type\":\"boolean\",\"default\":true},\"showLabels\":{\"type\":\"boolean\",\"default\":true},\"styleData\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"object\"}},\"styleSlug\":{\"type\":\"string\",\"default\":\"original\"},\"zoom\":{\"type\":\"number\",\"default\":17}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/default-map-center.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/default-map-center.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var defaultMapCenter = {
  lat: 47.1665264,
  lng: 27.58285479999995
};
var _default = defaultMapCenter;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/edit.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/edit.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _placeholder = _interopRequireDefault(__webpack_require__(/*! ./placeholder */ "./packages/block-library/build/blocks/google-map/placeholder.js"));

var _map = _interopRequireDefault(__webpack_require__(/*! ./map */ "./packages/block-library/build/blocks/google-map/map.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/google-map/inspector-controls.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _api = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _compose = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var API_KEY_SETTING_ID = 'novablocks_google_maps_api_key';

// This is a GLOBAL function that, when present, gets called by the Google Maps script on authentication errors.
window.gm_authFailure = function () {
  window.googlemaps_authfailure = true;
  window.dispatchEvent(new Event('novablock.googlemaps_authfailure'));
};

var Edit = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    (0, _classCallCheck2.default)(this, Edit);
    _this = _super.apply(this, arguments);
    _this.state = {
      fetchedScript: false,
      fetchedApiKey: false,
      savedApiKey: '',
      apiKey: '',
      gmAuthFailure: typeof window.googlemaps_authfailure === 'undefined' ? false : !!window.googlemaps_authfailure
    };
    _this.onChangeMarkers = _this.onChangeMarkers.bind((0, _assertThisInitialized2.default)(_this));
    _this.onGoogleMapsAuthFailure = _this.onGoogleMapsAuthFailure.bind((0, _assertThisInitialized2.default)(_this));
    _this.settings = null;
    return _this;
  }

  (0, _createClass2.default)(Edit, [{
    key: "onGoogleMapsAuthFailure",
    value: function onGoogleMapsAuthFailure(event) {
      this.setState({
        gmAuthFailure: true
      });
    }
  }, {
    key: "onChangeMarkers",
    value: function onChangeMarkers(markers) {
      this.props.setAttributes({
        markers: markers
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);

      _api.loadPromise.done(function () {
        _this2.settings = new _api.models.Settings();

        _this2.settings.on("change:".concat(API_KEY_SETTING_ID), function (model) {
          var apiKey = model.get(API_KEY_SETTING_ID);

          _this2.setState({
            fetchedApiKey: true,
            savedApiKey: apiKey,
            apiKey: apiKey
          });

          if (!!apiKey) {
            _this2.loadGoogleMapsScript();
          }
        });

        _this2.settings.fetch();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);
    }
  }, {
    key: "loadGoogleMapsScript",
    value: function loadGoogleMapsScript() {
      var _this3 = this;

      var savedApiKey = this.state.savedApiKey;
      var keyParam = savedApiKey !== '' ? "key=".concat(savedApiKey, "&") : '';
      var scriptSrc = "//maps.googleapis.com/maps/api/js?".concat(keyParam, "libraries=places");
      var scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');

      if (scripts.length) {
        this.setState({
          fetchedScript: true
        });
        return Promise.resolve();
      }

      var promise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = scriptSrc;
        document.body.appendChild(script);
      });
      return promise.then(function () {
        _this3.setState({
          fetchedScript: true
        });
      });
    }
  }, {
    key: "saveApiKey",
    value: function saveApiKey(apiKey) {
      var _this4 = this;

      var key = new _api.models.Settings((0, _defineProperty2.default)({}, API_KEY_SETTING_ID, apiKey));
      key.save().then(function () {
        _this4.setState({
          gmAuthFailure: false
        });

        _this4.settings.fetch();
      });
    }
  }, {
    key: "renderPreview",
    value: function renderPreview() {
      var _this$state = this.state,
          fetchedApiKey = _this$state.fetchedApiKey,
          fetchedScript = _this$state.fetchedScript,
          savedApiKey = _this$state.savedApiKey,
          gmAuthFailure = _this$state.gmAuthFailure;

      if (!fetchedApiKey) {
        return (0, _element.createElement)(_components2.Spinner, null);
      }

      if (!fetchedScript || !savedApiKey || gmAuthFailure) {
        return (0, _element.createElement)(_placeholder.default, {
          saveApiKey: this.saveApiKey.bind(this),
          apiKey: savedApiKey,
          apiKeyInstructions: this.getInstructions()
        });
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_map.default, (0, _extends2.default)({}, this.props, {
        onChange: this.onChangeMarkers
      })));
    }
  }, {
    key: "getInstructions",
    value: function getInstructions() {
      var gmAuthFailure = this.state.gmAuthFailure;
      var url = '//developers.google.com/maps/documentation/javascript/get-api-key';
      var hyperlink = (0, _element.createElement)("a", {
        target: "_blank",
        href: url
      }, (0, _i18n.__)('register a Google Maps API Key', '__plugin_txtd'));

      if (gmAuthFailure) {
        return (0, _element.createElement)(_element.Fragment, null, (0, _i18n.__)('It seems that your Google Maps API key is INVALID. Please REFRESH the page, double check that you pasted it correctly, and that it is a valid API key. More information about how to', '__plugin_txtd'), " ", hyperlink);
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _i18n.__)('To display the map, you need to', '__plugin_txtd'), " ", hyperlink, " ", (0, _i18n.__)('and include it bellow.', '__plugin_txtd'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state2 = this.state,
          fetchedApiKey = _this$state2.fetchedApiKey,
          fetchedScript = _this$state2.fetchedScript,
          savedApiKey = _this$state2.savedApiKey,
          gmAuthFailure = _this$state2.gmAuthFailure;
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var align = attributes.align,
          styleData = attributes.styleData;
      var newProps = Object.assign(this.props);

      if (typeof styleData === "string") {
        newProps.attributes.styleData = JSON.parse(styleData);
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_blockEditor.BlockAlignmentToolbar, {
        value: align,
        onChange: function onChange(align) {
          return setAttributes({
            align: align
          });
        },
        controls: ['center', 'full']
      })), !!fetchedApiKey && !!fetchedScript && !!savedApiKey && !gmAuthFailure && (0, _element.createElement)(_inspectorControls.default, (0, _extends2.default)({}, newProps, {
        apiKey: this.state.apiKey,
        savedApiKey: this.state.savedApiKey,
        onChangeApiKey: function onChangeApiKey(apiKey) {
          _this5.setState({
            apiKey: apiKey
          });
        },
        onSaveApiKey: this.saveApiKey.bind(this),
        apiKeyInstructions: this.getInstructions()
      })), this.renderPreview());
    }
  }]);
  return Edit;
}(_element.Component);

var _default = (0, _compose.createHigherOrderComponent)((0, _compose.compose)([_utils.withSettings, _components.withParallax]))(Edit);

exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/index.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/google-map/edit.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/google-map/attributes.json"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */
var attributes = Object.assign({}, _attributes.default, _components.scrollingAttributes);
/**
 * WordPress dependencies
 */

(0, _blocks.registerBlockType)('novablocks/google-map', {
  title: (0, _i18n.__)('Map of the World', '__plugin_txtd'),
  description: (0, _i18n.__)('Display an interactive map to show the location of your venue.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.map,
  keywords: [(0, _i18n.__)('google', '__plugin_txtd'), (0, _i18n.__)('maps', '__plugin_txtd'), (0, _i18n.__)('google maps', '__plugin_txtd'), (0, _i18n.__)('location', '__plugin_txtd')],
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var align = attributes.align;

    if ('center' === align || 'full' === align) {
      return {
        'data-align': align
      };
    }
  },
  attributes: attributes,
  edit: _edit.default,
  save: function save() {}
});


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/inspector-controls.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/inspector-controls.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _apiKeyPanelBody = _interopRequireDefault(__webpack_require__(/*! ./api-key-panel-body */ "./packages/block-library/build/blocks/google-map/api-key-panel-body.js"));

var _mapStyleSelect = _interopRequireDefault(__webpack_require__(/*! ./map-style-select */ "./packages/block-library/build/blocks/google-map/map-style-select.js"));

var _utils = __webpack_require__(/*! ./utils */ "./packages/block-library/build/blocks/google-map/utils.js");

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles */ "./packages/block-library/build/blocks/google-map/styles/index.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ButtonInspectorControls = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ButtonInspectorControls, _Component);

  var _super = _createSuper(ButtonInspectorControls);

  function ButtonInspectorControls() {
    var _this;

    (0, _classCallCheck2.default)(this, ButtonInspectorControls);
    _this = _super.apply(this, arguments);
    _this.compileStyles = _utils.compileStyles.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ButtonInspectorControls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          styleSlug = _this$props$attribute.styleSlug,
          zoom = _this$props$attribute.zoom,
          showLabels = _this$props$attribute.showLabels,
          showControls = _this$props$attribute.showControls,
          showIcons = _this$props$attribute.showIcons,
          savedApiKey = _this$props.savedApiKey,
          setAttributes = _this$props.setAttributes;

      if (!savedApiKey) {
        return null;
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.ControlsSection, {
        label: (0, _i18n.__)('Map Design')
      }, (0, _element.createElement)(_components.ControlsTab, {
        label: (0, _i18n.__)('Customize')
      }, (0, _element.createElement)(_mapStyleSelect.default, (0, _extends2.default)({}, this.props, {
        key: 'google-map-style-controls',
        apiKey: savedApiKey,
        value: styleSlug,
        options: _styles.default,
        onChange: function onChange(newStyleSlug) {
          var mapStyles = _styles.default.find(function (style) {
            return style.slug === newStyleSlug;
          }).styles;

          var newPinColor = newStyleSlug === 'customized' ? _utils.getMapAccentColor.call(_this2) : '#222222';
          setAttributes({
            styleSlug: newStyleSlug,
            styleData: mapStyles,
            pinColor: newPinColor
          });
        }
      }))), (0, _element.createElement)(_components.ControlsTab, {
        label: (0, _i18n.__)('Settings')
      }, (0, _element.createElement)(_components2.ToggleControl, {
        key: 'google-map-show-venues-control',
        label: (0, _i18n.__)('Show Nearby Venues', '__plugin_txtd'),
        checked: showIcons,
        onChange: function onChange() {
          return setAttributes({
            showIcons: !showIcons
          });
        }
      }), (0, _element.createElement)(_components2.ToggleControl, {
        key: 'google-map-show-labels-control',
        label: (0, _i18n.__)('Show Labels', '__plugin_txtd'),
        checked: showLabels,
        onChange: function onChange() {
          return setAttributes({
            showLabels: !showLabels
          });
        }
      }), (0, _element.createElement)(_components2.ToggleControl, {
        key: 'google-map-show-controls',
        label: (0, _i18n.__)('Show Controls', '__plugin_txtd'),
        checked: showControls,
        onChange: function onChange() {
          return setAttributes({
            showControls: !showControls
          });
        }
      }), (0, _element.createElement)(_components2.RangeControl, {
        key: 'google-map-zoom-controls',
        value: zoom,
        onChange: function onChange(newZoom) {
          return setAttributes({
            zoom: newZoom
          });
        },
        min: 5,
        max: 20,
        label: (0, _i18n.__)('Zoom Level', '__plugin_txtd')
      }))), (0, _element.createElement)(_components.ControlsSection, {
        label: (0, _i18n.__)('Setup')
      }, (0, _element.createElement)(_components.ControlsTab, {
        label: (0, _i18n.__)('Settings')
      }, (0, _element.createElement)(_apiKeyPanelBody.default, (0, _extends2.default)({
        key: 'google-map-api-key-controls'
      }, this.props)))));
    }
  }]);
  return ButtonInspectorControls;
}(_element.Component);

var _default = ButtonInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/map-style-select.js":
/*!****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/map-style-select.js ***!
  \****************************************************************************/
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./packages/block-library/build/blocks/google-map/utils.js");

var _defaultMapCenter = _interopRequireDefault(__webpack_require__(/*! ./default-map-center */ "./packages/block-library/build/blocks/google-map/default-map-center.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MapStyleSelect = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MapStyleSelect, _Component);

  var _super = _createSuper(MapStyleSelect);

  function MapStyleSelect() {
    var _this;

    (0, _classCallCheck2.default)(this, MapStyleSelect);
    _this = _super.apply(this, arguments);
    _this.state = {
      active: _this.props.value
    };
    _this.compileStyles = _utils.compileStyles.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(MapStyleSelect, [{
    key: "getStaticStyle",
    value: function getStaticStyle(styles) {
      var result = [];
      styles.forEach(function (v, i, a) {
        var style = '';

        if (v.stylers) {
          if (v.stylers.length > 0) {
            style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
            style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
            v.stylers.forEach(function (val, i, a) {
              var prop = Object.keys(val)[0];
              var propertyval = val[prop].toString().replace('#', '0x');
              style += prop + ':' + propertyval + '|';
            });
          }
        }

        result.push('style=' + encodeURIComponent(style));
      });
      return result.join('&');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          options = _this$props.options,
          value = _this$props.value,
          onChange = _this$props.onChange,
          apiKey = _this$props.apiKey;
      var markers = attributes.markers,
          zoom = attributes.zoom;
      var center = markers.length ? _utils.getMarkersCenter.call(this) : new google.maps.LatLng(_defaultMapCenter.default);
      var latitude = center.lat();
      var longitude = center.lng();
      return (0, _element.createElement)("div", {
        className: "components-base-control"
      }, (0, _element.createElement)("div", {
        className: "editor-block-styles block-editor-block-styles novablocks-block-editor-map-styles"
      }, options.map(function (option) {
        var style = _this2.getStaticStyle(_this2.compileStyles(option.styles));

        var size = '200x200';
        var mapType = 'roadmap';
        var url = 'https://maps.googleapis.com/maps/api/staticmap';
        var src = "".concat(url, "?center=").concat(latitude, ",").concat(longitude, "&zoom=").concat(zoom, "&size=").concat(size, "&maptype=").concat(mapType, "&").concat(style, "&key=").concat(apiKey);
        return (0, _element.createElement)("div", {
          key: option.slug,
          className: (0, _classnames.default)('editor-block-styles__item block-editor-block-styles__item', {
            'is-active': option.slug === _this2.state.active
          }),
          onClick: function onClick() {
            _this2.setState({
              active: option.slug
            });

            onChange(option.slug);
          },
          role: "button",
          tabIndex: "0",
          "aria-label": option.label
        }, (0, _element.createElement)("div", {
          className: "editor-block-styles__item-preview block-editor-block-styles__item-preview"
        }, (0, _element.createElement)("img", {
          src: src,
          alt: "".concat(option.label, " map style preview")
        })), (0, _element.createElement)("div", {
          className: "editor-block-styles__item-label block-editor-block-styles__item-label"
        }, option.label));
      })));
    }
  }]);
  return MapStyleSelect;
}(_element.Component);

var _default = MapStyleSelect;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/map.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/map.js ***!
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

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _pin = _interopRequireDefault(__webpack_require__(/*! ./pin */ "./packages/block-library/build/blocks/google-map/pin.js"));

var _utils = __webpack_require__(/*! ./utils */ "./packages/block-library/build/blocks/google-map/utils.js");

var _defaultMapCenter = _interopRequireDefault(__webpack_require__(/*! ./default-map-center */ "./packages/block-library/build/blocks/google-map/default-map-center.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Placeholder = wp.components.Placeholder;

var Map = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Map, _Component);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    (0, _classCallCheck2.default)(this, Map);
    _this = _super.apply(this, arguments);
    _this.map = null;
    _this.searchBox = null;
    _this.markers = [];
    _this.getMapStyles = _utils.getMapStyles.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Map, [{
    key: "clearMarkers",
    value: function clearMarkers() {
      this.markers.forEach(function (marker) {
        marker.setMap(null);
      });
      this.markers = [];
    }
  }, {
    key: "onPlacesChanged",
    value: function onPlacesChanged() {
      if (!this.searchBox) {
        return;
      }

      this.props.onChange(this.searchBox.getPlaces().map(function (place) {
        var keepProps = ['name', 'geometry'];
        var filtered = Object.keys(place).filter(function (key) {
          return keepProps.includes(key);
        }).reduce(function (obj, key) {
          obj[key] = place[key];
          return obj;
        }, {});
        return JSON.stringify(filtered);
      }));
    }
  }, {
    key: "createMarkers",
    value: function createMarkers() {
      var _this2 = this;

      var attributes = this.props.attributes;
      var markers = attributes.markers,
          styleSlug = attributes.styleSlug;
      var accentColor = styleSlug === 'customized' ? _utils.getMapAccentColor.call(this) : '#222222';

      var pinMarkup = _pin.default.replace('%ACCENT_COLOR%', accentColor);

      markers.forEach(function (markerString) {
        var marker = JSON.parse(markerString);

        if (!marker.geometry) {
          return;
        }

        _this2.markers.push(new google.maps.Marker({
          map: _this2.map,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinMarkup)
          },
          title: marker.name,
          position: marker.geometry.location
        }));
      });

      if (this.markers.length) {
        this.map.setCenter(_utils.getMarkersCenter.call(this));
      }
    }
  }, {
    key: "initializeMap",
    value: function initializeMap() {
      var attributes = this.props.attributes;
      var showControls = attributes.showControls,
          showLabels = attributes.showLabels,
          showIcons = attributes.showIcons,
          zoom = attributes.zoom;
      this.map = new google.maps.Map(document.getElementById("novablocks-google-map-".concat(this.props.clientId)), {
        mapTypeId: 'roadmap',
        center: _defaultMapCenter.default,
        zoom: zoom,
        styles: (0, _utils.addVisibilityToStyles)(this.getMapStyles(), showLabels, showIcons),
        clickableIcons: false,
        disableDefaultUI: !showControls,
        disableDoubleClickZoom: true,
        draggable: false,
        gestureHandling: 'none',
        keyboardShortcuts: false,
        scrollwheel: false
      });
    }
  }, {
    key: "initializeSearchBox",
    value: function initializeSearchBox() {
      var _this3 = this;

      // Create the search box and link it to the UI element.
      var input = document.getElementById("novablocks-google-map-search-input-".concat(this.props.clientId));
      this.searchBox = new google.maps.places.SearchBox(input); // Bias the SearchBox results towards current map's viewport.

      this.map.addListener('bounds_changed', function () {
        _this3.searchBox.setBounds(_this3.map.getBounds());
      }); // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.

      this.searchBox.addListener('places_changed', this.onPlacesChanged.bind(this));
    }
  }, {
    key: "updateMapOptions",
    value: function updateMapOptions() {
      if (this.map === null) {
        return;
      }

      var options = {};
      var attributes = this.props.attributes;
      var showControls = attributes.showControls,
          showLabels = attributes.showLabels,
          showIcons = attributes.showIcons,
          zoom = attributes.zoom;
      options.zoom = zoom;
      options.disableDefaultUI = !showControls;
      options.styles = (0, _utils.addVisibilityToStyles)(this.getMapStyles(), showLabels, showIcons);
      this.map.setOptions(options);
    }
  }, {
    key: "updateMapMarkers",
    value: function updateMapMarkers() {
      this.clearMarkers();
      this.createMarkers();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.map === null) {
        this.initializeMap();
        this.initializeSearchBox();
        this.createMarkers();
        return;
      }

      google.maps.event.trigger(this.map, 'resize');
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      Object.entries(this.props).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        if (nextProps[key] !== val) {
          shouldUpdate = true;
        }
      });
      return shouldUpdate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.updateMapOptions();

      if (prevProps.attributes.markers !== this.props.attributes.markers || prevProps.attributes.styleSlug !== this.props.attributes.styleSlug) {
        this.updateMapMarkers();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _element.createElement)("div", {
        className: "novablocks-map__map",
        id: "novablocks-google-map-".concat(this.props.clientId)
      });
    }
  }]);
  return Map;
}(_element.Component);

var MapWrapper = function MapWrapper(Map) {
  return function (props) {
    var parallax = props.parallax,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["parallax"]);
    var searchBoxStyles = {};

    if (!props.isSelected) {
      searchBoxStyles.display = 'none';
    }

    return (0, _element.createElement)("div", {
      className: "novablocks-map"
    }, (0, _element.createElement)("div", {
      className: "novablocks-map__search-box"
    }, (0, _element.createElement)(Placeholder, {
      style: searchBoxStyles
    }, (0, _element.createElement)("input", {
      type: "text",
      id: "novablocks-google-map-search-input-".concat(props.clientId),
      placeholder: (0, _i18n.__)('Enter an address to drop a pin on this map')
    }))), (0, _element.createElement)("div", {
      className: "novablocks-map__map-container"
    }, (0, _element.createElement)("div", {
      className: "novablocks-mask"
    }, (0, _element.createElement)("div", {
      style: parallax.style
    }, (0, _element.createElement)(Map, otherProps)))));
  };
};

var _default = MapWrapper(Map);

exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/pin.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/pin.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "<svg width=\"62\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 62 75\">\n\t<defs>\n\t\t<path id=\"b\" d=\"M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z\"></path>\n\t\t<filter id=\"a\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n\t\t\t<feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"></feGaussianBlur>\n\t\t\t<feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill=\"none\" fillRule=\"evenodd\">\n\t\t<use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\" style=\"display:none\"></use>\n\t\t<use fill=\"%ACCENT_COLOR%\" xlink:href=\"#b\"></use>\n\t</g>\n</svg>";
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/placeholder.js":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/placeholder.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

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

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _keycodes = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MapPlaceholder = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MapPlaceholder, _Component);

  var _super = _createSuper(MapPlaceholder);

  function MapPlaceholder() {
    var _this;

    (0, _classCallCheck2.default)(this, MapPlaceholder);
    _this = _super.apply(this, arguments);
    _this.state = {
      apiKey: _this.props.apiKey
    };
    return _this;
  }

  (0, _createClass2.default)(MapPlaceholder, [{
    key: "handleKeyDown",
    value: function handleKeyDown(keyCode) {
      if (keyCode === _keycodes.ENTER) {
        this.props.saveApiKey(this.state.apiKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var apiKeyInstructions = this.props.apiKeyInstructions;
      var icon = (0, _element.createElement)("div", {
        className: "editor-block-icon block-editor-block-icon"
      }, icons.map);
      return (0, _element.createElement)(_components.Placeholder, {
        icon: icon,
        label: (0, _i18n.__)('Location Map of The World', '__plugin_txtd')
      }, apiKeyInstructions && (0, _element.createElement)("div", {
        className: "components-placeholder__instructions"
      }, apiKeyInstructions), (0, _element.createElement)(_components.TextControl, {
        className: "components-placeholder__input",
        placeholder: (0, _i18n.__)('Paste API key here', '__plugin_txtd'),
        value: this.state.apiKey,
        onChange: function onChange(apiKey) {
          _this2.setState({
            apiKey: apiKey
          });
        },
        onKeyDown: function onKeyDown(_ref) {
          var keyCode = _ref.keyCode;

          _this2.handleKeyDown(keyCode);
        }
      }), (0, _element.createElement)(_components.Button, {
        isLarge: true,
        disabled: !this.state.apiKey,
        type: "button",
        onClick: function onClick() {
          _this2.props.saveApiKey(_this2.state.apiKey);
        }
      }, (0, _i18n.__)('Save', '__plugin_txtd')));
    }
  }]);
  return MapPlaceholder;
}(_element.Component);

var _default = MapPlaceholder;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/styles/customized.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/styles/customized.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "saturation": -100
  }, {
    "lightness": 60
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "lightness": 90
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "saturation": -25
  }, {
    "lightness": 70
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "lightness": 30
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "%ACCENT_COLOR%"
  }, {
    "lightness": 60
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "saturation": -100
  }]
}];
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/styles/index.js":
/*!************************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/styles/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _customized = _interopRequireDefault(__webpack_require__(/*! ./customized */ "./packages/block-library/build/blocks/google-map/styles/customized.js"));

var styles = [{
  slug: 'customized',
  label: 'Customized',
  styles: _customized.default
}, {
  slug: 'original',
  label: 'Original',
  styles: []
}];
var _default = styles;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/google-map/utils.js":
/*!*****************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/utils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkersCenter = exports.getCenterFromMarkers = exports.getMapAccentColor = exports.getMapStyles = exports.compileStyles = exports.addVisibilityToStyles = void 0;

var _defaultMapCenter = _interopRequireDefault(__webpack_require__(/*! ./default-map-center */ "./packages/block-library/build/blocks/google-map/default-map-center.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles */ "./packages/block-library/build/blocks/google-map/styles/index.js"));

var addVisibilityToStyles = function addVisibilityToStyles(styles, showLabels, showIcons) {
  if (!showLabels) {
    styles.unshift({
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    });
  }

  if (!showIcons) {
    styles.unshift({
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    });
  }

  return styles;
};

exports.addVisibilityToStyles = addVisibilityToStyles;

var compileStyles = function compileStyles(styleData) {
  var accentColor = getMapAccentColor.call(this);
  var styleDataString = JSON.stringify(styleData).replace(/%ACCENT_COLOR%/g, accentColor);
  return JSON.parse(styleDataString);
};

exports.compileStyles = compileStyles;

var getMapStyles = function getMapStyles() {
  var attributes = this.props.attributes;
  var styleData = attributes.styleData,
      styleSlug = attributes.styleSlug;
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;

  var selectedStyles = _styles.default.find(function (style) {
    return style.slug === styleSlug;
  });

  var styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  var mapStyles = shouldHaveCustomStyles && styleDataBySlug || styleData;
  return compileStyles.call(this, mapStyles);
};

exports.getMapStyles = getMapStyles;

var getMapAccentColor = function getMapAccentColor() {
  var _this$props, _this$props$settings, _this$props$settings$;

  return (this === null || this === void 0 ? void 0 : (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$settings = _this$props.settings) === null || _this$props$settings === void 0 ? void 0 : (_this$props$settings$ = _this$props$settings.map) === null || _this$props$settings$ === void 0 ? void 0 : _this$props$settings$.accentColor) || '#222222';
};

exports.getMapAccentColor = getMapAccentColor;

var getCenterFromMarkers = function getCenterFromMarkers(markers) {
  if (typeof google === "undefined" || typeof google.maps === "undefined") {
    return _defaultMapCenter.default;
  }

  var bounds = new google.maps.LatLngBounds(); // when there is only one marker bounds aren't accurate at great zoom levels

  if (markers.length === 1) {
    var center = JSON.parse(markers[0]);
    return new google.maps.LatLng(center.geometry.location);
  }

  markers.forEach(function (markerString) {
    var marker = JSON.parse(markerString);

    if (!marker.geometry) {
      return;
    }

    if (marker.geometry.viewport) {
      bounds.union(marker.geometry.viewport);
    } else {
      bounds.extend(marker.geometry.location);
    }
  });
  return bounds.getCenter();
};

exports.getCenterFromMarkers = getCenterFromMarkers;

var getMarkersCenter = function getMarkersCenter() {
  return getCenterFromMarkers(this.props.attributes.markers);
};

exports.getMarkersCenter = getMarkersCenter;


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

/***/ "@wordpress/api":
/*!**************************************!*\
  !*** external {"this":["wp","api"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["api"]; }());

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

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map