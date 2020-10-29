this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["components"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/components/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

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
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/attributes.json":
/*!***************************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/attributes.json ***!
  \***************************************************************************/
/*! exports provided: images, stylePreset, sizeContrast, positionShift, elementsDistance, placementVariation, imageRotation, imageResizing, containerHeight, objectPosition, defaultsGenerated, blobMixingStyle, blobPreset, blobComplexity, blobSmoothness, blobMaskPreset, blobMaskComplexity, blobMaskSmoothness, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"images\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"object\"}},\"stylePreset\":{\"type\":\"string\",\"default\":\"the-cloud-atlas\"},\"sizeContrast\":{\"type\":\"number\",\"default\":0},\"positionShift\":{\"type\":\"number\",\"default\":0},\"elementsDistance\":{\"type\":\"number\",\"default\":20},\"placementVariation\":{\"type\":\"number\",\"default\":25},\"imageRotation\":{\"type\":\"number\",\"default\":0},\"imageResizing\":{\"type\":\"string\",\"default\":\"cropped\"},\"containerHeight\":{\"type\":\"number\",\"default\":50},\"objectPosition\":{\"type\":\"number\",\"default\":50},\"defaultsGenerated\":{\"type\":\"boolean\",\"default\":false},\"blobMixingStyle\":{\"type\":\"string\",\"default\":\"none\"},\"blobPreset\":{\"type\":\"number\",\"default\":16},\"blobComplexity\":{\"type\":\"number\",\"default\":0},\"blobSmoothness\":{\"type\":\"number\",\"default\":33},\"blobMaskPreset\":{\"type\":\"number\",\"default\":16},\"blobMaskComplexity\":{\"type\":\"number\",\"default\":0},\"blobMaskSmoothness\":{\"type\":\"number\",\"default\":33}}");

/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/block-controls.js":
/*!*****************************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/block-controls.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





var ALLOWED_MEDIA_TYPES = ['image', 'video'];

var AdvancedGalleryChangeMediaToolbar = function AdvancedGalleryChangeMediaToolbar(props) {
  var onSelectImages = props.onSelectImages,
      attributes = props.attributes;
  var gallery = attributes === null || attributes === void 0 ? void 0 : attributes.images;
  var galleryValue = gallery.map(function (image) {
    return image.id;
  });

  if (!gallery || !gallery.length) {
    return false;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
    allowedTypes: ALLOWED_MEDIA_TYPES,
    multiple: true,
    value: galleryValue,
    onSelect: onSelectImages,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "components-icon-button components-toolbar__control",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Change Media', '__plugin_txtd'),
        icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__["swap"],
        onClick: open
      });
    }
  }));
};

var AdvancedGalleryBlockControls = function AdvancedGalleryBlockControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AdvancedGalleryChangeMediaToolbar, props));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedGalleryBlockControls);


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/grid-item.js":
/*!************************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/grid-item.js ***!
  \************************************************************************/
/*! exports provided: GridItemCollection, GridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemCollection", function() { return GridItemCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return GridItem; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var ITEM_SIZE = 20;
var GridItemCollection = /*#__PURE__*/function () {
  function GridItemCollection(images, attributes) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GridItemCollection);

    var placementVariation = attributes.placementVariation / 25 - 1;
    this.gridItems = images.map(function (image, index) {
      var groupStart = Math.floor(index / 4) * 4;
      var groupEnd = Math.min(groupStart + 4, images.length);
      var isGroupOfThree = groupEnd - groupStart === 3;
      return new GridItem(image, index, attributes, isGroupOfThree);
    });
    this.removeExtra();

    if (placementVariation === 1 || placementVariation === 2) {
      this.flipX();
    }

    if (placementVariation === 2 || placementVariation === 3) {
      this.flipY();
    }
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GridItemCollection, [{
    key: "removeExtra",
    value: function removeExtra() {
      var extraLeft = this.getExtraLeft();
      var extraTop = this.getExtraTop();
      var extraBetween = this.getExtraBetween();
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        var groupIndex = Math.floor(index / 4);
        gridItem.x = gridItem.x - extraLeft;
        gridItem.y = gridItem.y - extraTop - groupIndex * extraBetween;
        return gridItem;
      });
    }
  }, {
    key: "flipX",
    value: function flipX() {
      var maxX = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.x + gridItem.width;
      })));
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        gridItem.x = maxX - gridItem.x - gridItem.width + 1;
        return gridItem;
      });
    }
  }, {
    key: "flipY",
    value: function flipY() {
      var maxY = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.y + gridItem.height;
      })));
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        gridItem.y = maxY - gridItem.y - gridItem.height + 1;
        return gridItem;
      });
    }
  }, {
    key: "getExtraLeft",
    value: function getExtraLeft() {
      return Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.x;
      }))) - 1;
    }
  }, {
    key: "getExtraTop",
    value: function getExtraTop() {
      return Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.gridItems.map(function (gridItem) {
        return gridItem.y;
      }))) - 1;
    }
  }, {
    key: "getExtraBetween",
    value: function getExtraBetween() {
      var firstGroup = this.gridItems.slice(0, 4);
      var maxBottom = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(firstGroup.map(function (gridItem) {
        return gridItem.y + gridItem.height;
      })));
      return ITEM_SIZE * 2 - maxBottom + 1;
    }
  }]);

  return GridItemCollection;
}();
var GridItem = /*#__PURE__*/function () {
  function GridItem(image, index, attributes, isGroupOfThree) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GridItem);

    this.sizeContrast = attributes.sizeContrast / 20;
    this.positionShift = attributes.positionShift / 5;
    this.objectPosition = attributes.objectPosition;
    this.imageResizing = attributes.imageResizing;
    this.imageRotation = attributes.imageRotation;
    this.image = image;
    this.index = index;
    this.idx = this.getIndex(index);
    this.col = this.idx % 2;
    this.row = Math.floor(index / 2);

    if (!!isGroupOfThree) {
      if (index === 0) {
        this.positionShift = Math.min(this.positionShift, 10);
      }

      if (index === 2) {
        this.positionShift = Math.max(this.positionShift, 10);
      }
    }

    var _this$getOffsets = this.getOffsets(),
        offsetX = _this$getOffsets.offsetX,
        offsetY = _this$getOffsets.offsetY;

    var size = ITEM_SIZE - this.sizeContrast * (index % 4);
    this.x = ITEM_SIZE * this.col + 1 + offsetX;
    this.y = ITEM_SIZE * this.row + 1 + offsetY;
    this.width = size;
    this.height = size;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GridItem, [{
    key: "getOffsets",
    value: function getOffsets() {
      var row = this.row,
          col = this.col,
          index = this.index,
          sizeContrast = this.sizeContrast,
          positionShift = this.positionShift; // offset for positioning

      var offsetX = (1 - col % 2) * (index % 4) * sizeContrast;
      var offsetY = (1 - row % 2) * (index % 4) * sizeContrast; // offset from offset
      // move 1st to right

      offsetX += (1 - col % 2) * (1 - row % 2) * positionShift; // move 3rd to left

      offsetX -= col % 2 * (row % 2) * positionShift; // move 2nd down

      offsetY -= (1 - col % 2) * (row % 2) * positionShift; // move 4th up

      offsetY += col % 2 * (1 - row % 2) * positionShift;
      return {
        offsetX: offsetX,
        offsetY: offsetY
      };
    } // reoder to display items clockwise

  }, {
    key: "getIndex",
    value: function getIndex(index) {
      if (index % 4 === 3) return index - 1;
      if (index % 4 === 2) return index + 1;
      return index;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var index = this.index,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          imageRotation = this.imageRotation;
      var rotation = "rotate(".concat((index % 2 - 0.5) * imageRotation / 10, "deg)");
      return {
        gridColumnStart: x + '',
        gridColumnEnd: "span ".concat(width),
        gridRowStart: y + '',
        gridRowEnd: "span ".concat(height),
        transform: rotation
      };
    }
  }, {
    key: "getImageStyle",
    value: function getImageStyle() {
      var row = this.row,
          col = this.col,
          objectPosition = this.objectPosition,
          imageResizing = this.imageResizing;
      var positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
      var positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;
      return {
        objectFit: imageResizing === 'cropped' ? 'cover' : 'scale-down',
        objectPosition: "".concat(positionX, "% ").concat(positionY, "%")
      };
    }
  }]);

  return GridItem;
}();


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/index.js":
/*!********************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./packages/components/build-module/advanced-gallery/preview.js");
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder */ "./packages/components/build-module/advanced-gallery/placeholder.js");
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-controls */ "./packages/components/build-module/advanced-gallery/inspector-controls.js");
/* harmony import */ var _block_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-controls */ "./packages/components/build-module/advanced-gallery/block-controls.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./packages/components/build-module/advanced-gallery/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/components/build-module/advanced-gallery/attributes.json", 1);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./packages/components/build-module/advanced-gallery/util.js");
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid-item */ "./packages/components/build-module/advanced-gallery/grid-item.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_8__);











var AdvancedGallery = function AdvancedGallery(props) {
  var setAttributes = props.setAttributes;

  var onSelectImages = function onSelectImages(images) {
    Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_8__["normalizeImages"])(images).then(function (newImages) {
      setAttributes({
        images: newImages
      });
    });
  };

  var newProps = Object.assign({}, props, {
    onSelectImages: onSelectImages
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_placeholder__WEBPACK_IMPORTED_MODULE_2__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_preview__WEBPACK_IMPORTED_MODULE_1__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector_controls__WEBPACK_IMPORTED_MODULE_3__["default"], newProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_controls__WEBPACK_IMPORTED_MODULE_4__["default"], newProps));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  Component: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_8__["withSettings"])(AdvancedGallery),
  GridItem: _grid_item__WEBPACK_IMPORTED_MODULE_7__["GridItem"],
  GridItemCollection: _grid_item__WEBPACK_IMPORTED_MODULE_7__["GridItemCollection"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__,
  utils: _util__WEBPACK_IMPORTED_MODULE_6__
});


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/inspector-controls.js":
/*!*********************************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/inspector-controls.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./packages/components/build-module/advanced-gallery/util.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var blobMixingStylesOptions = [{
  label: 'None',
  value: 'none'
}, {
  label: 'Media Shape',
  value: 'shape-mask'
}, {
  label: 'Mixing #1',
  value: 'mixing-1'
}, {
  label: 'Mixing #2',
  value: 'mixing-2'
}, {
  label: 'Mixing #3',
  value: 'mixing-3'
}];

var AdvancedGalleryInspectorControls = function AdvancedGalleryInspectorControls(props) {
  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      sizeContrast = _props$attributes.sizeContrast,
      positionShift = _props$attributes.positionShift,
      elementsDistance = _props$attributes.elementsDistance,
      placementVariation = _props$attributes.placementVariation,
      imageResizing = _props$attributes.imageResizing,
      objectPosition = _props$attributes.objectPosition,
      containerHeight = _props$attributes.containerHeight,
      imageRotation = _props$attributes.imageRotation,
      blobMixingStyle = _props$attributes.blobMixingStyle,
      _props$settings = props.settings,
      advancedGalleryPresetOptions = _props$settings.advancedGalleryPresetOptions,
      blobPresetOptions = _props$settings.blobPresetOptions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Media Composition'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Modules')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('General')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["Notice"], {
    key: 'advanced-gallery-quick-start',
    id: 'novablocks-advanced-gallery-quick-start',
    content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, "Quick start:"), " Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details"),
    dismissLabel: '✔ Ok, I got it!'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["PresetControl"], {
    key: 'advanced-gallery-style-preset',
    options: advancedGalleryPresetOptions,
    randomize: _util__WEBPACK_IMPORTED_MODULE_5__["getRandomAttributes"]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Customize')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-crop-style',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Images Crop Style', '__plugin_txtd'),
    value: imageResizing === 'cropped' ? 2 : 1,
    onChange: function onChange(cropStyle) {
      setAttributes({
        imageResizing: cropStyle === 2 ? 'cropped' : 'original'
      });
    },
    min: 1,
    max: 2,
    step: 1
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-size-contrast',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Size Contrast', '__plugin_txtd'),
    value: sizeContrast,
    onChange: function onChange(sizeContrast) {
      return setAttributes({
        sizeContrast: sizeContrast
      });
    },
    min: 0,
    max: 100,
    step: 20
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-position-shift',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Position Shift', '__plugin_txtd'),
    value: positionShift,
    onChange: function onChange(positionShift) {
      return setAttributes({
        positionShift: positionShift
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-elements-distance',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Elements Distance', '__plugin_txtd'),
    value: elementsDistance,
    onChange: function onChange(elementsDistance) {
      return setAttributes({
        elementsDistance: elementsDistance
      });
    },
    min: 0,
    max: 100,
    step: 20
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-placement-variation',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Placement Variation', '__plugin_txtd'),
    value: placementVariation,
    onChange: function onChange(placementVariation) {
      return setAttributes({
        placementVariation: placementVariation
      });
    },
    min: 25,
    max: 100,
    step: 25
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-image-rotation',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Rotation', '__plugin_txtd'),
    value: imageRotation,
    onChange: function onChange(imageRotation) {
      return setAttributes({
        imageRotation: imageRotation
      });
    },
    min: 0,
    max: 100,
    step: 10
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Display')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-image-container-height',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Container Height', '__plugin_txtd'),
    value: containerHeight,
    onChange: function onChange(containerHeight) {
      return setAttributes({
        containerHeight: containerHeight
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RadioControl"], {
    key: 'advanced-gallery-image-resizing',
    label: 'Image Resizing',
    selected: imageResizing,
    onChange: function onChange(imageResizing) {
      return setAttributes({
        imageResizing: imageResizing
      });
    },
    options: [{
      label: 'Stretch to fill the container',
      value: 'cropped'
    }, {
      label: 'Shrink to fit (no crop)',
      value: 'original'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    key: 'advanced-gallery-image-position',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Position', '__plugin_txtd'),
    value: objectPosition,
    onChange: function onChange(objectPosition) {
      return setAttributes({
        objectPosition: objectPosition
      });
    },
    min: 0,
    max: 100,
    step: 10
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Shape Modeling'),
    group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Modules')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('General')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "Use this tool to generate shapes and combine them with your images to create designs that are a unique and memorable part of your brand identity."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["PresetControl"], {
    key: 'blob-style-preset',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Choose a shape preset:', '__plugin_txtd'),
    options: blobPresetOptions,
    randomize: function randomize() {
      var stylesValues = blobMixingStylesOptions.map(function (opt) {
        return opt.value;
      }).filter(function (value) {
        return value !== 'none';
      });
      return _objectSpread(_objectSpread({
        blobMixingStyle: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomFromArray"])(stylesValues)
      }, _index__WEBPACK_IMPORTED_MODULE_3__["Blob"].Utils.getRandomBlobAttributes('blob')), _index__WEBPACK_IMPORTED_MODULE_3__["Blob"].Utils.getRandomBlobAttributes('blobMask'));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RadioControl"], {
    key: 'blobs-mixing-style',
    label: 'Shape Mixing Style',
    selected: blobMixingStyle,
    onChange: function onChange(blobMixingStyle) {
      return setAttributes({
        blobMixingStyle: blobMixingStyle
      });
    },
    options: blobMixingStylesOptions
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Media Shape')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["Blob"].Controls, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefix: 'blobMask'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Decorative Shape')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["Blob"].Controls, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefix: 'blob'
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedGalleryInspectorControls);


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/placeholder.js":
/*!**************************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/placeholder.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var AdvancedGalleryPlaceholder = function AdvancedGalleryPlaceholder(props) {
  var attributes = props.attributes,
      onSelectImages = props.onSelectImages;
  var gallery = attributes === null || attributes === void 0 ? void 0 : attributes.images;

  if (!!gallery && !!gallery.length) {
    return false;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["BlockIcon"], {
      icon: "format-gallery"
    }),
    allowedTypes: ['image', 'video'],
    multiple: true,
    onSelect: onSelectImages
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedGalleryPlaceholder);


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/preview.js":
/*!**********************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/preview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring/renderprops */ "./packages/components/node_modules/react-spring/renderprops.js");
/* harmony import */ var react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-item */ "./packages/components/build-module/advanced-gallery/grid-item.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./packages/components/build-module/advanced-gallery/util.js");










var AdvancedGalleryPreview = function AdvancedGalleryPreview(props) {
  var attributes = props.attributes;
  var gallery = attributes === null || attributes === void 0 ? void 0 : attributes.images;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setHeight(!!ref.current ? ref.current.clientHeight : 0);
  });

  if (!gallery || !gallery.length) {
    return null;
  }

  var gridItemsCollection = new _grid_item__WEBPACK_IMPORTED_MODULE_6__["GridItemCollection"](gallery, attributes);
  var gridStyle = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getGridStyle"])(attributes);

  if (!!_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["isSafari"]) {
    Object.assign(gridStyle, {
      height: height
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery",
    style: Object(_util__WEBPACK_IMPORTED_MODULE_7__["getGalleryStyle"])(attributes),
    ref: ref
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery__grid",
    style: gridStyle
  }, gridItemsCollection.gridItems.map(function (item, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(AdvancedGalleryItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      gridItem: item,
      key: index,
      index: index
    }, props));
  })));
};

var AdvancedGalleryItem = function AdvancedGalleryItem(props) {
  var _image$sizes, _image$sizes$novabloc;

  var attributes = props.attributes,
      gridItem = props.gridItem,
      index = props.index;
  var image = gridItem === null || gridItem === void 0 ? void 0 : gridItem.image;
  var imageURL = (image === null || image === void 0 ? void 0 : (_image$sizes = image.sizes) === null || _image$sizes === void 0 ? void 0 : (_image$sizes$novabloc = _image$sizes.novablocks_medium) === null || _image$sizes$novabloc === void 0 ? void 0 : _image$sizes$novabloc.url) || (image === null || image === void 0 ? void 0 : image.url);
  var imageCaption = image === null || image === void 0 ? void 0 : image.caption;
  var imageDescription = image === null || image === void 0 ? void 0 : image.description;
  var styles = gridItem.getImageStyle();
  var generatePath = _index__WEBPACK_IMPORTED_MODULE_4__["Blob"].Utils.generatePath;
  var blobMixingStyle = attributes.blobMixingStyle,
      blobMaskPreset = attributes.blobMaskPreset,
      blobMaskComplexity = attributes.blobMaskComplexity,
      blobMaskSmoothness = attributes.blobMaskSmoothness,
      blobPreset = attributes.blobPreset,
      blobComplexity = attributes.blobComplexity,
      blobSmoothness = attributes.blobSmoothness;
  var svgMaskPath = generatePath(blobMaskPreset + index, blobMaskComplexity, blobMaskSmoothness);
  var svgPath = generatePath(blobPreset + index, blobComplexity, blobSmoothness);

  if (!image) {
    return;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery__grid-item",
    style: gridItem.getStyle()
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery__grid-item-media  blob-mix  blob-mix--style-".concat(blobMixingStyle)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__["Spring"], {
    to: {
      path: svgMaskPath
    }
  }, function (props) {
    var svgString = "<svg viewBox='0 0 20 20' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path d='".concat(props.path, "'></path></svg>");
    var svgDataURI = "url(\"data:image/svg+xml;utf8,".concat(svgString, "\")");
    var gridItemStyle = {
      maskImage: svgDataURI,
      maskSize: '100% 100%',
      WebkitMaskImage: svgDataURI,
      WebkitMaskSize: '100% 100%'
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      className: "novablocks-advanced-gallery__grid-item-mask  blob-mix__media",
      style: gridItemStyle
    }, image.type !== 'video' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      className: "novablocks-advanced-gallery__image",
      src: imageURL,
      alt: image === null || image === void 0 ? void 0 : image.alt,
      style: styles
    }), image.type === 'video' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("video", {
      muted: true,
      autoPlay: true,
      loop: true,
      playsInline: true,
      className: "novablocks-advanced-gallery__image",
      style: styles,
      src: image.url
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__["Spring"], {
    to: {
      path: svgPath
    }
  }, function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
      className: "novablocks-advanced-gallery__grid-item-shape  blob-mix__decoration",
      viewBox: "0 0 20 20",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__["animated"].path, {
      d: props.path
    }));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery__grid-item-info"
  }, typeof imageCaption === 'string' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery__grid-item-caption",
    dangerouslySetInnerHTML: {
      __html: imageCaption
    }
  }), typeof imageDescription === 'string' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-advanced-gallery__grid-item-description",
    dangerouslySetInnerHTML: {
      __html: imageDescription
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedGalleryPreview);


/***/ }),

/***/ "./packages/components/build-module/advanced-gallery/util.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/advanced-gallery/util.js ***!
  \*******************************************************************/
/*! exports provided: getRandomAttributes, getGalleryStyle, getGridStyle, safariHeightFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomAttributes", function() { return getRandomAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGalleryStyle", function() { return getGalleryStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridStyle", function() { return getGridStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safariHeightFix", function() { return safariHeightFix; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);


var getRandomAttributes = function getRandomAttributes() {
  return {
    sizeContrast: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 5) * 20,
    positionShift: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 20) * 5,
    elementsDistance: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 5) * 20,
    placementVariation: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(1, 4) * 25,
    stylePreset: 'just-my-style'
  };
};
var getGalleryStyle = function getGalleryStyle(attributes) {
  var containerHeight = attributes.containerHeight / 50 - 1;
  var numerator = 1;
  var denominator = 1;
  containerHeight = Math.min(Math.max(-1, containerHeight), 1);

  if (containerHeight > 0) {
    numerator = 1 + containerHeight;
  }

  if (containerHeight < 0) {
    denominator = 1 + Math.abs(containerHeight);
  }

  return {
    paddingTop: "".concat(numerator * 100 / denominator, "%")
  };
};
var getGridStyle = function getGridStyle(attributes) {
  var elementsDistance = attributes.elementsDistance;
  return {
    '--novablocks-advanced-gallery-grid-gap': "".concat(elementsDistance, "px")
  };
};
var safariHeightFix = function safariHeightFix(grid) {
  if (!_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["isSafari"]) {
    return;
  }

  var parent = grid.parentNode;
  var $grid = jquery__WEBPACK_IMPORTED_MODULE_0___default()(grid);
  var $parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent);

  var resetHeight = function resetHeight() {
    var newHeight = $parent.outerHeight();
    $grid.css('height', newHeight);
  };

  var debouncedResetHeight = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["debounce"])(resetHeight, 30);
  resetHeight();

  if (typeof window.ResizeObserver !== "undefined") {
    var observer = new window.ResizeObserver(function (entries) {
      debouncedResetHeight();
    });
    observer.observe(parent);
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      debouncedResetHeight();
    });
  }
};


/***/ }),

/***/ "./packages/components/build-module/alignment-controls/attributes.json":
/*!*****************************************************************************!*\
  !*** ./packages/components/build-module/alignment-controls/attributes.json ***!
  \*****************************************************************************/
/*! exports provided: horizontalAlignment, verticalAlignment, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"horizontalAlignment\":{\"type\":\"string\",\"default\":\"center\"},\"verticalAlignment\":{\"type\":\"string\",\"default\":\"center\"}}");

/***/ }),

/***/ "./packages/components/build-module/alignment-controls/index.js":
/*!**********************************************************************!*\
  !*** ./packages/components/build-module/alignment-controls/index.js ***!
  \**********************************************************************/
/*! exports provided: alignmentAttributes, AlignmentControls, AlignmentToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentControls", function() { return AlignmentControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return AlignmentToolbar; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./packages/components/build-module/alignment-controls/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/components/build-module/alignment-controls/attributes.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "alignmentAttributes", function() { return _attributes__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _block_horizontal_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-horizontal-alignment-toolbar */ "./packages/components/build-module/block-horizontal-alignment-toolbar/index.js");
/* harmony import */ var _block_vertical_alignment_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-vertical-alignment-toolbar */ "./packages/components/build-module/block-vertical-alignment-toolbar/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);


/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */





var AlignmentToolbar = function AlignmentToolbar(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    className: "pixelgrade-hero-block-toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    position: "bottom",
    className: "pixelgrade-hero-block-toolbar-dropdown",
    contentClassName: "components-nova--popover",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: onToggle,
        icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__["alignment"],
        "aria-expanded": isOpen,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Position', '__plugin_txtd')
      });
    },
    focusOnMount: false,
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentControls, props);
    }
  }));
};

var AlignmentControls = function AlignmentControls(props) {
  var _props$attributes = props.attributes,
      horizontalAlignment = _props$attributes.horizontalAlignment,
      verticalAlignment = _props$attributes.verticalAlignment,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Horizontal', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_horizontal_alignment_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: horizontalAlignment,
    onChange: function onChange(nextHorizontalAlignment) {
      wp.data.select('core/block-editor').getSelectedBlock().innerBlocks.map(function (block) {
        wp.data.dispatch('core/block-editor').updateBlockAttributes(block.clientId, {
          align: nextHorizontalAlignment
        });
        return true;
      });
      setAttributes({
        horizontalAlignment: nextHorizontalAlignment
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_block_vertical_alignment_toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: verticalAlignment,
    onChange: function onChange(nextVerticalAlignment) {
      return setAttributes({
        verticalAlignment: nextVerticalAlignment
      });
    }
  })));
};




/***/ }),

/***/ "./packages/components/build-module/autocomplete-tokenfield/index.js":
/*!***************************************************************************!*\
  !*** ./packages/components/build-module/autocomplete-tokenfield/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * An multi-selecting, api-driven autocomplete input suitable for use in block attributes.
 */

var AutocompleteTokenField = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AutocompleteTokenField, _Component);

  var _super = _createSuper(AutocompleteTokenField);

  function AutocompleteTokenField(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutocompleteTokenField);

    _this = _super.call(this, props);
    _this.state = {
      suggestions: [],
      validValues: {},
      loading: _this.isFetchingInfoOnLoad()
    };
    _this.debouncedUpdateSuggestions = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(_this.updateSuggestions, 500);
    return _this;
  }
  /**
   * If the component has tokens passed in props, it should fetch info after it mounts.
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AutocompleteTokenField, [{
    key: "isFetchingInfoOnLoad",
    value: function isFetchingInfoOnLoad() {
      var _this$props = this.props,
          tokens = _this$props.tokens,
          fetchSavedInfo = _this$props.fetchSavedInfo;
      return Boolean(tokens.length && fetchSavedInfo);
    }
  }, {
    key: "componentDidMount",

    /**
     * When the component loads, fetch information about the tokens so we can populate
     * the tokens with the correct labels.
     */
    value: function componentDidMount() {
      var _this2 = this;

      if (this.isFetchingInfoOnLoad()) {
        var _this$props2 = this.props,
            tokens = _this$props2.tokens,
            fetchSavedInfo = _this$props2.fetchSavedInfo;
        fetchSavedInfo(tokens).then(function (results) {
          var validValues = _this2.state.validValues;
          results.forEach(function (suggestion) {
            validValues[suggestion.value] = suggestion.label;
          });

          _this2.setState({
            validValues: validValues,
            loading: false
          });
        });
      }
    }
    /**
     * Clean up any unfinished autocomplete api call requests.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.suggestionsRequest;
      this.debouncedUpdateSuggestions.cancel();
    }
    /**
     * Get a list of labels for input values.
     *
     * @param {Array} values Array of values (ids, etc.).
     * @return {Array} array of valid labels corresponding to the values.
     */

  }, {
    key: "getLabelsForValues",
    value: function getLabelsForValues(values) {
      var validValues = this.state.validValues;
      return values.reduce(function (accumulator, value) {
        return validValues[value] ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(accumulator), [validValues[value]]) : accumulator;
      }, []);
    }
    /**
     * Get a list of values for input labels.
     *
     * @param {Array} labels Array of labels from the tokens.
     * @return {Array} Array of valid values corresponding to the labels.
     */

  }, {
    key: "getValuesForLabels",
    value: function getValuesForLabels(labels) {
      var validValues = this.state.validValues;
      return labels.map(function (label) {
        return Object.keys(validValues).find(function (key) {
          return validValues[key] === label;
        });
      });
    }
    /**
     * Refresh the autocomplete dropdown.
     *
     * @param {string} input Input to fetch suggestions for
     */

  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(input) {
      var _this3 = this;

      var fetchSuggestions = this.props.fetchSuggestions;

      if (!fetchSuggestions) {
        return;
      }

      this.setState({
        loading: true
      }, function () {
        var request = fetchSuggestions(input);
        request.then(function (suggestions) {
          // A fetch Promise doesn't have an abort option. It's mimicked by
          // comparing the request reference in on the instance, which is
          // reset or deleted on subsequent requests or unmounting.
          if (_this3.suggestionsRequest !== request) {
            return;
          }

          var validValues = _this3.state.validValues;
          var currentSuggestions = [];
          suggestions.forEach(function (suggestion) {
            currentSuggestions.push(suggestion.label);
            validValues[suggestion.value] = suggestion.label;
          });

          _this3.setState({
            suggestions: currentSuggestions,
            validValues: validValues,
            loading: false
          });
        }).catch(function () {
          if (_this3.suggestionsRequest === request) {
            _this3.setState({
              loading: false
            });
          }
        });
        _this3.suggestionsRequest = request;
      });
    }
    /**
     * When a token is selected, we need to convert the string label into a recognized value suitable for saving as an attribute.
     *
     * @param {Array} tokenStrings An array of token label strings.
     */

  }, {
    key: "handleOnChange",
    value: function handleOnChange(tokenStrings) {
      var onChange = this.props.onChange;
      onChange(this.getValuesForLabels(tokenStrings));
    }
    /**
     * To populate the tokens, we need to convert the values into a human-readable label.
     *
     * @return {Array} An array of token label strings.
     */

  }, {
    key: "getTokens",
    value: function getTokens() {
      var tokens = this.props.tokens;
      return this.getLabelsForValues(tokens);
    }
    /**
     * Render.
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          help = _this$props3.help,
          _this$props3$label = _this$props3.label,
          label = _this$props3$label === void 0 ? '' : _this$props3$label;
      var _this$state = this.state,
          suggestions = _this$state.suggestions,
          loading = _this$state.loading;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "autocomplete-tokenfield"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.getTokens(),
        suggestions: suggestions,
        onChange: function onChange(tokens) {
          return _this4.handleOnChange(tokens);
        },
        onInputChange: function onInputChange(input) {
          return _this4.debouncedUpdateSuggestions(input);
        },
        label: label
      }), loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Spinner"], null), help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        className: "autocomplete-tokenfield__help"
      }, help));
    }
  }]);

  return AutocompleteTokenField;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AutocompleteTokenField);


/***/ }),

