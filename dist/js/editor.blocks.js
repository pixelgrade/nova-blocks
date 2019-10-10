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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(37)('wks');
var uid = __webpack_require__(32);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return nova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return slideshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return foodmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return opentable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return alignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return alignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return alignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return announcement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return headline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return navigation; });
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;


var nova = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 36 36", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
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

var foodmenu = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement(
        "mask",
        { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "24", height: "24" },
        wp.element.createElement("path", { d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z", fill: "#6565F2" })
    ),
    wp.element.createElement(
        "g",
        { mask: "url(#mask0)" },
        wp.element.createElement("path", { d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z", fill: "#6565F2" }),
        wp.element.createElement("path", { d: "M18.0001 9.73684C19.1047 9.73684 20.0394 8.81569 19.7116 7.76087C17.739 1.41304 6.26117 1.41304 4.28861 7.76087C3.96084 8.81569 4.89552 9.73684 6.00009 9.73684H18.0001Z", fill: "white" }),
        wp.element.createElement("path", { d: "M5 13.1429C5 13.6162 5.38376 14 5.85714 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H6.14286C5.51167 12 5 12.5117 5 13.1429ZM5 17.1429C5 17.6162 5.38376 18 5.85714 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H6.14286C5.51167 16 5 16.5117 5 17.1429ZM18 13.1429C18 13.6162 18.3838 14 18.8571 14H19.0909C19.593 14 20 13.593 20 13.0909V12.7692C20 12.3444 19.6556 12 19.2308 12H19.1429C18.5117 12 18 12.5117 18 13.1429ZM18 17.1429C18 17.6162 18.3838 18 18.8571 18H19.0909C19.593 18 20 17.593 20 17.0909V16.7692C20 16.3444 19.6556 16 19.2308 16H19.1429C18.5117 16 18 16.5117 18 17.1429Z", fill: "#FFE42E" })
    )
);

var opentable = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM8.85456 12.3999C8.85456 9.09043 11.5325 6.3999 14.8546 6.3999C18.164 6.3999 20.8419 9.09043 20.8546 12.3999C20.8546 15.7094 18.164 18.3999 14.8546 18.3999C11.5451 18.3999 8.85456 15.7094 8.85456 12.3999ZM13.3514 12.3999C13.3514 13.2336 14.0209 13.9031 14.8546 13.9031C15.6756 13.9031 16.3451 13.2336 16.3577 12.3999C16.3577 11.5662 15.6882 10.8967 14.8546 10.8967C14.0209 10.8967 13.3514 11.5662 13.3514 12.3999ZM5.82298 10.8967C4.9893 10.8967 4.31982 11.5662 4.31982 12.3999C4.31982 13.2336 4.9893 13.9031 5.82298 13.9031C6.65667 13.9031 7.32614 13.2336 7.32614 12.3999C7.32614 11.5662 6.65667 10.8967 5.82298 10.8967Z", fill: "#6565F2" })
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

var map = wp.element.createElement(
    "svg",
    { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" },
    wp.element.createElement("path", {
        fill: "#6565F2",
        fillRule: "evenodd",
        d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.45 10.55a6.55 6.55 0 1113.1 0c0 2.236-2.504 5.893-4.416 8.359a2.677 2.677 0 01-4.268 0c-1.912-2.466-4.415-6.123-4.415-8.36zm3.4-.186a3.15 3.15 0 106.301 0 3.15 3.15 0 00-6.301 0z",
        clipRule: "evenodd"
    })
);

var announcement = wp.element.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg", fill: "none" },
    wp.element.createElement("path", {
        fill: "#6565F2",
        fillRule: "evenodd",
        d: "M2 0a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2H2zm14 2H2v4h14V2z",
        clipRule: "evenodd"
    })
);

var headline = wp.element.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" },
    wp.element.createElement("path", {
        fill: "#6565F2",
        fillRule: "evenodd",
        d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.147 16.208a1 1 0 01-.978.792h-.762a1 1 0 01-.979-1.207l.428-2.023a1 1 0 00-.978-1.207h-2.333a1 1 0 00-.978.792l-.608 2.854A1 1 0 017.98 17h-.746a1 1 0 01-.978-1.208l1.915-9A1 1 0 019.15 6h.754a1 1 0 01.978 1.207l-.403 1.9a1 1 0 00.979 1.208h2.332a1 1 0 00.978-.791l.584-2.733a1 1 0 01.978-.79h.754a1 1 0 01.978 1.207l-1.915 9z",
        clipRule: "evenodd"
    })
);

var header = wp.element.createElement(
    "svg",
    { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 12C0 5.37258 5.37258 0 12 0c6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12zm10 7c-.55228 0-1-.4477-1-1s.44772-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4zm0 2c-1.65685 0-3-1.3431-3-3s1.34315-3 3-3h4c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3h-4zM8 4C5.79086 4 4 5.79086 4 8v3c0 1.1046.89543 2 2 2h12c1.1046 0 2-.8954 2-2V8c0-2.20914-1.7909-4-4-4H8z", fill: "#6565F2" })
);

var logo = wp.element.createElement(
    "svg",
    { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zm0 7c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5 2.7614 0 5-2.2386 5-5 0-2.76142-2.2386-5-5-5zm-7 5c0 3.866 3.13401 7 7 7 3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7z", fill: "#6565F2" })
);

var navigation = wp.element.createElement(
    "svg",
    { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    wp.element.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zM5.85714 8C5.38376 8 5 7.61624 5 7.14286 5 6.51167 5.51167 6 6.14286 6H18c.5523 0 1 .44772 1 1s-.4477 1-1 1H5.85714zM5 12.1429c0 .4733.38376.8571.85714.8571H18c.5523 0 1-.4477 1-1s-.4477-1-1-1H6.14286C5.51167 11 5 11.5117 5 12.1429zM5.85714 18C5.38376 18 5 17.6162 5 17.1429 5 16.5117 5.51167 16 6.14286 16H18c.5523 0 1 .4477 1 1s-.4477 1-1 1H5.85714z", fill: "#6565F2" })
);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(49);

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
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(84);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(119);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(123);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(84);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(15);
var has = __webpack_require__(17);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(58);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(41);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(55);
var defined = __webpack_require__(30);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withParallaxContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_parallax_panel__ = __webpack_require__(95);










/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var createSlotFill = wp.components.createSlotFill;
var addFilter = wp.hooks.addFilter;


var ParallaxContext = Object(__WEBPACK_IMPORTED_MODULE_6_react__["createContext"])();

var withParallax = function withParallax(WrappedComponent) {

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
			key: 'componentDidMount',
			value: function componentDidMount() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
				window.addEventListener('resize', this.updateHandler);
				scrollContainer.addEventListener('scroll', this.updateHandler);
				this.updateDimensions();

				wp.data.subscribe(this.updateHandler);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
				window.removeEventListener('resize', this.updateHandler);
				scrollContainer.removeEventListener('scroll', this.updateHandler);
			}
		}, {
			key: 'updateDimensions',
			value: function updateDimensions() {
				var scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];

				if (!this.container) {
					return;
				}

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
			key: 'getParallaxStyles',
			value: function getParallaxStyles() {

				if (!this.state.dimensions) {
					return {};
				}

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
			key: 'render',
			value: function render() {
				var _this2 = this;

				return wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(
						'div',
						{ ref: function ref(el) {
								return _this2.container = el;
							} },
						wp.element.createElement(
							ParallaxContext.Provider,
							{ value: { style: this.getParallaxStyles() } },
							wp.element.createElement(WrappedComponent, this.props)
						)
					),
					wp.element.createElement(
						InspectorControls,
						null,
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components_parallax_panel__["a" /* default */], this.props)
					)
				);
			}
		}]);

		return _class;
	}(Component);
};

var withParallaxContext = function withParallaxContext(WrappedComponent) {
	return function (_Component2) {
		__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(_class2, _Component2);

		function _class2() {
			__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, _class2);

			return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_class2.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(_class2)).apply(this, arguments));
		}

		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(_class2, [{
			key: 'render',
			value: function render() {
				var _this4 = this;

				return wp.element.createElement(
					ParallaxContext.Consumer,
					null,
					function (context) {
						return wp.element.createElement(WrappedComponent, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
							parallax: context
						}, _this4.props));
					}
				);
			}
		}]);

		return _class2;
	}(Component);
};



/* harmony default export */ __webpack_exports__["a"] = (withParallax);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(35);
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(54);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(96);



var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var withSelect = wp.data.withSelect;


/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent(function (Component) {
	return withSelect(function (select, ownProps) {
		var _select = select(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* STORE_NAME */]),
		    getSettings = _select.getSettings;

		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, ownProps, {
			settings: getSettings()
		});
	})(Component);
}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parallaxInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return withFirstBlockConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasTouchScreen; });
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

var range = function range(min, max) {
	var array = [];
	for (var i = 0; i <= max - min; i++) {
		array.push(i + min);
	}
	return array;
};

var parallaxInit = function parallaxInit(BLOCK_NAME) {

	(function ($) {

		var $blocks = $('.' + BLOCK_NAME);
		var $targets = $blocks.filter('.has-parallax');

		$targets.find('.' + BLOCK_NAME + '__parallax').rellax({
			container: '.' + BLOCK_NAME + '__mask',
			absolute: isSafari
		});

		$blocks.find('.' + BLOCK_NAME + '__parallax').each(function (i, obj) {
			var $obj = $(obj);
			$obj.imagesLoaded(function () {
				$obj.css('opacity', 1);
			});
		});
	})(jQuery);
};

var withFirstBlockConditions = function withFirstBlockConditions(Component) {

	return function (props) {
		var _wp$data$select = wp.data.select('core/block-editor'),
		    getBlocks = _wp$data$select.getBlocks,
		    getSelectedBlockClientId = _wp$data$select.getSelectedBlockClientId;

		var blocks = getBlocks();
		var selectedBlockClientId = getSelectedBlockClientId();
		var index = blocks.findIndex(function (block) {
			return block.clientId === selectedBlockClientId;
		});
		var show = index === 0 && props.clientId === selectedBlockClientId;

		return show && wp.element.createElement(Component, props);
	};
};

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

var hasTouchScreen = function hasTouchScreen() {
	var hasTouchScreen = false;

	if ("maxTouchPoints" in navigator) {
		hasTouchScreen = navigator.maxTouchPoints > 0;
	} else if ("msMaxTouchPoints" in navigator) {
		hasTouchScreen = navigator.msMaxTouchPoints > 0;
	} else {
		var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
		if (mQ && mQ.media === "(pointer:coarse)") {
			hasTouchScreen = !!mQ.matches;
		} else if ('orientation' in window) {
			hasTouchScreen = true;
		} else {
			var UA = navigator.userAgent;
			hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
		}
	}

	return hasTouchScreen;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(25) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(63)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(52)(String, 'String', function (iterated) {
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
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customized__ = __webpack_require__(79);


var styles = [{ slug: 'customized', label: 'Customized', styles: __WEBPACK_IMPORTED_MODULE_0__customized__["a" /* default */] }, { slug: 'original', label: 'Original', styles: [] }];

/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(65);
var enumBugKeys = __webpack_require__(39);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(56).appendChild(iframe);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(27);
var TAG = __webpack_require__(1)('toStringTag');
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMapStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMapAccentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCenterFromMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getMarkersCenter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_map_center__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(40);




var compileStyles = function compileStyles(styleData) {
	var _props$attributes = this.props.attributes,
	    showLabels = _props$attributes.showLabels,
	    showIcons = _props$attributes.showIcons,
	    styleSlug = _props$attributes.styleSlug;


	var accentColor = getMapAccentColor.call(this);
	var styleDataString = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(styleData).replace(/%ACCENT_COLOR%/g, accentColor);
	var newStyles = JSON.parse(styleDataString);

	if (!showLabels) {
		newStyles.unshift({
			"elementType": "labels.text",
			"stylers": [{ "visibility": "off" }]
		});
	}

	if (!showIcons) {
		newStyles.unshift({
			"elementType": "labels.icon",
			"stylers": [{ "visibility": "off" }]
		});
	}

	return newStyles;
};

var getMapStyles = function getMapStyles() {
	var attributes = this.props.attributes;
	var styleData = attributes.styleData,
	    styleSlug = attributes.styleSlug;

	var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length === 0;
	var selectedStyles = __WEBPACK_IMPORTED_MODULE_2__styles__["a" /* default */].find(function (style) {
		return style.slug === styleSlug;
	});
	var styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
	var mapStyles = shouldHaveCustomStyles && styleDataBySlug || styleData;
	return compileStyles.call(this, mapStyles);
};

var getMapAccentColor = function getMapAccentColor() {
	var settings = this.props.settings;
	var colors = settings.colors;

	var fallbackColor = '#222222';

	if (colors && colors.length) {

		var primary = colors.find(function (color) {
			return color.slug === 'sm-color-primary';
		});
		var secondary = colors.find(function (color) {
			return color.slug === 'sm-color-secondary';
		});
		var tertiary = colors.find(function (color) {
			return color.slug === 'sm-color-tertiary';
		});

		if (primary) {
			return primary.color;
		}

		if (secondary) {
			return secondary.color;
		}

		if (tertiary) {
			return tertiary.color;
		}

		return colors[0].color;
	}

	return fallbackColor;
};

var getCenterFromMarkers = function getCenterFromMarkers(markers) {
	var bounds = new google.maps.LatLngBounds();

	// when there is only one marker bounds aren't accurate at great zoom levels
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

var getMarkersCenter = function getMarkersCenter() {
	return getCenterFromMarkers(this.props.attributes.markers);
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultMapCenter = {
	lat: 47.1665264,
	lng: 27.58285479999995
};

/* harmony default export */ __webpack_exports__["a"] = (defaultMapCenter);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(53);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(64);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(51);
var ITERATOR = __webpack_require__(1)('iterator');
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(66)(false);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
var global = __webpack_require__(5);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(95);
/* unused harmony reexport ParallaxPanel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_indicators_panel__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__position_indicators_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_options__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__gallery_options__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__gallery_options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__color_controls__ = __webpack_require__(98);
/* unused harmony reexport ColorControls */
/* unused harmony reexport ColorPanel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__color_controls__["a"]; });
/* unused harmony reexport OverlayControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alignment_controls__ = __webpack_require__(82);
/* unused harmony reexport AlignmentControls */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__alignment_controls__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__height_controls__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__height_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__height_controls__["b"]; });
/**
 * Internal dependencies
 */












/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(14).f });


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var defined = __webpack_require__(30);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(42);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(67);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(68);
var defineProperty = __webpack_require__(14).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(49);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(35);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
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
}]);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("<svg width=\"62\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 62 75\">\n\t<defs>\n\t\t<path id=\"b\" d=\"M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z\"></path>\n\t\t<filter id=\"a\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n\t\t\t<feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"></feGaussianBlur>\n\t\t\t<feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill=\"none\" fill-rule=\"evenodd\">\n\t\t<use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\" style=\"display:none\"></use>\n\t\t<use fill=\"%ACCENT_COLOR%\" xlink:href=\"#b\"></use>\n\t</g>\n</svg>");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AlignmentControls */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignmentToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_horizontal_alignment_toolbar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_vertical_alignment_toolbar__ = __webpack_require__(191);
/**
 * Internal dependencies
 */






/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton,
    PanelRow = _wp$components.PanelRow,
    Toolbar = _wp$components.Toolbar;


var AlignmentToolbar = function AlignmentToolbar(props) {
	return wp.element.createElement(
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
					icon: __WEBPACK_IMPORTED_MODULE_0__icons__["d" /* alignment */],
					'aria-expanded': isOpen,
					label: __('Content Alignment', '__plugin_txtd'),
					labelPosition: 'bottom'
				});
			},
			focusOnMount: false,
			renderContent: function renderContent() {
				return wp.element.createElement(AlignmentControls, props);
			}
		})
	);
};

