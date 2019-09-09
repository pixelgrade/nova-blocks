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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nova */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return slideshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return foodmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return opentable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return alignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return alignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return alignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return map; });
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(73);

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

var _defineProperty = __webpack_require__(71);

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

var store = __webpack_require__(50)('wks');
var uid = __webpack_require__(40);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(88);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(142);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(146);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(88);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var ctx = __webpack_require__(29);
var hide = __webpack_require__(20);
var has = __webpack_require__(21);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parallaxAttributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withParallaxContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_parallax_panel__ = __webpack_require__(92);










/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var createSlotFill = wp.components.createSlotFill;
var addFilter = wp.hooks.addFilter;


var parallaxAttributes = {};

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(72);
var toPrimitive = __webpack_require__(46);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(93);



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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(39);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(75);
var defined = __webpack_require__(47);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customized__ = __webpack_require__(68);


var styles = [{ slug: 'customized', label: 'Customized', styles: __WEBPACK_IMPORTED_MODULE_0__customized__["a" /* default */] }, { slug: 'original', label: 'Original', styles: [] }];

/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return range; });
/* unused harmony export todayDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parallaxInit; });
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
	for (var i = 0; i < max - min; i++) {
		array.push(i + min);
	}
	return array;
};

var todayDate = function todayDate(separator, isValid) {
	var currentTime = new Date(),
	    month = currentTime.getMonth() + 1,
	    day = currentTime.getDate(),
	    year = currentTime.getFullYear();

	if (day < 10) {
		day = '0' + day;
	}

	if (month < 10) {
		month = '0' + month;
	}

	if (isValid === true) {
		return year + separator + month + separator + day;
	} else {
		return day + separator + month + separator + year;
	}
};

var parallaxInit = function parallaxInit(BLOCK_NAME) {

	(function ($) {

		var $target = $('.' + BLOCK_NAME).filter('.has-parallax').find('.' + BLOCK_NAME + '__parallax');
		$target.rellax({ container: '.' + BLOCK_NAME + '__mask' });

		$target.each(function (i, obj) {
			var $obj = $(obj);
			$obj.imagesLoaded(function () {
				$obj.css('opacity', 1);
			});
		});
	})(jQuery);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(74);
var enumBugKeys = __webpack_require__(51);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(64);
} else {
  module.exports = __webpack_require__(65);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
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
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(47);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 35 */
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
  var ReactPropTypesSecret = __webpack_require__(66);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compileStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMapStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMapAccentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCenterFromMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getMarkersCenter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_map_center__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(23);




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
	var styleDataBySlug = __WEBPACK_IMPORTED_MODULE_2__styles__["a" /* default */].find(function (style) {
		return style.slug === styleSlug;
	}).styles;
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultMapCenter = {
	lat: 47.1665264,
	lng: 27.58285479999995
};

/* harmony default export */ __webpack_exports__["a"] = (defaultMapCenter);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(110)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(78)(String, 'String', function (iterated) {
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
var global = __webpack_require__(5);
var hide = __webpack_require__(20);
var Iterators = __webpack_require__(27);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_panel__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__layout_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallax_panel__ = __webpack_require__(92);
/* unused harmony reexport ParallaxPanel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_indicators_panel__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__position_indicators_panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_options__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__gallery_options__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__gallery_options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__color_controls__ = __webpack_require__(94);
/* unused harmony reexport ColorControls */
/* unused harmony reexport ColorPanel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__color_controls__["a"]; });
/* unused harmony reexport OverlayControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alignment_controls__ = __webpack_require__(70);
/* unused harmony reexport AlignmentControls */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__alignment_controls__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__height_controls__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__height_controls__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__height_controls__["b"]; });
/**
 * Internal dependencies
 */












