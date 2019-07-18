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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

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

var _defineProperty = __webpack_require__(73);

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

var _setPrototypeOf = __webpack_require__(95);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(99);

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
var uid = __webpack_require__(26);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return swap; });
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
    { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M15.54 5.54L13.77 7.3L12 5.54L10.23 7.3L8.46 5.54L12 2L15.54 5.54ZM18.46 15.54L16.7 13.77L18.46 12L16.7 10.23L18.46 8.46L22 12L18.46 15.54ZM8.46 18.46L10.23 16.7L12 18.46L13.77 16.7L15.54 18.46L12 22L8.46 18.46ZM5.54 8.46L7.3 10.23L5.54 12L7.3 13.77L5.54 15.54L2 12L5.54 8.46Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z", fill: "currentColor" })
);

var invert = wp.element.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M20 15.3099L23.31 11.9999L20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099ZM12 17.9999V5.99994C15.31 5.99994 18 8.68994 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999Z", fill: "currentColor" })
);

var swap = wp.element.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M18 2L20 6H18L16 2H13L15 6H13L11 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V2H18ZM20 14H10V4.4L11.8 8H20V14Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M14 20H4V10H7V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20V17H14V20Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M5 19H13L11.41 17H9.24L8.4 18.1L7 16.3L5 19Z", fill: "currentColor" })
);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(102);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(36);
var dP = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
var createDesc = __webpack_require__(28);
module.exports = __webpack_require__(11) ? function (object, key, value) {
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
var aFunction = __webpack_require__(27);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_options__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_controls__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alignment_controls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__height_controls__ = __webpack_require__(133);
/* unused harmony reexport AlignmentControls */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__alignment_controls__["b"]; });
/* unused harmony reexport ColorControls */
/* unused harmony reexport ColorPanel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__gallery_options__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__gallery_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__height_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_panel__["a"]; });
/* unused harmony reexport OverlayControls */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__parallax_panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__height_controls__["b"]; });













/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
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
var uid = __webpack_require__(26);
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
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(80);
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
var aFunction = __webpack_require__(27);

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

module.exports = !__webpack_require__(11) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(35)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(76);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(86);

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

var $at = __webpack_require__(78)(true);

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
var $iterCreate = __webpack_require__(79);
var setToStringTag = __webpack_require__(29);
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
var arrayIndexOf = __webpack_require__(81)(false);
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

__webpack_require__(83);
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

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(28);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
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
var anObject = __webpack_require__(10);
var aFunction = __webpack_require__(27);
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
var invoke = __webpack_require__(120);
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

var anObject = __webpack_require__(10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__block_vertical_alignment_toolbar__ = __webpack_require__(132);











var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
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
							icon: __WEBPACK_IMPORTED_MODULE_5__icons__["d" /* alignment */],
							"aria-expanded": isOpen,
							label: __('Content Alignment', '__plugin_txtd'),
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
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__block_vertical_alignment_toolbar__["a" /* default */], {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_editor_scss__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_hero__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_media__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_slideshow__ = __webpack_require__(148);







/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(70);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/hero', {
	title: __('Hero of the Galaxy', '__plugin_txtd'),
	description: __('A great way to get your visitors acquainted with your content.', '__plugin_txtd'),
	category: "nova-by-pixelgrade",
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* hero */],
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
/* 70 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls__ = __webpack_require__(136);













var __ = wp.i18n.__;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;


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

			return [wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__preview__["a" /* default */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_9__controls__["a" /* default */], this.props)
			), wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["f" /* LayoutPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["e" /* HeightPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["h" /* ScrollIndicatorPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["g" /* ParallaxPanel */], this.props)
			)];
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
module.exports = __webpack_require__(5).Object.getPrototypeOf;


