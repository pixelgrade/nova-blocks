this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/menu-food/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/menu-food/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./packages/block-library/build/blocks/menu-food/edit.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/edit.js ***!
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

var _compose = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/menu-food/inspector-controls.js"));

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/menu-food/preview.js"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var FoodMenuEdit = function FoodMenuEdit(props) {
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, props), (0, _element.createElement)(_inspectorControls.default, props));
};

var withMenuVisibilityAttributes = (0, _compose.createHigherOrderComponent)(function (BlockListBlock) {
  return function (props) {
    if ('novablocks/menu-food' === props.name) {
      var clientId = props.clientId,
          attributes = props.attributes;

      var _select = (0, _data.select)('core/block-editor'),
          getBlock = _select.getBlock;

      var _dispatch = (0, _data.dispatch)('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      var menu = getBlock(clientId);
      var sections = menu === null || menu === void 0 ? void 0 : menu.innerBlocks;

      var newAttributes = function (_ref) {
        var showPrices = _ref.showPrices,
            showDescription = _ref.showDescription;
        return {
          showPrices: showPrices,
          showDescription: showDescription
        };
      }(attributes);

      if (Array.isArray(sections)) {
        sections.forEach(function (block) {
          if (Array.isArray(block.innerBlocks)) {
            block.innerBlocks.forEach(function (innerBlock) {
              updateBlockAttributes(innerBlock.clientId, newAttributes);
            });
          }
        });
      }
    }

    return (0, _element.createElement)(BlockListBlock, props);
  };
}, 'withCollectionVisibilityAttributes');
wp.hooks.addFilter('editor.BlockListBlock', 'novablocks/with-menu-visibility-attributes', withMenuVisibilityAttributes);
var _default = FoodMenuEdit;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/index.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/menu-food/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/menu-food/save.js"));

__webpack_require__(/*! ./menu-food-section */ "./packages/block-library/build/blocks/menu-food/menu-food-section/index.js");

__webpack_require__(/*! ./menu-food-item */ "./packages/block-library/build/blocks/menu-food/menu-food-item/index.js");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _data = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
(0, _blocks.registerBlockType)('novablocks/menu-food', {
  title: (0, _i18n.__)('Food Menu', '__plugin_txtd'),
  description: (0, _i18n.__)('Display a list of food or drink items available at your venue.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.foodmenu,
  // Additional search terms
  keywords: [(0, _i18n.__)('food menu', '__plugin_txtd'), (0, _i18n.__)('restaurant menu', '__plugin_txtd'), (0, _i18n.__)('dishes', '__plugin_txtd'), (0, _i18n.__)('eats', '__plugin_txtd'), (0, _i18n.__)('menu list', '__plugin_txtd')],
  attributes: {
    enableTwoColumns: {
      type: 'boolean',
      default: true
    },
    align: {
      type: 'string',
      default: 'wide'
    },
    showPrices: {
      type: 'boolean',
      default: true
    },
    showDescription: {
      type: 'boolean',
      default: true
    }
  },
  example: {
    attributes: {
      enableTwoColumns: false
    },
    innerBlocks: [{
      name: 'novablocks/menu-food-section',
      innerBlocks: [{
        name: 'novablocks/menu-food-item'
      }, {
        name: 'novablocks/menu-food-item'
      }]
    }]
  },
  styles: [{
    name: 'classic',
    label: (0, _i18n.__)('Classic', '__plugin_txtd'),
    isDefault: true
  }, {
    name: 'basic',
    label: (0, _i18n.__)('Basic', '__plugin_txtd')
  }],
  getEditWrapperProps: function getEditWrapperProps() {
    var settings = (0, _data.select)('core/block-editor').getSettings();
    return settings.alignWide ? {
      'data-align': 'wide'
    } : {};
  },
  edit: _edit.default,
  save: _save.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/inspector-controls.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/inspector-controls.js ***!
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

var FoodMenuInspectorControls = function FoodMenuInspectorControls(props) {
  var _props$attributes = props.attributes,
      enableTwoColumns = _props$attributes.enableTwoColumns,
      showPrices = _props$attributes.showPrices,
      showDescription = _props$attributes.showDescription,
      setAttributes = props.setAttributes;
  return (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Layout')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('2 columns', '__plugin_txtd'),
    checked: enableTwoColumns,
    onChange: function onChange() {
      return setAttributes({
        enableTwoColumns: !enableTwoColumns
      });
    }
  }), (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Price', '__plugin_txtd'),
    checked: showPrices,
    onChange: function onChange() {
      return setAttributes({
        showPrices: !showPrices
      });
    }
  }), (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Description', '__plugin_txtd'),
    checked: showDescription,
    onChange: function onChange() {
      return setAttributes({
        showDescription: !showDescription
      });
    }
  })));
};

