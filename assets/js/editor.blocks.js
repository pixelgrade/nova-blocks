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

module.exports = { "default": __webpack_require__(72), __esModule: true };

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

var _defineProperty = __webpack_require__(74);

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

var _setPrototypeOf = __webpack_require__(96);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(100);

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

var _assign = __webpack_require__(103);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_options__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_controls__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alignment_controls__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__height_controls__ = __webpack_require__(133);
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
var dPs = __webpack_require__(81);
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

var _iterator = __webpack_require__(77);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(87);

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

var $at = __webpack_require__(79)(true);

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
var $iterCreate = __webpack_require__(80);
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
var arrayIndexOf = __webpack_require__(82)(false);
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

__webpack_require__(84);
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
var invoke = __webpack_require__(121);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_horizontal_alignment_toolbar__ = __webpack_require__(132);










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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scss_editor_scss__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_scss_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slideshow__ = __webpack_require__(146);







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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(71);
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
/* 70 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":75},"contentWidth":{"type":"string","default":"large"},"contentWidthCustom":{"type":"number","default":100},"horizontalAlignment":{"type":"string","default":"center"},"verticalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"enableMinHeight":{"type":"boolean","default":true},"applyMinimumHeight":{"type":"string","source":"meta","meta":"nova_hero_apply_minimum_height"},"minHeight":{"type":"number","source":"meta","meta":"nova_hero_minimum_height"},"applyMinimumHeightBlock":{"type":"boolean","default":false},"scrollIndicator":{"type":"boolean","source":"meta","meta":"nova_hero_scroll_indicator"},"scrollIndicatorBlock":{"type":"boolean","default":false},"backgroundType":{"type":"string","default":"image"},"media":{"type":"object","default":{"type":"image","sizes":{"full":{"url":"https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80","url1":"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}}},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":30},"images":{"type":"array","default":[]}}}

/***/ }),
/* 71 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls__ = __webpack_require__(155);














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
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_10__controls__["a" /* default */], null)
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(55);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 79 */
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
/* 80 */
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
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(83);
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(85);
var step = __webpack_require__(86);
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
/* 85 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
__webpack_require__(58);
__webpack_require__(94);
__webpack_require__(95);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(50);
var META = __webpack_require__(90).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(26);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(91);
var isArray = __webpack_require__(92);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(19);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(93);
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
/* 90 */
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
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 93 */
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
module.exports = __webpack_require__(1).Object.setPrototypeOf;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(99).set });


/***/ }),
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(106) });


/***/ }),
/* 106 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__padding__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__width__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__(110);
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
/* 109 */
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
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
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
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GalleryPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(113);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(48);
__webpack_require__(55);
__webpack_require__(115);
__webpack_require__(127);
__webpack_require__(128);
module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(6);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(59);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(116);
var forOf = __webpack_require__(117);
var speciesConstructor = __webpack_require__(60);
var task = __webpack_require__(61).set;
var microtask = __webpack_require__(122)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(62);
var userAgent = __webpack_require__(123);
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
  Internal.prototype = __webpack_require__(124)($Promise.prototype, {
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
__webpack_require__(125)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(126)(function (iter) {
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
/* 116 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(118);
var isArrayIter = __webpack_require__(119);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(53);
var getIterFn = __webpack_require__(120);
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
/* 118 */
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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(22);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 120 */
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
/* 121 */
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
/* 122 */
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 125 */
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
/* 126 */
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
/* 127 */
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
/* 128 */
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
/* 129 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(130);
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
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
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
/* 133 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(145);

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
/* 135 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"imageAlt":{"attribute":"alt"},"backgroundColor":{"type":"string","default":"#000"},"mediaPosition":{"default":"left"},"mediaStyle":{"default":"simple"},"contentStyle":{"default":"basic"},"blockStyle":{"default":"basic"},"backgroundType":{"type":"string","default":"transparent"},"images":{"type":"array","default":[]}}}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(137);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview__ = __webpack_require__(144);







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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(140);
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 142 */
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


			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'content-is-' + contentStyle, 'grid-is-' + mediaStyle);

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
					{ className: 'block-is-' + blockStyle + ' nova-media__inner-container' },
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
/* 145 */
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

			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'content-is-' + contentStyle, 'grid-is-' + mediaStyle, 'alignfull');

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
					{ className: 'block-is-' + blockStyle + ' nova-media__inner-container' },
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
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attributes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__attributes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(150);

/**
 * Internal dependencies
 */





/**
 * wp API
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('nova/slideshow', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
	title: __('Slideshow Me the Way', '__plugin_txtd'),
	description: __('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["h" /* slideshow */],
	category: 'nova-by-pixelgrade'
}, __WEBPACK_IMPORTED_MODULE_2__attributes_json___default.a, {
	edit: __WEBPACK_IMPORTED_MODULE_3__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = wp.data.select('core/block-editor').getSettings();
		return settings.alignWide ? {
			'data-align': 'full'
		} : {};
	}
})));

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = {"attributes":{"contentPadding":{"type":"string","default":"medium"},"contentPaddingCustom":{"type":"number","default":50},"contentWidth":{"type":"string","default":"full"},"contentWidthCustom":{"type":"number","default":100},"minHeight":{"type":"number","default":0},"verticalAlignment":{"type":"string","default":"center"},"horizontalAlignment":{"type":"string","default":"center"},"enableParallax":{"type":"boolean","default":true},"parallaxAmount":{"type":"string","default":"50"},"parallaxCustomAmount":{"type":"number","default":50},"slideshowType":{"type":"string","default":"gallery"},"galleryImages":{"type":"array","default":[]},"contentColor":{"type":"string","default":"#FFF"},"overlayFilterStyle":{"type":"string","default":"dark"},"overlayFilterStrength":{"type":"number","default":0}}}

/***/ }),
/* 148 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview__ = __webpack_require__(149);






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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__background__ = __webpack_require__(159);





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
/* 150 */
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
												{ className: 'nova-slideshow__inner-container nova-u-content-width' },
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

