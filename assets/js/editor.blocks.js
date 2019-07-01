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
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
var core = __webpack_require__(1);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_options__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_controls__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alignment_controls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__height_controls__ = __webpack_require__(132);
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

var core = __webpack_require__(1);
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
var core = __webpack_require__(1);
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
var core = __webpack_require__(1);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__ = __webpack_require__(131);










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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scss_style_scss__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slideshow__ = __webpack_require__(145);






/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(70);
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
/* 69 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":75},"contentWidth":{"type":"string","default":"large"},"contentWidthCustom":{"type":"number","default":100},"horizontalAlignment":{"type":"string","default":"center"},"verticalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"enableMinHeight":{"type":"boolean","default":true},"applyMinimumHeight":{"type":"string","source":"meta","meta":"nova_hero_apply_minimum_height"},"minHeight":{"type":"number","source":"meta","meta":"nova_hero_minimum_height"},"applyMinimumHeightBlock":{"type":"boolean","default":false},"scrollIndicator":{"type":"boolean","source":"meta","meta":"nova_hero_scroll_indicator"},"scrollIndicatorBlock":{"type":"boolean","default":false},"backgroundType":{"type":"string","default":"image"},"media":{"type":"object","default":{"type":"image","sizes":{"full":{"url":"https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80","url1":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}}},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":30},"images":{"type":"array","default":[]}}}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
								{ className: 'nova-hero__inner-container nova-u-content-width', style: styles.content },
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


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
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(12).f });


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
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(10);
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
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(92);
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
/* 89 */
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
module.exports = __webpack_require__(1).Object.setPrototypeOf;


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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var $Object = __webpack_require__(1).Object;
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
module.exports = __webpack_require__(1).Object.assign;


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
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(59);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(13);
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
Wrapper = __webpack_require__(1)[PROMISE];

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
var anObject = __webpack_require__(9);
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
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
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
var core = __webpack_require__(1);
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
var core = __webpack_require__(1);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColorPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColorToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OverlayControls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(129);
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollIndicatorPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(144);

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
			'data-align': 'wide'
		} : {};
	}
})));

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"imageAlt":{"attribute":"alt"},"backgroundColor":{"type":"string","default":"#000"},"mediaPosition":{"default":"left"},"mediaStyle":{"default":"simple"},"contentStyle":{"default":"basic"},"blockStyle":{"default":"basic"},"backgroundType":{"type":"string","default":"transparent"},"images":{"type":"array","default":[]}}}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(143);







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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 141 */
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
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
			var _props$attributes = this.props.attributes,
			    className = _props$attributes.className,
			    mediaStyle = _props$attributes.mediaStyle,
			    contentStyle = _props$attributes.contentStyle,
			    blockStyle = _props$attributes.blockStyle,
			    mediaPosition = _props$attributes.mediaPosition,
			    images = _props$attributes.images;


			var settings = wp.data.select('core/block-editor').getSettings();

			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'content-is-' + contentStyle, 'block-is-' + blockStyle, 'grid-is-' + mediaStyle, 'alignwide');

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
					{ className: 'nova-media__aside' },
					displayImages(images)
				),
				wp.element.createElement(
					'div',
					{ className: 'nova-media__content' },
					wp.element.createElement(InnerBlocks.Content, null)
				)
			);
		}
	}]);

	return Save;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Save);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(149);

/**
 * Internal dependencies
 */