var _default = FoodMenuInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-item/edit.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-item/edit.js ***!
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

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/menu-food/menu-food-item/preview.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/menu-food/menu-food-item/inspector-controls.js"));

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var FoodMenuItem = function FoodMenuItem(props) {
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, props), (0, _element.createElement)(_inspectorControls.default, props));
};

var _default = FoodMenuItem;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-item/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-item/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/menu-food/menu-food-item/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/menu-food/menu-food-item/save.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
(0, _blocks.registerBlockType)('novablocks/menu-food-item', {
  title: (0, _i18n.__)('Menu Item', '__plugin_txtd'),
  description: (0, _i18n.__)('A food or drink item contained in a menu or menu section.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.foodmenu,
  // Additional search terms
  keywords: [(0, _i18n.__)('menu item', '__plugin_txtd'), (0, _i18n.__)('food item', '__plugin_txtd'), (0, _i18n.__)('dish', '__plugin_txtd'), (0, _i18n.__)('list item', '__plugin_txtd')],
  parent: ['novablocks/menu-food-section'],
  attributes: {
    title: {
      type: 'string',
      default: (0, _i18n.__)('Sweet Shrimp Salad', '__plugin_txtd')
    },
    description: {
      type: 'string',
      default: (0, _i18n.__)('Tomatillo, Baja Crema, Cabbage, Fried Okra', '__plugin_txtd')
    },
    price: {
      type: 'string',
      default: '$7.95'
    },
    salePrice: {
      type: 'string',
      default: '$9.50'
    },
    highlightLabel: {
      type: 'string',
      default: (0, _i18n.__)('Our top pick', '__plugin_txtd')
    },
    enableHighlightFoodItem: {
      type: 'boolean',
      default: false
    },
    enableSalePrice: {
      type: 'boolean',
      default: false
    },
    showPrices: {
      type: 'boolean',
      default: true
    },
    showDescription: {
      type: 'boolean',
      default: true
    }
  },
  edit: _edit.default,
  save: _save.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-item/inspector-controls.js":
/*!********************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-item/inspector-controls.js ***!
  \********************************************************************************************/
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
var FoodMenuItemInspectorControls = function FoodMenuItemInspectorControls(props) {
  var _props$attributes = props.attributes,
      enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
      enableSalePrice = _props$attributes.enableSalePrice,
      showPrices = _props$attributes.showPrices,
      showDescription = _props$attributes.showDescription,
      setAttributes = props.setAttributes;
  return (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Layout')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Highlight item', '__plugin_txtd'),
    help: (0, _i18n.__)('Use it if you want to highlight some of the menu items and make them stand out.', '__plugin_txtd'),
    checked: enableHighlightFoodItem,
    onChange: function onChange() {
      return setAttributes({
        enableHighlightFoodItem: !enableHighlightFoodItem
      });
    }
  }), showPrices && (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('On sale', '__plugin_txtd'),
    checked: enableSalePrice,
    onChange: function onChange() {
      return setAttributes({
        enableSalePrice: !enableSalePrice
      });
    }
  })));
};

