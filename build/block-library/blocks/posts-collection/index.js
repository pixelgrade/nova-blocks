this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/posts-collection/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/posts-collection/index.js");
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

/***/ "./packages/block-library/build/blocks/posts-collection/attributes.json":
/*!******************************************************************************!*\
  !*** ./packages/block-library/build/blocks/posts-collection/attributes.json ***!
  \******************************************************************************/
/*! exports provided: columns, collectionTitle, collectionDescription, isLandscape, order, orderBy, category, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"columns\":{\"type\":\"number\",\"default\":3},\"collectionTitle\":{\"type\":\"string\",\"default\":\"Title\"},\"collectionDescription\":{\"type\":\"string\",\"default\":\"Description\"},\"isLandscape\":{\"type\":\"boolean\",\"default\":false},\"order\":{\"type\":\"string\",\"default\":\"desc\"},\"orderBy\":{\"type\":\"string\",\"default\":\"date\"},\"category\":{\"type\":\"string\",\"default\":\"all\"}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/posts-collection/edit.js":
/*!**********************************************************************!*\
  !*** ./packages/block-library/build/blocks/posts-collection/edit.js ***!
  \**********************************************************************/
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

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/posts-collection/preview.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var toggles = _components.CardsManager.toggles;

function getLevelAttributes(attributes) {
  var level = attributes.level;
  return {
    level: level,
    collectionTitleLevel: level,
    cardTitleLevel: level + 1
  };
}

function getAspectRatioAttributes(attributes) {
  var thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      thumbnailAspectRatioString = attributes.thumbnailAspectRatioString;

  if (thumbnailAspectRatioString === 'auto') {
    return {};
  }

  if (thumbnailAspectRatio < 50) {
    thumbnailAspectRatioString = 'landscape';
  }

  return {
    thumbnailAspectRatio: thumbnailAspectRatio,
    thumbnailAspectRatioString: thumbnailAspectRatioString
  };
}

