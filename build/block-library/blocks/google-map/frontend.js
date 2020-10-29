this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/google-map/frontend"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/google-map/frontend.js");
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

/***/ "./packages/block-library/build/blocks/google-map/frontend.js":
/*!********************************************************************!*\
  !*** ./packages/block-library/build/blocks/google-map/frontend.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _pin = _interopRequireDefault(__webpack_require__(/*! ./pin */ "./packages/block-library/build/blocks/google-map/pin.js"));

var _utils = __webpack_require__(/*! ./utils */ "./packages/block-library/build/blocks/google-map/utils.js");

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

(function ($, window, undefined) {
  var $blocks = $('.novablocks-map');
  (0, _components.parallaxInit)($blocks);
  mapInit();

  function mapInit() {
    var _window$parent, _window$parent$wp;

    if (typeof google === "undefined" || typeof google.maps === "undefined") {
      return;
    }

    $('.js-novablocks-google-map').each(function (i, obj) {
      var $obj = $(obj),
          accentColor = $obj.data('accent-color'),
          markers = $obj.data('markers'),
          showLabels = $obj.data('show-labels'),
          showIcons = $obj.data('show-icons'),
          styles = $obj.data('styles'),
          stylesWithColor = addColorToStyles(styles, accentColor),
          zoom = $obj.data('zoom'),
          hideControls = !$obj.data('controls'),
          mapOptions = {
        mapTypeId: 'roadmap',
        center: (0, _utils.getCenterFromMarkers)(markers),
        zoom: zoom,
        styles: (0, _utils.addVisibilityToStyles)(stylesWithColor, showLabels, showIcons),
        disableDefaultUI: hideControls,
        clickableIcons: false,
        keyboardShortcuts: false
      },
          map = new google.maps.Map(obj, mapOptions);

      var pinMarkup = _pin.default.replace(/%ACCENT_COLOR%/g, accentColor);

      var mapMarkers = markers.map(function (markerString) {
        var marker = JSON.parse(markerString);
        return new google.maps.Marker({
          map: map,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinMarkup)
          },
          title: marker.title,
          position: marker.geometry.location
        });
      });
      $obj.data('map', map);
      $obj.data('mapMarkers', mapMarkers);
    });
    var api = window === null || window === void 0 ? void 0 : (_window$parent = window.parent) === null || _window$parent === void 0 ? void 0 : (_window$parent$wp = _window$parent.wp) === null || _window$parent$wp === void 0 ? void 0 : _window$parent$wp.customize;

    if (!!api) {
      api('sm_color_primary').bind(function (new_value) {
        $('.js-novablocks-google-map').each(function (i, obj) {
          var $obj = $(obj);
          var map = $obj.data('map');
          var mapMarkers = $obj.data('mapMarkers');
          var styles = $obj.data('styles');
          var stylesWithColor = addColorToStyles(styles, new_value);
          var showLabels = $obj.data('show-labels');
          var showIcons = $obj.data('show-icons');

          var pinMarkup = _pin.default.replace(/%ACCENT_COLOR%/g, new_value);

          console.log('after', (0, _utils.addVisibilityToStyles)(styles, showLabels, showIcons));
          map.setOptions({
            styles: (0, _utils.addVisibilityToStyles)(stylesWithColor, showLabels, showIcons)
          });
          mapMarkers.forEach(function (mapMarker) {
            mapMarker.setOptions({
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinMarkup)
              }
            });
          });
        });
      });
    }
  }

  function addColorToStyles(styleData, color) {
    return JSON.parse(JSON.stringify(styleData).replace(/%ACCENT_COLOR%/g, color));
  }
})(jQuery, window);


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

/***/ "@novablocks/components":
/*!*****************************************************!*\
  !*** external {"this":["novablocks","components"]} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["components"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map