var _default = FoodMenuItemInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-item/preview.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-item/preview.js ***!
  \*********************************************************************************/
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

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var FoodMenuItemPreview = function FoodMenuItemPreview(props) {
  var _props$attributes = props.attributes,
      enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
      highlightLabel = _props$attributes.highlightLabel,
      enableSalePrice = _props$attributes.enableSalePrice,
      showDescription = _props$attributes.showDescription,
      showPrices = _props$attributes.showPrices,
      salePrice = _props$attributes.salePrice,
      price = _props$attributes.price,
      description = _props$attributes.description,
      title = _props$attributes.title,
      setAttributes = props.setAttributes,
      className = props.className;
  var classNames = (0, _classnames.default)(className, "nova-food-menu-item", {
    'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
    'has-sale-price': enableSalePrice === true
  });
  return (0, _element.createElement)("div", {
    className: classNames
  }, enableHighlightFoodItem && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__highlight-label"
  }, (0, _element.createElement)(_blockEditor.RichText, {
    tagName: "h5",
    className: "nova-food-menu-item__label",
    value: highlightLabel,
    onChange: function onChange(highlightLabel) {
      return setAttributes({
        highlightLabel: highlightLabel
      });
    },
    allowedFormats: []
  })), (0, _element.createElement)("div", {
    className: "nova-food-menu-item__title"
  }, (0, _element.createElement)(_blockEditor.RichText, {
    value: title,
    tagName: "h4",
    className: "item-title",
    placeholder: (0, _i18n.__)('Product Title', '__plugin_txtd'),
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  })), showPrices && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__prices"
  }, (0, _element.createElement)(_blockEditor.RichText, {
    value: price,
    tagName: "span",
    className: "item-price",
    placeholder: (0, _i18n.__)('$0.00', '__plugin_txtd'),
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    }
  }), enableSalePrice && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__price--sale"
  }, (0, _element.createElement)(_blockEditor.RichText, {
    tagName: "span",
    className: "item-price--sale",
    value: salePrice,
    onChange: function onChange(salePrice) {
      return setAttributes({
        salePrice: salePrice
      });
    },
    allowedFormats: []
  }))), showDescription && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__description"
  }, (0, _element.createElement)(_blockEditor.RichText, {
    value: description,
    tagName: "p",
    className: "item-description",
    placeholder: (0, _i18n.__)('Product Description', '__plugin_txtd'),
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  })));
};

var _default = FoodMenuItemPreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-item/save.js":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-item/save.js ***!
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * WordPress dependencies.
 */
var FoodMenuItemSave = function FoodMenuItemSave(props) {
  var _props$attributes = props.attributes,
      enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
      highlightLabel = _props$attributes.highlightLabel,
      enableSalePrice = _props$attributes.enableSalePrice,
      showDescription = _props$attributes.showDescription,
      showPrices = _props$attributes.showPrices,
      salePrice = _props$attributes.salePrice,
      price = _props$attributes.price,
      description = _props$attributes.description,
      title = _props$attributes.title,
      setAttributes = props.setAttributes,
      className = props.className;
  var classNames = (0, _classnames.default)(className, "nova-food-menu-item", {
    'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
    'has-sale-price': enableSalePrice === true
  });
  return (0, _element.createElement)("div", {
    className: classNames,
    itemscope: true,
    itemtype: "http://schema.org/MenuItem"
  }, enableHighlightFoodItem && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__highlight-label"
  }, (0, _element.createElement)("h5", {
    className: "nova-food-menu-item__label"
  }, " ", highlightLabel, " ")), (0, _element.createElement)("div", {
    className: "nova-food-menu-item__title"
  }, (0, _element.createElement)(_blockEditor.RichText.Content, {
    value: title,
    tagName: "h4",
    className: "item-title",
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    itemprop: "name"
  })), showPrices && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__prices",
    itemscope: true,
    itemtype: "http://schema.org/offers"
  }, (0, _element.createElement)(_blockEditor.RichText.Content, {
    value: price,
    tagName: "span",
    className: "item-price",
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    },
    itemprop: "price"
  }), enableSalePrice && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__price--sale"
  }, (0, _element.createElement)("span", {
    className: "item-price--sale"
  }, " ", salePrice, " "))), showDescription && (0, _element.createElement)("div", {
    className: "nova-food-menu-item__description"
  }, (0, _element.createElement)(_blockEditor.RichText.Content, {
    value: description,
    tagName: "p",
    className: "item-description",
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    itemprop: "description"
  })));
};

var _default = FoodMenuItemSave;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-section/edit.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-section/edit.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/menu-food/menu-food-section/preview.js"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var FoodMenuSectionEdit = function FoodMenuSectionEdit(props) {
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, props));
};

var _default = FoodMenuSectionEdit;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-section/index.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-section/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/menu-food/menu-food-section/edit.js"));

