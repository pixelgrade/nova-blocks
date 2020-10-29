this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/posts-collection/frontend"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/posts-collection/frontend.js");
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

/***/ "./packages/block-library/build/blocks/posts-collection/frontend.js":
/*!**************************************************************************!*\
  !*** ./packages/block-library/build/blocks/posts-collection/frontend.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./packages/block-library/node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! @novablocks/utils */ "@novablocks/utils");

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _GridGenerator$utils = _components.GridGenerator.utils,
    getAreaBaseClassname = _GridGenerator$utils.getAreaBaseClassname,
    getAreaClassnameByAspectRatio = _GridGenerator$utils.getAreaClassnameByAspectRatio,
    getAreaClassnameByHeightRatio = _GridGenerator$utils.getAreaClassnameByHeightRatio,
    getAreaClassnameByWidthRatio = _GridGenerator$utils.getAreaClassnameByWidthRatio,
    getGridStyle = _GridGenerator$utils.getGridStyle,
    getGridColumnsAndRows = _GridGenerator$utils.getGridColumnsAndRows,
    redistributeCardsInAreas = _GridGenerator$utils.redistributeCardsInAreas,
    isLandscape = _GridGenerator$utils.isLandscape,
    applyLayoutEngine = _GridGenerator$utils.applyLayoutEngine;

