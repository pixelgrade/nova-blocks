this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["core"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/core/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
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

/***/ "./packages/core/build-module/blocks/core/separator/index.js":
/*!*******************************************************************!*\
  !*** ./packages/core/build-module/blocks/core/separator/index.js ***!
  \*******************************************************************/
/*! exports provided: addSeparatorFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeparatorFilters", function() { return addSeparatorFilters; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


var addSeparatorFilters = function addSeparatorFilters(settings) {
  var Separator = function Separator(props) {
    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-separator', props.className);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className,
      dangerouslySetInnerHTML: {
        __html: settings.separator && settings.separator.markup
      }
    });
  };

  var replaceSeparatorEdit = wp.compose.createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      if ('core/separator' === props.name) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Separator, {
          className: props.attributes.className
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
      }
    };
  }, "replaceSeparatorEdit");

  var replaceSeparatorSave = function replaceSeparatorSave(element, blockType, attributes) {
    if ('core/separator' !== blockType.name) {
      return element;
    }

    return null;
  };

  wp.hooks.addFilter('editor.BlockEdit', 'nova-theme/separator', replaceSeparatorEdit);
  wp.hooks.addFilter('blocks.getSaveElement', 'nova-theme/separator', replaceSeparatorSave);
};


/***/ }),

/***/ "./packages/core/build-module/filters/with-advanced-gallery-attributes/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-advanced-gallery-attributes/index.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


var enableAdvancedMediaAttributeOnBlocks = ['novablocks/media', 'novablocks/advanced-gallery'];

function addAdvancedGalleryAttributes(block) {
  if (!enableAdvancedMediaAttributeOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    Object.assign(block.attributes, _novablocks_components__WEBPACK_IMPORTED_MODULE_0__["AdvancedGallery"].attributes);
  }

  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'novablocks/add-advanced-gallery-attributes', addAdvancedGalleryAttributes);


/***/ }),

/***/ "./packages/core/build-module/filters/with-block-id/index.js":
/*!*******************************************************************!*\
  !*** ./packages/core/build-module/filters/with-block-id/index.js ***!
  \*******************************************************************/
/*! no exports provided */
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var enableBlockIdAttributeOnBlocks = ['novablocks/announcement-bar'];

function addBlockIdAttribute(block) {
  if (!enableBlockIdAttributeOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    block.attributes = Object.assign(block.attributes, {
      blockId: {
        type: 'string',
        default: ''
      }
    });
  }

  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('blocks.registerBlockType', 'novablocks/add-blockId-attribute', addBlockIdAttribute);
var withBlockIdAttribute = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(function (BlockEdit) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BetterBlockEdit, _Component);

    var _super = _createSuper(BetterBlockEdit);

    function BetterBlockEdit() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BetterBlockEdit);

      return _super.apply(this, arguments);
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BetterBlockEdit, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (enableBlockIdAttributeOnBlocks.includes(this.props.name)) {
          this.props.setAttributes({
            blockId: this.props.clientId
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BlockEdit, this.props);
      }
    }]);

    return BetterBlockEdit;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
}, "withBlockIdAttribute");
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('editor.BlockEdit', 'novablocks/with-blockId-attribute', withBlockIdAttribute);


/***/ }),

/***/ "./packages/core/build-module/filters/with-block-index/index.js":
/*!**********************************************************************!*\
  !*** ./packages/core/build-module/filters/with-block-index/index.js ***!
  \**********************************************************************/
/*! no exports provided */
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var enableBlockIndexAttributeOnBlocks = ['novablocks/hero'];

function addBlockIndexAttribute(block) {
  if (!enableBlockIndexAttributeOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    block.attributes = Object.assign(block.attributes, {
      blockIndex: {
        type: 'number',
        default: -1
      }
    });
  }

  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('blocks.registerBlockType', 'novablocks/add-blockIndex-attribute', addBlockIndexAttribute);
var withBlockIndexAttribute = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(function (BlockEdit) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BetterBlockEdit, _Component);

    var _super = _createSuper(BetterBlockEdit);

    function BetterBlockEdit() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BetterBlockEdit);

      return _super.apply(this, arguments);
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BetterBlockEdit, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateIndex();
      }
    }, {
      key: "updateIndex",
      value: function updateIndex() {
        var _this = this;

        if (enableBlockIndexAttributeOnBlocks.includes(this.props.name)) {
          var oldIndex = this.props.attributes.blockIndex;
          var newIndex = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/block-editor').getBlocks().findIndex(function (block) {
            return block.clientId === _this.props.clientId;
          });

          if (oldIndex !== newIndex) {
            this.props.setAttributes({
              blockIndex: newIndex
            });
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BlockEdit, this.props);
      }
    }]);

    return BetterBlockEdit;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
}, "withBlockIndexAttribute");
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('editor.BlockEdit', 'novablocks/with-blockIndex-attribute', withBlockIndexAttribute);


