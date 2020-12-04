this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/hero-of-the-galaxy/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/hero-of-the-galaxy/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/attributes.json":
/*!********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/attributes.json ***!
  \********************************************************************************/
/*! exports provided: align, anchor, media, minHeightFallback, scrollIndicator, positionIndicators, defaultsGenerated, templateInserted, displayInnerContent, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"align\":{\"type\":\"string\",\"default\":\"full\"},\"anchor\":{\"type\":\"string\",\"default\":null},\"media\":{\"type\":\"object\",\"default\":null},\"minHeightFallback\":{\"type\":\"number\",\"default\":100},\"scrollIndicator\":{\"type\":\"boolean\",\"source\":\"meta\",\"meta\":\"novablocks_hero_scroll_indicator\",\"default\":false},\"positionIndicators\":{\"type\":\"boolean\",\"source\":\"meta\",\"meta\":\"novablocks_hero_position_indicators\",\"default\":true},\"defaultsGenerated\":{\"boolean\":true,\"default\":false},\"templateInserted\":{\"boolean\":true,\"default\":false},\"displayInnerContent\":{\"type\":\"boolean\",\"default\":true}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/background.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/background.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
var HeroBackground = function HeroBackground(props) {
  var _props$attributes = props.attributes,
      overlayFilterStyle = _props$attributes.overlayFilterStyle,
      overlayFilterStrength = _props$attributes.overlayFilterStrength,
      media = _props$attributes.media,
      contentColor = _props$attributes.contentColor;

  var styles = _objectSpread(_objectSpread({}, props.parallax.style), {}, {
    opacity: 1
  });

  if (overlayFilterStyle !== 'none') {
    styles.opacity = 1 - overlayFilterStrength / 100;
  }

  return (0, _element.createElement)("div", {
    className: "novablocks-mask"
  }, (0, _element.createElement)("div", {
    className: "novablocks-hero__background"
  }, !!media && media.type === 'image' && typeof media.sizes !== 'undefined' && (0, _element.createElement)("img", {
    className: "novablocks-hero__media",
    src: media.sizes.full.url,
    alt: media.alt,
    style: styles
  }), !!media && media.type === 'video' && (0, _element.createElement)("video", {
    muted: true,
    autoPlay: true,
    loop: true,
    playsInline: true,
    className: "novablocks-hero__media",
    style: styles,
    src: media.url
  })));
};

var _default = HeroBackground;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/block-controls.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/block-controls.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var ALLOWED_MEDIA_TYPES = ['image', 'video'];

var HeroBlockControls = function HeroBlockControls(props) {
  var setAttributes = props.setAttributes;
  return (0, _element.createElement)(_blockEditor.BlockControls, null, (0, _element.createElement)(_components.AlignmentToolbar, props), (0, _element.createElement)(_components.ColorToolbar, props), (0, _element.createElement)(_components2.Toolbar, null, (0, _element.createElement)(_blockEditor.MediaUpload, {
    allowedTypes: ALLOWED_MEDIA_TYPES,
    onSelect: function onSelect(media) {
      return setAttributes({
        media: media
      });
    },
    render: function render(_ref) {
      var open = _ref.open;
      return (0, _element.createElement)(_components2.Button, {
        className: "components-icon-button components-toolbar__control",
        label: (0, _i18n.__)('Change Media', '__plugin_txtd'),
        icon: icons.swap,
        onClick: open
      });
    }
  })));
};

var _default = HeroBlockControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/deprecated.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/deprecated.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/hero-of-the-galaxy/save.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/hero-of-the-galaxy/attributes.json"));

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

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/edit.js":
/*!************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/edit.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/hero-of-the-galaxy/attributes.json"));

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/hero-of-the-galaxy/preview.js"));

var _blockControls = _interopRequireDefault(__webpack_require__(/*! ./block-controls */ "./packages/block-library/build/blocks/hero-of-the-galaxy/block-controls.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

var _compose = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BlockHeightControls = function BlockHeightControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      settings = props.settings;
  var minHeightFallback = attributes.minHeightFallback;
  return (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Layout')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.RadioControl, {
    key: 'hero-minimum-height-controls',
    label: (0, _i18n.__)('Minimum Height', '__plugin_txtd'),
    selected: minHeightFallback,
    onChange: function onChange(minHeightFallback) {
      setAttributes({
        minHeightFallback: parseFloat(minHeightFallback)
      });
    },
    options: settings.minimumHeightOptions
  })));
};