var PostsEdit = function PostsEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var level = attributes.level,
      collectionTitleLevel = attributes.collectionTitleLevel,
      cardTitleLevel = attributes.cardTitleLevel,
      metadataPosition = attributes.metadataPosition,
      thumbnailAspectRatioString = attributes.thumbnailAspectRatioString,
      thumbnailAspectRatio = attributes.thumbnailAspectRatio,
      imageResizing = attributes.imageResizing,
      imagePadding = attributes.imagePadding;
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_preview.default, props), (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Card Details')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Customize')
  }, (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Thumbnail Aspect Ratio')
  }, (0, _element.createElement)("div", {
    key: 'thumbnail-aspect-ratio-customize-1',
    className: (0, _utils.getControlsClasses)(attributes, getAspectRatioAttributes)
  }, (0, _element.createElement)(_components2.RadioControl, {
    key: 'thumbnail-aspect-ratio',
    selected: thumbnailAspectRatioString,
    onChange: function onChange(thumbnailAspectRatioString) {
      var thumbnailAspectRatio = attributes.thumbnailAspectRatio;

      if (thumbnailAspectRatioString === 'landscape') {
        thumbnailAspectRatio = 45;
      }

      if (thumbnailAspectRatioString === 'portrait') {
        thumbnailAspectRatio = 65;
      }

      setAttributes({
        thumbnailAspectRatio: thumbnailAspectRatio,
        thumbnailAspectRatioString: thumbnailAspectRatioString
      });
    },
    options: [{
      label: 'Landscape',
      value: 'landscape'
    }, {
      label: 'Portrait',
      value: 'portrait'
    }, {
      label: 'Auto',
      value: 'auto'
    }]
  })), (0, _element.createElement)("div", {
    key: 'title-level-customize-1',
    className: (0, _utils.getControlsClasses)(attributes, getLevelAttributes)
  }, (0, _element.createElement)(_components2.PanelRow, null, (0, _element.createElement)("span", null, (0, _i18n.__)('Title Starting Size', '__plugin_txtd')), (0, _element.createElement)(_components.HeadingToolbar, {
    minLevel: 2,
    maxLevel: 4,
    selectedLevel: level,
    onChange: function onChange(level) {
      var newAttributes = getLevelAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        level: level
      }));
      setAttributes(newAttributes);
    }
  }))))), (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Thumbnail')
  }, (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Enable Image Container Editing'),
    checked: thumbnailAspectRatioString !== 'auto',
    onChange: function onChange(newValue) {
      var currentOrientation = thumbnailAspectRatio < 50 ? 'landscape' : 'portrait';
      var thumbnailAspectRatioString = !newValue ? 'auto' : currentOrientation;
      setAttributes({
        thumbnailAspectRatioString: thumbnailAspectRatioString
      });
    }
  }), thumbnailAspectRatioString !== 'auto' && (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components2.RangeControl, {
    key: 'collection-image-container-height',
    label: (0, _i18n.__)('Image container height', '__plugin_txtd'),
    value: thumbnailAspectRatio,
    onChange: function onChange(thumbnailAspectRatio) {
      setAttributes({
        thumbnailAspectRatio: thumbnailAspectRatio,
        thumbnailAspectRatioString: thumbnailAspectRatio < 50 ? 'landscape' : 'portrait'
      });
    },
    min: 0,
    max: 100,
    step: 5
  }), (0, _element.createElement)(_components2.RadioControl, {
    key: 'collection-image-resizing',
    label: (0, _i18n.__)('Image resizing'),
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
  })), (0, _element.createElement)(_components2.RangeControl, {
    key: 'collection-image-padding',
    label: (0, _i18n.__)('Image padding', '__plugin_txtd'),
    value: imagePadding,
    onChange: function onChange(imagePadding) {
      setAttributes({
        imagePadding: imagePadding
      });
    },
    min: 0,
    max: 100,
    step: 50
  })), (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Content')
  }, (0, _element.createElement)(_components2.PanelRow, null, (0, _element.createElement)("span", {
    className: 'components-base-control__label '
  }, (0, _i18n.__)('Collection Title Heading', '__plugin_txtd')), (0, _element.createElement)(_components.HeadingToolbar, {
    minLevel: 1,
    maxLevel: 5,
    selectedLevel: collectionTitleLevel,
    onChange: function onChange(collectionTitleLevel) {
      setAttributes({
        collectionTitleLevel: collectionTitleLevel
      });
    }
  })), (0, _element.createElement)(_components2.PanelRow, null, (0, _element.createElement)("span", {
    className: 'components-base-control__label '
  }, (0, _i18n.__)('Card Title Heading', '__plugin_txtd')), (0, _element.createElement)(_components.HeadingToolbar, {
    minLevel: 1,
    maxLevel: 5,
    selectedLevel: cardTitleLevel,
    onChange: function onChange(cardTitleLevel) {
      setAttributes({
        cardTitleLevel: cardTitleLevel
      });
    }
  }))), (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Metadata Position')
  }, (0, _element.createElement)(_components2.RadioControl, {
    key: 'collection-image-resizing',
    selected: metadataPosition,
    onChange: function onChange(metadataPosition) {
      setAttributes({
        metadataPosition: metadataPosition
      });
    },
    options: [{
      label: 'Above Title',
      value: 'above-title'
    }, {
      label: 'Below Title',
      value: 'below-title'
    }, {
      label: 'Split (Above Title / Below Content)',
      value: 'split'
    }]
  })))), (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Display'),
    group: (0, _i18n.__)('Block Modules')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Set up elements for this block', '__plugin_txtd')
  }, (0, _element.createElement)(_components.ToggleGroup, {
    onChange: setAttributes,
    toggles: toggles.filter(function (toggle) {
      return toggle.attribute !== 'showSubtitle';
    }).map(function (toggle) {
      return _objectSpread(_objectSpread({}, toggle), {}, {
        value: attributes[toggle.attribute]
      });
    })
  })), (0, _element.createElement)(MetaSource, props))));
};

var MetaSource = function MetaSource(props) {
  var _props$attributes = props.attributes,
      primaryMetadata = _props$attributes.primaryMetadata,
      secondaryMetadata = _props$attributes.secondaryMetadata,
      setAttributes = props.setAttributes;
  var metaSourceOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'Author',
    value: 'author'
  }, {
    label: 'Category',
    value: 'category'
  }, {
    label: 'Comments',
    value: 'comments'
  }, {
    label: 'Date',
    value: 'date'
  }, {
    label: 'Tags',
    value: 'tags'
  }];
  return (0, _element.createElement)(_components.ControlsGroup, {
    title: (0, _i18n.__)('Additional Information', '__plugin_txtd')
  }, (0, _element.createElement)(_components2.SelectControl, {
    key: 'primary-metadata-source',
    label: (0, _i18n.__)('Primary Metadata'),
    value: primaryMetadata,
    onChange: function onChange(primaryMetadata) {
      setAttributes({
        primaryMetadata: primaryMetadata
      });
    },
    options: metaSourceOptions
  }), (0, _element.createElement)(_components2.SelectControl, {
    key: 'secondary-metadata-source',
    label: (0, _i18n.__)('Secondary Metadata'),
    value: secondaryMetadata,
    onChange: function onChange(secondaryMetadata) {
      setAttributes({
        secondaryMetadata: secondaryMetadata
      });
    },
    options: metaSourceOptions
  }));
};