var AlignmentControls = function AlignmentControls(props) {
	var _props$attributes = props.attributes,
	    applyMinimumHeightBlock = _props$attributes.applyMinimumHeightBlock,
	    horizontalAlignment = _props$attributes.horizontalAlignment,
	    verticalAlignment = _props$attributes.verticalAlignment,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(
			PanelRow,
			null,
			wp.element.createElement(
				'span',
				null,
				__('Horizontal', '__plugin_txtd')
			),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__block_horizontal_alignment_toolbar__["a" /* default */], {
				value: horizontalAlignment,
				onChange: function onChange(nextHorizontalAlignment) {
					wp.data.select('core/block-editor').getSelectedBlock().innerBlocks.map(function (block) {
						wp.data.dispatch('core/block-editor').updateBlockAttributes(block.clientId, { align: nextHorizontalAlignment });
						return true;
					});
					setAttributes({ horizontalAlignment: nextHorizontalAlignment });
				}
			})
		),
		applyMinimumHeightBlock && wp.element.createElement(
			PanelRow,
			null,
			wp.element.createElement(
				'span',
				null,
				__('Vertical', '__plugin_txtd')
			),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__block_vertical_alignment_toolbar__["a" /* default */], {
				value: verticalAlignment,
				onChange: function onChange(nextVerticalAlignment) {
					return setAttributes({ verticalAlignment: nextVerticalAlignment });
				}
			})
		)
	);
};



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(0);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(105);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(110);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(54);
var hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(44);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(41);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(50);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSeparatorFilters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


var addSeparatorFilters = function addSeparatorFilters(settings) {

	var Separator = function Separator(props) {
		var className = __WEBPACK_IMPORTED_MODULE_0_classnames___default()('wp-block-separator', props.className);

		return wp.element.createElement('div', { className: className, dangerouslySetInnerHTML: {
				__html: settings.separator && settings.separator.markup
			} });
	};

	var replaceSeparatorEdit = wp.compose.createHigherOrderComponent(function (BlockEdit) {
		return function (props) {
			if ('core/separator' === props.name) {
				return wp.element.createElement(Separator, { className: props.attributes.className });
			} else {
				return wp.element.createElement(BlockEdit, props);
			}
		};
	}, "replaceSeparatorEdit");

	var replaceSeparatorSave = function replaceSeparatorSave(element, blockType, attributes) {
		if ('core/separator' !== blockType.name) {
			return element;
		}

		return null;
	};

	wp.hooks.addFilter('editor.BlockEdit', 'nova-theme/separator', replaceSeparatorEdit);
	wp.hooks.addFilter('blocks.getSaveElement', 'nova-theme/separator', replaceSeparatorSave);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(35);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var invoke = __webpack_require__(138);
var html = __webpack_require__(56);
var cel = __webpack_require__(36);
var global = __webpack_require__(5);
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
  if (__webpack_require__(27)(process) == 'process') {
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
/* 91 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(16);
var newPromiseCapability = __webpack_require__(75);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(148);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(151);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_settings__ = __webpack_require__(28);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;


var ParallaxPanel = function ParallaxPanel(props) {
	var _props$attributes = props.attributes,
	    enableParallax = _props$attributes.enableParallax,
	    parallaxAmount = _props$attributes.parallaxAmount,
	    parallaxCustomAmount = _props$attributes.parallaxCustomAmount,
	    focalPoint = _props$attributes.focalPoint,
	    setAttributes = props.setAttributes,
	    parallaxOptions = props.settings.parallaxOptions;


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
			onChange: function onChange(nextParallaxAmount) {
				if (nextParallaxAmount === 'custom') {
					setAttributes({
						parallaxAmount: nextParallaxAmount
					});
				} else {
					setAttributes({
						parallaxAmount: nextParallaxAmount,
						parallaxCustomAmount: parseInt(nextParallaxAmount, 10)
					});
				}
			},
			options: parallaxOptions,
			help: __('The speed at which the parallax effect runs.', '__plugin_txtd')
		}),
		!!enableParallax && 'custom' === parallaxAmount && wp.element.createElement(RangeControl, {
			value: parallaxCustomAmount,
			onChange: function onChange(nextParallaxAmount) {
				return setAttributes({ parallaxCustomAmount: nextParallaxAmount });
			},
			min: 10,
			max: 100,
			step: 10,
			help: __('It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.', '__plugin_txtd')
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__with_settings__["a" /* default */])(ParallaxPanel));

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(167);
var registerStore = wp.data.registerStore;






var STORE_NAME = 'novablocks';

/* unused harmony default export */ var _unused_webpack_default_export = (registerStore(STORE_NAME, {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__
}));

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies;
 */
var isShallowEqualObjects = __webpack_require__( 180 );
var isShallowEqualArrays = __webpack_require__( 181 );

var isArray = Array.isArray;

/**
 * Returns true if the two arrays or objects are shallow equal, or false
 * otherwise.
 *
 * @param {(Array|Object)} a First object or array to compare.
 * @param {(Array|Object)} b Second object or array to compare.
 *
 * @return {boolean} Whether the two values are shallow equal.
 */
function isShallowEqual( a, b ) {
	if ( a && b ) {
		if ( a.constructor === Object && b.constructor === Object ) {
			return isShallowEqualObjects( a, b );
		} else if ( isArray( a ) && isArray( b ) ) {
			return isShallowEqualArrays( a, b );
		}
	}

	return a === b;
}

module.exports = isShallowEqual;
module.exports.isShallowEqualObjects = isShallowEqualObjects;
module.exports.isShallowEqualArrays = isShallowEqualArrays;


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColorControls */
/* unused harmony export ColorPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorToolbar; });
/* unused harmony export OverlayControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(2);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    ColorPalette = _wp$components.ColorPalette,
    Dropdown = _wp$components.Dropdown,
    IconButton = _wp$components.IconButton,
    RadioControl = _wp$components.RadioControl,
    RangeControl = _wp$components.RangeControl,
    Toolbar = _wp$components.Toolbar;
var PanelColorSettings = wp.blockEditor.PanelColorSettings;


var colors = [{
	name: __('Dark', '__plugin_txtd'),
	color: '#000'
}, {
	name: __('Light', '__plugin_txtd'),
	color: '#FFF'
}];

var OverlayControls = function OverlayControls(props) {
	var _props$attributes = props.attributes,
	    overlayFilterStyle = _props$attributes.overlayFilterStyle,
	    overlayFilterStrength = _props$attributes.overlayFilterStrength,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(RadioControl, {
			label: __('Overlay Filter Style', '__plugin_txtd'),
			selected: overlayFilterStyle,
			options: [{ label: __('None', '__plugin_txtd'), value: 'none' }, { label: __('Dark', '__plugin_txtd'), value: 'dark' }, { label: __('Light', '__plugin_txtd'), value: 'light' }],
			onChange: function onChange(nextOverlayFilterStyle) {
				return setAttributes({ overlayFilterStyle: nextOverlayFilterStyle });
			}
		}),
		overlayFilterStyle !== 'none' && wp.element.createElement(RangeControl, {
			label: __('Overlay Filter Strength', '__plugin_txtd'),
			value: overlayFilterStrength,
			onChange: function onChange(nextOverlayFilterStrength) {
				return setAttributes({ overlayFilterStrength: nextOverlayFilterStrength });
			},
			min: 0,
			max: 100,
			step: 10
		})
	);
};

var ColorControls = function ColorControls(props) {
	var contentColor = props.attributes.contentColor,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(ColorPalette, {
		className: 'nova-hide-clear-color',
		value: contentColor,
		colors: colors,
		onChange: function onChange(nextContentColor) {
			return setAttributes({ contentColor: nextContentColor });
		},
		disableCustomColors: true
	});
};

var ColorPanel = function ColorPanel(props) {
	var contentColor = props.attributes.contentColor,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(
		PanelColorSettings,
		{
			className: 'nova-hide-clear-color',
			title: __('Color Settings', '__plugin_txtd'),
			colorSettings: [{
				value: contentColor,
				onChange: function onChange(nextContentColor) {
					return setAttributes({ contentColor: nextContentColor });
				},
				label: __('Content Color', '__plugin_txtd')
			}],
			colors: colors,
			initialOpen: false },
		wp.element.createElement(OverlayControls, props)
	);
};

var ColorToolbar = function ColorToolbar(props) {
	return wp.element.createElement(
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
					icon: __WEBPACK_IMPORTED_MODULE_1__icons__["j" /* invert */],
					'aria-expanded': isOpen,
					label: __('Color Options', '__plugin_txtd'),
					labelPosition: 'bottom'
				});
			},
			focusOnMount: false,
			renderContent: function renderContent() {
				return wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(ColorControls, props),
					wp.element.createElement(OverlayControls, props)
				);
			}
		})
	);
};



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_editor_scss__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filters_with_block_id__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters_with_block_index__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_with_font_size_picker__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_core_separator__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks_announcement_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blocks_google_map__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blocks_header__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blocks_headline__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blocks_hero__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_logo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_media__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_slideshow__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blocks_navigation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blocks_menu_food__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blocks_menu_food_section__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__blocks_menu_food_item__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__blocks_opentable__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__store__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__icons__ = __webpack_require__(2);































var dispatch = wp.data.dispatch;
var updateCategory = wp.blocks.updateCategory;

var novaBlocks = function () {
	function novaBlocks() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, novaBlocks);
	}

	__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(novaBlocks, [{
		key: 'initialize',
		value: function initialize(settings) {
			Object(__WEBPACK_IMPORTED_MODULE_7__blocks_core_separator__["a" /* addSeparatorFilters */])(settings);
			dispatch(__WEBPACK_IMPORTED_MODULE_21__store__["a" /* STORE_NAME */]).updateSettings(settings);
			updateCategory('nova-blocks', {
				icon: __WEBPACK_IMPORTED_MODULE_22__icons__["o" /* nova */]
			});
		}
	}]);

	return novaBlocks;
}();

wp.novaBlocks = new novaBlocks();

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__);






var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var addFilter = wp.hooks.addFilter;
var Component = wp.element.Component;


var enableBlockIdAttributeOnBlocks = ['novablocks/announcement-bar'];

function addBlockIdAttribute(block) {

	if (!enableBlockIdAttributeOnBlocks.includes(block.name)) {
		return block;
	}

	if (typeof block.attributes !== 'undefined') {
		block.attributes = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(block.attributes, {
			blockId: {
				type: 'string',
				default: ''
			}
		});
	}

	return block;
}
addFilter('blocks.registerBlockType', 'novablocks/add-blockId-attribute', addBlockIdAttribute);

var withBlockIdAttribute = createHigherOrderComponent(function (BlockEdit) {

	return function (_Component) {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BetterBlockEdit, _Component);

		function BetterBlockEdit() {
			__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BetterBlockEdit);

			return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BetterBlockEdit.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(BetterBlockEdit)).apply(this, arguments));
		}

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BetterBlockEdit, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (enableBlockIdAttributeOnBlocks.includes(this.props.name)) {
					this.props.setAttributes({
						blockId: this.props.clientId
					});
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return wp.element.createElement(BlockEdit, this.props);
			}
		}]);

		return BetterBlockEdit;
	}(Component);
}, "withBlockIdAttribute");

addFilter('editor.BlockEdit', 'novablocks/with-blockId-attribute', withBlockIdAttribute);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(24);
var $getPrototypeOf = __webpack_require__(51);

__webpack_require__(83)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(57);
module.exports = __webpack_require__(68).f('iterator');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(108);
var step = __webpack_require__(109);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(52)(Array, 'Array', function (iterated, kind) {
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
/* 108 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
__webpack_require__(87);
__webpack_require__(117);
__webpack_require__(118);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(53);
var META = __webpack_require__(113).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(37);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(32);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(68);
var wksDefine = __webpack_require__(69);
var enumKeys = __webpack_require__(114);
var isArray = __webpack_require__(115);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(16);
var toObject = __webpack_require__(24);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(41);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(42);
var gOPNExt = __webpack_require__(116);
var $GOPD = __webpack_require__(86);
var $GOPS = __webpack_require__(70);
var $DP = __webpack_require__(14);
var $keys = __webpack_require__(26);
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
  __webpack_require__(85).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(44).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(25)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(32)('meta');
var isObject = __webpack_require__(16);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(14).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(70);
var pIE = __webpack_require__(44);
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(85).f;
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69)('asyncIterator');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69)('observable');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(11);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(122).set });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(16);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(22)(Function.call, __webpack_require__(86).f(Object.prototype, '__proto__').set, 2);
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(42) });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(128) });


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(9);
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(70);
var pIE = __webpack_require__(44);
var toObject = __webpack_require__(24);
var IObject = __webpack_require__(55);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
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
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__);






var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var addFilter = wp.hooks.addFilter;
var Component = wp.element.Component;
var select = wp.data.select;


var enableBlockIndexAttributeOnBlocks = ['novablocks/hero'];

function addBlockIndexAttribute(block) {

	if (!enableBlockIndexAttributeOnBlocks.includes(block.name)) {
		return block;
	}

	if (typeof block.attributes !== 'undefined') {
		block.attributes = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(block.attributes, {
			blockIndex: {
				type: 'number',
				default: -1
			}
		});
	}

	return block;
}
addFilter('blocks.registerBlockType', 'novablocks/add-blockIndex-attribute', addBlockIndexAttribute);

var withBlockIndexAttribute = createHigherOrderComponent(function (BlockEdit) {

	return function (_Component) {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(BetterBlockEdit, _Component);

		function BetterBlockEdit() {
			__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BetterBlockEdit);

			return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BetterBlockEdit.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(BetterBlockEdit)).apply(this, arguments));
		}

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BetterBlockEdit, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.updateIndex();
			}
		}, {
			key: 'updateIndex',
			value: function updateIndex() {
				var _this2 = this;

				if (enableBlockIndexAttributeOnBlocks.includes(this.props.name)) {
					var oldIndex = this.props.attributes.blockIndex;
					var newIndex = select('core/block-editor').getBlocks().findIndex(function (block) {
						return block.clientId === _this2.props.clientId;
					});

					if (oldIndex !== newIndex) {
						this.props.setAttributes({ blockIndex: newIndex });
					}
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return wp.element.createElement(BlockEdit, this.props);
			}
		}]);

		return BetterBlockEdit;
	}(Component);
}, "withBlockIndexAttribute");

addFilter('editor.BlockEdit', 'novablocks/with-blockIndex-attribute', withBlockIndexAttribute);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



var __ = wp.i18n.__;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var InspectorControls = wp.blockEditor.InspectorControls;
var withSelect = wp.data.withSelect;
var addFilter = wp.hooks.addFilter;


var enableFontSizeControlOnBlocks = ['core/heading', 'novablocks/headline'];

var fontSizeOptions = [{ value: 'smaller', label: __('Smaller', '__plugin_txtd') }, { value: 'normal', label: __('Normal', '__plugin_txtd') }, { value: 'larger', label: __('Larger', '__plugin_txtd') }];

var defaultFontSize = 'normal';

function replaceActiveFontSize(className, fontSize, nextFontSize) {

	if (className) {
		var regex = new RegExp('has-[a-z]+-font-size', 'gi');
		className = className.replace(regex, '').trim();
	}

	var nextClassName = 'has-' + nextFontSize + '-font-size';

	return className ? className + ' ' + nextClassName : nextClassName;
}

function withFontSizePicker(WrappedComponent) {
	return function (props) {
		var _props$attributes = props.attributes,
		    className = _props$attributes.className,
		    fontSize = _props$attributes.fontSize,
		    level = _props$attributes.level,
		    setAttributes = props.setAttributes;


		var selectValue = fontSizeOptions.find(function (x) {
			return x.value === fontSize;
		}) ? fontSize : defaultFontSize;

		return [wp.element.createElement(WrappedComponent, props), wp.element.createElement(
			InspectorControls,
			null,
			level && level < 4 && wp.element.createElement(
				PanelBody,
				{ title: __('Text Settings', '__plugin_txtd'), className: 'blocks-custom-font-size' },
				wp.element.createElement(SelectControl, {
					label: __('Font Size', '__plugin_txtd'),
					value: selectValue,
					options: fontSizeOptions,
					onChange: function onChange(nextFontSize) {
						setAttributes({
							fontSize: nextFontSize,
							className: replaceActiveFontSize(className, fontSize, nextFontSize)
						});
					}
				})
			)
		)];
	};
}

var withFontSizeControl = createHigherOrderComponent(function (OriginalComponent) {

	var BetterComponent = withFontSizePicker(OriginalComponent);

	return function (props) {

		if (!enableFontSizeControlOnBlocks.includes(props.name)) {
			return wp.element.createElement(OriginalComponent, props);
		}

		return wp.element.createElement(BetterComponent, props);
	};
});
addFilter('editor.BlockEdit', 'novablocks/with-inspector-controls', withFontSizeControl);

function addFontSizeAttribute(block) {

	if (!enableFontSizeControlOnBlocks.includes(block.name)) {
		return block;
	}

	if (typeof block.attributes !== 'undefined') {

		block.attributes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(block.attributes, {
			fontSize: {
				type: 'string',
				default: defaultFontSize
			}
		});
	}

	return block;
}
addFilter('blocks.registerBlockType', 'novablocks/add-font-size-attribute', addFontSizeAttribute);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/announcement-bar', {
	title: __('Announcement Bar', '__plugin_txtd'),
	description: __('Display a featured message through a banner across the top of your site.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* announcement */],
	keywords: [__('Promo Bar', '__plugin_txtd'), __('Welcome Header Bar', '__plugin_txtd'), __('Top Bar', '__plugin_txtd')],
	styles: [{
		name: 'accent',
		label: __('Accent', '__plugin_txtd'),
		isDefault: true
	}, {
		name: 'alternative',
		label: __('Alternative', '__plugin_txtd')
	}, {
		name: 'alert',
		label: __('Alert', '__plugin_txtd')
	}],
	save: function save() {},
	edit: function edit(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    content = _props$attributes.content,
		    url = _props$attributes.url,
		    opensInNewTab = _props$attributes.opensInNewTab,
		    setAttributes = props.setAttributes,
		    isSelected = props.isSelected;


		var classNames = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'novablocks-announcement-bar');

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				'div',
				{ className: classNames },
				wp.element.createElement(RichText, {
					tagName: 'p',
					className: 'novablocks-announcement-bar__content',
					value: content,
					onChange: function onChange(content) {
						setAttributes({ content: content });
					},
					allowedFormats: ['core/link', 'core/bold', 'core/italic']
				})
			),
			isSelected && wp.element.createElement(
				'div',
				{ className: 'novablocks-announcement-bar__url-field-wrapper' },
				wp.element.createElement(
					BaseControl,
					{
						label: __('Add a link to make the whole Announcement Bar clickable.', '__plugin_txtd'),
						className: 'wp-block-button__inline-link' },
					wp.element.createElement(URLInput, {
						className: 'wp-block-button__inline-link-input',
						value: url,
						autoFocus: false,
						onChange: function onChange(value) {
							return setAttributes({ url: value });
						},
						disableSuggestions: !isSelected,
						isFullWidth: true,
						hasBorder: true
					})
				),
				wp.element.createElement(ToggleControl, {
					checked: opensInNewTab,
					onChange: function onChange(opensInNewTab) {
						setAttributes({ opensInNewTab: opensInNewTab });
					},
					label: __('Open in new tab', '__plugin_txtd')
				})
			)
		);
	},
	getEditWrapperProps: function getEditWrapperProps(attributes) {
		return { 'data-align': 'full' };
	}
}));

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(40);
/**
 * Internal dependencies
 */