/* unused harmony default export */ var _unused_webpack_default_export = (Save);

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background__ = __webpack_require__(157);





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
/* 155 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(31);







var __ = wp.i18n.__;
var Component = wp.element.Component;
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
/* 156 */
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
			return _this;
		}

		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(_class, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
				window.addEventListener("resize", this.updateDimensions.bind(this));
				scrollContainer.addEventListener("scroll", this.updateDimensions.bind(this));
				this.updateDimensions();
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
				    parallaxAmount = _props$attributes.parallaxAmount,
				    parallaxCustomAmount = _props$attributes.parallaxCustomAmount;


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
/* 157 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_with_parallax__ = __webpack_require__(156);







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
/* 158 */,
/* 159 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_with_parallax__ = __webpack_require__(156);







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZmOWFmZmYyYjVkNGFhNGU2MWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbGlnbm1lbnQtY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2hlcm8vYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3BhZGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvd2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhcmFsbGF4LXBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FsbGVyeS1vcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2xvci1jb250cm9scy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWxpZ25tZW50LWNvbnRyb2xzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9jay1ob3Jpem9udGFsLWFsaWdubWVudC10b29sYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVpZ2h0LWNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9tZWRpYS9lZGl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL21lZGlhL2luc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3MvbWVkaWEvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc2xpZGVzaG93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvYXR0cmlidXRlcy5qc29uIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXNob3cvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9zYXZlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2hlcm8vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy93aXRoLXBhcmFsbGF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9oZXJvL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NsaWRlc2hvdy9iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIndwIiwiY29tcG9uZW50cyIsIlNWRyIsIlBhdGgiLCJub3ZhIiwiaGVybyIsIm1lZGlhIiwic2xpZGVzaG93IiwiYWxpZ25Cb3R0b20iLCJhbGlnbkNlbnRlciIsImFsaWduVG9wIiwiYWxpZ25tZW50IiwiaW52ZXJ0Iiwic3dhcCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiYmxvY2tFZGl0b3IiLCJEcm9wZG93biIsIkljb25CdXR0b24iLCJQYW5lbFJvdyIsIlRvb2xiYXIiLCJBbGlnbm1lbnRUb29sYmFyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJpY29ucyIsIm9uQ2xvc2UiLCJwcm9wcyIsIkFsaWdubWVudENvbnRyb2xzIiwiYXR0cmlidXRlcyIsImFwcGx5TWluaW11bUhlaWdodEJsb2NrIiwiaG9yaXpvbnRhbEFsaWdubWVudCIsInZlcnRpY2FsQWxpZ25tZW50Iiwic2V0QXR0cmlidXRlcyIsImRhdGEiLCJzZWxlY3QiLCJnZXRTZWxlY3RlZEJsb2NrIiwiaW5uZXJCbG9ja3MiLCJtYXAiLCJkaXNwYXRjaCIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImJsb2NrIiwiY2xpZW50SWQiLCJhbGlnbiIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiSW5uZXJCbG9ja3MiLCJ0aXRsZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiZWRpdCIsInNhdmUiLCJnZXRFZGl0V3JhcHBlclByb3BzIiwic2V0dGluZ3MiLCJnZXRTZXR0aW5ncyIsImFsaWduV2lkZSIsIkluc3BlY3RvckNvbnRyb2xzIiwiQnV0dG9uIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlJhZGlvQ29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJlZGl0b3JEYXRhIiwidXBkYXRlQmxvY2tzIiwiZ2V0QmxvY2tzIiwiZmlsdGVyIiwibmFtZSIsImhlcm9CbG9ja0luZGV4IiwiYXBwbHlNaW5pbXVtSGVpZ2h0Iiwic2Nyb2xsSW5kaWNhdG9yIiwic2Nyb2xsSW5kaWNhdG9yQmxvY2siLCJibG9ja0luZGV4IiwiZmluZEluZGV4IiwidGVzdEJsb2NrIiwiYmxvY2tMaXN0IiwiZGVib3VuY2VkT25TdWJzY3JpYmUiLCJuZXdCbG9ja0xpc3QiLCJibG9ja0xpc3RDaGFuZ2VkIiwibGVuZ3RoIiwic29tZSIsImluZGV4Iiwic3Vic2NyaWJlIiwiRWRpdCIsInBvc2l0aW9uSW5kaWNhdG9yIiwiTGF5b3V0UGFuZWwiLCJjaGlsZHJlbiIsIkJ1dHRvbkdyb3VwIiwiUmFuZ2VDb250cm9sIiwiUGFkZGluZ0NvbnRyb2xzIiwiY29udGVudFBhZGRpbmciLCJjb250ZW50UGFkZGluZ0N1c3RvbSIsImNvbnRlbnRQYWRkaW5nT3B0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJXaWR0aENvbnRyb2xzIiwiY29udGVudFdpZHRoIiwiY29udGVudFdpZHRoQ3VzdG9tIiwiY29udGVudFdpZHRoT3B0aW9ucyIsIlBhcmFsbGF4UGFuZWwiLCJlbmFibGVQYXJhbGxheCIsInBhcmFsbGF4QW1vdW50IiwicGFyYWxsYXhDdXN0b21BbW91bnQiLCJwYXJzZUludCIsIkZvcm1GaWxlVXBsb2FkIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVBsYWNlaG9sZGVyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkdhbGxlcnlQbGFjZWhvbGRlciIsImdhbGxlcnlJbWFnZXMiLCJwcm9taXNlcyIsImltYWdlIiwiYXBpUmVxdWVzdCIsInBhdGgiLCJpZCIsInRoZW4iLCJuZXdJbWFnZSIsImFsbCIsInNpemVzIiwibGFyZ2UiLCJ1cmwiLCJzZWxlY3RlZCIsIm9uU2VsZWN0SW1hZ2UiLCJvbkNoYW5nZSIsImhhc0ltYWdlcyIsImluc3RydWN0aW9ucyIsIm9uQ2hhbmdlR2FsbGVyeSIsImJpbmQiLCJ1bmRlZmluZWQiLCJHYWxsZXJ5UHJldmlldyIsImlzU2VsZWN0ZWQiLCJpbWciLCJjbGFzc2VzIiwicHVzaCIsImpvaW4iLCJ0aHVtYm5haWwiLCJDb2xvclBhbGV0dGUiLCJQYW5lbENvbG9yU2V0dGluZ3MiLCJjb2xvcnMiLCJjb2xvciIsIk92ZXJsYXlDb250cm9scyIsIm92ZXJsYXlGaWx0ZXJTdHlsZSIsIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aCIsIkNvbG9yQ29udHJvbHMiLCJjb250ZW50Q29sb3IiLCJDb2xvclBhbmVsIiwiQ29sb3JUb29sYmFyIiwid2l0aFZpZXdwb3J0TWF0Y2giLCJ2aWV3cG9ydCIsIndpdGhTZWxlY3QiLCJjb21wb3NlIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjcmVhdGVDb250ZXh0IiwiZm9jdXNlZEVsZW1lbnQiLCJzZXRGb2N1c2VkRWxlbWVudCIsIkNvbnN1bWVyIiwiUHJvdmlkZXIiLCJCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiREVGQVVMVF9DT05UUk9MUyIsIkRFRkFVTFRfQ09OVFJPTCIsIkJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIiLCJpc0NvbGxhcHNlZCIsImNvbnRyb2xzIiwiYXBwbHlPclVuc2V0IiwiYWN0aXZlQWxpZ25tZW50IiwiZGVmYXVsdEFsaWdubWVudENvbnRyb2wiLCJjb250cm9sIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwid2l0aEJsb2NrRWRpdENvbnRleHQiLCJtYXBDb250ZXh0VG9Qcm9wcyIsIk9yaWdpbmFsQ29tcG9uZW50IiwiaXNMYXJnZVZpZXdwb3J0IiwiZ2V0QmxvY2tSb290Q2xpZW50SWQiLCJoYXNGaXhlZFRvb2xiYXIiLCJIZWlnaHRQYW5lbCIsIm1pbkhlaWdodCIsIlNjcm9sbEluZGljYXRvclBhbmVsIiwiaGVyb0Jsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImRpc3BsYXkiLCJpbWFnZXMiLCJhbHQiLCJ1cGRhdGVJbWFnZXMiLCJCbG9ja0NvbnRyb2xzIiwiQ29udHJvbHMiLCJtZWRpYVBvc2l0aW9uIiwiSlNPTiIsInBhcnNlIiwiTUVESUFfQUxJR05NRU5UU19DT05UUk9MUyIsInRvb2xiYXJDb250cm9scyIsIm9wZW4iLCJJbnNwZWN0b3IiLCJtZWRpYVN0eWxlIiwiY29udGVudFN0eWxlIiwiYmxvY2tTdHlsZSIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJjb250ZW50IiwibGV2ZWwiLCJ0ZXh0IiwiTWVkaWFQcmV2aWV3IiwiY2xhc3NOYW1lcyIsImNsYXNzbmFtZXMiLCJkaXNwbGF5SW1hZ2VzIiwiU2F2ZSIsImRlZmF1bHRHYWxsZXJ5SW1hZ2VzIiwic3RhdGUiLCJzZWxlY3RlZEluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsInNsaWRlc2hvd1R5cGUiLCJvblByZXZBcnJvd0NsaWNrIiwib25OZXh0QXJyb3dDbGljayIsIlNsaWRlc2hvd1ByZXZpZXciLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVEaW1lbnNpb25zIiwiZGltZW5zaW9ucyIsIndpZHRoIiwiY29udGFpbmVyIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJwcmV2aWV3SW1hZ2UiLCJzdHlsZXMiLCJtYXhBc3BlY3RSYXRpbyIsIm1lZGlhTWluSGVpZ2h0Iiwic2xpZGVyV2lkdGgiLCJhc3BlY3RSYXRpbyIsInNsaWRlciIsIk1hdGgiLCJtYXgiLCJjYXB0aW9uIiwiZWwiLCJyZW5kZXJDb250ZW50IiwiZm9yZWdyb3VuZCIsInBhZGRpbmciLCJtYXhXaWR0aCIsIm9wYWNpdHkiLCJhY3R1YWxQYXJhbGxheEFtb3VudCIsIm1pbiIsIkhlcm9QcmV2aWV3IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJIZXJvQmxvY2tDb250cm9scyIsIndpdGhQYXJhbGxheCIsIldyYXBwZWRDb21wb25lbnQiLCJwcm9ncmVzcyIsInNjcm9sbENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRhaW5lckJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJhY3R1YWxQcm9ncmVzcyIsInNjcm9sbFRvcCIsInRvcCIsIm5ld0hlaWdodCIsInNjYWxlIiwib2Zmc2V0WSIsIm1vdmUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiZ2V0UGFyYWxsYXhTdHlsZXMiLCJIZXJvQmFja2dyb3VuZCIsInN0eWxlIiwidHlwZSIsImZ1bGwiLCJTbGlkZXNob3dCYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxFQUE0QyxzQjs7Ozs7O0FDQWxGLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7O0FDRDFCOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1JhOztBQUViOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLEVBQW1DOztBQUVqRTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7OztBQzFCWTs7QUFFYjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsRUFBbUI7O0FBRTFDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7QUNoQmE7O0FBRWI7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMsRUFBb0M7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dEc7QUFERCxJQUREO0FBS0E7Ozs7RUFwQmdDNU4sUzs7QUF1Qm5CaVAsMklBQVlBLENBQUV1QixtQkFBZCxDQUFmLEUiLCJmaWxlIjoiLi9hc3NldHMvanMvZWRpdG9yLmJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNmY5YWZmZjJiNWQ0YWE0ZTYxZCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjknIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBTVkcsIFBhdGggfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBjb25zdCBub3ZhID0gKFxuICAgIDxzdmcgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMThDMCA4LjA1ODg4IDguMDU4ODggMCAxOCAwQzI3Ljk0MTEgMCAzNiA4LjA1ODg4IDM2IDE4QzM2IDI3Ljk0MTEgMjcuOTQxMSAzNiAxOCAzNkM4LjA1ODg4IDM2IDAgMjcuOTQxMSAwIDE4Wk0xMi4wMzk4IDE0QzEyLjQwNjkgMTAuNjI2IDE1LjI2NTIgOCAxOC43MzY4IDhIMjAuNDIxMUMyNC42MDY4IDggMjggMTEuMzkzMiAyOCAxNS41Nzg5VjE2LjM4MUMyOCAyMC4zODA5IDI0LjkxNzcgMjMuNjYwOSAyMC45OTg3IDIzLjk3NTNDMjAuOTk5NiAyMy45MzI0IDIxIDIzLjg4OTMgMjEgMjMuODQ2MlYyMS4yNzI3QzIxIDE3LjI1NjEgMTcuNzQzOSAxNCAxMy43MjczIDE0SDEyLjAzOThaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAyMS4yODU3QzggMTguOTE4OCA5LjkxODc4IDE3IDEyLjI4NTcgMTdIMTMuNDU0NUMxNS45NjQ5IDE3IDE4IDE5LjAzNTEgMTggMjEuNTQ1NVYyMy4xNTM4QzE4IDI1LjI3OCAxNi4yNzggMjcgMTQuMTUzOCAyN0gxMy43MTQzQzEwLjU1ODQgMjcgOCAyNC40NDE2IDggMjEuMjg1N1pcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBoZXJvID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8bWFzayBpZD1cIm1hc2swXCIgbWFzay10eXBlPVwiYWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJ4PVwiMTJcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBaTTQgOC40OTEyM0M0IDYuMDEwNzkgNy4wMTYxOSA0IDEwLjczNjggNEgxMS42MTlDMTYuMjQ3NyA0IDIwIDYuNTAxNTIgMjAgOS41ODczQzIwIDEyLjM5MjYgMTYuNTg4OCAxNC42NjY3IDEyLjM4MSAxNC42NjY3SDExLjU3ODlDNy4zOTMyMSAxNC42NjY3IDQgMTIuNDA0NSA0IDkuNjE0MDNWOC40OTEyM1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyAxOC43MTQzQzcgMTkuNDI0NCA3LjU3NTYzIDIwIDguMjg1NzEgMjBIMTUuNUMxNi4zMjg0IDIwIDE3IDE5LjMyODQgMTcgMTguNVYxOC41QzE3IDE3LjY3MTYgMTYuMzI4NCAxNyAxNS41IDE3SDguNzE0MjlDNy43Njc1MSAxNyA3IDE3Ljc2NzUgNyAxOC43MTQzVjE4LjcxNDNaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBtZWRpYSA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJwYXRoLTEtb3V0c2lkZS0xXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiLTJcIiB5PVwiLTJcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBmaWxsPVwiYmxhY2tcIj5cbiAgICAgICAgICAgIDxyZWN0IGZpbGw9XCJ3aGl0ZVwiIHg9XCItMlwiIHk9XCItMlwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTggMEM4LjA1ODg4IDAgMCA4LjA1ODg4IDAgMThDMCAyNy45NDExIDguMDU4ODggMzYgMTggMzZDMjcuOTQxMSAzNiAzNiAyNy45NDExIDM2IDE4QzM2IDguMDU4ODggMjcuOTQxMSAwIDE4IDBaTTIzLjQ3MzcgMjVDMjAuNDUwNyAyNSAxOCAyMi41NDkzIDE4IDE5LjUyNjNWMTguODA5NUMxOCAxNS4wNDg3IDIxLjA0ODcgMTIgMjQuODA5NSAxMkMyOC4yMjg0IDEyIDMxIDE0Ljc3MTYgMzEgMTguMTkwNVYxOC44NDIxQzMxIDIyLjI0MyAyOC4yNDMgMjUgMjQuODQyMSAyNUgyMy40NzM3WlwiLz5cbiAgICAgICAgPC9tYXNrPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4IDBDOC4wNTg4OCAwIDAgOC4wNTg4OCAwIDE4QzAgMjcuOTQxMSA4LjA1ODg4IDM2IDE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg4IDI3Ljk0MTEgMCAxOCAwWk0yMy40NzM3IDI1QzIwLjQ1MDcgMjUgMTggMjIuNTQ5MyAxOCAxOS41MjYzVjE4LjgwOTVDMTggMTUuMDQ4NyAyMS4wNDg3IDEyIDI0LjgwOTUgMTJDMjguMjI4NCAxMiAzMSAxNC43NzE2IDMxIDE4LjE5MDVWMTguODQyMUMzMSAyMi4yNDMgMjguMjQzIDI1IDI0Ljg0MjEgMjVIMjMuNDczN1pcIiBmaWxsPVwiIzY1NjVGMlwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yIDE4QzIgOS4xNjM0NCA5LjE2MzQ0IDIgMTggMlYtMkM2Ljk1NDMxIC0yIC0yIDYuOTU0MzEgLTIgMThIMlpNMTggMzRDOS4xNjM0NCAzNCAyIDI2LjgzNjYgMiAxOEgtMkMtMiAyOS4wNDU3IDYuOTU0MzEgMzggMTggMzhWMzRaTTM0IDE4QzM0IDI2LjgzNjYgMjYuODM2NiAzNCAxOCAzNFYzOEMyOS4wNDU3IDM4IDM4IDI5LjA0NTcgMzggMThIMzRaTTE4IDJDMjYuODM2NiAyIDM0IDkuMTYzNDQgMzQgMThIMzhDMzggNi45NTQzMSAyOS4wNDU3IC0yIDE4IC0yVjJaTTE2IDE5LjUyNjNDMTYgMjMuNjUzOSAxOS4zNDYxIDI3IDIzLjQ3MzcgMjdWMjNDMjEuNTU1MiAyMyAyMCAyMS40NDQ4IDIwIDE5LjUyNjNIMTZaTTE2IDE4LjgwOTVWMTkuNTI2M0gyMFYxOC44MDk1SDE2Wk0yNC44MDk1IDEwQzE5Ljk0NDIgMTAgMTYgMTMuOTQ0MiAxNiAxOC44MDk1SDIwQzIwIDE2LjE1MzMgMjIuMTUzMyAxNCAyNC44MDk1IDE0VjEwWk0zMyAxOC4xOTA1QzMzIDEzLjY2NyAyOS4zMzMgMTAgMjQuODA5NSAxMFYxNEMyNy4xMjM5IDE0IDI5IDE1Ljg3NjEgMjkgMTguMTkwNUgzM1pNMzMgMTguODQyMVYxOC4xOTA1SDI5VjE4Ljg0MjFIMzNaTTI0Ljg0MjEgMjdDMjkuMzQ3NiAyNyAzMyAyMy4zNDc2IDMzIDE4Ljg0MjFIMjlDMjkgMjEuMTM4NCAyNy4xMzg0IDIzIDI0Ljg0MjEgMjNWMjdaTTIzLjQ3MzcgMjdIMjQuODQyMVYyM0gyMy40NzM3VjI3WlwiIGZpbGw9XCJ3aGl0ZVwiIG1hc2s9XCJ1cmwoI3BhdGgtMS1vdXRzaWRlLTEpXCIvPlxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDMwQzguNjg2MjkgMzAgNiAyNy4zMTM3IDYgMjRWMTRDNiA5LjU4MTcyIDkuNTgxNzIgNiAxNCA2SDE2QzE4LjcyOCA2IDIwLjk0NTggOC4xODQ3NSAyMC45OTkgMTAuOUMxOC4wMzg4IDEyLjM0NzEgMTYgMTUuMzg3OCAxNiAxOC45MDQ4VjE5Ljg0MjFDMTYgMjIuOTQ4NCAxNy45Nzg2IDI1LjU5MjUgMjAuNzQ0MyAyNi41ODI5QzIwLjA4MjEgMjguNTY4NSAxOC4yMDgyIDMwIDE2IDMwSDEyWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlc2hvdyA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPG1hc2sgaWQ9XCJtYXNrMFwiIG1hc2stdHlwZT1cImFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByeD1cIjEyXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgIDwvbWFzaz5cbiAgICAgICAgPGcgbWFzaz1cInVybCgjbWFzazApXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwVjBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJWMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0VjI0QzUuMzcyNTggMjQgMCAxOC42Mjc0IDAgMTJWMTJaXCIgZmlsbD1cIiM2NTY1RjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjM5ODIgOC45OTI4M0MxNy44ODMxIDkuMzkyODIgMTcuODgzMSAxMC4xMzU4IDE3LjM5ODIgMTAuNTM1N0wxNC45NjczIDEyLjU0MDdDMTQuMzE1IDEzLjA3ODcgMTMuMzMxIDEyLjYxNDcgMTMuMzMxIDExLjc2OTJWNy43NTkzM0MxMy4zMzEgNi45MTM4NiAxNC4zMTUgNi40NDk5MiAxNC45NjczIDYuOTg3ODhMMTcuMzk4MiA4Ljk5MjgzWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi42MDE4NCA4Ljk5MjgzQzYuMTE2ODkgOS4zOTI4MiA2LjExNjg5IDEwLjEzNTggNi42MDE4NCAxMC41MzU3TDkuMDMyNzIgMTIuNTQwN0M5LjY4NDk2IDEzLjA3ODcgMTAuNjY5IDEyLjYxNDcgMTAuNjY5IDExLjc2OTJWNy43NTkzM0MxMC42NjkgNi45MTM4NiA5LjY4NDk2IDYuNDQ5OTIgOS4wMzI3MiA2Ljk4Nzg4TDYuNjAxODQgOC45OTI4M1pcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTguMjc1MUM3IDE4LjgwMzMgNy40MjgxOCAxOS4yMzE0IDcuOTU2MzcgMTkuMjMxNEg4LjIxNzJDOC43Nzc0IDE5LjIzMTQgOS4yMzE1NCAxOC43NzczIDkuMjMxNTQgMTguMjE3MVYxNy44NTgyQzkuMjMxNTQgMTcuMzg0MiA4Ljg0NzI3IDE2Ljk5OTkgOC4zNzMyNSAxNi45OTk5SDguMjc1MTdDNy41NzA5MSAxNi45OTk5IDcgMTcuNTcwOCA3IDE4LjI3NTFWMTguMjc1MVpcIiBmaWxsPVwiI0ZGRTQyRVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNzE5MiAxOC4yNzUxQzEwLjcxOTIgMTguODAzMyAxMS4xNDc0IDE5LjIzMTQgMTEuNjc1NiAxOS4yMzE0SDExLjkzNjRDMTIuNDk2NiAxOS4yMzE0IDEyLjk1MDggMTguNzc3MyAxMi45NTA4IDE4LjIxNzFWMTcuODU4MkMxMi45NTA4IDE3LjM4NDIgMTIuNTY2NSAxNi45OTk5IDEyLjA5MjUgMTYuOTk5OUgxMS45OTQ0QzExLjI5MDEgMTYuOTk5OSAxMC43MTkyIDE3LjU3MDggMTAuNzE5MiAxOC4yNzUxVjE4LjI3NTFaXCIgZmlsbD1cIiNGRkU0MkVcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjQzODUgMTguMjc1MUMxNC40Mzg1IDE4LjgwMzMgMTQuODY2NyAxOS4yMzE0IDE1LjM5NDggMTkuMjMxNEgxNS42NTU3QzE2LjIxNTkgMTkuMjMxNCAxNi42NyAxOC43NzczIDE2LjY3IDE4LjIxNzFWMTcuODU4MkMxNi42NyAxNy4zODQyIDE2LjI4NTcgMTYuOTk5OSAxNS44MTE3IDE2Ljk5OTlIMTUuNzEzNkMxNS4wMDk0IDE2Ljk5OTkgMTQuNDM4NSAxNy41NzA4IDE0LjQzODUgMTguMjc1MVYxOC4yNzUxWlwiIGZpbGw9XCIjRkZFNDJFXCIvPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBhbGlnbkJvdHRvbSA9IChcbiAgICA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+XG4gICAgICAgIDxQYXRoIGQ9XCJNMTYgMTNoLTNWM2gtMnYxMEg4bDQgNCA0LTR6TTQgMTl2MmgxNnYtMkg0elwiIC8+XG4gICAgPC9TVkc+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxpZ25DZW50ZXIgPSAoXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPlxuICAgICAgICA8UGF0aCBkPVwiTTggMTloM3Y0aDJ2LTRoM2wtNC00LTQgNHptOC0xNGgtM1YxaC0ydjRIOGw0IDQgNC00ek00IDExdjJoMTZ2LTJINHpcIlxuICAgICAgICAvPlxuICAgIDwvU1ZHPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsaWduVG9wID0gKFxuICAgIDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz5cbiAgICAgICAgPFBhdGggZD1cIk04IDExaDN2MTBoMlYxMWgzbC00LTQtNCA0ek00IDN2MmgxNlYzSDR6XCIgLz5cbiAgICA8L1NWRz5cbik7XG5cbmV4cG9ydCBjb25zdCBhbGlnbm1lbnQgPSAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTUuNTQgNS41NEwxMy43NyA3LjNMMTIgNS41NEwxMC4yMyA3LjNMOC40NiA1LjU0TDEyIDJMMTUuNTQgNS41NFpNMTguNDYgMTUuNTRMMTYuNyAxMy43N0wxOC40NiAxMkwxNi43IDEwLjIzTDE4LjQ2IDguNDZMMjIgMTJMMTguNDYgMTUuNTRaTTguNDYgMTguNDZMMTAuMjMgMTYuN0wxMiAxOC40NkwxMy43NyAxNi43TDE1LjU0IDE4LjQ2TDEyIDIyTDguNDYgMTguNDZaTTUuNTQgOC40Nkw3LjMgMTAuMjNMNS41NCAxMkw3LjMgMTMuNzdMNS41NCAxNS41NEwyIDEyTDUuNTQgOC40NlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDE1QzEzLjY1NjkgMTUgMTUgMTMuNjU2OSAxNSAxMkMxNSAxMC4zNDMxIDEzLjY1NjkgOSAxMiA5QzEwLjM0MzEgOSA5IDEwLjM0MzEgOSAxMkM5IDEzLjY1NjkgMTAuMzQzMSAxNSAxMiAxNVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IGludmVydCA9IChcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0yMCAxNS4zMDk5TDIzLjMxIDExLjk5OTlMMjAgOC42ODk5NFYzLjk5OTk0SDE1LjMxTDEyIDAuNjg5OTQxTDguNjkgMy45OTk5NEg0VjguNjg5OTRMMC42OTAwMDIgMTEuOTk5OUw0IDE1LjMwOTlWMTkuOTk5OUg4LjY5TDEyIDIzLjMwOTlMMTUuMzEgMTkuOTk5OUgyMFYxNS4zMDk5Wk0xMiAxNy45OTk5VjUuOTk5OTRDMTUuMzEgNS45OTk5NCAxOCA4LjY4OTk0IDE4IDExLjk5OTlDMTggMTUuMzA5OSAxNS4zMSAxNy45OTk5IDEyIDE3Ljk5OTlaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBzd2FwID0gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIi0yIC0yIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTcgM0gxMkMxMS40NDc3IDMgMTEgMy40NDc3MiAxMSA0VjdDMTEgNy41NTIyOCAxMS40NDc3IDggMTIgOEgxN0MxNy41NTIzIDggMTggNy41NTIyOCAxOCA3VjRDMTggMy40NDc3MiAxNy41NTIzIDMgMTcgM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTggMTJIM0MyLjQ0NzcyIDEyIDIgMTIuNDQ3NyAyIDEzVjE2QzIgMTYuNTUyMyAyLjQ0NzcyIDE3IDMgMTdIOEM4LjU1MjI4IDE3IDkgMTYuNTUyMyA5IDE2VjEzQzkgMTIuNDQ3NyA4LjU1MjI4IDEyIDggMTJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMyAxMkgxNEMxNCAxMi43OTU2IDEzLjY4MzkgMTMuNTU4NyAxMy4xMjEzIDE0LjEyMTNDMTIuNTU4NyAxNC42ODM5IDExLjc5NTYgMTUgMTEgMTVWMTdDMTIuMzI2MSAxNyAxMy41OTc5IDE2LjQ3MzIgMTQuNTM1NSAxNS41MzU1QzE1LjQ3MzIgMTQuNTk3OSAxNiAxMy4zMjYxIDE2IDEySDE3TDE1IDlMMTMgMTJaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPHBhdGggZD1cIk00IDhIM0w1IDExTDcgOEg2QzYgNy4yMDQzNSA2LjMxNjA3IDYuNDQxMjkgNi44Nzg2OCA1Ljg3ODY4QzcuNDQxMjkgNS4zMTYwNyA4LjIwNDM1IDUgOSA1VjNDNy42NzM5MiAzIDYuNDAyMTUgMy41MjY3OCA1LjQ2NDQ3IDQuNDY0NDdDNC41MjY3OCA1LjQwMjE1IDQgNi42NzM5MiA0IDhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaWNvbnMuanMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQpID0+IHtcblx0bGV0IHRpbWVvdXQgPSBudWxsO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XG5cdFx0Y29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuXHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy91dGlscy5qcyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBMYXlvdXRQYW5lbCBmcm9tICcuL2xheW91dC1wYW5lbCc7XG5pbXBvcnQgUGFyYWxsYXhQYW5lbCBmcm9tICcuL3BhcmFsbGF4LXBhbmVsJztcblxuaW1wb3J0IHtcblx0R2FsbGVyeVByZXZpZXcsXG5cdEdhbGxlcnlQbGFjZWhvbGRlcixcbn0gZnJvbSAnLi9nYWxsZXJ5LW9wdGlvbnMnO1xuXG5pbXBvcnQge1xuXHRDb2xvckNvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRDb2xvclRvb2xiYXIsXG5cdE92ZXJsYXlDb250cm9sc1xufSBmcm9tICcuL2NvbG9yLWNvbnRyb2xzJztcblxuaW1wb3J0IHtcblx0QWxpZ25tZW50Q29udHJvbHMsXG5cdEFsaWdubWVudFRvb2xiYXJcbn0gZnJvbSAnLi9hbGlnbm1lbnQtY29udHJvbHMnO1xuXG5pbXBvcnQge1xuXHRIZWlnaHRQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWxcbn0gZnJvbSAnLi9oZWlnaHQtY29udHJvbHMnO1xuXG5leHBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0Q29sb3JUb29sYmFyLFxuXHRHYWxsZXJ5UHJldmlldyxcblx0R2FsbGVyeVBsYWNlaG9sZGVyLFxuXHRIZWlnaHRQYW5lbCxcblx0TGF5b3V0UGFuZWwsXG5cdE92ZXJsYXlDb250cm9scyxcblx0UGFyYWxsYXhQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWwsXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2Jsb2Nrcy9pY29uc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyIGZyb20gJy4uL2Jsb2NrLWhvcml6b250YWwtYWxpZ25tZW50LXRvb2xiYXInO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdERyb3Bkb3duLFxuXHRJY29uQnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0VG9vbGJhcixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jbGFzcyBBbGlnbm1lbnRUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuYWxpZ25tZW50IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb250ZW50IGFsaWdubWVudCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXI+XG5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgQWxpZ25tZW50Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHRcdHZlcnRpY2FsQWxpZ25tZW50XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdDxzcGFuPnsgX18oICdIb3Jpem9udGFsJywgJ19fcGx1Z2luX3R4dGQnICkgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8QmxvY2tIb3Jpem9udGFsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e2hvcml6b250YWxBbGlnbm1lbnR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aG9yaXpvbnRhbEFsaWdubWVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdHdwLmRhdGEuc2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpLmdldFNlbGVjdGVkQmxvY2soKS5pbm5lckJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwgeyBhbGlnbjogaG9yaXpvbnRhbEFsaWdubWVudCB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBob3Jpem9udGFsQWxpZ25tZW50IH0gKVxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHR7IGFwcGx5TWluaW11bUhlaWdodEJsb2NrICYmIDxQYW5lbFJvdz5cblx0XHRcdFx0XHQ8c3Bhbj57IF9fKCAnVmVydGljYWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9PC9zcGFuPlxuXHRcdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZlcnRpY2FsQWxpZ25tZW50ID0+IHNldEF0dHJpYnV0ZXMoIHt2ZXJ0aWNhbEFsaWdubWVudH0gKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsUm93PiB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQge1xuXHRBbGlnbm1lbnRDb250cm9scyxcblx0QWxpZ25tZW50VG9vbGJhcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9pbmRleC5qcyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL2VkaXRvci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vaGVyb1wiO1xuaW1wb3J0IFwiLi9tZWRpYVwiO1xuaW1wb3J0IFwiLi9zbGlkZXNob3dcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIGljb25zIGZyb20gJy4uL2ljb25zJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcy5qc29uJztcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XG5cbi8qKlxuICogd3AgQVBJXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXG59ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCAnbm92YS9oZXJvJyxcblx0e1xuXHRcdHRpdGxlOiBfXyggJ0hlcm8gb2YgdGhlIEdhbGF4eScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGljb246IGljb25zLmhlcm8sXG5cdFx0ZGVzY3JpcHRpb246IF9fKCAnQSBncmVhdCB3YXkgdG8gZ2V0IHlvdXIgdmlzaXRvcnMgYWNxdWFpbnRlZCB3aXRoIHlvdXIgY29udGVudC4nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRjYXRlZ29yeTogXCJub3ZhLWJ5LXBpeGVsZ3JhZGVcIixcblx0XHRlZGl0LFxuXHRcdHNhdmUoKSB7XG5cdFx0XHRyZXR1cm4gPElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdH0sXG5cdFx0Z2V0RWRpdFdyYXBwZXJQcm9wcygpIHtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmFsaWduV2lkZSA/IHtcblx0XHRcdFx0J2RhdGEtYWxpZ24nOiAnZnVsbCdcblx0XHRcdH0gOiB7fVxuXHRcdH0sXG5cdH1cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvaGVyby9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wiYXR0cmlidXRlc1wiOntcImNvbnRlbnRQYWRkaW5nXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCJtZWRpdW1cIn0sXCJjb250ZW50UGFkZGluZ0N1c3RvbVwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjc1fSxcImNvbnRlbnRXaWR0aFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwibGFyZ2VcIn0sXCJjb250ZW50V2lkdGhDdXN0b21cIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjoxMDB9LFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwidmVydGljYWxBbGlnbm1lbnRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcImNlbnRlclwifSxcImVuYWJsZVBhcmFsbGF4XCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOnRydWV9LFwicGFyYWxsYXhBbW91bnRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIjUwXCJ9LFwicGFyYWxsYXhDdXN0b21BbW91bnRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjo1MH0sXCJlbmFibGVNaW5IZWlnaHRcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJhcHBseU1pbmltdW1IZWlnaHRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX2FwcGx5X21pbmltdW1faGVpZ2h0XCJ9LFwibWluSGVpZ2h0XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJzb3VyY2VcIjpcIm1ldGFcIixcIm1ldGFcIjpcIm5vdmFfaGVyb19taW5pbXVtX2hlaWdodFwifSxcImFwcGx5TWluaW11bUhlaWdodEJsb2NrXCI6e1widHlwZVwiOlwiYm9vbGVhblwiLFwiZGVmYXVsdFwiOmZhbHNlfSxcInNjcm9sbEluZGljYXRvclwiOntcInR5cGVcIjpcImJvb2xlYW5cIixcInNvdXJjZVwiOlwibWV0YVwiLFwibWV0YVwiOlwibm92YV9oZXJvX3Njcm9sbF9pbmRpY2F0b3JcIn0sXCJzY3JvbGxJbmRpY2F0b3JCbG9ja1wiOntcInR5cGVcIjpcImJvb2xlYW5cIixcImRlZmF1bHRcIjpmYWxzZX0sXCJiYWNrZ3JvdW5kVHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiaW1hZ2VcIn0sXCJtZWRpYVwiOntcInR5cGVcIjpcIm9iamVjdFwiLFwiZGVmYXVsdFwiOntcInR5cGVcIjpcImltYWdlXCIsXCJzaXplc1wiOntcImZ1bGxcIjp7XCJ1cmxcIjpcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ5NjMxOTk4LTZkNTU0YjE0MDJhZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTYwMCZxPTgwXCIsXCJ1cmwxXCI6XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODA2NjAwMDcxNC01OGM0NWYxYTJjMGE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MFwifX19fSxcImNvbnRlbnRDb2xvclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiI0ZGRlwifSxcIm92ZXJsYXlGaWx0ZXJTdHlsZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiZGFya1wifSxcIm92ZXJsYXlGaWx0ZXJTdHJlbmd0aFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjMwfSxcImltYWdlc1wiOntcInR5cGVcIjpcImFycmF5XCIsXCJkZWZhdWx0XCI6W119fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9oZXJvL2F0dHJpYnV0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBpY29ucyBmcm9tICcuLi9pY29ucyc7XG5cbmltcG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRIZWlnaHRQYW5lbCxcblx0TGF5b3V0UGFuZWwsXG5cdENvbG9yQ29udHJvbHMsXG5cdENvbG9yUGFuZWwsXG5cdE92ZXJsYXlDb250cm9scyxcblx0UGFyYWxsYXhQYW5lbCxcblx0U2Nyb2xsSW5kaWNhdG9yUGFuZWwsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmltcG9ydCBIZXJvUHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuaW1wb3J0IEhlcm9CbG9ja0NvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0RHJvcGRvd24sXG5cdEljb25CdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFNlbGVjdENvbnRyb2wsXG5cdFJhZGlvQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBlZGl0b3JEYXRhID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblxuY29uc3QgdXBkYXRlQmxvY2tzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRjb25zdCBibG9ja3MgPSBlZGl0b3JEYXRhLmdldEJsb2NrcygpO1xuXG5cdGJsb2Nrcy5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRyZXR1cm4gYmxvY2submFtZSA9PT0gJ25vdmEvaGVybyc7XG5cdH0gKS5maWx0ZXIoICggYmxvY2ssIGhlcm9CbG9ja0luZGV4ICkgPT4ge1xuXHRcdGNvbnN0IHsgYXBwbHlNaW5pbXVtSGVpZ2h0LCBzY3JvbGxJbmRpY2F0b3IgfSA9IHsgLi4uYmxvY2suYXR0cmlidXRlcywgLi4uYXR0cmlidXRlcyB9O1xuXHRcdGNvbnN0IGFwcGx5TWluaW11bUhlaWdodEJsb2NrID0gYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnZmlyc3QnICYmIGhlcm9CbG9ja0luZGV4ID09PSAwIHx8IGFwcGx5TWluaW11bUhlaWdodCA9PT0gJ2FsbCc7XG5cdFx0Y29uc3Qgc2Nyb2xsSW5kaWNhdG9yQmxvY2sgPSBzY3JvbGxJbmRpY2F0b3IgPT09IHRydWUgJiYgaGVyb0Jsb2NrSW5kZXggPT09IDA7XG5cdFx0Y29uc3QgYmxvY2tJbmRleCA9IGJsb2Nrcy5maW5kSW5kZXgoIHRlc3RCbG9jayA9PiBibG9jayA9PT0gdGVzdEJsb2NrICk7XG5cblx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwge1xuXHRcdFx0YmxvY2tJbmRleCxcblx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0c2Nyb2xsSW5kaWNhdG9yQmxvY2tcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSApO1xuXG59XG5cbmxldCBibG9ja0xpc3QgPSBlZGl0b3JEYXRhLmdldEJsb2NrcygpO1xubGV0IGRlYm91bmNlZE9uU3Vic2NyaWJlID0gZGVib3VuY2UoKCkgPT4ge1xuXG5cdGNvbnN0IG5ld0Jsb2NrTGlzdCA9IGVkaXRvckRhdGEuZ2V0QmxvY2tzKCk7XG5cdGxldCBibG9ja0xpc3RDaGFuZ2VkID0gYmxvY2tMaXN0Lmxlbmd0aCAhPT0gbmV3QmxvY2tMaXN0Lmxlbmd0aDtcblxuXHRpZiAoICEgYmxvY2tMaXN0Q2hhbmdlZCApIHtcblx0XHRibG9ja0xpc3RDaGFuZ2VkID0gYmxvY2tMaXN0LnNvbWUoICggYmxvY2ssIGluZGV4ICkgPT4ge1xuXHRcdFx0cmV0dXJuICggYmxvY2tMaXN0W2luZGV4XS5jbGllbnRJZCAhPT0gbmV3QmxvY2tMaXN0W2luZGV4XS5jbGllbnRJZCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggYmxvY2tMaXN0Q2hhbmdlZCApIHtcblx0XHRibG9ja0xpc3QgPSBuZXdCbG9ja0xpc3Q7XG5cdFx0dXBkYXRlQmxvY2tzKCk7XG5cdH1cbn0sIDMwKTtcblxud3AuZGF0YS5zdWJzY3JpYmUoIGRlYm91bmNlZE9uU3Vic2NyaWJlICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0cG9zaXRpb25JbmRpY2F0b3IsXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxIZXJvUHJldmlldyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8SGVyb0Jsb2NrQ29udHJvbHMgLz5cblx0XHRcdDwvRnJhZ21lbnQ+LFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0NvbnRlbnQgUG9zaXRpb24nLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgdHJ1ZSB9PlxuXHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8Q29sb3JQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8TGF5b3V0UGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PEhlaWdodFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdDxTY3JvbGxJbmRpY2F0b3JQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdQb3NpdGlvbiBJbmRpY2F0b3JzJywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IHRydWUgfT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBQb3NpdGlvbiBJbmRpY2F0b3JzJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IHBvc2l0aW9uSW5kaWNhdG9yIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgcG9zaXRpb25JbmRpY2F0b3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHBvc2l0aW9uSW5kaWNhdG9yIH0gKTtcblx0XHRcdFx0XHRcdFx0dXBkYXRlQmxvY2tzKCB7IHBvc2l0aW9uSW5kaWNhdG9yIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFyYWxsYXhQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdF1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vZWRpdC5qcyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgaXNFbnVtLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUGFkZGluZ0NvbnRyb2xzIGZyb20gXCIuL3BhZGRpbmdcIjtcbmltcG9ydCBXaWR0aENvbnRyb2xzIGZyb20gXCIuL3dpZHRoXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gPFBhbmVsQm9keVxuXHRcdFx0Y2xhc3NOYW1lPVwicGl4ZWxncmFkZS1oZXJvLWJ1dHRvbi1ncm91cC13cmFwcGVyXCJcblx0XHRcdHRpdGxlPXsgX18oICdMYXlvdXQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRpbml0aWFsT3Blbj17IHRydWUgfT5cblxuXHRcdFx0PFBhZGRpbmdDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0PFdpZHRoQ29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblxuXHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHQ8L1BhbmVsQm9keT5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQtcGFuZWwvaW5kZXguanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFJhbmdlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWRkaW5nQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjb250ZW50UGFkZGluZ09wdGlvbnMgPSBbXG5cdFx0XHR7IGxhYmVsOiBfXyggJ1NtYWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnc21hbGwnIH0sXG5cdFx0XHR7IGxhYmVsOiBfXyggJ01lZGl1bScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ21lZGl1bScgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTGFyZ2UnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdsYXJnZScgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnQ3VzdG9tJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnY3VzdG9tJyB9LFxuXHRcdF07XG5cblx0XHRyZXR1cm4gPEZyYWdtZW50PlxuXHRcdFx0PGxhYmVsPnsgX18oICdDb250ZW50IFBhZGRpbmcnLCAnX19wbHVnaW5fdHh0ZCcpIH08L2xhYmVsPlxuXHRcdFx0PEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHR7IGNvbnRlbnRQYWRkaW5nT3B0aW9ucy5tYXAoIG9wdGlvbiA9PlxuXHRcdFx0XHRcdDxCdXR0b24ga2V5PXsgb3B0aW9uLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0aXNEZWZhdWx0PXsgb3B0aW9uLnZhbHVlICE9PSBjb250ZW50UGFkZGluZyB9XG5cdFx0XHRcdFx0ICAgICAgICBpc1ByaW1hcnk9eyBvcHRpb24udmFsdWUgPT09IGNvbnRlbnRQYWRkaW5nIH1cblx0XHRcdFx0XHQgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFBhZGRpbmc6IG9wdGlvbi52YWx1ZSB9ICkgfSB9PlxuXHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQpIH1cblx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHR7ICdjdXN0b20nID09PSBjb250ZW50UGFkZGluZyAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdHZhbHVlPXsgY29udGVudFBhZGRpbmdDdXN0b20gfVxuXHRcdFx0XHRvbkNoYW5nZT17IGNvbnRlbnRQYWRkaW5nQ3VzdG9tID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFBhZGRpbmdDdXN0b20gfSApIH1cblx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRtYXg9ezI1fVxuXHRcdFx0Lz4gfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3BhZGRpbmcuanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdFJhbmdlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWR0aENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjb250ZW50V2lkdGgsXG5cdFx0XHRcdGNvbnRlbnRXaWR0aEN1c3RvbSxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjb250ZW50V2lkdGhPcHRpb25zID0gW1xuXHRcdFx0eyBsYWJlbDogX18oICdGdWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnZnVsbCcgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTGFyZ2UnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdsYXJnZScgfSxcblx0XHRcdHsgbGFiZWw6IF9fKCAnTmFycm93JywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbmFycm93JyB9LFxuXHRcdFx0eyBsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdjdXN0b20nIH0sXG5cdFx0XTtcblxuXHRcdHJldHVybiA8RnJhZ21lbnQ+XG5cdFx0XHQ8bGFiZWw+eyBfXyggJ0NvbnRlbnQgV2lkdGgnLCAnX19wbHVnaW5fdHh0ZCcpIH08L2xhYmVsPlxuXHRcdFx0PEJ1dHRvbkdyb3VwIGxhYmVsPVwiQ29udGVudCBXaWR0aFwiPlxuXHRcdFx0XHR7IGNvbnRlbnRXaWR0aE9wdGlvbnMubWFwKCBvcHRpb24gPT5cblx0XHRcdFx0XHQ8QnV0dG9uIGlzRGVmYXVsdD17IG9wdGlvbi52YWx1ZSAhPT0gY29udGVudFdpZHRoIH1cblx0XHRcdFx0XHQgICAgICAgIGlzUHJpbWFyeT17IG9wdGlvbi52YWx1ZSA9PT0gY29udGVudFdpZHRoIH1cblx0XHRcdFx0XHQgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdpZHRoOiBvcHRpb24udmFsdWV9ICkgfSB9PlxuXHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQpIH1cblx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHR7ICdjdXN0b20nID09PSBjb250ZW50V2lkdGggJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IGNvbnRlbnRXaWR0aEN1c3RvbSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgY29udGVudFdpZHRoQ3VzdG9tID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFdpZHRoQ3VzdG9tIH0gKSB9XG5cdFx0XHRcdG1pbj17MjB9XG5cdFx0XHRcdG1heD17OTB9XG5cdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0Lz4gfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3dpZHRoLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0LXBhbmVsL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRSYWRpb0NvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWxsYXhQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gcGFyYWxsYXhcblx0XHRcdFx0ZW5hYmxlUGFyYWxsYXgsXG5cdFx0XHRcdHBhcmFsbGF4QW1vdW50LFxuXHRcdFx0XHRwYXJhbGxheEN1c3RvbUFtb3VudCxcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUGFyYWxsYXgnLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIFBhcmFsbGF4IFNjcm9sbGluZycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgZW5hYmxlUGFyYWxsYXggfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4gc2V0QXR0cmlidXRlcyggeyBlbmFibGVQYXJhbGxheDogISBlbmFibGVQYXJhbGxheCB9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7ICEhIGVuYWJsZVBhcmFsbGF4ICYmXG5cdFx0XHRcdCAgPFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdCAgbGFiZWw9eyBfXyggJ1BhcmFsbGF4IE9yYml0YWwgU3BlZWQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0ICBzZWxlY3RlZD17IHBhcmFsbGF4QW1vdW50IH1cblx0XHRcdFx0XHQgIG9uQ2hhbmdlPXsgcGFyYWxsYXhBbW91bnQgPT4ge1xuXG5cdFx0XHRcdFx0XHQgIGlmICggcGFyYWxsYXhBbW91bnQgPT09ICdjdXN0b20nICkge1xuXHRcdFx0XHRcdFx0XHQgIHNldEF0dHJpYnV0ZXMoIHsgcGFyYWxsYXhBbW91bnQgfSApO1xuXHRcdFx0XHRcdFx0ICB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQgIHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHQgIHBhcmFsbGF4QW1vdW50OiBwYXJhbGxheEFtb3VudCxcblx0XHRcdFx0XHRcdFx0XHQgIHBhcmFsbGF4Q3VzdG9tQW1vdW50OiBwYXJzZUludCggcGFyYWxsYXhBbW91bnQsIDEwIClcblx0XHRcdFx0XHRcdFx0ICB9ICk7XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHQgIH0gfVxuXHRcdFx0XHRcdCAgb3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0XHRcdCAgbGFiZWw6IF9fKCAnRmFzdCBhcyBNZXJjdXJlJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICcyMCdcblx0XHRcdFx0XHRcdCAgfSwge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ05hdHVyYWwgYXMgRWFydGgnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogJzUwJ1xuXHRcdFx0XHRcdFx0ICB9LCB7XG5cdFx0XHRcdFx0XHRcdCAgbGFiZWw6IF9fKCAnU2xvdyBhcyBOZXB0dW5lJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdCAgdmFsdWU6ICc3MCdcblx0XHRcdFx0XHRcdCAgfSwge1xuXHRcdFx0XHRcdFx0XHQgIGxhYmVsOiBfXyggJ0N1c3RvbScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlOiAnY3VzdG9tJ1xuXHRcdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0ICBdfVxuXHRcdFx0XHRcdCAgaGVscD17IF9fKCdUaGUgc3BlZWQgYXQgd2hpY2ggdGhlIHBhcmFsbGF4IGVmZmVjdCBydW5zLicsICdfX3BsdWdpbl90eHRkJykgfVxuXHRcdFx0XHQgIC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0eyAhISBlbmFibGVQYXJhbGxheCAmJiAnY3VzdG9tJyA9PT0gcGFyYWxsYXhBbW91bnQgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdHZhbHVlPXsgcGFyYWxsYXhDdXN0b21BbW91bnQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgcGFyYWxsYXhDdXN0b21BbW91bnQgPT4gc2V0QXR0cmlidXRlcyggeyBwYXJhbGxheEN1c3RvbUFtb3VudCB9ICkgfVxuXHRcdFx0XHRcdG1pbj17MTB9XG5cdFx0XHRcdFx0bWF4PXsxMDB9XG5cdFx0XHRcdFx0c3RlcD17MTB9XG5cdFx0XHRcdFx0aGVscD17IF9fKCdJdCBzdGFydHMgZnJvbSAwIHdoZW4gdGhlIGltYWdlIHdpbGwga2VlcCB3aXRoIHRoZSBjb250ZW50IChubyBwYXJhbGxheCkgdXAgdG8gMTAwIHdoZW4gdGhlIGltYWdlIGFwcGVhcnMgZml4ZWQgaW4gcGxhY2UuJywgJ19fcGx1Z2luX3R4dGQnICl9XG5cdFx0XHRcdC8+IH1cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wYXJhbGxheC1wYW5lbC9pbmRleC5qcyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0SWNvbkJ1dHRvbixcblx0Rm9ybUZpbGVVcGxvYWQsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRNZWRpYVVwbG9hZCxcblx0TWVkaWFQbGFjZWhvbGRlcixcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNsYXNzIEdhbGxlcnlQbGFjZWhvbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0b25DaGFuZ2VHYWxsZXJ5KCBnYWxsZXJ5SW1hZ2VzICkge1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBnYWxsZXJ5SW1hZ2VzLm1hcCggKGltYWdlLCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIHdwLmFwaVJlcXVlc3QoIHsgcGF0aDogJy93cC92Mi9tZWRpYS8nICsgaW1hZ2UuaWQgfSApLnRoZW4oIG5ld0ltYWdlID0+IHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlc1tpbmRleF0gPSB7IC4uLm5ld0ltYWdlLCAuLi5pbWFnZSB9O1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdFByb21pc2UuYWxsKCBwcm9taXNlcyApLnRoZW4oICgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuc2V0QXR0cmlidXRlcyggeyBnYWxsZXJ5SW1hZ2VzOiBnYWxsZXJ5SW1hZ2VzLmZpbHRlciggaW1hZ2UgPT4ge1xuXHRcdFx0XHRyZXR1cm4gISEgaW1hZ2UuaWQgJiYgISEgaW1hZ2Uuc2l6ZXMgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2UgJiYgISEgaW1hZ2Uuc2l6ZXMubGFyZ2UudXJsO1xuXHRcdFx0fSApIH0gKTtcblx0XHR9ICk7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Z2FsbGVyeUltYWdlcyxcblx0XHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRcdG9uU2VsZWN0SW1hZ2UsXG5cdFx0XHRcdG9uQ2hhbmdlLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGhhc0ltYWdlcyA9ICEhIGdhbGxlcnlJbWFnZXMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdGFkZFRvR2FsbGVyeT17IGhhc0ltYWdlcyB9XG5cdFx0XHRcdGlzQXBwZW5kZXI9eyBoYXNJbWFnZXMgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJcIlxuXHRcdFx0XHRsYWJlbHM9eyB7XG5cdFx0XHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnIGltYWdlcywgdXBsb2FkIG5ldyBvbmVzIG9yIHNlbGVjdCBmaWxlcyBmcm9tIHlvdXIgbGlicmFyeS4nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0fSB9XG5cdFx0XHRcdG9uU2VsZWN0PXsgdGhpcy5vbkNoYW5nZUdhbGxlcnkuYmluZCggdGhpcyApIH1cblx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRtdWx0aXBsZVxuXHRcdFx0XHR2YWx1ZT17IGhhc0ltYWdlcyA/IGdhbGxlcnlJbWFnZXMgOiB1bmRlZmluZWQgfVxuXHRcdFx0Lz5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgR2FsbGVyeVByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGdhbGxlcnlJbWFnZXMsXG5cdFx0XHRzZWxlY3RlZCxcblx0XHRcdG9uU2VsZWN0SW1hZ2UsXG5cdFx0XHRpc1NlbGVjdGVkXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzPVwibm92YS1zbGlkZXNob3dfX2dhbGxlcnktZWRpdFwiPlxuXHRcdFx0XHR7IGdhbGxlcnlJbWFnZXMubWFwKCAoIGltZywgaW5kZXggKSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0XHRcdFx0J25vdmEtc2xpZGVzaG93X19nYWxsZXJ5LWl0ZW0nLFxuXHRcdFx0XHRcdF07XG5cblx0XHRcdFx0XHRpZiAoIHNlbGVjdGVkID09PSBpbmRleCApIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaCggJ25vdmEtc2xpZGVzaG93X19nYWxsZXJ5LWl0ZW0tLWFjdGl2ZScgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17IGltZy5pZCB8fCBpbWcudXJsIH0gb25DbGljaz17ICgpID0+IHsgb25TZWxlY3RJbWFnZSggaW5kZXggKSB9IH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCAnICcgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXsgaW1nLnNpemVzLnRodW1ibmFpbC51cmwgfSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApIH1cblx0XHRcdDwvdWw+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdEdhbGxlcnlQbGFjZWhvbGRlcixcblx0R2FsbGVyeVByZXZpZXdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZ2FsbGVyeS1vcHRpb25zL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2Jsb2Nrcy9pY29uc1wiO1xuaW1wb3J0IHtBbGlnbm1lbnRDb250cm9sc30gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0Q29sb3JQYWxldHRlLFxuXHREcm9wZG93bixcblx0SWNvbkJ1dHRvbixcblx0UmFkaW9Db250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRvb2xiYXIsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRQYW5lbENvbG9yU2V0dGluZ3MsXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IGNvbG9ycyA9IFsge1xuXHRuYW1lOiBfXyggJ0RhcmsnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0Y29sb3I6ICcjMDAwJ1xufSwge1xuXHRuYW1lOiBfXyggJ0xpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdGNvbG9yOiAnI0ZGRidcbn0gXTtcblxuY2xhc3MgT3ZlcmxheUNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0cmVuZ3RoXG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ092ZXJsYXkgRmlsdGVyIFN0eWxlJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRzZWxlY3RlZD17IG92ZXJsYXlGaWx0ZXJTdHlsZSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBbXG5cdFx0XHRcdFx0eyBsYWJlbDogX18oICdOb25lJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbm9uZScgfSxcblx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0RhcmsnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdkYXJrJyB9LFxuXHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnTGlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdsaWdodCcgfVxuXHRcdFx0XHRdIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBvdmVybGF5RmlsdGVyU3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBvdmVybGF5RmlsdGVyU3R5bGUgfSApIH1cblx0XHRcdC8+XG5cdFx0XHR7IG92ZXJsYXlGaWx0ZXJTdHlsZSAhPT0gJ25vbmUnICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ092ZXJsYXkgRmlsdGVyIFN0cmVuZ3RoJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHR2YWx1ZT17IG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgb3ZlcmxheUZpbHRlclN0cmVuZ3RoID0+IHNldEF0dHJpYnV0ZXMoIHsgb3ZlcmxheUZpbHRlclN0cmVuZ3RoIH0gKSB9XG5cdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0bWF4PXsxMDB9XG5cdFx0XHRcdHN0ZXA9ezEwfVxuXHRcdFx0Lz4gfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdH1cbn1cblxuY2xhc3MgQ29sb3JDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiA8Q29sb3JQYWxldHRlXG5cdFx0XHRjbGFzc05hbWU9XCJub3ZhLWhpZGUtY2xlYXItY29sb3JcIlxuXHRcdFx0dmFsdWU9eyBjb250ZW50Q29sb3IgfVxuXHRcdFx0Y29sb3JzPXsgY29sb3JzIH1cblx0XHRcdG9uQ2hhbmdlPXsgY29udGVudENvbG9yID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudENvbG9yIH0gKSB9XG5cdFx0XHRkaXNhYmxlQ3VzdG9tQ29sb3JzXG5cdFx0Lz5cblx0fVxufVxuXG5jbGFzcyBDb2xvclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gPFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0Y2xhc3NOYW1lPVwibm92YS1oaWRlLWNsZWFyLWNvbG9yXCJcblx0XHRcdHRpdGxlPXsgX18oICdDb2xvciBTZXR0aW5ncycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdGNvbG9yU2V0dGluZ3M9eyBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29udGVudENvbG9yLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBjb250ZW50Q29sb3IgPT4gc2V0QXR0cmlidXRlcyggeyBjb250ZW50Q29sb3IgfSApLFxuXHRcdFx0XHRcdGxhYmVsOiBfXyggJ0NvbnRlbnQgQ29sb3InLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0fSxcblx0XHRcdF0gfVxuXHRcdFx0Y29sb3JzPXsgY29sb3JzIH0gXG5cdFx0XHRpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHQ8T3ZlcmxheUNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0PC9QYW5lbENvbG9yU2V0dGluZ3M+XG5cdH1cbn1cblxuY2xhc3MgQ29sb3JUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyJz5cblx0XHRcdFx0PERyb3Bkb3duXG5cdFx0XHRcdFx0cG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0XHRjbGFzc05hbWU9J3BpeGVsZ3JhZGUtaGVyby1ibG9jay10b29sYmFyLWRyb3Bkb3duJ1xuXHRcdFx0XHRcdGNvbnRlbnRDbGFzc05hbWU9J2NvbXBvbmVudHMtbm92YS0tcG9wb3Zlcidcblx0XHRcdFx0XHRyZW5kZXJUb2dnbGU9eyAoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uVG9nZ2xlIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17IGljb25zLmludmVydCB9XG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9eyBpc09wZW4gfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ29sb3IgT3B0aW9ucycsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRmb2N1c09uTW91bnQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0cmVuZGVyQ29udGVudD17ICggeyBvbkNsb3NlIH0gKSA9PiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8Q29sb3JDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdFx0PE92ZXJsYXlDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVG9vbGJhcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IHtcblx0Q29sb3JDb250cm9scyxcblx0Q29sb3JQYW5lbCxcblx0Q29sb3JUb29sYmFyLFxuXHRPdmVybGF5Q29udHJvbHMsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbG9yLWNvbnRyb2xzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY29sb3ItY29udHJvbHMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9scy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgaWNvbnMgZnJvbSBcIi4uLy4uL2Jsb2Nrcy9pY29uc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IHdpdGhWaWV3cG9ydE1hdGNoIH0gPSB3cC52aWV3cG9ydDtcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcbmNvbnN0IHsgY29tcG9zZSwgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IENvbnN1bWVyLCBQcm92aWRlciB9ID0gY3JlYXRlQ29udGV4dCgge1xuXHRuYW1lOiAnJyxcblx0aXNTZWxlY3RlZDogZmFsc2UsXG5cdGZvY3VzZWRFbGVtZW50OiBudWxsLFxuXHRzZXRGb2N1c2VkRWxlbWVudDogKCkgPT4ge30sXG5cdGNsaWVudElkOiBudWxsLFxufSApO1xuXG5jb25zdCB7XG5cdFRvb2xiYXJcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBCTE9DS19BTElHTk1FTlRTX0NPTlRST0xTID0ge1xuXHRsZWZ0OiB7XG5cdFx0aWNvbjogaWNvbnMuYWxpZ25Ub3AsXG5cdFx0dGl0bGU6IF9fKCAnQWxpZ24gTGVmdCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxuXHRjZW50ZXI6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnbkNlbnRlcixcblx0XHR0aXRsZTogX18oICdBbGlnbiBNaWRkbGUnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0fSxcblx0cmlnaHQ6IHtcblx0XHRpY29uOiBpY29ucy5hbGlnbkJvdHRvbSxcblx0XHR0aXRsZTogX18oICdBbGlnbiBSaWdodCcsICdfX3BsdWdpbl90eHRkJyApLFxuXHR9LFxufTtcblxuY29uc3QgREVGQVVMVF9DT05UUk9MUyA9IFsgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JyBdO1xuY29uc3QgREVGQVVMVF9DT05UUk9MID0gJ2NlbnRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0hvcml6b250YWxBbGlnbm1lbnRUb29sYmFyKCB7IGlzQ29sbGFwc2VkLCB2YWx1ZSwgb25DaGFuZ2UsIGNvbnRyb2xzID0gREVGQVVMVF9DT05UUk9MUyB9ICkge1xuXHRmdW5jdGlvbiBhcHBseU9yVW5zZXQoIGFsaWduICkge1xuXHRcdHJldHVybiAoKSA9PiBvbkNoYW5nZSggdmFsdWUgPT09IGFsaWduID8gdW5kZWZpbmVkIDogYWxpZ24gKTtcblx0fVxuXG5cdGNvbnN0IGFjdGl2ZUFsaWdubWVudCA9IEJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIHZhbHVlIF07XG5cdGNvbnN0IGRlZmF1bHRBbGlnbm1lbnRDb250cm9sID0gQkxPQ0tfQUxJR05NRU5UU19DT05UUk9MU1sgREVGQVVMVF9DT05UUk9MIF07XG5cblx0cmV0dXJuIChcblx0XHQ8VG9vbGJhclxuXHRcdFx0aXNDb2xsYXBzZWQ9eyBpc0NvbGxhcHNlZCB9XG5cdFx0XHRpY29uPXsgYWN0aXZlQWxpZ25tZW50ID8gYWN0aXZlQWxpZ25tZW50Lmljb24gOiBkZWZhdWx0QWxpZ25tZW50Q29udHJvbC5pY29uIH1cblx0XHRcdGNvbnRyb2xzPXtcblx0XHRcdFx0Y29udHJvbHMubWFwKCAoIGNvbnRyb2wgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLkJMT0NLX0FMSUdOTUVOVFNfQ09OVFJPTFNbIGNvbnRyb2wgXSxcblx0XHRcdFx0XHRcdGlzQWN0aXZlOiB2YWx1ZSA9PT0gY29udHJvbCxcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IGFwcGx5T3JVbnNldChjb250cm9sKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJwaXhlbGdyYWRlLWhlcm8taG9yaXpvbnRhbC1hbGlnbm1lbnQtYnV0dG9uXCJcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IClcblx0XHRcdH1cblx0XHQvPlxuXHQpXG59XG5cbi8vIEB0b2RvIHJlbW92ZSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBhbmQgdXNlIGNvcmUgbWV0aG9kIHdoZW4gZXhwb3NlZCB0aHJvdWdoIHRoZSBhcGlcbmNvbnN0IHdpdGhCbG9ja0VkaXRDb250ZXh0ID0gKCBtYXBDb250ZXh0VG9Qcm9wcyApID0+IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KCAoIE9yaWdpbmFsQ29tcG9uZW50ICkgPT4ge1xuXHRyZXR1cm4gKCBwcm9wcyApID0+IChcblx0XHQ8Q29uc3VtZXI+XG5cdFx0XHR7ICggY29udGV4dCApID0+IChcblx0XHRcdFx0PE9yaWdpbmFsQ29tcG9uZW50XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdFx0eyAuLi5tYXBDb250ZXh0VG9Qcm9wcyggY29udGV4dCwgcHJvcHMgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIH1cblx0XHQ8L0NvbnN1bWVyPlxuXHQpO1xufSwgJ3dpdGhCbG9ja0VkaXRDb250ZXh0JyApO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoQmxvY2tFZGl0Q29udGV4dCggKCB7IGNsaWVudElkIH0gKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsaWVudElkLFxuXHRcdH07XG5cdH0gKSxcblx0d2l0aFZpZXdwb3J0TWF0Y2goIHsgaXNMYXJnZVZpZXdwb3J0OiAnbWVkaXVtJyB9ICksXG5cdHdpdGhTZWxlY3QoICggc2VsZWN0LCB7IGNsaWVudElkLCBpc0xhcmdlVmlld3BvcnQsIGlzQ29sbGFwc2VkIH0gKSA9PiB7XG5cdFx0Y29uc3QgeyBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXHRcdHJldHVybiB7XG5cdFx0XHRpc0NvbGxhcHNlZDogaXNDb2xsYXBzZWQgfHwgISBpc0xhcmdlVmlld3BvcnQgfHwgKFxuXHRcdFx0XHQhIGdldFNldHRpbmdzKCkuaGFzRml4ZWRUb29sYmFyICYmXG5cdFx0XHRcdGdldEJsb2NrUm9vdENsaWVudElkKCBjbGllbnRJZCApXG5cdFx0XHQpLFxuXHRcdH07XG5cdH0gKSxcbikoIEJsb2NrSG9yaXpvbnRhbEFsaWdubWVudFRvb2xiYXIgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmxvY2staG9yaXpvbnRhbC1hbGlnbm1lbnQtdG9vbGJhci9pbmRleC5qcyIsImltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCIuLi8uLi9ibG9ja3MvdXRpbHNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRQYW5lbEJvZHksXG5cdFJhZGlvQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdGRpc3BhdGNoLFxuXHRzZWxlY3QsXG5cdHN1YnNjcmliZSxcbn0gPSB3cC5kYXRhO1xuXG5sZXQgYmxvY2tMaXN0ID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XG5cbmxldCBkZWJvdW5jZWRPblN1YnNjcmliZSA9IGRlYm91bmNlKCgpID0+IHtcblx0bGV0IG5ld0Jsb2NrTGlzdCA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xuXHRsZXQgYmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5sZW5ndGggIT09IG5ld0Jsb2NrTGlzdC5sZW5ndGg7XG5cblx0aWYgKCAhIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0Q2hhbmdlZCA9IGJsb2NrTGlzdC5zb21lKCAoIGJsb2NrLCBpbmRleCApID0+IHtcblx0XHRcdHJldHVybiAoIGJsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgIT09IG5ld0Jsb2NrTGlzdFtpbmRleF0uY2xpZW50SWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGJsb2NrTGlzdENoYW5nZWQgKSB7XG5cdFx0YmxvY2tMaXN0ID0gbmV3QmxvY2tMaXN0O1xuXHRcdHVwZGF0ZUJsb2NrcygpO1xuXHR9XG59LCAzMCk7XG5cbnN1YnNjcmliZSggZGVib3VuY2VkT25TdWJzY3JpYmUgKTtcblxuY29uc3QgdXBkYXRlQmxvY2tzID0gKCBhdHRyaWJ1dGVzICkgPT4ge1xuXG5cdHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpLmZpbHRlciggYmxvY2sgPT4ge1xuXHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0fSApLmZpbHRlciggKCBibG9jaywgaW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgeyBhcHBseU1pbmltdW1IZWlnaHQsIHNjcm9sbEluZGljYXRvciB9ID0geyAuLi5ibG9jay5hdHRyaWJ1dGVzLCAuLi5hdHRyaWJ1dGVzIH07XG5cdFx0Y29uc3QgYXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2sgPSBhcHBseU1pbmltdW1IZWlnaHQgPT09ICdmaXJzdCcgJiYgaW5kZXggPT09IDAgfHwgYXBwbHlNaW5pbXVtSGVpZ2h0ID09PSAnYWxsJztcblx0XHRjb25zdCBzY3JvbGxJbmRpY2F0b3JCbG9jayA9IHNjcm9sbEluZGljYXRvciA9PT0gdHJ1ZSAmJiBpbmRleCA9PT0gMDtcblxuXHRcdGRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKCBibG9jay5jbGllbnRJZCwge1xuXHRcdFx0YXBwbHlNaW5pbXVtSGVpZ2h0QmxvY2ssXG5cdFx0XHRzY3JvbGxJbmRpY2F0b3JCbG9ja1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9ICk7XG5cbn1cblxuY2xhc3MgSGVpZ2h0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBhcHBseU1pbmltdW1IZWlnaHQgPSAhISBhdHRyaWJ1dGVzLmFwcGx5TWluaW11bUhlaWdodCA/IGF0dHJpYnV0ZXMuYXBwbHlNaW5pbXVtSGVpZ2h0IDogJ2ZpcnN0Jztcblx0XHRjb25zdCBtaW5IZWlnaHQgPSAhISBhdHRyaWJ1dGVzLm1pbkhlaWdodCA/IGF0dHJpYnV0ZXMubWluSGVpZ2h0IDogNzU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQXBwbHkgTWluaW11bSBIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0c2VsZWN0ZWQ9eyBhcHBseU1pbmltdW1IZWlnaHQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgYXBwbHlNaW5pbXVtSGVpZ2h0ID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgYXBwbHlNaW5pbXVtSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBhcHBseU1pbmltdW1IZWlnaHQgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9e1xuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ05vbmUnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdub25lJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0ZpcnN0IEhlcm8gQmxvY2sgT25seScsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2ZpcnN0JyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0FsbCBIZXJvIEJsb2NrcycsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2FsbCcgfVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAnbm9uZScgIT09IGFwcGx5TWluaW11bUhlaWdodCAmJlxuXHRcdFx0XHQgICAgPFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbmltdW0gSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9eyBtaW5IZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBtaW5IZWlnaHQgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1pbkhlaWdodDogcGFyc2VJbnQoIG1pbkhlaWdodCwgMTAgKSB9IClcbi8vXHRcdFx0XHRcdFx0XHR1cGRhdGVCbG9ja3MoIHsgbWluSGVpZ2h0IH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17XG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ0hhbGYnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDUwIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdUd28gVGhpcmRzJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiA2NiB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnVGhyZWUgUXVhcnRlcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6IDc1IH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdGdWxsJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAxMDAgfVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdCAgICB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQpXG5cdH1cbn1cblxuY2xhc3MgU2Nyb2xsSW5kaWNhdG9yUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0c2Nyb2xsSW5kaWNhdG9yLFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGhlcm9CbG9ja3MgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoIGJsb2NrID0+IHtcblx0XHRcdHJldHVybiBibG9jay5uYW1lID09PSAnbm92YS9oZXJvJztcblx0XHR9ICk7XG5cblx0XHRjb25zdCBpbmRleCA9IGhlcm9CbG9ja3MuZmluZEluZGV4KCBibG9jayA9PiBibG9jay5jbGllbnRJZCA9PT0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCkgKTtcblxuXHRcdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdTY3JvbGwgSW5kaWNhdG9yJywgJ19fcGx1Z2luX3R4dGQnICkgfSBzdHlsZT17IHsgZGlzcGxheTogaW5kZXggPT09IDAgPyAnYmxvY2snIDogJ25vbmUnIH0gfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIFNjcm9sbCBJbmRpY2F0b3InLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBzY3JvbGxJbmRpY2F0b3IgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHNjcm9sbEluZGljYXRvciA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHRcdHVwZGF0ZUJsb2NrcyggeyBzY3JvbGxJbmRpY2F0b3IgfSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9QYW5lbEJvZHk+XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0SGVpZ2h0UGFuZWwsXG5cdFNjcm9sbEluZGljYXRvclBhbmVsLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVpZ2h0LWNvbnRyb2xzL2luZGV4LmpzIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICcuLi9pY29ucyc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL21lZGlhJyxcblx0e1xuXHRcdHRpdGxlOiBfXyggJ01lZGlhIENhcmQgQ29uc3RlbGxhdGlvbicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgbWVkaWEgb2JqZWN0cyBhbG9uZ3NpZGUgc2hvcnQgcGllY2VzIG9mIGNvbnRlbnQuJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0aWNvbjogbWVkaWEsXG5cdFx0Y2F0ZWdvcnk6ICdub3ZhLWJ5LXBpeGVsZ3JhZGUnLFxuXHRcdC4uLmF0dHJpYnV0ZXMsXG5cdFx0ZWRpdCxcblx0XHRzYXZlLFxuXHRcdGdldEVkaXRXcmFwcGVyUHJvcHMoKSB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2V0dGluZ3MoKTtcblx0XHRcdHJldHVybiBzZXR0aW5ncy5hbGlnbldpZGUgPyB7XG5cdFx0XHRcdCdkYXRhLWFsaWduJzogJ2Z1bGwnXG5cdFx0XHR9IDoge31cblx0XHR9LFxuXHR9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJpbWFnZUFsdFwiOntcImF0dHJpYnV0ZVwiOlwiYWx0XCJ9LFwiYmFja2dyb3VuZENvbG9yXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZWZhdWx0XCI6XCIjMDAwXCJ9LFwibWVkaWFQb3NpdGlvblwiOntcImRlZmF1bHRcIjpcImxlZnRcIn0sXCJtZWRpYVN0eWxlXCI6e1wiZGVmYXVsdFwiOlwic2ltcGxlXCJ9LFwiY29udGVudFN0eWxlXCI6e1wiZGVmYXVsdFwiOlwiYmFzaWNcIn0sXCJibG9ja1N0eWxlXCI6e1wiZGVmYXVsdFwiOlwiYmFzaWNcIn0sXCJiYWNrZ3JvdW5kVHlwZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwidHJhbnNwYXJlbnRcIn0sXCJpbWFnZXNcIjp7XCJ0eXBlXCI6XCJhcnJheVwiLFwiZGVmYXVsdFwiOltdfX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvbWVkaWEvYXR0cmlidXRlcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vaW5zcGVjdG9yJztcbmltcG9ydCBNZWRpYVByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0dXBkYXRlSW1hZ2VzKCBtZWRpYSApIHtcblx0XHR0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0aW1hZ2VzOiBtZWRpYS5tYXAoICggaW1hZ2UgKSA9PiBKU09OLnN0cmluZ2lmeSh7IGlkOiBpbWFnZS5pZCwgdXJsOiBpbWFnZS51cmwsIGFsdDogaW1hZ2UuYWx0IH0pIClcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxNZWRpYVByZXZpZXcgeyAuLi50aGlzLnByb3BzIH0gdXBkYXRlSW1hZ2VzPXsgdGhpcy51cGRhdGVJbWFnZXMuYmluZCggdGhpcyApIH0gLz5cblx0XHRcdFx0PENvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IHVwZGF0ZUltYWdlcz17IHRoaXMudXBkYXRlSW1hZ2VzLmJpbmQoIHRoaXMgKSB9IC8+XG5cdFx0XHRcdDxJbnNwZWN0b3IgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvZWRpdC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRNZWRpYVVwbG9hZCxcblx0QmxvY2tDb250cm9sc1xufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdEljb25CdXR0b24sXG5cdFRvb2xiYXJcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0XHR1cGRhdGVJbWFnZXNcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRpbWFnZXMgPSBbXSxcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGdhbGxlcnlJbWFnZXMgPSBpbWFnZXMubWFwICggKGltYWdlKSAgPT4gSlNPTi5wYXJzZShpbWFnZSkpO1xuXG5cdFx0Y29uc3QgaGFzSW1hZ2VzID0gISEgaW1hZ2VzLmxlbmd0aDtcblxuXHRcdGNvbnN0IE1FRElBX0FMSUdOTUVOVFNfQ09OVFJPTFMgPSB7XG5cdFx0XHRsZWZ0OiB7XG5cdFx0XHRcdGljb246ICdhbGlnbi1wdWxsLWxlZnQnLFxuXHRcdFx0XHR0aXRsZTogX18oICdTaG93IE1lZGlhIG9uIExlZnQgU2lkZScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0OiB7XG5cdFx0XHRcdGljb246ICdhbGlnbi1wdWxsLXJpZ2h0Jyxcblx0XHRcdFx0dGl0bGU6IF9fKCAnU2hvdyBNZWRpYSBvbiBSaWdodCBTaWRlJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zdCB0b29sYmFyQ29udHJvbHMgPSAoXG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PFRvb2xiYXJcblx0XHRcdFx0XHRjb250cm9scz17IE9iamVjdC5rZXlzKE1FRElBX0FMSUdOTUVOVFNfQ09OVFJPTFMpLm1hcChjb250cm9sID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdC4uLk1FRElBX0FMSUdOTUVOVFNfQ09OVFJPTFNbY29udHJvbF0sXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHsgc2V0QXR0cmlidXRlcyh7IG1lZGlhUG9zaXRpb246IGNvbnRyb2wgfSApfSxcblx0XHRcdFx0XHRcdFx0aXNBY3RpdmU6IG1lZGlhUG9zaXRpb24gPT09IGNvbnRyb2xcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgaGFzSW1hZ2VzICYmIDxUb29sYmFyPlxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0dHlwZSA9IFwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRcdGdhbGxlcnlcblx0XHRcdFx0XHRcdHZhbHVlID0geyBnYWxsZXJ5SW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IGltYWdlLmlkICkgfVxuXHRcdFx0XHRcdFx0b25TZWxlY3QgPSB7IHVwZGF0ZUltYWdlcyB9XG5cdFx0XHRcdFx0XHRyZW5kZXIgPSB7ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb21wb25lbnRzLWljb24tYnV0dG9uIGNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbCdcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBNZWRpYScsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRpY29uPVwiZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz0geyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGVuKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhcj4gfVxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHR7IHRvb2xiYXJDb250cm9scyB9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9jb250cm9scy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FsaWdubWVudC1jb250cm9sc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRSYWRpb0NvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNsYXNzIEluc3BlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bWVkaWFTdHlsZSxcblx0XHRcdGNvbnRlbnRTdHlsZSxcblx0XHRcdGJsb2NrU3R5bGUsXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdNZWRpYSBBcmVhJywgJ19fcGx1Z2luX3R4dGQnICkgfSAgaW5pdGlhbE9wZW49eyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ01lZGlhIFN0eWxlJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgbWVkaWFTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBtZWRpYVN0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnV2VsbC1vcmdhbml6ZWQgR3JpZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ3NpbXBsZScgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ092ZXJsYXAgTGF5ZXJlZCBHcmlkJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnb3ZlcmxhcCcgfVxuXHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnQXV0b21hdGljYWxseSBjcm9wIGFuZCBzY2FsZSBpbWFnZXMgdG8gZmlsbCB0aGUgYmxvY2sgY29udGFpbmVyLicsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7IG1lZGlhU3R5bGUgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYVN0eWxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCdDb250ZW50IEFyZWEnLCAnX19wbHVnaW5fdHh0ZCcpIH0gaW5pdGlhbE9wZW4gPSB7IHRydWUgfT5cblx0XHRcdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWwgPSB7IF9fKCAnRW1waGFzaXMgTGV2ZWwnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0geyBjb250ZW50U3R5bGUgfVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZCA9IHsgY29udGVudFN0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnQmFzaWMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdiYXNpYycgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ01vZGVyYXRlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbW9kZXJhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdIaWdobGlnaHRlZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2hpZ2hsaWdodGVkJyB9XG5cdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsgY29udGVudFN0eWxlID0+IHNldEF0dHJpYnV0ZXMoIHsgY29udGVudFN0eWxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8QWxpZ25tZW50Q29udHJvbHMgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCdCbG9jayBBcmVhJywgJ19fcGx1Z2luX3R4dGQnKSB9IGluaXRpYWxPcGVuID0geyB0cnVlIH0+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsID0geyBfXyggJ0VtcGhhc2lzIExldmVsJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHsgYmxvY2tTdHlsZSB9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkID0geyBibG9ja1N0eWxlIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucyA9IHsgW1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnQmFzaWMnLCAnX19wbHVnaW5fdHh0ZCcgKSwgdmFsdWU6ICdiYXNpYycgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXyggJ01vZGVyYXRlJywgJ19fcGx1Z2luX3R4dGQnICksIHZhbHVlOiAnbW9kZXJhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdIaWdobGlnaHRlZCcsICdfX3BsdWdpbl90eHRkJyApLCB2YWx1ZTogJ2hpZ2hsaWdodGVkJyB9XG5cdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsgYmxvY2tTdHlsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJsb2NrU3R5bGUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0b3I7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9tZWRpYS9pbnNwZWN0b3IuanMiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVBsYWNlaG9sZGVyXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2NvcmUvYnV0dG9uJywgJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvaGVhZGluZyddO1xuY29uc3QgVEVNUExBVEUgPSBbXG5cdFsnY29yZS9oZWFkaW5nJywge2NvbnRlbnQ6ICdTaG9vdCBmb3IgdGhlIG1vb24sIEV2ZW4gaWYgWW91IE1pc3MgaXQnLCBsZXZlbDogNH1dLFxuXHRbJ2NvcmUvaGVhZGluZycsIHtjb250ZW50OiAnV2VsY29tZSB0byBvdXIgcGxhbmV0LCBsb29rIGFuZCBmZWVsIG1hdHRlcnMhJywgbGV2ZWw6IDJ9XSxcblx0Wydjb3JlL3BhcmFncmFwaCcsIHtjb250ZW50OiAnV2VcXCd2ZSBhbHdheXMgZGVmaW5lZCBvdXJzZWx2ZXMgYnkgdGhlIGFiaWxpdHkgdG8gb3ZlcmNvbWUgdGhlIGltcG9zc2libGUuIEFuZCB3ZSBjb3VudCB0aGVzZSBtb21lbnRzLiBUaGVzZSBtb21lbnRzIHdoZW4gd2UgZGFyZSB0byBhaW0gaGlnaGVyLCB0byBicmVhayBiYXJyaWVycywgdG8gcmVhY2ggZm9yIHRoZSBzdGFycywgdG8gbWFrZSB0aGUgdW5rbm93biBrbm93bi4nfV0sXG5cdFsnY29yZS9idXR0b24nLCB7dGV4dDogJ0Rpc2NvdmVyIE1vcmUnfV1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRpc1NlbGVjdGVkLFxuXHRcdFx0dXBkYXRlSW1hZ2VzXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYVN0eWxlLFxuXHRcdFx0Y29udGVudFN0eWxlLFxuXHRcdFx0YmxvY2tTdHlsZSxcblx0XHRcdG1lZGlhUG9zaXRpb24sXG5cdFx0XHRpbWFnZXMsXG5cdFx0XHRhbGlnbm1lbnRcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0YG5vdmEtbWVkaWFgLFxuXHRcdFx0YGhhcy1pbWFnZS1vbi10aGUtJHttZWRpYVBvc2l0aW9ufWAsXG5cdFx0XHRgY29udGVudC1pcy0ke2NvbnRlbnRTdHlsZX1gLFxuXHRcdFx0YGdyaWQtaXMtJHttZWRpYVN0eWxlfWBcblx0XHQpO1xuXG5cdFx0Y29uc3QgZ2FsbGVyeUltYWdlcyA9IGltYWdlcy5tYXAgKCAoaW1hZ2UpICA9PiBKU09OLnBhcnNlKGltYWdlKSk7XG5cblx0XHRjb25zdCBkaXNwbGF5SW1hZ2VzID0gKGltYWdlcykgPT4ge1xuXG5cdFx0XHRpZiAoIDAgPT09IGltYWdlcy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRpY29uID0gXCJmb3JtYXQtZ2FsbGVyeVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IFwibm92YS1tZWRpYV9fcGxhY2Vob2xkZXJcIlxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsgdXBkYXRlSW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0YWNjZXB0ID0gXCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzID0geyBbICdpbWFnZScgXSB9XG5cdFx0XHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggKGltYWdlKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9J25vdmEtbWVkaWFfX2ltYWdlJz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGFsdD17IGltYWdlLmFsdCB9IHNyYz17IGltYWdlLnVybCB9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BibG9jay1pcy0ke2Jsb2NrU3R5bGV9IG5vdmEtbWVkaWFfX2lubmVyLWNvbnRhaW5lcmB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2tcIiBkYXRhLWFsaWduPVwid2lkZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19sYXlvdXRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLW1lZGlhX19jb250ZW50IG5vdmEtbWVkaWFfX2lubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcz17QUxMT1dFRF9CTE9DS1N9XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZT17VEVNUExBVEV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fYXNpZGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7ZGlzcGxheUltYWdlcyggaW1hZ2VzICl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3MvbWVkaWEvcHJldmlldy5qcyIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRDb21wb25lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0bWVkaWFTdHlsZSxcblx0XHRcdFx0Y29udGVudFN0eWxlLFxuXHRcdFx0XHRibG9ja1N0eWxlLFxuXHRcdFx0XHRtZWRpYVBvc2l0aW9uLFxuXHRcdFx0XHRpbWFnZXNcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXG5cdFx0Y29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRgbm92YS1tZWRpYWAsXG5cdFx0XHRgaGFzLWltYWdlLW9uLXRoZS0ke21lZGlhUG9zaXRpb259YCxcblx0XHRcdGBjb250ZW50LWlzLSR7Y29udGVudFN0eWxlfWAsXG5cdFx0XHRgZ3JpZC1pcy0ke21lZGlhU3R5bGV9YCxcblx0XHRcdGBhbGlnbmZ1bGxgXG5cdFx0KTtcblxuXG5cdFx0Y29uc3QgZ2FsbGVyeUltYWdlcyA9IGltYWdlcy5tYXAoICggaW1hZ2UgKSA9PiBKU09OLnBhcnNlKCBpbWFnZSApICk7XG5cblx0XHRjb25zdCBkaXNwbGF5SW1hZ2VzID0gKCBpbWFnZXMgKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtbWVkaWFfX2ltYWdlJz5cblx0XHRcdFx0XHRcdFx0PGltZyBhbHQ9e2ltYWdlLmFsdH0gc3JjPXtpbWFnZS51cmx9Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSApXG5cdFx0XHQpXG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgYmxvY2staXMtJHtibG9ja1N0eWxlfSBub3ZhLW1lZGlhX19pbm5lci1jb250YWluZXJgfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2xheW91dCBhbGlnbndpZGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1tZWRpYV9fY29udGVudCBub3ZhLW1lZGlhX19pbm5lci1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWVkaWFfX2FzaWRlXCI+XG5cdFx0XHRcdFx0XHRcdHtkaXNwbGF5SW1hZ2VzKCBpbWFnZXMgKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL21lZGlhL3NhdmUuanMiLCIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBpY29ucyBmcm9tICcuLi9pY29ucyc7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanNvbic7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcblxuLyoqXG4gKiB3cCBBUElcbiAqL1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0SW5uZXJCbG9ja3Ncbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoICdub3ZhL3NsaWRlc2hvdycsXG5cdHtcblx0XHR0aXRsZTogX18oICdTbGlkZXNob3cgTWUgdGhlIFdheScsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgbW9yZSB0aGFuIG9uZSBwaWVjZSBvZiBjb250ZW50IGluIGEgc2luZ2xlLCBjb3ZldGVkIHNwYWNlLicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdGljb246IGljb25zLnNsaWRlc2hvdyxcblx0XHRjYXRlZ29yeTogJ25vdmEtYnktcGl4ZWxncmFkZScsXG5cdFx0Li4uYXR0cmlidXRlcyxcblx0XHRlZGl0LFxuXHRcdHNhdmUoKSB7XG5cdFx0XHRyZXR1cm4gPElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdH0sXG5cdFx0Z2V0RWRpdFdyYXBwZXJQcm9wcygpIHtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZXR0aW5ncygpO1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmFsaWduV2lkZSA/IHtcblx0XHRcdFx0J2RhdGEtYWxpZ24nOiAnZnVsbCdcblx0XHRcdH0gOiB7fVxuXHRcdH0sXG5cdH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9zbGlkZXNob3cvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImF0dHJpYnV0ZXNcIjp7XCJjb250ZW50UGFkZGluZ1wiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwibWVkaXVtXCJ9LFwiY29udGVudFBhZGRpbmdDdXN0b21cIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjo1MH0sXCJjb250ZW50V2lkdGhcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcImZ1bGxcIn0sXCJjb250ZW50V2lkdGhDdXN0b21cIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjoxMDB9LFwibWluSGVpZ2h0XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJkZWZhdWx0XCI6MH0sXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiY2VudGVyXCJ9LFwiZW5hYmxlUGFyYWxsYXhcIjp7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJkZWZhdWx0XCI6dHJ1ZX0sXCJwYXJhbGxheEFtb3VudFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVmYXVsdFwiOlwiNTBcIn0sXCJwYXJhbGxheEN1c3RvbUFtb3VudFwiOntcInR5cGVcIjpcIm51bWJlclwiLFwiZGVmYXVsdFwiOjUwfSxcInNsaWRlc2hvd1R5cGVcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcImdhbGxlcnlcIn0sXCJnYWxsZXJ5SW1hZ2VzXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlZmF1bHRcIjpbXX0sXCJjb250ZW50Q29sb3JcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcIiNGRkZcIn0sXCJvdmVybGF5RmlsdGVyU3R5bGVcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlZmF1bHRcIjpcImRhcmtcIn0sXCJvdmVybGF5RmlsdGVyU3RyZW5ndGhcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcImRlZmF1bHRcIjowfX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L2F0dHJpYnV0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRDb2xvclBhbmVsLFxuXHRMYXlvdXRQYW5lbCxcblx0UGFyYWxsYXhQYW5lbCxcblx0QWxpZ25tZW50VG9vbGJhcixcblx0Q29sb3JUb29sYmFyLFxuXHRHYWxsZXJ5UHJldmlldywgR2FsbGVyeVBsYWNlaG9sZGVyLFxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgU2xpZGVzaG93UHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0UmFkaW9Db250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxuXHRGcmFnbWVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBkZWZhdWx0R2FsbGVyeUltYWdlcyA9IFt7XG5cdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL19ucUFwZ0ctUXJZLzE2MDB4OTAwXCIsXG5cdFwiaWRcIjogLTEsXG5cdFwic2l6ZXNcIjoge1xuXHRcdFwidGh1bWJuYWlsXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL19ucUFwZ0ctUXJZLzE1MHgxNTBcIlxuXHRcdH0sXG5cdFx0XCJsYXJnZVwiOiB7XG5cdFx0XHRcInVybFwiOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9fbnFBcGdHLVFyWS8xNjAweDkwMFwiLFxuXHRcdFx0XCJ3aWR0aFwiOiAxNjAwLFxuXHRcdFx0XCJoZWlnaHRcIjogOTAwXG5cdFx0fVxuXHR9XG59LCB7XG5cdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL0d0XzRpTUI3aFkwLzE2MDB4OTAwXCIsXG5cdFwiYWx0XCI6IFwiVGhpcyBpcyBhIGNhdGNoeSBpbWFnZSB0aXRsZVwiLFxuXHRcImNhcHRpb25cIjogXCJBIGJyaWxsaWFudCBjYXB0aW9uIHRvIGV4cGxhaW4gaXRzIGNhdGNoaW5lc3NcIixcblx0XCJpZFwiOiAtMixcblx0XCJzaXplc1wiOiB7XG5cdFx0XCJ0aHVtYm5haWxcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vR3RfNGlNQjdoWTAvMTUweDE1MFwiXG5cdFx0fSxcblx0XHRcImxhcmdlXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL0d0XzRpTUI3aFkwLzE2MDB4OTAwXCIsXG5cdFx0XHRcIndpZHRoXCI6IDE2MDAsXG5cdFx0XHRcImhlaWdodFwiOiA5MDBcblx0XHR9XG5cdH1cbn0sIHtcblx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMXZLVG53TE1kcXMvMTYwMHg5MDBcIixcblx0XCJpZFwiOiAtMyxcblx0XCJzaXplc1wiOiB7XG5cdFx0XCJ0aHVtYm5haWxcIjoge1xuXHRcdFx0XCJ1cmxcIjogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMXZLVG53TE1kcXMvMTUweDE1MFwiXG5cdFx0fSxcblx0XHRcImxhcmdlXCI6IHtcblx0XHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzF2S1Rud0xNZHFzLzE2MDB4OTAwXCIsXG5cdFx0XHRcIndpZHRoXCI6IDE2MDAsXG5cdFx0XHRcImhlaWdodFwiOiA5MDBcblx0XHR9XG5cdH1cbn1dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlciggLi4uYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWRJbmRleDogMFxuXHRcdH07XG5cdH1cblxuXHRvblByZXZBcnJvd0NsaWNrKCkge1xuXHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyBnYWxsZXJ5SW1hZ2VzIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBzZWxlY3RlZEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IG5ld0luZGV4ID0gKCBzZWxlY3RlZEluZGV4ICsgZ2FsbGVyeUltYWdlcy5sZW5ndGggLSAxICkgJSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aDtcblx0XHR0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXg6IG5ld0luZGV4IH0gKTtcblx0fVxuXG5cdG9uTmV4dEFycm93Q2xpY2soKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzOiB7IGdhbGxlcnlJbWFnZXMgfSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IHNlbGVjdGVkSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSAoIHNlbGVjdGVkSW5kZXggKyAxICkgJSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aDtcblx0XHR0aGlzLnNldFN0YXRlKCB7IHNlbGVjdGVkSW5kZXg6IG5ld0luZGV4IH0gKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0c2xpZGVzaG93VHlwZSxcblx0XHRcdFx0Z2FsbGVyeUltYWdlcyxcblx0XHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0XHRpc1NlbGVjdGVkLFxuXHRcdFx0Y2xhc3NOYW1lXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRsZXQgeyBzZWxlY3RlZEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0aWYgKCAhIGdhbGxlcnlJbWFnZXMubGVuZ3RoICkge1xuXHRcdFx0ZGVmYXVsdEdhbGxlcnlJbWFnZXMubWFwKCBpbWFnZSA9PiBnYWxsZXJ5SW1hZ2VzLnB1c2goIGltYWdlICkgKVxuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0ZWRJbmRleCA+PSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCApIHtcblx0XHRcdHNlbGVjdGVkSW5kZXggPSBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblxuXHRcdFx0XHQ8U2xpZGVzaG93UHJldmlld1xuXHRcdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XG5cdFx0XHRcdFx0cHJldmlld0ltYWdlPXsgZ2FsbGVyeUltYWdlc1sgc2VsZWN0ZWRJbmRleCBdIH1cblx0XHRcdFx0XHRvblByZXZBcnJvd0NsaWNrPXsgdGhpcy5vblByZXZBcnJvd0NsaWNrLmJpbmQoIHRoaXMgKSB9XG5cdFx0XHRcdFx0b25OZXh0QXJyb3dDbGljaz17IHRoaXMub25OZXh0QXJyb3dDbGljay5iaW5kKCB0aGlzICkgfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdub3ZhLWJsb2Nrcy1zbGlkZXNob3ctdHlwZS1wYW5lbCcgfVxuXHRcdFx0XHRcdFx0dGl0bGU9eyBfXyggJ1NsaWRlc2hvdyBUeXBlJywgJ19fcGx1Z2luX3R4dGQnICkgfT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2xpZGVzaG93VHlwZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2xpZGVzaG93VHlwZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNsaWRlc2hvd1R5cGUgfSApIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0dhbGxlcnknLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnZ2FsbGVyeSdcblx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdDdXN0b20nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnY3VzdG9tJ1xuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ1Byb2plY3RzJywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3Byb2plY3RzJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7ICEhIGdhbGxlcnlJbWFnZXMubGVuZ3RoICYmIDxHYWxsZXJ5UHJldmlld1xuXHRcdFx0XHRcdFx0XHRnYWxsZXJ5SW1hZ2VzPXsgZ2FsbGVyeUltYWdlcyB9XG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0SW1hZ2U9eyBzZWxlY3RlZEluZGV4ID0+IHsgdGhpcy5zZXRTdGF0ZSggeyBzZWxlY3RlZEluZGV4IH0gKSB9IH1cblx0XHRcdFx0XHRcdFx0aXNTZWxlY3RlZD17IGlzU2VsZWN0ZWQgfVxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17IHNlbGVjdGVkSW5kZXggfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0PEdhbGxlcnlQbGFjZWhvbGRlciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0eyAnZ2FsbGVyeScgPT09IHNsaWRlc2hvd1R5cGUgJiYgPEZyYWdtZW50PlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdDb250ZW50IFBvc2l0aW9uJywgJ19fcGx1Z2luX3R4dGQnICkgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLntcblx0XHRcdFx0XHRcdFx0XHQuLi50aGlzLnByb3BzLFxuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLnRoaXMucHJvcHMuYXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IH0gLz5cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdFx0XHQ8Q29sb3JQYW5lbCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdIZWlnaHQnLCAnX19wbHVnaW5fdHh0ZCcgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHRcdFx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW5pbXVtIEhlaWdodCcsICdfX3BsdWdpbl90eHRkJyApIH1cblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17IG1pbkhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBtaW5IZWlnaHQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtaW5IZWlnaHQ6IHBhcnNlSW50KCBtaW5IZWlnaHQsIDEwICkgfSApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0F1dG8nLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAwXG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnSGFsZicsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDUwXG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnVHdvIFRoaXJkcycsICdfX3BsdWdpbl90eHRkJyApLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDY2XG5cdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCAnVGhyZWUgUXVhcnRlcnMnLCAnX19wbHVnaW5fdHh0ZCcgKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA3NVxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0Z1bGwgSGVpZ2h0JywgJ19fcGx1Z2luX3R4dGQnICksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMTAwXG5cdFx0XHRcdFx0XHRcdFx0fV19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHRcdFx0PExheW91dFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHRcdDxQYXJhbGxheFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cblx0XHRcdFx0XHR7ICdnYWxsZXJ5JyAhPT0gc2xpZGVzaG93VHlwZSAmJiA8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0NvbWluZyBTb29uJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cblx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0XHQ8QWxpZ25tZW50VG9vbGJhciB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDxDb2xvclRvb2xiYXIgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9lZGl0LmpzIiwiY29uc3Qge1xuXHRDb21wb25lbnQsXG5cdEZyYWdtZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCB7XG5cdEdhbGxlcnlQbGFjZWhvbGRlclxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuaW1wb3J0IFNsaWRlc2hvd0JhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuY29uc3Qge1xuXHRNZWRpYVVwbG9hZCxcbn0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVzaG93UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoLi4uYXJndW1lbnRzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKCB0aGlzICkgKTtcblx0XHR0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcblx0fVxuXG5cdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkaW1lbnNpb25zOiB7XG5cdFx0XHRcdHdpZHRoOiB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyQ29udGVudCgpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRcdGNvbnRlbnRQYWRkaW5nLFxuXHRcdFx0XHRjb250ZW50UGFkZGluZ0N1c3RvbSxcblx0XHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0XHRjb250ZW50V2lkdGhDdXN0b20sXG5cdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0XHQvLyBhbGlnbm1lbnRcblx0XHRcdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHRcdC8vIGNvbG9yc1xuXHRcdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHlsZSxcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0cmVuZ3RoLFxuXHRcdFx0XHQvLyBtZWRpYVxuXHRcdFx0XHRnYWxsZXJ5SW1hZ2VzXG5cdFx0XHR9LFxuXHRcdFx0cHJldmlld0ltYWdlLFxuXHRcdFx0Y2xhc3NOYW1lXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtc2xpZGVzaG93IGlzLXJlYWR5Jyxcblx0XHRcdGBub3ZhLXUtdmFsaWduLSR7dmVydGljYWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdGBub3ZhLXUtY29udGVudC13aWR0aC0ke2NvbnRlbnRXaWR0aH1gLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gXG5cdFx0XVxuXG5cdFx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdFx0c2xpZGVzaG93OiB7IGNvbG9yOiBjb250ZW50Q29sb3IgfSxcblx0XHR9XG5cblx0XHRpZiAoICEhIGFwcGx5TWluaW11bUhlaWdodEJsb2NrICkge1xuXHRcdFx0c3R5bGVzLnNsaWRlc2hvdy5taW5IZWlnaHQgPSBtaW5IZWlnaHQgKyAndmgnXG5cdFx0fVxuXG5cdFx0bGV0IG1heEFzcGVjdFJhdGlvID0gMDtcblx0XHRsZXQgbWVkaWFNaW5IZWlnaHQgPSAwO1xuXHRcdGxldCBzbGlkZXJXaWR0aCA9IDA7XG5cblx0XHRnYWxsZXJ5SW1hZ2VzLm1hcCggaW1hZ2UgPT4ge1xuXHRcdFx0aWYgKCAhISBpbWFnZS5zaXplcyAmJiAhISBpbWFnZS5zaXplcy5sYXJnZSAmJiAhISBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCApIHtcblx0XHRcdFx0Y29uc3QgYXNwZWN0UmF0aW8gPSBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCAvIGltYWdlLnNpemVzLmxhcmdlLmhlaWdodDtcblx0XHRcdFx0bWF4QXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbyA+IG1heEFzcGVjdFJhdGlvID8gYXNwZWN0UmF0aW8gOiBtYXhBc3BlY3RSYXRpbztcblx0XHRcdFx0bWVkaWFNaW5IZWlnaHQgPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggLyBtYXhBc3BlY3RSYXRpbztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRzdHlsZXMuc2xpZGVyID0ge1xuXHRcdFx0bWluSGVpZ2h0OiBNYXRoLm1heCggbWVkaWFNaW5IZWlnaHQsIG1heEFzcGVjdFJhdGlvICkgKyAncHgnXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0eyAhISBnYWxsZXJ5SW1hZ2VzLmxlbmd0aCAmJiA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gc3R5bGU9eyBzdHlsZXMuc2xpZGVzaG93IH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fc2xpZGVyXCIgc3R5bGU9eyBzdHlsZXMuc2xpZGVyIH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19zbGlkZVwiPlxuXHRcdFx0XHRcdFx0XHR7IHByZXZpZXdJbWFnZSAmJiA8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PFNsaWRlc2hvd0JhY2tncm91bmQgeyAuLi50aGlzLnByb3BzIH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250ZW50IG5vdmEtdS1jb250ZW50LXBhZGRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtYWxpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMj57IHByZXZpZXdJbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+eyBwcmV2aWV3SW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1wcmV2IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUHJldkFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV4dEFycm93Q2xpY2t9PjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHR7ICEgZ2FsbGVyeUltYWdlcy5sZW5ndGggJiYgPEZyYWdtZW50PlxuXHRcdFx0XHRcdCA8R2FsbGVyeVBsYWNlaG9sZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19jb250cm9sc1wiPlxuXHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2Fycm93IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tcHJldiBub3ZhLXNsaWRlc2hvd19fYXJyb3ctLWRpc2FibGVkXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fYXJyb3cgbm92YS1zbGlkZXNob3dfX2Fycm93LS1uZXh0IG5vdmEtc2xpZGVzaG93X19hcnJvdy0tZGlzYWJsZWRcIj48L2Rpdj5cblx0XHRcdFx0XHQgPC9kaXY+XG5cdFx0XHRcdCA8L0ZyYWdtZW50PiB9XG5cdFx0ICAgIDwvRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgZGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9eyBlbCA9PiAoIHRoaXMuY29udGFpbmVyID0gZWwgKSB9PlxuXHRcdFx0XHR7IGRpbWVuc2lvbnMgJiYgdGhpcy5yZW5kZXJDb250ZW50KCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3ByZXZpZXcuanMiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcblx0RnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0fVxuXG5cdHJlbmRlcigge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHNsaWRlc2hvd1R5cGUsXG5cdFx0XHRnYWxsZXJ5SW1hZ2VzLFxuXHRcdFx0Ly8gbGF5b3V0XG5cdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdGNvbnRlbnRQYWRkaW5nQ3VzdG9tLFxuXHRcdFx0Y29udGVudFdpZHRoLFxuXHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0Ly8gYWxpZ25tZW50XG5cdFx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHQvLyBwYXJhbGxheFxuXHRcdFx0ZW5hYmxlUGFyYWxsYXgsXG5cdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdHBhcmFsbGF4Q3VzdG9tQW1vdW50LFxuXHRcdFx0Ly8gY29sb3JzXG5cdFx0XHRjb250ZW50Q29sb3IsXG5cdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGhcblx0XHR9LFxuXHRcdGNsYXNzTmFtZSxcblx0XHRzZXRBdHRyaWJ1dGVzXG5cdH0gKSB7XG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRzbGlkZXNob3c6IHtcblx0XHRcdFx0Y29sb3I6IGNvbnRlbnRDb2xvcixcblx0XHRcdH0sXG5cdFx0XHRmb3JlZ3JvdW5kOiB7XG5cblx0XHRcdH0sXG5cdFx0XHRjb250ZW50OiB7XG5cblx0XHRcdH0sXG5cdFx0XHRpbWFnZToge1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBjb250ZW50UGFkZGluZyA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nID0gY29udGVudFBhZGRpbmdDdXN0b21cblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRXaWR0aCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuY29udGVudC5tYXhXaWR0aCA9IGAke2NvbnRlbnRXaWR0aEN1c3RvbX0lYFxuXHRcdH1cblxuXHRcdGlmICggb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgKSB7XG5cdFx0XHRzdHlsZXMuaW1hZ2Uub3BhY2l0eSA9IDEgLSBvdmVybGF5RmlsdGVyU3RyZW5ndGggLyAxMDBcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc2VzID0gW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J25vdmEtc2xpZGVzaG93Jyxcblx0XHRcdGBub3ZhLXUtdmFsaWduLSR7dmVydGljYWxBbGlnbm1lbnR9YCxcblx0XHRcdGBub3ZhLXUtaGFsaWduLSR7aG9yaXpvbnRhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1zcGFjaW5nLSR7Y29udGVudFBhZGRpbmd9YCxcblx0XHRcdGBub3ZhLXUtY29udGVudC13aWR0aC0ke2NvbnRlbnRXaWR0aH1gLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kYCxcblx0XHRcdGBub3ZhLXUtYmFja2dyb3VuZC0ke292ZXJsYXlGaWx0ZXJTdHlsZX1gLFxuXHRcdFx0J2FsaWduZnVsbCdcblx0XHRdXG5cblx0XHRpZiAoICEhIGVuYWJsZVBhcmFsbGF4ICkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKCAnbm92YS1zbGlkZXNob3ctLXBhcmFsbGF4JyApO1xuXHRcdH1cblxuXHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyYWxsYXhBbW91bnQ7XG5cdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oMSwgYWN0dWFsUGFyYWxsYXhBbW91bnQgLyAxMDAgKSwgMCApO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oICcgJyApfSBzdHlsZT17c3R5bGVzLnNsaWRlc2hvd30gZGF0YS1taW4taGVpZ2h0PXsgbWluSGVpZ2h0IH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX21hc2tcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19zbGlkZXJcIiBkYXRhLXJlbGxheC1hbW91bnQ9eyBhY3R1YWxQYXJhbGxheEFtb3VudCB9PlxuXHRcdFx0XHRcdFx0eyBnYWxsZXJ5SW1hZ2VzLm1hcCggaW1hZ2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX3NsaWRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kIG5vdmEtdS1iYWNrZ3JvdW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJub3ZhLXNsaWRlc2hvd19fbWVkaWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17IGltYWdlLnNpemVzLmxhcmdlLnVybCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9eyBzdHlsZXMuaW1hZ2UgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtd2lkdGg9eyBpbWFnZS5zaXplcy5sYXJnZS53aWR0aCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1oZWlnaHQ9eyBpbWFnZS5zaXplcy5sYXJnZS5oZWlnaHQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19mb3JlZ3JvdW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2NvbnRlbnQgbm92YS11LWNvbnRlbnQtcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS11LWNvbnRlbnQtYWxpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX2lubmVyLWNvbnRhaW5lciBub3ZhLXUtY29udGVudC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+eyBpbWFnZS5hbHQgfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnsgaW1hZ2UuY2FwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ibG9ja3Mvc2xpZGVzaG93L3NhdmUuanMiLCJjb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdElubmVyQmxvY2tzLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5pbXBvcnQgSGVyb0JhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb1ByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC8vIGxheW91dFxuXHRcdFx0XHRjb250ZW50UGFkZGluZyxcblx0XHRcdFx0Y29udGVudFBhZGRpbmdDdXN0b20sXG5cdFx0XHRcdGNvbnRlbnRXaWR0aCxcblx0XHRcdFx0Y29udGVudFdpZHRoQ3VzdG9tLFxuXHRcdFx0XHQvLyBhbGlnbm1lbnRcblx0XHRcdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0XHRcdGhvcml6b250YWxBbGlnbm1lbnQsXG5cdFx0XHRcdC8vIGhlaWdodFxuXHRcdFx0XHRtaW5IZWlnaHQsXG5cdFx0XHRcdGFwcGx5TWluaW11bUhlaWdodEJsb2NrLFxuXHRcdFx0XHQvLyBpbmRpY2F0b3JzXG5cdFx0XHRcdHNjcm9sbEluZGljYXRvckJsb2NrLFxuXHRcdFx0XHQvLyBjb2xvcnNcblx0XHRcdFx0Y29udGVudENvbG9yLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHR9LFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IFtcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdCdub3ZhLWhlcm8nLFxuXHRcdFx0YG5vdmEtdS12YWxpZ24tJHt2ZXJ0aWNhbEFsaWdubWVudH1gLFxuXHRcdFx0YG5vdmEtdS1oYWxpZ24tJHtob3Jpem9udGFsQWxpZ25tZW50fWAsXG5cdFx0XHRgbm92YS11LXNwYWNpbmctJHtjb250ZW50UGFkZGluZ31gLFxuXHRcdFx0YG5vdmEtdS1jb250ZW50LXdpZHRoLSR7Y29udGVudFdpZHRofWAsXG5cdFx0XHRgbm92YS11LWJhY2tncm91bmRgLFxuXHRcdFx0YG5vdmEtdS1iYWNrZ3JvdW5kLSR7b3ZlcmxheUZpbHRlclN0eWxlfWBcblx0XHRdXG5cblx0XHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0XHRoZXJvOiB7XG5cdFx0XHRcdGNvbG9yOiBjb250ZW50Q29sb3IsXG5cdFx0XHR9LFxuXHRcdFx0Zm9yZWdyb3VuZDoge30sXG5cdFx0XHRjb250ZW50OiB7fSxcblx0XHR9XG5cblx0XHRpZiAoICEhIGFwcGx5TWluaW11bUhlaWdodEJsb2NrICkge1xuXHRcdFx0c3R5bGVzLmhlcm8ubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3ZoJ1xuXHRcdH1cblxuXHRcdGlmICggY29udGVudFBhZGRpbmcgPT09ICdjdXN0b20nICkge1xuXHRcdFx0c3R5bGVzLmZvcmVncm91bmQucGFkZGluZ1RvcCA9IGAke2NvbnRlbnRQYWRkaW5nQ3VzdG9tfSVgXG5cdFx0XHRzdHlsZXMuZm9yZWdyb3VuZC5wYWRkaW5nQm90dG9tID0gYCR7Y29udGVudFBhZGRpbmdDdXN0b219JWBcblx0XHR9XG5cblx0XHRpZiAoIGNvbnRlbnRXaWR0aCA9PT0gJ2N1c3RvbScgKSB7XG5cdFx0XHRzdHlsZXMuY29udGVudC5tYXhXaWR0aCA9IGAke2NvbnRlbnRXaWR0aEN1c3RvbX0lYFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9IHN0eWxlPXtzdHlsZXMuaGVyb30+XG5cdFx0XHRcdDxIZXJvQmFja2dyb3VuZCB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS1oZXJvX19mb3JlZ3JvdW5kIG5vdmEtdS1jb250ZW50LXBhZGRpbmcnIHN0eWxlPXsgc3R5bGVzLmZvcmVncm91bmQgfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbm92YS11LWNvbnRlbnQtYWxpZ24nPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19faW5uZXItY29udGFpbmVyIG5vdmEtdS1jb250ZW50LXdpZHRoJyBzdHlsZT17IHN0eWxlcy5jb250ZW50IH0+XG5cdFx0XHRcdFx0XHRcdDxJbm5lckJsb2NrcyB0ZW1wbGF0ZT17W1xuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvaGVhZGluZycsIHsgY29udGVudDogJ1RoaXMgaXMgYSBjYXRjaHkgdGl0bGUnLCBhbGlnbjogJ2NlbnRlcicsIGxldmVsOiAxIH0gXSxcblx0XHRcdFx0XHRcdFx0XHRbICdjb3JlL3BhcmFncmFwaCcsIHsgY29udGVudDogJ0EgYnJpbGxpYW50IHN1YnRpdGxlIHRvIGV4cGxhaW4gaXRzIGNhdGNoaW5lc3MnLCBhbGlnbjogJ2NlbnRlcicgfSBdLFxuXHRcdFx0XHRcdFx0XHRcdFsgJ2NvcmUvYnV0dG9uJywgeyB0ZXh0OiAnRGlzY292ZXIgbW9yZScsIGFsaWduOiAnY2VudGVyJyB9IF0sXG5cdFx0XHRcdFx0XHRcdF19IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsgc2Nyb2xsSW5kaWNhdG9yQmxvY2sgJiYgPGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19faW5kaWNhdG9yJz48L2Rpdj4gfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vcHJldmlldy5qcyIsImltcG9ydCAqIGFzIGljb25zIGZyb20gXCIuLi9pY29uc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdENvbXBvbmVudCxcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdE1lZGlhVXBsb2FkLFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdERyb3Bkb3duLFxuXHRJY29uQnV0dG9uLFxuXHRUb29sYmFyLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmltcG9ydCB7XG5cdEFsaWdubWVudENvbnRyb2xzLFxuXHRDb2xvckNvbnRyb2xzLFxuXHRPdmVybGF5Q29udHJvbHMsXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScsICd2aWRlbycgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVyb0Jsb2NrQ29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0PFRvb2xiYXIgY2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhcic+XG5cdFx0XHRcdDxEcm9wZG93blxuXHRcdFx0XHRcdHBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdwaXhlbGdyYWRlLWhlcm8tYmxvY2stdG9vbGJhci1kcm9wZG93bidcblx0XHRcdFx0XHRjb250ZW50Q2xhc3NOYW1lPSdjb21wb25lbnRzLW5vdmEtLXBvcG92ZXInXG5cdFx0XHRcdFx0cmVuZGVyVG9nZ2xlPXsgKCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IChcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblRvZ2dsZSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyBpY29ucy5hbGlnbm1lbnQgfVxuXHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPXsgaXNPcGVuIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NvbnRlbnQgYWxpZ25tZW50JywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRyZW5kZXJDb250ZW50PXsgKCB7IG9uQ2xvc2UgfSApID0+IDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxBbGlnbm1lbnRDb250cm9scyB7IC4uLnRoaXMucHJvcHMgfSAvPlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXInPlxuXHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncGl4ZWxncmFkZS1oZXJvLWJsb2NrLXRvb2xiYXItZHJvcGRvd24nXG5cdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT0nY29tcG9uZW50cy1ub3ZhLS1wb3BvdmVyJ1xuXHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17ICggeyBpc09wZW4sIG9uVG9nZ2xlIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25Ub2dnbGUgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgaWNvbnMuaW52ZXJ0IH1cblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD17IGlzT3BlbiB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdJbnZlcnQgY29sb3JzJywgJ19fcGx1Z2luX3R4dGQnICkgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdib3R0b20nXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGZvY3VzT25Nb3VudD17IGZhbHNlIH1cblx0XHRcdFx0XHRyZW5kZXJDb250ZW50PXsgKCB7IG9uQ2xvc2UgfSApID0+IDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxDb2xvckNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0XHQ8T3ZlcmxheUNvbnRyb2xzIHsgLi4udGhpcy5wcm9wcyB9IC8+XG5cdFx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0PFRvb2xiYXI+XG5cdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYSB9ICkgfVxuXHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N3YXAgTWVkaWEnLCAnX19wbHVnaW5fdHh0ZCcgKSB9XG5cdFx0XHRcdFx0XHRcdGljb249J2Zvcm1hdC1pbWFnZSdcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyPlxuXHRcdDwvQmxvY2tDb250cm9scz5cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL2hlcm8vY29udHJvbHMuanMiLCJjb25zdCB7XG5cdENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnQ7XG5cbi8vIFRha2UgaW4gYSBjb21wb25lbnQgYXMgYXJndW1lbnQgV3JhcHBlZENvbXBvbmVudFxuY29uc3Qgd2l0aFBhcmFsbGF4ID0gZnVuY3Rpb24oIFdyYXBwZWRDb21wb25lbnQgKSB7XG5cblx0Ly8gQW5kIHJldHVybiBhIG5ldyBhbm9ueW1vdXMgY29tcG9uZW50XG5cdHJldHVybiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblxuXHRcdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFx0d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0cHJvZ3Jlc3M6IDAuNSxcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQtcG9zdC1sYXlvdXRfX2NvbnRlbnQnKVswXTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKCB0aGlzICkgKTtcblx0XHRcdHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKCB0aGlzICkgKTtcblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdH1cblxuXHRcdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0XHRjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXBvc3QtbGF5b3V0X19jb250ZW50JylbMF07XG5cdFx0XHRjb25zdCBjb250YWluZXJCb3ggPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IHByb2dyZXNzID0gKCB0aGlzLnN0YXRlLndpbmRvd0hlaWdodCAtIGNvbnRhaW5lckJveC55ICkgLyAoIHRoaXMuc3RhdGUud2luZG93SGVpZ2h0ICsgdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0ICk7XG5cdFx0XHRjb25zdCBhY3R1YWxQcm9ncmVzcyA9IE1hdGgubWF4KCBNYXRoLm1pbiggcHJvZ3Jlc3MsIDEgKSwgMCApO1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0d2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0c2Nyb2xsVG9wOiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wLFxuXHRcdFx0XHRwcm9ncmVzczogYWN0dWFsUHJvZ3Jlc3MsXG5cdFx0XHRcdGRpbWVuc2lvbnM6IHtcblx0XHRcdFx0XHR3aWR0aDogdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQsXG5cdFx0XHRcdFx0dG9wOiBjb250YWluZXJCb3gueSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGdldFBhcmFsbGF4U3R5bGVzKCkge1xuXG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRwYXJhbGxheEFtb3VudCxcblx0XHRcdFx0XHRwYXJhbGxheEN1c3RvbUFtb3VudCxcblx0XHRcdFx0fVxuXHRcdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRcdGxldCBhY3R1YWxQYXJhbGxheEFtb3VudCA9IHBhcmFsbGF4QW1vdW50ID09PSAnY3VzdG9tJyA/IHBhcmFsbGF4Q3VzdG9tQW1vdW50IDogcGFyc2VJbnQoIHBhcmFsbGF4QW1vdW50LCAxMCApO1xuXHRcdFx0YWN0dWFsUGFyYWxsYXhBbW91bnQgPSBNYXRoLm1heCggTWF0aC5taW4oIDEsIGFjdHVhbFBhcmFsbGF4QW1vdW50IC8gMTAwICksIDAgKTtcblxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRkaW1lbnNpb25zLFxuXHRcdFx0XHR3aW5kb3dIZWlnaHQsXG5cdFx0XHRcdHByb2dyZXNzXG5cdFx0XHR9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdFx0Y29uc3QgbmV3SGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQgKiAoMSAtIGFjdHVhbFBhcmFsbGF4QW1vdW50KSArIHdpbmRvd0hlaWdodCAqIGFjdHVhbFBhcmFsbGF4QW1vdW50O1xuXHRcdFx0Y29uc3Qgc2NhbGUgPSBuZXdIZWlnaHQgLyBkaW1lbnNpb25zLmhlaWdodDtcblx0XHRcdGNvbnN0IG9mZnNldFkgPSBkaW1lbnNpb25zLmhlaWdodCAqICggMSAtIHNjYWxlICkgLyAyO1xuXHRcdFx0Y29uc3QgbW92ZSA9ICggd2luZG93SGVpZ2h0ICsgZGltZW5zaW9ucy5oZWlnaHQgKSAqICggcHJvZ3Jlc3MgLSAwLjUgKSAqIGFjdHVhbFBhcmFsbGF4QW1vdW50O1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWlnaHQ6IG5ld0hlaWdodCxcblx0XHRcdFx0dHJhbnNpdGlvbjogJ25vbmUnLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnICsgKCBtb3ZlICsgb2Zmc2V0WSApICsgJ3B4KSdcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCkge1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtbWFza1wiIHJlZj17IGVsID0+ICggdGhpcy5jb250YWluZXIgPSBlbCApIH0+XG5cdFx0XHRcdFx0eyB0aGlzLnN0YXRlLmRpbWVuc2lvbnMgJiYgPFdyYXBwZWRDb21wb25lbnQgeyAuLi50aGlzLnByb3BzIH0gc3R5bGU9eyB0aGlzLmdldFBhcmFsbGF4U3R5bGVzKCkgfSAvPiB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyYWxsYXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3dpdGgtcGFyYWxsYXgvaW5kZXguanMiLCJpbXBvcnQgd2l0aFBhcmFsbGF4IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1wYXJhbGxheCc7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNsYXNzIEhlcm9CYWNrZ3JvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0b3ZlcmxheUZpbHRlclN0eWxlLFxuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3RyZW5ndGgsXG5cdFx0XHRcdG1lZGlhXG5cdFx0XHR9XG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBzdHlsZXMgPSB7fTtcblxuXHRcdGlmICggb3ZlcmxheUZpbHRlclN0eWxlICE9PSAnbm9uZScgKSB7XG5cdFx0XHRzdHlsZXMub3BhY2l0eSA9IDEgLSBvdmVybGF5RmlsdGVyU3RyZW5ndGggLyAxMDBcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J25vdmEtaGVyb19fYmFja2dyb3VuZCcgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG5cdFx0XHRcdHttZWRpYS50eXBlID09PSAnaW1hZ2UnICYmIHR5cGVvZiBtZWRpYS5zaXplcyAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0ICYmIDxpbWcgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX21lZGlhJyBzcmM9e21lZGlhLnNpemVzLmZ1bGwudXJsfSBzdHlsZT17c3R5bGVzfS8+fVxuXHRcdFx0XHR7bWVkaWEudHlwZSA9PT0gJ3ZpZGVvJ1xuXHRcdFx0XHQgJiYgPHZpZGVvIG11dGVkIGF1dG9QbGF5IGxvb3AgY2xhc3NOYW1lPSdub3ZhLWhlcm9fX21lZGlhJyBzcmM9e21lZGlhLnVybH0gc3R5bGU9e3N0eWxlc30vPn1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhcmFsbGF4KCBIZXJvQmFja2dyb3VuZCApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jsb2Nrcy9oZXJvL2JhY2tncm91bmQuanMiLCJpbXBvcnQgd2l0aFBhcmFsbGF4IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1wYXJhbGxheCc7XG5cbmNvbnN0IHtcblx0Q29tcG9uZW50LFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNsYXNzIFNsaWRlc2hvd0JhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRvdmVybGF5RmlsdGVyU3R5bGUsXG5cdFx0XHRcdG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCxcblx0XHRcdH1cblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IHN0eWxlcyA9IHt9O1xuXG5cdFx0aWYgKCBvdmVybGF5RmlsdGVyU3R5bGUgIT09ICdub25lJyApIHtcblx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gMSAtIG92ZXJsYXlGaWx0ZXJTdHJlbmd0aCAvIDEwMFxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdmEtc2xpZGVzaG93X19iYWNrZ3JvdW5kXCIgc3R5bGU9eyB0aGlzLnByb3BzLnN0eWxlIH0+XG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibm92YS1zbGlkZXNob3dfX21lZGlhXCIgc3JjPXsgdGhpcy5wcm9wcy5wcmV2aWV3SW1hZ2Uuc2l6ZXMubGFyZ2UudXJsIH0gYWx0PVwiXCIgc3R5bGU9eyBzdHlsZXMgfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJhbGxheCggU2xpZGVzaG93QmFja2dyb3VuZCApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYmxvY2tzL3NsaWRlc2hvdy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==