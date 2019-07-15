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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(75);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(97);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(101);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(16);
var has = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(104);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nova */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return slideshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return alignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return alignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return alignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return invert; });
/* unused harmony export swap */
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;


var nova = wp.element.createElement(
    "svg",
    { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18ZM12.0398 14C12.4069 10.626 15.2652 8 18.7368 8H20.4211C24.6068 8 28 11.3932 28 15.5789V16.381C28 20.3809 24.9177 23.6609 20.9987 23.9753C20.9996 23.9324 21 23.8893 21 23.8462V21.2727C21 17.2561 17.7439 14 13.7273 14H12.0398Z", fill: "#6565F2" }),
    wp.element.createElement("path", { d: "M8 21.2857C8 18.9188 9.91878 17 12.2857 17H13.4545C15.9649 17 18 19.0351 18 21.5455V23.1538C18 25.278 16.278 27 14.1538 27H13.7143C10.5584 27 8 24.4416 8 21.2857Z", fill: "#FFE42E" })
);

var hero = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement(
        "mask",
        { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "24", height: "24" },
        wp.element.createElement("rect", { width: "24", height: "24", rx: "12", fill: "#6565F2" })
    ),
    wp.element.createElement(
        "g",
        { mask: "url(#mask0)" },
        wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4 8.49123C4 6.01079 7.01619 4 10.7368 4H11.619C16.2477 4 20 6.50152 20 9.5873C20 12.3926 16.5888 14.6667 12.381 14.6667H11.5789C7.39321 14.6667 4 12.4045 4 9.61403V8.49123Z", fill: "#6565F2" }),
        wp.element.createElement("path", { d: "M7 18.7143C7 19.4244 7.57563 20 8.28571 20H15.5C16.3284 20 17 19.3284 17 18.5V18.5C17 17.6716 16.3284 17 15.5 17H8.71429C7.76751 17 7 17.7675 7 18.7143V18.7143Z", fill: "#FFE42E" })
    )
);

var media = wp.element.createElement(
    "svg",
    { width: "36", height: "36", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement(
        "mask",
        { id: "path-1-outside-1", maskUnits: "userSpaceOnUse", x: "-2", y: "-2", width: "40", height: "40", fill: "black" },
        wp.element.createElement("rect", { fill: "white", x: "-2", y: "-2", width: "40", height: "40" }),
        wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM23.4737 25C20.4507 25 18 22.5493 18 19.5263V18.8095C18 15.0487 21.0487 12 24.8095 12C28.2284 12 31 14.7716 31 18.1905V18.8421C31 22.243 28.243 25 24.8421 25H23.4737Z" })
    ),
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM23.4737 25C20.4507 25 18 22.5493 18 19.5263V18.8095C18 15.0487 21.0487 12 24.8095 12C28.2284 12 31 14.7716 31 18.1905V18.8421C31 22.243 28.243 25 24.8421 25H23.4737Z", fill: "#6565F2" }),
    wp.element.createElement("path", { d: "M2 18C2 9.16344 9.16344 2 18 2V-2C6.95431 -2 -2 6.95431 -2 18H2ZM18 34C9.16344 34 2 26.8366 2 18H-2C-2 29.0457 6.95431 38 18 38V34ZM34 18C34 26.8366 26.8366 34 18 34V38C29.0457 38 38 29.0457 38 18H34ZM18 2C26.8366 2 34 9.16344 34 18H38C38 6.95431 29.0457 -2 18 -2V2ZM16 19.5263C16 23.6539 19.3461 27 23.4737 27V23C21.5552 23 20 21.4448 20 19.5263H16ZM16 18.8095V19.5263H20V18.8095H16ZM24.8095 10C19.9442 10 16 13.9442 16 18.8095H20C20 16.1533 22.1533 14 24.8095 14V10ZM33 18.1905C33 13.667 29.333 10 24.8095 10V14C27.1239 14 29 15.8761 29 18.1905H33ZM33 18.8421V18.1905H29V18.8421H33ZM24.8421 27C29.3476 27 33 23.3476 33 18.8421H29C29 21.1384 27.1384 23 24.8421 23V27ZM23.4737 27H24.8421V23H23.4737V27Z", fill: "white", mask: "url(#path-1-outside-1)" }),
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 30C8.68629 30 6 27.3137 6 24V14C6 9.58172 9.58172 6 14 6H16C18.728 6 20.9458 8.18475 20.999 10.9C18.0388 12.3471 16 15.3878 16 18.9048V19.8421C16 22.9484 17.9786 25.5925 20.7443 26.5829C20.0821 28.5685 18.2082 30 16 30H12Z", fill: "#FFE42E" })
);

var slideshow = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement(
        "mask",
        { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "24", height: "24" },
        wp.element.createElement("rect", { width: "24", height: "24", rx: "12", fill: "#6565F2" })
    ),
    wp.element.createElement(
        "g",
        { mask: "url(#mask0)" },
        wp.element.createElement("path", { d: "M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z", fill: "#6565F2" }),
        wp.element.createElement("path", { d: "M17.3982 8.99283C17.8831 9.39282 17.8831 10.1358 17.3982 10.5357L14.9673 12.5407C14.315 13.0787 13.331 12.6147 13.331 11.7692V7.75933C13.331 6.91386 14.315 6.44992 14.9673 6.98788L17.3982 8.99283Z", fill: "white" }),
        wp.element.createElement("path", { d: "M6.60184 8.99283C6.11689 9.39282 6.11689 10.1358 6.60184 10.5357L9.03272 12.5407C9.68496 13.0787 10.669 12.6147 10.669 11.7692V7.75933C10.669 6.91386 9.68496 6.44992 9.03272 6.98788L6.60184 8.99283Z", fill: "white" }),
        wp.element.createElement("path", { d: "M7 18.2751C7 18.8033 7.42818 19.2314 7.95637 19.2314H8.2172C8.7774 19.2314 9.23154 18.7773 9.23154 18.2171V17.8582C9.23154 17.3842 8.84727 16.9999 8.37325 16.9999H8.27517C7.57091 16.9999 7 17.5708 7 18.2751V18.2751Z", fill: "#FFE42E" }),
        wp.element.createElement("path", { d: "M10.7192 18.2751C10.7192 18.8033 11.1474 19.2314 11.6756 19.2314H11.9364C12.4966 19.2314 12.9508 18.7773 12.9508 18.2171V17.8582C12.9508 17.3842 12.5665 16.9999 12.0925 16.9999H11.9944C11.2901 16.9999 10.7192 17.5708 10.7192 18.2751V18.2751Z", fill: "#FFE42E" }),
        wp.element.createElement("path", { d: "M14.4385 18.2751C14.4385 18.8033 14.8667 19.2314 15.3948 19.2314H15.6557C16.2159 19.2314 16.67 18.7773 16.67 18.2171V17.8582C16.67 17.3842 16.2857 16.9999 15.8117 16.9999H15.7136C15.0094 16.9999 14.4385 17.5708 14.4385 18.2751V18.2751Z", fill: "#FFE42E" })
    )
);

var alignBottom = wp.element.createElement(
    SVG,
    { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24" },
    wp.element.createElement(Path, { fill: "none", d: "M0 0h24v24H0V0z" }),
    wp.element.createElement(Path, { d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" })
);

var alignCenter = wp.element.createElement(
    SVG,
    { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24" },
    wp.element.createElement(Path, { fill: "none", d: "M0 0h24v24H0V0z" }),
    wp.element.createElement(Path, { d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
    })
);

var alignTop = wp.element.createElement(
    SVG,
    { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24" },
    wp.element.createElement(Path, { fill: "none", d: "M0 0h24v24H0V0z" }),
    wp.element.createElement(Path, { d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" })
);

var alignment = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M15.54 5.54L13.77 7.3L12 5.54L10.23 7.3L8.46 5.54L12 2L15.54 5.54ZM18.46 15.54L16.7 13.77L18.46 12L16.7 10.23L18.46 8.46L22 12L18.46 15.54ZM8.46 18.46L10.23 16.7L12 18.46L13.77 16.7L15.54 18.46L12 22L8.46 18.46ZM5.54 8.46L7.3 10.23L5.54 12L7.3 13.77L5.54 15.54L2 12L5.54 8.46Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z", fill: "currentColor" })
);

var invert = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M20 15.3099L23.31 11.9999L20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099ZM12 17.9999V5.99994C15.31 5.99994 18 8.68994 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999Z", fill: "currentColor" })
);

var swap = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "-2 -2 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M17 3H12C11.4477 3 11 3.44772 11 4V7C11 7.55228 11.4477 8 12 8H17C17.5523 8 18 7.55228 18 7V4C18 3.44772 17.5523 3 17 3Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M8 12H3C2.44772 12 2 12.4477 2 13V16C2 16.5523 2.44772 17 3 17H8C8.55228 17 9 16.5523 9 16V13C9 12.4477 8.55228 12 8 12Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M13 12H14C14 12.7956 13.6839 13.5587 13.1213 14.1213C12.5587 14.6839 11.7956 15 11 15V17C12.3261 17 13.5979 16.4732 14.5355 15.5355C15.4732 14.5979 16 13.3261 16 12H17L15 9L13 12Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M4 8H3L5 11L7 8H6C6 7.20435 6.31607 6.44129 6.87868 5.87868C7.44129 5.31607 8.20435 5 9 5V3C7.67392 3 6.40215 3.52678 5.46447 4.46447C4.52678 5.40215 4 6.67392 4 8Z", fill: "currentColor" })
);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(36);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
var debounce = function debounce(func, wait) {
	var timeout = null;

	return function () {
		var context = this;
		var args = arguments;

		var later = function later() {
			func.apply(context, args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_options__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_controls__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alignment_controls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__height_controls__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__alignment_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__alignment_controls__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__gallery_options__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__gallery_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__height_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__parallax_panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__height_controls__["b"]; });













/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(82);
var enumBugKeys = __webpack_require__(39);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(35)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(40);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(19);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(5);
var fails = __webpack_require__(17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(35)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(78);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(88);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(80)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(50);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(81);
var setToStringTag = __webpack_require__(30);
var getPrototypeOf = __webpack_require__(44);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(83)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(37);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var global = __webpack_require__(6);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(29);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(7)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(7)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(122);
var html = __webpack_require__(54);
var cel = __webpack_require__(35);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(24)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(43);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignmentControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AlignmentToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__ = __webpack_require__(133);










var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var BlockVerticalAlignmentToolbar = wp.blockEditor.BlockVerticalAlignmentToolbar;
var _wp$components = wp.components,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar;

var AlignmentToolbar = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AlignmentToolbar, _Component);

	function AlignmentToolbar() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AlignmentToolbar);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AlignmentToolbar.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AlignmentToolbar)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AlignmentToolbar, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return wp.element.createElement(
				Toolbar,
				{ className: "pixelgrade-hero-block-toolbar" },
				wp.element.createElement(Dropdown, {
					position: "bottom",
					className: "pixelgrade-hero-block-toolbar-dropdown",
					contentClassName: "components-nova--popover",
					renderToggle: function renderToggle(_ref) {
						var isOpen = _ref.isOpen,
						    onToggle = _ref.onToggle;
						return wp.element.createElement(IconButton, {
							onClick: onToggle,
							icon: __WEBPACK_IMPORTED_MODULE_5__blocks_icons__["d" /* alignment */],
							"aria-expanded": isOpen,
							label: __('Content alignment', '__plugin_txtd'),
							labelPosition: "bottom"
						});
					},
					focusOnMount: false,
					renderContent: function renderContent(_ref2) {
						var onClose = _ref2.onClose;
						return wp.element.createElement(
							Fragment,
							null,
							wp.element.createElement(AlignmentControls, _this2.props)
						);
					}
				})
			);
		}
	}]);

	return AlignmentToolbar;
}(Component);

var AlignmentControls = function (_Component2) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AlignmentControls, _Component2);

	function AlignmentControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AlignmentControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AlignmentControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AlignmentControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AlignmentControls, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    applyMinimumHeightBlock = _props$attributes.applyMinimumHeightBlock,
			    horizontalAlignment = _props$attributes.horizontalAlignment,
			    verticalAlignment = _props$attributes.verticalAlignment,
			    setAttributes = _props.setAttributes;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					PanelRow,
					null,
					wp.element.createElement(
						"span",
						null,
						__('Horizontal', '__plugin_txtd')
					),
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__["a" /* default */], {
						value: horizontalAlignment,
						onChange: function onChange(horizontalAlignment) {
							wp.data.select('core/block-editor').getSelectedBlock().innerBlocks.map(function (block) {
								wp.data.dispatch('core/block-editor').updateBlockAttributes(block.clientId, { align: horizontalAlignment });
							});
							setAttributes({ horizontalAlignment: horizontalAlignment });
						}
					})
				),
				applyMinimumHeightBlock && wp.element.createElement(
					PanelRow,
					null,
					wp.element.createElement(
						"span",
						null,
						__('Vertical', '__plugin_txtd')
					),
					wp.element.createElement(BlockVerticalAlignmentToolbar, {
						value: verticalAlignment,
						onChange: function onChange(verticalAlignment) {
							return setAttributes({ verticalAlignment: verticalAlignment });
						}
					})
				)
			);
		}
	}]);

	return AlignmentControls;
}(Component);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);






var Component = wp.element.Component;

// Take in a component as argument WrappedComponent

var withParallax = function withParallax(WrappedComponent) {

	// And return a new anonymous component
	return function (_Component) {
		__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(_class, _Component);

		function _class() {
			__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, _class);

			var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_class.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(_class)).apply(this, arguments));

			_this.state = {
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				progress: 0.5
			};

			_this.updateHandler = _this.updateDimensions.bind(_this);
			return _this;
		}

		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(_class, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
				window.addEventListener("resize", this.updateHandler);
				scrollContainer.addEventListener("scroll", this.updateHandler);
				this.updateDimensions();
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
				window.removeEventListener("resize", this.updateHandler);
				scrollContainer.removeEventListener("scroll", this.updateHandler);
			}
		}, {
			key: "updateDimensions",
			value: function updateDimensions() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
				var containerBox = this.container.getBoundingClientRect();
				var progress = (this.state.windowHeight - containerBox.y) / (this.state.windowHeight + this.container.offsetHeight);
				var actualProgress = Math.max(Math.min(progress, 1), 0);

				this.setState({
					windowWidth: window.innerWidth,
					windowHeight: window.innerHeight,
					scrollTop: scrollContainer.scrollTop,
					progress: actualProgress,
					dimensions: {
						width: this.container.offsetWidth,
						height: this.container.offsetHeight,
						top: containerBox.y
					}
				});
			}
		}, {
			key: "getParallaxStyles",
			value: function getParallaxStyles() {
				var _props$attributes = this.props.attributes,
				    enableParallax = _props$attributes.enableParallax,
				    parallaxAmount = _props$attributes.parallaxAmount,
				    parallaxCustomAmount = _props$attributes.parallaxCustomAmount;


				if (!enableParallax) {
					return {};
				}

				var actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parseInt(parallaxAmount, 10);
				actualParallaxAmount = Math.max(Math.min(1, actualParallaxAmount / 100), 0);

				var _state = this.state,
				    dimensions = _state.dimensions,
				    windowHeight = _state.windowHeight,
				    progress = _state.progress;


				var newHeight = dimensions.height * (1 - actualParallaxAmount) + windowHeight * actualParallaxAmount;
				var scale = newHeight / dimensions.height;
				var offsetY = dimensions.height * (1 - scale) / 2;
				var move = (windowHeight + dimensions.height) * (progress - 0.5) * actualParallaxAmount;

				return {
					height: newHeight,
					transition: 'none',
					transform: 'translate(0,' + (move + offsetY) + 'px)'
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				return wp.element.createElement(
					"div",
					{ className: "nova-mask", ref: function ref(el) {
							return _this2.container = el;
						} },
					this.state.dimensions && wp.element.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { style: this.getParallaxStyles() }))
				);
			}
		}]);

		return _class;
	}(Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withParallax);

/***/ }),
/* 66 */
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

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scss_style_scss__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scss_editor_scss__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_scss_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slideshow__ = __webpack_require__(150);







/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(72);
/**
 * Internal dependencies
 */




/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/hero', {
	title: __('Hero of the Galaxy', '__plugin_txtd'),
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* hero */],
	description: __('A great way to get your visitors acquainted with your content.', '__plugin_txtd'),
	category: "nova-by-pixelgrade",
	edit: __WEBPACK_IMPORTED_MODULE_2__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = wp.data.select('core/block-editor').getSettings();
		return settings.alignWide ? {
			'data-align': 'full'
		} : {};
	}
}));

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":75},"contentWidth":{"type":"string","default":"large"},"contentWidthCustom":{"type":"number","default":100},"horizontalAlignment":{"type":"string","default":"center"},"verticalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"enableMinHeight":{"type":"boolean","default":true},"applyMinimumHeight":{"type":"string","source":"meta","meta":"nova_hero_apply_minimum_height"},"minHeight":{"type":"number","source":"meta","meta":"nova_hero_minimum_height"},"applyMinimumHeightBlock":{"type":"boolean","default":false},"scrollIndicator":{"type":"boolean","source":"meta","meta":"nova_hero_scroll_indicator"},"scrollIndicatorBlock":{"type":"boolean","default":false},"backgroundType":{"type":"string","default":"image"},"media":{"type":"object","default":{"type":"image","sizes":{"full":{"url":"https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80","url1":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}}},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":30},"images":{"type":"array","default":[]}}}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls__ = __webpack_require__(137);














var __ = wp.i18n.__;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;


var editorData = wp.data.select('core/block-editor');

var updateBlocks = function updateBlocks(attributes) {
	var blocks = editorData.getBlocks();

	blocks.filter(function (block) {
		return block.name === 'nova/hero';
	}).filter(function (block, heroBlockIndex) {
		var _block$attributes$att = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, block.attributes, attributes),
		    applyMinimumHeight = _block$attributes$att.applyMinimumHeight,
		    scrollIndicator = _block$attributes$att.scrollIndicator;

		var applyMinimumHeightBlock = applyMinimumHeight === 'first' && heroBlockIndex === 0 || applyMinimumHeight === 'all';
		var scrollIndicatorBlock = scrollIndicator === true && heroBlockIndex === 0;
		var blockIndex = blocks.findIndex(function (testBlock) {
			return block === testBlock;
		});

		wp.data.dispatch('core/block-editor').updateBlockAttributes(block.clientId, {
			blockIndex: blockIndex,
			applyMinimumHeightBlock: applyMinimumHeightBlock,
			scrollIndicatorBlock: scrollIndicatorBlock
		});

		return true;
	});
};

var blockList = editorData.getBlocks();
var debouncedOnSubscribe = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* debounce */])(function () {

	var newBlockList = editorData.getBlocks();
	var blockListChanged = blockList.length !== newBlockList.length;

	if (!blockListChanged) {
		blockListChanged = blockList.some(function (block, index) {
			return blockList[index].clientId !== newBlockList[index].clientId;
		});
	}

	if (blockListChanged) {
		blockList = newBlockList;
		updateBlocks();
	}
}, 30);

wp.data.subscribe(debouncedOnSubscribe);

var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Edit, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    positionIndicator = _props.attributes.positionIndicator,
			    setAttributes = _props.setAttributes;


			return [wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_9__preview__["a" /* default */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_10__controls__["a" /* default */], this.props)
			), wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Content Position', '__plugin_txtd'), initialOpen: true },
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["a" /* AlignmentControls */], this.props)
				),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["d" /* ColorPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["i" /* LayoutPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["h" /* HeightPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["l" /* ScrollIndicatorPanel */], this.props),
				false && wp.element.createElement(
					PanelBody,
					{ title: __('Position Indicators', '__plugin_txtd') },
					wp.element.createElement(ToggleControl, {
						label: __('Enable Position Indicators', '__plugin_txtd'),
						checked: positionIndicator,
						onChange: function onChange(positionIndicator) {
							setAttributes({ positionIndicator: positionIndicator });
							updateBlocks({ positionIndicator: positionIndicator });
						}
					})
				),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["k" /* ParallaxPanel */], this.props)
			)];
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
module.exports = __webpack_require__(5).Object.getPrototypeOf;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(19);
var $getPrototypeOf = __webpack_require__(44);

__webpack_require__(45)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(55);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var defined = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(30);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(84);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(86);
var step = __webpack_require__(87);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(58);
__webpack_require__(95);
__webpack_require__(96);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(50);
var META = __webpack_require__(91).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(30);
var uid = __webpack_require__(27);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(92);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(29);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(94);
var $GOPD = __webpack_require__(57);
var $GOPS = __webpack_require__(42);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(23);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(56).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(27)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(17)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(56).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(5).Object.setPrototypeOf;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(100).set });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(57).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(107) });


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(10);
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(31);
var toObject = __webpack_require__(19);
var IObject = __webpack_require__(52);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__padding__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__width__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_scss__);









var __ = wp.i18n.__;
var Component = wp.element.Component;
var PanelBody = wp.components.PanelBody;