/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/google-map', {
	title: __('Map of the World', '__plugin_txtd'),
	description: __('Display an interactive map to show the location of your venue.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["l" /* map */],
	// Additional search terms
	keywords: [__('google', '__plugin_txtd'), __('maps', '__plugin_txtd'), __('google maps', '__plugin_txtd'), __('location', '__plugin_txtd')],
	getEditWrapperProps: function getEditWrapperProps(attributes) {
		var align = attributes.align;

		if ('center' === align || 'full' === align) {
			return { 'data-align': align };
		}
	},

	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: function save() {}
}));

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__placeholder__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inspector_controls__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_with_settings__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_with_parallax__ = __webpack_require__(21);















var __ = wp.i18n.__;


var API_KEY_SETTING_ID = 'novablocks_google_maps_api_key';

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Spinner = _wp$components.Spinner,
    TextControl = _wp$components.TextControl;
var _wp$blockEditor = wp.blockEditor,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var Settings = wp.api.models.Settings;

// This is a GLOBAL function that, when present, gets called by the Google Maps script on authentication errors.

window.gm_authFailure = function () {
	window.googlemaps_authfailure = true;
	window.dispatchEvent(new Event('novablock.googlemaps_authfailure'));
};

var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));

		_this.state = {
			fetchedScript: false,
			fetchedApiKey: false,
			savedApiKey: '',
			apiKey: '',
			gmAuthFailure: typeof window.googlemaps_authfailure === 'undefined' ? false : !!window.googlemaps_authfailure
		};

		_this.onChangeMarkers = _this.onChangeMarkers.bind(_this);
		_this.onGoogleMapsAuthFailure = _this.onGoogleMapsAuthFailure.bind(_this);
		_this.settings = null;
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Edit, [{
		key: 'onGoogleMapsAuthFailure',
		value: function onGoogleMapsAuthFailure(event) {
			this.setState({
				gmAuthFailure: true
			});
		}
	}, {
		key: 'onChangeMarkers',
		value: function onChangeMarkers(markers) {
			this.props.setAttributes({ markers: markers });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			window.addEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);

			wp.api.loadPromise.done(function () {
				_this2.settings = new wp.api.models.Settings();

				_this2.settings.on('change:' + API_KEY_SETTING_ID, function (model) {
					var apiKey = model.get(API_KEY_SETTING_ID);

					_this2.setState({
						fetchedApiKey: true,
						savedApiKey: apiKey,
						apiKey: apiKey
					});

					if (!!apiKey) {
						_this2.loadGoogleMapsScript();
					}
				});

				_this2.settings.fetch();
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);
		}
	}, {
		key: 'loadGoogleMapsScript',
		value: function loadGoogleMapsScript() {
			var _this3 = this;

			var savedApiKey = this.state.savedApiKey;

			var keyParam = savedApiKey !== '' ? 'key=' + savedApiKey + '&' : '';
			var scriptSrc = '//maps.googleapis.com/maps/api/js?' + keyParam + 'libraries=places';
			var scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');

			if (scripts.length) {
				this.setState({ fetchedScript: true });
				return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.resolve();
			}

			var promise = new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
				var script = document.createElement('script');
				script.onload = resolve;
				script.onerror = reject;
				script.async = true;
				script.src = scriptSrc;
				document.body.appendChild(script);
			});

			return promise.then(function () {
				_this3.setState({ fetchedScript: true });
			});
		}
	}, {
		key: 'saveApiKey',
		value: function saveApiKey(apiKey) {
			var _this4 = this;

			var key = new wp.api.models.Settings(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, API_KEY_SETTING_ID, apiKey));

			key.save().then(function () {
				_this4.setState({ gmAuthFailure: false });
				_this4.settings.fetch();
			});
		}
	}, {
		key: 'renderPreview',
		value: function renderPreview() {
			var _state = this.state,
			    fetchedApiKey = _state.fetchedApiKey,
			    fetchedScript = _state.fetchedScript,
			    savedApiKey = _state.savedApiKey,
			    gmAuthFailure = _state.gmAuthFailure;


			if (!fetchedApiKey) {
				return wp.element.createElement(Spinner, null);
			}

			if (!fetchedScript || !savedApiKey || gmAuthFailure) {
				return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__placeholder__["a" /* default */], {
					saveApiKey: this.saveApiKey.bind(this),
					apiKey: savedApiKey,
					apiKeyInstructions: this.getInstructions()
				});
			}

			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_9__map__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					onChange: this.onChangeMarkers
				}))
			);
		}
	}, {
		key: 'getInstructions',
		value: function getInstructions() {
			var gmAuthFailure = this.state.gmAuthFailure;

			var url = '//developers.google.com/maps/documentation/javascript/get-api-key';
			var hyperlink = wp.element.createElement(
				'a',
				{ target: '_blank', href: url },
				__('register a Google Maps API Key', '__plugin_txtd')
			);

			if (gmAuthFailure) {
				return wp.element.createElement(
					Fragment,
					null,
					__('It seems that your Google Maps API key is INVALID. Please REFRESH the page, double check that you pasted it correctly, and that it is a valid API key. More information about how to', '__plugin_txtd'),
					' ',
					hyperlink
				);
			}

			return wp.element.createElement(
				Fragment,
				null,
				__('To display the map, you need to', '__plugin_txtd'),
				' ',
				hyperlink,
				' ',
				__('and include it bellow.', '__plugin_txtd')
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _state2 = this.state,
			    fetchedApiKey = _state2.fetchedApiKey,
			    fetchedScript = _state2.fetchedScript,
			    savedApiKey = _state2.savedApiKey,
			    gmAuthFailure = _state2.gmAuthFailure;
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;
			var align = attributes.align;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					BlockControls,
					null,
					wp.element.createElement(BlockAlignmentToolbar, {
						value: align,
						onChange: function onChange(align) {
							return setAttributes({ align: align });
						},
						controls: ['center', 'full']
					})
				),
				!!fetchedApiKey && !!fetchedScript && !!savedApiKey && !gmAuthFailure && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_10__inspector_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					apiKey: this.state.apiKey,
					savedApiKey: this.state.savedApiKey,
					onChangeApiKey: function onChangeApiKey(apiKey) {
						_this5.setState({ apiKey: apiKey });
					},
					onSaveApiKey: this.saveApiKey.bind(this),
					apiKeyInstructions: this.getInstructions()
				})),
				this.renderPreview()
			);
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent(compose([__WEBPACK_IMPORTED_MODULE_11__components_with_settings__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__components_with_parallax__["a" /* default */]]))(Edit));

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(38);
__webpack_require__(57);
__webpack_require__(135);
__webpack_require__(143);
__webpack_require__(144);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(5);
var ctx = __webpack_require__(22);
var classof = __webpack_require__(45);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(16);
var aFunction = __webpack_require__(35);
var anInstance = __webpack_require__(136);
var forOf = __webpack_require__(137);
var speciesConstructor = __webpack_require__(89);
var task = __webpack_require__(90).set;
var microtask = __webpack_require__(139)();
var newPromiseCapabilityModule = __webpack_require__(75);
var perform = __webpack_require__(91);
var userAgent = __webpack_require__(140);
var promiseResolve = __webpack_require__(92);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(141)($Promise.prototype, {
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
__webpack_require__(34)($Promise, PROMISE);
__webpack_require__(142)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(76)(function (iter) {
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
/* 136 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var call = __webpack_require__(73);
var isArrayIter = __webpack_require__(74);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(59);
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
/* 138 */
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var macrotask = __webpack_require__(90).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(27)(process) == 'process';

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(11);
var core = __webpack_require__(0);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(89);
var promiseResolve = __webpack_require__(92);

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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(75);
var perform = __webpack_require__(91);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(2);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Placeholder = _wp$components.Placeholder,
    TextControl = _wp$components.TextControl;
var ENTER = wp.keycodes.ENTER;

var MapPlaceholder = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MapPlaceholder, _Component);

	function MapPlaceholder() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MapPlaceholder);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MapPlaceholder.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MapPlaceholder)).apply(this, arguments));

		_this.state = {
			apiKey: _this.props.apiKey
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MapPlaceholder, [{
		key: "handleKeyDown",
		value: function handleKeyDown(keyCode) {
			if (keyCode === ENTER) {
				this.props.saveApiKey(this.state.apiKey);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var apiKeyInstructions = this.props.apiKeyInstructions;

			var icon = wp.element.createElement(
				"div",
				{ className: "editor-block-icon block-editor-block-icon" },
				__WEBPACK_IMPORTED_MODULE_5__icons__["l" /* map */]
			);

			return wp.element.createElement(
				Placeholder,
				{
					icon: icon,
					label: __('Location Map of The World', '__plugin_txtd') },
				apiKeyInstructions && wp.element.createElement(
					"div",
					{ className: "components-placeholder__instructions" },
					apiKeyInstructions
				),
				wp.element.createElement(TextControl, {
					className: "components-placeholder__input",
					placeholder: __('Paste API key here', '__plugin_txtd'),
					value: this.state.apiKey,
					onChange: function onChange(apiKey) {
						_this2.setState({ apiKey: apiKey });
					},
					onKeyDown: function onKeyDown(_ref) {
						var keyCode = _ref.keyCode;
						_this2.handleKeyDown(keyCode);
					}
				}),
				wp.element.createElement(
					Button,
					{ isLarge: true, disabled: !this.state.apiKey, type: "button", onClick: function onClick() {
							_this2.props.saveApiKey(_this2.state.apiKey);
						} },
					__('Save', '__plugin_txtd')
				)
			);
		}
	}]);

	return MapPlaceholder;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MapPlaceholder);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pin__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__default_map_center__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_with_parallax__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils__ = __webpack_require__(29);


















var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var Placeholder = wp.components.Placeholder;

var Map = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default()(Map, _Component);

	function Map() {
		__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default()(this, Map);

		var _this = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Map.__proto__ || __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default()(Map)).apply(this, arguments));

		_this.map = null;
		_this.searchBox = null;
		_this.markers = [];

		_this.getMapStyles = __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* getMapStyles */].bind(_this);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default()(Map, [{
		key: 'clearMarkers',
		value: function clearMarkers() {
			this.markers.forEach(function (marker) {
				marker.setMap(null);
			});
			this.markers = [];
		}
	}, {
		key: 'onPlacesChanged',
		value: function onPlacesChanged() {

			if (!this.searchBox) {
				return;
			}

			this.props.onChange(this.searchBox.getPlaces().map(function (place) {
				var keepProps = ['name', 'geometry'];
				var filtered = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default()(place).filter(function (key) {
					return keepProps.includes(key);
				}).reduce(function (obj, key) {
					obj[key] = place[key];
					return obj;
				}, {});

				return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(filtered);
			}));
		}
	}, {
		key: 'createMarkers',
		value: function createMarkers() {
			var _this2 = this;

			var attributes = this.props.attributes;
			var markers = attributes.markers,
			    styleSlug = attributes.styleSlug;


			var accentColor = styleSlug === 'theme' ? __WEBPACK_IMPORTED_MODULE_12__utils__["c" /* getMapAccentColor */].call(this) : '#222222';
			var pinMarkup = __WEBPACK_IMPORTED_MODULE_11__pin__["a" /* default */].replace('%ACCENT_COLOR%', accentColor);

			markers.forEach(function (markerString) {
				var marker = JSON.parse(markerString);

				if (!marker.geometry) {
					return;
				}

				_this2.markers.push(new google.maps.Marker({
					map: _this2.map,
					icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinMarkup) },
					title: marker.name,
					position: marker.geometry.location
				}));
			});

			if (this.markers.length) {
				this.map.setCenter(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* getMarkersCenter */].call(this));
			}
		}
	}, {
		key: 'initializeMap',
		value: function initializeMap() {
			var attributes = this.props.attributes;
			var showControls = attributes.showControls,
			    zoom = attributes.zoom;


			this.map = new google.maps.Map(document.getElementById('novablocks-google-map-' + this.props.clientId), {
				mapTypeId: 'roadmap',
				center: __WEBPACK_IMPORTED_MODULE_13__default_map_center__["a" /* default */],
				zoom: zoom,
				styles: this.getMapStyles(),

				clickableIcons: false,
				disableDefaultUI: !showControls,
				disableDoubleClickZoom: true,
				draggable: false,
				gestureHandling: 'none',
				keyboardShortcuts: false,
				scrollwheel: false
			});
		}
	}, {
		key: 'initializeSearchBox',
		value: function initializeSearchBox() {
			var _this3 = this;

			// Create the search box and link it to the UI element.
			var input = document.getElementById('novablocks-google-map-search-input-' + this.props.clientId);
			this.searchBox = new google.maps.places.SearchBox(input);

			// Bias the SearchBox results towards current map's viewport.
			this.map.addListener('bounds_changed', function () {
				_this3.searchBox.setBounds(_this3.map.getBounds());
			});

			// Listen for the event fired when the user selects a prediction and retrieve
			// more details for that place.
			this.searchBox.addListener('places_changed', this.onPlacesChanged.bind(this));
		}
	}, {
		key: 'updateMapOptions',
		value: function updateMapOptions() {

			if (this.map === null) {
				return;
			}

			var options = {};
			var attributes = this.props.attributes;
			var showControls = attributes.showControls,
			    showLabels = attributes.showLabels,
			    zoom = attributes.zoom;


			options.zoom = zoom;
			options.disableDefaultUI = !showControls;
			options.styles = this.getMapStyles();

			this.map.setOptions(options);
		}
	}, {
		key: 'updateMapMarkers',
		value: function updateMapMarkers() {
			this.clearMarkers();
			this.createMarkers();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			if (this.map === null) {
				this.initializeMap();
				this.initializeSearchBox();
				this.createMarkers();
				return;
			}

			google.maps.event.trigger(this.map, 'resize');
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			var shouldUpdate = false;
			__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(this.props).forEach(function (_ref) {
				var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
				    key = _ref2[0],
				    val = _ref2[1];

				if (nextProps[key] !== val) {
					shouldUpdate = true;
				}
			});

			return shouldUpdate;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			this.updateMapOptions();

			if (prevProps.attributes.markers !== this.props.attributes.markers || prevProps.attributes.styleSlug !== this.props.attributes.styleSlug) {
				this.updateMapMarkers();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return wp.element.createElement('div', { className: 'novablocks-map__map', id: 'novablocks-google-map-' + this.props.clientId });
		}
	}]);

	return Map;
}(Component);