/***/ "./packages/components/build-module/blob/blob-controls.js":
/*!****************************************************************!*\
  !*** ./packages/components/build-module/blob/blob-controls.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





var BlobControls = function BlobControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var prefix = props.prefix || 'blob';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: attributes["".concat(prefix, "Preset")],
    onChange: function onChange(preset) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Preset")] = preset;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outline'),
    min: 1,
    max: 100,
    step: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: attributes["".concat(prefix, "Complexity")],
    onChange: function onChange(complexity) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Complexity")] = complexity;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Variation'),
    min: 0,
    max: 100,
    step: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: attributes["".concat(prefix, "Smoothness")],
    onChange: function onChange(smoothness) {
      var newAttributes = {};
      newAttributes["".concat(prefix, "Smoothness")] = smoothness;
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Smoothness'),
    min: 0,
    max: 100,
    step: 1
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlobControls);


/***/ }),

/***/ "./packages/components/build-module/blob/index.js":
/*!********************************************************!*\
  !*** ./packages/components/build-module/blob/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blob_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blob-controls */ "./packages/components/build-module/blob/blob-controls.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./packages/components/build-module/blob/util.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Controls: _blob_controls__WEBPACK_IMPORTED_MODULE_0__["default"],
  Utils: _util__WEBPACK_IMPORTED_MODULE_1__
});


/***/ }),

/***/ "./packages/components/build-module/blob/util.js":
/*!*******************************************************!*\
  !*** ./packages/components/build-module/blob/util.js ***!
  \*******************************************************/
/*! exports provided: getRatio, getMagicDigit, getSidesFromPreset, generatePath, getRandomBlobAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRatio", function() { return getRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMagicDigit", function() { return getMagicDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidesFromPreset", function() { return getSidesFromPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBlobAttributes", function() { return getRandomBlobAttributes; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);


var BLOB_MAX_SIDES = 20;
var BLOB_RADIUS = 10;
var getRatio = function getRatio(preset, i) {
  var pow = Math.pow(preset, i);
  return (1 + getMagicDigit(pow)) / 10;
};
var getMagicDigit = function getMagicDigit(n) {
  var sum = 0;

  while (n > 0 || sum > 9) {
    if (n === 0) {
      n = sum;
      sum = 0;
    }

    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
};
var getSidesFromPreset = function getSidesFromPreset(preset) {
  return Math.min(Math.max(3, Math.floor(Math.sqrt(preset))), BLOB_MAX_SIDES);
};
var generatePath = function generatePath(preset, complexity, smoothness) {
  var presetOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var points = [];
  var firstPoint = '';
  var curves = '';
  var path;
  var sides = getSidesFromPreset(preset); // generate the points that will define the shape

  for (var i = 1; i <= sides; i++) {
    // generate a regular polygon
    // we add pi/2 to the angle to have the tip of polygons with odd number of edges pointing upwards
    var angle = 2 * Math.PI * i / sides + Math.PI / 2;
    var minimumRatio = 0.1;
    var initialRatio = getRatio(preset + presetOffset, i);
    var ratio = minimumRatio + (initialRatio - minimumRatio) * complexity / 100;
    points.push({
      x: BLOB_RADIUS * (Math.cos(angle) * ratio + 1),
      y: BLOB_RADIUS * (Math.sin(angle) * ratio + 1)
    });
  }

  var missingPoints = BLOB_MAX_SIDES - sides;
  var curvePoints = getCurvePointsFromPoints(points, smoothness);
  scaleCurvePoints(curvePoints);

  for (var _i = 0; _i < curvePoints.length; _i++) {
    var c = curvePoints[_i];
    curves += ' C ' + c.x1 + ' ' + c.y1 + ' ' + c.x2 + ' ' + c.y2 + ' ' + c.m2x + ' ' + c.m2y;
    var dummyPointsCount = Math.round(missingPoints / (points.length - _i));

    for (var j = 0; j < dummyPointsCount; j++) {
      curves += ' C ' + c.m2x + ' ' + c.m2y + ' ' + c.m2x + ' ' + c.m2y + ' ' + c.m2x + ' ' + c.m2y;
    }

    if (_i === 0) {
      firstPoint = c.m1x + ' ' + c.m1y;
    }

    missingPoints -= dummyPointsCount;
  } // move to first point


  path = 'M ' + firstPoint; // add the curves to draw the actual path

  path += curves; // close the path

  path += ' Z';
  return path;
};

function getCurvePointsFromPoints(points, smoothness) {
  var curvePoints = [];

  for (var i = 0; i < points.length; i++) {
    var nextIdx = (i + 1) % points.length;
    var prevIdx = (i + points.length - 1) % points.length;
    var nextPt = points[nextIdx];
    var thisPt = points[i];
    var prevPt = points[prevIdx];
    var sqrt = Math.sqrt(smoothness / 100);
    var M1 = {
      x: (prevPt.x + thisPt.x) / 2,
      y: (prevPt.y + thisPt.y) / 2
    };
    var M2 = {
      x: (thisPt.x + nextPt.x) / 2,
      y: (thisPt.y + nextPt.y) / 2
    };
    var x1 = M1.x * (1 - sqrt) + thisPt.x * sqrt;
    var y1 = M1.y * (1 - sqrt) + thisPt.y * sqrt;
    var x2 = M2.x * (1 - sqrt) + thisPt.x * sqrt;
    var y2 = M2.y * (1 - sqrt) + thisPt.y * sqrt;
    curvePoints.push({
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      m1x: M1.x,
      m1y: M1.y,
      m2x: M2.x,
      m2y: M2.y
    });
  }

  return curvePoints;
}

function scaleCurvePoints(points) {
  var xMax = 0;
  var yMax = 0;
  var xMin = BLOB_RADIUS;
  var yMin = BLOB_RADIUS;

  for (var i = 0; i < points.length; i++) {
    var _points$i = points[i],
        x1 = _points$i.x1,
        x2 = _points$i.x2,
        y1 = _points$i.y1,
        y2 = _points$i.y2,
        m1x = _points$i.m1x,
        m2x = _points$i.m2x,
        m1y = _points$i.m1y,
        m2y = _points$i.m2y;
    xMin = Math.min(xMin, x1, x2, m1x, m2x);
    xMax = Math.max(xMax, x1, x2, m1x, m2x);
    yMin = Math.min(yMin, y1, y2, m1y, m2y);
    yMax = Math.max(yMax, y1, y2, m1y, m2y);
  }

  var xRatio = 2 * BLOB_RADIUS / (xMax - xMin);
  var yRatio = 2 * BLOB_RADIUS / (yMax - yMin);

  for (var _i2 = 0; _i2 < points.length; _i2++) {
    var _points$_i = points[_i2],
        _x = _points$_i.x1,
        _x2 = _points$_i.x2,
        _y = _points$_i.y1,
        _y2 = _points$_i.y2,
        _m1x = _points$_i.m1x,
        _m2x = _points$_i.m2x,
        _m1y = _points$_i.m1y,
        _m2y = _points$_i.m2y;
    points[_i2] = {
      x1: (_x - xMin) * xRatio,
      x2: (_x2 - xMin) * xRatio,
      m2x: (_m2x - xMin) * xRatio,
      m1x: (_m1x - xMin) * xRatio,
      y1: (_y - yMin) * yRatio,
      y2: (_y2 - yMin) * yRatio,
      m1y: (_m1y - yMin) * yRatio,
      m2y: (_m2y - yMin) * yRatio
    };
  }
}

var getRandomBlobAttributes = function getRandomBlobAttributes(prefix) {
  var _ref;

  return _ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Preset"), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(1, 100)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Complexity"), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(0, 100)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "".concat(prefix, "Smoothness"), Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomFromArray"])([0, 33, 50, 100])), _ref;
};


/***/ }),

/***/ "./packages/components/build-module/block-horizontal-alignment-toolbar/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/components/build-module/block-horizontal-alignment-toolbar/index.js ***!
  \**************************************************************************************/
/*! exports provided: BlockHorizontalAlignmentToolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHorizontalAlignmentToolbar", function() { return BlockHorizontalAlignmentToolbar; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */








var _createContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createContext"])({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: function setFocusedElement() {},
  clientId: null
}),
    Consumer = _createContext.Consumer;

var BLOCK_ALIGNMENTS_CONTROLS = {
  left: {
    icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["alignTop"],
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Align Left', '__plugin_txtd')
  },
  center: {
    icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["alignCenter"],
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Align Middle', '__plugin_txtd')
  },
  right: {
    icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["alignBottom"],
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Align Right', '__plugin_txtd')
  }
};
var DEFAULT_CONTROLS = ['left', 'center', 'right'];
var DEFAULT_CONTROL = 'center';
function BlockHorizontalAlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? DEFAULT_CONTROLS : _ref$controls;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
  var defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[DEFAULT_CONTROL];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
    isCollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    controls: controls.map(function (control) {
      return _objectSpread(_objectSpread({}, BLOCK_ALIGNMENTS_CONTROLS[control]), {}, {
        isActive: value === control,
        onClick: applyOrUnset(control),
        className: 'pixelgrade-hero-horizontal-alignment-button'
      });
    })
  });
} // @todo remove function declaration and use core method when exposed through the api

var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Consumer, null, function (context) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__["withViewportMatch"])({
  isLargeViewport: 'medium'
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select, _ref3) {
  var clientId = _ref3.clientId,
      isLargeViewport = _ref3.isLargeViewport,
      isCollapsed = _ref3.isCollapsed;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getSettings = _select.getSettings;

  return {
    isCollapsed: isCollapsed || !isLargeViewport || !getSettings().hasFixedToolbar && getBlockRootClientId(clientId)
  };
}))(BlockHorizontalAlignmentToolbar));


/***/ }),

/***/ "./packages/components/build-module/block-vertical-alignment-toolbar/index.js":
/*!************************************************************************************!*\
  !*** ./packages/components/build-module/block-vertical-alignment-toolbar/index.js ***!
  \************************************************************************************/
/*! exports provided: BlockVerticalAlignmentToolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockVerticalAlignmentToolbar", function() { return BlockVerticalAlignmentToolbar; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */








var _createContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createContext"])({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: function setFocusedElement() {},
  clientId: null
}),
    Consumer = _createContext.Consumer;

var BLOCK_ALIGNMENTS_CONTROLS = {
  top: {
    icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["alignTop"],
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Vertically Align Top', 'Block vertical alignment setting')
  },
  center: {
    icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["alignCenter"],
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Vertically Align Middle', 'Block vertical alignment setting')
  },
  bottom: {
    icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_3__["alignBottom"],
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Vertically Align Bottom', 'Block vertical alignment setting')
  }
};
var DEFAULT_CONTROLS = ['top', 'center', 'bottom'];
var DEFAULT_CONTROL = 'top';
function BlockVerticalAlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? DEFAULT_CONTROLS : _ref$controls;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
  var defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[DEFAULT_CONTROL];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
    isCollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Change Alignment', 'Block vertical alignment setting label'),
    controls: controls.map(function (control) {
      return _objectSpread(_objectSpread({}, BLOCK_ALIGNMENTS_CONTROLS[control]), {}, {
        isActive: value === control,
        onClick: applyOrUnset(control)
      });
    })
  });
} // @todo remove function declaration and use core method when exposed through the api

var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Consumer, null, function (context) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OriginalComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};
/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-vertical-alignment-toolbar/README.md
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), Object(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_6__["withViewportMatch"])({
  isLargeViewport: 'medium'
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select, _ref3) {
  var clientId = _ref3.clientId,
      isLargeViewport = _ref3.isLargeViewport,
      isCollapsed = _ref3.isCollapsed;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getSettings = _select.getSettings;

  return {
    isCollapsed: isCollapsed || !isLargeViewport || !getSettings().hasFixedToolbar && getBlockRootClientId(clientId)
  };
}))(BlockVerticalAlignmentToolbar));


/***/ }),

/***/ "./packages/components/build-module/card-media/index.js":
/*!**************************************************************!*\
  !*** ./packages/components/build-module/card-media/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);




var Media = function Media(_ref) {
  var src = _ref.src;

  if (!!src) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "novablocks-card__media-image",
      src: src
    });
  }

  return null;
};

var MediaWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var id = ownProps.id;

  if (!id) {
    return null;
  }

  var mediaObject = getMedia(id);
  var src = mediaObject === null || mediaObject === void 0 ? void 0 : mediaObject.source_url;
  return {
    src: src
  };
})(Media);

var CardMedia = function CardMedia(_ref2) {
  var id = _ref2.id;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-card__media-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-card__media"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaWithSelect, {
    id: id
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CardMedia);


/***/ }),

/***/ "./packages/components/build-module/card/index.js":
/*!********************************************************!*\
  !*** ./packages/components/build-module/card/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./packages/components/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-media */ "./packages/components/build-module/card-media/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");







var Card = function Card(props) {
  var isLandscape = !!props.isLandscape;
  var hasFixedAspectRatio = !!props.hasFixedAspectRatio;
  var showMedia = props.showMedia,
      showMeta = props.showMeta,
      showTitle = props.showTitle,
      showContent = props.showContent,
      showButtons = props.showButtons,
      metaAboveTitle = props.metaAboveTitle,
      metaBelowTitle = props.metaBelowTitle,
      placeholder = props.placeholder;
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('novablocks-card', "novablocks-card--".concat(isLandscape ? 'landscape' : 'portrait'), "novablocks-block__content", {
    'novablocks-card--placeholder': placeholder,
    'novablocks-card--fixed-media-aspect-ratio': hasFixedAspectRatio
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-card__layout"
  }, (showMedia || placeholder) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-card__layout-media novablocks-grid__item-media"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_card_media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: props === null || props === void 0 ? void 0 : props.mediaId
  })), (showMeta || showTitle || showContent || showButtons || placeholder) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-card__layout-content novablocks-card__inner-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardMeta, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    meta: metaAboveTitle
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardTitle, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardMeta, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    meta: metaBelowTitle
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardContent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardFooter, props))));
};

var CardTitle = function CardTitle(props) {
  var title = props.title,
      showTitle = props.showTitle,
      placeholder = props.placeholder;

  if (!showTitle && !placeholder) {
    return null;
  }

  var TitleTagName = props.titleTagName || 'h3';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TitleTagName, {
    className: 'wp-block novablocks-grid__item-title novablocks-card__title'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-card__title-size-modifier"
  }, !placeholder ? title : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["TextPlaceholder"], null)));
};

var CardMeta = function CardMeta(props) {
  var meta = props.meta,
      showMeta = props.showMeta,
      placeholder = props.placeholder;

  if (!showMeta) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block novablocks-grid__item-meta"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-card__meta is-style-meta"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "novablocks-card__meta-size-modifier"
  }, !placeholder ? meta : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["TextPlaceholder"], {
    rows: 1
  }))));
};

var CardContent = function CardContent(props) {
  var content = props.content,
      showContent = props.showContent,
      placeholder = props.placeholder;

  if (!showContent && !placeholder) {
    return null;
  }

  var wrapperClassName = 'wp-block novablocks-grid__item-content novablocks-card__description';
  var fontSizeClassName = 'novablocks-card__content-size-modifier';

  if (placeholder) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: wrapperClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: fontSizeClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["TextPlaceholder"], {
      rows: 3
    })));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: wrapperClassName
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["RawHTML"], {
    className: fontSizeClassName
  }, content));
};

var CardFooter = function CardFooter(props) {
  var buttons = props.buttons,
      showButtons = props.showButtons,
      placeholder = props.placeholder;

  if (!showButtons) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block novablocks-grid__item-buttons novablocks-card__buttons"
  }, !placeholder ? buttons : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["TextPlaceholder"], {
    rows: 1
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);


/***/ }),

/***/ "./packages/components/build-module/cards-manager/index.js":
/*!*****************************************************************!*\
  !*** ./packages/components/build-module/cards-manager/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _toggles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggles */ "./packages/components/build-module/cards-manager/toggles.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var CardsManager = function CardsManager(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["ToggleGroup"], {
    onChange: setAttributes,
    toggles: _toggles__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (toggle) {
      return _objectSpread(_objectSpread({}, toggle), {}, {
        value: attributes[toggle.attribute]
      });
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  Component: CardsManager,
  toggles: _toggles__WEBPACK_IMPORTED_MODULE_3__["default"]
});


/***/ }),

/***/ "./packages/components/build-module/cards-manager/toggles.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/cards-manager/toggles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __ = wp.i18n.__;
var toggles = [{
  label: __('Collection Title'),
  attribute: 'showCollectionTitle'
}, {
  label: __('Collection Subtitle'),
  attribute: 'showCollectionSubtitle'
}, {
  label: __('Media'),
  attribute: 'showMedia'
}, {
  label: __('Title'),
  attribute: 'showTitle'
}, {
  label: __('Subtitle'),
  attribute: 'showSubtitle'
}, {
  label: __('Description'),
  attribute: 'showDescription'
}, {
  label: __('Buttons'),
  attribute: 'showButtons'
}, {
  label: __('Meta'),
  attribute: 'showMeta'
}];
/* harmony default export */ __webpack_exports__["default"] = (toggles);


/***/ }),

/***/ "./packages/components/build-module/collection/attributes.json":
/*!*********************************************************************!*\
  !*** ./packages/components/build-module/collection/attributes.json ***!
  \*********************************************************************/
/*! exports provided: align, contentAlign, level, collectionTitleLevel, cardTitleLevel, metadataPosition, primaryMetadata, secondaryMetadata, imageResizing, containerHeight, thumbnailAspectRatioString, thumbnailAspectRatio, imagePadding, title, subtitle, showCollectionTitle, showCollectionSubtitle, showMedia, showTitle, showSubtitle, showDescription, showButtons, showMeta, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"full\"},\"contentAlign\":{\"type\":\"string\",\"default\":\"left\"},\"level\":{\"type\":\"number\",\"default\":2},\"collectionTitleLevel\":{\"type\":\"number\",\"default\":2},\"cardTitleLevel\":{\"type\":\"number\",\"default\":3},\"metadataPosition\":{\"type\":\"string\",\"default\":\"above-title\"},\"primaryMetadata\":{\"type\":\"string\",\"default\":\"category\"},\"secondaryMetadata\":{\"type\":\"string\",\"default\":\"date\"},\"imageResizing\":{\"type\":\"string\",\"default\":\"cropped\"},\"containerHeight\":{\"type\":\"number\",\"default\":50},\"thumbnailAspectRatioString\":{\"type\":\"string\",\"default\":\"landscape\"},\"thumbnailAspectRatio\":{\"type\":\"number\",\"default\":50},\"imagePadding\":{\"type\":\"number\",\"default\":0},\"title\":{\"type\":\"string\",\"default\":\"Latest Posts\"},\"subtitle\":{\"type\":\"string\",\"default\":\"A collection of our latest articles displayed in a cohesive layout\"},\"showCollectionTitle\":{\"type\":\"boolean\",\"default\":true},\"showCollectionSubtitle\":{\"type\":\"boolean\",\"default\":true},\"showMedia\":{\"type\":\"boolean\",\"default\":true},\"showTitle\":{\"type\":\"boolean\",\"default\":true},\"showSubtitle\":{\"type\":\"boolean\",\"default\":false},\"showDescription\":{\"type\":\"boolean\",\"default\":true},\"showButtons\":{\"type\":\"boolean\",\"default\":true},\"showMeta\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/components/build-module/collection/index.js":
/*!**************************************************************!*\
  !*** ./packages/components/build-module/collection/index.js ***!
  \**************************************************************/
/*! exports provided: CollectionTitle, CollectionSubtitle, CollectionPreview, CollectionHeader, collectionAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionTitle", function() { return CollectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionSubtitle", function() { return CollectionSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPreview", function() { return CollectionPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionHeader", function() { return CollectionHeader; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./packages/components/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-controls */ "./packages/components/build-module/collection/inspector-controls.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./packages/components/build-module/collection/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/components/build-module/collection/attributes.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "collectionAttributes", function() { return _attributes__WEBPACK_IMPORTED_MODULE_5__; });





var RichText = wp.blockEditor.RichText;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment; // @todo this is bad mojo

var _GridGenerator$utils = _index__WEBPACK_IMPORTED_MODULE_2__["GridGenerator"].utils,
    getAreaClassnameByWidthRatio = _GridGenerator$utils.getAreaClassnameByWidthRatio,
    getAreaClassnameByHeightRatio = _GridGenerator$utils.getAreaClassnameByHeightRatio;
var CollectionTitle = function CollectionTitle(props) {
  var _props$attributes = props.attributes,
      showCollectionTitle = _props$attributes.showCollectionTitle,
      title = _props$attributes.title,
      collectionTitleLevel = _props$attributes.collectionTitleLevel,
      setAttributes = props.setAttributes;

  if (!showCollectionTitle) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-editor-block-list__block wp-block novablocks-collection__title",
    "data-align": "wide"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "h".concat(collectionTitleLevel),
    value: title,
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    },
    allowedFormats: ['core/link']
  }));
};
var CollectionSubtitle = function CollectionSubtitle(props) {
  var _props$attributes2 = props.attributes,
      showCollectionSubtitle = _props$attributes2.showCollectionSubtitle,
      subtitle = _props$attributes2.subtitle,
      setAttributes = props.setAttributes;

  if (!showCollectionSubtitle) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-editor-block-list__block wp-block novablocks-collection__subtitle",
    "data-align": "wide"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["EditableText"], {
    tagName: 'p',
    className: 'is-style-lead',
    value: subtitle,
    onChange: function onChange(subtitle) {
      setAttributes({
        subtitle: subtitle
      });
    }
  }));
};
var CollectionPreview = function CollectionPreview(props) {
  var attributes = props.attributes,
      hasAppender = props.hasAppender;
  var blockStyle = attributes.blockStyle,
      contentStyle = attributes.contentStyle,
      contentAlign = attributes.contentAlign,
      imageResizing = attributes.imageResizing,
      containerHeight = attributes.containerHeight,
      imagePadding = attributes.imagePadding,
      columns = attributes.columns,
      postsToShow = attributes.postsToShow,
      isLandscape = attributes.isLandscape;
  var blockClassName = 'novablocks-collection';
  var thumbnailAspectRatio = attributes.thumbnailAspectRatio || containerHeight;
  var style = {
    '--card-media-padding': imagePadding,
    '--card-media-padding-top': Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getCardMediaPaddingTop"])(thumbnailAspectRatio),
    '--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down'
  };
  var widthRatio = 1 / columns;
  var heightRatio = 1 / Math.ceil(postsToShow / columns);
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, blockClassName, 'novablocks-block', "".concat(blockClassName, "--align-").concat(contentAlign), "block-is-".concat(blockStyle), "content-is-".concat(contentStyle), {
    'has-appender': hasAppender
  }, //
  'novablocks-grid__area', {
    'novablocks-grid__area--portrait': !isLandscape,
    'novablocks-grid__area--landscape': isLandscape
  }, getAreaClassnameByWidthRatio(widthRatio), getAreaClassnameByHeightRatio(heightRatio));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className,
    style: style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CollectionHeader, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "block-editor-block-list__block wp-block novablocks-collection__cards",
    "data-align": "wide"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(blockClassName, "__layout")
  }, props.children))));
};

var Collection = function Collection(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector_controls__WEBPACK_IMPORTED_MODULE_3__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CollectionPreview, props));
};

var CollectionHeader = function CollectionHeader(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CollectionTitle, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CollectionSubtitle, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Collection);


/***/ }),

/***/ "./packages/components/build-module/collection/inspector-controls.js":
/*!***************************************************************************!*\
  !*** ./packages/components/build-module/collection/inspector-controls.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);






var CollectionInspectorControls = function CollectionInspectorControls(props) {
  var _props$attributes = props.attributes,
      contentAlign = _props$attributes.contentAlign,
      containerHeight = _props$attributes.containerHeight,
      imageResizing = _props$attributes.imageResizing,
      level = _props$attributes.level,
      imagePadding = _props$attributes.imagePadding,
      setAttributes = props.setAttributes;

  var _onChange = typeof props.onChange !== 'function' ? setAttributes : props.onChange;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    key: 'collection-image-resizing',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image resizing'),
    selected: imageResizing,
    onChange: function onChange(imageResizing) {
      setAttributes({
        imageResizing: imageResizing
      });
    },
    options: [{
      label: 'Stretch to fill the container',
      value: 'cropped'
    }, {
      label: 'Shrink to fit (no crop)',
      value: 'original'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'collection-image-container-height',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image container height', '__plugin_txtd'),
    value: containerHeight,
    onChange: function onChange(containerHeight) {
      setAttributes({
        containerHeight: containerHeight
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    key: 'collection-image-padding',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image padding', '__plugin_txtd'),
    value: imagePadding,
    onChange: function onChange(imagePadding) {
      setAttributes({
        imagePadding: imagePadding
      });
    },
    min: 0,
    max: 100,
    step: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Level', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_1__["HeadingToolbar"], {
    minLevel: 2,
    maxLevel: 4,
    selectedLevel: level,
    onChange: function onChange(level) {
      _onChange({
        level: level
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Alignment', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["AlignmentToolbar"], {
    value: contentAlign,
    isCollapsed: false,
    onChange: function onChange(contentAlign) {
      _onChange({
        contentAlign: contentAlign
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CollectionInspectorControls);


/***/ }),

/***/ "./packages/components/build-module/color-controls/attributes.json":
/*!*************************************************************************!*\
  !*** ./packages/components/build-module/color-controls/attributes.json ***!
  \*************************************************************************/
/*! exports provided: contentColor, overlayFilterStyle, overlayFilterStrength, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contentColor\":{\"type\":\"string\",\"default\":\"#FFF\"},\"overlayFilterStyle\":{\"type\":\"string\",\"default\":\"dark\"},\"overlayFilterStrength\":{\"type\":\"number\",\"default\":30}}");

/***/ }),

/***/ "./packages/components/build-module/color-controls/index.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/color-controls/index.js ***!
  \******************************************************************/
/*! exports provided: colorAttributes, ColorControls, ColorPanel, ColorToolbar, OverlayControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorControls", function() { return ColorControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanel", function() { return ColorPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorToolbar", function() { return ColorToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayControls", function() { return OverlayControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./packages/components/build-module/color-controls/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/components/build-module/color-controls/attributes.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "colorAttributes", function() { return _attributes__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */





var colors = [{
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dark', '__plugin_txtd'),
  color: '#000'
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Light', '__plugin_txtd'),
  color: '#FFF'
}];