/***/ }),

/***/ "./packages/core/build-module/filters/with-cards-manager/index.js":
/*!************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-cards-manager/index.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);







var ALLOWED_BLOCKS = ['novablocks/cards-collection'];
var withCardsManager = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    if (!ALLOWED_BLOCKS.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__["ControlsDrawerContent"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Set up elements for this block', '__plugin_txtd')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__["CardsManager"].Component, props))));
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('editor.BlockEdit', 'novablocks/with-cards-manager', withCardsManager);


/***/ }),

/***/ "./packages/core/build-module/filters/with-controls-sections/index.js":
/*!****************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-controls-sections/index.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);






var withControlsSections = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__["ControlsSections"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props));
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('editor.BlockEdit', 'novablocks/with-controls-sections', withControlsSections);


/***/ }),

/***/ "./packages/core/build-module/filters/with-doppler-attributes/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-doppler-attributes/index.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


var enableDopplerAttributeOnBlocks = ['novablocks/hero', 'novablocks/google-map', 'novablocks/slideshow'];

function addDopplerAttributes(block) {
  if (!enableDopplerAttributeOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    Object.assign(block.attributes, _novablocks_components__WEBPACK_IMPORTED_MODULE_0___default.a);
  }

  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'novablocks/add-advanced-gallery-attributes', addDopplerAttributes);


/***/ }),

/***/ "./packages/core/build-module/filters/with-emphasis-level/index.js":
/*!*************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-emphasis-level/index.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);





var enableFontSizeControlOnBlocks = ['novablocks/media', 'novablocks/cards-collection', 'novablocks/posts-collection'];
var withEmphasisLevelControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    if (!enableFontSizeControlOnBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_1__["EmphasisLevelControls"], props));
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('editor.BlockEdit', 'novablocks/with-ehpasis-level-controls', withEmphasisLevelControls);

function addEmphasisLevelAttribute(block) {
  if (!enableFontSizeControlOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, {
    blockStyle: {
      type: 'string',
      default: 'basic'
    },
    contentStyle: {
      type: 'string',
      default: block.name === 'novablocks/media' ? 'moderate' : 'basic'
    },
    emphasisByContrast: {
      number: 'number',
      default: 1
    }
  });
  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addEmphasisLevelAttribute);


/***/ }),

/***/ "./packages/core/build-module/filters/with-font-size-picker/index.js":
/*!***************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-font-size-picker/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);









var enableFontSizeControlOnBlocks = ['core/quote', 'core/pullquote', 'core/heading', 'novablocks/headline'];
var fontSizeOptions = [{
  value: 'smallest',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Smallest', '__plugin_txtd')
}, {
  value: 'smaller',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Smaller', '__plugin_txtd')
}, {
  value: 'normal',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Normal', '__plugin_txtd')
}, {
  value: 'larger',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Larger', '__plugin_txtd')
}, {
  value: 'largest',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Largest', '__plugin_txtd')
}];
var defaultFontSize = 'normal';

function replaceActiveFontSize(className, fontSize, nextFontSize) {
  if (className) {
    var regex = new RegExp('has-[a-z]+-font-size', 'gi');
    className = className.replace(regex, '').trim();
  }

  var nextClassName = 'has-' + nextFontSize + '-font-size';
  return className ? className + ' ' + nextClassName : nextClassName;
}

function withFontSizePicker(WrappedComponent) {
  return function (props) {
    var _props$attributes = props.attributes,
        className = _props$attributes.className,
        fontSize = _props$attributes.fontSize,
        level = _props$attributes.level,
        setAttributes = props.setAttributes;
    var selectValue = fontSizeOptions.find(function (x) {
      return x.value === fontSize;
    }) ? fontSize : defaultFontSize;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text Settings', '__plugin_txtd'),
      className: "blocks-custom-font-size"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Font Size', '__plugin_txtd'),
      value: selectValue,
      options: fontSizeOptions,
      onChange: function onChange(nextFontSize) {
        setAttributes({
          fontSize: nextFontSize,
          className: replaceActiveFontSize(className, fontSize, nextFontSize)
        });
      }
    }))));
  };
}

var withFontSizeControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  var BetterComponent = withFontSizePicker(OriginalComponent);
  return function (props) {
    if (!enableFontSizeControlOnBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BetterComponent, props);
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('editor.BlockEdit', 'novablocks/with-inspector-controls', withFontSizeControl);

function addFontSizeAttribute(block) {
  if (!enableFontSizeControlOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, {
    fontSize: {
      type: 'string',
      default: defaultFontSize
    }
  });
  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('blocks.registerBlockType', 'novablocks/add-font-size-attribute', addFontSizeAttribute);


/***/ }),