/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
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
/* 47 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(50)('keys');
var uid = __webpack_require__(40);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(31) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(71);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(112);
var enumBugKeys = __webpack_require__(51);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(80).appendChild(iframe);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(6)('toStringTag');
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(38);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(31);
var wksExt = __webpack_require__(58);
var defineProperty = __webpack_require__(17).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(63);
} else {
  module.exports = __webpack_require__(67);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(15),m=__webpack_require__(28);function r(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,v=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,x=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,A=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.fundamental"):60117;
function B(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case v:return"Fragment";case aa:return"Portal";case ca:return"Profiler";case ba:return"StrictMode";case A:return"Suspense";case ha:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return"Context.Consumer";case x:return"Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return B(a.type);case ja:if(a=1===a._status?a._result:null)return B(a)}return null}var C=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;C.hasOwnProperty("ReactCurrentDispatcher")||(C.ReactCurrentDispatcher={current:null});C.hasOwnProperty("ReactCurrentBatchConfig")||(C.ReactCurrentBatchConfig={suspense:null});var la={};function D(a,b){for(var d=a._threadCount|0;d<=b;d++)a[d]=a._currentValue2,a._threadCount=d+1}
function ma(a,b,d,c){if(c&&(c=a.contextType,"object"===typeof c&&null!==c))return D(c,d),c[d];if(a=a.contextTypes){d={};for(var f in a)d[f]=b[f];b=d}else b=la;return b}for(var E=new Uint16Array(16),G=0;15>G;G++)E[G]=G+1;E[15]=0;
var na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa=Object.prototype.hasOwnProperty,pa={},qa={};
function ra(a){if(oa.call(qa,a))return!0;if(oa.call(pa,a))return!1;if(na.test(a))return qa[a]=!0;pa[a]=!0;return!1}function sa(a,b,d,c){if(null!==d&&0===d.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(c)return!1;if(null!==d)return!d.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function ta(a,b,d,c){if(null===b||"undefined"===typeof b||sa(a,b,d,c))return!0;if(c)return!1;if(null!==d)switch(d.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function I(a,b,d,c,f,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=c;this.attributeNamespace=f;this.mustUseProperty=d;this.propertyName=a;this.type=b;this.sanitizeURL=e}var J={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){J[a]=new I(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];J[b]=new I(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){J[a]=new I(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){J[a]=new I(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){J[a]=new I(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){J[a]=new I(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){J[a]=new I(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){J[a]=new I(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){J[a]=new I(a,5,!1,a.toLowerCase(),null,!1)});var K=/[\-:]([a-z])/g;function L(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(K,
L);J[b]=new I(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(K,L);J[b]=new I(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(K,L);J[b]=new I(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){J[a]=new I(a,1,!1,a.toLowerCase(),null,!1)});
J.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){J[a]=new I(a,1,!1,a.toLowerCase(),null,!0)});var ua=/["'&<>]/;
function M(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ua.exec(a);if(b){var d="",c,f=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==c&&(d+=a.substring(f,c));f=c+1;d+=b}a=f!==c?d+a.substring(f,c):d}return a}
function va(a,b){var d=J.hasOwnProperty(a)?J[a]:null;var c;if(c="style"!==a)c=null!==d?0===d.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(c||ta(a,b,d,!1))return"";if(null!==d){a=d.attributeName;c=d.type;if(3===c||4===c&&!0===b)return a+'=""';d.sanitizeURL&&(b=""+b);return a+"="+('"'+M(b)+'"')}return ra(a)?a+"="+('"'+M(b)+'"'):""}var N=null,O=null,P=null,Q=!1,R=!1,T=null,U=0;function V(){if(null===N)throw r(Error(321));return N}
function wa(){if(0<U)throw r(Error(312));return{memoizedState:null,queue:null,next:null}}function W(){null===P?null===O?(Q=!1,O=P=wa()):(Q=!0,P=O):null===P.next?(Q=!1,P=P.next=wa()):(Q=!0,P=P.next);return P}function xa(a,b,d,c){for(;R;)R=!1,U+=1,P=null,d=a(b,c);O=N=null;U=0;P=T=null;return d}function ya(a,b){return"function"===typeof b?b(a):b}
function za(a,b,d){N=V();P=W();if(Q){var c=P.queue;b=c.dispatch;if(null!==T&&(d=T.get(c),void 0!==d)){T.delete(c);c=P.memoizedState;do c=a(c,d.action),d=d.next;while(null!==d);P.memoizedState=c;return[c,b]}return[P.memoizedState,b]}a=a===ya?"function"===typeof b?b():b:void 0!==d?d(b):b;P.memoizedState=a;a=P.queue={last:null,dispatch:null};a=a.dispatch=Aa.bind(null,N,a);return[P.memoizedState,a]}
function Aa(a,b,d){if(!(25>U))throw r(Error(301));if(a===N)if(R=!0,a={action:d,next:null},null===T&&(T=new Map),d=T.get(b),void 0===d)T.set(b,a);else{for(b=d;null!==b.next;)b=b.next;b.next=a}}function Ba(){}
var X=0,Ca={readContext:function(a){var b=X;D(a,b);return a[b]},useContext:function(a){V();var b=X;D(a,b);return a[b]},useMemo:function(a,b){N=V();P=W();b=void 0===b?null:b;if(null!==P){var d=P.memoizedState;if(null!==d&&null!==b){a:{var c=d[1];if(null===c)c=!1;else{for(var f=0;f<c.length&&f<b.length;f++){var e=b[f],h=c[f];if((e!==h||0===e&&1/e!==1/h)&&(e===e||h===h)){c=!1;break a}}c=!0}}if(c)return d[0]}}a=a();P.memoizedState=[a,b];return a},useReducer:za,useRef:function(a){N=V();P=W();var b=P.memoizedState;
return null===b?(a={current:a},P.memoizedState=a):b},useState:function(a){return za(ya,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ba,useEffect:Ba,useDebugValue:Ba,useResponder:function(a,b){return{props:b,responder:a}}},Da={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ea(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Fa={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ga=l({menuitem:!0},Fa),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ha=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Ha.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Ia=/([A-Z])/g,Ja=/^ms-/,Z=m.Children.toArray,Ka=C.ReactCurrentDispatcher,La={listing:!0,pre:!0,textarea:!0},Ma=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Na={},Oa={};function Pa(a){if(void 0===a||null===a)return a;var b="";m.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Qa=Object.prototype.hasOwnProperty,Ra={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Sa(a,b){if(void 0===a)throw r(Error(152),B(b)||"Component");}
function Ta(a,b,d){function c(c,f){var e=f.prototype&&f.prototype.isReactComponent,g=ma(f,b,d,e),h=[],w=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){w=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}},k=void 0;if(e)k=new f(c.props,g,p),"function"===typeof f.getDerivedStateFromProps&&(e=f.getDerivedStateFromProps.call(null,c.props,k.state),null!=e&&(k.state=l({},k.state,e)));else if(N={},k=f(c.props,
g,p),k=xa(f,c.props,k,g),null==k||null==k.render){a=k;Sa(a,f);return}k.props=c.props;k.context=g;k.updater=p;p=k.state;void 0===p&&(k.state=p=null);if("function"===typeof k.UNSAFE_componentWillMount||"function"===typeof k.componentWillMount)if("function"===typeof k.componentWillMount&&"function"!==typeof f.getDerivedStateFromProps&&k.componentWillMount(),"function"===typeof k.UNSAFE_componentWillMount&&"function"!==typeof f.getDerivedStateFromProps&&k.UNSAFE_componentWillMount(),h.length){p=h;var q=
w;h=null;w=!1;if(q&&1===p.length)k.state=p[0];else{e=q?p[0]:k.state;var y=!0;for(q=q?1:0;q<p.length;q++){var u=p[q];u="function"===typeof u?u.call(k,e,c.props,g):u;null!=u&&(y?(y=!1,e=l({},e,u)):l(e,u))}k.state=e}}else h=null;a=k.render();Sa(a,f);c=void 0;if("function"===typeof k.getChildContext&&(g=f.childContextTypes,"object"===typeof g)){c=k.getChildContext();for(var S in c)if(!(S in g))throw r(Error(108),B(f)||"Unknown",S);}c&&(b=l({},b,c))}for(;m.isValidElement(a);){var f=a,e=f.type;if("function"!==
typeof e)break;c(f,e)}return{child:a,context:b}}
var Ua=function(){function a(b,d){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");m.isValidElement(b)?b.type!==v?b=[b]:(b=b.props.children,b=m.isValidElement(b)?[b]:Z(b)):b=Z(b);b={type:null,domNamespace:Da.html,children:b,childIndex:0,context:la,footer:""};var c=E[0];if(0===c){var f=E;c=f.length;var e=2*c;if(!(65536>=e))throw r(Error(304));var h=new Uint16Array(e);h.set(f);E=h;E[0]=c+1;for(f=c;f<e-1;f++)E[f]=f+1;E[e-1]=0}else E[0]=E[c];this.threadID=c;this.stack=
[b];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=d;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}a.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;E[a]=E[0];E[0]=a}};a.prototype.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,f=this.threadID;D(c,f);var e=c[f];this.contextStack[b]=c;this.contextValueStack[b]=e;c[f]=a.props.value};
a.prototype.popProvider=function(){var a=this.contextIndex,d=this.contextStack[a],c=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;d[this.threadID]=c};a.prototype.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};a.prototype.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Ka.current;Ka.current=Ca;try{for(var f=[""],e=!1;f[0].length<a;){if(0===
this.stack.length){this.exhausted=!0;var h=this.threadID;E[h]=E[0];E[0]=h;break}var g=this.stack[this.stack.length-1];if(e||g.childIndex>=g.children.length){var H=g.footer;""!==H&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===g.type)this.currentSelectValue=null;else if(null!=g.type&&null!=g.type.type&&g.type.type.$$typeof===x)this.popProvider(g.type);else if(g.type===A){this.suspenseDepth--;var F=f.pop();if(e){e=!1;var n=g.fallbackFrame;if(!n)throw r(Error(303));this.stack.push(n);
f[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else f[this.suspenseDepth]+=F}f[this.suspenseDepth]+=H}else{var w=g.children[g.childIndex++],p="";try{p+=this.render(w,g.context,g.domNamespace)}catch(k){throw k;}finally{}f.length<=this.suspenseDepth&&f.push("");f[this.suspenseDepth]+=p}}return f[0]}finally{Ka.current=c,X=b}};a.prototype.render=function(a,d,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return M(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+
M(c);this.previousWasTextNode=!0;return M(c)}d=Ta(a,d,this.threadID);a=d.child;d=d.context;if(null===a||!1===a)return"";if(!m.isValidElement(a)){if(null!=a&&null!=a.$$typeof){c=a.$$typeof;if(c===aa)throw r(Error(257));throw r(Error(258),c.toString());}a=Z(a);this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""});return""}var b=a.type;if("string"===typeof b)return this.renderDOM(a,d,c);switch(b){case ba:case ea:case ca:case ha:case v:return a=Z(a.props.children),this.stack.push({type:null,
domNamespace:c,children:a,childIndex:0,context:d,footer:""}),"";case A:throw r(Error(294));}if("object"===typeof b&&null!==b)switch(b.$$typeof){case fa:N={};var e=b.render(a.props,a.ref);e=xa(b.render,a.props,e,a.ref);e=Z(e);this.stack.push({type:null,domNamespace:c,children:e,childIndex:0,context:d,footer:""});return"";case ia:return a=[m.createElement(b.type,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""}),"";case x:return b=Z(a.props.children),
c={type:a,domNamespace:c,children:b,childIndex:0,context:d,footer:""},this.pushProvider(a),this.stack.push(c),"";case da:b=a.type;e=a.props;var h=this.threadID;D(b,h);b=Z(e.children(b[h]));this.stack.push({type:a,domNamespace:c,children:b,childIndex:0,context:d,footer:""});return"";case ka:throw r(Error(338));case ja:throw r(Error(295));}throw r(Error(130),null==b?b:typeof b,"");};a.prototype.renderDOM=function(a,d,c){var b=a.type.toLowerCase();c===Da.html&&Ea(b);if(!Na.hasOwnProperty(b)){if(!Ma.test(b))throw r(Error(65),
b);Na[b]=!0}var e=a.props;if("input"===b)e=l({type:void 0},e,{defaultChecked:void 0,defaultValue:void 0,value:null!=e.value?e.value:e.defaultValue,checked:null!=e.checked?e.checked:e.defaultChecked});else if("textarea"===b){var h=e.value;if(null==h){h=e.defaultValue;var g=e.children;if(null!=g){if(null!=h)throw r(Error(92));if(Array.isArray(g)){if(!(1>=g.length))throw r(Error(93));g=g[0]}h=""+g}null==h&&(h="")}e=l({},e,{value:void 0,children:""+h})}else if("select"===b)this.currentSelectValue=null!=
e.value?e.value:e.defaultValue,e=l({},e,{value:void 0});else if("option"===b){g=this.currentSelectValue;var H=Pa(e.children);if(null!=g){var F=null!=e.value?e.value+"":H;h=!1;if(Array.isArray(g))for(var n=0;n<g.length;n++){if(""+g[n]===F){h=!0;break}}else h=""+g===F;e=l({selected:void 0,children:void 0},e,{selected:h,children:H})}}if(h=e){if(Ga[b]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw r(Error(137),b,"");if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw r(Error(60));
if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw r(Error(61));}if(null!=h.style&&"object"!==typeof h.style)throw r(Error(62),"");}h=e;g=this.makeStaticMarkup;H=1===this.stack.length;F="<"+a.type;for(z in h)if(Qa.call(h,z)){var w=h[z];if(null!=w){if("style"===z){n=void 0;var p="",k="";for(n in w)if(w.hasOwnProperty(n)){var q=0===n.indexOf("--"),y=w[n];if(null!=y){if(q)var u=n;else if(u=n,Oa.hasOwnProperty(u))u=Oa[u];else{var S=u.replace(Ia,"-$1").toLowerCase().replace(Ja,
"-ms-");u=Oa[u]=S}p+=k+u+":";k=n;q=null==y||"boolean"===typeof y||""===y?"":q||"number"!==typeof y||0===y||Y.hasOwnProperty(k)&&Y[k]?(""+y).trim():y+"px";p+=q;k=";"}}w=p||null}n=null;b:if(q=b,y=h,-1===q.indexOf("-"))q="string"===typeof y.is;else switch(q){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":q=!1;break b;default:q=!0}q?Ra.hasOwnProperty(z)||(n=z,n=ra(n)&&null!=w?n+"="+
('"'+M(w)+'"'):""):n=va(z,w);n&&(F+=" "+n)}}g||H&&(F+=' data-reactroot=""');var z=F;h="";Fa.hasOwnProperty(b)?z+="/>":(z+=">",h="</"+a.type+">");a:{g=e.dangerouslySetInnerHTML;if(null!=g){if(null!=g.__html){g=g.__html;break a}}else if(g=e.children,"string"===typeof g||"number"===typeof g){g=M(g);break a}g=null}null!=g?(e=[],La[b]&&"\n"===g.charAt(0)&&(z+="\n"),z+=g):e=Z(e.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?Ea(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":
c;this.stack.push({domNamespace:c,type:b,children:e,childIndex:0,context:d,footer:h});this.previousWasTextNode=!1;return z};return a}(),Va={renderToString:function(a){a=new Ua(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new Ua(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(){throw r(Error(207));},renderToStaticNodeStream:function(){throw r(Error(208));},version:"16.9.0"},Wa={default:Va},Xa=Wa&&Va||
Wa;module.exports=Xa.default||Xa;


/***/ }),
/* 64 */
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

