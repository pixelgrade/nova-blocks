this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/opentable/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/opentable/index.js");
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

/***/ "./packages/block-library/build/blocks/opentable/edit.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/opentable/edit.js ***!
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

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/opentable/preview.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/opentable/inspector-controls.js"));

/**
 * WordPress dependencies
 */
var OpenTable = function OpenTable(props) {
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, props), (0, _element.createElement)(_inspectorControls.default, props));
};

var _default = OpenTable;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/opentable/index.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/opentable/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/opentable/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/opentable/save.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
(0, _blocks.registerBlockType)('novablocks/opentable', {
  title: (0, _i18n.__)('OpenTable Reservation', '__plugin_txtd'),
  description: (0, _i18n.__)('Add OpenTable online reservation booking to your site.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.opentable,
  // Additional search terms
  keywords: [(0, _i18n.__)('reservations', '__plugin_txtd'), (0, _i18n.__)('bookings', '__plugin_txtd')],
  attributes: {
    restaurantId: {
      type: 'number',
      default: 1
    },
    language: {
      type: 'string',
      default: 'en-US'
    },
    showOpenTableLogo: {
      type: 'boolean',
      default: true
    },
    layoutForm: {
      type: 'string',
      default: 'wide'
    }
  },
  edit: _edit.default,
  save: _save.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/opentable/inspector-controls.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/opentable/inspector-controls.js ***!
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

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * WordPress dependencies
 */
var OpenTableInspectorControls = function OpenTableInspectorControls(props) {
  var _props$attributes = props.attributes,
      restaurantId = _props$attributes.restaurantId,
      language = _props$attributes.language,
      layoutForm = _props$attributes.layoutForm,
      showOpenTableLogo = _props$attributes.showOpenTableLogo,
      setAttributes = props.setAttributes;
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Setup')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.TextControl, {
    key: 'opentable-restaurant-id-controls',
    label: (0, _i18n.__)('Restaurant ID'),
    placeholder: (0, _i18n.__)('1'),
    help: (0, _i18n.__)('You can find your restaurant ID on the OpenTable website.'),
    type: "number",
    value: restaurantId,
    onChange: function onChange(restaurantId) {
      return setAttributes({
        restaurantId: restaurantId
      });
    }
  }), (0, _element.createElement)(_components2.SelectControl, {
    key: 'opentable-language-controls',
    label: (0, _i18n.__)('Language'),
    value: language,
    options: [{
      label: 'English-EN',
      value: 'en-US'
    }, {
      label: 'Français-CA',
      value: 'fr-CA'
    }, {
      label: 'Deutsch-DE',
      value: 'de-DE'
    }, {
      label: 'Español-MX',
      value: 'es-MX'
    }, {
      label: '日本語-JP',
      value: 'ja-JP'
    }, {
      label: 'Nederlands-NL',
      value: 'nl-NL'
    }, {
      label: 'Italiano-IT',
      value: 'it-IT'
    }],
    onChange: function onChange(nextLanguage) {
      return setAttributes({
        language: nextLanguage
      });
    }
  }))), (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Layout')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Customize')
  }, (0, _element.createElement)(_components2.RadioControl, {
    key: 'opentable-layout-controls',
    label: (0, _i18n.__)('Layout', '__plugin_txtd'),
    value: layoutForm,
    selected: layoutForm,
    options: [{
      label: 'Horizontal',
      value: 'wide'
    }, {
      label: 'Vertical',
      value: 'standard'
    }],
    onChange: function onChange(nextLayout) {
      return setAttributes({
        layoutForm: nextLayout
      });
    }
  }), (0, _element.createElement)(_components2.ToggleControl, {
    key: 'opentable-logo-controls',
    label: (0, _i18n.__)('Show OpenTable Logo', '__plugin_txtd'),
    checked: showOpenTableLogo,
    onChange: function onChange() {
      return setAttributes({
        showOpenTableLogo: !showOpenTableLogo
      });
    }
  }))));
};

var _default = OpenTableInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/opentable/preview.js":
/*!******************************************************************!*\
  !*** ./packages/block-library/build/blocks/opentable/preview.js ***!
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _isShallowEqual = _interopRequireDefault(__webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal"));

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var OpenTablePreview = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(OpenTablePreview, _Component);

  var _super = _createSuper(OpenTablePreview);

  function OpenTablePreview() {
    (0, _classCallCheck2.default)(this, OpenTablePreview);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(OpenTablePreview, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(prevProps) {
      return !(0, _isShallowEqual.default)(prevProps.attributes, this.props.attributes);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          restaurantId = _this$props$attribute.restaurantId,
          language = _this$props$attribute.language,
          layoutForm = _this$props$attribute.layoutForm,
          showOpenTableLogo = _this$props$attribute.showOpenTableLogo,
          className = _this$props.className;
      var classNames = (0, _classnames.default)(className, "novablocks-opentable", "novablocks-opentable__".concat(layoutForm), {
        'has-opentable-logo': showOpenTableLogo === true
      });

      var OpenTable = function OpenTable(props) {
        return (0, _element.createElement)(_components.SandBox, props);
      };

      var html = "<div class=\"novablocks-opentable ".concat(classNames, "\">") + "<script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=".concat(restaurantId, "&type=standard&theme=").concat(layoutForm, "&iframe=false&overlay=false&domain=com&lang=").concat(language, "'></script>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.novablocks_core_frontend_stylesheet, "\" type=\"text/css\"/>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.novablocks_components_frontend_stylesheet, "\" type=\"text/css\"/>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.novablocks_opentable_frontend_stylesheet, "\" type=\"text/css\"/>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.novablocks_opentable_editor_stylesheet, "\" type=\"text/css\"/>") + '</div>';
      return (0, _element.createElement)(OpenTable, {
        html: html,
        title: "Sandbox",
        type: "embed"
      });
    }
  }]);
  return OpenTablePreview;
}(_element.Component);

var _default = OpenTablePreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/opentable/save.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/opentable/save.js ***!
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

/**
 * WordPress dependencies.
 */
var OpenTableSave = function OpenTableSave(props) {
  var _props$attributes = props.attributes,
      restaurantId = _props$attributes.restaurantId,
      language = _props$attributes.language,
      showOpenTableLogo = _props$attributes.showOpenTableLogo,
      layoutForm = _props$attributes.layoutForm,
      className = props.className;
  var formSrc = "//www.opentable.com/widget/reservation/loader?rid=".concat(restaurantId, "&domain=com&type=standard&theme=").concat(layoutForm, "&iframe=false&overlay=false&domain=com&lang=").concat(language);
  var classNames = (0, _classnames.default)(className, "novablocks-opentable", "novablocks-opentable__".concat(layoutForm), {
    'has-opentable-logo': showOpenTableLogo === true
  });
  return (0, _element.createElement)("div", {
    className: classNames
  }, (0, _element.createElement)("script", {
    type: "text/javascript",
    src: formSrc
  }));
};

var _default = OpenTableSave;
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

/***/ "@wordpress/is-shallow-equal":
/*!*************************************************!*\
  !*** external {"this":["wp","isShallowEqual"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map