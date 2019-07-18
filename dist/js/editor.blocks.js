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
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { d: "M18 2L20 6H18L16 2H13L15 6H13L11 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V2H18ZM20 14H10V4.4L11.8 8H20V14Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M14 20H4V10H7V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20V17H14V20Z", fill: "currentColor" }),
    wp.element.createElement("path", { d: "M5 19H13L11.41 17H9.24L8.4 18.1L7 16.3L5 19Z", fill: "currentColor" })
);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_options__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_controls__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alignment_controls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__height_controls__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__alignment_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__alignment_controls__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["a"]; });
/* unused harmony reexport ColorPanel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__gallery_options__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__gallery_options__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__height_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__color_controls__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__parallax_panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__height_controls__["b"]; });













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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__block_vertical_alignment_toolbar__ = __webpack_require__(134);











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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_editor_scss__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_hero__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_media__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_slideshow__ = __webpack_require__(151);







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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls__ = __webpack_require__(138);













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
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["h" /* LayoutPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["g" /* HeightPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["k" /* ScrollIndicatorPanel */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["j" /* ParallaxPanel */], this.props)
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
$export($export.S + $export.F * !__webpack_require__(11), 'Object', { defineProperty: __webpack_require__(13).f });


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
/* 82 */
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
var DESCRIPTORS = __webpack_require__(11);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(50);
var META = __webpack_require__(91).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(26);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(92);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(28);
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
/* 91 */
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
/* 92 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(9);
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
var aFunction = __webpack_require__(27);
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
__webpack_require__(29)($Promise, PROMISE);
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
var anObject = __webpack_require__(10);
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
/* unused harmony export ColorPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OverlayControls; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons__ = __webpack_require__(12);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(12);

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
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockVerticalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(12);

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
/* 135 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(9);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background__ = __webpack_require__(137);





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
/* 138 */
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
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["i" /* OverlayControls */], _this2.props)
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
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(150);

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
/* 140 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"imageAlt":{"attribute":"alt"},"backgroundColor":{"type":"string","default":"#000"},"mediaPosition":{"default":"left"},"mediaStyle":{"default":"simple"},"contentStyle":{"default":"basic"},"blockStyle":{"default":"basic"},"backgroundType":{"type":"string","default":"transparent"},"images":{"type":"array","default":[]}}}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(142);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(149);







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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(145);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons__ = __webpack_require__(12);









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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 147 */
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
			var mediaStyle = attributes.mediaStyle,
			    contentStyle = attributes.contentStyle,
			    blockStyle = attributes.blockStyle,
			    mediaPosition = attributes.mediaPosition,
			    images = attributes.images;


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
/* 150 */
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
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(152);
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
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_util__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preview__ = __webpack_require__(154);






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
						!!galleryImages.length && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["f" /* GalleryPreview */], {
							galleryImages: galleryImages,
							onSelectImage: function onSelectImage(selectedIndex) {
								_this2.setState({ selectedIndex: selectedIndex });
							},
							isSelected: isSelected,
							selected: selectedIndex
						}),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["e" /* GalleryPlaceholder */], this.props)
					),
					'gallery' === slideshowType && wp.element.createElement(
						Fragment,
						null,
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["h" /* LayoutPanel */], this.props),
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
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["j" /* ParallaxPanel */], this.props)
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
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["d" /* ColorToolbar */], this.props)
				)
			);
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 153 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__background__ = __webpack_require__(155);





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
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components__["e" /* GalleryPlaceholder */], this.props),
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
/* 155 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2ZmZDM1OTUzZTllZmViNDBiMjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZXJvL2F0dHJpYnV0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlcm8vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC1wYW5lbC9wYWRkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC1wYW5lbC93aWR0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJhbGxheC1wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5LW9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9jay1ob3Jpem9udGFsLWFsaWdubWVudC10b29sYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jsb2NrLXZlcnRpY2FsLWFsaWdubWVudC10b29sYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlaWdodC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlcm8vcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlcm8vYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlcm8vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21lZGlhL2F0dHJpYnV0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21lZGlhL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZWRpYS9pbnNwZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tZWRpYS9wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWVkaWEvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zbGlkZXNob3cvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIndwIiwiY29tcG9uZW50cyIsIlNWRyIsIlBhdGgiLCJub3ZhIiwiaGVybyIsIm1lZGlhIiwic2xpZGVzaG93IiwiYWxpZ25Cb3R0b20iLCJhbGlnbkNlbnRlciIsImFsaWduVG9wIiwiYWxpZ25tZW50IiwiaW52ZXJ0Iiwic3dhcCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIkRyb3Bkb3duIiwiSWNvbkJ1dHRvbiIsIlBhbmVsUm93IiwiVG9vbGJhciIsIkFsaWdubWVudFRvb2xiYXIiLCJpc09wZW4iLCJvblRvZ2dsZSIsImljb25zIiwib25DbG9zZSIsInByb3BzIiwiQWxpZ25tZW50Q29udHJvbHMiLCJhdHRyaWJ1dGVzIiwiYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2siLCJob3Jpem9udGFsQWxpZ25tZW50IiwidmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiZGF0YSIsInNlbGVjdCIsImdldFNlbGVjdGVkQmxvY2siLCJpbm5lckJsb2NrcyIsIm1hcCIsImRpc3BhdGNoIiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiYmxvY2siLCJjbGllbnRJZCIsImFsaWduIiwid2l0aFBhcmFsbGF4IiwiV3JhcHBlZENvbXBvbmVudCIsInN0YXRlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwcm9ncmVzcyIsInVwZGF0ZUhhbmRsZXIiLCJ1cGRhdGVEaW1lbnNpb25zIiwiYmluZCIsInNjcm9sbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyQm94IiwiY29udGFpbmVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsIm9mZnNldEhlaWdodCIsImFjdHVhbFByb2dyZXNzIiwiTWF0aCIsIm1heCIsIm1pbiIsInNldFN0YXRlIiwic2Nyb2xsVG9wIiwiZGltZW5zaW9ucyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJlbmFibGVQYXJhbGxheCIsInBhcmFsbGF4QW1vdW50IiwicGFyYWxsYXhDdXN0b21BbW91bnQiLCJhY3R1YWxQYXJhbGxheEFtb3VudCIsInBhcnNlSW50IiwibmV3SGVpZ2h0Iiwic2NhbGUiLCJvZmZzZXRZIiwibW92ZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJlbCIsImdldFBhcmFsbGF4U3R5bGVzIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJJbm5lckJsb2NrcyIsImJsb2NrRWRpdG9yIiwidGl0bGUiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImVkaXQiLCJzYXZlIiwiZ2V0RWRpdFdyYXBwZXJQcm9wcyIsInNldHRpbmdzIiwiZ2V0U2V0dGluZ3MiLCJhbGlnbldpZGUiLCJJbnNwZWN0b3JDb250cm9scyIsImVkaXRvckRhdGEiLCJ1cGRhdGVCbG9ja3MiLCJnZXRCbG9ja3MiLCJmaWx0ZXIiLCJuYW1lIiwiaGVyb0Jsb2NrSW5kZXgiLCJhcHBseU1pbmltdW1IZWlnaHQiLCJzY3JvbGxJbmRpY2F0b3IiLCJzY3JvbGxJbmRpY2F0b3JCbG9jayIsImJsb2NrSW5kZXgiLCJmaW5kSW5kZXgiLCJ0ZXN0QmxvY2siLCJibG9ja0xpc3QiLCJkZWJvdW5jZWRPblN1YnNjcmliZSIsIm5ld0Jsb2NrTGlzdCIsImJsb2NrTGlzdENoYW5nZWQiLCJsZW5ndGgiLCJzb21lIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJFZGl0IiwiUGFuZWxCb2R5IiwiTGF5b3V0UGFuZWwiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiUmFuZ2VDb250cm9sIiwiUGFkZGluZ0NvbnRyb2xzIiwiY29udGVudFBhZGRpbmciLCJjb250ZW50UGFkZGluZ0N1c3RvbSIsImNvbnRlbnRQYWRkaW5nT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJXaWR0aENvbnRyb2xzIiwiY29udGVudFdpZHRoIiwiY29udGVudFdpZHRoQ3VzdG9tIiwiY29udGVudFdpZHRoT3B0aW9ucyIsIlJhZGlvQ29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJQYXJhbGxheFBhbmVsIiwiRm9ybUZpbGVVcGxvYWQiLCJTZWxlY3RDb250cm9sIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVBsYWNlaG9sZGVyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkdhbGxlcnlQbGFjZWhvbGRlciIsImdhbGxlcnlJbWFnZXMiLCJwcm9taXNlcyIsImltYWdlIiwiYXBpUmVxdWVzdCIsInBhdGgiLCJpZCIsInRoZW4iLCJuZXdJbWFnZSIsImFsbCIsInNpemVzIiwibGFyZ2UiLCJ1cmwiLCJzZWxlY3RlZCIsIm9uU2VsZWN0SW1hZ2UiLCJvbkNoYW5nZSIsImhhc0ltYWdlcyIsImluc3RydWN0aW9ucyIsIm9uQ2hhbmdlR2FsbGVyeSIsInVuZGVmaW5lZCIsIkdhbGxlcnlQcmV2aWV3IiwiaXNTZWxlY3RlZCIsImltZyIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsInRodW1ibmFpbCIsIkNvbG9yUGFsZXR0ZSIsIlBhbmVsQ29sb3JTZXR0aW5ncyIsImNvbG9ycyIsImNvbG9yIiwiT3ZlcmxheUNvbnRyb2xzIiwib3ZlcmxheUZpbHRlclN0eWxlIiwib3ZlcmxheUZpbHRlclN0cmVuZ3RoIiwiQ29sb3JDb250cm9scyIsImNvbnRlbnRDb2xvciIsIkNvbG9yUGFuZWwiLCJDb2xvclRvb2xiYXIiLCJ3aXRoVmlld3BvcnRNYXRjaCIsInZpZXdwb3J0Iiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsImNyZWF0ZUNvbnRleHQiLCJmb2N1c2VkRWxlbWVudCIsInNldEZvY3VzZWRFbGVtZW50IiwiQ29uc3VtZXIiLCJQcm92aWRlciIsIkJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJERUZBVUxUX0NPTlRST0xTIiwiREVGQVVMVF9DT05UUk9MIiwiQmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhciIsImlzQ29sbGFwc2VkIiwiY29udHJvbHMiLCJhcHBseU9yVW5zZXQiLCJhY3RpdmVBbGlnbm1lbnQiLCJkZWZhdWx0QWxpZ25tZW50Q29udHJvbCIsImNvbnRyb2wiLCJpc0FjdGl2ZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJ3aXRoQmxvY2tFZGl0Q29udGV4dCIsIm1hcENvbnRleHRUb1Byb3BzIiwiT3JpZ2luYWxDb21wb25lbnQiLCJpc0xhcmdlVmlld3BvcnQiLCJnZXRCbG9ja1Jvb3RDbGllbnRJZCIsImhhc0ZpeGVkVG9vbGJhciIsIl94IiwiYm90dG9tIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJIZWlnaHRQYW5lbCIsIm1pbkhlaWdodCIsIlNjcm9sbEluZGljYXRvclBhbmVsIiwiaGVyb0Jsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImRpc3BsYXkiLCJIZXJvUHJldmlldyIsInN0eWxlcyIsImZvcmVncm91bmQiLCJjb250ZW50IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXhXaWR0aCIsImxldmVsIiwidGV4dCIsIkhlcm9CYWNrZ3JvdW5kIiwib3BhY2l0eSIsInN0eWxlIiwidHlwZSIsImZ1bGwiLCJCbG9ja0NvbnRyb2xzIiwiSGVyb0Jsb2NrQ29udHJvbHMiLCJvcGVuIiwiaW1hZ2VzIiwiYWx0IiwidXBkYXRlSW1hZ2VzIiwiQ29udHJvbHMiLCJtZWRpYVBvc2l0aW9uIiwiSlNPTiIsInBhcnNlIiwiTUVESUFfQUxJR05NRU5UU19DT05UUk9MUyIsInRvb2xiYXJDb250cm9scyIsIkluc3BlY3RvciIsIm1lZGlhU3R5bGUiLCJjb250ZW50U3R5bGUiLCJibG9ja1N0eWxlIiwiQUxMT1dFRF9CTE9DS1MiLCJURU1QTEFURSIsIk1lZGlhUHJldmlldyIsImNsYXNzTmFtZXMiLCJjbGFzc25hbWVzIiwiZGlzcGxheUltYWdlcyIsIlNhdmUiLCJkZWZhdWx0R2FsbGVyeUltYWdlcyIsInNlbGVjdGVkSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJzbGljZSIsIm5ld0luZGV4Iiwic2xpZGVzaG93VHlwZSIsIm9uUHJldkFycm93Q2xpY2siLCJvbk5leHRBcnJvd0NsaWNrIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJTbGlkZXNob3dQcmV2aWV3IiwicHJldmlld0ltYWdlIiwibWF4QXNwZWN0UmF0aW8iLCJtZWRpYU1pbkhlaWdodCIsInNsaWRlcldpZHRoIiwiYXNwZWN0UmF0aW8iLCJzbGlkZXIiLCJjYXB0aW9uIiwicmVuZGVyQ29udGVudCIsIlNsaWRlc2hvd0JhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLEVBQTRDLHNCOzs7Ozs7O0FDQXJFOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1JhOztBQUViOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLEVBQW1DOztBQUVqRTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7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LEVBQTRDLE9BQVEsS0FBSzdKLEtBQUwsQ0FBV3NOLEtBQS9EO0FBQ0Msc0NBQUssV0FBVSx1QkFBZixFQUF1QyxLQUFNLEtBQUt0TixLQUFMLENBQVcrUCxZQUFYLENBQXdCekgsS0FBeEIsQ0FBOEJDLEtBQTlCLENBQW9DQyxHQUFqRixFQUF1RixLQUFJLEVBQTNGLEVBQThGLE9BQVFvRSxNQUF0RztBQURELElBREQ7QUFLQTs7OztFQXBCZ0N2TixTOztBQXVCbkI0QiwySUFBWUEsQ0FBRXNQLG1CQUFkLENBQWYsRSIsImZpbGUiOiIuL2Rpc3QvanMvZWRpdG9yLmJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZmZkMzU5NTNlOWVmZWI0MGIyMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBTVkcsIFBhdGggfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBjb25zdCBub3ZhID0gKFxuICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMThDMCA4LjA1ODg4IDguMDU4ODggMCAxOCAwQzI3Ljk0MTEgMCAzNiA4LjA1ODg4IDM2IDE4QzM2IDI3Ljk0MTEgMjcuOTQxMSAzNiAxOCAzNkM4LjA1ODg4IDM2IDAgMjcuOTQxMSAwIDE4Wk0xMi4wMzk4IDE0QzEyLjQwNjkgMTAuNjI2IDE1LjI2NTIgOCAxOC43MzY4IDhIMjAuNDIxMUMyNC42MDY4IDggMjggMTEuMzkzMiAyOCAxNS41Nzg5VjE2LjM4MUMyOCAyMC4zODA5IDI0LjkxNzcgMjMuNjYwOSAyMC45OTg3IDIzLjk3NTNDMjAuOTk5NiAyMy45MzI0IDIxIDIzLjg4OTMgMjEgMjMuODQ2MlYyMS4yNzI3QzIxIDE3LjI1NjEgMTcuNzQzOSAxNCAxMy43MjczIDE0SDEyLjAzOThaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAyMS4yODU3QzggMTguOTE4OCA5LjkxODc4IDE3IDEyLjI4NTcgMTdIMTMuNDU0NUMxNS45NjQ5IDE3IDE4IDE5LjAzNTEgMTggMjEuNTQ1NVYyMy4xNTM4QzE4IDI1LjI3OCAxNi4yNzggMjcgMTQuMTUzOCAyN0gxMy43MTQzQzEwLjU1ODQgMjcgOCAyNC40NDE2IDggMjEuMjg1N1pcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBoZXJvID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8bWFzayBpZD1cIm1hc2swXCIgbWFzay10eXBlPVwiYWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBaTTQgOC40OTEyM0M0IDYuMDEwNzkgNy4wMTYxOSA0IDEwLjczNjggNEgxMS42MTlDMTYuMjQ3NyA0IDIwIDYuNTAxNTIgMjAgOS41ODczQzIwIDEyLjM5MjYgMTYuNTg4OCAxNC42NjY3IDEyLjM4MSAxNC42NjY3SDExLjU3ODlDNy4zOTMyMSAxNC42NjY3IDQgMTIuNDA0NSA0IDkuNjE0MDNWOC40OTEyM1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxOC43MTQzQzcgMTkuNDI0NCA3LjU3NTYzIDIwIDguMjg1NzEgMjBIMTUuNUMxNi4zMjg0IDIwIDE3IDE5LjMyODQgMTcgMTguNVYxOC41QzE3IDE3LjY3MTYgMTYuMzI4NCAxNyAxNS41IDE3SDguNzE0MjlDNy43Njc1MSAxNyA3IDE3Ljc2NzUgNyAxOC43MTQzVjE4LjcxNDNaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBtZWRpYSA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJwYXRoLTEtb3V0c2lkZS0xXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiLTJcIiB5PVwiLTJcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBmaWxsPVwiYmxhY2tcIj5cbiAgICAgICAgICAgIDxyZWN0IGZpbGw9XCJ3aGl0ZVwiIHg9XCItMlwiIHk9XCItMlwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMEM4LjA1ODg4IDAgMCA4LjA1ODg4IDAgMThDMCAyNy45NDExIDguMDU4ODggMzYgMTggMzZDMjcuOTQxMSAzNiAzNiAyNy45NDExIDM2IDE4QzM2IDguMDU4ODggMjcuOTQxMSAwIDE4IDBaTTIzLjQ3MzcgMjVDMjAuNDUwNyAyNSAxOCAyMi41NDkzIDE4IDE5LjUyNjNWMTguODA5NUMxOCAxNS4wNDg3IDIxLjA0ODcgMTIgMjQuODA5NSAxMkMyOC4yMjg0IDEyIDMxIDE0Ljc3MTYgMzEgMTguMTkwNVYxOC44NDIxQzMxIDIyLjI0MyAyOC4yNDMgMjUgMjQuODQyMSAyNUgyMy40NzM3WlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4IDBDOC4wNTg4OCAwIDAgOC4wNTg4OCAwIDE4QzAgMjcuOTQxMSA4LjA1ODg4IDM2IDE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg4IDI3Ljk0MTEgMCAxOCAwWk0yMy40NzM3IDI1QzIwLjQ1MDcgMjUgMTggMjIuNTQ5MyAxOCAxOS41MjYzVjE4LjgwOTVDMTggMTUuMDQ4NyAyMS4wNDg3IDEyIDI0LjgwOTUgMTJDMjguMjI4NCAxMiAzMSAxNC43NzE2IDMxIDE4LjE5MDVWMTguODQyMUMzMSAyMi4yNDMgMjguMjQzIDI1IDI0Ljg0MjEgMjVIMjMuNDczN1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yIDE4QzIgOS4xNjM0NCA5LjE2MzQ0IDIgMTggMlYtMkM2Ljk1NDMxIC0yIC0yIDYuOTU0MzEgLTIgMThIMlpNMTggMzRDOS4xNjM0NCAzNCAyIDI2LjgzNjYgMiAxOEgtMkMtMiAyOS4wNDU3IDYuOTU0MzEgMzggMTggMzhWMzRaTTM0IDE4QzM0IDI2LjgzNjYgMjYuODM2NiAzNCAxOCAzNFYzOEMyOS4wNDU3IDM4IDM4IDI5LjA0NTcgMzggMThIMzRaTTE4IDJDMjYuODM2NiAyIDM0IDkuMTYzNDQgMzQgMThIMzhDMzggNi45NTQzMSAyOS4wNDU3IC0yIDE4IC0yVjJaTTE2IDE5LjUyNjNDMTYgMjMuNjUzOSAxOS4zNDYxIDI3IDIzLjQ3MzcgMjdWMjNDMjEuNTU1MiAyMyAyMCAyMS40NDQ4IDIwIDE5LjUyNjNIMTZaTTE2IDE4LjgwOTVWMTkuNTI2M0gyMFYxOC44MDk1SDE2Wk0yNC44MDk1IDEwQzE5Ljk0NDIgMTAgMTYgMTMuOTQ0MiAxNiAxOC44MDk1SDIwQzIwIDE2LjE1MzMgMjIuMTUzMyAxNCAyNC44MDk1IDE0VjEwWk0zMyAxOC4xOTA1QzMzIDEzLjY2NyAyOS4zMzMgMTAgMjQuODA5NSAxMFYxNEMyNy4xMjM5IDE0IDI5IDE1Ljg3NjEgMjkgMTguMTkwNUgzM1pNMzMgMTguODQyMVYxOC4xOTA1SDI5VjE4Ljg0MjFIMzNaTTI0Ljg0MjEgMjdDMjkuMzQ3NiAyNyAzMyAyMy4zNDc2IDMzIDE4Ljg0MjFIMjlDMjkgMjEuMTM4NCAyNy4xMzg0IDIzIDI0Ljg0MjEgMjNWMjdaTTIzLjQ3MzcgMjdIMjQuODQyMVYyM0gyMy40NzM3VjI3WlwiIGZpbGw9XCJ3aGl0ZVwiIG1hc2s9XCJ1cmwoI3BhdGgtMS1vdXRzaWRlLTEpXCIvPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDMwQzguNjg2MjkgMzAgNiAyNy4zMTM3IDYgMjRWMTRDNiA5LjU4MTcyIDkuNTgxNzIgNiAxNCA2SDE2QzE4LjcyOCA2IDIwLjk0NTggOC4xODQ3NSAyMC45OTkgMTAuOUMxOC4wMzg4IDEyLjM0NzEgMTYgMTUuMzg3OCAxNiAxOC45MDQ4VjE5Ljg0MjFDMTYgMjIuOTQ4NCAxNy45Nzg2IDI1LjU5MjUgMjAuNzQ0MyAyNi41ODI5QzIwLjA4MjEgMjguNTY4NSAxOC4yMDgyIDMwIDE2IDMwSDEyWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlc2hvdyA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJtYXNrMFwiIG1hc2stdHlwZT1cImFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByeD1cIjEyXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPGcgbWFzaz1cInVybCgjbWFzazApXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwVjBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJWMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0VjI0QzUuMzcyNTggMjQgMCAxOC42Mjc0IDAgMTJWMTJaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjM5ODIgOC45OTI4M0MxNy44ODMxIDkuMzkyODIgMTcuODgzMSAxMC4xMzU4IDE3LjM5ODIgMTAuNTM1N0wxNC45NjczIDEyLjU0MDdDMTQuMzE1IDEzLjA3ODcgMTMuMzMxIDEyLjYxNDcgMTMuMzMxIDExLjc2OTJWNy43NTkzM0MxMy4zMzEgNi45MTM4NiAxNC4zMTUgNi40NDk5MiAxNC45NjczIDYuOTg3ODhMMTcuMzk4MiA4Ljk5MjgzWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi42MDE4NCA4Ljk5MjgzQzYuMTE2ODkgOS4zOTI4MiA2LjExNjg5IDEwLjEzNTggNi42MDE4NCAxMC41MzU3TDkuMDMyNzIgMTIuNTQwN0M5LjY4NDk2IDEzLjA3ODcgMTAuNjY5IDEyLjYxNDcgMTAuNjY5IDExLjc2OTJWNy43NTkzM0MxMC42NjkgNi45MTM4NiA5LjY4NDk2IDYuNDQ5OTIgOS4wMzI3MiA2Ljk4Nzg4TDYuNjAxODQgOC45OTI4M1pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTguMjc1MUM3IDE4LjgwMzMgNy40MjgxOCAxOS4yMzE0IDcuOTU2MzcgMTkuMjMxNEg4LjIxNzJDOC43Nzc0IDE5LjIzMTQgOS4yMzE1NCAxOC43NzczIDkuMjMxNTQgMTguMjE3MVYxNy44NTgyQzkuMjMxNTQgMTcuMzg0MiA4Ljg0NzI3IDE2Ljk5OTkgOC4zNzMyNSAxNi45OTk5SDguMjc1MTdDNy41NzA5MSAxNi45OTk5IDcgMTcuNTcwOCA3IDE4LjI3NTFWMTguMjc1MVpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNzE5MiAxOC4yNzUxQzEwLjcxOTIgMTguODAzMyAxMS4xNDc0IDE5LjIzMTQgMTEuNjc1NiAxOS4yMzE0SDExLjkzNjRDMTIuNDk2NiAxOS4yMzE0IDEyLjk1MDggMTguNzc3MyAxMi45NTA4IDE4LjIxNzFWMTcuODU4MkMxMi45NTA4IDE3LjM4NDIgMTIuNTY2NSAxNi45OTk5IDEyLjA5MjUgMTYuOTk5OUgxMS45OTQ0QzExLjI5MDEgMTYuOTk5OSAxMC43MTkyIDE3LjU3MDggMTAuNzE5MiAxOC4yNzUxVjE4LjI3NTFaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjQzODUgMTguMjc1MUMxNC40Mzg1IDE4LjgwMzMgMTQuODY2NyAxOS4yMzE0IDE1LjM5NDggMTkuMjMxNEgxNS42NTU3QzE2LjIxNTkgMTkuMjMxNCAxNi42NyAxOC43NzczIDE2LjY3IDE4LjIxNzFWMTcuODU4MkMxNi42NyAxNy4zODQyIDE2LjI4NTcgMTYuOTk5OSAxNS44MTE3IDE2Ljk5OTlIMTUuNzEzNkMxNS4wMDk0IDE2Ljk5OTkgMTQuNDM4NSAxNy41NzA4IDE0LjQzODUgMTguMjc1MVYxOC4yNzUxWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBhbGlnbkJvdHRvbSA9IChcbiAgICA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gICAgICAgIDxQYXRoIGQ9XCJNMTYgMTNoLTNWM2gtMnYxMEg4bDQgNCA0LTR6TTQgMTl2MmgxNnYtMkg0elwiIC8+XG4gICAgPC9TVkc+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxpZ25DZW50ZXIgPSAoXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICAgICAgICA8UGF0aCBkPVwiTTggMTloM3Y0aDJ2LTRoM2wtNC00LTQgNHptOC0xNGgtM1YxaC0ydjRIOGw0IDQgNC00ek00IDExdjJoMTZ2LTJINHpcIlxuICAgICAgICAvPlxuICAgIDwvU1ZHPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsaWduVG9wID0gKFxuICAgIDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz5cbiAgICAgICAgPFBhdGggZD1cIk04IDExaDN2MTBoMlYxMWgzbC00LTQtNCA0ek00IDN2MmgxNlYzSDR6XCIgLz5cbiAgICA8L1NWRz5cbik7XG5cbmV4cG9ydCBjb25zdCBhbGlnbm1lbnQgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNTQgNS41NEwxMy43NyA3LjNMMTIgNS41NEwxMC4yMyA3LjNMOC40NiA1LjU0TDEyIDJMMTUuNTQgNS41NFpNMTguNDYgMTUuNTRMMTYuNyAxMy43N0wxOC40NiAxMkwxNi43IDEwLjIzTDE4LjQ2IDguNDZMMjIgMTJMMTguNDYgMTUuNTRaTTguNDYgMTguNDZMMTAuMjMgMTYuN0wxMiAxOC40NkwxMy43NyAxNi43TDE1LjU0IDE4LjQ2TDEyIDIyTDguNDYgMTguNDZaTTUuNTQgOC40Nkw3LjMgMTAuMjNMNS41NCAxMkw3LjMgMTMuNzdMNS41NCAxNS41NEwyIDEyTDUuNTQgOC40NlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDE1QzEzLjY1NjkgMTUgMTUgMTMuNjU2OSAxNSAxMkMxNSAxMC4zNDMxIDEzLjY1NjkgOSAxMiA5QzEwLjM0MzEgOSA5IDEwLjM0MzEgOSAxMkM5IDEzLjY1NjkgMTAuMzQzMSAxNSAxMiAxNVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGludmVydCA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yMCAxNS4zMDk5TDIzLjMxIDExLjk5OTlMMjAgOC42ODk5NFYzLjk5OTk0SDE1LjMxTDEyIDAuNjg5OTQxTDguNjkgMy45OTk5NEg0VjguNjg5OTRMMC42OTAwMDIgMTEuOTk5OUw0IDE1LjMwOTlWMTkuOTk5OUg4LjY5TDEyIDIzLjMwOTlMMTUuMzEgMTkuOTk5OUgyMFYxNS4zMDk5Wk0xMiAxNy45OTk5VjUuOTk5OTRDMTUuMzEgNS45OTk5NCAxOCA4LjY4OTk0IDE4IDExLjk5OTlDMTggMTUuMzA5OSAxNS4zMSAxNy45OTk5IDEyIDE3Ljk5OTlaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzd2FwID0gKFxuICAgIDxzdmcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG4gICAgICAgIDxwYXRoIGQ9J00xOCAyTDIwIDZIMThMMTYgMkgxM0wxNSA2SDEzTDExIDJIMTBDOS40Njk1NyAyIDguOTYwODYgMi4yMTA3MSA4LjU4NTc5IDIuNTg1NzlDOC4yMTA3MSAyLjk2MDg2IDggMy40Njk1NyA4IDRWMTRDOCAxNC41MzA0IDguMjEwNzEgMTUuMDM5MSA4LjU4NTc5IDE1LjQxNDJDOC45NjA4NiAxNS43ODkzIDkuNDY5NTcgMTYgMTAgMTZIMjBDMjAuNTMwNCAxNiAyMS4wMzkxIDE1Ljc4OTMgMjEuNDE0MiAxNS40MTQyQzIxLjc4OTMgMTUuMDM5MSAyMiAxNC41MzA0IDIyIDE0VjJIMThaTTIwIDE0SDEwVjQuNEwxMS44IDhIMjBWMTRaJyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgIDxwYXRoIGQ9J00xNCAyMEg0VjEwSDdWOEg0QzMuNDY5NTcgOCAyLjk2MDg2IDguMjEwNzEgMi41ODU3OSA4LjU4NTc5QzIuMjEwNzEgOC45NjA4NiAyIDkuNDY5NTcgMiAxMFYyMEMyIDIwLjUzMDQgMi4yMTA3MSAyMS4wMzkxIDIuNTg1NzkgMjEuNDE0MkMyLjk2MDg2IDIxLjc4OTMgMy40Njk1NyAyMiA0IDIySDE0QzE0LjUzMDQgMjIgMTUuMDM5MSAyMS43ODkzIDE1LjQxNDIgMjEuNDE0MkMxNS43ODkzIDIxLjAzOTEgMTYgMjAuNTMwNCAxNiAyMFYxN0gxNFYyMFonIGZpbGw9J2N1cnJlbnRDb2xvcicgLz5cbiAgICAgICAgPHBhdGggZD0nTTUgMTlIMTNMMTEuNDEgMTdIOS4yNEw4LjQgMTguMUw3IDE2LjNMNSAxOVonIGZpbGw9J2N1cnJlbnRDb2xvcicgLz5cbiAgICA8L3N2Zz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbnMuanMiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExheW91dFBhbmVsIGZyb20gJy4vbGF5b3V0LXBhbmVsJztcbmltcG9ydCBQYXJhbGxheFBhbmVsIGZyb20gJy4vcGFyYWxsYXgtcGFuZWwnO1xuXG5pbXBvcnQge1xuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxufSBmcm9tICcuL2dhbGxlcnktb3B0aW9ucyc7XG5cbmltcG9ydCB7XG5cdENvbG9yQ29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdENvbG9yVG9vbGJhcixcblx0T3ZlcmxheUNvbnRyb2xzXG59IGZyb20gJy4vY29sb3ItY29udHJvbHMnO1xuXG5pbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhclxufSBmcm9tICcuL2FsaWdubWVudC1jb250cm9scyc7XG5cbmltcG9ydCB7XG5cdEhlaWdodFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbFxufSBmcm9tICcuL2hlaWdodC1jb250cm9scyc7XG5cbmV4cG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdEdhbGxlcnlQcmV2aWV3LFxuXHRHYWxsZXJ5UGxhY2Vob2xkZXIsXG5cdEhlaWdodFBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0T3ZlcmxheUNvbnRyb2xzLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuXHRsZXQgdGltZW91dCA9IG51bGw7XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcztcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0Y29uc3QgbGF0ZXIgPSAoKSA9PiB7XG5cdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXInO1xuaW1wb3J0IEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLXZlcnRpY2FsLWFsaWdubWVudC10b29sYmFyJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxSb3csXG5cdFRvb2xiYXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY2xhc3MgQWxpZ25tZW50VG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ29udGVudCBhbGlnbm1lbnQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXG5cdFx0KVxuXHR9XG59XG5cbmNsYXNzIEFsaWdubWVudENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0XHRob3Jpem9udGFsQWxpZ25tZW50LFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8c3Bhbj57IF9fKCAnSG9yaXpvbnRhbCcsICdfX3BsdWdpbl90eHRkJyApIH08L3NwYW4+XG5cdFx0XHRcdFx0PEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXtob3Jpem9udGFsQWxpZ25tZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hvcml6b250YWxBbGlnbm1lbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHR3cC5kYXRhLnNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCkuaW5uZXJCbG9ja3MubWFwKCBibG9jayA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggYmxvY2suY2xpZW50SWQsIHsgYWxpZ246IGhvcml6b250YWxBbGlnbm1lbnQgfSApO1xuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaG9yaXpvbnRhbEFsaWdubWVudCB9IClcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0eyBhcHBseU1pbmltdW1IZWlnaHRCbG9jayAmJiA8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PHNwYW4+eyBfXyggJ1ZlcnRpY2FsJywgJ19fcGx1Z2luX3R4dGQnICkgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2ZXJ0aWNhbEFsaWdubWVudCA9PiBzZXRBdHRyaWJ1dGVzKCB7dmVydGljYWxBbGlnbm1lbnR9ICl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbFJvdz4gfVxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEFsaWdubWVudFRvb2xiYXIsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL2luZGV4LmpzIiwiY29uc3Qge1xuXHRDb21wb25lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG4vLyBUYWtlIGluIGEgY29tcG9uZW50IGFzIGFyZ3VtZW50IFdyYXBwZWRDb21wb25lbnRcbmNvbnN0IHdpdGhQYXJhbGxheCA9IGZ1bmN0aW9uKCBXcmFwcGVkQ29tcG9uZW50ICkge1xuXG5cdC8vIEFuZCByZXR1cm4gYSBuZXcgYW5vbnltb3VzIGNvbXBvbmVudFxuXHRyZXR1cm4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cblx0XHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcdHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0d2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdHByb2dyZXNzOiAwLjUsXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudXBkYXRlSGFuZGxlciA9IHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHRjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXBvc3QtbGF5b3V0X19jb250ZW50JylbMF07XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZUhhbmRsZXIgKTtcblx0XHRcdHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMudXBkYXRlSGFuZGxlciApO1xuXHRcdFx0dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHRjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXBvc3QtbGF5b3V0X19jb250ZW50JylbMF07XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy51cGRhdGVIYW5kbGVyICk7XG5cdFx0XHRzY3JvbGxDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVIYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0dXBkYXRlRGltZW5zaW9ucygpIHtcblx0XHRcdGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQtcG9zdC1sYXlvdXRfX2NvbnRlbnQnKVswXTtcblx0XHRcdGNvbnN0IGNvbnRhaW5lckJveCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSAoIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0IC0gY29udGFpbmVyQm94LnkgKSAvICggdGhpcy5zdGF0ZS53aW5kb3dIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQgKTtcblx0XHRcdGNvbnN0IGFjdHVhbFByb2dyZXNzID0gTWF0aC5tYXgoIE1hdGgubWluKCBwcm9ncmVzcywgMSApLCAwICk7XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHRzY3JvbGxUb3A6IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AsXG5cdFx0XHRcdHByb2dyZXNzOiBhY3R1YWxQcm9ncmVzcyxcblx0XHRcdFx0ZGltZW5zaW9uczoge1xuXHRcdFx0XHRcdHdpZHRoOiB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCxcblx0XHRcdFx0XHR0b3A6IGNvbnRhaW5lckJveC55LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Z2V0UGFyYWxsYXhTdHlsZXMoKSB7XG5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdGVuYWJsZVBhcmFsbGF4LFxuXHRcdFx0XHRcdHBhcmFsbGF4QW1vdW50LFxuXHRcdFx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0XHR9XG5cdFx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdFx0aWYgKCAhIGVuYWJsZVBhcmFsbGF4ICkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9XG5cblx0XHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyc2VJbnQoIHBhcmFsbGF4QW1vdW50LCAxMCApO1xuXHRcdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oIDEsIGFjdHVhbFBhcmFsbGF4QW1vdW50IC8gMTAwICksIDAgKTtcblxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRkaW1lbnNpb25zLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQsXG5cdFx0XHRcdHByb2dyZXNzXG5cdFx0XHR9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdFx0Y29uc3QgbmV3SGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQgKiAoMSAtIGFjdHVhbFBhcmFsbGF4QW1vdW50KSArIHdpbmRvd0hlaWdodCAqIGFjdHVhbFBhcmFsbGF4QW1vdW50O1xuXHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXdIZWlnaHQgLyBkaW1lbnNpb25zLmhlaWdodDtcblx0XHRcdGNvbnN0IG9mZnNldFkgPSBkaW1lbnNpb25zLmhlaWdodCAqICggMSAtIHNjYWxlICkgLyAyO1xuXHRcdFx0Y29uc3QgbW92ZSA9ICggd2luZG93SGVpZ2h0ICsgZGltZW5zaW9ucy5oZWlnaHQgKSAqICggcHJvZ3Jlc3MgLSAwLjUgKSAqIGFjdHVhbFBhcmFsbGF4QW1vdW50O1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWlnaHQ6IG5ld0hlaWdodCxcblx0XHRcdFx0dHJhbnNpdGlvbjogJ25vbmUnLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnICsgKCBtb3ZlICsgb2Zmc2V0WSApICsgJ3B4KSdcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCkge1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWFza1wiIHJlZj17IGVsID0+ICggdGhpcy5jb250YWluZXIgPSBlbCApIH0+XG5cdFx0XHRcdFx0eyB0aGlzLnN0YXRlLmRpbWVuc2lvbnMgJiYgPFdyYXBwZWRDb21wb25lbnQgeyAuLi50aGlzLnByb3BzIH0gc3R5bGU9eyB0aGlzLmdldFBhcmFsbGF4U3R5bGVzKCkgfSAvPiB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyYWxsYXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcIi4vc2Nzcy9lZGl0b3Iuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9oZXJvXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9tZWRpYVwiO1xuaW1wb3J0IFwiLi9ibG9ja3Mvc2xpZGVzaG93XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWRpdG9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL2hlcm8nLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCAnSGVybyBvZiB0aGUgR2FsYXh5JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogaWNvbnMuaGVybyxcblx0XHRkZXNjcmlwdGlvbjogX18oICdBIGdyZWF0IHdheSB0byBnZXQgeW91ciB2aXNpdG9ycyBhY3F1YWludGVkIHdpdGggeW91ciBjb250ZW50LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGNhdGVnb3J5OiBcIm5vdmEtYnktcGl4ZWxncmFkZVwiLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+XG5cdFx0fSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvaGVyby9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImNvbnRlbnRQYWRkaW5nXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJtZWRpdW1cIn0sXCJjb250ZW50UGFkZGluZ0N1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjc1fSxcImNvbnRlbnRXaWR0aFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwibGFyZ2VcIn0sXCJjb250ZW50V2lkdGhDdXN0b21cIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjoxMDB9LFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwidmVydGljYWxBbGlnbm1lbnRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcImNlbnRlclwifSxcImVuYWJsZVBhcmFsbGF4XCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOnRydWV9LFwicGFyYWxsYXhBbW91bnRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIjUwXCJ9LFwicGFyYWxsYXhDdXN0b21BbW91bnRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjo1MH0sXCJlbmFibGVNaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJhcHBseU1pbmltdW1IZWlnaHRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX2FwcGx5X21pbmltdW1faGVpZ2h0XCJ9LFwibWluSGVpZ2h0XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJzb3VyY2VcIjpcIm1ldGFcIixcIm1ldGFcIjpcIm5vdmFfaGVyb19taW5pbXVtX2hlaWdodFwifSxcImFwcGx5TWluaW11bUhlaWdodEJsb2NrXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOmZhbHNlfSxcInNjcm9sbEluZGljYXRvclwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX3Njcm9sbF9pbmRpY2F0b3JcIn0sXCJzY3JvbGxJbmRpY2F0b3JCbG9ja1wiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjpmYWxzZX0sXCJiYWNrZ3JvdW5kVHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiaW1hZ2VcIn0sXCJtZWRpYVwiOntcInR5cGVcIjpcIm9iamVjdFwiLFwiZGVmYXVsdFwiOntcInR5cGVcIjpcImltYWdlXCIsXCJzaXplc1wiOntcImZ1bGxcIjp7XCJ1cmxcIjpcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ5NjMxOTk4LTZkNTU0YjE0MDJhZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTYwMCZxPTgwXCIsXCJ1cmwxXCI6XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODA2NjAwMDcxNC01OGM0NWYxYTJjMGE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MFwifX19fSxcImNvbnRlbnRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiI0ZGRlwifSxcIm92ZXJsYXlGaWx0ZXJTdHlsZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZGFya1wifSxcIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjMwfSxcImltYWdlc1wiOntcInR5cGVcIjpcImFycmF5XCIsXCJkZWZhdWx0XCI6W119fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaGVyby9hdHRyaWJ1dGVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5pbXBvcnQge1xuXHRIZWlnaHRQYW5lbCxcblx0TGF5b3V0UGFuZWwsXG5cdFBhcmFsbGF4UGFuZWwsXG5cdFNjcm9sbEluZGljYXRvclBhbmVsLFxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgSGVyb1ByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcbmltcG9ydCBIZXJvQmxvY2tDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3QgZWRpdG9yRGF0YSA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk7XG5cbmNvbnN0IHVwZGF0ZUJsb2NrcyA9ICggYXR0cmlidXRlcyApID0+IHtcblx0Y29uc3QgYmxvY2tzID0gZWRpdG9yRGF0YS5nZXRCbG9ja3MoKTtcblxuXHRibG9ja3MuZmlsdGVyKCBibG9jayA9PiB7XG5cdFx0cmV0dXJuIGJsb2NrLm5hbWUgPT09ICdub3ZhL2hlcm8nO1xuXHR9ICkuZmlsdGVyKCAoIGJsb2NrLCBoZXJvQmxvY2tJbmRleCApID0+IHtcblx0XHRjb25zdCB7IGFwcGx5TWluaW11bUhlaWdodCwgc2Nyb2xsSW5kaWNhdG9yIH0gPSB7IC4uLmJsb2NrLmF0dHJpYnV0ZXMsIC4uLmF0dHJpYnV0ZXMgfTtcblx0XHRjb25zdCBhcHBseU1pbmltdW1IZWlnaHRCbG9jayA9IGFwcGx5TWluaW11bUhlaWdodCA9PT0gJ2ZpcnN0JyAmJiBoZXJvQmxvY2tJbmRleCA9PT0gMCB8fCBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdhbGwnO1xuXHRcdGNvbnN0IHNjcm9sbEluZGljYXRvckJsb2NrID0gc2Nyb2xsSW5kaWNhdG9yID09PSB0cnVlICYmIGhlcm9CbG9ja0luZGV4ID09PSAwO1xuXHRcdGNvbnN0IGJsb2NrSW5kZXggPSBibG9ja3MuZmluZEluZGV4KCB0ZXN0QmxvY2sgPT4gYmxvY2sgPT09IHRlc3RCbG9jayApO1xuXG5cdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggYmxvY2suY2xpZW50SWQsIHtcblx0XHRcdGJsb2NrSW5kZXgsXG5cdFx0XHRhcHBseU1pbmltdW1IZWlnaHRCbG9jayxcblx0XHRcdHNjcm9sbEluZGljYXRvckJsb2NrXG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gKTtcblxufVxuXG5sZXQgYmxvY2tMaXN0ID0gZWRpdG9yRGF0YS5nZXRCbG9ja3MoKTtcbmxldCBkZWJvdW5jZWRPblN1YnNjcmliZSA9IGRlYm91bmNlKCgpID0+IHtcblxuXHRjb25zdCBuZXdCbG9ja0xpc3QgPSBlZGl0b3JEYXRhLmdldEJsb2NrcygpO1xuXHRsZXQgYmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5sZW5ndGggIT09IG5ld0Jsb2NrTGlzdC5sZW5ndGg7XG5cblx0aWYgKCAhIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5zb21lKCAoIGJsb2NrLCBpbmRleCApID0+IHtcblx0XHRcdHJldHVybiAoIGJsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgIT09IG5ld0Jsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0ID0gbmV3QmxvY2tMaXN0O1xuXHRcdHVwZGF0ZUJsb2NrcygpO1xuXHR9XG59LCAzMCk7XG5cbndwLmRhdGEuc3Vic2NyaWJlKCBkZWJvdW5jZWRPblN1YnNjcmliZSApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SGVyb1ByZXZpZXcgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PEhlcm9CbG9ja0NvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHQ8L0ZyYWdtZW50Pixcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PExheW91dFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxIZWlnaHRQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8U2Nyb2xsSW5kaWNhdG9yUGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PFBhcmFsbGF4UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlcm8vZWRpdC5qcyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGlzRW51bS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFBhZGRpbmdDb250cm9scyBmcm9tIFwiLi9wYWRkaW5nXCI7XG5pbXBvcnQgV2lkdGhDb250cm9scyBmcm9tIFwiLi93aWR0aFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIDxQYW5lbEJvZHlcblx0XHRcdGNsYXNzTmFtZT1cInBpeGVsZ3JhZGUtaGVyby1idXR0b24tZ3JvdXAtd3JhcHBlclwiXG5cdFx0XHR0aXRsZT17IF9fKCAnTGF5b3V0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0aW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cblx0XHRcdDxQYWRkaW5nQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDxXaWR0aENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xheW91dC1wYW5lbC9pbmRleC5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZGRpbmdDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudFBhZGRpbmcsXG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGNvbnRlbnRQYWRkaW5nT3B0aW9ucyA9IFtcblx0XHRcdHsgbGFiZWw6IF9fKCAnU21hbGwnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdzbWFsbCcgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTWVkaXVtJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbWVkaXVtJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdMYXJnZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2xhcmdlJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdjdXN0b20nIH0sXG5cdFx0XTtcblxuXHRcdHJldHVybiA8RnJhZ21lbnQ+XG5cdFx0XHQ8bGFiZWw+eyBfXyggJ0NvbnRlbnQgUGFkZGluZycsICdfX3BsdWdpbl90eHRkJykgfTwvbGFiZWw+XG5cdFx0XHQ8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdHsgY29udGVudFBhZGRpbmdPcHRpb25zLm1hcCggb3B0aW9uID0+XG5cdFx0XHRcdFx0PEJ1dHRvbiBrZXk9eyBvcHRpb24udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHQ9eyBvcHRpb24udmFsdWUgIT09IGNvbnRlbnRQYWRkaW5nIH1cblx0XHRcdFx0XHQgICAgICAgIGlzUHJpbWFyeT17IG9wdGlvbi52YWx1ZSA9PT0gY29udGVudFBhZGRpbmcgfVxuXHRcdFx0XHRcdCAgICAgICAgb25DbGljaz17ICgpID0+IHsgc2V0QXR0cmlidXRlcyggeyBjb250ZW50UGFkZGluZzogb3B0aW9uLnZhbHVlIH0gKSB9IH0+XG5cdFx0XHRcdFx0XHR7IG9wdGlvbi5sYWJlbCB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdHsgJ2N1c3RvbScgPT09IGNvbnRlbnRQYWRkaW5nICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBjb250ZW50UGFkZGluZ0N1c3RvbSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudFBhZGRpbmdDdXN0b20gPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50UGFkZGluZ0N1c3RvbSB9ICkgfVxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MjV9XG5cdFx0XHQvPiB9XG5cdFx0PC9GcmFnbWVudD5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3BhZGRpbmcuanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFJhbmdlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWR0aENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50V2lkdGgsXG5cdFx0XHRcdGNvbnRlbnRXaWR0aEN1c3RvbSxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjb250ZW50V2lkdGhPcHRpb25zID0gW1xuXHRcdFx0eyBsYWJlbDogX18oICdGdWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnZnVsbCcgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTGFyZ2UnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdsYXJnZScgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTmFycm93JywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbmFycm93JyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdjdXN0b20nIH0sXG5cdFx0XTtcblxuXHRcdHJldHVybiA8RnJhZ21lbnQ+XG5cdFx0XHQ8bGFiZWw+eyBfXyggJ0NvbnRlbnQgV2lkdGgnLCAnX19wbHVnaW5fdHh0ZCcpIH08L2xhYmVsPlxuXHRcdFx0PEJ1dHRvbkdyb3VwIGxhYmVsPVwiQ29udGVudCBXaWR0aFwiPlxuXHRcdFx0XHR7IGNvbnRlbnRXaWR0aE9wdGlvbnMubWFwKCBvcHRpb24gPT5cblx0XHRcdFx0XHQ8QnV0dG9uIGlzRGVmYXVsdD17IG9wdGlvbi52YWx1ZSAhPT0gY29udGVudFdpZHRoIH1cblx0XHRcdFx0XHQgICAgICAgIGlzUHJpbWFyeT17IG9wdGlvbi52YWx1ZSA9PT0gY29udGVudFdpZHRoIH1cblx0XHRcdFx0XHQgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdpZHRoOiBvcHRpb24udmFsdWV9ICkgfSB9PlxuXHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQpIH1cblx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHR7ICdjdXN0b20nID09PSBjb250ZW50V2lkdGggJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IGNvbnRlbnRXaWR0aEN1c3RvbSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudFdpZHRoQ3VzdG9tID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdpZHRoQ3VzdG9tIH0gKSB9XG5cdFx0XHRcdG1pbj17MjB9XG5cdFx0XHRcdG1heD17OTB9XG5cdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0Lz4gfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xheW91dC1wYW5lbC93aWR0aC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFJhZGlvQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbGxheFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQvLyBwYXJhbGxheFxuXHRcdFx0XHRlbmFibGVQYXJhbGxheCxcblx0XHRcdFx0cGFyYWxsYXhBbW91bnQsXG5cdFx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdQYXJhbGxheCcsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgUGFyYWxsYXggU2Nyb2xsaW5nJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBlbmFibGVQYXJhbGxheCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGVuYWJsZVBhcmFsbGF4OiAhIGVuYWJsZVBhcmFsbGF4IH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgISEgZW5hYmxlUGFyYWxsYXggJiZcblx0XHRcdFx0ICA8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0ICBsYWJlbD17IF9fKCAnUGFyYWxsYXggT3JiaXRhbCBTcGVlZCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHQgIHNlbGVjdGVkPXsgcGFyYWxsYXhBbW91bnQgfVxuXHRcdFx0XHRcdCAgb25DaGFuZ2U9eyBwYXJhbGxheEFtb3VudCA9PiB7XG5cblx0XHRcdFx0XHRcdCAgaWYgKCBwYXJhbGxheEFtb3VudCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRcdFx0XHRcdCAgc2V0QXR0cmlidXRlcyggeyBwYXJhbGxheEFtb3VudCB9ICk7XG5cdFx0XHRcdFx0XHQgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdCAgcGFyYWxsYXhBbW91bnQ6IHBhcmFsbGF4QW1vdW50LFxuXHRcdFx0XHRcdFx0XHRcdCAgcGFyYWxsYXhDdXN0b21BbW91bnQ6IHBhcnNlSW50KCBwYXJhbGxheEFtb3VudCwgMTAgKVxuXHRcdFx0XHRcdFx0XHQgIH0gKTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgfSB9XG5cdFx0XHRcdFx0ICBvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdGYXN0IGFzIE1lcmN1cmUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJzIwJ1xuXHRcdFx0XHRcdFx0ICB9LCB7XG5cdFx0XHRcdFx0XHRcdCAgbGFiZWw6IF9fKCAnTmF0dXJhbCBhcyBFYXJ0aCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnNTAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdTbG93IGFzIE5lcHR1bmUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJzcwJ1xuXHRcdFx0XHRcdFx0ICB9LCB7XG5cdFx0XHRcdFx0XHRcdCAgbGFiZWw6IF9fKCAnQ3VzdG9tJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICdjdXN0b20nXG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgIF19XG5cdFx0XHRcdFx0ICBoZWxwPXsgX18oJ1RoZSBzcGVlZCBhdCB3aGljaCB0aGUgcGFyYWxsYXggZWZmZWN0IHJ1bnMuJywgJ19fcGx1Z2luX3R4dGQnKSB9XG5cdFx0XHRcdCAgLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7ICEhIGVuYWJsZVBhcmFsbGF4ICYmICdjdXN0b20nID09PSBwYXJhbGxheEFtb3VudCAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0dmFsdWU9eyBwYXJhbGxheEN1c3RvbUFtb3VudCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBwYXJhbGxheEN1c3RvbUFtb3VudCA9PiBzZXRBdHRyaWJ1dGVzKCB7IHBhcmFsbGF4Q3VzdG9tQW1vdW50IH0gKSB9XG5cdFx0XHRcdFx0bWluPXsxMH1cblx0XHRcdFx0XHRtYXg9ezEwMH1cblx0XHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdFx0XHRoZWxwPXsgX18oJ0l0IHN0YXJ0cyBmcm9tIDAgd2hlbiB0aGUgaW1hZ2Ugd2lsbCBrZWVwIHdpdGggdGhlIGNvbnRlbnQgKG5vIHBhcmFsbGF4KSB1cCB0byAxMDAgd2hlbiB0aGUgaW1hZ2UgYXBwZWFycyBmaXhlZCBpbiBwbGFjZS4nLCAnX19wbHVnaW5fdHh0ZCcgKX1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9wYXJhbGxheC1wYW5lbC9pbmRleC5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0SWNvbkJ1dHRvbixcblx0Rm9ybUZpbGVVcGxvYWQsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNsYXNzIEdhbGxlcnlQbGFjZWhvbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0b25DaGFuZ2VHYWxsZXJ5KCBnYWxsZXJ5SW1hZ2VzICkge1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBnYWxsZXJ5SW1hZ2VzLm1hcCggKGltYWdlLCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIHdwLmFwaVJlcXVlc3QoIHsgcGF0aDogJy93cC92Mi9tZWRpYS8nICsgaW1hZ2UuaWQgfSApLnRoZW4oIG5ld0ltYWdlID0+IHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlc1tpbmRleF0gPSB7IC4uLm5ld0ltYWdlLCAuLi5pbWFnZSB9O1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdFByb21pc2UuYWxsKCBwcm9taXNlcyApLnRoZW4oICgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyggeyBnYWxsZXJ5SW1hZ2VzOiBnYWxsZXJ5SW1hZ2VzLmZpbHRlciggaW1hZ2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gISEgaW1hZ2UuaWQgJiYgISEgaW1hZ2Uuc2l6ZXMgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2UgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2UudXJsO1xuXHRcdFx0fSApIH0gKTtcblx0XHR9ICk7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlcyxcblx0XHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRcdG9uU2VsZWN0SW1hZ2UsXG5cdFx0XHRcdG9uQ2hhbmdlLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGhhc0ltYWdlcyA9ICEhIGdhbGxlcnlJbWFnZXMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdGFkZFRvR2FsbGVyeT17IGhhc0ltYWdlcyB9XG5cdFx0XHRcdGlzQXBwZW5kZXI9eyBoYXNJbWFnZXMgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJcIlxuXHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGltYWdlcywgdXBsb2FkIG5ldyBvbmVzIG9yIHNlbGVjdCBmaWxlcyBmcm9tIHlvdXIgbGlicmFyeS4nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0fSB9XG5cdFx0XHRcdG9uU2VsZWN0PXsgdGhpcy5vbkNoYW5nZUdhbGxlcnkuYmluZCggdGhpcyApIH1cblx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRtdWx0aXBsZVxuXHRcdFx0XHR2YWx1ZT17IGhhc0ltYWdlcyA/IGdhbGxlcnlJbWFnZXMgOiB1bmRlZmluZWQgfVxuXHRcdFx0Lz5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgR2FsbGVyeVByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGdhbGxlcnlJbWFnZXMsXG5cdFx0XHRzZWxlY3RlZCxcblx0XHRcdG9uU2VsZWN0SW1hZ2UsXG5cdFx0XHRpc1NlbGVjdGVkXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzPVwibm92YS1zbGlkZXNob3dfX2dhbGxlcnktZWRpdFwiPlxuXHRcdFx0XHR7IGdhbGxlcnlJbWFnZXMubWFwKCAoIGltZywgaW5kZXggKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0XHRcdFx0J25vdmEtc2xpZGVzaG93X19nYWxsZXJ5LWl0ZW0nLFxuXHRcdFx0XHRcdF07XG5cblx0XHRcdFx0XHRpZiAoIHNlbGVjdGVkID09PSBpbmRleCApIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaCggJ25vdmEtc2xpZGVzaG93X19nYWxsZXJ5LWl0ZW0tLWFjdGl2ZScgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17IGltZy5pZCB8fCBpbWcudXJsIH0gb25DbGljaz17ICgpID0+IHsgb25TZWxlY3RJbWFnZSggaW5kZXggKSB9IH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCAnICcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXsgaW1nLnNpemVzLnRodW1ibmFpbC51cmwgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApIH1cblx0XHRcdDwvdWw+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdEdhbGxlcnlQbGFjZWhvbGRlcixcblx0R2FsbGVyeVByZXZpZXdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2dhbGxlcnktb3B0aW9ucy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuaW1wb3J0IHtBbGlnbm1lbnRDb250cm9sc30gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0Q29sb3JQYWxldHRlLFxuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UmFkaW9Db250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRvb2xiYXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRQYW5lbENvbG9yU2V0dGluZ3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGNvbG9ycyA9IFsge1xuXHRuYW1lOiBfXyggJ0RhcmsnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0Y29sb3I6ICcjMDAwJ1xufSwge1xuXHRuYW1lOiBfXyggJ0xpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdGNvbG9yOiAnI0ZGRidcbn0gXTtcblxuY2xhc3MgT3ZlcmxheUNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0cmVuZ3RoXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ092ZXJsYXkgRmlsdGVyIFN0eWxlJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRzZWxlY3RlZD17IG92ZXJsYXlGaWx0ZXJTdHlsZSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBbXG5cdFx0XHRcdFx0eyBsYWJlbDogX18oICdOb25lJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbm9uZScgfSxcblx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0RhcmsnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdkYXJrJyB9LFxuXHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTGlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdsaWdodCcgfVxuXHRcdFx0XHRdIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBvdmVybGF5RmlsdGVyU3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBvdmVybGF5RmlsdGVyU3R5bGUgfSApIH1cblx0XHRcdC8+XG5cdFx0XHR7IG92ZXJsYXlGaWx0ZXJTdHlsZSAhPT0gJ25vbmUnICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ092ZXJsYXkgRmlsdGVyIFN0cmVuZ3RoJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHR2YWx1ZT17IG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgb3ZlcmxheUZpbHRlclN0cmVuZ3RoID0+IHNldEF0dHJpYnV0ZXMoIHsgb3ZlcmxheUZpbHRlclN0cmVuZ3RoIH0gKSB9XG5cdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0bWF4PXsxMDB9XG5cdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0Lz4gfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdH1cbn1cblxuY2xhc3MgQ29sb3JDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8Q29sb3JQYWxldHRlXG5cdFx0XHRjbGFzc05hbWU9XCJub3ZhLWhpZGUtY2xlYXItY29sb3JcIlxuXHRcdFx0dmFsdWU9eyBjb250ZW50Q29sb3IgfVxuXHRcdFx0Y29sb3JzPXsgY29sb3JzIH1cblx0XHRcdG9uQ2hhbmdlPXsgY29udGVudENvbG9yID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudENvbG9yIH0gKSB9XG5cdFx0XHRkaXNhYmxlQ3VzdG9tQ29sb3JzXG5cdFx0Lz5cblx0fVxufVxuXG5jbGFzcyBDb2xvclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0Y2xhc3NOYW1lPVwibm92YS1oaWRlLWNsZWFyLWNvbG9yXCJcblx0XHRcdHRpdGxlPXsgX18oICdDb2xvciBTZXR0aW5ncycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdGNvbG9yU2V0dGluZ3M9eyBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29udGVudENvbG9yLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBjb250ZW50Q29sb3IgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50Q29sb3IgfSApLFxuXHRcdFx0XHRcdGxhYmVsOiBfXyggJ0NvbnRlbnQgQ29sb3InLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0fSxcblx0XHRcdF0gfVxuXHRcdFx0Y29sb3JzPXsgY29sb3JzIH0gXG5cdFx0XHRpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHQ8T3ZlcmxheUNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0PC9QYW5lbENvbG9yU2V0dGluZ3M+XG5cdH1cbn1cblxuY2xhc3MgQ29sb3JUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmludmVydCB9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ29sb3IgT3B0aW9ucycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8Q29sb3JDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdFx0PE92ZXJsYXlDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVG9vbGJhcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IHtcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0Q29sb3JUb29sYmFyLFxuXHRPdmVybGF5Q29udHJvbHMsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9jb2xvci1jb250cm9scy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9jb2xvci1jb250cm9scy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgVG9vbGJhciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aFZpZXdwb3J0TWF0Y2ggfSA9IHdwLnZpZXdwb3J0O1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlLCBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgQ29uc3VtZXIsIFByb3ZpZGVyIH0gPSBjcmVhdGVDb250ZXh0KCB7XG5cdG5hbWU6ICcnLFxuXHRpc1NlbGVjdGVkOiBmYWxzZSxcblx0Zm9jdXNlZEVsZW1lbnQ6IG51bGwsXG5cdHNldEZvY3VzZWRFbGVtZW50OiAoKSA9PiB7fSxcblx0Y2xpZW50SWQ6IG51bGwsXG59ICk7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuXG5jb25zdCBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHRsZWZ0OiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25Ub3AsXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gTGVmdCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxuXHRjZW50ZXI6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnbkNlbnRlcixcblx0XHR0aXRsZTogX18oICdBbGlnbiBNaWRkbGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcblx0cmlnaHQ6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnbkJvdHRvbSxcblx0XHR0aXRsZTogX18oICdBbGlnbiBSaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxufTtcblxuY29uc3QgREVGQVVMVF9DT05UUk9MUyA9IFsgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JyBdO1xuY29uc3QgREVGQVVMVF9DT05UUk9MID0gJ2NlbnRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyKCB7IGlzQ29sbGFwc2VkLCB2YWx1ZSwgb25DaGFuZ2UsIGNvbnRyb2xzID0gREVGQVVMVF9DT05UUk9MUyB9ICkge1xuXHRmdW5jdGlvbiBhcHBseU9yVW5zZXQoIGFsaWduICkge1xuXHRcdHJldHVybiAoKSA9PiBvbkNoYW5nZSggdmFsdWUgPT09IGFsaWduID8gdW5kZWZpbmVkIDogYWxpZ24gKTtcblx0fVxuXG5cdGNvbnN0IGFjdGl2ZUFsaWdubWVudCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIHZhbHVlIF07XG5cdGNvbnN0IGRlZmF1bHRBbGlnbm1lbnRDb250cm9sID0gQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MU1sgREVGQVVMVF9DT05UUk9MIF07XG5cblx0cmV0dXJuIChcblx0XHQ8VG9vbGJhclxuXHRcdFx0aXNDb2xsYXBzZWQ9eyBpc0NvbGxhcHNlZCB9XG5cdFx0XHRpY29uPXsgYWN0aXZlQWxpZ25tZW50ID8gYWN0aXZlQWxpZ25tZW50Lmljb24gOiBkZWZhdWx0QWxpZ25tZW50Q29udHJvbC5pY29uIH1cblx0XHRcdGNvbnRyb2xzPXtcblx0XHRcdFx0Y29udHJvbHMubWFwKCAoIGNvbnRyb2wgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLkJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIGNvbnRyb2wgXSxcblx0XHRcdFx0XHRcdGlzQWN0aXZlOiB2YWx1ZSA9PT0gY29udHJvbCxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IGFwcGx5T3JVbnNldChjb250cm9sKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJwaXhlbGdyYWRlLWhlcm8taG9yaXpvbnRhbC1hbGlnbm1lbnQtYnV0dG9uXCJcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHQvPlxuXHQpXG59XG5cbi8vIEB0b2RvIHJlbW92ZSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBhbmQgdXNlIGNvcmUgbWV0aG9kIHdoZW4gZXhwb3NlZCB0aHJvdWdoIHRoZSBhcGlcbmNvbnN0IHdpdGhCbG9ja0VkaXRDb250ZXh0ID0gKCBtYXBDb250ZXh0VG9Qcm9wcyApID0+IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KCAoIE9yaWdpbmFsQ29tcG9uZW50ICkgPT4ge1xuXHRyZXR1cm4gKCBwcm9wcyApID0+IChcblx0XHQ8Q29uc3VtZXI+XG5cdFx0XHR7ICggY29udGV4dCApID0+IChcblx0XHRcdFx0PE9yaWdpbmFsQ29tcG9uZW50XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdFx0eyAuLi5tYXBDb250ZXh0VG9Qcm9wcyggY29udGV4dCwgcHJvcHMgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIH1cblx0XHQ8L0NvbnN1bWVyPlxuXHQpO1xufSwgJ3dpdGhCbG9ja0VkaXRDb250ZXh0JyApO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoQmxvY2tFZGl0Q29udGV4dCggKCB7IGNsaWVudElkIH0gKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsaWVudElkLFxuXHRcdH07XG5cdH0gKSxcblx0d2l0aFZpZXdwb3J0TWF0Y2goIHsgaXNMYXJnZVZpZXdwb3J0OiAnbWVkaXVtJyB9ICksXG5cdHdpdGhTZWxlY3QoICggc2VsZWN0LCB7IGNsaWVudElkLCBpc0xhcmdlVmlld3BvcnQsIGlzQ29sbGFwc2VkIH0gKSA9PiB7XG5cdFx0Y29uc3QgeyBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRpc0NvbGxhcHNlZDogaXNDb2xsYXBzZWQgfHwgISBpc0xhcmdlVmlld3BvcnQgfHwgKFxuXHRcdFx0XHQhIGdldFNldHRpbmdzKCkuaGFzRml4ZWRUb29sYmFyICYmXG5cdFx0XHRcdGdldEJsb2NrUm9vdENsaWVudElkKCBjbGllbnRJZCApXG5cdFx0XHQpLFxuXHRcdH07XG5cdH0gKSxcbikoIEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXIvaW5kZXguanMiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBfeCB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgVG9vbGJhciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgd2l0aFZpZXdwb3J0TWF0Y2ggfSA9IHdwLnZpZXdwb3J0O1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlLCBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgQ29uc3VtZXIsIFByb3ZpZGVyIH0gPSBjcmVhdGVDb250ZXh0KCB7XG5cdG5hbWU6ICcnLFxuXHRpc1NlbGVjdGVkOiBmYWxzZSxcblx0Zm9jdXNlZEVsZW1lbnQ6IG51bGwsXG5cdHNldEZvY3VzZWRFbGVtZW50OiAoKSA9PiB7fSxcblx0Y2xpZW50SWQ6IG51bGwsXG59ICk7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9pY29uc1wiO1xuXG5jb25zdCBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHR0b3A6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnblRvcCxcblx0XHR0aXRsZTogX3goICdWZXJ0aWNhbGx5IEFsaWduIFRvcCcsICdCbG9jayB2ZXJ0aWNhbCBhbGlnbm1lbnQgc2V0dGluZycgKSxcblx0fSxcblx0Y2VudGVyOiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25DZW50ZXIsXG5cdFx0dGl0bGU6IF94KCAnVmVydGljYWxseSBBbGlnbiBNaWRkbGUnLCAnQmxvY2sgdmVydGljYWwgYWxpZ25tZW50IHNldHRpbmcnICksXG5cdH0sXG5cdGJvdHRvbToge1xuXHRcdGljb246IGljb25zLmFsaWduQm90dG9tLFxuXHRcdHRpdGxlOiBfeCggJ1ZlcnRpY2FsbHkgQWxpZ24gQm90dG9tJywgJ0Jsb2NrIHZlcnRpY2FsIGFsaWdubWVudCBzZXR0aW5nJyApLFxuXHR9LFxufTtcblxuY29uc3QgREVGQVVMVF9DT05UUk9MUyA9IFsgJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJyBdO1xuY29uc3QgREVGQVVMVF9DT05UUk9MID0gJ3RvcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciggeyBpc0NvbGxhcHNlZCwgdmFsdWUsIG9uQ2hhbmdlLCBjb250cm9scyA9IERFRkFVTFRfQ09OVFJPTFMgfSApIHtcblx0ZnVuY3Rpb24gYXBwbHlPclVuc2V0KCBhbGlnbiApIHtcblx0XHRyZXR1cm4gKCkgPT4gb25DaGFuZ2UoIHZhbHVlID09PSBhbGlnbiA/IHVuZGVmaW5lZCA6IGFsaWduICk7XG5cdH1cblxuXHRjb25zdCBhY3RpdmVBbGlnbm1lbnQgPSBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyB2YWx1ZSBdO1xuXHRjb25zdCBkZWZhdWx0QWxpZ25tZW50Q29udHJvbCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIERFRkFVTFRfQ09OVFJPTCBdO1xuXG5cdHJldHVybiAoXG5cdFx0PFRvb2xiYXJcblx0XHRcdGlzQ29sbGFwc2VkPXsgaXNDb2xsYXBzZWQgfVxuXHRcdFx0aWNvbj17IGFjdGl2ZUFsaWdubWVudCA/IGFjdGl2ZUFsaWdubWVudC5pY29uIDogZGVmYXVsdEFsaWdubWVudENvbnRyb2wuaWNvbiB9XG5cdFx0XHRsYWJlbD17IF94KCAnQ2hhbmdlIEFsaWdubWVudCcsICdCbG9jayB2ZXJ0aWNhbCBhbGlnbm1lbnQgc2V0dGluZyBsYWJlbCcgKSB9XG5cdFx0XHRjb250cm9scz17XG5cdFx0XHRcdGNvbnRyb2xzLm1hcCggKCBjb250cm9sICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5CTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyBjb250cm9sIF0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogdmFsdWUgPT09IGNvbnRyb2wsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBhcHBseU9yVW5zZXQoIGNvbnRyb2wgKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHQvPlxuXHQpO1xufVxuXG4vLyBAdG9kbyByZW1vdmUgZnVuY3Rpb24gZGVjbGFyYXRpb24gYW5kIHVzZSBjb3JlIG1ldGhvZCB3aGVuIGV4cG9zZWQgdGhyb3VnaCB0aGUgYXBpXG5jb25zdCB3aXRoQmxvY2tFZGl0Q29udGV4dCA9ICggbWFwQ29udGV4dFRvUHJvcHMgKSA9PiBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCggKCBPcmlnaW5hbENvbXBvbmVudCApID0+IHtcblx0cmV0dXJuICggcHJvcHMgKSA9PiAoXG5cdFx0PENvbnN1bWVyPlxuXHRcdFx0eyAoIGNvbnRleHQgKSA9PiAoXG5cdFx0XHRcdDxPcmlnaW5hbENvbXBvbmVudFxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdHsgLi4ubWFwQ29udGV4dFRvUHJvcHMoIGNvbnRleHQsIHByb3BzICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSB9XG5cdFx0PC9Db25zdW1lcj5cblx0KTtcbn0sICd3aXRoQmxvY2tFZGl0Q29udGV4dCcgKTtcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWVkaXRvci9zcmMvY29tcG9uZW50cy9ibG9jay12ZXJ0aWNhbC1hbGlnbm1lbnQtdG9vbGJhci9SRUFETUUubWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aEJsb2NrRWRpdENvbnRleHQoICggeyBjbGllbnRJZCB9ICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGllbnRJZCxcblx0XHR9O1xuXHR9ICksXG5cdHdpdGhWaWV3cG9ydE1hdGNoKCB7IGlzTGFyZ2VWaWV3cG9ydDogJ21lZGl1bScgfSApLFxuXHR3aXRoU2VsZWN0KCAoIHNlbGVjdCwgeyBjbGllbnRJZCwgaXNMYXJnZVZpZXdwb3J0LCBpc0NvbGxhcHNlZCB9ICkgPT4ge1xuXHRcdGNvbnN0IHsgZ2V0QmxvY2tSb290Q2xpZW50SWQsIGdldFNldHRpbmdzIH0gPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNDb2xsYXBzZWQ6IGlzQ29sbGFwc2VkIHx8ICEgaXNMYXJnZVZpZXdwb3J0IHx8IChcblx0XHRcdFx0ISBnZXRTZXR0aW5ncygpLmhhc0ZpeGVkVG9vbGJhciAmJlxuXHRcdFx0XHRnZXRCbG9ja1Jvb3RDbGllbnRJZCggY2xpZW50SWQgKVxuXHRcdFx0KSxcblx0XHR9O1xuXHR9ICksXG4pKCBCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYmxvY2stdmVydGljYWwtYWxpZ25tZW50LXRvb2xiYXIvaW5kZXguanMiLCJpbXBvcnQge2RlYm91bmNlfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhZGlvQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdGRpc3BhdGNoLFxuXHRzZWxlY3QsXG5cdHN1YnNjcmliZSxcbn0gPSB3cC5kYXRhO1xuXG5sZXQgYmxvY2tMaXN0ID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XG5cbmxldCBkZWJvdW5jZWRPblN1YnNjcmliZSA9IGRlYm91bmNlKCgpID0+IHtcblx0bGV0IG5ld0Jsb2NrTGlzdCA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xuXHRsZXQgYmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5sZW5ndGggIT09IG5ld0Jsb2NrTGlzdC5sZW5ndGg7XG5cblx0aWYgKCAhIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5zb21lKCAoIGJsb2NrLCBpbmRleCApID0+IHtcblx0XHRcdHJldHVybiAoIGJsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgIT09IG5ld0Jsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0ID0gbmV3QmxvY2tMaXN0O1xuXHRcdHVwZGF0ZUJsb2NrcygpO1xuXHR9XG59LCAzMCk7XG5cbnN1YnNjcmliZSggZGVib3VuY2VkT25TdWJzY3JpYmUgKTtcblxuY29uc3QgdXBkYXRlQmxvY2tzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXG5cdHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0fSApLmZpbHRlciggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgeyBhcHBseU1pbmltdW1IZWlnaHQsIHNjcm9sbEluZGljYXRvciB9ID0geyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH07XG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgPSBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdmaXJzdCcgJiYgaW5kZXggPT09IDAgfHwgYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnYWxsJztcblx0XHRjb25zdCBzY3JvbGxJbmRpY2F0b3JCbG9jayA9IHNjcm9sbEluZGljYXRvciA9PT0gdHJ1ZSAmJiBpbmRleCA9PT0gMDtcblxuXHRcdGRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwge1xuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9ja1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9ICk7XG5cbn1cblxuY2xhc3MgSGVpZ2h0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBhcHBseU1pbmltdW1IZWlnaHQgPSAhISBhdHRyaWJ1dGVzLmFwcGx5TWluaW11bUhlaWdodCA/IGF0dHJpYnV0ZXMuYXBwbHlNaW5pbXVtSGVpZ2h0IDogJ2ZpcnN0Jztcblx0XHRjb25zdCBtaW5IZWlnaHQgPSAhISBhdHRyaWJ1dGVzLm1pbkhlaWdodCA/IGF0dHJpYnV0ZXMubWluSGVpZ2h0IDogNzU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQXBwbHkgTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0c2VsZWN0ZWQ9eyBhcHBseU1pbmltdW1IZWlnaHQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgYXBwbHlNaW5pbXVtSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgYXBwbHlNaW5pbXVtSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBhcHBseU1pbmltdW1IZWlnaHQgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9e1xuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ05vbmUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdub25lJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0ZpcnN0IEhlcm8gQmxvY2sgT25seScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2ZpcnN0JyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0FsbCBIZXJvIEJsb2NrcycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2FsbCcgfVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAnbm9uZScgIT09IGFwcGx5TWluaW11bUhlaWdodCAmJlxuXHRcdFx0XHQgICAgPFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBtaW5IZWlnaHQgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1pbkhlaWdodDogcGFyc2VJbnQoIG1pbkhlaWdodCwgMTAgKSB9IClcbi8vXHRcdFx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgbWluSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17XG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDUwIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdUd28gVGhpcmRzJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiA2NiB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnVGhyZWUgUXVhcnRlcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDc1IH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdGdWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAxMDAgfVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdCAgICB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgU2Nyb2xsSW5kaWNhdG9yUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGhlcm9CbG9ja3MgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0XHR9ICk7XG5cblx0XHRjb25zdCBpbmRleCA9IGhlcm9CbG9ja3MuZmluZEluZGV4KCBibG9jayA9PiBibG9jay5jbGllbnRJZCA9PT0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCkgKTtcblxuXHRcdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdTY3JvbGwgSW5kaWNhdG9yJywgJ19fcGx1Z2luX3R4dGQnICkgfSBzdHlsZT17IHsgZGlzcGxheTogaW5kZXggPT09IDAgPyAnYmxvY2snIDogJ25vbmUnIH0gfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIFNjcm9sbCBJbmRpY2F0b3InLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBzY3JvbGxJbmRpY2F0b3IgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHNjcm9sbEluZGljYXRvciA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0SGVpZ2h0UGFuZWwsXG5cdFNjcm9sbEluZGljYXRvclBhbmVsLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlaWdodC1jb250cm9scy9pbmRleC5qcyIsImNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmltcG9ydCBIZXJvQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHRcdC8vIGFsaWdubWVudFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0Ly8gaGVpZ2h0XG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdC8vIGluZGljYXRvcnNcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2ssXG5cdFx0XHRcdC8vIGNvbG9yc1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdH0sXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtaGVybycsXG5cdFx0XHRgbm92YS11LXZhbGlnbi0ke3ZlcnRpY2FsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LWhhbGlnbi0ke2hvcml6b250YWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtc3BhY2luZy0ke2NvbnRlbnRQYWRkaW5nfWAsXG5cdFx0XHRgbm92YS11LWNvbnRlbnQtd2lkdGgtJHtjb250ZW50V2lkdGh9YCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZGAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmQtJHtvdmVybGF5RmlsdGVyU3R5bGV9YFxuXHRcdF1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGhlcm86IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7fSxcblx0XHRcdGNvbnRlbnQ6IHt9LFxuXHRcdH1cblxuXHRcdGlmICggISEgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgKSB7XG5cdFx0XHRzdHlsZXMuaGVyby5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAndmgnXG5cdFx0fVxuXG5cdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nVG9wID0gYCR7Y29udGVudFBhZGRpbmdDdXN0b219JWBcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdCb3R0b20gPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdH1cblxuXHRcdGlmICggY29udGVudFdpZHRoID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlcy5oZXJvfT5cblx0XHRcdFx0PEhlcm9CYWNrZ3JvdW5kIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2ZvcmVncm91bmQgbm92YS11LWNvbnRlbnQtcGFkZGluZycgc3R5bGU9eyBzdHlsZXMuZm9yZWdyb3VuZCB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLXUtY29udGVudC1hbGlnbic+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19pbm5lci1jb250YWluZXIgbm92YS11LWNvbnRlbnQtd2lkdGgnIHN0eWxlPXsgc3R5bGVzLmNvbnRlbnQgfT5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzIHRlbXBsYXRlPXtbXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9oZWFkaW5nJywgeyBjb250ZW50OiAnVGhpcyBpcyBhIGNhdGNoeSB0aXRsZScsIGFsaWduOiAnY2VudGVyJywgbGV2ZWw6IDEgfSBdLFxuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvcGFyYWdyYXBoJywgeyBjb250ZW50OiAnQSBicmlsbGlhbnQgc3VidGl0bGUgdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzcycsIGFsaWduOiAnY2VudGVyJyB9IF0sXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9idXR0b24nLCB7IHRleHQ6ICdEaXNjb3ZlciBtb3JlJywgYWxpZ246ICdjZW50ZXInIH0gXSxcblx0XHRcdFx0XHRcdFx0XX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBzY3JvbGxJbmRpY2F0b3JCbG9jayAmJiA8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19pbmRpY2F0b3InPjwvZGl2PiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2hlcm8vcHJldmlldy5qcyIsImltcG9ydCB3aXRoUGFyYWxsYXggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLXBhcmFsbGF4JztcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY2xhc3MgSGVyb0JhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdFx0bWVkaWFcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHt9O1xuXG5cdFx0aWYgKCBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyApIHtcblx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19iYWNrZ3JvdW5kJyBzdHlsZT17IHRoaXMucHJvcHMuc3R5bGUgfT5cblx0XHRcdFx0e21lZGlhLnR5cGUgPT09ICdpbWFnZScgJiYgdHlwZW9mIG1lZGlhLnNpemVzICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0XHQgJiYgPGltZyBjbGFzc05hbWU9J25vdmEtaGVyb19fbWVkaWEnIHNyYz17bWVkaWEuc2l6ZXMuZnVsbC51cmx9IHN0eWxlPXtzdHlsZXN9Lz59XG5cdFx0XHRcdHttZWRpYS50eXBlID09PSAndmlkZW8nXG5cdFx0XHRcdCAmJiA8dmlkZW8gbXV0ZWQgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9J25vdmEtaGVyb19fbWVkaWEnIHNyYz17bWVkaWEudXJsfSBzdHlsZT17c3R5bGVzfS8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyYWxsYXgoIEhlcm9CYWNrZ3JvdW5kICk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZXJvL2JhY2tncm91bmQuanMiLCJpbXBvcnQgKiBhcyBpY29ucyBmcm9tIFwiLi4vLi4vaWNvbnNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRNZWRpYVVwbG9hZCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5pbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0Q29sb3JDb250cm9scyxcblx0T3ZlcmxheUNvbnRyb2xzLFxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnLCAndmlkZW8nIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm9CbG9ja0NvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8QmxvY2tDb250cm9scz5cblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb250ZW50IGFsaWdubWVudCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmludmVydCB9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW52ZXJ0IGNvbG9ycycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8Q29sb3JDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdFx0PE92ZXJsYXlDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHsgbWVkaWEgfSApIH1cblx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29tcG9uZW50cy1pY29uLWJ1dHRvbiBjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDaGFuZ2UgTWVkaWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5zd2FwIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdDwvQmxvY2tDb250cm9scz5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9oZXJvL2NvbnRyb2xzLmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICcuLi8uLi9pY29ucyc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL21lZGlhJyxcblx0e1xuXHRcdHRpdGxlOiBfXyggJ01lZGlhIENhcmQgQ29uc3RlbGxhdGlvbicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgbWVkaWEgb2JqZWN0cyBhbG9uZ3NpZGUgc2hvcnQgcGllY2VzIG9mIGNvbnRlbnQuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogbWVkaWEsXG5cdFx0Y2F0ZWdvcnk6ICdub3ZhLWJ5LXBpeGVsZ3JhZGUnLFxuXHRcdC4uLmF0dHJpYnV0ZXMsXG5cdFx0ZWRpdCxcblx0XHRzYXZlLFxuXHRcdGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2V0dGluZ3MoKTtcblx0XHRcdHJldHVybiBzZXR0aW5ncy5hbGlnbldpZGUgPyB7XG5cdFx0XHRcdCdkYXRhLWFsaWduJzogJ2Z1bGwnXG5cdFx0XHR9IDoge31cblx0XHR9LFxuXHR9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL21lZGlhL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wiaW1hZ2VBbHRcIjp7XCJhdHRyaWJ1dGVcIjpcImFsdFwifSxcImJhY2tncm91bmRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiIzAwMFwifSxcIm1lZGlhUG9zaXRpb25cIjp7XCJkZWZhdWx0XCI6XCJsZWZ0XCJ9LFwibWVkaWFTdHlsZVwiOntcImRlZmF1bHRcIjpcInNpbXBsZVwifSxcImNvbnRlbnRTdHlsZVwiOntcImRlZmF1bHRcIjpcImJhc2ljXCJ9LFwiYmxvY2tTdHlsZVwiOntcImRlZmF1bHRcIjpcImJhc2ljXCJ9LFwiYmFja2dyb3VuZFR5cGVcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcInRyYW5zcGFyZW50XCJ9LFwiaW1hZ2VzXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9tZWRpYS9hdHRyaWJ1dGVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InO1xuaW1wb3J0IE1lZGlhUHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHR1cGRhdGVJbWFnZXMoIG1lZGlhICkge1xuXHRcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRpbWFnZXM6IG1lZGlhLm1hcCggKCBpbWFnZSApID0+IEpTT04uc3RyaW5naWZ5KHsgaWQ6IGltYWdlLmlkLCB1cmw6IGltYWdlLnVybCwgYWx0OiBpbWFnZS5hbHQgfSkgKVxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PE1lZGlhUHJldmlldyB7IC4uLnRoaXMucHJvcHMgfSB1cGRhdGVJbWFnZXM9eyB0aGlzLnVwZGF0ZUltYWdlcy5iaW5kKCB0aGlzICkgfSAvPlxuXHRcdFx0XHQ8Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gdXBkYXRlSW1hZ2VzPXsgdGhpcy51cGRhdGVJbWFnZXMuYmluZCggdGhpcyApIH0gLz5cblx0XHRcdFx0PEluc3BlY3RvciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHRdXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVkaWEvZWRpdC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2ljb25zXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG5cdEJsb2NrQ29udHJvbHNcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRJY29uQnV0dG9uLFxuXHRUb29sYmFyXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0dXBkYXRlSW1hZ2VzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYVBvc2l0aW9uLFxuXHRcdFx0aW1hZ2VzID0gW10sXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCAoIChpbWFnZSkgID0+IEpTT04ucGFyc2UoaW1hZ2UpKTtcblxuXHRcdGNvbnN0IGhhc0ltYWdlcyA9ICEhIGltYWdlcy5sZW5ndGg7XG5cblx0XHRjb25zdCBNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHRcdFx0bGVmdDoge1xuXHRcdFx0XHRpY29uOiAnYWxpZ24tcHVsbC1sZWZ0Jyxcblx0XHRcdFx0dGl0bGU6IF9fKCAnU2hvdyBNZWRpYSBvbiBMZWZ0IFNpZGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdH0sXG5cdFx0XHRyaWdodDoge1xuXHRcdFx0XHRpY29uOiAnYWxpZ24tcHVsbC1yaWdodCcsXG5cdFx0XHRcdHRpdGxlOiBfXyggJ1Nob3cgTWVkaWEgb24gUmlnaHQgU2lkZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgdG9vbGJhckNvbnRyb2xzID0gKFxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxUb29sYmFyXG5cdFx0XHRcdFx0Y29udHJvbHM9eyBPYmplY3Qua2V5cyhNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTKS5tYXAoY29udHJvbCA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQuLi5NRURJQV9BTElHTk1FTlRTX0NPTlRST0xTW2NvbnRyb2xdLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7IHNldEF0dHJpYnV0ZXMoeyBtZWRpYVBvc2l0aW9uOiBjb250cm9sIH0gKX0sXG5cdFx0XHRcdFx0XHRcdGlzQWN0aXZlOiBtZWRpYVBvc2l0aW9uID09PSBjb250cm9sXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGhhc0ltYWdlcyAmJiA8VG9vbGJhcj5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdHR5cGUgPSBcImltYWdlXCJcblx0XHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0XHRnYWxsZXJ5XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHsgZ2FsbGVyeUltYWdlcy5tYXAoICggaW1hZ2UgKSA9PiBpbWFnZS5pZCApIH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyB1cGRhdGVJbWFnZXMgfVxuXHRcdFx0XHRcdFx0cmVuZGVyID0geyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29tcG9uZW50cy1pY29uLWJ1dHRvbiBjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NoYW5nZSBNZWRpYScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuc3dhcCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz0geyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGVuKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj4gfVxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHR7IHRvb2xiYXJDb250cm9scyB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9sc1xufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9sc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UmFkaW9Db250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jbGFzcyBJbnNwZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoIHByb3BzICkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhU3R5bGUsXG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdFx0eyBmYWxzZSAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdNZWRpYSBBcmVhJywgJ19fcGx1Z2luX3R4dGQnICkgfSAgaW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ01lZGlhIFN0eWxlJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgbWVkaWFTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBtZWRpYVN0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnV2VsbC1vcmdhbml6ZWQgR3JpZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NpbXBsZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ092ZXJsYXAgTGF5ZXJlZCBHcmlkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnb3ZlcmxhcCcgfVxuXHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnQXV0b21hdGljYWxseSBjcm9wIGFuZCBzY2FsZSBpbWFnZXMgdG8gZmlsbCB0aGUgYmxvY2sgY29udGFpbmVyLicsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7IG1lZGlhU3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYVN0eWxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0NvbnRlbnQgQXJlYScsICdfX3BsdWdpbl90eHRkJykgfSBpbml0aWFsT3BlbiA9IHsgdHJ1ZSB9PlxuXHRcdFx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbCA9IHsgX18oICdFbXBoYXNpcyBMZXZlbCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7IGNvbnRlbnRTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBjb250ZW50U3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zID0geyBbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdCYXNpYycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Jhc2ljJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTW9kZXJhdGUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtb2RlcmF0ZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hpZ2hsaWdodGVkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnaGlnaGxpZ2h0ZWQnIH1cblx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyBjb250ZW50U3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50U3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0Jsb2NrIEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcpIH0gaW5pdGlhbE9wZW4gPSB7IHRydWUgfT5cblx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWwgPSB7IF9fKCAnRW1waGFzaXMgTGV2ZWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0geyBibG9ja1N0eWxlIH1cblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQgPSB7IGJsb2NrU3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zID0geyBbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdCYXNpYycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Jhc2ljJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTW9kZXJhdGUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtb2RlcmF0ZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hpZ2hsaWdodGVkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnaGlnaGxpZ2h0ZWQnIH1cblx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyBibG9ja1N0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgYmxvY2tTdHlsZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3BlY3RvcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZWRpYS9pbnNwZWN0b3IuanMiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVBsYWNlaG9sZGVyXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2NvcmUvYnV0dG9uJywgJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvaGVhZGluZyddO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsnY29yZS9oZWFkaW5nJywge2NvbnRlbnQ6ICdTaG9vdCBmb3IgdGhlIG1vb24sIEV2ZW4gaWYgWW91IE1pc3MgaXQnLCBsZXZlbDogNH1dLFxuXHRbJ2NvcmUvaGVhZGluZycsIHtjb250ZW50OiAnV2VsY29tZSB0byBvdXIgcGxhbmV0LCBsb29rIGFuZCBmZWVsIG1hdHRlcnMhJywgbGV2ZWw6IDJ9XSxcblx0Wydjb3JlL3BhcmFncmFwaCcsIHtjb250ZW50OiAnV2VcXCd2ZSBhbHdheXMgZGVmaW5lZCBvdXJzZWx2ZXMgYnkgdGhlIGFiaWxpdHkgdG8gb3ZlcmNvbWUgdGhlIGltcG9zc2libGUuIEFuZCB3ZSBjb3VudCB0aGVzZSBtb21lbnRzLiBUaGVzZSBtb21lbnRzIHdoZW4gd2UgZGFyZSB0byBhaW0gaGlnaGVyLCB0byBicmVhayBiYXJyaWVycywgdG8gcmVhY2ggZm9yIHRoZSBzdGFycywgdG8gbWFrZSB0aGUgdW5rbm93biBrbm93bi4nfV0sXG5cdFsnY29yZS9idXR0b24nLCB7dGV4dDogJ0Rpc2NvdmVyIE1vcmUnfV1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHR1cGRhdGVJbWFnZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhU3R5bGUsXG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdFx0bWVkaWFQb3NpdGlvbixcblx0XHRcdGltYWdlcyxcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0YG5vdmEtbWVkaWFgLFxuXHRcdFx0YGhhcy1pbWFnZS1vbi10aGUtJHttZWRpYVBvc2l0aW9ufWAsXG5cdFx0XHRgYmxvY2staXMtJHtibG9ja1N0eWxlfWAsXG5cdFx0XHRgY29udGVudC1pcy0ke2NvbnRlbnRTdHlsZX1gLFxuXHRcdFx0YGdyaWQtaXMtJHttZWRpYVN0eWxlfWBcblx0XHQpO1xuXG5cdFx0Y29uc3QgZ2FsbGVyeUltYWdlcyA9IGltYWdlcy5tYXAgKCAoaW1hZ2UpICA9PiBKU09OLnBhcnNlKGltYWdlKSk7XG5cblx0XHRjb25zdCBkaXNwbGF5SW1hZ2VzID0gKGltYWdlcykgPT4ge1xuXG5cdFx0XHRpZiAoIDAgPT09IGltYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRpY29uID0gXCJmb3JtYXQtZ2FsbGVyeVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IFwibm92YS1tZWRpYV9fcGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsgdXBkYXRlSW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0YWNjZXB0ID0gXCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzID0geyBbICdpbWFnZScgXSB9XG5cdFx0XHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggKGltYWdlKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9J25vdmEtbWVkaWFfX2ltYWdlJz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGFsdD17IGltYWdlLmFsdCB9IHNyYz17IGltYWdlLnVybCB9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19pbm5lci1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrXCIgZGF0YS1hbGlnbj1cIndpZGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fbGF5b3V0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fY29udGVudCBub3ZhLW1lZGlhX19pbm5lci1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9e0FMTE9XRURfQkxPQ0tTfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2FzaWRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2Rpc3BsYXlJbWFnZXMoIGltYWdlcyApfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZWRpYS9wcmV2aWV3LmpzIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3Qge1xuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHRtZWRpYVN0eWxlLFxuXHRcdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRcdGJsb2NrU3R5bGUsXG5cdFx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRcdGltYWdlc1xuXHRcdFx0fVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cblx0XHRjb25zdCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGBub3ZhLW1lZGlhYCxcblx0XHRcdGBoYXMtaW1hZ2Utb24tdGhlLSR7bWVkaWFQb3NpdGlvbn1gLFxuXHRcdFx0YGJsb2NrLWlzLSR7YmxvY2tTdHlsZX1gLFxuXHRcdFx0YGNvbnRlbnQtaXMtJHtjb250ZW50U3R5bGV9YCxcblx0XHRcdGBncmlkLWlzLSR7bWVkaWFTdHlsZX1gLFxuXHRcdFx0YGFsaWduZnVsbGBcblx0XHQpO1xuXG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IEpTT04ucGFyc2UoIGltYWdlICkgKTtcblxuXHRcdGNvbnN0IGRpc3BsYXlJbWFnZXMgPSAoIGltYWdlcyApID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGdhbGxlcnlJbWFnZXMubWFwKCAoIGltYWdlICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1tZWRpYV9faW1hZ2UnPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGFsdD17aW1hZ2UuYWx0fSBzcmM9e2ltYWdlLnVybH0vPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9IClcblx0XHRcdClcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19pbm5lci1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2xheW91dCBhbGlnbndpZGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fY29udGVudCBub3ZhLW1lZGlhX19pbm5lci1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2FzaWRlXCI+XG5cdFx0XHRcdFx0XHRcdHtkaXNwbGF5SW1hZ2VzKCBpbWFnZXMgKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9tZWRpYS9zYXZlLmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL3NsaWRlc2hvdycsXG5cdHtcblx0XHR0aXRsZTogX18oICdTbGlkZXNob3cgTWUgdGhlIFdheScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgbW9yZSB0aGFuIG9uZSBwaWVjZSBvZiBjb250ZW50IGluIGEgc2luZ2xlLCBjb3ZldGVkIHNwYWNlLicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGljb246IGljb25zLnNsaWRlc2hvdyxcblx0XHRjYXRlZ29yeTogJ25vdmEtYnktcGl4ZWxncmFkZScsXG5cdFx0ZWRpdCxcblx0XHRzYXZlKCkge1xuXHRcdFx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50Lz5cblx0XHR9LFxuXHRcdGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2V0dGluZ3MoKTtcblx0XHRcdHJldHVybiBzZXR0aW5ncy5hbGlnbldpZGUgPyB7XG5cdFx0XHRcdCdkYXRhLWFsaWduJzogJ2Z1bGwnXG5cdFx0XHR9IDoge31cblx0XHR9LFxuXHR9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL3NsaWRlc2hvdy9pbmRleC5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0UGFyYWxsYXhQYW5lbCxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JUb29sYmFyLFxuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91dGlsXCI7XG5cbmltcG9ydCBTbGlkZXNob3dQcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGRlZmF1bHRHYWxsZXJ5SW1hZ2VzID0gW3tcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTYwMHg5MDBcIixcblx0XCJpZFwiOiAtMSxcblx0XCJzaXplc1wiOiB7XG5cdFx0XCJ0aHVtYm5haWxcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTUweDE1MFwiXG5cdFx0fSxcblx0XHRcImxhcmdlXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL19ucUFwZ0ctUXJZLzE2MDB4OTAwXCIsXG5cdFx0XHRcIndpZHRoXCI6IDE2MDAsXG5cdFx0XHRcImhlaWdodFwiOiA5MDBcblx0XHR9XG5cdH1cbn0sIHtcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XCJhbHRcIjogXCJUaGlzIGlzIGEgY2F0Y2h5IGltYWdlIHRpdGxlXCIsXG5cdFwiY2FwdGlvblwiOiBcIkEgYnJpbGxpYW50IGNhcHRpb24gdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzc1wiLFxuXHRcImlkXCI6IC0yLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9HdF80aU1CN2hZMC8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufSwge1xuXHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNjAweDkwMFwiLFxuXHRcImlkXCI6IC0zLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMXZLVG53TE1kcXMvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZEluZGV4OiAwXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGdhbGxlcnlJbWFnZXNcblx0XHRcdH0sXG5cdFx0XHRjbGllbnRJZFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKCAhIGdhbGxlcnlJbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggY2xpZW50SWQsIHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlczogc2h1ZmZsZUFycmF5KCBkZWZhdWx0R2FsbGVyeUltYWdlcy5zbGljZSgwKSApXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0b25QcmV2QXJyb3dDbGljaygpIHtcblx0XHRjb25zdCB7IGF0dHJpYnV0ZXM6IHsgZ2FsbGVyeUltYWdlcyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBuZXdJbmRleCA9ICggc2VsZWN0ZWRJbmRleCArIGdhbGxlcnlJbWFnZXMubGVuZ3RoIC0gMSApICUgZ2FsbGVyeUltYWdlcy5sZW5ndGg7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4OiBuZXdJbmRleCB9ICk7XG5cdH1cblxuXHRvbk5leHRBcnJvd0NsaWNrKCkge1xuXHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyBnYWxsZXJ5SW1hZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBzZWxlY3RlZEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gKCBzZWxlY3RlZEluZGV4ICsgMSApICUgZ2FsbGVyeUltYWdlcy5sZW5ndGg7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4OiBuZXdJbmRleCB9ICk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdHNsaWRlc2hvd1R5cGUsXG5cdFx0XHRcdGdhbGxlcnlJbWFnZXMsXG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0aXNTZWxlY3RlZCxcblx0XHRcdGNsYXNzTmFtZVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0bGV0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGlmICggc2VsZWN0ZWRJbmRleCA+PSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCApIHtcblx0XHRcdHNlbGVjdGVkSW5kZXggPSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblxuXHRcdFx0XHQ8U2xpZGVzaG93UHJldmlld1xuXHRcdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XG5cdFx0XHRcdFx0cHJldmlld0ltYWdlPXsgZ2FsbGVyeUltYWdlc1sgc2VsZWN0ZWRJbmRleCBdIH1cblx0XHRcdFx0XHRvblByZXZBcnJvd0NsaWNrPXsgdGhpcy5vblByZXZBcnJvd0NsaWNrLmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdFx0b25OZXh0QXJyb3dDbGljaz17IHRoaXMub25OZXh0QXJyb3dDbGljay5iaW5kKCB0aGlzICkgfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdub3ZhLWJsb2Nrcy1zbGlkZXNob3ctdHlwZS1wYW5lbCcgfVxuXHRcdFx0XHRcdFx0dGl0bGU9eyBfXyggJ1NsaWRlc2hvdyBUeXBlJywgJ19fcGx1Z2luX3R4dGQnICkgfT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2xpZGVzaG93VHlwZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2xpZGVzaG93VHlwZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNsaWRlc2hvd1R5cGUgfSApIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0dhbGxlcnknLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnZ2FsbGVyeSdcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnY3VzdG9tJ1xuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1Byb2plY3RzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3Byb2plY3RzJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ICEhIGdhbGxlcnlJbWFnZXMubGVuZ3RoICYmIDxHYWxsZXJ5UHJldmlld1xuXHRcdFx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzPXsgZ2FsbGVyeUltYWdlcyB9XG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0SW1hZ2U9eyBzZWxlY3RlZEluZGV4ID0+IHsgdGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4IH0gKSB9IH1cblx0XHRcdFx0XHRcdFx0aXNTZWxlY3RlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17IHNlbGVjdGVkSW5kZXggfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0PEdhbGxlcnlQbGFjZWhvbGRlciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0eyAnZ2FsbGVyeScgPT09IHNsaWRlc2hvd1R5cGUgJiYgPEZyYWdtZW50PlxuXG5cdFx0XHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbWluSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWluSGVpZ2h0OiBwYXJzZUludCggbWluSGVpZ2h0LCAxMCApIH0gKVxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdBdXRvJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMFxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA1MFxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1R3byBUaGlyZHMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2NlxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1RocmVlIFF1YXJ0ZXJzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNzVcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdGdWxsIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDEwMFxuXHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxQYXJhbGxheFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyAhPT0gc2xpZGVzaG93VHlwZSAmJiA8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0NvbWluZyBTb29uJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0XHQ8QWxpZ25tZW50VG9vbGJhciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDxDb2xvclRvb2xiYXIgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9zbGlkZXNob3cvZWRpdC5qcyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDUwOTc2XG5leHBvcnQgY29uc3Qgc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24oIGFycmF5ICkge1xuXHR2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cblx0Ly8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cblx0d2hpbGUgKCAwICE9PSBjdXJyZW50SW5kZXggKSB7XG5cblx0XHQvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cblx0XHRyYW5kb21JbmRleCA9IE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXggKTtcblx0XHRjdXJyZW50SW5kZXggLT0gMTtcblxuXHRcdC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cblx0XHR0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG5cdFx0YXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcblx0XHRhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcblx0fVxuXG5cdHJldHVybiBhcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3V0aWwuanMiLCJjb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IHtcblx0R2FsbGVyeVBsYWNlaG9sZGVyXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2xpZGVzaG93QmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuXG5jb25zdCB7XG5cdE1lZGlhVXBsb2FkLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXNob3dQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciguLi5hcmd1bWVudHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQoIHRoaXMgKSApO1xuXHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHR9XG5cblx0dXBkYXRlRGltZW5zaW9ucygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRpbWVuc2lvbnM6IHtcblx0XHRcdFx0d2lkdGg6IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXJDb250ZW50KCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQvLyBsYXlvdXRcblx0XHRcdFx0Y29udGVudFBhZGRpbmcsXG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0XHRjb250ZW50V2lkdGgsXG5cdFx0XHRcdGNvbnRlbnRXaWR0aEN1c3RvbSxcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdC8vIGFsaWdubWVudFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0Ly8gY29sb3JzXG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGgsXG5cdFx0XHRcdC8vIG1lZGlhXG5cdFx0XHRcdGdhbGxlcnlJbWFnZXNcblx0XHRcdH0sXG5cdFx0XHRwcmV2aWV3SW1hZ2UsXG5cdFx0XHRjbGFzc05hbWVcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBbXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHQnbm92YS1zbGlkZXNob3cgaXMtcmVhZHknLFxuXHRcdFx0YG5vdmEtdS12YWxpZ24tJHt2ZXJ0aWNhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1oYWxpZ24tJHtob3Jpem9udGFsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LXNwYWNpbmctJHtjb250ZW50UGFkZGluZ31gLFxuXHRcdFx0YG5vdmEtdS1jb250ZW50LXdpZHRoLSR7Y29udGVudFdpZHRofWAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmRgLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kLSR7b3ZlcmxheUZpbHRlclN0eWxlfWBcblx0XHRdXG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRzbGlkZXNob3c6IHsgY29sb3I6IGNvbnRlbnRDb2xvciB9LFxuXHRcdFx0Y29udGVudDoge30sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7fSxcblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRQYWRkaW5nID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdUb3AgPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdFx0c3R5bGVzLmZvcmVncm91bmQucGFkZGluZ0JvdHRvbSA9IGAke2NvbnRlbnRQYWRkaW5nQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdHN0eWxlcy5zbGlkZXNob3cubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3ZoJ1xuXHRcdH1cblxuXHRcdGlmICggY29udGVudFdpZHRoID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0bGV0IG1heEFzcGVjdFJhdGlvID0gMDtcblx0XHRsZXQgbWVkaWFNaW5IZWlnaHQgPSAwO1xuXHRcdGxldCBzbGlkZXJXaWR0aCA9IDA7XG5cblx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggaW1hZ2UgPT4ge1xuXHRcdFx0aWYgKCAhISBpbWFnZS5zaXplcyAmJiAhISBpbWFnZS5zaXplcy5sYXJnZSAmJiAhISBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCApIHtcblx0XHRcdFx0Y29uc3QgYXNwZWN0UmF0aW8gPSBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCAvIGltYWdlLnNpemVzLmxhcmdlLmhlaWdodDtcblx0XHRcdFx0bWF4QXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbyA+IG1heEFzcGVjdFJhdGlvID8gYXNwZWN0UmF0aW8gOiBtYXhBc3BlY3RSYXRpbztcblx0XHRcdFx0bWVkaWFNaW5IZWlnaHQgPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggLyBtYXhBc3BlY3RSYXRpbztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRzdHlsZXMuc2xpZGVyID0ge1xuXHRcdFx0bWluSGVpZ2h0OiBNYXRoLm1heCggbWVkaWFNaW5IZWlnaHQsIG1heEFzcGVjdFJhdGlvICkgKyAncHgnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0eyAhISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAmJiA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gc3R5bGU9eyBzdHlsZXMuc2xpZGVzaG93IH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVyXCIgc3R5bGU9eyBzdHlsZXMuc2xpZGVyIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19zbGlkZVwiPlxuXHRcdFx0XHRcdFx0XHR7IHByZXZpZXdJbWFnZSAmJiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PFNsaWRlc2hvd0JhY2tncm91bmQgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250ZW50IG5vdmEtdS1jb250ZW50LXBhZGRpbmdcIiBzdHlsZT17IHN0eWxlcy5mb3JlZ3JvdW5kIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtdS1jb250ZW50LWFsaWduXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtd2lkdGhcIiBzdHlsZT17IHN0eWxlcy5jb250ZW50IH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgyPnsgcHJldmlld0ltYWdlLmFsdCB9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57IHByZXZpZXdJbWFnZS5jYXB0aW9uIH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2NvbnRyb2xzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLXByZXYgbm92YS1zbGlkZXNob3dfX2Fycm93LS1kaXNhYmxlZFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25QcmV2QXJyb3dDbGlja30+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLW5leHQgbm92YS1zbGlkZXNob3dfX2Fycm93LS1kaXNhYmxlZFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25OZXh0QXJyb3dDbGlja30+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PiB9XG5cdFx0XHRcdHsgISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAmJiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0IDxHYWxsZXJ5UGxhY2Vob2xkZXIgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2NvbnRyb2xzXCI+XG5cdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIj48L2Rpdj5cblx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19hcnJvdyBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLW5leHQgbm92YS1zbGlkZXNob3dfX2Fycm93LS1kaXNhYmxlZFwiPjwvZGl2PlxuXHRcdFx0XHRcdCA8L2Rpdj5cblx0XHRcdFx0IDwvRnJhZ21lbnQ+IH1cblx0XHQgICAgPC9GcmFnbWVudD5cblx0XHQpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBkaW1lbnNpb25zIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHJlZj17IGVsID0+ICggdGhpcy5jb250YWluZXIgPSBlbCApIH0+XG5cdFx0XHRcdHsgZGltZW5zaW9ucyAmJiB0aGlzLnJlbmRlckNvbnRlbnQoKSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJpbXBvcnQgd2l0aFBhcmFsbGF4IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1wYXJhbGxheCc7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNsYXNzIFNsaWRlc2hvd0JhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHt9O1xuXG5cdFx0aWYgKCBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyApIHtcblx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kXCIgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX21lZGlhXCIgc3JjPXsgdGhpcy5wcm9wcy5wcmV2aWV3SW1hZ2Uuc2l6ZXMubGFyZ2UudXJsIH0gYWx0PVwiXCIgc3R5bGU9eyBzdHlsZXMgfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJhbGxheCggU2xpZGVzaG93QmFja2dyb3VuZCApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9zbGlkZXNob3cvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=