/***/ "./packages/core/build-module/filters/with-grid-generator/attributes.json":
/*!********************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-grid-generator/attributes.json ***!
  \********************************************************************************/
/*! exports provided: gridcolumns, gridrows, featuresize, featureposition, fragmentation, imageweightleft, imageweightright, metadetailsleft, metadetailsright, boostfeature, subfeature, balancemdandiw, hierarchycrossing, flipcolsrows, layoutStyle, headerPosition, headerColumn, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"gridcolumns\":{\"type\":\"number\",\"default\":6},\"gridrows\":{\"type\":\"number\",\"default\":6},\"featuresize\":{\"type\":\"number\",\"default\":4},\"featureposition\":{\"type\":\"number\",\"default\":1},\"fragmentation\":{\"type\":\"number\",\"default\":1},\"imageweightleft\":{\"type\":\"number\",\"default\":1},\"imageweightright\":{\"type\":\"number\",\"default\":2},\"metadetailsleft\":{\"type\":\"number\",\"default\":10},\"metadetailsright\":{\"type\":\"number\",\"default\":6},\"boostfeature\":{\"type\":\"boolean\",\"default\":false},\"subfeature\":{\"type\":\"boolean\",\"default\":true},\"balancemdandiw\":{\"type\":\"boolean\",\"default\":false},\"hierarchycrossing\":{\"type\":\"number\",\"default\":30},\"flipcolsrows\":{\"type\":\"boolean\",\"default\":false},\"layoutStyle\":{\"type\":\"string\",\"default\":\"parametric\"},\"headerPosition\":{\"type\":\"number\",\"default\":0},\"headerColumn\":{\"type\":\"number\",\"default\":0}}");

/***/ }),

/***/ "./packages/core/build-module/filters/with-grid-generator/index.js":
/*!*************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-grid-generator/index.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./packages/core/build-module/filters/with-grid-generator/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/core/build-module/filters/with-grid-generator/attributes.json", 1);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);






var enableGridGeneratorControls = ['novablocks/posts-collection'];
var withGridGeneratorControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    if (!enableGridGeneratorControls.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_2__["GridGenerator"].Controls, props));
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('editor.BlockEdit', 'novablocks/with-grid-generator-controls', withGridGeneratorControls);

function addGridGeneratorAttributes(block) {
  if (!enableGridGeneratorControls.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, _attributes__WEBPACK_IMPORTED_MODULE_1__);
  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addGridGeneratorAttributes);


/***/ }),

/***/ "./packages/core/build-module/filters/with-inner-blocks/index.js":
/*!***********************************************************************!*\
  !*** ./packages/core/build-module/filters/with-inner-blocks/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var enableInnerBlocks = ['novablocks/menu-food', 'novablocks/menu-food-section', 'novablocks/cards-collection'];
var withInnerBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, props) {
  var clientId = props.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var parentBlock = getBlock(clientId);
  var innerBlocks = parentBlock.innerBlocks;
  return _objectSpread({
    innerBlocks: innerBlocks
  }, props);
});
var withInnerBlocksComponent = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
  var BetterComponent = withInnerBlocks(OriginalComponent);
  return function (props) {
    if (!enableInnerBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BetterComponent, props);
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('editor.BlockEdit', 'novablocks/with-inner-blocks-component', withInnerBlocksComponent);


/***/ }),

/***/ "./packages/core/build-module/filters/with-latest-posts/attributes.json":
/*!******************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-latest-posts/attributes.json ***!
  \******************************************************************************/
/*! exports provided: postsToShow, loadingMode, specificPosts, preventDuplicatePosts, authors, categories, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"postsToShow\":{\"type\":\"integer\",\"default\":6},\"loadingMode\":{\"type\":\"string\",\"default\":\"automated\"},\"specificPosts\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"integer\"}},\"preventDuplicatePosts\":{\"type\":\"boolean\",\"default\":true},\"authors\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"integer\"}},\"categories\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"integer\"}},\"tags\":{\"type\":\"array\",\"default\":[],\"items\":{\"type\":\"integer\"}}}");

/***/ }),