var MapWrapper = function MapWrapper(Map) {

	return function (props) {
		var parallax = props.parallax,
		    otherProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(props, ['parallax']);

		var searchBoxStyles = {};

		if (!props.isSelected) {
			searchBoxStyles.display = 'none';
		}

		return wp.element.createElement(
			'div',
			{ className: 'novablocks-map' },
			wp.element.createElement(
				'div',
				{ className: 'novablocks-map__search-box' },
				wp.element.createElement(
					Placeholder,
					{ style: searchBoxStyles },
					wp.element.createElement('input', {
						type: 'text',
						id: 'novablocks-google-map-search-input-' + props.clientId,
						placeholder: __('Enter an address to drop a pin on this map', '__plugin_txtd')
					})
				)
			),
			wp.element.createElement(
				'div',
				{ className: 'novablocks-map__map-container' },
				wp.element.createElement(
					'div',
					{ className: 'novablocks-mask' },
					wp.element.createElement(
						'div',
						{ className: 'novablocks-map__map-parallax', style: parallax.style },
						wp.element.createElement(Map, otherProps)
					)
				)
			)
		);
	};
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_14__components_with_parallax__["b" /* withParallaxContext */])(MapWrapper(Map)));

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(38);
module.exports = __webpack_require__(150);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(38);
module.exports = __webpack_require__(153);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var get = __webpack_require__(59);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
module.exports = __webpack_require__(0).Object.entries;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(11);
var $entries = __webpack_require__(157)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9);
var getKeys = __webpack_require__(26);
var toIObject = __webpack_require__(19);
var isEnum = __webpack_require__(44).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(159);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24);
var $keys = __webpack_require__(26);

__webpack_require__(83)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(161);
} else {
  module.exports = __webpack_require__(162);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(94),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
function A(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
function D(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:k,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){e=a[k];var f=b+T(e,k);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,k++),g+=S(e,f,d,c);else if("object"===e)throw d=""+a,A(Error(31),"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,"");return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,d){if(null===a||void 0===a)throw A(Error(267),a);var c=void 0,e=
h({},a.props),g=a.key,k=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:k,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);
b.type=a;return b},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){var d=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=d}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.9.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(94);
var checkPropTypes = __webpack_require__(163);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.9.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

function ReactError(error) {
  error.name = 'Invariant Violation';
  return error;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  (function () {
    if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
      {
        throw ReactError(Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'));
      }
    }
  })();
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
          break;
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */

var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */


/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
function jsxDEV(type, config, maybeKey, source, self) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;

  if (hasValidRef(config)) {
    ref = config.ref;
  }

  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  // Remaining properties are added to a new props object
  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  }

  // intentionally not checking if key was set above
  // this key is higher priority as it's static
  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (key || ref) {
    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
    if (key) {
      defineKeyPropWarningGetter(props, displayName);
    }
    if (ref) {
      defineRefPropWarningGetter(props, displayName);
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  (function () {
    if (!!(element === null || element === undefined)) {
      {
        throw ReactError(Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.'));
      }
    }
  })();

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      (function () {
        {
          {
            throw ReactError(Error('Objects are not valid as a React child (found: ' + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ').' + addendum));
          }
        }
      })();
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  (function () {
    if (!isValidElement(children)) {
      {
        throw ReactError(Error('React.Children.only expected to receive a single React element child.'));
      }
    }
  })();
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  (function () {
    if (!(dispatcher !== null)) {
      {
        throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
      }
    }
  })();
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var emptyObject$1 = {};

function useResponder(responder, listenerProps) {
  var dispatcher = resolveDispatcher();
  {
    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
      return;
    }
  }
  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
}

// Within the scope of the callback, mark all updates as being allowed to suspend.
function withSuspenseConfig(scope, config) {
  var previousConfig = ReactCurrentBatchConfig.suspense;
  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;
  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.suspense = previousConfig;
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(source);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = jsxDEV(type, props, key, source, self);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    var children = props.children;
    if (children !== undefined) {
      if (isStaticChildren) {
        for (var i = 0; i < children.length; i++) {
          validateChildKeys(children[i], type);
        }
      } else {
        validateChildKeys(children, type);
      }
    }
  }

  if (props.key !== undefined) {
    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

// These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.
function jsxWithValidationStatic(type, props, key) {
  return jsxWithValidation(type, props, key, true);
}

function jsxWithValidationDynamic(type, props, key) {
  return jsxWithValidation(type, props, key, false);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var hasBadMapPolyfill = void 0;

{
  hasBadMapPolyfill = false;
  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

function createFundamentalComponent(impl) {
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if (true && !hasBadMapPolyfill) {
    Object.freeze(impl);
  }
  var fundamantalComponent = {
    $$typeof: REACT_FUNDAMENTAL_TYPE,
    impl: impl
  };
  {
    Object.freeze(fundamantalComponent);
  }
  return fundamantalComponent;
}

function createEventResponder(displayName, responderConfig) {
  var getInitialState = responderConfig.getInitialState,
      onEvent = responderConfig.onEvent,
      onMount = responderConfig.onMount,
      onUnmount = responderConfig.onUnmount,
      onOwnershipChange = responderConfig.onOwnershipChange,
      onRootEvent = responderConfig.onRootEvent,
      rootEventTypes = responderConfig.rootEventTypes,
      targetEventTypes = responderConfig.targetEventTypes;

  var eventResponder = {
    $$typeof: REACT_RESPONDER_TYPE,
    displayName: displayName,
    getInitialState: getInitialState || null,
    onEvent: onEvent || null,
    onMount: onMount || null,
    onOwnershipChange: onOwnershipChange || null,
    onRootEvent: onRootEvent || null,
    onUnmount: onUnmount || null,
    rootEventTypes: rootEventTypes || null,
    targetEventTypes: targetEventTypes || null
  };
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if (true && !hasBadMapPolyfill) {
    Object.freeze(eventResponder);
  }
  return eventResponder;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// Disable javascript: URL strings in href for XSS protection.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.




// See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
// This is a flag so we can fix warnings in RN core before turning it on


// Experimental React Flare event system and event components support.
var enableFlareAPI = false;

// Experimental Host Component support.
var enableFundamentalAPI = false;

// New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
var enableJSXTransformAPI = false;

// We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version

// Temporary flag to revert the fix in #15650


// For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.


// Changes priority of some events like mousemove to user-blocking priority,
// but without making them discrete. The flag exists in case it causes
// starvation problems.


// Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.


// Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_withSuspenseConfig: withSuspenseConfig,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createEventResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamentalComponent;
}

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableJSXTransformAPI) {
  {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  }
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(164);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var DEFAULT_STATE = {
	settings: {}
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
	var action = arguments[1];

	switch (action.type) {
		case 'UPDATE_SETTINGS':
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, state, {
				settings: action.settings
			});
	}

	return state;
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getSettings"] = getSettings;
function getSettings(state) {
	return state.settings;
}

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["updateSettings"] = updateSettings;
function updateSettings(settings) {
	return {
		type: 'UPDATE_SETTINGS',
		settings: settings
	};
}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_key_panel_body__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_style_select__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(40);












var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var Component = wp.element.Component;
var InspectorControls = wp.blockEditor.InspectorControls;

var ButtonInspectorControls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ButtonInspectorControls, _Component);

	function ButtonInspectorControls() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ButtonInspectorControls);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ButtonInspectorControls.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ButtonInspectorControls)).apply(this, arguments));

		_this.compileStyles = __WEBPACK_IMPORTED_MODULE_8__utils__["a" /* compileStyles */].bind(_this);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ButtonInspectorControls, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    _props$attributes = _props.attributes,
			    styleSlug = _props$attributes.styleSlug,
			    zoom = _props$attributes.zoom,
			    showLabels = _props$attributes.showLabels,
			    showControls = _props$attributes.showControls,
			    showIcons = _props$attributes.showIcons,
			    savedApiKey = _props.savedApiKey,
			    setAttributes = _props.setAttributes;


			if (!savedApiKey) {
				return null;
			}

			return wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Map Design', '__plugin_txtd') },
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__map_style_select__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
						apiKey: savedApiKey,
						value: styleSlug,
						options: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* default */],
						onChange: function onChange(newStyleSlug) {
							var mapStyles = __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* default */].find(function (style) {
								return style.slug === newStyleSlug;
							}).styles;
							setAttributes({
								styleSlug: newStyleSlug,
								styleData: _this2.compileStyles(mapStyles),
								pinColor: newStyleSlug === 'customized' ? __WEBPACK_IMPORTED_MODULE_8__utils__["c" /* getMapAccentColor */].call(_this2) : '#222222'
							});
						}
					})),
					wp.element.createElement(ToggleControl, {
						label: __('Show Nearby Venues', '__plugin_txtd'),
						checked: showIcons,
						onChange: function onChange() {
							return setAttributes({ showIcons: !showIcons });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Show Street Labels', '__plugin_txtd'),
						checked: showLabels,
						onChange: function onChange() {
							return setAttributes({ showLabels: !showLabels });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: __('Show Controls', '__plugin_txtd'),
						checked: showControls,
						onChange: function onChange() {
							return setAttributes({ showControls: !showControls });
						}
					})
				),
				wp.element.createElement(
					PanelBody,
					{ title: __('Zoom Level', '__plugin_txtd') },
					wp.element.createElement(RangeControl, {
						value: zoom,
						onChange: function onChange(newZoom) {
							return setAttributes({ zoom: newZoom });
						},
						min: 5,
						max: 20
					})
				),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__api_key_panel_body__["a" /* default */], this.props)
			);
		}
	}]);

	return ButtonInspectorControls;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ButtonInspectorControls);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody;
var Component = wp.element.Component;

var ApiKeyPanelBody = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ApiKeyPanelBody, _Component);

	function ApiKeyPanelBody() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ApiKeyPanelBody);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ApiKeyPanelBody.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ApiKeyPanelBody)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ApiKeyPanelBody, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    apiKey = _props.apiKey,
			    apiKeyInstructions = _props.apiKeyInstructions,
			    savedApiKey = _props.savedApiKey,
			    onChangeApiKey = _props.onChangeApiKey,
			    onSaveApiKey = _props.onSaveApiKey;


			if (savedApiKey === '') {
				return null;
			}

			return wp.element.createElement(
				PanelBody,
				{ title: __('Google Maps API Key', '__plugin_txtd') },
				wp.element.createElement(TextControl, {
					placeholder: __('Paste API key here', '__plugin_txtd'),
					value: apiKey,
					onChange: onChangeApiKey,
					help: apiKeyInstructions
				}),
				wp.element.createElement(
					Button,
					{ isDefault: true, onClick: function onClick() {
							onSaveApiKey(apiKey);
						} },
					__('Save', '__plugin_txtd')
				)
			);
		}
	}]);

	return ApiKeyPanelBody;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ApiKeyPanelBody);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_map_center__ = __webpack_require__(48);










var Component = wp.element.Component;

var MapStyleSelect = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(MapStyleSelect, _Component);

	function MapStyleSelect() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, MapStyleSelect);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MapStyleSelect.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(MapStyleSelect)).apply(this, arguments));

		_this.state = {
			active: _this.props.value
		};

		_this.compileStyles = __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* compileStyles */].bind(_this);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(MapStyleSelect, [{
		key: 'getStaticStyle',
		value: function getStaticStyle(styles) {
			var result = [];
			styles.forEach(function (v, i, a) {
				var style = '';
				if (v.stylers) {
					if (v.stylers.length > 0) {
						style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
						style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
						v.stylers.forEach(function (val, i, a) {
							var prop = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(val)[0];
							var propertyval = val[prop].toString().replace('#', '0x');
							style += prop + ':' + propertyval + '|';
						});
					}
				}
				result.push('style=' + encodeURIComponent(style));
			});
			return result.join('&');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    attributes = _props.attributes,
			    options = _props.options,
			    value = _props.value,
			    onChange = _props.onChange,
			    apiKey = _props.apiKey;
			var markers = attributes.markers,
			    zoom = attributes.zoom;


			var center = markers.length ? __WEBPACK_IMPORTED_MODULE_7__utils__["e" /* getMarkersCenter */].call(this) : new google.maps.LatLng(__WEBPACK_IMPORTED_MODULE_8__default_map_center__["a" /* default */]);
			var latitude = center.lat();
			var longitude = center.lng();

			return wp.element.createElement(
				'div',
				{ className: 'components-base-control' },
				wp.element.createElement(
					'div',
					{ className: 'editor-block-styles block-editor-block-styles novablocks-block-editor-map-styles' },
					options.map(function (option) {
						var style = _this2.getStaticStyle(_this2.compileStyles(option.styles));
						var size = '200x200';
						var mapType = 'roadmap';
						var url = 'https://maps.googleapis.com/maps/api/staticmap';
						var src = url + '?center=' + latitude + ',' + longitude + '&zoom=' + zoom + '&size=' + size + '&maptype=' + mapType + '&' + style + '&key=' + apiKey;

						return wp.element.createElement(
							'div',
							{
								key: option.slug,
								className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()('editor-block-styles__item block-editor-block-styles__item', {
									'is-active': option.slug === _this2.state.active
								}),
								onClick: function onClick() {
									_this2.setState({ active: option.slug });
									onChange(option.slug);
								},
								role: 'button',
								tabIndex: '0',
								'aria-label': option.label },
							wp.element.createElement(
								'div',
								{ className: 'editor-block-styles__item-preview block-editor-block-styles__item-preview' },
								wp.element.createElement('img', {
									src: src,
									alt: option.label + ' map style preview'
								})
							),
							wp.element.createElement(
								'div',
								{ className: 'editor-block-styles__item-label block-editor-block-styles__item-label' },
								option.label
							)
						);
					})
				)
			);
		}
	}]);

	return MapStyleSelect;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MapStyleSelect);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(172);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/header', {
	title: __('Header', '__plugin_txtd'),
	description: __('Outputs custom header markup.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["g" /* header */],
	// Additional search terms
	keywords: [__('logo', '__plugin_txtd'), __('menu', '__plugin_txtd')],
	supports: { align: ["wide", "full"], default: "full" },
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	}
}));

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Edit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);





var __ = wp.i18n.__;
var useState = wp.element.useState;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;


var TEMPLATE_OPTIONS = [{
	title: __('Logo on the left side and one navigation menu', '__plugin_txtd'),
	name: 'logo-left',
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["b" /* logoLeft */],
	template: [['novablocks/logo'], ['novablocks/navigation', {
		className: "site-header__menu site-header__menu--primary",
		slug: "primary"
	}]]
}, {
	title: __('Logo centered and one navigation menu on each side', '__plugin_txtd'),
	name: 'logo-center',
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["a" /* logoCenter */],
	template: [['novablocks/navigation', {
		className: "site-header__menu site-header__menu--secondary",
		slug: "secondary"
	}], ['novablocks/logo'], ['novablocks/navigation', {
		className: "site-header__menu site-header__menu--primary",
		slug: "primary"
	}]]
}];