var OverlayControls = function OverlayControls(props) {
  var _props$attributes = props.attributes,
      overlayFilterStyle = _props$attributes.overlayFilterStyle,
      overlayFilterStrength = _props$attributes.overlayFilterStrength,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Overlay Filter Style', '__plugin_txtd'),
    selected: overlayFilterStyle,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', '__plugin_txtd'),
      value: 'none'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dark', '__plugin_txtd'),
      value: 'dark'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Light', '__plugin_txtd'),
      value: 'light'
    }],
    onChange: function onChange(nextOverlayFilterStyle) {
      return setAttributes({
        overlayFilterStyle: nextOverlayFilterStyle
      });
    }
  }), overlayFilterStyle !== 'none' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Overlay Filter Strength', '__plugin_txtd'),
    value: overlayFilterStrength,
    onChange: function onChange(nextOverlayFilterStrength) {
      return setAttributes({
        overlayFilterStrength: nextOverlayFilterStrength
      });
    },
    min: 0,
    max: 100,
    step: 10
  }));
};

var ColorControls = function ColorControls(props) {
  var contentColor = props.attributes.contentColor,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Content Color', '__plugin_txtd')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    className: "nova-hide-clear-color",
    value: contentColor,
    colors: colors,
    onChange: function onChange(nextContentColor) {
      return setAttributes({
        contentColor: nextContentColor
      });
    },
    disableCustomColors: true,
    clearable: false
  }));
};

var ColorPanel = function ColorPanel(props) {
  var contentColor = props.attributes.contentColor,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["PanelColorSettings"], {
    className: "nova-hide-clear-color",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color Settings', '__plugin_txtd'),
    colorSettings: [{
      value: contentColor,
      onChange: function onChange(nextContentColor) {
        return setAttributes({
          contentColor: nextContentColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Content Color', '__plugin_txtd')
    }],
    colors: colors,
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OverlayControls, props));
};

var ColorToolbar = function ColorToolbar(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    className: "pixelgrade-hero-block-toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    position: "bottom",
    className: "pixelgrade-hero-block-toolbar-dropdown",
    contentClassName: "components-nova--popover",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: onToggle,
        icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_1__["invert"],
        "aria-expanded": isOpen,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Colors', '__plugin_txtd')
      });
    },
    focusOnMount: false,
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorControls, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OverlayControls, props));
    }
  }));
};




/***/ }),

/***/ "./packages/components/build-module/control-sections/controls-sections-slot-fill.js":
/*!******************************************************************************************!*\
  !*** ./packages/components/build-module/control-sections/controls-sections-slot-fill.js ***!
  \******************************************************************************************/
/*! exports provided: ControlsSectionsSlot, ControlsSectionsFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSectionsSlot", function() { return ControlsSectionsSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSectionsFill", function() { return ControlsSectionsFill; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var ControlsSectionsSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["createSlotFill"])('ControlsSections');
var ControlsSectionsSlot = ControlsSectionsSlotFill.Slot;
var ControlsSectionsFill = ControlsSectionsSlotFill.Fill;



/***/ }),

/***/ "./packages/components/build-module/control-sections/cube.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/control-sections/cube.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var Cube = function Cube(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube-face novablocks-sections__cube-face--top"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube-face novablocks-sections__cube-face--left"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__cube-face novablocks-sections__cube-face--right"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cube);


/***/ }),

/***/ "./packages/components/build-module/control-sections/drawer-content-slot-fill.js":
/*!***************************************************************************************!*\
  !*** ./packages/components/build-module/control-sections/drawer-content-slot-fill.js ***!
  \***************************************************************************************/
/*! exports provided: DrawerContentSlot, DrawerContentFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentSlot", function() { return DrawerContentSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentFill", function() { return DrawerContentFill; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

var DrawerContentSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["createSlotFill"])('DrawerContent');
var DrawerContentSlot = DrawerContentSlotFill.Slot;
var DrawerContentFill = DrawerContentSlotFill.Fill;



/***/ }),

/***/ "./packages/components/build-module/control-sections/index.js":
/*!********************************************************************!*\
  !*** ./packages/components/build-module/control-sections/index.js ***!
  \********************************************************************/
/*! exports provided: ControlsTab, ControlsSections, ControlsSection, ControlsDrawerContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsTab", function() { return ControlsTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSections", function() { return ControlsSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSection", function() { return ControlsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsDrawerContent", function() { return ControlsDrawerContent; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/components/build-module/control-sections/utils.js");
/* harmony import */ var _controls_sections_slot_fill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls-sections-slot-fill */ "./packages/components/build-module/control-sections/controls-sections-slot-fill.js");
/* harmony import */ var _drawer_content_slot_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawer-content-slot-fill */ "./packages/components/build-module/control-sections/drawer-content-slot-fill.js");
/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cube */ "./packages/components/build-module/control-sections/cube.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./packages/components/build-module/control-sections/tabs.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);

// internal dependencies











var ControlsSectionsComponent = function ControlsSectionsComponent(props) {
  var sections = props.sections;
  var advancedButton = document.querySelector('.block-editor-block-inspector__advanced');
  var advancedWrapper = !!advancedButton && advancedButton.parentNode;

  if (!!advancedWrapper) {
    advancedWrapper.style.setProperty('transition', 'height .3s ease-out');
    advancedWrapper.style.setProperty('overflow', 'hidden');
  }

  var onOpen = function onOpen() {
    if (!!(advancedWrapper === null || advancedWrapper === void 0 ? void 0 : advancedWrapper.style)) {
      advancedWrapper.style.setProperty('height', " ".concat(advancedButton.offsetHeight, "px"));
      requestAnimationFrame(function () {
        advancedWrapper.style.setProperty('height', 0);
      });
    }
  };

  var onClose = function onClose() {
    if (!!(advancedWrapper === null || advancedWrapper === void 0 ? void 0 : advancedWrapper.style)) {
      advancedWrapper.addEventListener('transitionend', function () {
        advancedWrapper.style.removeProperty('height');
      }, {
        once: true
      });
      advancedWrapper.style.setProperty('height', " ".concat(advancedButton.offsetHeight, "px"));
    }
  };

  var groups = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(sections, function (section) {
    return !!section.props.group ? section.props.group : '';
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_7__["Drawers"], {
    onOpen: onOpen,
    onClose: onClose
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_7__["DrawerListBefore"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-sections__title"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Design Customization')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_cube__WEBPACK_IMPORTED_MODULE_5__["default"], null))), Object.keys(groups).map(function (key) {
    var sections = groups[key];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_7__["DrawerList"], {
      title: key,
      key: key
    }, sections.map(function (section, index) {
      var _section$props = section.props,
          label = _section$props.label,
          priority = _section$props.priority;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_7__["Drawer"], {
        key: index,
        title: label,
        priority: priority
      });
    }));
  }), Object.keys(groups).map(function (key) {
    var sections = groups[key];
    return sections.map(function (section, index) {
      var _section$props2 = section.props,
          children = _section$props2.children,
          label = _section$props2.label;
      var tabs = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).filter(function (child) {
        return child.type === ControlsTab;
      });
      var orderedTabs = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["orderBy"])(tabs, function (tab) {
        return tab.props.priority || 0;
      }, ['desc']);
      var groupedTabs = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(orderedTabs, function (tab) {
        return tab.props.label;
      });
      var compiledTabs = Object.keys(groupedTabs).map(function (key) {
        var group = groupedTabs[key];
        return {
          props: {
            label: key,
            children: group.reduce(function (accumulator, tab) {
              return accumulator.concat(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(tab.props.children));
            }, [])
          }
        };
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_7__["DrawerPanel"], {
        key: index
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tabs__WEBPACK_IMPORTED_MODULE_6__["ActiveSectionTabs"], {
        title: section.props.label,
        tabs: compiledTabs
      }));
    });
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_7__["DrawerListAfter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_drawer_content_slot_fill__WEBPACK_IMPORTED_MODULE_4__["DrawerContentSlot"], null))));
};

var ControlsSections = function ControlsSections(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_sections_slot_fill__WEBPACK_IMPORTED_MODULE_3__["ControlsSectionsSlot"], null, function (fills) {
    var sections = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionsFromFills"])(fills);

    if (!sections.length) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ControlsSectionsComponent, {
      sections: sections
    });
  });
};

var ControlsTab = function ControlsTab(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    label: props.label
  }, props.children);
};

var ControlsSection = function ControlsSection(props) {
  var _useBlockEditContext = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext.isSelected;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_sections_slot_fill__WEBPACK_IMPORTED_MODULE_3__["ControlsSectionsFill"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", props));
};

var ControlsDrawerContent = function ControlsDrawerContent(props) {
  var _useBlockEditContext2 = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext2.isSelected;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_drawer_content_slot_fill__WEBPACK_IMPORTED_MODULE_4__["DrawerContentFill"], null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", props));
};




/***/ }),

/***/ "./packages/components/build-module/control-sections/tabs.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/control-sections/tabs.js ***!
  \*******************************************************************/
/*! exports provided: ActiveSectionTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSectionTabs", function() { return ActiveSectionTabs; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./packages/components/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spring */ "./packages/components/node_modules/react-spring/web.js");
/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cube */ "./packages/components/build-module/control-sections/cube.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./packages/components/build-module/control-sections/utils.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ACCENT_COLORS = ['rgb(142,101,192)', 'rgb(0,202,182)', 'rgb(222,22,81)'];



var getTabAccentColor = function getTabAccentColor(label) {
  if (Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('General') === label) {
    return ACCENT_COLORS[0];
  }

  if (Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_13__["__"])('Customize') === label) {
    return ACCENT_COLORS[1];
  }

  return ACCENT_COLORS[2];
};

var getTabClassName = function getTabClassName(label, activeTabLabel) {
  return classnames__WEBPACK_IMPORTED_MODULE_8___default()('novablocks-sections__tab', {
    'novablocks-sections__tab--active': activeTabLabel === label
  });
};

var ActiveSectionTabs = function ActiveSectionTabs(props) {
  var title = props.title,
      tabs = props.tabs,
      goBack = props.goBack,
      updateHeight = props.updateHeight;

  if (!tabs.length) {
    return null;
  }

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["useState"])(tabs[0].props.label),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      activeTabLabel = _useState2[0],
      setActiveTabLabel = _useState2[1];

  var activeTabIndex = tabs.findIndex(function (tab) {
    return tab.props.label === activeTabLabel;
  });
  var activeTab = tabs[activeTabIndex];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_10__["useSpring"])({
    accentColor: getTabAccentColor(activeTabLabel)
  }),
      accentColor = _useSpring.accentColor;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(updateHeight, [activeTabLabel]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_10__["animated"].div, {
    className: "novablocks-section__controls",
    style: {
      '--novablocks-section-controls-accent': accentColor
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "novablocks-sections__controls-header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "novablocks-sections__controls-back",
    onClick: goBack,
    key: 'tabs-back-button'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "novablocks-sections__controls-title",
    key: 'tabs-title'
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_cube__WEBPACK_IMPORTED_MODULE_11__["default"], null)), tabs.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: 'novablocks-sections__tabs'
  }, tabs.map(function (tab, index) {
    var label = tab.props.label;
    var className = getTabClassName(label, activeTabLabel);

    var onClick = function onClick() {
      setActiveTabLabel(label);
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
      className: className,
      onClick: onClick,
      key: index
    }, label);
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(TabContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    activeTab: activeTab
  }, props)));
};

var TabContent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TabContent, _Component);

  var _super = _createSuper(TabContent);

  function TabContent() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TabContent);

    _this = _super.apply(this, arguments);
    _this.resizeObserver = null;
    _this.resizeElement = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createRef"])();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TabContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeObserver = new ResizeObserver(function (entries) {
        _this2.props.updateHeight();
      });
      this.resizeObserver.observe(this.resizeElement.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var activeTab = this.props.activeTab;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: 'novablocks-sections__tab-content',
        ref: this.resizeElement
      }, !!activeTab && activeTab.props.children);
    }
  }]);

  return TabContent;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);




/***/ }),

/***/ "./packages/components/build-module/control-sections/utils.js":
/*!********************************************************************!*\
  !*** ./packages/components/build-module/control-sections/utils.js ***!
  \********************************************************************/
/*! exports provided: mergeChildrenProps, getSectionsFromFills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildrenProps", function() { return mergeChildrenProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionsFromFills", function() { return getSectionsFromFills; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mergeChildrenProps = function mergeChildrenProps(children1, children2) {
  if (typeof children1 === "undefined") {
    return children2;
  }

  if (typeof children2 === "undefined") {
    return children1;
  }

  var children1Array = Array.isArray(children1) ? children1 : [children1];
  var children2Array = Array.isArray(children2) ? children2 : [children2];
  return children1Array.concat(children2Array);
};
var getSectionsFromFills = function getSectionsFromFills(fills) {
  var sections = []; // Merge sections with the same label

  fills.forEach(function (fill) {
    var index = sections.findIndex(function (section) {
      return section.props.label === fill[0].props.label;
    });

    if (index === -1) {
      sections.push({
        props: fill[0].props
      });
    } else {
      sections.splice(index, 1, {
        props: _objectSpread(_objectSpread({}, sections[index].props), {}, {
          children: mergeChildrenProps(sections[index].props.children, fill[0].props.children)
        })
      });
    }
  });
  return sections;
};


/***/ }),

/***/ "./packages/components/build-module/controls-group/index.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/controls-group/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var ControlsGroup = function ControlsGroup(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-controls-group"
  }, !!props.title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-controls-group__title"
  }, props.title), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ControlsGroup);


/***/ }),

/***/ "./packages/components/build-module/drawer/index.js":
/*!**********************************************************!*\
  !*** ./packages/components/build-module/drawer/index.js ***!
  \**********************************************************/
/*! exports provided: Drawer, Drawers, DrawerList, DrawerListBefore, DrawerListAfter, DrawerPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawers", function() { return Drawers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerList", function() { return DrawerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerListBefore", function() { return DrawerListBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerListAfter", function() { return DrawerListAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPanel", function() { return DrawerPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./packages/components/node_modules/react-spring/web.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./packages/components/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Drawers = function Drawers(ownProps) {
  var children = _wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Children"].toArray(ownProps.children);
  var drawerLists = children.filter(function (child) {
    return child.type === DrawerList;
  });
  var drawerPanels = children.filter(function (child) {
    return child.type === DrawerPanel;
  });
  var beforeChildren = children.filter(function (child) {
    return child.type === DrawerListBefore;
  });
  var afterChildren = children.filter(function (child) {
    return child.type === DrawerListAfter;
  });

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      wrapperHeight = _useState6[0],
      setWrapperHeight = _useState6[1];

  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
    return new WeakMap();
  }),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 1),
      refMap = _useState8[0];

  var noop = function noop() {};

  var onOpen = typeof ownProps.onOpen === 'function' ? ownProps.onOpen : noop;
  var onClose = typeof ownProps.onClose === 'function' ? ownProps.onClose : noop;

  var getDrawerListHeight = function getDrawerListHeight() {
    return !!ref.current ? ref.current.clientHeight : 0;
  };

  var getActiveDrawerHeight = function getActiveDrawerHeight() {
    var activeRef = refMap.get(drawerPanels[active]);
    return !!activeRef ? activeRef.clientHeight : 0;
  };

  var updateHeight = function updateHeight() {
    var drawerListHeight = getDrawerListHeight();
    var drawerPanelHeight = getActiveDrawerHeight();
    setWrapperHeight(!!open ? drawerPanelHeight : drawerListHeight);
  };

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    transform: open ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
    height: wrapperHeight,
    // avoid height animation on first render
    immediate: !open && false === active
  }),
      height = _useSpring.height,
      transform = _useSpring.transform;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    updateHeight();
  }, [open, active]); // keep track of number of drawers in previous drawerLists

  var totalDrawers = 0;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "novablocks-drawers",
    style: {
      height: height
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "novablocks-drawers__wrap",
    style: {
      transform: transform
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "novablocks-drawers__front",
    ref: ref
  }, beforeChildren, drawerLists.map(function (drawerList, drawerListIndex) {
    var _drawerList$props;

    var drawers = getDrawersFromList(drawerList);
    var title = drawerList === null || drawerList === void 0 ? void 0 : (_drawerList$props = drawerList.props) === null || _drawerList$props === void 0 ? void 0 : _drawerList$props.title;
    totalDrawers = totalDrawers + drawers.length;
    var drawersWithTarget = drawers.map(function (drawer, index) {
      var _drawer$props;

      var defaultTarget = totalDrawers - drawers.length + index;
      var target = Number.isInteger((_drawer$props = drawer.props) === null || _drawer$props === void 0 ? void 0 : _drawer$props.target) ? drawer.props.target : defaultTarget;
      return _objectSpread(_objectSpread({}, drawer), {}, {
        target: target
      });
    });
    var orderedDrawers = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["orderBy"])(drawersWithTarget, function (drawer) {
      return drawer.props.priority || 0;
    }, ['desc']);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "novablocks-drawers__list",
      key: "drawer-list-".concat(drawerListIndex)
    }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "novablocks-drawers__list-title"
    }, title), orderedDrawers.map(function (_ref, drawerIndex) {
      var props = _ref.props,
          target = _ref.target;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Drawer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        key: "drawer-".concat(drawerListIndex, "-").concat(drawerIndex),
        onClick: function onClick() {
          setActive(target);
          setOpen(true);
          onOpen();
        }
      }));
    }));
  }), afterChildren.map(function (afterChild, index) {
    var _useResizeObserver = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__["useResizeObserver"])(),
        _useResizeObserver2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useResizeObserver, 2),
        childRef = _useResizeObserver2[0],
        contentRect = _useResizeObserver2[1].contentRect;

    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(updateHeight, [contentRect === null || contentRect === void 0 ? void 0 : contentRect.height]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      ref: childRef,
      key: "drawer-list-after-child-".concat(index)
    }, afterChild);
  })), drawerPanels.map(function (drawerPanel, index) {
    var className = classnames__WEBPACK_IMPORTED_MODULE_6___default()('novablocks-drawers__panel', {
      'novablocks-drawers__panel--hidden': index !== active
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      key: "drawer-panel-".concat(index),
      className: className,
      ref: function ref(_ref2) {
        return _ref2 && refMap.set(drawerPanel, _ref2);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(DrawerWithProps, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, drawerPanel.props, {
      isActive: index === active,
      goBack: function goBack() {
        setOpen(false);
        onClose();
      },
      updateHeight: updateHeight
    })));
  })));
};

var DrawerWithProps = function DrawerWithProps(props) {
  var goBack = props.goBack,
      isActive = props.isActive,
      updateHeight = props.updateHeight;
  return addPropsToChildren(props.children, {
    goBack: goBack,
    isActive: isActive,
    updateHeight: updateHeight
  });
};

var addPropsToChildren = function addPropsToChildren(children, props) {
  if (typeof children === "undefined") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(function (child) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(child, props);
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(children, props);
};

var getDrawersFromList = function getDrawersFromList(drawerList) {
  var _drawerList$props2;

  var children = drawerList === null || drawerList === void 0 ? void 0 : (_drawerList$props2 = drawerList.props) === null || _drawerList$props2 === void 0 ? void 0 : _drawerList$props2.children;

  if (!Array.isArray(children)) {
    return [];
  }

  return children.filter(function (child) {
    return child.type === Drawer;
  });
};

var DrawerList = function DrawerList(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'novablocks-drawers__list'
  }, props.children);
};

var DrawerPanel = function DrawerPanel(props) {
  return props.children;
};

var DrawerListBefore = function DrawerListBefore(props) {
  return props.children;
};

var DrawerListAfter = function DrawerListAfter(props) {
  return props.children;
};

var Drawer = function Drawer(props) {
  var title = props.title,
      onClick = props.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'novablocks-drawer',
    onClick: onClick
  }, title);
};




/***/ }),

/***/ "./packages/components/build-module/editable-text/index.js":
/*!*****************************************************************!*\
  !*** ./packages/components/build-module/editable-text/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);





var EditableText = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props, ref) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref
  }, props, {
    __unstableDisableFormats: true
  }));
});

EditableText.Content = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$tagName = _ref.tagName,
      Tag = _ref$tagName === void 0 ? 'div' : _ref$tagName,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["value", "tagName"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tag, props, value);
};
/**
 * Renders an editable text input in which text formatting is not allowed.
 */


/* harmony default export */ __webpack_exports__["default"] = (EditableText);


/***/ }),

/***/ "./packages/components/build-module/emphasis-level-controls/index.js":
/*!***************************************************************************!*\
  !*** ./packages/components/build-module/emphasis-level-controls/index.js ***!
  \***************************************************************************/
/*! exports provided: EmphasisContentAreaControls, EmphasisBlockAreaControls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmphasisContentAreaControls", function() { return EmphasisContentAreaControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmphasisBlockAreaControls", function() { return EmphasisBlockAreaControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






var EmphasisContentAreaSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["createSlotFill"])('EmphasisContentArea');
var EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
var EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;
var EmphasisBlockAreaSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["createSlotFill"])('EmphasisBlockArea');
var EmphasisBlockAreaSlot = EmphasisBlockAreaSlotFill.Slot;
var EmphasisBlockAreaFill = EmphasisBlockAreaSlotFill.Fill;

var EmphasisLevelControls = function EmphasisLevelControls(props) {
  var _props$attributes = props.attributes,
      contentStyle = _props$attributes.contentStyle,
      blockStyle = _props$attributes.blockStyle,
      setAttributes = props.setAttributes,
      _props$settings$media = props.settings.media,
      contentAreaOptions = _props$settings$media.contentAreaOptions,
      blockAreaOptions = _props$settings$media.blockAreaOptions;

  var getEmphasisByContrastValue = function getEmphasisByContrastValue() {
    var blockIndex = blockAreaOptions.findIndex(function (option) {
      return option.value === blockStyle;
    });
    var contentIndex = contentAreaOptions.findIndex(function (option) {
      return option.value === contentStyle;
    });
    return blockIndex * 3 + contentIndex;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color Contrast')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Customize')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    key: 'emphasis-by-contrast-controls',
    value: getEmphasisByContrastValue(),
    onChange: function onChange(contrast) {
      var blockIndex = Math.floor(contrast / 3);
      var contentIndex = contrast % 3;
      setAttributes({
        blockStyle: blockAreaOptions[blockIndex].value,
        contentStyle: contentAreaOptions[contentIndex].value
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Emphasis by Contrast'),
    min: 0,
    max: 8
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_2__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Contrast')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    key: 'block-emphasis-controls',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Block Emphasis', '__plugin_txtd'),
    value: blockStyle,
    selected: blockStyle,
    options: blockAreaOptions,
    onChange: function onChange(nextBlockStyle) {
      return setAttributes({
        blockStyle: nextBlockStyle
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmphasisBlockAreaSlot, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    key: 'content-emphasis-controls',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Content Area Emphasis', '__plugin_txtd'),
    value: contentStyle,
    selected: contentStyle,
    options: contentAreaOptions,
    onChange: function onChange(nextContentStyle) {
      return setAttributes({
        contentStyle: nextContentStyle
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmphasisContentAreaSlot, null))));
};

var EmphasisContentAreaControls = function EmphasisContentAreaControls(props) {
  var _useBlockEditContext = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext.isSelected;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmphasisContentAreaFill, null, isSelected && props.children);
};

var EmphasisBlockAreaControls = function EmphasisBlockAreaControls(props) {
  var _useBlockEditContext2 = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockEditContext"])(),
      isSelected = _useBlockEditContext2.isSelected;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(EmphasisBlockAreaFill, null, isSelected && props.children);
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["withSettings"])(EmphasisLevelControls));


/***/ }),

/***/ "./packages/components/build-module/gallery-options/index.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/gallery-options/index.js ***!
  \*******************************************************************/
/*! exports provided: GalleryPlaceholder, GalleryPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPlaceholder", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPreview", function() { return GalleryPreview; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */



var ALLOWED_MEDIA_TYPES = ['image'];

var GalleryPlaceholder = function GalleryPlaceholder(props) {
  var galleryImages = props.attributes.galleryImages,
      onSelectImages = props.onSelectImages;
  var hasImages = !!galleryImages.length;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaPlaceholder"], {
    accept: "image/*",
    addToGallery: hasImages,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    labels: {
      title: '',
      instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Drag images, upload new ones or select files from your library.', '__plugin_txtd')
    },
    multiple: true,
    onSelect: onSelectImages,
    value: hasImages ? galleryImages : undefined
  });
};

var GalleryPreview = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleryPreview, _Component);

  var _super = _createSuper(GalleryPreview);

  function GalleryPreview() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GalleryPreview);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GalleryPreview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          galleryImages = _this$props.galleryImages,
          selected = _this$props.selected,
          onSelectImage = _this$props.onSelectImage;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "novablocks-slideshow__gallery-edit"
      }, galleryImages.map(function (img, index) {
        var classes = ['novablocks-slideshow__gallery-item'];

        if (selected === index) {
          classes.push('novablocks-slideshow__gallery-item--active');
        }

        var thumbnail = false;

        if ('video' === img.type) {
          var _img$thumb;

          thumbnail = img === null || img === void 0 ? void 0 : (_img$thumb = img.thumb) === null || _img$thumb === void 0 ? void 0 : _img$thumb.src;
          classes.push('novablocks-slideshow__gallery-item--video');
        } else {
          var _img$sizes, _img$sizes$novablocks, _img$sizes2, _img$sizes2$thumbnail, _img$sizes3, _img$sizes3$novablock, _img$sizes4, _img$sizes4$large, _img$sizes5, _img$sizes5$novablock, _img$sizes6, _img$sizes6$full;

          thumbnail = (img === null || img === void 0 ? void 0 : (_img$sizes = img.sizes) === null || _img$sizes === void 0 ? void 0 : (_img$sizes$novablocks = _img$sizes.novablocks_tiny) === null || _img$sizes$novablocks === void 0 ? void 0 : _img$sizes$novablocks.url) || (img === null || img === void 0 ? void 0 : (_img$sizes2 = img.sizes) === null || _img$sizes2 === void 0 ? void 0 : (_img$sizes2$thumbnail = _img$sizes2.thumbnail) === null || _img$sizes2$thumbnail === void 0 ? void 0 : _img$sizes2$thumbnail.url) || (img === null || img === void 0 ? void 0 : (_img$sizes3 = img.sizes) === null || _img$sizes3 === void 0 ? void 0 : (_img$sizes3$novablock = _img$sizes3.novablocks_large) === null || _img$sizes3$novablock === void 0 ? void 0 : _img$sizes3$novablock.url) || (img === null || img === void 0 ? void 0 : (_img$sizes4 = img.sizes) === null || _img$sizes4 === void 0 ? void 0 : (_img$sizes4$large = _img$sizes4.large) === null || _img$sizes4$large === void 0 ? void 0 : _img$sizes4$large.url) || (img === null || img === void 0 ? void 0 : (_img$sizes5 = img.sizes) === null || _img$sizes5 === void 0 ? void 0 : (_img$sizes5$novablock = _img$sizes5.novablocks_huge) === null || _img$sizes5$novablock === void 0 ? void 0 : _img$sizes5$novablock.url) || (img === null || img === void 0 ? void 0 : (_img$sizes6 = img.sizes) === null || _img$sizes6 === void 0 ? void 0 : (_img$sizes6$full = _img$sizes6.full) === null || _img$sizes6$full === void 0 ? void 0 : _img$sizes6$full.url) || (img === null || img === void 0 ? void 0 : img.url);
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
          key: index,
          onClick: function onClick() {
            onSelectImage(index);
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: classes.join(' ')
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: thumbnail,
          alt: ""
        })));
      }));
    }
  }]);

  return GalleryPreview;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);




/***/ }),

/***/ "./packages/components/build-module/grid-generator/areaDebug.js":
/*!**********************************************************************!*\
  !*** ./packages/components/build-module/grid-generator/areaDebug.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var AreaDebug = function AreaDebug(_ref) {
  var area = _ref.area;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'novablocks-grid__debug'
  }, "nth: ".concat(area.nth), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "posts count: ".concat(area.postsCount), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "initial posts count: ".concat(area.initialPostsCount), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "width: ".concat(area.width), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "height: ".concat(area.height), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), "spot ratio: ".concat(area.spotRatio));
};

/* harmony default export */ __webpack_exports__["default"] = (AreaDebug);


/***/ }),

/***/ "./packages/components/build-module/grid-generator/controls.js":
/*!*********************************************************************!*\
  !*** ./packages/components/build-module/grid-generator/controls.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./packages/components/build-module/grid-generator/utils.js");
/* harmony import */ var _layoutEngine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layoutEngine */ "./packages/components/build-module/grid-generator/layoutEngine.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var getMinFeatureSize = function getMinFeatureSize(attributes) {
  return 1;
};