var h=__webpack_require__(15),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
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
/* 65 */
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

var _assign = __webpack_require__(15);
var checkPropTypes = __webpack_require__(35);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.9.0
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(15);
var React = __webpack_require__(28);
var checkPropTypes = __webpack_require__(35);

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

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.9.0';

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

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;


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

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}
if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
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

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = true;

// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
var enableSuspenseServerRenderer = false; // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// Disable javascript: URL strings in href for XSS protection.
var disableJavaScriptURLs = false;

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


var disableLegacyContext = false;

var ReactDebugCurrentFrame$1 = void 0;
var didWarnAboutInvalidateContextType = void 0;
{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}

function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;
    {
      if ('contextType' in type) {
        var isValid =
        // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);

          var addendum = '';
          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }
          warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }
    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }
    if (disableLegacyContext) {
      {
        if (type.contextTypes) {
          warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with static contextType instead.', getComponentName(type) || 'Unknown');
        }
      }
      return emptyObject;
    } else {
      var maskedContext = maskContext(type, context);
      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }
      return maskedContext;
    }
  } else {
    if (disableLegacyContext) {
      {
        if (type.contextTypes) {
          warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with React.useContext() instead.', getComponentName(type) || 'Unknown');
        }
      }
      return undefined;
    } else {
      var _maskedContext = maskContext(type, context);
      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }
      return _maskedContext;
    }
  }
}

// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packaged array. As opposed to being used in a Map.
// The first allocated index is 1.

var nextAvailableThreadIDs = new Uint16Array(16);
for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}
nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;
  (function () {
    if (!(newSize <= 0x10000)) {
      {
        throw ReactError(Error('Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.'));
      }
    }
  })();
  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;
  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }
  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];
  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }
  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}

function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }
  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false);
} // sanitizeURL
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false);
} // sanitizeURL
);

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
} // sanitizeURL
);

// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
} // sanitizeURL
);

// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true);

['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true);
} // sanitizeURL
);

var ReactDebugCurrentFrame$2 = null;
{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
}

// A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */
var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;

var didWarn = false;

function sanitizeURL(url) {
  if (disableJavaScriptURLs) {
    (function () {
      if (!!isJavaScriptProtocol.test(url)) {
        {
          throw ReactError(Error('React has blocked a javascript: URL as a security precaution.' + (ReactDebugCurrentFrame$2.getStackAddendum())));
        }
      }
    })();
  } else if (true && !didWarn && isJavaScriptProtocol.test(url)) {
    didWarn = true;
    warning$1(false, 'A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
  }
}

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape = void 0;
  var html = '';
  var index = void 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);
  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }
  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }
  return '';
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }
  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null;
// Whether the work-in-progress hook is a re-rendered hook
var isReRender = false;
// Whether an update was scheduled during the currently executing render pass.
var didScheduleRenderPhaseUpdate = false;
// Lazily created map of render-phase updates
var renderPhaseUpdates = null;
// Counter to prevent infinite loops.
var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;

var isInHookUserCodeInDev = false;

// In DEV, this is the name of the currently executing primitive hook
var currentHookNameInDev = void 0;

function resolveCurrentlyRenderingComponent() {
  (function () {
    if (!(currentlyRenderingComponent !== null)) {
      {
        throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
      }
    }
  })();
  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks') : void 0;
  }
  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }
    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, '[' + nextDeps.join(', ') + ']', '[' + prevDeps.join(', ') + ']');
    }
  }
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false;
  }
  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    (function () {
      {
        {
          throw ReactError(Error('Rendered more hooks than during the previous render'));
        }
      }
    })();
  }
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false;
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }
  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;
  {
    isInHookUserCodeInDev = false;
  }

  // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;
}

function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.

  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1;

    // Start over from the beginning of the list
    workInProgressHook = null;

    children = Component(props, refOrContext);
  }
  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
  {
    isInHookUserCodeInDev = false;
  }

  // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
  }
  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }
  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }
  return useReducer(basicStateReducer,
  // useReducer has a special case to support lazy useState initializers
  initialState);
}

function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    var _queue = workInProgressHook.queue;
    var _dispatch = _queue.dispatch;
    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(_queue);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(_queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;
        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var _action = update.action;
          {
            isInHookUserCodeInDev = true;
          }
          newState = reducer(newState, _action);
          {
            isInHookUserCodeInDev = false;
          }
          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;

        return [newState, _dispatch];
      }
    }
    return [workInProgressHook.memoizedState, _dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }
    var initialState = void 0;
    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }
    {
      isInHookUserCodeInDev = false;
    }
    workInProgressHook.memoizedState = initialState;
    var _queue2 = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };
    var _dispatch2 = _queue2.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue2);
    return [workInProgressHook.memoizedState, _dispatch2];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;
    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];
        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }
  var nextValue = nextCreate();
  {
    isInHookUserCodeInDev = false;
  }
  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;
  if (previousRef === null) {
    var ref = { current: initialValue };
    {
      Object.seal(ref);
    }
    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';
  }
  warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
}

function dispatchAction(componentIdentity, queue, action) {
  (function () {
    if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
      {
        throw ReactError(Error('Too many re-renders. React limits the number of renders to prevent an infinite loop.'));
      }
    }
  })();

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };
    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }
    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }
      lastRenderPhaseUpdate.next = update;
    }
  } else {
    // This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function useResponder(responder, props) {
  return {
    props: props,
    responder: responder
  };
}

function noop() {}

var currentThreadID = 0;

function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}

var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useResponder: useResponder
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var ReactDebugCurrentFrame$3 = null;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;

  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$3.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// TODO: We can remove this if we add invariantWithStack()
// or add stack by default to invariants where possible.
var HTML = '__html';

var ReactDebugCurrentFrame$4 = null;
{
  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    (function () {
      if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
        {
          throw ReactError(Error(tag + ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.' + (ReactDebugCurrentFrame$4.getStackAddendum())));
        }
      }
    })();
  }
  if (props.dangerouslySetInnerHTML != null) {
    (function () {
      if (!(props.children == null)) {
        {
          throw ReactError(Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.'));
        }
      }
    })();
    (function () {
      if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
        {
          throw ReactError(Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'));
        }
      }
    })();
  }
  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }
  (function () {
    if (!(props.style == null || typeof props.style === 'object')) {
      {
        throw ReactError(Error('The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.' + (ReactDebugCurrentFrame$4.getStackAddendum())));
      }
    }
  })();
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name,
    // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */


/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }
      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    }

    // Warn when passing the strings 'false' or 'true' into a boolean prop
    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = React.Children.toArray;

// This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.
var currentDebugStacks = [];

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame = void 0;
var prevGetCurrentStackImpl = null;
var getCurrentServerStackImpl = function () {
  return '';
};
var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};
var pushCurrentDebugStack = function (stack) {};
var pushElementToDebugStack = function (element) {};
var popCurrentDebugStack = function () {};
var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, /* canUseEventSystem */false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1];
    // Take the innermost executing frame (e.g. <Foo>),
    var frame = stack[stack.length - 1];
    // and record that it has one more element associated with it.
    frame.debugElementStack.push(element);
    // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    }
    // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.
    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = '';
    // Go through every frame in the stack from the innermost one.
    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i];
      // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    (function () {
      if (!VALID_TAG_REGEX.test(tag)) {
        {
          throw ReactError(Error('Invalid tag: ' + tag));
        }
      }
    })();
    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};