var HeroEdit = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(HeroEdit, _Component);

  var _super = _createSuper(HeroEdit);

  function HeroEdit() {
    (0, _classCallCheck2.default)(this, HeroEdit);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(HeroEdit, [{
    key: "getDefaults",
    value: function getDefaults(attributes) {
      var settings = this.props.settings;
      var scrollIndicator = attributes.scrollIndicator;
      var defaults = {};

      if (settings.usePostMetaAttributes) {
        if (!scrollIndicator) {
          defaults.scrollIndicator = _attributes.default.scrollIndicator.default;
        }
      }

      return defaults;
    }
  }, {
    key: "getNewAttributes",
    value: function getNewAttributes(attributes) {
      var _this = this;

      var scrollIndicator = attributes.scrollIndicator;
      var index = (0, _data.select)('core/block-editor').getBlocks().filter(function (block) {
        return block.name === 'novablocks/hero';
      }).findIndex(function (block) {
        return block.clientId === _this.props.clientId;
      });
      var newScrollIndicatorBlock = index === 0 && scrollIndicator;
      return {
        scrollIndicator: scrollIndicator,
        scrollIndicatorBlock: newScrollIndicatorBlock
      };
    }
  }, {
    key: "updateAttributes",
    value: function updateAttributes() {
      var newAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var defaults = this.getDefaults(attributes);
      var computedAttributes = this.getNewAttributes(_objectSpread(_objectSpread(_objectSpread({}, attributes), defaults), newAttributes));
      setAttributes(Object.assign({}, newAttributes, computedAttributes));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateAttributes();
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var updateAttributes = this.updateAttributes.bind(this);

      var _select = (0, _data.select)('core/block-editor'),
          getBlocks = _select.getBlocks,
          getSelectedBlockClientId = _select.getSelectedBlockClientId;

      var heroBlocks = getBlocks().filter(function (block) {
        return block.name === 'novablocks/hero';
      });
      var index = heroBlocks.findIndex(function (block) {
        return block.clientId === getSelectedBlockClientId();
      });
      var toggles = [{
        label: (0, _i18n.__)('Inner Content'),
        attribute: 'displayInnerContent'
      }];

      if (index === 0) {
        toggles.push({
          label: (0, _i18n.__)('Position Indicators'),
          attribute: 'positionIndicators'
        }, {
          label: (0, _i18n.__)('Scroll Indicator'),
          attribute: 'scrollIndicator'
        });
      }

      return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, this.props), (0, _element.createElement)(_blockControls.default, this.props), (0, _element.createElement)(_blockEditor.InspectorControls, null, (0, _element.createElement)(_components.LayoutControls, this.props), (0, _element.createElement)(BlockHeightControls, this.props)), (0, _element.createElement)(_components.ControlsDrawerContent, null, (0, _element.createElement)(_components2.PanelBody, {
        title: (0, _i18n.__)('Set up elements for this block', '__plugin_txtd')
      }, (0, _element.createElement)(_components.ToggleGroup, {
        onChange: updateAttributes,
        toggles: toggles.map(function (toggle) {
          return _objectSpread(_objectSpread({}, toggle), {}, {
            value: attributes[toggle.attribute]
          });
        })
      }))));
    }
  }]);
  return HeroEdit;
}(_element.Component);

;

var _default = (0, _compose.createHigherOrderComponent)((0, _compose.compose)([_utils.withSettings, _components.withParallax]))(HeroEdit);

exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/index.js":
/*!*************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./packages/block-library/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./packages/block-library/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/hero-of-the-galaxy/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/hero-of-the-galaxy/save.js"));

var _deprecated = _interopRequireDefault(__webpack_require__(/*! ./deprecated */ "./packages/block-library/build/blocks/hero-of-the-galaxy/deprecated.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/hero-of-the-galaxy/attributes.json"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var attributes = Object.assign({}, _attributes.default, _components.alignmentAttributes, _components.colorAttributes, _components.layoutAttributes, _components.scrollingAttributes);
/**
 * WordPress dependencies
 */

var STORE_NAME = 'novablocks';

function getNewDefaults() {
  return _getNewDefaults.apply(this, arguments);
}