var getMaxFeatureSize = function getMaxFeatureSize(attributes) {
  return attributes.gridcolumns;
};

var getMinFeaturePosition = function getMinFeaturePosition(attributes) {
  return 1;
};

var getMaxFeaturePosition = function getMaxFeaturePosition(attributes) {
  return attributes.gridcolumns - attributes.featuresize + 1;
};

var getMinColumnsFragmentation = function getMinColumnsFragmentation(attributes) {
  return 0;
};

var getMaxColumnsFragmentation = function getMaxColumnsFragmentation(attributes) {
  return Math.max(0, Math.pow(2, attributes.gridcolumns - attributes.featuresize - 1) - 1);
};

var clamp = function clamp(number, min, max) {
  return Math.min(Math.max(min, number), max);
};

var normalizeAttributes = function normalizeAttributes(newAttributes, attributes) {
  var atts = _objectSpread(_objectSpread({}, attributes), newAttributes);

  atts.featuresize = clamp(atts.featuresize, getMinFeatureSize(atts), getMaxFeatureSize(atts));
  atts.featureposition = clamp(atts.featureposition, getMinFeaturePosition(atts), getMaxFeaturePosition(atts));
  atts.fragmentation = clamp(atts.fragmentation, getMinColumnsFragmentation(atts), getMaxColumnsFragmentation(atts));
  return atts;
};

var getRandomAttributes = function getRandomAttributes() {
  var postsToShow = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(3, 20);
  var gridcolumns = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(2, 6);
  var gridrows = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(2, 12);
  var minFeatureSize = 1;
  var maxFeatureSize = Math.ceil(gridcolumns * 0.75);
  var featuresize = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(minFeatureSize, maxFeatureSize);
  var minFeaturePosition = 1;
  var maxFeaturePosition = gridcolumns - featuresize + 1;
  var featureposition = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(minFeaturePosition, maxFeaturePosition);
  var minColumnsFragmentation = 0;
  var maxColumnsFragmentation = Math.max(0, Math.pow(2, gridcolumns - featuresize - 1) - 1);
  var fragmentation = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(minColumnsFragmentation, maxColumnsFragmentation);
  var imageweightleft = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(0, 10);
  var imageweightright = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(0, 10);
  var metadetailsleft = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(0, 10);
  var metadetailsright = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(0, 10);
  var boostfeature = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBooleanValue"])();
  var subfeature = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBooleanValue"])();
  var balancemdandiw = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBooleanValue"])();
  var hierarchycrossing = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(0, 200);
  var flipcolsrows = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBooleanValue"])();
  return {
    layoutStyle: 'parametric',
    postsToShow: postsToShow,
    automaticPostsNumber: true,
    gridcolumns: gridcolumns,
    gridrows: gridrows,
    featuresize: featuresize,
    featureposition: featureposition,
    fragmentation: fragmentation,
    imageweightleft: imageweightleft,
    imageweightright: imageweightright,
    metadetailsleft: metadetailsleft,
    metadetailsright: metadetailsright,
    boostfeature: boostfeature,
    subfeature: subfeature,
    balancemdandiw: balancemdandiw,
    hierarchycrossing: hierarchycrossing,
    flipcolsrows: flipcolsrows,
    headerPosition: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomBetween"])(0, 1)
  };
};

var LayoutControls = function LayoutControls(props) {
  var layoutStyle = props.attributes.layoutStyle,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Grid Layout'),
    priority: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('General')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["PresetControl"], {
    key: 'novablocks-collection-layout-preset',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Choose a layout preset:', '__plugin_txtd'),
    options: [{
      label: 'L27: Brancusi',
      value: 'tear2down7',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 6,
        gridcolumns: 6,
        gridrows: 6,
        featuresize: 4,
        featureposition: 1,
        fragmentation: 1,
        imageweightleft: 1,
        imageweightright: 2,
        metadetailsleft: 10,
        metadetailsright: 6,
        boostfeature: false,
        subfeature: true,
        balancemdandiw: false,
        hierarchycrossing: 30,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L47: Kafka',
      value: 'tear4down7',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 6,
        gridcolumns: 12,
        gridrows: 8,
        featuresize: 7,
        featureposition: 3,
        fragmentation: 0,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 0,
        metadetailsright: 10,
        boostfeature: true,
        subfeature: true,
        balancemdandiw: false,
        hierarchycrossing: 153,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L13: Aristotle',
      value: 'tear1down3',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 6,
        gridcolumns: 5,
        gridrows: 4,
        featuresize: 2,
        featureposition: 2,
        fragmentation: 0,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 6,
        metadetailsright: 3,
        boostfeature: false,
        subfeature: false,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L19: Nietzsche',
      value: 'tear1down9',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 11,
        gridcolumns: 6,
        gridrows: 5,
        featuresize: 3,
        featureposition: 2,
        fragmentation: 2,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 0,
        metadetailsright: 0,
        boostfeature: false,
        subfeature: true,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L23: Popper',
      value: 'tear1down9bis',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 11,
        gridcolumns: 7,
        gridrows: 5,
        featuresize: 3,
        featureposition: 3,
        fragmentation: 2,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 0,
        metadetailsright: 0,
        boostfeature: false,
        subfeature: true,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        containerHeight: 45,
        headerPosition: 0
      }
    }, {
      label: 'L10: Tolstoy',
      value: 'tear1down0',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 10,
        gridcolumns: 10,
        gridrows: 6,
        featuresize: 3,
        featureposition: 6,
        fragmentation: 0,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 0,
        metadetailsright: 0,
        boostfeature: false,
        subfeature: false,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L15: Asimov',
      value: 'tear1down5',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 7,
        gridcolumns: 6,
        gridrows: 6,
        featuresize: 2,
        featureposition: 4,
        fragmentation: 0,
        imageweightleft: 8,
        imageweightright: 2,
        metadetailsleft: 7,
        metadetailsright: 2,
        boostfeature: false,
        subfeature: false,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L45: Orwell',
      value: 'tear4down5',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 13,
        gridcolumns: 8,
        gridrows: 6,
        featuresize: 4,
        featureposition: 1,
        fragmentation: 2,
        imageweightleft: 8,
        imageweightright: 8,
        metadetailsleft: 7,
        metadetailsright: 2,
        boostfeature: false,
        subfeature: false,
        balancemdandiw: false,
        hierarchycrossing: 120,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L12: Dostoevsky',
      value: 'tear1down2',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 7,
        gridcolumns: 6,
        gridrows: 4,
        featuresize: 3,
        featureposition: 1,
        fragmentation: 2,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 7,
        metadetailsright: 0,
        boostfeature: false,
        subfeature: false,
        balancemdandiw: false,
        hierarchycrossing: 50,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L32: Eliade',
      status: 'development',
      value: 'tear3down2',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 8,
        gridcolumns: 4,
        gridrows: 8,
        featuresize: 2,
        featureposition: 2,
        fragmentation: 0,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 0,
        metadetailsright: 3,
        boostfeature: false,
        subfeature: true,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L30: Tolkien',
      value: 'tear3down0',
      preset: {
        layoutStyle: 'parametric',
        postsToShow: 5,
        gridcolumns: 4,
        gridrows: 8,
        featuresize: 2,
        featureposition: 2,
        fragmentation: 0,
        imageweightleft: 1,
        imageweightright: 0,
        metadetailsleft: 0,
        metadetailsright: 3,
        boostfeature: false,
        subfeature: true,
        balancemdandiw: false,
        hierarchycrossing: 0,
        flipcolsrows: false,
        headerPosition: 0
      }
    }, {
      label: 'L03: Dumas',
      value: 'tear0down3',
      preset: {
        layoutStyle: 'classic',
        postsToShow: 6,
        columns: 3
      }
    }],
    randomize: getRandomAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Grid Anatomy')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RadioControl"], {
    key: 'novablocks-collection-layout-style-controls',
    selected: layoutStyle,
    className: 'novablocks-collection-layout',
    onChange: function onChange(layoutStyle) {
      setAttributes({
        layoutStyle: layoutStyle
      });
    },
    options: [{
      label: 'Parametric Grid',
      value: 'parametric'
    }, {
      label: 'Classic Grid',
      value: 'classic'
    }]
  })), layoutStyle === 'classic' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ClassicLayoutControls, props), layoutStyle === 'parametric' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ParametricLayoutControls, props)));
};

var ClassicLayoutControls = function ClassicLayoutControls(props) {
  var _props$attributes = props.attributes,
      columns = _props$attributes.columns,
      isLandscape = _props$attributes.isLandscape,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Cards Count')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PostsCountControl, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    key: 'posts-collection-display-controls',
    value: columns,
    onChange: function onChange(columns) {
      return setAttributes({
        columns: columns
      });
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Columns'),
    min: 1,
    max: 4
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Card Layout')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RadioControl"], {
    key: 'novablocks-card-layout-controls',
    selected: isLandscape ? 'landscape' : 'portrait',
    className: 'novablocks-card-layout',
    onChange: function onChange(value) {
      setAttributes({
        isLandscape: value === 'landscape'
      });
    },
    options: [{
      label: 'Vertical',
      value: 'portrait'
    }, {
      label: 'Horizontal',
      value: 'landscape'
    }]
  })));
};

var PostsCountControl = function PostsCountControl(props) {
  var postsToShow = props.attributes.postsToShow,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Number of Items", '__plugin_txtd'),
    value: postsToShow,
    onChange: function onChange(postsToShow) {
      setAttributes({
        postsToShow: postsToShow,
        tempPostsToShow: postsToShow,
        automaticPostsNumber: false
      });
    },
    min: 1,
    max: 20
  });
};

var getAttributesByHeaderColumn = function getAttributesByHeaderColumn(attributes) {
  var headerColumn = attributes.headerColumn;
  var areaColumns = Object(_layoutEngine__WEBPACK_IMPORTED_MODULE_6__["applyLayoutEngine"])(attributes);
  var headerOptimalPositions = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getOptimalHeaderPosition"])(areaColumns);
  return _objectSpread(_objectSpread({}, attributes), {}, {
    headerPosition: headerOptimalPositions[headerColumn]
  });
};

var ParametricLayoutControls = function ParametricLayoutControls(props) {
  var attributes = props.attributes;
  var featuresize = attributes.featuresize,
      featureposition = attributes.featureposition,
      fragmentation = attributes.fragmentation,
      gridcolumns = attributes.gridcolumns,
      gridrows = attributes.gridrows,
      imageweightleft = attributes.imageweightleft,
      imageweightright = attributes.imageweightright,
      metadetailsleft = attributes.metadetailsleft,
      metadetailsright = attributes.metadetailsright,
      boostfeature = attributes.boostfeature,
      subfeature = attributes.subfeature,
      balancemdandiw = attributes.balancemdandiw,
      hierarchycrossing = attributes.hierarchycrossing,
      flipcolsrows = attributes.flipcolsrows,
      automaticPostsNumber = attributes.automaticPostsNumber,
      postsToShow = attributes.postsToShow,
      headerPosition = attributes.headerPosition,
      headerColumn = attributes.headerColumn,
      showCollectionTitle = attributes.showCollectionTitle,
      showCollectionSubtitle = attributes.showCollectionSubtitle; // used to store previous values of postsToShow

  var tempPostsToShow = attributes.tempPostsToShow || postsToShow;

  var setAttributes = function setAttributes(newAttributes) {
    var normalizedAttributes = normalizeAttributes(newAttributes, attributes);
    props.setAttributes(normalizedAttributes);
  };

  var areaColumns = Object(_layoutEngine__WEBPACK_IMPORTED_MODULE_6__["applyLayoutEngine"])(attributes);
  var autoPostsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getPostsCount"])(areaColumns);
  var headerOptimalPositions = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getOptimalHeaderPosition"])(areaColumns);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DebugControls, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Grid Anatomy')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Columns", '__plugin_txtd'),
    value: gridcolumns,
    onChange: function onChange(gridcolumns) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(gridcolumns)) {
        setAttributes({
          gridcolumns: gridcolumns
        });
      }
    },
    min: 1,
    max: 12
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Rows", '__plugin_txtd'),
    value: gridrows,
    onChange: function onChange(gridrows) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(gridrows)) {
        setAttributes({
          gridrows: gridrows
        });
      }
    },
    min: 1,
    max: 12
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Breaking the Grid')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Featured Area Size", '__plugin_txtd'),
    value: featuresize,
    onChange: function onChange(featuresize) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(featuresize)) {
        setAttributes({
          featuresize: featuresize
        });
      }
    },
    min: getMinFeatureSize(attributes),
    max: getMaxFeatureSize(attributes)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Featured Area Position", '__plugin_txtd'),
    value: featureposition,
    onChange: function onChange(featureposition) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(featureposition)) {
        setAttributes({
          featureposition: featureposition
        });
      }
    },
    min: getMinFeaturePosition(attributes),
    max: getMaxFeaturePosition(attributes)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Grid Areas Fragmentation", '__plugin_txtd'),
    value: fragmentation,
    onChange: function onChange(fragmentation) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(fragmentation)) {
        setAttributes({
          fragmentation: fragmentation
        });
      }
    },
    min: getMinColumnsFragmentation(attributes),
    max: getMaxColumnsFragmentation(attributes)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Grid Areas Crossing", '__plugin_txtd'),
    value: hierarchycrossing,
    onChange: function onChange(hierarchycrossing) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(hierarchycrossing)) {
        setAttributes({
          hierarchycrossing: hierarchycrossing
        });
      }
    },
    min: 0,
    max: 200
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Items Count')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsClasses"])(attributes, function (_ref) {
      var automaticPostsNumber = _ref.automaticPostsNumber,
          postsToShow = _ref.postsToShow;
      return {
        postsToShow: automaticPostsNumber ? -1 : postsToShow
      };
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PostsCountControl, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Auto-count Items Number', '__plugin_txtd'),
    checked: automaticPostsNumber,
    onChange: function onChange(automaticPostsNumber) {
      setAttributes({
        postsToShow: automaticPostsNumber ? autoPostsCount : tempPostsToShow,
        tempPostsToShow: postsToShow,
        automaticPostsNumber: automaticPostsNumber
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Items Regularity')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Start of Image Variance", '__plugin_txtd'),
    value: imageweightleft,
    onChange: function onChange(imageweightleft) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(imageweightleft)) {
        setAttributes({
          imageweightleft: imageweightleft
        });
      }
    },
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("End of Image Variance", '__plugin_txtd'),
    value: imageweightright,
    onChange: function onChange(imageweightright) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(imageweightright)) {
        setAttributes({
          imageweightright: imageweightright
        });
      }
    },
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Start of Meta Fidelity", '__plugin_txtd'),
    value: metadetailsleft,
    onChange: function onChange(metadetailsleft) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(metadetailsleft)) {
        setAttributes({
          metadetailsleft: metadetailsleft
        });
      }
    },
    min: 0,
    max: 10
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("End of Meta Fidelity", '__plugin_txtd'),
    value: metadetailsright,
    onChange: function onChange(metadetailsright) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(metadetailsright)) {
        setAttributes({
          metadetailsright: metadetailsright
        });
      }
    },
    min: 0,
    max: 10
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Miscellanous Parameters')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Boost Featured Area Emphasis', '__plugin_txtd'),
    checked: boostfeature,
    onChange: function onChange() {
      setAttributes({
        boostfeature: !boostfeature
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Display Sub-featured Area', '__plugin_txtd'),
    checked: subfeature,
    onChange: function onChange() {
      setAttributes({
        subfeature: !subfeature
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Balance Meta and Image', '__plugin_txtd'),
    checked: balancemdandiw,
    onChange: function onChange() {
      setAttributes({
        balancemdandiw: !balancemdandiw
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Flip Cols and Rows', '__plugin_txtd'),
    checked: flipcolsrows,
    onChange: function onChange() {
      setAttributes({
        flipcolsrows: !flipcolsrows
      });
    }
  })), (showCollectionTitle || showCollectionSubtitle) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Block Header')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])("Header Placement Area", '__plugin_txtd'),
    value: headerPosition,
    onChange: function onChange(headerPosition) {
      setAttributes({
        headerPosition: headerPosition
      });
    },
    min: 0,
    max: postsToShow + 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    key: 'header-position-customize-1',
    className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["getControlsClasses"])(attributes, getAttributesByHeaderColumn)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
    value: headerColumn,
    onChange: function onChange(headerColumn) {
      var newAttributes = getAttributesByHeaderColumn(_objectSpread(_objectSpread({}, attributes), {}, {
        headerColumn: headerColumn
      }));
      setAttributes(newAttributes);
    },
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Header Item Location'),
    min: 0,
    max: headerOptimalPositions.length - 1
  }))));
};

var DebugControls = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_4__["withSettings"])(function (props) {
  var _props$attributes2 = props.attributes,
      toggleScale = _props$attributes2.toggleScale,
      toggleMask = _props$attributes2.toggleMask,
      setAttributes = props.setAttributes,
      settings = props.settings;

  if (!(settings === null || settings === void 0 ? void 0 : settings.debug)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["ControlsGroup"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Debug Parameters')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Display Preview Scale', '__plugin_txtd'),
    checked: toggleScale,
    onChange: function onChange() {
      return setAttributes({
        toggleScale: !toggleScale
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Display Preview Mask', '__plugin_txtd'),
    checked: toggleMask,
    onChange: function onChange() {
      return setAttributes({
        toggleMask: !toggleMask
      });
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (LayoutControls);


/***/ }),

/***/ "./packages/components/build-module/grid-generator/index.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/grid-generator/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./packages/components/build-module/grid-generator/preview.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/components/build-module/grid-generator/utils.js");
/* harmony import */ var _layoutEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layoutEngine */ "./packages/components/build-module/grid-generator/layoutEngine.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./packages/components/build-module/grid-generator/controls.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var GridGenerator = {
  Controls: _controls__WEBPACK_IMPORTED_MODULE_4__["default"],
  ClassicLayoutPreview: _preview__WEBPACK_IMPORTED_MODULE_1__["ClassicLayoutPreview"],
  ParametricLayoutPreview: _preview__WEBPACK_IMPORTED_MODULE_1__["ParametricLayoutPreview"],
  utils: _objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_2__), {}, {
    applyLayoutEngine: _layoutEngine__WEBPACK_IMPORTED_MODULE_3__["applyLayoutEngine"]
  })
};
/* harmony default export */ __webpack_exports__["default"] = (GridGenerator);


/***/ }),

/***/ "./packages/components/build-module/grid-generator/layoutEngine.js":
/*!*************************************************************************!*\
  !*** ./packages/components/build-module/grid-generator/layoutEngine.js ***!
  \*************************************************************************/
/*! exports provided: applyLayoutEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyLayoutEngine", function() { return applyLayoutEngine; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./packages/components/build-module/grid-generator/utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // This is the main workhorse containing the logic of our layout "engine".
// Given a state, it will return a list of posts with details to handle their layout.

var applyLayoutEngine = function applyLayoutEngine(state) {
  var debug = false; // Before we can get to generating the "grid areas" for each post (meaning start col and row plus end col and ro),
  // we need to do a couple of preliminary calculations.
  // To hold the data, we will work with matrices, uni or bidimensional, representing the actual columns and rows.
  // This way we gain an easier understanding of what is going on at each step of the logic.
  // In each matrix we will ignore index 0 since it is easier to start from 1,
  // the same way CSS grid columns and rows behave.
  // The order of these operation is important!

  debug ? console.log("\nGenerating a new layout...\n\n") : false; // The "null" character:

  var emptyChar = "X"; // These are the matrices we are going to calculate:
  // The nth matrix: a bidimensional matrix the same size as the grid, holding in each cell what nth post should that cell belong to.
  // From this matrix we can extrapolate many details since the same nth value will be used to fill all the cells belonging to a post.
  // So we know the position and dimensions.

  var nthMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // The image weight matrix

  var imageWeightMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // The meta-details matrix

  var metaDetailsMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // Helper matrices.
  // The columns width matrix

  var widthMatrix = initUnidimensionalMatrix([], state.gridcolumns, emptyChar); // The vertical fragment size matrix

  var verticalFragmentSizeMatrix = initUnidimensionalMatrix([], state.gridcolumns, emptyChar);
  var i, j; // Lets start PRELIMINARY CALCULATIONS!

  /*
  1. Calculate the columns width matrix.
     We will take into account the feature position, feature size and fragmentation value.
     The fragmentation value is interpreted in it's bit format, where 1 means a "cut".
     The fragmentation value represents the fragmentation of the remaining gridcolumns after the feature size was deducted.
   */

  var widthIdx = 1; // First, mark the feature.

  for (i = state.featureposition; i < state.featureposition + state.featuresize; i++) {
    widthMatrix[i] = widthIdx;
  } // Next, go from left to right in the columns width matrix, and fill each columns with the same unique number,
  // Taking into account the fragmentation.
  // And remember the positions we are int the virtual matrix without the feature.


  var frgIdx = 0;
  widthIdx++;

  for (i = 1; i <= state.gridcolumns; i++) {
    if (widthMatrix[i] === emptyChar) {
      frgIdx++; // If the previous position has a different number than the current one, it is clear we should increment and write.

      if (widthMatrix[i - 1] !== widthIdx) {
        widthIdx++;
      } else {
        // If the previous position has the same value as the current one, we need to determine
        // if the fragmentation bit pattern imposes a "cut".
        var cutMarker = 1 << state.gridcolumns - state.featuresize - frgIdx; // If there is a 1 at this position, make a cut aka increase the number.

        if ((cutMarker & state.fragmentation) === cutMarker) {
          widthIdx++;
        }
      }

      widthMatrix[i] = widthIdx;
    }
  }

  debug ? console.log("The width matrix: ".padEnd(45, ' ') + widthMatrix) : false;
  /*
  2. Calculate the image weight matrix.
     We will spread the image weight range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
    */

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var end = i;

    while (widthMatrix[end + 1] === widthMatrix[i]) {
      end++;
    } // Now calculate.


    if (i === 1) {
      imageWeightMatrix[1][i] = state.imageweightleft;
    } else if (end === state.gridcolumns) {
      imageWeightMatrix[1][i] = state.imageweightright;
    } else {
      imageWeightMatrix[1][i] = Math.round(state.imageweightleft - (state.imageweightleft - state.imageweightright) * (i + end - 1) / (2 * state.gridcolumns));
    } // Fill the entire column with the same meta-details value.


    for (j = i; j <= end; j++) {
      imageWeightMatrix[1][j] = imageWeightMatrix[1][i];
    }

    i = end;
  } // Copy the first row to all of the rest.


  for (i = 2; i <= state.gridrows; i++) {
    imageWeightMatrix[i] = imageWeightMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log("The image weight matrix: ".padEnd(45, ' ') + imageWeightMatrix[1]) : false;
  /*
  3. Calculate the meta-details matrix.
     We will spread the meta-details range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
   */

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var _end = i;

    while (widthMatrix[_end + 1] === widthMatrix[i]) {
      _end++;
    } // Now calculate.


    if (i === 1) {
      metaDetailsMatrix[1][i] = state.metadetailsleft;
    } else if (_end === state.gridcolumns) {
      metaDetailsMatrix[1][i] = state.metadetailsright;
    } else {
      metaDetailsMatrix[1][i] = state.metadetailsleft - (state.metadetailsleft - state.metadetailsright) * (i + _end - 1) / (2 * state.gridcolumns); // If we are instructed to balance MD with IW, we will multiply the MD value with the "distance" of the IW value from the "center" of the IW range.

      if (state.balancemdandiw && 0 !== state.imageweightleft - state.imageweightright) {
        metaDetailsMatrix[1][i] = metaDetailsMatrix[1][i] * (Math.abs(state.imageweightleft - state.imageweightright) / 2 / imageWeightMatrix[1][i]);
      }

      metaDetailsMatrix[1][i] = Math.round(metaDetailsMatrix[1][i]);
    } // Fill the entire column with the same meta-details value.


    for (j = i; j <= _end; j++) {
      metaDetailsMatrix[1][j] = metaDetailsMatrix[1][i];
    }

    i = _end;
  } // Copy the first row to all of the rest.


  for (i = 2; i <= state.gridrows; i++) {
    metaDetailsMatrix[i] = metaDetailsMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log("The meta-details matrix: ".padEnd(45, ' ') + metaDetailsMatrix[1]) : false;
  /*
  4. Handle the boost feature emphasis.
     We will assign the maximum meta-details and image weight value to the feature, and assign its current value to the column holding the maximum values.
  */

  if (state.boostfeature && state.featuresize > 0) {
    // Find column with maximum meta-details value, if the feature isn't already at the max.
    var maxMetaDetailsPos = 1,
        maxImageWeightPos = 1;

    for (i = 1; i <= state.gridcolumns; i++) {
      if (metaDetailsMatrix[1][i] > metaDetailsMatrix[1][maxMetaDetailsPos]) {
        maxMetaDetailsPos = i;
      }

      if (imageWeightMatrix[1][i] > imageWeightMatrix[1][maxImageWeightPos]) {
        maxImageWeightPos = i;
      }
    }

    if (maxMetaDetailsPos !== state.featureposition) {
      // We have something to switch.
      var featureValue = metaDetailsMatrix[1][state.featureposition];
      var maxValue = metaDetailsMatrix[1][maxMetaDetailsPos]; // Go and fill each column with the switched values.

      i = maxMetaDetailsPos;

      while (widthMatrix[i] === widthMatrix[maxMetaDetailsPos]) {
        metaDetailsMatrix[1][i] = featureValue;
        i++;
      }

      i = state.featureposition;

      while (widthMatrix[i] === widthMatrix[state.featureposition]) {
        metaDetailsMatrix[1][i] = maxValue;
        i++;
      } // Copy the first row to all of the rest.


      for (i = 2; i <= state.gridrows; i++) {
        metaDetailsMatrix[i] = metaDetailsMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log("The boosted feature meta-details matrix: ".padEnd(45, ' ') + metaDetailsMatrix[1]) : false;
    }

    if (maxImageWeightPos !== state.featureposition) {
      // We have something to switch.
      var _featureValue = imageWeightMatrix[1][state.featureposition];
      var _maxValue = imageWeightMatrix[1][maxImageWeightPos]; // Go and fill each column with the switched values.

      i = maxImageWeightPos;

      while (widthMatrix[i] === widthMatrix[maxImageWeightPos]) {
        imageWeightMatrix[1][i] = _featureValue;
        i++;
      }

      i = state.featureposition;

      while (widthMatrix[i] === widthMatrix[state.featureposition]) {
        imageWeightMatrix[1][i] = _maxValue;
        i++;
      } // Copy the first row to all of the rest.


      for (i = 2; i <= state.gridrows; i++) {
        imageWeightMatrix[i] = imageWeightMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log("The boosted feature image weight matrix: ".padEnd(45, ' ') + imageWeightMatrix[1]) : false;
    }
  }
  /*
  5. Determine the vertical fragment size matrix.
     The fragment size will range in the number of grid rows and 1.
  */
  // First determine the max meta-details and image weight value.


  var maxMetaDetailsValue = metaDetailsMatrix[1][1],
      maxImageWeightValue = imageWeightMatrix[1][1];

  for (i = 1; i <= state.gridcolumns; i++) {
    if (metaDetailsMatrix[1][i] > maxMetaDetailsValue) {
      maxMetaDetailsValue = metaDetailsMatrix[1][i];
    }

    if (imageWeightMatrix[1][i] > maxImageWeightValue) {
      maxImageWeightValue = imageWeightMatrix[1][i];
    }
  } // For the purpose of these calculations, maxMetaDetailsValue and maxImageWeightValue can't be zero.


  if (maxImageWeightValue < 1) {
    maxImageWeightValue = 1;
  }

  if (maxMetaDetailsValue < 1) {
    maxMetaDetailsValue = 1;
  }

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var _end2 = i;

    while (widthMatrix[_end2 + 1] === widthMatrix[i]) {
      _end2++;
    } // Now calculate.


    verticalFragmentSizeMatrix[i] = Math.round((metaDetailsMatrix[1][i] / maxMetaDetailsValue + imageWeightMatrix[1][i] / maxImageWeightValue) / 2 * state.gridrows); // The vertical fragment size can't be more than 3 times the column width (a really tall post).

    if (verticalFragmentSizeMatrix[i] > (_end2 - i + 1) * 3) {
      verticalFragmentSizeMatrix[i] = (_end2 - i + 1) * 3;
    } // Also the vertical fragment size can't be less than 1.


    if (verticalFragmentSizeMatrix[i] < 1) {
      verticalFragmentSizeMatrix[i] = 1;
    } // If the sub feature option is active, and we have a single column for the feature, reduce the vertical fragmentation with 25%.


    if (state.subfeature && i === state.featureposition && state.featuresize > 0 && verticalFragmentSizeMatrix[i] === state.gridrows) {
      verticalFragmentSizeMatrix[i] = Math.floor(verticalFragmentSizeMatrix[i] * 0.75);
    } // Safety measures.


    if (verticalFragmentSizeMatrix[i] < 1) {
      verticalFragmentSizeMatrix[i] = 1;
    } else if (verticalFragmentSizeMatrix[i] > state.gridrows) {
      verticalFragmentSizeMatrix[i] = state.gridrows;
    } // Fill the entire column with the same fragment size.


    for (j = i; j <= _end2; j++) {
      verticalFragmentSizeMatrix[j] = verticalFragmentSizeMatrix[i];
    }

    i = _end2;
  }

  debug ? console.log("The vertical fragment size matrix: ".padEnd(45, ' ') + verticalFragmentSizeMatrix) : false;
  /*
  6. Determine the nth bidimensional matrix.
     Each grid cell will be filled with the nth post that cell belongs to. From this matrix we can determine the post grid coordinates,
     its aspect ratio, area, etc.
  */
  // We start with the first post in the list.

  var currentNth = 1; // Start with the feature column.

  if (state.featuresize > 0) {
    i = 1;

    while (i <= verticalFragmentSizeMatrix[state.featureposition]) {
      j = state.featureposition;

      do {
        nthMatrix[i][j] = currentNth;
        j++;
      } while (widthMatrix[state.featureposition] === widthMatrix[j]);

      i++;
    }

    currentNth++;

    if (i <= state.gridrows) {
      // We have room under the feature for a secondary feature post.
      // We will reduce the meta-details and image weight by 33% that of the main feature post.
      while (i <= state.gridrows) {
        j = state.featureposition;

        do {
          nthMatrix[i][j] = currentNth; // Adjust the meta-details and image weight.

          metaDetailsMatrix[i][j] = Math.round(metaDetailsMatrix[i][j] * 0.66);
          imageWeightMatrix[i][j] = Math.round(imageWeightMatrix[i][j] * 0.66);
          j++;
        } while (widthMatrix[state.featureposition] === widthMatrix[j]);

        i++;
      }

      currentNth++;
    }
  } // Now start from the left top corner and go through each column, left to right.


  var currentColumnStartCol = 1;
  var currentPostStartRow;

  while (currentColumnStartCol <= state.gridcolumns) {
    if (nthMatrix[1][currentColumnStartCol] !== emptyChar) {
      currentColumnStartCol++;
      continue;
    } // Fill the current column with posts.


    currentPostStartRow = 1;

    while (currentPostStartRow <= state.gridrows) {
      i = currentPostStartRow;

      while (i <= currentPostStartRow + verticalFragmentSizeMatrix[currentColumnStartCol] - 1 && i <= state.gridrows) {
        j = currentColumnStartCol;

        do {
          nthMatrix[i][j] = currentNth;
          j++;
        } while (widthMatrix[currentColumnStartCol] === widthMatrix[j]);

        i++;
      }

      currentNth++;
      currentPostStartRow = i;
    }
  }

  if (debug) {
    console.log("\nThe nth matrix: ".padEnd(42, ' ') + '0 - ' + nthMatrix[0].join(' '));

    for (i = 1; i < nthMatrix.length; i++) {
      console.log(' '.padEnd(41, ' ') + i + ' - ' + nthMatrix[i].join(' '));
    }
  }
  /*
  7. Handle the hierarchy crossing.
     We will not cross into the feature post. We will only cross left to right, only "over" a post with a lower nth count.
     We will only cross if the left post matches in height a post or more on the right.
     The rate of consumption is related to the nth, area, IW and MD of the post being expanded and the post(s) being replaced.
     Also, crossing at the top of the layout is more expensive than crossing at a lower row.
  */
  // We start with the first post in the list.


  var maxNth = currentNth;
  var hierachyCrossingStrenth = state.hierarchycrossing;
  currentNth = 1;

  while (hierachyCrossingStrenth > 0 && currentNth <= maxNth) {
    var currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (false === currentPostDetails) {
      currentNth++;
      continue;
    } // If the current post is all the way to the right edge, stop.


    if (currentPostDetails.endGridColumn === state.gridcolumns) {
      break;
    } // Now identify its right-side neighbors.


    var topNeighborPostDetails = getNthPostDetails(nthMatrix[currentPostDetails.startGridRow][currentPostDetails.endGridColumn + 1], nthMatrix, metaDetailsMatrix, imageWeightMatrix);
    var bottomNeighborPostDetails = getNthPostDetails(nthMatrix[currentPostDetails.endGridRow][currentPostDetails.endGridColumn + 1], nthMatrix, metaDetailsMatrix, imageWeightMatrix); // If the neighbors don't match the height in rows of the current post, skip this post from crossing.

    if (topNeighborPostDetails.startGridRow !== currentPostDetails.startGridRow || bottomNeighborPostDetails.endGridRow !== currentPostDetails.endGridRow) {
      currentNth++;
      continue;
    } // Calculate the score of the to-be replaced post(s).
    // Each post's score correlated to its nth value. The lower the nth value the bigger the score boost.


    var replacedPostScore = maxNth / topNeighborPostDetails.nth * (topNeighborPostDetails.area + topNeighborPostDetails.imageWeight + topNeighborPostDetails.metaDetails);

    if (bottomNeighborPostDetails.nth !== topNeighborPostDetails.nth) {
      var counter = 1;

      for (i = topNeighborPostDetails.nth + 1; i <= bottomNeighborPostDetails.nth; i++) {
        var postDetails = getNthPostDetails(i, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

        if (false === postDetails) {
          continue;
        }

        counter++; // It is increasingly "harder" to replace multiple posts.

        replacedPostScore += maxNth / postDetails.nth * (postDetails.area + postDetails.imageWeight + postDetails.metaDetails * counter) * counter;
      }
    } // If the to-be replaced post(s) score is larger than the remaining hierarchy crossing strength, nothing to do.


    if (hierachyCrossingStrenth < replacedPostScore) {
      currentNth++;
      continue;
    }

    var currentPostScore = maxNth / currentPostDetails.nth * (currentPostDetails.area + currentPostDetails.imageWeight + currentPostDetails.metaDetails) * Math.pow(2 * hierachyCrossingStrenth / 50, 3); // If the current post score is bigger than the to-be replaced post(s) score, it's a go.

    if (currentPostScore > replacedPostScore) {
      // Expand the current post over the replaced ones.
      for (i = topNeighborPostDetails.startGridRow; i <= bottomNeighborPostDetails.endGridRow; i++) {
        for (j = topNeighborPostDetails.startGridColumn; j <= topNeighborPostDetails.endGridColumn; j++) {
          nthMatrix[i][j] = currentNth; // Also replace the image weight and meta-details.

          imageWeightMatrix[i][j] = currentPostDetails.imageWeight;
          metaDetailsMatrix[i][j] = currentPostDetails.metaDetails;
        }
      } // Decrease the crossing strength.


      hierachyCrossingStrenth -= replacedPostScore; // We now have a gap in the post list. We need to renumber the posts after the replaced ones and adjust the maxnth.
      // The image weight and meta-details remain unchanged.
      // Work with the new maxNth.

      maxNth = renumberNthMatrix(nthMatrix);
    }

    currentNth++;
  } // Transpose all matrices if flipcolssrows attribute is set to true


  var finalNthMatrix = !state.flipcolsrows ? nthMatrix : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["transposeMatrix"])(nthMatrix);
  var finalMetaMatrix = !state.flipcolsrows ? metaDetailsMatrix : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["transposeMatrix"])(metaDetailsMatrix);
  var finalImageMatrix = !state.flipcolsrows ? imageWeightMatrix : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["transposeMatrix"])(imageWeightMatrix);
  /*
  8. Finally, generate the posts list.
  */

  var areaColumns = getGroupedPostAreas(state, finalNthMatrix, finalMetaMatrix, finalImageMatrix);
  ;
  moveLargestColumnToStart(areaColumns);
  return areaColumns;
};