var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }
  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    content += child;
    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }
    if (enableFlareAPI && propKey === 'listeners') {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    (function () {
      {
        {
          throw ReactError(Error((getComponentName(type) || 'Component') + '(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.'));
        }
      }
    })();
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;
    {
      pushElementToDebugStack(element);
    }
    if (typeof Component !== 'function') {
      break;
    }
    processChild(element, Component);
  }

  // Extra closure so queue and replace can be captured properly
  function processChild(element, Component) {
    var isClass = shouldConstruct(Component);
    var publicContext = processContext(Component, context, threadID, isClass);

    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    var inst = void 0;
    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }
      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }

      {
        var _componentName3 = getComponentName(Component) || 'Unknown';
        if (!didWarnAboutModulePatternComponent[_componentName3]) {
          warningWithoutStack$1(false, 'The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);
          didWarnAboutModulePatternComponent[_componentName3] = true;
        }
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              lowPriorityWarning$1(false,
              // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);
              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        }

        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }
      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext = void 0;
    if (disableLegacyContext) {
      {
        var childContextTypes = Component.childContextTypes;
        if (childContextTypes !== undefined) {
          warningWithoutStack$1(false, '%s uses the legacy childContextTypes API which is no longer supported. ' + 'Use React.createContext() instead.', getComponentName(Component) || 'Unknown');
        }
      }
    } else {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;
        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();
          for (var contextKey in childContext) {
            (function () {
              if (!(contextKey in _childContextTypes)) {
                {
                  throw ReactError(Error((getComponentName(Component) || 'Unknown') + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.'));
                }
              }
            })();
          }
        } else {
          warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
        }
      }
      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  // DEV-only

  // TODO: type this more strictly:
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0;

    // Context (new API)
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
    {
      this.contextProviderStack = [];
    }
  }

  ReactDOMServerRenderer.prototype.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  };

  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */

  ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID];

    // Remember which value to restore this context to on our way up.
    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;
    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    }

    // Mutate the current value.
    context[threadID] = provider.props.value;
  };

  ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
    var index = this.contextIndex;
    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index];

    // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.
    this.contextStack[index] = null;
    this.contextValueStack[index] = null;
    {
      this.contextProviderStack[index] = null;
    }
    this.contextIndex--;

    // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.
    context[this.threadID] = previousValue;
  };

  ReactDOMServerRenderer.prototype.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var _context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      _context[this.threadID] = previousValue;
    }
  };

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;
    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;
      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }
        var frame = this.stack[this.stack.length - 1];
        if (suspended || frame.childIndex >= frame.children.length) {
          var _footer = frame.footer;
          if (_footer !== '') {
            this.previousWasTextNode = false;
          }
          this.stack.pop();
          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false;
              // If rendering was suspended at this boundary, render the fallbackFrame
              var _fallbackFrame = frame.fallbackFrame;
              (function () {
                if (!_fallbackFrame) {
                  {
                    throw ReactError(Error('suspense fallback not found, something is broken'));
                  }
                }
              })();
              this.stack.push(_fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->';
              // Skip flushing output since we're switching to the fallback
              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          }

          // Flush output
          out[this.suspenseDepth] += _footer;
          continue;
        }
        var child = frame.children[frame.childIndex++];

        var outBuffer = '';
        {
          pushCurrentDebugStack(this.stack);
          // We're starting work on this frame, so reset its inner stack.
          frame.debugElementStack.length = 0;
        }
        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (enableSuspenseServerRenderer && typeof err.then === 'function') {
            suspended = true;
          } else {
            throw err;
          }
        } finally {
          {
            popCurrentDebugStack();
          }
        }
        if (out.length <= this.suspenseDepth) {
          out.push('');
        }
        out[this.suspenseDepth] += outBuffer;
      }
      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }
      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild = void 0;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;
          (function () {
            if (!($$typeof !== REACT_PORTAL_TYPE)) {
              {
                throw ReactError(Error('Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.'));
              }
            }
          })();
          // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
          (function () {
            {
              {
                throw ReactError(Error('Unknown element-like object type: ' + $$typeof.toString() + '. This is likely a bug in React. Please file an issue.'));
              }
            }
          })();
        }
        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      }
      // Safe because we just checked it's an element.
      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);
            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              _frame.debugElementStack = [];
            }
            this.stack.push(_frame);
            return '';
          }
        case REACT_SUSPENSE_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var fallback = nextChild.props.fallback;
              if (fallback === undefined) {
                // If there is no fallback, then this just behaves as a fragment.
                var _nextChildren3 = toArray(nextChild.props.children);
                var _frame3 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren3,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };
                {
                  _frame3.debugElementStack = [];
                }
                this.stack.push(_frame3);
                return '';
              }
              var fallbackChildren = toArray(fallback);
              var _nextChildren2 = toArray(nextChild.props.children);
              var _fallbackFrame2 = {
                type: null,
                domNamespace: parentNamespace,
                children: fallbackChildren,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };
              var _frame2 = {
                fallbackFrame: _fallbackFrame2,
                type: REACT_SUSPENSE_TYPE,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };
              {
                _frame2.debugElementStack = [];
                _fallbackFrame2.debugElementStack = [];
              }
              this.stack.push(_frame2);
              this.suspenseDepth++;
              return '<!--$-->';
            } else {
              (function () {
                {
                  {
                    throw ReactError(Error('ReactDOMServer does not yet support Suspense.'));
                  }
                }
              })();
            }
          }
        // eslint-disable-next-line-no-fallthrough
        default:
          break;
      }
      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;
              var _nextChildren4 = void 0;
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame4.debugElementStack = [];
              }
              this.stack.push(_frame4);
              return '';
            }
          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React.createElement(elementType.type, _assign({ ref: _element.ref }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame5.debugElementStack = [];
              }
              this.stack.push(_frame5);
              return '';
            }
          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;
              var _nextChildren6 = toArray(nextProps.children);
              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);

              this.stack.push(_frame6);
              return '';
            }
          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type;
              // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.
              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;
                      warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }
              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));
              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame7.debugElementStack = [];
              }
              this.stack.push(_frame7);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough
          case REACT_FUNDAMENTAL_TYPE:
            {
              if (enableFundamentalAPI) {
                var fundamentalImpl = elementType.impl;
                var open = fundamentalImpl.getServerSideString(null, nextElement.props);
                var getServerSideStringClose = fundamentalImpl.getServerSideStringClose;
                var close = getServerSideStringClose !== undefined ? getServerSideStringClose(null, nextElement.props) : '';
                var _nextChildren8 = fundamentalImpl.reconcileChildren !== false ? toArray(nextChild.props.children) : [];
                var _frame8 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren8,
                  childIndex: 0,
                  context: context,
                  footer: close
                };
                {
                  _frame8.debugElementStack = [];
                }
                this.stack.push(_frame8);
                return open;
              }
              (function () {
                {
                  {
                    throw ReactError(Error('ReactDOMServer does not yet support the fundamental API.'));
                  }
                }
              })();
            }
          // eslint-disable-next-line-no-fallthrough
          case REACT_LAZY_TYPE:
            (function () {
              {
                {
                  throw ReactError(Error('ReactDOMServer does not yet support lazy-loaded components.'));
                }
              }
            })();
        }
      }

      var info = '';
      {
        var owner = nextElement._owner;
        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }
        var ownerName = owner ? getComponentName(owner) : null;
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }
      (function () {
        {
          {
            throw ReactError(Error('Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ' + (elementType == null ? elementType : typeof elementType) + '.' + info));
          }
        }
      })();
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          (function () {
            if (!(defaultValue == null)) {
              {
                throw ReactError(Error('If you supply `defaultValue` on a <textarea>, do not pass children.'));
              }
            }
          })();
          if (Array.isArray(textareaChildren)) {
            (function () {
              if (!(textareaChildren.length <= 1)) {
                {
                  throw ReactError(Error('<textarea> can only have at most one child.'));
                }
              }
            })();
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value = void 0;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children = void 0;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  (function () {
    {
      {
        throw ReactError(Error('ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.'));
      }
    }
  })();
}

function renderToStaticNodeStream() {
  (function () {
    {
      {
        throw ReactError(Error('ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.'));
      }
    }
  })();
}

// Note: when changing this, also consider https://github.com/facebook/react/issues/11526
var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (wp.element.createElement(
	"svg",
	{
		width: "62",
		height: "75",
		xmlns: "http://www.w3.org/2000/svg",
		xmlnsXlink: "http://www.w3.org/1999/xlink",
		viewBox: "0 0 62 75"
	},
	wp.element.createElement(
		"defs",
		null,
		wp.element.createElement("path", {
			id: "b",
			d: "M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z"
		}),
		wp.element.createElement(
			"filter",
			{
				id: "a",
				width: "200%",
				height: "200%",
				x: "-50%",
				y: "-50%",
				filterUnits: "objectBoundingBox"
			},
			wp.element.createElement("feOffset", { dy: "2", "in": "SourceAlpha", result: "shadowOffsetOuter1" }),
			wp.element.createElement("feGaussianBlur", {
				"in": "shadowOffsetOuter1",
				result: "shadowBlurOuter1",
				stdDeviation: "2"
			}),
			wp.element.createElement("feColorMatrix", {
				"in": "shadowBlurOuter1",
				values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
			})
		)
	),
	wp.element.createElement(
		"g",
		{ fill: "none", fillRule: "evenodd" },
		wp.element.createElement("use", { fill: "#000", filter: "url(#a)", xlinkHref: "#b", style: { display: 'none' } }),
		wp.element.createElement("use", { fill: "%ACCENT_COLOR%", xlinkHref: "#b" })
	)
));

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AlignmentControls */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignmentToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_horizontal_alignment_toolbar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_vertical_alignment_toolbar__ = __webpack_require__(188);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(105)(false);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(48);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(79);
var hide = __webpack_require__(20);
var Iterators = __webpack_require__(27);
var $iterCreate = __webpack_require__(111);
var setToStringTag = __webpack_require__(42);
var getPrototypeOf = __webpack_require__(81);
var ITERATOR = __webpack_require__(6)('iterator');
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(27);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(38);
var SPECIES = __webpack_require__(6)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(29);
var invoke = __webpack_require__(121);
var html = __webpack_require__(80);
var cel = __webpack_require__(45);
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
  if (__webpack_require__(30)(process) == 'process') {
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
/* 85 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(18);
var newPromiseCapability = __webpack_require__(57);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(0);
var fails = __webpack_require__(25);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(131);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(133);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(74);
var hiddenKeys = __webpack_require__(51).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(32);
var createDesc = __webpack_require__(39);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(46);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(72);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(152);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(155);

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
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_settings__ = __webpack_require__(19);
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
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(166);
var registerStore = wp.data.registerStore;






var STORE_NAME = 'novablocks';

/* unused harmony default export */ var _unused_webpack_default_export = (registerStore(STORE_NAME, {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__
}));

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColorControls */
/* unused harmony export ColorPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorToolbar; });
/* unused harmony export OverlayControls */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(1);
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
					icon: __WEBPACK_IMPORTED_MODULE_1__icons__["g" /* invert */],
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
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foodMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hero; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_opentable_png__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_opentable_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_opentable_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_foodmenu_png__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_foodmenu_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__images_foodmenu_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_media_png__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_media_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_media_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_hero_png__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_hero_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_hero_png__);