/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/slideshow', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
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
/* 146 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":50},"contentWidth":{"type":"string","default":"full"},"contentWidthCustom":{"type":"number","default":100},"minHeight":{"type":"number","default":0},"verticalAlignment":{"type":"string","default":"center"},"horizontalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"slideshowType":{"type":"string","default":"gallery"},"galleryImages":{"type":"array","default":[]},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":0}}}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview__ = __webpack_require__(148);






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
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmM0MWM5YWQyOGJjN2QwZTM3MDMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2hlcm8vYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3BhZGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvd2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhcmFsbGF4LXBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FsbGVyeS1vcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2xvci1jb250cm9scy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9jay1ob3Jpem9udGFsLWFsaWdubWVudC10b29sYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVpZ2h0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL21lZGlhL2luc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc2xpZGVzaG93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9zYXZlLmpzIl0sIm5hbWVzIjpbIndwIiwiY29tcG9uZW50cyIsIlNWRyIsIlBhdGgiLCJub3ZhIiwiaGVybyIsIm1lZGlhIiwic2xpZGVzaG93IiwiYWxpZ25Cb3R0b20iLCJhbGlnbkNlbnRlciIsImFsaWduVG9wIiwiYWxpZ25tZW50IiwiaW52ZXJ0Iiwic3dhcCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiYmxvY2tFZGl0b3IiLCJEcm9wZG93biIsIkljb25CdXR0b24iLCJQYW5lbFJvdyIsIlRvb2xiYXIiLCJBbGlnbm1lbnRUb29sYmFyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJpY29ucyIsIm9uQ2xvc2UiLCJwcm9wcyIsIkFsaWdubWVudENvbnRyb2xzIiwiYXR0cmlidXRlcyIsImFwcGx5TWluaW11bUhlaWdodEJsb2NrIiwiaG9yaXpvbnRhbEFsaWdubWVudCIsInZlcnRpY2FsQWxpZ25tZW50Iiwic2V0QXR0cmlidXRlcyIsImRhdGEiLCJzZWxlY3QiLCJnZXRTZWxlY3RlZEJsb2NrIiwiaW5uZXJCbG9ja3MiLCJtYXAiLCJkaXNwYXRjaCIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImJsb2NrIiwiY2xpZW50SWQiLCJhbGlnbiIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiSW5uZXJCbG9ja3MiLCJ0aXRsZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiZWRpdCIsInNhdmUiLCJnZXRFZGl0V3JhcHBlclByb3BzIiwic2V0dGluZ3MiLCJnZXRTZXR0aW5ncyIsImFsaWduV2lkZSIsIkluc3BlY3RvckNvbnRyb2xzIiwiQmxvY2tDb250cm9scyIsIk1lZGlhVXBsb2FkIiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlJhZGlvQ29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJlZGl0b3JEYXRhIiwidXBkYXRlQmxvY2tzIiwiZ2V0QmxvY2tzIiwiZmlsdGVyIiwibmFtZSIsImhlcm9CbG9ja0luZGV4IiwiYXBwbHlNaW5pbXVtSGVpZ2h0Iiwic2Nyb2xsSW5kaWNhdG9yIiwic2Nyb2xsSW5kaWNhdG9yQmxvY2siLCJibG9ja0luZGV4IiwiZmluZEluZGV4IiwidGVzdEJsb2NrIiwiYmxvY2tMaXN0IiwiZGVib3VuY2VkT25TdWJzY3JpYmUiLCJuZXdCbG9ja0xpc3QiLCJibG9ja0xpc3RDaGFuZ2VkIiwibGVuZ3RoIiwic29tZSIsImluZGV4Iiwic3Vic2NyaWJlIiwiRWRpdCIsImNvbnRlbnRQYWRkaW5nIiwiY29udGVudFBhZGRpbmdDdXN0b20iLCJjb250ZW50V2lkdGgiLCJjb250ZW50V2lkdGhDdXN0b20iLCJtaW5IZWlnaHQiLCJwb3NpdGlvbkluZGljYXRvciIsImNvbnRlbnRDb2xvciIsIm92ZXJsYXlGaWx0ZXJTdHlsZSIsIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aCIsImNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJBTExPV0VEX01FRElBX1RZUEVTIiwiYmxvY2tDb250cm9scyIsIm9wZW4iLCJjbGFzc2VzIiwic3R5bGVzIiwiY29sb3IiLCJmb3JlZ3JvdW5kIiwiY29udGVudCIsImltYWdlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXhXaWR0aCIsIm9wYWNpdHkiLCJqb2luIiwidHlwZSIsInNpemVzIiwiZnVsbCIsInVybCIsImxldmVsIiwidGV4dCIsIkxheW91dFBhbmVsIiwiY2hpbGRyZW4iLCJCdXR0b25Hcm91cCIsIlJhbmdlQ29udHJvbCIsIlBhZGRpbmdDb250cm9scyIsImNvbnRlbnRQYWRkaW5nT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJXaWR0aENvbnRyb2xzIiwiY29udGVudFdpZHRoT3B0aW9ucyIsIlBhcmFsbGF4UGFuZWwiLCJlbmFibGVQYXJhbGxheCIsInBhcmFsbGF4QW1vdW50IiwicGFyYWxsYXhDdXN0b21BbW91bnQiLCJwYXJzZUludCIsIkZvcm1GaWxlVXBsb2FkIiwiTWVkaWFQbGFjZWhvbGRlciIsIkdhbGxlcnlQbGFjZWhvbGRlciIsImdhbGxlcnlJbWFnZXMiLCJwcm9taXNlcyIsImFwaVJlcXVlc3QiLCJwYXRoIiwiaWQiLCJ0aGVuIiwibmV3SW1hZ2UiLCJhbGwiLCJsYXJnZSIsInNlbGVjdGVkIiwib25TZWxlY3RJbWFnZSIsIm9uQ2hhbmdlIiwiaGFzSW1hZ2VzIiwiaW5zdHJ1Y3Rpb25zIiwib25DaGFuZ2VHYWxsZXJ5IiwiYmluZCIsInVuZGVmaW5lZCIsIkdhbGxlcnlQcmV2aWV3IiwiaW1nIiwicHVzaCIsInRodW1ibmFpbCIsIkNvbG9yUGFsZXR0ZSIsIlBhbmVsQ29sb3JTZXR0aW5ncyIsImNvbG9ycyIsIk92ZXJsYXlDb250cm9scyIsIkNvbG9yQ29udHJvbHMiLCJDb2xvclBhbmVsIiwiQ29sb3JUb29sYmFyIiwid2l0aFZpZXdwb3J0TWF0Y2giLCJ2aWV3cG9ydCIsIndpdGhTZWxlY3QiLCJjb21wb3NlIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjcmVhdGVDb250ZXh0IiwiZm9jdXNlZEVsZW1lbnQiLCJzZXRGb2N1c2VkRWxlbWVudCIsIkNvbnN1bWVyIiwiUHJvdmlkZXIiLCJCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiREVGQVVMVF9DT05UUk9MUyIsIkRFRkFVTFRfQ09OVFJPTCIsIkJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIiLCJpc0NvbGxhcHNlZCIsImNvbnRyb2xzIiwiYXBwbHlPclVuc2V0IiwiYWN0aXZlQWxpZ25tZW50IiwiZGVmYXVsdEFsaWdubWVudENvbnRyb2wiLCJjb250cm9sIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwid2l0aEJsb2NrRWRpdENvbnRleHQiLCJtYXBDb250ZXh0VG9Qcm9wcyIsIk9yaWdpbmFsQ29tcG9uZW50IiwiaXNMYXJnZVZpZXdwb3J0IiwiZ2V0QmxvY2tSb290Q2xpZW50SWQiLCJoYXNGaXhlZFRvb2xiYXIiLCJIZWlnaHRQYW5lbCIsIlNjcm9sbEluZGljYXRvclBhbmVsIiwiaGVyb0Jsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImRpc3BsYXkiLCJpbWFnZXMiLCJhbHQiLCJ1cGRhdGVJbWFnZXMiLCJDb250cm9scyIsIm1lZGlhUG9zaXRpb24iLCJKU09OIiwicGFyc2UiLCJNRURJQV9BTElHTk1FTlRTX0NPTlRST0xTIiwidG9vbGJhckNvbnRyb2xzIiwiSW5zcGVjdG9yIiwibWVkaWFTdHlsZSIsImNvbnRlbnRTdHlsZSIsImJsb2NrU3R5bGUiLCJBTExPV0VEX0JMT0NLUyIsIlRFTVBMQVRFIiwiTWVkaWFQcmV2aWV3IiwiY2xhc3NOYW1lcyIsImNsYXNzbmFtZXMiLCJkaXNwbGF5SW1hZ2VzIiwidGV4dEFsaWduIiwiU2F2ZSIsImRlZmF1bHRHYWxsZXJ5SW1hZ2VzIiwic3RhdGUiLCJzZWxlY3RlZEluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsInNsaWRlc2hvd1R5cGUiLCJvblByZXZBcnJvd0NsaWNrIiwib25OZXh0QXJyb3dDbGljayIsIlNsaWRlc2hvd1ByZXZpZXciLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVEaW1lbnNpb25zIiwiZGltZW5zaW9ucyIsIndpZHRoIiwiY29udGFpbmVyIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJwcmV2aWV3SW1hZ2UiLCJtYXhBc3BlY3RSYXRpbyIsIm1lZGlhTWluSGVpZ2h0Iiwic2xpZGVyV2lkdGgiLCJhc3BlY3RSYXRpbyIsInNsaWRlciIsIk1hdGgiLCJtYXgiLCJjYXB0aW9uIiwiZWwiLCJyZW5kZXJDb250ZW50IiwicGFkZGluZyIsImFjdHVhbFBhcmFsbGF4QW1vdW50IiwibWluIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxFQUE0QyxzQjs7Ozs7O0FDQWxGLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7O0FDRDFCOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1JhOztB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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZjNDFjOWFkMjhiYzdkMGUzNzAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuOScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGhhcyhleHBvcnRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IFNWRywgUGF0aCB9ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGNvbnN0IG5vdmEgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAxOEMwIDguMDU4ODggOC4wNTg4OCAwIDE4IDBDMjcuOTQxMSAwIDM2IDguMDU4ODggMzYgMThDMzYgMjcuOTQxMSAyNy45NDExIDM2IDE4IDM2QzguMDU4ODggMzYgMCAyNy45NDExIDAgMThaTTEyLjAzOTggMTRDMTIuNDA2OSAxMC42MjYgMTUuMjY1MiA4IDE4LjczNjggOEgyMC40MjExQzI0LjYwNjggOCAyOCAxMS4zOTMyIDI4IDE1LjU3ODlWMTYuMzgxQzI4IDIwLjM4MDkgMjQuOTE3NyAyMy42NjA5IDIwLjk5ODcgMjMuOTc1M0MyMC45OTk2IDIzLjkzMjQgMjEgMjMuODg5MyAyMSAyMy44NDYyVjIxLjI3MjdDMjEgMTcuMjU2MSAxNy43NDM5IDE0IDEzLjcyNzMgMTRIMTIuMDM5OFpcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPHBhdGggZD1cIk04IDIxLjI4NTdDOCAxOC45MTg4IDkuOTE4NzggMTcgMTIuMjg1NyAxN0gxMy40NTQ1QzE1Ljk2NDkgMTcgMTggMTkuMDM1MSAxOCAyMS41NDU1VjIzLjE1MzhDMTggMjUuMjc4IDE2LjI3OCAyNyAxNC4xNTM4IDI3SDEzLjcxNDNDMTAuNTU4NCAyNyA4IDI0LjQ0MTYgOCAyMS4yODU3WlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGhlcm8gPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxtYXNrIGlkPVwibWFzazBcIiBtYXNrLXR5cGU9XCJhbHBoYVwiIG1hc2tVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcng9XCIxMlwiIGZpbGw9XCIjNjU2NUYyXCIvPlxuICAgICAgICA8L21hc2s+XG4gICAgICAgIDxnIG1hc2s9XCJ1cmwoI21hc2swKVwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMiAwQzUuMzcyNTggMCAwIDUuMzcyNTggMCAxMkMwIDE4LjYyNzQgNS4zNzI1OCAyNCAxMiAyNEMxOC42Mjc0IDI0IDI0IDE4LjYyNzQgMjQgMTJDMjQgNS4zNzI1OCAxOC42Mjc0IDAgMTIgMFpNNCA4LjQ5MTIzQzQgNi4wMTA3OSA3LjAxNjE5IDQgMTAuNzM2OCA0SDExLjYxOUMxNi4yNDc3IDQgMjAgNi41MDE1MiAyMCA5LjU4NzNDMjAgMTIuMzkyNiAxNi41ODg4IDE0LjY2NjcgMTIuMzgxIDE0LjY2NjdIMTEuNTc4OUM3LjM5MzIxIDE0LjY2NjcgNCAxMi40MDQ1IDQgOS42MTQwM1Y4LjQ5MTIzWlwiIGZpbGw9XCIjNjU2NUYyXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk03IDE4LjcxNDNDNyAxOS40MjQ0IDcuNTc1NjMgMjAgOC4yODU3MSAyMEgxNS41QzE2LjMyODQgMjAgMTcgMTkuMzI4NCAxNyAxOC41VjE4LjVDMTcgMTcuNjcxNiAxNi4zMjg0IDE3IDE1LjUgMTdIOC43MTQyOUM3Ljc2NzUxIDE3IDcgMTcuNzY3NSA3IDE4LjcxNDNWMTguNzE0M1pcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IG1lZGlhID0gKFxuICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8bWFzayBpZD1cInBhdGgtMS1vdXRzaWRlLTFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCItMlwiIHk9XCItMlwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIGZpbGw9XCJibGFja1wiPlxuICAgICAgICAgICAgPHJlY3QgZmlsbD1cIndoaXRlXCIgeD1cIi0yXCIgeT1cIi0yXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIvPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOCAwQzguMDU4ODggMCAwIDguMDU4ODggMCAxOEMwIDI3Ljk0MTEgOC4wNTg4OCAzNiAxOCAzNkMyNy45NDExIDM2IDM2IDI3Ljk0MTEgMzYgMThDMzYgOC4wNTg4OCAyNy45NDExIDAgMTggMFpNMjMuNDczNyAyNUMyMC40NTA3IDI1IDE4IDIyLjU0OTMgMTggMTkuNTI2M1YxOC44MDk1QzE4IDE1LjA0ODcgMjEuMDQ4NyAxMiAyNC44MDk1IDEyQzI4LjIyODQgMTIgMzEgMTQuNzcxNiAzMSAxOC4xOTA1VjE4Ljg0MjFDMzEgMjIuMjQzIDI4LjI0MyAyNSAyNC44NDIxIDI1SDIzLjQ3MzdaXCIvPlxuICAgICAgICA8L21hc2s+XG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMEM4LjA1ODg4IDAgMCA4LjA1ODg4IDAgMThDMCAyNy45NDExIDguMDU4ODggMzYgMTggMzZDMjcuOTQxMSAzNiAzNiAyNy45NDExIDM2IDE4QzM2IDguMDU4ODggMjcuOTQxMSAwIDE4IDBaTTIzLjQ3MzcgMjVDMjAuNDUwNyAyNSAxOCAyMi41NDkzIDE4IDE5LjUyNjNWMTguODA5NUMxOCAxNS4wNDg3IDIxLjA0ODcgMTIgMjQuODA5NSAxMkMyOC4yMjg0IDEyIDMxIDE0Ljc3MTYgMzEgMTguMTkwNVYxOC44NDIxQzMxIDIyLjI0MyAyOC4yNDMgMjUgMjQuODQyMSAyNUgyMy40NzM3WlwiIGZpbGw9XCIjNjU2NUYyXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTIgMThDMiA5LjE2MzQ0IDkuMTYzNDQgMiAxOCAyVi0yQzYuOTU0MzEgLTIgLTIgNi45NTQzMSAtMiAxOEgyWk0xOCAzNEM5LjE2MzQ0IDM0IDIgMjYuODM2NiAyIDE4SC0yQy0yIDI5LjA0NTcgNi45NTQzMSAzOCAxOCAzOFYzNFpNMzQgMThDMzQgMjYuODM2NiAyNi44MzY2IDM0IDE4IDM0VjM4QzI5LjA0NTcgMzggMzggMjkuMDQ1NyAzOCAxOEgzNFpNMTggMkMyNi44MzY2IDIgMzQgOS4xNjM0NCAzNCAxOEgzOEMzOCA2Ljk1NDMxIDI5LjA0NTcgLTIgMTggLTJWMlpNMTYgMTkuNTI2M0MxNiAyMy42NTM5IDE5LjM0NjEgMjcgMjMuNDczNyAyN1YyM0MyMS41NTUyIDIzIDIwIDIxLjQ0NDggMjAgMTkuNTI2M0gxNlpNMTYgMTguODA5NVYxOS41MjYzSDIwVjE4LjgwOTVIMTZaTTI0LjgwOTUgMTBDMTkuOTQ0MiAxMCAxNiAxMy45NDQyIDE2IDE4LjgwOTVIMjBDMjAgMTYuMTUzMyAyMi4xNTMzIDE0IDI0LjgwOTUgMTRWMTBaTTMzIDE4LjE5MDVDMzMgMTMuNjY3IDI5LjMzMyAxMCAyNC44MDk1IDEwVjE0QzI3LjEyMzkgMTQgMjkgMTUuODc2MSAyOSAxOC4xOTA1SDMzWk0zMyAxOC44NDIxVjE4LjE5MDVIMjlWMTguODQyMUgzM1pNMjQuODQyMSAyN0MyOS4zNDc2IDI3IDMzIDIzLjM0NzYgMzMgMTguODQyMUgyOUMyOSAyMS4xMzg0IDI3LjEzODQgMjMgMjQuODQyMSAyM1YyN1pNMjMuNDczNyAyN0gyNC44NDIxVjIzSDIzLjQ3MzdWMjdaXCIgZmlsbD1cIndoaXRlXCIgbWFzaz1cInVybCgjcGF0aC0xLW91dHNpZGUtMSlcIi8+XG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMzBDOC42ODYyOSAzMCA2IDI3LjMxMzcgNiAyNFYxNEM2IDkuNTgxNzIgOS41ODE3MiA2IDE0IDZIMTZDMTguNzI4IDYgMjAuOTQ1OCA4LjE4NDc1IDIwLjk5OSAxMC45QzE4LjAzODggMTIuMzQ3MSAxNiAxNS4zODc4IDE2IDE4LjkwNDhWMTkuODQyMUMxNiAyMi45NDg0IDE3Ljk3ODYgMjUuNTkyNSAyMC43NDQzIDI2LjU4MjlDMjAuMDgyMSAyOC41Njg1IDE4LjIwODIgMzAgMTYgMzBIMTJaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVzaG93ID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8bWFzayBpZD1cIm1hc2swXCIgbWFzay10eXBlPVwiYWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAxMkMwIDUuMzcyNTggNS4zNzI1OCAwIDEyIDBWMEMxOC42Mjc0IDAgMjQgNS4zNzI1OCAyNCAxMlYxMkMyNCAxOC42Mjc0IDE4LjYyNzQgMjQgMTIgMjRWMjRDNS4zNzI1OCAyNCAwIDE4LjYyNzQgMCAxMlYxMlpcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuMzk4MiA4Ljk5MjgzQzE3Ljg4MzEgOS4zOTI4MiAxNy44ODMxIDEwLjEzNTggMTcuMzk4MiAxMC41MzU3TDE0Ljk2NzMgMTIuNTQwN0MxNC4zMTUgMTMuMDc4NyAxMy4zMzEgMTIuNjE0NyAxMy4zMzEgMTEuNzY5MlY3Ljc1OTMzQzEzLjMzMSA2LjkxMzg2IDE0LjMxNSA2LjQ0OTkyIDE0Ljk2NzMgNi45ODc4OEwxNy4zOTgyIDguOTkyODNaXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02LjYwMTg0IDguOTkyODNDNi4xMTY4OSA5LjM5MjgyIDYuMTE2ODkgMTAuMTM1OCA2LjYwMTg0IDEwLjUzNTdMOS4wMzI3MiAxMi41NDA3QzkuNjg0OTYgMTMuMDc4NyAxMC42NjkgMTIuNjE0NyAxMC42NjkgMTEuNzY5MlY3Ljc1OTMzQzEwLjY2OSA2LjkxMzg2IDkuNjg0OTYgNi40NDk5MiA5LjAzMjcyIDYuOTg3ODhMNi42MDE4NCA4Ljk5MjgzWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxOC4yNzUxQzcgMTguODAzMyA3LjQyODE4IDE5LjIzMTQgNy45NTYzNyAxOS4yMzE0SDguMjE3MkM4Ljc3NzQgMTkuMjMxNCA5LjIzMTU0IDE4Ljc3NzMgOS4yMzE1NCAxOC4yMTcxVjE3Ljg1ODJDOS4yMzE1NCAxNy4zODQyIDguODQ3MjcgMTYuOTk5OSA4LjM3MzI1IDE2Ljk5OTlIOC4yNzUxN0M3LjU3MDkxIDE2Ljk5OTkgNyAxNy41NzA4IDcgMTguMjc1MVYxOC4yNzUxWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC43MTkyIDE4LjI3NTFDMTAuNzE5MiAxOC44MDMzIDExLjE0NzQgMTkuMjMxNCAxMS42NzU2IDE5LjIzMTRIMTEuOTM2NEMxMi40OTY2IDE5LjIzMTQgMTIuOTUwOCAxOC43NzczIDEyLjk1MDggMTguMjE3MVYxNy44NTgyQzEyLjk1MDggMTcuMzg0MiAxMi41NjY1IDE2Ljk5OTkgMTIuMDkyNSAxNi45OTk5SDExLjk5NDRDMTEuMjkwMSAxNi45OTk5IDEwLjcxOTIgMTcuNTcwOCAxMC43MTkyIDE4LjI3NTFWMTguMjc1MVpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuNDM4NSAxOC4yNzUxQzE0LjQzODUgMTguODAzMyAxNC44NjY3IDE5LjIzMTQgMTUuMzk0OCAxOS4yMzE0SDE1LjY1NTdDMTYuMjE1OSAxOS4yMzE0IDE2LjY3IDE4Ljc3NzMgMTYuNjcgMTguMjE3MVYxNy44NTgyQzE2LjY3IDE3LjM4NDIgMTYuMjg1NyAxNi45OTk5IDE1LjgxMTcgMTYuOTk5OUgxNS43MTM2QzE1LjAwOTQgMTYuOTk5OSAxNC40Mzg1IDE3LjU3MDggMTQuNDM4NSAxOC4yNzUxVjE4LjI3NTFaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbilcblxuZXhwb3J0IGNvbnN0IGFsaWduQm90dG9tID0gKFxuICAgIDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz5cbiAgICAgICAgPFBhdGggZD1cIk0xNiAxM2gtM1YzaC0ydjEwSDhsNCA0IDQtNHpNNCAxOXYyaDE2di0ySDR6XCIgLz5cbiAgICA8L1NWRz5cbik7XG5cbmV4cG9ydCBjb25zdCBhbGlnbkNlbnRlciA9IChcbiAgICA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gICAgICAgIDxQYXRoIGQ9XCJNOCAxOWgzdjRoMnYtNGgzbC00LTQtNCA0em04LTE0aC0zVjFoLTJ2NEg4bDQgNCA0LTR6TTQgMTF2MmgxNnYtMkg0elwiXG4gICAgICAgIC8+XG4gICAgPC9TVkc+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxpZ25Ub3AgPSAoXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICAgICAgICA8UGF0aCBkPVwiTTggMTFoM3YxMGgyVjExaDNsLTQtNC00IDR6TTQgM3YyaDE2VjNINHpcIiAvPlxuICAgIDwvU1ZHPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsaWdubWVudCA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNS41NCA1LjU0TDEzLjc3IDcuM0wxMiA1LjU0TDEwLjIzIDcuM0w4LjQ2IDUuNTRMMTIgMkwxNS41NCA1LjU0Wk0xOC40NiAxNS41NEwxNi43IDEzLjc3TDE4LjQ2IDEyTDE2LjcgMTAuMjNMMTguNDYgOC40NkwyMiAxMkwxOC40NiAxNS41NFpNOC40NiAxOC40NkwxMC4yMyAxNi43TDEyIDE4LjQ2TDEzLjc3IDE2LjdMMTUuNTQgMTguNDZMMTIgMjJMOC40NiAxOC40NlpNNS41NCA4LjQ2TDcuMyAxMC4yM0w1LjU0IDEyTDcuMyAxMy43N0w1LjU0IDE1LjU0TDIgMTJMNS41NCA4LjQ2WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMTVDMTMuNjU2OSAxNSAxNSAxMy42NTY5IDE1IDEyQzE1IDEwLjM0MzEgMTMuNjU2OSA5IDEyIDlDMTAuMzQzMSA5IDkgMTAuMzQzMSA5IDEyQzkgMTMuNjU2OSAxMC4zNDMxIDE1IDEyIDE1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgaW52ZXJ0ID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTIwIDE1LjMwOTlMMjMuMzEgMTEuOTk5OUwyMCA4LjY4OTk0VjMuOTk5OTRIMTUuMzFMMTIgMC42ODk5NDFMOC42OSAzLjk5OTk0SDRWOC42ODk5NEwwLjY5MDAwMiAxMS45OTk5TDQgMTUuMzA5OVYxOS45OTk5SDguNjlMMTIgMjMuMzA5OUwxNS4zMSAxOS45OTk5SDIwVjE1LjMwOTlaTTEyIDE3Ljk5OTlWNS45OTk5NEMxNS4zMSA1Ljk5OTk0IDE4IDguNjg5OTQgMTggMTEuOTk5OUMxOCAxNS4zMDk5IDE1LjMxIDE3Ljk5OTkgMTIgMTcuOTk5OVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHN3YXAgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiLTIgLTIgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNyAzSDEyQzExLjQ0NzcgMyAxMSAzLjQ0NzcyIDExIDRWN0MxMSA3LjU1MjI4IDExLjQ0NzcgOCAxMiA4SDE3QzE3LjU1MjMgOCAxOCA3LjU1MjI4IDE4IDdWNEMxOCAzLjQ0NzcyIDE3LjU1MjMgMyAxNyAzWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAxMkgzQzIuNDQ3NzIgMTIgMiAxMi40NDc3IDIgMTNWMTZDMiAxNi41NTIzIDIuNDQ3NzIgMTcgMyAxN0g4QzguNTUyMjggMTcgOSAxNi41NTIzIDkgMTZWMTNDOSAxMi40NDc3IDguNTUyMjggMTIgOCAxMlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTEzIDEySDE0QzE0IDEyLjc5NTYgMTMuNjgzOSAxMy41NTg3IDEzLjEyMTMgMTQuMTIxM0MxMi41NTg3IDE0LjY4MzkgMTEuNzk1NiAxNSAxMSAxNVYxN0MxMi4zMjYxIDE3IDEzLjU5NzkgMTYuNDczMiAxNC41MzU1IDE1LjUzNTVDMTUuNDczMiAxNC41OTc5IDE2IDEzLjMyNjEgMTYgMTJIMTdMMTUgOUwxMyAxMlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTQgOEgzTDUgMTFMNyA4SDZDNiA3LjIwNDM1IDYuMzE2MDcgNi40NDEyOSA2Ljg3ODY4IDUuODc4NjhDNy40NDEyOSA1LjMxNjA3IDguMjA0MzUgNSA5IDVWM0M3LjY3MzkyIDMgNi40MDIxNSAzLjUyNjc4IDUuNDY0NDcgNC40NjQ0N0M0LjUyNjc4IDUuNDAyMTUgNCA2LjY3MzkyIDQgOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9pY29ucy5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuXHRsZXQgdGltZW91dCA9IG51bGw7XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcztcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0Y29uc3QgbGF0ZXIgPSAoKSA9PiB7XG5cdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3V0aWxzLmpzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExheW91dFBhbmVsIGZyb20gJy4vbGF5b3V0LXBhbmVsJztcbmltcG9ydCBQYXJhbGxheFBhbmVsIGZyb20gJy4vcGFyYWxsYXgtcGFuZWwnO1xuXG5pbXBvcnQge1xuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxufSBmcm9tICcuL2dhbGxlcnktb3B0aW9ucyc7XG5cbmltcG9ydCB7XG5cdENvbG9yQ29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdENvbG9yVG9vbGJhcixcblx0T3ZlcmxheUNvbnRyb2xzXG59IGZyb20gJy4vY29sb3ItY29udHJvbHMnO1xuXG5pbXBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhclxufSBmcm9tICcuL2FsaWdubWVudC1jb250cm9scyc7XG5cbmltcG9ydCB7XG5cdEhlaWdodFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbFxufSBmcm9tICcuL2hlaWdodC1jb250cm9scyc7XG5cbmV4cG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdEdhbGxlcnlQcmV2aWV3LFxuXHRHYWxsZXJ5UGxhY2Vob2xkZXIsXG5cdEhlaWdodFBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0T3ZlcmxheUNvbnRyb2xzLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbmRleC5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBpY29ucyBmcm9tIFwiLi4vLi4vYmxvY2tzL2ljb25zXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuaW1wb3J0IEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIgZnJvbSAnLi4vYmxvY2staG9yaXpvbnRhbC1hbGlnbm1lbnQtdG9vbGJhcic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0RHJvcGRvd24sXG5cdEljb25CdXR0b24sXG5cdFBhbmVsUm93LFxuXHRUb29sYmFyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNsYXNzIEFsaWdubWVudFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhcic+XG5cdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdHBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhci1kcm9wZG93bidcblx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0cmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IChcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NvbnRlbnQgYWxpZ25tZW50JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRyZW5kZXJDb250ZW50PXsgKCB7IG9uQ2xvc2UgfSApID0+IDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVG9vbGJhcj5cblxuXHRcdClcblx0fVxufVxuXG5jbGFzcyBBbGlnbm1lbnRDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRhcHBseU1pbmltdW1IZWlnaHRCbG9jayxcblx0XHRcdFx0aG9yaXpvbnRhbEFsaWdubWVudCxcblx0XHRcdFx0dmVydGljYWxBbGlnbm1lbnRcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0PHNwYW4+eyBfXyggJ0hvcml6b250YWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PC9zcGFuPlxuXHRcdFx0XHRcdDxCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aG9yaXpvbnRhbEFsaWdubWVudH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtob3Jpem9udGFsQWxpZ25tZW50ID0+IHtcblx0XHRcdFx0XHRcdFx0d3AuZGF0YS5zZWxlY3QoJ2NvcmUvYmxvY2stZWRpdG9yJykuZ2V0U2VsZWN0ZWRCbG9jaygpLmlubmVyQmxvY2tzLm1hcCggYmxvY2sgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHdwLmRhdGEuZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7IGFsaWduOiBob3Jpem9udGFsQWxpZ25tZW50IH0gKTtcblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGhvcml6b250YWxBbGlnbm1lbnQgfSApXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdHsgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgJiYgPFBhbmVsUm93PlxuXHRcdFx0XHRcdDxzcGFuPnsgX18oICdWZXJ0aWNhbCcsICdfX3BsdWdpbl90eHRkJyApIH08L3NwYW4+XG5cdFx0XHRcdFx0PEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17dmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dmVydGljYWxBbGlnbm1lbnQgPT4gc2V0QXR0cmlidXRlcygge3ZlcnRpY2FsQWxpZ25tZW50fSApfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxSb3c+IH1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL2luZGV4LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2hlcm9cIjtcbmltcG9ydCBcIi4vbWVkaWFcIjtcbmltcG9ydCBcIi4vc2xpZGVzaG93XCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL2hlcm8nLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCAnSGVybyBvZiB0aGUgR2FsYXh5JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogaWNvbnMuaGVybyxcblx0XHRkZXNjcmlwdGlvbjogX18oICdBIGdyZWF0IHdheSB0byBnZXQgeW91ciB2aXNpdG9ycyBhY3F1YWludGVkIHdpdGggeW91ciBjb250ZW50LicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGNhdGVnb3J5OiBcIm5vdmEtYnktcGl4ZWxncmFkZVwiLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+XG5cdFx0fSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9oZXJvL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJhdHRyaWJ1dGVzXCI6e1wiY29udGVudFBhZGRpbmdcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIm1lZGl1bVwifSxcImNvbnRlbnRQYWRkaW5nQ3VzdG9tXCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NzV9LFwiY29udGVudFdpZHRoXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJsYXJnZVwifSxcImNvbnRlbnRXaWR0aEN1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjEwMH0sXCJob3Jpem9udGFsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwiZW5hYmxlUGFyYWxsYXhcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJwYXJhbGxheEFtb3VudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiNTBcIn0sXCJwYXJhbGxheEN1c3RvbUFtb3VudFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjUwfSxcImVuYWJsZU1pbkhlaWdodFwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjp0cnVlfSxcImFwcGx5TWluaW11bUhlaWdodFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic291cmNlXCI6XCJtZXRhXCIsXCJtZXRhXCI6XCJub3ZhX2hlcm9fYXBwbHlfbWluaW11bV9oZWlnaHRcIn0sXCJtaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX21pbmltdW1faGVpZ2h0XCJ9LFwiYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2tcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6ZmFsc2V9LFwic2Nyb2xsSW5kaWNhdG9yXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwic291cmNlXCI6XCJtZXRhXCIsXCJtZXRhXCI6XCJub3ZhX2hlcm9fc2Nyb2xsX2luZGljYXRvclwifSxcInNjcm9sbEluZGljYXRvckJsb2NrXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOmZhbHNlfSxcImJhY2tncm91bmRUeXBlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJpbWFnZVwifSxcIm1lZGlhXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZWZhdWx0XCI6e1widHlwZVwiOlwiaW1hZ2VcIixcInNpemVzXCI6e1wiZnVsbFwiOntcInVybFwiOlwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDk2MzE5OTgtNmQ1NTRiMTQwMmFlP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjAwJnE9ODBcIixcInVybDFcIjpcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4MDY2MDAwNzE0LTU4YzQ1ZjFhMmMwYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk1MCZxPTgwXCJ9fX19LFwiY29udGVudENvbG9yXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCIjRkZGXCJ9LFwib3ZlcmxheUZpbHRlclN0eWxlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJkYXJrXCJ9LFwib3ZlcmxheUZpbHRlclN0cmVuZ3RoXCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MzB9LFwiaW1hZ2VzXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2hlcm8vYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGljb25zIGZyb20gJy4uL2ljb25zJztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEhlaWdodFBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0T3ZlcmxheUNvbnRyb2xzLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRTY3JvbGxJbmRpY2F0b3JQYW5lbCxcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0QmxvY2tDb250cm9scyxcblx0TWVkaWFVcGxvYWQsXG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRQYW5lbFJvdyxcblx0U2VsZWN0Q29udHJvbCxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRUb29sYmFyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGVkaXRvckRhdGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5jb25zdCB1cGRhdGVCbG9ja3MgPSAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdGNvbnN0IGJsb2NrcyA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5cblx0YmxvY2tzLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0fSApLmZpbHRlciggKCBibG9jaywgaGVyb0Jsb2NrSW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgeyBhcHBseU1pbmltdW1IZWlnaHQsIHNjcm9sbEluZGljYXRvciB9ID0geyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH07XG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgPSBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdmaXJzdCcgJiYgaGVyb0Jsb2NrSW5kZXggPT09IDAgfHwgYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnYWxsJztcblx0XHRjb25zdCBzY3JvbGxJbmRpY2F0b3JCbG9jayA9IHNjcm9sbEluZGljYXRvciA9PT0gdHJ1ZSAmJiBoZXJvQmxvY2tJbmRleCA9PT0gMDtcblx0XHRjb25zdCBibG9ja0luZGV4ID0gYmxvY2tzLmZpbmRJbmRleCggdGVzdEJsb2NrID0+IGJsb2NrID09PSB0ZXN0QmxvY2sgKTtcblxuXHRcdHdwLmRhdGEuZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7XG5cdFx0XHRibG9ja0luZGV4LFxuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9ja1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9ICk7XG5cbn1cblxubGV0IGJsb2NrTGlzdCA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5sZXQgZGVib3VuY2VkT25TdWJzY3JpYmUgPSBkZWJvdW5jZSgoKSA9PiB7XG5cblx0Y29uc3QgbmV3QmxvY2tMaXN0ID0gZWRpdG9yRGF0YS5nZXRCbG9ja3MoKTtcblx0bGV0IGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3QubGVuZ3RoICE9PSBuZXdCbG9ja0xpc3QubGVuZ3RoO1xuXG5cdGlmICggISBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3Quc29tZSggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCBibG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICE9PSBuZXdCbG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdCA9IG5ld0Jsb2NrTGlzdDtcblx0XHR1cGRhdGVCbG9ja3MoKTtcblx0fVxufSwgMzApO1xuXG53cC5kYXRhLnN1YnNjcmliZSggZGVib3VuY2VkT25TdWJzY3JpYmUgKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQvLyBsYXlvdXRcblx0XHRcdFx0Y29udGVudFBhZGRpbmcsXG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0XHRjb250ZW50V2lkdGgsXG5cdFx0XHRcdGNvbnRlbnRXaWR0aEN1c3RvbSxcblx0XHRcdFx0Ly8gYWxpZ25tZW50XG5cdFx0XHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdFx0XHRob3Jpem9udGFsQWxpZ25tZW50LFxuXHRcdFx0XHQvLyBoZWlnaHRcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0LFxuXHRcdFx0XHRhcHBseU1pbmltdW1IZWlnaHRCbG9jayxcblx0XHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0XHRzY3JvbGxJbmRpY2F0b3IsXG5cdFx0XHRcdHNjcm9sbEluZGljYXRvckJsb2NrLFxuXHRcdFx0XHRwb3NpdGlvbkluZGljYXRvcixcblx0XHRcdFx0Ly8gY29sb3JzXG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGgsXG5cdFx0XHRcdC8vIG1lZGlhXG5cdFx0XHRcdG1lZGlhLFxuXHRcdFx0fSxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0XHRpc1NlbGVjdGVkXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnLCAndmlkZW8nIF07XG5cblx0XHRjb25zdCBibG9ja0NvbnRyb2xzID0gKFxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmFsaWdubWVudCB9XG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NvbnRlbnQgYWxpZ25tZW50JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhcic+XG5cdFx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhci1kcm9wZG93bidcblx0XHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuaW52ZXJ0IH1cblx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW52ZXJ0IGNvbG9ycycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8Q29sb3JDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdFx0XHQ8T3ZlcmxheUNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG1lZGlhIH0gKSB9XG5cdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3dhcCBNZWRpYScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpY29uPSdmb3JtYXQtaW1hZ2UnXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0KTtcblxuXHRcdGNvbnN0IGhlcm8gPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRcdCdub3ZhLWhlcm8nLFxuXHRcdFx0XHRgbm92YS11LXZhbGlnbi0ke3ZlcnRpY2FsQWxpZ25tZW50fWAsXG5cdFx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0XHRgbm92YS11LXNwYWNpbmctJHtjb250ZW50UGFkZGluZ31gLFxuXHRcdFx0XHRgbm92YS11LWNvbnRlbnQtd2lkdGgtJHtjb250ZW50V2lkdGh9YCxcblx0XHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kLSR7b3ZlcmxheUZpbHRlclN0eWxlfWBcblx0XHRcdF1cblxuXHRcdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0XHRoZXJvOiB7XG5cdFx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9yZWdyb3VuZDoge30sXG5cdFx0XHRcdGNvbnRlbnQ6IHt9LFxuXHRcdFx0XHRpbWFnZToge31cblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdFx0c3R5bGVzLmhlcm8ubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3ZoJ1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGNvbnRlbnRQYWRkaW5nID09PSAnY3VzdG9tJyApIHtcblx0XHRcdFx0c3R5bGVzLmZvcmVncm91bmQucGFkZGluZ1RvcCA9IGAke2NvbnRlbnRQYWRkaW5nQ3VzdG9tfSVgXG5cdFx0XHRcdHN0eWxlcy5mb3JlZ3JvdW5kLnBhZGRpbmdCb3R0b20gPSBgJHtjb250ZW50UGFkZGluZ0N1c3RvbX0lYFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGNvbnRlbnRXaWR0aCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRcdHN0eWxlcy5jb250ZW50Lm1heFdpZHRoID0gYCR7Y29udGVudFdpZHRoQ3VzdG9tfSVgXG5cdFx0XHR9XG5cblx0XHRcdGlmICggb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgKSB7XG5cdFx0XHRcdHN0eWxlcy5pbWFnZS5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfSBzdHlsZT17c3R5bGVzLmhlcm99PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19tYXNrJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19iYWNrZ3JvdW5kJz5cblx0XHRcdFx0XHRcdHsgbWVkaWEudHlwZSA9PT0gJ2ltYWdlJyAmJiB0eXBlb2YgbWVkaWEuc2l6ZXMgIT09ICd1bmRlZmluZWQnXG5cdFx0XHRcdFx0XHQgICYmIDxpbWcgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX21lZGlhJyBzcmM9eyBtZWRpYS5zaXplcy5mdWxsLnVybCB9IHN0eWxlPXsgc3R5bGVzLmltYWdlIH0vPiB9XG5cdFx0XHRcdFx0XHR7IG1lZGlhLnR5cGUgPT09ICd2aWRlbydcblx0XHRcdFx0XHRcdCAgJiYgPHZpZGVvIG11dGVkIGF1dG9wbGF5IGxvb3AgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX21lZGlhJyBzcmM9eyBtZWRpYS51cmwgfSBzdHlsZT17IHN0eWxlcy5pbWFnZSB9Lz4gfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19fZm9yZWdyb3VuZCBub3ZhLXUtY29udGVudC1wYWRkaW5nJyBzdHlsZT17IHN0eWxlcy5mb3JlZ3JvdW5kIH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtdS1jb250ZW50LWFsaWduJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2lubmVyLWNvbnRhaW5lciBub3ZhLXUtY29udGVudC13aWR0aCcgc3R5bGU9eyBzdHlsZXMuY29udGVudCB9PlxuXHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3MgdGVtcGxhdGU9e1tcblx0XHRcdFx0XHRcdFx0XHRbICdjb3JlL2hlYWRpbmcnLCB7IGNvbnRlbnQ6ICdUaGlzIGlzIGEgY2F0Y2h5IHRpdGxlJywgYWxpZ246ICdjZW50ZXInLCBsZXZlbDogMSB9IF0sXG5cdFx0XHRcdFx0XHRcdFx0WyAnY29yZS9wYXJhZ3JhcGgnLCB7IGNvbnRlbnQ6ICdBIGJyaWxsaWFudCBzdWJ0aXRsZSB0byBleHBsYWluIGl0cyBjYXRjaGluZXNzJywgYWxpZ246ICdjZW50ZXInIH0gXSxcblx0XHRcdFx0XHRcdFx0XHRbICdjb3JlL2J1dHRvbicsIHsgdGV4dDogJ0Rpc2NvdmVyIG1vcmUnLCBhbGlnbjogJ2NlbnRlcicgfSBdLFxuXHRcdFx0XHRcdFx0XHRdfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7IHNjcm9sbEluZGljYXRvckJsb2NrICYmIDxkaXYgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX2luZGljYXRvcic+PC9kaXY+IH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHR7IGhlcm8oKSB9XG5cdFx0XHRcdHsgYmxvY2tDb250cm9scyB9XG5cdFx0XHQ8L0ZyYWdtZW50Pixcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdDb250ZW50IFBvc2l0aW9uJywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IHRydWUgfT5cblx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PENvbG9yUGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PExheW91dFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxIZWlnaHRQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8U2Nyb2xsSW5kaWNhdG9yUGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUG9zaXRpb24gSW5kaWNhdG9ycycsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgUG9zaXRpb24gSW5kaWNhdG9ycycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwb3NpdGlvbkluZGljYXRvciB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHBvc2l0aW9uSW5kaWNhdG9yID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBwb3NpdGlvbkluZGljYXRvciB9ICk7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBwb3NpdGlvbkluZGljYXRvciB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhcmFsbGF4UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRdXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaGVyby9lZGl0LmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkR09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAhISRHT1BTLmY7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICRHT1BTLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gJGZhaWxzKGZ1bmN0aW9uICgpIHsgJEdPUFMuZigxKTsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogRkFJTFNfT05fUFJJTUlUSVZFUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gJEdPUFMuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGlzRW51bS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFBhZGRpbmdDb250cm9scyBmcm9tIFwiLi9wYWRkaW5nXCI7XG5pbXBvcnQgV2lkdGhDb250cm9scyBmcm9tIFwiLi93aWR0aFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIDxQYW5lbEJvZHlcblx0XHRcdGNsYXNzTmFtZT1cInBpeGVsZ3JhZGUtaGVyby1idXR0b24tZ3JvdXAtd3JhcHBlclwiXG5cdFx0XHR0aXRsZT17IF9fKCAnTGF5b3V0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0aW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cblx0XHRcdDxQYWRkaW5nQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDxXaWR0aENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL2luZGV4LmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGluZ0NvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29udGVudFBhZGRpbmdPcHRpb25zID0gW1xuXHRcdFx0eyBsYWJlbDogX18oICdTbWFsbCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NtYWxsJyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdNZWRpdW0nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdtZWRpdW0nIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0xhcmdlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGFyZ2UnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2N1c3RvbScgfSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxsYWJlbD57IF9fKCAnQ29udGVudCBQYWRkaW5nJywgJ19fcGx1Z2luX3R4dGQnKSB9PC9sYWJlbD5cblx0XHRcdDxCdXR0b25Hcm91cD5cblx0XHRcdFx0eyBjb250ZW50UGFkZGluZ09wdGlvbnMubWFwKCBvcHRpb24gPT5cblx0XHRcdFx0XHQ8QnV0dG9uIGtleT17IG9wdGlvbi52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdGlzRGVmYXVsdD17IG9wdGlvbi52YWx1ZSAhPT0gY29udGVudFBhZGRpbmcgfVxuXHRcdFx0XHRcdCAgICAgICAgaXNQcmltYXJ5PXsgb3B0aW9uLnZhbHVlID09PSBjb250ZW50UGFkZGluZyB9XG5cdFx0XHRcdFx0ICAgICAgICBvbkNsaWNrPXsgKCkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRQYWRkaW5nOiBvcHRpb24udmFsdWUgfSApIH0gfT5cblx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gY29udGVudFBhZGRpbmcgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IGNvbnRlbnRQYWRkaW5nQ3VzdG9tIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBjb250ZW50UGFkZGluZ0N1c3RvbSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRQYWRkaW5nQ3VzdG9tIH0gKSB9XG5cdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0bWF4PXsyNX1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9wYWRkaW5nLmpzIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRSYW5nZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkdGhDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY29udGVudFdpZHRoT3B0aW9ucyA9IFtcblx0XHRcdHsgbGFiZWw6IF9fKCAnRnVsbCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2Z1bGwnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ0xhcmdlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGFyZ2UnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ05hcnJvdycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ25hcnJvdycgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnQ3VzdG9tJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnY3VzdG9tJyB9LFxuXHRcdF07XG5cblx0XHRyZXR1cm4gPEZyYWdtZW50PlxuXHRcdFx0PGxhYmVsPnsgX18oICdDb250ZW50IFdpZHRoJywgJ19fcGx1Z2luX3R4dGQnKSB9PC9sYWJlbD5cblx0XHRcdDxCdXR0b25Hcm91cCBsYWJlbD1cIkNvbnRlbnQgV2lkdGhcIj5cblx0XHRcdFx0eyBjb250ZW50V2lkdGhPcHRpb25zLm1hcCggb3B0aW9uID0+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpc0RlZmF1bHQ9eyBvcHRpb24udmFsdWUgIT09IGNvbnRlbnRXaWR0aCB9XG5cdFx0XHRcdFx0ICAgICAgICBpc1ByaW1hcnk9eyBvcHRpb24udmFsdWUgPT09IGNvbnRlbnRXaWR0aCB9XG5cdFx0XHRcdFx0ICAgICAgICBvbkNsaWNrPXsgKCkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXaWR0aDogb3B0aW9uLnZhbHVlfSApIH0gfT5cblx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gY29udGVudFdpZHRoICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBjb250ZW50V2lkdGhDdXN0b20gfVxuXHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnRXaWR0aEN1c3RvbSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRXaWR0aEN1c3RvbSB9ICkgfVxuXHRcdFx0XHRtaW49ezIwfVxuXHRcdFx0XHRtYXg9ezkwfVxuXHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC93aWR0aC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xheW91dC1wYW5lbC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0UmFkaW9Db250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC8vIHBhcmFsbGF4XG5cdFx0XHRcdGVuYWJsZVBhcmFsbGF4LFxuXHRcdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdFx0cGFyYWxsYXhDdXN0b21BbW91bnQsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BhcmFsbGF4JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBQYXJhbGxheCBTY3JvbGxpbmcnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGVuYWJsZVBhcmFsbGF4IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlUGFyYWxsYXg6ICEgZW5hYmxlUGFyYWxsYXggfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAhISBlbmFibGVQYXJhbGxheCAmJlxuXHRcdFx0XHQgIDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHQgIGxhYmVsPXsgX18oICdQYXJhbGxheCBPcmJpdGFsIFNwZWVkJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdCAgc2VsZWN0ZWQ9eyBwYXJhbGxheEFtb3VudCB9XG5cdFx0XHRcdFx0ICBvbkNoYW5nZT17IHBhcmFsbGF4QW1vdW50ID0+IHtcblxuXHRcdFx0XHRcdFx0ICBpZiAoIHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyApIHtcblx0XHRcdFx0XHRcdFx0ICBzZXRBdHRyaWJ1dGVzKCB7IHBhcmFsbGF4QW1vdW50IH0gKTtcblx0XHRcdFx0XHRcdCAgfSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ICBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0ICBwYXJhbGxheEFtb3VudDogcGFyYWxsYXhBbW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0ICBwYXJhbGxheEN1c3RvbUFtb3VudDogcGFyc2VJbnQoIHBhcmFsbGF4QW1vdW50LCAxMCApXG5cdFx0XHRcdFx0XHRcdCAgfSApO1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICB9IH1cblx0XHRcdFx0XHQgIG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdCAge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ0Zhc3QgYXMgTWVyY3VyZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnMjAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdOYXR1cmFsIGFzIEVhcnRoJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICc1MCdcblx0XHRcdFx0XHRcdCAgfSwge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ1Nsb3cgYXMgTmVwdHVuZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnNzAnXG5cdFx0XHRcdFx0XHQgIH0sIHtcblx0XHRcdFx0XHRcdFx0ICBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJ2N1c3RvbSdcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgXX1cblx0XHRcdFx0XHQgIGhlbHA9eyBfXygnVGhlIHNwZWVkIGF0IHdoaWNoIHRoZSBwYXJhbGxheCBlZmZlY3QgcnVucy4nLCAnX19wbHVnaW5fdHh0ZCcpIH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsgISEgZW5hYmxlUGFyYWxsYXggJiYgJ2N1c3RvbScgPT09IHBhcmFsbGF4QW1vdW50ICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHR2YWx1ZT17IHBhcmFsbGF4Q3VzdG9tQW1vdW50IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHBhcmFsbGF4Q3VzdG9tQW1vdW50ID0+IHNldEF0dHJpYnV0ZXMoIHsgcGFyYWxsYXhDdXN0b21BbW91bnQgfSApIH1cblx0XHRcdFx0XHRtaW49ezEwfVxuXHRcdFx0XHRcdG1heD17MTAwfVxuXHRcdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0XHRcdGhlbHA9eyBfXygnSXQgc3RhcnRzIGZyb20gMCB3aGVuIHRoZSBpbWFnZSB3aWxsIGtlZXAgd2l0aCB0aGUgY29udGVudCAobm8gcGFyYWxsYXgpIHVwIHRvIDEwMCB3aGVuIHRoZSBpbWFnZSBhcHBlYXJzIGZpeGVkIGluIHBsYWNlLicsICdfX3BsdWdpbl90eHRkJyApfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGFyYWxsYXgtcGFuZWwvaW5kZXguanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdEljb25CdXR0b24sXG5cdEZvcm1GaWxlVXBsb2FkLFxuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdO1xuXG5jbGFzcyBHYWxsZXJ5UGxhY2Vob2xkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdG9uQ2hhbmdlR2FsbGVyeSggZ2FsbGVyeUltYWdlcyApIHtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gZ2FsbGVyeUltYWdlcy5tYXAoIChpbWFnZSwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiB3cC5hcGlSZXF1ZXN0KCB7IHBhdGg6ICcvd3AvdjIvbWVkaWEvJyArIGltYWdlLmlkIH0gKS50aGVuKCBuZXdJbWFnZSA9PiB7XG5cdFx0XHRcdGdhbGxlcnlJbWFnZXNbaW5kZXhdID0geyAuLi5uZXdJbWFnZSwgLi4uaW1hZ2UgfTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHRQcm9taXNlLmFsbCggcHJvbWlzZXMgKS50aGVuKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoIHsgZ2FsbGVyeUltYWdlczogZ2FsbGVyeUltYWdlcy5maWx0ZXIoIGltYWdlID0+IHtcblx0XHRcdFx0cmV0dXJuICEhIGltYWdlLmlkICYmICEhIGltYWdlLnNpemVzICYmICEhIGltYWdlLnNpemVzLmxhcmdlICYmICEhIGltYWdlLnNpemVzLmxhcmdlLnVybDtcblx0XHRcdH0gKSB9ICk7XG5cdFx0fSApO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGdhbGxlcnlJbWFnZXMsXG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvblNlbGVjdEltYWdlLFxuXHRcdFx0XHRvbkNoYW5nZSxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBoYXNJbWFnZXMgPSAhISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRhZGRUb0dhbGxlcnk9eyBoYXNJbWFnZXMgfVxuXHRcdFx0XHRpc0FwcGVuZGVyPXsgaGFzSW1hZ2VzIH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiXCJcblx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdFx0XHRpbnN0cnVjdGlvbnM6IF9fKCAnRHJhZyBpbWFnZXMsIHVwbG9hZCBuZXcgb25lcyBvciBzZWxlY3QgZmlsZXMgZnJvbSB5b3VyIGxpYnJhcnkuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRvblNlbGVjdD17IHRoaXMub25DaGFuZ2VHYWxsZXJ5LmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdGFjY2VwdD1cImltYWdlLypcIlxuXHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0dmFsdWU9eyBoYXNJbWFnZXMgPyBnYWxsZXJ5SW1hZ2VzIDogdW5kZWZpbmVkIH1cblx0XHRcdC8+XG5cdFx0KVxuXHR9XG59XG5cbmNsYXNzIEdhbGxlcnlQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRvblNlbGVjdEltYWdlLFxuXHRcdFx0aXNTZWxlY3RlZFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBjbGFzcz1cIm5vdmEtc2xpZGVzaG93X19nYWxsZXJ5LWVkaXRcIj5cblx0XHRcdFx0eyBnYWxsZXJ5SW1hZ2VzLm1hcCggKCBpbWcsIGluZGV4ICkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9IFtcblx0XHRcdFx0XHRcdCdub3ZhLXNsaWRlc2hvd19fZ2FsbGVyeS1pdGVtJyxcblx0XHRcdFx0XHRdO1xuXG5cdFx0XHRcdFx0aWYgKCBzZWxlY3RlZCA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goICdub3ZhLXNsaWRlc2hvd19fZ2FsbGVyeS1pdGVtLS1hY3RpdmUnICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaSBrZXk9eyBpbWcuaWQgfHwgaW1nLnVybCB9IG9uQ2xpY2s9eyAoKSA9PiB7IG9uU2VsZWN0SW1hZ2UoIGluZGV4ICkgfSB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbiggJyAnICkgfT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17IGltZy5zaXplcy50aHVtYm5haWwudXJsIH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gKSB9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRHYWxsZXJ5UGxhY2Vob2xkZXIsXG5cdEdhbGxlcnlQcmV2aWV3XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dhbGxlcnktb3B0aW9ucy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9ibG9ja3MvaWNvbnNcIjtcbmltcG9ydCB7QWxpZ25tZW50Q29udHJvbHN9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdENvbG9yUGFsZXR0ZSxcblx0RHJvcGRvd24sXG5cdEljb25CdXR0b24sXG5cdFJhZGlvQ29udHJvbCxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb29sYmFyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0UGFuZWxDb2xvclNldHRpbmdzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCBjb2xvcnMgPSBbIHtcblx0bmFtZTogX18oICdEYXJrJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdGNvbG9yOiAnIzAwMCdcbn0sIHtcblx0bmFtZTogX18oICdMaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHRjb2xvcjogJyNGRkYnXG59IF07XG5cbmNsYXNzIE92ZXJsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8RnJhZ21lbnQ+XG5cdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPdmVybGF5IEZpbHRlciBTdHlsZScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0c2VsZWN0ZWQ9eyBvdmVybGF5RmlsdGVyU3R5bGUgfVxuXHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTm9uZScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ25vbmUnIH0sXG5cdFx0XHRcdFx0eyBsYWJlbDogX18oICdEYXJrJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnZGFyaycgfSxcblx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0xpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbGlnaHQnIH1cblx0XHRcdFx0XSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgb3ZlcmxheUZpbHRlclN0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgb3ZlcmxheUZpbHRlclN0eWxlIH0gKSB9XG5cdFx0XHQvPlxuXHRcdFx0eyBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPdmVybGF5IEZpbHRlciBTdHJlbmd0aCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0dmFsdWU9eyBvdmVybGF5RmlsdGVyU3RyZW5ndGggfVxuXHRcdFx0XHRvbkNoYW5nZT17IG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCA9PiBzZXRBdHRyaWJ1dGVzKCB7IG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCB9ICkgfVxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MTAwfVxuXHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdC8+IH1cblx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cbmNsYXNzIENvbG9yQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPENvbG9yUGFsZXR0ZVxuXHRcdFx0Y2xhc3NOYW1lPVwibm92YS1oaWRlLWNsZWFyLWNvbG9yXCJcblx0XHRcdHZhbHVlPXsgY29udGVudENvbG9yIH1cblx0XHRcdGNvbG9ycz17IGNvbG9ycyB9XG5cdFx0XHRvbkNoYW5nZT17IGNvbnRlbnRDb2xvciA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnRDb2xvciB9ICkgfVxuXHRcdFx0ZGlzYWJsZUN1c3RvbUNvbG9yc1xuXHRcdC8+XG5cdH1cbn1cblxuY2xhc3MgQ29sb3JQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdGNsYXNzTmFtZT1cIm5vdmEtaGlkZS1jbGVhci1jb2xvclwiXG5cdFx0XHR0aXRsZT17IF9fKCAnQ29sb3IgU2V0dGluZ3MnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRjb2xvclNldHRpbmdzPXsgW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbnRlbnRDb2xvcixcblx0XHRcdFx0XHRvbkNoYW5nZTogY29udGVudENvbG9yID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudENvbG9yIH0gKSxcblx0XHRcdFx0XHRsYWJlbDogX18oICdDb250ZW50IENvbG9yJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdH0sXG5cdFx0XHRdIH1cblx0XHRcdGNvbG9ycz17IGNvbG9ycyB9IFxuXHRcdFx0aW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0PE92ZXJsYXlDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdDwvUGFuZWxDb2xvclNldHRpbmdzPlxuXHR9XG59XG5cbmNsYXNzIENvbG9yVG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhcic+XG5cdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdHBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhci1kcm9wZG93bidcblx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0cmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IChcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5pbnZlcnQgfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NvbG9yIE9wdGlvbnMnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Zm9jdXNPbk1vdW50PXsgZmFsc2UgfVxuXHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eyAoIHsgb25DbG9zZSB9ICkgPT4gPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PENvbG9yQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdDxPdmVybGF5Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdENvbG9yQ29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdENvbG9yVG9vbGJhcixcblx0T3ZlcmxheUNvbnRyb2xzLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb2xvci1jb250cm9scy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi8uLi9ibG9ja3MvaWNvbnNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyB3aXRoVmlld3BvcnRNYXRjaCB9ID0gd3Audmlld3BvcnQ7XG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IGNvbXBvc2UsIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBDb25zdW1lciwgUHJvdmlkZXIgfSA9IGNyZWF0ZUNvbnRleHQoIHtcblx0bmFtZTogJycsXG5cdGlzU2VsZWN0ZWQ6IGZhbHNlLFxuXHRmb2N1c2VkRWxlbWVudDogbnVsbCxcblx0c2V0Rm9jdXNlZEVsZW1lbnQ6ICgpID0+IHt9LFxuXHRjbGllbnRJZDogbnVsbCxcbn0gKTtcblxuY29uc3Qge1xuXHRUb29sYmFyXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MUyA9IHtcblx0bGVmdDoge1xuXHRcdGljb246IGljb25zLmFsaWduVG9wLFxuXHRcdHRpdGxlOiBfXyggJ0FsaWduIExlZnQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcblx0Y2VudGVyOiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25DZW50ZXIsXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gTWlkZGxlJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdH0sXG5cdHJpZ2h0OiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25Cb3R0b20sXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gUmlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcbn07XG5cbmNvbnN0IERFRkFVTFRfQ09OVFJPTFMgPSBbICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcgXTtcbmNvbnN0IERFRkFVTFRfQ09OVFJPTCA9ICdjZW50ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhciggeyBpc0NvbGxhcHNlZCwgdmFsdWUsIG9uQ2hhbmdlLCBjb250cm9scyA9IERFRkFVTFRfQ09OVFJPTFMgfSApIHtcblx0ZnVuY3Rpb24gYXBwbHlPclVuc2V0KCBhbGlnbiApIHtcblx0XHRyZXR1cm4gKCkgPT4gb25DaGFuZ2UoIHZhbHVlID09PSBhbGlnbiA/IHVuZGVmaW5lZCA6IGFsaWduICk7XG5cdH1cblxuXHRjb25zdCBhY3RpdmVBbGlnbm1lbnQgPSBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyB2YWx1ZSBdO1xuXHRjb25zdCBkZWZhdWx0QWxpZ25tZW50Q29udHJvbCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIERFRkFVTFRfQ09OVFJPTCBdO1xuXG5cdHJldHVybiAoXG5cdFx0PFRvb2xiYXJcblx0XHRcdGlzQ29sbGFwc2VkPXsgaXNDb2xsYXBzZWQgfVxuXHRcdFx0aWNvbj17IGFjdGl2ZUFsaWdubWVudCA/IGFjdGl2ZUFsaWdubWVudC5pY29uIDogZGVmYXVsdEFsaWdubWVudENvbnRyb2wuaWNvbiB9XG5cdFx0XHRjb250cm9scz17XG5cdFx0XHRcdGNvbnRyb2xzLm1hcCggKCBjb250cm9sICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5CTE9DS19BTElHTk1FTlRTX0NPTlRST0xTWyBjb250cm9sIF0sXG5cdFx0XHRcdFx0XHRpc0FjdGl2ZTogdmFsdWUgPT09IGNvbnRyb2wsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBhcHBseU9yVW5zZXQoY29udHJvbCksXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwicGl4ZWxncmFkZS1oZXJvLWhvcml6b250YWwtYWxpZ25tZW50LWJ1dHRvblwiXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSApXG5cdFx0XHR9XG5cdFx0Lz5cblx0KVxufVxuXG4vLyBAdG9kbyByZW1vdmUgZnVuY3Rpb24gZGVjbGFyYXRpb24gYW5kIHVzZSBjb3JlIG1ldGhvZCB3aGVuIGV4cG9zZWQgdGhyb3VnaCB0aGUgYXBpXG5jb25zdCB3aXRoQmxvY2tFZGl0Q29udGV4dCA9ICggbWFwQ29udGV4dFRvUHJvcHMgKSA9PiBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCggKCBPcmlnaW5hbENvbXBvbmVudCApID0+IHtcblx0cmV0dXJuICggcHJvcHMgKSA9PiAoXG5cdFx0PENvbnN1bWVyPlxuXHRcdFx0eyAoIGNvbnRleHQgKSA9PiAoXG5cdFx0XHRcdDxPcmlnaW5hbENvbXBvbmVudFxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRcdHsgLi4ubWFwQ29udGV4dFRvUHJvcHMoIGNvbnRleHQsIHByb3BzICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSB9XG5cdFx0PC9Db25zdW1lcj5cblx0KTtcbn0sICd3aXRoQmxvY2tFZGl0Q29udGV4dCcgKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aEJsb2NrRWRpdENvbnRleHQoICggeyBjbGllbnRJZCB9ICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGllbnRJZCxcblx0XHR9O1xuXHR9ICksXG5cdHdpdGhWaWV3cG9ydE1hdGNoKCB7IGlzTGFyZ2VWaWV3cG9ydDogJ21lZGl1bScgfSApLFxuXHR3aXRoU2VsZWN0KCAoIHNlbGVjdCwgeyBjbGllbnRJZCwgaXNMYXJnZVZpZXdwb3J0LCBpc0NvbGxhcHNlZCB9ICkgPT4ge1xuXHRcdGNvbnN0IHsgZ2V0QmxvY2tSb290Q2xpZW50SWQsIGdldFNldHRpbmdzIH0gPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNDb2xsYXBzZWQ6IGlzQ29sbGFwc2VkIHx8ICEgaXNMYXJnZVZpZXdwb3J0IHx8IChcblx0XHRcdFx0ISBnZXRTZXR0aW5ncygpLmhhc0ZpeGVkVG9vbGJhciAmJlxuXHRcdFx0XHRnZXRCbG9ja1Jvb3RDbGllbnRJZCggY2xpZW50SWQgKVxuXHRcdFx0KSxcblx0XHR9O1xuXHR9ICksXG4pKCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXIvaW5kZXguanMiLCJpbXBvcnQge2RlYm91bmNlfSBmcm9tIFwiLi4vLi4vYmxvY2tzL3V0aWxzXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRkaXNwYXRjaCxcblx0c2VsZWN0LFxuXHRzdWJzY3JpYmUsXG59ID0gd3AuZGF0YTtcblxubGV0IGJsb2NrTGlzdCA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xuXG5sZXQgZGVib3VuY2VkT25TdWJzY3JpYmUgPSBkZWJvdW5jZSgoKSA9PiB7XG5cdGxldCBuZXdCbG9ja0xpc3QgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKTtcblx0bGV0IGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3QubGVuZ3RoICE9PSBuZXdCbG9ja0xpc3QubGVuZ3RoO1xuXG5cdGlmICggISBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdENoYW5nZWQgPSBibG9ja0xpc3Quc29tZSggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCBibG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICE9PSBuZXdCbG9ja0xpc3RbaW5kZXhdLmNsaWVudElkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBibG9ja0xpc3RDaGFuZ2VkICkge1xuXHRcdGJsb2NrTGlzdCA9IG5ld0Jsb2NrTGlzdDtcblx0XHR1cGRhdGVCbG9ja3MoKTtcblx0fVxufSwgMzApO1xuXG5zdWJzY3JpYmUoIGRlYm91bmNlZE9uU3Vic2NyaWJlICk7XG5cbmNvbnN0IHVwZGF0ZUJsb2NrcyA9ICggYXR0cmlidXRlcyApID0+IHtcblxuXHRzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRyZXR1cm4gYmxvY2submFtZSA9PT0gJ25vdmEvaGVybyc7XG5cdH0gKS5maWx0ZXIoICggYmxvY2ssIGluZGV4ICkgPT4ge1xuXHRcdGNvbnN0IHsgYXBwbHlNaW5pbXVtSGVpZ2h0LCBzY3JvbGxJbmRpY2F0b3IgfSA9IHsgLi4uYmxvY2suYXR0cmlidXRlcywgLi4uYXR0cmlidXRlcyB9O1xuXHRcdGNvbnN0IGFwcGx5TWluaW11bUhlaWdodEJsb2NrID0gYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnZmlyc3QnICYmIGluZGV4ID09PSAwIHx8IGFwcGx5TWluaW11bUhlaWdodCA9PT0gJ2FsbCc7XG5cdFx0Y29uc3Qgc2Nyb2xsSW5kaWNhdG9yQmxvY2sgPSBzY3JvbGxJbmRpY2F0b3IgPT09IHRydWUgJiYgaW5kZXggPT09IDA7XG5cblx0XHRkaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyggYmxvY2suY2xpZW50SWQsIHtcblx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2tcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSApO1xuXG59XG5cbmNsYXNzIEhlaWdodFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0ID0gISEgYXR0cmlidXRlcy5hcHBseU1pbmltdW1IZWlnaHQgPyBhdHRyaWJ1dGVzLmFwcGx5TWluaW11bUhlaWdodCA6ICdmaXJzdCc7XG5cdFx0Y29uc3QgbWluSGVpZ2h0ID0gISEgYXR0cmlidXRlcy5taW5IZWlnaHQgPyBhdHRyaWJ1dGVzLm1pbkhlaWdodCA6IDc1O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0hlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FwcGx5IE1pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdHNlbGVjdGVkPXsgYXBwbHlNaW5pbXVtSGVpZ2h0IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IGFwcGx5TWluaW11bUhlaWdodCA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGFwcGx5TWluaW11bUhlaWdodCB9ICk7XG5cdFx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgYXBwbHlNaW5pbXVtSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvcHRpb25zPXtcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdOb25lJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbm9uZScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdGaXJzdCBIZXJvIEJsb2NrIE9ubHknLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdmaXJzdCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdBbGwgSGVybyBCbG9ja3MnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdhbGwnIH1cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgJ25vbmUnICE9PSBhcHBseU1pbmltdW1IZWlnaHQgJiZcblx0XHRcdFx0ICAgIDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbWluSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtaW5IZWlnaHQgfSApO1xuLy9cdFx0XHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBtaW5IZWlnaHQgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnSGFsZicsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogNTAgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ1R3byBUaGlyZHMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDY2IH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdUaHJlZSBRdWFydGVycycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogNzUgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0Z1bGwnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDEwMCB9XG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0ICAgIH1cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdClcblx0fVxufVxuXG5jbGFzcyBTY3JvbGxJbmRpY2F0b3JQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRzY3JvbGxJbmRpY2F0b3IsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgaGVyb0Jsb2NrcyA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdFx0cmV0dXJuIGJsb2NrLm5hbWUgPT09ICdub3ZhL2hlcm8nO1xuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gaGVyb0Jsb2Nrcy5maW5kSW5kZXgoIGJsb2NrID0+IGJsb2NrLmNsaWVudElkID09PSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKSApO1xuXG5cdFx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1Njcm9sbCBJbmRpY2F0b3InLCAnX19wbHVnaW5fdHh0ZCcgKSB9IHN0eWxlPXsgeyBkaXNwbGF5OiBpbmRleCA9PT0gMCA/ICdibG9jaycgOiAnbm9uZScgfSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgU2Nyb2xsIEluZGljYXRvcicsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0Y2hlY2tlZD17IHNjcm9sbEluZGljYXRvciB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgc2Nyb2xsSW5kaWNhdG9yID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHNjcm9sbEluZGljYXRvciB9ICk7XG5cdFx0XHRcdFx0dXBkYXRlQmxvY2tzKCB7IHNjcm9sbEluZGljYXRvciB9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHQ8L1BhbmVsQm9keT5cblx0fVxufVxuXG5leHBvcnQge1xuXHRIZWlnaHRQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWwsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWlnaHQtY29udHJvbHMvaW5kZXguanMiLCIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJy4uL2ljb25zJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcy5qc29uJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xuXG4vKipcbiAqIHdwIEFQSVxuICovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSggJ25vdmEvbWVkaWEnLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCAnTWVkaWEgQ2FyZCBDb25zdGVsbGF0aW9uJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKCAnRGlzcGxheSBtZWRpYSBvYmplY3RzIGFsb25nc2lkZSBzaG9ydCBwaWVjZXMgb2YgY29udGVudC4nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRpY29uOiBtZWRpYSxcblx0XHRjYXRlZ29yeTogJ25vdmEtYnktcGl4ZWxncmFkZScsXG5cdFx0Li4uYXR0cmlidXRlcyxcblx0XHRlZGl0LFxuXHRcdHNhdmUsXG5cdFx0Z2V0RWRpdFdyYXBwZXJQcm9wcygpIHtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmFsaWduV2lkZSA/IHtcblx0XHRcdFx0J2RhdGEtYWxpZ24nOiAnd2lkZSdcblx0XHRcdH0gOiB7fVxuXHRcdH0sXG5cdH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImltYWdlQWx0XCI6e1wiYXR0cmlidXRlXCI6XCJhbHRcIn0sXCJiYWNrZ3JvdW5kQ29sb3JcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIiMwMDBcIn0sXCJtZWRpYVBvc2l0aW9uXCI6e1wiZGVmYXVsdFwiOlwibGVmdFwifSxcIm1lZGlhU3R5bGVcIjp7XCJkZWZhdWx0XCI6XCJzaW1wbGVcIn0sXCJjb250ZW50U3R5bGVcIjp7XCJkZWZhdWx0XCI6XCJiYXNpY1wifSxcImJsb2NrU3R5bGVcIjp7XCJkZWZhdWx0XCI6XCJiYXNpY1wifSxcImJhY2tncm91bmRUeXBlXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJ0cmFuc3BhcmVudFwifSxcImltYWdlc1wiOntcInR5cGVcIjpcImFycmF5XCIsXCJkZWZhdWx0XCI6W119fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9tZWRpYS9hdHRyaWJ1dGVzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InO1xuaW1wb3J0IE1lZGlhUHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHR1cGRhdGVJbWFnZXMoIG1lZGlhICkge1xuXHRcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRpbWFnZXM6IG1lZGlhLm1hcCggKCBpbWFnZSApID0+IEpTT04uc3RyaW5naWZ5KHsgaWQ6IGltYWdlLmlkLCB1cmw6IGltYWdlLnVybCwgYWx0OiBpbWFnZS5hbHQgfSkgKVxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PE1lZGlhUHJldmlldyB7IC4uLnRoaXMucHJvcHMgfSB1cGRhdGVJbWFnZXM9eyB0aGlzLnVwZGF0ZUltYWdlcy5iaW5kKCB0aGlzICkgfSAvPlxuXHRcdFx0XHQ8Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gdXBkYXRlSW1hZ2VzPXsgdGhpcy51cGRhdGVJbWFnZXMuYmluZCggdGhpcyApIH0gLz5cblx0XHRcdFx0PEluc3BlY3RvciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHRdXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9lZGl0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBNZWRpYVVwbG9hZCwgQmxvY2tDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IEljb25CdXR0b24sIFRvb2xiYXIgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNsYXNzIENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHRcdHVwZGF0ZUltYWdlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bWVkaWFQb3NpdGlvbixcblx0XHRcdGltYWdlcyA9IFtdLFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0Y29uc3QgZ2FsbGVyeUltYWdlcyA9IGltYWdlcy5tYXAgKCAoaW1hZ2UpICA9PiBKU09OLnBhcnNlKGltYWdlKSk7XG5cblx0XHRjb25zdCBoYXNJbWFnZXMgPSAhISBpbWFnZXMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgTUVESUFfQUxJR05NRU5UU19DT05UUk9MUyA9IHtcblx0XHRcdGxlZnQ6IHtcblx0XHRcdFx0aWNvbjogJ2FsaWduLXB1bGwtbGVmdCcsXG5cdFx0XHRcdHRpdGxlOiBfXyggJ1Nob3cgTWVkaWEgb24gTGVmdCBTaWRlJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHR9LFxuXHRcdFx0cmlnaHQ6IHtcblx0XHRcdFx0aWNvbjogJ2FsaWduLXB1bGwtcmlnaHQnLFxuXHRcdFx0XHR0aXRsZTogX18oICdTaG93IE1lZGlhIG9uIFJpZ2h0IFNpZGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdGNvbnN0IHRvb2xiYXJDb250cm9scyA9IChcblx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHQ8VG9vbGJhclxuXHRcdFx0XHRcdGNvbnRyb2xzPXsgT2JqZWN0LmtleXMoTUVESUFfQUxJR05NRU5UU19DT05UUk9MUykubWFwKGNvbnRyb2wgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0Li4uTUVESUFfQUxJR05NRU5UU19DT05UUk9MU1tjb250cm9sXSxcblx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4geyBzZXRBdHRyaWJ1dGVzKHsgbWVkaWFQb3NpdGlvbjogY29udHJvbCB9ICl9LFxuXHRcdFx0XHRcdFx0XHRpc0FjdGl2ZTogbWVkaWFQb3NpdGlvbiA9PT0gY29udHJvbFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBoYXNJbWFnZXMgJiYgPFRvb2xiYXI+XG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHR0eXBlID0gXCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRtdWx0aXBsZVxuXHRcdFx0XHRcdFx0Z2FsbGVyeVxuXHRcdFx0XHRcdFx0dmFsdWUgPSB7IGdhbGxlcnlJbWFnZXMubWFwKCAoIGltYWdlICkgPT4gaW1hZ2UuaWQgKSB9XG5cdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsgdXBkYXRlSW1hZ2VzIH1cblx0XHRcdFx0XHRcdHJlbmRlciA9IHsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbXBvbmVudHMtaWNvbi1idXR0b24gY29tcG9uZW50cy10b29sYmFyX19jb250cm9sJ1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IE1lZGlhJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPSB7ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wZW4oKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Ub29sYmFyPiB9XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdHsgdG9vbGJhckNvbnRyb2xzIH1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9scztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9jb250cm9scy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7QWxpZ25tZW50Q29udHJvbHN9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9sc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IFBhbmVsQm9keSwgUmFkaW9Db250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNsYXNzIEluc3BlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bWVkaWFTdHlsZSxcblx0XHRcdGNvbnRlbnRTdHlsZSxcblx0XHRcdGJsb2NrU3R5bGUsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdNZWRpYSBBcmVhJywgJ19fcGx1Z2luX3R4dGQnICkgfSAgaW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ01lZGlhIFN0eWxlJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgbWVkaWFTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBtZWRpYVN0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnV2VsbC1vcmdhbml6ZWQgR3JpZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NpbXBsZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ092ZXJsYXAgTGF5ZXJlZCBHcmlkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnb3ZlcmxhcCcgfVxuXHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnQXV0b21hdGljYWxseSBjcm9wIGFuZCBzY2FsZSBpbWFnZXMgdG8gZmlsbCB0aGUgYmxvY2sgY29udGFpbmVyLicsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7IG1lZGlhU3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYVN0eWxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCdDb250ZW50IEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcpIH0gaW5pdGlhbE9wZW4gPSB7IHRydWUgfT5cblx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWwgPSB7IF9fKCAnRW1waGFzaXMgTGV2ZWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0geyBjb250ZW50U3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZCA9IHsgY29udGVudFN0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnQmFzaWMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdiYXNpYycgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ01vZGVyYXRlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbW9kZXJhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdIaWdobGlnaHRlZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2hpZ2hsaWdodGVkJyB9XG5cdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsgY29udGVudFN0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFN0eWxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCdCbG9jayBBcmVhJywgJ19fcGx1Z2luX3R4dGQnKSB9IGluaXRpYWxPcGVuID0geyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ0VtcGhhc2lzIExldmVsJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgYmxvY2tTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBibG9ja1N0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnQmFzaWMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdiYXNpYycgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ01vZGVyYXRlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbW9kZXJhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdIaWdobGlnaHRlZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2hpZ2hsaWdodGVkJyB9XG5cdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsgYmxvY2tTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJsb2NrU3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0b3I7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9pbnNwZWN0b3IuanMiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgSW5uZXJCbG9ja3MsIE1lZGlhUGxhY2Vob2xkZXJ9ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2NvcmUvYnV0dG9uJywgJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvaGVhZGluZyddO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsnY29yZS9oZWFkaW5nJywge2NvbnRlbnQ6ICdTaG9vdCBmb3IgdGhlIG1vb24sIEV2ZW4gaWYgWW91IE1pc3MgaXQnLCBsZXZlbDogNH1dLFxuXHRbJ2NvcmUvaGVhZGluZycsIHtjb250ZW50OiAnV2VsY29tZSB0byBvdXIgcGxhbmV0LCBsb29rIGFuZCBmZWVsIG1hdHRlcnMhJywgbGV2ZWw6IDJ9XSxcblx0Wydjb3JlL3BhcmFncmFwaCcsIHtjb250ZW50OiAnV2VcXCd2ZSBhbHdheXMgZGVmaW5lZCBvdXJzZWx2ZXMgYnkgdGhlIGFiaWxpdHkgdG8gb3ZlcmNvbWUgdGhlIGltcG9zc2libGUuIEFuZCB3ZSBjb3VudCB0aGVzZSBtb21lbnRzLiBUaGVzZSBtb21lbnRzIHdoZW4gd2UgZGFyZSB0byBhaW0gaGlnaGVyLCB0byBicmVhayBiYXJyaWVycywgdG8gcmVhY2ggZm9yIHRoZSBzdGFycywgdG8gbWFrZSB0aGUgdW5rbm93biBrbm93bi4nfV0sXG5cdFsnY29yZS9idXR0b24nLCB7dGV4dDogJ0Rpc2NvdmVyIE1vcmUnfV1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRpc1NlbGVjdGVkLFxuXHRcdFx0dXBkYXRlSW1hZ2VzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYVN0eWxlLFxuXHRcdFx0Y29udGVudFN0eWxlLFxuXHRcdFx0YmxvY2tTdHlsZSxcblx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRpbWFnZXMsXG5cdFx0XHRhbGlnbm1lbnRcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwge1xuXHRcdFx0J2hhcy1pbWFnZS1vbi10aGUtcmlnaHQnOiAncmlnaHQnID09PSBtZWRpYVBvc2l0aW9uLFxuXHRcdFx0J2NvbnRlbnQtaXMtbW9kZXJhdGUnOiAnbW9kZXJhdGUnID09PSBjb250ZW50U3R5bGUsXG5cdFx0XHQnY29udGVudC1pcy1oaWdobGlnaHRlZCc6ICdoaWdobGlnaHRlZCcgPT09IGNvbnRlbnRTdHlsZSxcblx0XHRcdCdibG9jay1pcy1tb2RlcmF0ZSc6ICdtb2RlcmF0ZScgPT09IGJsb2NrU3R5bGUsXG5cdFx0XHQnYmxvY2staXMtaGlnaGxpZ2h0ZWQnOiAnaGlnaGxpZ2h0ZWQnID09PSBibG9ja1N0eWxlLFxuXHRcdFx0J2lzLXNpbXBsZS1ncmlkJzogJ3NpbXBsZS1ncmlkJyA9PT0gbWVkaWFTdHlsZSxcblx0XHRcdCdpcy1vdmVybGFwLWdyaWQnOiAnb3ZlcmxhcC1ncmlkJyA9PT0gbWVkaWFTdHlsZSxcblx0XHRcdCdpcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG5cdFx0XHQnaGFzLW11bHRpcGxlLWltYWdlcyc6ICAyIDw9IGltYWdlcy5sZW5ndGhcblx0XHR9KTtcblxuXHRcdGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBpbWFnZXMubWFwICggKGltYWdlKSAgPT4gSlNPTi5wYXJzZShpbWFnZSkpO1xuXG5cdFx0Y29uc3QgZGlzcGxheUltYWdlcyA9IChpbWFnZXMpID0+IHtcblxuXHRcdFx0aWYgKCAwID09PSBpbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PE1lZGlhUGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdFx0aWNvbiA9IFwiZm9ybWF0LWdhbGxlcnlcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBcIm5vdmEtbWVkaWFfX3BsYWNlaG9sZGVyXCJcblx0XHRcdFx0XHRcdFx0b25TZWxlY3QgPSB7IHVwZGF0ZUltYWdlcyB9XG5cdFx0XHRcdFx0XHRcdGFjY2VwdCA9IFwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcyA9IHsgWyAnaW1hZ2UnIF0gfVxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0Z2FsbGVyeUltYWdlcy5tYXAoIChpbWFnZSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSdub3ZhLW1lZGlhX19pbWFnZSc+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBhbHQ9eyBpbWFnZS5hbHQgfSBzcmM9eyBpbWFnZS51cmwgfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInUtY29udGFpbmVyLXdpZHRoXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19hc2lkZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtkaXNwbGF5SW1hZ2VzKCBpbWFnZXMgKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fY29udGVudFwiIHN0eWxlPXt7dGV4dEFsaWduOiBhbGlnbm1lbnR9fT5cblx0XHRcdFx0XHRcdFx0XHQ8SW5uZXJCbG9ja3Ncblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRCbG9ja3M9e0FMTE9XRURfQkxPQ0tTfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU9e1RFTVBMQVRFfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GcmFnbWVudD5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9wcmV2aWV3LmpzIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3Qge1xuXHRJbm5lckJsb2Nrc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHRtZWRpYVN0eWxlLFxuXHRcdFx0XHRjb250ZW50U3R5bGUsXG5cdFx0XHRcdGJsb2NrU3R5bGUsXG5cdFx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRcdGltYWdlc1xuXHRcdFx0fVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cblx0XHRjb25zdCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGBub3ZhLW1lZGlhYCxcblx0XHRcdGBoYXMtaW1hZ2Utb24tdGhlLSR7bWVkaWFQb3NpdGlvbn1gLFxuXHRcdFx0YGNvbnRlbnQtaXMtJHtjb250ZW50U3R5bGV9YCxcblx0XHRcdGBibG9jay1pcy0ke2Jsb2NrU3R5bGV9YCxcblx0XHRcdGBncmlkLWlzLSR7bWVkaWFTdHlsZX1gLFxuXHRcdFx0YGFsaWdud2lkZWBcblx0XHQpO1xuXG5cblx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VzID0gaW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IEpTT04ucGFyc2UoIGltYWdlICkgKTtcblxuXHRcdGNvbnN0IGRpc3BsYXlJbWFnZXMgPSAoIGltYWdlcyApID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGdhbGxlcnlJbWFnZXMubWFwKCAoIGltYWdlICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1tZWRpYV9faW1hZ2UnPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGFsdD17aW1hZ2UuYWx0fSBzcmM9e2ltYWdlLnVybH0vPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9IClcblx0XHRcdClcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19hc2lkZVwiPlxuXHRcdFx0XHRcdHtkaXNwbGF5SW1hZ2VzKCBpbWFnZXMgKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fY29udGVudFwiPlxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9zYXZlLmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSAnLi9hdHRyaWJ1dGVzLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogd3AgQVBJXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSggJ25vdmEvc2xpZGVzaG93Jyxcblx0e1xuXHRcdHRpdGxlOiBfXyggJ1NsaWRlc2hvdyBNZSB0aGUgV2F5JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKCAnRGlzcGxheSBtb3JlIHRoYW4gb25lIHBpZWNlIG9mIGNvbnRlbnQgaW4gYSBzaW5nbGUsIGNvdmV0ZWQgc3BhY2UuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogaWNvbnMuc2xpZGVzaG93LFxuXHRcdGNhdGVnb3J5OiAnbm92YS1ieS1waXhlbGdyYWRlJyxcblx0XHQuLi5hdHRyaWJ1dGVzLFxuXHRcdGVkaXQsXG5cdFx0c2F2ZSxcblx0XHRnZXRFZGl0V3JhcHBlclByb3BzKCkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNldHRpbmdzKCk7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuYWxpZ25XaWRlID8ge1xuXHRcdFx0XHQnZGF0YS1hbGlnbic6ICdmdWxsJ1xuXHRcdFx0fSA6IHt9XG5cdFx0fSxcblx0fVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImNvbnRlbnRQYWRkaW5nXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJtZWRpdW1cIn0sXCJjb250ZW50UGFkZGluZ0N1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjUwfSxcImNvbnRlbnRXaWR0aFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZnVsbFwifSxcImNvbnRlbnRXaWR0aEN1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjEwMH0sXCJtaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjowfSxcInZlcnRpY2FsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJob3Jpem9udGFsQWxpZ25tZW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJjZW50ZXJcIn0sXCJlbmFibGVQYXJhbGxheFwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjp0cnVlfSxcInBhcmFsbGF4QW1vdW50XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCI1MFwifSxcInBhcmFsbGF4Q3VzdG9tQW1vdW50XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6NTB9LFwic2xpZGVzaG93VHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZ2FsbGVyeVwifSxcImdhbGxlcnlJbWFnZXNcIjp7XCJ0eXBlXCI6XCJhcnJheVwiLFwiZGVmYXVsdFwiOltdfSxcImNvbnRlbnRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiI0ZGRlwifSxcIm92ZXJsYXlGaWx0ZXJTdHlsZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZGFya1wifSxcIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjB9fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9zbGlkZXNob3cvYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdExheW91dFBhbmVsLFxuXHRQYXJhbGxheFBhbmVsLFxuXHRBbGlnbm1lbnRUb29sYmFyLFxuXHRDb2xvclRvb2xiYXIsXG5cdEdhbGxlcnlQcmV2aWV3LCBHYWxsZXJ5UGxhY2Vob2xkZXIsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmltcG9ydCBTbGlkZXNob3dQcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGRlZmF1bHRHYWxsZXJ5SW1hZ2VzID0gW3tcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTYwMHg5MDBcIixcblx0XCJpZFwiOiAtMSxcblx0XCJzaXplc1wiOiB7XG5cdFx0XCJ0aHVtYm5haWxcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vX25xQXBnRy1RclkvMTUweDE1MFwiXG5cdFx0fSxcblx0XHRcImxhcmdlXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL19ucUFwZ0ctUXJZLzE2MDB4OTAwXCIsXG5cdFx0XHRcIndpZHRoXCI6IDE2MDAsXG5cdFx0XHRcImhlaWdodFwiOiA5MDBcblx0XHR9XG5cdH1cbn0sIHtcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XCJhbHRcIjogXCJUaGlzIGlzIGEgY2F0Y2h5IGltYWdlIHRpdGxlXCIsXG5cdFwiY2FwdGlvblwiOiBcIkEgYnJpbGxpYW50IGNhcHRpb24gdG8gZXhwbGFpbiBpdHMgY2F0Y2hpbmVzc1wiLFxuXHRcImlkXCI6IC0yLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9HdF80aU1CN2hZMC8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufSwge1xuXHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNjAweDkwMFwiLFxuXHRcImlkXCI6IC0zLFxuXHRcInNpemVzXCI6IHtcblx0XHRcInRodW1ibmFpbFwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xdktUbndMTWRxcy8xNTB4MTUwXCJcblx0XHR9LFxuXHRcdFwibGFyZ2VcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMXZLVG53TE1kcXMvMTYwMHg5MDBcIixcblx0XHRcdFwid2lkdGhcIjogMTYwMCxcblx0XHRcdFwiaGVpZ2h0XCI6IDkwMFxuXHRcdH1cblx0fVxufV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZEluZGV4OiAwXG5cdFx0fTtcblx0fVxuXG5cdG9uUHJldkFycm93Q2xpY2soKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzOiB7IGdhbGxlcnlJbWFnZXMgfSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHNlbGVjdGVkSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSAoIHNlbGVjdGVkSW5kZXggKyBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDEgKSAlIGdhbGxlcnlJbWFnZXMubGVuZ3RoO1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgc2VsZWN0ZWRJbmRleDogbmV3SW5kZXggfSApO1xuXHR9XG5cblx0b25OZXh0QXJyb3dDbGljaygpIHtcblx0XHRjb25zdCB7IGF0dHJpYnV0ZXM6IHsgZ2FsbGVyeUltYWdlcyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgc2VsZWN0ZWRJbmRleCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBuZXdJbmRleCA9ICggc2VsZWN0ZWRJbmRleCArIDEgKSAlIGdhbGxlcnlJbWFnZXMubGVuZ3RoO1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgc2VsZWN0ZWRJbmRleDogbmV3SW5kZXggfSApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRzbGlkZXNob3dUeXBlLFxuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0XHRtaW5IZWlnaHQsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHRcdGlzU2VsZWN0ZWQsXG5cdFx0XHRjbGFzc05hbWVcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGxldCB7IHNlbGVjdGVkSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRpZiAoICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRkZWZhdWx0R2FsbGVyeUltYWdlcy5tYXAoIGltYWdlID0+IGdhbGxlcnlJbWFnZXMucHVzaCggaW1hZ2UgKSApXG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RlZEluZGV4ID49IGdhbGxlcnlJbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0c2VsZWN0ZWRJbmRleCA9IGdhbGxlcnlJbWFnZXMubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXG5cdFx0XHRcdDxTbGlkZXNob3dQcmV2aWV3XG5cdFx0XHRcdFx0eyAuLi50aGlzLnByb3BzIH1cblx0XHRcdFx0XHRwcmV2aWV3SW1hZ2U9eyBnYWxsZXJ5SW1hZ2VzWyBzZWxlY3RlZEluZGV4IF0gfVxuXHRcdFx0XHRcdG9uUHJldkFycm93Q2xpY2s9eyB0aGlzLm9uUHJldkFycm93Q2xpY2suYmluZCggdGhpcyApIH1cblx0XHRcdFx0XHRvbk5leHRBcnJvd0NsaWNrPXsgdGhpcy5vbk5leHRBcnJvd0NsaWNrLmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ25vdmEtYmxvY2tzLXNsaWRlc2hvdy10eXBlLXBhbmVsJyB9XG5cdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnU2xpZGVzaG93IFR5cGUnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBzbGlkZXNob3dUeXBlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzbGlkZXNob3dUeXBlID0+IHNldEF0dHJpYnV0ZXMoIHsgc2xpZGVzaG93VHlwZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnR2FsbGVyeScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdnYWxsZXJ5J1xuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdjdXN0b20nXG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnUHJvamVjdHMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAncHJvamVjdHMnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsgISEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEdhbGxlcnlQcmV2aWV3XG5cdFx0XHRcdFx0XHRcdGdhbGxlcnlJbWFnZXM9eyBnYWxsZXJ5SW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0b25TZWxlY3RJbWFnZT17IHNlbGVjdGVkSW5kZXggPT4geyB0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXggfSApIH0gfVxuXHRcdFx0XHRcdFx0XHRpc1NlbGVjdGVkPXsgaXNTZWxlY3RlZCB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgc2VsZWN0ZWRJbmRleCB9XG5cdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHQ8R2FsbGVyeVBsYWNlaG9sZGVyIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyA9PT0gc2xpZGVzaG93VHlwZSAmJiA8RnJhZ21lbnQ+XG5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0NvbnRlbnQgUG9zaXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdFx0XHRcdFx0PEFsaWdubWVudENvbnRyb2xzIHsgLi4ue1xuXHRcdFx0XHRcdFx0XHRcdC4uLnRoaXMucHJvcHMsXG5cdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4udGhpcy5wcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2s6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gfSAvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0XHRcdDxDb2xvclBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0hlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXHRcdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXsgbWluSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG1pbkhlaWdodCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1pbkhlaWdodCB9IClcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnQXV0bycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDBcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdIYWxmJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNTBcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdUd28gVGhpcmRzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNjZcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdUaHJlZSBRdWFydGVycycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDc1XG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnRnVsbCBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAxMDBcblx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdFx0PFBhcmFsbGF4UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblxuXHRcdFx0XHRcdHsgJ2dhbGxlcnknICE9PSBzbGlkZXNob3dUeXBlICYmIDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHR7IF9fKCAnQ29taW5nIFNvb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHRcdDxBbGlnbm1lbnRUb29sYmFyIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PENvbG9yVG9vbGJhciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L2VkaXQuanMiLCJjb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IHsgR2FsbGVyeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IHtcblx0TWVkaWFVcGxvYWQsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlc2hvd1ByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0d2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMuYmluZCggdGhpcyApICk7XG5cdFx0dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG5cdH1cblxuXHR1cGRhdGVEaW1lbnNpb25zKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGltZW5zaW9uczoge1xuXHRcdFx0XHR3aWR0aDogdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlckNvbnRlbnQoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC8vIGxheW91dFxuXHRcdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHRcdGNvbnRlbnRXaWR0aCxcblx0XHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0XHRhcHBseU1pbmltdW1IZWlnaHRCbG9jayxcblx0XHRcdFx0Ly8gYWxpZ25tZW50XG5cdFx0XHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdFx0XHRob3Jpem9udGFsQWxpZ25tZW50LFxuXHRcdFx0XHQvLyBjb2xvcnNcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdFx0Ly8gbWVkaWFcblx0XHRcdFx0Z2FsbGVyeUltYWdlc1xuXHRcdFx0fSxcblx0XHRcdHByZXZpZXdJbWFnZSxcblx0XHRcdGNsYXNzTmFtZVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IFtcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdCdub3ZhLXNsaWRlc2hvdyBpcy1yZWFkeScsXG5cdFx0XHRgbm92YS11LXZhbGlnbi0ke3ZlcnRpY2FsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LWhhbGlnbi0ke2hvcml6b250YWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtc3BhY2luZy0ke2NvbnRlbnRQYWRkaW5nfWAsXG5cdFx0XHRgbm92YS11LWNvbnRlbnQtd2lkdGgtJHtjb250ZW50V2lkdGh9YCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZGAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmQtJHtvdmVybGF5RmlsdGVyU3R5bGV9YFxuXHRcdF1cblxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdHNsaWRlc2hvdzogeyBjb2xvcjogY29udGVudENvbG9yIH0sXG5cdFx0XHRpbWFnZToge31cblx0XHR9XG5cblx0XHRpZiAoIG92ZXJsYXlGaWx0ZXJTdHlsZSAhPT0gJ25vbmUnICkge1xuXHRcdFx0c3R5bGVzLmltYWdlLm9wYWNpdHkgPSAxIC0gb3ZlcmxheUZpbHRlclN0cmVuZ3RoIC8gMTAwXG5cdFx0fVxuXG5cdFx0aWYgKCAhISBhcHBseU1pbmltdW1IZWlnaHRCbG9jayApIHtcblx0XHRcdHN0eWxlcy5zbGlkZXNob3cubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3ZoJ1xuXHRcdH1cblxuXHRcdGxldCBtYXhBc3BlY3RSYXRpbyA9IDA7XG5cdFx0bGV0IG1lZGlhTWluSGVpZ2h0ID0gMDtcblx0XHRsZXQgc2xpZGVyV2lkdGggPSAwO1xuXG5cdFx0Z2FsbGVyeUltYWdlcy5tYXAoIGltYWdlID0+IHtcblx0XHRcdGlmICggISEgaW1hZ2Uuc2l6ZXMgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2UgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2Uud2lkdGggKSB7XG5cdFx0XHRcdGNvbnN0IGFzcGVjdFJhdGlvID0gaW1hZ2Uuc2l6ZXMubGFyZ2Uud2lkdGggLyBpbWFnZS5zaXplcy5sYXJnZS5oZWlnaHQ7XG5cdFx0XHRcdG1heEFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW8gPiBtYXhBc3BlY3RSYXRpbyA/IGFzcGVjdFJhdGlvIDogbWF4QXNwZWN0UmF0aW87XG5cdFx0XHRcdG1lZGlhTWluSGVpZ2h0ID0gdGhpcy5zdGF0ZS5kaW1lbnNpb25zLndpZHRoIC8gbWF4QXNwZWN0UmF0aW87XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c3R5bGVzLnNsaWRlciA9IHtcblx0XHRcdG1pbkhlaWdodDogTWF0aC5tYXgoIG1lZGlhTWluSGVpZ2h0LCBtYXhBc3BlY3RSYXRpbyApICsgJ3B4J1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdHsgISEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IHN0eWxlPXsgc3R5bGVzLnNsaWRlc2hvdyB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX3NsaWRlclwiIHN0eWxlPXsgc3R5bGVzLnNsaWRlciB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVcIj5cblx0XHRcdFx0XHRcdFx0eyBwcmV2aWV3SW1hZ2UgJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX21lZGlhXCIgc3JjPXsgcHJldmlld0ltYWdlLnNpemVzLmxhcmdlLnVybCB9IGFsdD1cIlwiIHN0eWxlPXsgc3R5bGVzLmltYWdlIH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250ZW50IG5vdmEtdS1jb250ZW50LXBhZGRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtYWxpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57IHByZXZpZXdJbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+eyBwcmV2aWV3SW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUHJldkFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV4dEFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHR7ICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdCA8R2FsbGVyeVBsYWNlaG9sZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2Fycm93IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tcHJldiBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLWRpc2FibGVkXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIj48L2Rpdj5cblx0XHRcdFx0XHQgPC9kaXY+XG5cdFx0XHRcdCA8L0ZyYWdtZW50PiB9XG5cdFx0ICAgIDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgZGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9eyBlbCA9PiAoIHRoaXMuY29udGFpbmVyID0gZWwgKSB9PlxuXHRcdFx0XHR7IGRpbWVuc2lvbnMgJiYgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHNsaWRlc2hvd1R5cGUsXG5cdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0Ly8gYWxpZ25tZW50XG5cdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHQvLyBwYXJhbGxheFxuXHRcdFx0ZW5hYmxlUGFyYWxsYXgsXG5cdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0Ly8gY29sb3JzXG5cdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGhcblx0XHR9LFxuXHRcdGNsYXNzTmFtZSxcblx0XHRzZXRBdHRyaWJ1dGVzXG5cdH0gKSB7XG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRzbGlkZXNob3c6IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7XG5cblx0XHRcdH0sXG5cdFx0XHRjb250ZW50OiB7XG5cblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nID0gY29udGVudFBhZGRpbmdDdXN0b21cblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRXaWR0aCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuY29udGVudC5tYXhXaWR0aCA9IGAke2NvbnRlbnRXaWR0aEN1c3RvbX0lYFxuXHRcdH1cblxuXHRcdGlmICggb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgKSB7XG5cdFx0XHRzdHlsZXMuaW1hZ2Uub3BhY2l0eSA9IDEgLSBvdmVybGF5RmlsdGVyU3RyZW5ndGggLyAxMDBcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtc2xpZGVzaG93Jyxcblx0XHRcdGBub3ZhLXUtdmFsaWduLSR7dmVydGljYWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdGBub3ZhLXUtY29udGVudC13aWR0aC0ke2NvbnRlbnRXaWR0aH1gLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gLFxuXHRcdFx0J2FsaWduZnVsbCdcblx0XHRdXG5cblx0XHRpZiAoICEhIGVuYWJsZVBhcmFsbGF4ICkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKCAnbm92YS1zbGlkZXNob3ctLXBhcmFsbGF4JyApO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyYWxsYXhBbW91bnQ7XG5cdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oMSwgYWN0dWFsUGFyYWxsYXhBbW91bnQgLyAxMDAgKSwgMCApO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oICcgJyApfSBzdHlsZT17c3R5bGVzLnNsaWRlc2hvd30gZGF0YS1taW4taGVpZ2h0PXsgbWluSGVpZ2h0IH0+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fbWFza1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX3NsaWRlclwiIGRhdGEtcmVsbGF4LWFtb3VudD17IGFjdHVhbFBhcmFsbGF4QW1vdW50IH0+XG5cdFx0XHRcdFx0XHR7IGdhbGxlcnlJbWFnZXMubWFwKCBpbWFnZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2JhY2tncm91bmQgbm92YS11LWJhY2tncm91bmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19tZWRpYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXsgaW1hZ2Uuc2l6ZXMubGFyZ2UudXJsIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHN0eWxlcy5pbWFnZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS13aWR0aD17IGltYWdlLnNpemVzLmxhcmdlLndpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWhlaWdodD17IGltYWdlLnNpemVzLmxhcmdlLmhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2ZvcmVncm91bmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fY29udGVudCBub3ZhLXUtY29udGVudC1wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC1hbGlnblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+eyBpbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnsgaW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3NhdmUuanMiXSwic291cmNlUm9vdCI6IiJ9