var _default = PostsEdit;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/posts-collection/index.js":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/posts-collection/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/posts-collection/edit.js"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

var _blockEditor = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/posts-collection/attributes.json"));

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
//import {
//	alignmentAttributes,
//	colorAttributes,
//	layoutAttributes,
//	scrollingAttributes,
//} from "@novablocks/components";
//
//const attributes = Object.assign( {}, blockAttributes, alignmentAttributes, colorAttributes, layoutAttributes, scrollingAttributes );
(0, _blocks.registerBlockType)('novablocks/posts-collection', {
  title: (0, _i18n.__)('Posts Collection', '__plugin_txtd'),
  description: (0, _i18n.__)('Show Latest Posts', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.postsCollection,
  edit: _edit.default,
  save: function save() {
    return (0, _element.createElement)(_blockEditor.InnerBlocks.Content, null);
  },
  getEditWrapperProps: function getEditWrapperProps() {
    var settings = wp.data.select('core/block-editor').getSettings();
    return settings.alignWide ? {
      'data-align': 'full'
    } : {};
  }
});


/***/ }),

/***/ "./packages/block-library/build/blocks/posts-collection/preview.js":
/*!*************************************************************************!*\
  !*** ./packages/block-library/build/blocks/posts-collection/preview.js ***!
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var ClassicLayoutPreview = _components.GridGenerator.ClassicLayoutPreview,
    ParametricLayoutPreview = _components.GridGenerator.ParametricLayoutPreview;

var Preview = function Preview(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      posts = props.posts,
      clientId = props.clientId,
      markPostsAsDisplayed = props.markPostsAsDisplayed,
      className = props.className,
      isSelected = props.isSelected;
  var showMedia = attributes.showMedia,
      showMeta = attributes.showMeta,
      showTitle = attributes.showTitle,
      showDescription = attributes.showDescription,
      showButtons = attributes.showButtons,
      layoutStyle = attributes.layoutStyle,
      contentAlign = attributes.contentAlign,
      contentStyle = attributes.contentStyle,
      blockStyle = attributes.blockStyle,
      headerPosition = attributes.headerPosition;
  markPostsAsDisplayed(clientId, posts);

  if (Array.isArray(posts) && !posts.length) {
    return (0, _element.createElement)("div", {
      className: 'wp-block__inner-container'
    }, (0, _element.createElement)("p", null, (0, _i18n.__)('There are no posts to be displayed in this block. Try changing the Content Filter settings.')));
  }

  var getContent = function getContent(index, attributes, isLandscape) {
    var post = posts === null || posts === void 0 ? void 0 : posts[index];
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
    return (0, _element.createElement)(_element.Fragment, null, headerPosition - 1 === index && (0, _element.createElement)("div", {
      className: "novablocks-grid__item"
    }, (0, _element.createElement)(_components.CollectionHeader, props)), post && (0, _element.createElement)("div", {
      className: "novablocks-grid__item"
    }, (0, _element.createElement)(_components.Post, {
      post: post,
      isLandscape: isLandscape,
      attributes: attributes
    })), !post && (0, _element.createElement)("div", {
      className: "novablocks-grid__item"
    }, (0, _element.createElement)(_components.Card, cardProps)));
  };

  var classname = (0, _classnames.default)('novablocks-block', "novablocks-collection", "novablocks-collection--align-".concat(contentAlign), "block-is-".concat(blockStyle), "content-is-".concat(contentStyle), className);
  return (0, _element.createElement)(_element.Fragment, null, layoutStyle === 'classic' && (0, _element.createElement)(ClassicLayoutPreview, props), layoutStyle === 'parametric' && (0, _element.createElement)("div", {
    className: classname
  }, (0, _element.createElement)(ParametricLayoutPreview, {
    getContent: getContent,
    cardsCount: (posts === null || posts === void 0 ? void 0 : posts.length) || (attributes === null || attributes === void 0 ? void 0 : attributes.postsToShow) || 0,
    attributes: attributes,
    setAttributes: setAttributes,
    posts: posts,
    isSelected: isSelected
  })));
};

var _default = Preview;
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map