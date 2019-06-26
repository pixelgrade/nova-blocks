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

module.exports = { "default": __webpack_require__(70), __esModule: true };

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

var _defineProperty = __webpack_require__(72);

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

var _setPrototypeOf = __webpack_require__(94);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(98);

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

var isObject = __webpack_require__(13);
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

var _assign = __webpack_require__(101);

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
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(28);
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

var def = __webpack_require__(12).f;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_options__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_controls__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alignment_controls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__height_controls__ = __webpack_require__(131);
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

var isObject = __webpack_require__(13);
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
var isObject = __webpack_require__(13);
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
var dPs = __webpack_require__(79);
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
var defineProperty = __webpack_require__(12).f;
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

module.exports = !__webpack_require__(10) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(35)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(75);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(85);

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

var $at = __webpack_require__(77)(true);

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
var $iterCreate = __webpack_require__(78);
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
var arrayIndexOf = __webpack_require__(80)(false);
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

__webpack_require__(82);
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
var invoke = __webpack_require__(119);
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
var isObject = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__ = __webpack_require__(130);










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
							wp.data.select('core/editor').getSelectedBlock().innerBlocks.map(function (block) {
								wp.data.dispatch('core/editor').updateBlockAttributes(block.clientId, { align: horizontalAlignment });
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slideshow__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scss_style_scss__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_scss_style_scss__);






/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_style_scss__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_editor_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_editor_scss__);
/**
 * Internal dependencies
 */





/**
 * Block styles
 */



/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('pixelgrade/hero', {
	title: __('Hero of the Galaxy', '__plugin_txtd'),
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* hero */],
	description: __('A great way to get your visitors acquainted with your content.', '__plugin_txtd'),
	category: "nova-by-pixelgrade",
	//		...attributes,
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
/* 68 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":75},"contentWidth":{"type":"string","default":"large"},"contentWidthCustom":{"type":"number","default":100},"horizontalAlignment":{"type":"string","default":"center"},"verticalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"enableMinHeight":{"type":"boolean","default":true},"applyMinimumHeight":{"type":"string","source":"meta","meta":"nova_hero_apply_minimum_height"},"minHeight":{"type":"number","source":"meta","meta":"nova_hero_minimum_height"},"applyMinimumHeightBlock":{"type":"boolean","default":false},"scrollIndicator":{"type":"boolean","source":"meta","meta":"nova_hero_scroll_indicator"},"scrollIndicatorBlock":{"type":"boolean","default":false},"backgroundType":{"type":"string","default":"image"},"media":{"type":"object","default":{"type":"image","sizes":{"full":{"url":"https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80","url1":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}}},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":30},"images":{"type":"array","default":[]}}}

/***/ }),
/* 69 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(31);











var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
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
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar;


var editorData = wp.data.select('core/editor');

var updateBlocks = function updateBlocks(attributes) {
	editorData.getBlocks().filter(function (block) {
		return block.name === 'pixelgrade/hero';
	}).filter(function (block, index) {
		var _block$attributes$att = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, block.attributes, attributes),
		    applyMinimumHeight = _block$attributes$att.applyMinimumHeight,
		    scrollIndicator = _block$attributes$att.scrollIndicator;

		var applyMinimumHeightBlock = applyMinimumHeight === 'first' && index === 0 || applyMinimumHeight === 'all';
		var scrollIndicatorBlock = scrollIndicator === true && index === 0;

		wp.data.dispatch('core/editor').updateBlockAttributes(block.clientId, {
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
			var _this2 = this;

			var _props = this.props,
			    _props$attributes = _props.attributes,
			    contentPadding = _props$attributes.contentPadding,
			    contentPaddingCustom = _props$attributes.contentPaddingCustom,
			    contentWidth = _props$attributes.contentWidth,
			    contentWidthCustom = _props$attributes.contentWidthCustom,
			    verticalAlignment = _props$attributes.verticalAlignment,
			    horizontalAlignment = _props$attributes.horizontalAlignment,
			    applyMinimumHeight = _props$attributes.applyMinimumHeight,
			    applyMinimumHeightBlock = _props$attributes.applyMinimumHeightBlock,
			    minHeight = _props$attributes.minHeight,
			    scrollIndicator = _props$attributes.scrollIndicator,
			    scrollIndicatorBlock = _props$attributes.scrollIndicatorBlock,
			    positionIndicator = _props$attributes.positionIndicator,
			    contentColor = _props$attributes.contentColor,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    overlayFilterStrength = _props$attributes.overlayFilterStrength,
			    media = _props$attributes.media,
			    className = _props.className,
			    setAttributes = _props.setAttributes,
			    isSelected = _props.isSelected;


			var ALLOWED_MEDIA_TYPES = ['image', 'video'];

			var blockControls = wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(
					Toolbar,
					{ className: 'pixelgrade-hero-block-toolbar' },
					wp.element.createElement(Dropdown, {
						position: 'bottom',
						className: 'pixelgrade-hero-block-toolbar-dropdown',
						contentClassName: 'components-nova--popover',
						renderToggle: function renderToggle(_ref) {
							var isOpen = _ref.isOpen,
							    onToggle = _ref.onToggle;
							return wp.element.createElement(IconButton, {
								onClick: onToggle,
								icon: __WEBPACK_IMPORTED_MODULE_7__icons__["d" /* alignment */],
								'aria-expanded': isOpen,
								label: __('Content alignment', '__plugin_txtd'),
								labelPosition: 'bottom'
							});
						},
						focusOnMount: false,
						renderContent: function renderContent(_ref2) {
							var onClose = _ref2.onClose;
							return wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["a" /* AlignmentControls */], _this2.props)
							);
						}
					})
				),
				wp.element.createElement(
					Toolbar,
					{ className: 'pixelgrade-hero-block-toolbar' },
					wp.element.createElement(Dropdown, {
						position: 'bottom',
						className: 'pixelgrade-hero-block-toolbar-dropdown',
						contentClassName: 'components-nova--popover',
						renderToggle: function renderToggle(_ref3) {
							var isOpen = _ref3.isOpen,
							    onToggle = _ref3.onToggle;
							return wp.element.createElement(IconButton, {
								onClick: onToggle,
								icon: __WEBPACK_IMPORTED_MODULE_7__icons__["f" /* invert */],
								'aria-expanded': isOpen,
								label: __('Invert colors', '__plugin_txtd'),
								labelPosition: 'bottom'
							});
						},
						focusOnMount: false,
						renderContent: function renderContent(_ref4) {
							var onClose = _ref4.onClose;
							return wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["c" /* ColorControls */], _this2.props),
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__components__["j" /* OverlayControls */], _this2.props)
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
								icon: 'format-image',
								onClick: open
							});
						}
					})
				)
			);

			var hero = function hero() {
				var classes = [className, 'nova-hero', 'nova-u-valign-' + verticalAlignment, 'nova-u-halign-' + horizontalAlignment, 'nova-u-spacing-' + contentPadding, 'nova-u-content-width-' + contentWidth, 'nova-u-background', 'nova-u-background-' + overlayFilterStyle];

				var styles = {
					hero: {
						color: contentColor
					},
					foreground: {},
					content: {},
					image: {}
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

				if (overlayFilterStyle !== 'none') {
					styles.image.opacity = 1 - overlayFilterStrength / 100;
				}

				return wp.element.createElement(
					'div',
					{ className: classes.join(' '), style: styles.hero },
					wp.element.createElement(
						'div',
						{ className: 'nova-hero__mask' },
						wp.element.createElement(
							'div',
							{ className: 'nova-hero__background' },
							media.type === 'image' && typeof media.sizes !== 'undefined' && wp.element.createElement('img', { className: 'nova-hero__media', src: media.sizes.full.url, style: styles.image }),
							media.type === 'video' && wp.element.createElement('video', { muted: true, autoplay: true, loop: true, className: 'nova-hero__media', src: media.url, style: styles.image })
						)
					),
					wp.element.createElement(
						'div',
						{ className: 'nova-hero__foreground nova-u-content-padding', style: styles.foreground },
						wp.element.createElement(
							'div',
							{ className: 'nova-u-content-align' },
							wp.element.createElement(
								'div',
								{ className: 'nova-hero__content nova-u-content-width', style: styles.content },
								wp.element.createElement(InnerBlocks, { template: [['core/heading', { content: 'This is a catchy title', align: 'center', level: 1 }], ['core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' }], ['core/button', { text: 'Discover more', align: 'center' }]] })
							),
							scrollIndicatorBlock && wp.element.createElement('div', { className: 'nova-hero__indicator' })
						)
					)
				);
			};

			return [wp.element.createElement(
				Fragment,
				null,
				hero(),
				blockControls
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
				wp.element.createElement(
					PanelBody,
					{ title: __('Position Indicators', '__plugin_txtd'), initialOpen: true },
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
module.exports = __webpack_require__(5).Object.getPrototypeOf;


/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(55);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(81);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83);
var step = __webpack_require__(84);
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
/* 83 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(58);
__webpack_require__(92);
__webpack_require__(93);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(50);
var META = __webpack_require__(88).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(26);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(89);
var isArray = __webpack_require__(90);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(91);
var $GOPD = __webpack_require__(57);
var $GOPS = __webpack_require__(42);
var $DP = __webpack_require__(12);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(12).f;
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
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(5).Object.setPrototypeOf;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(97).set });


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(5).Object.assign;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(104) });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(10);
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
/* 105 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__padding__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__width__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__(108);
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
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GalleryPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(111);
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(48);
__webpack_require__(55);
__webpack_require__(113);
__webpack_require__(125);
__webpack_require__(126);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(59);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(114);
var forOf = __webpack_require__(115);
var speciesConstructor = __webpack_require__(60);
var task = __webpack_require__(61).set;
var microtask = __webpack_require__(120)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(62);
var userAgent = __webpack_require__(121);
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
  Internal.prototype = __webpack_require__(122)($Promise.prototype, {
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
__webpack_require__(123)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(124)(function (iter) {
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
/* 114 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(116);
var isArrayIter = __webpack_require__(117);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(53);
var getIterFn = __webpack_require__(118);
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
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(22);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 118 */
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
/* 119 */
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
/* 120 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(5);
var dP = __webpack_require__(12);
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
/* 124 */
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
/* 125 */
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
/* 126 */
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
/* 127 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(31);









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
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockHorizontalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_icons__ = __webpack_require__(14);



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
/* 131 */
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


var blockList = select('core/editor').getBlocks();

var debouncedOnSubscribe = Object(__WEBPACK_IMPORTED_MODULE_6__blocks_utils__["a" /* debounce */])(function () {
	var newBlockList = select('core/editor').getBlocks();
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

	select('core/editor').getBlocks().filter(function (block) {
		return block.name === 'pixelgrade/hero';
	}).filter(function (block, index) {
		var _block$attributes$att = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, block.attributes, attributes),
		    applyMinimumHeight = _block$attributes$att.applyMinimumHeight,
		    scrollIndicator = _block$attributes$att.scrollIndicator;

		var applyMinimumHeightBlock = applyMinimumHeight === 'first' && index === 0 || applyMinimumHeight === 'all';
		var scrollIndicatorBlock = scrollIndicator === true && index === 0;

		dispatch('core/editor').updateBlockAttributes(block.clientId, {
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
						setAttributes({ minHeight: minHeight });
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


			var heroBlocks = select('core/editor').getBlocks().filter(function (block) {
				return block.name === 'pixelgrade/hero';
			});

			var index = heroBlocks.findIndex(function (block) {
				return block.clientId === select('core/editor').getSelectedBlockClientId();
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
/* 132 */
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
var InnerBlocks = wp.blockEditor.InnerBlocks;

var Save = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Save, _Component);

	function Save() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Save);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Save.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Save)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Save, [{
		key: 'render',
		value: function render(_ref) {
			var _ref$attributes = _ref.attributes,
			    contentPadding = _ref$attributes.contentPadding,
			    contentPaddingCustom = _ref$attributes.contentPaddingCustom,
			    contentWidth = _ref$attributes.contentWidth,
			    contentWidthCustom = _ref$attributes.contentWidthCustom,
			    verticalAlignment = _ref$attributes.verticalAlignment,
			    horizontalAlignment = _ref$attributes.horizontalAlignment,
			    minHeight = _ref$attributes.minHeight,
			    applyMinimumHeight = _ref$attributes.applyMinimumHeight,
			    applyMinimumHeightBlock = _ref$attributes.applyMinimumHeightBlock,
			    scrollIndicator = _ref$attributes.scrollIndicator,
			    scrollIndicatorBlock = _ref$attributes.scrollIndicatorBlock,
			    enableParallax = _ref$attributes.enableParallax,
			    parallaxAmount = _ref$attributes.parallaxAmount,
			    parallaxCustomAmount = _ref$attributes.parallaxCustomAmount,
			    contentColor = _ref$attributes.contentColor,
			    overlayFilterStyle = _ref$attributes.overlayFilterStyle,
			    overlayFilterStrength = _ref$attributes.overlayFilterStrength,
			    media = _ref$attributes.media,
			    className = _ref.className,
			    setAttributes = _ref.setAttributes;


			var styles = {
				hero: {
					color: contentColor
				},
				foreground: {},
				content: {},
				image: {}
			};

			if (!!applyMinimumHeightBlock) {
				styles.hero.minHeight = minHeight + 'vh';
			}

			if (contentPadding === 'custom') {
				styles.foreground.padding = contentPaddingCustom;
			}

			if (contentWidth === 'custom') {
				styles.content.maxWidth = contentWidthCustom + '%';
			}

			if (!!applyMinimumHeightBlock) {
				styles.foreground.minHeight = minHeight + 'vh';
			}

			if (overlayFilterStyle !== 'none') {
				styles.image.opacity = 1 - overlayFilterStrength / 100;
			}

			var classes = ['nova-hero', 'nova-u-valign-' + verticalAlignment, 'nova-u-halign-' + horizontalAlignment, 'nova-u-spacing-' + contentPadding, 'nova-u-content-width-' + contentWidth, 'nova-u-background', 'nova-u-background-' + overlayFilterStyle];

			//		const settings = wp.data.select( 'core/block-editor' ).getSettings();
			//		if ( settings.alignWide ) {
			classes.push('alignfull');
			//		}

			if (!!enableParallax) {
				classes.push('nova-hero--parallax');
			}

			var backgroundOpacity = 1 - overlayFilterStrength / 100;
			var actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parallaxAmount;
			actualParallaxAmount = Math.max(Math.min(1, actualParallaxAmount / 100), 0);

			return wp.element.createElement(
				'div',
				{ className: classes.join(' '), style: styles.hero },
				wp.element.createElement(
					'div',
					{ className: 'nova-hero__mask' },
					wp.element.createElement(
						'div',
						{ className: 'nova-hero__background', 'data-rellax-amount': actualParallaxAmount },
						media.type === "image" && typeof media.sizes !== "undefined" && wp.element.createElement('img', { className: 'nova-hero__media', src: media.sizes.full.url, style: styles.image }),
						media.type === "video" && wp.element.createElement('video', { muted: true, autoplay: true, loop: true, className: 'nova-hero__media', src: media.url, style: styles.image })
					)
				),
				wp.element.createElement(
					'div',
					{ className: 'nova-hero__foreground nova-u-content-padding', style: styles.foreground },
					wp.element.createElement(
						'div',
						{ className: 'nova-u-content-align' },
						wp.element.createElement(
							'div',
							{ className: 'nova-hero__content nova-u-content-width', style: styles.content },
							wp.element.createElement(InnerBlocks.Content, null)
						),
						scrollIndicatorBlock && wp.element.createElement('a', { href: '#', className: 'nova-hero__indicator' })
					)
				)
			);
		}
	}]);

	return Save;
}(Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Save);

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_style_scss__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_editor_scss__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scss_editor_scss__);

/**
 * Internal dependencies
 */





/**
 * Block styles
 */



/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('pixelgrade/media', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
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
/* 136 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"imageAlt":{"attribute":"alt"},"backgroundColor":{"type":"string","default":"#000"},"mediaPosition":{"default":"left"},"mediaStyle":{"default":"simple-grid"},"contentStyle":{"default":"basic"},"blockStyle":{"default":"basic"},"backgroundType":{"type":"string","default":"transparent"},"images":{"type":"array","default":[]}}}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(138);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(145);







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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(141);
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
module.exports = __webpack_require__(5).Object.keys;


/***/ }),
/* 143 */
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
/* 144 */
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
					wp.element.createElement(
						PanelBody,
						{ title: __('Media Area', '__plugin_txtd'), initialOpen: true },
						wp.element.createElement(RadioControl, {
							label: __('Media Style', '__plugin_txtd'),
							value: mediaStyle,
							selected: mediaStyle,
							options: [{ label: __('Natural Layout', '__plugin_txtd'), value: 'natural' }, { label: __('Well-organized Grid', '__plugin_txtd'), value: 'simple-grid' }, { label: __('Overlap Layered Grid', '__plugin_txtd'), value: 'overlap-grid' }],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(65);
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


			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, {
				'has-image-on-the-right': 'right' === mediaPosition,
				'content-is-moderate': 'moderate' === contentStyle,
				'content-is-highlighted': 'highlighted' === contentStyle,
				'block-is-moderate': 'moderate' === blockStyle,
				'block-is-highlighted': 'highlighted' === blockStyle,
				'is-simple-grid': 'simple-grid' === mediaStyle,
				'is-overlap-grid': 'overlap-grid' === mediaStyle,
				'is-selected': isSelected,
				'has-multiple-images': 2 <= images.length
			});

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
				Fragment,
				null,
				wp.element.createElement(
					'div',
					{ className: classNames },
					wp.element.createElement(
						'div',
						{ className: 'u-container-width' },
						wp.element.createElement(
							'div',
							{ className: 'nova-media' },
							wp.element.createElement(
								'div',
								{ className: 'nova-media__aside' },
								displayImages(images)
							),
							wp.element.createElement(
								'div',
								{ className: 'nova-media__content', style: { textAlign: alignment } },
								wp.element.createElement(InnerBlocks, {
									allowedBlocks: ALLOWED_BLOCKS,
									template: TEMPLATE
								})
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(65);
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
			var _props = this.props,
			    attributes = _props.attributes,
			    className = _props.className,
			    isSelected = _props.isSelected;
			var mediaStyle = attributes.mediaStyle,
			    contentStyle = attributes.contentStyle,
			    blockStyle = attributes.blockStyle,
			    mediaPosition = attributes.mediaPosition,
			    images = attributes.images;


			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, {
				'has-image-on-the-right': 'right' === mediaPosition,
				'content-is-moderate': 'moderate' === contentStyle,
				'content-is-highlighted': 'highlighted' === contentStyle,
				'block-is-moderate': 'moderate' === blockStyle,
				'block-is-highlighted': 'highlighted' === blockStyle,
				'is-simple-grid': 'simple-grid' === mediaStyle,
				'is-selected': isSelected
			});

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
					{ className: 'u-container-width' },
					wp.element.createElement(
						'div',
						{ className: 'nova-media' },
						wp.element.createElement(
							'div',
							{ className: 'nova-media__aside' },
							displayImages(images)
						),
						wp.element.createElement(
							'div',
							{ className: 'nova-media__content' },
							wp.element.createElement(InnerBlocks.Content, null)
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
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_style_scss__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_editor_scss__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scss_editor_scss__);

/**
 * Internal dependencies
 */





/**
 * Block styles
 */



/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('pixelgrade/slideshow', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
	title: __('Slideshow Me the Way', '__plugin_txtd'),
	description: __('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["h" /* slideshow */],
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
/* 150 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":50},"contentWidth":{"type":"string","default":"full"},"contentWidthCustom":{"type":"number","default":100},"minHeight":{"type":"number","default":0},"verticalAlignment":{"type":"string","default":"center"},"horizontalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"slideshowType":{"type":"string","default":"gallery"},"galleryImages":{"type":"array","default":[]},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":0}}}

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview__ = __webpack_require__(152);






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

			var _props = this.props,
			    _props$attributes = _props.attributes,
			    slideshowType = _props$attributes.slideshowType,
			    galleryImages = _props$attributes.galleryImages,
			    minHeight = _props$attributes.minHeight,
			    setAttributes = _props.setAttributes,
			    isSelected = _props.isSelected,
			    className = _props.className;
			var selectedIndex = this.state.selectedIndex;


			if (!galleryImages.length) {
				defaultGalleryImages.map(function (image) {
					return galleryImages.push(image);
				});
			}

			if (selectedIndex >= galleryImages.length) {
				selectedIndex = galleryImages.length - 1;
			}

			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
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
						wp.element.createElement(
							PanelBody,
							{ title: __('Height', '__plugin_txtd'), initialOpen: false },
							wp.element.createElement(RadioControl, {
								label: __('Minimum Height', '__plugin_txtd'),
								selected: minHeight,
								onChange: function onChange(minHeight) {
									setAttributes({ minHeight: minHeight });
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
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["i" /* LayoutPanel */], this.props),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(31);





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
				image: {}
			};

			if (overlayFilterStyle !== 'none') {
				styles.image.opacity = 1 - overlayFilterStrength / 100;
			}

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
								wp.element.createElement('img', { className: 'nova-slideshow__media', src: previewImage.sizes.large.url, alt: '', style: styles.image }),
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





var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InnerBlocks = wp.blockEditor.InnerBlocks;

var Save = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Save, _Component);

	function Save() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Save);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Save.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Save)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Save, [{
		key: 'render',
		value: function render(_ref) {
			var _ref$attributes = _ref.attributes,
			    slideshowType = _ref$attributes.slideshowType,
			    galleryImages = _ref$attributes.galleryImages,
			    contentPadding = _ref$attributes.contentPadding,
			    contentPaddingCustom = _ref$attributes.contentPaddingCustom,
			    contentWidth = _ref$attributes.contentWidth,
			    contentWidthCustom = _ref$attributes.contentWidthCustom,
			    minHeight = _ref$attributes.minHeight,
			    verticalAlignment = _ref$attributes.verticalAlignment,
			    horizontalAlignment = _ref$attributes.horizontalAlignment,
			    enableParallax = _ref$attributes.enableParallax,
			    parallaxAmount = _ref$attributes.parallaxAmount,
			    parallaxCustomAmount = _ref$attributes.parallaxCustomAmount,
			    contentColor = _ref$attributes.contentColor,
			    overlayFilterStyle = _ref$attributes.overlayFilterStyle,
			    overlayFilterStrength = _ref$attributes.overlayFilterStrength,
			    className = _ref.className,
			    setAttributes = _ref.setAttributes;


			var styles = {
				slideshow: {
					color: contentColor
				},
				foreground: {},
				content: {},
				image: {}
			};

			if (contentPadding === 'custom') {
				styles.foreground.padding = contentPaddingCustom;
			}

			if (contentWidth === 'custom') {
				styles.content.maxWidth = contentWidthCustom + '%';
			}

			if (overlayFilterStyle !== 'none') {
				styles.image.opacity = 1 - overlayFilterStrength / 100;
			}

			var classes = [className, 'nova-slideshow', 'nova-u-valign-' + verticalAlignment, 'nova-u-halign-' + horizontalAlignment, 'nova-u-spacing-' + contentPadding, 'nova-u-content-width-' + contentWidth, 'nova-u-background', 'nova-u-background-' + overlayFilterStyle, 'alignfull'];

			if (!!enableParallax) {
				classes.push('nova-slideshow--parallax');
			}

			var actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parallaxAmount;
			actualParallaxAmount = Math.max(Math.min(1, actualParallaxAmount / 100), 0);

			return wp.element.createElement(
				'div',
				{ className: classes.join(' '), style: styles.slideshow, 'data-min-height': minHeight },
				wp.element.createElement(
					'div',
					{ className: 'nova-slideshow__mask' },
					wp.element.createElement(
						'div',
						{ className: 'nova-slideshow__slider', 'data-rellax-amount': actualParallaxAmount },
						galleryImages.map(function (image) {
							return wp.element.createElement(
								'div',
								{ className: 'nova-slideshow__slide' },
								wp.element.createElement(
									'div',
									{ className: 'nova-slideshow__background nova-u-background' },
									wp.element.createElement('img', {
										className: 'nova-slideshow__media',
										src: image.sizes.large.url,
										style: styles.image,
										'data-width': image.sizes.large.width,
										'data-height': image.sizes.large.height
									})
								),
								wp.element.createElement(
									'div',
									{ className: 'nova-slideshow__foreground' },
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
													image.alt
												),
												wp.element.createElement(
													'p',
													null,
													image.caption
												)
											)
										)
									)
								)
							);
						})
					)
				)
			);
		}
	}]);

	return Save;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Save);