var LayoutPanel = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(LayoutPanel, _Component);

	function LayoutPanel() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LayoutPanel);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LayoutPanel.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(LayoutPanel)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LayoutPanel, [{
		key: "render",
		value: function render() {

			return wp.element.createElement(
				PanelBody,
				{
					className: "pixelgrade-hero-button-group-wrapper",
					title: __('Layout', '__plugin_txtd'),
					initialOpen: true },
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__padding__["a" /* default */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__width__["a" /* default */], this.props),
				this.props.children
			);
		}
	}]);

	return LayoutPanel;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (LayoutPanel);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    RangeControl = _wp$components.RangeControl;

var PaddingControls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PaddingControls, _Component);

	function PaddingControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PaddingControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PaddingControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(PaddingControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PaddingControls, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    contentPadding = _props$attributes.contentPadding,
			    contentPaddingCustom = _props$attributes.contentPaddingCustom,
			    setAttributes = _props.setAttributes;


			var contentPaddingOptions = [{ label: __('Small', '__plugin_txtd'), value: 'small' }, { label: __('Medium', '__plugin_txtd'), value: 'medium' }, { label: __('Large', '__plugin_txtd'), value: 'large' }, { label: __('Custom', '__plugin_txtd'), value: 'custom' }];

			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					'label',
					null,
					__('Content Padding', '__plugin_txtd')
				),
				wp.element.createElement(
					ButtonGroup,
					null,
					contentPaddingOptions.map(function (option) {
						return wp.element.createElement(
							Button,
							{ key: option.value,
								isDefault: option.value !== contentPadding,
								isPrimary: option.value === contentPadding,
								onClick: function onClick() {
									setAttributes({ contentPadding: option.value });
								} },
							option.label
						);
					})
				),
				'custom' === contentPadding && wp.element.createElement(RangeControl, {
					value: contentPaddingCustom,
					onChange: function onChange(contentPaddingCustom) {
						return setAttributes({ contentPaddingCustom: contentPaddingCustom });
					},
					min: 0,
					max: 25
				})
			);
		}
	}]);

	return PaddingControls;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (PaddingControls);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    RangeControl = _wp$components.RangeControl;

var WidthControls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WidthControls, _Component);

	function WidthControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WidthControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (WidthControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WidthControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WidthControls, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    contentWidth = _props$attributes.contentWidth,
			    contentWidthCustom = _props$attributes.contentWidthCustom,
			    setAttributes = _props.setAttributes;


			var contentWidthOptions = [{ label: __('Full', '__plugin_txtd'), value: 'full' }, { label: __('Large', '__plugin_txtd'), value: 'large' }, { label: __('Narrow', '__plugin_txtd'), value: 'narrow' }, { label: __('Custom', '__plugin_txtd'), value: 'custom' }];

			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					'label',
					null,
					__('Content Width', '__plugin_txtd')
				),
				wp.element.createElement(
					ButtonGroup,
					{ label: 'Content Width' },
					contentWidthOptions.map(function (option) {
						return wp.element.createElement(
							Button,
							{ isDefault: option.value !== contentWidth,
								isPrimary: option.value === contentWidth,
								onClick: function onClick() {
									setAttributes({ contentWidth: option.value });
								} },
							option.label
						);
					})
				),
				'custom' === contentWidth && wp.element.createElement(RangeControl, {
					value: contentWidthCustom,
					onChange: function onChange(contentWidthCustom) {
						return setAttributes({ contentWidthCustom: contentWidthCustom });
					},
					min: 20,
					max: 90,
					step: 10
				})
			);
		}
	}]);

	return WidthControls;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (WidthControls);

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;

var ParallaxPanel = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ParallaxPanel, _Component);

	function ParallaxPanel() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ParallaxPanel);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ParallaxPanel.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ParallaxPanel)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ParallaxPanel, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    enableParallax = _props$attributes.enableParallax,
			    parallaxAmount = _props$attributes.parallaxAmount,
			    parallaxCustomAmount = _props$attributes.parallaxCustomAmount,
			    setAttributes = _props.setAttributes;


			return wp.element.createElement(
				PanelBody,
				{ title: __('Parallax', '__plugin_txtd'), initialOpen: false },
				wp.element.createElement(ToggleControl, {
					label: __('Enable Parallax Scrolling', '__plugin_txtd'),
					checked: enableParallax,
					onChange: function onChange() {
						return setAttributes({ enableParallax: !enableParallax });
					}
				}),
				!!enableParallax && wp.element.createElement(RadioControl, {
					label: __('Parallax Orbital Speed', '__plugin_txtd'),
					selected: parallaxAmount,
					onChange: function onChange(parallaxAmount) {

						if (parallaxAmount === 'custom') {
							setAttributes({ parallaxAmount: parallaxAmount });
						} else {
							setAttributes({
								parallaxAmount: parallaxAmount,
								parallaxCustomAmount: parseInt(parallaxAmount, 10)
							});
						}
					},
					options: [{
						label: __('Fast as Mercure', '__plugin_txtd'),
						value: '20'
					}, {
						label: __('Natural as Earth', '__plugin_txtd'),
						value: '50'
					}, {
						label: __('Slow as Neptune', '__plugin_txtd'),
						value: '70'
					}, {
						label: __('Custom', '__plugin_txtd'),
						value: 'custom'
					}],
					help: __('The speed at which the parallax effect runs.', '__plugin_txtd')
				}),
				!!enableParallax && 'custom' === parallaxAmount && wp.element.createElement(RangeControl, {
					value: parallaxCustomAmount,
					onChange: function onChange(parallaxCustomAmount) {
						return setAttributes({ parallaxCustomAmount: parallaxCustomAmount });
					},
					min: 10,
					max: 100,
					step: 10,
					help: __('It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.', '__plugin_txtd')
				})
			);
		}
	}]);

	return ParallaxPanel;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ParallaxPanel);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GalleryPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    FormFileUpload = _wp$components.FormFileUpload,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder;


var ALLOWED_MEDIA_TYPES = ['image'];

var GalleryPlaceholder = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(GalleryPlaceholder, _Component);

	function GalleryPlaceholder() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, GalleryPlaceholder);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (GalleryPlaceholder.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(GalleryPlaceholder)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(GalleryPlaceholder, [{
		key: 'onChangeGallery',
		value: function onChangeGallery(galleryImages) {
			var _this2 = this;

			var promises = galleryImages.map(function (image, index) {
				return wp.apiRequest({ path: '/wp/v2/media/' + image.id }).then(function (newImage) {
					galleryImages[index] = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, newImage, image);
				});
			});

			__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises).then(function () {
				_this2.props.setAttributes({ galleryImages: galleryImages.filter(function (image) {
						return !!image.id && !!image.sizes && !!image.sizes.large && !!image.sizes.large.url;
					}) });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    galleryImages = _props$attributes.galleryImages,
			    selected = _props$attributes.selected,
			    onSelectImage = _props$attributes.onSelectImage,
			    onChange = _props$attributes.onChange,
			    setAttributes = _props.setAttributes;


			var hasImages = !!galleryImages.length;

			return wp.element.createElement(MediaPlaceholder, {
				addToGallery: hasImages,
				isAppender: hasImages,
				className: '',
				labels: {
					title: '',
					instructions: __('Drag images, upload new ones or select files from your library.', '__plugin_txtd')
				},
				onSelect: this.onChangeGallery.bind(this),
				accept: 'image/*',
				allowedTypes: ALLOWED_MEDIA_TYPES,
				multiple: true,
				value: hasImages ? galleryImages : undefined
			});
		}
	}]);

	return GalleryPlaceholder;
}(Component);

var GalleryPreview = function (_Component2) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(GalleryPreview, _Component2);

	function GalleryPreview() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, GalleryPreview);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (GalleryPreview.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(GalleryPreview)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(GalleryPreview, [{
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    galleryImages = _props2.galleryImages,
			    selected = _props2.selected,
			    onSelectImage = _props2.onSelectImage,
			    isSelected = _props2.isSelected;


			return wp.element.createElement(
				'ul',
				{ 'class': 'nova-slideshow__gallery-edit' },
				galleryImages.map(function (img, index) {

					var classes = ['nova-slideshow__gallery-item'];

					if (selected === index) {
						classes.push('nova-slideshow__gallery-item--active');
					}

					return wp.element.createElement(
						'li',
						{ key: img.id || img.url, onClick: function onClick() {
								onSelectImage(index);
							} },
						wp.element.createElement(
							'div',
							{ className: classes.join(' ') },
							wp.element.createElement('img', { src: img.sizes.thumbnail.url, alt: '' })
						)
					);
				})
			);
		}
	}]);

	return GalleryPreview;
}(Component);



/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(48);
__webpack_require__(55);
__webpack_require__(116);
__webpack_require__(128);
__webpack_require__(129);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(59);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(117);
var forOf = __webpack_require__(118);
var speciesConstructor = __webpack_require__(60);
var task = __webpack_require__(61).set;
var microtask = __webpack_require__(123)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(62);
var userAgent = __webpack_require__(124);
var promiseResolve = __webpack_require__(63);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(125)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(30)($Promise, PROMISE);
__webpack_require__(126)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(127)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(119);
var isArrayIter = __webpack_require__(120);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(53);
var getIterFn = __webpack_require__(121);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(22);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(7)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(61).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(24)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(7)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(7)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(5);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(60);
var promiseResolve = __webpack_require__(63);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(43);
var perform = __webpack_require__(62);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColorToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OverlayControls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(26);









var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    ColorPalette = _wp$components.ColorPalette,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton,
    RadioControl = _wp$components.RadioControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    Toolbar = _wp$components.Toolbar;
var PanelColorSettings = wp.blockEditor.PanelColorSettings;


var colors = [{
	name: __('Dark', '__plugin_txtd'),
	color: '#000'
}, {
	name: __('Light', '__plugin_txtd'),
	color: '#FFF'
}];

var OverlayControls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(OverlayControls, _Component);

	function OverlayControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, OverlayControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OverlayControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(OverlayControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(OverlayControls, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    overlayFilterStrength = _props$attributes.overlayFilterStrength,
			    setAttributes = _props.setAttributes;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(RadioControl, {
					label: __('Overlay Filter Style', '__plugin_txtd'),
					selected: overlayFilterStyle,
					options: [{ label: __('None', '__plugin_txtd'), value: 'none' }, { label: __('Dark', '__plugin_txtd'), value: 'dark' }, { label: __('Light', '__plugin_txtd'), value: 'light' }],
					onChange: function onChange(overlayFilterStyle) {
						return setAttributes({ overlayFilterStyle: overlayFilterStyle });
					}
				}),
				overlayFilterStyle !== 'none' && wp.element.createElement(RangeControl, {
					label: __('Overlay Filter Strength', '__plugin_txtd'),
					value: overlayFilterStrength,
					onChange: function onChange(overlayFilterStrength) {
						return setAttributes({ overlayFilterStrength: overlayFilterStrength });
					},
					min: 0,
					max: 100,
					step: 10
				})
			);
		}
	}]);

	return OverlayControls;
}(Component);

var ColorControls = function (_Component2) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColorControls, _Component2);

	function ColorControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColorControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColorControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColorControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColorControls, [{
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    contentColor = _props2.attributes.contentColor,
			    setAttributes = _props2.setAttributes;


			return wp.element.createElement(ColorPalette, {
				className: "nova-hide-clear-color",
				value: contentColor,
				colors: colors,
				onChange: function onChange(contentColor) {
					return setAttributes({ contentColor: contentColor });
				},
				disableCustomColors: true
			});
		}
	}]);

	return ColorControls;
}(Component);

var ColorPanel = function (_Component3) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColorPanel, _Component3);

	function ColorPanel() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColorPanel);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColorPanel.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColorPanel)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColorPanel, [{
		key: "render",
		value: function render() {
			var _props3 = this.props,
			    contentColor = _props3.attributes.contentColor,
			    setAttributes = _props3.setAttributes;


			return wp.element.createElement(
				PanelColorSettings,
				{
					className: "nova-hide-clear-color",
					title: __('Color Settings', '__plugin_txtd'),
					colorSettings: [{
						value: contentColor,
						onChange: function onChange(contentColor) {
							return setAttributes({ contentColor: contentColor });
						},
						label: __('Content Color', '__plugin_txtd')
					}],
					colors: colors,
					initialOpen: false },
				wp.element.createElement(OverlayControls, this.props)
			);
		}
	}]);

	return ColorPanel;
}(Component);

var ColorToolbar = function (_Component4) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ColorToolbar, _Component4);

	function ColorToolbar() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColorToolbar);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ColorToolbar.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ColorToolbar)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ColorToolbar, [{
		key: "render",
		value: function render() {
			var _this5 = this;

			return wp.element.createElement(
				Toolbar,
				{ className: "pixelgrade-hero-block-toolbar" },
				wp.element.createElement(Dropdown, {
					position: "bottom",
					className: "pixelgrade-hero-block-toolbar-dropdown",
					contentClassName: "components-nova--popover",
					renderToggle: function renderToggle(_ref) {
						var isOpen = _ref.isOpen,
						    onToggle = _ref.onToggle;
						return wp.element.createElement(IconButton, {
							onClick: onToggle,
							icon: __WEBPACK_IMPORTED_MODULE_6__blocks_icons__["f" /* invert */],
							"aria-expanded": isOpen,
							label: __('Color Options', '__plugin_txtd'),
							labelPosition: "bottom"
						});
					},
					focusOnMount: false,
					renderContent: function renderContent(_ref2) {
						var onClose = _ref2.onClose;
						return wp.element.createElement(
							Fragment,
							null,
							wp.element.createElement(ColorControls, _this5.props),
							wp.element.createElement(OverlayControls, _this5.props)
						);
					}
				})
			);
		}
	}]);

	return ColorToolbar;
}(Component);



/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockHorizontalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_icons__ = __webpack_require__(12);



var __ = wp.i18n.__;
var withViewportMatch = wp.viewport.withViewportMatch;
var withSelect = wp.data.withSelect;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var createContext = wp.element.createContext;

var _createContext = createContext({
	name: '',
	isSelected: false,
	focusedElement: null,
	setFocusedElement: function setFocusedElement() {},
	clientId: null
}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

var Toolbar = wp.components.Toolbar;


var BLOCK_ALIGNMENTS_CONTROLS = {
	left: {
		icon: __WEBPACK_IMPORTED_MODULE_1__blocks_icons__["c" /* alignTop */],
		title: __('Align Left', '__plugin_txtd')
	},
	center: {
		icon: __WEBPACK_IMPORTED_MODULE_1__blocks_icons__["b" /* alignCenter */],
		title: __('Align Middle', '__plugin_txtd')
	},
	right: {
		icon: __WEBPACK_IMPORTED_MODULE_1__blocks_icons__["a" /* alignBottom */],
		title: __('Align Right', '__plugin_txtd')
	}
};

var DEFAULT_CONTROLS = ['left', 'center', 'right'];
var DEFAULT_CONTROL = 'center';

function BlockHorizontalAlignmentToolbar(_ref) {
	var isCollapsed = _ref.isCollapsed,
	    value = _ref.value,
	    onChange = _ref.onChange,
	    _ref$controls = _ref.controls,
	    controls = _ref$controls === undefined ? DEFAULT_CONTROLS : _ref$controls;

	function applyOrUnset(align) {
		return function () {
			return onChange(value === align ? undefined : align);
		};
	}

	var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
	var defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[DEFAULT_CONTROL];

	return wp.element.createElement(Toolbar, {
		isCollapsed: isCollapsed,
		icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
		controls: controls.map(function (control) {
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, BLOCK_ALIGNMENTS_CONTROLS[control], {
				isActive: value === control,
				onClick: applyOrUnset(control),
				className: "pixelgrade-hero-horizontal-alignment-button"
			});
		})
	});
}

// @todo remove function declaration and use core method when exposed through the api
var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
	return createHigherOrderComponent(function (OriginalComponent) {
		return function (props) {
			return wp.element.createElement(
				Consumer,
				null,
				function (context) {
					return wp.element.createElement(OriginalComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, mapContextToProps(context, props)));
				}
			);
		};
	}, 'withBlockEditContext');
};

/* harmony default export */ __webpack_exports__["a"] = (compose(withBlockEditContext(function (_ref2) {
	var clientId = _ref2.clientId;

	return {
		clientId: clientId
	};
}), withViewportMatch({ isLargeViewport: 'medium' }), withSelect(function (select, _ref3) {
	var clientId = _ref3.clientId,
	    isLargeViewport = _ref3.isLargeViewport,
	    isCollapsed = _ref3.isCollapsed;

	var _select = select('core/block-editor'),
	    getBlockRootClientId = _select.getBlockRootClientId,
	    getSettings = _select.getSettings;

	return {
		isCollapsed: isCollapsed || !isLargeViewport || !getSettings().hasFixedToolbar && getBlockRootClientId(clientId)
	};
}))(BlockHorizontalAlignmentToolbar));

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollIndicatorPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_utils__ = __webpack_require__(25);








var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    select = _wp$data.select,
    subscribe = _wp$data.subscribe;


var blockList = select('core/block-editor').getBlocks();

var debouncedOnSubscribe = Object(__WEBPACK_IMPORTED_MODULE_6__blocks_utils__["a" /* debounce */])(function () {
	var newBlockList = select('core/block-editor').getBlocks();
	var blockListChanged = blockList.length !== newBlockList.length;

	if (!blockListChanged) {
		blockListChanged = blockList.some(function (block, index) {
			return blockList[index].clientId !== newBlockList[index].clientId;
		});
	}

	if (blockListChanged) {
		blockList = newBlockList;
		updateBlocks();
	}
}, 30);

subscribe(debouncedOnSubscribe);

var updateBlocks = function updateBlocks(attributes) {

	select('core/block-editor').getBlocks().filter(function (block) {
		return block.name === 'nova/hero';
	}).filter(function (block, index) {
		var _block$attributes$att = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, block.attributes, attributes),
		    applyMinimumHeight = _block$attributes$att.applyMinimumHeight,
		    scrollIndicator = _block$attributes$att.scrollIndicator;

		var applyMinimumHeightBlock = applyMinimumHeight === 'first' && index === 0 || applyMinimumHeight === 'all';
		var scrollIndicatorBlock = scrollIndicator === true && index === 0;

		dispatch('core/block-editor').updateBlockAttributes(block.clientId, {
			applyMinimumHeightBlock: applyMinimumHeightBlock,
			scrollIndicatorBlock: scrollIndicatorBlock
		});

		return true;
	});
};

var HeightPanel = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HeightPanel, _Component);

	function HeightPanel() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HeightPanel);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeightPanel.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HeightPanel)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HeightPanel, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;


			var applyMinimumHeight = !!attributes.applyMinimumHeight ? attributes.applyMinimumHeight : 'first';
			var minHeight = !!attributes.minHeight ? attributes.minHeight : 75;

			return wp.element.createElement(
				PanelBody,
				{ title: __('Height', '__plugin_txtd'), initialOpen: false },
				wp.element.createElement(RadioControl, {
					label: __('Apply Minimum Height', '__plugin_txtd'),
					selected: applyMinimumHeight,
					onChange: function onChange(applyMinimumHeight) {
						setAttributes({ applyMinimumHeight: applyMinimumHeight });
						updateBlocks({ applyMinimumHeight: applyMinimumHeight });
					},
					options: [{ label: __('None', '__plugin_txtd'), value: 'none' }, { label: __('First Hero Block Only', '__plugin_txtd'), value: 'first' }, { label: __('All Hero Blocks', '__plugin_txtd'), value: 'all' }]
				}),
				'none' !== applyMinimumHeight && wp.element.createElement(RadioControl, {
					label: __('Minimum Height', '__plugin_txtd'),
					selected: minHeight,
					onChange: function onChange(minHeight) {
						setAttributes({ minHeight: parseInt(minHeight, 10) });
						//							updateBlocks( { minHeight } );
					},
					options: [{ label: __('Half', '__plugin_txtd'), value: 50 }, { label: __('Two Thirds', '__plugin_txtd'), value: 66 }, { label: __('Three Quarters', '__plugin_txtd'), value: 75 }, { label: __('Full', '__plugin_txtd'), value: 100 }]
				})
			);
		}
	}]);

	return HeightPanel;
}(Component);

var ScrollIndicatorPanel = function (_Component2) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ScrollIndicatorPanel, _Component2);

	function ScrollIndicatorPanel() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ScrollIndicatorPanel);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ScrollIndicatorPanel.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ScrollIndicatorPanel)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ScrollIndicatorPanel, [{
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    scrollIndicator = _props2.attributes.scrollIndicator,
			    setAttributes = _props2.setAttributes;


			var heroBlocks = select('core/block-editor').getBlocks().filter(function (block) {
				return block.name === 'nova/hero';
			});

			var index = heroBlocks.findIndex(function (block) {
				return block.clientId === select('core/block-editor').getSelectedBlockClientId();
			});

			return wp.element.createElement(
				PanelBody,
				{ title: __('Scroll Indicator', '__plugin_txtd'), style: { display: index === 0 ? 'block' : 'none' }, initialOpen: false },
				wp.element.createElement(ToggleControl, {
					label: __('Enable Scroll Indicator', '__plugin_txtd'),
					checked: scrollIndicator,
					onChange: function onChange(scrollIndicator) {
						setAttributes({ scrollIndicator: scrollIndicator });
						updateBlocks({ scrollIndicator: scrollIndicator });
					}
				})
			);
		}
	}]);

	return ScrollIndicatorPanel;
}(Component);