var moveLargestColumnToStart = function moveLargestColumnToStart(areaColumns) {
  var firstRowColumns = areaColumns.filter(function (column) {
    return column.row === 1;
  }).sort(function (col1, col2) {
    return col2.width - col1.width;
  });
  var largestColumnIndex = areaColumns.findIndex(function (column) {
    return column === firstRowColumns[0];
  });
  areaColumns.splice(0, 0, areaColumns.splice(largestColumnIndex, 1)[0]);
  return areaColumns;
};

var logMatrix = function logMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    console.log(' '.padEnd(41, ' ') + i + ' - ' + matrix[i].join(' '));
  }
};

function getGroupedPostAreas(state, nthMatrix, metaDetailsMatrix, imageWeightMatrix) {
  var areasArray = getAreasArray(nthMatrix, metaDetailsMatrix, imageWeightMatrix);
  mergeSimilarAreas(nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state);
  areasArray = normalizeAreas(nthMatrix, areasArray);
  areasArray = areasArray.map(function (area) {
    return _objectSpread({
      initialPostsCount: area.postsCount
    }, area);
  });
  var columns = areasArray.map(function (area) {
    return {
      row: area.row,
      col: area.col,
      width: area.width,
      height: area.height,
      areas: [area]
    };
  }); // loop through columns

  columns.forEach(function (currentColumn) {
    // loop through "current" column's areas
    currentColumn.areas.forEach(function (currentArea, i) {
      // loop again through columns except the current column
      columns.filter(function (column) {
        return column !== currentColumn;
      }).forEach(function (compareColumn) {
        // loop through the "compare" column's areas
        compareColumn.areas.forEach(function (compareArea, j) {
          // check if the areas have the same column and the same width
          if (!compareArea.merged && currentArea.col === compareArea.col && currentArea.width === compareArea.width && ( // and if the two areas are continuous
          currentArea.row + currentArea.height === compareArea.row || currentArea.row === compareArea.row + compareArea.height)) {
            // if so, move the compared area to the current column's areas array and update the column height
            compareArea.merged = true;
            currentColumn.areas.push(compareArea);
            currentColumn.height += compareArea.height;
            compareColumn.areas.splice(j, 1);
          }
        });
      });
    });
  });
  return columns.filter(function (randomColumn) {
    return randomColumn.areas.length > 0;
  });
}

function getNthValues(nthMatrix) {
  var values = [];
  var value;

  for (var i = 1; i < nthMatrix.length - 1; i++) {
    for (var j = 1; j < nthMatrix[i].length - 1; j++) {
      value = nthMatrix[i][j];

      if (values.indexOf(value) === -1) {
        values.push(value);
      }
    }
  }

  return values;
}

function normalizeAreas(nthMatrix, areasArray) {
  var values = getNthValues(nthMatrix);
  values.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < values.length; i++) {
    if (i + 1 !== values[i]) {
      replaceNth(values[i], i + 1, nthMatrix);
    }
  }

  return values.map(function (nth, index) {
    var area = areasArray.find(function (area) {
      return area.nth === nth;
    });
    area.nth = index + 1;
    return area;
  });
}

function replaceNth(nth1, nth2, nthMatrix) {
  for (var i = 1; i < nthMatrix.length - 1; i++) {
    for (var j = 1; j < nthMatrix[i].length - 1; j++) {
      if (nthMatrix[i][j] === nth1) {
        nthMatrix[i][j] = nth2;
      }
    }
  }
}

var mergeSimilarAreas = function mergeSimilarAreas(nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state) {
  var currentPostDetails;

  for (var currentNth = 1; currentNth <= getMaxNth(nthMatrix); currentNth++) {
    currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (currentPostDetails) {
      mergeAreaNeighbours(currentPostDetails.startGridRow, currentPostDetails.startGridColumn, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state);
    }
  }
};

var mergeAreaNeighbours = function mergeAreaNeighbours(row, col, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state) {
  var nth = nthMatrix[row][col];
  var width = getAreaWidth(nth, nthMatrix);
  var height = getAreaHeight(nth, nthMatrix);
  var initialWidth = width;
  var initialHeight = height;
  var currentAreaIndex = -1;

  if (Array.isArray(areasArray)) {
    currentAreaIndex = areasArray.findIndex(function (area) {
      return area.nth === nthMatrix[row][col];
    });
  } // Featured area should not be merged


  if (nth === 1) {
    return;
  }

  var nextRow,
      nextCol,
      nextWidth,
      nextHeight,
      nextNth,
      nextNthStart,
      searching = true,
      mergeable = false;

  while (searching) {
    nextNth = nthMatrix[row + height][col];
    nextNthStart = getFirstOccurence(nextNth, nthMatrix);
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;
    nextWidth = getAreaWidth(nextNth, nthMatrix);
    nextHeight = getAreaHeight(nextNth, nthMatrix);

    if (width === nextWidth && col === nextCol && Math.abs(initialHeight - nextHeight) <= 1 && Math.abs(metaDetailsMatrix[row][col] - metaDetailsMatrix[nextRow][col]) <= 1 && Math.abs(imageWeightMatrix[row][col] - imageWeightMatrix[nextRow][col]) <= 1) {
      height = height + nextHeight;
      mergeable = true;

      if (currentAreaIndex > -1) {
        areasArray[currentAreaIndex].postsCount += 1;
        areasArray[currentAreaIndex].height = height;
      }
    } else {
      searching = false;
    }
  }

  searching = !mergeable;

  while (searching && !state.flipcolsrows) {
    nextNth = nthMatrix[row][col + width];
    nextNthStart = getFirstOccurence(nextNth, nthMatrix);
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;
    nextWidth = getAreaWidth(nextNth, nthMatrix);
    nextHeight = getAreaHeight(nextNth, nthMatrix);

    if (height === nextHeight && row === nextRow && Math.abs(initialWidth - nextWidth) <= 1 && Math.abs(metaDetailsMatrix[row][col] - metaDetailsMatrix[row][nextCol]) <= 1 && Math.abs(imageWeightMatrix[row][col] - imageWeightMatrix[row][nextCol]) <= 1) {
      width = width + nextWidth;
      mergeable = true;

      if (currentAreaIndex > -1) {
        areasArray[currentAreaIndex].postsCount += 1;
        areasArray[currentAreaIndex].width = width;
      }
    } else {
      searching = false;
    }
  }

  fillArea(nthMatrix, row, col, width, height);
};

var fillArea = function fillArea(nthMatrix, row, col, width, height) {
  for (var i = row; i < row + height; i++) {
    for (var j = col; j < col + width; j++) {
      nthMatrix[i][j] = nthMatrix[row][col];
    }
  }
};

var getFirstOccurence = function getFirstOccurence(nth, nthMatrix) {
  for (var i = 0; i < nthMatrix.length; i++) {
    for (var j = 0; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] === nth) {
        return {
          row: i,
          col: j
        };
      }
    }
  }

  return {};
};

var getAreaWidth = function getAreaWidth(nth, nthMatrix) {
  var _getFirstOccurence = getFirstOccurence(nth, nthMatrix),
      row = _getFirstOccurence.row,
      col = _getFirstOccurence.col;

  var width = 1;

  while (nth === nthMatrix[row][col + width]) {
    width = width + 1;
  }

  return width;
};

var getAreaHeight = function getAreaHeight(nth, nthMatrix) {
  var _getFirstOccurence2 = getFirstOccurence(nth, nthMatrix),
      row = _getFirstOccurence2.row,
      col = _getFirstOccurence2.col;

  var height = 1;

  while ("undefined" !== typeof nthMatrix[row + height] && nth === nthMatrix[row + height][col]) {
    height = height + 1;
  }

  return height;
};

var renumberNthMatrix = function renumberNthMatrix(nthMatrix) {
  var newNth = 1;
  var postDetails;

  for (var nth = 1; nth <= getMaxNth(nthMatrix); nth++) {
    // If we can't find a nth post, it means it was removed and we need to adjust.
    postDetails = getNthPostDetails(nth, nthMatrix);

    if (false === postDetails) {
      continue;
    }

    if (postDetails.nth > newNth) {
      // Change the current post's nth.
      for (var i = postDetails.startGridRow; i <= postDetails.endGridRow; i++) {
        for (var j = postDetails.startGridColumn; j <= postDetails.endGridColumn; j++) {
          nthMatrix[i][j] = newNth;
        }
      }
    }

    newNth++;
  } // Return the maxNth.


  return newNth - 1;
};

var getMaxNth = function getMaxNth(nthMatrix) {
  var maxNth = 0;

  for (var i = 1; i < nthMatrix.length; i++) {
    for (var j = 1; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] > maxNth) {
        maxNth = nthMatrix[i][j];
      }
    }
  }

  return maxNth;
};

var getAreasArray = function getAreasArray(nthMatrix, metaDetailsMatrix, imageWeightMatrix) {
  var currentPostDetails;
  var areasArray = [];

  for (var currentNth = 1; currentNth <= getMaxNth(nthMatrix); currentNth++) {
    currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (currentPostDetails) {
      areasArray.push({
        nth: currentPostDetails.nth,
        col: currentPostDetails.startGridColumn,
        row: currentPostDetails.startGridRow,
        width: currentPostDetails.endGridColumn - currentPostDetails.startGridColumn + 1,
        height: currentPostDetails.endGridRow - currentPostDetails.startGridRow + 1,
        metaDetails: currentPostDetails.metaDetails,
        imageWeight: currentPostDetails.imageWeight,
        postsCount: 1
      });
    }
  }

  return areasArray;
};

var getNthPostDetails = function getNthPostDetails(nth, nthMatrix) {
  var metaDetailsMatrix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var imageWeightMatrix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var postDetails = false; // Go through the nthMatrix and search for the currentNth value.

  for (var i = 1; i < nthMatrix.length; i++) {
    for (var j = 1; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] === nth) {
        // Found the left top corner.
        postDetails = {
          'nth': nth,
          'startGridColumn': j,
          'startGridRow': i,
          'endGridColumn': j,
          'endGridRow': i,
          'metaDetails': metaDetailsMatrix ? metaDetailsMatrix[i][j] : false,
          'imageWeight': imageWeightMatrix ? imageWeightMatrix[i][j] : false,
          'area': 1
        }; // Find the right bottom corner.

        while (j < nthMatrix[i].length && nthMatrix[i][j] === nthMatrix[i][j + 1]) {
          j++;
        }

        postDetails.endGridColumn = j;

        while (i < nthMatrix.length && nthMatrix[i][j] === nthMatrix[i + 1][j]) {
          i++;
        }

        postDetails.endGridRow = i; // Calculate the area.

        postDetails.area = (postDetails.endGridRow - postDetails.startGridRow + 1) * (postDetails.endGridColumn - postDetails.startGridColumn + 1);
        return postDetails;
      }
    }
  }

  return postDetails;
};

var initUnidimensionalMatrix = function initUnidimensionalMatrix(matrix, length) {
  var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "X";
  // The 0 index will be filled with a different character for easier logic.
  matrix.push("/"); // Go to equal the length, since the 0 index will be ignored.
  // Fill with "null" entries with the provided character.

  for (var i = 1; i <= length; i++) {
    matrix.push(character);
  } // Put an extra entry for easier logic.


  matrix.push("/");
  return matrix;
};

var initBidimensionalMatrix = function initBidimensionalMatrix(matrix, width, height, nullChar) {
  // Put in a guard row, at index 0.
  matrix.push(initUnidimensionalMatrix([], width, "/")); // Go to equal the width, since the 0 index will be ignored.

  for (var i = 0; i < height; i++) {
    matrix.push(initUnidimensionalMatrix([], width, nullChar));
  } // Put in an extra guard row.


  matrix.push(initUnidimensionalMatrix([], width, "/"));
  return matrix;
};


/***/ }),

/***/ "./packages/components/build-module/grid-generator/preview.js":
/*!********************************************************************!*\
  !*** ./packages/components/build-module/grid-generator/preview.js ***!
  \********************************************************************/
/*! exports provided: ClassicLayoutPreview, ParametricLayoutPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicLayoutPreview", function() { return ClassicLayoutPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametricLayoutPreview", function() { return ParametricLayoutPreview; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _areaDebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areaDebug */ "./packages/components/build-module/grid-generator/areaDebug.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _layoutEngine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layoutEngine */ "./packages/components/build-module/grid-generator/layoutEngine.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/components/build-module/grid-generator/utils.js");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./packages/components/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ClassicLayoutPreview = function ClassicLayoutPreview(props) {
  var attributes = props.attributes,
      posts = props.posts;
  var columns = attributes.columns,
      isLandscape = attributes.isLandscape,
      showMedia = attributes.showMedia,
      showMeta = attributes.showMeta,
      showTitle = attributes.showTitle,
      showDescription = attributes.showDescription,
      showButtons = attributes.showButtons,
      postsToShow = attributes.postsToShow;
  var style = {
    '--columns': columns
  };
  var cardProps = {
    placeholder: true,
    hasFixedAspectRatio: true,
    isLandscape: isLandscape,
    showMedia: showMedia,
    showMeta: showMeta,
    showTitle: showTitle,
    showContent: showDescription,
    showButtons: showButtons
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["CollectionPreview"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    hasAppender: false
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "block-editor-inner-blocks"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "block-editor-block-list__layout",
    style: style
  }, !!posts && posts.map(function (post, idx) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["Post"], {
      key: idx,
      post: post,
      isLandscape: isLandscape,
      attributes: attributes
    });
  }), !posts && Array.from(Array(postsToShow).keys()).map(function (obj, idx) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["Card"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: idx
    }, cardProps));
  }))));
};
var ParametricLayoutPreview = function ParametricLayoutPreview(props) {
  var attributes = props.attributes,
      getContent = props.getContent,
      cardsCount = props.cardsCount;
  var toggleScale = attributes.toggleScale,
      toggleMask = attributes.toggleMask,
      thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      imagePadding = attributes.imagePadding,
      imageResizing = attributes.imageResizing,
      headerPosition = attributes.headerPosition;
  var classname = classnames__WEBPACK_IMPORTED_MODULE_8___default()("novablocks-grid", {
    'novablocks-grid--scaled': toggleScale,
    'novablocks-grid--mask': toggleMask
  });
  var areaColumns = Object(_layoutEngine__WEBPACK_IMPORTED_MODULE_5__["applyLayoutEngine"])(attributes);
  var addedCards = 0;
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["redistributeCardsInAreas"])(areaColumns, cardsCount, attributes);

  var style = _objectSpread({
    '--card-media-padding': imagePadding,
    '--card-media-padding-top': Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_7__["getCardMediaPaddingTop"])(thumbnailAspectRatio),
    '--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down'
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getGridStyle"])(attributes));

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, headerPosition === 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_4__["CollectionHeader"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-collection__cards block-editor-block-list__block"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "novablocks-collection__layout"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classname,
    style: style
  }, !!areaColumns && areaColumns.map(function (areaColumn) {
    var areas = areaColumn.areas,
        row = areaColumn.row,
        col = areaColumn.col,
        width = areaColumn.width,
        height = areaColumn.height;
    var areaColumnStyle = {
      gridColumnStart: col,
      gridColumnEnd: col + width,
      gridRowStart: row,
      gridRowEnd: row + height
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "novablocks-grid__column",
      style: areaColumnStyle
    }, areas.map(function (area) {
      addedCards += area.postsCount;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getParametricLayoutAreaClassName"])(area, attributes)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_areaDebug__WEBPACK_IMPORTED_MODULE_3__["default"], {
        area: area
      }), Array.from(Array(area.postsCount).keys()).map(function (i) {
        var landscape = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isLandscape"])(area, attributes);
        return getContent(addedCards - area.postsCount + i, attributes, landscape);
      }));
    }));
  })))));
};


/***/ }),

/***/ "./packages/components/build-module/grid-generator/utils.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/grid-generator/utils.js ***!
  \******************************************************************/
/*! exports provided: getGridStyle, getPostsCount, redistributeCardsInAreas, getOptimalHeaderPosition, isLandscape, getParametricLayoutAreaClassName, getAreaBaseClassname, getAreaClassnameByAspectRatio, getAreaClassnameByWidthRatio, getAreaClassnameByHeightRatio, getGridColumnsAndRows, transposeMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridStyle", function() { return getGridStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsCount", function() { return getPostsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redistributeCardsInAreas", function() { return redistributeCardsInAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimalHeaderPosition", function() { return getOptimalHeaderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLandscape", function() { return isLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParametricLayoutAreaClassName", function() { return getParametricLayoutAreaClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaBaseClassname", function() { return getAreaBaseClassname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByAspectRatio", function() { return getAreaClassnameByAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByWidthRatio", function() { return getAreaClassnameByWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaClassnameByHeightRatio", function() { return getAreaClassnameByHeightRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridColumnsAndRows", function() { return getGridColumnsAndRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeMatrix", function() { return transposeMatrix; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./packages/components/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

var getGridStyle = function getGridStyle(attributes) {
  var _getGridColumnsAndRow = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow.gridcolumns,
      gridrows = _getGridColumnsAndRow.gridrows;

  return {
    display: 'grid',
    gridTemplateColumns: "repeat( ".concat(gridcolumns, ", 1fr )"),
    gridTemplateRows: "repeat( ".concat(gridrows, ", auto )")
  };
}; // Sums optimal posts count value from each area

var getPostsCount = function getPostsCount(areaColumns) {
  return areaColumns.reduce(function (total, areaColumn) {
    return total + areaColumn.areas.reduce(function (columnTotal, area) {
      return columnTotal + area.postsCount;
    }, 0);
  }, 0);
};
var redistributeCardsInAreas = function redistributeCardsInAreas(areaColumns, cardsCount, attributes) {
  var totalSpots = getPostsCount(areaColumns);
  var totalPosts = cardsCount;
  var remainingPosts = totalPosts;
  var totalRatio = 0;

  for (var i = 0; i < areaColumns.length; i++) {
    var areaColumn = areaColumns[i];
    var areaColumnSpotRatio = 0;

    for (var j = 0; j < areaColumn.areas.length; j++) {
      var area = areaColumn.areas[j]; // we shouldn't fill the area with the featured card

      area.spotRatio = getCardRatio(area, attributes);
      areaColumnSpotRatio += area.spotRatio;
      totalRatio += area.spotRatio;
    }

    areaColumn.spotRatio = areaColumnSpotRatio;
  }

  var extraPosts = totalPosts - totalSpots;

  if (totalSpots === totalPosts) {
    return;
  }

  for (var _i = 0; _i < areaColumns.length; _i++) {
    var _areaColumn = areaColumns[_i];
    var areas = _areaColumn.areas;

    for (var _j = 0; _j < areas.length; _j++) {
      var _area = areas[_j];
      var areaExtraPosts = Math.round(extraPosts * _area.spotRatio / totalRatio);
      _area.postsCount = Math.max(0, _area.postsCount + areaExtraPosts);
      totalRatio -= _area.spotRatio;
      extraPosts -= areaExtraPosts;
      if (remainingPosts <= 0) return;
    }
  }
};
var getOptimalHeaderPosition = function getOptimalHeaderPosition(areaColumns) {
  var index = 1;
  var positions = [0];

  for (var columnIndex = 0; columnIndex < areaColumns.length; columnIndex++) {
    var areaColumn = areaColumns[columnIndex];
    var areas = areaColumn.areas,
        row = areaColumn.row;

    for (var areaIndex = 0; areaIndex < areas.length; areaIndex++) {
      var area = areas[areaIndex];

      if (row === 1 && areaIndex === 0) {
        positions.push(index);
      }

      index += area.postsCount;
    }
  }

  return positions;
};

var getCardRatio = function getCardRatio(area, attributes) {
  var _getGridColumnsAndRow2 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow2.gridcolumns;

  var width = area.width,
      height = area.height,
      postsCount = area.postsCount;
  var ratio = postsCount / height; // when the card is landscape and very small
  // we hide the content so the ratio should be bigger

  if (isLandscape(area, attributes)) {
    ratio *= 2;
  }

  ratio *= gridcolumns / width;
  return ratio;
};

var isLandscape = function isLandscape(area, attributes) {
  var _getGridColumnsAndRow3 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow3.gridcolumns,
      gridrows = _getGridColumnsAndRow3.gridrows;

  var nth = area.nth,
      width = area.width,
      height = area.height,
      initialPostsCount = area.initialPostsCount;
  var isLandscape = width * initialPostsCount / height > 1.33;

  if (width / gridcolumns >= 0.5) {
    return isLandscape || attributes.subfeature && nth === 2;
  }

  return isLandscape;
};
var getParametricLayoutAreaClassName = function getParametricLayoutAreaClassName(area, attributes) {
  var _getGridColumnsAndRow4 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow4.gridcolumns,
      gridrows = _getGridColumnsAndRow4.gridrows;

  var width = area.width,
      height = area.height;
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([getAreaBaseClassname(area), getAreaClassnameByWidthRatio(width / gridcolumns), getAreaClassnameByHeightRatio(height / gridrows), getAreaClassnameByAspectRatio(area, attributes)]);
};
var getAreaBaseClassname = function getAreaBaseClassname(area) {
  var nth = area.nth;
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(['novablocks-grid__area', "novablocks-grid__area--nth-".concat(nth)]);
};
var getAreaClassnameByAspectRatio = function getAreaClassnameByAspectRatio(area, attributes) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([{
    'novablocks-grid__area--portrait': !isLandscape(area, attributes),
    'novablocks-grid__area--landscape': isLandscape(area, attributes)
  }]);
};
var getAreaClassnameByWidthRatio = function getAreaClassnameByWidthRatio(widthRatio) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([{
    'novablocks-grid__area--width-xs': widthRatio < 0.3,
    'novablocks-grid__area--width-s': 0.3 <= widthRatio && widthRatio < 0.5,
    'novablocks-grid__area--width-m': 0.5 <= widthRatio && widthRatio < 0.66,
    'novablocks-grid__area--width-l': 0.66 <= widthRatio && widthRatio < 0.80,
    'novablocks-grid__area--width-xl': 0.80 <= widthRatio && widthRatio < 0.95,
    'novablocks-grid__area--width-full': 0.95 <= widthRatio
  }]);
};
var getAreaClassnameByHeightRatio = function getAreaClassnameByHeightRatio(heightRatio) {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()([{
    'novablocks-grid__area--height-xs': heightRatio < 0.34,
    'novablocks-grid__area--height-s': 0.34 <= heightRatio && heightRatio < 0.5,
    'novablocks-grid__area--height-m': 0.5 <= heightRatio && heightRatio < 0.66,
    'novablocks-grid__area--height-l': 0.66 <= heightRatio && heightRatio < 0.80,
    'novablocks-grid__area--height-xl': 0.80 <= heightRatio
  }]);
};
var getGridColumnsAndRows = function getGridColumnsAndRows(attributes) {
  return {
    gridcolumns: !attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows,
    gridrows: !attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns
  };
};
var transposeMatrix = function transposeMatrix(source) {
  return Object.keys(source[0]).map(function (column) {
    return source.map(function (row) {
      return row[column];
    });
  });
};


/***/ }),

