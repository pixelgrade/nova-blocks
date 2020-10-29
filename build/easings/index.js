this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["easings"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/easings/build-module/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./packages/easings/build-module/index.js":
/*!************************************************!*\
  !*** ./packages/easings/build-module/index.js ***!
  \************************************************/
/*! exports provided: linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInBack, easeOutBack, easeInOutBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInSine", function() { return easeInSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutSine", function() { return easeOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutSine", function() { return easeInOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInExpo", function() { return easeInExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutExpo", function() { return easeOutExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutExpo", function() { return easeInOutExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInBack", function() { return easeInBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutBack", function() { return easeOutBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutBack", function() { return easeInOutBack; });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");

// Credits:
// Gaëtan Renaudeau - https://gist.github.com/gre/1650294
// Jeremy Kahn - https://github.com/jeremyckahn/shifty/
// Johan Lindell - https://gist.github.com/gre/1650294#gistcomment-1806616
var pow = Math.pow,
    abs = Math.abs,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI;

var EaseIn = function EaseIn(power) {
  return function (x) {
    return pow(x, power);
  };
};

var EaseOut = function EaseOut(power) {
  return function (x) {
    return 1 - abs(pow(x - 1, power));
  };
};

var EaseInOut = function EaseInOut(power) {
  return function (x) {
    return x < .5 ? EaseIn(power)(x * 2) / 2 : EaseOut(power)(x * 2 - 1) / 2 + 0.5;
  };
}; // Linear


var linear = EaseInOut(1); // Quad

var easeInQuad = EaseIn(2);
var easeOutQuad = EaseOut(2);
var easeInOutQuad = EaseInOut(2); // Cubic

var easeInCubic = EaseIn(3);
var easeOutCubic = EaseOut(3);
var easeInOutCubic = EaseInOut(3); // Quart

var easeInQuart = EaseIn(4);
var easeOutQuart = EaseOut(4);
var easeInOutQuart = EaseInOut(4); // Quint

var easeInQuint = EaseIn(5);
var easeOutQuint = EaseOut(5);
var easeInOutQuint = EaseInOut(5); // Sine

var easeInSine = function easeInSine(x) {
  return -1 * cos(x * PI / 2) + 1;
};
var easeOutSine = function easeOutSine(x) {
  return sin(x * PI / 2);
};
var easeInOutSine = function easeInOutSine(x) {
  return -0.5 * (cos(PI * x) - 1);
}; // Expo

var easeInExpo = function easeInExpo(x) {
  return x === 0 ? 0 : pow(2, 10 * (x - 1));
};
var easeOutExpo = function easeOutExpo(x) {
  return x === 1 ? 1 : -pow(2, -10 * x) + 1;
};
var easeInOutExpo = function easeInOutExpo(x) {
  if (x === 0 || x === 1) {
    return x;
  }

  if ((x /= 0.5) < 1) {
    return 0.5 * pow(2, 10 * (x - 1));
  }

  return 0.5 * (-pow(2, -10 * --x) + 2);
}; // Back

var easeInBack = function easeInBack(x) {
  var s = 1.70158;
  return pow(x, 2) * ((s + 1) * x - s);
};
var easeOutBack = function easeOutBack(x) {
  var s = 1.70158;
  return (x = x - 1) * x * ((s + 1) * x + s) + 1;
};
var easeInOutBack = function easeInOutBack(x) {
  var s = 1.70158;
  return (x /= 0.5) < 1 ? 0.5 * (x * x * (((s *= (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("s"), 1.525)) + 1) * x - s)) : 0.5 * ((x -= 2) * x * (((s *= (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("s"), 1.525)) + 1) * x + s) + 2);
};


/***/ })

/******/ });
//# sourceMappingURL=index.js.map