/***/ }),
/* 154 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 155 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTI2ZmFkNzUyOTBlZjVhZWEzYTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2F0dHJpYnV0ZXMuanNvbiIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvaGVyby9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9wYWRkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3dpZHRoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXJhbGxheC1wYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbGxlcnktb3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmxvY2staG9yaXpvbnRhbC1hbGlnbm1lbnQtdG9vbGJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlaWdodC1jb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvaGVyby9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvaGVyby9zY3NzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL21lZGlhL2luc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9zY3NzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9hdHRyaWJ1dGVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9lZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc2xpZGVzaG93L3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9zY3NzL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsid3AiLCJjb21wb25lbnRzIiwiU1ZHIiwiUGF0aCIsIm5vdmEiLCJoZXJvIiwibWVkaWEiLCJzbGlkZXNob3ciLCJhbGlnbkJvdHRvbSIsImFsaWduQ2VudGVyIiwiYWxpZ25Ub3AiLCJhbGlnbm1lbnQiLCJpbnZlcnQiLCJzd2FwIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX18iLCJpMThuIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJibG9ja0VkaXRvciIsIkRyb3Bkb3duIiwiSWNvbkJ1dHRvbiIsIlBhbmVsUm93IiwiVG9vbGJhciIsIkFsaWdubWVudFRvb2xiYXIiLCJpc09wZW4iLCJvblRvZ2dsZSIsImljb25zIiwib25DbG9zZSIsInByb3BzIiwiQWxpZ25tZW50Q29udHJvbHMiLCJhdHRyaWJ1dGVzIiwiYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2siLCJob3Jpem9udGFsQWxpZ25tZW50IiwidmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiZGF0YSIsInNlbGVjdCIsImdldFNlbGVjdGVkQmxvY2siLCJpbm5lckJsb2NrcyIsIm1hcCIsImRpc3BhdGNoIiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiYmxvY2siLCJjbGllbnRJZCIsImFsaWduIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJJbm5lckJsb2NrcyIsInRpdGxlIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJlZGl0Iiwic2F2ZSIsImdldEVkaXRXcmFwcGVyUHJvcHMiLCJzZXR0aW5ncyIsImdldFNldHRpbmdzIiwiYWxpZ25XaWRlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCbG9ja0NvbnRyb2xzIiwiTWVkaWFVcGxvYWQiLCJCdXR0b24iLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiUmFkaW9Db250cm9sIiwiVG9nZ2xlQ29udHJvbCIsImVkaXRvckRhdGEiLCJ1cGRhdGVCbG9ja3MiLCJnZXRCbG9ja3MiLCJmaWx0ZXIiLCJuYW1lIiwiaW5kZXgiLCJhcHBseU1pbmltdW1IZWlnaHQiLCJzY3JvbGxJbmRpY2F0b3IiLCJzY3JvbGxJbmRpY2F0b3JCbG9jayIsImJsb2NrTGlzdCIsImRlYm91bmNlZE9uU3Vic2NyaWJlIiwibmV3QmxvY2tMaXN0IiwiYmxvY2tMaXN0Q2hhbmdlZCIsImxlbmd0aCIsInNvbWUiLCJzdWJzY3JpYmUiLCJFZGl0IiwiY29udGVudFBhZGRpbmciLCJjb250ZW50UGFkZGluZ0N1c3RvbSIsImNvbnRlbnRXaWR0aCIsImNvbnRlbnRXaWR0aEN1c3RvbSIsIm1pbkhlaWdodCIsInBvc2l0aW9uSW5kaWNhdG9yIiwiY29udGVudENvbG9yIiwib3ZlcmxheUZpbHRlclN0eWxlIiwib3ZlcmxheUZpbHRlclN0cmVuZ3RoIiwiY2xhc3NOYW1lIiwiaXNTZWxlY3RlZCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJibG9ja0NvbnRyb2xzIiwib3BlbiIsImNsYXNzZXMiLCJzdHlsZXMiLCJjb2xvciIsImZvcmVncm91bmQiLCJjb250ZW50IiwiaW1hZ2UiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1heFdpZHRoIiwib3BhY2l0eSIsImpvaW4iLCJ0eXBlIiwic2l6ZXMiLCJmdWxsIiwidXJsIiwibGV2ZWwiLCJ0ZXh0IiwiTGF5b3V0UGFuZWwiLCJjaGlsZHJlbiIsIkJ1dHRvbkdyb3VwIiwiUmFuZ2VDb250cm9sIiwiUGFkZGluZ0NvbnRyb2xzIiwiY29udGVudFBhZGRpbmdPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbiIsIldpZHRoQ29udHJvbHMiLCJjb250ZW50V2lkdGhPcHRpb25zIiwiUGFyYWxsYXhQYW5lbCIsImVuYWJsZVBhcmFsbGF4IiwicGFyYWxsYXhBbW91bnQiLCJwYXJhbGxheEN1c3RvbUFtb3VudCIsInBhcnNlSW50IiwiRm9ybUZpbGVVcGxvYWQiLCJNZWRpYVBsYWNlaG9sZGVyIiwiR2FsbGVyeVBsYWNlaG9sZGVyIiwiZ2FsbGVyeUltYWdlcyIsInByb21pc2VzIiwiYXBpUmVxdWVzdCIsInBhdGgiLCJpZCIsInRoZW4iLCJuZXdJbWFnZSIsImFsbCIsImxhcmdlIiwic2VsZWN0ZWQiLCJvblNlbGVjdEltYWdlIiwib25DaGFuZ2UiLCJoYXNJbWFnZXMiLCJpbnN0cnVjdGlvbnMiLCJvbkNoYW5nZUdhbGxlcnkiLCJiaW5kIiwidW5kZWZpbmVkIiwiR2FsbGVyeVByZXZpZXciLCJpbWciLCJwdXNoIiwidGh1bWJuYWlsIiwiQ29sb3JQYWxldHRlIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiY29sb3JzIiwiT3ZlcmxheUNvbnRyb2xzIiwiQ29sb3JDb250cm9scyIsIkNvbG9yUGFuZWwiLCJDb2xvclRvb2xiYXIiLCJ3aXRoVmlld3BvcnRNYXRjaCIsInZpZXdwb3J0Iiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsImNyZWF0ZUNvbnRleHQiLCJmb2N1c2VkRWxlbWVudCIsInNldEZvY3VzZWRFbGVtZW50IiwiQ29uc3VtZXIiLCJQcm92aWRlciIsIkJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJERUZBVUxUX0NPTlRST0xTIiwiREVGQVVMVF9DT05UUk9MIiwiQmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhciIsImlzQ29sbGFwc2VkIiwiY29udHJvbHMiLCJhcHBseU9yVW5zZXQiLCJhY3RpdmVBbGlnbm1lbnQiLCJkZWZhdWx0QWxpZ25tZW50Q29udHJvbCIsImNvbnRyb2wiLCJpc0FjdGl2ZSIsIm9uQ2xpY2siLCJ3aXRoQmxvY2tFZGl0Q29udGV4dCIsIm1hcENvbnRleHRUb1Byb3BzIiwiT3JpZ2luYWxDb21wb25lbnQiLCJpc0xhcmdlVmlld3BvcnQiLCJnZXRCbG9ja1Jvb3RDbGllbnRJZCIsImhhc0ZpeGVkVG9vbGJhciIsIkhlaWdodFBhbmVsIiwiU2Nyb2xsSW5kaWNhdG9yUGFuZWwiLCJoZXJvQmxvY2tzIiwiZmluZEluZGV4IiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZGlzcGxheSIsIlNhdmUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZE9wYWNpdHkiLCJhY3R1YWxQYXJhbGxheEFtb3VudCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJpbWFnZXMiLCJhbHQiLCJ1cGRhdGVJbWFnZXMiLCJDb250cm9scyIsIm1lZGlhUG9zaXRpb24iLCJKU09OIiwicGFyc2UiLCJNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTIiwidG9vbGJhckNvbnRyb2xzIiwiSW5zcGVjdG9yIiwibWVkaWFTdHlsZSIsImNvbnRlbnRTdHlsZSIsImJsb2NrU3R5bGUiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwiTWVkaWFQcmV2aWV3IiwiY2xhc3NOYW1lcyIsImNsYXNzbmFtZXMiLCJkaXNwbGF5SW1hZ2VzIiwidGV4dEFsaWduIiwiZGVmYXVsdEdhbGxlcnlJbWFnZXMiLCJzdGF0ZSIsInNlbGVjdGVkSW5kZXgiLCJuZXdJbmRleCIsInNldFN0YXRlIiwic2xpZGVzaG93VHlwZSIsIm9uUHJldkFycm93Q2xpY2siLCJvbk5leHRBcnJvd0NsaWNrIiwiU2xpZGVzaG93UHJldmlldyIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZURpbWVuc2lvbnMiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJjb250YWluZXIiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInByZXZpZXdJbWFnZSIsIm1heEFzcGVjdFJhdGlvIiwibWVkaWFNaW5IZWlnaHQiLCJzbGlkZXJXaWR0aCIsImFzcGVjdFJhdGlvIiwic2xpZGVyIiwiY2FwdGlvbiIsImVsIiwicmVuZGVyQ29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TU8sS0FBTixDQUFZZ0MsS0FBWixDQUFrQnFHLEtBSmhDO0FBS0MseUJBQWM1SSxNQUFNTyxLQUFOLENBQVlnQyxLQUFaLENBQWtCd0c7QUFMakM7QUFERCxTQUREO0FBVUM7QUFBQTtBQUFBLFdBQUssV0FBVSw0QkFBZjtBQUNDO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0RBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLHNCQUFmO0FBQ0M7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNDO0FBQUE7QUFBQTtBQUFNL0ksbUJBQU13RztBQUFaLGFBREQ7QUFFQztBQUFBO0FBQUE7QUFBS3hHLG1CQUFNdUo7QUFBWDtBQUZEO0FBREQ7QUFERDtBQUREO0FBVkQsUUFERDtBQXVCQSxPQXhCQztBQURIO0FBREQ7QUFGRCxJQUREO0FBa0NBOzs7O0VBaEhnQzlPLFM7O0FBQWJ1TCw2RDs7Ozs7O0FDWHJCLHlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiLi9hc3NldHMvanMvZWRpdG9yLmJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MjZmYWQ3NTI5MGVmNWFlYTNhNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBTVkcsIFBhdGggfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBjb25zdCBub3ZhID0gKFxuICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMThDMCA4LjA1ODg4IDguMDU4ODggMCAxOCAwQzI3Ljk0MTEgMCAzNiA4LjA1ODg4IDM2IDE4QzM2IDI3Ljk0MTEgMjcuOTQxMSAzNiAxOCAzNkM4LjA1ODg4IDM2IDAgMjcuOTQxMSAwIDE4Wk0xMi4wMzk4IDE0QzEyLjQwNjkgMTAuNjI2IDE1LjI2NTIgOCAxOC43MzY4IDhIMjAuNDIxMUMyNC42MDY4IDggMjggMTEuMzkzMiAyOCAxNS41Nzg5VjE2LjM4MUMyOCAyMC4zODA5IDI0LjkxNzcgMjMuNjYwOSAyMC45OTg3IDIzLjk3NTNDMjAuOTk5NiAyMy45MzI0IDIxIDIzLjg4OTMgMjEgMjMuODQ2MlYyMS4yNzI3QzIxIDE3LjI1NjEgMTcuNzQzOSAxNCAxMy43MjczIDE0SDEyLjAzOThaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAyMS4yODU3QzggMTguOTE4OCA5LjkxODc4IDE3IDEyLjI4NTcgMTdIMTMuNDU0NUMxNS45NjQ5IDE3IDE4IDE5LjAzNTEgMTggMjEuNTQ1NVYyMy4xNTM4QzE4IDI1LjI3OCAxNi4yNzggMjcgMTQuMTUzOCAyN0gxMy43MTQzQzEwLjU1ODQgMjcgOCAyNC40NDE2IDggMjEuMjg1N1pcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBoZXJvID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8bWFzayBpZD1cIm1hc2swXCIgbWFzay10eXBlPVwiYWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBaTTQgOC40OTEyM0M0IDYuMDEwNzkgNy4wMTYxOSA0IDEwLjczNjggNEgxMS42MTlDMTYuMjQ3NyA0IDIwIDYuNTAxNTIgMjAgOS41ODczQzIwIDEyLjM5MjYgMTYuNTg4OCAxNC42NjY3IDEyLjM4MSAxNC42NjY3SDExLjU3ODlDNy4zOTMyMSAxNC42NjY3IDQgMTIuNDA0NSA0IDkuNjE0MDNWOC40OTEyM1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxOC43MTQzQzcgMTkuNDI0NCA3LjU3NTYzIDIwIDguMjg1NzEgMjBIMTUuNUMxNi4zMjg0IDIwIDE3IDE5LjMyODQgMTcgMTguNVYxOC41QzE3IDE3LjY3MTYgMTYuMzI4NCAxNyAxNS41IDE3SDguNzE0MjlDNy43Njc1MSAxNyA3IDE3Ljc2NzUgNyAxOC43MTQzVjE4LjcxNDNaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBtZWRpYSA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJwYXRoLTEtb3V0c2lkZS0xXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiLTJcIiB5PVwiLTJcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBmaWxsPVwiYmxhY2tcIj5cbiAgICAgICAgICAgIDxyZWN0IGZpbGw9XCJ3aGl0ZVwiIHg9XCItMlwiIHk9XCItMlwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMEM4LjA1ODg4IDAgMCA4LjA1ODg4IDAgMThDMCAyNy45NDExIDguMDU4ODggMzYgMTggMzZDMjcuOTQxMSAzNiAzNiAyNy45NDExIDM2IDE4QzM2IDguMDU4ODggMjcuOTQxMSAwIDE4IDBaTTIzLjQ3MzcgMjVDMjAuNDUwNyAyNSAxOCAyMi41NDkzIDE4IDE5LjUyNjNWMTguODA5NUMxOCAxNS4wNDg3IDIxLjA0ODcgMTIgMjQuODA5NSAxMkMyOC4yMjg0IDEyIDMxIDE0Ljc3MTYgMzEgMTguMTkwNVYxOC44NDIxQzMxIDIyLjI0MyAyOC4yNDMgMjUgMjQuODQyMSAyNUgyMy40NzM3WlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4IDBDOC4wNTg4OCAwIDAgOC4wNTg4OCAwIDE4QzAgMjcuOTQxMSA4LjA1ODg4IDM2IDE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg4IDI3Ljk0MTEgMCAxOCAwWk0yMy40NzM3IDI1QzIwLjQ1MDcgMjUgMTggMjIuNTQ5MyAxOCAxOS41MjYzVjE4LjgwOTVDMTggMTUuMDQ4NyAyMS4wNDg3IDEyIDI0LjgwOTUgMTJDMjguMjI4NCAxMiAzMSAxNC43NzE2IDMxIDE4LjE5MDVWMTguODQyMUMzMSAyMi4yNDMgMjguMjQzIDI1IDI0Ljg0MjEgMjVIMjMuNDczN1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yIDE4QzIgOS4xNjM0NCA5LjE2MzQ0IDIgMTggMlYtMkM2Ljk1NDMxIC0yIC0yIDYuOTU0MzEgLTIgMThIMlpNMTggMzRDOS4xNjM0NCAzNCAyIDI2LjgzNjYgMiAxOEgtMkMtMiAyOS4wNDU3IDYuOTU0MzEgMzggMTggMzhWMzRaTTM0IDE4QzM0IDI2LjgzNjYgMjYuODM2NiAzNCAxOCAzNFYzOEMyOS4wNDU3IDM4IDM4IDI5LjA0NTcgMzggMThIMzRaTTE4IDJDMjYuODM2NiAyIDM0IDkuMTYzNDQgMzQgMThIMzhDMzggNi45NTQzMSAyOS4wNDU3IC0yIDE4IC0yVjJaTTE2IDE5LjUyNjNDMTYgMjMuNjUzOSAxOS4zNDYxIDI3IDIzLjQ3MzcgMjdWMjNDMjEuNTU1MiAyMyAyMCAyMS40NDQ4IDIwIDE5LjUyNjNIMTZaTTE2IDE4LjgwOTVWMTkuNTI2M0gyMFYxOC44MDk1SDE2Wk0yNC44MDk1IDEwQzE5Ljk0NDIgMTAgMTYgMTMuOTQ0MiAxNiAxOC44MDk1SDIwQzIwIDE2LjE1MzMgMjIuMTUzMyAxNCAyNC44MDk1IDE0VjEwWk0zMyAxOC4xOTA1QzMzIDEzLjY2NyAyOS4zMzMgMTAgMjQuODA5NSAxMFYxNEMyNy4xMjM5IDE0IDI5IDE1Ljg3NjEgMjkgMTguMTkwNUgzM1pNMzMgMTguODQyMVYxOC4xOTA1SDI5VjE4Ljg0MjFIMzNaTTI0Ljg0MjEgMjdDMjkuMzQ3NiAyNyAzMyAyMy4zNDc2IDMzIDE4Ljg0MjFIMjlDMjkgMjEuMTM4NCAyNy4xMzg0IDIzIDI0Ljg0MjEgMjNWMjdaTTIzLjQ3MzcgMjdIMjQuODQyMVYyM0gyMy40NzM3VjI3WlwiIGZpbGw9XCJ3aGl0ZVwiIG1hc2s9XCJ1cmwoI3BhdGgtMS1vdXRzaWRlLTEpXCIvPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDMwQzguNjg2MjkgMzAgNiAyNy4zMTM3IDYgMjRWMTRDNiA5LjU4MTcyIDkuNTgxNzIgNiAxNCA2SDE2QzE4LjcyOCA2IDIwLjk0NTggOC4xODQ3NSAyMC45OTkgMTAuOUMxOC4wMzg4IDEyLjM0NzEgMTYgMTUuMzg3OCAxNiAxOC45MDQ4VjE5Ljg0MjFDMTYgMjIuOTQ4NCAxNy45Nzg2IDI1LjU5MjUgMjAuNzQ0MyAyNi41ODI5QzIwLjA4MjEgMjguNTY4NSAxOC4yMDgyIDMwIDE2IDMwSDEyWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlc2hvdyA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJtYXNrMFwiIG1hc2stdHlwZT1cImFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByeD1cIjEyXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPGcgbWFzaz1cInVybCgjbWFzazApXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwVjBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJWMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0VjI0QzUuMzcyNTggMjQgMCAxOC42Mjc0IDAgMTJWMTJaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjM5ODIgOC45OTI4M0MxNy44ODMxIDkuMzkyODIgMTcuODgzMSAxMC4xMzU4IDE3LjM5ODIgMTAuNTM1N0wxNC45NjczIDEyLjU0MDdDMTQuMzE1IDEzLjA3ODcgMTMuMzMxIDEyLjYxNDcgMTMuMzMxIDExLjc2OTJWNy43NTkzM0MxMy4zMzEgNi45MTM4NiAxNC4zMTUgNi40NDk5MiAxNC45NjczIDYuOTg3ODhMMTcuMzk4MiA4Ljk5MjgzWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi42MDE4NCA4Ljk5MjgzQzYuMTE2ODkgOS4zOTI4MiA2LjExNjg5IDEwLjEzNTggNi42MDE4NCAxMC41MzU3TDkuMDMyNzIgMTIuNTQwN0M5LjY4NDk2IDEzLjA3ODcgMTAuNjY5IDEyLjYxNDcgMTAuNjY5IDExLjc2OTJWNy43NTkzM0MxMC42NjkgNi45MTM4NiA5LjY4NDk2IDYuNDQ5OTIgOS4wMzI3MiA2Ljk4Nzg4TDYuNjAxODQgOC45OTI4M1pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTguMjc1MUM3IDE4LjgwMzMgNy40MjgxOCAxOS4yMzE0IDcuOTU2MzcgMTkuMjMxNEg4LjIxNzJDOC43Nzc0IDE5LjIzMTQgOS4yMzE1NCAxOC43NzczIDkuMjMxNTQgMTguMjE3MVYxNy44NTgyQzkuMjMxNTQgMTcuMzg0MiA4Ljg0NzI3IDE2Ljk5OTkgOC4zNzMyNSAxNi45OTk5SDguMjc1MTdDNy41NzA5MSAxNi45OTk5IDcgMTcuNTcwOCA3IDE4LjI3NTFWMTguMjc1MVpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNzE5MiAxOC4yNzUxQzEwLjcxOTIgMTguODAzMyAxMS4xNDc0IDE5LjIzMTQgMTEuNjc1NiAxOS4yMzE0SDExLjkzNjRDMTIuNDk2NiAxOS4yMzE0IDEyLjk1MDggMTguNzc3MyAxMi45NTA4IDE4LjIxNzFWMTcuODU4MkMxMi45NTA4IDE3LjM4NDIgMTIuNTY2NSAxNi45OTk5IDEyLjA5MjUgMTYuOTk5OUgxMS45OTQ0QzExLjI5MDEgMTYuOTk5OSAxMC43MTkyIDE3LjU3MDggMTAuNzE5MiAxOC4yNzUxVjE4LjI3NTFaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjQzODUgMTguMjc1MUMxNC40Mzg1IDE4LjgwMzMgMTQuODY2NyAxOS4yMzE0IDE1LjM5NDggMTkuMjMxNEgxNS42NTU3QzE2LjIxNTkgMTkuMjMxNCAxNi42NyAxOC43NzczIDE2LjY3IDE4LjIxNzFWMTcuODU4MkMxNi42NyAxNy4zODQyIDE2LjI4NTcgMTYuOTk5OSAxNS44MTE3IDE2Ljk5OTlIMTUuNzEzNkMxNS4wMDk0IDE2Ljk5OTkgMTQuNDM4NSAxNy41NzA4IDE0LjQzODUgMTguMjc1MVYxOC4yNzUxWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBhbGlnbkJvdHRvbSA9IChcbiAgICA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gICAgICAgIDxQYXRoIGQ9XCJNMTYgMTNoLTNWM2gtMnYxMEg4bDQgNCA0LTR6TTQgMTl2MmgxNnYtMkg0elwiIC8+XG4gICAgPC9TVkc+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxpZ25DZW50ZXIgPSAoXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICAgICAgICA8UGF0aCBkPVwiTTggMTloM3Y0aDJ2LTRoM2wtNC00LTQgNHptOC0xNGgtM1YxaC0ydjRIOGw0IDQgNC00ek00IDExdjJoMTZ2LTJINHpcIlxuICAgICAgICAvPlxuICAgIDwvU1ZHPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsaWduVG9wID0gKFxuICAgIDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz5cbiAgICAgICAgPFBhdGggZD1cIk04IDExaDN2MTBoMlYxMWgzbC00LTQtNCA0ek00IDN2MmgxNlYzSDR6XCIgLz5cbiAgICA8L1NWRz5cbik7XG5cbmV4cG9ydCBjb25zdCBhbGlnbm1lbnQgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNTQgNS41NEwxMy43NyA3LjNMMTIgNS41NEwxMC4yMyA3LjNMOC40NiA1LjU0TDEyIDJMMTUuNTQgNS41NFpNMTguNDYgMTUuNTRMMTYuNyAxMy43N0wxOC40NiAxMkwxNi43IDEwLjIzTDE4LjQ2IDguNDZMMjIgMTJMMTguNDYgMTUuNTRaTTguNDYgMTguNDZMMTAuMjMgMTYuN0wxMiAxOC40NkwxMy43NyAxNi43TDE1LjU0IDE4LjQ2TDEyIDIyTDguNDYgMTguNDZaTTUuNTQgOC40Nkw3LjMgMTAuMjNMNS41NCAxMkw3LjMgMTMuNzdMNS41NCAxNS41NEwyIDEyTDUuNTQgOC40NlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDE1QzEzLjY1NjkgMTUgMTUgMTMuNjU2OSAxNSAxMkMxNSAxMC4zNDMxIDEzLjY1NjkgOSAxMiA5QzEwLjM0MzEgOSA5IDEwLjM0MzEgOSAxMkM5IDEzLjY1NjkgMTAuMzQzMSAxNSAxMiAxNVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGludmVydCA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yMCAxNS4zMDk5TDIzLjMxIDExLjk5OTlMMjAgOC42ODk5NFYzLjk5OTk0SDE1LjMxTDEyIDAuNjg5OTQxTDguNjkgMy45OTk5NEg0VjguNjg5OTRMMC42OTAwMDIgMTEuOTk5OUw0IDE1LjMwOTlWMTkuOTk5OUg4LjY5TDEyIDIzLjMwOTlMMTUuMzEgMTkuOTk5OUgyMFYxNS4zMDk5Wk0xMiAxNy45OTk5VjUuOTk5OTRDMTUuMzEgNS45OTk5NCAxOCA4LjY4OTk0IDE4IDExLjk5OTlDMTggMTUuMzA5OSAxNS4zMSAxNy45OTk5IDEyIDE3Ljk5OTlaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzd2FwID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIi0yIC0yIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTcgM0gxMkMxMS40NDc3IDMgMTEgMy40NDc3MiAxMSA0VjdDMTEgNy41NTIyOCAxMS40NDc3IDggMTIgOEgxN0MxNy41NTIzIDggMTggNy41NTIyOCAxOCA3VjRDMTggMy40NDc3MiAxNy41NTIzIDMgMTcgM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTggMTJIM0MyLjQ0NzcyIDEyIDIgMTIuNDQ3NyAyIDEzVjE2QzIgMTYuNTUyMyAyLjQ0NzcyIDE3IDMgMTdIOEM4LjU1MjI4IDE3IDkgMTYuNTUyMyA5IDE2VjEzQzkgMTIuNDQ3NyA4LjU1MjI4IDEyIDggMTJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMyAxMkgxNEMxNCAxMi43OTU2IDEzLjY4MzkgMTMuNTU4NyAxMy4xMjEzIDE0LjEyMTNDMTIuNTU4NyAxNC42ODM5IDExLjc5NTYgMTUgMTEgMTVWMTdDMTIuMzI2MSAxNyAxMy41OTc5IDE2LjQ3MzIgMTQuNTM1NSAxNS41MzU1QzE1LjQ3MzIgMTQuNTk3OSAxNiAxMy4zMjYxIDE2IDEySDE3TDE1IDlMMTMgMTJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk00IDhIM0w1IDExTDcgOEg2QzYgNy4yMDQzNSA2LjMxNjA3IDYuNDQxMjkgNi44Nzg2OCA1Ljg3ODY4QzcuNDQxMjkgNS4zMTYwNyA4LjIwNDM1IDUgOSA1VjNDNy42NzM5MiAzIDYuNDAyMTUgMy41MjY3OCA1LjQ2NDQ3IDQuNDY0NDdDNC41MjY3OCA1LjQwMjE1IDQgNi42NzM5MiA0IDhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaWNvbnMuanMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQpID0+IHtcblx0bGV0IHRpbWVvdXQgPSBudWxsO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XG5cdFx0Y29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuXHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy91dGlscy5qcyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBMYXlvdXRQYW5lbCBmcm9tICcuL2xheW91dC1wYW5lbCc7XG5pbXBvcnQgUGFyYWxsYXhQYW5lbCBmcm9tICcuL3BhcmFsbGF4LXBhbmVsJztcblxuaW1wb3J0IHtcblx0R2FsbGVyeVByZXZpZXcsXG5cdEdhbGxlcnlQbGFjZWhvbGRlcixcbn0gZnJvbSAnLi9nYWxsZXJ5LW9wdGlvbnMnO1xuXG5pbXBvcnQge1xuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdE92ZXJsYXlDb250cm9sc1xufSBmcm9tICcuL2NvbG9yLWNvbnRyb2xzJztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEFsaWdubWVudFRvb2xiYXJcbn0gZnJvbSAnLi9hbGlnbm1lbnQtY29udHJvbHMnO1xuXG5pbXBvcnQge1xuXHRIZWlnaHRQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWxcbn0gZnJvbSAnLi9oZWlnaHQtY29udHJvbHMnO1xuXG5leHBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0Q29sb3JUb29sYmFyLFxuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxuXHRIZWlnaHRQYW5lbCxcblx0TGF5b3V0UGFuZWwsXG5cdE92ZXJsYXlDb250cm9scyxcblx0UGFyYWxsYXhQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWwsXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2Jsb2Nrcy9pY29uc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXInO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdERyb3Bkb3duLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jbGFzcyBBbGlnbm1lbnRUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb250ZW50IGFsaWdubWVudCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgQWxpZ25tZW50Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHRcdHZlcnRpY2FsQWxpZ25tZW50XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxzcGFuPnsgX18oICdIb3Jpem9udGFsJywgJ19fcGx1Z2luX3R4dGQnICkgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8QmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e2hvcml6b250YWxBbGlnbm1lbnR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aG9yaXpvbnRhbEFsaWdubWVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdHdwLmRhdGEuc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldFNlbGVjdGVkQmxvY2soKS5pbm5lckJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwgeyBhbGlnbjogaG9yaXpvbnRhbEFsaWdubWVudCB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBob3Jpem9udGFsQWxpZ25tZW50IH0gKVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHR7IGFwcGx5TWluaW11bUhlaWdodEJsb2NrICYmIDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8c3Bhbj57IF9fKCAnVmVydGljYWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PC9zcGFuPlxuXHRcdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZlcnRpY2FsQWxpZ25tZW50ID0+IHNldEF0dHJpYnV0ZXMoIHt2ZXJ0aWNhbEFsaWdubWVudH0gKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsUm93PiB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9pbmRleC5qcyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vaGVyb1wiO1xuaW1wb3J0IFwiLi9tZWRpYVwiO1xuaW1wb3J0IFwiLi9zbGlkZXNob3dcIjtcblxuaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2luZGV4LmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogQmxvY2sgc3R5bGVzXG4gKi9cbmltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvZWRpdG9yLnNjc3MnO1xuXG4vKipcbiAqIHdwIEFQSVxuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSggJ3BpeGVsZ3JhZGUvaGVybycsXG5cdHtcblx0XHR0aXRsZTogX18oICdIZXJvIG9mIHRoZSBHYWxheHknLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRpY29uOiBpY29ucy5oZXJvLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0EgZ3JlYXQgd2F5IHRvIGdldCB5b3VyIHZpc2l0b3JzIGFjcXVhaW50ZWQgd2l0aCB5b3VyIGNvbnRlbnQuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0Y2F0ZWdvcnk6IFwibm92YS1ieS1waXhlbGdyYWRlXCIsXG4vL1x0XHQuLi5hdHRyaWJ1dGVzLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+XG5cdFx0fSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9oZXJvL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wiY29udGVudFBhZGRpbmdcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIm1lZGl1bVwifSxcImNvbnRlbnRQYWRkaW5nQ3VzdG9tXCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NzV9LFwiY29udGVudFdpZHRoXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJsYXJnZVwifSxcImNvbnRlbnRXaWR0aEN1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjEwMH0sXCJob3Jpem9udGFsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwiZW5hYmxlUGFyYWxsYXhcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJwYXJhbGxheEFtb3VudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiNTBcIn0sXCJwYXJhbGxheEN1c3RvbUFtb3VudFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjUwfSxcImVuYWJsZU1pbkhlaWdodFwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjp0cnVlfSxcImFwcGx5TWluaW11bUhlaWdodFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic291cmNlXCI6XCJtZXRhXCIsXCJtZXRhXCI6XCJub3ZhX2hlcm9fYXBwbHlfbWluaW11bV9oZWlnaHRcIn0sXCJtaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX21pbmltdW1faGVpZ2h0XCJ9LFwiYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2tcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6ZmFsc2V9LFwic2Nyb2xsSW5kaWNhdG9yXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwic291cmNlXCI6XCJtZXRhXCIsXCJtZXRhXCI6XCJub3ZhX2hlcm9fc2Nyb2xsX2luZGljYXRvclwifSxcInNjcm9sbEluZGljYXRvckJsb2NrXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOmZhbHNlfSxcImJhY2tncm91bmRUeXBlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJpbWFnZVwifSxcIm1lZGlhXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZWZhdWx0XCI6e1widHlwZVwiOlwiaW1hZ2VcIixcInNpemVzXCI6e1wiZnVsbFwiOntcInVybFwiOlwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDk2MzE5OTgtNmQ1NTRiMTQwMmFlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjAwJnE9ODBcIixcInVybDFcIjpcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4MDY2MDAwNzE0LTU4YzQ1ZjFhMmMwYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk1MCZxPTgwXCJ9fX19LFwiY29udGVudENvbG9yXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCIjRkZGXCJ9LFwib3ZlcmxheUZpbHRlclN0eWxlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJkYXJrXCJ9LFwib3ZlcmxheUZpbHRlclN0cmVuZ3RoXCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MzB9LFwiaW1hZ2VzXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2hlcm8vYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGljb25zIGZyb20gJy4uL2ljb25zJztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEhlaWdodFBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0T3ZlcmxheUNvbnRyb2xzLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0TWVkaWFVcGxvYWQsXG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0U2VsZWN0Q29udHJvbCxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRUb29sYmFyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGVkaXRvckRhdGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApO1xuXG5jb25zdCB1cGRhdGVCbG9ja3MgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGVkaXRvckRhdGEuZ2V0QmxvY2tzKCkuZmlsdGVyKCBibG9jayA9PiB7XG5cdFx0cmV0dXJuIGJsb2NrLm5hbWUgPT09ICdwaXhlbGdyYWRlL2hlcm8nO1xuXHR9ICkuZmlsdGVyKCAoIGJsb2NrLCBpbmRleCApID0+IHtcblx0XHRjb25zdCB7IGFwcGx5TWluaW11bUhlaWdodCwgc2Nyb2xsSW5kaWNhdG9yIH0gPSB7IC4uLmJsb2NrLmF0dHJpYnV0ZXMsIC4uLmF0dHJpYnV0ZXMgfTtcblx0XHRjb25zdCBhcHBseU1pbmltdW1IZWlnaHRCbG9jayA9IGFwcGx5TWluaW11bUhlaWdodCA9PT0gJ2ZpcnN0JyAmJiBpbmRleCA9PT0gMCB8fCBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdhbGwnO1xuXHRcdGNvbnN0IHNjcm9sbEluZGljYXRvckJsb2NrID0gc2Nyb2xsSW5kaWNhdG9yID09PSB0cnVlICYmIGluZGV4ID09PSAwO1xuXG5cdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggYmxvY2suY2xpZW50SWQsIHtcblx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2tcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSApO1xuXG59XG5cbmxldCBibG9ja0xpc3QgPSBlZGl0b3JEYXRhLmdldEJsb2NrcygpO1xubGV0IGRlYm91bmNlZE9uU3Vic2NyaWJlID0gZGVib3VuY2UoKCkgPT4ge1xuXG5cdGNvbnN0IG5ld0Jsb2NrTGlzdCA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5cdGxldCBibG9ja0xpc3RDaGFuZ2VkID0gYmxvY2tMaXN0Lmxlbmd0aCAhPT0gbmV3QmxvY2tMaXN0Lmxlbmd0aDtcblxuXHRpZiAoICEgYmxvY2tMaXN0Q2hhbmdlZCApIHtcblx0XHRibG9ja0xpc3RDaGFuZ2VkID0gYmxvY2tMaXN0LnNvbWUoICggYmxvY2ssIGluZGV4ICkgPT4ge1xuXHRcdFx0cmV0dXJuICggYmxvY2tMaXN0W2luZGV4XS5jbGllbnRJZCAhPT0gbmV3QmxvY2tMaXN0W2luZGV4XS5jbGllbnRJZCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggYmxvY2tMaXN0Q2hhbmdlZCApIHtcblx0XHRibG9ja0xpc3QgPSBuZXdCbG9ja0xpc3Q7XG5cdFx0dXBkYXRlQmxvY2tzKCk7XG5cdH1cbn0sIDMwKTtcblxud3AuZGF0YS5zdWJzY3JpYmUoIGRlYm91bmNlZE9uU3Vic2NyaWJlICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHRcdC8vIGFsaWdubWVudFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0Ly8gaGVpZ2h0XG5cdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodCxcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yLFxuXHRcdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9jayxcblx0XHRcdFx0cG9zaXRpb25JbmRpY2F0b3IsXG5cdFx0XHRcdC8vIGNvbG9yc1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0cmVuZ3RoLFxuXHRcdFx0XHQvLyBtZWRpYVxuXHRcdFx0XHRtZWRpYSxcblx0XHRcdH0sXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0aXNTZWxlY3RlZFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJywgJ3ZpZGVvJyBdO1xuXG5cdFx0Y29uc3QgYmxvY2tDb250cm9scyA9IChcblx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRcdHBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdFx0cmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IChcblx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb250ZW50IGFsaWdubWVudCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmludmVydCB9XG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ludmVydCBjb2xvcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0XHRyZW5kZXJDb250ZW50PXsgKCB7IG9uQ2xvc2UgfSApID0+IDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PENvbG9yQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdFx0PE92ZXJsYXlDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYSB9ICkgfVxuXHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N3YXAgTWVkaWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj0nZm9ybWF0LWltYWdlJ1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdCk7XG5cblx0XHRjb25zdCBoZXJvID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2xhc3NlcyA9IFtcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHQnbm92YS1oZXJvJyxcblx0XHRcdFx0YG5vdmEtdS12YWxpZ24tJHt2ZXJ0aWNhbEFsaWdubWVudH1gLFxuXHRcdFx0XHRgbm92YS11LWhhbGlnbi0ke2hvcml6b250YWxBbGlnbm1lbnR9YCxcblx0XHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdFx0YG5vdmEtdS1jb250ZW50LXdpZHRoLSR7Y29udGVudFdpZHRofWAsXG5cdFx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZGAsXG5cdFx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gXG5cdFx0XHRdXG5cblx0XHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdFx0aGVybzoge1xuXHRcdFx0XHRcdGNvbG9yOiBjb250ZW50Q29sb3IsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvcmVncm91bmQ6IHt9LFxuXHRcdFx0XHRjb250ZW50OiB7fSxcblx0XHRcdFx0aW1hZ2U6IHt9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISEgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgKSB7XG5cdFx0XHRcdHN0eWxlcy5oZXJvLm1pbkhlaWdodCA9IG1pbkhlaWdodCArICd2aCdcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdUb3AgPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nQm90dG9tID0gYCR7Y29udGVudFBhZGRpbmdDdXN0b219JWBcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBjb250ZW50V2lkdGggPT09ICdjdXN0b20nICkge1xuXHRcdFx0XHRzdHlsZXMuY29udGVudC5tYXhXaWR0aCA9IGAke2NvbnRlbnRXaWR0aEN1c3RvbX0lYFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG92ZXJsYXlGaWx0ZXJTdHlsZSAhPT0gJ25vbmUnICkge1xuXHRcdFx0XHRzdHlsZXMuaW1hZ2Uub3BhY2l0eSA9IDEgLSBvdmVybGF5RmlsdGVyU3RyZW5ndGggLyAxMDBcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlcy5oZXJvfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19fbWFzayc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19fYmFja2dyb3VuZCc+XG5cdFx0XHRcdFx0XHR7IG1lZGlhLnR5cGUgPT09ICdpbWFnZScgJiYgdHlwZW9mIG1lZGlhLnNpemVzICE9PSAndW5kZWZpbmVkJ1xuXHRcdFx0XHRcdFx0ICAmJiA8aW1nIGNsYXNzTmFtZT0nbm92YS1oZXJvX19tZWRpYScgc3JjPXsgbWVkaWEuc2l6ZXMuZnVsbC51cmwgfSBzdHlsZT17IHN0eWxlcy5pbWFnZSB9Lz4gfVxuXHRcdFx0XHRcdFx0eyBtZWRpYS50eXBlID09PSAndmlkZW8nXG5cdFx0XHRcdFx0XHQgICYmIDx2aWRlbyBtdXRlZCBhdXRvcGxheSBsb29wIGNsYXNzTmFtZT0nbm92YS1oZXJvX19tZWRpYScgc3JjPXsgbWVkaWEudXJsIH0gc3R5bGU9eyBzdHlsZXMuaW1hZ2UgfS8+IH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2ZvcmVncm91bmQgbm92YS11LWNvbnRlbnQtcGFkZGluZycgc3R5bGU9eyBzdHlsZXMuZm9yZWdyb3VuZCB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLXUtY29udGVudC1hbGlnbic+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19jb250ZW50IG5vdmEtdS1jb250ZW50LXdpZHRoJyBzdHlsZT17IHN0eWxlcy5jb250ZW50IH0+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZT17W1xuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvaGVhZGluZycsIHsgY29udGVudDogJ1RoaXMgaXMgYSBjYXRjaHkgdGl0bGUnLCBhbGlnbjogJ2NlbnRlcicsIGxldmVsOiAxIH0gXSxcblx0XHRcdFx0XHRcdFx0XHRbICdjb3JlL3BhcmFncmFwaCcsIHsgY29udGVudDogJ0EgYnJpbGxpYW50IHN1YnRpdGxlIHRvIGV4cGxhaW4gaXRzIGNhdGNoaW5lc3MnLCBhbGlnbjogJ2NlbnRlcicgfSBdLFxuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvYnV0dG9uJywgeyB0ZXh0OiAnRGlzY292ZXIgbW9yZScsIGFsaWduOiAnY2VudGVyJyB9IF0sXG5cdFx0XHRcdFx0XHRcdF19IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsgc2Nyb2xsSW5kaWNhdG9yQmxvY2sgJiYgPGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19faW5kaWNhdG9yJz48L2Rpdj4gfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdHsgaGVybygpIH1cblx0XHRcdFx0eyBibG9ja0NvbnRyb2xzIH1cblx0XHRcdDwvRnJhZ21lbnQ+LFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0NvbnRlbnQgUG9zaXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgdHJ1ZSB9PlxuXHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8Q29sb3JQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PEhlaWdodFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxTY3JvbGxJbmRpY2F0b3JQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdQb3NpdGlvbiBJbmRpY2F0b3JzJywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IHRydWUgfT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBQb3NpdGlvbiBJbmRpY2F0b3JzJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IHBvc2l0aW9uSW5kaWNhdG9yIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgcG9zaXRpb25JbmRpY2F0b3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHBvc2l0aW9uSW5kaWNhdG9yIH0gKTtcblx0XHRcdFx0XHRcdFx0dXBkYXRlQmxvY2tzKCB7IHBvc2l0aW9uSW5kaWNhdG9yIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFyYWxsYXhQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdF1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9oZXJvL2VkaXQuanMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBpc0VudW0uY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQYWRkaW5nQ29udHJvbHMgZnJvbSBcIi4vcGFkZGluZ1wiO1xuaW1wb3J0IFdpZHRoQ29udHJvbHMgZnJvbSBcIi4vd2lkdGhcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiA8UGFuZWxCb2R5XG5cdFx0XHRjbGFzc05hbWU9XCJwaXhlbGdyYWRlLWhlcm8tYnV0dG9uLWdyb3VwLXdyYXBwZXJcIlxuXHRcdFx0dGl0bGU9eyBfXyggJ0xheW91dCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdGluaXRpYWxPcGVuPXsgdHJ1ZSB9PlxuXG5cdFx0XHQ8UGFkZGluZ0NvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHQ8V2lkdGhDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXG5cdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdDwvUGFuZWxCb2R5PlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9pbmRleC5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZGRpbmdDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudFBhZGRpbmcsXG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGNvbnRlbnRQYWRkaW5nT3B0aW9ucyA9IFtcblx0XHRcdHsgbGFiZWw6IF9fKCAnU21hbGwnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdzbWFsbCcgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTWVkaXVtJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbWVkaXVtJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdMYXJnZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2xhcmdlJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdjdXN0b20nIH0sXG5cdFx0XTtcblxuXHRcdHJldHVybiA8RnJhZ21lbnQ+XG5cdFx0XHQ8bGFiZWw+eyBfXyggJ0NvbnRlbnQgUGFkZGluZycsICdfX3BsdWdpbl90eHRkJykgfTwvbGFiZWw+XG5cdFx0XHQ8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdHsgY29udGVudFBhZGRpbmdPcHRpb25zLm1hcCggb3B0aW9uID0+XG5cdFx0XHRcdFx0PEJ1dHRvbiBrZXk9eyBvcHRpb24udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRpc0RlZmF1bHQ9eyBvcHRpb24udmFsdWUgIT09IGNvbnRlbnRQYWRkaW5nIH1cblx0XHRcdFx0XHQgICAgICAgIGlzUHJpbWFyeT17IG9wdGlvbi52YWx1ZSA9PT0gY29udGVudFBhZGRpbmcgfVxuXHRcdFx0XHRcdCAgICAgICAgb25DbGljaz17ICgpID0+IHsgc2V0QXR0cmlidXRlcyggeyBjb250ZW50UGFkZGluZzogb3B0aW9uLnZhbHVlIH0gKSB9IH0+XG5cdFx0XHRcdFx0XHR7IG9wdGlvbi5sYWJlbCB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdHsgJ2N1c3RvbScgPT09IGNvbnRlbnRQYWRkaW5nICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBjb250ZW50UGFkZGluZ0N1c3RvbSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudFBhZGRpbmdDdXN0b20gPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50UGFkZGluZ0N1c3RvbSB9ICkgfVxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MjV9XG5cdFx0XHQvPiB9XG5cdFx0PC9GcmFnbWVudD5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvcGFkZGluZy5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcblx0UmFuZ2VDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZHRoQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRXaWR0aCxcblx0XHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGNvbnRlbnRXaWR0aE9wdGlvbnMgPSBbXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0Z1bGwnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdmdWxsJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdMYXJnZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2xhcmdlJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdOYXJyb3cnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICduYXJyb3cnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2N1c3RvbScgfSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxsYWJlbD57IF9fKCAnQ29udGVudCBXaWR0aCcsICdfX3BsdWdpbl90eHRkJykgfTwvbGFiZWw+XG5cdFx0XHQ8QnV0dG9uR3JvdXAgbGFiZWw9XCJDb250ZW50IFdpZHRoXCI+XG5cdFx0XHRcdHsgY29udGVudFdpZHRoT3B0aW9ucy5tYXAoIG9wdGlvbiA9PlxuXHRcdFx0XHRcdDxCdXR0b24gaXNEZWZhdWx0PXsgb3B0aW9uLnZhbHVlICE9PSBjb250ZW50V2lkdGggfVxuXHRcdFx0XHRcdCAgICAgICAgaXNQcmltYXJ5PXsgb3B0aW9uLnZhbHVlID09PSBjb250ZW50V2lkdGggfVxuXHRcdFx0XHRcdCAgICAgICAgb25DbGljaz17ICgpID0+IHsgc2V0QXR0cmlidXRlcyggeyBjb250ZW50V2lkdGg6IG9wdGlvbi52YWx1ZX0gKSB9IH0+XG5cdFx0XHRcdFx0XHR7IG9wdGlvbi5sYWJlbCB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdHsgJ2N1c3RvbScgPT09IGNvbnRlbnRXaWR0aCAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdHZhbHVlPXsgY29udGVudFdpZHRoQ3VzdG9tIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50V2lkdGhDdXN0b20gPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50V2lkdGhDdXN0b20gfSApIH1cblx0XHRcdFx0bWluPXsyMH1cblx0XHRcdFx0bWF4PXs5MH1cblx0XHRcdFx0c3RlcD17MTB9XG5cdFx0XHQvPiB9XG5cdFx0PC9GcmFnbWVudD5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvd2lkdGguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFJhZGlvQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbGxheFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQvLyBwYXJhbGxheFxuXHRcdFx0XHRlbmFibGVQYXJhbGxheCxcblx0XHRcdFx0cGFyYWxsYXhBbW91bnQsXG5cdFx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdQYXJhbGxheCcsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgUGFyYWxsYXggU2Nyb2xsaW5nJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBlbmFibGVQYXJhbGxheCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGVuYWJsZVBhcmFsbGF4OiAhIGVuYWJsZVBhcmFsbGF4IH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgISEgZW5hYmxlUGFyYWxsYXggJiZcblx0XHRcdFx0ICA8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0ICBsYWJlbD17IF9fKCAnUGFyYWxsYXggT3JiaXRhbCBTcGVlZCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHQgIHNlbGVjdGVkPXsgcGFyYWxsYXhBbW91bnQgfVxuXHRcdFx0XHRcdCAgb25DaGFuZ2U9eyBwYXJhbGxheEFtb3VudCA9PiB7XG5cblx0XHRcdFx0XHRcdCAgaWYgKCBwYXJhbGxheEFtb3VudCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRcdFx0XHRcdCAgc2V0QXR0cmlidXRlcyggeyBwYXJhbGxheEFtb3VudCB9ICk7XG5cdFx0XHRcdFx0XHQgIH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdCAgc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdCAgcGFyYWxsYXhBbW91bnQ6IHBhcmFsbGF4QW1vdW50LFxuXHRcdFx0XHRcdFx0XHRcdCAgcGFyYWxsYXhDdXN0b21BbW91bnQ6IHBhcnNlSW50KCBwYXJhbGxheEFtb3VudCwgMTAgKVxuXHRcdFx0XHRcdFx0XHQgIH0gKTtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgfSB9XG5cdFx0XHRcdFx0ICBvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdGYXN0IGFzIE1lcmN1cmUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJzIwJ1xuXHRcdFx0XHRcdFx0ICB9LCB7XG5cdFx0XHRcdFx0XHRcdCAgbGFiZWw6IF9fKCAnTmF0dXJhbCBhcyBFYXJ0aCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnNTAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdTbG93IGFzIE5lcHR1bmUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJzcwJ1xuXHRcdFx0XHRcdFx0ICB9LCB7XG5cdFx0XHRcdFx0XHRcdCAgbGFiZWw6IF9fKCAnQ3VzdG9tJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICdjdXN0b20nXG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgIF19XG5cdFx0XHRcdFx0ICBoZWxwPXsgX18oJ1RoZSBzcGVlZCBhdCB3aGljaCB0aGUgcGFyYWxsYXggZWZmZWN0IHJ1bnMuJywgJ19fcGx1Z2luX3R4dGQnKSB9XG5cdFx0XHRcdCAgLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7ICEhIGVuYWJsZVBhcmFsbGF4ICYmICdjdXN0b20nID09PSBwYXJhbGxheEFtb3VudCAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0dmFsdWU9eyBwYXJhbGxheEN1c3RvbUFtb3VudCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBwYXJhbGxheEN1c3RvbUFtb3VudCA9PiBzZXRBdHRyaWJ1dGVzKCB7IHBhcmFsbGF4Q3VzdG9tQW1vdW50IH0gKSB9XG5cdFx0XHRcdFx0bWluPXsxMH1cblx0XHRcdFx0XHRtYXg9ezEwMH1cblx0XHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdFx0XHRoZWxwPXsgX18oJ0l0IHN0YXJ0cyBmcm9tIDAgd2hlbiB0aGUgaW1hZ2Ugd2lsbCBrZWVwIHdpdGggdGhlIGNvbnRlbnQgKG5vIHBhcmFsbGF4KSB1cCB0byAxMDAgd2hlbiB0aGUgaW1hZ2UgYXBwZWFycyBmaXhlZCBpbiBwbGFjZS4nLCAnX19wbHVnaW5fdHh0ZCcgKX1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhcmFsbGF4LXBhbmVsL2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRJY29uQnV0dG9uLFxuXHRGb3JtRmlsZVVwbG9hZCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVBsYWNlaG9sZGVyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY2xhc3MgR2FsbGVyeVBsYWNlaG9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRvbkNoYW5nZUdhbGxlcnkoIGdhbGxlcnlJbWFnZXMgKSB7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IGdhbGxlcnlJbWFnZXMubWFwKCAoaW1hZ2UsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gd3AuYXBpUmVxdWVzdCggeyBwYXRoOiAnL3dwL3YyL21lZGlhLycgKyBpbWFnZS5pZCB9ICkudGhlbiggbmV3SW1hZ2UgPT4ge1xuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzW2luZGV4XSA9IHsgLi4ubmV3SW1hZ2UsIC4uLmltYWdlIH07XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0UHJvbWlzZS5hbGwoIHByb21pc2VzICkudGhlbiggKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGdhbGxlcnlJbWFnZXM6IGdhbGxlcnlJbWFnZXMuZmlsdGVyKCBpbWFnZSA9PiB7XG5cdFx0XHRcdHJldHVybiAhISBpbWFnZS5pZCAmJiAhISBpbWFnZS5zaXplcyAmJiAhISBpbWFnZS5zaXplcy5sYXJnZSAmJiAhISBpbWFnZS5zaXplcy5sYXJnZS51cmw7XG5cdFx0XHR9ICkgfSApO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0XHRzZWxlY3RlZCxcblx0XHRcdFx0b25TZWxlY3RJbWFnZSxcblx0XHRcdFx0b25DaGFuZ2UsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgaGFzSW1hZ2VzID0gISEgZ2FsbGVyeUltYWdlcy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0YWRkVG9HYWxsZXJ5PXsgaGFzSW1hZ2VzIH1cblx0XHRcdFx0aXNBcHBlbmRlcj17IGhhc0ltYWdlcyB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cIlwiXG5cdFx0XHRcdGxhYmVscz17IHtcblx0XHRcdFx0XHR0aXRsZTogJycsXG5cdFx0XHRcdFx0aW5zdHJ1Y3Rpb25zOiBfXyggJ0RyYWcgaW1hZ2VzLCB1cGxvYWQgbmV3IG9uZXMgb3Igc2VsZWN0IGZpbGVzIGZyb20geW91ciBsaWJyYXJ5LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHR9IH1cblx0XHRcdFx0b25TZWxlY3Q9eyB0aGlzLm9uQ2hhbmdlR2FsbGVyeS5iaW5kKCB0aGlzICkgfVxuXHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdHZhbHVlPXsgaGFzSW1hZ2VzID8gZ2FsbGVyeUltYWdlcyA6IHVuZGVmaW5lZCB9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufVxuXG5jbGFzcyBHYWxsZXJ5UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2FsbGVyeUltYWdlcyxcblx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0b25TZWxlY3RJbWFnZSxcblx0XHRcdGlzU2VsZWN0ZWRcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgY2xhc3M9XCJub3ZhLXNsaWRlc2hvd19fZ2FsbGVyeS1lZGl0XCI+XG5cdFx0XHRcdHsgZ2FsbGVyeUltYWdlcy5tYXAoICggaW1nLCBpbmRleCApID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSBbXG5cdFx0XHRcdFx0XHQnbm92YS1zbGlkZXNob3dfX2dhbGxlcnktaXRlbScsXG5cdFx0XHRcdFx0XTtcblxuXHRcdFx0XHRcdGlmICggc2VsZWN0ZWQgPT09IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCAnbm92YS1zbGlkZXNob3dfX2dhbGxlcnktaXRlbS0tYWN0aXZlJyApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXsgaW1nLmlkIHx8IGltZy51cmwgfSBvbkNsaWNrPXsgKCkgPT4geyBvblNlbGVjdEltYWdlKCBpbmRleCApIH0gfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oICcgJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9eyBpbWcuc2l6ZXMudGh1bWJuYWlsLnVybCB9IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICkgfVxuXHRcdFx0PC91bD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IHtcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxuXHRHYWxsZXJ5UHJldmlld1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9nYWxsZXJ5LW9wdGlvbnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyBpY29ucyBmcm9tIFwiLi4vLi4vYmxvY2tzL2ljb25zXCI7XG5pbXBvcnQge0FsaWdubWVudENvbnRyb2xzfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRDb2xvclBhbGV0dGUsXG5cdERyb3Bkb3duLFxuXHRJY29uQnV0dG9uLFxuXHRSYWRpb0NvbnRyb2wsXG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgY29sb3JzID0gWyB7XG5cdG5hbWU6IF9fKCAnRGFyaycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRjb2xvcjogJyMwMDAnXG59LCB7XG5cdG5hbWU6IF9fKCAnTGlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0Y29sb3I6ICcjRkZGJ1xufSBdO1xuXG5jbGFzcyBPdmVybGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGhcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPEZyYWdtZW50PlxuXHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT3ZlcmxheSBGaWx0ZXIgU3R5bGUnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdHNlbGVjdGVkPXsgb3ZlcmxheUZpbHRlclN0eWxlIH1cblx0XHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ05vbmUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdub25lJyB9LFxuXHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnRGFyaycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2RhcmsnIH0sXG5cdFx0XHRcdFx0eyBsYWJlbDogX18oICdMaWdodCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2xpZ2h0JyB9XG5cdFx0XHRcdF0gfVxuXHRcdFx0XHRvbkNoYW5nZT17IG92ZXJsYXlGaWx0ZXJTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG92ZXJsYXlGaWx0ZXJTdHlsZSB9ICkgfVxuXHRcdFx0Lz5cblx0XHRcdHsgb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT3ZlcmxheSBGaWx0ZXIgU3RyZW5ndGgnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdHZhbHVlPXsgb3ZlcmxheUZpbHRlclN0cmVuZ3RoIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBvdmVybGF5RmlsdGVyU3RyZW5ndGggPT4gc2V0QXR0cmlidXRlcyggeyBvdmVybGF5RmlsdGVyU3RyZW5ndGggfSApIH1cblx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRtYXg9ezEwMH1cblx0XHRcdFx0c3RlcD17MTB9XG5cdFx0XHQvPiB9XG5cdFx0PC9GcmFnbWVudD5cblx0fVxufVxuXG5jbGFzcyBDb2xvckNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxDb2xvclBhbGV0dGVcblx0XHRcdGNsYXNzTmFtZT1cIm5vdmEtaGlkZS1jbGVhci1jb2xvclwiXG5cdFx0XHR2YWx1ZT17IGNvbnRlbnRDb2xvciB9XG5cdFx0XHRjb2xvcnM9eyBjb2xvcnMgfVxuXHRcdFx0b25DaGFuZ2U9eyBjb250ZW50Q29sb3IgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50Q29sb3IgfSApIH1cblx0XHRcdGRpc2FibGVDdXN0b21Db2xvcnNcblx0XHQvPlxuXHR9XG59XG5cbmNsYXNzIENvbG9yUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8UGFuZWxDb2xvclNldHRpbmdzXG5cdFx0XHRjbGFzc05hbWU9XCJub3ZhLWhpZGUtY2xlYXItY29sb3JcIlxuXHRcdFx0dGl0bGU9eyBfXyggJ0NvbG9yIFNldHRpbmdzJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0Y29sb3JTZXR0aW5ncz17IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb250ZW50Q29sb3IsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGNvbnRlbnRDb2xvciA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRDb2xvciB9ICksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCAnQ29udGVudCBDb2xvcicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSB9XG5cdFx0XHRjb2xvcnM9eyBjb2xvcnMgfSBcblx0XHRcdGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdDxPdmVybGF5Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHQ8L1BhbmVsQ29sb3JTZXR0aW5ncz5cblx0fVxufVxuXG5jbGFzcyBDb2xvclRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuaW52ZXJ0IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb2xvciBPcHRpb25zJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRyZW5kZXJDb250ZW50PXsgKCB7IG9uQ2xvc2UgfSApID0+IDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxDb2xvckNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0XHQ8T3ZlcmxheUNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdE92ZXJsYXlDb250cm9scyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9jb2xvci1jb250cm9scy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBpY29ucyBmcm9tIFwiLi4vLi4vYmxvY2tzL2ljb25zXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgd2l0aFZpZXdwb3J0TWF0Y2ggfSA9IHdwLnZpZXdwb3J0O1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlLCBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgQ29uc3VtZXIsIFByb3ZpZGVyIH0gPSBjcmVhdGVDb250ZXh0KCB7XG5cdG5hbWU6ICcnLFxuXHRpc1NlbGVjdGVkOiBmYWxzZSxcblx0Zm9jdXNlZEVsZW1lbnQ6IG51bGwsXG5cdHNldEZvY3VzZWRFbGVtZW50OiAoKSA9PiB7fSxcblx0Y2xpZW50SWQ6IG51bGwsXG59ICk7XG5cbmNvbnN0IHtcblx0VG9vbGJhclxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFMgPSB7XG5cdGxlZnQ6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnblRvcCxcblx0XHR0aXRsZTogX18oICdBbGlnbiBMZWZ0JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdH0sXG5cdGNlbnRlcjoge1xuXHRcdGljb246IGljb25zLmFsaWduQ2VudGVyLFxuXHRcdHRpdGxlOiBfXyggJ0FsaWduIE1pZGRsZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxuXHRyaWdodDoge1xuXHRcdGljb246IGljb25zLmFsaWduQm90dG9tLFxuXHRcdHRpdGxlOiBfXyggJ0FsaWduIFJpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdH0sXG59O1xuXG5jb25zdCBERUZBVUxUX0NPTlRST0xTID0gWyAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnIF07XG5jb25zdCBERUZBVUxUX0NPTlRST0wgPSAnY2VudGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIoIHsgaXNDb2xsYXBzZWQsIHZhbHVlLCBvbkNoYW5nZSwgY29udHJvbHMgPSBERUZBVUxUX0NPTlRST0xTIH0gKSB7XG5cdGZ1bmN0aW9uIGFwcGx5T3JVbnNldCggYWxpZ24gKSB7XG5cdFx0cmV0dXJuICgpID0+IG9uQ2hhbmdlKCB2YWx1ZSA9PT0gYWxpZ24gPyB1bmRlZmluZWQgOiBhbGlnbiApO1xuXHR9XG5cblx0Y29uc3QgYWN0aXZlQWxpZ25tZW50ID0gQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MU1sgdmFsdWUgXTtcblx0Y29uc3QgZGVmYXVsdEFsaWdubWVudENvbnRyb2wgPSBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyBERUZBVUxUX0NPTlRST0wgXTtcblxuXHRyZXR1cm4gKFxuXHRcdDxUb29sYmFyXG5cdFx0XHRpc0NvbGxhcHNlZD17IGlzQ29sbGFwc2VkIH1cblx0XHRcdGljb249eyBhY3RpdmVBbGlnbm1lbnQgPyBhY3RpdmVBbGlnbm1lbnQuaWNvbiA6IGRlZmF1bHRBbGlnbm1lbnRDb250cm9sLmljb24gfVxuXHRcdFx0Y29udHJvbHM9e1xuXHRcdFx0XHRjb250cm9scy5tYXAoICggY29udHJvbCApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Li4uQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MU1sgY29udHJvbCBdLFxuXHRcdFx0XHRcdFx0aXNBY3RpdmU6IHZhbHVlID09PSBjb250cm9sLFxuXHRcdFx0XHRcdFx0b25DbGljazogYXBwbHlPclVuc2V0KGNvbnRyb2wpLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcInBpeGVsZ3JhZGUtaGVyby1ob3Jpem9udGFsLWFsaWdubWVudC1idXR0b25cIlxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0gKVxuXHRcdFx0fVxuXHRcdC8+XG5cdClcbn1cblxuLy8gQHRvZG8gcmVtb3ZlIGZ1bmN0aW9uIGRlY2xhcmF0aW9uIGFuZCB1c2UgY29yZSBtZXRob2Qgd2hlbiBleHBvc2VkIHRocm91Z2ggdGhlIGFwaVxuY29uc3Qgd2l0aEJsb2NrRWRpdENvbnRleHQgPSAoIG1hcENvbnRleHRUb1Byb3BzICkgPT4gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoICggT3JpZ2luYWxDb21wb25lbnQgKSA9PiB7XG5cdHJldHVybiAoIHByb3BzICkgPT4gKFxuXHRcdDxDb25zdW1lcj5cblx0XHRcdHsgKCBjb250ZXh0ICkgPT4gKFxuXHRcdFx0XHQ8T3JpZ2luYWxDb21wb25lbnRcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0XHR7IC4uLm1hcENvbnRleHRUb1Byb3BzKCBjb250ZXh0LCBwcm9wcyApIH1cblx0XHRcdFx0Lz5cblx0XHRcdCkgfVxuXHRcdDwvQ29uc3VtZXI+XG5cdCk7XG59LCAnd2l0aEJsb2NrRWRpdENvbnRleHQnICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhCbG9ja0VkaXRDb250ZXh0KCAoIHsgY2xpZW50SWQgfSApID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xpZW50SWQsXG5cdFx0fTtcblx0fSApLFxuXHR3aXRoVmlld3BvcnRNYXRjaCggeyBpc0xhcmdlVmlld3BvcnQ6ICdtZWRpdW0nIH0gKSxcblx0d2l0aFNlbGVjdCggKCBzZWxlY3QsIHsgY2xpZW50SWQsIGlzTGFyZ2VWaWV3cG9ydCwgaXNDb2xsYXBzZWQgfSApID0+IHtcblx0XHRjb25zdCB7IGdldEJsb2NrUm9vdENsaWVudElkLCBnZXRTZXR0aW5ncyB9ID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzQ29sbGFwc2VkOiBpc0NvbGxhcHNlZCB8fCAhIGlzTGFyZ2VWaWV3cG9ydCB8fCAoXG5cdFx0XHRcdCEgZ2V0U2V0dGluZ3MoKS5oYXNGaXhlZFRvb2xiYXIgJiZcblx0XHRcdFx0Z2V0QmxvY2tSb290Q2xpZW50SWQoIGNsaWVudElkIClcblx0XHRcdCksXG5cdFx0fTtcblx0fSApLFxuKSggQmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhciApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ibG9jay1ob3Jpem9udGFsLWFsaWdubWVudC10b29sYmFyL2luZGV4LmpzIiwiaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcIi4uLy4uL2Jsb2Nrcy91dGlsc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ZGlzcGF0Y2gsXG5cdHNlbGVjdCxcblx0c3Vic2NyaWJlLFxufSA9IHdwLmRhdGE7XG5cbmxldCBibG9ja0xpc3QgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRCbG9ja3MoKTtcblxubGV0IGRlYm91bmNlZE9uU3Vic2NyaWJlID0gZGVib3VuY2UoKCkgPT4ge1xuXHRsZXQgbmV3QmxvY2tMaXN0ID0gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0QmxvY2tzKCk7XG5cdGxldCBibG9ja0xpc3RDaGFuZ2VkID0gYmxvY2tMaXN0Lmxlbmd0aCAhPT0gbmV3QmxvY2tMaXN0Lmxlbmd0aDtcblxuXHRpZiAoICEgYmxvY2tMaXN0Q2hhbmdlZCApIHtcblx0XHRibG9ja0xpc3RDaGFuZ2VkID0gYmxvY2tMaXN0LnNvbWUoICggYmxvY2ssIGluZGV4ICkgPT4ge1xuXHRcdFx0cmV0dXJuICggYmxvY2tMaXN0W2luZGV4XS5jbGllbnRJZCAhPT0gbmV3QmxvY2tMaXN0W2luZGV4XS5jbGllbnRJZCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggYmxvY2tMaXN0Q2hhbmdlZCApIHtcblx0XHRibG9ja0xpc3QgPSBuZXdCbG9ja0xpc3Q7XG5cdFx0dXBkYXRlQmxvY2tzKCk7XG5cdH1cbn0sIDMwKTtcblxuc3Vic2NyaWJlKCBkZWJvdW5jZWRPblN1YnNjcmliZSApO1xuXG5jb25zdCB1cGRhdGVCbG9ja3MgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cblx0c2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0QmxvY2tzKCkuZmlsdGVyKCBibG9jayA9PiB7XG5cdFx0cmV0dXJuIGJsb2NrLm5hbWUgPT09ICdwaXhlbGdyYWRlL2hlcm8nO1xuXHR9ICkuZmlsdGVyKCAoIGJsb2NrLCBpbmRleCApID0+IHtcblx0XHRjb25zdCB7IGFwcGx5TWluaW11bUhlaWdodCwgc2Nyb2xsSW5kaWNhdG9yIH0gPSB7IC4uLmJsb2NrLmF0dHJpYnV0ZXMsIC4uLmF0dHJpYnV0ZXMgfTtcblx0XHRjb25zdCBhcHBseU1pbmltdW1IZWlnaHRCbG9jayA9IGFwcGx5TWluaW11bUhlaWdodCA9PT0gJ2ZpcnN0JyAmJiBpbmRleCA9PT0gMCB8fCBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdhbGwnO1xuXHRcdGNvbnN0IHNjcm9sbEluZGljYXRvckJsb2NrID0gc2Nyb2xsSW5kaWNhdG9yID09PSB0cnVlICYmIGluZGV4ID09PSAwO1xuXG5cdFx0ZGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7XG5cdFx0XHRhcHBseU1pbmltdW1IZWlnaHRCbG9jayxcblx0XHRcdHNjcm9sbEluZGljYXRvckJsb2NrXG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gKTtcblxufVxuXG5jbGFzcyBIZWlnaHRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGFwcGx5TWluaW11bUhlaWdodCA9ICEhIGF0dHJpYnV0ZXMuYXBwbHlNaW5pbXVtSGVpZ2h0ID8gYXR0cmlidXRlcy5hcHBseU1pbmltdW1IZWlnaHQgOiAnZmlyc3QnO1xuXHRcdGNvbnN0IG1pbkhlaWdodCA9ICEhIGF0dHJpYnV0ZXMubWluSGVpZ2h0ID8gYXR0cmlidXRlcy5taW5IZWlnaHQgOiA3NTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdBcHBseSBNaW5pbXVtIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRzZWxlY3RlZD17IGFwcGx5TWluaW11bUhlaWdodCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBhcHBseU1pbmltdW1IZWlnaHQgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBhcHBseU1pbmltdW1IZWlnaHQgfSApO1xuXHRcdFx0XHRcdFx0dXBkYXRlQmxvY2tzKCB7IGFwcGx5TWluaW11bUhlaWdodCB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17XG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTm9uZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ25vbmUnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnRmlyc3QgSGVybyBCbG9jayBPbmx5JywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnZmlyc3QnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnQWxsIEhlcm8gQmxvY2tzJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnYWxsJyB9XG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7ICdub25lJyAhPT0gYXBwbHlNaW5pbXVtSGVpZ2h0ICYmXG5cdFx0XHRcdCAgICA8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17IG1pbkhlaWdodCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG1pbkhlaWdodCA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWluSGVpZ2h0IH0gKTtcbi8vXHRcdFx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgbWluSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17XG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDUwIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdUd28gVGhpcmRzJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiA2NiB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnVGhyZWUgUXVhcnRlcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDc1IH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdGdWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAxMDAgfVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdCAgICB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgU2Nyb2xsSW5kaWNhdG9yUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGhlcm9CbG9ja3MgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRcdHJldHVybiBibG9jay5uYW1lID09PSAncGl4ZWxncmFkZS9oZXJvJztcblx0XHR9ICk7XG5cblx0XHRjb25zdCBpbmRleCA9IGhlcm9CbG9ja3MuZmluZEluZGV4KCBibG9jayA9PiBibG9jay5jbGllbnRJZCA9PT0gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCkgKTtcblxuXHRcdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdTY3JvbGwgSW5kaWNhdG9yJywgJ19fcGx1Z2luX3R4dGQnICkgfSBzdHlsZT17IHsgZGlzcGxheTogaW5kZXggPT09IDAgPyAnYmxvY2snIDogJ25vbmUnIH0gfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIFNjcm9sbCBJbmRpY2F0b3InLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBzY3JvbGxJbmRpY2F0b3IgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHNjcm9sbEluZGljYXRvciA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0SGVpZ2h0UGFuZWwsXG5cdFNjcm9sbEluZGljYXRvclBhbmVsLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVpZ2h0LWNvbnRyb2xzL2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHRyZW5kZXIoIHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHQvLyBsYXlvdXRcblx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHRjb250ZW50V2lkdGgsXG5cdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHQvLyBhbGlnbm1lbnRcblx0XHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdC8vIGhlaWdodFxuXHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0LFxuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3IsXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9jayxcblx0XHRcdC8vIHBhcmFsbGF4XG5cdFx0XHRlbmFibGVQYXJhbGxheCxcblx0XHRcdHBhcmFsbGF4QW1vdW50LFxuXHRcdFx0cGFyYWxsYXhDdXN0b21BbW91bnQsXG5cdFx0XHQvLyBjb2xvcnNcblx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdC8vIG1lZGlhXG5cdFx0XHRtZWRpYVxuXHRcdH0sXG5cdFx0Y2xhc3NOYW1lLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSApIHtcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdGhlcm86IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7XG5cblx0XHRcdH0sXG5cdFx0XHRjb250ZW50OiB7XG5cblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdHN0eWxlcy5oZXJvLm1pbkhlaWdodCA9IG1pbkhlaWdodCArICd2aCdcblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRQYWRkaW5nID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmcgPSBjb250ZW50UGFkZGluZ0N1c3RvbVxuXHRcdH1cblxuXHRcdGlmICggY29udGVudFdpZHRoID09PSAnY3VzdG9tJyApIHtcblx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0fVxuXG5cdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLm1pbkhlaWdodCA9IGAke21pbkhlaWdodH12aGA7XG5cdFx0fVxuXG5cdFx0aWYgKCBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyApIHtcblx0XHRcdHN0eWxlcy5pbWFnZS5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzZXMgPSBbXG5cdFx0XHQnbm92YS1oZXJvJyxcblx0XHRcdGBub3ZhLXUtdmFsaWduLSR7dmVydGljYWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdGBub3ZhLXUtY29udGVudC13aWR0aC0ke2NvbnRlbnRXaWR0aH1gLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gXG5cdFx0XVxuXG4vL1x0XHRjb25zdCBzZXR0aW5ncyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2V0dGluZ3MoKTtcbi8vXHRcdGlmICggc2V0dGluZ3MuYWxpZ25XaWRlICkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKCAnYWxpZ25mdWxsJyApO1xuLy9cdFx0fVxuXG5cdFx0aWYgKCAhISBlbmFibGVQYXJhbGxheCApIHtcblx0XHRcdGNsYXNzZXMucHVzaCggJ25vdmEtaGVyby0tcGFyYWxsYXgnICk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYmFja2dyb3VuZE9wYWNpdHkgPSAxIC0gb3ZlcmxheUZpbHRlclN0cmVuZ3RoIC8gMTAwO1xuXHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyYWxsYXhBbW91bnQ7XG5cdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oMSwgYWN0dWFsUGFyYWxsYXhBbW91bnQgLyAxMDAgKSwgMCApO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oICcgJyApfSBzdHlsZT17c3R5bGVzLmhlcm99PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtaGVyb19fbWFza1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1oZXJvX19iYWNrZ3JvdW5kXCIgZGF0YS1yZWxsYXgtYW1vdW50PXthY3R1YWxQYXJhbGxheEFtb3VudH0+XG5cdFx0XHRcdFx0XHR7IG1lZGlhLnR5cGUgPT09IFwiaW1hZ2VcIiAmJiB0eXBlb2YgbWVkaWEuc2l6ZXMgIT09IFwidW5kZWZpbmVkXCJcblx0XHRcdFx0XHRcdCAgJiYgPGltZyBjbGFzc05hbWU9XCJub3ZhLWhlcm9fX21lZGlhXCIgc3JjPXsgbWVkaWEuc2l6ZXMuZnVsbC51cmwgfSBzdHlsZT17IHN0eWxlcy5pbWFnZSB9Lz4gfVxuXHRcdFx0XHRcdFx0eyBtZWRpYS50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdCAgJiYgPHZpZGVvIG11dGVkIGF1dG9wbGF5IGxvb3AgY2xhc3NOYW1lPVwibm92YS1oZXJvX19tZWRpYVwiIHNyYz17IG1lZGlhLnVybCB9IHN0eWxlPXsgc3R5bGVzLmltYWdlIH0vPiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtaGVyb19fZm9yZWdyb3VuZCBub3ZhLXUtY29udGVudC1wYWRkaW5nXCIgc3R5bGU9e3N0eWxlcy5mb3JlZ3JvdW5kfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtdS1jb250ZW50LWFsaWduXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtaGVyb19fY29udGVudCBub3ZhLXUtY29udGVudC13aWR0aFwiIHN0eWxlPXtzdHlsZXMuY29udGVudH0+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBzY3JvbGxJbmRpY2F0b3JCbG9jayAmJiA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5vdmEtaGVyb19faW5kaWNhdG9yXCI+PC9hPiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaGVyby9zYXZlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9oZXJvL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvaGVyby9zY3NzL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICcuLi9pY29ucyc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLyoqXG4gKiBCbG9jayBzdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy9lZGl0b3Iuc2Nzcyc7XG5cbi8qKlxuICogd3AgQVBJXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCAncGl4ZWxncmFkZS9tZWRpYScsXG5cdHtcblx0XHR0aXRsZTogX18oICdNZWRpYSBDYXJkIENvbnN0ZWxsYXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oICdEaXNwbGF5IG1lZGlhIG9iamVjdHMgYWxvbmdzaWRlIHNob3J0IHBpZWNlcyBvZiBjb250ZW50LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGljb246IG1lZGlhLFxuXHRcdGNhdGVnb3J5OiAnbm92YS1ieS1waXhlbGdyYWRlJyxcblx0XHQuLi5hdHRyaWJ1dGVzLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wiaW1hZ2VBbHRcIjp7XCJhdHRyaWJ1dGVcIjpcImFsdFwifSxcImJhY2tncm91bmRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiIzAwMFwifSxcIm1lZGlhUG9zaXRpb25cIjp7XCJkZWZhdWx0XCI6XCJsZWZ0XCJ9LFwibWVkaWFTdHlsZVwiOntcImRlZmF1bHRcIjpcInNpbXBsZS1ncmlkXCJ9LFwiY29udGVudFN0eWxlXCI6e1wiZGVmYXVsdFwiOlwiYmFzaWNcIn0sXCJibG9ja1N0eWxlXCI6e1wiZGVmYXVsdFwiOlwiYmFzaWNcIn0sXCJiYWNrZ3JvdW5kVHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwidHJhbnNwYXJlbnRcIn0sXCJpbWFnZXNcIjp7XCJ0eXBlXCI6XCJhcnJheVwiLFwiZGVmYXVsdFwiOltdfX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvbWVkaWEvYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vaW5zcGVjdG9yJztcbmltcG9ydCBNZWRpYVByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0dXBkYXRlSW1hZ2VzKCBtZWRpYSApIHtcblx0XHR0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0aW1hZ2VzOiBtZWRpYS5tYXAoICggaW1hZ2UgKSA9PiBKU09OLnN0cmluZ2lmeSh7IGlkOiBpbWFnZS5pZCwgdXJsOiBpbWFnZS51cmwsIGFsdDogaW1hZ2UuYWx0IH0pIClcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxNZWRpYVByZXZpZXcgeyAuLi50aGlzLnByb3BzIH0gdXBkYXRlSW1hZ2VzPXsgdGhpcy51cGRhdGVJbWFnZXMuYmluZCggdGhpcyApIH0gLz5cblx0XHRcdFx0PENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IHVwZGF0ZUltYWdlcz17IHRoaXMudXBkYXRlSW1hZ2VzLmJpbmQoIHRoaXMgKSB9IC8+XG5cdFx0XHRcdDxJbnNwZWN0b3IgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvZWRpdC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEJsb2NrQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBJY29uQnV0dG9uLCBUb29sYmFyIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jbGFzcyBDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0XHR1cGRhdGVJbWFnZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRpbWFnZXMgPSBbXSxcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBpbWFnZXMubWFwICggKGltYWdlKSAgPT4gSlNPTi5wYXJzZShpbWFnZSkpO1xuXG5cdFx0Y29uc3QgaGFzSW1hZ2VzID0gISEgaW1hZ2VzLmxlbmd0aDtcblxuXHRcdGNvbnN0IE1FRElBX0FMSUdOTUVOVFNfQ09OVFJPTFMgPSB7XG5cdFx0XHRsZWZ0OiB7XG5cdFx0XHRcdGljb246ICdhbGlnbi1wdWxsLWxlZnQnLFxuXHRcdFx0XHR0aXRsZTogX18oICdTaG93IE1lZGlhIG9uIExlZnQgU2lkZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0OiB7XG5cdFx0XHRcdGljb246ICdhbGlnbi1wdWxsLXJpZ2h0Jyxcblx0XHRcdFx0dGl0bGU6IF9fKCAnU2hvdyBNZWRpYSBvbiBSaWdodCBTaWRlJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zdCB0b29sYmFyQ29udHJvbHMgPSAoXG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PFRvb2xiYXJcblx0XHRcdFx0XHRjb250cm9scz17IE9iamVjdC5rZXlzKE1FRElBX0FMSUdOTUVOVFNfQ09OVFJPTFMpLm1hcChjb250cm9sID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdC4uLk1FRElBX0FMSUdOTUVOVFNfQ09OVFJPTFNbY29udHJvbF0sXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHsgc2V0QXR0cmlidXRlcyh7IG1lZGlhUG9zaXRpb246IGNvbnRyb2wgfSApfSxcblx0XHRcdFx0XHRcdFx0aXNBY3RpdmU6IG1lZGlhUG9zaXRpb24gPT09IGNvbnRyb2xcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgaGFzSW1hZ2VzICYmIDxUb29sYmFyPlxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0dHlwZSA9IFwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRcdGdhbGxlcnlcblx0XHRcdFx0XHRcdHZhbHVlID0geyBnYWxsZXJ5SW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IGltYWdlLmlkICkgfVxuXHRcdFx0XHRcdFx0b25TZWxlY3QgPSB7IHVwZGF0ZUltYWdlcyB9XG5cdFx0XHRcdFx0XHRyZW5kZXIgPSB7ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb21wb25lbnRzLWljb24tYnV0dG9uIGNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbCdcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBNZWRpYScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz0geyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGVuKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj4gfVxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHR7IHRvb2xiYXJDb250cm9scyB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FsaWdubWVudENvbnRyb2xzfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBQYW5lbEJvZHksIFJhZGlvQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuXG5jbGFzcyBJbnNwZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoIHByb3BzICkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhU3R5bGUsXG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnTWVkaWEgQXJlYScsICdfX3BsdWdpbl90eHRkJyApIH0gIGluaXRpYWxPcGVuPXsgdHJ1ZSB9PlxuXHRcdFx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbCA9IHsgX18oICdNZWRpYSBTdHlsZScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7IG1lZGlhU3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZCA9IHsgbWVkaWFTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMgPSB7IFtcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ05hdHVyYWwgTGF5b3V0JywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbmF0dXJhbCcgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ1dlbGwtb3JnYW5pemVkIEdyaWQnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdzaW1wbGUtZ3JpZCcgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ092ZXJsYXAgTGF5ZXJlZCBHcmlkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnb3ZlcmxhcC1ncmlkJyB9XG5cdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdBdXRvbWF0aWNhbGx5IGNyb3AgYW5kIHNjYWxlIGltYWdlcyB0byBmaWxsIHRoZSBibG9jayBjb250YWluZXIuJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsgbWVkaWFTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG1lZGlhU3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0NvbnRlbnQgQXJlYScsICdfX3BsdWdpbl90eHRkJykgfSBpbml0aWFsT3BlbiA9IHsgdHJ1ZSB9PlxuXHRcdFx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbCA9IHsgX18oICdFbXBoYXNpcyBMZXZlbCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7IGNvbnRlbnRTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBjb250ZW50U3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zID0geyBbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdCYXNpYycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Jhc2ljJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTW9kZXJhdGUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtb2RlcmF0ZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hpZ2hsaWdodGVkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnaGlnaGxpZ2h0ZWQnIH1cblx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyBjb250ZW50U3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50U3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0Jsb2NrIEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcpIH0gaW5pdGlhbE9wZW4gPSB7IHRydWUgfT5cblx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWwgPSB7IF9fKCAnRW1waGFzaXMgTGV2ZWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0geyBibG9ja1N0eWxlIH1cblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQgPSB7IGJsb2NrU3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zID0geyBbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdCYXNpYycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Jhc2ljJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTW9kZXJhdGUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtb2RlcmF0ZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hpZ2hsaWdodGVkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnaGlnaGxpZ2h0ZWQnIH1cblx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyBibG9ja1N0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgYmxvY2tTdHlsZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3BlY3RvcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL2luc3BlY3Rvci5qcyIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyBJbm5lckJsb2NrcywgTWVkaWFQbGFjZWhvbGRlcn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsnY29yZS9idXR0b24nLCAnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9oZWFkaW5nJ107XG5jb25zdCBURU1QTEFURSA9IFtcblx0Wydjb3JlL2hlYWRpbmcnLCB7Y29udGVudDogJ1Nob290IGZvciB0aGUgbW9vbiwgRXZlbiBpZiBZb3UgTWlzcyBpdCcsIGxldmVsOiA0fV0sXG5cdFsnY29yZS9oZWFkaW5nJywge2NvbnRlbnQ6ICdXZWxjb21lIHRvIG91ciBwbGFuZXQsIGxvb2sgYW5kIGZlZWwgbWF0dGVycyEnLCBsZXZlbDogMn1dLFxuXHRbJ2NvcmUvcGFyYWdyYXBoJywge2NvbnRlbnQ6ICdXZVxcJ3ZlIGFsd2F5cyBkZWZpbmVkIG91cnNlbHZlcyBieSB0aGUgYWJpbGl0eSB0byBvdmVyY29tZSB0aGUgaW1wb3NzaWJsZS4gQW5kIHdlIGNvdW50IHRoZXNlIG1vbWVudHMuIFRoZXNlIG1vbWVudHMgd2hlbiB3ZSBkYXJlIHRvIGFpbSBoaWdoZXIsIHRvIGJyZWFrIGJhcnJpZXJzLCB0byByZWFjaCBmb3IgdGhlIHN0YXJzLCB0byBtYWtlIHRoZSB1bmtub3duIGtub3duLid9XSxcblx0Wydjb3JlL2J1dHRvbicsIHt0ZXh0OiAnRGlzY292ZXIgTW9yZSd9XVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGlzU2VsZWN0ZWQsXG5cdFx0XHR1cGRhdGVJbWFnZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhU3R5bGUsXG5cdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRibG9ja1N0eWxlLFxuXHRcdFx0bWVkaWFQb3NpdGlvbixcblx0XHRcdGltYWdlcyxcblx0XHRcdGFsaWdubWVudFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0Y29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCB7XG5cdFx0XHQnaGFzLWltYWdlLW9uLXRoZS1yaWdodCc6ICdyaWdodCcgPT09IG1lZGlhUG9zaXRpb24sXG5cdFx0XHQnY29udGVudC1pcy1tb2RlcmF0ZSc6ICdtb2RlcmF0ZScgPT09IGNvbnRlbnRTdHlsZSxcblx0XHRcdCdjb250ZW50LWlzLWhpZ2hsaWdodGVkJzogJ2hpZ2hsaWdodGVkJyA9PT0gY29udGVudFN0eWxlLFxuXHRcdFx0J2Jsb2NrLWlzLW1vZGVyYXRlJzogJ21vZGVyYXRlJyA9PT0gYmxvY2tTdHlsZSxcblx0XHRcdCdibG9jay1pcy1oaWdobGlnaHRlZCc6ICdoaWdobGlnaHRlZCcgPT09IGJsb2NrU3R5bGUsXG5cdFx0XHQnaXMtc2ltcGxlLWdyaWQnOiAnc2ltcGxlLWdyaWQnID09PSBtZWRpYVN0eWxlLFxuXHRcdFx0J2lzLW92ZXJsYXAtZ3JpZCc6ICdvdmVybGFwLWdyaWQnID09PSBtZWRpYVN0eWxlLFxuXHRcdFx0J2lzLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcblx0XHRcdCdoYXMtbXVsdGlwbGUtaW1hZ2VzJzogIDIgPD0gaW1hZ2VzLmxlbmd0aFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgZ2FsbGVyeUltYWdlcyA9IGltYWdlcy5tYXAgKCAoaW1hZ2UpICA9PiBKU09OLnBhcnNlKGltYWdlKSk7XG5cblx0XHRjb25zdCBkaXNwbGF5SW1hZ2VzID0gKGltYWdlcykgPT4ge1xuXG5cdFx0XHRpZiAoIDAgPT09IGltYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRpY29uID0gXCJmb3JtYXQtZ2FsbGVyeVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IFwibm92YS1tZWRpYV9fcGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsgdXBkYXRlSW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0YWNjZXB0ID0gXCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzID0geyBbICdpbWFnZScgXSB9XG5cdFx0XHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggKGltYWdlKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9J25vdmEtbWVkaWFfX2ltYWdlJz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGFsdD17IGltYWdlLmFsdCB9IHNyYz17IGltYWdlLnVybCB9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidS1jb250YWluZXItd2lkdGhcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2FzaWRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2Rpc3BsYXlJbWFnZXMoIGltYWdlcyApfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19jb250ZW50XCIgc3R5bGU9e3t0ZXh0QWxpZ246IGFsaWdubWVudH19PlxuXHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17QUxMT1dFRF9CTE9DS1N9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL3ByZXZpZXcuanMiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCB7SW5uZXJCbG9ja3N9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50XG59ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGlzU2VsZWN0ZWQsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYVN0eWxlLFxuXHRcdFx0Y29udGVudFN0eWxlLFxuXHRcdFx0YmxvY2tTdHlsZSxcblx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRpbWFnZXNcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCBjbGFzc05hbWUsIHtcblx0XHRcdCdoYXMtaW1hZ2Utb24tdGhlLXJpZ2h0JzogJ3JpZ2h0JyA9PT0gbWVkaWFQb3NpdGlvbixcblx0XHRcdCdjb250ZW50LWlzLW1vZGVyYXRlJzogJ21vZGVyYXRlJyA9PT0gY29udGVudFN0eWxlLFxuXHRcdFx0J2NvbnRlbnQtaXMtaGlnaGxpZ2h0ZWQnOiAnaGlnaGxpZ2h0ZWQnID09PSBjb250ZW50U3R5bGUsXG5cdFx0XHQnYmxvY2staXMtbW9kZXJhdGUnOiAnbW9kZXJhdGUnID09PSBibG9ja1N0eWxlLFxuXHRcdFx0J2Jsb2NrLWlzLWhpZ2hsaWdodGVkJzogJ2hpZ2hsaWdodGVkJyA9PT0gYmxvY2tTdHlsZSxcblx0XHRcdCdpcy1zaW1wbGUtZ3JpZCc6ICdzaW1wbGUtZ3JpZCcgPT09IG1lZGlhU3R5bGUsXG5cdFx0XHQnaXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBpbWFnZXMubWFwKCAoIGltYWdlICkgPT4gSlNPTi5wYXJzZSggaW1hZ2UgKSApO1xuXG5cdFx0Y29uc3QgZGlzcGxheUltYWdlcyA9ICggaW1hZ2VzICkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0Z2FsbGVyeUltYWdlcy5tYXAoICggaW1hZ2UgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLW1lZGlhX19pbWFnZSc+XG5cdFx0XHRcdFx0XHRcdDxpbWcgYWx0PXtpbWFnZS5hbHR9IHNyYz17aW1hZ2UudXJsfS8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0gKVxuXHRcdFx0KVxuXHRcdH07XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1LWNvbnRhaW5lci13aWR0aFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2FzaWRlXCI+XG5cdFx0XHRcdFx0XHR7ZGlzcGxheUltYWdlcyggaW1hZ2VzICl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9zYXZlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9tZWRpYS9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL21lZGlhL3Njc3MvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBpY29ucyBmcm9tICcuLi9pY29ucyc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLyoqXG4gKiBCbG9jayBzdHlsZXNcbiAqL1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy9lZGl0b3Iuc2Nzcyc7XG5cbi8qKlxuICogd3AgQVBJXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSggJ3BpeGVsZ3JhZGUvc2xpZGVzaG93Jyxcblx0e1xuXHRcdHRpdGxlOiBfXyggJ1NsaWRlc2hvdyBNZSB0aGUgV2F5JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKCAnRGlzcGxheSBtb3JlIHRoYW4gb25lIHBpZWNlIG9mIGNvbnRlbnQgaW4gYSBzaW5nbGUsIGNvdmV0ZWQgc3BhY2UuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogaWNvbnMuc2xpZGVzaG93LFxuXHRcdGNhdGVnb3J5OiAnbm92YS1ieS1waXhlbGdyYWRlJyxcblx0XHQuLi5hdHRyaWJ1dGVzLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImNvbnRlbnRQYWRkaW5nXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJtZWRpdW1cIn0sXCJjb250ZW50UGFkZGluZ0N1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjUwfSxcImNvbnRlbnRXaWR0aFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZnVsbFwifSxcImNvbnRlbnRXaWR0aEN1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjEwMH0sXCJtaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjowfSxcInZlcnRpY2FsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJob3Jpem9udGFsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJlbmFibGVQYXJhbGxheFwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjp0cnVlfSxcInBhcmFsbGF4QW1vdW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCI1MFwifSxcInBhcmFsbGF4Q3VzdG9tQW1vdW50XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NTB9LFwic2xpZGVzaG93VHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZ2FsbGVyeVwifSxcImdhbGxlcnlJbWFnZXNcIjp7XCJ0eXBlXCI6XCJhcnJheVwiLFwiZGVmYXVsdFwiOltdfSxcImNvbnRlbnRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiI0ZGRlwifSxcIm92ZXJsYXlGaWx0ZXJTdHlsZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZGFya1wifSxcIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjB9fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9zbGlkZXNob3cvYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdExheW91dFBhbmVsLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRDb2xvclRvb2xiYXIsXG5cdEdhbGxlcnlQcmV2aWV3LCBHYWxsZXJ5UGxhY2Vob2xkZXIsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmltcG9ydCBTbGlkZXNob3dQcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGRlZmF1bHRHYWxsZXJ5SW1hZ2VzID0gW3tcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTYwMHg5MDBcIixcblx0XCJpZFwiOiAtMSxcblx0XCJzaXplc1wiOiB7XG5cdFx0XCJ0aHVtYm5haWxcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTUweDE1MFwiXG5cdFx0fSxcblx0XHRcImxhcmdlXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL19ucUFwZ0ctUXJZLzE2MDB4OTAwXCIsXG5cdFx0XHRcIndpZHRoXCI6IDE2MDAsXG5cdFx0XHRcImhlaWdodFwiOiA5MDBcblx0XHR9XG5cdH1cbn0sIHtcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XCJhbHRcIjogXCJUaGlzIGlzIGEgY2F0Y2h5IGltYWdlIHRpdGxlXCIsXG5cdFwiY2FwdGlvblwiOiBcIkEgYnJpbGxpYW50IGNhcHRpb24gdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzc1wiLFxuXHRcImlkXCI6IC0yLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9HdF80aU1CN2hZMC8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufSwge1xuXHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNjAweDkwMFwiLFxuXHRcImlkXCI6IC0zLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMXZLVG53TE1kcXMvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZEluZGV4OiAwXG5cdFx0fTtcblx0fVxuXG5cdG9uUHJldkFycm93Q2xpY2soKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzOiB7IGdhbGxlcnlJbWFnZXMgfSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHNlbGVjdGVkSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSAoIHNlbGVjdGVkSW5kZXggKyBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDEgKSAlIGdhbGxlcnlJbWFnZXMubGVuZ3RoO1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgc2VsZWN0ZWRJbmRleDogbmV3SW5kZXggfSApO1xuXHR9XG5cblx0b25OZXh0QXJyb3dDbGljaygpIHtcblx0XHRjb25zdCB7IGF0dHJpYnV0ZXM6IHsgZ2FsbGVyeUltYWdlcyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBuZXdJbmRleCA9ICggc2VsZWN0ZWRJbmRleCArIDEgKSAlIGdhbGxlcnlJbWFnZXMubGVuZ3RoO1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgc2VsZWN0ZWRJbmRleDogbmV3SW5kZXggfSApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRzbGlkZXNob3dUeXBlLFxuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0XHRtaW5IZWlnaHQsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHRcdGlzU2VsZWN0ZWQsXG5cdFx0XHRjbGFzc05hbWVcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGxldCB7IHNlbGVjdGVkSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRpZiAoICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRkZWZhdWx0R2FsbGVyeUltYWdlcy5tYXAoIGltYWdlID0+IGdhbGxlcnlJbWFnZXMucHVzaCggaW1hZ2UgKSApXG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RlZEluZGV4ID49IGdhbGxlcnlJbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0c2VsZWN0ZWRJbmRleCA9IGdhbGxlcnlJbWFnZXMubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXG5cdFx0XHRcdDxTbGlkZXNob3dQcmV2aWV3XG5cdFx0XHRcdFx0eyAuLi50aGlzLnByb3BzIH1cblx0XHRcdFx0XHRwcmV2aWV3SW1hZ2U9eyBnYWxsZXJ5SW1hZ2VzWyBzZWxlY3RlZEluZGV4IF0gfVxuXHRcdFx0XHRcdG9uUHJldkFycm93Q2xpY2s9eyB0aGlzLm9uUHJldkFycm93Q2xpY2suYmluZCggdGhpcyApIH1cblx0XHRcdFx0XHRvbk5leHRBcnJvd0NsaWNrPXsgdGhpcy5vbk5leHRBcnJvd0NsaWNrLmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ25vdmEtYmxvY2tzLXNsaWRlc2hvdy10eXBlLXBhbmVsJyB9XG5cdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnU2xpZGVzaG93IFR5cGUnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBzbGlkZXNob3dUeXBlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzbGlkZXNob3dUeXBlID0+IHNldEF0dHJpYnV0ZXMoIHsgc2xpZGVzaG93VHlwZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnR2FsbGVyeScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdnYWxsZXJ5J1xuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdjdXN0b20nXG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnUHJvamVjdHMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAncHJvamVjdHMnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsgISEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEdhbGxlcnlQcmV2aWV3XG5cdFx0XHRcdFx0XHRcdGdhbGxlcnlJbWFnZXM9eyBnYWxsZXJ5SW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0b25TZWxlY3RJbWFnZT17IHNlbGVjdGVkSW5kZXggPT4geyB0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXggfSApIH0gfVxuXHRcdFx0XHRcdFx0XHRpc1NlbGVjdGVkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgc2VsZWN0ZWRJbmRleCB9XG5cdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHQ8R2FsbGVyeVBsYWNlaG9sZGVyIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyA9PT0gc2xpZGVzaG93VHlwZSAmJiA8RnJhZ21lbnQ+XG5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0NvbnRlbnQgUG9zaXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4ue1xuXHRcdFx0XHRcdFx0XHRcdC4uLnRoaXMucHJvcHMsXG5cdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4udGhpcy5wcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2s6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gfSAvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxDb2xvclBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0hlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG1pbkhlaWdodCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1pbkhlaWdodCB9IClcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnQXV0bycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDBcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdIYWxmJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNTBcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdUd28gVGhpcmRzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNjZcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdUaHJlZSBRdWFydGVycycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDc1XG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnRnVsbCBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAxMDBcblx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdFx0PFBhcmFsbGF4UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblxuXHRcdFx0XHRcdHsgJ2dhbGxlcnknICE9PSBzbGlkZXNob3dUeXBlICYmIDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHR7IF9fKCAnQ29taW5nIFNvb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHRcdDxBbGlnbm1lbnRUb29sYmFyIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PENvbG9yVG9vbGJhciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L2VkaXQuanMiLCJjb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IHsgR2FsbGVyeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlc2hvd1ByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0d2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMuYmluZCggdGhpcyApICk7XG5cdFx0dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG5cdH1cblxuXHR1cGRhdGVEaW1lbnNpb25zKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGltZW5zaW9uczoge1xuXHRcdFx0XHR3aWR0aDogdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC8vIGxheW91dFxuXHRcdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHRcdGNvbnRlbnRXaWR0aCxcblx0XHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0XHRhcHBseU1pbmltdW1IZWlnaHRCbG9jayxcblx0XHRcdFx0Ly8gYWxpZ25tZW50XG5cdFx0XHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdFx0XHRob3Jpem9udGFsQWxpZ25tZW50LFxuXHRcdFx0XHQvLyBjb2xvcnNcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdFx0Ly8gbWVkaWFcblx0XHRcdFx0Z2FsbGVyeUltYWdlc1xuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdJbWFnZSxcblx0XHRcdGNsYXNzTmFtZVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IFtcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdCdub3ZhLXNsaWRlc2hvdyBpcy1yZWFkeScsXG5cdFx0XHRgbm92YS11LXZhbGlnbi0ke3ZlcnRpY2FsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LWhhbGlnbi0ke2hvcml6b250YWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtc3BhY2luZy0ke2NvbnRlbnRQYWRkaW5nfWAsXG5cdFx0XHRgbm92YS11LWNvbnRlbnQtd2lkdGgtJHtjb250ZW50V2lkdGh9YCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZGAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmQtJHtvdmVybGF5RmlsdGVyU3R5bGV9YFxuXHRcdF1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdHNsaWRlc2hvdzogeyBjb2xvcjogY29udGVudENvbG9yIH0sXG5cdFx0XHRpbWFnZToge31cblx0XHR9XG5cblx0XHRpZiAoIG92ZXJsYXlGaWx0ZXJTdHlsZSAhPT0gJ25vbmUnICkge1xuXHRcdFx0c3R5bGVzLmltYWdlLm9wYWNpdHkgPSAxIC0gb3ZlcmxheUZpbHRlclN0cmVuZ3RoIC8gMTAwXG5cdFx0fVxuXG5cdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdHN0eWxlcy5zbGlkZXNob3cubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3ZoJ1xuXHRcdH1cblxuXHRcdGxldCBtYXhBc3BlY3RSYXRpbyA9IDA7XG5cdFx0bGV0IG1lZGlhTWluSGVpZ2h0ID0gMDtcblx0XHRsZXQgc2xpZGVyV2lkdGggPSAwO1xuXG5cdFx0Z2FsbGVyeUltYWdlcy5tYXAoIGltYWdlID0+IHtcblx0XHRcdGlmICggISEgaW1hZ2Uuc2l6ZXMgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2UgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2Uud2lkdGggKSB7XG5cdFx0XHRcdGNvbnN0IGFzcGVjdFJhdGlvID0gaW1hZ2Uuc2l6ZXMubGFyZ2Uud2lkdGggLyBpbWFnZS5zaXplcy5sYXJnZS5oZWlnaHQ7XG5cdFx0XHRcdG1heEFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW8gPiBtYXhBc3BlY3RSYXRpbyA/IGFzcGVjdFJhdGlvIDogbWF4QXNwZWN0UmF0aW87XG5cdFx0XHRcdG1lZGlhTWluSGVpZ2h0ID0gdGhpcy5zdGF0ZS5kaW1lbnNpb25zLndpZHRoIC8gbWF4QXNwZWN0UmF0aW87XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c3R5bGVzLnNsaWRlciA9IHtcblx0XHRcdG1pbkhlaWdodDogTWF0aC5tYXgoIG1lZGlhTWluSGVpZ2h0LCBtYXhBc3BlY3RSYXRpbyApICsgJ3B4J1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdHsgISEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IHN0eWxlPXsgc3R5bGVzLnNsaWRlc2hvdyB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX3NsaWRlclwiIHN0eWxlPXsgc3R5bGVzLnNsaWRlciB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVcIj5cblx0XHRcdFx0XHRcdFx0eyBwcmV2aWV3SW1hZ2UgJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX21lZGlhXCIgc3JjPXsgcHJldmlld0ltYWdlLnNpemVzLmxhcmdlLnVybCB9IGFsdD1cIlwiIHN0eWxlPXsgc3R5bGVzLmltYWdlIH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250ZW50IG5vdmEtdS1jb250ZW50LXBhZGRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtYWxpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57IHByZXZpZXdJbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+eyBwcmV2aWV3SW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUHJldkFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV4dEFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHR7ICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdCA8R2FsbGVyeVBsYWNlaG9sZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2Fycm93IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tcHJldiBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLWRpc2FibGVkXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIj48L2Rpdj5cblx0XHRcdFx0XHQgPC9kaXY+XG5cdFx0XHRcdCA8L0ZyYWdtZW50PiB9XG5cdFx0ICAgIDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgZGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9eyBlbCA9PiAoIHRoaXMuY29udGFpbmVyID0gZWwgKSB9PlxuXHRcdFx0XHR7IGRpbWVuc2lvbnMgJiYgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHNsaWRlc2hvd1R5cGUsXG5cdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0Ly8gYWxpZ25tZW50XG5cdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHQvLyBwYXJhbGxheFxuXHRcdFx0ZW5hYmxlUGFyYWxsYXgsXG5cdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0Ly8gY29sb3JzXG5cdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGhcblx0XHR9LFxuXHRcdGNsYXNzTmFtZSxcblx0XHRzZXRBdHRyaWJ1dGVzXG5cdH0gKSB7XG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRzbGlkZXNob3c6IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7XG5cblx0XHRcdH0sXG5cdFx0XHRjb250ZW50OiB7XG5cblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nID0gY29udGVudFBhZGRpbmdDdXN0b21cblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRXaWR0aCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuY29udGVudC5tYXhXaWR0aCA9IGAke2NvbnRlbnRXaWR0aEN1c3RvbX0lYFxuXHRcdH1cblxuXHRcdGlmICggb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgKSB7XG5cdFx0XHRzdHlsZXMuaW1hZ2Uub3BhY2l0eSA9IDEgLSBvdmVybGF5RmlsdGVyU3RyZW5ndGggLyAxMDBcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtc2xpZGVzaG93Jyxcblx0XHRcdGBub3ZhLXUtdmFsaWduLSR7dmVydGljYWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdGBub3ZhLXUtY29udGVudC13aWR0aC0ke2NvbnRlbnRXaWR0aH1gLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gLFxuXHRcdFx0J2FsaWduZnVsbCdcblx0XHRdXG5cblx0XHRpZiAoICEhIGVuYWJsZVBhcmFsbGF4ICkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKCAnbm92YS1zbGlkZXNob3ctLXBhcmFsbGF4JyApO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyYWxsYXhBbW91bnQ7XG5cdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oMSwgYWN0dWFsUGFyYWxsYXhBbW91bnQgLyAxMDAgKSwgMCApO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oICcgJyApfSBzdHlsZT17c3R5bGVzLnNsaWRlc2hvd30gZGF0YS1taW4taGVpZ2h0PXsgbWluSGVpZ2h0IH0+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fbWFza1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX3NsaWRlclwiIGRhdGEtcmVsbGF4LWFtb3VudD17IGFjdHVhbFBhcmFsbGF4QW1vdW50IH0+XG5cdFx0XHRcdFx0XHR7IGdhbGxlcnlJbWFnZXMubWFwKCBpbWFnZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2JhY2tncm91bmQgbm92YS11LWJhY2tncm91bmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19tZWRpYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXsgaW1hZ2Uuc2l6ZXMubGFyZ2UudXJsIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHN0eWxlcy5pbWFnZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS13aWR0aD17IGltYWdlLnNpemVzLmxhcmdlLndpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWhlaWdodD17IGltYWdlLnNpemVzLmxhcmdlLmhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2ZvcmVncm91bmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fY29udGVudCBub3ZhLXUtY29udGVudC1wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC1hbGlnblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+eyBpbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnsgaW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3NhdmUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9zY3NzL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9