/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background__ = __webpack_require__(136);





var Component = wp.element.Component;
var InnerBlocks = wp.blockEditor.InnerBlocks;




var HeroPreview = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HeroPreview, _Component);

	function HeroPreview() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HeroPreview);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeroPreview.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HeroPreview)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HeroPreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    contentPadding = _props$attributes.contentPadding,
			    contentPaddingCustom = _props$attributes.contentPaddingCustom,
			    contentWidth = _props$attributes.contentWidth,
			    contentWidthCustom = _props$attributes.contentWidthCustom,
			    verticalAlignment = _props$attributes.verticalAlignment,
			    horizontalAlignment = _props$attributes.horizontalAlignment,
			    minHeight = _props$attributes.minHeight,
			    applyMinimumHeightBlock = _props$attributes.applyMinimumHeightBlock,
			    scrollIndicatorBlock = _props$attributes.scrollIndicatorBlock,
			    contentColor = _props$attributes.contentColor,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    className = _props.className;


			var classes = [className, 'nova-hero', 'nova-u-valign-' + verticalAlignment, 'nova-u-halign-' + horizontalAlignment, 'nova-u-spacing-' + contentPadding, 'nova-u-content-width-' + contentWidth, 'nova-u-background', 'nova-u-background-' + overlayFilterStyle];

			var styles = {
				hero: {
					color: contentColor
				},
				foreground: {},
				content: {}
			};

			if (!!applyMinimumHeightBlock) {
				styles.hero.minHeight = minHeight + 'vh';
			}

			if (contentPadding === 'custom') {
				styles.foreground.paddingTop = contentPaddingCustom + '%';
				styles.foreground.paddingBottom = contentPaddingCustom + '%';
			}

			if (contentWidth === 'custom') {
				styles.content.maxWidth = contentWidthCustom + '%';
			}

			return wp.element.createElement(
				'div',
				{ className: classes.join(' '), style: styles.hero },
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__background__["a" /* default */], this.props),
				wp.element.createElement(
					'div',
					{ className: 'nova-hero__foreground nova-u-content-padding', style: styles.foreground },
					wp.element.createElement(
						'div',
						{ className: 'nova-u-content-align' },
						wp.element.createElement(
							'div',
							{ className: 'nova-hero__inner-container nova-u-content-width', style: styles.content },
							wp.element.createElement(InnerBlocks, { template: [['core/heading', { content: 'This is a catchy title', align: 'center', level: 1 }], ['core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' }], ['core/button', { text: 'Discover more', align: 'center' }]] })
						),
						scrollIndicatorBlock && wp.element.createElement('div', { className: 'nova-hero__indicator' })
					)
				)
			);
		}
	}]);

	return HeroPreview;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (HeroPreview);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_with_parallax__ = __webpack_require__(65);







var Component = wp.element.Component;

var HeroBackground = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HeroBackground, _Component);

	function HeroBackground() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HeroBackground);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeroBackground.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HeroBackground)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HeroBackground, [{
		key: 'render',
		value: function render() {
			var _props$attributes = this.props.attributes,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    overlayFilterStrength = _props$attributes.overlayFilterStrength,
			    media = _props$attributes.media;


			var styles = {};

			if (overlayFilterStyle !== 'none') {
				styles.opacity = 1 - overlayFilterStrength / 100;
			}

			return wp.element.createElement(
				'div',
				{ className: 'nova-hero__background', style: this.props.style },
				media.type === 'image' && typeof media.sizes !== 'undefined' && wp.element.createElement('img', { className: 'nova-hero__media', src: media.sizes.full.url, style: styles }),
				media.type === 'video' && wp.element.createElement('video', { muted: true, autoPlay: true, loop: true, className: 'nova-hero__media', src: media.url, style: styles })
			);
		}
	}]);

	return HeroBackground;
}(Component);

;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__components_with_parallax__["a" /* default */])(HeroBackground));

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(26);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;




var ALLOWED_MEDIA_TYPES = ['image', 'video'];

var HeroBlockControls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HeroBlockControls, _Component);

	function HeroBlockControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HeroBlockControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeroBlockControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HeroBlockControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HeroBlockControls, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var setAttributes = this.props.setAttributes;


			return wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(
					Toolbar,
					{ className: "pixelgrade-hero-block-toolbar" },
					wp.element.createElement(Dropdown, {
						position: "bottom",
						className: "pixelgrade-hero-block-toolbar-dropdown",
						contentClassName: "components-nova--popover",
						renderToggle: function renderToggle(_ref) {
							var isOpen = _ref.isOpen,
							    onToggle = _ref.onToggle;
							return wp.element.createElement(IconButton, {
								onClick: onToggle,
								icon: __WEBPACK_IMPORTED_MODULE_5__icons__["d" /* alignment */],
								"aria-expanded": isOpen,
								label: __('Content alignment', '__plugin_txtd'),
								labelPosition: "bottom"
							});
						},
						focusOnMount: false,
						renderContent: function renderContent(_ref2) {
							var onClose = _ref2.onClose;
							return wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["a" /* AlignmentControls */], _this2.props)
							);
						}
					})
				),
				wp.element.createElement(
					Toolbar,
					{ className: "pixelgrade-hero-block-toolbar" },
					wp.element.createElement(Dropdown, {
						position: "bottom",
						className: "pixelgrade-hero-block-toolbar-dropdown",
						contentClassName: "components-nova--popover",
						renderToggle: function renderToggle(_ref3) {
							var isOpen = _ref3.isOpen,
							    onToggle = _ref3.onToggle;
							return wp.element.createElement(IconButton, {
								onClick: onToggle,
								icon: __WEBPACK_IMPORTED_MODULE_5__icons__["f" /* invert */],
								"aria-expanded": isOpen,
								label: __('Invert colors', '__plugin_txtd'),
								labelPosition: "bottom"
							});
						},
						focusOnMount: false,
						renderContent: function renderContent(_ref4) {
							var onClose = _ref4.onClose;
							return wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["c" /* ColorControls */], _this2.props),
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["j" /* OverlayControls */], _this2.props)
							);
						}
					})
				),
				wp.element.createElement(
					Toolbar,
					null,
					wp.element.createElement(MediaUpload, {
						allowedTypes: ALLOWED_MEDIA_TYPES,
						onSelect: function onSelect(media) {
							return setAttributes({ media: media });
						},
						render: function render(_ref5) {
							var open = _ref5.open;

							return wp.element.createElement(IconButton, {
								label: __('Swap Media', '__plugin_txtd'),
								icon: "format-image",
								onClick: open
							});
						}
					})
				)
			);
		}
	}]);

	return HeroBlockControls;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (HeroBlockControls);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(149);

/**
 * Internal dependencies
 */





/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/media', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
	title: __('Media Card Constellation', '__plugin_txtd'),
	description: __('Display media objects alongside short pieces of content.', '__plugin_txtd'),
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["g" /* media */],
	category: 'nova-by-pixelgrade'
}, __WEBPACK_IMPORTED_MODULE_2__attributes_json___default.a, {
	edit: __WEBPACK_IMPORTED_MODULE_3__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_4__save__["a" /* default */],
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = wp.data.select('core/block-editor').getSettings();
		return settings.alignWide ? {
			'data-align': 'full'
		} : {};
	}
})));

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"imageAlt":{"attribute":"alt"},"backgroundColor":{"type":"string","default":"#000"},"mediaPosition":{"default":"left"},"mediaStyle":{"default":"simple"},"contentStyle":{"default":"basic"},"blockStyle":{"default":"basic"},"backgroundType":{"type":"string","default":"transparent"},"images":{"type":"array","default":[]}}}

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(148);







var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;






var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Edit, [{
		key: 'updateImages',
		value: function updateImages(media) {
			this.props.setAttributes({
				images: media.map(function (image) {
					return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()({ id: image.id, url: image.url, alt: image.alt });
				})
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return [wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_9__preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { updateImages: this.updateImages.bind(this) })),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { updateImages: this.updateImages.bind(this) })),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__inspector__["a" /* default */], this.props)
			)];
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;

var Controls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Controls, _Component);

	function Controls(props) {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Controls);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Controls.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Controls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Controls, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes,
			    updateImages = _props.updateImages;
			var mediaPosition = attributes.mediaPosition,
			    _attributes$images = attributes.images,
			    images = _attributes$images === undefined ? [] : _attributes$images;


			var galleryImages = images.map(function (image) {
				return JSON.parse(image);
			});

			var hasImages = !!images.length;

			var MEDIA_ALIGNMENTS_CONTROLS = {
				left: {
					icon: 'align-pull-left',
					title: __('Show Media on Left Side', '__plugin_txtd')
				},
				right: {
					icon: 'align-pull-right',
					title: __('Show Media on Right Side', '__plugin_txtd')
				}
			};

			var toolbarControls = wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(Toolbar, {
					controls: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(MEDIA_ALIGNMENTS_CONTROLS).map(function (control) {
						return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, MEDIA_ALIGNMENTS_CONTROLS[control], {
							onClick: function onClick() {
								setAttributes({ mediaPosition: control });
							},
							isActive: mediaPosition === control
						});
					})
				}),
				hasImages && wp.element.createElement(
					Toolbar,
					null,
					wp.element.createElement(MediaUpload, {
						type: 'image',
						multiple: true,
						gallery: true,
						value: galleryImages.map(function (image) {
							return image.id;
						}),
						onSelect: updateImages,
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(IconButton, {
								className: 'components-icon-button components-toolbar__control',
								label: __('Edit Media', '__plugin_txtd'),
								icon: 'edit',
								onClick: function onClick() {
									open();
								}
							});
						}
					})
				)
			);

			return wp.element.createElement(
				Fragment,
				null,
				toolbarControls
			);
		}
	}]);

	return Controls;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Controls);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(19);
var $keys = __webpack_require__(23);

__webpack_require__(45)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alignment_controls__ = __webpack_require__(64);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl;

var Inspector = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Inspector, _Component);

	function Inspector(props) {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Inspector);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Inspector.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Inspector)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Inspector, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;
			var mediaStyle = attributes.mediaStyle,
			    contentStyle = attributes.contentStyle,
			    blockStyle = attributes.blockStyle;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					InspectorControls,
					null,
					false && wp.element.createElement(
						PanelBody,
						{ title: __('Media Area', '__plugin_txtd'), initialOpen: true },
						wp.element.createElement(RadioControl, {
							label: __('Media Style', '__plugin_txtd'),
							value: mediaStyle,
							selected: mediaStyle,
							options: [{ label: __('Well-organized Grid', '__plugin_txtd'), value: 'simple' }, { label: __('Overlap Layered Grid', '__plugin_txtd'), value: 'overlap' }],
							help: __('Automatically crop and scale images to fill the block container.', '__plugin_txtd'),
							onChange: function onChange(mediaStyle) {
								return setAttributes({ mediaStyle: mediaStyle });
							}
						})
					),
					wp.element.createElement(
						PanelBody,
						{ title: __('Content Area', '__plugin_txtd'), initialOpen: true },
						wp.element.createElement(RadioControl, {
							label: __('Emphasis Level', '__plugin_txtd'),
							value: contentStyle,
							selected: contentStyle,
							options: [{ label: __('Basic', '__plugin_txtd'), value: 'basic' }, { label: __('Moderate', '__plugin_txtd'), value: 'moderate' }, { label: __('Highlighted', '__plugin_txtd'), value: 'highlighted' }],
							onChange: function onChange(contentStyle) {
								return setAttributes({ contentStyle: contentStyle });
							}
						}),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components_alignment_controls__["a" /* AlignmentControls */], this.props)
					),
					wp.element.createElement(
						PanelBody,
						{ title: __('Block Area', '__plugin_txtd'), initialOpen: true },
						wp.element.createElement(RadioControl, {
							label: __('Emphasis Level', '__plugin_txtd'),
							value: blockStyle,
							selected: blockStyle,
							options: [{ label: __('Basic', '__plugin_txtd'), value: 'basic' }, { label: __('Moderate', '__plugin_txtd'), value: 'moderate' }, { label: __('Highlighted', '__plugin_txtd'), value: 'highlighted' }],
							onChange: function onChange(blockStyle) {
								return setAttributes({ blockStyle: blockStyle });
							}
						})
					)
				)
			);
		}
	}]);

	return Inspector;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Inspector);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);







var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder;

/**
 * Constants
 */

var ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading'];
var TEMPLATE = [['core/heading', { content: 'Shoot for the moon, Even if You Miss it', level: 4 }], ['core/heading', { content: 'Welcome to our planet, look and feel matters!', level: 2 }], ['core/paragraph', { content: 'We\'ve always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.' }], ['core/button', { text: 'Discover More' }]];

var MediaPreview = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MediaPreview, _Component);

	function MediaPreview() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MediaPreview);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MediaPreview.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MediaPreview)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MediaPreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    className = _props.className,
			    isSelected = _props.isSelected,
			    updateImages = _props.updateImages;
			var mediaStyle = attributes.mediaStyle,
			    contentStyle = attributes.contentStyle,
			    blockStyle = attributes.blockStyle,
			    mediaPosition = attributes.mediaPosition,
			    images = attributes.images,
			    alignment = attributes.alignment;


			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'block-is-' + blockStyle, 'content-is-' + contentStyle, 'grid-is-' + mediaStyle);

			var galleryImages = images.map(function (image) {
				return JSON.parse(image);
			});

			var displayImages = function displayImages(images) {

				if (0 === images.length) {
					return wp.element.createElement(MediaPlaceholder, {
						icon: 'format-gallery',
						className: 'nova-media__placeholder',
						onSelect: updateImages,
						accept: 'image/*',
						allowedTypes: ['image'],
						multiple: true
					});
				} else {
					return galleryImages.map(function (image) {
						return wp.element.createElement(
							'div',
							{ className: 'nova-media__image' },
							wp.element.createElement('img', { alt: image.alt, src: image.url })
						);
					});
				}
			};

			return wp.element.createElement(
				'div',
				{ className: classNames },
				wp.element.createElement(
					'div',
					{ className: 'nova-media__inner-container' },
					wp.element.createElement(
						'div',
						{ className: 'wp-block', 'data-align': 'wide' },
						wp.element.createElement(
							'div',
							{ className: 'nova-media__layout' },
							wp.element.createElement(
								'div',
								{ className: 'nova-media__content nova-media__inner-container' },
								wp.element.createElement(InnerBlocks, {
									allowedBlocks: ALLOWED_BLOCKS,
									template: TEMPLATE
								})
							),
							wp.element.createElement(
								'div',
								{ className: 'nova-media__aside' },
								displayImages(images)
							)
						)
					)
				)
			);
		}
	}]);

	return MediaPreview;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MediaPreview);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);







var InnerBlocks = wp.blockEditor.InnerBlocks;
var Component = wp.element.Component;

var Save = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Save, _Component);

	function Save() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Save);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Save.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Save)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Save, [{
		key: 'render',
		value: function render() {
			var _props$attributes = this.props.attributes,
			    className = _props$attributes.className,
			    mediaStyle = _props$attributes.mediaStyle,
			    contentStyle = _props$attributes.contentStyle,
			    blockStyle = _props$attributes.blockStyle,
			    mediaPosition = _props$attributes.mediaPosition,
			    images = _props$attributes.images;


			var settings = wp.data.select('core/block-editor').getSettings();

			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'block-is-' + blockStyle, 'content-is-' + contentStyle, 'grid-is-' + mediaStyle, 'alignfull');

			var galleryImages = images.map(function (image) {
				return JSON.parse(image);
			});

			var displayImages = function displayImages(images) {
				return galleryImages.map(function (image) {
					return wp.element.createElement(
						'div',
						{ className: 'nova-media__image' },
						wp.element.createElement('img', { alt: image.alt, src: image.url })
					);
				});
			};

			return wp.element.createElement(
				'div',
				{ className: classNames },
				wp.element.createElement(
					'div',
					{ className: 'nova-media__inner-container' },
					wp.element.createElement(
						'div',
						{ className: 'nova-media__layout alignwide' },
						wp.element.createElement(
							'div',
							{ className: 'nova-media__content nova-media__inner-container' },
							wp.element.createElement(InnerBlocks.Content, null)
						),
						wp.element.createElement(
							'div',
							{ className: 'nova-media__aside' },
							displayImages(images)
						)
					)
				)
			);
		}
	}]);

	return Save;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Save);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(151);
/**
 * Internal dependencies
 */



/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/slideshow', {
	title: __('Slideshow Me the Way', '__plugin_txtd'),
	description: __('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["h" /* slideshow */],
	category: 'nova-by-pixelgrade',
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = wp.data.select('core/block-editor').getSettings();
		return settings.alignWide ? {
			'data-align': 'full'
		} : {};
	}
}));

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_util__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview__ = __webpack_require__(153);






var __ = wp.i18n.__;








var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;


var defaultGalleryImages = [{
	"url": "https://source.unsplash.com/_nqApgG-QrY/1600x900",
	"id": -1,
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/_nqApgG-QrY/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/_nqApgG-QrY/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}, {
	"url": "https://source.unsplash.com/Gt_4iMB7hY0/1600x900",
	"alt": "This is a catchy image title",
	"caption": "A brilliant caption to explain its catchiness",
	"id": -2,
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/Gt_4iMB7hY0/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/Gt_4iMB7hY0/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}, {
	"url": "https://source.unsplash.com/1vKTnwLMdqs/1600x900",
	"id": -3,
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/1vKTnwLMdqs/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/1vKTnwLMdqs/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}];