var openTable = wp.element.createElement(
	'div',
	null,
	wp.element.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_0__images_opentable_png___default.a, alt: 'opentable_block' })
);

var foodMenu = wp.element.createElement(
	'div',
	null,
	wp.element.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__images_foodmenu_png___default.a, alt: 'foodmenu_block' })
);

var media = wp.element.createElement(
	'div',
	null,
	wp.element.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2__images_media_png___default.a, alt: 'media_block' })
);

var hero = wp.element.createElement(
	'div',
	null,
	wp.element.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_3__images_hero_png___default.a, alt: 'hero_block' })
);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_editor_scss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filters_with_font_size_picker__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_google_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_header__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_headline__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks_hero__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blocks_logo__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blocks_media__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blocks_slideshow__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blocks_navigation__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_menu_food__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_menu_food_section__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_menu_food_item__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blocks_opentable__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store__ = __webpack_require__(93);






















var dispatch = wp.data.dispatch;

var novaBlocks = function () {
	function novaBlocks() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, novaBlocks);
	}

	__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(novaBlocks, [{
		key: 'initialize',
		value: function initialize(settings) {
			dispatch(__WEBPACK_IMPORTED_MODULE_17__store__["a" /* STORE_NAME */]).updateSettings(settings);
		}
	}]);

	return novaBlocks;
}();

wp.novaBlocks = new novaBlocks();

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(17).f });


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(7);
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
    withFallbackStyles = _wp$components.withFallbackStyles;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    FontSizePicker = _wp$blockEditor.FontSizePicker,
    getFontSizeClass = _wp$blockEditor.getFontSizeClass,
    withFontSizes = _wp$blockEditor.withFontSizes;
var withSelect = wp.data.withSelect;
var addFilter = wp.hooks.addFilter;


var applyFallbackStyles = withFallbackStyles(function (node, ownProps) {
	var _ownProps$attributes = ownProps.attributes,
	    fontSize = _ownProps$attributes.fontSize,
	    customFontSize = _ownProps$attributes.customFontSize;

	var editableNode = node.querySelector('[contenteditable="true"]');
	//verify if editableNode is available, before using getComputedStyle.
	var computedStyles = editableNode ? getComputedStyle(editableNode) : null;
	return {
		fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
	};
});

var enableFontSizeControlOnBlocks = ['core/heading', 'core/quote', 'core/list', 'novablocks/headline'];

function withFontSizePicker(WrappedComponent) {
	return function (props) {
		var fallbackFontSize = props.fallbackFontSize,
		    fontSize = props.fontSize,
		    setFontSize = props.setFontSize,
		    setAttributes = props.setAttributes,
		    fontSizes = props.fontSizes;


		return [wp.element.createElement(WrappedComponent, props), wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				{ title: __('Text Settings', '__plugin_txtd'), className: 'blocks-font-size' },
				wp.element.createElement(FontSizePicker, {
					fallbackFontSize: fallbackFontSize,
					value: fontSize.size,
					onChange: function onChange(nextFontSize) {
						var fontSizeObject = fontSizes.find(function (fontSizeObj) {
							return fontSizeObj.size === nextFontSize;
						});
						setAttributes({ className: 'has-' + fontSizeObject.slug + '-font-size' });
						setFontSize(nextFontSize);
					}
				})
			)
		)];
	};
}

var withBetterFontSizes = compose([withFontSizes('fontSize'), applyFallbackStyles, withSelect(function (select) {
	var _select$getSettings = select('core/block-editor').getSettings(),
	    disableCustomFontSizes = _select$getSettings.disableCustomFontSizes,
	    fontSizes = _select$getSettings.fontSizes;

	return {
		disableCustomFontSizes: disableCustomFontSizes,
		fontSizes: fontSizes
	};
}), withFontSizePicker]);

var withFontSizeControl = createHigherOrderComponent(function (OriginalComponent) {

	var BetterComponent = withBetterFontSizes(OriginalComponent);

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
				default: ''
			}
		});
	}

	return block;
}
addFilter('blocks.registerBlockType', 'novablocks/add-font-size-attribute', addFontSizeAttribute);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(104) });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(32);
var toObject = __webpack_require__(33);
var IObject = __webpack_require__(75);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(25)(function () {
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
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(76);
var toAbsoluteIndex = __webpack_require__(106);
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(23);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["h" /* map */],
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
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__placeholder__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inspector_controls__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_with_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_with_parallax__ = __webpack_require__(16);















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

var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		var _this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));

		_this.state = {
			fetchedScript: false,
			fetchedApiKey: false,
			savedApiKey: '',
			apiKey: ''
		};

		_this.onChangeMarkers = _this.onChangeMarkers.bind(_this);
		_this.settings = null;
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Edit, [{
		key: 'onChangeMarkers',
		value: function onChangeMarkers(markers) {
			this.props.setAttributes({ markers: markers });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			wp.api.loadPromise.done(function () {
				_this2.settings = new wp.api.models.Settings();

				_this2.settings.on('change:' + API_KEY_SETTING_ID, function (model) {
					var apiKey = model.get(API_KEY_SETTING_ID);

					_this2.setState({
						fetchedApiKey: true,
						savedApiKey: apiKey,
						apiKey: apiKey
					});

					if (apiKey !== '') {
						_this2.loadGoogleMapsScript();
					}
				});

				_this2.settings.fetch();
			});
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
				_this4.settings.fetch();
			});
		}
	}, {
		key: 'renderPreview',
		value: function renderPreview() {
			var _state = this.state,
			    fetchedApiKey = _state.fetchedApiKey,
			    fetchedScript = _state.fetchedScript,
			    savedApiKey = _state.savedApiKey;


			if (!fetchedApiKey) {
				return wp.element.createElement(Spinner, null);
			}

			if (!fetchedScript || '' === savedApiKey) {
				return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_8__placeholder__["a" /* default */], {
					saveApiKey: this.saveApiKey.bind(this),
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
			var url = '//developers.google.com/maps/documentation/javascript/get-api-key';
			var hyperlink = wp.element.createElement(
				'a',
				{ target: '_blank', href: url },
				__('register a Google Maps API Key ')
			);
			var instructions = wp.element.createElement(
				Fragment,
				null,
				__('To display the map, you need to'),
				' ',
				hyperlink,
				' ',
				__('and include it in the block settings')
			);

			return instructions;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

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
				wp.element.createElement(__WEBPACK_IMPORTED_MODULE_10__inspector_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(41);
__webpack_require__(43);
__webpack_require__(116);
__webpack_require__(127);
__webpack_require__(128);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var defined = __webpack_require__(47);
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(39);
var setToStringTag = __webpack_require__(42);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(20)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(114);
var step = __webpack_require__(115);
var Iterators = __webpack_require__(27);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(78)(Array, 'Array', function (iterated, kind) {
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
/* 114 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(5);
var ctx = __webpack_require__(29);
var classof = __webpack_require__(56);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(18);
var aFunction = __webpack_require__(38);
var anInstance = __webpack_require__(117);
var forOf = __webpack_require__(118);
var speciesConstructor = __webpack_require__(83);
var task = __webpack_require__(84).set;
var microtask = __webpack_require__(122)();
var newPromiseCapabilityModule = __webpack_require__(57);
var perform = __webpack_require__(85);
var userAgent = __webpack_require__(123);
var promiseResolve = __webpack_require__(86);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
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
__webpack_require__(42)($Promise, PROMISE);
__webpack_require__(125)(PROMISE);
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

var ctx = __webpack_require__(29);
var call = __webpack_require__(119);
var isArrayIter = __webpack_require__(120);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(76);
var getIterFn = __webpack_require__(82);
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
var anObject = __webpack_require__(13);
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
var Iterators = __webpack_require__(27);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
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

var global = __webpack_require__(5);
var macrotask = __webpack_require__(84).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(30)(process) == 'process';

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

var global = __webpack_require__(5);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(20);
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

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var dP = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(14);
var SPECIES = __webpack_require__(6)('species');

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

var ITERATOR = __webpack_require__(6)('iterator');
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

var $export = __webpack_require__(11);
var core = __webpack_require__(0);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(83);
var promiseResolve = __webpack_require__(86);

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
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(57);
var perform = __webpack_require__(85);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(33);
var $getPrototypeOf = __webpack_require__(81);

__webpack_require__(87)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(43);
module.exports = __webpack_require__(58).f('iterator');


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
__webpack_require__(77);
__webpack_require__(140);
__webpack_require__(141);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(79);
var META = __webpack_require__(136).KEY;
var $fails = __webpack_require__(25);
var shared = __webpack_require__(50);
var setToStringTag = __webpack_require__(42);
var uid = __webpack_require__(40);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(58);
var wksDefine = __webpack_require__(59);
var enumKeys = __webpack_require__(137);
var isArray = __webpack_require__(138);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(18);
var toObject = __webpack_require__(33);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(46);
var createDesc = __webpack_require__(39);
var _create = __webpack_require__(55);
var gOPNExt = __webpack_require__(139);
var $GOPD = __webpack_require__(90);
var $GOPS = __webpack_require__(52);
var $DP = __webpack_require__(17);
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
  __webpack_require__(89).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(32).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(31)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(40)('meta');
var isObject = __webpack_require__(18);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(17).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(25)(function () {
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(32);
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(89).f;
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('asyncIterator');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('observable');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(11);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(145).set });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(18);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(29)(Function.call, __webpack_require__(90).f(Object.prototype, '__proto__').set, 2);
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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(55) });


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(1);







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
				__WEBPACK_IMPORTED_MODULE_5__icons__["h" /* map */]
			);

			return wp.element.createElement(
				Placeholder,
				{
					icon: icon,
					label: __('Location Map of The World') },
				apiKeyInstructions && wp.element.createElement(
					"div",
					{ className: "components-placeholder__instructions" },
					apiKeyInstructions
				),
				wp.element.createElement(TextControl, {
					className: "components-placeholder__input",
					placeholder: __('Paste API key here'),
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
					__('Save')
				)
			);
		}
	}]);

	return MapPlaceholder;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MapPlaceholder);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pin__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__default_map_center__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_with_parallax__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils__ = __webpack_require__(24);



















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

		_this.getMapStyles = __WEBPACK_IMPORTED_MODULE_13__utils__["d" /* getMapStyles */].bind(_this);
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


			var accentColor = styleSlug === 'theme' ? __WEBPACK_IMPORTED_MODULE_13__utils__["c" /* getMapAccentColor */].call(this) : '#222222';
			var pinMarkup = __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_12__pin__["a" /* default */]).replace('%ACCENT_COLOR%', accentColor);

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

			this.map.setCenter(__WEBPACK_IMPORTED_MODULE_13__utils__["e" /* getMarkersCenter */].call(this));
		}
	}, {
		key: 'initializeMap',
		value: function initializeMap() {
			var attributes = this.props.attributes;
			var showControls = attributes.showControls,
			    zoom = attributes.zoom;


			this.map = new google.maps.Map(document.getElementById('novablocks-google-map-' + this.props.clientId), {
				mapTypeId: 'roadmap',
				center: __WEBPACK_IMPORTED_MODULE_14__default_map_center__["a" /* default */],
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
						placeholder: __('Enter an address to drop a pin on this map')
					})
				)
			),
			wp.element.createElement(
				'div',
				{ className: 'novablocks-map__map-container' },
				wp.element.createElement(
					'div',
					{ className: 'nova-mask' },
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_15__components_with_parallax__["b" /* withParallaxContext */])(MapWrapper(Map)));