function _getNewDefaults() {
  _getNewDefaults = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var placeholderImages, index, image;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.getPlaceholderImages)();

          case 2:
            placeholderImages = _context.sent;
            index = (0, _utils.getRandomBetween)(0, placeholderImages.length - 1);
            image = placeholderImages[index];

            if (typeof (image === null || image === void 0 ? void 0 : image.download) === "function") {
              image.download();
            }

            return _context.abrupt("return", {
              media: _objectSpread(_objectSpread({}, image), {}, {
                type: 'image'
              })
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

var settings = (0, _data.select)(STORE_NAME).getSettings();
(0, _utils.generateDefaults)('novablocks/hero', getNewDefaults);
(0, _components.insertTemplate)('novablocks/hero', settings.hero.template);
(0, _blocks.registerBlockType)('novablocks/hero', {
  title: (0, _i18n.__)('Hero of the Galaxy', '__plugin_txtd'),
  description: (0, _i18n.__)('A great way to get your visitors acquainted with your content.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.hero,
  // Additional search terms
  keywords: [(0, _i18n.__)('cover', '__plugin_txtd'), (0, _i18n.__)('full width', '__plugin_txtd'), (0, _i18n.__)('hero image', '__plugin_txtd'), (0, _i18n.__)('cover section', '__plugin_txtd')],
  supports: {
    anchor: true
  },
  deprecated: _deprecated.default,
  attributes: attributes,
  edit: _edit.default,
  save: _save.default,
  getEditWrapperProps: function getEditWrapperProps() {
    var settings = (0, _data.select)('core/block-editor').getSettings();
    return settings.alignWide ? {
      'data-align': 'full'
    } : {};
  }
});


/***/ }),

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/preview.js":
/*!***************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/preview.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./packages/block-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _background = _interopRequireDefault(__webpack_require__(/*! ./background */ "./packages/block-library/build/blocks/hero-of-the-galaxy/background.js"));

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var HeroPreview = function HeroPreview(props) {
  var attributes = props.attributes,
      className = props.className,
      clientId = props.clientId,
      settings = props.settings;
  var contentPadding = attributes.contentPadding,
      contentPaddingCustom = attributes.contentPaddingCustom,
      contentWidth = attributes.contentWidth,
      contentWidthCustom = attributes.contentWidthCustom,
      verticalAlignment = attributes.verticalAlignment,
      horizontalAlignment = attributes.horizontalAlignment,
      minHeightFallback = attributes.minHeightFallback,
      scrollIndicatorBlock = attributes.scrollIndicatorBlock,
      contentColor = attributes.contentColor,
      overlayFilterStyle = attributes.overlayFilterStyle,
      scrollingEffect = attributes.scrollingEffect,
      displayInnerContent = attributes.displayInnerContent;
  var classes = [className, 'novablocks-hero', "novablocks-u-valign-".concat(verticalAlignment), "novablocks-u-halign-".concat(horizontalAlignment), "novablocks-u-spacing-".concat(contentPadding), "novablocks-u-content-width-".concat(contentWidth), "novablocks-u-background", "novablocks-u-background-".concat(overlayFilterStyle)];
  var styles = {
    hero: {
      '--novablocks-hero-text-color': contentColor
    },
    foreground: {},
    content: {}
  };

  if (contentColor !== '#FFF') {
    styles.hero['--theme-dark-primary'] = '#FFF';
  }

  var heroBlocks = (0, _data.select)('core/block-editor').getBlocks().filter(function (block) {
    return block.name === 'novablocks/hero';
  });
  var heroHeight = minHeightFallback;
  var contentHeight = heroHeight;

  if (scrollingEffect === 'doppler') {
    heroHeight = minHeightFallback * 2;
    contentHeight = 100;
    styles.hero.alignItems = 'flex-start';
  }

  styles.hero.minHeight = heroHeight + 'vh';
  styles.foreground.minHeight = contentHeight + 'vh';

  if (contentPadding === 'custom') {
    styles.foreground.paddingTop = "".concat(contentPaddingCustom, "%");
    styles.foreground.paddingBottom = "".concat(contentPaddingCustom, "%");
  }

  if (contentWidth === 'custom') {
    styles.content.maxWidth = "".concat(contentWidthCustom, "%");
  }

  var index = heroBlocks.findIndex(function (block) {
    return block.clientId === clientId;
  });
  var scrollIndicatorFallback = index === 0 && heroHeight >= 100;
  var scrollIndicator = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;
  return (0, _element.createElement)("div", {
    className: classes.join(' '),
    style: styles.hero
  }, (0, _element.createElement)(_background.default, props), (0, _element.createElement)("div", {
    className: "novablocks-hero__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align",
    style: styles.foreground
  }, (0, _element.createElement)("div", {
    className: "novablocks-hero__inner-container novablocks-u-content-width",
    style: styles.content
  }, displayInnerContent && (0, _element.createElement)(_blockEditor.InnerBlocks, null)), scrollIndicator && (0, _element.createElement)("div", {
    className: "novablocks-hero__indicator"
  })));
};

var _default = HeroPreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/hero-of-the-galaxy/save.js":
/*!************************************************************************!*\
  !*** ./packages/block-library/build/blocks/hero-of-the-galaxy/save.js ***!
  \************************************************************************/
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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************/
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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************/
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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************/
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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./packages/block-library/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./packages/block-library/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-library/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************/
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