var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));

		_this.state = {
			selectedIndex: 0
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Edit, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var _props = this.props,
			    galleryImages = _props.attributes.galleryImages,
			    clientId = _props.clientId;


			if (!galleryImages.length) {
				wp.data.dispatch('core/block-editor').updateBlockAttributes(clientId, {
					galleryImages: Object(__WEBPACK_IMPORTED_MODULE_7__components_util__["a" /* shuffleArray */])(defaultGalleryImages.slice(0))
				});
			}
		}
	}, {
		key: "onPrevArrowClick",
		value: function onPrevArrowClick() {
			var galleryImages = this.props.attributes.galleryImages;
			var selectedIndex = this.state.selectedIndex;

			var newIndex = (selectedIndex + galleryImages.length - 1) % galleryImages.length;
			this.setState({ selectedIndex: newIndex });
		}
	}, {
		key: "onNextArrowClick",
		value: function onNextArrowClick() {
			var galleryImages = this.props.attributes.galleryImages;
			var selectedIndex = this.state.selectedIndex;

			var newIndex = (selectedIndex + 1) % galleryImages.length;
			this.setState({ selectedIndex: newIndex });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    _props2$attributes = _props2.attributes,
			    slideshowType = _props2$attributes.slideshowType,
			    galleryImages = _props2$attributes.galleryImages,
			    minHeight = _props2$attributes.minHeight,
			    setAttributes = _props2.setAttributes,
			    isSelected = _props2.isSelected,
			    className = _props2.className;
			var selectedIndex = this.state.selectedIndex;


			if (selectedIndex >= galleryImages.length) {
				selectedIndex = galleryImages.length - 1;
			}

			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					previewImage: galleryImages[selectedIndex],
					onPrevArrowClick: this.onPrevArrowClick.bind(this),
					onNextArrowClick: this.onNextArrowClick.bind(this)
				})),
				wp.element.createElement(
					InspectorControls,
					null,
					wp.element.createElement(
						PanelBody,
						{
							className: 'nova-blocks-slideshow-type-panel',
							title: __('Slideshow Type', '__plugin_txtd') },
						wp.element.createElement(SelectControl, {
							value: slideshowType,
							onChange: function onChange(slideshowType) {
								return setAttributes({ slideshowType: slideshowType });
							},
							options: [{
								label: __('Gallery', '__plugin_txtd'),
								value: 'gallery'
							}, {
								label: __('Custom', '__plugin_txtd'),
								value: 'custom'
							}, {
								label: __('Projects', '__plugin_txtd'),
								value: 'projects'
							}]
						}),
						!!galleryImages.length && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["g" /* GalleryPreview */], {
							galleryImages: galleryImages,
							onSelectImage: function onSelectImage(selectedIndex) {
								_this2.setState({ selectedIndex: selectedIndex });
							},
							isSelected: isSelected,
							selected: selectedIndex
						}),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["f" /* GalleryPlaceholder */], this.props)
					),
					'gallery' === slideshowType && wp.element.createElement(
						Fragment,
						null,
						wp.element.createElement(
							PanelBody,
							{ title: __('Content Position', '__plugin_txtd'), initialOpen: false },
							wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["a" /* AlignmentControls */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
								attributes: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props.attributes, {
									applyMinimumHeightBlock: true
								})
							}))
						),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["d" /* ColorPanel */], this.props),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["i" /* LayoutPanel */], this.props),
						wp.element.createElement(
							PanelBody,
							{ title: __('Height', '__plugin_txtd'), initialOpen: false },
							wp.element.createElement(RadioControl, {
								label: __('Minimum Height', '__plugin_txtd'),
								selected: minHeight,
								onChange: function onChange(minHeight) {
									setAttributes({ minHeight: parseInt(minHeight, 10) });
								},
								options: [{
									label: __('Auto', '__plugin_txtd'),
									value: 0
								}, {
									label: __('Half', '__plugin_txtd'),
									value: 50
								}, {
									label: __('Two Thirds', '__plugin_txtd'),
									value: 66
								}, {
									label: __('Three Quarters', '__plugin_txtd'),
									value: 75
								}, {
									label: __('Full Height', '__plugin_txtd'),
									value: 100
								}]
							})
						),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["k" /* ParallaxPanel */], this.props)
					),
					'gallery' !== slideshowType && wp.element.createElement(
						PanelBody,
						null,
						__('Coming Soon', '__plugin_txtd')
					)
				),
				wp.element.createElement(
					BlockControls,
					null,
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["b" /* AlignmentToolbar */], this.props),
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["e" /* ColorToolbar */], this.props)
				)
			);
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shuffleArray; });
// https://stackoverflow.com/a/2450976
var shuffleArray = function shuffleArray(array) {
	var currentIndex = array.length,
	    temporaryValue,
	    randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__background__ = __webpack_require__(154);





var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;






var MediaUpload = wp.blockEditor.MediaUpload;

var SlideshowPreview = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SlideshowPreview, _Component);

	function SlideshowPreview() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SlideshowPreview);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SlideshowPreview.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SlideshowPreview)).apply(this, arguments));

		_this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SlideshowPreview, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener("resize", this.updateDimensions.bind(this));
			this.updateDimensions();
		}
	}, {
		key: 'updateDimensions',
		value: function updateDimensions() {
			this.setState({
				dimensions: {
					width: this.container.offsetWidth,
					height: this.container.offsetHeight
				}
			});
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			var _this2 = this;

			var _props = this.props,
			    _props$attributes = _props.attributes,
			    contentPadding = _props$attributes.contentPadding,
			    contentPaddingCustom = _props$attributes.contentPaddingCustom,
			    contentWidth = _props$attributes.contentWidth,
			    contentWidthCustom = _props$attributes.contentWidthCustom,
			    applyMinimumHeightBlock = _props$attributes.applyMinimumHeightBlock,
			    verticalAlignment = _props$attributes.verticalAlignment,
			    horizontalAlignment = _props$attributes.horizontalAlignment,
			    contentColor = _props$attributes.contentColor,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    overlayFilterStrength = _props$attributes.overlayFilterStrength,
			    galleryImages = _props$attributes.galleryImages,
			    previewImage = _props.previewImage,
			    className = _props.className;


			var classes = [className, 'nova-slideshow is-ready', 'nova-u-valign-' + verticalAlignment, 'nova-u-halign-' + horizontalAlignment, 'nova-u-spacing-' + contentPadding, 'nova-u-content-width-' + contentWidth, 'nova-u-background', 'nova-u-background-' + overlayFilterStyle];

			var styles = {
				slideshow: { color: contentColor }
			};

			if (!!applyMinimumHeightBlock) {
				styles.slideshow.minHeight = minHeight + 'vh';
			}

			var maxAspectRatio = 0;
			var mediaMinHeight = 0;
			var sliderWidth = 0;

			galleryImages.map(function (image) {
				if (!!image.sizes && !!image.sizes.large && !!image.sizes.large.width) {
					var aspectRatio = image.sizes.large.width / image.sizes.large.height;
					maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
					mediaMinHeight = _this2.state.dimensions.width / maxAspectRatio;
				}
			});

			styles.slider = {
				minHeight: Math.max(mediaMinHeight, maxAspectRatio) + 'px'
			};

			return wp.element.createElement(
				Fragment,
				null,
				!!galleryImages.length && wp.element.createElement(
					'div',
					{ className: classes.join(' '), style: styles.slideshow },
					wp.element.createElement(
						'div',
						{ className: 'nova-slideshow__slider', style: styles.slider },
						wp.element.createElement(
							'div',
							{ className: 'nova-slideshow__slide' },
							previewImage && wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__background__["a" /* default */], this.props),
								wp.element.createElement(
									'div',
									{ className: 'nova-slideshow__content nova-u-content-padding' },
									wp.element.createElement(
										'div',
										{ className: 'nova-u-content-align' },
										wp.element.createElement(
											'div',
											{ className: 'nova-u-content-width' },
											wp.element.createElement(
												'h2',
												null,
												previewImage.alt
											),
											wp.element.createElement(
												'p',
												null,
												previewImage.caption
											)
										)
									)
								)
							)
						)
					),
					wp.element.createElement(
						'div',
						{ className: 'nova-slideshow__controls' },
						wp.element.createElement('div', { className: 'nova-slideshow__arrow nova-slideshow__arrow--prev nova-slideshow__arrow--disabled', onClick: this.props.onPrevArrowClick }),
						wp.element.createElement('div', { className: 'nova-slideshow__arrow nova-slideshow__arrow--next nova-slideshow__arrow--disabled', onClick: this.props.onNextArrowClick })
					)
				),
				!galleryImages.length && wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components__["f" /* GalleryPlaceholder */], this.props),
					wp.element.createElement(
						'div',
						{ className: 'nova-slideshow__controls' },
						wp.element.createElement('div', { className: 'nova-slideshow__arrow nova-slideshow__arrow--prev nova-slideshow__arrow--disabled' }),
						wp.element.createElement('div', { className: 'nova-slideshow__arrow nova-slideshow__arrow--next nova-slideshow__arrow--disabled' })
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var dimensions = this.state.dimensions;

			return wp.element.createElement(
				'div',
				{ ref: function ref(el) {
						return _this3.container = el;
					} },
				dimensions && this.renderContent()
			);
		}
	}]);

	return SlideshowPreview;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (SlideshowPreview);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_with_parallax__ = __webpack_require__(65);







var Component = wp.element.Component;