/***/ }),
/* 151 */
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(41);
module.exports = __webpack_require__(154);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(27);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(41);
module.exports = __webpack_require__(157);


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var get = __webpack_require__(82);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
module.exports = __webpack_require__(0).Object.entries;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(11);
var $entries = __webpack_require__(161)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(26);
var toIObject = __webpack_require__(22);
var isEnum = __webpack_require__(32).f;
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(163);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(33);
var $keys = __webpack_require__(26);

__webpack_require__(87)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
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
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getSettings"] = getSettings;
function getSettings(state) {
	return state.settings;
}

/***/ }),
/* 166 */
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
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_key_panel_body__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_style_select__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(23);











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


			if ('' === savedApiKey) {
				return null;
			}

			return wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Map Design') },
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
					{ title: __('Zoom Level') },
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
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
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
				{ title: __('Google Maps API Key') },
				wp.element.createElement(TextControl, {
					placeholder: __('Paste API key here'),
					value: apiKey,
					onChange: onChangeApiKey,
					help: apiKeyInstructions
				}),
				wp.element.createElement(
					Button,
					{ isDefault: true, onClick: function onClick() {
							onSaveApiKey(apiKey);
						} },
					__('Save')
				)
			);
		}
	}]);

	return ApiKeyPanelBody;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ApiKeyPanelBody);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_map_center__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(23);










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
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(171);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["i" /* media */],
	getEditWrapperProps: function getEditWrapperProps(attributes) {
		var align = attributes.align;

		if ('center' === align || 'wide' === align || 'full' === align) {
			return { 'data-align': align };
		}
	},

	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	}
}));

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Edit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(172);



var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    useState = _wp$element.useState;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton;
var _wp$blockEditor = wp.blockEditor,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;


var TEMPLATE_OPTIONS = [{
	title: __('Logo on the left side and one navigation menu'),
	name: 'logo-left',
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["b" /* logoLeft */],
	template: [['novablocks/logo'], ['novablocks/navigation']]
}, {
	title: __('Logo on the right side and one navigation menu'),
	name: 'logo-right',
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["c" /* logoRight */],
	template: [['novablocks/navigation'], ['novablocks/logo']]
}, {
	title: __('Logo centered and one navigation menu on each side'),
	name: 'logo-center',
	icon: __WEBPACK_IMPORTED_MODULE_1__icons__["a" /* logoCenter */],
	template: [['novablocks/navigation'], ['novablocks/logo'], ['novablocks/navigation']]
}];

function Edit(props) {
	var clientId = props.clientId;
	var _props$attributes = props.attributes,
	    align = _props$attributes.align,
	    layout = _props$attributes.layout,
	    setAttributes = props.setAttributes;


	var count = wp.data.select('core/block-editor').getBlockCount(clientId);
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

	return [wp.element.createElement(
		BlockControls,
		null,
		wp.element.createElement(BlockAlignmentToolbar, {
			value: align,
			onChange: function onChange(align) {
				return setAttributes({ align: align });
			},
			controls: ['center', 'wide', 'full']
		}),
		wp.element.createElement(
			Toolbar,
			null,
			wp.element.createElement(IconButton, {
				className: 'components-icon-button components-toolbar__control',
				label: __('Change Layout'),
				onClick: function onClick() {
					return setTemplate(null);
				},
				icon: 'edit'
			})
		)
	), wp.element.createElement(InnerBlocks, {
		__experimentalTemplateOptions: TEMPLATE_OPTIONS,
		__experimentalOnSelectTemplateOption: function __experimentalOnSelectTemplateOption(nextTemplate) {
			applyTemplate(nextTemplate);
		},
		template: template,
		templateLock: 'all'
	})];
}

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logoRight; });
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
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(176);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["i" /* media */],
	attributes: {
		align: {
			type: "string",
			default: "center"
		},
		primary: {
			type: "string",
			default: "Our Story"
		},
		secondary: {
			type: "string",
			default: "Discover"
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
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadlineEdit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heading_toolbar__ = __webpack_require__(175);




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
var PanelBody = wp.components.PanelBody;


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
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__heading_toolbar__["a" /* default */], { minLevel: 2, maxLevel: 5, selectedLevel: level, onChange: function onChange(newLevel) {
					return setAttributes({ level: newLevel });
				} })
		),
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				'p',
				null,
				__('Level')
			),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__heading_toolbar__["a" /* default */], { minLevel: 1, maxLevel: 7, selectedLevel: level, onChange: function onChange(newLevel) {
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
				allowedFormats: []
			})
		)
	);
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(24);







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
				title: sprintf(__('Heading %d'), targetLevel),
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

			return wp.element.createElement(Toolbar, { controls: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* range */])(minLevel, maxLevel).map(function (index) {
					return _this2.createLevelControl(index, selectedLevel, onChange);
				}) });
		}
	}]);

	return HeadingToolbar;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (HeadingToolbar);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = save;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(7);
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
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(16);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["f" /* hero */],
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	attributes: {
		example: {
			type: 'boolean',
			default: true
		}
	},
	example: {
		attributes: {
			example: false
		}
	},
	save: function save() {
		return wp.element.createElement(InnerBlocks.Content, null);
	},
	getEditWrapperProps: function getEditWrapperProps() {
		var settings = select('core/block-editor').getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	}
}));

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_with_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_controls__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images__ = __webpack_require__(95);
/**
 * Internal dependencies
 */





/**
 * WordPress dependencies
 */



var __ = wp.i18n.__;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;




var HeroEdit = function HeroEdit(props) {
	var attributes = props.attributes;
	var example = attributes.example;


	return example ? wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__preview__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__block_controls__["a" /* default */], props),
		wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components__["f" /* LayoutPanel */], props),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components__["e" /* HeightPanel */], props),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components__["h" /* ScrollIndicatorPanel */], props),
			wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components__["g" /* PositionIndicatorsPanel */], props)
		)
	) : __WEBPACK_IMPORTED_MODULE_5__images__["b" /* hero */];
};