(function ($, window, undefined) {
  var defaultBlockWidth = 1152; // magic

  $('.novablocks-grid').each(function (i, grid) {
    var $grid = $(grid);
    var $block = $grid.closest('.novablocks-block');
    var $cards = $grid.closest('.novablocks-collection__cards');
    var $posts = $grid.children('.novablocks-card');
    var attributes = $grid.data();
    var cardsCount = $posts.length;
    var addedCards;
    grid.style.setProperty('--card-media-padding', attributes.imagepadding);
    grid.style.setProperty('--card-media-padding-top', (0, _utils.getCardMediaPaddingTop)(attributes.thumbnailaspectratio));
    grid.style.setProperty('--card-media-object-fit', attributes.imageresizing === 'cropped' ? 'cover' : 'scale-down');

    if (attributes.layoutstyle !== 'parametric') {
      $grid.removeClass('novablocks-grid');
      $grid.addClass('novablocks-collection__layout');
      $grid.addClass("novablocks-grid__area--".concat(attributes.islandscape ? 'landscape' : 'portrait'));
      $grid.addClass(getAreaClassnameByWidthRatio(1 / attributes.columns));
      $block.addClass('novablocks-block--ready');
      return;
    }

    var $title = $block.find('.novablocks-collection__title').detach();
    var $subtitle = $block.find('.novablocks-collection__subtitle').detach();
    var onResize = (0, _utils.debounce)(recreateLayout, 100);
    createLayout();
    $block.addClass('novablocks-block--ready');
    $(window).on('resize', onResize);

    function createLayout() {
      var blockWidth = $grid.outerWidth();
      $posts.detach();
      $grid.empty();
      $block.find('.js-collection-element-clone').remove();
      addedCards = 0;
      var areaColumns = applyLayoutEngine(attributes);
      var columnsCount = areaColumns.length;
      var firstSet = Math.floor((columnsCount - 1) / 2);
      var secondSet = columnsCount - 1 - firstSet;

      if ((0, _utils.below)('lap')) {
        for (var _i = 0; _i < firstSet; _i++) {
          removeSmallestColumn(areaColumns);
        }

        if ((0, _utils.below)('tablet')) {
          for (var _i2 = 0; _i2 < secondSet; _i2++) {
            removeSmallestColumn(areaColumns);
          }
        }
      }

      normalizeColumns(areaColumns, attributes);
      redistributeCardsInAreas(areaColumns, cardsCount, attributes);
      var gridcolumns = attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns;
      var gridrows = attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows;
      var maxcolumns = areaColumns.reduce(function (acc, column) {
        return Math.max(acc, column.col + column.width - 1);
      }, 0);
      var maxrows = areaColumns.reduce(function (acc, column) {
        return Math.max(acc, column.row + column.height - 1);
      }, 0);
      gridcolumns = Math.min(gridcolumns, maxcolumns);
      gridrows = Math.min(gridrows, maxrows);
      var compiledAttributes = Object.assign({}, attributes, {
        gridcolumns: attributes.flipcolsrows ? gridrows : gridcolumns,
        gridrows: attributes.flipcolsrows ? gridcolumns : gridrows
      });
      $grid.css(getGridStyle(compiledAttributes));

      if ((0, _utils.below)('lap') || attributes.headerposition === 0) {
        $title.clone().addClass('js-collection-element-clone').insertBefore($cards);
        $subtitle.clone().addClass('js-collection-element-clone').insertBefore($cards);
      }

      for (var _i3 = 0; _i3 < areaColumns.length; _i3++) {
        var areaColumn = areaColumns[_i3];
        var areas = areaColumn.areas,
            row = areaColumn.row,
            col = areaColumn.col,
            width = areaColumn.width,
            height = areaColumn.height;
        var $column = $('<div class="novablocks-grid__column">');
        $column.css('grid-area', "".concat(row, " / ").concat(col, " / span ").concat(height, " / span ").concat(width));
        $column.attr('data-area', "".concat(row, " / ").concat(col, " / span ").concat(height, " / span ").concat(width));

        var _loop = function _loop(j) {
          var area = areas[j];
          var blockWidthRatio = Math.min(1, blockWidth / defaultBlockWidth);
          var areaClassName = getAreaClassname(area, attributes, blockWidthRatio);
          addedCards += area.postsCount;
          var $area = $("<div class=\"".concat(areaClassName, "\">"));
          Array.from(Array(area.postsCount).keys()).map(function (i) {
            var $gridItem = $('<div class="novablocks-grid__item">');
            var $card = $posts.eq(addedCards - area.postsCount + i);
            var landscape = isLandscape(area, attributes);
            $card.toggleClass('novablocks-card--landscape', !!landscape);
            $card.toggleClass('novablocks-card--portrait', !landscape);
            $card.appendTo($gridItem);

            if (!(0, _utils.below)('lap') && attributes.headerposition === addedCards - area.postsCount + i + 1) {
              var $header = $('<div class="novablocks-grid__item js-collection-element-clone">');
              $title.clone().appendTo($header);
              $subtitle.clone().appendTo($header);
              $header.appendTo($area);
            }

            $gridItem.appendTo($area);
          });
          $area.appendTo($column);
        };

        for (var j = 0; j < areas.length; j++) {
          _loop(j);
        }

        $column.appendTo($grid);
      }
    }

    function recreateLayout() {
      $grid.contents().replaceWith($posts);
      $grid.css({
        display: '',
        gridTemplateColumns: '',
        gridTemplateRowss: ''
      });
      $posts.removeClass('novablocks-card--portrait');
      $posts.removeClass('novablocks-card--landscape');
      createLayout();
    }
  });

  function getAreaClassname(area, attributes) {
    var widthRatioMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var width = area.width,
        height = area.height;

    var _getGridColumnsAndRow = getGridColumnsAndRows(attributes),
        gridcolumns = _getGridColumnsAndRow.gridcolumns,
        gridrows = _getGridColumnsAndRow.gridrows;

    return (0, _classnames.default)([getAreaBaseClassname(area), getAreaClassnameByWidthRatio(widthRatioMultiplier * width / gridcolumns), getAreaClassnameByHeightRatio(height / gridrows), getAreaClassnameByAspectRatio(area, attributes)]);
  }

  function removeSmallestColumn(areaColumns) {
    var data = areaColumns.map(function (area, index) {
      return {
        area: area,
        index: index
      };
    });
    data.sort(function (obj1, obj2) {
      return obj1.area.width - obj2.area.width;
    });
    var indexToRemove = data[0].index;

    if (data[0].area.nth === 1) {
      indexToRemove = data[data.length].index;
    }

    areaColumns.splice(indexToRemove, 1);
  }

  function normalizeColumns(areaColumns, attributes) {
    moveColumnsToLeft(areaColumns);
    growColumnsToRight(areaColumns, attributes);
    moveColumnsToTop(areaColumns);
    areaColumns.forEach(function (areaColumn) {
      areaColumn.areas.forEach(function (area) {
        area.col = areaColumn.col;
        area.width = areaColumn.width;
      });
    });
  }

  function moveColumnsToLeft(areaColumns) {
    areaColumns.forEach(function (areaColumn) {
      var spaceLeft = 0;
      var movingLeft = true;

      while (movingLeft) {
        var overlapLeft = areaColumns.filter(function (compareColumn) {
          return compareColumn !== areaColumn;
        }).some(function (compareColumn) {
          return !(areaColumn.col + areaColumn.width - 1 < compareColumn.col || areaColumn.row + areaColumn.height - 1 < compareColumn.row || areaColumn.row > compareColumn.row + compareColumn.height - 1 || areaColumn.col - (spaceLeft + 1) > compareColumn.col + compareColumn.width - 1);
        });

        if (overlapLeft || areaColumn.col - spaceLeft <= 1) {
          movingLeft = false;
        } else {
          spaceLeft++;
        }
      }

      areaColumn.col = areaColumn.col - spaceLeft;
    });
  }

  function growColumnsToRight(areaColumns, attributes) {
    var gridcolumns = attributes.gridcolumns;
    areaColumns.forEach(function (areaColumn) {
      var spaceRight = 0;
      var growingRight = true;

      while (growingRight) {
        var overlapRight = areaColumns.filter(function (compareColumn) {
          return compareColumn !== areaColumn;
        }).some(function (compareColumn) {
          return !(areaColumn.col + areaColumn.width + spaceRight < compareColumn.col || areaColumn.row + areaColumn.height - 1 < compareColumn.row || areaColumn.row > compareColumn.row + compareColumn.height - 1 || areaColumn.col > compareColumn.col + compareColumn.width - 1);
        });

        if (overlapRight || areaColumn.col + areaColumn.width + spaceRight - 1 >= gridcolumns) {
          growingRight = false;
        } else {
          spaceRight++;
        }
      }

      areaColumn.width = areaColumn.width + spaceRight;
    });
  }

  function moveColumnsToTop(areaColumns) {
    areaColumns.forEach(function (areaColumn) {
      var spaceTop = 0;
      var movingTop = true;

      while (movingTop) {
        var overlapTop = areaColumns.filter(function (compareColumn) {
          return compareColumn !== areaColumn;
        }).some(function (compareColumn) {
          return !(areaColumn.col + areaColumn.width - 1 < compareColumn.col || areaColumn.row + areaColumn.height - 1 < compareColumn.row || areaColumn.row - (spaceTop + 1) > compareColumn.row + compareColumn.height - 1 || areaColumn.col > compareColumn.col + compareColumn.width - 1);
        });

        if (overlapTop || areaColumn.row - spaceTop <= 1) {
          movingTop = false;
        } else {
          spaceTop++;
        }
      }

      areaColumn.row = areaColumn.row - spaceTop;
    });
  }
})(jQuery, window);


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

/***/ "@novablocks/utils":
/*!************************************************!*\
  !*** external {"this":["novablocks","utils"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["utils"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map