var SlideshowBackground = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SlideshowBackground, _Component);

	function SlideshowBackground() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SlideshowBackground);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SlideshowBackground.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SlideshowBackground)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SlideshowBackground, [{
		key: 'render',
		value: function render() {
			var _props$attributes = this.props.attributes,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    overlayFilterStrength = _props$attributes.overlayFilterStrength;


			var styles = {};

			if (overlayFilterStyle !== 'none') {
				styles.opacity = 1 - overlayFilterStrength / 100;
			}

			return wp.element.createElement(
				'div',
				{ className: 'nova-slideshow__background', style: this.props.style },
				wp.element.createElement('img', { className: 'nova-slideshow__media', src: this.props.previewImage.sizes.large.url, alt: '', style: styles })
			);
		}
	}]);

	return SlideshowBackground;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__components_with_parallax__["a" /* default */])(SlideshowBackground));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWEwY2MxZDEwMWM3NWM2MDBmMzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2F0dHJpYnV0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvaGVyby9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9wYWRkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3dpZHRoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXJhbGxheC1wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbGxlcnktb3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmxvY2staG9yaXpvbnRhbC1hbGlnbm1lbnQtdG9vbGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlaWdodC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvaGVyby9wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2hlcm8vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL21lZGlhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9hdHRyaWJ1dGVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL21lZGlhL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIndwIiwiY29tcG9uZW50cyIsIlNWRyIsIlBhdGgiLCJub3ZhIiwiaGVybyIsIm1lZGlhIiwic2xpZGVzaG93IiwiYWxpZ25Cb3R0b20iLCJhbGlnbkNlbnRlciIsImFsaWduVG9wIiwiYWxpZ25tZW50IiwiaW52ZXJ0Iiwic3dhcCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiYmxvY2tFZGl0b3IiLCJEcm9wZG93biIsIkljb25CdXR0b24iLCJQYW5lbFJvdyIsIlRvb2xiYXIiLCJBbGlnbm1lbnRUb29sYmFyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJpY29ucyIsIm9uQ2xvc2UiLCJwcm9wcyIsIkFsaWdubWVudENvbnRyb2xzIiwiYXR0cmlidXRlcyIsImFwcGx5TWluaW11bUhlaWdodEJsb2NrIiwiaG9yaXpvbnRhbEFsaWdubWVudCIsInZlcnRpY2FsQWxpZ25tZW50Iiwic2V0QXR0cmlidXRlcyIsImRhdGEiLCJzZWxlY3QiLCJnZXRTZWxlY3RlZEJsb2NrIiwiaW5uZXJCbG9ja3MiLCJtYXAiLCJkaXNwYXRjaCIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImJsb2NrIiwiY2xpZW50SWQiLCJhbGlnbiIsIndpdGhQYXJhbGxheCIsIldyYXBwZWRDb21wb25lbnQiLCJzdGF0ZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3MiLCJ1cGRhdGVIYW5kbGVyIiwidXBkYXRlRGltZW5zaW9ucyIsImJpbmQiLCJzY3JvbGxDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lckJveCIsImNvbnRhaW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJvZmZzZXRIZWlnaHQiLCJhY3R1YWxQcm9ncmVzcyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzZXRTdGF0ZSIsInNjcm9sbFRvcCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0IiwidG9wIiwiZW5hYmxlUGFyYWxsYXgiLCJwYXJhbGxheEFtb3VudCIsInBhcmFsbGF4Q3VzdG9tQW1vdW50IiwiYWN0dWFsUGFyYWxsYXhBbW91bnQiLCJwYXJzZUludCIsIm5ld0hlaWdodCIsInNjYWxlIiwib2Zmc2V0WSIsIm1vdmUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiZWwiLCJnZXRQYXJhbGxheFN0eWxlcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiSW5uZXJCbG9ja3MiLCJ0aXRsZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiZWRpdCIsInNhdmUiLCJnZXRFZGl0V3JhcHBlclByb3BzIiwic2V0dGluZ3MiLCJnZXRTZXR0aW5ncyIsImFsaWduV2lkZSIsIkluc3BlY3RvckNvbnRyb2xzIiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlJhZGlvQ29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJlZGl0b3JEYXRhIiwidXBkYXRlQmxvY2tzIiwiZ2V0QmxvY2tzIiwiZmlsdGVyIiwibmFtZSIsImhlcm9CbG9ja0luZGV4IiwiYXBwbHlNaW5pbXVtSGVpZ2h0Iiwic2Nyb2xsSW5kaWNhdG9yIiwic2Nyb2xsSW5kaWNhdG9yQmxvY2siLCJibG9ja0luZGV4IiwiZmluZEluZGV4IiwidGVzdEJsb2NrIiwiYmxvY2tMaXN0IiwiZGVib3VuY2VkT25TdWJzY3JpYmUiLCJuZXdCbG9ja0xpc3QiLCJibG9ja0xpc3RDaGFuZ2VkIiwibGVuZ3RoIiwic29tZSIsImluZGV4Iiwic3Vic2NyaWJlIiwiRWRpdCIsInBvc2l0aW9uSW5kaWNhdG9yIiwiTGF5b3V0UGFuZWwiLCJjaGlsZHJlbiIsIkJ1dHRvbkdyb3VwIiwiUmFuZ2VDb250cm9sIiwiUGFkZGluZ0NvbnRyb2xzIiwiY29udGVudFBhZGRpbmciLCJjb250ZW50UGFkZGluZ0N1c3RvbSIsImNvbnRlbnRQYWRkaW5nT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJXaWR0aENvbnRyb2xzIiwiY29udGVudFdpZHRoIiwiY29udGVudFdpZHRoQ3VzdG9tIiwiY29udGVudFdpZHRoT3B0aW9ucyIsIlBhcmFsbGF4UGFuZWwiLCJGb3JtRmlsZVVwbG9hZCIsIk1lZGlhVXBsb2FkIiwiTWVkaWFQbGFjZWhvbGRlciIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJHYWxsZXJ5UGxhY2Vob2xkZXIiLCJnYWxsZXJ5SW1hZ2VzIiwicHJvbWlzZXMiLCJpbWFnZSIsImFwaVJlcXVlc3QiLCJwYXRoIiwiaWQiLCJ0aGVuIiwibmV3SW1hZ2UiLCJhbGwiLCJzaXplcyIsImxhcmdlIiwidXJsIiwic2VsZWN0ZWQiLCJvblNlbGVjdEltYWdlIiwib25DaGFuZ2UiLCJoYXNJbWFnZXMiLCJpbnN0cnVjdGlvbnMiLCJvbkNoYW5nZUdhbGxlcnkiLCJ1bmRlZmluZWQiLCJHYWxsZXJ5UHJldmlldyIsImlzU2VsZWN0ZWQiLCJpbWciLCJjbGFzc2VzIiwicHVzaCIsImpvaW4iLCJ0aHVtYm5haWwiLCJDb2xvclBhbGV0dGUiLCJQYW5lbENvbG9yU2V0dGluZ3MiLCJjb2xvcnMiLCJjb2xvciIsIk92ZXJsYXlDb250cm9scyIsIm92ZXJsYXlGaWx0ZXJTdHlsZSIsIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aCIsIkNvbG9yQ29udHJvbHMiLCJjb250ZW50Q29sb3IiLCJDb2xvclBhbmVsIiwiQ29sb3JUb29sYmFyIiwid2l0aFZpZXdwb3J0TWF0Y2giLCJ2aWV3cG9ydCIsIndpdGhTZWxlY3QiLCJjb21wb3NlIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjcmVhdGVDb250ZXh0IiwiZm9jdXNlZEVsZW1lbnQiLCJzZXRGb2N1c2VkRWxlbWVudCIsIkNvbnN1bWVyIiwiUHJvdmlkZXIiLCJCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiREVGQVVMVF9DT05UUk9MUyIsIkRFRkFVTFRfQ09OVFJPTCIsIkJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIiLCJpc0NvbGxhcHNlZCIsImNvbnRyb2xzIiwiYXBwbHlPclVuc2V0IiwiYWN0aXZlQWxpZ25tZW50IiwiZGVmYXVsdEFsaWdubWVudENvbnRyb2wiLCJjb250cm9sIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwid2l0aEJsb2NrRWRpdENvbnRleHQiLCJtYXBDb250ZXh0VG9Qcm9wcyIsIk9yaWdpbmFsQ29tcG9uZW50IiwiaXNMYXJnZVZpZXdwb3J0IiwiZ2V0QmxvY2tSb290Q2xpZW50SWQiLCJoYXNGaXhlZFRvb2xiYXIiLCJIZWlnaHRQYW5lbCIsIm1pbkhlaWdodCIsIlNjcm9sbEluZGljYXRvclBhbmVsIiwiaGVyb0Jsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImRpc3BsYXkiLCJIZXJvUHJldmlldyIsInN0eWxlcyIsImZvcmVncm91bmQiLCJjb250ZW50IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXhXaWR0aCIsImxldmVsIiwidGV4dCIsIkhlcm9CYWNrZ3JvdW5kIiwib3BhY2l0eSIsInN0eWxlIiwidHlwZSIsImZ1bGwiLCJCbG9ja0NvbnRyb2xzIiwiSGVyb0Jsb2NrQ29udHJvbHMiLCJvcGVuIiwiaW1hZ2VzIiwiYWx0IiwidXBkYXRlSW1hZ2VzIiwiQ29udHJvbHMiLCJtZWRpYVBvc2l0aW9uIiwiSlNPTiIsInBhcnNlIiwiTUVESUFfQUxJR05NRU5UU19DT05UUk9MUyIsInRvb2xiYXJDb250cm9scyIsIkluc3BlY3RvciIsIm1lZGlhU3R5bGUiLCJjb250ZW50U3R5bGUiLCJibG9ja1N0eWxlIiwiQUxMT1dFRF9CTE9DS1MiLCJURU1QTEFURSIsIk1lZGlhUHJldmlldyIsImNsYXNzTmFtZXMiLCJjbGFzc25hbWVzIiwiZGlzcGxheUltYWdlcyIsIlNhdmUiLCJkZWZhdWx0R2FsbGVyeUltYWdlcyIsInNlbGVjdGVkSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJzbGljZSIsIm5ld0luZGV4Iiwic2xpZGVzaG93VHlwZSIsIm9uUHJldkFycm93Q2xpY2siLCJvbk5leHRBcnJvd0NsaWNrIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJTbGlkZXNob3dQcmV2aWV3IiwicHJldmlld0ltYWdlIiwibWF4QXNwZWN0UmF0aW8iLCJtZWRpYU1pbkhlaWdodCIsInNsaWRlcldpZHRoIiwiYXNwZWN0UmF0aW8iLCJzbGlkZXIiLCJjYXB0aW9uIiwicmVuZGVyQ29udGVudCIsIlNsaWRlc2hvd0JhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLEVBQTRDLHNCOzs7Ozs7O0FDQXJFOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1JhOztBQUViOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLEVBQW1DOztBQUVqRTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7OztBQzFCWTs7QUFFYjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsRUFBbUI7O0FBRTFDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7QUNoQmE7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QUE1QixFQUFxQztBQUNwQzZDLFdBQU9TLE9BQVAsR0FBaUIsSUFBSXJELHdCQUF3QixHQUE3QztBQUNBOztBQUVELFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSw0QkFBZixFQUE0QyxPQUFRLEtBQUs3SixLQUFMLENBQVdtTixLQUEvRDtBQUNDLHNDQUFLLFdBQVUsdUJBQWYsRUFBdUMsS0FBTSxLQUFLbk4sS0FBTCxDQUFXNFAsWUFBWCxDQUF3QnRILEtBQXhCLENBQThCQyxLQUE5QixDQUFvQ0MsR0FBakYsRUFBdUYsS0FBSSxFQUEzRixFQUE4RixPQUFRaUUsTUFBdEc7QUFERCxJQUREO0FBS0E7Ozs7RUFwQmdDdE4sUzs7QUF1Qm5COEIsMklBQVlBLENBQUVtUCxtQkFBZCxDQUFmLEUiLCJmaWxlIjoiLi9hc3NldHMvanMvZWRpdG9yLmJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYTBjYzFkMTAxYzc1YzYwMGYzMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBTVkcsIFBhdGggfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBjb25zdCBub3ZhID0gKFxuICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMThDMCA4LjA1ODg4IDguMDU4ODggMCAxOCAwQzI3Ljk0MTEgMCAzNiA4LjA1ODg4IDM2IDE4QzM2IDI3Ljk0MTEgMjcuOTQxMSAzNiAxOCAzNkM4LjA1ODg4IDM2IDAgMjcuOTQxMSAwIDE4Wk0xMi4wMzk4IDE0QzEyLjQwNjkgMTAuNjI2IDE1LjI2NTIgOCAxOC43MzY4IDhIMjAuNDIxMUMyNC42MDY4IDggMjggMTEuMzkzMiAyOCAxNS41Nzg5VjE2LjM4MUMyOCAyMC4zODA5IDI0LjkxNzcgMjMuNjYwOSAyMC45OTg3IDIzLjk3NTNDMjAuOTk5NiAyMy45MzI0IDIxIDIzLjg4OTMgMjEgMjMuODQ2MlYyMS4yNzI3QzIxIDE3LjI1NjEgMTcuNzQzOSAxNCAxMy43MjczIDE0SDEyLjAzOThaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAyMS4yODU3QzggMTguOTE4OCA5LjkxODc4IDE3IDEyLjI4NTcgMTdIMTMuNDU0NUMxNS45NjQ5IDE3IDE4IDE5LjAzNTEgMTggMjEuNTQ1NVYyMy4xNTM4QzE4IDI1LjI3OCAxNi4yNzggMjcgMTQuMTUzOCAyN0gxMy43MTQzQzEwLjU1ODQgMjcgOCAyNC40NDE2IDggMjEuMjg1N1pcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBoZXJvID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8bWFzayBpZD1cIm1hc2swXCIgbWFzay10eXBlPVwiYWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBaTTQgOC40OTEyM0M0IDYuMDEwNzkgNy4wMTYxOSA0IDEwLjczNjggNEgxMS42MTlDMTYuMjQ3NyA0IDIwIDYuNTAxNTIgMjAgOS41ODczQzIwIDEyLjM5MjYgMTYuNTg4OCAxNC42NjY3IDEyLjM4MSAxNC42NjY3SDExLjU3ODlDNy4zOTMyMSAxNC42NjY3IDQgMTIuNDA0NSA0IDkuNjE0MDNWOC40OTEyM1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxOC43MTQzQzcgMTkuNDI0NCA3LjU3NTYzIDIwIDguMjg1NzEgMjBIMTUuNUMxNi4zMjg0IDIwIDE3IDE5LjMyODQgMTcgMTguNVYxOC41QzE3IDE3LjY3MTYgMTYuMzI4NCAxNyAxNS41IDE3SDguNzE0MjlDNy43Njc1MSAxNyA3IDE3Ljc2NzUgNyAxOC43MTQzVjE4LjcxNDNaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBtZWRpYSA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJwYXRoLTEtb3V0c2lkZS0xXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiLTJcIiB5PVwiLTJcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBmaWxsPVwiYmxhY2tcIj5cbiAgICAgICAgICAgIDxyZWN0IGZpbGw9XCJ3aGl0ZVwiIHg9XCItMlwiIHk9XCItMlwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMEM4LjA1ODg4IDAgMCA4LjA1ODg4IDAgMThDMCAyNy45NDExIDguMDU4ODggMzYgMTggMzZDMjcuOTQxMSAzNiAzNiAyNy45NDExIDM2IDE4QzM2IDguMDU4ODggMjcuOTQxMSAwIDE4IDBaTTIzLjQ3MzcgMjVDMjAuNDUwNyAyNSAxOCAyMi41NDkzIDE4IDE5LjUyNjNWMTguODA5NUMxOCAxNS4wNDg3IDIxLjA0ODcgMTIgMjQuODA5NSAxMkMyOC4yMjg0IDEyIDMxIDE0Ljc3MTYgMzEgMTguMTkwNVYxOC44NDIxQzMxIDIyLjI0MyAyOC4yNDMgMjUgMjQuODQyMSAyNUgyMy40NzM3WlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4IDBDOC4wNTg4OCAwIDAgOC4wNTg4OCAwIDE4QzAgMjcuOTQxMSA4LjA1ODg4IDM2IDE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg4IDI3Ljk0MTEgMCAxOCAwWk0yMy40NzM3IDI1QzIwLjQ1MDcgMjUgMTggMjIuNTQ5MyAxOCAxOS41MjYzVjE4LjgwOTVDMTggMTUuMDQ4NyAyMS4wNDg3IDEyIDI0LjgwOTUgMTJDMjguMjI4NCAxMiAzMSAxNC43NzE2IDMxIDE4LjE5MDVWMTguODQyMUMzMSAyMi4yNDMgMjguMjQzIDI1IDI0Ljg0MjEgMjVIMjMuNDczN1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yIDE4QzIgOS4xNjM0NCA5LjE2MzQ0IDIgMTggMlYtMkM2Ljk1NDMxIC0yIC0yIDYuOTU0MzEgLTIgMThIMlpNMTggMzRDOS4xNjM0NCAzNCAyIDI2LjgzNjYgMiAxOEgtMkMtMiAyOS4wNDU3IDYuOTU0MzEgMzggMTggMzhWMzRaTTM0IDE4QzM0IDI2LjgzNjYgMjYuODM2NiAzNCAxOCAzNFYzOEMyOS4wNDU3IDM4IDM4IDI5LjA0NTcgMzggMThIMzRaTTE4IDJDMjYuODM2NiAyIDM0IDkuMTYzNDQgMzQgMThIMzhDMzggNi45NTQzMSAyOS4wNDU3IC0yIDE4IC0yVjJaTTE2IDE5LjUyNjNDMTYgMjMuNjUzOSAxOS4zNDYxIDI3IDIzLjQ3MzcgMjdWMjNDMjEuNTU1MiAyMyAyMCAyMS40NDQ4IDIwIDE5LjUyNjNIMTZaTTE2IDE4LjgwOTVWMTkuNTI2M0gyMFYxOC44MDk1SDE2Wk0yNC44MDk1IDEwQzE5Ljk0NDIgMTAgMTYgMTMuOTQ0MiAxNiAxOC44MDk1SDIwQzIwIDE2LjE1MzMgMjIuMTUzMyAxNCAyNC44MDk1IDE0VjEwWk0zMyAxOC4xOTA1QzMzIDEzLjY2NyAyOS4zMzMgMTAgMjQuODA5NSAxMFYxNEMyNy4xMjM5IDE0IDI5IDE1Ljg3NjEgMjkgMTguMTkwNUgzM1pNMzMgMTguODQyMVYxOC4xOTA1SDI5VjE4Ljg0MjFIMzNaTTI0Ljg0MjEgMjdDMjkuMzQ3NiAyNyAzMyAyMy4zNDc2IDMzIDE4Ljg0MjFIMjlDMjkgMjEuMTM4NCAyNy4xMzg0IDIzIDI0Ljg0MjEgMjNWMjdaTTIzLjQ3MzcgMjdIMjQuODQyMVYyM0gyMy40NzM3VjI3WlwiIGZpbGw9XCJ3aGl0ZVwiIG1hc2s9XCJ1cmwoI3BhdGgtMS1vdXRzaWRlLTEpXCIvPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDMwQzguNjg2MjkgMzAgNiAyNy4zMTM3IDYgMjRWMTRDNiA5LjU4MTcyIDkuNTgxNzIgNiAxNCA2SDE2QzE4LjcyOCA2IDIwLjk0NTggOC4xODQ3NSAyMC45OTkgMTAuOUMxOC4wMzg4IDEyLjM0NzEgMTYgMTUuMzg3OCAxNiAxOC45MDQ4VjE5Ljg0MjFDMTYgMjIuOTQ4NCAxNy45Nzg2IDI1LjU5MjUgMjAuNzQ0MyAyNi41ODI5QzIwLjA4MjEgMjguNTY4NSAxOC4yMDgyIDMwIDE2IDMwSDEyWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlc2hvdyA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJtYXNrMFwiIG1hc2stdHlwZT1cImFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByeD1cIjEyXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPGcgbWFzaz1cInVybCgjbWFzazApXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwVjBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJWMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0VjI0QzUuMzcyNTggMjQgMCAxOC42Mjc0IDAgMTJWMTJaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjM5ODIgOC45OTI4M0MxNy44ODMxIDkuMzkyODIgMTcuODgzMSAxMC4xMzU4IDE3LjM5ODIgMTAuNTM1N0wxNC45NjczIDEyLjU0MDdDMTQuMzE1IDEzLjA3ODcgMTMuMzMxIDEyLjYxNDcgMTMuMzMxIDExLjc2OTJWNy43NTkzM0MxMy4zMzEgNi45MTM4NiAxNC4zMTUgNi40NDk5MiAxNC45NjczIDYuOTg3ODhMMTcuMzk4MiA4Ljk5MjgzWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi42MDE4NCA4Ljk5MjgzQzYuMTE2ODkgOS4zOTI4MiA2LjExNjg5IDEwLjEzNTggNi42MDE4NCAxMC41MzU3TDkuMDMyNzIgMTIuNTQwN0M5LjY4NDk2IDEzLjA3ODcgMTAuNjY5IDEyLjYxNDcgMTAuNjY5IDExLjc2OTJWNy43NTkzM0MxMC42NjkgNi45MTM4NiA5LjY4NDk2IDYuNDQ5OTIgOS4wMzI3MiA2Ljk4Nzg4TDYuNjAxODQgOC45OTI4M1pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTguMjc1MUM3IDE4LjgwMzMgNy40MjgxOCAxOS4yMzE0IDcuOTU2MzcgMTkuMjMxNEg4LjIxNzJDOC43Nzc0IDE5LjIzMTQgOS4yMzE1NCAxOC43NzczIDkuMjMxNTQgMTguMjE3MVYxNy44NTgyQzkuMjMxNTQgMTcuMzg0MiA4Ljg0NzI3IDE2Ljk5OTkgOC4zNzMyNSAxNi45OTk5SDguMjc1MTdDNy41NzA5MSAxNi45OTk5IDcgMTcuNTcwOCA3IDE4LjI3NTFWMTguMjc1MVpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNzE5MiAxOC4yNzUxQzEwLjcxOTIgMTguODAzMyAxMS4xNDc0IDE5LjIzMTQgMTEuNjc1NiAxOS4yMzE0SDExLjkzNjRDMTIuNDk2NiAxOS4yMzE0IDEyLjk1MDggMTguNzc3MyAxMi45NTA4IDE4LjIxNzFWMTcuODU4MkMxMi45NTA4IDE3LjM4NDIgMTIuNTY2NSAxNi45OTk5IDEyLjA5MjUgMTYuOTk5OUgxMS45OTQ0QzExLjI5MDEgMTYuOTk5OSAxMC43MTkyIDE3LjU3MDggMTAuNzE5MiAxOC4yNzUxVjE4LjI3NTFaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjQzODUgMTguMjc1MUMxNC40Mzg1IDE4LjgwMzMgMTQuODY2NyAxOS4yMzE0IDE1LjM5NDggMTkuMjMxNEgxNS42NTU3QzE2LjIxNTkgMTkuMjMxNCAxNi42NyAxOC43NzczIDE2LjY3IDE4LjIxNzFWMTcuODU4MkMxNi42NyAxNy4zODQyIDE2LjI4NTcgMTYuOTk5OSAxNS44MTE3IDE2Ljk5OTlIMTUuNzEzNkMxNS4wMDk0IDE2Ljk5OTkgMTQuNDM4NSAxNy41NzA4IDE0LjQzODUgMTguMjc1MVYxOC4yNzUxWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBhbGlnbkJvdHRvbSA9IChcbiAgICA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gICAgICAgIDxQYXRoIGQ9XCJNMTYgMTNoLTNWM2gtMnYxMEg4bDQgNCA0LTR6TTQgMTl2MmgxNnYtMkg0elwiIC8+XG4gICAgPC9TVkc+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxpZ25DZW50ZXIgPSAoXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICAgICAgICA8UGF0aCBkPVwiTTggMTloM3Y0aDJ2LTRoM2wtNC00LTQgNHptOC0xNGgtM1YxaC0ydjRIOGw0IDQgNC00ek00IDExdjJoMTZ2LTJINHpcIlxuICAgICAgICAvPlxuICAgIDwvU1ZHPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsaWduVG9wID0gKFxuICAgIDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz5cbiAgICAgICAgPFBhdGggZD1cIk04IDExaDN2MTBoMlYxMWgzbC00LTQtNCA0ek00IDN2MmgxNlYzSDR6XCIgLz5cbiAgICA8L1NWRz5cbik7XG5cbmV4cG9ydCBjb25zdCBhbGlnbm1lbnQgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNTQgNS41NEwxMy43NyA3LjNMMTIgNS41NEwxMC4yMyA3LjNMOC40NiA1LjU0TDEyIDJMMTUuNTQgNS41NFpNMTguNDYgMTUuNTRMMTYuNyAxMy43N0wxOC40NiAxMkwxNi43IDEwLjIzTDE4LjQ2IDguNDZMMjIgMTJMMTguNDYgMTUuNTRaTTguNDYgMTguNDZMMTAuMjMgMTYuN0wxMiAxOC40NkwxMy43NyAxNi43TDE1LjU0IDE4LjQ2TDEyIDIyTDguNDYgMTguNDZaTTUuNTQgOC40Nkw3LjMgMTAuMjNMNS41NCAxMkw3LjMgMTMuNzdMNS41NCAxNS41NEwyIDEyTDUuNTQgOC40NlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDE1QzEzLjY1NjkgMTUgMTUgMTMuNjU2OSAxNSAxMkMxNSAxMC4zNDMxIDEzLjY1NjkgOSAxMiA5QzEwLjM0MzEgOSA5IDEwLjM0MzEgOSAxMkM5IDEzLjY1NjkgMTAuMzQzMSAxNSAxMiAxNVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGludmVydCA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yMCAxNS4zMDk5TDIzLjMxIDExLjk5OTlMMjAgOC42ODk5NFYzLjk5OTk0SDE1LjMxTDEyIDAuNjg5OTQxTDguNjkgMy45OTk5NEg0VjguNjg5OTRMMC42OTAwMDIgMTEuOTk5OUw0IDE1LjMwOTlWMTkuOTk5OUg4LjY5TDEyIDIzLjMwOTlMMTUuMzEgMTkuOTk5OUgyMFYxNS4zMDk5Wk0xMiAxNy45OTk5VjUuOTk5OTRDMTUuMzEgNS45OTk5NCAxOCA4LjY4OTk0IDE4IDExLjk5OTlDMTggMTUuMzA5OSAxNS4zMSAxNy45OTk5IDEyIDE3Ljk5OTlaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzd2FwID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIi0yIC0yIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTcgM0gxMkMxMS40NDc3IDMgMTEgMy40NDc3MiAxMSA0VjdDMTEgNy41NTIyOCAxMS40NDc3IDggMTIgOEgxN0MxNy41NTIzIDggMTggNy41NTIyOCAxOCA3VjRDMTggMy40NDc3MiAxNy41NTIzIDMgMTcgM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTggMTJIM0MyLjQ0NzcyIDEyIDIgMTIuNDQ3NyAyIDEzVjE2QzIgMTYuNTUyMyAyLjQ0NzcyIDE3IDMgMTdIOEM4LjU1MjI4IDE3IDkgMTYuNTUyMyA5IDE2VjEzQzkgMTIuNDQ3NyA4LjU1MjI4IDEyIDggMTJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMyAxMkgxNEMxNCAxMi43OTU2IDEzLjY4MzkgMTMuNTU4NyAxMy4xMjEzIDE0LjEyMTNDMTIuNTU4NyAxNC42ODM5IDExLjc5NTYgMTUgMTEgMTVWMTdDMTIuMzI2MSAxNyAxMy41OTc5IDE2LjQ3MzIgMTQuNTM1NSAxNS41MzU1QzE1LjQ3MzIgMTQuNTk3OSAxNiAxMy4zMjYxIDE2IDEySDE3TDE1IDlMMTMgMTJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk00IDhIM0w1IDExTDcgOEg2QzYgNy4yMDQzNSA2LjMxNjA3IDYuNDQxMjkgNi44Nzg2OCA1Ljg3ODY4QzcuNDQxMjkgNS4zMTYwNyA4LjIwNDM1IDUgOSA1VjNDNy42NzM5MiAzIDYuNDAyMTUgMy41MjY3OCA1LjQ2NDQ3IDQuNDY0NDdDNC41MjY3OCA1LjQwMjE1IDQgNi42NzM5MiA0IDhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaWNvbnMuanMiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQpID0+IHtcblx0bGV0IHRpbWVvdXQgPSBudWxsO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XG5cdFx0Y29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuXHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy91dGlscy5qcyIsImltcG9ydCBMYXlvdXRQYW5lbCBmcm9tICcuL2xheW91dC1wYW5lbCc7XG5pbXBvcnQgUGFyYWxsYXhQYW5lbCBmcm9tICcuL3BhcmFsbGF4LXBhbmVsJztcblxuaW1wb3J0IHtcblx0R2FsbGVyeVByZXZpZXcsXG5cdEdhbGxlcnlQbGFjZWhvbGRlcixcbn0gZnJvbSAnLi9nYWxsZXJ5LW9wdGlvbnMnO1xuXG5pbXBvcnQge1xuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdE92ZXJsYXlDb250cm9sc1xufSBmcm9tICcuL2NvbG9yLWNvbnRyb2xzJztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEFsaWdubWVudFRvb2xiYXJcbn0gZnJvbSAnLi9hbGlnbm1lbnQtY29udHJvbHMnO1xuXG5pbXBvcnQge1xuXHRIZWlnaHRQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWxcbn0gZnJvbSAnLi9oZWlnaHQtY29udHJvbHMnO1xuXG5leHBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0Q29sb3JUb29sYmFyLFxuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxuXHRIZWlnaHRQYW5lbCxcblx0TGF5b3V0UGFuZWwsXG5cdE92ZXJsYXlDb250cm9scyxcblx0UGFyYWxsYXhQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWwsXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2Jsb2Nrcy9pY29uc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXInO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdERyb3Bkb3duLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jbGFzcyBBbGlnbm1lbnRUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb250ZW50IGFsaWdubWVudCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgQWxpZ25tZW50Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHRcdHZlcnRpY2FsQWxpZ25tZW50XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxzcGFuPnsgX18oICdIb3Jpem9udGFsJywgJ19fcGx1Z2luX3R4dGQnICkgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8QmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e2hvcml6b250YWxBbGlnbm1lbnR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aG9yaXpvbnRhbEFsaWdubWVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdHdwLmRhdGEuc2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpLmdldFNlbGVjdGVkQmxvY2soKS5pbm5lckJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwgeyBhbGlnbjogaG9yaXpvbnRhbEFsaWdubWVudCB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBob3Jpem9udGFsQWxpZ25tZW50IH0gKVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHR7IGFwcGx5TWluaW11bUhlaWdodEJsb2NrICYmIDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8c3Bhbj57IF9fKCAnVmVydGljYWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PC9zcGFuPlxuXHRcdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZlcnRpY2FsQWxpZ25tZW50ID0+IHNldEF0dHJpYnV0ZXMoIHt2ZXJ0aWNhbEFsaWdubWVudH0gKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsUm93PiB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9pbmRleC5qcyIsImNvbnN0IHtcblx0Q29tcG9uZW50XG59ID0gd3AuZWxlbWVudDtcblxuLy8gVGFrZSBpbiBhIGNvbXBvbmVudCBhcyBhcmd1bWVudCBXcmFwcGVkQ29tcG9uZW50XG5jb25zdCB3aXRoUGFyYWxsYXggPSBmdW5jdGlvbiggV3JhcHBlZENvbXBvbmVudCApIHtcblxuXHQvLyBBbmQgcmV0dXJuIGEgbmV3IGFub255bW91cyBjb21wb25lbnRcblx0cmV0dXJuIGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXG5cdFx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHRwcm9ncmVzczogMC41LFxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnVwZGF0ZUhhbmRsZXIgPSB0aGlzLnVwZGF0ZURpbWVuc2lvbnMuYmluZCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdC1wb3N0LWxheW91dF9fY29udGVudCcpWzBdO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVIYW5kbGVyICk7XG5cdFx0XHRzY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnVwZGF0ZUhhbmRsZXIgKTtcblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdC1wb3N0LWxheW91dF9fY29udGVudCcpWzBdO1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMudXBkYXRlSGFuZGxlciApO1xuXHRcdFx0c2Nyb2xsQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIHRoaXMudXBkYXRlSGFuZGxlciApO1xuXHRcdH1cblxuXHRcdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0XHRjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXBvc3QtbGF5b3V0X19jb250ZW50JylbMF07XG5cdFx0XHRjb25zdCBjb250YWluZXJCb3ggPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IHByb2dyZXNzID0gKCB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCAtIGNvbnRhaW5lckJveC55ICkgLyAoIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0ICsgdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0ICk7XG5cdFx0XHRjb25zdCBhY3R1YWxQcm9ncmVzcyA9IE1hdGgubWF4KCBNYXRoLm1pbiggcHJvZ3Jlc3MsIDEgKSwgMCApO1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0c2Nyb2xsVG9wOiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wLFxuXHRcdFx0XHRwcm9ncmVzczogYWN0dWFsUHJvZ3Jlc3MsXG5cdFx0XHRcdGRpbWVuc2lvbnM6IHtcblx0XHRcdFx0XHR3aWR0aDogdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQsXG5cdFx0XHRcdFx0dG9wOiBjb250YWluZXJCb3gueSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGdldFBhcmFsbGF4U3R5bGVzKCkge1xuXG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRlbmFibGVQYXJhbGxheCxcblx0XHRcdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdFx0XHRwYXJhbGxheEN1c3RvbUFtb3VudCxcblx0XHRcdFx0fVxuXHRcdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRcdGlmICggISBlbmFibGVQYXJhbGxheCApIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgYWN0dWFsUGFyYWxsYXhBbW91bnQgPSBwYXJhbGxheEFtb3VudCA9PT0gJ2N1c3RvbScgPyBwYXJhbGxheEN1c3RvbUFtb3VudCA6IHBhcnNlSW50KCBwYXJhbGxheEFtb3VudCwgMTAgKTtcblx0XHRcdGFjdHVhbFBhcmFsbGF4QW1vdW50ID0gTWF0aC5tYXgoIE1hdGgubWluKCAxLCBhY3R1YWxQYXJhbGxheEFtb3VudCAvIDEwMCApLCAwICk7XG5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0ZGltZW5zaW9ucyxcblx0XHRcdFx0d2luZG93SGVpZ2h0LFxuXHRcdFx0XHRwcm9ncmVzc1xuXHRcdFx0fSA9IHRoaXMuc3RhdGU7XG5cblx0XHRcdGNvbnN0IG5ld0hlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0ICogKDEgLSBhY3R1YWxQYXJhbGxheEFtb3VudCkgKyB3aW5kb3dIZWlnaHQgKiBhY3R1YWxQYXJhbGxheEFtb3VudDtcblx0XHRcdGNvbnN0IHNjYWxlID0gbmV3SGVpZ2h0IC8gZGltZW5zaW9ucy5oZWlnaHQ7XG5cdFx0XHRjb25zdCBvZmZzZXRZID0gZGltZW5zaW9ucy5oZWlnaHQgKiAoIDEgLSBzY2FsZSApIC8gMjtcblx0XHRcdGNvbnN0IG1vdmUgPSAoIHdpbmRvd0hlaWdodCArIGRpbWVuc2lvbnMuaGVpZ2h0ICkgKiAoIHByb2dyZXNzIC0gMC41ICkgKiBhY3R1YWxQYXJhbGxheEFtb3VudDtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGVpZ2h0OiBuZXdIZWlnaHQsXG5cdFx0XHRcdHRyYW5zaXRpb246ICdub25lJyxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyArICggbW92ZSArIG9mZnNldFkgKSArICdweCknXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJlbmRlcigpIHtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1hc2tcIiByZWY9eyBlbCA9PiAoIHRoaXMuY29udGFpbmVyID0gZWwgKSB9PlxuXHRcdFx0XHRcdHsgdGhpcy5zdGF0ZS5kaW1lbnNpb25zICYmIDxXcmFwcGVkQ29tcG9uZW50IHsgLi4udGhpcy5wcm9wcyB9IHN0eWxlPXsgdGhpcy5nZXRQYXJhbGxheFN0eWxlcygpIH0gLz4gfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhcmFsbGF4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3MvZWRpdG9yLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9oZXJvXCI7XG5pbXBvcnQgXCIuL21lZGlhXCI7XG5pbXBvcnQgXCIuL3NsaWRlc2hvd1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL2hlcm8nLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCAnSGVybyBvZiB0aGUgR2FsYXh5JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogaWNvbnMuaGVybyxcblx0XHRkZXNjcmlwdGlvbjogX18oICdBIGdyZWF0IHdheSB0byBnZXQgeW91ciB2aXNpdG9ycyBhY3F1YWludGVkIHdpdGggeW91ciBjb250ZW50LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGNhdGVnb3J5OiBcIm5vdmEtYnktcGl4ZWxncmFkZVwiLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+XG5cdFx0fSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9oZXJvL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wiY29udGVudFBhZGRpbmdcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIm1lZGl1bVwifSxcImNvbnRlbnRQYWRkaW5nQ3VzdG9tXCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NzV9LFwiY29udGVudFdpZHRoXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJsYXJnZVwifSxcImNvbnRlbnRXaWR0aEN1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjEwMH0sXCJob3Jpem9udGFsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwiZW5hYmxlUGFyYWxsYXhcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJwYXJhbGxheEFtb3VudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiNTBcIn0sXCJwYXJhbGxheEN1c3RvbUFtb3VudFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjUwfSxcImVuYWJsZU1pbkhlaWdodFwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjp0cnVlfSxcImFwcGx5TWluaW11bUhlaWdodFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic291cmNlXCI6XCJtZXRhXCIsXCJtZXRhXCI6XCJub3ZhX2hlcm9fYXBwbHlfbWluaW11bV9oZWlnaHRcIn0sXCJtaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX21pbmltdW1faGVpZ2h0XCJ9LFwiYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2tcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6ZmFsc2V9LFwic2Nyb2xsSW5kaWNhdG9yXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwic291cmNlXCI6XCJtZXRhXCIsXCJtZXRhXCI6XCJub3ZhX2hlcm9fc2Nyb2xsX2luZGljYXRvclwifSxcInNjcm9sbEluZGljYXRvckJsb2NrXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOmZhbHNlfSxcImJhY2tncm91bmRUeXBlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJpbWFnZVwifSxcIm1lZGlhXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZWZhdWx0XCI6e1widHlwZVwiOlwiaW1hZ2VcIixcInNpemVzXCI6e1wiZnVsbFwiOntcInVybFwiOlwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDk2MzE5OTgtNmQ1NTRiMTQwMmFlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjAwJnE9ODBcIixcInVybDFcIjpcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4MDY2MDAwNzE0LTU4YzQ1ZjFhMmMwYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk1MCZxPTgwXCJ9fX19LFwiY29udGVudENvbG9yXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCIjRkZGXCJ9LFwib3ZlcmxheUZpbHRlclN0eWxlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJkYXJrXCJ9LFwib3ZlcmxheUZpbHRlclN0cmVuZ3RoXCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MzB9LFwiaW1hZ2VzXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2hlcm8vYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGljb25zIGZyb20gJy4uL2ljb25zJztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEhlaWdodFBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0T3ZlcmxheUNvbnRyb2xzLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcblxuaW1wb3J0IEhlcm9QcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5pbXBvcnQgSGVyb0Jsb2NrQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0U2VsZWN0Q29udHJvbCxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGVkaXRvckRhdGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5jb25zdCB1cGRhdGVCbG9ja3MgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGNvbnN0IGJsb2NrcyA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5cblx0YmxvY2tzLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0fSApLmZpbHRlciggKCBibG9jaywgaGVyb0Jsb2NrSW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgeyBhcHBseU1pbmltdW1IZWlnaHQsIHNjcm9sbEluZGljYXRvciB9ID0geyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH07XG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgPSBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdmaXJzdCcgJiYgaGVyb0Jsb2NrSW5kZXggPT09IDAgfHwgYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnYWxsJztcblx0XHRjb25zdCBzY3JvbGxJbmRpY2F0b3JCbG9jayA9IHNjcm9sbEluZGljYXRvciA9PT0gdHJ1ZSAmJiBoZXJvQmxvY2tJbmRleCA9PT0gMDtcblx0XHRjb25zdCBibG9ja0luZGV4ID0gYmxvY2tzLmZpbmRJbmRleCggdGVzdEJsb2NrID0+IGJsb2NrID09PSB0ZXN0QmxvY2sgKTtcblxuXHRcdHdwLmRhdGEuZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7XG5cdFx0XHRibG9ja0luZGV4LFxuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9ja1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9ICk7XG5cbn1cblxubGV0IGJsb2NrTGlzdCA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5sZXQgZGVib3VuY2VkT25TdWJzY3JpYmUgPSBkZWJvdW5jZSgoKSA9PiB7XG5cblx0Y29uc3QgbmV3QmxvY2tMaXN0ID0gZWRpdG9yRGF0YS5nZXRCbG9ja3MoKTtcblx0bGV0IGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3QubGVuZ3RoICE9PSBuZXdCbG9ja0xpc3QubGVuZ3RoO1xuXG5cdGlmICggISBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3Quc29tZSggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCBibG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICE9PSBuZXdCbG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdCA9IG5ld0Jsb2NrTGlzdDtcblx0XHR1cGRhdGVCbG9ja3MoKTtcblx0fVxufSwgMzApO1xuXG53cC5kYXRhLnN1YnNjcmliZSggZGVib3VuY2VkT25TdWJzY3JpYmUgKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRwb3NpdGlvbkluZGljYXRvcixcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEhlcm9QcmV2aWV3IHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxIZXJvQmxvY2tDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PC9GcmFnbWVudD4sXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnQ29udGVudCBQb3NpdGlvbicsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxDb2xvclBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxMYXlvdXRQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8SGVpZ2h0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PFNjcm9sbEluZGljYXRvclBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdHsgZmFsc2UgJiYgPFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUG9zaXRpb24gSW5kaWNhdG9ycycsICdfX3BsdWdpbl90eHRkJyApIH0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgUG9zaXRpb24gSW5kaWNhdG9ycycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwb3NpdGlvbkluZGljYXRvciB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHBvc2l0aW9uSW5kaWNhdG9yID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBwb3NpdGlvbkluZGljYXRvciB9ICk7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBwb3NpdGlvbkluZGljYXRvciB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxuXHRcdFx0XHQ8UGFyYWxsYXhQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdF1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vZWRpdC5qcyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGlzRW51bS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFBhZGRpbmdDb250cm9scyBmcm9tIFwiLi9wYWRkaW5nXCI7XG5pbXBvcnQgV2lkdGhDb250cm9scyBmcm9tIFwiLi93aWR0aFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIDxQYW5lbEJvZHlcblx0XHRcdGNsYXNzTmFtZT1cInBpeGVsZ3JhZGUtaGVyby1idXR0b24tZ3JvdXAtd3JhcHBlclwiXG5cdFx0XHR0aXRsZT17IF9fKCAnTGF5b3V0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0aW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cblx0XHRcdDxQYWRkaW5nQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDxXaWR0aENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGluZ0NvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29udGVudFBhZGRpbmdPcHRpb25zID0gW1xuXHRcdFx0eyBsYWJlbDogX18oICdTbWFsbCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NtYWxsJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdNZWRpdW0nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtZWRpdW0nIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0xhcmdlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGFyZ2UnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2N1c3RvbScgfSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxsYWJlbD57IF9fKCAnQ29udGVudCBQYWRkaW5nJywgJ19fcGx1Z2luX3R4dGQnKSB9PC9sYWJlbD5cblx0XHRcdDxCdXR0b25Hcm91cD5cblx0XHRcdFx0eyBjb250ZW50UGFkZGluZ09wdGlvbnMubWFwKCBvcHRpb24gPT5cblx0XHRcdFx0XHQ8QnV0dG9uIGtleT17IG9wdGlvbi52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdGlzRGVmYXVsdD17IG9wdGlvbi52YWx1ZSAhPT0gY29udGVudFBhZGRpbmcgfVxuXHRcdFx0XHRcdCAgICAgICAgaXNQcmltYXJ5PXsgb3B0aW9uLnZhbHVlID09PSBjb250ZW50UGFkZGluZyB9XG5cdFx0XHRcdFx0ICAgICAgICBvbkNsaWNrPXsgKCkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRQYWRkaW5nOiBvcHRpb24udmFsdWUgfSApIH0gfT5cblx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gY29udGVudFBhZGRpbmcgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IGNvbnRlbnRQYWRkaW5nQ3VzdG9tIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50UGFkZGluZ0N1c3RvbSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRQYWRkaW5nQ3VzdG9tIH0gKSB9XG5cdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0bWF4PXsyNX1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9wYWRkaW5nLmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkdGhDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29udGVudFdpZHRoT3B0aW9ucyA9IFtcblx0XHRcdHsgbGFiZWw6IF9fKCAnRnVsbCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Z1bGwnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0xhcmdlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGFyZ2UnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ05hcnJvdycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ25hcnJvdycgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnQ3VzdG9tJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnY3VzdG9tJyB9LFxuXHRcdF07XG5cblx0XHRyZXR1cm4gPEZyYWdtZW50PlxuXHRcdFx0PGxhYmVsPnsgX18oICdDb250ZW50IFdpZHRoJywgJ19fcGx1Z2luX3R4dGQnKSB9PC9sYWJlbD5cblx0XHRcdDxCdXR0b25Hcm91cCBsYWJlbD1cIkNvbnRlbnQgV2lkdGhcIj5cblx0XHRcdFx0eyBjb250ZW50V2lkdGhPcHRpb25zLm1hcCggb3B0aW9uID0+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpc0RlZmF1bHQ9eyBvcHRpb24udmFsdWUgIT09IGNvbnRlbnRXaWR0aCB9XG5cdFx0XHRcdFx0ICAgICAgICBpc1ByaW1hcnk9eyBvcHRpb24udmFsdWUgPT09IGNvbnRlbnRXaWR0aCB9XG5cdFx0XHRcdFx0ICAgICAgICBvbkNsaWNrPXsgKCkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXaWR0aDogb3B0aW9uLnZhbHVlfSApIH0gfT5cblx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gY29udGVudFdpZHRoICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBjb250ZW50V2lkdGhDdXN0b20gfVxuXHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnRXaWR0aEN1c3RvbSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXaWR0aEN1c3RvbSB9ICkgfVxuXHRcdFx0XHRtaW49ezIwfVxuXHRcdFx0XHRtYXg9ezkwfVxuXHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC93aWR0aC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC8vIHBhcmFsbGF4XG5cdFx0XHRcdGVuYWJsZVBhcmFsbGF4LFxuXHRcdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdFx0cGFyYWxsYXhDdXN0b21BbW91bnQsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BhcmFsbGF4JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBQYXJhbGxheCBTY3JvbGxpbmcnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGVuYWJsZVBhcmFsbGF4IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlUGFyYWxsYXg6ICEgZW5hYmxlUGFyYWxsYXggfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAhISBlbmFibGVQYXJhbGxheCAmJlxuXHRcdFx0XHQgIDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHQgIGxhYmVsPXsgX18oICdQYXJhbGxheCBPcmJpdGFsIFNwZWVkJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdCAgc2VsZWN0ZWQ9eyBwYXJhbGxheEFtb3VudCB9XG5cdFx0XHRcdFx0ICBvbkNoYW5nZT17IHBhcmFsbGF4QW1vdW50ID0+IHtcblxuXHRcdFx0XHRcdFx0ICBpZiAoIHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyApIHtcblx0XHRcdFx0XHRcdFx0ICBzZXRBdHRyaWJ1dGVzKCB7IHBhcmFsbGF4QW1vdW50IH0gKTtcblx0XHRcdFx0XHRcdCAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0ICBwYXJhbGxheEFtb3VudDogcGFyYWxsYXhBbW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0ICBwYXJhbGxheEN1c3RvbUFtb3VudDogcGFyc2VJbnQoIHBhcmFsbGF4QW1vdW50LCAxMCApXG5cdFx0XHRcdFx0XHRcdCAgfSApO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICB9IH1cblx0XHRcdFx0XHQgIG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ0Zhc3QgYXMgTWVyY3VyZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnMjAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdOYXR1cmFsIGFzIEVhcnRoJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICc1MCdcblx0XHRcdFx0XHRcdCAgfSwge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ1Nsb3cgYXMgTmVwdHVuZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnNzAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJ2N1c3RvbSdcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgXX1cblx0XHRcdFx0XHQgIGhlbHA9eyBfXygnVGhlIHNwZWVkIGF0IHdoaWNoIHRoZSBwYXJhbGxheCBlZmZlY3QgcnVucy4nLCAnX19wbHVnaW5fdHh0ZCcpIH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsgISEgZW5hYmxlUGFyYWxsYXggJiYgJ2N1c3RvbScgPT09IHBhcmFsbGF4QW1vdW50ICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHR2YWx1ZT17IHBhcmFsbGF4Q3VzdG9tQW1vdW50IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHBhcmFsbGF4Q3VzdG9tQW1vdW50ID0+IHNldEF0dHJpYnV0ZXMoIHsgcGFyYWxsYXhDdXN0b21BbW91bnQgfSApIH1cblx0XHRcdFx0XHRtaW49ezEwfVxuXHRcdFx0XHRcdG1heD17MTAwfVxuXHRcdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0XHRcdGhlbHA9eyBfXygnSXQgc3RhcnRzIGZyb20gMCB3aGVuIHRoZSBpbWFnZSB3aWxsIGtlZXAgd2l0aCB0aGUgY29udGVudCAobm8gcGFyYWxsYXgpIHVwIHRvIDEwMCB3aGVuIHRoZSBpbWFnZSBhcHBlYXJzIGZpeGVkIGluIHBsYWNlLicsICdfX3BsdWdpbl90eHRkJyApfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGFyYWxsYXgtcGFuZWwvaW5kZXguanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEljb25CdXR0b24sXG5cdEZvcm1GaWxlVXBsb2FkLFxuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jbGFzcyBHYWxsZXJ5UGxhY2Vob2xkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdG9uQ2hhbmdlR2FsbGVyeSggZ2FsbGVyeUltYWdlcyApIHtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gZ2FsbGVyeUltYWdlcy5tYXAoIChpbWFnZSwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiB3cC5hcGlSZXF1ZXN0KCB7IHBhdGg6ICcvd3AvdjIvbWVkaWEvJyArIGltYWdlLmlkIH0gKS50aGVuKCBuZXdJbWFnZSA9PiB7XG5cdFx0XHRcdGdhbGxlcnlJbWFnZXNbaW5kZXhdID0geyAuLi5uZXdJbWFnZSwgLi4uaW1hZ2UgfTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHRQcm9taXNlLmFsbCggcHJvbWlzZXMgKS50aGVuKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoIHsgZ2FsbGVyeUltYWdlczogZ2FsbGVyeUltYWdlcy5maWx0ZXIoIGltYWdlID0+IHtcblx0XHRcdFx0cmV0dXJuICEhIGltYWdlLmlkICYmICEhIGltYWdlLnNpemVzICYmICEhIGltYWdlLnNpemVzLmxhcmdlICYmICEhIGltYWdlLnNpemVzLmxhcmdlLnVybDtcblx0XHRcdH0gKSB9ICk7XG5cdFx0fSApO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGdhbGxlcnlJbWFnZXMsXG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvblNlbGVjdEltYWdlLFxuXHRcdFx0XHRvbkNoYW5nZSxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBoYXNJbWFnZXMgPSAhISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRhZGRUb0dhbGxlcnk9eyBoYXNJbWFnZXMgfVxuXHRcdFx0XHRpc0FwcGVuZGVyPXsgaGFzSW1hZ2VzIH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiXCJcblx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBpbWFnZXMsIHVwbG9hZCBuZXcgb25lcyBvciBzZWxlY3QgZmlsZXMgZnJvbSB5b3VyIGxpYnJhcnkuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRvblNlbGVjdD17IHRoaXMub25DaGFuZ2VHYWxsZXJ5LmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0dmFsdWU9eyBoYXNJbWFnZXMgPyBnYWxsZXJ5SW1hZ2VzIDogdW5kZWZpbmVkIH1cblx0XHRcdC8+XG5cdFx0KVxuXHR9XG59XG5cbmNsYXNzIEdhbGxlcnlQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRvblNlbGVjdEltYWdlLFxuXHRcdFx0aXNTZWxlY3RlZFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19nYWxsZXJ5LWVkaXRcIj5cblx0XHRcdFx0eyBnYWxsZXJ5SW1hZ2VzLm1hcCggKCBpbWcsIGluZGV4ICkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9IFtcblx0XHRcdFx0XHRcdCdub3ZhLXNsaWRlc2hvd19fZ2FsbGVyeS1pdGVtJyxcblx0XHRcdFx0XHRdO1xuXG5cdFx0XHRcdFx0aWYgKCBzZWxlY3RlZCA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goICdub3ZhLXNsaWRlc2hvd19fZ2FsbGVyeS1pdGVtLS1hY3RpdmUnICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaSBrZXk9eyBpbWcuaWQgfHwgaW1nLnVybCB9IG9uQ2xpY2s9eyAoKSA9PiB7IG9uU2VsZWN0SW1hZ2UoIGluZGV4ICkgfSB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbiggJyAnICkgfT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17IGltZy5zaXplcy50aHVtYm5haWwudXJsIH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKSB9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRHYWxsZXJ5UGxhY2Vob2xkZXIsXG5cdEdhbGxlcnlQcmV2aWV3XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dhbGxlcnktb3B0aW9ucy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9ibG9ja3MvaWNvbnNcIjtcbmltcG9ydCB7QWxpZ25tZW50Q29udHJvbHN9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdENvbG9yUGFsZXR0ZSxcblx0RHJvcGRvd24sXG5cdEljb25CdXR0b24sXG5cdFJhZGlvQ29udHJvbCxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb29sYmFyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0UGFuZWxDb2xvclNldHRpbmdzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjb2xvcnMgPSBbIHtcblx0bmFtZTogX18oICdEYXJrJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdGNvbG9yOiAnIzAwMCdcbn0sIHtcblx0bmFtZTogX18oICdMaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRjb2xvcjogJyNGRkYnXG59IF07XG5cbmNsYXNzIE92ZXJsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8RnJhZ21lbnQ+XG5cdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPdmVybGF5IEZpbHRlciBTdHlsZScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0c2VsZWN0ZWQ9eyBvdmVybGF5RmlsdGVyU3R5bGUgfVxuXHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTm9uZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ25vbmUnIH0sXG5cdFx0XHRcdFx0eyBsYWJlbDogX18oICdEYXJrJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnZGFyaycgfSxcblx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0xpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGlnaHQnIH1cblx0XHRcdFx0XSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgb3ZlcmxheUZpbHRlclN0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgb3ZlcmxheUZpbHRlclN0eWxlIH0gKSB9XG5cdFx0XHQvPlxuXHRcdFx0eyBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPdmVybGF5IEZpbHRlciBTdHJlbmd0aCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0dmFsdWU9eyBvdmVybGF5RmlsdGVyU3RyZW5ndGggfVxuXHRcdFx0XHRvbkNoYW5nZT17IG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCA9PiBzZXRBdHRyaWJ1dGVzKCB7IG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCB9ICkgfVxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MTAwfVxuXHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cbmNsYXNzIENvbG9yQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPENvbG9yUGFsZXR0ZVxuXHRcdFx0Y2xhc3NOYW1lPVwibm92YS1oaWRlLWNsZWFyLWNvbG9yXCJcblx0XHRcdHZhbHVlPXsgY29udGVudENvbG9yIH1cblx0XHRcdGNvbG9ycz17IGNvbG9ycyB9XG5cdFx0XHRvbkNoYW5nZT17IGNvbnRlbnRDb2xvciA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRDb2xvciB9ICkgfVxuXHRcdFx0ZGlzYWJsZUN1c3RvbUNvbG9yc1xuXHRcdC8+XG5cdH1cbn1cblxuY2xhc3MgQ29sb3JQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdGNsYXNzTmFtZT1cIm5vdmEtaGlkZS1jbGVhci1jb2xvclwiXG5cdFx0XHR0aXRsZT17IF9fKCAnQ29sb3IgU2V0dGluZ3MnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRjb2xvclNldHRpbmdzPXsgW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbnRlbnRDb2xvcixcblx0XHRcdFx0XHRvbkNoYW5nZTogY29udGVudENvbG9yID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudENvbG9yIH0gKSxcblx0XHRcdFx0XHRsYWJlbDogX18oICdDb250ZW50IENvbG9yJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdH0sXG5cdFx0XHRdIH1cblx0XHRcdGNvbG9ycz17IGNvbG9ycyB9IFxuXHRcdFx0aW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0PE92ZXJsYXlDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdDwvUGFuZWxDb2xvclNldHRpbmdzPlxuXHR9XG59XG5cbmNsYXNzIENvbG9yVG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhcic+XG5cdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdHBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhci1kcm9wZG93bidcblx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0cmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IChcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5pbnZlcnQgfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NvbG9yIE9wdGlvbnMnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PENvbG9yQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdDxPdmVybGF5Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdENvbG9yQ29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdENvbG9yVG9vbGJhcixcblx0T3ZlcmxheUNvbnRyb2xzLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb2xvci1jb250cm9scy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9ibG9ja3MvaWNvbnNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyB3aXRoVmlld3BvcnRNYXRjaCB9ID0gd3Audmlld3BvcnQ7XG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IGNvbXBvc2UsIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBDb25zdW1lciwgUHJvdmlkZXIgfSA9IGNyZWF0ZUNvbnRleHQoIHtcblx0bmFtZTogJycsXG5cdGlzU2VsZWN0ZWQ6IGZhbHNlLFxuXHRmb2N1c2VkRWxlbWVudDogbnVsbCxcblx0c2V0Rm9jdXNlZEVsZW1lbnQ6ICgpID0+IHt9LFxuXHRjbGllbnRJZDogbnVsbCxcbn0gKTtcblxuY29uc3Qge1xuXHRUb29sYmFyXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MUyA9IHtcblx0bGVmdDoge1xuXHRcdGljb246IGljb25zLmFsaWduVG9wLFxuXHRcdHRpdGxlOiBfXyggJ0FsaWduIExlZnQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcblx0Y2VudGVyOiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25DZW50ZXIsXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gTWlkZGxlJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdH0sXG5cdHJpZ2h0OiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25Cb3R0b20sXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gUmlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcbn07XG5cbmNvbnN0IERFRkFVTFRfQ09OVFJPTFMgPSBbICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcgXTtcbmNvbnN0IERFRkFVTFRfQ09OVFJPTCA9ICdjZW50ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhciggeyBpc0NvbGxhcHNlZCwgdmFsdWUsIG9uQ2hhbmdlLCBjb250cm9scyA9IERFRkFVTFRfQ09OVFJPTFMgfSApIHtcblx0ZnVuY3Rpb24gYXBwbHlPclVuc2V0KCBhbGlnbiApIHtcblx0XHRyZXR1cm4gKCkgPT4gb25DaGFuZ2UoIHZhbHVlID09PSBhbGlnbiA/IHVuZGVmaW5lZCA6IGFsaWduICk7XG5cdH1cblxuXHRjb25zdCBhY3RpdmVBbGlnbm1lbnQgPSBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyB2YWx1ZSBdO1xuXHRjb25zdCBkZWZhdWx0QWxpZ25tZW50Q29udHJvbCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIERFRkFVTFRfQ09OVFJPTCBdO1xuXG5cdHJldHVybiAoXG5cdFx0PFRvb2xiYXJcblx0XHRcdGlzQ29sbGFwc2VkPXsgaXNDb2xsYXBzZWQgfVxuXHRcdFx0aWNvbj17IGFjdGl2ZUFsaWdubWVudCA/IGFjdGl2ZUFsaWdubWVudC5pY29uIDogZGVmYXVsdEFsaWdubWVudENvbnRyb2wuaWNvbiB9XG5cdFx0XHRjb250cm9scz17XG5cdFx0XHRcdGNvbnRyb2xzLm1hcCggKCBjb250cm9sICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5CTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyBjb250cm9sIF0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogdmFsdWUgPT09IGNvbnRyb2wsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBhcHBseU9yVW5zZXQoY29udHJvbCksXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwicGl4ZWxncmFkZS1oZXJvLWhvcml6b250YWwtYWxpZ25tZW50LWJ1dHRvblwiXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cdFx0Lz5cblx0KVxufVxuXG4vLyBAdG9kbyByZW1vdmUgZnVuY3Rpb24gZGVjbGFyYXRpb24gYW5kIHVzZSBjb3JlIG1ldGhvZCB3aGVuIGV4cG9zZWQgdGhyb3VnaCB0aGUgYXBpXG5jb25zdCB3aXRoQmxvY2tFZGl0Q29udGV4dCA9ICggbWFwQ29udGV4dFRvUHJvcHMgKSA9PiBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCggKCBPcmlnaW5hbENvbXBvbmVudCApID0+IHtcblx0cmV0dXJuICggcHJvcHMgKSA9PiAoXG5cdFx0PENvbnN1bWVyPlxuXHRcdFx0eyAoIGNvbnRleHQgKSA9PiAoXG5cdFx0XHRcdDxPcmlnaW5hbENvbXBvbmVudFxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdHsgLi4ubWFwQ29udGV4dFRvUHJvcHMoIGNvbnRleHQsIHByb3BzICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSB9XG5cdFx0PC9Db25zdW1lcj5cblx0KTtcbn0sICd3aXRoQmxvY2tFZGl0Q29udGV4dCcgKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aEJsb2NrRWRpdENvbnRleHQoICggeyBjbGllbnRJZCB9ICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGllbnRJZCxcblx0XHR9O1xuXHR9ICksXG5cdHdpdGhWaWV3cG9ydE1hdGNoKCB7IGlzTGFyZ2VWaWV3cG9ydDogJ21lZGl1bScgfSApLFxuXHR3aXRoU2VsZWN0KCAoIHNlbGVjdCwgeyBjbGllbnRJZCwgaXNMYXJnZVZpZXdwb3J0LCBpc0NvbGxhcHNlZCB9ICkgPT4ge1xuXHRcdGNvbnN0IHsgZ2V0QmxvY2tSb290Q2xpZW50SWQsIGdldFNldHRpbmdzIH0gPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNDb2xsYXBzZWQ6IGlzQ29sbGFwc2VkIHx8ICEgaXNMYXJnZVZpZXdwb3J0IHx8IChcblx0XHRcdFx0ISBnZXRTZXR0aW5ncygpLmhhc0ZpeGVkVG9vbGJhciAmJlxuXHRcdFx0XHRnZXRCbG9ja1Jvb3RDbGllbnRJZCggY2xpZW50SWQgKVxuXHRcdFx0KSxcblx0XHR9O1xuXHR9ICksXG4pKCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXIvaW5kZXguanMiLCJpbXBvcnQge2RlYm91bmNlfSBmcm9tIFwiLi4vLi4vYmxvY2tzL3V0aWxzXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRkaXNwYXRjaCxcblx0c2VsZWN0LFxuXHRzdWJzY3JpYmUsXG59ID0gd3AuZGF0YTtcblxubGV0IGJsb2NrTGlzdCA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xuXG5sZXQgZGVib3VuY2VkT25TdWJzY3JpYmUgPSBkZWJvdW5jZSgoKSA9PiB7XG5cdGxldCBuZXdCbG9ja0xpc3QgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKTtcblx0bGV0IGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3QubGVuZ3RoICE9PSBuZXdCbG9ja0xpc3QubGVuZ3RoO1xuXG5cdGlmICggISBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3Quc29tZSggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCBibG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICE9PSBuZXdCbG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdCA9IG5ld0Jsb2NrTGlzdDtcblx0XHR1cGRhdGVCbG9ja3MoKTtcblx0fVxufSwgMzApO1xuXG5zdWJzY3JpYmUoIGRlYm91bmNlZE9uU3Vic2NyaWJlICk7XG5cbmNvbnN0IHVwZGF0ZUJsb2NrcyA9ICggYXR0cmlidXRlcyApID0+IHtcblxuXHRzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRyZXR1cm4gYmxvY2submFtZSA9PT0gJ25vdmEvaGVybyc7XG5cdH0gKS5maWx0ZXIoICggYmxvY2ssIGluZGV4ICkgPT4ge1xuXHRcdGNvbnN0IHsgYXBwbHlNaW5pbXVtSGVpZ2h0LCBzY3JvbGxJbmRpY2F0b3IgfSA9IHsgLi4uYmxvY2suYXR0cmlidXRlcywgLi4uYXR0cmlidXRlcyB9O1xuXHRcdGNvbnN0IGFwcGx5TWluaW11bUhlaWdodEJsb2NrID0gYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnZmlyc3QnICYmIGluZGV4ID09PSAwIHx8IGFwcGx5TWluaW11bUhlaWdodCA9PT0gJ2FsbCc7XG5cdFx0Y29uc3Qgc2Nyb2xsSW5kaWNhdG9yQmxvY2sgPSBzY3JvbGxJbmRpY2F0b3IgPT09IHRydWUgJiYgaW5kZXggPT09IDA7XG5cblx0XHRkaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggYmxvY2suY2xpZW50SWQsIHtcblx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2tcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSApO1xuXG59XG5cbmNsYXNzIEhlaWdodFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0ID0gISEgYXR0cmlidXRlcy5hcHBseU1pbmltdW1IZWlnaHQgPyBhdHRyaWJ1dGVzLmFwcGx5TWluaW11bUhlaWdodCA6ICdmaXJzdCc7XG5cdFx0Y29uc3QgbWluSGVpZ2h0ID0gISEgYXR0cmlidXRlcy5taW5IZWlnaHQgPyBhdHRyaWJ1dGVzLm1pbkhlaWdodCA6IDc1O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0hlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FwcGx5IE1pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdHNlbGVjdGVkPXsgYXBwbHlNaW5pbXVtSGVpZ2h0IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IGFwcGx5TWluaW11bUhlaWdodCA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGFwcGx5TWluaW11bUhlaWdodCB9ICk7XG5cdFx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgYXBwbHlNaW5pbXVtSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvcHRpb25zPXtcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdOb25lJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbm9uZScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdGaXJzdCBIZXJvIEJsb2NrIE9ubHknLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdmaXJzdCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdBbGwgSGVybyBCbG9ja3MnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdhbGwnIH1cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgJ25vbmUnICE9PSBhcHBseU1pbmltdW1IZWlnaHQgJiZcblx0XHRcdFx0ICAgIDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbWluSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtaW5IZWlnaHQ6IHBhcnNlSW50KCBtaW5IZWlnaHQsIDEwICkgfSApXG4vL1x0XHRcdFx0XHRcdFx0dXBkYXRlQmxvY2tzKCB7IG1pbkhlaWdodCB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e1xuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdIYWxmJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiA1MCB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnVHdvIFRoaXJkcycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogNjYgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ1RocmVlIFF1YXJ0ZXJzJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiA3NSB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnRnVsbCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogMTAwIH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQgICAgfVxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0KVxuXHR9XG59XG5cbmNsYXNzIFNjcm9sbEluZGljYXRvclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHNjcm9sbEluZGljYXRvcixcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBoZXJvQmxvY2tzID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCkuZmlsdGVyKCBibG9jayA9PiB7XG5cdFx0XHRyZXR1cm4gYmxvY2submFtZSA9PT0gJ25vdmEvaGVybyc7XG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSBoZXJvQmxvY2tzLmZpbmRJbmRleCggYmxvY2sgPT4gYmxvY2suY2xpZW50SWQgPT09IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpICk7XG5cblx0XHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IF9fKCAnU2Nyb2xsIEluZGljYXRvcicsICdfX3BsdWdpbl90eHRkJyApIH0gc3R5bGU9eyB7IGRpc3BsYXk6IGluZGV4ID09PSAwID8gJ2Jsb2NrJyA6ICdub25lJyB9IH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBTY3JvbGwgSW5kaWNhdG9yJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRjaGVja2VkPXsgc2Nyb2xsSW5kaWNhdG9yIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBzY3JvbGxJbmRpY2F0b3IgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc2Nyb2xsSW5kaWNhdG9yIH0gKTtcblx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgc2Nyb2xsSW5kaWNhdG9yIH0gKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdDwvUGFuZWxCb2R5PlxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdEhlaWdodFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlaWdodC1jb250cm9scy9pbmRleC5qcyIsImNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmltcG9ydCBIZXJvQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHRcdC8vIGFsaWdubWVudFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0Ly8gaGVpZ2h0XG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdC8vIGluZGljYXRvcnNcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2ssXG5cdFx0XHRcdC8vIGNvbG9yc1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdH0sXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtaGVybycsXG5cdFx0XHRgbm92YS11LXZhbGlnbi0ke3ZlcnRpY2FsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LWhhbGlnbi0ke2hvcml6b250YWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtc3BhY2luZy0ke2NvbnRlbnRQYWRkaW5nfWAsXG5cdFx0XHRgbm92YS11LWNvbnRlbnQtd2lkdGgtJHtjb250ZW50V2lkdGh9YCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZGAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmQtJHtvdmVybGF5RmlsdGVyU3R5bGV9YFxuXHRcdF1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGhlcm86IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7fSxcblx0XHRcdGNvbnRlbnQ6IHt9LFxuXHRcdH1cblxuXHRcdGlmICggISEgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgKSB7XG5cdFx0XHRzdHlsZXMuaGVyby5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAndmgnXG5cdFx0fVxuXG5cdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nVG9wID0gYCR7Y29udGVudFBhZGRpbmdDdXN0b219JWBcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdCb3R0b20gPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdH1cblxuXHRcdGlmICggY29udGVudFdpZHRoID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlcy5oZXJvfT5cblx0XHRcdFx0PEhlcm9CYWNrZ3JvdW5kIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2ZvcmVncm91bmQgbm92YS11LWNvbnRlbnQtcGFkZGluZycgc3R5bGU9eyBzdHlsZXMuZm9yZWdyb3VuZCB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLXUtY29udGVudC1hbGlnbic+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19pbm5lci1jb250YWluZXIgbm92YS11LWNvbnRlbnQtd2lkdGgnIHN0eWxlPXsgc3R5bGVzLmNvbnRlbnQgfT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzIHRlbXBsYXRlPXtbXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9oZWFkaW5nJywgeyBjb250ZW50OiAnVGhpcyBpcyBhIGNhdGNoeSB0aXRsZScsIGFsaWduOiAnY2VudGVyJywgbGV2ZWw6IDEgfSBdLFxuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBjb250ZW50OiAnQSBicmlsbGlhbnQgc3VidGl0bGUgdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzcycsIGFsaWduOiAnY2VudGVyJyB9IF0sXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9idXR0b24nLCB7IHRleHQ6ICdEaXNjb3ZlciBtb3JlJywgYWxpZ246ICdjZW50ZXInIH0gXSxcblx0XHRcdFx0XHRcdFx0XX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBzY3JvbGxJbmRpY2F0b3JCbG9jayAmJiA8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19pbmRpY2F0b3InPjwvZGl2PiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaGVyby9wcmV2aWV3LmpzIiwiaW1wb3J0IHdpdGhQYXJhbGxheCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcGFyYWxsYXgnO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jbGFzcyBIZXJvQmFja2dyb3VuZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0cmVuZ3RoLFxuXHRcdFx0XHRtZWRpYVxuXHRcdFx0fVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qgc3R5bGVzID0ge307XG5cblx0XHRpZiAoIG92ZXJsYXlGaWx0ZXJTdHlsZSAhPT0gJ25vbmUnICkge1xuXHRcdFx0c3R5bGVzLm9wYWNpdHkgPSAxIC0gb3ZlcmxheUZpbHRlclN0cmVuZ3RoIC8gMTAwXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2JhY2tncm91bmQnIHN0eWxlPXsgdGhpcy5wcm9wcy5zdHlsZSB9PlxuXHRcdFx0XHR7bWVkaWEudHlwZSA9PT0gJ2ltYWdlJyAmJiB0eXBlb2YgbWVkaWEuc2l6ZXMgIT09ICd1bmRlZmluZWQnXG5cdFx0XHRcdCAmJiA8aW1nIGNsYXNzTmFtZT0nbm92YS1oZXJvX19tZWRpYScgc3JjPXttZWRpYS5zaXplcy5mdWxsLnVybH0gc3R5bGU9e3N0eWxlc30vPn1cblx0XHRcdFx0e21lZGlhLnR5cGUgPT09ICd2aWRlbydcblx0XHRcdFx0ICYmIDx2aWRlbyBtdXRlZCBhdXRvUGxheSBsb29wIGNsYXNzTmFtZT0nbm92YS1oZXJvX19tZWRpYScgc3JjPXttZWRpYS51cmx9IHN0eWxlPXtzdHlsZXN9Lz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJhbGxheCggSGVyb0JhY2tncm91bmQgKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaGVyby9iYWNrZ3JvdW5kLmpzIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uL2ljb25zXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0TWVkaWFVcGxvYWQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0RHJvcGRvd24sXG5cdEljb25CdXR0b24sXG5cdFRvb2xiYXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdENvbG9yQ29udHJvbHMsXG5cdE92ZXJsYXlDb250cm9scyxcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJywgJ3ZpZGVvJyBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvQmxvY2tDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPEJsb2NrQ29udHJvbHM+XG5cdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ29udGVudCBhbGlnbm1lbnQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhcic+XG5cdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdHBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhci1kcm9wZG93bidcblx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0cmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IChcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5pbnZlcnQgfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ludmVydCBjb2xvcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PENvbG9yQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdDxPdmVybGF5Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG1lZGlhIH0gKSB9XG5cdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3dhcCBNZWRpYScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0aWNvbj0nZm9ybWF0LWltYWdlJ1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaGVyby9jb250cm9scy5qcyIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogd3AgQVBJXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCAnbm92YS9tZWRpYScsXG5cdHtcblx0XHR0aXRsZTogX18oICdNZWRpYSBDYXJkIENvbnN0ZWxsYXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oICdEaXNwbGF5IG1lZGlhIG9iamVjdHMgYWxvbmdzaWRlIHNob3J0IHBpZWNlcyBvZiBjb250ZW50LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGljb246IG1lZGlhLFxuXHRcdGNhdGVnb3J5OiAnbm92YS1ieS1waXhlbGdyYWRlJyxcblx0XHQuLi5hdHRyaWJ1dGVzLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wiaW1hZ2VBbHRcIjp7XCJhdHRyaWJ1dGVcIjpcImFsdFwifSxcImJhY2tncm91bmRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiIzAwMFwifSxcIm1lZGlhUG9zaXRpb25cIjp7XCJkZWZhdWx0XCI6XCJsZWZ0XCJ9LFwibWVkaWFTdHlsZVwiOntcImRlZmF1bHRcIjpcInNpbXBsZVwifSxcImNvbnRlbnRTdHlsZVwiOntcImRlZmF1bHRcIjpcImJhc2ljXCJ9LFwiYmxvY2tTdHlsZVwiOntcImRlZmF1bHRcIjpcImJhc2ljXCJ9LFwiYmFja2dyb3VuZFR5cGVcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcInRyYW5zcGFyZW50XCJ9LFwiaW1hZ2VzXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL21lZGlhL2F0dHJpYnV0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL2luc3BlY3Rvcic7XG5pbXBvcnQgTWVkaWFQcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHVwZGF0ZUltYWdlcyggbWVkaWEgKSB7XG5cdFx0dGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdGltYWdlczogbWVkaWEubWFwKCAoIGltYWdlICkgPT4gSlNPTi5zdHJpbmdpZnkoeyBpZDogaW1hZ2UuaWQsIHVybDogaW1hZ2UudXJsLCBhbHQ6IGltYWdlLmFsdCB9KSApXG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8TWVkaWFQcmV2aWV3IHsgLi4udGhpcy5wcm9wcyB9IHVwZGF0ZUltYWdlcz17IHRoaXMudXBkYXRlSW1hZ2VzLmJpbmQoIHRoaXMgKSB9IC8+XG5cdFx0XHRcdDxDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSB1cGRhdGVJbWFnZXM9eyB0aGlzLnVwZGF0ZUltYWdlcy5iaW5kKCB0aGlzICkgfSAvPlxuXHRcdFx0XHQ8SW5zcGVjdG9yIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdF1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL2VkaXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG5cdEJsb2NrQ29udHJvbHNcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRJY29uQnV0dG9uLFxuXHRUb29sYmFyXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0dXBkYXRlSW1hZ2VzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYVBvc2l0aW9uLFxuXHRcdFx0aW1hZ2VzID0gW10sXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCAoIChpbWFnZSkgID0+IEpTT04ucGFyc2UoaW1hZ2UpKTtcblxuXHRcdGNvbnN0IGhhc0ltYWdlcyA9ICEhIGltYWdlcy5sZW5ndGg7XG5cblx0XHRjb25zdCBNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHRcdFx0bGVmdDoge1xuXHRcdFx0XHRpY29uOiAnYWxpZ24tcHVsbC1sZWZ0Jyxcblx0XHRcdFx0dGl0bGU6IF9fKCAnU2hvdyBNZWRpYSBvbiBMZWZ0IFNpZGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdH0sXG5cdFx0XHRyaWdodDoge1xuXHRcdFx0XHRpY29uOiAnYWxpZ24tcHVsbC1yaWdodCcsXG5cdFx0XHRcdHRpdGxlOiBfXyggJ1Nob3cgTWVkaWEgb24gUmlnaHQgU2lkZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgdG9vbGJhckNvbnRyb2xzID0gKFxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxUb29sYmFyXG5cdFx0XHRcdFx0Y29udHJvbHM9eyBPYmplY3Qua2V5cyhNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTKS5tYXAoY29udHJvbCA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQuLi5NRURJQV9BTElHTk1FTlRTX0NPTlRST0xTW2NvbnRyb2xdLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7IHNldEF0dHJpYnV0ZXMoeyBtZWRpYVBvc2l0aW9uOiBjb250cm9sIH0gKX0sXG5cdFx0XHRcdFx0XHRcdGlzQWN0aXZlOiBtZWRpYVBvc2l0aW9uID09PSBjb250cm9sXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGhhc0ltYWdlcyAmJiA8VG9vbGJhcj5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdHR5cGUgPSBcImltYWdlXCJcblx0XHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0XHRnYWxsZXJ5XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHsgZ2FsbGVyeUltYWdlcy5tYXAoICggaW1hZ2UgKSA9PiBpbWFnZS5pZCApIH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyB1cGRhdGVJbWFnZXMgfVxuXHRcdFx0XHRcdFx0cmVuZGVyID0geyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29tcG9uZW50cy1pY29uLWJ1dHRvbiBjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgTWVkaWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj1cImVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9IHsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3BlbigpO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1Rvb2xiYXI+IH1cblx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0eyB0b29sYmFyQ29udHJvbHMgfVxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9sc1xufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9sc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UmFkaW9Db250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jbGFzcyBJbnNwZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoIHByb3BzICkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhU3R5bGUsXG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdFx0eyBmYWxzZSAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdNZWRpYSBBcmVhJywgJ19fcGx1Z2luX3R4dGQnICkgfSAgaW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ01lZGlhIFN0eWxlJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgbWVkaWFTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBtZWRpYVN0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnV2VsbC1vcmdhbml6ZWQgR3JpZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NpbXBsZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ092ZXJsYXAgTGF5ZXJlZCBHcmlkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnb3ZlcmxhcCcgfVxuXHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnQXV0b21hdGljYWxseSBjcm9wIGFuZCBzY2FsZSBpbWFnZXMgdG8gZmlsbCB0aGUgYmxvY2sgY29udGFpbmVyLicsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7IG1lZGlhU3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYVN0eWxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0NvbnRlbnQgQXJlYScsICdfX3BsdWdpbl90eHRkJykgfSBpbml0aWFsT3BlbiA9IHsgdHJ1ZSB9PlxuXHRcdFx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbCA9IHsgX18oICdFbXBoYXNpcyBMZXZlbCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7IGNvbnRlbnRTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBjb250ZW50U3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zID0geyBbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdCYXNpYycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Jhc2ljJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTW9kZXJhdGUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtb2RlcmF0ZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hpZ2hsaWdodGVkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnaGlnaGxpZ2h0ZWQnIH1cblx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyBjb250ZW50U3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50U3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0Jsb2NrIEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcpIH0gaW5pdGlhbE9wZW4gPSB7IHRydWUgfT5cblx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWwgPSB7IF9fKCAnRW1waGFzaXMgTGV2ZWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0geyBibG9ja1N0eWxlIH1cblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQgPSB7IGJsb2NrU3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zID0geyBbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdCYXNpYycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Jhc2ljJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTW9kZXJhdGUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtb2RlcmF0ZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hpZ2hsaWdodGVkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnaGlnaGxpZ2h0ZWQnIH1cblx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyBibG9ja1N0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgYmxvY2tTdHlsZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3BlY3RvcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL2luc3BlY3Rvci5qcyIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3MsXG5cdE1lZGlhUGxhY2Vob2xkZXJcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsnY29yZS9idXR0b24nLCAnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9oZWFkaW5nJ107XG5jb25zdCBURU1QTEFURSA9IFtcblx0Wydjb3JlL2hlYWRpbmcnLCB7Y29udGVudDogJ1Nob290IGZvciB0aGUgbW9vbiwgRXZlbiBpZiBZb3UgTWlzcyBpdCcsIGxldmVsOiA0fV0sXG5cdFsnY29yZS9oZWFkaW5nJywge2NvbnRlbnQ6ICdXZWxjb21lIHRvIG91ciBwbGFuZXQsIGxvb2sgYW5kIGZlZWwgbWF0dGVycyEnLCBsZXZlbDogMn1dLFxuXHRbJ2NvcmUvcGFyYWdyYXBoJywge2NvbnRlbnQ6ICdXZVxcJ3ZlIGFsd2F5cyBkZWZpbmVkIG91cnNlbHZlcyBieSB0aGUgYWJpbGl0eSB0byBvdmVyY29tZSB0aGUgaW1wb3NzaWJsZS4gQW5kIHdlIGNvdW50IHRoZXNlIG1vbWVudHMuIFRoZXNlIG1vbWVudHMgd2hlbiB3ZSBkYXJlIHRvIGFpbSBoaWdoZXIsIHRvIGJyZWFrIGJhcnJpZXJzLCB0byByZWFjaCBmb3IgdGhlIHN0YXJzLCB0byBtYWtlIHRoZSB1bmtub3duIGtub3duLid9XSxcblx0Wydjb3JlL2J1dHRvbicsIHt0ZXh0OiAnRGlzY292ZXIgTW9yZSd9XVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGlzU2VsZWN0ZWQsXG5cdFx0XHR1cGRhdGVJbWFnZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhU3R5bGUsXG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdFx0bWVkaWFQb3NpdGlvbixcblx0XHRcdGltYWdlcyxcblx0XHRcdGFsaWdubWVudFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0Y29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRgbm92YS1tZWRpYWAsXG5cdFx0XHRgaGFzLWltYWdlLW9uLXRoZS0ke21lZGlhUG9zaXRpb259YCxcblx0XHRcdGBibG9jay1pcy0ke2Jsb2NrU3R5bGV9YCxcblx0XHRcdGBjb250ZW50LWlzLSR7Y29udGVudFN0eWxlfWAsXG5cdFx0XHRgZ3JpZC1pcy0ke21lZGlhU3R5bGV9YFxuXHRcdCk7XG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCAoIChpbWFnZSkgID0+IEpTT04ucGFyc2UoaW1hZ2UpKTtcblxuXHRcdGNvbnN0IGRpc3BsYXlJbWFnZXMgPSAoaW1hZ2VzKSA9PiB7XG5cblx0XHRcdGlmICggMCA9PT0gaW1hZ2VzLmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdGljb24gPSBcImZvcm1hdC1nYWxsZXJ5XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gXCJub3ZhLW1lZGlhX19wbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyB1cGRhdGVJbWFnZXMgfVxuXHRcdFx0XHRcdFx0XHRhY2NlcHQgPSBcImltYWdlLypcIlxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXMgPSB7IFsgJ2ltYWdlJyBdIH1cblx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdGdhbGxlcnlJbWFnZXMubWFwKCAoaW1hZ2UpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0nbm92YS1tZWRpYV9faW1hZ2UnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgYWx0PXsgaW1hZ2UuYWx0IH0gc3JjPXsgaW1hZ2UudXJsIH0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2lubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2tcIiBkYXRhLWFsaWduPVwid2lkZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19sYXlvdXRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19jb250ZW50IG5vdmEtbWVkaWFfX2lubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17QUxMT1dFRF9CTE9DS1N9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fYXNpZGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheUltYWdlcyggaW1hZ2VzICl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvcHJldmlldy5qcyIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRDb21wb25lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0bWVkaWFTdHlsZSxcblx0XHRcdFx0Y29udGVudFN0eWxlLFxuXHRcdFx0XHRibG9ja1N0eWxlLFxuXHRcdFx0XHRtZWRpYVBvc2l0aW9uLFxuXHRcdFx0XHRpbWFnZXNcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXG5cdFx0Y29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRgbm92YS1tZWRpYWAsXG5cdFx0XHRgaGFzLWltYWdlLW9uLXRoZS0ke21lZGlhUG9zaXRpb259YCxcblx0XHRcdGBibG9jay1pcy0ke2Jsb2NrU3R5bGV9YCxcblx0XHRcdGBjb250ZW50LWlzLSR7Y29udGVudFN0eWxlfWAsXG5cdFx0XHRgZ3JpZC1pcy0ke21lZGlhU3R5bGV9YCxcblx0XHRcdGBhbGlnbmZ1bGxgXG5cdFx0KTtcblxuXG5cdFx0Y29uc3QgZ2FsbGVyeUltYWdlcyA9IGltYWdlcy5tYXAoICggaW1hZ2UgKSA9PiBKU09OLnBhcnNlKCBpbWFnZSApICk7XG5cblx0XHRjb25zdCBkaXNwbGF5SW1hZ2VzID0gKCBpbWFnZXMgKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtbWVkaWFfX2ltYWdlJz5cblx0XHRcdFx0XHRcdFx0PGltZyBhbHQ9e2ltYWdlLmFsdH0gc3JjPXtpbWFnZS51cmx9Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSApXG5cdFx0XHQpXG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9faW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19sYXlvdXQgYWxpZ253aWRlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2NvbnRlbnQgbm92YS1tZWRpYV9faW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19hc2lkZVwiPlxuXHRcdFx0XHRcdFx0XHR7ZGlzcGxheUltYWdlcyggaW1hZ2VzICl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9zYXZlLmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL3NsaWRlc2hvdycsXG5cdHtcblx0XHR0aXRsZTogX18oICdTbGlkZXNob3cgTWUgdGhlIFdheScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgbW9yZSB0aGFuIG9uZSBwaWVjZSBvZiBjb250ZW50IGluIGEgc2luZ2xlLCBjb3ZldGVkIHNwYWNlLicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGljb246IGljb25zLnNsaWRlc2hvdyxcblx0XHRjYXRlZ29yeTogJ25vdmEtYnktcGl4ZWxncmFkZScsXG5cdFx0ZWRpdCxcblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50Lz5cblx0XHR9LFxuXHRcdGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2V0dGluZ3MoKTtcblx0XHRcdHJldHVybiBzZXR0aW5ncy5hbGlnbldpZGUgPyB7XG5cdFx0XHRcdCdkYXRhLWFsaWduJzogJ2Z1bGwnXG5cdFx0XHR9IDoge31cblx0XHR9LFxuXHR9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdExheW91dFBhbmVsLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRDb2xvclRvb2xiYXIsXG5cdEdhbGxlcnlQcmV2aWV3LFxuXHRHYWxsZXJ5UGxhY2Vob2xkZXIsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IHNodWZmbGVBcnJheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3V0aWxcIjtcblxuaW1wb3J0IFNsaWRlc2hvd1ByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcblxuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhZGlvQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3QgZGVmYXVsdEdhbGxlcnlJbWFnZXMgPSBbe1xuXHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9fbnFBcGdHLVFyWS8xNjAweDkwMFwiLFxuXHRcImlkXCI6IC0xLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9fbnFBcGdHLVFyWS8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufSwge1xuXHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9HdF80aU1CN2hZMC8xNjAweDkwMFwiLFxuXHRcImFsdFwiOiBcIlRoaXMgaXMgYSBjYXRjaHkgaW1hZ2UgdGl0bGVcIixcblx0XCJjYXB0aW9uXCI6IFwiQSBicmlsbGlhbnQgY2FwdGlvbiB0byBleHBsYWluIGl0cyBjYXRjaGluZXNzXCIsXG5cdFwiaWRcIjogLTIsXG5cdFwic2l6ZXNcIjoge1xuXHRcdFwidGh1bWJuYWlsXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL0d0XzRpTUI3aFkwLzE1MHgxNTBcIlxuXHRcdH0sXG5cdFx0XCJsYXJnZVwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9HdF80aU1CN2hZMC8xNjAweDkwMFwiLFxuXHRcdFx0XCJ3aWR0aFwiOiAxNjAwLFxuXHRcdFx0XCJoZWlnaHRcIjogOTAwXG5cdFx0fVxuXHR9XG59LCB7XG5cdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzF2S1Rud0xNZHFzLzE2MDB4OTAwXCIsXG5cdFwiaWRcIjogLTMsXG5cdFwic2l6ZXNcIjoge1xuXHRcdFwidGh1bWJuYWlsXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzF2S1Rud0xNZHFzLzE1MHgxNTBcIlxuXHRcdH0sXG5cdFx0XCJsYXJnZVwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNjAweDkwMFwiLFxuXHRcdFx0XCJ3aWR0aFwiOiAxNjAwLFxuXHRcdFx0XCJoZWlnaHRcIjogOTAwXG5cdFx0fVxuXHR9XG59XTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkSW5kZXg6IDBcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlc1xuXHRcdFx0fSxcblx0XHRcdGNsaWVudElkXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggKSB7XG5cdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBjbGllbnRJZCwge1xuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzOiBzaHVmZmxlQXJyYXkoIGRlZmF1bHRHYWxsZXJ5SW1hZ2VzLnNsaWNlKDApIClcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRvblByZXZBcnJvd0NsaWNrKCkge1xuXHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyBnYWxsZXJ5SW1hZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBzZWxlY3RlZEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gKCBzZWxlY3RlZEluZGV4ICsgZ2FsbGVyeUltYWdlcy5sZW5ndGggLSAxICkgJSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aDtcblx0XHR0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXg6IG5ld0luZGV4IH0gKTtcblx0fVxuXG5cdG9uTmV4dEFycm93Q2xpY2soKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzOiB7IGdhbGxlcnlJbWFnZXMgfSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHNlbGVjdGVkSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSAoIHNlbGVjdGVkSW5kZXggKyAxICkgJSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aDtcblx0XHR0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXg6IG5ld0luZGV4IH0gKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0c2xpZGVzaG93VHlwZSxcblx0XHRcdFx0Z2FsbGVyeUltYWdlcyxcblx0XHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0XHRpc1NlbGVjdGVkLFxuXHRcdFx0Y2xhc3NOYW1lXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRsZXQgeyBzZWxlY3RlZEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0aWYgKCBzZWxlY3RlZEluZGV4ID49IGdhbGxlcnlJbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0c2VsZWN0ZWRJbmRleCA9IGdhbGxlcnlJbWFnZXMubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXG5cdFx0XHRcdDxTbGlkZXNob3dQcmV2aWV3XG5cdFx0XHRcdFx0eyAuLi50aGlzLnByb3BzIH1cblx0XHRcdFx0XHRwcmV2aWV3SW1hZ2U9eyBnYWxsZXJ5SW1hZ2VzWyBzZWxlY3RlZEluZGV4IF0gfVxuXHRcdFx0XHRcdG9uUHJldkFycm93Q2xpY2s9eyB0aGlzLm9uUHJldkFycm93Q2xpY2suYmluZCggdGhpcyApIH1cblx0XHRcdFx0XHRvbk5leHRBcnJvd0NsaWNrPXsgdGhpcy5vbk5leHRBcnJvd0NsaWNrLmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ25vdmEtYmxvY2tzLXNsaWRlc2hvdy10eXBlLXBhbmVsJyB9XG5cdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnU2xpZGVzaG93IFR5cGUnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBzbGlkZXNob3dUeXBlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzbGlkZXNob3dUeXBlID0+IHNldEF0dHJpYnV0ZXMoIHsgc2xpZGVzaG93VHlwZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnR2FsbGVyeScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdnYWxsZXJ5J1xuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdjdXN0b20nXG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnUHJvamVjdHMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAncHJvamVjdHMnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsgISEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEdhbGxlcnlQcmV2aWV3XG5cdFx0XHRcdFx0XHRcdGdhbGxlcnlJbWFnZXM9eyBnYWxsZXJ5SW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0b25TZWxlY3RJbWFnZT17IHNlbGVjdGVkSW5kZXggPT4geyB0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXggfSApIH0gfVxuXHRcdFx0XHRcdFx0XHRpc1NlbGVjdGVkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgc2VsZWN0ZWRJbmRleCB9XG5cdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHQ8R2FsbGVyeVBsYWNlaG9sZGVyIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyA9PT0gc2xpZGVzaG93VHlwZSAmJiA8RnJhZ21lbnQ+XG5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0NvbnRlbnQgUG9zaXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4ue1xuXHRcdFx0XHRcdFx0XHRcdC4uLnRoaXMucHJvcHMsXG5cdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4udGhpcy5wcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2s6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gfSAvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxDb2xvclBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbWluSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWluSGVpZ2h0OiBwYXJzZUludCggbWluSGVpZ2h0LCAxMCApIH0gKVxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdBdXRvJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMFxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA1MFxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1R3byBUaGlyZHMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2NlxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1RocmVlIFF1YXJ0ZXJzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNzVcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdGdWxsIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDEwMFxuXHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYXJhbGxheFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyAhPT0gc2xpZGVzaG93VHlwZSAmJiA8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0NvbWluZyBTb29uJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0XHQ8QWxpZ25tZW50VG9vbGJhciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDxDb2xvclRvb2xiYXIgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9lZGl0LmpzIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI0NTA5NzZcbmV4cG9ydCBjb25zdCBzaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiggYXJyYXkgKSB7XG5cdHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuXHQvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuXHR3aGlsZSAoIDAgIT09IGN1cnJlbnRJbmRleCApIHtcblxuXHRcdC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuXHRcdHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCApO1xuXHRcdGN1cnJlbnRJbmRleCAtPSAxO1xuXG5cdFx0Ly8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuXHRcdHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcblx0XHRhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuXHRcdGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGFycmF5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy91dGlsLmpzIiwiY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCB7XG5cdEdhbGxlcnlQbGFjZWhvbGRlclxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuaW1wb3J0IFNsaWRlc2hvd0JhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuY29uc3Qge1xuXHRNZWRpYVVwbG9hZCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVzaG93UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKCB0aGlzICkgKTtcblx0XHR0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcblx0fVxuXG5cdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkaW1lbnNpb25zOiB7XG5cdFx0XHRcdHdpZHRoOiB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyQ29udGVudCgpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0XHQvLyBhbGlnbm1lbnRcblx0XHRcdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHRcdC8vIGNvbG9yc1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0cmVuZ3RoLFxuXHRcdFx0XHQvLyBtZWRpYVxuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzXG5cdFx0XHR9LFxuXHRcdFx0cHJldmlld0ltYWdlLFxuXHRcdFx0Y2xhc3NOYW1lXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtc2xpZGVzaG93IGlzLXJlYWR5Jyxcblx0XHRcdGBub3ZhLXUtdmFsaWduLSR7dmVydGljYWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdGBub3ZhLXUtY29udGVudC13aWR0aC0ke2NvbnRlbnRXaWR0aH1gLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gXG5cdFx0XVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0c2xpZGVzaG93OiB7IGNvbG9yOiBjb250ZW50Q29sb3IgfSxcblx0XHR9XG5cblx0XHRpZiAoICEhIGFwcGx5TWluaW11bUhlaWdodEJsb2NrICkge1xuXHRcdFx0c3R5bGVzLnNsaWRlc2hvdy5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAndmgnXG5cdFx0fVxuXG5cdFx0bGV0IG1heEFzcGVjdFJhdGlvID0gMDtcblx0XHRsZXQgbWVkaWFNaW5IZWlnaHQgPSAwO1xuXHRcdGxldCBzbGlkZXJXaWR0aCA9IDA7XG5cblx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggaW1hZ2UgPT4ge1xuXHRcdFx0aWYgKCAhISBpbWFnZS5zaXplcyAmJiAhISBpbWFnZS5zaXplcy5sYXJnZSAmJiAhISBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCApIHtcblx0XHRcdFx0Y29uc3QgYXNwZWN0UmF0aW8gPSBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCAvIGltYWdlLnNpemVzLmxhcmdlLmhlaWdodDtcblx0XHRcdFx0bWF4QXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbyA+IG1heEFzcGVjdFJhdGlvID8gYXNwZWN0UmF0aW8gOiBtYXhBc3BlY3RSYXRpbztcblx0XHRcdFx0bWVkaWFNaW5IZWlnaHQgPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggLyBtYXhBc3BlY3RSYXRpbztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRzdHlsZXMuc2xpZGVyID0ge1xuXHRcdFx0bWluSGVpZ2h0OiBNYXRoLm1heCggbWVkaWFNaW5IZWlnaHQsIG1heEFzcGVjdFJhdGlvICkgKyAncHgnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0eyAhISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAmJiA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gc3R5bGU9eyBzdHlsZXMuc2xpZGVzaG93IH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVyXCIgc3R5bGU9eyBzdHlsZXMuc2xpZGVyIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19zbGlkZVwiPlxuXHRcdFx0XHRcdFx0XHR7IHByZXZpZXdJbWFnZSAmJiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PFNsaWRlc2hvd0JhY2tncm91bmQgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250ZW50IG5vdmEtdS1jb250ZW50LXBhZGRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtYWxpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57IHByZXZpZXdJbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+eyBwcmV2aWV3SW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUHJldkFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV4dEFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHR7ICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdCA8R2FsbGVyeVBsYWNlaG9sZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2Fycm93IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tcHJldiBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLWRpc2FibGVkXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIj48L2Rpdj5cblx0XHRcdFx0XHQgPC9kaXY+XG5cdFx0XHRcdCA8L0ZyYWdtZW50PiB9XG5cdFx0ICAgIDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgZGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9eyBlbCA9PiAoIHRoaXMuY29udGFpbmVyID0gZWwgKSB9PlxuXHRcdFx0XHR7IGRpbWVuc2lvbnMgJiYgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJpbXBvcnQgd2l0aFBhcmFsbGF4IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1wYXJhbGxheCc7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNsYXNzIFNsaWRlc2hvd0JhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHt9O1xuXG5cdFx0aWYgKCBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyApIHtcblx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kXCIgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX21lZGlhXCIgc3JjPXsgdGhpcy5wcm9wcy5wcmV2aWV3SW1hZ2Uuc2l6ZXMubGFyZ2UudXJsIH0gYWx0PVwiXCIgc3R5bGU9eyBzdHlsZXMgfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJhbGxheCggU2xpZGVzaG93QmFja2dyb3VuZCApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==