/***/ "./packages/core/build-module/filters/with-latest-posts/index.js":
/*!***********************************************************************!*\
  !*** ./packages/core/build-module/filters/with-latest-posts/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./packages/core/build-module/filters/with-latest-posts/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/core/build-module/filters/with-latest-posts/attributes.json", 1);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./packages/core/build-module/filters/with-latest-posts/utils.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./packages/core/build-module/filters/with-latest-posts/store.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);






Object(_store__WEBPACK_IMPORTED_MODULE_4__["registerQueryStore"])("novablocks/".concat(_store__WEBPACK_IMPORTED_MODULE_4__["STORE_NAME"]));





var enablePostsQueryControlsOnBlocks = ['novablocks/posts-collection'];
var withPostsQueryControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    if (!enablePostsQueryControlsOnBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    }

    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var postsToShow = attributes.postsToShow,
        loadingMode = attributes.loadingMode,
        specificPosts = attributes.specificPosts,
        authors = attributes.authors,
        categories = attributes.categories,
        tags = attributes.tags,
        preventDuplicatePosts = attributes.preventDuplicatePosts;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_2__["ControlsSection"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Filter'),
      group: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Block Modules')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_2__["ControlsTab"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Settings')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_2__["QueryControls"], {
      key: 'query-controls',
      enableSpecific: true,
      preventDuplicatePosts: preventDuplicatePosts,
      onPreventDuplicatePostsChange: function onPreventDuplicatePostsChange(_preventDuplicatePosts) {
        setAttributes({
          preventDuplicatePosts: _preventDuplicatePosts
        });
      },
      numberOfItems: postsToShow,
      onNumberOfItemsChange: function onNumberOfItemsChange(_postsToShow) {
        return setAttributes({
          postsToShow: _postsToShow
        });
      },
      loadingMode: loadingMode,
      onLoadingModeChange: function onLoadingModeChange(_loadingMode) {
        return setAttributes({
          loadingMode: _loadingMode
        });
      },
      specificPosts: specificPosts,
      onSpecificPostsChange: function onSpecificPostsChange(_specificPosts) {
        return setAttributes({
          specificPosts: _specificPosts
        });
      },
      authors: authors,
      onAuthorsChange: function onAuthorsChange(_authors) {
        return setAttributes({
          authors: _authors
        });
      },
      categories: categories,
      onCategoriesChange: function onCategoriesChange(_categories) {
        return setAttributes({
          categories: _categories
        });
      },
      tags: tags,
      onTagsChange: function onTagsChange(_tags) {
        setAttributes({
          tags: _tags
        });
      }
    }))));
  };
});

function withPostsQueryAttributes(block) {
  if (!enablePostsQueryControlsOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, _attributes__WEBPACK_IMPORTED_MODULE_1__);
  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('blocks.registerBlockType', 'novablocks/with-posts-query-attributes', withPostsQueryAttributes);
var withLatestPosts = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select, props) {
  var attributes = props.attributes,
      clientId = props.clientId;
  var preventDuplicatePosts = attributes.preventDuplicatePosts;
  var latestPostsQuery = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["queryCriteriaFromAttributes"])(attributes);

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isSpecificPostModeActive"])(attributes) && preventDuplicatePosts) {
    var postIdsToExclude = select(_store__WEBPACK_IMPORTED_MODULE_4__["STORE_NAME"]).previousPostIds(clientId);
    latestPostsQuery.exclude = postIdsToExclude.join(',');
  }

  return {
    posts: select('core').getEntityRecords('postType', 'post', latestPostsQuery)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch, props) {
  var attributes = props.attributes;
  var markPostsAsDisplayed = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isSpecificPostModeActive"])(attributes) ? dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["STORE_NAME"]).markSpecificPostsAsDisplayed : dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["STORE_NAME"]).markPostsAsDisplayed;
  return {
    markPostsAsDisplayed: markPostsAsDisplayed
  };
}), withPostsQueryControls]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockEdit', 'novablocks/with-latest-posts', withLatestPosts);


/***/ }),

/***/ "./packages/core/build-module/filters/with-latest-posts/store.js":
/*!***********************************************************************!*\
  !*** ./packages/core/build-module/filters/with-latest-posts/store.js ***!
  \***********************************************************************/
/*! exports provided: STORE_NAME, registerQueryStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_NAME", function() { return STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerQueryStore", function() { return registerQueryStore; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var STORE_NAME = 'posts-collection';
var initialState = {
  queryBlocks: [],
  // list of Query blocks in the order they are on the page
  postsByBlock: {},
  // map of returned posts to block clientId
  specificPostsByBlock: {} // posts displayed by specific-mode, which always return in the selector

};
var UPDATE_BLOCKS = 'UPDATE_BLOCKS';
var MARK_POSTS_DISPLAYED = 'MARK_POSTS_DISPLAYED';
var MARK_SPECIFIC_POSTS_DISPLAYED = 'MARK_SPECIFIC_POSTS_DISPLAYED';
var actions = {
  updateBlocks: function updateBlocks(blocks) {
    return {
      type: UPDATE_BLOCKS,
      blocks: blocks
    };
  },
  markPostsAsDisplayed: function markPostsAsDisplayed(clientId, posts) {
    return {
      type: MARK_POSTS_DISPLAYED,
      clientId: clientId,
      posts: posts
    };
  },
  markSpecificPostsAsDisplayed: function markSpecificPostsAsDisplayed(clientId, posts) {
    return {
      type: MARK_SPECIFIC_POSTS_DISPLAYED,
      clientId: clientId,
      posts: posts
    };
  }
};
/**
 * @typedef Block A Gutenberg editor block
 * @type {object}
 * @typedef uuid Unique id
 * @type {string}
 */

