this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/card/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/card/index.js");
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

/***/ "./packages/block-library/build/blocks/card/attributes.json":
/*!******************************************************************!*\
  !*** ./packages/block-library/build/blocks/card/attributes.json ***!
  \******************************************************************/
/*! exports provided: level, media, title, subtitle, description, meta, showMedia, showTitle, showSubtitle, showDescription, showButtons, showMeta, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"level\":{\"type\":\"number\",\"default\":2},\"media\":{\"type\":\"object\",\"default\":{}},\"title\":{\"type\":\"string\",\"default\":\"Title\"},\"subtitle\":{\"type\":\"string\",\"default\":\"Subtitle\"},\"description\":{\"type\":\"string\",\"default\":\"This is just an example of what a description for this card could look like\"},\"meta\":{\"type\":\"string\",\"default\":\"Meta\"},\"showMedia\":{\"type\":\"boolean\",\"default\":true},\"showTitle\":{\"type\":\"boolean\",\"default\":true},\"showSubtitle\":{\"type\":\"boolean\",\"default\":false},\"showDescription\":{\"type\":\"boolean\",\"default\":true},\"showButtons\":{\"type\":\"boolean\",\"default\":true},\"showMeta\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/card/deprecated.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/card/deprecated.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/card/save.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/card/attributes.json"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var deprecated = [];
deprecated.push({
  attributes: _attributes.default,
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

/***/ "./packages/block-library/build/blocks/card/edit.js":
/*!**********************************************************!*\
  !*** ./packages/block-library/build/blocks/card/edit.js ***!
  \**********************************************************/
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

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * WordPress dependencies
 */
var CardEdit = function CardEdit(props) {
  var blockClassName = 'novablocks-card';
  var _props$attributes = props.attributes,
      level = _props$attributes.level,
      title = _props$attributes.title,
      subtitle = _props$attributes.subtitle,
      description = _props$attributes.description,
      media = _props$attributes.media,
      meta = _props$attributes.meta,
      contentAlign = _props$attributes.contentAlign,
      showMedia = _props$attributes.showMedia,
      showTitle = _props$attributes.showTitle,
      showSubtitle = _props$attributes.showSubtitle,
      showDescription = _props$attributes.showDescription,
      showButtons = _props$attributes.showButtons,
      showMeta = _props$attributes.showMeta,
      className = props.className,
      setAttributes = props.setAttributes;

  var CardMedia = function CardMedia(props) {
    var _media$sizes, _media$sizes$novabloc, _media$sizes2, _media$sizes2$novablo;

    var media = props.attributes.media,
        open = props.open;
    var mediaURL = (media === null || media === void 0 ? void 0 : (_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : (_media$sizes$novabloc = _media$sizes.novablocks_medium) === null || _media$sizes$novabloc === void 0 ? void 0 : _media$sizes$novabloc.url) || (media === null || media === void 0 ? void 0 : (_media$sizes2 = media.sizes) === null || _media$sizes2 === void 0 ? void 0 : (_media$sizes2$novablo = _media$sizes2.novablocks_large) === null || _media$sizes2$novablo === void 0 ? void 0 : _media$sizes2$novablo.url) || (media === null || media === void 0 ? void 0 : media.url);

    if (!!mediaURL) {
      return (0, _element.createElement)("img", {
        className: "".concat(blockClassName, "__media-image"),
        src: mediaURL,
        onClick: open
      });
    }

    return (0, _element.createElement)("div", {
      className: "".concat(blockClassName, "__media-placeholder"),
      onClick: open
    }, icons.placeholder);
  };

  return (0, _element.createElement)("div", {
    className: "novablocks-card novablocks-card--fixed-media-aspect-ratio novablocks-card--portrait novablocks-block__content"
  }, (0, _element.createElement)("div", {
    className: "novablocks-card__layout"
  }, showMedia && (0, _element.createElement)("div", {
    className: "novablocks-card__layout-media novablocks-grid__item-media"
  }, (0, _element.createElement)("div", {
    className: "".concat(blockClassName, "__media-wrap")
  }, (0, _element.createElement)("div", {
    className: "".concat(blockClassName, "__media")
  }, (0, _element.createElement)("div", {
    className: "".concat(blockClassName, "__media-edit")
  }, (0, _element.createElement)("span", null, (0, _i18n.__)('Change Media', '__plugin_txtd'))), (0, _element.createElement)(_blockEditor.MediaUpload, {
    type: "image",
    value: !!media && media.id,
    onSelect: function onSelect(media) {
      return setAttributes({
        media: media
      });
    },
    render: function render(_ref) {
      var open = _ref.open;
      return (0, _element.createElement)(CardMedia, (0, _extends2.default)({}, props, {
        open: open
      }));
    }
  })))), (showMeta || showTitle || showSubtitle || showDescription || showButtons) && (0, _element.createElement)("div", {
    className: "novablocks-card__layout-content novablocks-card__inner-container"
  }, showMeta && (0, _element.createElement)(_components.EditableText, {
    className: "".concat(blockClassName, "__meta block-editor-block-list__block is-style-meta"),
    tagName: 'p',
    value: meta,
    onChange: function onChange(meta) {
      setAttributes({
        meta: meta
      });
    }
  }), showTitle && (0, _element.createElement)(_components.EditableText, {
    className: "".concat(blockClassName, "__title block-editor-block-list__block"),
    tagName: "h".concat(level + 1),
    value: title,
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    }
  }), showSubtitle && (0, _element.createElement)(_components.EditableText, {
    className: "".concat(blockClassName, "__subtitle block-editor-block-list__block"),
    tagName: "h".concat(level + 2),
    value: subtitle,
    onChange: function onChange(subtitle) {
      setAttributes({
        subtitle: subtitle
      });
    }
  }), showDescription && (0, _element.createElement)(_components.EditableText, {
    className: "".concat(blockClassName, "__description block-editor-block-list__block"),
    tagName: 'p',
    value: description,
    onChange: function onChange(description) {
      setAttributes({
        description: description
      });
    }
  }), showButtons && (0, _element.createElement)("div", {
    className: "".concat(blockClassName, "__buttons block-editor-block-list__block")
  }, (0, _element.createElement)(_blockEditor.InnerBlocks, {
    allowedBlocks: ['core/buttons'],
    renderAppender: false,
    template: [['core/buttons', {
      align: contentAlign
    }, [['core/button', {
      text: 'Button',
      className: 'is-style-text'
    }]]]]
  })))));
};