/***/ "./packages/components/build-module/heading-level-icon/index.js":
/*!**********************************************************************!*\
  !*** ./packages/components/build-module/heading-level-icon/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function Index(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: levelToPath[level]
  }));
}


/***/ }),

/***/ "./packages/components/build-module/heading-toolbar/index.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/heading-toolbar/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../heading-level-icon */ "./packages/components/build-module/heading-level-icon/index.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var HeadingToolbar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeadingToolbar, _Component);

  var _super = _createSuper(HeadingToolbar);

  function HeadingToolbar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeadingToolbar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeadingToolbar, [{
    key: "createLevelControl",
    value: function createLevelControl(targetLevel, selectedLevel, onChange) {
      var isActive = targetLevel === selectedLevel;
      return {
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          level: targetLevel,
          isPressed: isActive
        }),
        // translators: %s: heading level e.g: "1", "2", "3"
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Heading %d'), targetLevel),
        isActive: isActive,
        onClick: function onClick() {
          return onChange(targetLevel);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          minLevel = _this$props.minLevel,
          maxLevel = _this$props.maxLevel,
          selectedLevel = _this$props.selectedLevel,
          onChange = _this$props.onChange;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToolbarGroup"], {
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          level: selectedLevel
        }),
        controls: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(minLevel, maxLevel).map(function (index) {
          return _this.createLevelControl(index, selectedLevel, onChange);
        })
      });
    }
  }]);

  return HeadingToolbar;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadingToolbar);


/***/ }),

/***/ "./packages/components/build-module/index.js":
/*!***************************************************!*\
  !*** ./packages/components/build-module/index.js ***!
  \***************************************************/
/*! exports provided: AdvancedGallery, Blob, BlockVerticalAlignmentToolbar, Card, CardsManager, EditableText, GridGenerator, HeadingToolbar, insertTemplate, ParallaxPanel, PresetControl, Post, QueryControls, TextPlaceholder, ToggleGroup, viewportObserver, withParallax, withParallaxProvider, withParallaxContext, withParallaxControls, parallaxInit, EmphasisLevelControls, EmphasisBlockAreaControls, EmphasisContentAreaControls, collectionAttributes, Collection, CollectionPreview, CollectionHeader, Drawer, Drawers, DrawerList, DrawerPanel, DrawerListBefore, DrawerListAfter, GalleryPreview, GalleryPlaceholder, Tabs, Tab, Notice, ControlsSection, ControlsSections, ControlsTab, ControlsDrawerContent, ControlsGroup, alignmentAttributes, AlignmentControls, AlignmentToolbar, colorAttributes, ColorControls, ColorPanel, ColorToolbar, OverlayControls, layoutAttributes, LayoutControls, scrollingAttributes, ScrollingEffectControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advanced_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-gallery */ "./packages/components/build-module/advanced-gallery/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedGallery", function() { return _advanced_gallery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blob */ "./packages/components/build-module/blob/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return _blob__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _block_vertical_alignment_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-vertical-alignment-toolbar */ "./packages/components/build-module/block-vertical-alignment-toolbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockVerticalAlignmentToolbar", function() { return _block_vertical_alignment_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./packages/components/build-module/card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cards_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-manager */ "./packages/components/build-module/cards-manager/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardsManager", function() { return _cards_manager__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _editable_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editable-text */ "./packages/components/build-module/editable-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableText", function() { return _editable_text__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _grid_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-generator */ "./packages/components/build-module/grid-generator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridGenerator", function() { return _grid_generator__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _heading_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading-toolbar */ "./packages/components/build-module/heading-toolbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadingToolbar", function() { return _heading_toolbar__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _insert_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insert-template */ "./packages/components/build-module/insert-template/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertTemplate", function() { return _insert_template__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _parallax_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parallax-panel */ "./packages/components/build-module/parallax-panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParallaxPanel", function() { return _parallax_panel__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _preset_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preset-control */ "./packages/components/build-module/preset-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresetControl", function() { return _preset_control__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post */ "./packages/components/build-module/post/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _post__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _query_controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./query-controls */ "./packages/components/build-module/query-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryControls", function() { return _query_controls__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _text_placeholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./text-placeholder */ "./packages/components/build-module/text-placeholder/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPlaceholder", function() { return _text_placeholder__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _toggle_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toggle-group */ "./packages/components/build-module/toggle-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleGroup", function() { return _toggle_group__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _viewport_observer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewport-observer */ "./packages/components/build-module/viewport-observer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewportObserver", function() { return _viewport_observer__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _with_parallax__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./with-parallax */ "./packages/components/build-module/with-parallax/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParallax", function() { return _with_parallax__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParallaxProvider", function() { return _with_parallax__WEBPACK_IMPORTED_MODULE_16__["withParallaxProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParallaxContext", function() { return _with_parallax__WEBPACK_IMPORTED_MODULE_16__["withParallaxContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withParallaxControls", function() { return _with_parallax__WEBPACK_IMPORTED_MODULE_16__["withParallaxControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parallaxInit", function() { return _with_parallax__WEBPACK_IMPORTED_MODULE_16__["parallaxInit"]; });

/* harmony import */ var _emphasis_level_controls__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./emphasis-level-controls */ "./packages/components/build-module/emphasis-level-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmphasisLevelControls", function() { return _emphasis_level_controls__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmphasisBlockAreaControls", function() { return _emphasis_level_controls__WEBPACK_IMPORTED_MODULE_17__["EmphasisBlockAreaControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmphasisContentAreaControls", function() { return _emphasis_level_controls__WEBPACK_IMPORTED_MODULE_17__["EmphasisContentAreaControls"]; });

/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./collection */ "./packages/components/build-module/collection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collectionAttributes", function() { return _collection__WEBPACK_IMPORTED_MODULE_18__["collectionAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _collection__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionPreview", function() { return _collection__WEBPACK_IMPORTED_MODULE_18__["CollectionPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionHeader", function() { return _collection__WEBPACK_IMPORTED_MODULE_18__["CollectionHeader"]; });

/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./drawer */ "./packages/components/build-module/drawer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return _drawer__WEBPACK_IMPORTED_MODULE_19__["Drawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawers", function() { return _drawer__WEBPACK_IMPORTED_MODULE_19__["Drawers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerList", function() { return _drawer__WEBPACK_IMPORTED_MODULE_19__["DrawerList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerPanel", function() { return _drawer__WEBPACK_IMPORTED_MODULE_19__["DrawerPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerListBefore", function() { return _drawer__WEBPACK_IMPORTED_MODULE_19__["DrawerListBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerListAfter", function() { return _drawer__WEBPACK_IMPORTED_MODULE_19__["DrawerListAfter"]; });

/* harmony import */ var _gallery_options__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gallery-options */ "./packages/components/build-module/gallery-options/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryPreview", function() { return _gallery_options__WEBPACK_IMPORTED_MODULE_20__["GalleryPreview"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryPlaceholder", function() { return _gallery_options__WEBPACK_IMPORTED_MODULE_20__["GalleryPlaceholder"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tabs */ "./packages/components/build-module/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs__WEBPACK_IMPORTED_MODULE_21__["Tabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tabs__WEBPACK_IMPORTED_MODULE_21__["Tab"]; });

/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notice */ "./packages/components/build-module/notice/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return _notice__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _control_sections__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./control-sections */ "./packages/components/build-module/control-sections/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsSection", function() { return _control_sections__WEBPACK_IMPORTED_MODULE_23__["ControlsSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsSections", function() { return _control_sections__WEBPACK_IMPORTED_MODULE_23__["ControlsSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsTab", function() { return _control_sections__WEBPACK_IMPORTED_MODULE_23__["ControlsTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsDrawerContent", function() { return _control_sections__WEBPACK_IMPORTED_MODULE_23__["ControlsDrawerContent"]; });

/* harmony import */ var _controls_group__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./controls-group */ "./packages/components/build-module/controls-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsGroup", function() { return _controls_group__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _alignment_controls__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./alignment-controls */ "./packages/components/build-module/alignment-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignmentAttributes", function() { return _alignment_controls__WEBPACK_IMPORTED_MODULE_25__["alignmentAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentControls", function() { return _alignment_controls__WEBPACK_IMPORTED_MODULE_25__["AlignmentControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return _alignment_controls__WEBPACK_IMPORTED_MODULE_25__["AlignmentToolbar"]; });

/* harmony import */ var _color_controls__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./color-controls */ "./packages/components/build-module/color-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorAttributes", function() { return _color_controls__WEBPACK_IMPORTED_MODULE_26__["colorAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorControls", function() { return _color_controls__WEBPACK_IMPORTED_MODULE_26__["ColorControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPanel", function() { return _color_controls__WEBPACK_IMPORTED_MODULE_26__["ColorPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorToolbar", function() { return _color_controls__WEBPACK_IMPORTED_MODULE_26__["ColorToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayControls", function() { return _color_controls__WEBPACK_IMPORTED_MODULE_26__["OverlayControls"]; });

/* harmony import */ var _layout_controls__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout-controls */ "./packages/components/build-module/layout-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layoutAttributes", function() { return _layout_controls__WEBPACK_IMPORTED_MODULE_27__["layoutAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutControls", function() { return _layout_controls__WEBPACK_IMPORTED_MODULE_27__["LayoutControls"]; });

/* harmony import */ var _scrolling_effect_controls__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./scrolling-effect-controls */ "./packages/components/build-module/scrolling-effect-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollingAttributes", function() { return _scrolling_effect_controls__WEBPACK_IMPORTED_MODULE_28__["scrollingAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollingEffectControls", function() { return _scrolling_effect_controls__WEBPACK_IMPORTED_MODULE_28__["ScrollingEffectControls"]; });

/**
 * Internal dependencies
 */































/***/ }),

/***/ "./packages/components/build-module/insert-template/index.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/insert-template/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


 // Copied over from the Columns block. It seems like it should become part of public API.

var createBlocksFromInnerBlocksTemplate = function createBlocksFromInnerBlocksTemplate() {
  var innerBlocksTemplate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return innerBlocksTemplate.map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
        name = _ref2[0],
        attributes = _ref2[1],
        _ref2$ = _ref2[2],
        innerBlocks = _ref2$ === void 0 ? [] : _ref2$;

    return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (blockType, template) {
  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      getClientIdsWithDescendants = _select.getClientIdsWithDescendants;

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])('core/block-editor'),
      insertBlocks = _dispatch.insertBlocks,
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  var blocks = getClientIdsWithDescendants();
  var loadedSavedBlocks = false;
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(function () {
    var newBlocks = getClientIdsWithDescendants();
    var addedBlocks = newBlocks.filter(function (newBlock) {
      return !blocks.includes(newBlock);
    });

    if (newBlocks === blocks || !addedBlocks.length) {
      return;
    } // if this is the first set of added blocks


    if (!loadedSavedBlocks) {
      loadedSavedBlocks = true;
      return;
    }

    blocks = newBlocks;
    getBlocksByClientId(addedBlocks).map(function (block) {
      var _block$innerBlocks;

      if (block.name === blockType && !block.attributes.templateInserted && !((_block$innerBlocks = block.innerBlocks) === null || _block$innerBlocks === void 0 ? void 0 : _block$innerBlocks.length)) {
        var _blocks = createBlocksFromInnerBlocksTemplate(template);

        insertBlocks(_blocks, 0, block.clientId);
        updateBlockAttributes(block.clientId, {
          templateInserted: true
        });
      }
    });
  });
});


/***/ }),

/***/ "./packages/components/build-module/layout-controls/attributes.json":
/*!**************************************************************************!*\
  !*** ./packages/components/build-module/layout-controls/attributes.json ***!
  \**************************************************************************/
/*! exports provided: contentPadding, contentPaddingCustom, contentWidth, contentWidthCustom, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contentPadding\":{\"type\":\"string\",\"default\":\"medium\"},\"contentPaddingCustom\":{\"type\":\"number\",\"default\":20},\"contentWidth\":{\"type\":\"string\",\"default\":\"large\"},\"contentWidthCustom\":{\"type\":\"number\",\"default\":100}}");

/***/ }),

/***/ "./packages/components/build-module/layout-controls/index.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/layout-controls/index.js ***!
  \*******************************************************************/
/*! exports provided: layoutAttributes, LayoutControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutControls", function() { return LayoutControls; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./padding */ "./packages/components/build-module/layout-controls/padding.js");
/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./width */ "./packages/components/build-module/layout-controls/width.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./packages/components/build-module/layout-controls/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/components/build-module/layout-controls/attributes.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "layoutAttributes", function() { return _attributes__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);



/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */


var LayoutControls = function LayoutControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Layout')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_5__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_padding__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'padding-controls'
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_width__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: 'width-controls'
  }, props))));
};


/***/ }),

/***/ "./packages/components/build-module/layout-controls/padding.js":
/*!*********************************************************************!*\
  !*** ./packages/components/build-module/layout-controls/padding.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */





var PaddingControls = function PaddingControls(props) {
  var _props$attributes = props.attributes,
      contentPadding = _props$attributes.contentPadding,
      contentPaddingCustom = _props$attributes.contentPaddingCustom,
      setAttributes = props.setAttributes,
      contentPaddingOptions = props.settings.contentPaddingOptions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Padding', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, contentPaddingOptions.map(function (option) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: option.value,
      isSecondary: option.value !== contentPadding,
      isPrimary: option.value === contentPadding,
      onClick: function onClick() {
        setAttributes({
          contentPadding: option.value
        });
      }
    }, option.label);
  }))), 'custom' === contentPadding && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(' Custom Content Padding', '__plugin_txtd'),
    value: contentPaddingCustom,
    onChange: function onChange(newContentPadding) {
      return setAttributes({
        contentPaddingCustom: newContentPadding
      });
    },
    min: 0,
    max: 25
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["withSettings"])(PaddingControls));


/***/ }),

/***/ "./packages/components/build-module/layout-controls/width.js":
/*!*******************************************************************!*\
  !*** ./packages/components/build-module/layout-controls/width.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */





var WidthControls = function WidthControls(props) {
  var _props$attributes = props.attributes,
      contentWidth = _props$attributes.contentWidth,
      contentWidthCustom = _props$attributes.contentWidthCustom,
      setAttributes = props.setAttributes,
      contentWidthOptions = props.settings.contentWidthOptions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Width', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    label: "Content Width"
  }, contentWidthOptions.map(function (option) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: option.value,
      isSecondary: option.value !== contentWidth,
      isPrimary: option.value === contentWidth,
      onClick: function onClick() {
        setAttributes({
          contentWidth: option.value
        });
      }
    }, option.label);
  }))), 'custom' === contentWidth && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(' Custom Content Width', '__plugin_txtd'),
    value: contentWidthCustom,
    onChange: function onChange(newContentWidth) {
      return setAttributes({
        contentWidthCustom: newContentWidth
      });
    },
    min: 20,
    max: 90,
    step: 10
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["withSettings"])(WidthControls));


/***/ }),

/***/ "./packages/components/build-module/meta/author.js":
/*!*********************************************************!*\
  !*** ./packages/components/build-module/meta/author.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);


var Author = function Author(props) {
  var _useApiFetch = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["useApiFetch"])("/wp/v2/users/".concat(props.id)),
      data = _useApiFetch.data;

  return (data === null || data === void 0 ? void 0 : data.name) || '';
};

/* harmony default export */ __webpack_exports__["default"] = (Author);


/***/ }),

/***/ "./packages/components/build-module/meta/category.js":
/*!***********************************************************!*\
  !*** ./packages/components/build-module/meta/category.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);


var Category = function Category(props) {
  var _useApiFetch = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["useApiFetch"])("/wp/v2/categories/".concat(props.id)),
      data = _useApiFetch.data;

  return (data === null || data === void 0 ? void 0 : data.name) || '';
};

/* harmony default export */ __webpack_exports__["default"] = (Category);


/***/ }),

/***/ "./packages/components/build-module/meta/comments.js":
/*!***********************************************************!*\
  !*** ./packages/components/build-module/meta/comments.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




var Comments = function Comments(props) {
  var _useApiFetch = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["useApiFetch"])(Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])("/wp/v2/comments", {
    post: props.postId
  })),
      data = _useApiFetch.data;

  var count = data.length;
  return !count ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Comments') : "".concat(count, " Comment").concat(count > 1 ? 's' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);


/***/ }),

/***/ "./packages/components/build-module/meta/tags.js":
/*!*******************************************************!*\
  !*** ./packages/components/build-module/meta/tags.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__);


var Tags = function Tags(props) {
  var tags = props.tags.map(function (id) {
    var _useApiFetch = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_0__["useApiFetch"])("/wp/v2/tags/".concat(id)),
        data = _useApiFetch.data;

    return data;
  });
  return tags.map(function (tag) {
    return tag.name;
  }).join(', ') || '';
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);


/***/ }),

/***/ "./packages/components/build-module/notice/index.js":
/*!**********************************************************!*\
  !*** ./packages/components/build-module/notice/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






var Notice = function Notice(props) {
  var id = props.id,
      content = props.content,
      dismissLabel = props.dismissLabel;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(id)),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var onClick = function onClick() {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(id, true, {
      expires: 365
    });
    setHidden(true);
  };

  if (hidden) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'novablocks-notice'
  }, content, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isPrimary: true,
    onClick: onClick
  }, dismissLabel));
};

/* harmony default export */ __webpack_exports__["default"] = (Notice);


/***/ }),

/***/ "./packages/components/build-module/parallax-panel/index.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/parallax-panel/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */




var ParallaxPanel = function ParallaxPanel(props) {
  var _props$attributes = props.attributes,
      enableParallax = _props$attributes.enableParallax,
      parallaxAmount = _props$attributes.parallaxAmount,
      parallaxCustomAmount = _props$attributes.parallaxCustomAmount,
      focalPoint = _props$attributes.focalPoint,
      setAttributes = props.setAttributes,
      parallaxOptions = props.settings.parallaxOptions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parallax', '__plugin_txtd'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Parallax Scrolling', '__plugin_txtd'),
    checked: enableParallax,
    onChange: function onChange() {
      return setAttributes({
        enableParallax: !enableParallax
      });
    }
  }), !!enableParallax && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Parallax Orbital Speed', '__plugin_txtd'),
    selected: parallaxAmount,
    onChange: function onChange(nextParallaxAmount) {
      if (nextParallaxAmount === 'custom') {
        setAttributes({
          parallaxAmount: nextParallaxAmount
        });
      } else {
        setAttributes({
          parallaxAmount: nextParallaxAmount,
          parallaxCustomAmount: parseInt(nextParallaxAmount, 10)
        });
      }
    },
    options: parallaxOptions,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The speed at which the parallax effect runs.', '__plugin_txtd')
  }), !!enableParallax && 'custom' === parallaxAmount && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: parallaxCustomAmount,
    onChange: function onChange(nextParallaxAmount) {
      return setAttributes({
        parallaxCustomAmount: nextParallaxAmount
      });
    },
    min: 10,
    max: 100,
    step: 10,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.', '__plugin_txtd')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["withSettings"])(ParallaxPanel));


/***/ }),

/***/ "./packages/components/build-module/post/index.js":
/*!********************************************************!*\
  !*** ./packages/components/build-module/post/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _meta_author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../meta/author */ "./packages/components/build-module/meta/author.js");
/* harmony import */ var _meta_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meta/category */ "./packages/components/build-module/meta/category.js");
/* harmony import */ var _meta_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meta/comments */ "./packages/components/build-module/meta/comments.js");
/* harmony import */ var _meta_tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meta/tags */ "./packages/components/build-module/meta/tags.js");










var getMeta = function getMeta(post, meta) {
  if (meta === 'author') {
    return (post === null || post === void 0 ? void 0 : post.author) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_author__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: post.author
    });
  }

  if (meta === 'category') {
    var _post$categories;

    return !!(post === null || post === void 0 ? void 0 : (_post$categories = post.categories) === null || _post$categories === void 0 ? void 0 : _post$categories.length) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_category__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: post.categories[0]
    });
  }

  if (meta === 'comments') {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_comments__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postId: post.id
    });
  }

  if (meta === 'date') {
    var dateFormat = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["__experimentalGetSettings"])().formats.date;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("time", {
      dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["format"])('c', post.date_gmt)
    }, Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_1__["dateI18n"])(dateFormat, post.date_gmt));
  }

  if (meta === 'tags') {
    var _post$tags;

    return !!(post === null || post === void 0 ? void 0 : (_post$tags = post.tags) === null || _post$tags === void 0 ? void 0 : _post$tags.length) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_meta_tags__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tags: post.tags
    });
  }

  return null;
};

var Post = function Post(props) {
  var _props$attributes = props.attributes,
      cardTitleLevel = _props$attributes.cardTitleLevel,
      thumbnailAspectRatioString = _props$attributes.thumbnailAspectRatioString,
      showMedia = _props$attributes.showMedia,
      showMeta = _props$attributes.showMeta,
      showTitle = _props$attributes.showTitle,
      showDescription = _props$attributes.showDescription,
      showButtons = _props$attributes.showButtons,
      metadataPosition = _props$attributes.metadataPosition,
      primaryMetadata = _props$attributes.primaryMetadata,
      secondaryMetadata = _props$attributes.secondaryMetadata,
      post = props.post;
  var primaryMeta = getMeta(post, primaryMetadata);
  var secondaryMeta = getMeta(post, secondaryMetadata);
  var combinedMeta;
  var metaAboveTitle;
  var metaBelowTitle;

  if (primaryMeta && secondaryMeta) {
    combinedMeta = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, primaryMeta, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["RawHTML"], {
      style: {
        display: 'inline'
      }
    }, ' &mdash; '), secondaryMeta);
  } else {
    combinedMeta = primaryMeta || secondaryMeta;
  }

  if (metadataPosition === 'above-title') {
    metaAboveTitle = combinedMeta;
  }

  if (metadataPosition === 'below-title') {
    metaBelowTitle = combinedMeta;
  }

  if (metadataPosition === 'split') {
    metaAboveTitle = primaryMeta;
    metaBelowTitle = secondaryMeta;
  }

  var buttons = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-buttons"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button__link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "novablocks-buttons-size-modifier"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Read More')))));
  var cardProps = {
    mediaId: post.featured_media,
    metaAboveTitle: metaAboveTitle,
    metaBelowTitle: metaBelowTitle,
    title: post.title.raw,
    titleTagName: "h".concat(cardTitleLevel),
    content: post.excerpt.rendered,
    buttons: buttons,
    isLandscape: props.isLandscape || false,
    showMedia: showMedia,
    showMeta: showMeta,
    showTitle: showTitle,
    showContent: showDescription,
    showButtons: showButtons,
    hasFixedAspectRatio: thumbnailAspectRatioString !== 'auto'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_3__["Card"], cardProps);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);


/***/ }),

/***/ "./packages/components/build-module/preset-control/index.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/preset-control/index.js ***!
  \******************************************************************/
/*! exports provided: getNewAttributesFromPreset, getSelectedPreset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewAttributesFromPreset", function() { return getNewAttributesFromPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPreset", function() { return getSelectedPreset; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var PresetControl = function PresetControl(props) {
  var noop = function noop() {
    return {};
  };

  var randomize = props.randomize,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var options = Array.isArray(props.options) ? props.options.slice() : [];
  var randomizeAttributes = typeof randomize === "function" ? randomize : noop;
  options.push({
    label: 'Just My Style™',
    value: 'just-my-style',
    preset: {}
  });
  var selectedPreset = getSelectedPreset(options, attributes);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    options: options,
    selected: selectedPreset,
    onChange: function onChange(preset) {
      if ('just-my-style' === preset) {
        setAttributes(Object.assign({}, randomizeAttributes()));
        return;
      }

      var newAttributes = getNewAttributesFromPreset(preset, options);
      setAttributes(newAttributes);
    }
  })), selectedPreset === 'just-my-style' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    key: 'advanced-gallery-surprise-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isLarge: true,
    isPrimary: true,
    onClick: function onClick() {
      setAttributes(randomizeAttributes());
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('💡 Surprise me!'))));
};

var getNewAttributesFromPreset = function getNewAttributesFromPreset(preset, presets) {
  var newAttributes = {};
  var newOption = presets.find(function (option) {
    return preset === option.value;
  });

  if (newOption && newOption.preset) {
    newAttributes = Object.assign(newOption.preset, newAttributes);
  }

  return newAttributes;
};
var getSelectedPreset = function getSelectedPreset(presetOptions, attributes) {
  var activePresets = presetOptions.filter(function (presetOption) {
    var preset = presetOption.preset;
    return Object.keys(preset).every(function (key) {
      return preset[key] === attributes[key];
    });
  });

  if (activePresets.length) {
    return activePresets[0].value;
  }

  return null;
};
var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, props) {
  var _useBlockEditContext = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["useBlockEditContext"])(),
      clientId = _useBlockEditContext.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var _getBlock = getBlock(clientId),
      attributes = _getBlock.attributes;

  return _objectSpread(_objectSpread({}, props), {}, {
    clientId: clientId,
    attributes: attributes
  });
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch, _ref) {
  var clientId = _ref.clientId;

  var _dispatch = dispatch('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  var setAttributes = function setAttributes(newAttributes) {
    return updateBlockAttributes(clientId, newAttributes);
  };

  return {
    setAttributes: setAttributes
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([applyWithSelect, applyWithDispatch])(PresetControl));


/***/ }),

/***/ "./packages/components/build-module/query-controls/automated-controls.js":
/*!*******************************************************************************!*\
  !*** ./packages/components/build-module/query-controls/automated-controls.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autocomplete-tokenfield */ "./packages/components/build-module/autocomplete-tokenfield/index.js");


var apiFetch = wp.apiFetch;






var fetchAuthorSuggestions = function fetchAuthorSuggestions(search) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/users', {
      search: search,
      per_page: 20,
      _fields: 'id,name'
    })
  }).then(function (users) {
    return users.map(function (user) {
      return {
        value: user.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(user.name) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('(no name)')
      };
    });
  });
};

var fetchSavedAuthors = function fetchSavedAuthors(userIDs) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/users', {
      per_page: 100,
      include: userIDs.join(','),
      _fields: 'id,name'
    })
  }).then(function (users) {
    return users.map(function (user) {
      return {
        value: user.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(user.name) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('(no name)')
      };
    });
  });
};