/**
 * Returns the Query blocks that appear before the current one on the page
 *
 * @param {Block[]} orderedBlocks Ordered Blocks
 * @param {uuid} clientId client id
 * @returns {Block[]} blocks
 */

var blocksBefore = function blocksBefore(orderedBlocks, clientId) {
  var ourBlockIdx = orderedBlocks.findIndex(function (b) {
    return b.clientId === clientId;
  });
  return orderedBlocks.slice(0, ourBlockIdx);
};

var selectors = {
  previousPostIds: function previousPostIds(state, _clientId) {
    var queryBlocks = state.queryBlocks,
        specificPostsByBlock = state.specificPostsByBlock,
        postsByBlock = state.postsByBlock;
    var postIdsFromSpecificMode = queryBlocks.filter(function (_ref) {
      var clientId = _ref.clientId;
      return specificPostsByBlock[clientId];
    }).flatMap(function (_ref2) {
      var clientId = _ref2.clientId;
      return specificPostsByBlock[clientId].map(function (p) {
        return p.id;
      });
    });
    var previousPostIds = blocksBefore(queryBlocks, _clientId).filter(function (_ref3) {
      var clientId = _ref3.clientId;
      return postsByBlock[clientId];
    }).flatMap(function (_ref4) {
      var clientId = _ref4.clientId;
      return postsByBlock[clientId].map(function (p) {
        return p.id;
      });
    });
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniq"])(postIdsFromSpecificMode.concat(previousPostIds)).sort();
  }
};
var registerQueryStore = function registerQueryStore(blockName) {
  /**
   * Returns an array of all query blocks in the order they are on
   * the page. This is needed to be able to show the editor blocks in the order
   * that PHP will render them.
   *
   * @param {Block[]} blocks any blocks
   * @returns {Block[]} ordered query blocks
   */
  var getQueryBlocksInOrder = function getQueryBlocksInOrder(blocks) {
    return blocks.flatMap(function (block) {
      var queryBlocks = [];

      if (block.name === blockName) {
        queryBlocks.push(block);
      }

      return queryBlocks.concat(getQueryBlocksInOrder(block.innerBlocks));
    });
  };

  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case UPDATE_BLOCKS:
        return _objectSpread(_objectSpread({}, state), {}, {
          queryBlocks: getQueryBlocksInOrder(action.blocks)
        });

      case MARK_POSTS_DISPLAYED:
        return _objectSpread(_objectSpread({}, state), {}, {
          postsByBlock: _objectSpread(_objectSpread({}, state.postsByBlock), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.clientId, action.posts))
        });

      case MARK_SPECIFIC_POSTS_DISPLAYED:
        return _objectSpread(_objectSpread({}, state), {}, {
          specificPostsByBlock: _objectSpread(_objectSpread({}, state.specificPostsByBlock), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.clientId, action.posts))
        });
    }

    return state;
  };

  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["registerStore"])(STORE_NAME, {
    reducer: reducer,
    actions: actions,
    selectors: selectors,
    initialState: initialState
  });

  var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])('core/block-editor'),
      getClientIdsWithDescendants = _select.getClientIdsWithDescendants,
      getBlocks = _select.getBlocks;

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(STORE_NAME),
      updateBlocks = _dispatch.updateBlocks;

  var currentBlocksIds;
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(function () {
    var newBlocksIds = getClientIdsWithDescendants(); // I don't know why != works but it does, I guess getClientIdsWithDescendants is memoized?

    var blocksChanged = newBlocksIds !== currentBlocksIds;
    currentBlocksIds = newBlocksIds;

    if (blocksChanged) {
      updateBlocks(getBlocks());
    }
  });
};


/***/ }),

/***/ "./packages/core/build-module/filters/with-latest-posts/utils.js":
/*!***********************************************************************!*\
  !*** ./packages/core/build-module/filters/with-latest-posts/utils.js ***!
  \***********************************************************************/
/*! exports provided: isSpecificPostModeActive, queryCriteriaFromAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecificPostModeActive", function() { return isSpecificPostModeActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryCriteriaFromAttributes", function() { return queryCriteriaFromAttributes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Checks whether the specific post mode is active.
 *
 * @param {Object} attributes block attributes
 * @return {boolean} specific mode active flag
 */