var _default = CardEdit;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/card/index.js":
/*!***********************************************************!*\
  !*** ./packages/block-library/build/blocks/card/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/card/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/card/save.js"));

var _deprecated = _interopRequireDefault(__webpack_require__(/*! ./deprecated */ "./packages/block-library/build/blocks/card/deprecated.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/card/attributes.json"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
function getNewDefaults() {
  return _getNewDefaults.apply(this, arguments);
}

function _getNewDefaults() {
  _getNewDefaults = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var placeholderImages, randomImage;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.getPlaceholderImages)();

          case 2:
            placeholderImages = _context.sent;
            randomImage = (0, _utils.getRandomArrayFromArray)(placeholderImages, 1)[0];

            if (typeof (randomImage === null || randomImage === void 0 ? void 0 : randomImage.download) === "function") {
              randomImage.download();
            }

            return _context.abrupt("return", {
              media: randomImage
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNewDefaults.apply(this, arguments);
}

(0, _utils.generateDefaults)('novablocks/card', getNewDefaults);
(0, _blocks.registerBlockType)('novablocks/card', {
  title: (0, _i18n.__)('Card', '__plugin_txtd'),
  description: (0, _i18n.__)('Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd'),
  category: 'nova-blocks',
  parent: ['novablocks/cards-collection'],
  icon: icons.card,
  keywords: [(0, _i18n.__)('image with text', '__plugin_txtd')],
  attributes: _attributes.default,
  deprecated: _deprecated.default,
  edit: _edit.default,
  save: _save.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/card/save.js":
/*!**********************************************************!*\
  !*** ./packages/block-library/build/blocks/card/save.js ***!
  \**********************************************************/
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