function Edit(props) {
	var clientId = props.clientId;
	var layout = props.attributes.layout,
	    className = props.className,
	    setAttributes = props.setAttributes;


	var block = wp.data.select('core/block-editor').getBlock(clientId);
	var innerBlocks = block.innerBlocks;

	var currentTemplate = block !== null && !!innerBlocks.length ? innerBlocks.map(function (block) {
		return [block.name];
	}) : null;

	var _useState = useState(currentTemplate),
	    _useState2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_useState, 2),
	    template = _useState2[0],
	    setTemplate = _useState2[1];

	var applyTemplate = function applyTemplate(template) {
		var activeTemplate = TEMPLATE_OPTIONS.find(function (option) {
			return option.template === template;
		});
		var activeTemplateName = activeTemplate.name;
		setAttributes({ layout: activeTemplateName });
		setTemplate(template);
	};

	var classNames = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'site-header', 'site-header-' + layout);

	return [wp.element.createElement(
		BlockControls,
		null,
		wp.element.createElement(
			Toolbar,
			null,
			wp.element.createElement(IconButton, {
				className: 'components-icon-button components-toolbar__control',
				label: __('Change Layout', '__plugin_txtd'),
				onClick: function onClick() {
					return setTemplate(null);
				},
				icon: 'edit'
			})
		)
	), wp.element.createElement(
		'div',
		{ className: classNames },
		wp.element.createElement(InnerBlocks, {
			__experimentalTemplateOptions: TEMPLATE_OPTIONS,
			__experimentalOnSelectTemplateOption: function __experimentalOnSelectTemplateOption(nextTemplate) {
				applyTemplate(nextTemplate);
			},
			template: template,
			templateLock: 'all'
		})
	)];
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoLeft; });
/* unused harmony export logoRight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logoCenter; });
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;


var logoLeft = wp.element.createElement(
	"svg",
	{ xmlns: "http://www.w3.org/2000/svg", width: "48px", height: "48px", viewBox: "0 0 48 48" },
	wp.element.createElement(
		"g",
		{ fill: "none", fillRule: "evenodd", stroke: "none", strokeWidth: "1" },
		wp.element.createElement("path", {
			fill: "#6565F3",
			d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
			transform: "translate(0 17)"
		}),
		wp.element.createElement("path", {
			fill: "#FAE547",
			d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
			transform: "translate(0 17)"
		}),
		wp.element.createElement("path", { fill: "#A5A5A5", d: "M20 20H48V28H20z" })
	)
);

var logoRight = wp.element.createElement(
	"svg",
	{ xmlns: "http://www.w3.org/2000/svg", width: "48px", height: "48px", viewBox: "0 0 48 48" },
	wp.element.createElement(
		"g",
		{ fill: "none", fillRule: "evenodd", stroke: "none", strokeWidth: "1" },
		wp.element.createElement("path", {
			fill: "#6565F3",
			d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
			transform: "translate(34 17)"
		}),
		wp.element.createElement("path", {
			fill: "#FAE547",
			d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
			transform: "translate(34 17)"
		}),
		wp.element.createElement("path", { fill: "#A5A5A5", d: "M0 20H28V28H0z" })
	)
);

var logoCenter = wp.element.createElement(
	"svg",
	{ xmlns: "http://www.w3.org/2000/svg", width: "48px", height: "48px", viewBox: "0 0 48 48" },
	wp.element.createElement(
		"g",
		{ fill: "none", fillRule: "evenodd", stroke: "none", strokeWidth: "1" },
		wp.element.createElement("path", {
			fill: "#6565F3",
			d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
			transform: "translate(17 17)"
		}),
		wp.element.createElement("path", {
			fill: "#FAE547",
			d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
			transform: "translate(17 17)"
		}),
		wp.element.createElement("path", { fill: "#A5A5A5", d: "M0 20H9V28H0z" }),
		wp.element.createElement("path", { fill: "#A5A5A5", d: "M0 20H11V28H0z" }),
		wp.element.createElement("path", { fill: "#A5A5A5", d: "M37 20H48V28H37z" })
	)
);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(177);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/headline', {
	title: __('Headline', '__plugin_txtd'),
	description: __('Advanced heading block with a fancier display', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["h" /* headline */],
	// Additional search terms
	keywords: [__('heading', '__plugin_txtd'), __('title', '__plugin_txtd'), __('cta', '__plugin_txtd'), __('call to action', '__plugin_txtd')],
	attributes: {
		align: {
			type: "string",
			default: "center"
		},
		primary: {
			type: "string",
			default: __("Our Story", '__plugin_txtd')
		},
		secondary: {
			type: "string",
			default: __("Discover", '__plugin_txtd')
		},
		level: {
			type: "number",
			default: 2
		}
	},
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */],
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */]
}));

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadlineEdit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heading_toolbar__ = __webpack_require__(176);




var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

/**
 * WordPress dependencies
 */

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls;


function HeadlineEdit(props) {
	var attributes = props.attributes,
	    setAttributes = props.setAttributes,
	    className = props.className;
	var align = attributes.align,
	    primary = attributes.primary,
	    secondary = attributes.secondary,
	    level = attributes.level;


	var TagName = 'h' + level;

	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(
			BlockControls,
			null,
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__heading_toolbar__["a" /* default */], { minLevel: 2, maxLevel: 4, selectedLevel: level, onChange: function onChange(newLevel) {
					return setAttributes({ level: newLevel });
				} }),
			wp.element.createElement(AlignmentToolbar, {
				value: align,
				onChange: function onChange(nextAlign) {
					setAttributes({ align: nextAlign });
				}
			})
		),
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				'p',
				null,
				__('Level', '__plugin_txtd')
			),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__heading_toolbar__["a" /* default */], { minLevel: 1, maxLevel: 6, selectedLevel: level, onChange: function onChange(newLevel) {
					return setAttributes({ level: newLevel });
				} })
		),
		wp.element.createElement(
			TagName,
			{
				className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'c-headline', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, 'has-text-align-' + align, align)) },
			wp.element.createElement(RichText, {
				className: 'c-headline__secondary',
				identifier: 'secondary',
				tagName: 'span',
				value: secondary,
				onChange: function onChange(value) {
					return setAttributes({ secondary: value });
				},
				placeholder: __('Subtitle…', '__plugin_txtd'),
				keepPlaceholderOnFocus: true,
				allowedFormats: []
			}),
			wp.element.createElement(RichText, {
				className: 'c-headline__primary',
				identifier: 'primary',
				tagName: 'span',
				value: primary,
				onChange: function onChange(value) {
					return setAttributes({ primary: value });
				},
				placeholder: __('Write title…', '__plugin_txtd'),
				keepPlaceholderOnFocus: true,
				allowedFormats: []
			})
		)
	);
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(29);







/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var Component = wp.element.Component;
var Toolbar = wp.components.Toolbar;

var HeadingToolbar = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HeadingToolbar, _Component);

	function HeadingToolbar() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HeadingToolbar);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeadingToolbar.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HeadingToolbar)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HeadingToolbar, [{
		key: 'createLevelControl',
		value: function createLevelControl(targetLevel, selectedLevel, onChange) {
			return {
				icon: 'heading',
				// translators: %s: heading level e.g: "1", "2", "3"
				title: sprintf(__('Heading %d', '__plugin_txtd'), targetLevel),
				isActive: targetLevel === selectedLevel,
				onClick: function onClick() {
					return onChange(targetLevel);
				},
				subscript: String(targetLevel)
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    minLevel = _props.minLevel,
			    maxLevel = _props.maxLevel,
			    selectedLevel = _props.selectedLevel,
			    onChange = _props.onChange;

			return wp.element.createElement(Toolbar, { controls: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* range */])(minLevel, maxLevel).map(function (index) {
					return _this2.createLevelControl(index, selectedLevel, onChange);
				}) });
		}
	}]);

	return HeadingToolbar;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (HeadingToolbar);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = save;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;


function save(props) {
	var attributes = props.attributes;
	var align = attributes.align,
	    primary = attributes.primary,
	    secondary = attributes.secondary,
	    level = attributes.level;


	var TagName = 'h' + level;

	var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('c-headline', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, 'has-text-align-' + align, align));

	return wp.element.createElement(
		TagName,
		{ className: className ? className : undefined },
		wp.element.createElement(RichText.Content, { className: 'c-headline__secondary', value: secondary, tagName: 'span' }),
		wp.element.createElement(RichText.Content, { className: 'c-headline__primary', value: primary, tagName: 'span' })
	);
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(21);
/**
 * Internal dependencies
 */





/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var select = wp.data.select;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/hero', {
	title: __('Hero of the Galaxy', '__plugin_txtd'),
	description: __('A great way to get your visitors acquainted with your content.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["i" /* hero */],
	// Additional search terms
	keywords: [__('cover', '__plugin_txtd'), __('full width', '__plugin_txtd'), __('hero image', '__plugin_txtd'), __('cover section', '__plugin_txtd')],
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	example: {},
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = select('core/block-editor').getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	}
}));

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_with_settings__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_with_parallax__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__preview__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__block_controls__ = __webpack_require__(195);








/**
 * Internal dependencies
 */









var __ = wp.i18n.__;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    FocalPointPicker = _wp$components.FocalPointPicker,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;


var FirstBlockControls = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* withFirstBlockConditions */])(function (props) {

	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["e" /* HeightPanel */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["h" /* ScrollIndicatorPanel */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["g" /* PositionIndicatorsPanel */], props)
	);
});

var BlockHeightControls = function BlockHeightControls(props) {
	var attributes = props.attributes,
	    setAttributes = props.setAttributes,
	    settings = props.settings;
	var minHeightFallback = attributes.minHeightFallback;


	return wp.element.createElement(
		PanelBody,
		{ title: __('Height', '__plugin_txtd'), initialOpen: false },
		wp.element.createElement(RadioControl, {
			label: __('Minimum Height', '__plugin_txtd'),
			selected: minHeightFallback,
			onChange: function onChange(minHeightFallback) {
				setAttributes({ minHeightFallback: parseFloat(minHeightFallback) });
			},
			options: settings.minimumHeightOptions
		})
	);
};

var HeroEdit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(HeroEdit, _Component);

	function HeroEdit() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, HeroEdit);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeroEdit.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(HeroEdit)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(HeroEdit, [{
		key: 'getDefaults',
		value: function getDefaults(attributes) {
			var settings = this.props.settings;
			var minHeight = attributes.minHeight,
			    applyMinimumHeight = attributes.applyMinimumHeight,
			    scrollIndicator = attributes.scrollIndicator;

			var defaults = {};

			if (settings.usePostMetaAttributes) {

				if (!minHeight) {
					defaults.minHeight = settings.hero.attributes.minHeight.default;
				}

				if (!applyMinimumHeight) {
					defaults.applyMinimumHeight = settings.hero.attributes.applyMinimumHeight.default;
				}

				if (!scrollIndicator) {
					defaults.scrollIndicator = settings.hero.attributes.scrollIndicator.default;
				}

				return defaults;
			}

			return {
				minHeight: 100,
				applyMinimumHeight: 'all',
				scrollIndicator: false
			};
		}
	}, {
		key: 'getNewAttributes',
		value: function getNewAttributes(attributes) {
			var _this2 = this;

			var minHeight = attributes.minHeight,
			    applyMinimumHeight = attributes.applyMinimumHeight,
			    scrollIndicator = attributes.scrollIndicator;


			var index = select('core/block-editor').getBlocks().filter(function (block) {
				return block.name === 'novablocks/hero';
			}).findIndex(function (block) {
				return block.clientId === _this2.props.clientId;
			});

			var newApplyMinimumHeightBlock = index === 0 && applyMinimumHeight === 'first' || applyMinimumHeight === 'all';
			var newScrollIndicatorBlock = index === 0 && scrollIndicator;

			return {
				applyMinimumHeight: applyMinimumHeight,
				applyMinimumHeightBlock: newApplyMinimumHeightBlock,
				minHeight: minHeight,
				scrollIndicatorBlock: newScrollIndicatorBlock
			};
		}
	}, {
		key: 'updateAttributes',
		value: function updateAttributes() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;

			var defaults = this.getDefaults(attributes);
			var newAttributes = this.getNewAttributes(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, attributes, defaults));

			setAttributes(newAttributes);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return !__WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal___default()(nextProps.attributes, this.props.attributes);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.updateAttributes();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.updateAttributes();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    settings = _props2.settings,
			    attributes = _props2.attributes,
			    setAttributes = _props2.setAttributes;
			var media = attributes.media,
			    focalPoint = attributes.focalPoint;

			var parallaxFocalPointImage = media ? media.sizes.full : false;
			var usePostMetaAttributes = settings.usePostMetaAttributes;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_11__preview__["a" /* default */], this.props),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_12__block_controls__["a" /* default */], this.props),
				wp.element.createElement(
					InspectorControls,
					null,
					parallaxFocalPointImage && wp.element.createElement(
						PanelBody,
						{
							title: __('Focal Point', '__plugin_txtd'),
							initialOpen: true },
						wp.element.createElement(FocalPointPicker, {
							url: parallaxFocalPointImage.url,
							dimensions: {
								width: parallaxFocalPointImage.width,
								height: parallaxFocalPointImage.height
							},
							value: focalPoint,
							onChange: function onChange(focalPoint) {
								return setAttributes({ focalPoint: focalPoint });
							}
						})
					),
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components__["f" /* LayoutPanel */], this.props),
					usePostMetaAttributes && wp.element.createElement(FirstBlockControls, this.props),
					!usePostMetaAttributes && wp.element.createElement(BlockHeightControls, this.props)
				)
			);
		}
	}]);

	return HeroEdit;
}(Component);

;

/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent(compose([__WEBPACK_IMPORTED_MODULE_8__components_with_settings__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__components_with_parallax__["a" /* default */]]))(HeroEdit));

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = Object.keys;

/**
 * Returns true if the two objects are shallow equal, or false otherwise.
 *
 * @param {Object} a First object to compare.
 * @param {Object} b Second object to compare.
 *
 * @return {boolean} Whether the two objects are shallow equal.
 */
function isShallowEqualObjects( a, b ) {
	var aKeys, bKeys, i, key, aValue;

	if ( a === b ) {
		return true;
	}

	aKeys = keys( a );
	bKeys = keys( b );

	if ( aKeys.length !== bKeys.length ) {
		return false;
	}

	i = 0;

	while ( i < aKeys.length ) {
		key = aKeys[ i ];
		aValue = a[ key ];

		if (
			// In iterating only the keys of the first object after verifying
			// equal lengths, account for the case that an explicit `undefined`
			// value in the first is implicitly undefined in the second.
			//
			// Example: isShallowEqualObjects( { a: undefined }, { b: 5 } )
			( aValue === undefined && ! b.hasOwnProperty( key ) ) ||
			aValue !== b[ key ]
		) {
			return false;
		}

		i++;
	}

	return true;
}

module.exports = isShallowEqualObjects;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns true if the two arrays are shallow equal, or false otherwise.
 *
 * @param {Array} a First array to compare.
 * @param {Array} b Second array to compare.
 *
 * @return {boolean} Whether the two arrays are shallow equal.
 */
function isShallowEqualArrays( a, b ) {
	var i;

	if ( a === b ) {
		return true;
	}

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = 0; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

module.exports = isShallowEqualArrays;


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__padding__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__width__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var PanelBody = wp.components.PanelBody;


var LayoutPanel = function LayoutPanel(props) {
	return wp.element.createElement(
		PanelBody,
		{
			className: 'pixelgrade-hero-button-group-wrapper',
			title: __('Layout', '__plugin_txtd'),
			initialOpen: true },
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__padding__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__width__["a" /* default */], props),
		props.children
	);
};

/* harmony default export */ __webpack_exports__["a"] = (LayoutPanel);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_settings__ = __webpack_require__(28);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    RangeControl = _wp$components.RangeControl;