/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent(compose([__WEBPACK_IMPORTED_MODULE_1__components_with_settings__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__["a" /* default */]]))(HeroEdit));

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__padding__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__width__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(182);
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
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_settings__ = __webpack_require__(19);
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
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__with_settings__ = __webpack_require__(19);
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
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
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
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GalleryPreview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_extends__ = __webpack_require__(2);
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
/* 185 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockHorizontalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(1);

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
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BlockVerticalAlignmentToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(1);

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
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollIndicatorPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__with_settings__ = __webpack_require__(19);

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
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    select = _wp$data.select,
    subscribe = _wp$data.subscribe;


var blockList = select('core/block-editor').getBlocks();

var debouncedOnSubscribe = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* debounce */])(function () {
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

var debouncedUpdateBlocks = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* debounce */])(function () {
	updateBlocks();
}, 30);

subscribe(debouncedOnSubscribe);

var updateBlocks = function updateBlocks(attributes) {
	select('core/block-editor').getBlocks().filter(function (block) {
		return block.name === 'novablocks/hero';
	}).filter(function (block, index) {
		var _block$attributes$att = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, block.attributes, attributes),
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

var HeightPanel = Object(__WEBPACK_IMPORTED_MODULE_2__with_settings__["a" /* default */])(function (props) {
	var attributes = props.attributes,
	    setAttributes = props.setAttributes,
	    settings = props.settings;


	var applyMinimumHeight = !!attributes.applyMinimumHeight ? attributes.applyMinimumHeight : 'first';

	return wp.element.createElement(
		PanelBody,
		{ title: __('Height', '__plugin_txtd'), initialOpen: false },
		wp.element.createElement(RadioControl, {
			label: __('Apply Minimum Height', '__plugin_txtd'),
			selected: applyMinimumHeight,
			onChange: function onChange(nextMinimumHeight) {
				setAttributes({ applyMinimumHeight: nextMinimumHeight });
				debouncedUpdateBlocks();
			},
			options: settings.applyMinimumHeightOptions
		}),
		'none' !== applyMinimumHeight && wp.element.createElement(RadioControl, {
			label: __('Minimum Height', '__plugin_txtd'),
			selected: attributes.minHeight,
			onChange: function onChange(minHeight) {
				setAttributes({ minHeight: parseInt(minHeight, 10) });
				debouncedUpdateBlocks();
			},
			options: settings.minimumHeightOptions
		})
	);
});

var ScrollIndicatorPanel = Object(__WEBPACK_IMPORTED_MODULE_2__with_settings__["a" /* default */])(function (props) {
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
				debouncedUpdateBlocks();
			}
		})
	);
});



/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background__ = __webpack_require__(191);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;


var HeroPreview = function HeroPreview(props) {
	var _props$attributes = props.attributes,
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
	    className = props.className,
	    settings = props.settings;


	var classes = [className, 'novablocks-hero', 'novablocks-u-valign-' + verticalAlignment, 'novablocks-u-halign-' + horizontalAlignment, 'novablocks-u-spacing-' + contentPadding, 'novablocks-u-content-width-' + contentWidth, 'novablocks-u-background', 'novablocks-u-background-' + overlayFilterStyle];

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
				scrollIndicatorBlock && wp.element.createElement('div', { className: 'novablocks-hero__indicator' })
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (HeroPreview);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_with_parallax__ = __webpack_require__(16);

/**
 * Internal dependencies
 */


var HeroBackground = function HeroBackground(props) {
	var _props$attributes = props.attributes,
	    overlayFilterStyle = _props$attributes.overlayFilterStyle,
	    overlayFilterStrength = _props$attributes.overlayFilterStrength,
	    media = _props$attributes.media,
	    style = props.style;


	var styles = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.parallax.style, {
		opacity: 1
	});

	if (overlayFilterStyle !== 'none') {
		styles.opacity = 1 - overlayFilterStrength / 100;
	}

	return wp.element.createElement(
		'div',
		{ className: 'nova-mask' },
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
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(44);
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
						icon: __WEBPACK_IMPORTED_MODULE_0__icons__["l" /* swap */],
						onClick: open
					});
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (HeroBlockControls);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var ServerSideRender = wp.components.ServerSideRender;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/logo', {
	title: __('Logo', '__plugin_txtd'),
	description: __('Outputs custom logo markup.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["i" /* media */],
	parent: ['novablocks/header'],
	save: function save() {},
	edit: function edit(props) {
		return wp.element.createElement(ServerSideRender, {
			block: 'novablocks/logo',
			attributes: props.attributes
		});
	}
}));

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(195);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["i" /* media */],
	attributes: {
		example: {
			type: 'boolean',
			default: true
		}
	},
	example: {
		attributes: {
			example: false
		}
	},
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
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_controls__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inspector_controls__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preview__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images__ = __webpack_require__(95);


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

	var attributes = props.attributes;
	var example = attributes.example;


	return example ? wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { updateImages: updateImages })),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__block_controls__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { updateImages: updateImages })),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__inspector_controls__["a" /* default */], props)
	) : __WEBPACK_IMPORTED_MODULE_6__images__["c" /* media */];
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__components_with_settings__["a" /* default */])(MediaEdit));

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_alignment_controls__ = __webpack_require__(70);


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
						icon: __WEBPACK_IMPORTED_MODULE_2__icons__["l" /* swap */],
						onClick: open
					});
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (MediaBlockControls);

