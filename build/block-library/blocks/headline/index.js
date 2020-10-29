this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/headline/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/headline/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./packages/block-library/build/blocks/headline/edit.js":
/*!**************************************************************!*\
  !*** ./packages/block-library/build/blocks/headline/edit.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeadlineEdit;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classnames2 = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

function HeadlineEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className;
  var align = attributes.align,
      primary = attributes.primary,
      secondary = attributes.secondary,
      level = attributes.level;
  var TagName = "h".concat(level);
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_components.HeadingToolbar, {
    minLevel: 2,
    maxLevel: 4,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  }), (0, _element.createElement)(_blockEditor.AlignmentToolbar, {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), (0, _element.createElement)(_blockEditor.InspectorControls, null, (0, _element.createElement)(_components2.PanelBody, {
    title: (0, _i18n.__)('Headline Settings', '__plugin_txtd'),
    initialOpen: true
  }, (0, _element.createElement)("p", null, (0, _i18n.__)('Level', '__plugin_txtd')), (0, _element.createElement)(_components.HeadingToolbar, {
    minLevel: 1,
    maxLevel: 6,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  }))), (0, _element.createElement)(TagName, {
    className: (0, _classnames2.default)(className, 'c-headline', (0, _defineProperty2.default)({}, "has-text-align-".concat(align), align))
  }, (0, _element.createElement)(_blockEditor.RichText, {
    className: "c-headline__secondary",
    identifier: "secondary",
    tagName: "span",
    value: secondary,
    onChange: function onChange(value) {
      return setAttributes({
        secondary: value
      });
    },
    placeholder: (0, _i18n.__)('Subtitle…', '__plugin_txtd'),
    keepPlaceholderOnFocus: true,
    allowedFormats: []
  }), (0, _element.createElement)(_blockEditor.RichText, {
    className: "c-headline__primary",
    identifier: "primary",
    tagName: "span",
    value: primary,
    onChange: function onChange(value) {
      return setAttributes({
        primary: value
      });
    },
    placeholder: (0, _i18n.__)('Write title…', '__plugin_txtd'),
    keepPlaceholderOnFocus: true,
    allowedFormats: []
  })));
}


/***/ }),

/***/ "./packages/block-library/build/blocks/headline/index.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/headline/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/headline/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/headline/save.js"));

var _transforms = _interopRequireDefault(__webpack_require__(/*! ./transforms */ "./packages/block-library/build/blocks/headline/transforms.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
(0, _blocks.registerBlockType)('novablocks/headline', {
  title: (0, _i18n.__)('Headline', '__plugin_txtd'),
  description: (0, _i18n.__)('Advanced heading block with a fancier display.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.headline,
  // Additional search terms
  keywords: [(0, _i18n.__)('heading', '__plugin_txtd'), (0, _i18n.__)('title', '__plugin_txtd'), (0, _i18n.__)('cta', '__plugin_txtd'), (0, _i18n.__)('call to action', '__plugin_txtd')],
  attributes: {
    align: {
      type: "string",
      default: "center"
    },
    primary: {
      type: "string",
      default: (0, _i18n.__)("Our Story", '__plugin_txtd')
    },
    secondary: {
      type: "string",
      default: (0, _i18n.__)("Discover", '__plugin_txtd')
    },
    level: {
      type: "number",
      default: 2
    }
  },
  save: _save.default,
  edit: _edit.default,
  transforms: _transforms.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/headline/save.js":
/*!**************************************************************!*\
  !*** ./packages/block-library/build/blocks/headline/save.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = save;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classnames2 = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function save(props) {
  var attributes = props.attributes;
  var align = attributes.align,
      primary = attributes.primary,
      secondary = attributes.secondary,
      level = attributes.level;
  var TagName = "h".concat(level);
  var className = (0, _classnames2.default)('c-headline', (0, _defineProperty2.default)({}, "has-text-align-".concat(align), align));
  return (0, _element.createElement)(TagName, {
    className: className ? className : undefined
  }, (0, _element.createElement)(_blockEditor.RichText.Content, {
    className: "c-headline__secondary",
    value: secondary,
    tagName: "span"
  }), " ", (0, _element.createElement)(_blockEditor.RichText.Content, {
    className: "c-headline__primary",
    value: primary,
    tagName: "span"
  }));
}


/***/ }),

/***/ "./packages/block-library/build/blocks/headline/transforms.js":
/*!********************************************************************!*\
  !*** ./packages/block-library/build/blocks/headline/transforms.js ***!
  \********************************************************************/
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
    blocks: ['core/heading'],
    transform: function transform(attributes) {
      return (0, _blocks.createBlock)('novablocks/headline', {
        primary: attributes.content,
        secondary: '',
        level: attributes.level,
        fontSize: attributes.fontSize,
        className: attributes.className,
        align: attributes.align
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(attributes) {
      return (0, _blocks.createBlock)('core/heading', {
        content: attributes.secondary + ' ' + attributes.primary,
        level: attributes.level,
        fontSize: attributes.fontSize,
        className: attributes.className,
        align: attributes.align
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map