var fetchCategorySuggestions = function fetchCategorySuggestions(search) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/categories', {
      search: search,
      per_page: 20,
      _fields: 'id,name',
      orderby: 'count',
      order: 'desc'
    })
  }).then(function (categories) {
    return categories.map(function (category) {
      return {
        value: category.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(category.name) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('(no title)')
      };
    });
  });
};

var fetchSavedCategories = function fetchSavedCategories(categoryIDs) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/categories', {
      per_page: 100,
      _fields: 'id,name',
      include: categoryIDs.join(',')
    })
  }).then(function (categories) {
    return categories.map(function (category) {
      return {
        value: category.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(category.name) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('(no title)')
      };
    });
  });
};

var expandCategories = function expandCategories(categoryIDs) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/novablocks/v1/categories', {
      ids: categoryIDs
    })
  });
};

var fetchTagSuggestions = function fetchTagSuggestions(search) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/tags', {
      search: search,
      per_page: 20,
      _fields: 'id,name',
      orderby: 'count',
      order: 'desc'
    })
  }).then(function (tags) {
    return tags.map(function (tag) {
      return {
        value: tag.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(tag.name) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('(no title)')
      };
    });
  });
};

var fetchSavedTags = function fetchSavedTags(tagIDs) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/tags', {
      per_page: 100,
      _fields: 'id,name',
      include: tagIDs.join(',')
    })
  }).then(function (tags) {
    return tags.map(function (tag) {
      return {
        value: tag.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(tag.name) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('(no title)')
      };
    });
  });
};

var AutomatedControls = function AutomatedControls(props) {
  var authors = props.authors,
      categories = props.categories,
      loadingMode = props.loadingMode,
      preventDuplicatePosts = props.preventDuplicatePosts,
      tags = props.tags,
      onAuthorsChange = props.onAuthorsChange,
      onCategoriesChange = props.onCategoriesChange,
      onPreventDuplicatePostsChange = props.onPreventDuplicatePostsChange,
      onTagsChange = props.onTagsChange;

  if ('automated' !== loadingMode) {
    return null;
  }

  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Prevent Duplicate Posts"),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("The posts displayed by other blocks won't show up in this block"),
    checked: preventDuplicatePosts,
    onChange: onPreventDuplicatePostsChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["QueryControls"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: "queryControls"
  }, props, {
    minItems: 2
  })), onAuthorsChange && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "authors",
    tokens: authors || [],
    onChange: onAuthorsChange,
    fetchSuggestions: fetchAuthorSuggestions,
    fetchSavedInfo: fetchSavedAuthors,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Authors')
  }), onCategoriesChange && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "categories",
    tokens: categories || [],
    onChange: function onChange(newCategories) {
      expandCategories(newCategories).then(function (categories) {
        onCategoriesChange(categories);
      });
    },
    fetchSuggestions: fetchCategorySuggestions,
    fetchSavedInfo: fetchSavedCategories,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Categories')
  }), onTagsChange && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "tags",
    tokens: tags || [],
    onChange: onTagsChange,
    fetchSuggestions: fetchTagSuggestions,
    fetchSavedInfo: fetchSavedTags,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tags')
  })];
};

/* harmony default export */ __webpack_exports__["default"] = (AutomatedControls);


/***/ }),

/***/ "./packages/components/build-module/query-controls/index.js":
/*!******************************************************************!*\
  !*** ./packages/components/build-module/query-controls/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manual_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual-controls */ "./packages/components/build-module/query-controls/manual-controls.js");
/* harmony import */ var _automated_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./automated-controls */ "./packages/components/build-module/query-controls/automated-controls.js");


/**
 * WordPress dependencies
 */





var QueryControls = function QueryControls(props) {
  var loadingMode = props.loadingMode,
      onLoadingModeChange = props.onLoadingModeChange,
      enableSpecific = props.enableSpecific;
  return [enableSpecific && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Posts loading type', '__plugin_txtd'),
    selected: loadingMode,
    onChange: onLoadingModeChange,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Automated (latest posts)'),
      value: 'automated'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Manual (specific posts)'),
      value: 'manual'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_automated_controls__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_manual_controls__WEBPACK_IMPORTED_MODULE_3__["default"], props)];
};

/* harmony default export */ __webpack_exports__["default"] = (QueryControls);


/***/ }),

/***/ "./packages/components/build-module/query-controls/manual-controls.js":
/*!****************************************************************************!*\
  !*** ./packages/components/build-module/query-controls/manual-controls.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../autocomplete-tokenfield */ "./packages/components/build-module/autocomplete-tokenfield/index.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


var apiFetch = wp.apiFetch;




var fetchPostSuggestions = function fetchPostSuggestions(search) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/search', {
      search: search,
      per_page: 20,
      _fields: 'id,title',
      type: 'post'
    })
  }).then(function (posts) {
    var result = posts.map(function (post) {
      return {
        value: post.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(post.title) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('(no title)')
      };
    });
    return result;
  });
};

var fetchSavedPosts = function fetchSavedPosts(postIDs) {
  return apiFetch({
    path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])('/wp/v2/posts', {
      per_page: 100,
      include: postIDs.join(','),
      _fields: 'id,title'
    })
  }).then(function (posts) {
    return posts.map(function (post) {
      return {
        value: post.id,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(post.title.rendered) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('(no title)')
      };
    });
  });
};

var ManualControls = function ManualControls(props) {
  var loadingMode = props.loadingMode,
      specificPosts = props.specificPosts,
      onSpecificPostsChange = props.onSpecificPostsChange;

  if ('manual' !== loadingMode) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_autocomplete_tokenfield__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: "posts",
    tokens: specificPosts || [],
    onChange: onSpecificPostsChange,
    fetchSuggestions: fetchPostSuggestions,
    fetchSavedInfo: fetchSavedPosts,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Posts'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Begin typing post title, click autocomplete result to select.')
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManualControls);


/***/ }),

/***/ "./packages/components/build-module/scrolling-effect-controls/attributes.json":
/*!************************************************************************************!*\
  !*** ./packages/components/build-module/scrolling-effect-controls/attributes.json ***!
  \************************************************************************************/
/*! exports provided: focalPoint, finalFocalPoint, initialBackgroundScale, finalBackgroundScale, scrollIndicatorBlock, scrollingEffect, motionPreset, followThroughStart, followThroughEnd, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"focalPoint\":{\"type\":\"object\",\"default\":{\"x\":0.5,\"y\":0.5}},\"finalFocalPoint\":{\"type\":\"object\",\"default\":{\"x\":0.5,\"y\":0.5}},\"initialBackgroundScale\":{\"type\":\"number\",\"default\":1},\"finalBackgroundScale\":{\"type\":\"number\",\"default\":1},\"scrollIndicatorBlock\":{\"type\":\"boolean\",\"default\":false},\"scrollingEffect\":{\"type\":\"string\",\"default\":\"parallax\"},\"motionPreset\":{\"type\":\"string\",\"default\":\"standard-dynamic\"},\"followThroughStart\":{\"type\":\"boolean\",\"default\":true},\"followThroughEnd\":{\"type\":\"boolean\",\"default\":true}}");

/***/ }),

/***/ "./packages/components/build-module/scrolling-effect-controls/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/components/build-module/scrolling-effect-controls/index.js ***!
  \*****************************************************************************/
/*! exports provided: scrollingAttributes, ScrollingEffectControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingEffectControls", function() { return ScrollingEffectControls; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _control_sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-sections */ "./packages/components/build-module/control-sections/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./packages/components/build-module/scrolling-effect-controls/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/components/build-module/scrolling-effect-controls/attributes.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "scrollingAttributes", function() { return _attributes__WEBPACK_IMPORTED_MODULE_6__; });



/**
 * WordPress dependencies
 */






var ScrollingEffectControls = function ScrollingEffectControls(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ScrollingEffectPanel, props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DopplerPresetsPanel, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(StartFramePanel, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EndFramePanel, props)));
};

var ScrollingEffectPanel = function ScrollingEffectPanel(props) {
  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      scrollingEffect = _props$attributes.scrollingEffect,
      motionPreset = _props$attributes.motionPreset,
      settings = props.settings,
      name = props.name;
  console.log(settings);
  var motionPresetOptions = settings.motionPresetOptions,
      doppler = settings.theme_support.doppler;

  var scrollingEffectOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(settings.scrollingEffectOptions);

  if (!!doppler && doppler.includes(name)) {
    scrollingEffectOptions.push({
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Doppler by Pixelgrade ®'),
      value: 'doppler'
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_control_sections__WEBPACK_IMPORTED_MODULE_2__["ControlsSection"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Scrolling Effect')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_control_sections__WEBPACK_IMPORTED_MODULE_2__["ControlsTab"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Customize')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    key: 'novablocks-scrolling-effect',
    selected: scrollingEffect,
    className: 'novablocks-scrolling-effect',
    onChange: function onChange(scrollingEffect) {
      var newAttributes = {
        scrollingEffect: scrollingEffect
      };

      if (scrollingEffect === 'doppler' && motionPreset !== 'custom') {
        var newOption = motionPresetOptions.find(function (option) {
          return motionPreset === option.value;
        });
        newAttributes = Object.assign(newOption.preset, newAttributes);
        newAttributes.minHeightFallback = 75;
      }

      setAttributes(newAttributes);
    },
    options: scrollingEffectOptions
  }), props.children));
};

var DopplerPresetsPanel = function DopplerPresetsPanel(props) {
  var _props$attributes2 = props.attributes,
      motionPreset = _props$attributes2.motionPreset,
      scrollingEffect = _props$attributes2.scrollingEffect,
      setAttributes = props.setAttributes,
      motionPresetOptions = props.settings.motionPresetOptions,
      isScrolling = props.isScrolling,
      previewScrolling = props.previewScrolling;

  if (scrollingEffect !== 'doppler') {
    return false;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: "Doppler Scrolling Settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
    label: 'Motion Presets',
    selected: motionPreset,
    onChange: function onChange(motionPreset) {
      var newAttributes = {
        motionPreset: motionPreset
      };
      var newOption = motionPresetOptions.find(function (option) {
        return motionPreset === option.value;
      });

      if (newOption && newOption.preset) {
        newAttributes = Object.assign(newOption.preset, newAttributes);
      }

      setAttributes(newAttributes);

      if ('custom' !== motionPreset && !isScrolling) {//						previewScrolling();
      }
    },
    options: motionPresetOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isLarge: true,
    isPrimary: true,
    disabled: !!isScrolling,
    onClick: previewScrolling
  }, "Preview Scrolling")));
};

var getParallaxFocalPointImage = function getParallaxFocalPointImage(media) {
  var mediaType = media === null || media === void 0 ? void 0 : media.type;
  var parallaxFocalPointImage = false;

  if (mediaType === 'image') {
    var _media$sizes, _media$sizes$novabloc, _media$sizes2, _media$sizes2$novablo;

    parallaxFocalPointImage = {
      url: (media === null || media === void 0 ? void 0 : (_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : (_media$sizes$novabloc = _media$sizes.novablocks_large) === null || _media$sizes$novabloc === void 0 ? void 0 : _media$sizes$novabloc.url) || (media === null || media === void 0 ? void 0 : (_media$sizes2 = media.sizes) === null || _media$sizes2 === void 0 ? void 0 : (_media$sizes2$novablo = _media$sizes2.novablocks_huge) === null || _media$sizes2$novablo === void 0 ? void 0 : _media$sizes2$novablo.url) || (media === null || media === void 0 ? void 0 : media.url),
      width: 218,
      height: 170
    };
  }

  if (mediaType === 'video') {
    parallaxFocalPointImage = {
      url: '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png',
      width: 218,
      height: 170
    };
  }

  return parallaxFocalPointImage;
};

var StartFramePanel = function StartFramePanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var media = attributes.media,
      motionPreset = attributes.motionPreset,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint,
      initialBackgroundScale = attributes.initialBackgroundScale,
      followThroughStart = attributes.followThroughStart,
      scrollingEffect = attributes.scrollingEffect;
  var parallaxFocalPointImage = getParallaxFocalPointImage(media);
  var isDoppler = scrollingEffect === 'doppler';

  if (!parallaxFocalPointImage) {
    return false;
  }

  var staticPanelTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Static Scrolling Settings', '__plugin_txtd');

  var parallaxPanelTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Parallax Scrolling Settings', '__plugin_txtd');

  var dopplerPanelTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Start Frame', '__plugin_txtd');

  var panelTitle = staticPanelTitle;

  if ('parallax' === scrollingEffect) {
    panelTitle = parallaxPanelTitle;
  }

  if (isDoppler) {
    panelTitle = dopplerPanelTitle;
  }

  var classNames = ['novablocks-focal-point-picker', "novablocks-focal-point-picker--".concat(scrollingEffect), "novablocks-focal-point-picker--start", Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["getSnapClassname"])(focalPoint)];
  var className = classNames.join(' ');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: panelTitle,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FocalPointPicker"], {
    label: 'Focal Point',
    url: parallaxFocalPointImage.url,
    dimensions: {
      width: parallaxFocalPointImage.width,
      height: parallaxFocalPointImage.height
    },
    value: focalPoint,
    onChange: function onChange(focalPoint) {
      setAttributes({
        motionPreset: 'custom',
        focalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["maybeSnapFocalPoint"])(focalPoint),
        finalFocalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["maybeSnapFocalPoint"])({
          x: focalPoint.x,
          y: finalFocalPoint.y
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: 'Zoom',
    value: initialBackgroundScale,
    onChange: function onChange(initialBackgroundScale) {
      setAttributes({
        motionPreset: 'custom',
        initialBackgroundScale: initialBackgroundScale
      });
    },
    min: 1,
    max: 2,
    step: 0.01
  }), scrollingEffect === 'doppler' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Smooth start transition', '__plugin_txtd'),
    checked: followThroughStart,
    onChange: function onChange() {
      return setAttributes({
        followThroughStart: !followThroughStart
      });
    }
  }));
};

var EndFramePanel = function EndFramePanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var media = attributes.media,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint,
      finalBackgroundScale = attributes.finalBackgroundScale,
      followThroughEnd = attributes.followThroughEnd,
      scrollingEffect = attributes.scrollingEffect;
  var parallaxFocalPointImage = getParallaxFocalPointImage(media);

  if (!parallaxFocalPointImage || scrollingEffect !== 'doppler') {
    return false;
  }

  var classNames = ['novablocks-focal-point-picker', "novablocks-focal-point-picker--".concat(scrollingEffect), 'novablocks-focal-point-picker--end', Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["getSnapClassname"])(focalPoint)];
  var className = classNames.join(' ');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('End Frame', '__plugin_txtd'),
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FocalPointPicker"], {
    label: 'Focal Point',
    url: parallaxFocalPointImage.url,
    dimensions: {
      width: parallaxFocalPointImage.width,
      height: parallaxFocalPointImage.height
    },
    value: finalFocalPoint,
    onChange: function onChange(finalFocalPoint) {
      setAttributes({
        motionPreset: 'custom',
        focalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["maybeSnapFocalPoint"])({
          x: finalFocalPoint.x,
          y: focalPoint.y
        }),
        finalFocalPoint: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_5__["maybeSnapFocalPoint"])(finalFocalPoint)
      });
    },
    disabled: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: 'Zoom',
    value: finalBackgroundScale,
    onChange: function onChange(finalBackgroundScale) {
      setAttributes({
        motionPreset: 'custom',
        finalBackgroundScale: finalBackgroundScale
      });
    },
    min: 1,
    max: 2,
    step: 0.01
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Smooth end transition', '__plugin_txtd'),
    checked: followThroughEnd,
    onChange: function onChange() {
      return setAttributes({
        motionPreset: 'custom',
        followThroughEnd: !followThroughEnd
      });
    }
  }));
};


/***/ }),

/***/ "./packages/components/build-module/tabs/index.js":
/*!********************************************************!*\
  !*** ./packages/components/build-module/tabs/index.js ***!
  \********************************************************/
/*! exports provided: Tab, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Tabs = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tabs);

    _this = _super.apply(this, arguments);
    _this.state = {
      activeTab: props.children[0].props.label
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tabs, [{
    key: "onClickTabItem",
    value: function onClickTabItem(tab) {
      this.setState({
        activeTab: tab
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children,
          activeTab = this.state.activeTab;
      var onClickTabItem = this.onClickTabItem.bind(this);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "novablocks-tabs"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ol", {
        className: "novablocks-tabs__list"
      }, children.map(function (child) {
        var label = child.props.label;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Tab, {
          activeTab: activeTab,
          key: label,
          label: label,
          onClick: onClickTabItem
        });
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "novablocks-tabs__content"
      }, children.map(function (child) {
        if (child.props.label !== activeTab) return undefined;
        return child.props.children;
      })));
    }
  }]);

  return Tabs;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Tab = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Tab, _Component2);

  var _super2 = _createSuper(Tab);

  function Tab() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tab);

    return _super2.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tab, [{
    key: "onClick",
    value: function onClick() {
      var _this$props = this.props,
          label = _this$props.label,
          onClick = _this$props.onClick;
      onClick(label);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          activeTab = _this$props2.activeTab,
          label = _this$props2.label;
      var onClick = this.onClick.bind(this);
      var className = 'novablocks-tab';

      if (activeTab === label) {
        className += ' novablocks-tab--active';
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        className: className,
        onClick: onClick
      }, label);
    }
  }]);

  return Tab;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);




/***/ }),

/***/ "./packages/components/build-module/text-placeholder/index.js":
/*!********************************************************************!*\
  !*** ./packages/components/build-module/text-placeholder/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);



var TextPlaceholder = function TextPlaceholder(props) {
  var rows = props.rows || 2;
  var arr = Array.from(Array(rows).keys());
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'novablocks-text-placeholder'
  }, arr.map(function (obj, index) {
    var units = index === arr.length - 1 ? Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(6, 12) : Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBetween"])(17, 20);
    var width = "".concat(units * 5, "%");
    var style = {
      width: width
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'novablocks-text-placeholder__row',
      style: style
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextPlaceholder);


/***/ }),

/***/ "./packages/components/build-module/toggle-group/index.js":
/*!****************************************************************!*\
  !*** ./packages/components/build-module/toggle-group/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./packages/components/node_modules/react-spring/web.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);









var ToggleGroup = function ToggleGroup(props) {
  var toggles = props.toggles,
      _onChange2 = props.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(function () {
    return new WeakMap();
  }),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 1),
      refMap = _useState2[0];

  var enabledToggles = toggles.filter(function (toggle) {
    return !!toggle.value;
  });
  var disabledToggles = toggles.filter(function (toggle) {
    return !toggle.value;
  });
  var config = {
    initial: false,
    enter: function enter(item) {
      return /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(next) {
          var ref;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ref = refMap.get(item);

                  if (!(typeof ref === "undefined")) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  setTimeout(function () {
                    next({
                      height: ref.offsetHeight
                    });
                  }, 100);
                  setTimeout(function () {
                    next({
                      opacity: 1,
                      left: 0
                    });
                  }, 200);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    },
    leave: function leave(item) {
      return /*#__PURE__*/function () {
        var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(next) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  next({
                    opacity: 0,
                    left: 40
                  });
                  setTimeout(function () {
                    next({
                      height: 0
                    });
                  }, 100);

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();
    }
  };
  var enabledTransitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useTransition"])(enabledToggles, function (item) {
    return item.attribute;
  }, config);
  var disabledTransitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useTransition"])(disabledToggles, function (item) {
    return item.attribute;
  }, config);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: 'components-toggle-group__panel',
    key: 'toggle-group-controls'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: 'components-toggle-group'
  }, !!enabledToggles.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--enabled'
  }, enabledTransitions.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      key: key,
      style: props,
      className: 'components-toggle-group__toggle-list-animated'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      ref: function ref(_ref4) {
        return _ref4 && refMap.set(item, _ref4);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "components-toggle-group__toggle-list-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: item.label,
      checked: !!item.value,
      onChange: function onChange(value) {
        _onChange2(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.attribute, value));
      }
    }))));
  })), !!disabledToggles.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("label", {
    className: 'components-toggle-group__toggle-list-label'
  }, "Elements you aren't using"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--disabled'
  }, disabledTransitions.map(function (_ref5) {
    var item = _ref5.item,
        key = _ref5.key,
        props = _ref5.props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
      key: key,
      style: props,
      className: 'components-toggle-group__toggle-list-animated'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      ref: function ref(_ref6) {
        return _ref6 && refMap.set(item, _ref6);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
      className: "components-toggle-group__toggle-list-item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: item.label,
      checked: !!item.value,
      onChange: function onChange(value) {
        _onChange2(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.attribute, value));
      }
    }))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleGroup);


/***/ }),

/***/ "./packages/components/build-module/viewport-observer/index.js":
/*!*********************************************************************!*\
  !*** ./packages/components/build-module/viewport-observer/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);





var viewportObserver = /*#__PURE__*/function () {
  function viewportObserver() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, viewportObserver);

    this.useOrientation = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["hasTouchScreen"])() && 'orientation' in window;
    this.bindEvents();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(viewportObserver, [{
    key: "bindEvents",
    value: function bindEvents() {
      var $window = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window);
      var updateViewportUnits = this.updateViewportUnits.bind(this);
      updateViewportUnits();

      if (this.useOrientation) {
        $window.on('orientationchange', function () {
          $window.one('resize', updateViewportUnits);
        });
      } else {
        $window.on('resize', updateViewportUnits);
      }
    }
  }, {
    key: "updateViewportUnits",
    value: function updateViewportUnits() {
      var root = document.documentElement;
      var windowWidth = this.useOrientation && window.screen && window.screen.availWidth || window.innerWidth;
      var windowHeight = this.useOrientation && window.screen && window.screen.availHeight || window.innerHeight;
      var vw = windowWidth / 100 + 'px';
      var vh = windowHeight / 100 + 'px';
      root.style.setProperty('--novablocks-1vw', vw);
      root.style.setProperty('--novablocks-1vh', vh);
    }
  }]);

  return viewportObserver;
}();

/* harmony default export */ __webpack_exports__["default"] = (new viewportObserver());


/***/ }),

/***/ "./packages/components/build-module/with-parallax/index.js":
/*!*****************************************************************!*\
  !*** ./packages/components/build-module/with-parallax/index.js ***!
  \*****************************************************************/
/*! exports provided: parallaxInit, withParallaxProvider, withParallaxContext, withParallaxControls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withParallaxProvider", function() { return withParallaxProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withParallaxContext", function() { return withParallaxContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withParallaxControls", function() { return withParallaxControls; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _novablocks_easings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @novablocks/easings */ "@novablocks/easings");
/* harmony import */ var _novablocks_easings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_novablocks_easings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index */ "./packages/components/build-module/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "./packages/components/build-module/with-parallax/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parallaxInit", function() { return _util__WEBPACK_IMPORTED_MODULE_11__["parallaxInit"]; });

/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







/**
 * WordPress dependencies
 */




var ParallaxContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createContext"])();

var withParallaxProvider = function withParallaxProvider(WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, _Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

      _this = _super.apply(this, arguments);
      _this.state = {
        scrollContainerWidth: 0,
        scrollContainerHeight: 0,
        progress: 0.5
      };
      _this.updateHandler = _this.updateState.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
      _this.scrollContainer = _this.getScrollContainer();
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
      key: "getScrollContainer",
      value: function getScrollContainer() {
        return document.querySelector('.edit-post-layout__content') || document.querySelector('.edit-post-editor-regions__content') || document.querySelector('.block-editor-editor-skeleton__content') || document.querySelector('.interface-interface-skeleton__content');
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.updateHandler);
        this.createBlockObservers();
        this.unsubscribeUpdate = wp.data.subscribe(this.updateHandler);

        if (this.scrollContainer) {
          this.scrollContainer.addEventListener('scroll', this.updateHandler);
        }

        this.updateState();
      }
    }, {
      key: "createBlockObservers",
      value: function createBlockObservers() {
        var _this2 = this;

        this.observers = [];
        Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_8__["findParents"])(this.container, '.wp-block').map(function (block) {
          if (window.MutationObserver) {
            var mutationObserver = new MutationObserver(function (movements) {
              movements.forEach(function (movement) {
                if ('style' === movement.attributeName) {
                  if (movement.oldValue && movement.oldValue.includes('transform: translate3d')) {
                    _this2.updateState();
                  }
                }
              });
            });
            mutationObserver.observe(block, {
              attributes: true,
              attributeOldValue: true,
              childList: false,
              subtree: false
            });

            _this2.observers.push(mutationObserver);
          }

          if (window.ResizeObserver) {
            var resizeObserver = new ResizeObserver(function () {
              _this2.updateState();
            });
            resizeObserver.observe(block);

            _this2.observers.push(resizeObserver);
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.updateHandler);
        this.observers.forEach(function (observer) {
          return observer.disconnect();
        });
        this.unsubscribeUpdate();

        if (this.scrollContainer) {
          this.scrollContainer.removeEventListener('scroll', this.updateHandler);
        }
      }
    }, {
      key: "updateState",
      value: function updateState() {
        var container = this.container;
        var scrollContainerHeight = this.scrollContainer.offsetHeight;
        var scrollContainerBox = this.scrollContainer.getBoundingClientRect();
        var config = Object.assign({}, this.props.attributes, {
          scrollContainerBox: scrollContainerBox,
          scrollContainerHeight: scrollContainerHeight
        });
        this.setState(Object(_util__WEBPACK_IMPORTED_MODULE_11__["getState"])(container, config));
      }
    }, {
      key: "getElementStyle",
      value: function getElementStyle() {
        var attributes = this.props.attributes;
        var scrollingEffect = attributes.scrollingEffect;

        if (!this.scrollContainer || !this.container) {
          return {};
        }

        var state = Object(_util__WEBPACK_IMPORTED_MODULE_11__["getState"])(this.container, Object.assign({}, this.state, attributes));
        var config = Object.assign({}, state, attributes);
        var styles = Object(_util__WEBPACK_IMPORTED_MODULE_11__["getStyles"])(config);
        return styles;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          ref: function ref(el) {
            return _this3.container = el;
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ParallaxContext.Provider, {
          value: {
            style: this.getElementStyle(),
            state: this.state,
            container: this.container,
            scrollContainer: this.scrollContainer
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(WrappedComponent, this.props))));
      }
    }]);

    return _class;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
};

var withParallaxControls = function withParallaxControls(WrappedComponent) {
  return /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2, _Component2);

    var _super2 = _createSuper(_class2);

    function _class2() {
      var _this4;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class2);

      _this4 = _super2.apply(this, arguments);
      _this4.state = {
        isScrolling: false
      };
      _this4.previewScrolling = _this4.previewScrolling.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this4));
      return _this4;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class2, [{
      key: "scrollFromTo",
      value: function scrollFromTo(start, end) {
        var _this5 = this;

        var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x) {
          return x;
        };
        var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
        var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1000;
        var scrollContainer = this.props.parallax.scrollContainer;
        var length = end - start;
        var duration = Math.abs(length) * 1000 / speed;
        var startTime = Date.now();

        function updateScrollTopLoop() {
          var currentTime = Date.now();
          var timePassed = currentTime - startTime;
          var progress = timePassed / duration;
          var newScrollTop = start + length * easing(progress);
          scrollContainer.scrollTop = newScrollTop;
        }

        scrollContainer.style.pointerEvents = 'none';
        var interval = setInterval(updateScrollTopLoop, 0);
        this.setState({
          isScrolling: true
        });
        setTimeout(function () {
          clearInterval(interval);

          _this5.setState({
            isScrolling: false
          });

          scrollContainer.scrollTop = start + length;
          scrollContainer.style.removeProperty('pointer-events');

          if (typeof callback === "function") {
            callback();
          }
        }, duration);
      }
    }, {
      key: "previewScrolling",
      value: function previewScrolling() {
        var _this6 = this;

        var _this$props$parallax = this.props.parallax,
            scrollContainer = _this$props$parallax.scrollContainer,
            container = _this$props$parallax.container,
            _this$props$parallax$ = _this$props$parallax.state,
            containerBox = _this$props$parallax$.containerBox,
            containerHeight = _this$props$parallax$.containerHeight,
            scrollContainerHeight = _this$props$parallax$.scrollContainerHeight,
            scrollContainerBox = _this$props$parallax$.scrollContainerBox;

        if (!container || !scrollContainer) {
          return;
        }

        var scrollTop = scrollContainer.scrollTop;
        var start = scrollTop + containerBox.top - scrollContainerBox.top - scrollContainerHeight;
        var length = containerHeight + scrollContainerHeight;

        if (start < 0) {
          length = length + start;
          start = 0;
        }

        var maxScroll = scrollContainer.scrollHeight - scrollContainer.offsetHeight;
        var distanceToBottom = maxScroll - (start + length);

        if (distanceToBottom < 0) {
          length = length + distanceToBottom;
        }

        var end = start + length;
        this.scrollFromTo(scrollTop, start, _novablocks_easings__WEBPACK_IMPORTED_MODULE_9__["easeOutQuart"], function () {
          _this6.scrollFromTo(start, end, _novablocks_easings__WEBPACK_IMPORTED_MODULE_9__["easeInOutCubic"], function () {}, 1000);
        }, 3000);
      }
    }, {
      key: "render",
      value: function render() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_index__WEBPACK_IMPORTED_MODULE_10__["ScrollingEffectControls"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          isScrolling: this.state.isScrolling,
          previewScrolling: this.previewScrolling
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(WrappedComponent, this.props));
      }
    }]);

    return _class2;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
};