var _save = _interopRequireDefault(__webpack_require__(/*! ./save */ "./packages/block-library/build/blocks/menu-food/menu-food-section/save.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
(0, _blocks.registerBlockType)('novablocks/menu-food-section', {
  title: (0, _i18n.__)('Food Menu Section', '__plugin_txtd'),
  description: (0, _i18n.__)('A subgrouping of the Menu.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.foodmenu,
  // Additional search terms
  keywords: [(0, _i18n.__)('menu section', '__plugin_txtd'), (0, _i18n.__)('food section', '__plugin_txtd'), (0, _i18n.__)('list section', '__plugin_txtd'), (0, _i18n.__)('dishes section', '__plugin_txtd')],
  parent: ['novablocks/menu-food'],
  attributes: {
    sectionTitle: {
      type: 'string',
      default: (0, _i18n.__)('Drinks', '__plugin_txtd')
    }
  },
  edit: _edit.default,
  save: _save.default
});


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-section/preview.js":
/*!************************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-section/preview.js ***!
  \************************************************************************************/
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

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies.
 */
var ALLOWED_BLOCKS = ['novablocks/menu-food-item'];
var TEMPLATE = [['novablocks/menu-food-item']];

var FoodMenuSectionPreview = function FoodMenuSectionPreview(props) {
  var _props$attributes = props.attributes,
      sectionTitle = _props$attributes.sectionTitle,
      showPrices = _props$attributes.showPrices,
      showDescription = _props$attributes.showDescription,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      className = props.className;

  var addFoodMenuItem = function addFoodMenuItem() {
    var block = (0, _blocks.createBlock)('novablocks/menu-food-item');
    var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
  };

  var classNames = (0, _classnames.default)(className, "nova-food-menu__section");
  return (0, _element.createElement)("div", {
    className: classNames
  }, (0, _element.createElement)("header", {
    className: "nova-food-menu__header"
  }, (0, _element.createElement)(_blockEditor.RichText, {
    tagName: "h3",
    className: "section-title",
    value: sectionTitle,
    onChange: function onChange(sectionTitle) {
      return setAttributes({
        sectionTitle: sectionTitle
      });
    }
  })), (0, _element.createElement)("div", {
    className: "nova-food-menu__items"
  }, (0, _element.createElement)(_blockEditor.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: false
  })), (0, _element.createElement)(_components.Button, {
    className: "components-button block-editor-button-block-appender nova-blocks-appender",
    label: (0, _i18n.__)('Add New Menu Item', '__plugin_txtd'),
    icon: "insert",
    onClick: addFoodMenuItem
  }, (0, _i18n.__)('Add Menu Item', '__plugin_txtd')));
};

var _default = FoodMenuSectionPreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/menu-food-section/save.js":
/*!*********************************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/menu-food-section/save.js ***!
  \*********************************************************************************/
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

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * WordPress dependencies
 */
var FoodMenuSectionSave = function FoodMenuSectionSave(props) {
  var sectionTitle = props.attributes.sectionTitle,
      setAttributes = props.setAttributes,
      className = props.className;
  var classNames = (0, _classnames.default)(className, "nova-food-menu__section");
  return (0, _element.createElement)("div", {
    className: classNames,
    itemScope: true,
    itemType: "http://schema.org/MenuSection"
  }, (0, _element.createElement)("header", {
    className: "nova-food-menu__header"
  }, (0, _element.createElement)(_blockEditor.RichText.Content, {
    tagName: "h3",
    className: "section-title",
    value: sectionTitle,
    onChange: function onChange(sectionTitle) {
      return setAttributes({
        sectionTitle: sectionTitle
      });
    },
    itemprop: "name"
  })), (0, _element.createElement)("div", {
    className: "nova-food-menu__items"
  }, (0, _element.createElement)(_blockEditor.InnerBlocks.Content, null)));
};

var _default = FoodMenuSectionSave;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/preview.js":
/*!******************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/preview.js ***!
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _components = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * External dependencies
 */
var ALLOWED_BLOCKS = ['novablocks/menu-food-section'];
var TEMPLATE = [['novablocks/menu-food-section', {
  sectionTitle: 'Starters'
}, [['novablocks/menu-food-item', {
  title: 'Pea & Mint Soup',
  description: 'Server with focaccia bread',
  price: '$8.00',
  showPrices: true,
  showDescription: true,
  enableSalePrice: true,
  salePrice: '$5.00'
}], ['novablocks/menu-food-item', {
  title: 'Beef Meatballs',
  description: 'In a spicy tomato sauce',
  price: '$10.50',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Hummus & Baba Ganoush Dip',
  description: 'Olive & grilled flatbread',
  price: '$12.00',
  showPrices: true,
  showDescription: true
}]]], ['novablocks/menu-food-section', {
  sectionTitle: 'Desserts'
}, [['novablocks/menu-food-item', {
  title: 'Dark Chocolate & Brownie Delice',
  description: 'Fudge bits & salted caramel ice cream',
  price: '$6.50',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Berry Cheesecake Trifle',
  description: 'Fresh raspberries & strawberries, sable cookie',
  price: '$6.50',
  showPrices: true,
  showDescription: true,
  enableHighlightFoodItem: true,
  highlightLabel: 'New'
}], ['novablocks/menu-food-item', {
  title: 'Caramelised Lemon Tart',
  description: 'Meringue crisps, gin & tonic ice cream',
  price: '$6.50',
  showPrices: true,
  showDescription: true
}]]], ['novablocks/menu-food-section', {
  sectionTitle: 'Main Course'
}, [['novablocks/menu-food-item', {
  title: 'The Classic Burger',
  description: 'Chargrilled, with or without bacon, on a brioche bun & fries',
  price: '$15.50',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Roast Salmon',
  description: 'Hollandaise sauce, green beans & potato galette',
  price: '$19.50',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Tagliatelle Pesto Chicken',
  description: 'Roasted Mediterranean vegetables, tomato and herb sauce',
  price: '$15.00',
  showPrices: true,
  showDescription: true,
  enableHighlightFoodItem: true,
  highlightLabel: 'Chef Selection'
}], ['novablocks/menu-food-item', {
  title: 'Confit de Canard ',
  description: 'Duck confit, white bean & ham cassoulet, wilted spinach',
  price: '$12.15',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Roasted Steak Roulade',
  description: 'Mint parsley with apple cider vinegar, salt, sugar & spices',
  price: '$14.95',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Cornish-mackerel',
  description: 'Marinated tomatoes, fragrant curry, tamarillo',
  price: '$10.45',
  showPrices: true,
  showDescription: true
}], ['novablocks/menu-food-item', {
  title: 'Lobster & Cucumber Soup',
  description: 'Lobster salad, smoked onion, rock samphire & sorrel',
  price: '$24.95',
  showPrices: true,
  showDescription: true
}]]]];

var FoodMenuPreview = function FoodMenuPreview(props) {
  var _props$attributes = props.attributes,
      enableTwoColumns = _props$attributes.enableTwoColumns,
      showPrices = _props$attributes.showPrices,
      showDescription = _props$attributes.showDescription,
      clientId = props.clientId,
      className = props.className;

  var addFoodMenuSection = function addFoodMenuSection() {
    var block = (0, _blocks.createBlock)('novablocks/menu-food-section');
    var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
  };

  var classNames = (0, _classnames.default)(className, "nova-food-menu", {
    'nova-food-menu--layout': enableTwoColumns === true,
    'price--is-hidden': showPrices === false
  });
  return (0, _element.createElement)("div", {
    className: classNames
  }, (0, _element.createElement)(_blockEditor.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: false
  }), (0, _element.createElement)(_components.Button, {
    className: "components-button block-editor-button-block-appender nova-blocks-appender",
    label: (0, _i18n.__)('Add New Menu Section', '__plugin_txtd'),
    icon: "insert",
    onClick: addFoodMenuSection
  }, (0, _i18n.__)('Add Menu Section', '__plugin_txtd')));
};

var _default = FoodMenuPreview;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/menu-food/save.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/menu-food/save.js ***!
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

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

/**
 * External dependencies
 */
var FoodMenuSave = function FoodMenuSave(props) {
  var _props$attributes = props.attributes,
      enableTwoColumns = _props$attributes.enableTwoColumns,
      showPrices = _props$attributes.showPrices,
      showDescription = _props$attributes.showDescription,
      className = props.className;
  var classNames = (0, _classnames.default)(className, "nova-food-menu", {
    'nova-food-menu--layout': enableTwoColumns === true,
    'price--is-hidden': showPrices === false
  });
  return (0, _element.createElement)("div", {
    className: classNames,
    itemScope: true,
    itemType: "http://schema.org/Menu"
  }, (0, _element.createElement)(_blockEditor.InnerBlocks.Content, null));
};

var _default = FoodMenuSave;
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