var isSpecificPostModeActive = function isSpecificPostModeActive(_ref) {
  var loadingMode = _ref.loadingMode,
      specificPosts = _ref.specificPosts;
  return 'manual' === loadingMode && specificPosts && specificPosts.length;
};
/**
 * Builds query criteria from given attributes.
 *
 * @param {Object} attributes block attributes
 * @return {Object} criteria
 */

var queryCriteriaFromAttributes = function queryCriteriaFromAttributes(attributes) {
  var postsToShow = attributes.postsToShow,
      authors = attributes.authors,
      categories = attributes.categories,
      tags = attributes.tags,
      specificPosts = attributes.specificPosts,
      tagExclusions = attributes.tagExclusions;
  var criteria = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pickBy"])(isSpecificPostModeActive(attributes) ? {
    include: specificPosts,
    orderby: 'include',
    per_page: specificPosts.length
  } : {
    per_page: postsToShow,
    categories: categories,
    author: authors,
    tags: tags,
    tags_exclude: tagExclusions
  }, function (value) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value);
  });
  return criteria;
};


/***/ }),

/***/ "./packages/core/build-module/filters/with-overlay-color-attributes/index.js":
/*!***********************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-overlay-color-attributes/index.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


var enableOverlayColorAttributesOnBlocks = ['novablocks/hero', 'novablocks/slideshow'];

function addOverlayColorAttributes(block) {
  if (!enableOverlayColorAttributesOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    Object.assign(block.attributes, _novablocks_components__WEBPACK_IMPORTED_MODULE_0__["colorAttributes"]);
  }

  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'novablocks/add-overlay-color-attributes', addOverlayColorAttributes);


/***/ }),

/***/ "./packages/core/build-module/filters/with-space-and-sizing-controls/attributes.json":
/*!*******************************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-space-and-sizing-controls/attributes.json ***!
  \*******************************************************************************************/
/*! exports provided: emphasisBySpace, enableOverlapping, layoutGutter, blockTopSpacing, blockBottomSpacing, emphasisTopSpacing, emphasisBottomSpacing, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"emphasisBySpace\":{\"type\":\"number\",\"default\":1},\"enableOverlapping\":{\"type\":\"boolean\",\"default\":false},\"layoutGutter\":{\"type\":\"number\",\"default\":10},\"blockTopSpacing\":{\"type\":\"number\",\"default\":0},\"blockBottomSpacing\":{\"type\":\"number\",\"default\":0},\"emphasisTopSpacing\":{\"type\":\"number\",\"default\":1},\"emphasisBottomSpacing\":{\"type\":\"number\",\"default\":1}}");

/***/ }),

/***/ "./packages/core/build-module/filters/with-space-and-sizing-controls/index.js":
/*!************************************************************************************!*\
  !*** ./packages/core/build-module/filters/with-space-and-sizing-controls/index.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./packages/core/build-module/filters/with-space-and-sizing-controls/attributes.json");
var _attributes__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes */ "./packages/core/build-module/filters/with-space-and-sizing-controls/attributes.json", 1);
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");
/* harmony import */ var _novablocks_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");
/* harmony import */ var _novablocks_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ALLOWED_BLOCKS = ['novablocks/media', 'novablocks/cards-collection', 'novablocks/posts-collection'];
var ALLOWED_BLOCKS_ADVANCED = ['novablocks/media'];

var getEmphasisAttributes = function getEmphasisAttributes(_ref) {
  var emphasisBySpace = _ref.emphasisBySpace,
      enableOverlapping = _ref.enableOverlapping,
      verticalAlignment = _ref.verticalAlignment;
  var actualEmphasis = !enableOverlapping ? emphasisBySpace : -1 * emphasisBySpace;
  return {
    emphasisBySpace: emphasisBySpace,
    enableOverlapping: enableOverlapping,
    blockTopSpacing: actualEmphasis < 0 && ['center', 'bottom'].includes(verticalAlignment) ? actualEmphasis : 0,
    blockBottomSpacing: actualEmphasis < 0 && ['center', 'top'].includes(verticalAlignment) ? actualEmphasis : 0,
    emphasisTopSpacing: verticalAlignment !== 'top' ? actualEmphasis : 1,
    emphasisBottomSpacing: verticalAlignment !== 'bottom' ? actualEmphasis : 1,
    verticalAlignment: verticalAlignment
  };
};