/***/ }),
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(55);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(28);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(82);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(84);
var step = __webpack_require__(85);
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
/* 84 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(58);
__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(11);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(50);
var META = __webpack_require__(89).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(26);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(90);
var isArray = __webpack_require__(91);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(92);
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
  __webpack_require__(30).f = $propertyIsEnumerable;
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(30);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(5).Object.setPrototypeOf;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(98).set });


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(10);
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(105) });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(11);
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(30);
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
/* 106 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__padding__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__width__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__(109);
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
/* 107 */
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
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GalleryPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(12);
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(48);
__webpack_require__(55);
__webpack_require__(114);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(59);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(115);
var forOf = __webpack_require__(116);
var speciesConstructor = __webpack_require__(60);
var task = __webpack_require__(61).set;
var microtask = __webpack_require__(121)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(62);
var userAgent = __webpack_require__(122);
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
  Internal.prototype = __webpack_require__(123)($Promise.prototype, {
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
__webpack_require__(29)($Promise, PROMISE);
__webpack_require__(124)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(125)(function (iter) {
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
/* 115 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(117);
var isArrayIter = __webpack_require__(118);
var anObject = __webpack_require__(10);
var toLength = __webpack_require__(53);
var getIterFn = __webpack_require__(119);
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(10);
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(22);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 119 */
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
/* 120 */
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
/* 121 */
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(11);
var SPECIES = __webpack_require__(7)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 125 */
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
/* 126 */
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
/* 127 */
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
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColorControls */
/* unused harmony export ColorPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorToolbar; });
/* unused harmony export OverlayControls */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(25);









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
							icon: __WEBPACK_IMPORTED_MODULE_6__icons__["f" /* invert */],
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
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockHorizontalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(9);

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Toolbar = wp.components.Toolbar;
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

/**
 * Internal dependencies
 */




var BLOCK_ALIGNMENTS_CONTROLS = {
	left: {
		icon: __WEBPACK_IMPORTED_MODULE_1__icons__["c" /* alignTop */],
		title: __('Align Left', '__plugin_txtd')
	},
	center: {
		icon: __WEBPACK_IMPORTED_MODULE_1__icons__["b" /* alignCenter */],
		title: __('Align Middle', '__plugin_txtd')
	},
	right: {
		icon: __WEBPACK_IMPORTED_MODULE_1__icons__["a" /* alignBottom */],
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockVerticalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(9);

/**
 * WordPress dependencies
 */
var _x = wp.i18n._x;
var Toolbar = wp.components.Toolbar;
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

/**
 * Internal dependencies
 */




var BLOCK_ALIGNMENTS_CONTROLS = {
	top: {
		icon: __WEBPACK_IMPORTED_MODULE_1__icons__["c" /* alignTop */],
		title: _x('Vertically Align Top', 'Block vertical alignment setting')
	},
	center: {
		icon: __WEBPACK_IMPORTED_MODULE_1__icons__["b" /* alignCenter */],
		title: _x('Vertically Align Middle', 'Block vertical alignment setting')
	},
	bottom: {
		icon: __WEBPACK_IMPORTED_MODULE_1__icons__["a" /* alignBottom */],
		title: _x('Vertically Align Bottom', 'Block vertical alignment setting')
	}
};

var DEFAULT_CONTROLS = ['top', 'center', 'bottom'];
var DEFAULT_CONTROL = 'top';

function BlockVerticalAlignmentToolbar(_ref) {
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
		label: _x('Change Alignment', 'Block vertical alignment setting label'),
		controls: controls.map(function (control) {
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, BLOCK_ALIGNMENTS_CONTROLS[control], {
				isActive: value === control,
				onClick: applyOrUnset(control)
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

/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-vertical-alignment-toolbar/README.md
 */
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
}))(BlockVerticalAlignmentToolbar));

/***/ }),
/* 133 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(31);








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

var debouncedOnSubscribe = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* debounce */])(function () {
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
/* 134 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background__ = __webpack_require__(135);





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


			var styles = {
				opacity: 1
			};

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(25);







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
			var setAttributes = this.props.setAttributes;


			return wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["a" /* AlignmentToolbar */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["b" /* ColorToolbar */], this.props),
				wp.element.createElement(
					Toolbar,
					null,
					wp.element.createElement(MediaUpload, {
						allowedTypes: ALLOWED_MEDIA_TYPES,
						onSelect: function onSelect(media) {
							return setAttributes({ media: media });
						},
						render: function render(_ref) {
							var open = _ref.open;

							return wp.element.createElement(IconButton, {
								className: "components-icon-button components-toolbar__control",
								label: __('Change Media', '__plugin_txtd'),
								icon: __WEBPACK_IMPORTED_MODULE_5__icons__["i" /* swap */],
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
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(138);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/media', {
	title: __('Media Card Constellation', '__plugin_txtd'),
	description: __('Display media objects alongside short pieces of content.', '__plugin_txtd'),
	category: 'nova-by-pixelgrade',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["g" /* media */],
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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(139);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(146);







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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(142);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons__ = __webpack_require__(9);









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
								label: __('Change Media', '__plugin_txtd'),
								icon: __WEBPACK_IMPORTED_MODULE_7__icons__["i" /* swap */],
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 144 */
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
/* 145 */
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
			var contentStyle = attributes.contentStyle,
			    blockStyle = attributes.blockStyle;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					InspectorControls,
					null,
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
/* 146 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);







var Component = wp.element.Component;
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
			    updateImages = _props.updateImages;
			var contentStyle = attributes.contentStyle,
			    blockStyle = attributes.blockStyle,
			    mediaPosition = attributes.mediaPosition,
			    images = attributes.images;


			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'block-is-' + blockStyle, 'content-is-' + contentStyle);

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
/* 147 */
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
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(149);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/slideshow', {
	title: __('Slideshow Me the Way', '__plugin_txtd'),
	description: __('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
	category: 'nova-by-pixelgrade',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["h" /* slideshow */],
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
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_util__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview__ = __webpack_require__(151);






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
						!!galleryImages.length && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["d" /* GalleryPreview */], {
							galleryImages: galleryImages,
							onSelectImage: function onSelectImage(selectedIndex) {
								_this2.setState({ selectedIndex: selectedIndex });
							},
							isSelected: isSelected,
							selected: selectedIndex
						}),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["c" /* GalleryPlaceholder */], this.props)
					),
					'gallery' === slideshowType && wp.element.createElement(
						Fragment,
						null,
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["f" /* LayoutPanel */], this.props),
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
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["g" /* ParallaxPanel */], this.props)
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
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["a" /* AlignmentToolbar */], this.props),
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["b" /* ColorToolbar */], this.props)
				)
			);
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 150 */
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
/* 151 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__background__ = __webpack_require__(152);





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
				slideshow: { color: contentColor },
				content: {},
				foreground: {}
			};

			if (contentPadding === 'custom') {
				styles.foreground.paddingTop = contentPaddingCustom + '%';
				styles.foreground.paddingBottom = contentPaddingCustom + '%';
			}

			if (!!applyMinimumHeightBlock) {
				styles.slideshow.minHeight = minHeight + 'vh';
			}

			if (contentWidth === 'custom') {
				styles.content.maxWidth = contentWidthCustom + '%';
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
									{ className: 'nova-slideshow__content nova-u-content-padding', style: styles.foreground },
									wp.element.createElement(
										'div',
										{ className: 'nova-u-content-align' },
										wp.element.createElement(
											'div',
											{ className: 'nova-u-content-width', style: styles.content },
											!!previewImage.alt && wp.element.createElement(
												'h2',
												null,
												previewImage.alt
											),
											!!previewImage.caption && wp.element.createElement(
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
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components__["c" /* GalleryPlaceholder */], this.props),
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
/* 152 */
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


			var styles = {
				opacity: 1
			};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTQ0YmIxZWQ3NGU1ZDU2OGRhZDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZXJvL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC1wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvcGFkZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvd2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFyYWxsYXgtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS1vcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmxvY2staG9yaXpvbnRhbC1hbGlnbm1lbnQtdG9vbGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9jay12ZXJ0aWNhbC1hbGlnbm1lbnQtdG9vbGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWlnaHQtY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZXJvL3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZXJvL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZXJvL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZWRpYS9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21lZGlhL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVkaWEvaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVkaWEvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zbGlkZXNob3cvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIndwIiwiY29tcG9uZW50cyIsIlNWRyIsIlBhdGgiLCJub3ZhIiwiaGVybyIsIm1lZGlhIiwic2xpZGVzaG93IiwiYWxpZ25Cb3R0b20iLCJhbGlnbkNlbnRlciIsImFsaWduVG9wIiwiYWxpZ25tZW50IiwiaW52ZXJ0Iiwic3dhcCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIkRyb3Bkb3duIiwiSWNvbkJ1dHRvbiIsIlBhbmVsUm93IiwiVG9vbGJhciIsIkFsaWdubWVudFRvb2xiYXIiLCJpc09wZW4iLCJvblRvZ2dsZSIsImljb25zIiwib25DbG9zZSIsInByb3BzIiwiQWxpZ25tZW50Q29udHJvbHMiLCJhdHRyaWJ1dGVzIiwiYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2siLCJob3Jpem9udGFsQWxpZ25tZW50IiwidmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiZGF0YSIsInNlbGVjdCIsImdldFNlbGVjdGVkQmxvY2siLCJpbm5lckJsb2NrcyIsIm1hcCIsImRpc3BhdGNoIiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiYmxvY2siLCJjbGllbnRJZCIsImFsaWduIiwid2l0aFBhcmFsbGF4IiwiV3JhcHBlZENvbXBvbmVudCIsInN0YXRlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwcm9ncmVzcyIsInVwZGF0ZUhhbmRsZXIiLCJ1cGRhdGVEaW1lbnNpb25zIiwiYmluZCIsInNjcm9sbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyQm94IiwiY29udGFpbmVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsIm9mZnNldEhlaWdodCIsImFjdHVhbFByb2dyZXNzIiwiTWF0aCIsIm1heCIsIm1pbiIsInNldFN0YXRlIiwic2Nyb2xsVG9wIiwiZGltZW5zaW9ucyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJlbmFibGVQYXJhbGxheCIsInBhcmFsbGF4QW1vdW50IiwicGFyYWxsYXhDdXN0b21BbW91bnQiLCJhY3R1YWxQYXJhbGxheEFtb3VudCIsInBhcnNlSW50IiwibmV3SGVpZ2h0Iiwic2NhbGUiLCJvZmZzZXRZIiwibW92ZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJlbCIsImdldFBhcmFsbGF4U3R5bGVzIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJJbm5lckJsb2NrcyIsImJsb2NrRWRpdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImVkaXQiLCJzYXZlIiwiZ2V0RWRpdFdyYXBwZXJQcm9wcyIsInNldHRpbmdzIiwiZ2V0U2V0dGluZ3MiLCJhbGlnbldpZGUiLCJJbnNwZWN0b3JDb250cm9scyIsImVkaXRvckRhdGEiLCJ1cGRhdGVCbG9ja3MiLCJnZXRCbG9ja3MiLCJmaWx0ZXIiLCJuYW1lIiwiaGVyb0Jsb2NrSW5kZXgiLCJhcHBseU1pbmltdW1IZWlnaHQiLCJzY3JvbGxJbmRpY2F0b3IiLCJzY3JvbGxJbmRpY2F0b3JCbG9jayIsImJsb2NrSW5kZXgiLCJmaW5kSW5kZXgiLCJ0ZXN0QmxvY2siLCJibG9ja0xpc3QiLCJkZWJvdW5jZWRPblN1YnNjcmliZSIsIm5ld0Jsb2NrTGlzdCIsImJsb2NrTGlzdENoYW5nZWQiLCJsZW5ndGgiLCJzb21lIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJFZGl0IiwiUGFuZWxCb2R5IiwiTGF5b3V0UGFuZWwiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiUmFuZ2VDb250cm9sIiwiUGFkZGluZ0NvbnRyb2xzIiwiY29udGVudFBhZGRpbmciLCJjb250ZW50UGFkZGluZ0N1c3RvbSIsImNvbnRlbnRQYWRkaW5nT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJXaWR0aENvbnRyb2xzIiwiY29udGVudFdpZHRoIiwiY29udGVudFdpZHRoQ3VzdG9tIiwiY29udGVudFdpZHRoT3B0aW9ucyIsIlJhZGlvQ29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJQYXJhbGxheFBhbmVsIiwiRm9ybUZpbGVVcGxvYWQiLCJTZWxlY3RDb250cm9sIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVBsYWNlaG9sZGVyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkdhbGxlcnlQbGFjZWhvbGRlciIsImdhbGxlcnlJbWFnZXMiLCJwcm9taXNlcyIsImltYWdlIiwiYXBpUmVxdWVzdCIsInBhdGgiLCJpZCIsInRoZW4iLCJuZXdJbWFnZSIsImFsbCIsInNpemVzIiwibGFyZ2UiLCJ1cmwiLCJzZWxlY3RlZCIsIm9uU2VsZWN0SW1hZ2UiLCJvbkNoYW5nZSIsImhhc0ltYWdlcyIsImluc3RydWN0aW9ucyIsIm9uQ2hhbmdlR2FsbGVyeSIsInVuZGVmaW5lZCIsIkdhbGxlcnlQcmV2aWV3IiwiaXNTZWxlY3RlZCIsImltZyIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsInRodW1ibmFpbCIsIkNvbG9yUGFsZXR0ZSIsIlBhbmVsQ29sb3JTZXR0aW5ncyIsImNvbG9ycyIsImNvbG9yIiwiT3ZlcmxheUNvbnRyb2xzIiwib3ZlcmxheUZpbHRlclN0eWxlIiwib3ZlcmxheUZpbHRlclN0cmVuZ3RoIiwiQ29sb3JDb250cm9scyIsImNvbnRlbnRDb2xvciIsIkNvbG9yUGFuZWwiLCJDb2xvclRvb2xiYXIiLCJ3aXRoVmlld3BvcnRNYXRjaCIsInZpZXdwb3J0Iiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsImNyZWF0ZUNvbnRleHQiLCJmb2N1c2VkRWxlbWVudCIsInNldEZvY3VzZWRFbGVtZW50IiwiQ29uc3VtZXIiLCJQcm92aWRlciIsIkJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJERUZBVUxUX0NPTlRST0xTIiwiREVGQVVMVF9DT05UUk9MIiwiQmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhciIsImlzQ29sbGFwc2VkIiwiY29udHJvbHMiLCJhcHBseU9yVW5zZXQiLCJhY3RpdmVBbGlnbm1lbnQiLCJkZWZhdWx0QWxpZ25tZW50Q29udHJvbCIsImNvbnRyb2wiLCJpc0FjdGl2ZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJ3aXRoQmxvY2tFZGl0Q29udGV4dCIsIm1hcENvbnRleHRUb1Byb3BzIiwiT3JpZ2luYWxDb21wb25lbnQiLCJpc0xhcmdlVmlld3BvcnQiLCJnZXRCbG9ja1Jvb3RDbGllbnRJZCIsImhhc0ZpeGVkVG9vbGJhciIsIl94IiwiYm90dG9tIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJIZWlnaHRQYW5lbCIsIm1pbkhlaWdodCIsIlNjcm9sbEluZGljYXRvclBhbmVsIiwiaGVyb0Jsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImRpc3BsYXkiLCJIZXJvUHJldmlldyIsInN0eWxlcyIsImZvcmVncm91bmQiLCJjb250ZW50IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXhXaWR0aCIsImxldmVsIiwidGV4dCIsIkhlcm9CYWNrZ3JvdW5kIiwib3BhY2l0eSIsInN0eWxlIiwidHlwZSIsImZ1bGwiLCJCbG9ja0NvbnRyb2xzIiwiSGVyb0Jsb2NrQ29udHJvbHMiLCJvcGVuIiwiaW1hZ2VzIiwiYWx0IiwidXBkYXRlSW1hZ2VzIiwiQ29udHJvbHMiLCJtZWRpYVBvc2l0aW9uIiwiSlNPTiIsInBhcnNlIiwiTUVESUFfQUxJR05NRU5UU19DT05UUk9MUyIsInRvb2xiYXJDb250cm9scyIsIkluc3BlY3RvciIsImNvbnRlbnRTdHlsZSIsImJsb2NrU3R5bGUiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwiTWVkaWFQcmV2aWV3IiwiY2xhc3NOYW1lcyIsImNsYXNzbmFtZXMiLCJkaXNwbGF5SW1hZ2VzIiwiZGVmYXVsdEdhbGxlcnlJbWFnZXMiLCJzZWxlY3RlZEluZGV4Iiwic2h1ZmZsZUFycmF5Iiwic2xpY2UiLCJuZXdJbmRleCIsInNsaWRlc2hvd1R5cGUiLCJvblByZXZBcnJvd0NsaWNrIiwib25OZXh0QXJyb3dDbGljayIsImFycmF5IiwiY3VycmVudEluZGV4IiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsImZsb29yIiwicmFuZG9tIiwiU2xpZGVzaG93UHJldmlldyIsInByZXZpZXdJbWFnZSIsIm1heEFzcGVjdFJhdGlvIiwibWVkaWFNaW5IZWlnaHQiLCJzbGlkZXJXaWR0aCIsImFzcGVjdFJhdGlvIiwic2xpZGVyIiwiY2FwdGlvbiIsInJlbmRlckNvbnRlbnQiLCJTbGlkZXNob3dCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxFQUE0QyxzQjs7Ozs7OztBQ0FyRTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNSYTs7QUFFYjs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFtQzs7QUFFakU7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7QUMxQlk7O0FBRWI7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLEVBQW1COztBQUUxQzs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7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bUZBQWY7QUFGRDtBQUYwQjtBQXRCN0IsSUFERDtBQWdDQTs7OzJCQUVRO0FBQUE7O0FBQUEsT0FDQTZDLFVBREEsR0FDZSxLQUFLMUIsS0FEcEIsQ0FDQTBCLFVBREE7O0FBRVIsVUFDQztBQUFBO0FBQUEsTUFBSyxLQUFNO0FBQUEsYUFBUSxPQUFLVixTQUFMLEdBQWlCMEIsRUFBekI7QUFBQSxNQUFYO0FBQ0doQixrQkFBYyxLQUFLdU4sYUFBTDtBQURqQixJQUREO0FBS0E7Ozs7RUF4STRDL1EsUzs7QUFBekJ1USx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmckI7O0lBR0N2USxTLEdBQ0c1QixHQUFHMkIsTyxDQUROQyxTOztJQUdLZ1IsbUI7Ozs7Ozs7Ozs7OzJCQUNJO0FBQUEsMkJBTUosS0FBS3JRLEtBTkQsQ0FFUEUsVUFGTztBQUFBLE9BR04wSixrQkFITSxxQkFHTkEsa0JBSE07QUFBQSxPQUlOQyxxQkFKTSxxQkFJTkEscUJBSk07OztBQVFSLE9BQU0rQyxTQUFTO0FBQ2RTLGFBQVM7QUFESyxJQUFmOztBQUlBLE9BQUt6RCx1QkFBdUIsTUFBNUIsRUFBcUM7QUFDcENnRCxXQUFPUyxPQUFQLEdBQWlCLElBQUl4RCx3QkFBd0IsR0FBN0M7QUFDQTs7QUFFRCxVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsNEJBQWYsRUFBNEMsT0FBUSxLQUFLN0osS0FBTCxDQUFXc04sS0FBL0Q7QUFDQyxzQ0FBSyxXQUFVLHVCQUFmLEVBQXVDLEtBQU0sS0FBS3ROLEtBQUwsQ0FBVzZQLFlBQVgsQ0FBd0J2SCxLQUF4QixDQUE4QkMsS0FBOUIsQ0FBb0NDLEdBQWpGLEVBQXVGLEtBQUksRUFBM0YsRUFBOEYsT0FBUW9FLE1BQXRHO0FBREQsSUFERDtBQUtBOzs7O0VBdEJnQ3ZOLFM7O0FBeUJuQjRCLDJJQUFZQSxDQUFFb1AsbUJBQWQsQ0FBZixFIiwiZmlsZSI6Ii4vZGlzdC9qcy9lZGl0b3IuYmxvY2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk0NGJiMWVkNzRlNWQ1NjhkYWQwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuOScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGhhcyhleHBvcnRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgU1ZHLCBQYXRoIH0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgY29uc3Qgbm92YSA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDE4QzAgOC4wNTg4OCA4LjA1ODg4IDAgMTggMEMyNy45NDExIDAgMzYgOC4wNTg4OCAzNiAxOEMzNiAyNy45NDExIDI3Ljk0MTEgMzYgMTggMzZDOC4wNTg4OCAzNiAwIDI3Ljk0MTEgMCAxOFpNMTIuMDM5OCAxNEMxMi40MDY5IDEwLjYyNiAxNS4yNjUyIDggMTguNzM2OCA4SDIwLjQyMTFDMjQuNjA2OCA4IDI4IDExLjM5MzIgMjggMTUuNTc4OVYxNi4zODFDMjggMjAuMzgwOSAyNC45MTc3IDIzLjY2MDkgMjAuOTk4NyAyMy45NzUzQzIwLjk5OTYgMjMuOTMyNCAyMSAyMy44ODkzIDIxIDIzLjg0NjJWMjEuMjcyN0MyMSAxNy4yNTYxIDE3Ljc0MzkgMTQgMTMuNzI3MyAxNEgxMi4wMzk4WlwiIGZpbGw9XCIjNjU2NUYyXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTggMjEuMjg1N0M4IDE4LjkxODggOS45MTg3OCAxNyAxMi4yODU3IDE3SDEzLjQ1NDVDMTUuOTY0OSAxNyAxOCAxOS4wMzUxIDE4IDIxLjU0NTVWMjMuMTUzOEMxOCAyNS4yNzggMTYuMjc4IDI3IDE0LjE1MzggMjdIMTMuNzE0M0MxMC41NTg0IDI3IDggMjQuNDQxNiA4IDIxLjI4NTdaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgaGVybyA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJtYXNrMFwiIG1hc2stdHlwZT1cImFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByeD1cIjEyXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPGcgbWFzaz1cInVybCgjbWFzazApXCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDBDNS4zNzI1OCAwIDAgNS4zNzI1OCAwIDEyQzAgMTguNjI3NCA1LjM3MjU4IDI0IDEyIDI0QzE4LjYyNzQgMjQgMjQgMTguNjI3NCAyNCAxMkMyNCA1LjM3MjU4IDE4LjYyNzQgMCAxMiAwWk00IDguNDkxMjNDNCA2LjAxMDc5IDcuMDE2MTkgNCAxMC43MzY4IDRIMTEuNjE5QzE2LjI0NzcgNCAyMCA2LjUwMTUyIDIwIDkuNTg3M0MyMCAxMi4zOTI2IDE2LjU4ODggMTQuNjY2NyAxMi4zODEgMTQuNjY2N0gxMS41Nzg5QzcuMzkzMjEgMTQuNjY2NyA0IDEyLjQwNDUgNCA5LjYxNDAzVjguNDkxMjNaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTguNzE0M0M3IDE5LjQyNDQgNy41NzU2MyAyMCA4LjI4NTcxIDIwSDE1LjVDMTYuMzI4NCAyMCAxNyAxOS4zMjg0IDE3IDE4LjVWMTguNUMxNyAxNy42NzE2IDE2LjMyODQgMTcgMTUuNSAxN0g4LjcxNDI5QzcuNzY3NTEgMTcgNyAxNy43Njc1IDcgMTguNzE0M1YxOC43MTQzWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgbWVkaWEgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxtYXNrIGlkPVwicGF0aC0xLW91dHNpZGUtMVwiIG1hc2tVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeD1cIi0yXCIgeT1cIi0yXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgZmlsbD1cImJsYWNrXCI+XG4gICAgICAgICAgICA8cmVjdCBmaWxsPVwid2hpdGVcIiB4PVwiLTJcIiB5PVwiLTJcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIi8+XG4gICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4IDBDOC4wNTg4OCAwIDAgOC4wNTg4OCAwIDE4QzAgMjcuOTQxMSA4LjA1ODg4IDM2IDE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg4IDI3Ljk0MTEgMCAxOCAwWk0yMy40NzM3IDI1QzIwLjQ1MDcgMjUgMTggMjIuNTQ5MyAxOCAxOS41MjYzVjE4LjgwOTVDMTggMTUuMDQ4NyAyMS4wNDg3IDEyIDI0LjgwOTUgMTJDMjguMjI4NCAxMiAzMSAxNC43NzE2IDMxIDE4LjE5MDVWMTguODQyMUMzMSAyMi4yNDMgMjguMjQzIDI1IDI0Ljg0MjEgMjVIMjMuNDczN1pcIi8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOCAwQzguMDU4ODggMCAwIDguMDU4ODggMCAxOEMwIDI3Ljk0MTEgOC4wNTg4OCAzNiAxOCAzNkMyNy45NDExIDM2IDM2IDI3Ljk0MTEgMzYgMThDMzYgOC4wNTg4OCAyNy45NDExIDAgMTggMFpNMjMuNDczNyAyNUMyMC40NTA3IDI1IDE4IDIyLjU0OTMgMTggMTkuNTI2M1YxOC44MDk1QzE4IDE1LjA0ODcgMjEuMDQ4NyAxMiAyNC44MDk1IDEyQzI4LjIyODQgMTIgMzEgMTQuNzcxNiAzMSAxOC4xOTA1VjE4Ljg0MjFDMzEgMjIuMjQzIDI4LjI0MyAyNSAyNC44NDIxIDI1SDIzLjQ3MzdaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMiAxOEMyIDkuMTYzNDQgOS4xNjM0NCAyIDE4IDJWLTJDNi45NTQzMSAtMiAtMiA2Ljk1NDMxIC0yIDE4SDJaTTE4IDM0QzkuMTYzNDQgMzQgMiAyNi44MzY2IDIgMThILTJDLTIgMjkuMDQ1NyA2Ljk1NDMxIDM4IDE4IDM4VjM0Wk0zNCAxOEMzNCAyNi44MzY2IDI2LjgzNjYgMzQgMTggMzRWMzhDMjkuMDQ1NyAzOCAzOCAyOS4wNDU3IDM4IDE4SDM0Wk0xOCAyQzI2LjgzNjYgMiAzNCA5LjE2MzQ0IDM0IDE4SDM4QzM4IDYuOTU0MzEgMjkuMDQ1NyAtMiAxOCAtMlYyWk0xNiAxOS41MjYzQzE2IDIzLjY1MzkgMTkuMzQ2MSAyNyAyMy40NzM3IDI3VjIzQzIxLjU1NTIgMjMgMjAgMjEuNDQ0OCAyMCAxOS41MjYzSDE2Wk0xNiAxOC44MDk1VjE5LjUyNjNIMjBWMTguODA5NUgxNlpNMjQuODA5NSAxMEMxOS45NDQyIDEwIDE2IDEzLjk0NDIgMTYgMTguODA5NUgyMEMyMCAxNi4xNTMzIDIyLjE1MzMgMTQgMjQuODA5NSAxNFYxMFpNMzMgMTguMTkwNUMzMyAxMy42NjcgMjkuMzMzIDEwIDI0LjgwOTUgMTBWMTRDMjcuMTIzOSAxNCAyOSAxNS44NzYxIDI5IDE4LjE5MDVIMzNaTTMzIDE4Ljg0MjFWMTguMTkwNUgyOVYxOC44NDIxSDMzWk0yNC44NDIxIDI3QzI5LjM0NzYgMjcgMzMgMjMuMzQ3NiAzMyAxOC44NDIxSDI5QzI5IDIxLjEzODQgMjcuMTM4NCAyMyAyNC44NDIxIDIzVjI3Wk0yMy40NzM3IDI3SDI0Ljg0MjFWMjNIMjMuNDczN1YyN1pcIiBmaWxsPVwid2hpdGVcIiBtYXNrPVwidXJsKCNwYXRoLTEtb3V0c2lkZS0xKVwiLz5cbiAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMiAzMEM4LjY4NjI5IDMwIDYgMjcuMzEzNyA2IDI0VjE0QzYgOS41ODE3MiA5LjU4MTcyIDYgMTQgNkgxNkMxOC43MjggNiAyMC45NDU4IDguMTg0NzUgMjAuOTk5IDEwLjlDMTguMDM4OCAxMi4zNDcxIDE2IDE1LjM4NzggMTYgMTguOTA0OFYxOS44NDIxQzE2IDIyLjk0ODQgMTcuOTc4NiAyNS41OTI1IDIwLjc0NDMgMjYuNTgyOUMyMC4wODIxIDI4LjU2ODUgMTguMjA4MiAzMCAxNiAzMEgxMlpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzbGlkZXNob3cgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxtYXNrIGlkPVwibWFzazBcIiBtYXNrLXR5cGU9XCJhbHBoYVwiIG1hc2tVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcng9XCIxMlwiIGZpbGw9XCIjNjU2NUYyXCIvPlxuICAgICAgICA8L21hc2s+XG4gICAgICAgIDxnIG1hc2s9XCJ1cmwoI21hc2swKVwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0wIDEyQzAgNS4zNzI1OCA1LjM3MjU4IDAgMTIgMFYwQzE4LjYyNzQgMCAyNCA1LjM3MjU4IDI0IDEyVjEyQzI0IDE4LjYyNzQgMTguNjI3NCAyNCAxMiAyNFYyNEM1LjM3MjU4IDI0IDAgMTguNjI3NCAwIDEyVjEyWlwiIGZpbGw9XCIjNjU2NUYyXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNy4zOTgyIDguOTkyODNDMTcuODgzMSA5LjM5MjgyIDE3Ljg4MzEgMTAuMTM1OCAxNy4zOTgyIDEwLjUzNTdMMTQuOTY3MyAxMi41NDA3QzE0LjMxNSAxMy4wNzg3IDEzLjMzMSAxMi42MTQ3IDEzLjMzMSAxMS43NjkyVjcuNzU5MzNDMTMuMzMxIDYuOTEzODYgMTQuMzE1IDYuNDQ5OTIgMTQuOTY3MyA2Ljk4Nzg4TDE3LjM5ODIgOC45OTI4M1pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYuNjAxODQgOC45OTI4M0M2LjExNjg5IDkuMzkyODIgNi4xMTY4OSAxMC4xMzU4IDYuNjAxODQgMTAuNTM1N0w5LjAzMjcyIDEyLjU0MDdDOS42ODQ5NiAxMy4wNzg3IDEwLjY2OSAxMi42MTQ3IDEwLjY2OSAxMS43NjkyVjcuNzU5MzNDMTAuNjY5IDYuOTEzODYgOS42ODQ5NiA2LjQ0OTkyIDkuMDMyNzIgNi45ODc4OEw2LjYwMTg0IDguOTkyODNaXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk03IDE4LjI3NTFDNyAxOC44MDMzIDcuNDI4MTggMTkuMjMxNCA3Ljk1NjM3IDE5LjIzMTRIOC4yMTcyQzguNzc3NCAxOS4yMzE0IDkuMjMxNTQgMTguNzc3MyA5LjIzMTU0IDE4LjIxNzFWMTcuODU4MkM5LjIzMTU0IDE3LjM4NDIgOC44NDcyNyAxNi45OTk5IDguMzczMjUgMTYuOTk5OUg4LjI3NTE3QzcuNTcwOTEgMTYuOTk5OSA3IDE3LjU3MDggNyAxOC4yNzUxVjE4LjI3NTFaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjcxOTIgMTguMjc1MUMxMC43MTkyIDE4LjgwMzMgMTEuMTQ3NCAxOS4yMzE0IDExLjY3NTYgMTkuMjMxNEgxMS45MzY0QzEyLjQ5NjYgMTkuMjMxNCAxMi45NTA4IDE4Ljc3NzMgMTIuOTUwOCAxOC4yMTcxVjE3Ljg1ODJDMTIuOTUwOCAxNy4zODQyIDEyLjU2NjUgMTYuOTk5OSAxMi4wOTI1IDE2Ljk5OTlIMTEuOTk0NEMxMS4yOTAxIDE2Ljk5OTkgMTAuNzE5MiAxNy41NzA4IDEwLjcxOTIgMTguMjc1MVYxOC4yNzUxWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNC40Mzg1IDE4LjI3NTFDMTQuNDM4NSAxOC44MDMzIDE0Ljg2NjcgMTkuMjMxNCAxNS4zOTQ4IDE5LjIzMTRIMTUuNjU1N0MxNi4yMTU5IDE5LjIzMTQgMTYuNjcgMTguNzc3MyAxNi42NyAxOC4yMTcxVjE3Ljg1ODJDMTYuNjcgMTcuMzg0MiAxNi4yODU3IDE2Ljk5OTkgMTUuODExNyAxNi45OTk5SDE1LjcxMzZDMTUuMDA5NCAxNi45OTk5IDE0LjQzODUgMTcuNTcwOCAxNC40Mzg1IDE4LjI3NTFWMTguMjc1MVpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKVxuXG5leHBvcnQgY29uc3QgYWxpZ25Cb3R0b20gPSAoXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICAgICAgICA8UGF0aCBkPVwiTTE2IDEzaC0zVjNoLTJ2MTBIOGw0IDQgNC00ek00IDE5djJoMTZ2LTJINHpcIiAvPlxuICAgIDwvU1ZHPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsaWduQ2VudGVyID0gKFxuICAgIDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz5cbiAgICAgICAgPFBhdGggZD1cIk04IDE5aDN2NGgydi00aDNsLTQtNC00IDR6bTgtMTRoLTNWMWgtMnY0SDhsNCA0IDQtNHpNNCAxMXYyaDE2di0ySDR6XCJcbiAgICAgICAgLz5cbiAgICA8L1NWRz5cbik7XG5cbmV4cG9ydCBjb25zdCBhbGlnblRvcCA9IChcbiAgICA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gICAgICAgIDxQYXRoIGQ9XCJNOCAxMWgzdjEwaDJWMTFoM2wtNC00LTQgNHpNNCAzdjJoMTZWM0g0elwiIC8+XG4gICAgPC9TVkc+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxpZ25tZW50ID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTE1LjU0IDUuNTRMMTMuNzcgNy4zTDEyIDUuNTRMMTAuMjMgNy4zTDguNDYgNS41NEwxMiAyTDE1LjU0IDUuNTRaTTE4LjQ2IDE1LjU0TDE2LjcgMTMuNzdMMTguNDYgMTJMMTYuNyAxMC4yM0wxOC40NiA4LjQ2TDIyIDEyTDE4LjQ2IDE1LjU0Wk04LjQ2IDE4LjQ2TDEwLjIzIDE2LjdMMTIgMTguNDZMMTMuNzcgMTYuN0wxNS41NCAxOC40NkwxMiAyMkw4LjQ2IDE4LjQ2Wk01LjU0IDguNDZMNy4zIDEwLjIzTDUuNTQgMTJMNy4zIDEzLjc3TDUuNTQgMTUuNTRMMiAxMkw1LjU0IDguNDZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAxNUMxMy42NTY5IDE1IDE1IDEzLjY1NjkgMTUgMTJDMTUgMTAuMzQzMSAxMy42NTY5IDkgMTIgOUMxMC4zNDMxIDkgOSAxMC4zNDMxIDkgMTJDOSAxMy42NTY5IDEwLjM0MzEgMTUgMTIgMTVaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBpbnZlcnQgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjAgMTUuMzA5OUwyMy4zMSAxMS45OTk5TDIwIDguNjg5OTRWMy45OTk5NEgxNS4zMUwxMiAwLjY4OTk0MUw4LjY5IDMuOTk5OTRINFY4LjY4OTk0TDAuNjkwMDAyIDExLjk5OTlMNCAxNS4zMDk5VjE5Ljk5OTlIOC42OUwxMiAyMy4zMDk5TDE1LjMxIDE5Ljk5OTlIMjBWMTUuMzA5OVpNMTIgMTcuOTk5OVY1Ljk5OTk0QzE1LjMxIDUuOTk5OTQgMTggOC42ODk5NCAxOCAxMS45OTk5QzE4IDE1LjMwOTkgMTUuMzEgMTcuOTk5OSAxMiAxNy45OTk5WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3Qgc3dhcCA9IChcbiAgICA8c3ZnIHdpZHRoPScyMCcgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuICAgICAgICA8cGF0aCBkPSdNMTggMkwyMCA2SDE4TDE2IDJIMTNMMTUgNkgxM0wxMSAySDEwQzkuNDY5NTcgMiA4Ljk2MDg2IDIuMjEwNzEgOC41ODU3OSAyLjU4NTc5QzguMjEwNzEgMi45NjA4NiA4IDMuNDY5NTcgOCA0VjE0QzggMTQuNTMwNCA4LjIxMDcxIDE1LjAzOTEgOC41ODU3OSAxNS40MTQyQzguOTYwODYgMTUuNzg5MyA5LjQ2OTU3IDE2IDEwIDE2SDIwQzIwLjUzMDQgMTYgMjEuMDM5MSAxNS43ODkzIDIxLjQxNDIgMTUuNDE0MkMyMS43ODkzIDE1LjAzOTEgMjIgMTQuNTMwNCAyMiAxNFYySDE4Wk0yMCAxNEgxMFY0LjRMMTEuOCA4SDIwVjE0WicgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICA8cGF0aCBkPSdNMTQgMjBINFYxMEg3VjhINEMzLjQ2OTU3IDggMi45NjA4NiA4LjIxMDcxIDIuNTg1NzkgOC41ODU3OUMyLjIxMDcxIDguOTYwODYgMiA5LjQ2OTU3IDIgMTBWMjBDMiAyMC41MzA0IDIuMjEwNzEgMjEuMDM5MSAyLjU4NTc5IDIxLjQxNDJDMi45NjA4NiAyMS43ODkzIDMuNDY5NTcgMjIgNCAyMkgxNEMxNC41MzA0IDIyIDE1LjAzOTEgMjEuNzg5MyAxNS40MTQyIDIxLjQxNDJDMTUuNzg5MyAyMS4wMzkxIDE2IDIwLjUzMDQgMTYgMjBWMTdIMTRWMjBaJyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgIDxwYXRoIGQ9J001IDE5SDEzTDExLjQxIDE3SDkuMjRMOC40IDE4LjFMNyAxNi4zTDUgMTlaJyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgPC9zdmc+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb25zLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExheW91dFBhbmVsIGZyb20gJy4vbGF5b3V0LXBhbmVsJztcbmltcG9ydCBQYXJhbGxheFBhbmVsIGZyb20gJy4vcGFyYWxsYXgtcGFuZWwnO1xuXG5pbXBvcnQge1xuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxufSBmcm9tICcuL2dhbGxlcnktb3B0aW9ucyc7XG5cbmltcG9ydCB7XG5cdENvbG9yQ29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdENvbG9yVG9vbGJhcixcblx0T3ZlcmxheUNvbnRyb2xzXG59IGZyb20gJy4vY29sb3ItY29udHJvbHMnO1xuXG5pbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhclxufSBmcm9tICcuL2FsaWdubWVudC1jb250cm9scyc7XG5cbmltcG9ydCB7XG5cdEhlaWdodFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbFxufSBmcm9tICcuL2hlaWdodC1jb250cm9scyc7XG5cbmV4cG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdEdhbGxlcnlQcmV2aWV3LFxuXHRHYWxsZXJ5UGxhY2Vob2xkZXIsXG5cdEhlaWdodFBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0T3ZlcmxheUNvbnRyb2xzLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuXHRsZXQgdGltZW91dCA9IG51bGw7XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcztcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0Y29uc3QgbGF0ZXIgPSAoKSA9PiB7XG5cdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXInO1xuaW1wb3J0IEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLXZlcnRpY2FsLWFsaWdubWVudC10b29sYmFyJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY2xhc3MgQWxpZ25tZW50VG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ29udGVudCBBbGlnbm1lbnQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXG5cdFx0KVxuXHR9XG59XG5cbmNsYXNzIEFsaWdubWVudENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0XHRob3Jpem9udGFsQWxpZ25tZW50LFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8c3Bhbj57IF9fKCAnSG9yaXpvbnRhbCcsICdfX3BsdWdpbl90eHRkJyApIH08L3NwYW4+XG5cdFx0XHRcdFx0PEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXtob3Jpem9udGFsQWxpZ25tZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hvcml6b250YWxBbGlnbm1lbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHR3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCkuaW5uZXJCbG9ja3MubWFwKCBibG9jayA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggYmxvY2suY2xpZW50SWQsIHsgYWxpZ246IGhvcml6b250YWxBbGlnbm1lbnQgfSApO1xuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaG9yaXpvbnRhbEFsaWdubWVudCB9IClcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0eyBhcHBseU1pbmltdW1IZWlnaHRCbG9jayAmJiA8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PHNwYW4+eyBfXyggJ1ZlcnRpY2FsJywgJ19fcGx1Z2luX3R4dGQnICkgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2ZXJ0aWNhbEFsaWdubWVudCA9PiBzZXRBdHRyaWJ1dGVzKCB7dmVydGljYWxBbGlnbm1lbnR9ICl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbFJvdz4gfVxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEFsaWdubWVudFRvb2xiYXIsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL2luZGV4LmpzIiwiY29uc3Qge1xuXHRDb21wb25lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG4vLyBUYWtlIGluIGEgY29tcG9uZW50IGFzIGFyZ3VtZW50IFdyYXBwZWRDb21wb25lbnRcbmNvbnN0IHdpdGhQYXJhbGxheCA9IGZ1bmN0aW9uKCBXcmFwcGVkQ29tcG9uZW50ICkge1xuXG5cdC8vIEFuZCByZXR1cm4gYSBuZXcgYW5vbnltb3VzIGNvbXBvbmVudFxuXHRyZXR1cm4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cblx0XHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcdHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0d2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdHByb2dyZXNzOiAwLjUsXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudXBkYXRlSGFuZGxlciA9IHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHRjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXBvc3QtbGF5b3V0X19jb250ZW50JylbMF07XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZUhhbmRsZXIgKTtcblx0XHRcdHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMudXBkYXRlSGFuZGxlciApO1xuXHRcdFx0dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHRjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXBvc3QtbGF5b3V0X19jb250ZW50JylbMF07XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy51cGRhdGVIYW5kbGVyICk7XG5cdFx0XHRzY3JvbGxDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVIYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0dXBkYXRlRGltZW5zaW9ucygpIHtcblx0XHRcdGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQtcG9zdC1sYXlvdXRfX2NvbnRlbnQnKVswXTtcblx0XHRcdGNvbnN0IGNvbnRhaW5lckJveCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSAoIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0IC0gY29udGFpbmVyQm94LnkgKSAvICggdGhpcy5zdGF0ZS53aW5kb3dIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQgKTtcblx0XHRcdGNvbnN0IGFjdHVhbFByb2dyZXNzID0gTWF0aC5tYXgoIE1hdGgubWluKCBwcm9ncmVzcywgMSApLCAwICk7XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHRzY3JvbGxUb3A6IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AsXG5cdFx0XHRcdHByb2dyZXNzOiBhY3R1YWxQcm9ncmVzcyxcblx0XHRcdFx0ZGltZW5zaW9uczoge1xuXHRcdFx0XHRcdHdpZHRoOiB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCxcblx0XHRcdFx0XHR0b3A6IGNvbnRhaW5lckJveC55LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Z2V0UGFyYWxsYXhTdHlsZXMoKSB7XG5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdGVuYWJsZVBhcmFsbGF4LFxuXHRcdFx0XHRcdHBhcmFsbGF4QW1vdW50LFxuXHRcdFx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0XHR9XG5cdFx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdFx0aWYgKCAhIGVuYWJsZVBhcmFsbGF4ICkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9XG5cblx0XHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyc2VJbnQoIHBhcmFsbGF4QW1vdW50LCAxMCApO1xuXHRcdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oIDEsIGFjdHVhbFBhcmFsbGF4QW1vdW50IC8gMTAwICksIDAgKTtcblxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRkaW1lbnNpb25zLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQsXG5cdFx0XHRcdHByb2dyZXNzXG5cdFx0XHR9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdFx0Y29uc3QgbmV3SGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQgKiAoMSAtIGFjdHVhbFBhcmFsbGF4QW1vdW50KSArIHdpbmRvd0hlaWdodCAqIGFjdHVhbFBhcmFsbGF4QW1vdW50O1xuXHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXdIZWlnaHQgLyBkaW1lbnNpb25zLmhlaWdodDtcblx0XHRcdGNvbnN0IG9mZnNldFkgPSBkaW1lbnNpb25zLmhlaWdodCAqICggMSAtIHNjYWxlICkgLyAyO1xuXHRcdFx0Y29uc3QgbW92ZSA9ICggd2luZG93SGVpZ2h0ICsgZGltZW5zaW9ucy5oZWlnaHQgKSAqICggcHJvZ3Jlc3MgLSAwLjUgKSAqIGFjdHVhbFBhcmFsbGF4QW1vdW50O1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWlnaHQ6IG5ld0hlaWdodCxcblx0XHRcdFx0dHJhbnNpdGlvbjogJ25vbmUnLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnICsgKCBtb3ZlICsgb2Zmc2V0WSApICsgJ3B4KSdcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCkge1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWFza1wiIHJlZj17IGVsID0+ICggdGhpcy5jb250YWluZXIgPSBlbCApIH0+XG5cdFx0XHRcdFx0eyB0aGlzLnN0YXRlLmRpbWVuc2lvbnMgJiYgPFdyYXBwZWRDb21wb25lbnQgeyAuLi50aGlzLnByb3BzIH0gc3R5bGU9eyB0aGlzLmdldFBhcmFsbGF4U3R5bGVzKCkgfSAvPiB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyYWxsYXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcIi4vc2Nzcy9lZGl0b3Iuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9oZXJvXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9tZWRpYVwiO1xuaW1wb3J0IFwiLi9ibG9ja3Mvc2xpZGVzaG93XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlLCB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCAnbm92YS9oZXJvJyxcblx0e1xuXHRcdHRpdGxlOiBfXyggJ0hlcm8gb2YgdGhlIEdhbGF4eScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0EgZ3JlYXQgd2F5IHRvIGdldCB5b3VyIHZpc2l0b3JzIGFjcXVhaW50ZWQgd2l0aCB5b3VyIGNvbnRlbnQuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0Y2F0ZWdvcnk6IFwibm92YS1ieS1waXhlbGdyYWRlXCIsXG5cdFx0aWNvbjogaWNvbnMuaGVybyxcblx0XHRlZGl0LFxuXHRcdHNhdmUoKSB7XG5cdFx0XHRyZXR1cm4gPElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdH0sXG5cdFx0Z2V0RWRpdFdyYXBwZXJQcm9wcygpIHtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmFsaWduV2lkZSA/IHtcblx0XHRcdFx0J2RhdGEtYWxpZ24nOiAnZnVsbCdcblx0XHRcdH0gOiB7fVxuXHRcdH0sXG5cdH1cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlcm8vaW5kZXguanMiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuaW1wb3J0IHtcblx0SGVpZ2h0UGFuZWwsXG5cdExheW91dFBhbmVsLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcblxuaW1wb3J0IEhlcm9QcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5pbXBvcnQgSGVyb0Jsb2NrQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGVkaXRvckRhdGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5jb25zdCB1cGRhdGVCbG9ja3MgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGNvbnN0IGJsb2NrcyA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5cblx0YmxvY2tzLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0fSApLmZpbHRlciggKCBibG9jaywgaGVyb0Jsb2NrSW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgeyBhcHBseU1pbmltdW1IZWlnaHQsIHNjcm9sbEluZGljYXRvciB9ID0geyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH07XG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgPSBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdmaXJzdCcgJiYgaGVyb0Jsb2NrSW5kZXggPT09IDAgfHwgYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnYWxsJztcblx0XHRjb25zdCBzY3JvbGxJbmRpY2F0b3JCbG9jayA9IHNjcm9sbEluZGljYXRvciA9PT0gdHJ1ZSAmJiBoZXJvQmxvY2tJbmRleCA9PT0gMDtcblx0XHRjb25zdCBibG9ja0luZGV4ID0gYmxvY2tzLmZpbmRJbmRleCggdGVzdEJsb2NrID0+IGJsb2NrID09PSB0ZXN0QmxvY2sgKTtcblxuXHRcdHdwLmRhdGEuZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7XG5cdFx0XHRibG9ja0luZGV4LFxuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9ja1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9ICk7XG5cbn1cblxubGV0IGJsb2NrTGlzdCA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5sZXQgZGVib3VuY2VkT25TdWJzY3JpYmUgPSBkZWJvdW5jZSgoKSA9PiB7XG5cblx0Y29uc3QgbmV3QmxvY2tMaXN0ID0gZWRpdG9yRGF0YS5nZXRCbG9ja3MoKTtcblx0bGV0IGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3QubGVuZ3RoICE9PSBuZXdCbG9ja0xpc3QubGVuZ3RoO1xuXG5cdGlmICggISBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3Quc29tZSggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCBibG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICE9PSBuZXdCbG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdCA9IG5ld0Jsb2NrTGlzdDtcblx0XHR1cGRhdGVCbG9ja3MoKTtcblx0fVxufSwgMzApO1xuXG53cC5kYXRhLnN1YnNjcmliZSggZGVib3VuY2VkT25TdWJzY3JpYmUgKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEhlcm9QcmV2aWV3IHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxIZXJvQmxvY2tDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PC9GcmFnbWVudD4sXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxMYXlvdXRQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8SGVpZ2h0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PFNjcm9sbEluZGljYXRvclBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxQYXJhbGxheFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdF1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZXJvL2VkaXQuanMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgaXNFbnVtLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUGFkZGluZ0NvbnRyb2xzIGZyb20gXCIuL3BhZGRpbmdcIjtcbmltcG9ydCBXaWR0aENvbnRyb2xzIGZyb20gXCIuL3dpZHRoXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gPFBhbmVsQm9keVxuXHRcdFx0Y2xhc3NOYW1lPVwicGl4ZWxncmFkZS1oZXJvLWJ1dHRvbi1ncm91cC13cmFwcGVyXCJcblx0XHRcdHRpdGxlPXsgX18oICdMYXlvdXQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRpbml0aWFsT3Blbj17IHRydWUgfT5cblxuXHRcdFx0PFBhZGRpbmdDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PFdpZHRoQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHQ8L1BhbmVsQm9keT5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGluZ0NvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29udGVudFBhZGRpbmdPcHRpb25zID0gW1xuXHRcdFx0eyBsYWJlbDogX18oICdTbWFsbCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NtYWxsJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdNZWRpdW0nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtZWRpdW0nIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0xhcmdlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGFyZ2UnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2N1c3RvbScgfSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxsYWJlbD57IF9fKCAnQ29udGVudCBQYWRkaW5nJywgJ19fcGx1Z2luX3R4dGQnKSB9PC9sYWJlbD5cblx0XHRcdDxCdXR0b25Hcm91cD5cblx0XHRcdFx0eyBjb250ZW50UGFkZGluZ09wdGlvbnMubWFwKCBvcHRpb24gPT5cblx0XHRcdFx0XHQ8QnV0dG9uIGtleT17IG9wdGlvbi52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdGlzRGVmYXVsdD17IG9wdGlvbi52YWx1ZSAhPT0gY29udGVudFBhZGRpbmcgfVxuXHRcdFx0XHRcdCAgICAgICAgaXNQcmltYXJ5PXsgb3B0aW9uLnZhbHVlID09PSBjb250ZW50UGFkZGluZyB9XG5cdFx0XHRcdFx0ICAgICAgICBvbkNsaWNrPXsgKCkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRQYWRkaW5nOiBvcHRpb24udmFsdWUgfSApIH0gfT5cblx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gY29udGVudFBhZGRpbmcgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IGNvbnRlbnRQYWRkaW5nQ3VzdG9tIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50UGFkZGluZ0N1c3RvbSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRQYWRkaW5nQ3VzdG9tIH0gKSB9XG5cdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0bWF4PXsyNX1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvcGFkZGluZy5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZHRoQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRXaWR0aCxcblx0XHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGNvbnRlbnRXaWR0aE9wdGlvbnMgPSBbXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0Z1bGwnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdmdWxsJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdMYXJnZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2xhcmdlJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdOYXJyb3cnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICduYXJyb3cnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2N1c3RvbScgfSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxsYWJlbD57IF9fKCAnQ29udGVudCBXaWR0aCcsICdfX3BsdWdpbl90eHRkJykgfTwvbGFiZWw+XG5cdFx0XHQ8QnV0dG9uR3JvdXAgbGFiZWw9XCJDb250ZW50IFdpZHRoXCI+XG5cdFx0XHRcdHsgY29udGVudFdpZHRoT3B0aW9ucy5tYXAoIG9wdGlvbiA9PlxuXHRcdFx0XHRcdDxCdXR0b24gaXNEZWZhdWx0PXsgb3B0aW9uLnZhbHVlICE9PSBjb250ZW50V2lkdGggfVxuXHRcdFx0XHRcdCAgICAgICAgaXNQcmltYXJ5PXsgb3B0aW9uLnZhbHVlID09PSBjb250ZW50V2lkdGggfVxuXHRcdFx0XHRcdCAgICAgICAgb25DbGljaz17ICgpID0+IHsgc2V0QXR0cmlidXRlcyggeyBjb250ZW50V2lkdGg6IG9wdGlvbi52YWx1ZX0gKSB9IH0+XG5cdFx0XHRcdFx0XHR7IG9wdGlvbi5sYWJlbCB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdHsgJ2N1c3RvbScgPT09IGNvbnRlbnRXaWR0aCAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdHZhbHVlPXsgY29udGVudFdpZHRoQ3VzdG9tIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50V2lkdGhDdXN0b20gPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50V2lkdGhDdXN0b20gfSApIH1cblx0XHRcdFx0bWluPXsyMH1cblx0XHRcdFx0bWF4PXs5MH1cblx0XHRcdFx0c3RlcD17MTB9XG5cdFx0XHQvPiB9XG5cdFx0PC9GcmFnbWVudD5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3dpZHRoLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2xheW91dC1wYW5lbC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC8vIHBhcmFsbGF4XG5cdFx0XHRcdGVuYWJsZVBhcmFsbGF4LFxuXHRcdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdFx0cGFyYWxsYXhDdXN0b21BbW91bnQsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BhcmFsbGF4JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBQYXJhbGxheCBTY3JvbGxpbmcnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGVuYWJsZVBhcmFsbGF4IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlUGFyYWxsYXg6ICEgZW5hYmxlUGFyYWxsYXggfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAhISBlbmFibGVQYXJhbGxheCAmJlxuXHRcdFx0XHQgIDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHQgIGxhYmVsPXsgX18oICdQYXJhbGxheCBPcmJpdGFsIFNwZWVkJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdCAgc2VsZWN0ZWQ9eyBwYXJhbGxheEFtb3VudCB9XG5cdFx0XHRcdFx0ICBvbkNoYW5nZT17IHBhcmFsbGF4QW1vdW50ID0+IHtcblxuXHRcdFx0XHRcdFx0ICBpZiAoIHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyApIHtcblx0XHRcdFx0XHRcdFx0ICBzZXRBdHRyaWJ1dGVzKCB7IHBhcmFsbGF4QW1vdW50IH0gKTtcblx0XHRcdFx0XHRcdCAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0ICBwYXJhbGxheEFtb3VudDogcGFyYWxsYXhBbW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0ICBwYXJhbGxheEN1c3RvbUFtb3VudDogcGFyc2VJbnQoIHBhcmFsbGF4QW1vdW50LCAxMCApXG5cdFx0XHRcdFx0XHRcdCAgfSApO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICB9IH1cblx0XHRcdFx0XHQgIG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ0Zhc3QgYXMgTWVyY3VyZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnMjAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdOYXR1cmFsIGFzIEVhcnRoJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICc1MCdcblx0XHRcdFx0XHRcdCAgfSwge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ1Nsb3cgYXMgTmVwdHVuZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnNzAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJ2N1c3RvbSdcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgXX1cblx0XHRcdFx0XHQgIGhlbHA9eyBfXygnVGhlIHNwZWVkIGF0IHdoaWNoIHRoZSBwYXJhbGxheCBlZmZlY3QgcnVucy4nLCAnX19wbHVnaW5fdHh0ZCcpIH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsgISEgZW5hYmxlUGFyYWxsYXggJiYgJ2N1c3RvbScgPT09IHBhcmFsbGF4QW1vdW50ICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHR2YWx1ZT17IHBhcmFsbGF4Q3VzdG9tQW1vdW50IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHBhcmFsbGF4Q3VzdG9tQW1vdW50ID0+IHNldEF0dHJpYnV0ZXMoIHsgcGFyYWxsYXhDdXN0b21BbW91bnQgfSApIH1cblx0XHRcdFx0XHRtaW49ezEwfVxuXHRcdFx0XHRcdG1heD17MTAwfVxuXHRcdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0XHRcdGhlbHA9eyBfXygnSXQgc3RhcnRzIGZyb20gMCB3aGVuIHRoZSBpbWFnZSB3aWxsIGtlZXAgd2l0aCB0aGUgY29udGVudCAobm8gcGFyYWxsYXgpIHVwIHRvIDEwMCB3aGVuIHRoZSBpbWFnZSBhcHBlYXJzIGZpeGVkIGluIHBsYWNlLicsICdfX3BsdWdpbl90eHRkJyApfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3BhcmFsbGF4LXBhbmVsL2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRJY29uQnV0dG9uLFxuXHRGb3JtRmlsZVVwbG9hZCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY2xhc3MgR2FsbGVyeVBsYWNlaG9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRvbkNoYW5nZUdhbGxlcnkoIGdhbGxlcnlJbWFnZXMgKSB7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IGdhbGxlcnlJbWFnZXMubWFwKCAoaW1hZ2UsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gd3AuYXBpUmVxdWVzdCggeyBwYXRoOiAnL3dwL3YyL21lZGlhLycgKyBpbWFnZS5pZCB9ICkudGhlbiggbmV3SW1hZ2UgPT4ge1xuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzW2luZGV4XSA9IHsgLi4ubmV3SW1hZ2UsIC4uLmltYWdlIH07XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0UHJvbWlzZS5hbGwoIHByb21pc2VzICkudGhlbiggKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGdhbGxlcnlJbWFnZXM6IGdhbGxlcnlJbWFnZXMuZmlsdGVyKCBpbWFnZSA9PiB7XG5cdFx0XHRcdHJldHVybiAhISBpbWFnZS5pZCAmJiAhISBpbWFnZS5zaXplcyAmJiAhISBpbWFnZS5zaXplcy5sYXJnZSAmJiAhISBpbWFnZS5zaXplcy5sYXJnZS51cmw7XG5cdFx0XHR9ICkgfSApO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0XHRzZWxlY3RlZCxcblx0XHRcdFx0b25TZWxlY3RJbWFnZSxcblx0XHRcdFx0b25DaGFuZ2UsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgaGFzSW1hZ2VzID0gISEgZ2FsbGVyeUltYWdlcy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0YWRkVG9HYWxsZXJ5PXsgaGFzSW1hZ2VzIH1cblx0XHRcdFx0aXNBcHBlbmRlcj17IGhhc0ltYWdlcyB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cIlwiXG5cdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHR0aXRsZTogJycsXG5cdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgaW1hZ2VzLCB1cGxvYWQgbmV3IG9uZXMgb3Igc2VsZWN0IGZpbGVzIGZyb20geW91ciBsaWJyYXJ5LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHR9IH1cblx0XHRcdFx0b25TZWxlY3Q9eyB0aGlzLm9uQ2hhbmdlR2FsbGVyeS5iaW5kKCB0aGlzICkgfVxuXHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdHZhbHVlPXsgaGFzSW1hZ2VzID8gZ2FsbGVyeUltYWdlcyA6IHVuZGVmaW5lZCB9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufVxuXG5jbGFzcyBHYWxsZXJ5UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2FsbGVyeUltYWdlcyxcblx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0b25TZWxlY3RJbWFnZSxcblx0XHRcdGlzU2VsZWN0ZWRcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fZ2FsbGVyeS1lZGl0XCI+XG5cdFx0XHRcdHsgZ2FsbGVyeUltYWdlcy5tYXAoICggaW1nLCBpbmRleCApID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSBbXG5cdFx0XHRcdFx0XHQnbm92YS1zbGlkZXNob3dfX2dhbGxlcnktaXRlbScsXG5cdFx0XHRcdFx0XTtcblxuXHRcdFx0XHRcdGlmICggc2VsZWN0ZWQgPT09IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCAnbm92YS1zbGlkZXNob3dfX2dhbGxlcnktaXRlbS0tYWN0aXZlJyApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXsgaW1nLmlkIHx8IGltZy51cmwgfSBvbkNsaWNrPXsgKCkgPT4geyBvblNlbGVjdEltYWdlKCBpbmRleCApIH0gfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oICcgJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9eyBpbWcuc2l6ZXMudGh1bWJuYWlsLnVybCB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICkgfVxuXHRcdFx0PC91bD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IHtcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxuXHRHYWxsZXJ5UHJldmlld1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS1vcHRpb25zL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zXCI7XG5pbXBvcnQge0FsaWdubWVudENvbnRyb2xzfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRDb2xvclBhbGV0dGUsXG5cdERyb3Bkb3duLFxuXHRJY29uQnV0dG9uLFxuXHRSYWRpb0NvbnRyb2wsXG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY29sb3JzID0gWyB7XG5cdG5hbWU6IF9fKCAnRGFyaycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRjb2xvcjogJyMwMDAnXG59LCB7XG5cdG5hbWU6IF9fKCAnTGlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0Y29sb3I6ICcjRkZGJ1xufSBdO1xuXG5jbGFzcyBPdmVybGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGhcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPEZyYWdtZW50PlxuXHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT3ZlcmxheSBGaWx0ZXIgU3R5bGUnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdHNlbGVjdGVkPXsgb3ZlcmxheUZpbHRlclN0eWxlIH1cblx0XHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ05vbmUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdub25lJyB9LFxuXHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnRGFyaycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2RhcmsnIH0sXG5cdFx0XHRcdFx0eyBsYWJlbDogX18oICdMaWdodCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2xpZ2h0JyB9XG5cdFx0XHRcdF0gfVxuXHRcdFx0XHRvbkNoYW5nZT17IG92ZXJsYXlGaWx0ZXJTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG92ZXJsYXlGaWx0ZXJTdHlsZSB9ICkgfVxuXHRcdFx0Lz5cblx0XHRcdHsgb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT3ZlcmxheSBGaWx0ZXIgU3RyZW5ndGgnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdHZhbHVlPXsgb3ZlcmxheUZpbHRlclN0cmVuZ3RoIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBvdmVybGF5RmlsdGVyU3RyZW5ndGggPT4gc2V0QXR0cmlidXRlcyggeyBvdmVybGF5RmlsdGVyU3RyZW5ndGggfSApIH1cblx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRtYXg9ezEwMH1cblx0XHRcdFx0c3RlcD17MTB9XG5cdFx0XHQvPiB9XG5cdFx0PC9GcmFnbWVudD5cblx0fVxufVxuXG5jbGFzcyBDb2xvckNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxDb2xvclBhbGV0dGVcblx0XHRcdGNsYXNzTmFtZT1cIm5vdmEtaGlkZS1jbGVhci1jb2xvclwiXG5cdFx0XHR2YWx1ZT17IGNvbnRlbnRDb2xvciB9XG5cdFx0XHRjb2xvcnM9eyBjb2xvcnMgfVxuXHRcdFx0b25DaGFuZ2U9eyBjb250ZW50Q29sb3IgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50Q29sb3IgfSApIH1cblx0XHRcdGRpc2FibGVDdXN0b21Db2xvcnNcblx0XHQvPlxuXHR9XG59XG5cbmNsYXNzIENvbG9yUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8UGFuZWxDb2xvclNldHRpbmdzXG5cdFx0XHRjbGFzc05hbWU9XCJub3ZhLWhpZGUtY2xlYXItY29sb3JcIlxuXHRcdFx0dGl0bGU9eyBfXyggJ0NvbG9yIFNldHRpbmdzJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0Y29sb3JTZXR0aW5ncz17IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb250ZW50Q29sb3IsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGNvbnRlbnRDb2xvciA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRDb2xvciB9ICksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCAnQ29udGVudCBDb2xvcicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSB9XG5cdFx0XHRjb2xvcnM9eyBjb2xvcnMgfSBcblx0XHRcdGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdDxPdmVybGF5Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHQ8L1BhbmVsQ29sb3JTZXR0aW5ncz5cblx0fVxufVxuXG5jbGFzcyBDb2xvclRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuaW52ZXJ0IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb2xvciBPcHRpb25zJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRyZW5kZXJDb250ZW50PXsgKCB7IG9uQ2xvc2UgfSApID0+IDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxDb2xvckNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0XHQ8T3ZlcmxheUNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdE92ZXJsYXlDb250cm9scyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgVG9vbGJhciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aFZpZXdwb3J0TWF0Y2ggfSA9IHdwLnZpZXdwb3J0O1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlLCBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgQ29uc3VtZXIsIFByb3ZpZGVyIH0gPSBjcmVhdGVDb250ZXh0KCB7XG5cdG5hbWU6ICcnLFxuXHRpc1NlbGVjdGVkOiBmYWxzZSxcblx0Zm9jdXNlZEVsZW1lbnQ6IG51bGwsXG5cdHNldEZvY3VzZWRFbGVtZW50OiAoKSA9PiB7fSxcblx0Y2xpZW50SWQ6IG51bGwsXG59ICk7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuXG5jb25zdCBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHRsZWZ0OiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25Ub3AsXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gTGVmdCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxuXHRjZW50ZXI6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnbkNlbnRlcixcblx0XHR0aXRsZTogX18oICdBbGlnbiBNaWRkbGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcblx0cmlnaHQ6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnbkJvdHRvbSxcblx0XHR0aXRsZTogX18oICdBbGlnbiBSaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxufTtcblxuY29uc3QgREVGQVVMVF9DT05UUk9MUyA9IFsgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JyBdO1xuY29uc3QgREVGQVVMVF9DT05UUk9MID0gJ2NlbnRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyKCB7IGlzQ29sbGFwc2VkLCB2YWx1ZSwgb25DaGFuZ2UsIGNvbnRyb2xzID0gREVGQVVMVF9DT05UUk9MUyB9ICkge1xuXHRmdW5jdGlvbiBhcHBseU9yVW5zZXQoIGFsaWduICkge1xuXHRcdHJldHVybiAoKSA9PiBvbkNoYW5nZSggdmFsdWUgPT09IGFsaWduID8gdW5kZWZpbmVkIDogYWxpZ24gKTtcblx0fVxuXG5cdGNvbnN0IGFjdGl2ZUFsaWdubWVudCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIHZhbHVlIF07XG5cdGNvbnN0IGRlZmF1bHRBbGlnbm1lbnRDb250cm9sID0gQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MU1sgREVGQVVMVF9DT05UUk9MIF07XG5cblx0cmV0dXJuIChcblx0XHQ8VG9vbGJhclxuXHRcdFx0aXNDb2xsYXBzZWQ9eyBpc0NvbGxhcHNlZCB9XG5cdFx0XHRpY29uPXsgYWN0aXZlQWxpZ25tZW50ID8gYWN0aXZlQWxpZ25tZW50Lmljb24gOiBkZWZhdWx0QWxpZ25tZW50Q29udHJvbC5pY29uIH1cblx0XHRcdGNvbnRyb2xzPXtcblx0XHRcdFx0Y29udHJvbHMubWFwKCAoIGNvbnRyb2wgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLkJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIGNvbnRyb2wgXSxcblx0XHRcdFx0XHRcdGlzQWN0aXZlOiB2YWx1ZSA9PT0gY29udHJvbCxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IGFwcGx5T3JVbnNldChjb250cm9sKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJwaXhlbGdyYWRlLWhlcm8taG9yaXpvbnRhbC1hbGlnbm1lbnQtYnV0dG9uXCJcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHQvPlxuXHQpXG59XG5cbi8vIEB0b2RvIHJlbW92ZSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBhbmQgdXNlIGNvcmUgbWV0aG9kIHdoZW4gZXhwb3NlZCB0aHJvdWdoIHRoZSBhcGlcbmNvbnN0IHdpdGhCbG9ja0VkaXRDb250ZXh0ID0gKCBtYXBDb250ZXh0VG9Qcm9wcyApID0+IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KCAoIE9yaWdpbmFsQ29tcG9uZW50ICkgPT4ge1xuXHRyZXR1cm4gKCBwcm9wcyApID0+IChcblx0XHQ8Q29uc3VtZXI+XG5cdFx0XHR7ICggY29udGV4dCApID0+IChcblx0XHRcdFx0PE9yaWdpbmFsQ29tcG9uZW50XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdFx0eyAuLi5tYXBDb250ZXh0VG9Qcm9wcyggY29udGV4dCwgcHJvcHMgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIH1cblx0XHQ8L0NvbnN1bWVyPlxuXHQpO1xufSwgJ3dpdGhCbG9ja0VkaXRDb250ZXh0JyApO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoQmxvY2tFZGl0Q29udGV4dCggKCB7IGNsaWVudElkIH0gKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsaWVudElkLFxuXHRcdH07XG5cdH0gKSxcblx0d2l0aFZpZXdwb3J0TWF0Y2goIHsgaXNMYXJnZVZpZXdwb3J0OiAnbWVkaXVtJyB9ICksXG5cdHdpdGhTZWxlY3QoICggc2VsZWN0LCB7IGNsaWVudElkLCBpc0xhcmdlVmlld3BvcnQsIGlzQ29sbGFwc2VkIH0gKSA9PiB7XG5cdFx0Y29uc3QgeyBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRpc0NvbGxhcHNlZDogaXNDb2xsYXBzZWQgfHwgISBpc0xhcmdlVmlld3BvcnQgfHwgKFxuXHRcdFx0XHQhIGdldFNldHRpbmdzKCkuaGFzRml4ZWRUb29sYmFyICYmXG5cdFx0XHRcdGdldEJsb2NrUm9vdENsaWVudElkKCBjbGllbnRJZCApXG5cdFx0XHQpLFxuXHRcdH07XG5cdH0gKSxcbikoIEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXIvaW5kZXguanMiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfeCB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgVG9vbGJhciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aFZpZXdwb3J0TWF0Y2ggfSA9IHdwLnZpZXdwb3J0O1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlLCBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgQ29uc3VtZXIsIFByb3ZpZGVyIH0gPSBjcmVhdGVDb250ZXh0KCB7XG5cdG5hbWU6ICcnLFxuXHRpc1NlbGVjdGVkOiBmYWxzZSxcblx0Zm9jdXNlZEVsZW1lbnQ6IG51bGwsXG5cdHNldEZvY3VzZWRFbGVtZW50OiAoKSA9PiB7fSxcblx0Y2xpZW50SWQ6IG51bGwsXG59ICk7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuXG5jb25zdCBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHR0b3A6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnblRvcCxcblx0XHR0aXRsZTogX3goICdWZXJ0aWNhbGx5IEFsaWduIFRvcCcsICdCbG9jayB2ZXJ0aWNhbCBhbGlnbm1lbnQgc2V0dGluZycgKSxcblx0fSxcblx0Y2VudGVyOiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25DZW50ZXIsXG5cdFx0dGl0bGU6IF94KCAnVmVydGljYWxseSBBbGlnbiBNaWRkbGUnLCAnQmxvY2sgdmVydGljYWwgYWxpZ25tZW50IHNldHRpbmcnICksXG5cdH0sXG5cdGJvdHRvbToge1xuXHRcdGljb246IGljb25zLmFsaWduQm90dG9tLFxuXHRcdHRpdGxlOiBfeCggJ1ZlcnRpY2FsbHkgQWxpZ24gQm90dG9tJywgJ0Jsb2NrIHZlcnRpY2FsIGFsaWdubWVudCBzZXR0aW5nJyApLFxuXHR9LFxufTtcblxuY29uc3QgREVGQVVMVF9DT05UUk9MUyA9IFsgJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJyBdO1xuY29uc3QgREVGQVVMVF9DT05UUk9MID0gJ3RvcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciggeyBpc0NvbGxhcHNlZCwgdmFsdWUsIG9uQ2hhbmdlLCBjb250cm9scyA9IERFRkFVTFRfQ09OVFJPTFMgfSApIHtcblx0ZnVuY3Rpb24gYXBwbHlPclVuc2V0KCBhbGlnbiApIHtcblx0XHRyZXR1cm4gKCkgPT4gb25DaGFuZ2UoIHZhbHVlID09PSBhbGlnbiA/IHVuZGVmaW5lZCA6IGFsaWduICk7XG5cdH1cblxuXHRjb25zdCBhY3RpdmVBbGlnbm1lbnQgPSBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyB2YWx1ZSBdO1xuXHRjb25zdCBkZWZhdWx0QWxpZ25tZW50Q29udHJvbCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIERFRkFVTFRfQ09OVFJPTCBdO1xuXG5cdHJldHVybiAoXG5cdFx0PFRvb2xiYXJcblx0XHRcdGlzQ29sbGFwc2VkPXsgaXNDb2xsYXBzZWQgfVxuXHRcdFx0aWNvbj17IGFjdGl2ZUFsaWdubWVudCA/IGFjdGl2ZUFsaWdubWVudC5pY29uIDogZGVmYXVsdEFsaWdubWVudENvbnRyb2wuaWNvbiB9XG5cdFx0XHRsYWJlbD17IF94KCAnQ2hhbmdlIEFsaWdubWVudCcsICdCbG9jayB2ZXJ0aWNhbCBhbGlnbm1lbnQgc2V0dGluZyBsYWJlbCcgKSB9XG5cdFx0XHRjb250cm9scz17XG5cdFx0XHRcdGNvbnRyb2xzLm1hcCggKCBjb250cm9sICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5CTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyBjb250cm9sIF0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogdmFsdWUgPT09IGNvbnRyb2wsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBhcHBseU9yVW5zZXQoIGNvbnRyb2wgKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHQvPlxuXHQpO1xufVxuXG4vLyBAdG9kbyByZW1vdmUgZnVuY3Rpb24gZGVjbGFyYXRpb24gYW5kIHVzZSBjb3JlIG1ldGhvZCB3aGVuIGV4cG9zZWQgdGhyb3VnaCB0aGUgYXBpXG5jb25zdCB3aXRoQmxvY2tFZGl0Q29udGV4dCA9ICggbWFwQ29udGV4dFRvUHJvcHMgKSA9PiBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCggKCBPcmlnaW5hbENvbXBvbmVudCApID0+IHtcblx0cmV0dXJuICggcHJvcHMgKSA9PiAoXG5cdFx0PENvbnN1bWVyPlxuXHRcdFx0eyAoIGNvbnRleHQgKSA9PiAoXG5cdFx0XHRcdDxPcmlnaW5hbENvbXBvbmVudFxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdHsgLi4ubWFwQ29udGV4dFRvUHJvcHMoIGNvbnRleHQsIHByb3BzICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSB9XG5cdFx0PC9Db25zdW1lcj5cblx0KTtcbn0sICd3aXRoQmxvY2tFZGl0Q29udGV4dCcgKTtcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWVkaXRvci9zcmMvY29tcG9uZW50cy9ibG9jay12ZXJ0aWNhbC1hbGlnbm1lbnQtdG9vbGJhci9SRUFETUUubWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aEJsb2NrRWRpdENvbnRleHQoICggeyBjbGllbnRJZCB9ICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGllbnRJZCxcblx0XHR9O1xuXHR9ICksXG5cdHdpdGhWaWV3cG9ydE1hdGNoKCB7IGlzTGFyZ2VWaWV3cG9ydDogJ21lZGl1bScgfSApLFxuXHR3aXRoU2VsZWN0KCAoIHNlbGVjdCwgeyBjbGllbnRJZCwgaXNMYXJnZVZpZXdwb3J0LCBpc0NvbGxhcHNlZCB9ICkgPT4ge1xuXHRcdGNvbnN0IHsgZ2V0QmxvY2tSb290Q2xpZW50SWQsIGdldFNldHRpbmdzIH0gPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNDb2xsYXBzZWQ6IGlzQ29sbGFwc2VkIHx8ICEgaXNMYXJnZVZpZXdwb3J0IHx8IChcblx0XHRcdFx0ISBnZXRTZXR0aW5ncygpLmhhc0ZpeGVkVG9vbGJhciAmJlxuXHRcdFx0XHRnZXRCbG9ja1Jvb3RDbGllbnRJZCggY2xpZW50SWQgKVxuXHRcdFx0KSxcblx0XHR9O1xuXHR9ICksXG4pKCBCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYmxvY2stdmVydGljYWwtYWxpZ25tZW50LXRvb2xiYXIvaW5kZXguanMiLCJpbXBvcnQge2RlYm91bmNlfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhZGlvQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdGRpc3BhdGNoLFxuXHRzZWxlY3QsXG5cdHN1YnNjcmliZSxcbn0gPSB3cC5kYXRhO1xuXG5sZXQgYmxvY2tMaXN0ID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XG5cbmxldCBkZWJvdW5jZWRPblN1YnNjcmliZSA9IGRlYm91bmNlKCgpID0+IHtcblx0bGV0IG5ld0Jsb2NrTGlzdCA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xuXHRsZXQgYmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5sZW5ndGggIT09IG5ld0Jsb2NrTGlzdC5sZW5ndGg7XG5cblx0aWYgKCAhIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5zb21lKCAoIGJsb2NrLCBpbmRleCApID0+IHtcblx0XHRcdHJldHVybiAoIGJsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgIT09IG5ld0Jsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0ID0gbmV3QmxvY2tMaXN0O1xuXHRcdHVwZGF0ZUJsb2NrcygpO1xuXHR9XG59LCAzMCk7XG5cbnN1YnNjcmliZSggZGVib3VuY2VkT25TdWJzY3JpYmUgKTtcblxuY29uc3QgdXBkYXRlQmxvY2tzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXG5cdHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0fSApLmZpbHRlciggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgeyBhcHBseU1pbmltdW1IZWlnaHQsIHNjcm9sbEluZGljYXRvciB9ID0geyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH07XG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgPSBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdmaXJzdCcgJiYgaW5kZXggPT09IDAgfHwgYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnYWxsJztcblx0XHRjb25zdCBzY3JvbGxJbmRpY2F0b3JCbG9jayA9IHNjcm9sbEluZGljYXRvciA9PT0gdHJ1ZSAmJiBpbmRleCA9PT0gMDtcblxuXHRcdGRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwge1xuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9ja1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9ICk7XG5cbn1cblxuY2xhc3MgSGVpZ2h0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBhcHBseU1pbmltdW1IZWlnaHQgPSAhISBhdHRyaWJ1dGVzLmFwcGx5TWluaW11bUhlaWdodCA/IGF0dHJpYnV0ZXMuYXBwbHlNaW5pbXVtSGVpZ2h0IDogJ2ZpcnN0Jztcblx0XHRjb25zdCBtaW5IZWlnaHQgPSAhISBhdHRyaWJ1dGVzLm1pbkhlaWdodCA/IGF0dHJpYnV0ZXMubWluSGVpZ2h0IDogNzU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQXBwbHkgTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0c2VsZWN0ZWQ9eyBhcHBseU1pbmltdW1IZWlnaHQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgYXBwbHlNaW5pbXVtSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgYXBwbHlNaW5pbXVtSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBhcHBseU1pbmltdW1IZWlnaHQgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9e1xuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ05vbmUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdub25lJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0ZpcnN0IEhlcm8gQmxvY2sgT25seScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2ZpcnN0JyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0FsbCBIZXJvIEJsb2NrcycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2FsbCcgfVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAnbm9uZScgIT09IGFwcGx5TWluaW11bUhlaWdodCAmJlxuXHRcdFx0XHQgICAgPFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBtaW5IZWlnaHQgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1pbkhlaWdodDogcGFyc2VJbnQoIG1pbkhlaWdodCwgMTAgKSB9IClcbi8vXHRcdFx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgbWluSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17XG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDUwIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdUd28gVGhpcmRzJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiA2NiB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnVGhyZWUgUXVhcnRlcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDc1IH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdGdWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAxMDAgfVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdCAgICB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgU2Nyb2xsSW5kaWNhdG9yUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGhlcm9CbG9ja3MgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0XHR9ICk7XG5cblx0XHRjb25zdCBpbmRleCA9IGhlcm9CbG9ja3MuZmluZEluZGV4KCBibG9jayA9PiBibG9jay5jbGllbnRJZCA9PT0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCkgKTtcblxuXHRcdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdTY3JvbGwgSW5kaWNhdG9yJywgJ19fcGx1Z2luX3R4dGQnICkgfSBzdHlsZT17IHsgZGlzcGxheTogaW5kZXggPT09IDAgPyAnYmxvY2snIDogJ25vbmUnIH0gfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIFNjcm9sbCBJbmRpY2F0b3InLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBzY3JvbGxJbmRpY2F0b3IgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHNjcm9sbEluZGljYXRvciA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0SGVpZ2h0UGFuZWwsXG5cdFNjcm9sbEluZGljYXRvclBhbmVsLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlaWdodC1jb250cm9scy9pbmRleC5qcyIsImNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmltcG9ydCBIZXJvQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHRcdC8vIGFsaWdubWVudFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0Ly8gaGVpZ2h0XG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdC8vIGluZGljYXRvcnNcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2ssXG5cdFx0XHRcdC8vIGNvbG9yc1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdH0sXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtaGVybycsXG5cdFx0XHRgbm92YS11LXZhbGlnbi0ke3ZlcnRpY2FsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LWhhbGlnbi0ke2hvcml6b250YWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtc3BhY2luZy0ke2NvbnRlbnRQYWRkaW5nfWAsXG5cdFx0XHRgbm92YS11LWNvbnRlbnQtd2lkdGgtJHtjb250ZW50V2lkdGh9YCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZGAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmQtJHtvdmVybGF5RmlsdGVyU3R5bGV9YFxuXHRcdF1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGhlcm86IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7fSxcblx0XHRcdGNvbnRlbnQ6IHt9LFxuXHRcdH1cblxuXHRcdGlmICggISEgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgKSB7XG5cdFx0XHRzdHlsZXMuaGVyby5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAndmgnXG5cdFx0fVxuXG5cdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nVG9wID0gYCR7Y29udGVudFBhZGRpbmdDdXN0b219JWBcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdCb3R0b20gPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdH1cblxuXHRcdGlmICggY29udGVudFdpZHRoID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlcy5oZXJvfT5cblx0XHRcdFx0PEhlcm9CYWNrZ3JvdW5kIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2ZvcmVncm91bmQgbm92YS11LWNvbnRlbnQtcGFkZGluZycgc3R5bGU9eyBzdHlsZXMuZm9yZWdyb3VuZCB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLXUtY29udGVudC1hbGlnbic+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19pbm5lci1jb250YWluZXIgbm92YS11LWNvbnRlbnQtd2lkdGgnIHN0eWxlPXsgc3R5bGVzLmNvbnRlbnQgfT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzIHRlbXBsYXRlPXtbXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9oZWFkaW5nJywgeyBjb250ZW50OiAnVGhpcyBpcyBhIGNhdGNoeSB0aXRsZScsIGFsaWduOiAnY2VudGVyJywgbGV2ZWw6IDEgfSBdLFxuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBjb250ZW50OiAnQSBicmlsbGlhbnQgc3VidGl0bGUgdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzcycsIGFsaWduOiAnY2VudGVyJyB9IF0sXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9idXR0b24nLCB7IHRleHQ6ICdEaXNjb3ZlciBtb3JlJywgYWxpZ246ICdjZW50ZXInIH0gXSxcblx0XHRcdFx0XHRcdFx0XX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBzY3JvbGxJbmRpY2F0b3JCbG9jayAmJiA8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19pbmRpY2F0b3InPjwvZGl2PiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlcm8vcHJldmlldy5qcyIsImltcG9ydCB3aXRoUGFyYWxsYXggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLXBhcmFsbGF4JztcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY2xhc3MgSGVyb0JhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdFx0bWVkaWFcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdG9wYWNpdHk6IDFcblx0XHR9O1xuXG5cdFx0aWYgKCBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyApIHtcblx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19iYWNrZ3JvdW5kJyBzdHlsZT17IHRoaXMucHJvcHMuc3R5bGUgfT5cblx0XHRcdFx0e21lZGlhLnR5cGUgPT09ICdpbWFnZScgJiYgdHlwZW9mIG1lZGlhLnNpemVzICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0XHQgJiYgPGltZyBjbGFzc05hbWU9J25vdmEtaGVyb19fbWVkaWEnIHNyYz17bWVkaWEuc2l6ZXMuZnVsbC51cmx9IHN0eWxlPXtzdHlsZXN9Lz59XG5cdFx0XHRcdHttZWRpYS50eXBlID09PSAndmlkZW8nXG5cdFx0XHRcdCAmJiA8dmlkZW8gbXV0ZWQgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9J25vdmEtaGVyb19fbWVkaWEnIHNyYz17bWVkaWEudXJsfSBzdHlsZT17c3R5bGVzfS8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyYWxsYXgoIEhlcm9CYWNrZ3JvdW5kICk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZXJvL2JhY2tncm91bmQuanMiLCJpbXBvcnQgKiBhcyBpY29ucyBmcm9tIFwiLi4vLi4vaWNvbnNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRNZWRpYVVwbG9hZCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5pbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scywgQWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JDb250cm9scywgQ29sb3JUb29sYmFyLFxuXHRPdmVybGF5Q29udHJvbHMsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScsICd2aWRlbycgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb0Jsb2NrQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0PEFsaWdubWVudFRvb2xiYXIgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDxDb2xvclRvb2xiYXIgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgbWVkaWEgfSApIH1cblx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29tcG9uZW50cy1pY29uLWJ1dHRvbiBjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDaGFuZ2UgTWVkaWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5zd2FwIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdDwvQmxvY2tDb250cm9scz5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZXJvL2NvbnRyb2xzLmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlLCB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCAnbm92YS9tZWRpYScsXG5cdHtcblx0XHR0aXRsZTogX18oICdNZWRpYSBDYXJkIENvbnN0ZWxsYXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oICdEaXNwbGF5IG1lZGlhIG9iamVjdHMgYWxvbmdzaWRlIHNob3J0IHBpZWNlcyBvZiBjb250ZW50LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGNhdGVnb3J5OiAnbm92YS1ieS1waXhlbGdyYWRlJyxcblx0XHRpY29uOiBpY29ucy5tZWRpYSxcblx0XHRlZGl0LFxuXHRcdHNhdmUoKSB7XG5cdFx0XHRyZXR1cm4gPElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdH0sXG5cdFx0Z2V0RWRpdFdyYXBwZXJQcm9wcygpIHtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmFsaWduV2lkZSA/IHtcblx0XHRcdFx0J2RhdGEtYWxpZ24nOiAnZnVsbCdcblx0XHRcdH0gOiB7fVxuXHRcdH0sXG5cdH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVkaWEvaW5kZXguanMiLCJjb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InO1xuaW1wb3J0IE1lZGlhUHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHR1cGRhdGVJbWFnZXMoIG1lZGlhICkge1xuXHRcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRpbWFnZXM6IG1lZGlhLm1hcCggKCBpbWFnZSApID0+IEpTT04uc3RyaW5naWZ5KHsgaWQ6IGltYWdlLmlkLCB1cmw6IGltYWdlLnVybCwgYWx0OiBpbWFnZS5hbHQgfSkgKVxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PE1lZGlhUHJldmlldyB7IC4uLnRoaXMucHJvcHMgfSB1cGRhdGVJbWFnZXM9eyB0aGlzLnVwZGF0ZUltYWdlcy5iaW5kKCB0aGlzICkgfSAvPlxuXHRcdFx0XHQ8Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gdXBkYXRlSW1hZ2VzPXsgdGhpcy51cGRhdGVJbWFnZXMuYmluZCggdGhpcyApIH0gLz5cblx0XHRcdFx0PEluc3BlY3RvciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHRdXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVkaWEvZWRpdC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG5cdEJsb2NrQ29udHJvbHNcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRJY29uQnV0dG9uLFxuXHRUb29sYmFyXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0dXBkYXRlSW1hZ2VzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYVBvc2l0aW9uLFxuXHRcdFx0aW1hZ2VzID0gW10sXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCAoIChpbWFnZSkgID0+IEpTT04ucGFyc2UoaW1hZ2UpKTtcblxuXHRcdGNvbnN0IGhhc0ltYWdlcyA9ICEhIGltYWdlcy5sZW5ndGg7XG5cblx0XHRjb25zdCBNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHRcdFx0bGVmdDoge1xuXHRcdFx0XHRpY29uOiAnYWxpZ24tcHVsbC1sZWZ0Jyxcblx0XHRcdFx0dGl0bGU6IF9fKCAnU2hvdyBNZWRpYSBvbiBMZWZ0IFNpZGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdH0sXG5cdFx0XHRyaWdodDoge1xuXHRcdFx0XHRpY29uOiAnYWxpZ24tcHVsbC1yaWdodCcsXG5cdFx0XHRcdHRpdGxlOiBfXyggJ1Nob3cgTWVkaWEgb24gUmlnaHQgU2lkZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgdG9vbGJhckNvbnRyb2xzID0gKFxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxUb29sYmFyXG5cdFx0XHRcdFx0Y29udHJvbHM9eyBPYmplY3Qua2V5cyhNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTKS5tYXAoY29udHJvbCA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQuLi5NRURJQV9BTElHTk1FTlRTX0NPTlRST0xTW2NvbnRyb2xdLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7IHNldEF0dHJpYnV0ZXMoeyBtZWRpYVBvc2l0aW9uOiBjb250cm9sIH0gKX0sXG5cdFx0XHRcdFx0XHRcdGlzQWN0aXZlOiBtZWRpYVBvc2l0aW9uID09PSBjb250cm9sXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGhhc0ltYWdlcyAmJiA8VG9vbGJhcj5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdHR5cGUgPSBcImltYWdlXCJcblx0XHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0XHRnYWxsZXJ5XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHsgZ2FsbGVyeUltYWdlcy5tYXAoICggaW1hZ2UgKSA9PiBpbWFnZS5pZCApIH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyB1cGRhdGVJbWFnZXMgfVxuXHRcdFx0XHRcdFx0cmVuZGVyID0geyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29tcG9uZW50cy1pY29uLWJ1dHRvbiBjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NoYW5nZSBNZWRpYScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuc3dhcCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz0geyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGVuKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj4gfVxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHR7IHRvb2xiYXJDb250cm9scyB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9sc1xufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9sc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UmFkaW9Db250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jbGFzcyBJbnNwZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoIHByb3BzICkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdGNvbnRlbnRTdHlsZSxcblx0XHRcdGJsb2NrU3R5bGUsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdDb250ZW50IEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuID0geyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ0VtcGhhc2lzIExldmVsJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgY29udGVudFN0eWxlIH1cblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQgPSB7IGNvbnRlbnRTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMgPSB7IFtcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0Jhc2ljJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnYmFzaWMnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdNb2RlcmF0ZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ21vZGVyYXRlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnSGlnaGxpZ2h0ZWQnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdoaWdobGlnaHRlZCcgfVxuXHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7IGNvbnRlbnRTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRTdHlsZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0Jsb2NrIEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuID0geyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ0VtcGhhc2lzIExldmVsJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgYmxvY2tTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBibG9ja1N0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnQmFzaWMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdiYXNpYycgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ01vZGVyYXRlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbW9kZXJhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdIaWdobGlnaHRlZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2hpZ2hsaWdodGVkJyB9XG5cdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsgYmxvY2tTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJsb2NrU3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0b3I7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVkaWEvaW5zcGVjdG9yLmpzIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRJbm5lckJsb2Nrcyxcblx0TWVkaWFQbGFjZWhvbGRlclxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydjb3JlL2J1dHRvbicsICdjb3JlL3BhcmFncmFwaCcsICdjb3JlL2hlYWRpbmcnXTtcbmNvbnN0IFRFTVBMQVRFID0gW1xuXHRbJ2NvcmUvaGVhZGluZycsIHtjb250ZW50OiAnU2hvb3QgZm9yIHRoZSBtb29uLCBFdmVuIGlmIFlvdSBNaXNzIGl0JywgbGV2ZWw6IDR9XSxcblx0Wydjb3JlL2hlYWRpbmcnLCB7Y29udGVudDogJ1dlbGNvbWUgdG8gb3VyIHBsYW5ldCwgbG9vayBhbmQgZmVlbCBtYXR0ZXJzIScsIGxldmVsOiAyfV0sXG5cdFsnY29yZS9wYXJhZ3JhcGgnLCB7Y29udGVudDogJ1dlXFwndmUgYWx3YXlzIGRlZmluZWQgb3Vyc2VsdmVzIGJ5IHRoZSBhYmlsaXR5IHRvIG92ZXJjb21lIHRoZSBpbXBvc3NpYmxlLiBBbmQgd2UgY291bnQgdGhlc2UgbW9tZW50cy4gVGhlc2UgbW9tZW50cyB3aGVuIHdlIGRhcmUgdG8gYWltIGhpZ2hlciwgdG8gYnJlYWsgYmFycmllcnMsIHRvIHJlYWNoIGZvciB0aGUgc3RhcnMsIHRvIG1ha2UgdGhlIHVua25vd24ga25vd24uJ31dLFxuXHRbJ2NvcmUvYnV0dG9uJywge3RleHQ6ICdEaXNjb3ZlciBNb3JlJ31dXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0dXBkYXRlSW1hZ2VzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdFx0bWVkaWFQb3NpdGlvbixcblx0XHRcdGltYWdlcyxcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0YG5vdmEtbWVkaWFgLFxuXHRcdFx0YGhhcy1pbWFnZS1vbi10aGUtJHttZWRpYVBvc2l0aW9ufWAsXG5cdFx0XHRgYmxvY2staXMtJHtibG9ja1N0eWxlfWAsXG5cdFx0XHRgY29udGVudC1pcy0ke2NvbnRlbnRTdHlsZX1gLFxuXHRcdCk7XG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCAoIChpbWFnZSkgID0+IEpTT04ucGFyc2UoaW1hZ2UpKTtcblxuXHRcdGNvbnN0IGRpc3BsYXlJbWFnZXMgPSAoaW1hZ2VzKSA9PiB7XG5cblx0XHRcdGlmICggMCA9PT0gaW1hZ2VzLmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdGljb24gPSBcImZvcm1hdC1nYWxsZXJ5XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gXCJub3ZhLW1lZGlhX19wbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyB1cGRhdGVJbWFnZXMgfVxuXHRcdFx0XHRcdFx0XHRhY2NlcHQgPSBcImltYWdlLypcIlxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXMgPSB7IFsgJ2ltYWdlJyBdIH1cblx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdGdhbGxlcnlJbWFnZXMubWFwKCAoaW1hZ2UpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0nbm92YS1tZWRpYV9faW1hZ2UnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgYWx0PXsgaW1hZ2UuYWx0IH0gc3JjPXsgaW1hZ2UudXJsIH0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2lubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2tcIiBkYXRhLWFsaWduPVwid2lkZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19sYXlvdXRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19jb250ZW50IG5vdmEtbWVkaWFfX2lubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17QUxMT1dFRF9CTE9DS1N9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fYXNpZGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheUltYWdlcyggaW1hZ2VzICl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lZGlhL3ByZXZpZXcuanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL3NsaWRlc2hvdycsXG5cdHtcblx0XHR0aXRsZTogX18oICdTbGlkZXNob3cgTWUgdGhlIFdheScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgbW9yZSB0aGFuIG9uZSBwaWVjZSBvZiBjb250ZW50IGluIGEgc2luZ2xlLCBjb3ZldGVkIHNwYWNlLicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGNhdGVnb3J5OiAnbm92YS1ieS1waXhlbGdyYWRlJyxcblx0XHRpY29uOiBpY29ucy5zbGlkZXNob3csXG5cdFx0ZWRpdCxcblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50Lz5cblx0XHR9LFxuXHRcdGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2V0dGluZ3MoKTtcblx0XHRcdHJldHVybiBzZXR0aW5ncy5hbGlnbldpZGUgPyB7XG5cdFx0XHRcdCdkYXRhLWFsaWduJzogJ2Z1bGwnXG5cdFx0XHR9IDoge31cblx0XHR9LFxuXHR9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9pbmRleC5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0UGFyYWxsYXhQYW5lbCxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JUb29sYmFyLFxuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsXCI7XG5cbmltcG9ydCBTbGlkZXNob3dQcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGRlZmF1bHRHYWxsZXJ5SW1hZ2VzID0gW3tcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTYwMHg5MDBcIixcblx0XCJpZFwiOiAtMSxcblx0XCJzaXplc1wiOiB7XG5cdFx0XCJ0aHVtYm5haWxcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTUweDE1MFwiXG5cdFx0fSxcblx0XHRcImxhcmdlXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL19ucUFwZ0ctUXJZLzE2MDB4OTAwXCIsXG5cdFx0XHRcIndpZHRoXCI6IDE2MDAsXG5cdFx0XHRcImhlaWdodFwiOiA5MDBcblx0XHR9XG5cdH1cbn0sIHtcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XCJhbHRcIjogXCJUaGlzIGlzIGEgY2F0Y2h5IGltYWdlIHRpdGxlXCIsXG5cdFwiY2FwdGlvblwiOiBcIkEgYnJpbGxpYW50IGNhcHRpb24gdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzc1wiLFxuXHRcImlkXCI6IC0yLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9HdF80aU1CN2hZMC8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufSwge1xuXHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNjAweDkwMFwiLFxuXHRcImlkXCI6IC0zLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMXZLVG53TE1kcXMvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZEluZGV4OiAwXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGdhbGxlcnlJbWFnZXNcblx0XHRcdH0sXG5cdFx0XHRjbGllbnRJZFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKCAhIGdhbGxlcnlJbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggY2xpZW50SWQsIHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlczogc2h1ZmZsZUFycmF5KCBkZWZhdWx0R2FsbGVyeUltYWdlcy5zbGljZSgwKSApXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0b25QcmV2QXJyb3dDbGljaygpIHtcblx0XHRjb25zdCB7IGF0dHJpYnV0ZXM6IHsgZ2FsbGVyeUltYWdlcyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBuZXdJbmRleCA9ICggc2VsZWN0ZWRJbmRleCArIGdhbGxlcnlJbWFnZXMubGVuZ3RoIC0gMSApICUgZ2FsbGVyeUltYWdlcy5sZW5ndGg7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4OiBuZXdJbmRleCB9ICk7XG5cdH1cblxuXHRvbk5leHRBcnJvd0NsaWNrKCkge1xuXHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyBnYWxsZXJ5SW1hZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBzZWxlY3RlZEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gKCBzZWxlY3RlZEluZGV4ICsgMSApICUgZ2FsbGVyeUltYWdlcy5sZW5ndGg7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4OiBuZXdJbmRleCB9ICk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHNsaWRlc2hvd1R5cGUsXG5cdFx0XHRcdGdhbGxlcnlJbWFnZXMsXG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0aXNTZWxlY3RlZCxcblx0XHRcdGNsYXNzTmFtZVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0bGV0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGlmICggc2VsZWN0ZWRJbmRleCA+PSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCApIHtcblx0XHRcdHNlbGVjdGVkSW5kZXggPSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblxuXHRcdFx0XHQ8U2xpZGVzaG93UHJldmlld1xuXHRcdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XG5cdFx0XHRcdFx0cHJldmlld0ltYWdlPXsgZ2FsbGVyeUltYWdlc1sgc2VsZWN0ZWRJbmRleCBdIH1cblx0XHRcdFx0XHRvblByZXZBcnJvd0NsaWNrPXsgdGhpcy5vblByZXZBcnJvd0NsaWNrLmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdFx0b25OZXh0QXJyb3dDbGljaz17IHRoaXMub25OZXh0QXJyb3dDbGljay5iaW5kKCB0aGlzICkgfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdub3ZhLWJsb2Nrcy1zbGlkZXNob3ctdHlwZS1wYW5lbCcgfVxuXHRcdFx0XHRcdFx0dGl0bGU9eyBfXyggJ1NsaWRlc2hvdyBUeXBlJywgJ19fcGx1Z2luX3R4dGQnICkgfT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2xpZGVzaG93VHlwZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2xpZGVzaG93VHlwZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNsaWRlc2hvd1R5cGUgfSApIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0dhbGxlcnknLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnZ2FsbGVyeSdcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnY3VzdG9tJ1xuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1Byb2plY3RzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3Byb2plY3RzJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ICEhIGdhbGxlcnlJbWFnZXMubGVuZ3RoICYmIDxHYWxsZXJ5UHJldmlld1xuXHRcdFx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzPXsgZ2FsbGVyeUltYWdlcyB9XG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0SW1hZ2U9eyBzZWxlY3RlZEluZGV4ID0+IHsgdGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4IH0gKSB9IH1cblx0XHRcdFx0XHRcdFx0aXNTZWxlY3RlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17IHNlbGVjdGVkSW5kZXggfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0PEdhbGxlcnlQbGFjZWhvbGRlciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0eyAnZ2FsbGVyeScgPT09IHNsaWRlc2hvd1R5cGUgJiYgPEZyYWdtZW50PlxuXG5cdFx0XHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbWluSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWluSGVpZ2h0OiBwYXJzZUludCggbWluSGVpZ2h0LCAxMCApIH0gKVxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdBdXRvJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMFxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA1MFxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1R3byBUaGlyZHMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2NlxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1RocmVlIFF1YXJ0ZXJzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNzVcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdGdWxsIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDEwMFxuXHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYXJhbGxheFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyAhPT0gc2xpZGVzaG93VHlwZSAmJiA8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0NvbWluZyBTb29uJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0XHQ8QWxpZ25tZW50VG9vbGJhciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDxDb2xvclRvb2xiYXIgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9zbGlkZXNob3cvZWRpdC5qcyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDUwOTc2XG5leHBvcnQgY29uc3Qgc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24oIGFycmF5ICkge1xuXHR2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cblx0Ly8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cblx0d2hpbGUgKCAwICE9PSBjdXJyZW50SW5kZXggKSB7XG5cblx0XHQvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cblx0XHRyYW5kb21JbmRleCA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXggKTtcblx0XHRjdXJyZW50SW5kZXggLT0gMTtcblxuXHRcdC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cblx0XHR0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG5cdFx0YXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcblx0XHRhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcblx0fVxuXG5cdHJldHVybiBhcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3V0aWwuanMiLCJjb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IHtcblx0R2FsbGVyeVBsYWNlaG9sZGVyXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2xpZGVzaG93QmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5jb25zdCB7XG5cdE1lZGlhVXBsb2FkLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXNob3dQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQoIHRoaXMgKSApO1xuXHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHR9XG5cblx0dXBkYXRlRGltZW5zaW9ucygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRpbWVuc2lvbnM6IHtcblx0XHRcdFx0d2lkdGg6IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXJDb250ZW50KCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQvLyBsYXlvdXRcblx0XHRcdFx0Y29udGVudFBhZGRpbmcsXG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0XHRjb250ZW50V2lkdGgsXG5cdFx0XHRcdGNvbnRlbnRXaWR0aEN1c3RvbSxcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdC8vIGFsaWdubWVudFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0Ly8gY29sb3JzXG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGgsXG5cdFx0XHRcdC8vIG1lZGlhXG5cdFx0XHRcdGdhbGxlcnlJbWFnZXNcblx0XHRcdH0sXG5cdFx0XHRwcmV2aWV3SW1hZ2UsXG5cdFx0XHRjbGFzc05hbWVcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBbXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHQnbm92YS1zbGlkZXNob3cgaXMtcmVhZHknLFxuXHRcdFx0YG5vdmEtdS12YWxpZ24tJHt2ZXJ0aWNhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1oYWxpZ24tJHtob3Jpem9udGFsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LXNwYWNpbmctJHtjb250ZW50UGFkZGluZ31gLFxuXHRcdFx0YG5vdmEtdS1jb250ZW50LXdpZHRoLSR7Y29udGVudFdpZHRofWAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmRgLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kLSR7b3ZlcmxheUZpbHRlclN0eWxlfWBcblx0XHRdXG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRzbGlkZXNob3c6IHsgY29sb3I6IGNvbnRlbnRDb2xvciB9LFxuXHRcdFx0Y29udGVudDoge30sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7fSxcblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRQYWRkaW5nID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdUb3AgPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdFx0c3R5bGVzLmZvcmVncm91bmQucGFkZGluZ0JvdHRvbSA9IGAke2NvbnRlbnRQYWRkaW5nQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdHN0eWxlcy5zbGlkZXNob3cubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3ZoJ1xuXHRcdH1cblxuXHRcdGlmICggY29udGVudFdpZHRoID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0bGV0IG1heEFzcGVjdFJhdGlvID0gMDtcblx0XHRsZXQgbWVkaWFNaW5IZWlnaHQgPSAwO1xuXHRcdGxldCBzbGlkZXJXaWR0aCA9IDA7XG5cblx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggaW1hZ2UgPT4ge1xuXHRcdFx0aWYgKCAhISBpbWFnZS5zaXplcyAmJiAhISBpbWFnZS5zaXplcy5sYXJnZSAmJiAhISBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCApIHtcblx0XHRcdFx0Y29uc3QgYXNwZWN0UmF0aW8gPSBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCAvIGltYWdlLnNpemVzLmxhcmdlLmhlaWdodDtcblx0XHRcdFx0bWF4QXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbyA+IG1heEFzcGVjdFJhdGlvID8gYXNwZWN0UmF0aW8gOiBtYXhBc3BlY3RSYXRpbztcblx0XHRcdFx0bWVkaWFNaW5IZWlnaHQgPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggLyBtYXhBc3BlY3RSYXRpbztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRzdHlsZXMuc2xpZGVyID0ge1xuXHRcdFx0bWluSGVpZ2h0OiBNYXRoLm1heCggbWVkaWFNaW5IZWlnaHQsIG1heEFzcGVjdFJhdGlvICkgKyAncHgnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0eyAhISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAmJiA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gc3R5bGU9eyBzdHlsZXMuc2xpZGVzaG93IH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVyXCIgc3R5bGU9eyBzdHlsZXMuc2xpZGVyIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19zbGlkZVwiPlxuXHRcdFx0XHRcdFx0XHR7IHByZXZpZXdJbWFnZSAmJiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PFNsaWRlc2hvd0JhY2tncm91bmQgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250ZW50IG5vdmEtdS1jb250ZW50LXBhZGRpbmdcIiBzdHlsZT17IHN0eWxlcy5mb3JlZ3JvdW5kIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtdS1jb250ZW50LWFsaWduXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtd2lkdGhcIiBzdHlsZT17IHN0eWxlcy5jb250ZW50IH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAhISBwcmV2aWV3SW1hZ2UuYWx0ICYmIDxoMj57IHByZXZpZXdJbWFnZS5hbHQgfTwvaDI+IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ICEhIHByZXZpZXdJbWFnZS5jYXB0aW9uICYmIDxwPnsgcHJldmlld0ltYWdlLmNhcHRpb24gfTwvcD4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUHJldkFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV4dEFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHR7ICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdCA8R2FsbGVyeVBsYWNlaG9sZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2Fycm93IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tcHJldiBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLWRpc2FibGVkXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIj48L2Rpdj5cblx0XHRcdFx0XHQgPC9kaXY+XG5cdFx0XHRcdCA8L0ZyYWdtZW50PiB9XG5cdFx0ICAgIDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgZGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9eyBlbCA9PiAoIHRoaXMuY29udGFpbmVyID0gZWwgKSB9PlxuXHRcdFx0XHR7IGRpbWVuc2lvbnMgJiYgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9wcmV2aWV3LmpzIiwiaW1wb3J0IHdpdGhQYXJhbGxheCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcGFyYWxsYXgnO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jbGFzcyBTbGlkZXNob3dCYWNrZ3JvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGgsXG5cdFx0XHR9XG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRvcGFjaXR5OiAxXG5cdFx0fTtcblxuXHRcdGlmICggb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgKSB7XG5cdFx0XHRzdHlsZXMub3BhY2l0eSA9IDEgLSBvdmVybGF5RmlsdGVyU3RyZW5ndGggLyAxMDBcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYmFja2dyb3VuZFwiIHN0eWxlPXsgdGhpcy5wcm9wcy5zdHlsZSB9PlxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19tZWRpYVwiIHNyYz17IHRoaXMucHJvcHMucHJldmlld0ltYWdlLnNpemVzLmxhcmdlLnVybCB9IGFsdD1cIlwiIHN0eWxlPXsgc3R5bGVzIH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyYWxsYXgoIFNsaWRlc2hvd0JhY2tncm91bmQgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3Mvc2xpZGVzaG93L2JhY2tncm91bmQuanMiXSwic291cmNlUm9vdCI6IiJ9