var PaddingControls = function PaddingControls(props) {
	var _props$attributes = props.attributes,
	    contentPadding = _props$attributes.contentPadding,
	    contentPaddingCustom = _props$attributes.contentPaddingCustom,
	    setAttributes = props.setAttributes,
	    contentPaddingOptions = props.settings.contentPaddingOptions;


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
					{
						key: option.value,
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
			onChange: function onChange(newContentPadding) {
				return setAttributes({ contentPaddingCustom: newContentPadding });
			},
			min: 0,
			max: 25
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__with_settings__["a" /* default */])(PaddingControls));

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_settings__ = __webpack_require__(28);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    RangeControl = _wp$components.RangeControl;


var WidthControls = function WidthControls(props) {
	var _props$attributes = props.attributes,
	    contentWidth = _props$attributes.contentWidth,
	    contentWidthCustom = _props$attributes.contentWidthCustom,
	    setAttributes = props.setAttributes,
	    contentWidthOptions = props.settings.contentWidthOptions;


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
					{
						key: option.value,
						isDefault: option.value !== contentWidth,
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
			onChange: function onChange(newContentWidth) {
				return setAttributes({ contentWidthCustom: newContentWidth });
			},
			min: 20,
			max: 90,
			step: 10
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__with_settings__["a" /* default */])(WidthControls));

/***/ }),
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


function PositionIndicatorsPanel(props) {
	var attributes = props.attributes,
	    setAttributes = props.setAttributes;
	var positionIndicators = attributes.positionIndicators;


	return wp.element.createElement(
		PanelBody,
		{ title: __('Position Indicators', '__plugin_txtd'), initialOpen: false },
		wp.element.createElement(ToggleControl, {
			label: __('Enable Position Indicators', '__plugin_txtd'),
			checked: positionIndicators,
			onChange: function onChange() {
				setAttributes({ positionIndicators: !positionIndicators });
			}
		})
	);
}

/* harmony default export */ __webpack_exports__["a"] = (PositionIndicatorsPanel);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GalleryPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends__);







/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var MediaPlaceholder = wp.blockEditor.MediaPlaceholder;


var ALLOWED_MEDIA_TYPES = ['image'];

var GalleryPlaceholder = function GalleryPlaceholder(props) {
	var galleryImages = props.attributes.galleryImages;


	var hasImages = !!galleryImages.length;

	function onChangeGallery(newGalleryImages) {
		var promises = newGalleryImages.map(function (image, index) {
			return wp.apiRequest({ path: '/wp/v2/media/' + image.id }).then(function (newImage) {
				newGalleryImages[index] = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends___default()({}, newImage, image);
			});
		});

		__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise___default.a.all(promises).then(function () {
			props.setAttributes({ galleryImages: newGalleryImages.filter(function (image) {
					return !!image.id && !!image.sizes && !!image.sizes.large && !!image.sizes.large.url;
				}) });
		});
	}

	return wp.element.createElement(MediaPlaceholder, {
		addToGallery: hasImages,
		className: '',
		labels: {
			title: '',
			instructions: __('Drag images, upload new ones or select files from your library.', '__plugin_txtd')
		},
		onSelect: onChangeGallery,
		accept: 'image/*',
		allowedTypes: ALLOWED_MEDIA_TYPES,
		multiple: true,
		value: hasImages ? galleryImages : undefined
	});
};

var GalleryPreview = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(GalleryPreview, _Component);

	function GalleryPreview() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, GalleryPreview);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (GalleryPreview.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(GalleryPreview)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(GalleryPreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    galleryImages = _props.galleryImages,
			    selected = _props.selected,
			    onSelectImage = _props.onSelectImage;


			return wp.element.createElement(
				'ul',
				{ className: 'novablocks-slideshow__gallery-edit' },
				galleryImages.map(function (img, index) {
					var classes = ['novablocks-slideshow__gallery-item'];

					if (selected === index) {
						classes.push('novablocks-slideshow__gallery-item--active');
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
/* 188 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockHorizontalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(2);

/**
 * Internal dependencies
 */


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
    Consumer = _createContext.Consumer;

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
				className: 'pixelgrade-hero-horizontal-alignment-button'
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
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockVerticalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(2);

/**
 * Internal dependencies
 */


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
    Consumer = _createContext.Consumer;

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

	return { clientId: clientId };
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
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollIndicatorPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__with_settings__ = __webpack_require__(28);





/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;
var select = wp.data.select;
var Component = wp.element.Component;

var HeightControls = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(HeightControls, _Component);

	function HeightControls() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, HeightControls);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeightControls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(HeightControls)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(HeightControls, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes,
			    settings = _props.settings;
			var minHeight = attributes.minHeight,
			    applyMinimumHeight = attributes.applyMinimumHeight;


			return wp.element.createElement(
				PanelBody,
				{ title: __('Height', '__plugin_txtd'), initialOpen: false },
				wp.element.createElement(RadioControl, {
					label: __('Apply Minimum Height', '__plugin_txtd'),
					selected: applyMinimumHeight,
					onChange: function onChange(nextMinimumHeight) {
						setAttributes({ applyMinimumHeight: nextMinimumHeight });
					},
					options: settings.applyMinimumHeightOptions
				}),
				'none' !== applyMinimumHeight && wp.element.createElement(RadioControl, {
					label: __('Minimum Height', '__plugin_txtd'),
					selected: minHeight,
					onChange: function onChange(minHeight) {
						setAttributes({ minHeight: parseInt(minHeight, 10) });
					},
					options: settings.minimumHeightOptions
				})
			);
		}
	}]);

	return HeightControls;
}(Component);

;

var HeightPanel = Object(__WEBPACK_IMPORTED_MODULE_5__with_settings__["a" /* default */])(HeightControls);

var ScrollIndicatorPanel = Object(__WEBPACK_IMPORTED_MODULE_5__with_settings__["a" /* default */])(function (props) {
	var scrollIndicator = props.attributes.scrollIndicator,
	    setAttributes = props.setAttributes;


	var heroBlocks = select('core/block-editor').getBlocks().filter(function (block) {
		return block.name === 'novablocks/hero';
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
			onChange: function onChange(nextScrollIndicator) {
				setAttributes({ scrollIndicator: nextScrollIndicator });
			}
		})
	);
});



/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background__ = __webpack_require__(194);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
var select = wp.data.select;


var HeroPreview = function HeroPreview(props) {
	var _props$attributes = props.attributes,
	    contentPadding = _props$attributes.contentPadding,
	    contentPaddingCustom = _props$attributes.contentPaddingCustom,
	    contentWidth = _props$attributes.contentWidth,
	    contentWidthCustom = _props$attributes.contentWidthCustom,
	    verticalAlignment = _props$attributes.verticalAlignment,
	    horizontalAlignment = _props$attributes.horizontalAlignment,
	    minHeight = _props$attributes.minHeight,
	    minHeightFallback = _props$attributes.minHeightFallback,
	    applyMinimumHeightBlock = _props$attributes.applyMinimumHeightBlock,
	    scrollIndicatorBlock = _props$attributes.scrollIndicatorBlock,
	    contentColor = _props$attributes.contentColor,
	    overlayFilterStyle = _props$attributes.overlayFilterStyle,
	    className = props.className,
	    clientId = props.clientId,
	    settings = props.settings;


	var classes = [className, 'novablocks-hero', 'novablocks-u-valign-' + verticalAlignment, 'novablocks-u-halign-' + horizontalAlignment, 'novablocks-u-spacing-' + contentPadding, 'novablocks-u-content-width-' + contentWidth, 'novablocks-u-background', 'novablocks-u-background-' + overlayFilterStyle];

	var styles = {
		hero: {
			color: contentColor
		},
		foreground: {},
		content: {}
	};

	var minimumHeight = settings.usePostMetaAttributes ? minHeight : minHeightFallback;

	var heroBlocks = select('core/block-editor').getBlocks().filter(function (block) {
		return block.name === 'novablocks/hero';
	});

	var index = heroBlocks.findIndex(function (block) {
		return block.clientId === clientId;
	});
	var scrollIndicatorFallback = index === 0 && minimumHeight === 100;
	var scrollIndicator = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;

	if (!!applyMinimumHeightBlock) {
		styles.hero.minHeight = minimumHeight + 'vh';
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
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__background__["a" /* default */], props),
		wp.element.createElement(
			'div',
			{ className: 'novablocks-hero__foreground novablocks-u-content-padding', style: styles.foreground },
			wp.element.createElement(
				'div',
				{ className: 'novablocks-u-content-align' },
				wp.element.createElement(
					'div',
					{ className: 'novablocks-hero__inner-container novablocks-u-content-width', style: styles.content },
					wp.element.createElement(InnerBlocks, { template: settings.hero.template })
				),
				scrollIndicator && wp.element.createElement('div', { className: 'novablocks-hero__indicator' })
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (HeroPreview);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_with_parallax__ = __webpack_require__(21);

/**
 * Internal dependencies
 */


var HeroBackground = function HeroBackground(props) {
	var _props$attributes = props.attributes,
	    overlayFilterStyle = _props$attributes.overlayFilterStyle,
	    overlayFilterStrength = _props$attributes.overlayFilterStrength,
	    media = _props$attributes.media,
	    focalPoint = _props$attributes.focalPoint,
	    style = props.style;


	var styles = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.parallax.style, {
		opacity: 1,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%'
	});

	if (overlayFilterStyle !== 'none') {
		styles.opacity = 1 - overlayFilterStrength / 100;
	}

	return wp.element.createElement(
		'div',
		{ className: 'novablocks-mask' },
		wp.element.createElement(
			'div',
			{ className: 'novablocks-hero__background', style: style },
			media.type === 'image' && typeof media.sizes !== 'undefined' && wp.element.createElement('img', { className: 'novablocks-hero__media', src: media.sizes.full.url, style: styles, alt: media.alt }),
			media.type === 'video' && wp.element.createElement('video', { muted: true, autoPlay: true, loop: true, className: 'novablocks-hero__media', src: media.url, style: styles })
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__components_with_parallax__["b" /* withParallaxContext */])(HeroBackground));

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(60);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;


var ALLOWED_MEDIA_TYPES = ['image', 'video'];

var HeroBlockControls = function HeroBlockControls(props) {
	var setAttributes = props.setAttributes;


	return wp.element.createElement(
		BlockControls,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* AlignmentToolbar */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["b" /* ColorToolbar */], props),
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
						className: 'components-icon-button components-toolbar__control',
						label: __('Change Media', '__plugin_txtd'),
						icon: __WEBPACK_IMPORTED_MODULE_0__icons__["r" /* swap */],
						onClick: open
					});
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (HeroBlockControls);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/logo', {
	title: __('Logo', '__plugin_txtd'),
	description: __('Outputs custom logo markup.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["k" /* logo */],
	// Additional search terms
	keywords: [__('branding', '__plugin_txtd')],
	parent: ['novablocks/header'],
	save: function save() {},
	edit: function edit(props) {
		return wp.element.createElement(wp.serverSideRender, {
			block: 'novablocks/logo',
			attributes: props.attributes
		});
	}
}));

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(198);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/media', {
	title: __('Media Card Constellation', '__plugin_txtd'),
	description: __('Display media objects alongside short pieces of content.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["m" /* media */],
	// Additional search terms
	keywords: [__('image with text', '__plugin_txtd'), __('columns', '__plugin_txtd'), __('side text', '__plugin_txtd')],
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = wp.data.select('core/block-editor').getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	}
}));

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_settings__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_controls__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inspector_controls__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preview__ = __webpack_require__(201);


/**
 * Internal dependencies
 */





/**
 * WordPress dependencies
 */
var Fragment = wp.element.Fragment;


var MediaEdit = function MediaEdit(props) {
	function updateImages(media) {
		props.setAttributes({
			images: media.map(function (image) {
				return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()({ id: image.id, url: image.url, alt: image.alt });
			})
		});
	}

	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { updateImages: updateImages })),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__block_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { updateImages: updateImages })),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__inspector_controls__["a" /* default */], props)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__components_with_settings__["a" /* default */])(MediaEdit));

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_alignment_controls__ = __webpack_require__(82);


/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;


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

var MediaBlockControls = function MediaBlockControls(props) {
	var attributes = props.attributes,
	    setAttributes = props.setAttributes,
	    updateImages = props.updateImages;
	var mediaPosition = attributes.mediaPosition,
	    _attributes$images = attributes.images,
	    images = _attributes$images === undefined ? [] : _attributes$images;


	var galleryImages = images.map(function (image) {
		return JSON.parse(image);
	});
	var hasImages = !!images.length;

	return wp.element.createElement(
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
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_alignment_controls__["a" /* AlignmentToolbar */], props),
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
						icon: __WEBPACK_IMPORTED_MODULE_2__icons__["r" /* swap */],
						onClick: open
					});
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (MediaBlockControls);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl;