var getRandomAttributes = function getRandomAttributes() {
  var getRandomSign = function getRandomSign() {
    return Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomArrayFromArray"])([-1, 0, 1], 1)[0];
  };

  var block = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomBetween"])(0, 3);
  var emphasis = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomBetween"])(0, 3);
  var blockTopSign = getRandomSign();
  var blockBottomSign = getRandomSign();
  var emphasisTopSign = getRandomSign();
  var emphasisBottomSign = getRandomSign();
  var verticalAlignment = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomArrayFromArray"])(['top', 'center', 'bottom'], 1)[0];
  var enableOverlapping = Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomArrayFromArray"])([true, false], 1)[0];
  return {
    blockTopSpacing: block * blockTopSign,
    blockBottomSpacing: block * blockBottomSign,
    emphasisTopSpacing: emphasis * emphasisTopSign,
    emphasisBottomSpacing: emphasis * emphasisBottomSign,
    enableOverlapping: enableOverlapping,
    verticalAlignment: verticalAlignment
  };
};

var withSpaceAndSizingControlsAdvanced = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    var _props$settings, _props$settings$media, _props$settings$media2;

    if (!ALLOWED_BLOCKS_ADVANCED.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    var presetOptions = props === null || props === void 0 ? void 0 : (_props$settings = props.settings) === null || _props$settings === void 0 ? void 0 : (_props$settings$media = _props$settings.media) === null || _props$settings$media === void 0 ? void 0 : (_props$settings$media2 = _props$settings$media.spaceAndSizing) === null || _props$settings$media2 === void 0 ? void 0 : _props$settings$media2.presetOptions;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsSection"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Space and Sizing'),
      priority: 30
    }, !!presetOptions && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["PresetControl"], {
      key: 'media-card-layout-preset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Choose a layout preset:', '__plugin_txtd'),
      options: presetOptions,
      randomize: getRandomAttributes
    }))));
  };
});
var componentWithSettings = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["withSettings"], withSpaceAndSizingControlsAdvanced]);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__["addFilter"])('editor.BlockEdit', 'novablocks/with-space-and-sizing-advanced', componentWithSettings);
var withSpaceAndSizingControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    if (!ALLOWED_BLOCKS.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    }

    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var blockTopSpacing = attributes.blockTopSpacing,
        blockBottomSpacing = attributes.blockBottomSpacing,
        emphasisTopSpacing = attributes.emphasisTopSpacing,
        emphasisBottomSpacing = attributes.emphasisBottomSpacing,
        emphasisBySpace = attributes.emphasisBySpace,
        enableOverlapping = attributes.enableOverlapping;
    var verticalAlignment = attributes.verticalAlignment || 'center';
    var SPACING_MIN_VALUE = ALLOWED_BLOCKS_ADVANCED.includes(props.name) ? -3 : 0;
    var SPACING_MAX_VALUE = 3;
    var cssVars = {
      '--novablocks-emphasis-top-spacing': verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
      '--novablocks-emphasis-bottom-spacing': verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing,
      '--novablocks-block-top-spacing': blockTopSpacing,
      '--novablocks-block-bottom-spacing': blockBottomSpacing,
      '--novablocks-block-zindex': Math.max(0, -1 * (blockTopSpacing + blockBottomSpacing))
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: cssVars
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsSection"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Space and Sizing')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Customize')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      key: 'space-and-sizing-customize-1',
      className: Object(_novablocks_utils__WEBPACK_IMPORTED_MODULE_3__["getControlsClasses"])(attributes, getEmphasisAttributes)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      value: emphasisBySpace,
      onChange: function onChange(emphasisBySpace) {
        var newAttributes = getEmphasisAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
          emphasisBySpace: emphasisBySpace
        }));
        setAttributes(newAttributes);
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Emphasis by Space'),
      min: 0,
      max: 3
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Enable Overlapping'),
      checked: enableOverlapping,
      onChange: function onChange(enableOverlapping) {
        var newAttributes = getEmphasisAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
          enableOverlapping: enableOverlapping
        }));
        setAttributes(newAttributes);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical Anchoring', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["BlockVerticalAlignmentToolbar"], {
      value: verticalAlignment,
      onChange: function onChange(verticalAlignment) {
        var newAttributes = getEmphasisAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
          verticalAlignment: verticalAlignment
        }));
        setAttributes(newAttributes);
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsTab"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Settings')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      key: 'space-and-sizing-settings-1'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical Anchoring', '__plugin_txtd')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["BlockVerticalAlignmentToolbar"], {
      value: verticalAlignment,
      onChange: function onChange(nextVerticalAlignment) {
        return setAttributes({
          verticalAlignment: nextVerticalAlignment
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Block Spacing')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      key: 'media-card-block-top-spacing',
      value: blockTopSpacing,
      onChange: function onChange(blockTopSpacing) {
        return setAttributes({
          blockTopSpacing: blockTopSpacing
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top'),
      min: SPACING_MIN_VALUE,
      max: SPACING_MAX_VALUE
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      key: 'media-card-block-bottom-spacing',
      value: blockBottomSpacing,
      onChange: function onChange(blockBottomSpacing) {
        return setAttributes({
          blockBottomSpacing: blockBottomSpacing
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom'),
      min: SPACING_MIN_VALUE,
      max: SPACING_MAX_VALUE
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_novablocks_components__WEBPACK_IMPORTED_MODULE_4__["ControlsGroup"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Area Spacing')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      key: 'space-and-sizing-settings-2'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      key: 'media-card-content-top-spacing',
      value: emphasisTopSpacing,
      onChange: function onChange(emphasisTopSpacing) {
        return setAttributes({
          emphasisTopSpacing: emphasisTopSpacing
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top'),
      min: SPACING_MIN_VALUE,
      max: SPACING_MAX_VALUE
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      key: 'media-card-content-bottom-spacing',
      value: emphasisBottomSpacing,
      onChange: function onChange(emphasisBottomSpacing) {
        return setAttributes({
          emphasisBottomSpacing: emphasisBottomSpacing
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom'),
      min: SPACING_MIN_VALUE,
      max: SPACING_MAX_VALUE
    })))))));
  };
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__["addFilter"])('editor.BlockEdit', 'novablocks/with-space-and-sizing', withSpaceAndSizingControls);

function addSpaceAndSizingAttributes(block) {
  if (!ALLOWED_BLOCKS.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    Object.assign(block.attributes, _attributes__WEBPACK_IMPORTED_MODULE_2__);
  }

  return block;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__["addFilter"])('blocks.registerBlockType', 'novablocks/add-space-and-sizing-attributes', addSpaceAndSizingAttributes);


/***/ }),

/***/ "./packages/core/build-module/index.js":
/*!*********************************************!*\
  !*** ./packages/core/build-module/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _filters_with_block_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/with-block-id */ "./packages/core/build-module/filters/with-block-id/index.js");
/* harmony import */ var _filters_with_block_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/with-block-index */ "./packages/core/build-module/filters/with-block-index/index.js");
/* harmony import */ var _filters_with_font_size_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/with-font-size-picker */ "./packages/core/build-module/filters/with-font-size-picker/index.js");
/* harmony import */ var _filters_with_emphasis_level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/with-emphasis-level */ "./packages/core/build-module/filters/with-emphasis-level/index.js");
/* harmony import */ var _filters_with_cards_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/with-cards-manager */ "./packages/core/build-module/filters/with-cards-manager/index.js");
/* harmony import */ var _filters_with_latest_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/with-latest-posts */ "./packages/core/build-module/filters/with-latest-posts/index.js");
/* harmony import */ var _filters_with_advanced_gallery_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/with-advanced-gallery-attributes */ "./packages/core/build-module/filters/with-advanced-gallery-attributes/index.js");
/* harmony import */ var _filters_with_doppler_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/with-doppler-attributes */ "./packages/core/build-module/filters/with-doppler-attributes/index.js");
/* harmony import */ var _filters_with_overlay_color_attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/with-overlay-color-attributes */ "./packages/core/build-module/filters/with-overlay-color-attributes/index.js");
/* harmony import */ var _filters_with_controls_sections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/with-controls-sections */ "./packages/core/build-module/filters/with-controls-sections/index.js");
/* harmony import */ var _filters_with_space_and_sizing_controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/with-space-and-sizing-controls */ "./packages/core/build-module/filters/with-space-and-sizing-controls/index.js");
/* harmony import */ var _filters_with_inner_blocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filters/with-inner-blocks */ "./packages/core/build-module/filters/with-inner-blocks/index.js");
/* harmony import */ var _filters_with_grid_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filters/with-grid-generator */ "./packages/core/build-module/filters/with-grid-generator/index.js");
/* harmony import */ var _blocks_core_separator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/core/separator */ "./packages/core/build-module/blocks/core/separator/index.js");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @novablocks/icons */ "@novablocks/icons");
/* harmony import */ var _novablocks_icons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_novablocks_icons__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_18__);





















var novaBlocks = /*#__PURE__*/function () {
  function novaBlocks() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, novaBlocks);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(novaBlocks, [{
    key: "initialize",
    value: function initialize(settings) {
      Object(_blocks_core_separator__WEBPACK_IMPORTED_MODULE_15__["addSeparatorFilters"])(settings);
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_17__["dispatch"])('novablocks').updateSettings(settings);
      Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_18__["updateCategory"])('nova-blocks', {
        icon: _novablocks_icons__WEBPACK_IMPORTED_MODULE_16__["nova"]
      });
    }
  }]);

  return novaBlocks;
}();

wp.novaBlocks = new novaBlocks();


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

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

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