var withParallaxContext = function withParallaxContext(WrappedComponent) {
  return /*#__PURE__*/function (_Component3) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class3, _Component3);

    var _super3 = _createSuper(_class3);

    function _class3() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class3);

      return _super3.apply(this, arguments);
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class3, [{
      key: "render",
      value: function render() {
        var _this7 = this;

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ParallaxContext.Consumer, null, function (context) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            parallax: context
          }, _this7.props));
        });
      }
    }]);

    return _class3;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
};

var withParallax = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_13__["compose"])([withParallaxProvider, withParallaxContext, withParallaxControls]);

/* harmony default export */ __webpack_exports__["default"] = (withParallax);


/***/ }),

/***/ "./packages/components/build-module/with-parallax/util.js":
/*!****************************************************************!*\
  !*** ./packages/components/build-module/with-parallax/util.js ***!
  \****************************************************************/
/*! exports provided: getIntermediateFocalPoint, getStyles, getStylesFromProps, getProps, getState, parallaxInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntermediateFocalPoint", function() { return getIntermediateFocalPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStylesFromProps", function() { return getStylesFromProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProps", function() { return getProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallaxInit", function() { return parallaxInit; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__);



function userPrefersReducedMotion() {
  var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return !!mediaQuery.matches;
}

var getIntermediateFocalPoint = function getIntermediateFocalPoint(focalPoint1, focalPoint2, progress) {
  if (!focalPoint1 && !focalPoint2) {
    return {
      x: 0.5,
      y: 0.5
    };
  }

  if (!focalPoint1) {
    return focalPoint2;
  }

  if (!focalPoint2) {
    return focalPoint1;
  }

  return {
    x: parseFloat(focalPoint1.x) + (parseFloat(focalPoint2.x) - parseFloat(focalPoint1.x)) * progress,
    y: parseFloat(focalPoint1.y) + (parseFloat(focalPoint2.y) - parseFloat(focalPoint1.y)) * progress
  };
};
var getStyles = function getStyles(config) {
  var props = getProps(config);
  var styles = getStylesFromProps(props);
  return styles;
};
var getStylesFromProps = function getStylesFromProps(props) {
  var parallaxAmount = props.parallaxAmount,
      width = props.width,
      height = props.height,
      moveX = props.moveX,
      moveY = props.moveY,
      offsetX = props.offsetX,
      offsetY = props.offsetY,
      scale = props.scale,
      focalPoint = props.focalPoint;
  return {
    width: width || '',
    height: height || '',
    minHeight: 0,
    maxWidth: 'none',
    transform: "translate(".concat(moveX, ",").concat(moveY * parallaxAmount, "px) translateX(").concat(offsetX, ") translateY(").concat(offsetY, "px) scale(").concat(scale, ")"),
    objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
    transformOrigin: focalPoint.x * 100 + '% 50%'
  };
};

function getIntermediateValue(initialValue, finalValue, progress) {
  return initialValue + (finalValue - initialValue) * progress;
}

function getScales(config) {
  var scrollingEffect = config.scrollingEffect,
      initialBackgroundScale = config.initialBackgroundScale,
      finalBackgroundScale = config.finalBackgroundScale,
      progress = config.progress;
  initialBackgroundScale = initialBackgroundScale || 1;

  if (scrollingEffect === 'parallax') {
    finalBackgroundScale = initialBackgroundScale;
  }

  var maxScale = Math.max(initialBackgroundScale, finalBackgroundScale);
  initialBackgroundScale = initialBackgroundScale / maxScale;
  finalBackgroundScale = finalBackgroundScale / maxScale;

  if (userPrefersReducedMotion()) {
    return {
      maxScale: 1,
      newScale: 1
    };
  }

  return {
    maxScale: maxScale,
    newScale: getIntermediateValue(initialBackgroundScale, finalBackgroundScale, progress)
  };
}

function getFocalPoint(config) {
  var scrollingEffect = config.scrollingEffect,
      focalPoint = config.focalPoint,
      finalFocalPoint = config.finalFocalPoint,
      progress = config.progress;

  if (!focalPoint) {
    focalPoint = {
      x: 0.5,
      y: 0.5
    };
  }

  if (scrollingEffect !== 'doppler') {
    return focalPoint;
  }

  return getIntermediateFocalPoint(focalPoint, finalFocalPoint, progress);
}

function getNewImageHeight(config, parallaxAmount) {
  var scrollContainerHeight = config.scrollContainerHeight,
      containerHeight = config.containerHeight;
  return containerHeight + (scrollContainerHeight - containerHeight) * parallaxAmount;
}

var getProps = function getProps(config, fixed) {
  var distance = config.distance,
      progress = config.progress,
      smoothStart = config.smoothStart,
      smoothEnd = config.smoothEnd,
      scrollingEffect = config.scrollingEffect,
      focalPoint = config.focalPoint,
      finalFocalPoint = config.finalFocalPoint,
      initialBackgroundScale = config.initialBackgroundScale,
      finalBackgroundScale = config.finalBackgroundScale,
      container = config.container,
      containerBox = config.containerBox,
      containerWidth = config.containerWidth,
      containerHeight = config.containerHeight,
      scrollContainer = config.scrollContainer,
      scrollContainerBox = config.scrollContainerBox,
      scrollContainerHeight = config.scrollContainerHeight;
  var newFocalPoint = getFocalPoint(config);

  if (scrollingEffect === 'static') {
    return {
      width: containerWidth,
      height: containerHeight,
      scale: initialBackgroundScale || 1,
      moveX: 0,
      moveY: 0,
      offsetX: 0,
      offsetY: 0,
      parallaxAmount: 0,
      focalPoint: newFocalPoint
    };
  }

  var parallaxAmount = userPrefersReducedMotion() ? 0 : scrollingEffect === 'parallax' ? 0.75 : 1;

  var _getScales = getScales(config),
      maxScale = _getScales.maxScale,
      newScale = _getScales.newScale;

  var newImageHeight = getNewImageHeight(config, parallaxAmount); // keep in sync with scroll

  var moveY = scrollContainerBox.top - containerBox.top;

  if (!smoothStart) {
    if (!!fixed && containerBox.top < 0) {
      moveY = scrollContainerBox.top;
    }

    if (!fixed && 0 > scrollContainerBox.top - containerBox.top) {
      moveY = 0;
    }
  }

  if (!smoothEnd) {
    if (scrollContainerBox.top - containerBox.top > containerHeight - scrollContainerHeight) {
      if (!!fixed) {
        moveY = scrollContainerBox.top - containerBox.top - containerHeight + scrollContainerHeight;
      } else {
        moveY = containerHeight - scrollContainerHeight;
      }
    }
  } // align top


  var offsetY = newImageHeight * maxScale * (newScale - 1) * 0.5; // position according to focalPoint

  offsetY += newImageHeight * (1 - maxScale * newScale) * newFocalPoint.y;
  return {
    distance: distance,
    parallaxAmount: parallaxAmount,
    progress: progress,
    width: containerWidth * maxScale,
    height: newImageHeight * maxScale,
    moveX: "".concat(fixed ? containerBox.left - scrollContainerBox.left : 0, "px"),
    moveY: moveY,
    offsetX: (1 / maxScale - 1) * newFocalPoint.x * 100 + '%',
    offsetY: offsetY,
    scale: newScale,
    focalPoint: newFocalPoint
  };
};
var getState = function getState(container, config) {
  if (!container || !config) {
    return {};
  }

  var followThroughStart = config.followThroughStart,
      followThroughEnd = config.followThroughEnd,
      scrollingEffect = config.scrollingEffect,
      scrollContainerHeight = config.scrollContainerHeight,
      scrollContainerBox = config.scrollContainerBox;
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var containerBox = container.getBoundingClientRect();
  var smoothStart = followThroughStart || scrollingEffect === 'parallax';
  var smoothEnd = followThroughEnd || scrollingEffect === 'parallax';
  var current = scrollContainerBox.top - containerBox.top;
  var distance = containerHeight - scrollContainerHeight;

  if (smoothStart) {
    current += scrollContainerHeight;
    distance += scrollContainerHeight;
  }

  if (smoothEnd) {
    distance += scrollContainerHeight;
  }

  var progress = distance <= 0 ? 0.5 : current / distance;

  if (!smoothStart) {
    progress = Math.max(0, progress);
  }

  if (!smoothEnd) {
    progress = Math.min(1, progress);
  }

  if (userPrefersReducedMotion()) {
    progress = 0.5;
  }

  return {
    progress: progress,
    distance: distance,
    smoothStart: smoothStart,
    smoothEnd: smoothEnd,
    containerBox: containerBox,
    containerHeight: containerHeight,
    containerWidth: containerWidth,
    scrollContainerHeight: scrollContainerHeight,
    scrollContainerBox: scrollContainerBox
  };
};

function getScrollContainerHeight() {
  var useOrientation = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_1__["hasTouchScreen"])() && 'orientation' in window;
  return useOrientation && window.screen && window.screen.availHeight || window.innerHeight;
}

var parallaxInit = function parallaxInit($blocks) {
  var frameRendered = false;
  var scrollContainerHeight = getScrollContainerHeight();
  $blocks.each(function (i, container) {
    var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(container);
    var followThroughStart = !!$container.data('smooth-start');
    var followThroughEnd = !!$container.data('smooth-end');
    var scrollingEffect = $container.data('scrolling-effect');
    var focalPoint = $container.data('focal-point');
    var finalFocalPoint = $container.data('final-focal-point');
    var initialBackgroundScale = $container.data('initial-background-scale');
    var finalBackgroundScale = $container.data('final-background-scale');
    var scrollContainerBox = {
      top: 0,
      left: 0
    };
    var config = {
      followThroughStart: followThroughStart,
      followThroughEnd: followThroughEnd,
      scrollingEffect: scrollingEffect,
      scrollContainerHeight: scrollContainerHeight,
      scrollContainerBox: scrollContainerBox,
      focalPoint: focalPoint,
      finalFocalPoint: finalFocalPoint,
      initialBackgroundScale: initialBackgroundScale,
      finalBackgroundScale: finalBackgroundScale
    };
    $container.data({
      state: getState(container, config),
      config: config
    });
    var $parallax = $container.find('.novablocks-parallax');
    $container.data('parallax', $parallax);

    function parallaxUpdateState() {
      var newConfig = Object.assign({}, config, {
        scrollContainerHeight: getScrollContainerHeight()
      });
      var state = getState(container, newConfig);
      $container.data('state', state);
      $container.data('config', newConfig);
      frameRendered = false;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', parallaxUpdateState);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', parallaxUpdateState);
  });

  function parallaxUpdateLoop() {
    if (!frameRendered) {
      $blocks.each(function (i, obj) {
        var $container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj);
        var $background = $container.data('parallax');
        var $foreground = $background.find('.novablocks-foreground');
        var state = $container.data('state');
        var config = $container.data('config');
        config = Object.assign({}, state, config);
        var props = getProps(config, true);
        $foreground.css('transform', "translate3d(0,".concat(-props.moveY * props.parallaxAmount, "px,0)")); // because of fixed positioning

        props.moveY = -1 * props.moveY;

        if (0 < props.progress && props.progress < 1) {
          props.parallaxAmount = 1 - props.parallaxAmount;
        }

        var styles = getStylesFromProps(props);
        $container.data('parallax').css(styles);
      });
      frameRendered = true;
    }

    requestAnimationFrame(parallaxUpdateLoop);
  }

  requestAnimationFrame(parallaxUpdateLoop);
};


/***/ }),

/***/ "./packages/components/node_modules/classnames/index.js":
/*!**************************************************************!*\
  !*** ./packages/components/node_modules/classnames/index.js ***!
  \**************************************************************/
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

/***/ "./packages/components/node_modules/react-spring/renderprops.js":
/*!**********************************************************************!*\
  !*** ./packages/components/node_modules/react-spring/renderprops.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"));
var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js"));
var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(__webpack_require__(/*! react-dom */ "react-dom"));

let bugfixes = undefined;
let applyAnimatedValues = undefined;
let colorNames = [];
let requestFrame = cb => typeof window !== 'undefined' && window.requestAnimationFrame(cb);
let cancelFrame = cb => typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
let interpolation = undefined;
let now = () => Date.now();
let defaultElement = undefined;
let createAnimatedStyle = undefined;
const injectApplyAnimatedValues = (fn, transform) => applyAnimatedValues = {
  fn,
  transform
};
const injectColorNames = names => colorNames = names;
const injectBugfixes = fn => bugfixes = fn;
const injectInterpolation = cls => interpolation = cls;
const injectFrame = (raf, caf) => {
  var _ref = [raf, caf];
  requestFrame = _ref[0];
  cancelFrame = _ref[1];
  return _ref;
};
const injectNow = nowFn => now = nowFn;
const injectDefaultElement = el => defaultElement = el;
const injectCreateAnimatedStyle = factory => createAnimatedStyle = factory;

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

class Animated {
  attach() {}

  detach() {}

  getValue() {}

  getAnimatedValue() {
    return this.getValue();
  }

  addChild(child) {}

  removeChild(child) {}

  getChildren() {
    return [];
  }

}

const getValues = object => Object.keys(object).map(k => object[k]);

class AnimatedWithChildren extends Animated {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.children = [];

    this.getChildren = () => this.children;

    this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _this;
    };
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArrayWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.getAnimatedValue = () => this.getValue();

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObjectWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.getAnimatedValue = () => this.getValue(true);

    this.attach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

}

class AnimatedStyle extends AnimatedObjectWithChildren {
  constructor(style) {
    super();
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

class Interpolation {
  // Default config = config, args
  // Short config   = range, output, extrapolate
  static create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output,
      extrapolate: extra || 'extend'
    });
    let outputRange = config.output;
    let inputRange = config.range || [0, 1];

    let easing = config.easing || (t => t);

    let extrapolateLeft = 'extend';
    let map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    let extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return input => {
      let range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  }

}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba)); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return Interpolation.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
}

class AnimatedInterpolation extends AnimatedArrayWithChildren {
  constructor(parents, _config, _arg) {
    super();

    this.getValue = () => this.calc(...this.payload.map(value => value.getValue()));

    this.updateConfig = (config, arg) => this.calc = Interpolation.create(config, arg);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    this.calc = Interpolation.create(_config, _arg);
  }

}
const interpolate$1 = (parents, config, arg) => parents && new AnimatedInterpolation(parents, config, arg);

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(child => findAnimatedStyles(child, styles));
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


class AnimatedValue extends AnimatedWithChildren {
  constructor(_value) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.getValue = () => this.value;

    this.updateStyles = () => findAnimatedStyles(this, this.animatedStyles);

    this.updateValue = value => this.flush(this.value = value);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.value = _value;
    this.animatedStyles = new Set();
    this.done = false;
    this.startPosition = _value;
    this.lastPosition = _value;
    this.lastVelocity = undefined;
    this.lastTime = undefined;
    this.controller = undefined;
  }

  flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  }

}

class AnimatedArray extends AnimatedArrayWithChildren {
  constructor(array) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach((v, i) => _this.payload[i].setValue(v, flush));
      } else _this.payload.forEach((v, i) => _this.payload[i].setValue(value, flush));
    };

    this.getValue = () => this.payload.map(v => v.getValue());

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = array.map(n => new AnimatedValue(n));
  }

}

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  let i;

  for (i in a) if (!(i in b)) return false;

  for (i in b) if (a[i] !== b[i]) return false;

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj(...args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(k => object[k]);
}
function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        native = props.native,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        impl = props.impl,
        inject = props.inject,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        autoStart = props.autoStart,
        ref = props.ref,
        forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  const forward = getForwardProps(props);
  const rest = Object.keys(props).reduce((a, k) => forward[k] !== void 0 ? a : _extends({}, a, {
    [k]: props[k]
  }), {});
  return _extends({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value)
  });
}
function convertValues(props) {
  const from = props.from,
        to = props.to,
        native = props.native;
  const allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

const check = value => value === 'auto';

const overwrite = (width, height) => (acc, _ref) => {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: value === 'auto' ? ~name.indexOf('height') ? height : width : value
  });
};

function fixAuto(props, callback) {
  const from = props.from,
        to = props.to,
        children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  let element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  const elementStyles = element.props.style; // Return v.dom with injected ref

  return React__default.createElement(element.type, _extends({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: _extends({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: _ref2 => {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        let node = ReactDOM.findDOMNode(_ref2);
        let width, height;
        let cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          const paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          const paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          const borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          const borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        const convert = overwrite(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, style => style);

let active = false;
const controllers = new Set();

const frameLoop = () => {
  let time = now();

  for (let controller of controllers) {
    let isDone = true;
    let noChange = true;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

const addController = controller => {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

const removeController = controller => {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

class Controller {
  constructor(props, config) {
    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = () => this.props.native ? this.interpolations : this.animatedProps;

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  update(props) {
    this.props = _extends({}, this.props, props);

    let _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reset merged props when necessary

    let extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref3, i) => {
      let name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      let entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = typeof value === 'number';
      const isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = !isNumber && !isString && Array.isArray(value);
      let fromValue = from[name] !== undefined ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        this.hasChanged = true;
        let parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          const prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        const animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(value => value.prepare(this));
        return _extends({}, acc, {
          [name]: _extends({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            changes: value,
            fromValues: toArray(parent.getValue()),
            toValues: toArray(target ? toValue.getPayload() : toValue),
            immediate: callProp(immediate, name),
            delay: withDefault(toConfig.delay, delay || 0),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start(...start);
    const onEnd = start[0],
          onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  }

  start(onEnd, onUpdate) {
    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(res => this.resolve = res);
  }

  stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(a => a.changes = undefined);
    this.debouncedOnEnd({
      finished
    });
  }

  destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  }

  debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    const onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  }

}

class AnimatedProps extends AnimatedObjectWithChildren {
  constructor(props, callback) {
    super();
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.payload = props;
    this.update = callback;
    this.attach();
  }

}

function createAnimatedComponent(Component) {
  class AnimatedComponent extends React__default.Component {
    constructor(props) {
      super();

      this.callback = () => {
        if (this.node) {
          const didUpdate = applyAnimatedValues.fn(this.node, this.propsAnimated.getAnimatedValue(), this);
          if (didUpdate === false) this.forceUpdate();
        }
      };

      this.attachProps(props);
    }

    componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    }

    setNativeProps(props) {
      const didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.


    attachProps(_ref) {
      let forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);

      const oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    }

    shouldComponentUpdate(props) {
      const style = props.style,
            nextProps = _objectWithoutPropertiesLoose(props, ["style"]);

      const _this$props = this.props,
            currentStyle = _this$props.style,
            currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    }

    render() {
      const _this$propsAnimated$g = this.propsAnimated.getValue(),
            scrollTop = _this$propsAnimated$g.scrollTop,
            scrollLeft = _this$propsAnimated$g.scrollLeft,
            animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React__default.createElement(Component, _extends({}, animatedProps, {
        ref: node => this.node = handleRef(node, this.props.forwardRef)
      }));
    }

  }

  return React__default.forwardRef((props, ref) => React__default.createElement(AnimatedComponent, _extends({}, props, {
    forwardRef: ref
  })));
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

class Spring extends React__default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    this.controller = new Controller(null, null);
    this.didUpdate = false;
    this.didInject = false;
    this.finished = true;

    this.start = () => {
      this.finished = false;
      let wasMounted = this.mounted;
      this.controller.start(props => this.finish(_extends({}, props, {
        wasMounted
      })), this.update);
    };

    this.stop = () => this.controller.stop(true);

    this.update = () => this.mounted && this.setState({
      internal: true
    });

    this.finish = (_ref) => {
      let finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      this.finished = true;

      if (this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (this.props.onRest && (wasMounted || !noChange)) this.props.onRest(this.controller.merged); // Restore end-state

        if (this.mounted && this.didInject) {
          this.afterInject = convertValues(this.props);
          this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (this.mounted && (this.didInject || this.props.after)) this.setState({
          internal: true
        });
        this.didInject = false;
      }
    };
  }

  componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  }

  componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  }

  static getDerivedStateFromProps(props, _ref2) {
    let internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    const from = props.from,
          to = props.to,
          reset = props.reset,
          force = props.force;
    const propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged,
      lastProps: props,
      internal: false
    };
  }

  render() {
    const children = this.props.children;
    const propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      const frame = this.props.inject(this.props, injectProps => {
        // The inject frame has rendered, now let's update animations...
        this.injectProps = injectProps;
        this.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    let values = _extends({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = _extends({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  }

  componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  }

}
Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

class Trail extends React__default.PureComponent {
  constructor() {
    super(...arguments);
    this.first = true;
    this.instances = new Set();

    this.hook = (instance, index, length, reverse) => {
      // Add instance to set
      this.instances.add(instance); // Return undefined on the first index and from then on the previous instance

      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(this.instances)[reverse ? index + 1 : index - 1];
    };
  }

  render() {
    const _this$props = this.props,
          items = _this$props.items,
          _children = _this$props.children,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? {} : _this$props$from,
          initial = _this$props.initial,
          reverse = _this$props.reverse,
          keys = _this$props.keys,
          delay = _this$props.delay,
          onRest = _this$props.onRest,
          props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    const array = toArray(items);
    return toArray(array).map((item, i) => React__default.createElement(Spring, _extends({
      onRest: i === 0 ? onRest : null,
      key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
      from: this.first && initial !== void 0 ? initial || {} : from
    }, props, {
      delay: i === 0 && delay || undefined,
      attach: instance => this.hook(instance, i, array.length, reverse),
      children: props => {
        const child = _children(item, i);

        return child ? child(props) : null;
      }
    })));
  }

  componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  }

}
Trail.defaultProps = {
  keys: item => item
};

const DEFAULT = '__default';

class KeyframesImpl extends React__default.PureComponent {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.guid = 0;
    this.state = {
      props: {},
      resolve: () => null,
      last: true,
      index: 0
    };

    this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(resolve => {
        _this.mounted && _this.setState(state => ({
          props,
          resolve,
          last,
          index
        }), () => _this.running = false);
      });
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(previous) {
    var _this2 = this;

    const _this$props = this.props,
          states = _this$props.states,
          f = _this$props.filter,
          state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        const localId = ++this.guid;
        const slots = states[state];

        if (slots) {
          if (Array.isArray(slots)) {
            let q = Promise.resolve();

            for (let i = 0; i < slots.length; i++) {
              let index = i;
              let slot = slots[index];
              let last = index === slots.length - 1;
              q = q.then(() => localId === this.guid && this.next(f(slot), last, index));
            }
          } else if (typeof slots === 'function') {
            let index = 0;
            slots( // next
            function (props, last) {
              if (last === void 0) {
                last = false;
              }

              return localId === _this2.guid && _this2.next(f(props), last, index++);
            }, // cancel
            () => requestFrame(() => this.instance && this.instance.stop()), // ownprops
            this.props);
          } else {
            this.next(f(states[state]));
          }
        }
      }
    }
  }

  render() {
    const _this$state = this.state,
          props = _this$state.props,
          resolve = _this$state.resolve,
          last = _this$state.last,
          index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    let _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return React__default.createElement(Component, _extends({
      ref: _ref => this.instance = handleRef(_ref, forwardRef),
      config: config
    }, rest, props, {
      onRest: args => {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  }

}

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
const Keyframes = React__default.forwardRef((props, ref) => React__default.createElement(KeyframesImpl, _extends({}, props, {
  forwardRef: ref
})));

Keyframes.create = primitive => function (states, filter) {
  if (filter === void 0) {
    filter = states => states;
  }

  if (typeof states === 'function' || Array.isArray(states)) states = {
    [DEFAULT]: states
  };
  return props => React__default.createElement(KeyframesImpl, _extends({
    primitive: primitive,
    states: states,
    filter: filter
  }, props));
};

Keyframes.Spring = states => Keyframes.create(Spring)(states, interpolateTo);

Keyframes.Trail = states => Keyframes.create(Trail)(states, interpolateTo);

let guid = 0;

let get = props => {
  let items = props.items,
      keys = props.keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return _extends({
    items,
    keys: keys.map(key => String(key))
  }, rest);
};

class Transition extends React__default.PureComponent {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  constructor(prevProps) {
    super(prevProps);

    this.destroyItem = (item, key, state) => values => {
      const _this$props = this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

      if (this.mounted) {
        onDestroyed && onDestroyed(item);
        this.setState((_ref) => {
          let deleted = _ref.deleted;
          return {
            deleted: deleted.filter(t => t.key !== key)
          };
        });
        onRest && onRest(item, state, values);
      }
    };

    this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps
    };
  }

  static getDerivedStateFromProps(props, _ref2) {
    let first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);

    let _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    let _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    let current = _extends({}, state.current);

    let deleted = [...state.deleted]; // Compare next keys with current keys

    let currentKeys = Object.keys(current);
    let currentSet = new Set(currentKeys);
    let nextSet = new Set(keys);
    let added = keys.filter(item => !currentSet.has(item));
    let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
    let updated = keys.filter(item => currentSet.has(item));
    let delay = 0;
    added.forEach(key => {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'enter';
      current[key] = {
        state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(key => {
      const keyIndex = _keys.indexOf(key);

      const item = _items[keyIndex];
      const state = 'leave';
      deleted.push(_extends({}, current[key], {
        state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(key => {
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'update';
      current[key] = _extends({}, current[key], {
        item,
        state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    let out = keys.map(key => current[key]);
    deleted.forEach((_ref3) => {
      let left = _ref3.left,
          right = _ref3.right,
          transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);

      let pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(t => t.originalKey === right); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === left); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === right); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [...out.slice(0, pos), transition, ...out.slice(pos)];
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current,
      deleted,
      prevProps: props
    };
  }

  render() {
    const _this$props2 = this.props,
          initial = _this$props2.initial,
          _this$props2$from = _this$props2.from,
          _this$props2$enter = _this$props2.enter,
          _this$props2$leave = _this$props2.leave,
          _this$props2$update = _this$props2.update,
          onDestroyed = _this$props2.onDestroyed,
          keys = _this$props2.keys,
          items = _this$props2.items,
          onFrame = _this$props2.onFrame,
          onRest = _this$props2.onRest,
          onStart = _this$props2.onStart,
          trail = _this$props2.trail,
          config = _this$props2.config,
          _children = _this$props2.children,
          unique = _this$props2.unique,
          reset = _this$props2.reset,
          extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map((_ref4, i) => {
      let state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return React__default.createElement(Keyframes, _extends({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: {
          [state]: to
        },
        key: key,
        onRest: destroyed ? this.destroyItem(item, key, state) : onRest && (values => onRest(item, state, values)),
        onStart: onStart && (() => onStart(item, state)),
        onFrame: onFrame && (values => onFrame(item, state, values)),
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: props => {
          const child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  }

}
Transition.defaultProps = {
  keys: item => item,
  unique: false,
  reset: false
};

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
const extendedAnimated = domElements.reduce((acc, element) => {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);

exports.Spring = Spring;
exports.Keyframes = Keyframes;
exports.Transition = Transition;
exports.Trail = Trail;
exports.Controller = Controller;
exports.config = config;
exports.animated = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;


/***/ }),

/***/ "./packages/components/node_modules/react-spring/web.js":
/*!**************************************************************!*\
  !*** ./packages/components/node_modules/react-spring/web.js ***!
  \**************************************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@novablocks/easings":
/*!**************************************************!*\
  !*** external {"this":["novablocks","easings"]} ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["easings"]; }());

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

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/html-entities":
/*!***********************************************!*\
  !*** external {"this":["wp","htmlEntities"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "@wordpress/viewport":
/*!*******************************************!*\
  !*** external {"this":["wp","viewport"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["viewport"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map