/***/ }),
/* 197 */
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
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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


	var classNames = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'nova-media', 'has-image-on-the-' + mediaPosition, 'block-is-' + blockStyle, 'content-is-' + contentStyle, {
		'has-background': blockStyle !== 'basic'
	});

	var galleryImages = images.map(function (image) {
		return JSON.parse(image);
	});

	var displayImages = function displayImages(imagesArray) {
		if (0 === imagesArray.length) {
			return wp.element.createElement(MediaPlaceholder, {
				icon: 'format-gallery',
				className: 'nova-media__placeholder',
				onSelect: updateImages,
				accept: 'image/*',
				allowedTypes: ['image'],
				multiple: true
			});
		}

		return galleryImages.map(function (image) {
			return wp.element.createElement(
				'div',
				{ key: image.id, className: 'nova-media__image' },
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
				{ className: 'wp-block', 'data-align': 'wide' },
				wp.element.createElement(
					'div',
					{ className: 'nova-media__layout' },
					wp.element.createElement(
						'div',
						{ className: 'nova-media__content nova-media__inner-container' },
						wp.element.createElement(InnerBlocks, {
							allowedBlocks: settings.media.allowedBlocks,
							template: settings.media.template
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
};

/* harmony default export */ __webpack_exports__["a"] = (MediaPreview);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_with_parallax__ = __webpack_require__(16);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["k" /* slideshow */],
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
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_util__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inspector_controls__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__block_controls__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_with_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_with_parallax__ = __webpack_require__(16);






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
/* 201 */
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
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__background__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(44);





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
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_with_parallax__ = __webpack_require__(16);

/**
 * Internal dependencies
 */


var SlideshowBackground = function SlideshowBackground(props) {
	var _props$attributes = props.attributes,
	    overlayFilterStyle = _props$attributes.overlayFilterStyle,
	    overlayFilterStrength = _props$attributes.overlayFilterStrength,
	    previewImage = props.previewImage,
	    style = props.style;


	var styles = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.parallax.style, {
		opacity: 1
	});

	if (overlayFilterStyle !== 'none') {
		styles.opacity = 1 - overlayFilterStrength / 100;
	}

	return wp.element.createElement(
		'div',
		{ className: 'nova-mask' },
		wp.element.createElement(
			'div',
			{ className: 'novablocks-slideshow__background', style: style },
			wp.element.createElement('img', { className: 'novablocks-slideshow__media', src: previewImage.sizes.large.url, alt: '', style: styles })
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__components_with_parallax__["b" /* withParallaxContext */])(SlideshowBackground));

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(44);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
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
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_alignment_controls__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_color_controls__ = __webpack_require__(94);


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
						icon: __WEBPACK_IMPORTED_MODULE_2__icons__["l" /* swap */],
						onClick: open
					});
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (SlideshowBlockControls);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(207);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('novablocks/navigation', {
	title: __('Space Navigation', '__plugin_txtd'),
	description: __('Outputs chosen navigaiton menu markup.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["i" /* media */],
	parent: ['novablocks/header'],
	save: function save() {},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */]
}));

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    SelectControl = _wp$components.SelectControl,
    Spinner = _wp$components.Spinner,
    ServerSideRender = _wp$components.ServerSideRender,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton;
var BlockControls = wp.blockEditor.BlockControls;

var Edit = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Edit, _Component);

	function Edit() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Edit);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).apply(this, arguments));

		_this.state = {
			menus: [],
			selectedMenuSlug: null
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Edit, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			wp.apiRequest({ path: '/menus/v1/menus' }).then(function (menus) {
				_this2.setState({
					menus: menus,
					selectedMenuSlug: menus[0].slug
				});
			});
		}
	}, {
		key: 'renderNavigationPlaceholder',
		value: function renderNavigationPlaceholder() {
			var _this3 = this;

			var _props = this.props,
			    slug = _props.attributes.slug,
			    setAttributes = _props.setAttributes;


			var selectOptions = this.state.menus.map(function (menu) {
				return {
					label: menu.name,
					value: menu.slug
				};
			});

			var selectedMenuSlug = this.state.selectedMenuSlug;

			return wp.element.createElement(
				Placeholder,
				{
					icon: 'menu',
					label: __('Choose Menu'),
					instructions: __('Select one of the menus listed below or go to Appearance → Settings and create a new one.')
				},
				wp.element.createElement(
					'form',
					null,
					wp.element.createElement(SelectControl, {
						value: selectedMenuSlug,
						options: selectOptions,
						onChange: function onChange(selectedMenuSlug) {
							_this3.setState({ selectedMenuSlug: selectedMenuSlug });
						},
						className: 'components-placeholder__input'
					}),
					wp.element.createElement(
						Button,
						{
							type: 'button',
							onClick: function onClick() {
								setAttributes({ slug: selectedMenuSlug });
							},
							isDefault: true
						},
						__('Apply')
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    slug = _props2.attributes.slug,
			    setAttributes = _props2.setAttributes;


			return [wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(
					Toolbar,
					null,
					wp.element.createElement(IconButton, {
						className: 'components-icon-button components-toolbar__control',
						label: __('Change Menu'),
						onClick: function onClick() {
							return setAttributes({ slug: null });
						},
						icon: 'edit'
					})
				)
			), !!slug ? wp.element.createElement(ServerSideRender, {
				block: 'novablocks/navigation',
				attributes: this.props.attributes
			}) : this.state.menus.length ? this.renderNavigationPlaceholder() : wp.element.createElement(Spinner, null)];
		}
	}]);

	return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(214);
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
	description: __('Can be used as navigation through multiple menus.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* foodmenu */],
	attributes: {
		enableTwoColumns: {
			type: 'boolean',
			default: true
		},
		example: {
			type: 'boolean',
			default: true
		}
	},
	example: {
		attributes: {
			example: false
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
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inspector_controls__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preview__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images__ = __webpack_require__(95);
/**
 * WordPress dependencies
 */
var Fragment = wp.element.Fragment;

/**
 * Internal dependencies
 */






var FoodMenuEdit = function FoodMenuEdit(props) {
	var attributes = props.attributes;
	var example = attributes.example;

	return example ? wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__preview__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__inspector_controls__["a" /* default */], props)
	) : __WEBPACK_IMPORTED_MODULE_2__images__["a" /* foodMenu */];
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuEdit);

/***/ }),
/* 210 */
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
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
				label: __('Add New Menu Section'),
				icon: 'insert',
				onClick: addFoodMenuSection
			},
			__('Add Menu Section')
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuPreview);

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(218);
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
	description: __('Display a list of food or drink items available at your venue.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* foodmenu */],
	parent: ['novablocks/menu-food'],
	attributes: {
		sectionTitle: {
			type: 'string',
			default: 'Drinks'
		}
	},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */]
}));

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview__ = __webpack_require__(217);
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
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
				label: __('Add New Menu Item'),
				icon: 'insert',
				onClick: addFoodMenuItem
			},
			__('Add Menu Item')
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuSectionPreview);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(223);
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
	description: __('A food or drink item contained in a menu.', '__plugin_txtd'),
	category: 'nova-blocks',
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["e" /* foodmenu */],
	parent: ['novablocks/menu-food-section'],
	attributes: {
		title: {
			type: 'string',
			default: 'Sweet Shrimp Salad'
		},
		description: {
			type: 'string',
			default: 'Tomatillo, Baja Crema, Cabbage, Fried Okra'
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
			default: 'Our top pick'
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
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inspector_controls__ = __webpack_require__(222);
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
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
				placeholder: __('Product Title'),
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
				placeholder: __('$0.00'),
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
				placeholder: __('Product Description'),
				onChange: function onChange(description) {
					return setAttributes({ description: description });
				}
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (FoodMenuItemPreview);

/***/ }),
/* 222 */
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
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(231);
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
	icon: __WEBPACK_IMPORTED_MODULE_0__icons__["j" /* opentable */],
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
		},
		example: {
			type: 'boolean',
			default: true
		}
	},
	example: {
		attributes: {
			example: false
		}
	},
	edit: __WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */],
	save: __WEBPACK_IMPORTED_MODULE_2__save__["a" /* default */]
}));

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inspector_controls__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images__ = __webpack_require__(95);





/**
 * WordPress dependencies
 */
var Fragment = wp.element.Fragment;


var OpenTable = function OpenTable(props) {
	var attributes = props.attributes;
	var example = attributes.example;

	return example ? wp.element.createElement(
		Fragment,
		null,
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__preview__["a" /* default */], props),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__inspector_controls__["a" /* default */], props)
	) : __WEBPACK_IMPORTED_MODULE_2__images__["d" /* openTable */];
};

/* harmony default export */ __webpack_exports__["a"] = (OpenTable);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_is_shallow_equal__ = __webpack_require__(227);
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
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies;
 */
var isShallowEqualObjects = __webpack_require__( 228 );
var isShallowEqualArrays = __webpack_require__( 229 );

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
/* 228 */
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
/* 229 */
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
/* 230 */
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
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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

/***/ }),
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAI1CAYAAAAgiggGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAQKfSURBVHgB7L0HgFxXdT5+3puZ7b1Kq16sYllyr3KvYDAGY0poCYQQQkkl/H+BhBRCSAIJoQVIIBQb2zSDbWzce5G7Lbmo9y5t77sz7/3Pd255b1Yr2eB1CMP57NXOzrxy331v7nf6CWIGKRQKhUKh+E1GHJJCoVAoFIrfeCihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK6AqFQqFQlACU0BUKhUKhKAEooSsUCoVCUQJQQlcoFAqFogSghK5QKBQKRQlACV2hUCgUihKAErpCoVAoFCUAJXSFQqFQKEoASugKhUKhUJQAlNAVCoVCoSgBKKErFAqFQlECUEJXKBQKhaIEoISuUCgUCkUJQAldoVAoFIoSgBK6QqFQKBQlACV0hUKhUChKAEroCoVCoVCUAJTQFQqFQqEoASihKxQKhUJRAlBCVygUCoWiBKCErlAoFApFCUAJXaFQKBSKEoASukKhUCgUJQAldIVCoVAoSgBK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aQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQAUdEIIIaQBUNAJIYSQBkBBJ4QQQhoABZ0QQghpABR0QgghpAFQ0AkhhJAGQEEnhBBCGgAFnRBCCGkAFHRCCCGkAVDQCSGEkAZAQSeEEEIaAAWdEEIIaQB9Qggh5GjDCiF17P8Dtfhb6xALsJUAAAAASUVORK5CYII="

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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OLz++uvbNV3fb303++W+Wc6+3/troOtqS6+uefPNN7dX3/d5f8+psvt76aWXtr/uqa4PfvCDW3u/973vba/NVa+V3TWVpW797reuUfasp/K+//3vH9tl3vft0cbK25cR9LG/2Sb39dr3r7766vZ65+LO4d79e1t5yqkMa6+56VWblNH77r1z9861cdPnyjMGL7744rV7+2ss+64/fTZn3dvfa6+9dvysjP0cam/XtJ6Uaz31eY6b661V33Wv176vPmOibd/+9re3efLd+973vgfjcNVeZVdv37fOK8ea6P6f+ImfON7Tdz57Frzvt4985CNbHT3z73//+w9/+Zd/uX2u/H7vu1/4hV84/Nmf/dm2dqqvZ7c+m6Neu7+yKvdDH/rQcT1/7WtfO85F7eyZbb77qy6fq696q6Oyfuqnfmor4wMf+MBxfuvjd77zne376tLn1tn9ew/W/xtvPlj7zWv3fPazn93GpM/1oWu++c1vbmU2Lvrgnr/4i784Pj8/+7M/e/jCF76wlV899d381c4//dM/PXz961/f7vvMZz6z0be+7/N8Frr/p3/6p7d7/+RP/uTwkz/5k8fxr+6e78quPbXvy1/+8vb7Jz/5ye277qvcr371q9s9P/dzP7d937hVl7XSvHRfdb36yquHb3zzG9v4heaka7TNWuwZbJx6ba7re+WYV2veM1F5c83Whn6vj41r49AYHun9eCYnfWnuuq818KlPfWpbH7WtcuprZVuvr7362jav1futb31rm1NjhwbMZ6g6Wieey8rtt5/5mZ859qX660tt/vjHP759/41vfOP4XFZOa2yr/2rMmqfWa2uzcXKdPpkL8PyExrey9a1ra+N//a//dXt9CtyPsvz6/MbE9FrFNaoKnwVOMUaT9Nrrrx3eLiyU2o649Iq59DBEGExef/sBD4SD7msM/spf+SuHF+6+sLVxMvDeT+Y2+7hnLpgB4WF/36kyuj5C3uS2aBqnFgHUxq5tEdXPjXhdlk9Q2Y/L7NtkPnvGc6ptmMckSl4rcz6kmAwGc9G/Ow8FG/XANUZw7/6xXdrY7xuhfuPNrZzDrnn7flQ/JmUetH0+4H7DBOb9N13vOn3cz6X36m6+IszKwQSswX7v+9ZZ3+uz9YKwNgbNm++m0LUf8wigdYD5tX4m0az+j370o9t3Mc3JcFpzXae/eybR+xhi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"

/***/ })
/******/ ]);