var MediaInspectorControls = function MediaInspectorControls(props) {
	var _props$attributes = props.attributes,
	    contentStyle = _props$attributes.contentStyle,
	    blockStyle = _props$attributes.blockStyle,
	    setAttributes = props.setAttributes,
	    _props$settings$media = props.settings.media,
	    contentAreaOptions = _props$settings$media.contentAreaOptions,
	    blockAreaOptions = _props$settings$media.blockAreaOptions;


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
					options: contentAreaOptions,
					onChange: function onChange(nextContentStyle) {
						return setAttributes({ contentStyle: nextContentStyle });
					}
				})
			),
			wp.element.createElement(
				PanelBody,
				{ title: __('Block Area', '__plugin_txtd'), initialOpen: true },
				wp.element.createElement(RadioControl, {
					label: __('Emphasis Level', '__plugin_txtd'),
					value: blockStyle,
					selected: blockStyle,
					options: blockAreaOptions,
					onChange: function onChange(nextBlockStyle) {
						return setAttributes({ blockStyle: nextBlockStyle });
					}
				})
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (MediaInspectorControls);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder;


var MediaPreview = function MediaPreview(props) {
	var _props$attributes = props.attributes,
	    contentStyle = _props$attributes.contentStyle,
	    blockStyle = _props$attributes.blockStyle,
	    mediaPosition = _props$attributes.mediaPosition,
	    images = _props$attributes.images,
	    className = props.className,
	    updateImages = props.updateImages,
	    settings = props.settings;


	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'novablocks-media', 'has-image-on-the-' + mediaPosition, 'block-is-' + blockStyle, 'content-is-' + contentStyle, {
		'has-background': blockStyle !== 'basic'
	});

	var galleryImages = images.map(function (image) {
		return JSON.parse(image);
	});

	var displayImages = function displayImages(imagesArray) {
		if (0 === imagesArray.length) {
			return wp.element.createElement(MediaPlaceholder, {
				icon: 'format-gallery',
				className: 'novablocks-media__placeholder',
				onSelect: updateImages,
				accept: 'image/*',
				allowedTypes: ['image'],
				multiple: true
			});
		}

		return galleryImages.map(function (image) {
			return wp.element.createElement(
				'div',
				{ key: image.id, className: 'novablocks-media__image' },
				wp.element.createElement('img', { alt: image.alt, src: image.url })
			);
		});
	};

	return wp.element.createElement(
		'div',
		{ className: classNames },
		wp.element.createElement(
			'div',
			{ className: 'wp-block-group__inner-container' },
			wp.element.createElement(
				'div',
				{ className: 'wp-block', 'data-align': 'wide' },
				wp.element.createElement(
					'div',
					{ className: 'novablocks-media__layout' },
					wp.element.createElement(
						'div',
						{ className: 'novablocks-media__content' },
						wp.element.createElement(
							'div',
							{ className: 'novablocks-media__inner-container' },
							wp.element.createElement(InnerBlocks, {
								allowedBlocks: settings.media.allowedBlocks,
								template: settings.media.template
							})
						)
					),
					wp.element.createElement(
						'div',
						{ className: 'novablocks-media__aside' },
						displayImages(images)
					)
				)
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (MediaPreview);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(21);
/**
 * Internal dependencies
 */





/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/slideshow', {
	title: __('Slideshow Me the Way', '__plugin_txtd'),
	description: __('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["q" /* slideshow */],
	// Additional search terms
	keywords: [__('slider', '__plugin_txtd'), __('carousel', '__plugin_txtd'), __('images', '__plugin_txtd'), __('cover', '__plugin_txtd')],
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = wp.data.select('core/block-editor').getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	}
}));

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_util__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector_controls__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__block_controls__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_with_settings__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_with_parallax__ = __webpack_require__(21);






/**
 * Internal dependencies
 */









/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;

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
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    galleryImages = _props.attributes.galleryImages,
			    clientId = _props.clientId,
			    defaultImages = _props.settings.slideshow.defaultImages;


			if (!galleryImages.length) {
				wp.data.dispatch('core/block-editor').updateBlockAttributes(clientId, {
					galleryImages: Object(__WEBPACK_IMPORTED_MODULE_6__components_util__["a" /* shuffleArray */])(defaultImages.slice(0))
				});
			}
		}
	}, {
		key: 'onPrevArrowClick',
		value: function onPrevArrowClick() {
			var galleryImages = this.props.attributes.galleryImages;
			var selectedIndex = this.state.selectedIndex;

			var newIndex = (selectedIndex + galleryImages.length - 1) % galleryImages.length;
			this.setState({ selectedIndex: newIndex });
		}
	}, {
		key: 'onNextArrowClick',
		value: function onNextArrowClick() {
			var galleryImages = this.props.attributes.galleryImages;
			var selectedIndex = this.state.selectedIndex;

			var newIndex = (selectedIndex + 1) % galleryImages.length;
			this.setState({ selectedIndex: newIndex });
		}
	}, {
		key: 'setIndex',
		value: function setIndex(selectedIndex) {
			this.setState({ selectedIndex: selectedIndex });
		}
	}, {
		key: 'render',
		value: function render() {
			var galleryImages = this.props.attributes.galleryImages;


			var setIndex = this.setIndex.bind(this);

			var selectedIndex = this.state.selectedIndex;


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
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__inspector_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, { setIndex: setIndex, selectedIndex: selectedIndex })),
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_9__block_controls__["a" /* default */], this.props)
			);
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent(compose([__WEBPACK_IMPORTED_MODULE_10__components_with_settings__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__components_with_parallax__["a" /* default */]]))(Edit));

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shuffleArray; });
// https://stackoverflow.com/a/2450976
var shuffleArray = function shuffleArray(array) {
	var currentIndex = array.length,
	    temporaryValue = void 0,
	    randomIndex = void 0;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// eslint-disable-next-line no-restricted-syntax
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
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(60);





/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;


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
			window.addEventListener('resize', this.updateDimensions.bind(this));
			this.updateDimensions();
		}
	}, {
		key: 'updateDimensions',
		value: function updateDimensions() {
			if (!this.container) {
				return;
			}

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
			    verticalAlignment = _props$attributes.verticalAlignment,
			    horizontalAlignment = _props$attributes.horizontalAlignment,
			    contentColor = _props$attributes.contentColor,
			    overlayFilterStyle = _props$attributes.overlayFilterStyle,
			    galleryImages = _props$attributes.galleryImages,
			    previewImage = _props.previewImage,
			    className = _props.className;


			var classes = [className, 'novablocks-slideshow is-ready', 'novablocks-u-valign-' + verticalAlignment, 'novablocks-u-halign-' + horizontalAlignment, 'novablocks-u-spacing-' + contentPadding, 'novablocks-u-content-width-' + contentWidth, 'novablocks-u-background', 'novablocks-u-background-' + overlayFilterStyle];

			var styles = {
				slideshow: { color: contentColor },
				content: {},
				foreground: {}
			};

			if (contentPadding === 'custom') {
				styles.foreground.paddingTop = contentPaddingCustom + '%';
				styles.foreground.paddingBottom = contentPaddingCustom + '%';
			}

			if (contentWidth === 'custom') {
				styles.content.maxWidth = contentWidthCustom + '%';
			}

			var maxAspectRatio = 0;
			var mediaMinHeight = 0;

			galleryImages.map(function (image) {
				if (!!image.sizes && !!image.sizes.large && !!image.sizes.large.width) {
					var aspectRatio = image.sizes.large.width / image.sizes.large.height;
					maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
					mediaMinHeight = _this2.state.dimensions.width / maxAspectRatio;
				}
				return true;
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
						{ className: 'novablocks-slideshow__slider', style: styles.slider },
						wp.element.createElement(
							'div',
							{ className: 'novablocks-slideshow__slide' },
							previewImage && wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__background__["a" /* default */], this.props),
								wp.element.createElement(
									'div',
									{ className: 'novablocks-slideshow__content novablocks-u-content-padding', style: styles.foreground },
									wp.element.createElement(
										'div',
										{ className: 'novablocks-u-content-align' },
										wp.element.createElement(
											'div',
											{ className: 'novablocks-u-content-width', style: styles.content },
											!!previewImage.title && !!previewImage.title.rendered && wp.element.createElement(
												'h2',
												null,
												previewImage.title.rendered
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
						{ className: 'novablocks-slideshow__controls' },
						wp.element.createElement('div', { className: 'novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled', onClick: this.props.onPrevArrowClick }),
						wp.element.createElement('div', { className: 'novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled', onClick: this.props.onNextArrowClick })
					)
				),
				!galleryImages.length && wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components__["c" /* GalleryPlaceholder */], this.props),
					wp.element.createElement(
						'div',
						{ className: 'novablocks-slideshow__controls' },
						wp.element.createElement('div', { className: 'novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled' }),
						wp.element.createElement('div', { className: 'novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled' })
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
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_with_parallax__ = __webpack_require__(21);

/**
 * Internal dependencies
 */


var SlideshowBackground = function SlideshowBackground(props) {
	var _props$attributes = props.attributes,
	    overlayFilterStyle = _props$attributes.overlayFilterStyle,
	    overlayFilterStrength = _props$attributes.overlayFilterStrength,
	    previewImage = props.previewImage,
	    style = props.style;


	var focalPoint = previewImage.focalPoint || { x: 0.5, y: 0.5 };

	var styles = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.parallax.style, {
		opacity: 1,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%'
	});

	if (overlayFilterStyle !== 'none') {
		styles.opacity = 1 - overlayFilterStrength / 100;
	}

	return wp.element.createElement(
		'div',
		{ className: 'novablocks-mask' },
		wp.element.createElement(
			'div',
			{ className: 'novablocks-slideshow__background', style: style },
			wp.element.createElement('img', { className: 'novablocks-slideshow__media', src: previewImage.sizes.large.url, alt: '', style: styles })
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__components_with_parallax__["b" /* withParallaxContext */])(SlideshowBackground));

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(60);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    FocalPointPicker = _wp$components.FocalPointPicker,
    PanelBody = _wp$components.PanelBody,
    RadioControl = _wp$components.RadioControl;
var InspectorControls = wp.blockEditor.InspectorControls;
var Fragment = wp.element.Fragment;


var SlideshowInspectorControls = function SlideshowInspectorControls(props) {
	var _props$attributes = props.attributes,
	    galleryImages = _props$attributes.galleryImages,
	    minHeight = _props$attributes.minHeight,
	    slideshowType = _props$attributes.slideshowType,
	    selectedIndex = props.selectedIndex,
	    setIndex = props.setIndex,
	    setAttributes = props.setAttributes,
	    minHeightOptions = props.settings.slideshow.minHeightOptions;


	var selectedImage = galleryImages[selectedIndex];

	return wp.element.createElement(
		InspectorControls,
		null,
		!!galleryImages.length && wp.element.createElement(
			PanelBody,
			{
				className: 'nova-blocks-slideshow-type-panel',
				title: __('Slides', '__plugin_txtd') },
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components__["d" /* GalleryPreview */], {
				galleryImages: galleryImages,
				onSelectImage: setIndex,
				selected: selectedIndex
			}),
			selectedImage && wp.element.createElement(FocalPointPicker, {
				url: selectedImage.url,
				dimensions: {
					width: selectedImage.width,
					height: selectedImage.height
				},
				value: selectedImage.focalPoint || { x: 0.5, y: 0.5 },
				onChange: function onChange(focalPoint) {
					var newGalleryImages = galleryImages;
					newGalleryImages[selectedIndex].focalPoint = focalPoint;
					setAttributes({ galleryImages: newGalleryImages });
				}
			})
		),
		'gallery' === slideshowType && wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components__["f" /* LayoutPanel */], props),
			wp.element.createElement(
				PanelBody,
				{ title: __('Height', '__plugin_txtd'), initialOpen: false },
				wp.element.createElement(RadioControl, {
					label: __('Minimum Height', '__plugin_txtd'),
					selected: minHeight,
					onChange: function onChange(nextMinHeight) {
						setAttributes({ minHeight: parseInt(nextMinHeight, 10) });
					},
					options: minHeightOptions
				})
			)
		),
		'gallery' !== slideshowType && wp.element.createElement(
			PanelBody,
			null,
			__('Coming Soon', '__plugin_txtd')
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (SlideshowInspectorControls);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_alignment_controls__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_color_controls__ = __webpack_require__(98);


/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;
var BlockControls = wp.blockEditor.BlockControls;
var MediaUpload = wp.blockEditor.MediaUpload;


var SlideshowBlockControls = function SlideshowBlockControls(props) {
	var galleryImages = props.attributes.galleryImages,
	    setAttributes = props.setAttributes;


	var onChangeGallery = function onChangeGallery(newGalleryImages) {
		var promises = newGalleryImages.map(function (image, index) {
			return wp.apiRequest({ path: '/wp/v2/media/' + image.id }).then(function (newImage) {
				newGalleryImages[index] = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, newImage, image);
			});
		});

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises).then(function () {
			setAttributes({ galleryImages: newGalleryImages.filter(function (image) {
					if (!image.sizes.large) {
						image.sizes.large = image.sizes.full;
					}
					return !!image.id && !!image.sizes && !!image.sizes.large && !!image.sizes.large.url;
				}) });
		});
	};

	return wp.element.createElement(
		BlockControls,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_alignment_controls__["a" /* AlignmentToolbar */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__components_color_controls__["a" /* ColorToolbar */], props),
		wp.element.createElement(
			Toolbar,
			null,
			wp.element.createElement(MediaUpload, {
				type: 'image',
				multiple: true,
				gallery: true,
				value: galleryImages.map(function (image) {
					return image.id;
				}),
				onSelect: onChangeGallery,
				render: function render(_ref) {
					var open = _ref.open;
					return wp.element.createElement(IconButton, {
						className: 'components-icon-button components-toolbar__control',
						label: __('Change Media', '__plugin_txtd'),
						icon: __WEBPACK_IMPORTED_MODULE_2__icons__["r" /* swap */],
						onClick: open
					});
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (SlideshowBlockControls);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(210);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/navigation', {
	title: __('Space Navigation', '__plugin_txtd'),
	description: __('Outputs chosen navigaiton menu markup.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["n" /* navigation */],
	// Additional search terms
	keywords: [__('menu', '__plugin_txtd'), __('site menu', '__plugin_txtd'), __('primary', '__plugin_txtd'), __('secondary', '__plugin_txtd')],
	parent: ['novablocks/header'],
	save: function save() {},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */]
}));

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var __ = wp.i18n.__;
var Component = wp.element.Component;

var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Edit, [{
		key: "render",
		value: function render() {
			var slug = this.props.attributes.slug;


			return [wp.element.createElement(wp.serverSideRender, {
				block: "novablocks/navigation",
				attributes: this.props.attributes
			})];
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(215);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var select = wp.data.select;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/menu-food', {
	title: __('Food Menu', '__plugin_txtd'),
	description: __('Display a list of food or drink items available at your venue.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["f" /* foodmenu */],
	// Additional search terms
	keywords: [__('food menu', '__plugin_txtd'), __('restaurant menu', '__plugin_txtd'), __('dishes', '__plugin_txtd'), __('eats', '__plugin_txtd'), __('menu list', '__plugin_txtd')],
	attributes: {
		enableTwoColumns: {
			type: 'boolean',
			default: true
		}
	},
	example: {
		attributes: {
			enableTwoColumns: false
		}
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = select('core/block-editor').getSettings();
		return settings.alignWide ? { 'data-align': 'wide' } : {};
	},

	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */]
}));

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inspector_controls__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preview__ = __webpack_require__(214);
/**
 * WordPress dependencies
 */
var Fragment = wp.element.Fragment;

/**
 * Internal dependencies
 */




var FoodMenuEdit = function FoodMenuEdit(props) {
	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__preview__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__inspector_controls__["a" /* default */], props)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuEdit);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var FoodMenuInspectorControls = function FoodMenuInspectorControls(props) {
	var enableTwoColumns = props.attributes.enableTwoColumns,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: __('Layout', '__plugin_txtd'), initialOpen: true },
				wp.element.createElement(ToggleControl, {
					label: __('2 columns', '__plugin_txtd'),
					checked: enableTwoColumns,
					onChange: function onChange() {
						return setAttributes({ enableTwoColumns: !enableTwoColumns });
					}
				})
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuInspectorControls);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 * External dependencies
 */


var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var createBlock = wp.blocks.createBlock;
var IconButton = wp.components.IconButton;


var ALLOWED_BLOCKS = ['novablocks/menu-food-section'];
var TEMPLATE = [['novablocks/menu-food-section', { sectionTitle: 'Starters' }, [['novablocks/menu-food-item', { title: 'Pea & Mint Soup', description: 'Server with focaccia bread', price: '$8.00', enableSalePrice: true, salePrice: '$5.00' }], ['novablocks/menu-food-item', { title: 'Beaf Meatballs', description: 'In a spicy tomato sauce', price: '$10.50' }], ['novablocks/menu-food-item', { title: 'Hummus & Baba Ganoush Dip', description: 'Olive & grilled flatbread', price: '$12.00' }]]], ['novablocks/menu-food-section', { sectionTitle: 'Desserts' }, [['novablocks/menu-food-item', { title: 'Dark Chocolate & Brownie Delice', description: 'Fudge bits & salted caramel ice cream', price: '$6.50' }], ['novablocks/menu-food-item', { title: 'Berry Cheesecake Trifle', description: 'Fresh raspberries & strawberries, sable cookie', price: '$6.50', enableHighlightFoodItem: true, highlightLabel: 'New' }], ['novablocks/menu-food-item', { title: 'Caramelised Lemon Tart', description: 'Meringue crisps, gin & tonic ice cream', price: '$6.50' }]]], ['novablocks/menu-food-section', { sectionTitle: 'Main Course' }, [['novablocks/menu-food-item', { title: 'The Classic Burger', description: 'Chargrilled, with or without bacon, on a brioche bun & fries', price: '$15.50' }], ['novablocks/menu-food-item', { title: 'Roast Salmon', description: 'Hollandaise sauce, green beans & potato galette', price: '$19.50' }], ['novablocks/menu-food-item', { title: 'Tagliatelle Pesto Chicken', description: 'Roasted Mediterranean vegetables, tomato and herb sauce', price: '$15.00', enableHighlightFoodItem: true, highlightLabel: 'Chef Selection' }], ['novablocks/menu-food-item', { title: 'Confit de Canard ', description: 'Duck confit, white bean & ham cassoulet, wilted spinach', price: '$12.15' }], ['novablocks/menu-food-item', { title: 'Roasted Steak Roulade', description: 'Mint parsley with apple cider vinegar, salt, sugar & spices', price: '$14.95' }], ['novablocks/menu-food-item', { title: 'Cornish-mackerel', description: 'Marinated tomatoes, fragrant curry, tamarillo', price: '$10.45' }], ['novablocks/menu-food-item', { title: 'Lobster & Cucumber Soup', description: 'Lobster salad, smoked onion, rock samphire & sorrel', price: '$24.95' }]]]];

var FoodMenuPreview = function FoodMenuPreview(props) {
	var enableTwoColumns = props.attributes.enableTwoColumns,
	    clientId = props.clientId,
	    className = props.className;


	var addFoodMenuSection = function addFoodMenuSection() {
		var block = createBlock('novablocks/menu-food-section');
		var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
		wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
	};

	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'nova-food-menu', {
		'nova-food-menu--layout': enableTwoColumns === true
	});

	return wp.element.createElement(
		'div',
		{ className: classNames },
		wp.element.createElement(InnerBlocks, {
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			renderAppender: false
		}),
		wp.element.createElement(
			IconButton,
			{
				className: 'components-button block-editor-button-block-appender nova-blocks-appender',
				label: __('Add New Menu Section', '__plugin_txtd'),
				icon: 'insert',
				onClick: addFoodMenuSection
			},
			__('Add Menu Section', '__plugin_txtd')
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuPreview);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


/**
 * External dependencies
 */

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;


var FoodMenuSave = function FoodMenuSave(props) {
	var enableTwoColumns = props.attributes.enableTwoColumns,
	    className = props.className;


	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, "nova-food-menu", {
		'nova-food-menu--layout': enableTwoColumns === true
	});

	return wp.element.createElement(
		"div",
		{ className: classNames, itemScope: true, itemType: "http://schema.org/Menu" },
		wp.element.createElement(InnerBlocks.Content, null)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuSave);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(219);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/menu-food-section', {
	title: __('Food Menu Section', '__plugin_txtd'),
	description: __('A subgrouping of the Menu.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["f" /* foodmenu */],
	// Additional search terms
	keywords: [__('menu section', '__plugin_txtd'), __('food section', '__plugin_txtd'), __('list section', '__plugin_txtd'), __('dishes section', '__plugin_txtd')],
	parent: ['novablocks/menu-food'],
	attributes: {
		sectionTitle: {
			type: 'string',
			default: __('Drinks', '__plugin_txtd')
		}
	},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */]
}));

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview__ = __webpack_require__(218);
/**
 * WordPress dependencies
 */

var Fragment = wp.element.Fragment;

/**
 * Internal dependencies
 */



var FoodMenuSectionEdit = function FoodMenuSectionEdit(props) {
	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__preview__["a" /* default */], props)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuSectionEdit);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 * WordPress dependencies
 */


var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
var createBlock = wp.blocks.createBlock;
var IconButton = wp.components.IconButton;

/**
 * Internal dependencies.
 */

var ALLOWED_BLOCKS = ['novablocks/menu-food-item'];
var TEMPLATE = [['novablocks/menu-food-item']];

var FoodMenuSectionPreview = function FoodMenuSectionPreview(props) {
	var sectionTitle = props.attributes.sectionTitle,
	    setAttributes = props.setAttributes,
	    clientId = props.clientId,
	    className = props.className;


	var addFoodMenuItem = function addFoodMenuItem() {
		var block = createBlock('novablocks/menu-food-item');
		var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
		wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
	};

	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'nova-food-menu__section');

	return wp.element.createElement(
		'div',
		{ className: classNames },
		wp.element.createElement(
			'header',
			{ className: 'nova-food-menu__header' },
			wp.element.createElement(RichText, {
				tagName: 'h3',
				className: 'section-title',
				value: sectionTitle,
				onChange: function onChange(sectionTitle) {
					return setAttributes({ sectionTitle: sectionTitle });
				}
			})
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu__items' },
			wp.element.createElement(InnerBlocks, {
				allowedBlocks: ALLOWED_BLOCKS,
				template: TEMPLATE,
				renderAppender: false
			})
		),
		wp.element.createElement(
			IconButton,
			{
				className: 'components-button block-editor-button-block-appender nova-blocks-appender',
				label: __('Add New Menu Item', '__plugin_txtd'),
				icon: 'insert',
				onClick: addFoodMenuItem
			},
			__('Add Menu Item', '__plugin_txtd')
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuSectionPreview);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;


var FoodMenuSectionSave = function FoodMenuSectionSave(props) {
	var sectionTitle = props.attributes.sectionTitle,
	    setAttributes = props.setAttributes,
	    className = props.className;


	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, "nova-food-menu__section");

	return wp.element.createElement(
		"div",
		{ className: classNames, itemScope: true, itemType: "http://schema.org/MenuSection" },
		wp.element.createElement(
			"header",
			{ className: "nova-food-menu__header" },
			wp.element.createElement(RichText.Content, {
				tagName: "h3",
				className: "section-title",
				value: sectionTitle,
				onChange: function onChange(sectionTitle) {
					return setAttributes({ sectionTitle: sectionTitle });
				},
				itemprop: "name"
			})
		),
		wp.element.createElement(
			"div",
			{ className: "nova-food-menu__items" },
			wp.element.createElement(InnerBlocks.Content, null)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuSectionSave);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(224);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/menu-food-item', {
	title: __('Menu Item', '__plugin_txtd'),
	description: __('A food or drink item contained in a menu or menu section.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["f" /* foodmenu */],
	// Additional search terms
	keywords: [__('menu item', '__plugin_txtd'), __('food item', '__plugin_txtd'), __('dish', '__plugin_txtd'), __('list item', '__plugin_txtd')],
	parent: ['novablocks/menu-food-section'],
	attributes: {
		title: {
			type: 'string',
			default: __('Sweet Shrimp Salad', '__plugin_txtd')
		},
		description: {
			type: 'string',
			default: __('Tomatillo, Baja Crema, Cabbage, Fried Okra', '__plugin_txtd')
		},
		price: {
			type: 'string',
			default: '$7.95'
		},
		salePrice: {
			type: 'string',
			default: '$9.50'
		},
		highlightLabel: {
			type: 'string',
			default: __('Our top pick', '__plugin_txtd')
		},
		enableHighlightFoodItem: {
			type: 'boolean',
			default: false
		},
		enableSalePrice: {
			type: 'boolean',
			default: false
		}
	},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */]
}));

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inspector_controls__ = __webpack_require__(223);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var Fragment = wp.element.Fragment;
var BlockControls = wp.blockEditor.BlockControls;


var FoodMenuItem = function FoodMenuItem(props) {
	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__preview__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__inspector_controls__["a" /* default */], props)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuItem);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;
var __ = wp.i18n.__;


var FoodMenuItemPreview = function FoodMenuItemPreview(props) {
	var _props$attributes = props.attributes,
	    enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
	    highlightLabel = _props$attributes.highlightLabel,
	    enableSalePrice = _props$attributes.enableSalePrice,
	    salePrice = _props$attributes.salePrice,
	    price = _props$attributes.price,
	    description = _props$attributes.description,
	    title = _props$attributes.title,
	    setAttributes = props.setAttributes,
	    className = props.className;


	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'nova-food-menu-item', {
		'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
		'has-sale-price': enableSalePrice === true
	});

	return wp.element.createElement(
		'div',
		{ className: classNames },
		enableHighlightFoodItem && wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__highlight-label' },
			wp.element.createElement(RichText, {
				tagName: 'h5',
				className: 'nova-food-menu-item__label',
				value: highlightLabel,
				onChange: function onChange(highlightLabel) {
					return setAttributes({ highlightLabel: highlightLabel });
				},
				allowedFormats: []
			})
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__title' },
			wp.element.createElement(RichText, {
				value: title,
				tagName: 'h4',
				className: 'item-title',
				placeholder: __('Product Title', '__plugin_txtd'),
				onChange: function onChange(title) {
					return setAttributes({ title: title });
				}
			})
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__prices' },
			wp.element.createElement(RichText, {
				value: price,
				tagName: 'span',
				className: 'item-price',
				placeholder: __('$0.00', '__plugin_txtd'),
				onChange: function onChange(price) {
					return setAttributes({ price: price });
				}
			}),
			enableSalePrice && wp.element.createElement(
				'div',
				{ className: 'nova-food-menu-item__price--sale' },
				wp.element.createElement(RichText, {
					tagName: 'span',
					className: 'item-price--sale',
					value: salePrice,
					onChange: function onChange(salePrice) {
						return setAttributes({ salePrice: salePrice });
					},
					allowedFormats: []
				})
			)
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__description' },
			wp.element.createElement(RichText, {
				value: description,
				tagName: 'p',
				className: 'item-description',
				placeholder: __('Product Description', '__plugin_txtd'),
				onChange: function onChange(description) {
					return setAttributes({ description: description });
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuItemPreview);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


var FoodMenuItemInspectorControls = function FoodMenuItemInspectorControls(props) {
	var _props$attributes = props.attributes,
	    enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
	    enableSalePrice = _props$attributes.enableSalePrice,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: __('Menu Item', '__plugin_txtd'), initialOpen: true },
				wp.element.createElement(ToggleControl, {
					label: __('Highlight item', '__plugin_txtd'),
					help: __('Use it if you want to highlight some of the menu items and make them stand out.', '__plugin_txtd'),
					checked: enableHighlightFoodItem,
					onChange: function onChange() {
						return setAttributes({ enableHighlightFoodItem: !enableHighlightFoodItem });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: __('On sale', '__plugin_txtd'),
					checked: enableSalePrice,
					onChange: function onChange() {
						return setAttributes({ enableSalePrice: !enableSalePrice });
					}
				})
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuItemInspectorControls);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


/**
 * WordPress dependencies.
 */
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;


var FoodMenuItemSave = function FoodMenuItemSave(props) {
	var _props$attributes = props.attributes,
	    enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
	    highlightLabel = _props$attributes.highlightLabel,
	    enableSalePrice = _props$attributes.enableSalePrice,
	    salePrice = _props$attributes.salePrice,
	    price = _props$attributes.price,
	    description = _props$attributes.description,
	    title = _props$attributes.title,
	    setAttributes = props.setAttributes,
	    className = props.className;


	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'nova-food-menu-item', {
		'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
		'has-sale-price': enableSalePrice === true
	});

	return wp.element.createElement(
		'div',
		{ className: classNames, itemscope: true, itemtype: 'http://schema.org/MenuItem' },
		enableHighlightFoodItem && wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__highlight-label' },
			wp.element.createElement(
				'h5',
				{ className: 'nova-food-menu-item__label' },
				' ',
				highlightLabel,
				' '
			)
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__title' },
			wp.element.createElement(RichText.Content, {
				value: title,
				tagName: 'h4',
				className: 'item-title',
				onChange: function onChange(title) {
					return setAttributes({ title: title });
				},
				itemprop: 'name'
			})
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__prices', itemscope: true, itemtype: 'http://schema.org/offers' },
			wp.element.createElement(RichText.Content, {
				value: price,
				tagName: 'span',
				className: 'item-price',
				onChange: function onChange(price) {
					return setAttributes({ price: price });
				},
				itemprop: 'price'
			}),
			enableSalePrice && wp.element.createElement(
				'div',
				{ className: 'nova-food-menu-item__price--sale' },
				wp.element.createElement(
					'span',
					{ className: 'item-price--sale' },
					' ',
					salePrice,
					' '
				)
			)
		),
		wp.element.createElement(
			'div',
			{ className: 'nova-food-menu-item__description' },
			wp.element.createElement(RichText.Content, {
				value: description,
				tagName: 'p',
				className: 'item-description',
				onChange: function onChange(description) {
					return setAttributes({ description: description });
				},
				itemprop: 'description'
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuItemSave);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(229);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/opentable', {
	title: __('OpenTable Reservation', '__plugin_txtd'),
	description: __('Add OpenTable online reservation booking to your site.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["p" /* opentable */],
	// Additional search terms
	keywords: [__('reservations', '__plugin_txtd'), __('bookings', '__plugin_txtd')],
	attributes: {
		restaurantId: {
			type: 'number',
			default: 1
		},
		language: {
			type: 'string',
			default: 'en-US'
		},
		showOpenTableLogo: {
			type: 'boolean',
			default: true
		},
		layoutForm: {
			type: 'string',
			default: 'wide'
		}
	},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */]
}));

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inspector_controls__ = __webpack_require__(228);



/**
 * WordPress dependencies
 */
var Fragment = wp.element.Fragment;


var OpenTable = function OpenTable(props) {
	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__preview__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__inspector_controls__["a" /* default */], props)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (OpenTable);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal__);








/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var SandBox = wp.components.SandBox;

var OpenTablePreview = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(OpenTablePreview, _Component);

	function OpenTablePreview() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, OpenTablePreview);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (OpenTablePreview.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(OpenTablePreview)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(OpenTablePreview, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(prevProps) {
			return !__WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal___default()(prevProps.attributes, this.props.attributes);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$attributes = _props.attributes,
			    restaurantId = _props$attributes.restaurantId,
			    language = _props$attributes.language,
			    layoutForm = _props$attributes.layoutForm,
			    showOpenTableLogo = _props$attributes.showOpenTableLogo,
			    className = _props.className;


			var classNames = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, 'novablocks-opentable', 'novablocks-opentable__' + layoutForm, {
				'has-opentable-logo': showOpenTableLogo === true
			});

			var OpenTable = function OpenTable(props) {
				return wp.element.createElement(SandBox, props);
			};

			var html = '<div class="novablocks-opentable ' + classNames + '">' + ('<script type=\'text/javascript\' src=\'//www.opentable.com/widget/reservation/loader?rid=' + restaurantId + '&type=standard&theme=' + layoutForm + '&iframe=false&overlay=false&domain=com&lang=' + language + '\'></script>') + ('<link rel="stylesheet" href="' + novablocks_urls.frontend_blocks_stylesheet + '" type="text/css"/>') + ('<link rel="stylesheet" href="' + novablocks_urls.editor_blocks_stylesheet + '" type="text/css"/>') + '</div>';

			return wp.element.createElement(OpenTable, {
				html: html,
				title: 'Sandbox',
				type: 'embed'
			});
		}
	}]);

	return OpenTablePreview;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (OpenTablePreview);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl;


var OpenTableInspectorControls = function OpenTableInspectorControls(props) {
	var _props$attributes = props.attributes,
	    restaurantId = _props$attributes.restaurantId,
	    language = _props$attributes.language,
	    layoutForm = _props$attributes.layoutForm,
	    showOpenTableLogo = _props$attributes.showOpenTableLogo,
	    setAttributes = props.setAttributes;


	return wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: __('Settings', '__plugin_txtd'), initialOpen: true },
				wp.element.createElement(TextControl, {
					label: 'Restaurant ID',
					placeholder: __('1'),
					help: 'You can find your restaurant ID on the OpenTable website.',
					type: 'number',
					value: restaurantId,
					onChange: function onChange(restaurantId) {
						return setAttributes({ restaurantId: restaurantId });
					}
				}),
				wp.element.createElement(SelectControl, {
					label: 'Language',
					value: language,
					options: [{ label: 'English-EN', value: 'en-US' }, { label: 'Français-CA', value: 'fr-CA' }, { label: 'Deutsch-DE', value: 'de-DE' }, { label: 'Español-MX', value: 'es-MX' }, { label: '日本語-JP', value: 'ja-JP' }, { label: 'Nederlands-NL', value: 'nl-NL' }, { label: 'Italiano-IT', value: 'it-IT' }],
					onChange: function onChange(nextLanguage) {
						return setAttributes({ language: nextLanguage });
					}
				}),
				wp.element.createElement(RadioControl, {
					label: __('Layout', '__plugin_txtd'),
					value: layoutForm,
					selected: layoutForm,
					options: [{ label: 'Horizontal', value: 'wide' }, { label: 'Vertical', value: 'standard' }],
					onChange: function onChange(nextLayout) {
						return setAttributes({ layoutForm: nextLayout });
					}
				}),
				wp.element.createElement(ToggleControl, {
					label: __('Show OpenTable Logo', '__plugin_txtd'),
					checked: showOpenTableLogo,
					onChange: function onChange() {
						return setAttributes({ showOpenTableLogo: !showOpenTableLogo });
					}
				})
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (OpenTableInspectorControls);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


/**
 * WordPress dependencies.
 */
var __ = wp.i18n.__;


var OpenTableSave = function OpenTableSave(props) {
	var _props$attributes = props.attributes,
	    restaurantId = _props$attributes.restaurantId,
	    language = _props$attributes.language,
	    showOpenTableLogo = _props$attributes.showOpenTableLogo,
	    layoutForm = _props$attributes.layoutForm,
	    className = props.className;


	var formSrc = "//www.opentable.com/widget/reservation/loader?rid=" + restaurantId + "&domain=com&type=standard&theme=" + layoutForm + "&iframe=false&overlay=false&domain=com&lang=" + language;

	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, "novablocks-opentable", "novablocks-opentable__" + layoutForm, {
		'has-opentable-logo': showOpenTableLogo === true
	});

	return wp.element.createElement(
		"div",
		{ className: classNames },
		wp.element.createElement("script", { type: "text/javascript", src: formSrc })
	);
};

/* harmony default export */ __webpack_exports__["a"] = (OpenTableSave);

/***/ })
/******/ ]);