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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(12);

var assertThisInitialized = __webpack_require__(9);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(20);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
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

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(23);

var iterableToArrayLimit = __webpack_require__(24);

var nonIterableRest = __webpack_require__(25);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(21);
} else {}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

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
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(22);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(28);

var iterableToArray = __webpack_require__(29);

var nonIterableSpread = __webpack_require__(30);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies;
 */
var isShallowEqualObjects = __webpack_require__( 31 );
var isShallowEqualArrays = __webpack_require__( 32 );

var isArray = Array.isArray;

/**
 * @typedef {{[key: string]: any}} ComparableObject
 */

/**
 * Returns true if the two arrays or objects are shallow equal, or false
 * otherwise.
 *
 * @param {any[]|ComparableObject} a First object or array to compare.
 * @param {any[]|ComparableObject} b Second object or array to compare.
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
/* 20 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(15),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(27);
} else {}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(15),l=__webpack_require__(13);function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,v=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,B=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.block"):60121,la=t?Symbol.for("react.fundamental"):60117,ma=t?Symbol.for("react.scope"):60119;function na(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c)},function(c){0===a._status&&(a._status=2,a._result=c)})}}
function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case u:return"Fragment";case aa:return"Portal";case ca:return"Profiler";case ba:return"StrictMode";case B:return"Suspense";case ha:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return"Context.Consumer";case v:return"Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return C(a.type);case ka:return C(a.render);case ja:if(a=1===a._status?a._result:null)return C(a)}return null}var D=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var oa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}
function pa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=oa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var qa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra=Object.prototype.hasOwnProperty,sa={},ta={};
function ua(a){if(ra.call(ta,a))return!0;if(ra.call(sa,a))return!1;if(qa.test(a))return ta[a]=!0;sa[a]=!0;return!1}function va(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wa(a,b,c,d){if(null===b||"undefined"===typeof b||va(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function J(a,b,c,d,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=g}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1)});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0)});var xa=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=xa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function ya(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||wa(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N(b)+'"')}return ua(a)?a+'="'+(N(b)+'"'):""}function za(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Aa="function"===typeof Object.is?Object.is:za,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(q(321));return O}function Ba(){if(0<V)throw Error(q(312));return{memoizedState:null,queue:null,next:null}}function Ca(){null===Q?null===P?(R=!1,P=Q=Ba()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ba()):(R=!0,Q=Q.next);return Q}function Da(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Ea(a,b){return"function"===typeof b?b(a):b}
function Fa(a,b,c){O=W();Q=Ca();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return[d,b]}return[Q.memoizedState,b]}a=a===Ea?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ga.bind(null,O,a);return[Q.memoizedState,a]}
function Ga(a,b,c){if(!(25>V))throw Error(q(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ha(){}
var X=0,Ia={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ca();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Fa,useRef:function(a){O=W();Q=Ca();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Fa(Ea,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ha,useEffect:Ha,useDebugValue:Ha,useResponder:function(a,b){return{props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return[function(a){a()},!1]}},Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ka(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var La={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ma=k({menuitem:!0},La),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Na=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Oa=/([A-Z])/g,Pa=/^ms-/,Z=l.Children.toArray,Qa=D.ReactCurrentDispatcher,Ra={listing:!0,pre:!0,textarea:!0},Sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ta={},Ua={};function Va(a){if(void 0===a||null===a)return a;var b="";l.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Wa=Object.prototype.hasOwnProperty,Xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ya(a,b){if(void 0===a)throw Error(q(152,C(b)||"Component"));}
function Za(a,b,c){function d(d,g){var e=g.prototype&&g.prototype.isReactComponent,f=pa(g,b,c,e),x=[],h=!1,m={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===x)return null},enqueueReplaceState:function(a,c){h=!0;x=[c]},enqueueSetState:function(a,c){if(null===x)return null;x.push(c)}};if(e){if(e=new g(d.props,f,m),"function"===typeof g.getDerivedStateFromProps){var w=g.getDerivedStateFromProps.call(null,d.props,e.state);null!=w&&(e.state=k({},e.state,w))}}else if(O={},e=g(d.props,
f,m),e=Da(g,d.props,e,f),null==e||null==e.render){a=e;Ya(a,g);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),x.length){m=x;var r=
h;x=null;h=!1;if(r&&1===m.length)e.state=m[0];else{w=r?m[0]:e.state;var y=!0;for(r=r?1:0;r<m.length;r++){var p=m[r];p="function"===typeof p?p.call(e,w,d.props,f):p;null!=p&&(y?(y=!1,w=k({},w,p)):k(w,p))}e.state=w}}else x=null;a=e.render();Ya(a,g);if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(q(108,C(g)||"Unknown",T));}A&&(b=k({},b,A))}for(;l.isValidElement(a);){var f=a,g=f.type;if("function"!==
typeof g)break;d(f,g)}return{child:a,context:b}}
var $a=function(){function a(a,b){l.isValidElement(a)?a.type!==u?a=[a]:(a=a.props.children,a=l.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ja.html,children:a,childIndex:0,context:oa,footer:""};var c=F[0];if(0===c){var g=F;c=g.length;var d=2*c;if(!(65536>=d))throw Error(q(304));var h=new Uint16Array(d);h.set(g);F=h;F[0]=c+1;for(g=c;g<d-1;g++)F[g]=g+1;F[d-1]=0}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a}};b.pushProvider=function(a){var c=++this.contextIndex,b=a.type._context,g=this.threadID;E(b,g);var x=b[g];this.contextStack[c]=b;this.contextValueStack[c]=x;b[g]=a.props.value};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Qa.current;Qa.current=Ia;try{for(var g=[""],x=!1;g[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;F[h]=F[0];F[0]=h;break}var e=this.stack[this.stack.length-1];if(x||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===v)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=g.pop();if(x){x=!1;var n=e.fallbackFrame;if(!n)throw Error(q(303));this.stack.push(n);g[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else g[this.suspenseDepth]+=G}g[this.suspenseDepth]+=I}else{var m=e.children[e.childIndex++],
w="";try{w+=this.render(m,e.context,e.domNamespace)}catch(r){if(null!=r&&"function"===typeof r.then)throw Error(q(294));throw r;}finally{}g.length<=this.suspenseDepth&&g.push("");g[this.suspenseDepth]+=w}}return g[0]}finally{Qa.current=c,X=b}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Za(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return"";if(!l.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===aa)throw Error(q(257));throw Error(q(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ba:case ea:case ca:case ha:case u:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(q(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case fa:O={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ia:return a=[l.createElement(c.type,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case v:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case da:c=a.type;d=a.props;var h=this.threadID;E(c,h);c=Z(d.children(c[h]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case la:throw Error(q(338));case ja:switch(c=a.type,na(c),c._status){case 1:return a=[l.createElement(c._result,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(q(295));
}case ma:throw Error(q(343));}throw Error(q(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ja.html&&Ka(c);if(!Ta.hasOwnProperty(c)){if(!Sa.test(c))throw Error(q(65,c));Ta[c]=!0}var d=a.props;if("input"===c)d=k({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var h=d.value;if(null==h){h=d.defaultValue;var e=d.children;if(null!=e){if(null!=
h)throw Error(q(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(q(93));e=e[0]}h=""+e}null==h&&(h="")}d=k({},d,{value:void 0,children:""+h})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=k({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Va(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;h=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){h=!0;break}}else h=""+e===G;d=k({selected:void 0,children:void 0},
d,{selected:h,children:I})}}if(h=d){if(Ma[c]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw Error(q(137,c,""));if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw Error(q(60));if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw Error(q(61));}if(null!=h.style&&"object"!==typeof h.style)throw Error(q(62,""));}h=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in h)if(Wa.call(h,z)){var m=h[z];if(null!=m){if("style"===
z){n=void 0;var w="",r="";for(n in m)if(m.hasOwnProperty(n)){var y=0===n.indexOf("--"),p=m[n];if(null!=p){if(y)var A=n;else if(A=n,Ua.hasOwnProperty(A))A=Ua[A];else{var T=A.replace(Oa,"-$1").toLowerCase().replace(Pa,"-ms-");A=Ua[A]=T}w+=r+A+":";r=n;y=null==p||"boolean"===typeof p||""===p?"":y||"number"!==typeof p||0===p||Y.hasOwnProperty(r)&&Y[r]?(""+p).trim():p+"px";w+=y;r=";"}}m=w||null}n=null;b:if(y=c,p=h,-1===y.indexOf("-"))y="string"===typeof p.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0}y?Xa.hasOwnProperty(z)||(n=z,n=ua(n)&&null!=m?n+'="'+(N(m)+'"'):""):n=ya(z,m);n&&(G+=" "+n)}}e||I&&(G+=' data-reactroot=""');var z=G;h="";La.hasOwnProperty(c)?z+="/>":(z+=">",h="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null}null!=e?(d=[],Ra.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?Ka(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:h});this.previousWasTextNode=!1;return z};return a}(),ab={renderToString:function(a){a=new $a(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new $a(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(){throw Error(q(207));},renderToStaticNodeStream:function(){throw Error(q(208));
},version:"16.13.1"};module.exports=ab.default||ab;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = Object.keys;

/**
 * Returns true if the two objects are shallow equal, or false otherwise.
 *
 * @param {import('.').ComparableObject} a First object to compare.
 * @param {import('.').ComparableObject} b Second object to compare.
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns true if the two arrays are shallow equal, or false otherwise.
 *
 * @param {any[]} a First array to compare.
 * @param {any[]} b Second array to compare.
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });

// NAMESPACE OBJECT: ./src/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateSettings", function() { return updateSettings; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(12);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(13);

// CONCATENATED MODULE: ./src/filters/with-block-id/index.js






var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var addFilter = wp.hooks.addFilter;
var with_block_id_Component = wp.element.Component;
var enableBlockIdAttributeOnBlocks = ['novablocks/announcement-bar'];

function addBlockIdAttribute(block) {
  if (!enableBlockIdAttributeOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    block.attributes = Object.assign(block.attributes, {
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
  return (/*#__PURE__*/function (_Component) {
      inherits_default()(BetterBlockEdit, _Component);

      function BetterBlockEdit() {
        classCallCheck_default()(this, BetterBlockEdit);

        return possibleConstructorReturn_default()(this, getPrototypeOf_default()(BetterBlockEdit).apply(this, arguments));
      }

      createClass_default()(BetterBlockEdit, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (enableBlockIdAttributeOnBlocks.includes(this.props.name)) {
            this.props.setAttributes({
              blockId: this.props.clientId
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(react["createElement"])(BlockEdit, this.props);
        }
      }]);

      return BetterBlockEdit;
    }(with_block_id_Component)
  );
}, "withBlockIdAttribute");
addFilter('editor.BlockEdit', 'novablocks/with-blockId-attribute', withBlockIdAttribute);
// CONCATENATED MODULE: ./src/filters/with-block-index/index.js






var with_block_index_createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var with_block_index_addFilter = wp.hooks.addFilter;
var with_block_index_Component = wp.element.Component;
var with_block_index_select = wp.data.select;
var enableBlockIndexAttributeOnBlocks = ['novablocks/hero'];

function addBlockIndexAttribute(block) {
  if (!enableBlockIndexAttributeOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes !== 'undefined') {
    block.attributes = Object.assign(block.attributes, {
      blockIndex: {
        type: 'number',
        default: -1
      }
    });
  }

  return block;
}

with_block_index_addFilter('blocks.registerBlockType', 'novablocks/add-blockIndex-attribute', addBlockIndexAttribute);
var withBlockIndexAttribute = with_block_index_createHigherOrderComponent(function (BlockEdit) {
  return (/*#__PURE__*/function (_Component) {
      inherits_default()(BetterBlockEdit, _Component);

      function BetterBlockEdit() {
        classCallCheck_default()(this, BetterBlockEdit);

        return possibleConstructorReturn_default()(this, getPrototypeOf_default()(BetterBlockEdit).apply(this, arguments));
      }

      createClass_default()(BetterBlockEdit, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.updateIndex();
        }
      }, {
        key: "updateIndex",
        value: function updateIndex() {
          var _this = this;

          if (enableBlockIndexAttributeOnBlocks.includes(this.props.name)) {
            var oldIndex = this.props.attributes.blockIndex;
            var newIndex = with_block_index_select('core/block-editor').getBlocks().findIndex(function (block) {
              return block.clientId === _this.props.clientId;
            });

            if (oldIndex !== newIndex) {
              this.props.setAttributes({
                blockIndex: newIndex
              });
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(react["createElement"])(BlockEdit, this.props);
        }
      }]);

      return BetterBlockEdit;
    }(with_block_index_Component)
  );
}, "withBlockIndexAttribute");
with_block_index_addFilter('editor.BlockEdit', 'novablocks/with-blockIndex-attribute', withBlockIndexAttribute);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/filters/with-font-size-picker/index.js


var __ = wp.i18n.__;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    with_font_size_picker_createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    with_font_size_picker_Component = _wp$element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var InspectorControls = wp.blockEditor.InspectorControls;
var withSelect = wp.data.withSelect;
var with_font_size_picker_addFilter = wp.hooks.addFilter;
var enableFontSizeControlOnBlocks = ['core/quote', 'core/pullquote', 'core/heading', 'novablocks/headline'];
var fontSizeOptions = [{
  value: 'smaller',
  label: __('Smaller', '__plugin_txtd')
}, {
  value: 'normal',
  label: __('Normal', '__plugin_txtd')
}, {
  value: 'larger',
  label: __('Larger', '__plugin_txtd')
}];
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
    return Object(react["createElement"])(Fragment, null, Object(react["createElement"])(WrappedComponent, props), Object(react["createElement"])(InspectorControls, null, Object(react["createElement"])(PanelBody, {
      title: __('Text Settings', '__plugin_txtd'),
      className: "blocks-custom-font-size"
    }, Object(react["createElement"])(SelectControl, {
      label: __('Font Size', '__plugin_txtd'),
      value: selectValue,
      options: fontSizeOptions,
      onChange: function onChange(nextFontSize) {
        setAttributes({
          fontSize: nextFontSize,
          className: replaceActiveFontSize(className, fontSize, nextFontSize)
        });
      }
    }))));
  };
}

var withFontSizeControl = with_font_size_picker_createHigherOrderComponent(function (OriginalComponent) {
  var BetterComponent = withFontSizePicker(OriginalComponent);
  return function (props) {
    if (!enableFontSizeControlOnBlocks.includes(props.name)) {
      return Object(react["createElement"])(OriginalComponent, props);
    }

    return Object(react["createElement"])(BetterComponent, props);
  };
});
with_font_size_picker_addFilter('editor.BlockEdit', 'novablocks/with-inspector-controls', withFontSizeControl);

function addFontSizeAttribute(block) {
  if (!enableFontSizeControlOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, {
    fontSize: {
      type: 'string',
      default: defaultFontSize
    }
  });
  return block;
}

with_font_size_picker_addFilter('blocks.registerBlockType', 'novablocks/add-font-size-attribute', addFontSizeAttribute);
// CONCATENATED MODULE: ./src/blocks/openhours/hoursparser.js
// Copyright 2014 Foursquare Labs Inc. All Rights Reserved.
var fourSq = fourSq || {};
fourSq.util = fourSq.util || {};
fourSq.util.Hours = {
  /**
   * Pads times to be HHMM
   * @param {string} text
   * @return {string}
   */
  padTimes: function padTimes(text) {
    // Add leading/trailing zeros to times so it's always 4 digits, like 0800
    // Have to run each twice because they're pivoting around the separator
    // i.e. x10-12x first matches "x10-" and doesn't match the rest
    text = text.replace(/([^0-9]|^)([0-9]{3})([^0-9]|$)/g, '$10$2$3');
    text = text.replace(/([^0-9]|^)([0-9]{3})([^0-9]|$)/g, '$10$2$3');
    text = text.replace(/([^0-9]|^)([0-9]{2})([^0-9]|$)/g, '$1$200$3');
    text = text.replace(/([^0-9]|^)([0-9]{2})([^0-9]|$)/g, '$1$200$3');
    text = text.replace(/([^0-9]|^)([0-9])([^0-9]|$)/g, '$10$200$3');
    text = text.replace(/([^0-9]|^)([0-9])([^0-9]|$)/g, '$10$200$3');
    return text;
  },

  /**
   * @param {Array.<number>} days
   * @param {number} startMinutes
   * @param {number} endMinutes
   */
  toTimeframe: function toTimeframe(days, startMinutes, endMinutes) {
    // If we've day wrapped and end before 4am, push the ending value up 24 hours.
    if (startMinutes >= endMinutes && endMinutes <= 240) {
      endMinutes += 1440;
    }

    var startFormatted = fourSq.util.Hours.formatMinutes(startMinutes);
    var endFormatted = fourSq.util.Hours.formatMinutes(endMinutes);
    return (
      /** @type {fourSq.api.models.hours.MachineTimeframe} */
      {
        days: days,
        open: [
        /** @type {fourSq.api.models.hours.MachineSegment} */
        {
          start: startFormatted,
          end: endFormatted
        }]
      }
    );
  },

  /**
   * @param {number} minutes after minute
   * @return {string} the hhmm format that API takes for the input hours
   */
  formatMinutes: function formatMinutes(minutes) {
    var hh = Math.floor(minutes / 60);
    var mm = minutes % 60;
    var intoNextDay = hh % 24 !== hh;
    hh = hh % 24;

    if (hh % 10 === hh) {
      hh = '0' + hh;
    }

    if (intoNextDay) {
      hh = '+' + hh;
    }

    if (mm % 10 === mm) {
      mm = '0' + mm;
    }

    return hh + '' + mm;
  },

  /**
   * @param {string} hoursText
   * @param {(string|undefined)} minutesText
   * @param {(string|undefined)} meridiem
   * @return {number}
   */
  minutesAfterMidnight: function minutesAfterMidnight(hoursText, minutesText, meridiem) {
    var hours = parseInt(hoursText, 10);
    var minutes = minutesText !== undefined ? parseInt(minutesText, 10) : 0;

    if (hours === 12 && meridiem) {
      hours -= 12;
    }

    if (meridiem && meridiem[0] === 'p') {
      hours += 12;
    }

    return hours * 60 + minutes;
  }
};
fourSq.util.HoursParser = {
  /**
   * @return {fourSq.api.models.hours.MachineHours}
   */
  parse: function parse(text) {
    text = text.toLowerCase(); // Normalize new lines to ';'

    text = text.replace(/\n/g, ' ; '); // Massage times
    // TODO(ss): translate and do weekend/weekday subs

    text = text.replace(/(12|12:00)?midnight/g, '1200a');
    text = text.replace(/(12|12:00)?noon/g, '1200p');
    text = text.replace(/(open)?\s*24\s*hours?/g, '1200a-1200a'); // Standardize conjunctions to '&'

    text = text.replace(/\s*(and|,|\+|&)\s*/g, '&'); // Standardize range tokens to '-'

    text = text.replace(/\s*(-|to|thru|through|till?|'till?|until)\s*/g, '-'); // Standardize am/pm

    text = text.replace(/\s*a\.?m?\.?/g, 'a');
    text = text.replace(/\s*p\.?m?\.?/g, 'p'); // Not sure this happens, but add trailing zeros to things like 5:3pm

    text = text.replace(/([0-9])(h|:|\.)([0-9])([^0-9]|$)/g, '$1$2$30$4'); // Remove separators from times (e.g. ':')...
    // if they both have separators

    text = text.replace(/([0-9]+)\s*[^0-9]\s*([0-9]{2})([^0-9]+?)([0-9]+)\s*[^0-9]\s*([0-9]{2})/g, '$1$2$3$4$5'); // if only the start time has a separator

    text = text.replace(/([0-9]+)\s*(h|:|\.)\s*([0-9]{2})/g, '$1$3'); // if only the end time has a separator
    //text = text.replace(/([0-9]+)([^0-9ap]+?)([0-9]+)\s*(h|:|\.)\s*([0-9]{2})/g, '$1$2$3$5');

    text = fourSq.util.Hours.padTimes(text); // Massage days

    var dayCanonicals = _.map(_.range(1, 8), function (dayI) {
      var allNames = fourSq.util.HoursParser.dayAliases(dayI);

      var canonical = _.head(allNames); // Shortest is at the front


      var aliases = _.tail(allNames);

      aliases.reverse(); // Need to have the largest alias first for replacing

      if (canonical && aliases) {
        _.each(aliases, function (alias) {
          text = text.replace(new RegExp(alias, 'g'), canonical);
        });
      }

      return canonical;
    });

    var dayPattern = '(' + dayCanonicals.join('|') + ')';
    var timePattern = '([0-9][0-9])([0-9][0-9])\\s*([ap])?';
    var globTimePattern = '[0-9]{4}\\s*[ap]?';
    var globTimeRangePattern = '(' + globTimePattern + '[^0-9]+' + globTimePattern + ')'; // Need to establish whether days come before times (forward) or not (backward)

    var forwardTimeframePattern = dayPattern + '.*?' + globTimeRangePattern;
    var backwardTimeframePattern = globTimeRangePattern + '.*?' + dayPattern;
    var forwardPosition = text.search(new RegExp(forwardTimeframePattern));
    var backwardPosition = text.search(new RegExp(backwardTimeframePattern)); // If a forward pattern is found first, consider it a forward facing text

    var isForward = forwardPosition !== -1 && forwardPosition <= backwardPosition || backwardPosition === -1; // TODO(ss): may be better to normalize the string to be forward facing at this point
    //           so the rest of the method would be easier to grok
    // Separate out something like Mon-Thu, Sat, Sun

    if (isForward) {
      var ungroupedPattern = dayPattern + '&' + dayPattern + '[^&]*?' + globTimeRangePattern;
      var ungroupedRegex = new RegExp(ungroupedPattern, 'g');

      for (var i = 0; i < dayCanonicals.length; ++i) {
        text = text.replace(ungroupedRegex, '$1 $3; $2 $3; ');
      }
    } else {
      var ungroupedPattern = globTimeRangePattern + '([^0-9]*?)' + dayPattern + '&' + dayPattern;
      var ungroupedRegex = new RegExp(ungroupedPattern, 'g');

      for (var i = 0; i < dayCanonicals.length; ++i) {
        text = text.replace(ungroupedRegex, '$1 $2 $3; $1 $4; ');
      }
    }

    var dayRangePattern = dayPattern + '[^a-z0-9]*' + dayPattern + '?';
    var timeRangePattern = timePattern + '[^0-9]*' + timePattern;
    var timeframePattern = isForward ? dayRangePattern + '.*?' + timeRangePattern : timeRangePattern + '.*?' + dayRangePattern;
    var dayTimeMatcher = new RegExp(timeframePattern, 'g');
    var matches = [];

    do {
      var dayTimeMatch = dayTimeMatcher.exec(text);

      if (dayTimeMatch) {
        matches.push(dayTimeMatch);
      }
    } while (dayTimeMatch);

    if (matches.length <= 0) {
      // Try to find just a time range, and then we'll assume it's all days later on.
      // First two groups are strings that won't match, to get undefined values
      // in those slots in the regex match array.
      var timeRangeMatcher = new RegExp('(@!ZfW#)?(@!ZfW#)?' + timeRangePattern);
      var timeRangeMatch = timeRangeMatcher.exec(text);

      if (timeRangeMatch) {
        matches.push(timeRangeMatch);
      }
    }

    var timeframes = _.map(matches, function (match) {
      // day slots in the regex match array
      var day1 = isForward ? match[1] : match[7];
      var day2 = isForward ? match[2] : match[8];
      var startDay = day1 !== undefined ? dayCanonicals.indexOf(day1) : 0;
      var endDay = null;

      if (day2 !== undefined) {
        if (day1 === undefined) {
          startDay = dayCanonicals.indexOf(day2);
        } else {
          endDay = dayCanonicals.indexOf(day2);
        }
      } else if (day1 === undefined) {
        // If start and end days were undefined, assume 7 days a week
        endDay = 7;
      }

      if (endDay === null) {
        endDay = startDay;
      }

      if (endDay < startDay) {
        // For case where: Sun-Tue (we start on Monday)
        endDay += 7;
      }

      var days = _.map(_.range(startDay, endDay + 1), function (day) {
        // Days start at 1 for Monday
        return day % 7 + 1;
      }); // time slots in the regex match array


      var startHour = isForward ? match[3] : match[1];
      var startMinute = isForward ? match[4] : match[2];
      var startMeridiem = isForward ? match[5] : match[3];
      var endHour = isForward ? match[6] : match[4];
      var endMinute = isForward ? match[7] : match[5];
      var endMeridiem = isForward ? match[8] : match[6]; // TODO(ss): hint the meridiem based on endHour < startHour and > 4

      var startTime = fourSq.util.Hours.minutesAfterMidnight(startHour, startMinute, startMeridiem);
      var endTime = fourSq.util.Hours.minutesAfterMidnight(endHour, endMinute, endMeridiem);
      return fourSq.util.Hours.toTimeframe(days, startTime, endTime);
    });

    if (timeframes.length) {
      return (
        /** @type {fourSq.api.models.hours.MachineHours} */
        {
          timeframes: timeframes
        }
      );
    } else {
      return null;
    }
  },

  /**
   * @param {number} day starting at 1 for monday
   * @return {Array.<string>} all aliases of the day, sorted by length
   */
  dayAliases: function dayAliases(day) {
    var text = '';
    var aliases = '';

    switch (day) {
      case 1:
        aliases = ['mondays', 'monday', 'monda', 'mond', 'mon', 'mo', 'm'];
        break;

      case 2:
        aliases = ['tuesdays', 'tuesday', 'tuesd', 'tues', 'tue', 'tu'];
        break;

      case 3:
        aliases = ['wednesdays', 'wednesday', 'wednes', 'wedne', 'wedn', 'wed', 'we', 'w'];
        break;

      case 4:
        aliases = ['thursdays', 'thursday', 'thurs', 'thur', 'thu', 'th'];
        break;

      case 5:
        aliases = ['fridays', 'friday', 'frida', 'frid', 'fri', 'fr', 'f'];
        break;

      case 6:
        aliases = ['saturdays', 'saturday', 'satur', 'satu', 'sat', 'sa'];
        break;

      case 7:
        aliases = ['sundays', 'sunday', 'sunda', 'sund', 'sun', 'su'];
        break;

      default:
        return [];
    }

    return _.sortBy(aliases, function (alias) {
      return alias.length;
    });
  }
}; // Remove the days in which the business is closed. The parser doesn't need those days anyways.

function removeClosedDays(schedule) {
  var hoursString = '';
  var lines = schedule.split('\n');

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes('closed') || lines[i].includes('Closed') || !lines[i].match(/\d+/g)) {// don't add it to the list
    } else {
      hoursString += lines[i] + '\n';
    }
  }

  return hoursString;
}

var parseContent = function parseContent(currentValue) {
  currentValue = removeClosedDays(currentValue);
  var hours = fourSq.util.HoursParser.parse(currentValue);
  return JSON.stringify(hours);
};
// CONCATENATED MODULE: ./src/blocks/core/separator/index.js


var separator_addSeparatorFilters = function addSeparatorFilters(settings) {
  var Separator = function Separator(props) {
    var className = classnames_default()('wp-block-separator', props.className);
    return Object(react["createElement"])("div", {
      className: className,
      dangerouslySetInnerHTML: {
        __html: settings.separator && settings.separator.markup
      }
    });
  };

  var replaceSeparatorEdit = wp.compose.createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      if ('core/separator' === props.name) {
        return Object(react["createElement"])(Separator, {
          className: props.attributes.className
        });
      } else {
        return Object(react["createElement"])(BlockEdit, props);
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
// CONCATENATED MODULE: ./src/icons.js

var icons_wp$components = wp.components,
    SVG = icons_wp$components.SVG,
    Path = icons_wp$components.Path;
var nova = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18ZM12.0398 14C12.4069 10.626 15.2652 8 18.7368 8H20.4211C24.6068 8 28 11.3932 28 15.5789V16.381C28 20.3809 24.9177 23.6609 20.9987 23.9753C20.9996 23.9324 21 23.8893 21 23.8462V21.2727C21 17.2561 17.7439 14 13.7273 14H12.0398Z",
  fill: "#6565F2"
}), Object(react["createElement"])("path", {
  d: "M8 21.2857C8 18.9188 9.91878 17 12.2857 17H13.4545C15.9649 17 18 19.0351 18 21.5455V23.1538C18 25.278 16.278 27 14.1538 27H13.7143C10.5584 27 8 24.4416 8 21.2857Z",
  fill: "#FFE42E"
}));
var hero = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, Object(react["createElement"])("rect", {
  width: "24",
  height: "24",
  rx: "12",
  fill: "#6565F2"
})), Object(react["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4 8.49123C4 6.01079 7.01619 4 10.7368 4H11.619C16.2477 4 20 6.50152 20 9.5873C20 12.3926 16.5888 14.6667 12.381 14.6667H11.5789C7.39321 14.6667 4 12.4045 4 9.61403V8.49123Z",
  fill: "#6565F2"
}), Object(react["createElement"])("path", {
  d: "M7 18.7143C7 19.4244 7.57563 20 8.28571 20H15.5C16.3284 20 17 19.3284 17 18.5V18.5C17 17.6716 16.3284 17 15.5 17H8.71429C7.76751 17 7 17.7675 7 18.7143V18.7143Z",
  fill: "#FFE42E"
})));
var icons_media = Object(react["createElement"])("svg", {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("mask", {
  id: "path-1-outside-1",
  maskUnits: "userSpaceOnUse",
  x: "-2",
  y: "-2",
  width: "40",
  height: "40",
  fill: "black"
}, Object(react["createElement"])("rect", {
  fill: "white",
  x: "-2",
  y: "-2",
  width: "40",
  height: "40"
}), Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM23.4737 25C20.4507 25 18 22.5493 18 19.5263V18.8095C18 15.0487 21.0487 12 24.8095 12C28.2284 12 31 14.7716 31 18.1905V18.8421C31 22.243 28.243 25 24.8421 25H23.4737Z"
})), Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM23.4737 25C20.4507 25 18 22.5493 18 19.5263V18.8095C18 15.0487 21.0487 12 24.8095 12C28.2284 12 31 14.7716 31 18.1905V18.8421C31 22.243 28.243 25 24.8421 25H23.4737Z",
  fill: "#6565F2"
}), Object(react["createElement"])("path", {
  d: "M2 18C2 9.16344 9.16344 2 18 2V-2C6.95431 -2 -2 6.95431 -2 18H2ZM18 34C9.16344 34 2 26.8366 2 18H-2C-2 29.0457 6.95431 38 18 38V34ZM34 18C34 26.8366 26.8366 34 18 34V38C29.0457 38 38 29.0457 38 18H34ZM18 2C26.8366 2 34 9.16344 34 18H38C38 6.95431 29.0457 -2 18 -2V2ZM16 19.5263C16 23.6539 19.3461 27 23.4737 27V23C21.5552 23 20 21.4448 20 19.5263H16ZM16 18.8095V19.5263H20V18.8095H16ZM24.8095 10C19.9442 10 16 13.9442 16 18.8095H20C20 16.1533 22.1533 14 24.8095 14V10ZM33 18.1905C33 13.667 29.333 10 24.8095 10V14C27.1239 14 29 15.8761 29 18.1905H33ZM33 18.8421V18.1905H29V18.8421H33ZM24.8421 27C29.3476 27 33 23.3476 33 18.8421H29C29 21.1384 27.1384 23 24.8421 23V27ZM23.4737 27H24.8421V23H23.4737V27Z",
  fill: "white",
  mask: "url(#path-1-outside-1)"
}), Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 30C8.68629 30 6 27.3137 6 24V14C6 9.58172 9.58172 6 14 6H16C18.728 6 20.9458 8.18475 20.999 10.9C18.0388 12.3471 16 15.3878 16 18.9048V19.8421C16 22.9484 17.9786 25.5925 20.7443 26.5829C20.0821 28.5685 18.2082 30 16 30H12Z",
  fill: "#FFE42E"
}));
var slideshow = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, Object(react["createElement"])("rect", {
  width: "24",
  height: "24",
  rx: "12",
  fill: "#6565F2"
})), Object(react["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(react["createElement"])("path", {
  d: "M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z",
  fill: "#6565F2"
}), Object(react["createElement"])("path", {
  d: "M17.3982 8.99283C17.8831 9.39282 17.8831 10.1358 17.3982 10.5357L14.9673 12.5407C14.315 13.0787 13.331 12.6147 13.331 11.7692V7.75933C13.331 6.91386 14.315 6.44992 14.9673 6.98788L17.3982 8.99283Z",
  fill: "white"
}), Object(react["createElement"])("path", {
  d: "M6.60184 8.99283C6.11689 9.39282 6.11689 10.1358 6.60184 10.5357L9.03272 12.5407C9.68496 13.0787 10.669 12.6147 10.669 11.7692V7.75933C10.669 6.91386 9.68496 6.44992 9.03272 6.98788L6.60184 8.99283Z",
  fill: "white"
}), Object(react["createElement"])("path", {
  d: "M7 18.2751C7 18.8033 7.42818 19.2314 7.95637 19.2314H8.2172C8.7774 19.2314 9.23154 18.7773 9.23154 18.2171V17.8582C9.23154 17.3842 8.84727 16.9999 8.37325 16.9999H8.27517C7.57091 16.9999 7 17.5708 7 18.2751V18.2751Z",
  fill: "#FFE42E"
}), Object(react["createElement"])("path", {
  d: "M10.7192 18.2751C10.7192 18.8033 11.1474 19.2314 11.6756 19.2314H11.9364C12.4966 19.2314 12.9508 18.7773 12.9508 18.2171V17.8582C12.9508 17.3842 12.5665 16.9999 12.0925 16.9999H11.9944C11.2901 16.9999 10.7192 17.5708 10.7192 18.2751V18.2751Z",
  fill: "#FFE42E"
}), Object(react["createElement"])("path", {
  d: "M14.4385 18.2751C14.4385 18.8033 14.8667 19.2314 15.3948 19.2314H15.6557C16.2159 19.2314 16.67 18.7773 16.67 18.2171V17.8582C16.67 17.3842 16.2857 16.9999 15.8117 16.9999H15.7136C15.0094 16.9999 14.4385 17.5708 14.4385 18.2751V18.2751Z",
  fill: "#FFE42E"
})));
var foodmenu = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, Object(react["createElement"])("path", {
  d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z",
  fill: "#6565F2"
})), Object(react["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(react["createElement"])("path", {
  d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
  fill: "#6565F2"
}), Object(react["createElement"])("path", {
  d: "M18.0001 9.73684C19.1047 9.73684 20.0394 8.81569 19.7116 7.76087C17.739 1.41304 6.26117 1.41304 4.28861 7.76087C3.96084 8.81569 4.89552 9.73684 6.00009 9.73684H18.0001Z",
  fill: "white"
}), Object(react["createElement"])("path", {
  d: "M5 13.1429C5 13.6162 5.38376 14 5.85714 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H6.14286C5.51167 12 5 12.5117 5 13.1429ZM5 17.1429C5 17.6162 5.38376 18 5.85714 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H6.14286C5.51167 16 5 16.5117 5 17.1429ZM18 13.1429C18 13.6162 18.3838 14 18.8571 14H19.0909C19.593 14 20 13.593 20 13.0909V12.7692C20 12.3444 19.6556 12 19.2308 12H19.1429C18.5117 12 18 12.5117 18 13.1429ZM18 17.1429C18 17.6162 18.3838 18 18.8571 18H19.0909C19.593 18 20 17.593 20 17.0909V16.7692C20 16.3444 19.6556 16 19.2308 16H19.1429C18.5117 16 18 16.5117 18 17.1429Z",
  fill: "#FFE42E"
})));
var opentable = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM8.85456 12.3999C8.85456 9.09043 11.5325 6.3999 14.8546 6.3999C18.164 6.3999 20.8419 9.09043 20.8546 12.3999C20.8546 15.7094 18.164 18.3999 14.8546 18.3999C11.5451 18.3999 8.85456 15.7094 8.85456 12.3999ZM13.3514 12.3999C13.3514 13.2336 14.0209 13.9031 14.8546 13.9031C15.6756 13.9031 16.3451 13.2336 16.3577 12.3999C16.3577 11.5662 15.6882 10.8967 14.8546 10.8967C14.0209 10.8967 13.3514 11.5662 13.3514 12.3999ZM5.82298 10.8967C4.9893 10.8967 4.31982 11.5662 4.31982 12.3999C4.31982 13.2336 4.9893 13.9031 5.82298 13.9031C6.65667 13.9031 7.32614 13.2336 7.32614 12.3999C7.32614 11.5662 6.65667 10.8967 5.82298 10.8967Z",
  fill: "#6565F2"
}));
var alignBottom = Object(react["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(react["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(react["createElement"])(Path, {
  d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
}));
var alignCenter = Object(react["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(react["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(react["createElement"])(Path, {
  d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
}));
var alignTop = Object(react["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(react["createElement"])(Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(react["createElement"])(Path, {
  d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
}));
var alignment = Object(react["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  d: "M15.54 5.54L13.77 7.3L12 5.54L10.23 7.3L8.46 5.54L12 2L15.54 5.54ZM18.46 15.54L16.7 13.77L18.46 12L16.7 10.23L18.46 8.46L22 12L18.46 15.54ZM8.46 18.46L10.23 16.7L12 18.46L13.77 16.7L15.54 18.46L12 22L8.46 18.46ZM5.54 8.46L7.3 10.23L5.54 12L7.3 13.77L5.54 15.54L2 12L5.54 8.46Z",
  fill: "currentColor"
}), Object(react["createElement"])("path", {
  d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
  fill: "currentColor"
}));
var invert = Object(react["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  d: "M20 15.3099L23.31 11.9999L20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099ZM12 17.9999V5.99994C15.31 5.99994 18 8.68994 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999Z",
  fill: "currentColor"
}));
var swap = Object(react["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  d: "M18 2L20 6H18L16 2H13L15 6H13L11 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V2H18ZM20 14H10V4.4L11.8 8H20V14Z",
  fill: "currentColor"
}), Object(react["createElement"])("path", {
  d: "M14 20H4V10H7V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20V17H14V20Z",
  fill: "currentColor"
}), Object(react["createElement"])("path", {
  d: "M5 19H13L11.41 17H9.24L8.4 18.1L7 16.3L5 19Z",
  fill: "currentColor"
}));
var map = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, Object(react["createElement"])("path", {
  fill: "#6565F2",
  fillRule: "evenodd",
  d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.45 10.55a6.55 6.55 0 1113.1 0c0 2.236-2.504 5.893-4.416 8.359a2.677 2.677 0 01-4.268 0c-1.912-2.466-4.415-6.123-4.415-8.36zm3.4-.186a3.15 3.15 0 106.301 0 3.15 3.15 0 00-6.301 0z",
  clipRule: "evenodd"
}));
var announcement = Object(react["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 18 18",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, Object(react["createElement"])("path", {
  fill: "#6565F2",
  fillRule: "evenodd",
  d: "M2 0a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2H2zm14 2H2v4h14V2z",
  clipRule: "evenodd"
}));
var headline = Object(react["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, Object(react["createElement"])("path", {
  fill: "#6565F2",
  fillRule: "evenodd",
  d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.147 16.208a1 1 0 01-.978.792h-.762a1 1 0 01-.979-1.207l.428-2.023a1 1 0 00-.978-1.207h-2.333a1 1 0 00-.978.792l-.608 2.854A1 1 0 017.98 17h-.746a1 1 0 01-.978-1.208l1.915-9A1 1 0 019.15 6h.754a1 1 0 01.978 1.207l-.403 1.9a1 1 0 00.979 1.208h2.332a1 1 0 00.978-.791l.584-2.733a1 1 0 01.978-.79h.754a1 1 0 01.978 1.207l-1.915 9z",
  clipRule: "evenodd"
}));
var header = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 12C0 5.37258 5.37258 0 12 0c6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12zm10 7c-.55228 0-1-.4477-1-1s.44772-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4zm0 2c-1.65685 0-3-1.3431-3-3s1.34315-3 3-3h4c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3h-4zM8 4C5.79086 4 4 5.79086 4 8v3c0 1.1046.89543 2 2 2h12c1.1046 0 2-.8954 2-2V8c0-2.20914-1.7909-4-4-4H8z",
  fill: "#6565F2"
}));
var logo = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zm0 7c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5 2.7614 0 5-2.2386 5-5 0-2.76142-2.2386-5-5-5zm-7 5c0 3.866 3.13401 7 7 7 3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7z",
  fill: "#6565F2"
}));
var navigation = Object(react["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(react["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zM5.85714 8C5.38376 8 5 7.61624 5 7.14286 5 6.51167 5.51167 6 6.14286 6H18c.5523 0 1 .44772 1 1s-.4477 1-1 1H5.85714zM5 12.1429c0 .4733.38376.8571.85714.8571H18c.5523 0 1-.4477 1-1s-.4477-1-1-1H6.14286C5.51167 11 5 11.5117 5 12.1429zM5.85714 18C5.38376 18 5 17.6162 5 17.1429 5 16.5117 5.51167 16 6.14286 16H18c.5523 0 1 .4477 1 1s-.4477 1-1 1H5.85714z",
  fill: "#6565F2"
}));
// CONCATENATED MODULE: ./src/blocks/announcement-bar/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var announcement_bar_ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var announcement_bar_Fragment = wp.element.Fragment;
var announcement_bar_wp$components = wp.components,
    BaseControl = announcement_bar_wp$components.BaseControl,
    ToggleControl = announcement_bar_wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInput = _wp$blockEditor.URLInput;

function init() {
  registerBlockType('novablocks/announcement-bar', {
    title: announcement_bar_('Announcement Bar', '__plugin_txtd'),
    description: announcement_bar_('Display a featured message through a banner across the top of your site.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: announcement,
    keywords: [announcement_bar_('Promo Bar', '__plugin_txtd'), announcement_bar_('Welcome Header Bar', '__plugin_txtd'), announcement_bar_('Top Bar', '__plugin_txtd')],
    styles: [{
      name: 'accent',
      label: announcement_bar_('Accent', '__plugin_txtd'),
      isDefault: true
    }, {
      name: 'alternative',
      label: announcement_bar_('Alternative', '__plugin_txtd')
    }, {
      name: 'alert',
      label: announcement_bar_('Alert', '__plugin_txtd')
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
      var classNames = classnames_default()(className, 'novablocks-announcement-bar');
      return Object(react["createElement"])(announcement_bar_Fragment, null, Object(react["createElement"])("div", {
        className: classNames
      }, Object(react["createElement"])(RichText, {
        tagName: "p",
        className: "novablocks-announcement-bar__content",
        value: content,
        onChange: function onChange(content) {
          setAttributes({
            content: content
          });
        },
        allowedFormats: ['core/link', 'core/bold', 'core/italic']
      })), isSelected && Object(react["createElement"])("div", {
        className: "novablocks-announcement-bar__url-field-wrapper"
      }, Object(react["createElement"])(BaseControl, {
        label: announcement_bar_('Add a link to make the whole Announcement Bar clickable.', '__plugin_txtd'),
        className: "wp-block-button__inline-link"
      }, Object(react["createElement"])(URLInput, {
        className: "wp-block-button__inline-link-input",
        value: url,
        autoFocus: false,
        onChange: function onChange(value) {
          return setAttributes({
            url: value
          });
        },
        disableSuggestions: !isSelected,
        isFullWidth: true,
        hasBorder: true
      })), Object(react["createElement"])(ToggleControl, {
        checked: opensInNewTab,
        onChange: function onChange(opensInNewTab) {
          setAttributes({
            opensInNewTab: opensInNewTab
          });
        },
        label: announcement_bar_('Open in new tab', '__plugin_txtd')
      })));
    },
    getEditWrapperProps: function getEditWrapperProps(attributes) {
      return {
        'data-align': 'full'
      };
    }
  });
}

/* harmony default export */ var announcement_bar = (init);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(9);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// CONCATENATED MODULE: ./src/blocks/google-map/placeholder.js







var placeholder_ = wp.i18n.__;
var placeholder_wp$element = wp.element,
    placeholder_Component = placeholder_wp$element.Component,
    placeholder_Fragment = placeholder_wp$element.Fragment;
var placeholder_wp$components = wp.components,
    Button = placeholder_wp$components.Button,
    Placeholder = placeholder_wp$components.Placeholder,
    TextControl = placeholder_wp$components.TextControl;
var ENTER = wp.keycodes.ENTER;

var placeholder_MapPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(MapPlaceholder, _Component);

  function MapPlaceholder() {
    var _this;

    classCallCheck_default()(this, MapPlaceholder);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(MapPlaceholder).apply(this, arguments));
    _this.state = {
      apiKey: _this.props.apiKey
    };
    return _this;
  }

  createClass_default()(MapPlaceholder, [{
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
      var icon = Object(react["createElement"])("div", {
        className: "editor-block-icon block-editor-block-icon"
      }, map);
      return Object(react["createElement"])(Placeholder, {
        icon: icon,
        label: placeholder_('Location Map of The World', '__plugin_txtd')
      }, apiKeyInstructions && Object(react["createElement"])("div", {
        className: "components-placeholder__instructions"
      }, apiKeyInstructions), Object(react["createElement"])(TextControl, {
        className: "components-placeholder__input",
        placeholder: placeholder_('Paste API key here', '__plugin_txtd'),
        value: this.state.apiKey,
        onChange: function onChange(apiKey) {
          _this2.setState({
            apiKey: apiKey
          });
        },
        onKeyDown: function onKeyDown(_ref) {
          var keyCode = _ref.keyCode;

          _this2.handleKeyDown(keyCode);
        }
      }), Object(react["createElement"])(Button, {
        isLarge: true,
        disabled: !this.state.apiKey,
        type: "button",
        onClick: function onClick() {
          _this2.props.saveApiKey(_this2.state.apiKey);
        }
      }, placeholder_('Save', '__plugin_txtd')));
    }
  }]);

  return MapPlaceholder;
}(placeholder_Component);

/* harmony default export */ var placeholder = (placeholder_MapPlaceholder);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(16);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(26);

// CONCATENATED MODULE: ./src/blocks/google-map/pin.js
/* harmony default export */ var pin = ("<svg width=\"62\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 62 75\">\n\t<defs>\n\t\t<path id=\"b\" d=\"M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z\"></path>\n\t\t<filter id=\"a\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n\t\t\t<feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"></feGaussianBlur>\n\t\t\t<feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill=\"none\" fill-rule=\"evenodd\">\n\t\t<use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\" style=\"display:none\"></use>\n\t\t<use fill=\"%ACCENT_COLOR%\" xlink:href=\"#b\"></use>\n\t</g>\n</svg>");
// CONCATENATED MODULE: ./src/blocks/google-map/default-map-center.js
var defaultMapCenter = {
  lat: 47.1665264,
  lng: 27.58285479999995
};
/* harmony default export */ var default_map_center = (defaultMapCenter);
// CONCATENATED MODULE: ./src/blocks/google-map/styles/customized.js
/* harmony default export */ var customized = ([{
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
// CONCATENATED MODULE: ./src/blocks/google-map/styles/index.js

var styles_styles = [{
  slug: 'customized',
  label: 'Customized',
  styles: customized
}, {
  slug: 'original',
  label: 'Original',
  styles: []
}];
/* harmony default export */ var google_map_styles = (styles_styles);
// CONCATENATED MODULE: ./src/blocks/google-map/utils.js


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
var compileStyles = function compileStyles(styleData) {
  var _this$props$attribute = this.props.attributes,
      showLabels = _this$props$attribute.showLabels,
      showIcons = _this$props$attribute.showIcons,
      styleSlug = _this$props$attribute.styleSlug;
  var accentColor = getMapAccentColor.call(this);
  var styleDataString = JSON.stringify(styleData).replace(/%ACCENT_COLOR%/g, accentColor);
  return JSON.parse(styleDataString);
};
var utils_getMapStyles = function getMapStyles() {
  var attributes = this.props.attributes;
  var styleData = attributes.styleData,
      styleSlug = attributes.styleSlug;
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length === 0;
  var selectedStyles = google_map_styles.find(function (style) {
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
var utils_getCenterFromMarkers = function getCenterFromMarkers(markers) {
  if (typeof google === "undefined" || typeof google.maps === "undefined") {
    return default_map_center;
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
var getMarkersCenter = function getMarkersCenter() {
  return utils_getCenterFromMarkers(this.props.attributes.markers);
};
// CONCATENATED MODULE: ./src/store/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_STATE = {
  settings: {}
};
/* harmony default export */ var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return _objectSpread({}, state, {
        settings: action.settings
      });
  }

  return state;
});
// CONCATENATED MODULE: ./src/store/selectors.js
function selectors_getSettings(state) {
  return state.settings;
}
// CONCATENATED MODULE: ./src/store/actions.js
function updateSettings(settings) {
  return {
    type: 'UPDATE_SETTINGS',
    settings: settings
  };
}
// CONCATENATED MODULE: ./src/store/index.js
var registerStore = wp.data.registerStore;



var STORE_NAME = 'novablocks';
/* harmony default export */ var store = (registerStore(STORE_NAME, {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject
}));
// CONCATENATED MODULE: ./src/components/with-settings/index.js


function with_settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function with_settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { with_settings_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { with_settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var with_settings_createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var with_settings_withSelect = wp.data.withSelect;
/* harmony default export */ var with_settings = (with_settings_createHigherOrderComponent(function (Component) {
  return with_settings_withSelect(function (select, ownProps) {
    var _select = select(STORE_NAME),
        getSettings = _select.getSettings;

    return with_settings_objectSpread({}, ownProps, {
      settings: getSettings()
    });
  })(Component);
}));
// CONCATENATED MODULE: ./src/components/layout-panel/padding.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var padding_ = wp.i18n.__;
var padding_Fragment = wp.element.Fragment;
var padding_wp$components = wp.components,
    padding_Button = padding_wp$components.Button,
    ButtonGroup = padding_wp$components.ButtonGroup,
    RangeControl = padding_wp$components.RangeControl;

var padding_PaddingControls = function PaddingControls(props) {
  var _props$attributes = props.attributes,
      contentPadding = _props$attributes.contentPadding,
      contentPaddingCustom = _props$attributes.contentPaddingCustom,
      setAttributes = props.setAttributes,
      contentPaddingOptions = props.settings.contentPaddingOptions;
  return Object(react["createElement"])(padding_Fragment, null, Object(react["createElement"])("label", null, padding_('Content Padding', '__plugin_txtd')), Object(react["createElement"])(ButtonGroup, null, contentPaddingOptions.map(function (option) {
    return Object(react["createElement"])(padding_Button, {
      key: option.value,
      isDefault: option.value !== contentPadding,
      isPrimary: option.value === contentPadding,
      onClick: function onClick() {
        setAttributes({
          contentPadding: option.value
        });
      }
    }, option.label);
  })), 'custom' === contentPadding && Object(react["createElement"])(RangeControl, {
    value: contentPaddingCustom,
    onChange: function onChange(newContentPadding) {
      return setAttributes({
        contentPaddingCustom: newContentPadding
      });
    },
    min: 0,
    max: 25
  }));
};

/* harmony default export */ var padding = (with_settings(padding_PaddingControls));
// CONCATENATED MODULE: ./src/components/layout-panel/width.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var width_ = wp.i18n.__;
var width_Fragment = wp.element.Fragment;
var width_wp$components = wp.components,
    width_Button = width_wp$components.Button,
    width_ButtonGroup = width_wp$components.ButtonGroup,
    width_RangeControl = width_wp$components.RangeControl;

var width_WidthControls = function WidthControls(props) {
  var _props$attributes = props.attributes,
      contentWidth = _props$attributes.contentWidth,
      contentWidthCustom = _props$attributes.contentWidthCustom,
      setAttributes = props.setAttributes,
      contentWidthOptions = props.settings.contentWidthOptions;
  return Object(react["createElement"])(width_Fragment, null, Object(react["createElement"])("label", null, width_('Content Width', '__plugin_txtd')), Object(react["createElement"])(width_ButtonGroup, {
    label: "Content Width"
  }, contentWidthOptions.map(function (option) {
    return Object(react["createElement"])(width_Button, {
      key: option.value,
      isDefault: option.value !== contentWidth,
      isPrimary: option.value === contentWidth,
      onClick: function onClick() {
        setAttributes({
          contentWidth: option.value
        });
      }
    }, option.label);
  })), 'custom' === contentWidth && Object(react["createElement"])(width_RangeControl, {
    value: contentWidthCustom,
    onChange: function onChange(newContentWidth) {
      return setAttributes({
        contentWidthCustom: newContentWidth
      });
    },
    min: 20,
    max: 90,
    step: 10
  }));
};

/* harmony default export */ var width = (with_settings(width_WidthControls));
// CONCATENATED MODULE: ./src/components/layout-panel/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var layout_panel_ = wp.i18n.__;
var layout_panel_PanelBody = wp.components.PanelBody;

var layout_panel_LayoutPanel = function LayoutPanel(props) {
  return Object(react["createElement"])(layout_panel_PanelBody, {
    className: "pixelgrade-hero-button-group-wrapper",
    title: layout_panel_('Layout', '__plugin_txtd'),
    initialOpen: false
  }, Object(react["createElement"])(padding, props), Object(react["createElement"])(width, props), props.children);
};

/* harmony default export */ var layout_panel = (layout_panel_LayoutPanel);
// CONCATENATED MODULE: ./src/components/parallax-panel/index.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var parallax_panel_ = wp.i18n.__;
var parallax_panel_wp$components = wp.components,
    parallax_panel_PanelBody = parallax_panel_wp$components.PanelBody,
    parallax_panel_RangeControl = parallax_panel_wp$components.RangeControl,
    RadioControl = parallax_panel_wp$components.RadioControl,
    parallax_panel_ToggleControl = parallax_panel_wp$components.ToggleControl;

var parallax_panel_ParallaxPanel = function ParallaxPanel(props) {
  var _props$attributes = props.attributes,
      enableParallax = _props$attributes.enableParallax,
      parallaxAmount = _props$attributes.parallaxAmount,
      parallaxCustomAmount = _props$attributes.parallaxCustomAmount,
      focalPoint = _props$attributes.focalPoint,
      setAttributes = props.setAttributes,
      parallaxOptions = props.settings.parallaxOptions;
  return Object(react["createElement"])(parallax_panel_PanelBody, {
    title: parallax_panel_('Parallax', '__plugin_txtd'),
    initialOpen: false
  }, Object(react["createElement"])(parallax_panel_ToggleControl, {
    label: parallax_panel_('Enable Parallax Scrolling', '__plugin_txtd'),
    checked: enableParallax,
    onChange: function onChange() {
      return setAttributes({
        enableParallax: !enableParallax
      });
    }
  }), !!enableParallax && Object(react["createElement"])(RadioControl, {
    label: parallax_panel_('Parallax Orbital Speed', '__plugin_txtd'),
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
    help: parallax_panel_('The speed at which the parallax effect runs.', '__plugin_txtd')
  }), !!enableParallax && 'custom' === parallaxAmount && Object(react["createElement"])(parallax_panel_RangeControl, {
    value: parallaxCustomAmount,
    onChange: function onChange(nextParallaxAmount) {
      return setAttributes({
        parallaxCustomAmount: nextParallaxAmount
      });
    },
    min: 10,
    max: 100,
    step: 10,
    help: parallax_panel_('It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.', '__plugin_txtd')
  }));
};

/* harmony default export */ var parallax_panel = (with_settings(parallax_panel_ParallaxPanel));
// CONCATENATED MODULE: ./src/components/position-indicators-panel/index.js

var position_indicators_panel_ = wp.i18n.__;
var position_indicators_panel_wp$components = wp.components,
    position_indicators_panel_PanelBody = position_indicators_panel_wp$components.PanelBody,
    position_indicators_panel_ToggleControl = position_indicators_panel_wp$components.ToggleControl;

function PositionIndicatorsPanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var positionIndicators = attributes.positionIndicators;
  return Object(react["createElement"])(position_indicators_panel_PanelBody, {
    title: position_indicators_panel_('Position Indicators', '__plugin_txtd'),
    initialOpen: false
  }, Object(react["createElement"])(position_indicators_panel_ToggleControl, {
    label: position_indicators_panel_('Enable Position Indicators', '__plugin_txtd'),
    checked: positionIndicators,
    onChange: function onChange(positionIndicators) {
      setAttributes({
        positionIndicators: positionIndicators
      });
    }
  }));
}

/* harmony default export */ var position_indicators_panel = (PositionIndicatorsPanel);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(17);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(18);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(11);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./src/components/with-parallax/util.js



function userPrefersReducedMotion() {
  var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return !!mediaQuery.matches;
}

var getIntermediateFocalPoint = function getIntermediateFocalPoint(focalPoint1, focalPoint2, progress) {
  if (!focalPoint1 && !focalPoint2) {
    return {
      x: 0.5,
      y: 0.5
    };
  }

  if (!focalPoint1) {
    return focalPoint2;
  }

  if (!focalPoint2) {
    return focalPoint1;
  }

  return {
    x: parseFloat(focalPoint1.x) + (parseFloat(focalPoint2.x) - parseFloat(focalPoint1.x)) * progress,
    y: parseFloat(focalPoint1.y) + (parseFloat(focalPoint2.y) - parseFloat(focalPoint1.y)) * progress
  };
};
var getStyles = function getStyles(config) {
  var props = getProps(config);
  var styles = getStylesFromProps(props);
  return styles;
};
var getStylesFromProps = function getStylesFromProps(props) {
  var parallaxAmount = props.parallaxAmount,
      width = props.width,
      height = props.height,
      moveX = props.moveX,
      moveY = props.moveY,
      offsetX = props.offsetX,
      offsetY = props.offsetY,
      scale = props.scale,
      focalPoint = props.focalPoint,
      containerBox = props.containerBox;
  return {
    width: width || '',
    height: height || '',
    minHeight: 0,
    maxWidth: 'none',
    transform: "translate(".concat(moveX, ",").concat(moveY * parallaxAmount, "px) translateX(").concat(offsetX, ") translateY(").concat(offsetY, "px) scale(").concat(scale, ")"),
    objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
    transformOrigin: focalPoint.x * 100 + '% 50%'
  };
};

function getIntermediateValue(initialValue, finalValue, progress) {
  return initialValue + (finalValue - initialValue) * progress;
}

function getScales(config) {
  var scrollingEffect = config.scrollingEffect,
      initialBackgroundScale = config.initialBackgroundScale,
      finalBackgroundScale = config.finalBackgroundScale,
      progress = config.progress;
  initialBackgroundScale = initialBackgroundScale || 1;

  if (scrollingEffect === 'parallax') {
    finalBackgroundScale = initialBackgroundScale;
  }

  var maxScale = Math.max(initialBackgroundScale, finalBackgroundScale);
  initialBackgroundScale = initialBackgroundScale / maxScale;
  finalBackgroundScale = finalBackgroundScale / maxScale;

  if (userPrefersReducedMotion()) {
    return {
      maxScale: 1,
      newScale: 1
    };
  }

  return {
    maxScale: maxScale,
    newScale: getIntermediateValue(initialBackgroundScale, finalBackgroundScale, progress)
  };
}

function getFocalPoint(config) {
  var scrollingEffect = config.scrollingEffect,
      focalPoint = config.focalPoint,
      finalFocalPoint = config.finalFocalPoint,
      progress = config.progress;

  if (!focalPoint) {
    focalPoint = {
      x: 0.5,
      y: 0.5
    };
  }

  if (scrollingEffect !== 'doppler') {
    return focalPoint;
  }

  return getIntermediateFocalPoint(focalPoint, finalFocalPoint, progress);
}

function getNewImageHeight(config, parallaxAmount) {
  var scrollContainerHeight = config.scrollContainerHeight,
      containerHeight = config.containerHeight;
  return containerHeight + (scrollContainerHeight - containerHeight) * parallaxAmount;
}

var getProps = function getProps(config, fixed) {
  var distance = config.distance,
      progress = config.progress,
      smoothStart = config.smoothStart,
      smoothEnd = config.smoothEnd,
      scrollingEffect = config.scrollingEffect,
      focalPoint = config.focalPoint,
      finalFocalPoint = config.finalFocalPoint,
      initialBackgroundScale = config.initialBackgroundScale,
      finalBackgroundScale = config.finalBackgroundScale,
      container = config.container,
      containerBox = config.containerBox,
      containerWidth = config.containerWidth,
      containerHeight = config.containerHeight,
      scrollContainer = config.scrollContainer,
      scrollContainerBox = config.scrollContainerBox,
      scrollContainerHeight = config.scrollContainerHeight;
  var newFocalPoint = getFocalPoint(config);

  if (scrollingEffect === 'static') {
    return {
      width: containerWidth,
      height: containerHeight,
      scale: initialBackgroundScale || 1,
      moveX: 0,
      moveY: 0,
      offsetX: 0,
      offsetY: 0,
      parallaxAmount: 0,
      focalPoint: newFocalPoint
    };
  }

  var parallaxAmount = userPrefersReducedMotion() ? 0 : scrollingEffect === 'parallax' ? 0.75 : 1;

  var _getScales = getScales(config),
      maxScale = _getScales.maxScale,
      newScale = _getScales.newScale;

  var newImageHeight = getNewImageHeight(config, parallaxAmount); // keep in sync with scroll

  var moveY = scrollContainerBox.top - containerBox.top;

  if (!smoothStart) {
    if (!!fixed && containerBox.top < 0) {
      moveY = scrollContainerBox.top;
    }

    if (!fixed && 0 > scrollContainerBox.top - containerBox.top) {
      moveY = 0;
    }
  }

  if (!smoothEnd) {
    if (scrollContainerBox.top - containerBox.top > containerHeight - scrollContainerHeight) {
      if (!!fixed) {
        moveY = scrollContainerBox.top - containerBox.top - containerHeight + scrollContainerHeight;
      } else {
        moveY = containerHeight - scrollContainerHeight;
      }
    }
  } // align top


  var offsetY = newImageHeight * maxScale * (newScale - 1) * 0.5; // position according to focalPoint

  offsetY += newImageHeight * (1 - maxScale * newScale) * newFocalPoint.y;
  return {
    distance: distance,
    parallaxAmount: parallaxAmount,
    progress: progress,
    width: containerWidth * maxScale,
    height: newImageHeight * maxScale,
    moveX: "".concat(fixed ? containerBox.left - scrollContainerBox.left : 0, "px"),
    moveY: moveY,
    offsetX: (1 / maxScale - 1) * newFocalPoint.x * 100 + '%',
    offsetY: offsetY,
    scale: newScale,
    focalPoint: newFocalPoint
  };
};
var getState = function getState(container, config) {
  if (!container || !config) {
    return {};
  }

  var followThroughStart = config.followThroughStart,
      followThroughEnd = config.followThroughEnd,
      scrollingEffect = config.scrollingEffect,
      scrollContainerHeight = config.scrollContainerHeight,
      scrollContainerBox = config.scrollContainerBox;
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var containerBox = container.getBoundingClientRect();
  var smoothStart = followThroughStart || scrollingEffect === 'parallax';
  var smoothEnd = followThroughEnd || scrollingEffect === 'parallax';
  var current = scrollContainerBox.top - containerBox.top;
  var distance = containerHeight - scrollContainerHeight;

  if (smoothStart) {
    current += scrollContainerHeight;
    distance += scrollContainerHeight;
  }

  if (smoothEnd) {
    distance += scrollContainerHeight;
  }

  var progress = distance <= 0 ? 0.5 : current / distance;

  if (!smoothStart) {
    progress = Math.max(0, progress);
  }

  if (!smoothEnd) {
    progress = Math.min(1, progress);
  }

  if (userPrefersReducedMotion()) {
    progress = 0.5;
  }

  return {
    progress: progress,
    distance: distance,
    smoothStart: smoothStart,
    smoothEnd: smoothEnd,
    containerBox: containerBox,
    containerHeight: containerHeight,
    containerWidth: containerWidth,
    scrollContainerHeight: scrollContainerHeight,
    scrollContainerBox: scrollContainerBox
  };
};
var util_parallaxInit = function parallaxInit($blocks, foregroundSelector) {
  var frameRendered = false;
  $blocks.each(function (i, container) {
    var $container = external_jQuery_default()(container);
    var followThroughStart = !!$container.data('smooth-start');
    var followThroughEnd = !!$container.data('smooth-end');
    var scrollingEffect = $container.data('scrolling-effect');
    var focalPoint = $container.data('focal-point');
    var finalFocalPoint = $container.data('final-focal-point');
    var initialBackgroundScale = $container.data('initial-background-scale');
    var finalBackgroundScale = $container.data('final-background-scale');
    var scrollContainerHeight = window.innerHeight;
    var scrollContainerBox = {
      top: 0,
      left: 0
    };
    var config = {
      followThroughStart: followThroughStart,
      followThroughEnd: followThroughEnd,
      scrollingEffect: scrollingEffect,
      scrollContainerHeight: scrollContainerHeight,
      scrollContainerBox: scrollContainerBox,
      focalPoint: focalPoint,
      finalFocalPoint: finalFocalPoint,
      initialBackgroundScale: initialBackgroundScale,
      finalBackgroundScale: finalBackgroundScale
    };
    $container.data({
      state: getState(container, config),
      config: config
    });
    var $mask = $container.find('.novablocks-mask');
    var $parallax = $container.find('.novablocks-parallax');
    $container.data('mask', $mask);
    $container.data('parallax', $parallax);

    function parallaxUpdateState() {
      var state = getState(container, config);
      $container.data('state', state);
      frameRendered = false;
    }

    external_jQuery_default()(window).on('scroll', parallaxUpdateState);
    external_jQuery_default()(window).on('resize', debounce(parallaxUpdateState, 100));
  });

  function parallaxUpdateLoop() {
    if (!frameRendered) {
      $blocks.each(function (i, obj) {
        var $container = external_jQuery_default()(obj);
        var $background = $container.data('parallax');
        var $foreground = $background.find('.novablocks-foreground');
        var state = $container.data('state');
        var config = $container.data('config');
        config = Object.assign({}, state, config);
        var props = getProps(config, true);
        $foreground.css('transform', "translate3d(0,".concat(-props.moveY * props.parallaxAmount, "px,0)")); // because of fixed positioning

        props.moveY = -1 * props.moveY;

        if (0 < props.progress && props.progress < 1) {
          props.parallaxAmount = 1 - props.parallaxAmount;
        }

        var styles = getStylesFromProps(props);
        var _config = config,
            containerWidth = _config.containerWidth,
            containerHeight = _config.containerHeight;
        $container.data('parallax').css(styles);
        $container.data('mask').css({
          clip: "rect(0 ".concat(containerWidth, "px ").concat(containerHeight, "px 0)")
        });
      });
      frameRendered = true;
    }

    requestAnimationFrame(parallaxUpdateLoop);
  }

  requestAnimationFrame(parallaxUpdateLoop);
};
// CONCATENATED MODULE: ./src/utils.js


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
var utils_withFirstBlockConditions = function withFirstBlockConditions(Component) {
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
    return show && Object(react["createElement"])(Component, props);
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
var findParents = function findParents(target, query) {
  var parents = [];

  function traverse(item) {
    var parent = item.parentNode;

    if (parent instanceof HTMLElement) {
      if (parent.matches(query)) {
        parents.push(parent);
      }

      traverse(parent);
    }
  }

  traverse(target);
  return parents;
}; // https://stackoverflow.com/a/2450976

var shuffleArray = function shuffleArray(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // eslint-disable-next-line no-restricted-syntax
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
var defaultSnapValues = {
  x: [0, 0.5, 1],
  y: [0, 0.5, 1]
};
var maybeSnapFocalPoint = function maybeSnapFocalPoint(focalPoint) {
  var snapValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSnapValues;
  var x = parseFloat(focalPoint.x);
  var y = parseFloat(focalPoint.y);
  var thereshold = 0.05;
  snapValues.x.forEach(function (snapValue) {
    if (snapValue - thereshold < x && x < snapValue + thereshold) {
      x = snapValue;
    }
  });
  snapValues.y.forEach(function (snapValue) {
    if (snapValue - thereshold < y && y < snapValue + thereshold) {
      y = snapValue;
    }
  });
  return {
    x: x,
    y: y
  };
};
var getSnapClassname = function getSnapClassname(focalPoint) {
  var classNames = [];

  if (defaultSnapValues.x.includes(parseFloat(focalPoint.x))) {
    classNames.push('is-snapped-x');
  }

  if (defaultSnapValues.y.includes(parseFloat(focalPoint.y))) {
    classNames.push('is-snapped-y');
  }

  return classNames.join(' ');
};
// CONCATENATED MODULE: ./src/components/scrolling-effect-controls/index.js




/**
 * WordPress dependencies
 */
var scrolling_effect_controls_ = wp.i18n.__;
var scrolling_effect_controls_wp$components = wp.components,
    scrolling_effect_controls_Button = scrolling_effect_controls_wp$components.Button,
    FocalPointPicker = scrolling_effect_controls_wp$components.FocalPointPicker,
    scrolling_effect_controls_PanelBody = scrolling_effect_controls_wp$components.PanelBody,
    scrolling_effect_controls_RadioControl = scrolling_effect_controls_wp$components.RadioControl,
    scrolling_effect_controls_RangeControl = scrolling_effect_controls_wp$components.RangeControl,
    scrolling_effect_controls_ToggleControl = scrolling_effect_controls_wp$components.ToggleControl;
var scrolling_effect_controls_Fragment = wp.element.Fragment;


var scrolling_effect_controls_ScrollingEffectControls = function ScrollingEffectControls(props) {
  objectDestructuringEmpty_default()(props.attributes);

  return Object(react["createElement"])(scrolling_effect_controls_Fragment, null, Object(react["createElement"])(scrolling_effect_controls_ScrollingEffectPanel, props, Object(react["createElement"])(scrolling_effect_controls_DopplerPresetsPanel, props), Object(react["createElement"])(scrolling_effect_controls_StartFramePanel, props), Object(react["createElement"])(scrolling_effect_controls_EndFramePanel, props)));
};

var scrolling_effect_controls_ScrollingEffectPanel = function ScrollingEffectPanel(props) {
  var setAttributes = props.setAttributes,
      _props$attributes = props.attributes,
      scrollingEffect = _props$attributes.scrollingEffect,
      motionPreset = _props$attributes.motionPreset,
      settings = props.settings,
      name = props.name;
  var motionPresetOptions = settings.motionPresetOptions,
      doppler = settings.theme_support.doppler;

  var scrollingEffectOptions = toConsumableArray_default()(settings.scrollingEffectOptions);

  if (!!doppler && doppler.includes(name)) {
    scrollingEffectOptions.push({
      label: scrolling_effect_controls_('Doppler by Pixelgrade ®'),
      value: 'doppler'
    });
  }

  return Object(react["createElement"])(scrolling_effect_controls_PanelBody, {
    title: "Scrolling Effect:",
    className: 'novablocks-scrolling-effect-panel'
  }, Object(react["createElement"])(scrolling_effect_controls_RadioControl, {
    selected: scrollingEffect,
    className: 'novablocks-scrolling-effect',
    onChange: function onChange(scrollingEffect) {
      var newAttributes = {
        scrollingEffect: scrollingEffect
      };

      if (scrollingEffect === 'doppler' && motionPreset !== 'custom') {
        var newOption = motionPresetOptions.find(function (option) {
          return motionPreset === option.value;
        });
        newAttributes = Object.assign(newOption.preset, newAttributes);
        newAttributes.minHeightFallback = 75;
      }

      setAttributes(newAttributes);
    },
    options: scrollingEffectOptions
  }), props.children);
};

var scrolling_effect_controls_DopplerPresetsPanel = function DopplerPresetsPanel(props) {
  var _props$attributes2 = props.attributes,
      motionPreset = _props$attributes2.motionPreset,
      scrollingEffect = _props$attributes2.scrollingEffect,
      setAttributes = props.setAttributes,
      motionPresetOptions = props.settings.motionPresetOptions,
      isScrolling = props.isScrolling,
      previewScrolling = props.previewScrolling;

  if (scrollingEffect !== 'doppler') {
    return false;
  }

  return Object(react["createElement"])(scrolling_effect_controls_PanelBody, {
    title: "Doppler Scrolling Settings"
  }, Object(react["createElement"])(scrolling_effect_controls_RadioControl, {
    label: 'Motion Presets',
    selected: motionPreset,
    onChange: function onChange(motionPreset) {
      var newAttributes = {
        motionPreset: motionPreset
      };
      var newOption = motionPresetOptions.find(function (option) {
        return motionPreset === option.value;
      });

      if (newOption && newOption.preset) {
        newAttributes = Object.assign(newOption.preset, newAttributes);
      }

      setAttributes(newAttributes);

      if ('custom' !== motionPreset && !isScrolling) {//						previewScrolling();
      }
    },
    options: motionPresetOptions
  }), Object(react["createElement"])("div", null, Object(react["createElement"])(scrolling_effect_controls_Button, {
    isLarge: true,
    isPrimary: true,
    disabled: !!isScrolling,
    onClick: previewScrolling
  }, "Preview Scrolling")));
};

var getParallaxFocalPointImage = function getParallaxFocalPointImage(media) {
  var mediaType = media ? media.type : false;
  var parallaxFocalPointImage = false;

  if (mediaType === 'image') {
    parallaxFocalPointImage = media.sizes.full;
  }

  if (mediaType === 'video') {
    parallaxFocalPointImage = {
      url: '//cloud.pixelgrade.com/wp-content/uploads/2020/01/Screenshot-2020-01-09-at-15.59.37.png',
      width: 218,
      height: 170
    };
  }

  return parallaxFocalPointImage;
};

var scrolling_effect_controls_StartFramePanel = function StartFramePanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var media = attributes.media,
      motionPreset = attributes.motionPreset,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint,
      initialBackgroundScale = attributes.initialBackgroundScale,
      followThroughStart = attributes.followThroughStart,
      scrollingEffect = attributes.scrollingEffect;
  var parallaxFocalPointImage = getParallaxFocalPointImage(media);
  var isDoppler = scrollingEffect === 'doppler';

  if (!parallaxFocalPointImage) {
    return false;
  }

  var staticPanelTitle = scrolling_effect_controls_('Static Scrolling Settings', '__plugin_txtd');

  var parallaxPanelTitle = scrolling_effect_controls_('Parallax Scrolling Settings', '__plugin_txtd');

  var dopplerPanelTitle = scrolling_effect_controls_('Start Frame', '__plugin_txtd');

  var panelTitle = staticPanelTitle;

  if ('parallax' === scrollingEffect) {
    panelTitle = parallaxPanelTitle;
  }

  if (isDoppler) {
    panelTitle = dopplerPanelTitle;
  }

  var classNames = ['novablocks-focal-point-picker', "novablocks-focal-point-picker--".concat(scrollingEffect), "novablocks-focal-point-picker--start", getSnapClassname(focalPoint)];
  var className = classNames.join(' ');
  return Object(react["createElement"])(scrolling_effect_controls_PanelBody, {
    title: panelTitle,
    className: className
  }, Object(react["createElement"])(FocalPointPicker, {
    label: 'Focal Point',
    url: parallaxFocalPointImage.url,
    dimensions: {
      width: parallaxFocalPointImage.width,
      height: parallaxFocalPointImage.height
    },
    value: focalPoint,
    onChange: function onChange(focalPoint) {
      setAttributes({
        motionPreset: 'custom',
        focalPoint: maybeSnapFocalPoint(focalPoint),
        finalFocalPoint: maybeSnapFocalPoint({
          x: focalPoint.x,
          y: finalFocalPoint.y
        })
      });
    }
  }), Object(react["createElement"])(scrolling_effect_controls_RangeControl, {
    label: 'Zoom',
    value: initialBackgroundScale,
    onChange: function onChange(initialBackgroundScale) {
      setAttributes({
        motionPreset: 'custom',
        initialBackgroundScale: initialBackgroundScale
      });
    },
    min: 1,
    max: 2,
    step: 0.01
  }), scrollingEffect === 'doppler' && Object(react["createElement"])(scrolling_effect_controls_ToggleControl, {
    label: scrolling_effect_controls_('Smooth start transition', '__plugin_txtd'),
    checked: followThroughStart,
    onChange: function onChange() {
      return setAttributes({
        followThroughStart: !followThroughStart
      });
    }
  }));
};

var scrolling_effect_controls_EndFramePanel = function EndFramePanel(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var media = attributes.media,
      focalPoint = attributes.focalPoint,
      finalFocalPoint = attributes.finalFocalPoint,
      finalBackgroundScale = attributes.finalBackgroundScale,
      followThroughEnd = attributes.followThroughEnd,
      scrollingEffect = attributes.scrollingEffect;
  var parallaxFocalPointImage = getParallaxFocalPointImage(media);

  if (!parallaxFocalPointImage || scrollingEffect !== 'doppler') {
    return false;
  }

  var classNames = ['novablocks-focal-point-picker', "novablocks-focal-point-picker--".concat(scrollingEffect), 'novablocks-focal-point-picker--end', getSnapClassname(focalPoint)];
  var className = classNames.join(' ');
  return Object(react["createElement"])(scrolling_effect_controls_PanelBody, {
    title: scrolling_effect_controls_('End Frame', '__plugin_txtd'),
    className: className
  }, Object(react["createElement"])(FocalPointPicker, {
    label: 'Focal Point',
    url: parallaxFocalPointImage.url,
    dimensions: {
      width: parallaxFocalPointImage.width,
      height: parallaxFocalPointImage.height
    },
    value: finalFocalPoint,
    onChange: function onChange(finalFocalPoint) {
      setAttributes({
        motionPreset: 'custom',
        focalPoint: maybeSnapFocalPoint({
          x: finalFocalPoint.x,
          y: focalPoint.y
        }),
        finalFocalPoint: maybeSnapFocalPoint(finalFocalPoint)
      });
    },
    disabled: true
  }), Object(react["createElement"])(scrolling_effect_controls_RangeControl, {
    label: 'Zoom',
    value: finalBackgroundScale,
    onChange: function onChange(finalBackgroundScale) {
      setAttributes({
        motionPreset: 'custom',
        finalBackgroundScale: finalBackgroundScale
      });
    },
    min: 1,
    max: 2,
    step: 0.01
  }), Object(react["createElement"])(scrolling_effect_controls_ToggleControl, {
    label: scrolling_effect_controls_('Smooth end transition', '__plugin_txtd'),
    checked: followThroughEnd,
    onChange: function onChange() {
      return setAttributes({
        motionPreset: 'custom',
        followThroughEnd: !followThroughEnd
      });
    }
  }));
};

/* harmony default export */ var scrolling_effect_controls = (scrolling_effect_controls_ScrollingEffectControls);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/readOnlyError.js
var readOnlyError = __webpack_require__(14);
var readOnlyError_default = /*#__PURE__*/__webpack_require__.n(readOnlyError);

// CONCATENATED MODULE: ./src/easing.js

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
var easing_easeInOutBack = function easeInOutBack(x) {
  var s = 1.70158;
  return (x /= 0.5) < 1 ? 0.5 * (x * x * (((s *= (readOnlyError_default()("s"), 1.525)) + 1) * x - s)) : 0.5 * ((x -= 2) * x * (((s *= (readOnlyError_default()("s"), 1.525)) + 1) * x + s) + 2);
};
// CONCATENATED MODULE: ./src/components/with-parallax/index.js













/**
 * WordPress dependencies
 */

var with_parallax_wp$element = wp.element,
    with_parallax_Component = with_parallax_wp$element.Component,
    with_parallax_Fragment = with_parallax_wp$element.Fragment;
var with_parallax_InspectorControls = wp.blockEditor.InspectorControls;
var with_parallax_compose = wp.compose.compose;
var ParallaxContext = Object(react["createContext"])();

var with_parallax_withParallaxProvider = function withParallaxProvider(WrappedComponent) {
  return (/*#__PURE__*/function (_Component) {
      inherits_default()(_class, _Component);

      function _class() {
        var _this;

        classCallCheck_default()(this, _class);

        _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class).apply(this, arguments));
        _this.state = {
          scrollContainerWidth: 0,
          scrollContainerHeight: 0,
          progress: 0.5
        };
        _this.updateHandler = _this.updateState.bind(assertThisInitialized_default()(_this));
        _this.scrollContainer = _this.getScrollContainer();
        return _this;
      }

      createClass_default()(_class, [{
        key: "getScrollContainer",
        value: function getScrollContainer() {
          return document.querySelector('.edit-post-layout__content') || document.querySelector('.edit-post-editor-regions__content') || document.querySelector('.block-editor-editor-skeleton__content');
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener('resize', this.updateHandler);
          this.createBlockObservers();
          this.unsubscribeUpdate = wp.data.subscribe(this.updateHandler);

          if (this.scrollContainer) {
            this.scrollContainer.addEventListener('scroll', this.updateHandler);
          }

          this.updateState();
        }
      }, {
        key: "createBlockObservers",
        value: function createBlockObservers() {
          var _this2 = this;

          this.observers = [];
          findParents(this.container, '.wp-block').map(function (block) {
            if (window.MutationObserver) {
              var mutationObserver = new MutationObserver(function (movements) {
                movements.forEach(function (movement) {
                  if ('style' === movement.attributeName) {
                    if (movement.oldValue && movement.oldValue.includes('transform: translate3d')) {
                      _this2.updateState();
                    }
                  }
                });
              });
              mutationObserver.observe(block, {
                attributes: true,
                attributeOldValue: true,
                childList: false,
                subtree: false
              });

              _this2.observers.push(mutationObserver);
            }

            if (window.ResizeObserver) {
              var resizeObserver = new ResizeObserver(function () {
                _this2.updateState();
              });
              resizeObserver.observe(block);

              _this2.observers.push(resizeObserver);
            }
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.updateHandler);
          this.observers.forEach(function (observer) {
            return observer.disconnect();
          });
          this.unsubscribeUpdate();

          if (this.scrollContainer) {
            this.scrollContainer.removeEventListener('scroll', this.updateHandler);
          }
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var container = this.container;
          var scrollContainerHeight = this.scrollContainer.offsetHeight;
          var scrollContainerBox = this.scrollContainer.getBoundingClientRect();
          var config = Object.assign({}, this.props.attributes, {
            scrollContainerBox: scrollContainerBox,
            scrollContainerHeight: scrollContainerHeight
          });
          this.setState(getState(container, config));
        }
      }, {
        key: "getElementStyle",
        value: function getElementStyle() {
          var attributes = this.props.attributes;
          var scrollingEffect = attributes.scrollingEffect;

          if (!this.scrollContainer || !this.container) {
            return {};
          }

          var state = getState(this.container, Object.assign({}, this.state, attributes));
          var config = Object.assign({}, state, attributes);
          var styles = getStyles(config);
          return styles;
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          return Object(react["createElement"])(with_parallax_Fragment, null, Object(react["createElement"])("div", {
            ref: function ref(el) {
              return _this3.container = el;
            }
          }, Object(react["createElement"])(ParallaxContext.Provider, {
            value: {
              style: this.getElementStyle(),
              state: this.state,
              container: this.container,
              scrollContainer: this.scrollContainer
            }
          }, Object(react["createElement"])(WrappedComponent, this.props))));
        }
      }]);

      return _class;
    }(with_parallax_Component)
  );
};

var with_parallax_withParallaxControls = function withParallaxControls(WrappedComponent) {
  return (/*#__PURE__*/function (_Component2) {
      inherits_default()(_class2, _Component2);

      function _class2() {
        var _this4;

        classCallCheck_default()(this, _class2);

        _this4 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class2).apply(this, arguments));
        _this4.state = {
          isScrolling: false
        };
        _this4.previewScrolling = _this4.previewScrolling.bind(assertThisInitialized_default()(_this4));
        return _this4;
      }

      createClass_default()(_class2, [{
        key: "scrollFromTo",
        value: function scrollFromTo(start, end) {
          var _this5 = this;

          var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x) {
            return x;
          };
          var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
          var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1000;
          var scrollContainer = this.props.parallax.scrollContainer;
          var length = end - start;
          var duration = Math.abs(length) * 1000 / speed;
          var startTime = Date.now();

          function updateScrollTopLoop() {
            var currentTime = Date.now();
            var timePassed = currentTime - startTime;
            var progress = timePassed / duration;
            var newScrollTop = start + length * easing(progress);
            scrollContainer.scrollTop = newScrollTop;
          }

          scrollContainer.style.pointerEvents = 'none';
          var interval = setInterval(updateScrollTopLoop, 0);
          this.setState({
            isScrolling: true
          });
          setTimeout(function () {
            clearInterval(interval);

            _this5.setState({
              isScrolling: false
            });

            scrollContainer.scrollTop = start + length;
            scrollContainer.style.removeProperty('pointer-events');

            if (typeof callback === "function") {
              callback();
            }
          }, duration);
        }
      }, {
        key: "previewScrolling",
        value: function previewScrolling() {
          var _this6 = this;

          var _this$props$parallax = this.props.parallax,
              scrollContainer = _this$props$parallax.scrollContainer,
              container = _this$props$parallax.container,
              _this$props$parallax$ = _this$props$parallax.state,
              containerBox = _this$props$parallax$.containerBox,
              containerHeight = _this$props$parallax$.containerHeight,
              scrollContainerHeight = _this$props$parallax$.scrollContainerHeight,
              scrollContainerBox = _this$props$parallax$.scrollContainerBox;

          if (!container || !scrollContainer) {
            return;
          }

          var scrollTop = scrollContainer.scrollTop;
          var start = scrollTop + containerBox.top - scrollContainerBox.top - scrollContainerHeight;
          var length = containerHeight + scrollContainerHeight;

          if (start < 0) {
            length = length + start;
            start = 0;
          }

          var maxScroll = scrollContainer.scrollHeight - scrollContainer.offsetHeight;
          var distanceToBottom = maxScroll - (start + length);

          if (distanceToBottom < 0) {
            length = length + distanceToBottom;
          }

          var end = start + length;
          this.scrollFromTo(scrollTop, start, easeOutQuart, function () {
            _this6.scrollFromTo(start, end, easeInOutCubic, function () {}, 1000);
          }, 3000);
        }
      }, {
        key: "render",
        value: function render() {
          return Object(react["createElement"])(with_parallax_Fragment, null, Object(react["createElement"])(with_parallax_InspectorControls, null, Object(react["createElement"])(scrolling_effect_controls, extends_default()({}, this.props, {
            isScrolling: this.state.isScrolling,
            previewScrolling: this.previewScrolling
          }))), Object(react["createElement"])(WrappedComponent, this.props));
        }
      }]);

      return _class2;
    }(with_parallax_Component)
  );
};

var with_parallax_withParallaxContext = function withParallaxContext(WrappedComponent) {
  return (/*#__PURE__*/function (_Component3) {
      inherits_default()(_class3, _Component3);

      function _class3() {
        classCallCheck_default()(this, _class3);

        return possibleConstructorReturn_default()(this, getPrototypeOf_default()(_class3).apply(this, arguments));
      }

      createClass_default()(_class3, [{
        key: "render",
        value: function render() {
          var _this7 = this;

          return Object(react["createElement"])(ParallaxContext.Consumer, null, function (context) {
            return Object(react["createElement"])(WrappedComponent, extends_default()({
              parallax: context
            }, _this7.props));
          });
        }
      }]);

      return _class3;
    }(with_parallax_Component)
  );
};

var withParallax = with_parallax_compose([with_parallax_withParallaxProvider, with_parallax_withParallaxContext, with_parallax_withParallaxControls]);

/* harmony default export */ var with_parallax = (withParallax);
// CONCATENATED MODULE: ./src/components/gallery-options/index.js








function gallery_options_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function gallery_options_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gallery_options_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gallery_options_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var gallery_options_ = wp.i18n.__;
var gallery_options_Component = wp.element.Component;
var MediaPlaceholder = wp.blockEditor.MediaPlaceholder;
var ALLOWED_MEDIA_TYPES = ['image'];

var gallery_options_GalleryPlaceholder = function GalleryPlaceholder(props) {
  var galleryImages = props.attributes.galleryImages;
  var hasImages = !!galleryImages.length;

  function onChangeGallery(newGalleryImages) {
    var promises = newGalleryImages.map(function (image, index) {
      return wp.apiRequest({
        path: '/wp/v2/media/' + image.id
      }).then(function (newImage) {
        newGalleryImages[index] = gallery_options_objectSpread({}, newImage, {}, image);
      });
    });
    Promise.all(promises).then(function () {
      props.setAttributes({
        galleryImages: newGalleryImages.filter(function (image) {
          return !!image.id && !!image.sizes && !!image.sizes.large && !!image.sizes.large.url;
        })
      });
    });
  }

  return Object(react["createElement"])(MediaPlaceholder, {
    addToGallery: hasImages,
    className: "",
    labels: {
      title: '',
      instructions: gallery_options_('Drag images, upload new ones or select files from your library.', '__plugin_txtd')
    },
    onSelect: onChangeGallery,
    accept: "image/*",
    allowedTypes: ALLOWED_MEDIA_TYPES,
    multiple: true,
    value: hasImages ? galleryImages : undefined
  });
};

var gallery_options_GalleryPreview = /*#__PURE__*/function (_Component) {
  inherits_default()(GalleryPreview, _Component);

  function GalleryPreview() {
    classCallCheck_default()(this, GalleryPreview);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(GalleryPreview).apply(this, arguments));
  }

  createClass_default()(GalleryPreview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          galleryImages = _this$props.galleryImages,
          selected = _this$props.selected,
          onSelectImage = _this$props.onSelectImage;
      return Object(react["createElement"])("ul", {
        className: "novablocks-slideshow__gallery-edit"
      }, galleryImages.map(function (img, index) {
        var classes = ['novablocks-slideshow__gallery-item'];

        if (selected === index) {
          classes.push('novablocks-slideshow__gallery-item--active');
        }

        return Object(react["createElement"])("li", {
          key: img.id || img.url,
          onClick: function onClick() {
            onSelectImage(index);
          }
        }, Object(react["createElement"])("div", {
          className: classes.join(' ')
        }, Object(react["createElement"])("img", {
          src: img.sizes.thumbnail.url,
          alt: ""
        })));
      }));
    }
  }]);

  return GalleryPreview;
}(gallery_options_Component);


// CONCATENATED MODULE: ./src/components/color-controls/index.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var color_controls_ = wp.i18n.__;
var color_controls_Fragment = wp.element.Fragment;
var color_controls_wp$components = wp.components,
    ColorPalette = color_controls_wp$components.ColorPalette,
    Dropdown = color_controls_wp$components.Dropdown,
    IconButton = color_controls_wp$components.IconButton,
    color_controls_RadioControl = color_controls_wp$components.RadioControl,
    color_controls_RangeControl = color_controls_wp$components.RangeControl,
    Toolbar = color_controls_wp$components.Toolbar,
    color_controls_BaseControl = color_controls_wp$components.BaseControl;
var PanelColorSettings = wp.blockEditor.PanelColorSettings;
var colors = [{
  name: color_controls_('Dark', '__plugin_txtd'),
  color: '#000'
}, {
  name: color_controls_('Light', '__plugin_txtd'),
  color: '#FFF'
}];

var color_controls_OverlayControls = function OverlayControls(props) {
  var _props$attributes = props.attributes,
      overlayFilterStyle = _props$attributes.overlayFilterStyle,
      overlayFilterStrength = _props$attributes.overlayFilterStrength,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(color_controls_Fragment, null, Object(react["createElement"])(color_controls_RadioControl, {
    label: color_controls_('Overlay Filter Style', '__plugin_txtd'),
    selected: overlayFilterStyle,
    options: [{
      label: color_controls_('None', '__plugin_txtd'),
      value: 'none'
    }, {
      label: color_controls_('Dark', '__plugin_txtd'),
      value: 'dark'
    }, {
      label: color_controls_('Light', '__plugin_txtd'),
      value: 'light'
    }],
    onChange: function onChange(nextOverlayFilterStyle) {
      return setAttributes({
        overlayFilterStyle: nextOverlayFilterStyle
      });
    }
  }), overlayFilterStyle !== 'none' && Object(react["createElement"])(color_controls_RangeControl, {
    label: color_controls_('Overlay Filter Strength', '__plugin_txtd'),
    value: overlayFilterStrength,
    onChange: function onChange(nextOverlayFilterStrength) {
      return setAttributes({
        overlayFilterStrength: nextOverlayFilterStrength
      });
    },
    min: 0,
    max: 100,
    step: 10
  }));
};

var color_controls_ColorControls = function ColorControls(props) {
  var contentColor = props.attributes.contentColor,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(color_controls_BaseControl, {
    label: color_controls_('Content Color', '__plugin_txtd')
  }, Object(react["createElement"])(ColorPalette, {
    className: "nova-hide-clear-color",
    value: contentColor,
    colors: colors,
    onChange: function onChange(nextContentColor) {
      return setAttributes({
        contentColor: nextContentColor
      });
    },
    disableCustomColors: true,
    clearable: false
  }));
};

var color_controls_ColorPanel = function ColorPanel(props) {
  var contentColor = props.attributes.contentColor,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(PanelColorSettings, {
    className: "nova-hide-clear-color",
    title: color_controls_('Color Settings', '__plugin_txtd'),
    colorSettings: [{
      value: contentColor,
      onChange: function onChange(nextContentColor) {
        return setAttributes({
          contentColor: nextContentColor
        });
      },
      label: color_controls_('Content Color', '__plugin_txtd')
    }],
    colors: colors,
    initialOpen: false
  }, Object(react["createElement"])(color_controls_OverlayControls, props));
};

var color_controls_ColorToolbar = function ColorToolbar(props) {
  return Object(react["createElement"])(Toolbar, {
    className: "pixelgrade-hero-block-toolbar"
  }, Object(react["createElement"])(Dropdown, {
    position: "bottom",
    className: "pixelgrade-hero-block-toolbar-dropdown",
    contentClassName: "components-nova--popover",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(react["createElement"])(IconButton, {
        onClick: onToggle,
        icon: invert,
        "aria-expanded": isOpen,
        label: color_controls_('Colors', '__plugin_txtd'),
        labelPosition: "bottom"
      });
    },
    focusOnMount: false,
    renderContent: function renderContent() {
      return Object(react["createElement"])(color_controls_Fragment, null, Object(react["createElement"])(color_controls_ColorControls, props), Object(react["createElement"])(color_controls_OverlayControls, props));
    }
  }));
};


// CONCATENATED MODULE: ./src/components/block-horizontal-alignment-toolbar/index.js




function block_horizontal_alignment_toolbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function block_horizontal_alignment_toolbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_horizontal_alignment_toolbar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_horizontal_alignment_toolbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var block_horizontal_alignment_toolbar_ = wp.i18n.__;
var block_horizontal_alignment_toolbar_Toolbar = wp.components.Toolbar;
var withViewportMatch = wp.viewport.withViewportMatch;
var block_horizontal_alignment_toolbar_withSelect = wp.data.withSelect;
var block_horizontal_alignment_toolbar_wp$compose = wp.compose,
    block_horizontal_alignment_toolbar_compose = block_horizontal_alignment_toolbar_wp$compose.compose,
    block_horizontal_alignment_toolbar_createHigherOrderComponent = block_horizontal_alignment_toolbar_wp$compose.createHigherOrderComponent;
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
    icon: alignTop,
    title: block_horizontal_alignment_toolbar_('Align Left', '__plugin_txtd')
  },
  center: {
    icon: alignCenter,
    title: block_horizontal_alignment_toolbar_('Align Middle', '__plugin_txtd')
  },
  right: {
    icon: alignBottom,
    title: block_horizontal_alignment_toolbar_('Align Right', '__plugin_txtd')
  }
};
var DEFAULT_CONTROLS = ['left', 'center', 'right'];
var DEFAULT_CONTROL = 'center';
function BlockHorizontalAlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? DEFAULT_CONTROLS : _ref$controls;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
  var defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[DEFAULT_CONTROL];
  return Object(react["createElement"])(block_horizontal_alignment_toolbar_Toolbar, {
    isCollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    controls: controls.map(function (control) {
      return block_horizontal_alignment_toolbar_objectSpread({}, BLOCK_ALIGNMENTS_CONTROLS[control], {
        isActive: value === control,
        onClick: applyOrUnset(control),
        className: 'pixelgrade-hero-horizontal-alignment-button'
      });
    })
  });
} // @todo remove function declaration and use core method when exposed through the api

var block_horizontal_alignment_toolbar_withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return block_horizontal_alignment_toolbar_createHigherOrderComponent(function (OriginalComponent) {
    return function (props) {
      return Object(react["createElement"])(Consumer, null, function (context) {
        return Object(react["createElement"])(OriginalComponent, extends_default()({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};

/* harmony default export */ var block_horizontal_alignment_toolbar = (block_horizontal_alignment_toolbar_compose(block_horizontal_alignment_toolbar_withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), withViewportMatch({
  isLargeViewport: 'medium'
}), block_horizontal_alignment_toolbar_withSelect(function (select, _ref3) {
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
// CONCATENATED MODULE: ./src/components/block-vertical-alignment-toolbar/index.js




function block_vertical_alignment_toolbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function block_vertical_alignment_toolbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_vertical_alignment_toolbar_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_vertical_alignment_toolbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var _x = wp.i18n._x;
var block_vertical_alignment_toolbar_Toolbar = wp.components.Toolbar;
var block_vertical_alignment_toolbar_withViewportMatch = wp.viewport.withViewportMatch;
var block_vertical_alignment_toolbar_withSelect = wp.data.withSelect;
var block_vertical_alignment_toolbar_wp$compose = wp.compose,
    block_vertical_alignment_toolbar_compose = block_vertical_alignment_toolbar_wp$compose.compose,
    block_vertical_alignment_toolbar_createHigherOrderComponent = block_vertical_alignment_toolbar_wp$compose.createHigherOrderComponent;
var block_vertical_alignment_toolbar_createContext = wp.element.createContext;

var components_block_vertical_alignment_toolbar_createContext = block_vertical_alignment_toolbar_createContext({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: function setFocusedElement() {},
  clientId: null
}),
    block_vertical_alignment_toolbar_Consumer = components_block_vertical_alignment_toolbar_createContext.Consumer;

var block_vertical_alignment_toolbar_BLOCK_ALIGNMENTS_CONTROLS = {
  top: {
    icon: alignTop,
    title: _x('Vertically Align Top', 'Block vertical alignment setting')
  },
  center: {
    icon: alignCenter,
    title: _x('Vertically Align Middle', 'Block vertical alignment setting')
  },
  bottom: {
    icon: alignBottom,
    title: _x('Vertically Align Bottom', 'Block vertical alignment setting')
  }
};
var block_vertical_alignment_toolbar_DEFAULT_CONTROLS = ['top', 'center', 'bottom'];
var block_vertical_alignment_toolbar_DEFAULT_CONTROL = 'top';
function BlockVerticalAlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? block_vertical_alignment_toolbar_DEFAULT_CONTROLS : _ref$controls;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var activeAlignment = block_vertical_alignment_toolbar_BLOCK_ALIGNMENTS_CONTROLS[value];
  var defaultAlignmentControl = block_vertical_alignment_toolbar_BLOCK_ALIGNMENTS_CONTROLS[block_vertical_alignment_toolbar_DEFAULT_CONTROL];
  return Object(react["createElement"])(block_vertical_alignment_toolbar_Toolbar, {
    isCollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon,
    label: _x('Change Alignment', 'Block vertical alignment setting label'),
    controls: controls.map(function (control) {
      return block_vertical_alignment_toolbar_objectSpread({}, block_vertical_alignment_toolbar_BLOCK_ALIGNMENTS_CONTROLS[control], {
        isActive: value === control,
        onClick: applyOrUnset(control)
      });
    })
  });
} // @todo remove function declaration and use core method when exposed through the api

var block_vertical_alignment_toolbar_withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return block_vertical_alignment_toolbar_createHigherOrderComponent(function (OriginalComponent) {
    return function (props) {
      return Object(react["createElement"])(block_vertical_alignment_toolbar_Consumer, null, function (context) {
        return Object(react["createElement"])(OriginalComponent, extends_default()({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};
/**
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-vertical-alignment-toolbar/README.md
 */


/* harmony default export */ var block_vertical_alignment_toolbar = (block_vertical_alignment_toolbar_compose(block_vertical_alignment_toolbar_withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), block_vertical_alignment_toolbar_withViewportMatch({
  isLargeViewport: 'medium'
}), block_vertical_alignment_toolbar_withSelect(function (select, _ref3) {
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
// CONCATENATED MODULE: ./src/components/alignment-controls/index.js


/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var alignment_controls_ = wp.i18n.__;
var alignment_controls_Fragment = wp.element.Fragment;
var alignment_controls_wp$components = wp.components,
    alignment_controls_Dropdown = alignment_controls_wp$components.Dropdown,
    alignment_controls_IconButton = alignment_controls_wp$components.IconButton,
    PanelRow = alignment_controls_wp$components.PanelRow,
    alignment_controls_Toolbar = alignment_controls_wp$components.Toolbar;

var alignment_controls_AlignmentToolbar = function AlignmentToolbar(props) {
  return Object(react["createElement"])(alignment_controls_Toolbar, {
    className: "pixelgrade-hero-block-toolbar"
  }, Object(react["createElement"])(alignment_controls_Dropdown, {
    position: "bottom",
    className: "pixelgrade-hero-block-toolbar-dropdown",
    contentClassName: "components-nova--popover",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(react["createElement"])(alignment_controls_IconButton, {
        onClick: onToggle,
        icon: alignment,
        "aria-expanded": isOpen,
        label: alignment_controls_('Content Position', '__plugin_txtd'),
        labelPosition: "bottom"
      });
    },
    focusOnMount: false,
    renderContent: function renderContent() {
      return Object(react["createElement"])(alignment_controls_AlignmentControls, props);
    }
  }));
};

var alignment_controls_AlignmentControls = function AlignmentControls(props) {
  var _props$attributes = props.attributes,
      horizontalAlignment = _props$attributes.horizontalAlignment,
      verticalAlignment = _props$attributes.verticalAlignment,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(alignment_controls_Fragment, null, Object(react["createElement"])(PanelRow, null, Object(react["createElement"])("span", null, alignment_controls_('Horizontal', '__plugin_txtd')), Object(react["createElement"])(block_horizontal_alignment_toolbar, {
    value: horizontalAlignment,
    onChange: function onChange(nextHorizontalAlignment) {
      wp.data.select('core/block-editor').getSelectedBlock().innerBlocks.map(function (block) {
        wp.data.dispatch('core/block-editor').updateBlockAttributes(block.clientId, {
          align: nextHorizontalAlignment
        });
        return true;
      });
      setAttributes({
        horizontalAlignment: nextHorizontalAlignment
      });
    }
  })), Object(react["createElement"])(PanelRow, null, Object(react["createElement"])("span", null, alignment_controls_('Vertical', '__plugin_txtd')), Object(react["createElement"])(block_vertical_alignment_toolbar, {
    value: verticalAlignment,
    onChange: function onChange(nextVerticalAlignment) {
      return setAttributes({
        verticalAlignment: nextVerticalAlignment
      });
    }
  })));
};


// CONCATENATED MODULE: ./src/components/scroll-indicator-panel/index.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var scroll_indicator_panel_ = wp.i18n.__;
var scroll_indicator_panel_wp$components = wp.components,
    scroll_indicator_panel_PanelBody = scroll_indicator_panel_wp$components.PanelBody,
    scroll_indicator_panel_RadioControl = scroll_indicator_panel_wp$components.RadioControl,
    scroll_indicator_panel_ToggleControl = scroll_indicator_panel_wp$components.ToggleControl;
var scroll_indicator_panel_select = wp.data.select;
var scroll_indicator_panel_Component = wp.element.Component;
var ScrollIndicatorPanel = with_settings(function (props) {
  var settings = props.settings,
      scrollIndicator = props.attributes.scrollIndicator,
      setAttributes = props.setAttributes,
      updateAttributes = props.updateAttributes;
  var heroBlocks = scroll_indicator_panel_select('core/block-editor').getBlocks().filter(function (block) {
    return block.name === 'novablocks/hero';
  });
  var index = heroBlocks.findIndex(function (block) {
    return block.clientId === scroll_indicator_panel_select('core/block-editor').getSelectedBlockClientId();
  });
  return index === 0 && Object(react["createElement"])(scroll_indicator_panel_PanelBody, {
    title: scroll_indicator_panel_('Scroll Indicator', '__plugin_txtd'),
    initialOpen: false
  }, Object(react["createElement"])(scroll_indicator_panel_ToggleControl, {
    label: scroll_indicator_panel_('Enable Scroll Indicator', '__plugin_txtd'),
    checked: scrollIndicator,
    onChange: function onChange(scrollIndicator) {
      updateAttributes({
        scrollIndicator: scrollIndicator
      });
    }
  }));
});

// CONCATENATED MODULE: ./src/components/index.js
/**
 * Internal dependencies
 */










// CONCATENATED MODULE: ./src/blocks/google-map/map.js














var map_ = wp.i18n.__;
var map_wp$element = wp.element,
    map_Component = map_wp$element.Component,
    map_Fragment = map_wp$element.Fragment;
var map_Placeholder = wp.components.Placeholder;

var map_Map = /*#__PURE__*/function (_Component) {
  inherits_default()(Map, _Component);

  function Map() {
    var _this;

    classCallCheck_default()(this, Map);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Map).apply(this, arguments));
    _this.map = null;
    _this.searchBox = null;
    _this.markers = [];
    _this.getMapStyles = utils_getMapStyles.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Map, [{
    key: "clearMarkers",
    value: function clearMarkers() {
      this.markers.forEach(function (marker) {
        marker.setMap(null);
      });
      this.markers = [];
    }
  }, {
    key: "onPlacesChanged",
    value: function onPlacesChanged() {
      if (!this.searchBox) {
        return;
      }

      this.props.onChange(this.searchBox.getPlaces().map(function (place) {
        var keepProps = ['name', 'geometry'];
        var filtered = Object.keys(place).filter(function (key) {
          return keepProps.includes(key);
        }).reduce(function (obj, key) {
          obj[key] = place[key];
          return obj;
        }, {});
        return JSON.stringify(filtered);
      }));
    }
  }, {
    key: "createMarkers",
    value: function createMarkers() {
      var _this2 = this;

      var attributes = this.props.attributes;
      var markers = attributes.markers,
          styleSlug = attributes.styleSlug;
      var accentColor = styleSlug === 'customized' ? getMapAccentColor.call(this) : '#222222';
      var pinMarkup = pin.replace('%ACCENT_COLOR%', accentColor);
      markers.forEach(function (markerString) {
        var marker = JSON.parse(markerString);

        if (!marker.geometry) {
          return;
        }

        _this2.markers.push(new google.maps.Marker({
          map: _this2.map,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinMarkup)
          },
          title: marker.name,
          position: marker.geometry.location
        }));
      });

      if (this.markers.length) {
        this.map.setCenter(getMarkersCenter.call(this));
      }
    }
  }, {
    key: "initializeMap",
    value: function initializeMap() {
      var attributes = this.props.attributes;
      var showControls = attributes.showControls,
          showLabels = attributes.showLabels,
          showIcons = attributes.showIcons,
          zoom = attributes.zoom;
      this.map = new google.maps.Map(document.getElementById("novablocks-google-map-".concat(this.props.clientId)), {
        mapTypeId: 'roadmap',
        center: default_map_center,
        zoom: zoom,
        styles: addVisibilityToStyles(this.getMapStyles(), showLabels, showIcons),
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
    key: "initializeSearchBox",
    value: function initializeSearchBox() {
      var _this3 = this;

      // Create the search box and link it to the UI element.
      var input = document.getElementById("novablocks-google-map-search-input-".concat(this.props.clientId));
      this.searchBox = new google.maps.places.SearchBox(input); // Bias the SearchBox results towards current map's viewport.

      this.map.addListener('bounds_changed', function () {
        _this3.searchBox.setBounds(_this3.map.getBounds());
      }); // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.

      this.searchBox.addListener('places_changed', this.onPlacesChanged.bind(this));
    }
  }, {
    key: "updateMapOptions",
    value: function updateMapOptions() {
      if (this.map === null) {
        return;
      }

      var options = {};
      var attributes = this.props.attributes;
      var showControls = attributes.showControls,
          showLabels = attributes.showLabels,
          showIcons = attributes.showIcons,
          zoom = attributes.zoom;
      options.zoom = zoom;
      options.disableDefaultUI = !showControls;
      options.styles = addVisibilityToStyles(this.getMapStyles(), showLabels, showIcons);
      this.map.setOptions(options);
    }
  }, {
    key: "updateMapMarkers",
    value: function updateMapMarkers() {
      this.clearMarkers();
      this.createMarkers();
    }
  }, {
    key: "componentDidMount",
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var shouldUpdate = false;
      Object.entries(this.props).forEach(function (_ref) {
        var _ref2 = slicedToArray_default()(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        if (nextProps[key] !== val) {
          shouldUpdate = true;
        }
      });
      return shouldUpdate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.updateMapOptions();

      if (prevProps.attributes.markers !== this.props.attributes.markers || prevProps.attributes.styleSlug !== this.props.attributes.styleSlug) {
        this.updateMapMarkers();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(react["createElement"])("div", {
        className: "novablocks-map__map",
        id: "novablocks-google-map-".concat(this.props.clientId)
      });
    }
  }]);

  return Map;
}(map_Component);

var map_MapWrapper = function MapWrapper(Map) {
  return function (props) {
    var parallax = props.parallax,
        otherProps = objectWithoutProperties_default()(props, ["parallax"]);

    var searchBoxStyles = {};

    if (!props.isSelected) {
      searchBoxStyles.display = 'none';
    }

    return Object(react["createElement"])("div", {
      className: "novablocks-map"
    }, Object(react["createElement"])("div", {
      className: "novablocks-map__search-box"
    }, Object(react["createElement"])(map_Placeholder, {
      style: searchBoxStyles
    }, Object(react["createElement"])("input", {
      type: "text",
      id: "novablocks-google-map-search-input-".concat(props.clientId),
      placeholder: map_('Enter an address to drop a pin on this map')
    }))), Object(react["createElement"])("div", {
      className: "novablocks-map__map-container"
    }, Object(react["createElement"])("div", {
      className: "novablocks-mask"
    }, Object(react["createElement"])("div", {
      style: parallax.style
    }, Object(react["createElement"])(Map, otherProps)))));
  };
};

/* harmony default export */ var google_map_map = (map_MapWrapper(map_Map));
// CONCATENATED MODULE: ./src/blocks/google-map/api-key-panel-body.js






var api_key_panel_body_ = wp.i18n.__;
var api_key_panel_body_wp$components = wp.components,
    api_key_panel_body_Button = api_key_panel_body_wp$components.Button,
    api_key_panel_body_TextControl = api_key_panel_body_wp$components.TextControl,
    api_key_panel_body_PanelBody = api_key_panel_body_wp$components.PanelBody;
var api_key_panel_body_Component = wp.element.Component;

var api_key_panel_body_ApiKeyPanelBody = /*#__PURE__*/function (_Component) {
  inherits_default()(ApiKeyPanelBody, _Component);

  function ApiKeyPanelBody() {
    classCallCheck_default()(this, ApiKeyPanelBody);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(ApiKeyPanelBody).apply(this, arguments));
  }

  createClass_default()(ApiKeyPanelBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          apiKey = _this$props.apiKey,
          apiKeyInstructions = _this$props.apiKeyInstructions,
          savedApiKey = _this$props.savedApiKey,
          onChangeApiKey = _this$props.onChangeApiKey,
          onSaveApiKey = _this$props.onSaveApiKey;

      if (savedApiKey === '') {
        return null;
      }

      return Object(react["createElement"])(api_key_panel_body_PanelBody, {
        title: api_key_panel_body_('Google Maps API Key', '__plugin_txtd')
      }, Object(react["createElement"])(api_key_panel_body_TextControl, {
        placeholder: api_key_panel_body_('Paste API key here', '__plugin_txtd'),
        value: apiKey,
        onChange: onChangeApiKey,
        help: apiKeyInstructions
      }), Object(react["createElement"])(api_key_panel_body_Button, {
        isDefault: true,
        onClick: function onClick() {
          onSaveApiKey(apiKey);
        }
      }, api_key_panel_body_('Save', '__plugin_txtd')));
    }
  }]);

  return ApiKeyPanelBody;
}(api_key_panel_body_Component);

/* harmony default export */ var api_key_panel_body = (api_key_panel_body_ApiKeyPanelBody);
// CONCATENATED MODULE: ./src/blocks/google-map/map-style-select.js










var map_style_select_Component = wp.element.Component;

var map_style_select_MapStyleSelect = /*#__PURE__*/function (_Component) {
  inherits_default()(MapStyleSelect, _Component);

  function MapStyleSelect() {
    var _this;

    classCallCheck_default()(this, MapStyleSelect);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(MapStyleSelect).apply(this, arguments));
    _this.state = {
      active: _this.props.value
    };
    _this.compileStyles = compileStyles.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(MapStyleSelect, [{
    key: "getStaticStyle",
    value: function getStaticStyle(styles) {
      var result = [];
      styles.forEach(function (v, i, a) {
        var style = '';

        if (v.stylers) {
          if (v.stylers.length > 0) {
            style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
            style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
            v.stylers.forEach(function (val, i, a) {
              var prop = Object.keys(val)[0];
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          options = _this$props.options,
          value = _this$props.value,
          onChange = _this$props.onChange,
          apiKey = _this$props.apiKey;
      var markers = attributes.markers,
          zoom = attributes.zoom;
      var center = markers.length ? getMarkersCenter.call(this) : new google.maps.LatLng(default_map_center);
      var latitude = center.lat();
      var longitude = center.lng();
      return Object(react["createElement"])("div", {
        className: "components-base-control"
      }, Object(react["createElement"])("div", {
        className: "editor-block-styles block-editor-block-styles novablocks-block-editor-map-styles"
      }, options.map(function (option) {
        var style = _this2.getStaticStyle(_this2.compileStyles(option.styles));

        var size = '200x200';
        var mapType = 'roadmap';
        var url = 'https://maps.googleapis.com/maps/api/staticmap';
        var src = "".concat(url, "?center=").concat(latitude, ",").concat(longitude, "&zoom=").concat(zoom, "&size=").concat(size, "&maptype=").concat(mapType, "&").concat(style, "&key=").concat(apiKey);
        return Object(react["createElement"])("div", {
          key: option.slug,
          className: classnames_default()('editor-block-styles__item block-editor-block-styles__item', {
            'is-active': option.slug === _this2.state.active
          }),
          onClick: function onClick() {
            _this2.setState({
              active: option.slug
            });

            onChange(option.slug);
          },
          role: "button",
          tabIndex: "0",
          "aria-label": option.label
        }, Object(react["createElement"])("div", {
          className: "editor-block-styles__item-preview block-editor-block-styles__item-preview"
        }, Object(react["createElement"])("img", {
          src: src,
          alt: "".concat(option.label, " map style preview")
        })), Object(react["createElement"])("div", {
          className: "editor-block-styles__item-label block-editor-block-styles__item-label"
        }, option.label));
      })));
    }
  }]);

  return MapStyleSelect;
}(map_style_select_Component);

/* harmony default export */ var map_style_select = (map_style_select_MapStyleSelect);
// CONCATENATED MODULE: ./src/blocks/google-map/inspector-controls.js












var inspector_controls_ = wp.i18n.__;
var inspector_controls_wp$components = wp.components,
    inspector_controls_PanelBody = inspector_controls_wp$components.PanelBody,
    inspector_controls_RangeControl = inspector_controls_wp$components.RangeControl,
    inspector_controls_SelectControl = inspector_controls_wp$components.SelectControl,
    inspector_controls_ToggleControl = inspector_controls_wp$components.ToggleControl;
var inspector_controls_Component = wp.element.Component;
var inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;

var inspector_controls_ButtonInspectorControls = /*#__PURE__*/function (_Component) {
  inherits_default()(ButtonInspectorControls, _Component);

  function ButtonInspectorControls() {
    var _this;

    classCallCheck_default()(this, ButtonInspectorControls);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ButtonInspectorControls).apply(this, arguments));
    _this.compileStyles = compileStyles.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ButtonInspectorControls, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          styleSlug = _this$props$attribute.styleSlug,
          zoom = _this$props$attribute.zoom,
          showLabels = _this$props$attribute.showLabels,
          showControls = _this$props$attribute.showControls,
          showIcons = _this$props$attribute.showIcons,
          savedApiKey = _this$props.savedApiKey,
          setAttributes = _this$props.setAttributes;

      if (!savedApiKey) {
        return null;
      }

      return Object(react["createElement"])(inspector_controls_InspectorControls, null, Object(react["createElement"])(inspector_controls_PanelBody, {
        title: inspector_controls_('Map Design', '__plugin_txtd')
      }, Object(react["createElement"])(map_style_select, extends_default()({}, this.props, {
        apiKey: savedApiKey,
        value: styleSlug,
        options: google_map_styles,
        onChange: function onChange(newStyleSlug) {
          var mapStyles = google_map_styles.find(function (style) {
            return style.slug === newStyleSlug;
          }).styles;

          var newStyles = _this2.compileStyles(mapStyles);

          var newPinColor = newStyleSlug === 'customized' ? getMapAccentColor.call(_this2) : '#222222';
          setAttributes({
            styleSlug: newStyleSlug,
            styleData: newStyles,
            pinColor: newPinColor
          });
        }
      })), Object(react["createElement"])(inspector_controls_ToggleControl, {
        label: inspector_controls_('Show Nearby Venues', '__plugin_txtd'),
        checked: showIcons,
        onChange: function onChange() {
          return setAttributes({
            showIcons: !showIcons
          });
        }
      }), Object(react["createElement"])(inspector_controls_ToggleControl, {
        label: inspector_controls_('Show Street Labels', '__plugin_txtd'),
        checked: showLabels,
        onChange: function onChange() {
          return setAttributes({
            showLabels: !showLabels
          });
        }
      }), Object(react["createElement"])(inspector_controls_ToggleControl, {
        label: inspector_controls_('Show Controls', '__plugin_txtd'),
        checked: showControls,
        onChange: function onChange() {
          return setAttributes({
            showControls: !showControls
          });
        }
      })), Object(react["createElement"])(inspector_controls_PanelBody, {
        title: inspector_controls_('Zoom Level', '__plugin_txtd')
      }, Object(react["createElement"])(inspector_controls_RangeControl, {
        value: zoom,
        onChange: function onChange(newZoom) {
          return setAttributes({
            zoom: newZoom
          });
        },
        min: 5,
        max: 20
      })), Object(react["createElement"])(api_key_panel_body, this.props));
    }
  }]);

  return ButtonInspectorControls;
}(inspector_controls_Component);

/* harmony default export */ var inspector_controls = (inspector_controls_ButtonInspectorControls);
// CONCATENATED MODULE: ./src/blocks/google-map/edit.js













var edit_ = wp.i18n.__;
var API_KEY_SETTING_ID = 'novablocks_google_maps_api_key';
var edit_wp$element = wp.element,
    edit_Component = edit_wp$element.Component,
    edit_Fragment = edit_wp$element.Fragment;
var edit_wp$components = wp.components,
    Spinner = edit_wp$components.Spinner,
    edit_TextControl = edit_wp$components.TextControl;
var edit_wp$blockEditor = wp.blockEditor,
    BlockAlignmentToolbar = edit_wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = edit_wp$blockEditor.BlockControls;
var edit_wp$compose = wp.compose,
    edit_compose = edit_wp$compose.compose,
    edit_createHigherOrderComponent = edit_wp$compose.createHigherOrderComponent;
var Settings = wp.api.models.Settings; // This is a GLOBAL function that, when present, gets called by the Google Maps script on authentication errors.

window.gm_authFailure = function () {
  window.googlemaps_authfailure = true;
  window.dispatchEvent(new Event('novablock.googlemaps_authfailure'));
};

var edit_Edit = /*#__PURE__*/function (_Component) {
  inherits_default()(Edit, _Component);

  function Edit() {
    var _this;

    classCallCheck_default()(this, Edit);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Edit).apply(this, arguments));
    _this.state = {
      fetchedScript: false,
      fetchedApiKey: false,
      savedApiKey: '',
      apiKey: '',
      gmAuthFailure: typeof window.googlemaps_authfailure === 'undefined' ? false : !!window.googlemaps_authfailure
    };
    _this.onChangeMarkers = _this.onChangeMarkers.bind(assertThisInitialized_default()(_this));
    _this.onGoogleMapsAuthFailure = _this.onGoogleMapsAuthFailure.bind(assertThisInitialized_default()(_this));
    _this.settings = null;
    return _this;
  }

  createClass_default()(Edit, [{
    key: "onGoogleMapsAuthFailure",
    value: function onGoogleMapsAuthFailure(event) {
      this.setState({
        gmAuthFailure: true
      });
    }
  }, {
    key: "onChangeMarkers",
    value: function onChangeMarkers(markers) {
      this.props.setAttributes({
        markers: markers
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);
      wp.api.loadPromise.done(function () {
        _this2.settings = new wp.api.models.Settings();

        _this2.settings.on("change:".concat(API_KEY_SETTING_ID), function (model) {
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);
    }
  }, {
    key: "loadGoogleMapsScript",
    value: function loadGoogleMapsScript() {
      var _this3 = this;

      var savedApiKey = this.state.savedApiKey;
      var keyParam = savedApiKey !== '' ? "key=".concat(savedApiKey, "&") : '';
      var scriptSrc = "//maps.googleapis.com/maps/api/js?".concat(keyParam, "libraries=places");
      var scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');

      if (scripts.length) {
        this.setState({
          fetchedScript: true
        });
        return Promise.resolve();
      }

      var promise = new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = scriptSrc;
        document.body.appendChild(script);
      });
      return promise.then(function () {
        _this3.setState({
          fetchedScript: true
        });
      });
    }
  }, {
    key: "saveApiKey",
    value: function saveApiKey(apiKey) {
      var _this4 = this;

      var key = new wp.api.models.Settings(defineProperty_default()({}, API_KEY_SETTING_ID, apiKey));
      key.save().then(function () {
        _this4.setState({
          gmAuthFailure: false
        });

        _this4.settings.fetch();
      });
    }
  }, {
    key: "renderPreview",
    value: function renderPreview() {
      var _this$state = this.state,
          fetchedApiKey = _this$state.fetchedApiKey,
          fetchedScript = _this$state.fetchedScript,
          savedApiKey = _this$state.savedApiKey,
          gmAuthFailure = _this$state.gmAuthFailure;

      if (!fetchedApiKey) {
        return Object(react["createElement"])(Spinner, null);
      }

      if (!fetchedScript || !savedApiKey || gmAuthFailure) {
        return Object(react["createElement"])(placeholder, {
          saveApiKey: this.saveApiKey.bind(this),
          apiKey: savedApiKey,
          apiKeyInstructions: this.getInstructions()
        });
      }

      return Object(react["createElement"])(edit_Fragment, null, Object(react["createElement"])(google_map_map, extends_default()({}, this.props, {
        onChange: this.onChangeMarkers
      })));
    }
  }, {
    key: "getInstructions",
    value: function getInstructions() {
      var gmAuthFailure = this.state.gmAuthFailure;
      var url = '//developers.google.com/maps/documentation/javascript/get-api-key';
      var hyperlink = Object(react["createElement"])("a", {
        target: "_blank",
        href: url
      }, edit_('register a Google Maps API Key', '__plugin_txtd'));

      if (gmAuthFailure) {
        return Object(react["createElement"])(edit_Fragment, null, edit_('It seems that your Google Maps API key is INVALID. Please REFRESH the page, double check that you pasted it correctly, and that it is a valid API key. More information about how to', '__plugin_txtd'), " ", hyperlink);
      }

      return Object(react["createElement"])(edit_Fragment, null, edit_('To display the map, you need to', '__plugin_txtd'), " ", hyperlink, " ", edit_('and include it bellow.', '__plugin_txtd'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state2 = this.state,
          fetchedApiKey = _this$state2.fetchedApiKey,
          fetchedScript = _this$state2.fetchedScript,
          savedApiKey = _this$state2.savedApiKey,
          gmAuthFailure = _this$state2.gmAuthFailure;
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var align = attributes.align,
          styleData = attributes.styleData;
      var newProps = Object.assign(this.props);

      if (typeof styleData === "string") {
        newProps.attributes.styleData = JSON.parse(styleData);
      }

      return Object(react["createElement"])(edit_Fragment, null, Object(react["createElement"])(BlockControls, null, Object(react["createElement"])(BlockAlignmentToolbar, {
        value: align,
        onChange: function onChange(align) {
          return setAttributes({
            align: align
          });
        },
        controls: ['center', 'full']
      })), !!fetchedApiKey && !!fetchedScript && !!savedApiKey && !gmAuthFailure && Object(react["createElement"])(inspector_controls, extends_default()({}, newProps, {
        apiKey: this.state.apiKey,
        savedApiKey: this.state.savedApiKey,
        onChangeApiKey: function onChangeApiKey(apiKey) {
          _this5.setState({
            apiKey: apiKey
          });
        },
        onSaveApiKey: this.saveApiKey.bind(this),
        apiKeyInstructions: this.getInstructions()
      })), this.renderPreview());
    }
  }]);

  return Edit;
}(edit_Component);

/* harmony default export */ var google_map_edit = (edit_createHigherOrderComponent(edit_compose([with_settings, with_parallax]))(edit_Edit));
// CONCATENATED MODULE: ./src/blocks/google-map/index.js
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */

var google_map_ = wp.i18n.__;
var google_map_registerBlockType = wp.blocks.registerBlockType;

function google_map_init() {
  google_map_registerBlockType('novablocks/google-map', {
    title: google_map_('Map of the World', '__plugin_txtd'),
    description: google_map_('Display an interactive map to show the location of your venue.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: map,
    // Additional search terms
    keywords: [google_map_('google', '__plugin_txtd'), google_map_('maps', '__plugin_txtd'), google_map_('google maps', '__plugin_txtd'), google_map_('location', '__plugin_txtd')],
    getEditWrapperProps: function getEditWrapperProps(attributes) {
      var align = attributes.align;

      if ('center' === align || 'full' === align) {
        return {
          'data-align': align
        };
      }
    },
    edit: google_map_edit,
    save: function save() {}
  });
}

/* harmony default export */ var google_map = (google_map_init);
// CONCATENATED MODULE: ./src/blocks/header/icons.js

var header_icons_wp$components = wp.components,
    icons_SVG = header_icons_wp$components.SVG,
    icons_Path = header_icons_wp$components.Path;
var logoLeft = Object(react["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48px",
  height: "48px",
  viewBox: "0 0 48 48"
}, Object(react["createElement"])("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, Object(react["createElement"])("path", {
  fill: "#6565F3",
  d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
  transform: "translate(0 17)"
}), Object(react["createElement"])("path", {
  fill: "#FAE547",
  d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
  transform: "translate(0 17)"
}), Object(react["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M20 20H48V28H20z"
})));
var logoRight = Object(react["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48px",
  height: "48px",
  viewBox: "0 0 48 48"
}, Object(react["createElement"])("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, Object(react["createElement"])("path", {
  fill: "#6565F3",
  d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
  transform: "translate(34 17)"
}), Object(react["createElement"])("path", {
  fill: "#FAE547",
  d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
  transform: "translate(34 17)"
}), Object(react["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M0 20H28V28H0z"
})));
var logoCenter = Object(react["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48px",
  height: "48px",
  viewBox: "0 0 48 48"
}, Object(react["createElement"])("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, Object(react["createElement"])("path", {
  fill: "#6565F3",
  d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
  transform: "translate(17 17)"
}), Object(react["createElement"])("path", {
  fill: "#FAE547",
  d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
  transform: "translate(17 17)"
}), Object(react["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M0 20H9V28H0z"
}), Object(react["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M0 20H11V28H0z"
}), Object(react["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M37 20H48V28H37z"
})));
// CONCATENATED MODULE: ./src/blocks/header/edit.js




var header_edit_ = wp.i18n.__;
var useState = wp.element.useState;
var header_edit_wp$components = wp.components,
    edit_Toolbar = header_edit_wp$components.Toolbar,
    edit_IconButton = header_edit_wp$components.IconButton;
var header_edit_wp$blockEditor = wp.blockEditor,
    edit_BlockControls = header_edit_wp$blockEditor.BlockControls,
    InnerBlocks = header_edit_wp$blockEditor.InnerBlocks;
var TEMPLATE_OPTIONS = [{
  title: header_edit_('Logo on the left side and one navigation menu', '__plugin_txtd'),
  name: 'logo-left',
  icon: logoLeft,
  template: [['novablocks/logo'], ['novablocks/navigation', {
    className: "site-header__menu site-header__menu--primary",
    slug: "primary"
  }]]
}, {
  title: header_edit_('Logo centered and one navigation menu on each side', '__plugin_txtd'),
  name: 'logo-center',
  icon: logoCenter,
  template: [['novablocks/navigation', {
    className: "site-header__menu site-header__menu--secondary",
    slug: "secondary"
  }], ['novablocks/logo'], ['novablocks/navigation', {
    className: "site-header__menu site-header__menu--primary",
    slug: "primary"
  }]]
}];
function header_edit_Edit(props) {
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
      _useState2 = slicedToArray_default()(_useState, 2),
      template = _useState2[0],
      setTemplate = _useState2[1];

  var applyTemplate = function applyTemplate(template) {
    var activeTemplate = TEMPLATE_OPTIONS.find(function (option) {
      return option.template === template;
    });
    var activeTemplateName = activeTemplate.name;
    setAttributes({
      layout: activeTemplateName
    });
    setTemplate(template);
  };

  var classNames = classnames_default()(className, "site-header", "site-header-".concat(layout));
  return [Object(react["createElement"])(edit_BlockControls, null, Object(react["createElement"])(edit_Toolbar, null, Object(react["createElement"])(edit_IconButton, {
    className: "components-icon-button components-toolbar__control",
    label: header_edit_('Change Layout', '__plugin_txtd'),
    onClick: function onClick() {
      return setTemplate(null);
    },
    icon: "edit"
  }))), Object(react["createElement"])("div", {
    className: classNames
  }, Object(react["createElement"])(InnerBlocks, {
    __experimentalTemplateOptions: TEMPLATE_OPTIONS,
    __experimentalOnSelectTemplateOption: function __experimentalOnSelectTemplateOption(nextTemplate) {
      applyTemplate(nextTemplate);
    },
    template: template,
    templateLock: "all"
  }))];
}
// CONCATENATED MODULE: ./src/blocks/header/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var header_ = wp.i18n.__;
var header_registerBlockType = wp.blocks.registerBlockType;
var header_InnerBlocks = wp.blockEditor.InnerBlocks;

function header_init() {
  header_registerBlockType('novablocks/header', {
    title: header_('Header', '__plugin_txtd'),
    description: header_('Outputs custom header markup.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: header,
    // Additional search terms
    keywords: [header_('logo', '__plugin_txtd'), header_('menu', '__plugin_txtd')],
    supports: {
      align: ["wide", "full"],
      default: "full"
    },
    edit: header_edit_Edit,
    save: function save() {
      return Object(react["createElement"])(header_InnerBlocks.Content, null);
    }
  });
}

/* harmony default export */ var blocks_header = (header_init);
// CONCATENATED MODULE: ./src/blocks/headline/heading-level-icon.js


/**
 * WordPress dependencies
 */
var heading_level_icon_wp$components = wp.components,
    heading_level_icon_Path = heading_level_icon_wp$components.Path,
    heading_level_icon_SVG = heading_level_icon_wp$components.SVG;
function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(react["createElement"])(heading_level_icon_SVG, {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(react["createElement"])(heading_level_icon_Path, {
    d: levelToPath[level]
  }));
}
// CONCATENATED MODULE: ./src/blocks/headline/heading-toolbar.js







/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    heading_toolbar_ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var heading_toolbar_Component = wp.element.Component;
var ToolbarGroup = wp.components.ToolbarGroup;
/**
 * Internal dependencies
 */



var heading_toolbar_HeadingToolbar = /*#__PURE__*/function (_Component) {
  inherits_default()(HeadingToolbar, _Component);

  function HeadingToolbar() {
    classCallCheck_default()(this, HeadingToolbar);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(HeadingToolbar).apply(this, arguments));
  }

  createClass_default()(HeadingToolbar, [{
    key: "createLevelControl",
    value: function createLevelControl(targetLevel, selectedLevel, onChange) {
      var isActive = targetLevel === selectedLevel;
      return {
        icon: Object(react["createElement"])(HeadingLevelIcon, {
          level: targetLevel,
          isPressed: isActive
        }),
        // translators: %s: heading level e.g: "1", "2", "3"
        title: sprintf(heading_toolbar_('Heading %d'), targetLevel),
        isActive: isActive,
        onClick: function onClick() {
          return onChange(targetLevel);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          minLevel = _this$props.minLevel,
          maxLevel = _this$props.maxLevel,
          selectedLevel = _this$props.selectedLevel,
          onChange = _this$props.onChange;
      return Object(react["createElement"])(ToolbarGroup, {
        icon: Object(react["createElement"])(HeadingLevelIcon, {
          level: selectedLevel
        }),
        controls: range(minLevel, maxLevel).map(function (index) {
          return _this.createLevelControl(index, selectedLevel, onChange);
        })
      });
    }
  }]);

  return HeadingToolbar;
}(heading_toolbar_Component);

/* harmony default export */ var heading_toolbar = (heading_toolbar_HeadingToolbar);
// CONCATENATED MODULE: ./src/blocks/headline/edit.js




var headline_edit_ = wp.i18n.__;
var headline_edit_Fragment = wp.element.Fragment;
/**
 * WordPress dependencies
 */

var headline_edit_wp$blockEditor = wp.blockEditor,
    edit_RichText = headline_edit_wp$blockEditor.RichText,
    edit_AlignmentToolbar = headline_edit_wp$blockEditor.AlignmentToolbar,
    headline_edit_BlockControls = headline_edit_wp$blockEditor.BlockControls,
    edit_InspectorControls = headline_edit_wp$blockEditor.InspectorControls;
function HeadlineEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className;
  var align = attributes.align,
      primary = attributes.primary,
      secondary = attributes.secondary,
      level = attributes.level;
  var TagName = "h".concat(level);
  return Object(react["createElement"])(headline_edit_Fragment, null, Object(react["createElement"])(headline_edit_BlockControls, null, Object(react["createElement"])(heading_toolbar, {
    minLevel: 2,
    maxLevel: 4,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  }), Object(react["createElement"])(edit_AlignmentToolbar, {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(react["createElement"])(edit_InspectorControls, null, Object(react["createElement"])("p", null, headline_edit_('Level', '__plugin_txtd')), Object(react["createElement"])(heading_toolbar, {
    minLevel: 1,
    maxLevel: 6,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  })), Object(react["createElement"])(TagName, {
    className: classnames_default()(className, 'c-headline', defineProperty_default()({}, "has-text-align-".concat(align), align))
  }, Object(react["createElement"])(edit_RichText, {
    className: "c-headline__secondary",
    identifier: "secondary",
    tagName: "span",
    value: secondary,
    onChange: function onChange(value) {
      return setAttributes({
        secondary: value
      });
    },
    placeholder: headline_edit_('Subtitle…', '__plugin_txtd'),
    keepPlaceholderOnFocus: true,
    allowedFormats: []
  }), Object(react["createElement"])(edit_RichText, {
    className: "c-headline__primary",
    identifier: "primary",
    tagName: "span",
    value: primary,
    onChange: function onChange(value) {
      return setAttributes({
        primary: value
      });
    },
    placeholder: headline_edit_('Write title…', '__plugin_txtd'),
    keepPlaceholderOnFocus: true,
    allowedFormats: []
  })));
}
// CONCATENATED MODULE: ./src/blocks/headline/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var save_RichText = wp.blockEditor.RichText;
function save_save(props) {
  var attributes = props.attributes;
  var align = attributes.align,
      primary = attributes.primary,
      secondary = attributes.secondary,
      level = attributes.level;
  var TagName = "h".concat(level);
  var className = classnames_default()('c-headline', defineProperty_default()({}, "has-text-align-".concat(align), align));
  return Object(react["createElement"])(TagName, {
    className: className ? className : undefined
  }, Object(react["createElement"])(save_RichText.Content, {
    className: "c-headline__secondary",
    value: secondary,
    tagName: "span"
  }), Object(react["createElement"])(save_RichText.Content, {
    className: "c-headline__primary",
    value: primary,
    tagName: "span"
  }));
}
// CONCATENATED MODULE: ./src/blocks/headline/index.js
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */

var headline_ = wp.i18n.__;
var headline_registerBlockType = wp.blocks.registerBlockType;

function headline_init() {
  headline_registerBlockType('novablocks/headline', {
    title: headline_('Headline', '__plugin_txtd'),
    description: headline_('Advanced heading block with a fancier display', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: headline,
    // Additional search terms
    keywords: [headline_('heading', '__plugin_txtd'), headline_('title', '__plugin_txtd'), headline_('cta', '__plugin_txtd'), headline_('call to action', '__plugin_txtd')],
    attributes: {
      align: {
        type: "string",
        default: "center"
      },
      primary: {
        type: "string",
        default: headline_("Our Story", '__plugin_txtd')
      },
      secondary: {
        type: "string",
        default: headline_("Discover", '__plugin_txtd')
      },
      level: {
        type: "number",
        default: 2
      }
    },
    save: save_save,
    edit: HeadlineEdit
  });
}

/* harmony default export */ var blocks_headline = (headline_init);
// CONCATENATED MODULE: ./src/blocks/hero/background.js



function background_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function background_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { background_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { background_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */


var background_HeroBackground = function HeroBackground(props) {
  var _props$attributes = props.attributes,
      overlayFilterStyle = _props$attributes.overlayFilterStyle,
      overlayFilterStrength = _props$attributes.overlayFilterStrength,
      media = _props$attributes.media,
      contentColor = _props$attributes.contentColor;

  var styles = background_objectSpread({}, props.parallax.style, {
    opacity: 1
  });

  if (overlayFilterStyle !== 'none') {
    styles.opacity = 1 - overlayFilterStrength / 100;
  }

  return Object(react["createElement"])("div", {
    className: "novablocks-mask"
  }, Object(react["createElement"])("div", {
    className: "novablocks-hero__background"
  }, media.type === 'image' && typeof media.sizes !== 'undefined' && Object(react["createElement"])("img", {
    className: "novablocks-hero__media",
    src: media.sizes.full.url,
    alt: media.alt,
    style: styles
  }), media.type === 'video' && Object(react["createElement"])("video", {
    muted: true,
    autoPlay: true,
    loop: true,
    className: "novablocks-hero__media",
    style: styles,
    src: media.url
  })));
};

/* harmony default export */ var background = (background_HeroBackground);
// CONCATENATED MODULE: ./src/blocks/hero/preview.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var preview_InnerBlocks = wp.blockEditor.InnerBlocks;
var preview_select = wp.data.select;

var preview_HeroPreview = function HeroPreview(props) {
  var attributes = props.attributes,
      className = props.className,
      clientId = props.clientId,
      settings = props.settings;
  var contentPadding = attributes.contentPadding,
      contentPaddingCustom = attributes.contentPaddingCustom,
      contentWidth = attributes.contentWidth,
      contentWidthCustom = attributes.contentWidthCustom,
      verticalAlignment = attributes.verticalAlignment,
      horizontalAlignment = attributes.horizontalAlignment,
      minHeightFallback = attributes.minHeightFallback,
      scrollIndicatorBlock = attributes.scrollIndicatorBlock,
      contentColor = attributes.contentColor,
      overlayFilterStyle = attributes.overlayFilterStyle,
      scrollingEffect = attributes.scrollingEffect;
  var classes = [className, 'novablocks-hero', "novablocks-u-valign-".concat(verticalAlignment), "novablocks-u-halign-".concat(horizontalAlignment), "novablocks-u-spacing-".concat(contentPadding), "novablocks-u-content-width-".concat(contentWidth), "novablocks-u-background", "novablocks-u-background-".concat(overlayFilterStyle)];
  var styles = {
    hero: {
      '--novablocks-hero-text-color': contentColor
    },
    foreground: {},
    content: {}
  };

  if (contentColor !== '#FFF') {
    styles.hero['--theme-dark-primary'] = '#FFF';
  }

  var heroBlocks = preview_select('core/block-editor').getBlocks().filter(function (block) {
    return block.name === 'novablocks/hero';
  });
  var heroHeight = minHeightFallback;
  var contentHeight = heroHeight;

  if (scrollingEffect === 'doppler') {
    heroHeight = minHeightFallback * 2;
    contentHeight = 100;
    styles.hero.alignItems = 'flex-start';
  }

  styles.hero.minHeight = heroHeight + 'vh';
  styles.foreground.minHeight = contentHeight + 'vh';

  if (contentPadding === 'custom') {
    styles.foreground.paddingTop = "".concat(contentPaddingCustom, "%");
    styles.foreground.paddingBottom = "".concat(contentPaddingCustom, "%");
  }

  if (contentWidth === 'custom') {
    styles.content.maxWidth = "".concat(contentWidthCustom, "%");
  }

  var index = heroBlocks.findIndex(function (block) {
    return block.clientId === clientId;
  });
  var scrollIndicatorFallback = index === 0 && heroHeight >= 100;
  var scrollIndicator = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicatorFallback;
  return Object(react["createElement"])("div", {
    className: classes.join(' '),
    style: styles.hero
  }, Object(react["createElement"])(background, props), Object(react["createElement"])("div", {
    className: "novablocks-hero__foreground novablocks-u-content-padding novablocks-u-content-align",
    style: styles.foreground
  }, Object(react["createElement"])("div", {
    className: "novablocks-hero__inner-container novablocks-u-content-width",
    style: styles.content
  }, Object(react["createElement"])(preview_InnerBlocks, {
    template: settings.hero.template
  })), scrollIndicator && Object(react["createElement"])("div", {
    className: "novablocks-hero__indicator"
  })));
};

/* harmony default export */ var preview = (preview_HeroPreview);
// CONCATENATED MODULE: ./src/blocks/hero/block-controls.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var block_controls_ = wp.i18n.__;
var block_controls_wp$blockEditor = wp.blockEditor,
    block_controls_BlockControls = block_controls_wp$blockEditor.BlockControls,
    MediaUpload = block_controls_wp$blockEditor.MediaUpload;
var block_controls_wp$components = wp.components,
    block_controls_IconButton = block_controls_wp$components.IconButton,
    block_controls_Toolbar = block_controls_wp$components.Toolbar;
var block_controls_ALLOWED_MEDIA_TYPES = ['image', 'video'];

var block_controls_HeroBlockControls = function HeroBlockControls(props) {
  var setAttributes = props.setAttributes;
  return Object(react["createElement"])(block_controls_BlockControls, null, Object(react["createElement"])(alignment_controls_AlignmentToolbar, props), Object(react["createElement"])(color_controls_ColorToolbar, props), Object(react["createElement"])(block_controls_Toolbar, null, Object(react["createElement"])(MediaUpload, {
    allowedTypes: block_controls_ALLOWED_MEDIA_TYPES,
    onSelect: function onSelect(media) {
      return setAttributes({
        media: media
      });
    },
    render: function render(_ref) {
      var open = _ref.open;
      return Object(react["createElement"])(block_controls_IconButton, {
        className: "components-icon-button components-toolbar__control",
        label: block_controls_('Change Media', '__plugin_txtd'),
        icon: swap,
        onClick: open
      });
    }
  })));
};

/* harmony default export */ var block_controls = (block_controls_HeroBlockControls);
// CONCATENATED MODULE: ./src/blocks/hero/edit.js









function edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { edit_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */




var hero_edit_ = wp.i18n.__;
var hero_edit_InspectorControls = wp.blockEditor.InspectorControls;
var hero_edit_wp$components = wp.components,
    edit_PanelBody = hero_edit_wp$components.PanelBody,
    edit_RadioControl = hero_edit_wp$components.RadioControl;
var hero_edit_wp$element = wp.element,
    hero_edit_Component = hero_edit_wp$element.Component,
    hero_edit_Fragment = hero_edit_wp$element.Fragment;
var hero_edit_wp$compose = wp.compose,
    hero_edit_compose = hero_edit_wp$compose.compose,
    hero_edit_createHigherOrderComponent = hero_edit_wp$compose.createHigherOrderComponent;
var edit_select = wp.data.select;
var FirstBlockControls = utils_withFirstBlockConditions(function (props) {
  return Object(react["createElement"])(hero_edit_Fragment, null, Object(react["createElement"])(ScrollIndicatorPanel, props), Object(react["createElement"])(position_indicators_panel, props));
});

var edit_BlockHeightControls = function BlockHeightControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      settings = props.settings;
  var minHeightFallback = attributes.minHeightFallback;
  return Object(react["createElement"])(edit_PanelBody, {
    title: hero_edit_('Height', '__plugin_txtd'),
    initialOpen: false
  }, Object(react["createElement"])(edit_RadioControl, {
    label: hero_edit_('Minimum Height', '__plugin_txtd'),
    selected: minHeightFallback,
    onChange: function onChange(minHeightFallback) {
      setAttributes({
        minHeightFallback: parseFloat(minHeightFallback)
      });
    },
    options: settings.minimumHeightOptions
  }));
};

var edit_HeroEdit = /*#__PURE__*/function (_Component) {
  inherits_default()(HeroEdit, _Component);

  function HeroEdit() {
    classCallCheck_default()(this, HeroEdit);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(HeroEdit).apply(this, arguments));
  }

  createClass_default()(HeroEdit, [{
    key: "getDefaults",
    value: function getDefaults(attributes) {
      var settings = this.props.settings;
      var scrollIndicator = attributes.scrollIndicator;
      var defaults = {};

      if (settings.usePostMetaAttributes) {
        if (!scrollIndicator) {
          defaults.scrollIndicator = settings.hero.attributes.scrollIndicator.default;
        }
      }

      return defaults;
    }
  }, {
    key: "getNewAttributes",
    value: function getNewAttributes(attributes) {
      var _this = this;

      var scrollIndicator = attributes.scrollIndicator;
      var index = edit_select('core/block-editor').getBlocks().filter(function (block) {
        return block.name === 'novablocks/hero';
      }).findIndex(function (block) {
        return block.clientId === _this.props.clientId;
      });
      var newScrollIndicatorBlock = index === 0 && scrollIndicator;
      return {
        scrollIndicator: scrollIndicator,
        scrollIndicatorBlock: newScrollIndicatorBlock
      };
    }
  }, {
    key: "updateAttributes",
    value: function updateAttributes() {
      var newAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var defaults = this.getDefaults(attributes);
      var computedAttributes = this.getNewAttributes(edit_objectSpread({}, attributes, {}, defaults, {}, newAttributes));
      setAttributes(computedAttributes);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateAttributes();
    }
  }, {
    key: "render",
    value: function render() {
      var settings = this.props.settings;
      var usePostMetaAttributes = settings.usePostMetaAttributes;
      var updateAttributes = this.updateAttributes.bind(this);
      return Object(react["createElement"])(hero_edit_Fragment, null, Object(react["createElement"])(preview, this.props), Object(react["createElement"])(block_controls, this.props), Object(react["createElement"])(hero_edit_InspectorControls, null, Object(react["createElement"])(layout_panel, this.props), Object(react["createElement"])(edit_BlockHeightControls, this.props), usePostMetaAttributes && Object(react["createElement"])(FirstBlockControls, extends_default()({}, this.props, {
        updateAttributes: updateAttributes
      }))));
    }
  }]);

  return HeroEdit;
}(hero_edit_Component);

;
/* harmony default export */ var hero_edit = (hero_edit_createHigherOrderComponent(hero_edit_compose([with_settings, with_parallax]))(edit_HeroEdit));
// CONCATENATED MODULE: ./src/blocks/hero/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var hero_ = wp.i18n.__;
var hero_registerBlockType = wp.blocks.registerBlockType;
var hero_InnerBlocks = wp.blockEditor.InnerBlocks;
var hero_select = wp.data.select;

function hero_init() {
  hero_registerBlockType('novablocks/hero', {
    title: hero_('Hero of the Galaxy', '__plugin_txtd'),
    description: hero_('A great way to get your visitors acquainted with your content.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: hero,
    // Additional search terms
    keywords: [hero_('cover', '__plugin_txtd'), hero_('full width', '__plugin_txtd'), hero_('hero image', '__plugin_txtd'), hero_('cover section', '__plugin_txtd')],
    example: {},
    supports: {
      anchor: true
    },
    edit: hero_edit,
    save: function save() {
      return Object(react["createElement"])(hero_InnerBlocks.Content, null);
    },
    getEditWrapperProps: function getEditWrapperProps() {
      var settings = hero_select('core/block-editor').getSettings();
      return settings.alignWide ? {
        'data-align': 'full'
      } : {};
    }
  });
}

/* harmony default export */ var blocks_hero = (hero_init);
// CONCATENATED MODULE: ./src/blocks/logo/index.js


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var logo_ = wp.i18n.__;
var logo_registerBlockType = wp.blocks.registerBlockType;

function logo_init() {
  logo_registerBlockType('novablocks/logo', {
    title: logo_('Logo', '__plugin_txtd'),
    description: logo_('Outputs custom logo markup.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: logo,
    // Additional search terms
    keywords: [logo_('branding', '__plugin_txtd')],
    parent: ['novablocks/header'],
    save: function save() {},
    edit: function edit(props) {
      return Object(react["createElement"])(wp.serverSideRender, {
        block: "novablocks/logo",
        attributes: props.attributes
      });
    }
  });
}

/* harmony default export */ var blocks_logo = (logo_init);
// CONCATENATED MODULE: ./src/blocks/media/block-controls.js



function block_controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function block_controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_controls_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var media_block_controls_ = wp.i18n.__;
var media_block_controls_wp$blockEditor = wp.blockEditor,
    block_controls_MediaUpload = media_block_controls_wp$blockEditor.MediaUpload,
    media_block_controls_BlockControls = media_block_controls_wp$blockEditor.BlockControls;
var media_block_controls_wp$components = wp.components,
    media_block_controls_IconButton = media_block_controls_wp$components.IconButton,
    media_block_controls_Toolbar = media_block_controls_wp$components.Toolbar;
var MEDIA_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-pull-left',
    title: media_block_controls_('Show Media on Left Side', '__plugin_txtd')
  },
  right: {
    icon: 'align-pull-right',
    title: media_block_controls_('Show Media on Right Side', '__plugin_txtd')
  }
};

var block_controls_MediaBlockControls = function MediaBlockControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      updateImages = props.updateImages;
  var mediaPosition = attributes.mediaPosition,
      _attributes$images = attributes.images,
      images = _attributes$images === void 0 ? [] : _attributes$images;
  var galleryImages = images.map(function (image) {
    return JSON.parse(image);
  });
  var hasImages = !!images.length;
  return Object(react["createElement"])(media_block_controls_BlockControls, null, Object(react["createElement"])(media_block_controls_Toolbar, {
    controls: Object.keys(MEDIA_ALIGNMENTS_CONTROLS).map(function (control) {
      return block_controls_objectSpread({}, MEDIA_ALIGNMENTS_CONTROLS[control], {
        onClick: function onClick() {
          setAttributes({
            mediaPosition: control
          });
        },
        isActive: mediaPosition === control
      });
    })
  }), Object(react["createElement"])(alignment_controls_AlignmentToolbar, props), hasImages && Object(react["createElement"])(media_block_controls_Toolbar, null, Object(react["createElement"])(block_controls_MediaUpload, {
    type: "image",
    multiple: true,
    gallery: true,
    value: galleryImages.map(function (image) {
      return image.id;
    }),
    onSelect: updateImages,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(react["createElement"])(media_block_controls_IconButton, {
        className: "components-icon-button components-toolbar__control",
        label: media_block_controls_('Change Media', '__plugin_txtd'),
        icon: swap,
        onClick: open
      });
    }
  })));
};

/* harmony default export */ var media_block_controls = (block_controls_MediaBlockControls);
// CONCATENATED MODULE: ./src/blocks/media/inspector-controls.js


/**
 * WordPress dependencies
 */
var media_inspector_controls_ = wp.i18n.__;
var inspector_controls_Fragment = wp.element.Fragment;
var media_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var media_inspector_controls_wp$components = wp.components,
    media_inspector_controls_PanelBody = media_inspector_controls_wp$components.PanelBody,
    inspector_controls_RadioControl = media_inspector_controls_wp$components.RadioControl;

var inspector_controls_MediaInspectorControls = function MediaInspectorControls(props) {
  var _props$attributes = props.attributes,
      contentStyle = _props$attributes.contentStyle,
      blockStyle = _props$attributes.blockStyle,
      setAttributes = props.setAttributes,
      _props$settings$media = props.settings.media,
      contentAreaOptions = _props$settings$media.contentAreaOptions,
      blockAreaOptions = _props$settings$media.blockAreaOptions;
  return Object(react["createElement"])(inspector_controls_Fragment, null, Object(react["createElement"])(media_inspector_controls_InspectorControls, null, Object(react["createElement"])(media_inspector_controls_PanelBody, {
    title: media_inspector_controls_('Content Area', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(inspector_controls_RadioControl, {
    label: media_inspector_controls_('Emphasis Level', '__plugin_txtd'),
    value: contentStyle,
    selected: contentStyle,
    options: contentAreaOptions,
    onChange: function onChange(nextContentStyle) {
      return setAttributes({
        contentStyle: nextContentStyle
      });
    }
  })), Object(react["createElement"])(media_inspector_controls_PanelBody, {
    title: media_inspector_controls_('Block Area', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(inspector_controls_RadioControl, {
    label: media_inspector_controls_('Emphasis Level', '__plugin_txtd'),
    value: blockStyle,
    selected: blockStyle,
    options: blockAreaOptions,
    onChange: function onChange(nextBlockStyle) {
      return setAttributes({
        blockStyle: nextBlockStyle
      });
    }
  }))));
};

/* harmony default export */ var media_inspector_controls = (inspector_controls_MediaInspectorControls);
// CONCATENATED MODULE: ./src/blocks/media/preview.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var preview_wp$blockEditor = wp.blockEditor,
    media_preview_InnerBlocks = preview_wp$blockEditor.InnerBlocks,
    preview_MediaPlaceholder = preview_wp$blockEditor.MediaPlaceholder,
    BlockIcon = preview_wp$blockEditor.BlockIcon;

var preview_MediaPreview = function MediaPreview(props) {
  var _props$attributes = props.attributes,
      contentStyle = _props$attributes.contentStyle,
      blockStyle = _props$attributes.blockStyle,
      mediaPosition = _props$attributes.mediaPosition,
      images = _props$attributes.images,
      className = props.className,
      updateImages = props.updateImages,
      settings = props.settings;
  var classNames = classnames_default()(className, "novablocks-media", "has-image-on-the-".concat(mediaPosition), "block-is-".concat(blockStyle), "content-is-".concat(contentStyle), {
    'has-background': blockStyle !== 'basic'
  });
  var galleryImages = images.map(function (image) {
    return JSON.parse(image);
  });

  var displayImages = function displayImages(imagesArray) {
    if (0 === imagesArray.length) {
      return Object(react["createElement"])(preview_MediaPlaceholder, {
        icon: Object(react["createElement"])(BlockIcon, {
          icon: "format-gallery"
        }),
        className: "novablocks-media__placeholder",
        onSelect: updateImages,
        accept: "image/*",
        allowedTypes: ['image'],
        multiple: true
      });
    }

    return galleryImages.map(function (image) {
      return Object(react["createElement"])("div", {
        key: image.id,
        className: "novablocks-media__image"
      }, Object(react["createElement"])("img", {
        alt: image.alt,
        src: image.url
      }));
    });
  };

  return Object(react["createElement"])("div", {
    className: classNames
  }, Object(react["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, Object(react["createElement"])("div", {
    className: "wp-block",
    "data-align": "wide"
  }, Object(react["createElement"])("div", {
    className: "novablocks-media__layout"
  }, Object(react["createElement"])("div", {
    className: "novablocks-media__content"
  }, Object(react["createElement"])("div", {
    className: "novablocks-media__inner-container"
  }, Object(react["createElement"])(media_preview_InnerBlocks, {
    allowedBlocks: settings.media.allowedBlocks,
    template: settings.media.template
  }))), Object(react["createElement"])("div", {
    className: "novablocks-media__aside"
  }, displayImages(images))))));
};

/* harmony default export */ var media_preview = (preview_MediaPreview);
// CONCATENATED MODULE: ./src/blocks/media/edit.js



function media_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_edit_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */

var media_edit_Fragment = wp.element.Fragment;

var edit_MediaEdit = function MediaEdit(props) {
  function updateImages(media) {
    props.setAttributes({
      images: media.map(function (image) {
        return JSON.stringify({
          id: image.id,
          url: image.url,
          alt: image.alt
        });
      })
    });
  }

  return Object(react["createElement"])(media_edit_Fragment, null, Object(react["createElement"])(media_preview, media_edit_objectSpread({}, props, {
    updateImages: updateImages
  })), Object(react["createElement"])(media_block_controls, media_edit_objectSpread({}, props, {
    updateImages: updateImages
  })), Object(react["createElement"])(media_inspector_controls, props));
};

/* harmony default export */ var media_edit = (with_settings(edit_MediaEdit));
// CONCATENATED MODULE: ./src/blocks/media/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var media_ = wp.i18n.__;
var media_registerBlockType = wp.blocks.registerBlockType;
var media_InnerBlocks = wp.blockEditor.InnerBlocks;

function media_init() {
  media_registerBlockType('novablocks/media', {
    title: media_('Media Card Constellation', '__plugin_txtd'),
    description: media_('Display media objects alongside short pieces of content.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: icons_media,
    // Additional search terms
    keywords: [media_('image with text', '__plugin_txtd'), media_('columns', '__plugin_txtd'), media_('side text', '__plugin_txtd')],
    edit: media_edit,
    save: function save() {
      return Object(react["createElement"])(media_InnerBlocks.Content, null);
    },
    getEditWrapperProps: function getEditWrapperProps() {
      var settings = wp.data.select('core/block-editor').getSettings();
      return settings.alignWide ? {
        'data-align': 'full'
      } : {};
    }
  });
}

/* harmony default export */ var blocks_media = (media_init);
// CONCATENATED MODULE: ./src/blocks/slideshow/background.js



function slideshow_background_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function slideshow_background_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slideshow_background_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slideshow_background_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
var background_SlideshowBackground = function SlideshowBackground(props) {
  var _props$attributes = props.attributes,
      overlayFilterStyle = _props$attributes.overlayFilterStyle,
      overlayFilterStrength = _props$attributes.overlayFilterStrength,
      previewImage = props.previewImage;
  var focalPoint = previewImage.focalPoint || {
    x: 0.5,
    y: 0.5
  };

  var styles = slideshow_background_objectSpread({}, props.parallax.style, {
    opacity: 1,
    objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%'
  });

  if (overlayFilterStyle !== 'none') {
    styles.opacity = 1 - overlayFilterStrength / 100;
  }

  return Object(react["createElement"])("div", {
    className: "novablocks-mask"
  }, Object(react["createElement"])("div", {
    className: "novablocks-slideshow__background"
  }, Object(react["createElement"])("img", {
    className: "novablocks-slideshow__media",
    src: previewImage.sizes.large.url,
    alt: "",
    style: styles
  })));
};

/* harmony default export */ var slideshow_background = (background_SlideshowBackground);
// CONCATENATED MODULE: ./src/blocks/slideshow/preview.js







/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var preview_wp$element = wp.element,
    preview_Component = preview_wp$element.Component,
    preview_Fragment = preview_wp$element.Fragment;

var preview_SlideshowPreview = /*#__PURE__*/function (_Component) {
  inherits_default()(SlideshowPreview, _Component);

  function SlideshowPreview() {
    var _this;

    classCallCheck_default()(this, SlideshowPreview);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(SlideshowPreview).apply(this, arguments));
    _this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
    return _this;
  }

  createClass_default()(SlideshowPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions.bind(this));
      this.updateDimensions();
    }
  }, {
    key: "updateDimensions",
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
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          contentPadding = _this$props$attribute.contentPadding,
          contentPaddingCustom = _this$props$attribute.contentPaddingCustom,
          contentWidth = _this$props$attribute.contentWidth,
          contentWidthCustom = _this$props$attribute.contentWidthCustom,
          minHeight = _this$props$attribute.minHeight,
          verticalAlignment = _this$props$attribute.verticalAlignment,
          horizontalAlignment = _this$props$attribute.horizontalAlignment,
          contentColor = _this$props$attribute.contentColor,
          overlayFilterStyle = _this$props$attribute.overlayFilterStyle,
          galleryImages = _this$props$attribute.galleryImages,
          previewImage = _this$props.previewImage,
          className = _this$props.className;
      var classes = [className, 'novablocks-slideshow is-ready', "novablocks-u-valign-".concat(verticalAlignment), "novablocks-u-halign-".concat(horizontalAlignment), "novablocks-u-spacing-".concat(contentPadding), "novablocks-u-content-width-".concat(contentWidth), "novablocks-u-background", "novablocks-u-background-".concat(overlayFilterStyle)];
      var styles = {
        slideshow: {
          color: contentColor
        },
        content: {},
        foreground: {}
      };

      if (contentPadding === 'custom') {
        styles.foreground.paddingTop = "".concat(contentPaddingCustom, "%");
        styles.foreground.paddingBottom = "".concat(contentPaddingCustom, "%");
      }

      if (contentWidth === 'custom') {
        styles.content.maxWidth = "".concat(contentWidthCustom, "%");
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
      var attributesHeight = this.props.parallax.state.scrollContainerHeight * minHeight / 100;
      styles.slideshow.minHeight = Math.max(attributesHeight, mediaMinHeight, maxAspectRatio) + 'px';
      return Object(react["createElement"])(preview_Fragment, null, !!galleryImages.length && Object(react["createElement"])("div", {
        className: classes.join(' '),
        style: styles.slideshow
      }, Object(react["createElement"])("div", {
        className: "novablocks-slideshow__slider"
      }, Object(react["createElement"])("div", {
        className: "novablocks-slideshow__slide"
      }, previewImage && Object(react["createElement"])(preview_Fragment, null, Object(react["createElement"])(slideshow_background, this.props), Object(react["createElement"])("div", {
        className: "novablocks-slideshow__content novablocks-u-content-padding",
        style: styles.foreground
      }, Object(react["createElement"])("div", {
        className: "novablocks-u-content-align"
      }, Object(react["createElement"])("div", {
        className: "novablocks-u-content-width",
        style: styles.content
      }, !!previewImage.title && !!previewImage.title.rendered && Object(react["createElement"])("h2", null, previewImage.title.rendered), !!previewImage.caption && Object(react["createElement"])("p", null, previewImage.caption))))))), Object(react["createElement"])("div", {
        className: "novablocks-slideshow__controls"
      }, Object(react["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled",
        onClick: this.props.onPrevArrowClick
      }), Object(react["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled",
        onClick: this.props.onNextArrowClick
      }))), !galleryImages.length && Object(react["createElement"])(preview_Fragment, null, Object(react["createElement"])(gallery_options_GalleryPlaceholder, this.props), Object(react["createElement"])("div", {
        className: "novablocks-slideshow__controls"
      }, Object(react["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled"
      }), Object(react["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dimensions = this.state.dimensions;
      return Object(react["createElement"])("div", {
        ref: function ref(el) {
          return _this3.container = el;
        }
      }, dimensions && this.renderContent());
    }
  }]);

  return SlideshowPreview;
}(preview_Component);

/* harmony default export */ var slideshow_preview = (preview_SlideshowPreview);
// CONCATENATED MODULE: ./src/blocks/slideshow/inspector-controls.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var slideshow_inspector_controls_ = wp.i18n.__;
var slideshow_inspector_controls_wp$components = wp.components,
    inspector_controls_FocalPointPicker = slideshow_inspector_controls_wp$components.FocalPointPicker,
    slideshow_inspector_controls_PanelBody = slideshow_inspector_controls_wp$components.PanelBody,
    slideshow_inspector_controls_RadioControl = slideshow_inspector_controls_wp$components.RadioControl,
    slideshow_inspector_controls_RangeControl = slideshow_inspector_controls_wp$components.RangeControl;
var slideshow_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var slideshow_inspector_controls_Fragment = wp.element.Fragment;

var inspector_controls_SlideshowInspectorControls = function SlideshowInspectorControls(props) {
  var _props$attributes = props.attributes,
      galleryImages = _props$attributes.galleryImages,
      minHeight = _props$attributes.minHeight,
      slideshowType = _props$attributes.slideshowType,
      selectedIndex = props.selectedIndex,
      setIndex = props.setIndex,
      setAttributes = props.setAttributes,
      minHeightOptions = props.settings.slideshow.minHeightOptions;
  var selectedImage = galleryImages[selectedIndex];
  var focalPointPickerClassNames = ['novablocks-focal-point-picker'];

  if (selectedImage) {
    var selectedImageFocalPoint = selectedImage.focalPoint || {
      x: 0.5,
      y: 0.5
    };
    focalPointPickerClassNames.push(getSnapClassname(selectedImageFocalPoint));
  }

  focalPointPickerClassNames = focalPointPickerClassNames.join(' ');
  return Object(react["createElement"])(slideshow_inspector_controls_InspectorControls, null, !!galleryImages.length && Object(react["createElement"])(slideshow_inspector_controls_PanelBody, {
    className: 'nova-blocks-slideshow-type-panel',
    title: slideshow_inspector_controls_('Slides', '__plugin_txtd')
  }, Object(react["createElement"])(gallery_options_GalleryPreview, {
    galleryImages: galleryImages,
    onSelectImage: setIndex,
    selected: selectedIndex
  }), selectedImage && Object(react["createElement"])(slideshow_inspector_controls_Fragment, null, Object(react["createElement"])(inspector_controls_FocalPointPicker, {
    className: focalPointPickerClassNames,
    url: selectedImage.url,
    dimensions: {
      width: selectedImage.width,
      height: selectedImage.height
    },
    value: selectedImage.focalPoint || {
      x: 0.5,
      y: 0.5
    },
    onChange: function onChange(focalPoint) {
      var newGalleryImages = galleryImages;
      newGalleryImages[selectedIndex].focalPoint = maybeSnapFocalPoint(focalPoint);
      setAttributes({
        galleryImages: newGalleryImages
      });
    }
  }))), 'gallery' === slideshowType && Object(react["createElement"])(slideshow_inspector_controls_Fragment, null, Object(react["createElement"])(layout_panel, props), Object(react["createElement"])(slideshow_inspector_controls_PanelBody, {
    title: slideshow_inspector_controls_('Height', '__plugin_txtd'),
    initialOpen: false
  }, Object(react["createElement"])(slideshow_inspector_controls_RadioControl, {
    label: slideshow_inspector_controls_('Minimum Height', '__plugin_txtd'),
    selected: minHeight,
    onChange: function onChange(nextMinHeight) {
      setAttributes({
        minHeight: parseInt(nextMinHeight, 10)
      });
    },
    options: minHeightOptions
  }))), 'gallery' !== slideshowType && Object(react["createElement"])(slideshow_inspector_controls_PanelBody, null, slideshow_inspector_controls_('Coming Soon', '__plugin_txtd')));
};

/* harmony default export */ var slideshow_inspector_controls = (inspector_controls_SlideshowInspectorControls);
// CONCATENATED MODULE: ./src/blocks/slideshow/block-controls.js



function slideshow_block_controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function slideshow_block_controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slideshow_block_controls_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slideshow_block_controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var slideshow_block_controls_ = wp.i18n.__;
var slideshow_block_controls_wp$components = wp.components,
    slideshow_block_controls_IconButton = slideshow_block_controls_wp$components.IconButton,
    slideshow_block_controls_Toolbar = slideshow_block_controls_wp$components.Toolbar;
var slideshow_block_controls_BlockControls = wp.blockEditor.BlockControls;
var slideshow_block_controls_MediaUpload = wp.blockEditor.MediaUpload;

var block_controls_SlideshowBlockControls = function SlideshowBlockControls(props) {
  var galleryImages = props.attributes.galleryImages,
      setAttributes = props.setAttributes;

  var onChangeGallery = function onChangeGallery(newGalleryImages) {
    var promises = newGalleryImages.map(function (image, index) {
      return wp.apiRequest({
        path: '/wp/v2/media/' + image.id
      }).then(function (newImage) {
        newGalleryImages[index] = slideshow_block_controls_objectSpread({}, newImage, {}, image);
      });
    });
    Promise.all(promises).then(function () {
      setAttributes({
        galleryImages: newGalleryImages.filter(function (image) {
          if (!image.sizes.large) {
            image.sizes.large = image.sizes.full;
          }

          return !!image.id && !!image.sizes && !!image.sizes.large && !!image.sizes.large.url;
        })
      });
    });
  };

  return Object(react["createElement"])(slideshow_block_controls_BlockControls, null, Object(react["createElement"])(alignment_controls_AlignmentToolbar, props), Object(react["createElement"])(color_controls_ColorToolbar, props), Object(react["createElement"])(slideshow_block_controls_Toolbar, null, Object(react["createElement"])(slideshow_block_controls_MediaUpload, {
    type: "image",
    multiple: true,
    gallery: true,
    value: galleryImages.map(function (image) {
      return image.id;
    }),
    onSelect: onChangeGallery,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(react["createElement"])(slideshow_block_controls_IconButton, {
        className: "components-icon-button components-toolbar__control",
        label: slideshow_block_controls_('Change Media', '__plugin_txtd'),
        icon: swap,
        onClick: open
      });
    }
  })));
};

/* harmony default export */ var slideshow_block_controls = (block_controls_SlideshowBlockControls);
// CONCATENATED MODULE: ./src/blocks/slideshow/edit.js









function slideshow_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function slideshow_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slideshow_edit_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slideshow_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */





/**
 * WordPress dependencies
 */

var slideshow_edit_ = wp.i18n.__;
var slideshow_edit_wp$element = wp.element,
    slideshow_edit_Component = slideshow_edit_wp$element.Component,
    slideshow_edit_Fragment = slideshow_edit_wp$element.Fragment;
var slideshow_edit_wp$compose = wp.compose,
    slideshow_edit_compose = slideshow_edit_wp$compose.compose,
    slideshow_edit_createHigherOrderComponent = slideshow_edit_wp$compose.createHigherOrderComponent;

var slideshow_edit_Edit = /*#__PURE__*/function (_Component) {
  inherits_default()(Edit, _Component);

  function Edit() {
    var _this;

    classCallCheck_default()(this, Edit);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Edit).apply(this, arguments));
    _this.state = {
      selectedIndex: 0
    };
    return _this;
  }

  createClass_default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          galleryImages = _this$props.attributes.galleryImages,
          clientId = _this$props.clientId,
          defaultImages = _this$props.settings.slideshow.defaultImages;

      if (!galleryImages.length) {
        wp.data.dispatch('core/block-editor').updateBlockAttributes(clientId, {
          galleryImages: shuffleArray(defaultImages.slice(0))
        });
      }
    }
  }, {
    key: "onPrevArrowClick",
    value: function onPrevArrowClick() {
      var galleryImages = this.props.attributes.galleryImages;
      var selectedIndex = this.state.selectedIndex;
      var newIndex = (selectedIndex + galleryImages.length - 1) % galleryImages.length;
      this.setState({
        selectedIndex: newIndex
      });
    }
  }, {
    key: "onNextArrowClick",
    value: function onNextArrowClick() {
      var galleryImages = this.props.attributes.galleryImages;
      var selectedIndex = this.state.selectedIndex;
      var newIndex = (selectedIndex + 1) % galleryImages.length;
      this.setState({
        selectedIndex: newIndex
      });
    }
  }, {
    key: "setIndex",
    value: function setIndex(selectedIndex) {
      this.setState({
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var galleryImages = this.props.attributes.galleryImages;
      var setIndex = this.setIndex.bind(this);
      var selectedIndex = this.state.selectedIndex;

      if (selectedIndex >= galleryImages.length) {
        selectedIndex = galleryImages.length - 1;
      }

      return Object(react["createElement"])(slideshow_edit_Fragment, null, Object(react["createElement"])(slideshow_preview, extends_default()({}, this.props, {
        previewImage: galleryImages[selectedIndex],
        onPrevArrowClick: this.onPrevArrowClick.bind(this),
        onNextArrowClick: this.onNextArrowClick.bind(this)
      })), Object(react["createElement"])(slideshow_inspector_controls, slideshow_edit_objectSpread({}, this.props, {
        setIndex: setIndex,
        selectedIndex: selectedIndex
      })), Object(react["createElement"])(slideshow_block_controls, this.props));
    }
  }]);

  return Edit;
}(slideshow_edit_Component);

/* harmony default export */ var slideshow_edit = (slideshow_edit_createHigherOrderComponent(slideshow_edit_compose([with_settings, with_parallax]))(slideshow_edit_Edit));
// CONCATENATED MODULE: ./src/blocks/slideshow/index.js


/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var slideshow_ = wp.i18n.__;
var slideshow_registerBlockType = wp.blocks.registerBlockType;
var slideshow_InnerBlocks = wp.blockEditor.InnerBlocks;

function slideshow_init() {
  slideshow_registerBlockType('novablocks/slideshow', {
    title: slideshow_('Slideshow Me the Way', '__plugin_txtd'),
    description: slideshow_('Display more than one piece of content in a single, coveted space.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: slideshow,
    // Additional search terms
    keywords: [slideshow_('slider', '__plugin_txtd'), slideshow_('carousel', '__plugin_txtd'), slideshow_('images', '__plugin_txtd'), slideshow_('cover', '__plugin_txtd')],
    edit: slideshow_edit,
    save: function save() {
      return Object(react["createElement"])(slideshow_InnerBlocks.Content, null);
    },
    getEditWrapperProps: function getEditWrapperProps() {
      var settings = wp.data.select('core/block-editor').getSettings();
      return settings.alignWide ? {
        'data-align': 'full'
      } : {};
    }
  });
}

/* harmony default export */ var blocks_slideshow = (slideshow_init);
// CONCATENATED MODULE: ./src/blocks/navigation/edit.js






var navigation_edit_ = wp.i18n.__;
var navigation_edit_Component = wp.element.Component;

var navigation_edit_Edit = /*#__PURE__*/function (_Component) {
  inherits_default()(Edit, _Component);

  function Edit() {
    classCallCheck_default()(this, Edit);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Edit).apply(this, arguments));
  }

  createClass_default()(Edit, [{
    key: "render",
    value: function render() {
      var slug = this.props.attributes.slug;
      return [Object(react["createElement"])(wp.serverSideRender, {
        block: "novablocks/navigation",
        attributes: this.props.attributes
      })];
    }
  }]);

  return Edit;
}(navigation_edit_Component);


// CONCATENATED MODULE: ./src/blocks/navigation/index.js
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var navigation_ = wp.i18n.__;
var navigation_registerBlockType = wp.blocks.registerBlockType;

function navigation_init() {
  navigation_registerBlockType('novablocks/navigation', {
    title: navigation_('Space Navigation', '__plugin_txtd'),
    description: navigation_('Outputs chosen navigaiton menu markup.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: navigation,
    // Additional search terms
    keywords: [navigation_('menu', '__plugin_txtd'), navigation_('site menu', '__plugin_txtd'), navigation_('primary', '__plugin_txtd'), navigation_('secondary', '__plugin_txtd')],
    parent: ['novablocks/header'],
    save: function save() {},
    edit: navigation_edit_Edit
  });
}

/* harmony default export */ var blocks_navigation = (navigation_init);
// CONCATENATED MODULE: ./src/blocks/menu-food/inspector-controls.js


/**
 * WordPress dependencies
 */
var menu_food_inspector_controls_ = wp.i18n.__;
var menu_food_inspector_controls_Fragment = wp.element.Fragment;
var menu_food_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var menu_food_inspector_controls_wp$components = wp.components,
    menu_food_inspector_controls_PanelBody = menu_food_inspector_controls_wp$components.PanelBody,
    menu_food_inspector_controls_ToggleControl = menu_food_inspector_controls_wp$components.ToggleControl;

var inspector_controls_FoodMenuInspectorControls = function FoodMenuInspectorControls(props) {
  var enableTwoColumns = props.attributes.enableTwoColumns,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(menu_food_inspector_controls_Fragment, null, Object(react["createElement"])(menu_food_inspector_controls_InspectorControls, null, Object(react["createElement"])(menu_food_inspector_controls_PanelBody, {
    title: menu_food_inspector_controls_('Layout', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(menu_food_inspector_controls_ToggleControl, {
    label: menu_food_inspector_controls_('2 columns', '__plugin_txtd'),
    checked: enableTwoColumns,
    onChange: function onChange() {
      return setAttributes({
        enableTwoColumns: !enableTwoColumns
      });
    }
  }))));
};

/* harmony default export */ var menu_food_inspector_controls = (inspector_controls_FoodMenuInspectorControls);
// CONCATENATED MODULE: ./src/blocks/menu-food/preview.js


/**
 * External dependencies
 */

var preview_ = wp.i18n.__;
var menu_food_preview_InnerBlocks = wp.blockEditor.InnerBlocks;
var createBlock = wp.blocks.createBlock;
var preview_IconButton = wp.components.IconButton;
var ALLOWED_BLOCKS = ['novablocks/menu-food-section'];
var TEMPLATE = [['novablocks/menu-food-section', {
  sectionTitle: 'Starters'
}, [['novablocks/menu-food-item', {
  title: 'Pea & Mint Soup',
  description: 'Server with focaccia bread',
  price: '$8.00',
  enableSalePrice: true,
  salePrice: '$5.00'
}], ['novablocks/menu-food-item', {
  title: 'Beaf Meatballs',
  description: 'In a spicy tomato sauce',
  price: '$10.50'
}], ['novablocks/menu-food-item', {
  title: 'Hummus & Baba Ganoush Dip',
  description: 'Olive & grilled flatbread',
  price: '$12.00'
}]]], ['novablocks/menu-food-section', {
  sectionTitle: 'Desserts'
}, [['novablocks/menu-food-item', {
  title: 'Dark Chocolate & Brownie Delice',
  description: 'Fudge bits & salted caramel ice cream',
  price: '$6.50'
}], ['novablocks/menu-food-item', {
  title: 'Berry Cheesecake Trifle',
  description: 'Fresh raspberries & strawberries, sable cookie',
  price: '$6.50',
  enableHighlightFoodItem: true,
  highlightLabel: 'New'
}], ['novablocks/menu-food-item', {
  title: 'Caramelised Lemon Tart',
  description: 'Meringue crisps, gin & tonic ice cream',
  price: '$6.50'
}]]], ['novablocks/menu-food-section', {
  sectionTitle: 'Main Course'
}, [['novablocks/menu-food-item', {
  title: 'The Classic Burger',
  description: 'Chargrilled, with or without bacon, on a brioche bun & fries',
  price: '$15.50'
}], ['novablocks/menu-food-item', {
  title: 'Roast Salmon',
  description: 'Hollandaise sauce, green beans & potato galette',
  price: '$19.50'
}], ['novablocks/menu-food-item', {
  title: 'Tagliatelle Pesto Chicken',
  description: 'Roasted Mediterranean vegetables, tomato and herb sauce',
  price: '$15.00',
  enableHighlightFoodItem: true,
  highlightLabel: 'Chef Selection'
}], ['novablocks/menu-food-item', {
  title: 'Confit de Canard ',
  description: 'Duck confit, white bean & ham cassoulet, wilted spinach',
  price: '$12.15'
}], ['novablocks/menu-food-item', {
  title: 'Roasted Steak Roulade',
  description: 'Mint parsley with apple cider vinegar, salt, sugar & spices',
  price: '$14.95'
}], ['novablocks/menu-food-item', {
  title: 'Cornish-mackerel',
  description: 'Marinated tomatoes, fragrant curry, tamarillo',
  price: '$10.45'
}], ['novablocks/menu-food-item', {
  title: 'Lobster & Cucumber Soup',
  description: 'Lobster salad, smoked onion, rock samphire & sorrel',
  price: '$24.95'
}]]]];

var preview_FoodMenuPreview = function FoodMenuPreview(props) {
  var enableTwoColumns = props.attributes.enableTwoColumns,
      clientId = props.clientId,
      className = props.className;

  var addFoodMenuSection = function addFoodMenuSection() {
    var block = createBlock('novablocks/menu-food-section');
    var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
  };

  var classNames = classnames_default()(className, "nova-food-menu", {
    'nova-food-menu--layout': enableTwoColumns === true
  });
  return Object(react["createElement"])("div", {
    className: classNames
  }, Object(react["createElement"])(menu_food_preview_InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: false
  }), Object(react["createElement"])(preview_IconButton, {
    className: "components-button block-editor-button-block-appender nova-blocks-appender",
    label: preview_('Add New Menu Section', '__plugin_txtd'),
    icon: "insert",
    onClick: addFoodMenuSection
  }, preview_('Add Menu Section', '__plugin_txtd')));
};

/* harmony default export */ var menu_food_preview = (preview_FoodMenuPreview);
// CONCATENATED MODULE: ./src/blocks/menu-food/edit.js


/**
 * WordPress dependencies
 */
var menu_food_edit_Fragment = wp.element.Fragment;
/**
 * Internal dependencies
 */




var edit_FoodMenuEdit = function FoodMenuEdit(props) {
  return Object(react["createElement"])(menu_food_edit_Fragment, null, Object(react["createElement"])(menu_food_preview, props), Object(react["createElement"])(menu_food_inspector_controls, props));
};

/* harmony default export */ var menu_food_edit = (edit_FoodMenuEdit);
// CONCATENATED MODULE: ./src/blocks/menu-food/save.js


/**
 * External dependencies
 */

var save_ = wp.i18n.__;
var save_InnerBlocks = wp.blockEditor.InnerBlocks;

var save_FoodMenuSave = function FoodMenuSave(props) {
  var enableTwoColumns = props.attributes.enableTwoColumns,
      className = props.className;
  var classNames = classnames_default()(className, "nova-food-menu", {
    'nova-food-menu--layout': enableTwoColumns === true
  });
  return Object(react["createElement"])("div", {
    className: classNames,
    itemScope: true,
    itemType: "http://schema.org/Menu"
  }, Object(react["createElement"])(save_InnerBlocks.Content, null));
};

/* harmony default export */ var menu_food_save = (save_FoodMenuSave);
// CONCATENATED MODULE: ./src/blocks/menu-food/index.js
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var menu_food_ = wp.i18n.__;
var menu_food_registerBlockType = wp.blocks.registerBlockType;
var menu_food_select = wp.data.select;

function menu_food_init() {
  menu_food_registerBlockType('novablocks/menu-food', {
    title: menu_food_('Food Menu', '__plugin_txtd'),
    description: menu_food_('Display a list of food or drink items available at your venue.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: foodmenu,
    // Additional search terms
    keywords: [menu_food_('food menu', '__plugin_txtd'), menu_food_('restaurant menu', '__plugin_txtd'), menu_food_('dishes', '__plugin_txtd'), menu_food_('eats', '__plugin_txtd'), menu_food_('menu list', '__plugin_txtd')],
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
      var settings = menu_food_select('core/block-editor').getSettings();
      return settings.alignWide ? {
        'data-align': 'wide'
      } : {};
    },
    edit: menu_food_edit,
    save: menu_food_save
  });
}

/* harmony default export */ var menu_food = (menu_food_init);
// CONCATENATED MODULE: ./src/blocks/menu-food-section/preview.js


/**
 * WordPress dependencies
 */

var menu_food_section_preview_ = wp.i18n.__;
var menu_food_section_preview_wp$blockEditor = wp.blockEditor,
    menu_food_section_preview_InnerBlocks = menu_food_section_preview_wp$blockEditor.InnerBlocks,
    preview_RichText = menu_food_section_preview_wp$blockEditor.RichText;
var preview_createBlock = wp.blocks.createBlock;
var menu_food_section_preview_IconButton = wp.components.IconButton;
/**
 * Internal dependencies.
 */

var preview_ALLOWED_BLOCKS = ['novablocks/menu-food-item'];
var preview_TEMPLATE = [['novablocks/menu-food-item']];

var preview_FoodMenuSectionPreview = function FoodMenuSectionPreview(props) {
  var sectionTitle = props.attributes.sectionTitle,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      className = props.className;

  var addFoodMenuItem = function addFoodMenuItem() {
    var block = preview_createBlock('novablocks/menu-food-item');
    var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
  };

  var classNames = classnames_default()(className, "nova-food-menu__section");
  return Object(react["createElement"])("div", {
    className: classNames
  }, Object(react["createElement"])("header", {
    className: "nova-food-menu__header"
  }, Object(react["createElement"])(preview_RichText, {
    tagName: "h3",
    className: "section-title",
    value: sectionTitle,
    onChange: function onChange(sectionTitle) {
      return setAttributes({
        sectionTitle: sectionTitle
      });
    }
  })), Object(react["createElement"])("div", {
    className: "nova-food-menu__items"
  }, Object(react["createElement"])(menu_food_section_preview_InnerBlocks, {
    allowedBlocks: preview_ALLOWED_BLOCKS,
    template: preview_TEMPLATE,
    renderAppender: false
  })), Object(react["createElement"])(menu_food_section_preview_IconButton, {
    className: "components-button block-editor-button-block-appender nova-blocks-appender",
    label: menu_food_section_preview_('Add New Menu Item', '__plugin_txtd'),
    icon: "insert",
    onClick: addFoodMenuItem
  }, menu_food_section_preview_('Add Menu Item', '__plugin_txtd')));
};

/* harmony default export */ var menu_food_section_preview = (preview_FoodMenuSectionPreview);
// CONCATENATED MODULE: ./src/blocks/menu-food-section/edit.js


/**
 * WordPress dependencies
 */
var menu_food_section_edit_Fragment = wp.element.Fragment;
/**
 * Internal dependencies
 */



var edit_FoodMenuSectionEdit = function FoodMenuSectionEdit(props) {
  return Object(react["createElement"])(menu_food_section_edit_Fragment, null, Object(react["createElement"])(menu_food_section_preview, props));
};

/* harmony default export */ var menu_food_section_edit = (edit_FoodMenuSectionEdit);
// CONCATENATED MODULE: ./src/blocks/menu-food-section/save.js


/**
 * WordPress dependencies
 */

var menu_food_section_save_ = wp.i18n.__;
var save_wp$blockEditor = wp.blockEditor,
    menu_food_section_save_InnerBlocks = save_wp$blockEditor.InnerBlocks,
    menu_food_section_save_RichText = save_wp$blockEditor.RichText;

var save_FoodMenuSectionSave = function FoodMenuSectionSave(props) {
  var sectionTitle = props.attributes.sectionTitle,
      setAttributes = props.setAttributes,
      className = props.className;
  var classNames = classnames_default()(className, "nova-food-menu__section");
  return Object(react["createElement"])("div", {
    className: classNames,
    itemScope: true,
    itemType: "http://schema.org/MenuSection"
  }, Object(react["createElement"])("header", {
    className: "nova-food-menu__header"
  }, Object(react["createElement"])(menu_food_section_save_RichText.Content, {
    tagName: "h3",
    className: "section-title",
    value: sectionTitle,
    onChange: function onChange(sectionTitle) {
      return setAttributes({
        sectionTitle: sectionTitle
      });
    },
    itemprop: "name"
  })), Object(react["createElement"])("div", {
    className: "nova-food-menu__items"
  }, Object(react["createElement"])(menu_food_section_save_InnerBlocks.Content, null)));
};

/* harmony default export */ var menu_food_section_save = (save_FoodMenuSectionSave);
// CONCATENATED MODULE: ./src/blocks/menu-food-section/index.js
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var menu_food_section_ = wp.i18n.__;
var menu_food_section_registerBlockType = wp.blocks.registerBlockType;

function menu_food_section_init() {
  menu_food_section_registerBlockType('novablocks/menu-food-section', {
    title: menu_food_section_('Food Menu Section', '__plugin_txtd'),
    description: menu_food_section_('A subgrouping of the Menu.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: foodmenu,
    // Additional search terms
    keywords: [menu_food_section_('menu section', '__plugin_txtd'), menu_food_section_('food section', '__plugin_txtd'), menu_food_section_('list section', '__plugin_txtd'), menu_food_section_('dishes section', '__plugin_txtd')],
    parent: ['novablocks/menu-food'],
    attributes: {
      sectionTitle: {
        type: 'string',
        default: menu_food_section_('Drinks', '__plugin_txtd')
      }
    },
    edit: menu_food_section_edit,
    save: menu_food_section_save
  });
}

/* harmony default export */ var menu_food_section = (menu_food_section_init);
// CONCATENATED MODULE: ./src/blocks/menu-food-item/preview.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var menu_food_item_preview_RichText = wp.blockEditor.RichText;
var menu_food_item_preview_ = wp.i18n.__;

var preview_FoodMenuItemPreview = function FoodMenuItemPreview(props) {
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
  var classNames = classnames_default()(className, "nova-food-menu-item", {
    'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
    'has-sale-price': enableSalePrice === true
  });
  return Object(react["createElement"])("div", {
    className: classNames
  }, enableHighlightFoodItem && Object(react["createElement"])("div", {
    className: "nova-food-menu-item__highlight-label"
  }, Object(react["createElement"])(menu_food_item_preview_RichText, {
    tagName: "h5",
    className: "nova-food-menu-item__label",
    value: highlightLabel,
    onChange: function onChange(highlightLabel) {
      return setAttributes({
        highlightLabel: highlightLabel
      });
    },
    allowedFormats: []
  })), Object(react["createElement"])("div", {
    className: "nova-food-menu-item__title"
  }, Object(react["createElement"])(menu_food_item_preview_RichText, {
    value: title,
    tagName: "h4",
    className: "item-title",
    placeholder: menu_food_item_preview_('Product Title', '__plugin_txtd'),
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  })), Object(react["createElement"])("div", {
    className: "nova-food-menu-item__prices"
  }, Object(react["createElement"])(menu_food_item_preview_RichText, {
    value: price,
    tagName: "span",
    className: "item-price",
    placeholder: menu_food_item_preview_('$0.00', '__plugin_txtd'),
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    }
  }), enableSalePrice && Object(react["createElement"])("div", {
    className: "nova-food-menu-item__price--sale"
  }, Object(react["createElement"])(menu_food_item_preview_RichText, {
    tagName: "span",
    className: "item-price--sale",
    value: salePrice,
    onChange: function onChange(salePrice) {
      return setAttributes({
        salePrice: salePrice
      });
    },
    allowedFormats: []
  }))), Object(react["createElement"])("div", {
    className: "nova-food-menu-item__description"
  }, Object(react["createElement"])(menu_food_item_preview_RichText, {
    value: description,
    tagName: "p",
    className: "item-description",
    placeholder: menu_food_item_preview_('Product Description', '__plugin_txtd'),
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  })));
};

/* harmony default export */ var menu_food_item_preview = (preview_FoodMenuItemPreview);
// CONCATENATED MODULE: ./src/blocks/menu-food-item/inspector-controls.js


/**
 * WordPress dependencies
 */
var menu_food_item_inspector_controls_ = wp.i18n.__;
var menu_food_item_inspector_controls_Fragment = wp.element.Fragment;
var menu_food_item_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var menu_food_item_inspector_controls_wp$components = wp.components,
    menu_food_item_inspector_controls_PanelBody = menu_food_item_inspector_controls_wp$components.PanelBody,
    menu_food_item_inspector_controls_ToggleControl = menu_food_item_inspector_controls_wp$components.ToggleControl;

var inspector_controls_FoodMenuItemInspectorControls = function FoodMenuItemInspectorControls(props) {
  var _props$attributes = props.attributes,
      enableHighlightFoodItem = _props$attributes.enableHighlightFoodItem,
      enableSalePrice = _props$attributes.enableSalePrice,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(menu_food_item_inspector_controls_Fragment, null, Object(react["createElement"])(menu_food_item_inspector_controls_InspectorControls, null, Object(react["createElement"])(menu_food_item_inspector_controls_PanelBody, {
    title: menu_food_item_inspector_controls_('Menu Item', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(menu_food_item_inspector_controls_ToggleControl, {
    label: menu_food_item_inspector_controls_('Highlight item', '__plugin_txtd'),
    help: menu_food_item_inspector_controls_('Use it if you want to highlight some of the menu items and make them stand out.', '__plugin_txtd'),
    checked: enableHighlightFoodItem,
    onChange: function onChange() {
      return setAttributes({
        enableHighlightFoodItem: !enableHighlightFoodItem
      });
    }
  }), Object(react["createElement"])(menu_food_item_inspector_controls_ToggleControl, {
    label: menu_food_item_inspector_controls_('On sale', '__plugin_txtd'),
    checked: enableSalePrice,
    onChange: function onChange() {
      return setAttributes({
        enableSalePrice: !enableSalePrice
      });
    }
  }))));
};

/* harmony default export */ var menu_food_item_inspector_controls = (inspector_controls_FoodMenuItemInspectorControls);
// CONCATENATED MODULE: ./src/blocks/menu-food-item/edit.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var menu_food_item_edit_Fragment = wp.element.Fragment;
var menu_food_item_edit_BlockControls = wp.blockEditor.BlockControls;

var edit_FoodMenuItem = function FoodMenuItem(props) {
  return Object(react["createElement"])(menu_food_item_edit_Fragment, null, Object(react["createElement"])(menu_food_item_preview, props), Object(react["createElement"])(menu_food_item_inspector_controls, props));
};

/* harmony default export */ var menu_food_item_edit = (edit_FoodMenuItem);
// CONCATENATED MODULE: ./src/blocks/menu-food-item/save.js


/**
 * WordPress dependencies.
 */

var menu_food_item_save_ = wp.i18n.__;
var menu_food_item_save_RichText = wp.blockEditor.RichText;

var save_FoodMenuItemSave = function FoodMenuItemSave(props) {
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
  var classNames = classnames_default()(className, "nova-food-menu-item", {
    'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
    'has-sale-price': enableSalePrice === true
  });
  return Object(react["createElement"])("div", {
    className: classNames,
    itemscope: true,
    itemtype: "http://schema.org/MenuItem"
  }, enableHighlightFoodItem && Object(react["createElement"])("div", {
    className: "nova-food-menu-item__highlight-label"
  }, Object(react["createElement"])("h5", {
    className: "nova-food-menu-item__label"
  }, " ", highlightLabel, " ")), Object(react["createElement"])("div", {
    className: "nova-food-menu-item__title"
  }, Object(react["createElement"])(menu_food_item_save_RichText.Content, {
    value: title,
    tagName: "h4",
    className: "item-title",
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    itemprop: "name"
  })), Object(react["createElement"])("div", {
    className: "nova-food-menu-item__prices",
    itemscope: true,
    itemtype: "http://schema.org/offers"
  }, Object(react["createElement"])(menu_food_item_save_RichText.Content, {
    value: price,
    tagName: "span",
    className: "item-price",
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    },
    itemprop: "price"
  }), enableSalePrice && Object(react["createElement"])("div", {
    className: "nova-food-menu-item__price--sale"
  }, Object(react["createElement"])("span", {
    className: "item-price--sale"
  }, " ", salePrice, " "))), Object(react["createElement"])("div", {
    className: "nova-food-menu-item__description"
  }, Object(react["createElement"])(menu_food_item_save_RichText.Content, {
    value: description,
    tagName: "p",
    className: "item-description",
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    },
    itemprop: "description"
  })));
};

/* harmony default export */ var menu_food_item_save = (save_FoodMenuItemSave);
// CONCATENATED MODULE: ./src/blocks/menu-food-item/index.js
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var menu_food_item_ = wp.i18n.__;
var menu_food_item_registerBlockType = wp.blocks.registerBlockType;

function menu_food_item_init() {
  menu_food_item_registerBlockType('novablocks/menu-food-item', {
    title: menu_food_item_('Menu Item', '__plugin_txtd'),
    description: menu_food_item_('A food or drink item contained in a menu or menu section.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: foodmenu,
    // Additional search terms
    keywords: [menu_food_item_('menu item', '__plugin_txtd'), menu_food_item_('food item', '__plugin_txtd'), menu_food_item_('dish', '__plugin_txtd'), menu_food_item_('list item', '__plugin_txtd')],
    parent: ['novablocks/menu-food-section'],
    attributes: {
      title: {
        type: 'string',
        default: menu_food_item_('Sweet Shrimp Salad', '__plugin_txtd')
      },
      description: {
        type: 'string',
        default: menu_food_item_('Tomatillo, Baja Crema, Cabbage, Fried Okra', '__plugin_txtd')
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
        default: menu_food_item_('Our top pick', '__plugin_txtd')
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
    edit: menu_food_item_edit,
    save: menu_food_item_save
  });
}

/* harmony default export */ var menu_food_item = (menu_food_item_init);
// EXTERNAL MODULE: ./node_modules/@wordpress/is-shallow-equal/index.js
var is_shallow_equal = __webpack_require__(19);
var is_shallow_equal_default = /*#__PURE__*/__webpack_require__.n(is_shallow_equal);

// CONCATENATED MODULE: ./src/blocks/opentable/preview.js








/**
 * WordPress dependencies
 */

var opentable_preview_ = wp.i18n.__;
var opentable_preview_Component = wp.element.Component;
var SandBox = wp.components.SandBox;

var preview_OpenTablePreview = /*#__PURE__*/function (_Component) {
  inherits_default()(OpenTablePreview, _Component);

  function OpenTablePreview() {
    classCallCheck_default()(this, OpenTablePreview);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(OpenTablePreview).apply(this, arguments));
  }

  createClass_default()(OpenTablePreview, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(prevProps) {
      return !is_shallow_equal_default()(prevProps.attributes, this.props.attributes);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          restaurantId = _this$props$attribute.restaurantId,
          language = _this$props$attribute.language,
          layoutForm = _this$props$attribute.layoutForm,
          showOpenTableLogo = _this$props$attribute.showOpenTableLogo,
          className = _this$props.className;
      var classNames = classnames_default()(className, "novablocks-opentable", "novablocks-opentable__".concat(layoutForm), {
        'has-opentable-logo': showOpenTableLogo === true
      });

      var OpenTable = function OpenTable(props) {
        return Object(react["createElement"])(SandBox, props);
      };

      var html = "<div class=\"novablocks-opentable ".concat(classNames, "\">") + "<script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=".concat(restaurantId, "&type=standard&theme=").concat(layoutForm, "&iframe=false&overlay=false&domain=com&lang=").concat(language, "'></script>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.frontend_blocks_stylesheet, "\" type=\"text/css\"/>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.editor_blocks_stylesheet, "\" type=\"text/css\"/>") + '</div>';
      return Object(react["createElement"])(OpenTable, {
        html: html,
        title: "Sandbox",
        type: "embed"
      });
    }
  }]);

  return OpenTablePreview;
}(opentable_preview_Component);

/* harmony default export */ var opentable_preview = (preview_OpenTablePreview);
// CONCATENATED MODULE: ./src/blocks/opentable/inspector-controls.js


/**
 * WordPress dependencies
 */
var opentable_inspector_controls_ = wp.i18n.__;
var opentable_inspector_controls_Fragment = wp.element.Fragment;
var opentable_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var opentable_inspector_controls_wp$components = wp.components,
    opentable_inspector_controls_PanelBody = opentable_inspector_controls_wp$components.PanelBody,
    inspector_controls_TextControl = opentable_inspector_controls_wp$components.TextControl,
    opentable_inspector_controls_ToggleControl = opentable_inspector_controls_wp$components.ToggleControl,
    opentable_inspector_controls_RadioControl = opentable_inspector_controls_wp$components.RadioControl,
    opentable_inspector_controls_SelectControl = opentable_inspector_controls_wp$components.SelectControl;

var inspector_controls_OpenTableInspectorControls = function OpenTableInspectorControls(props) {
  var _props$attributes = props.attributes,
      restaurantId = _props$attributes.restaurantId,
      language = _props$attributes.language,
      layoutForm = _props$attributes.layoutForm,
      showOpenTableLogo = _props$attributes.showOpenTableLogo,
      setAttributes = props.setAttributes;
  return Object(react["createElement"])(opentable_inspector_controls_Fragment, null, Object(react["createElement"])(opentable_inspector_controls_InspectorControls, null, Object(react["createElement"])(opentable_inspector_controls_PanelBody, {
    title: opentable_inspector_controls_('Settings', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(inspector_controls_TextControl, {
    label: "Restaurant ID",
    placeholder: opentable_inspector_controls_('1'),
    help: "You can find your restaurant ID on the OpenTable website.",
    type: "number",
    value: restaurantId,
    onChange: function onChange(restaurantId) {
      return setAttributes({
        restaurantId: restaurantId
      });
    }
  }), Object(react["createElement"])(opentable_inspector_controls_SelectControl, {
    label: "Language",
    value: language,
    options: [{
      label: 'English-EN',
      value: 'en-US'
    }, {
      label: 'Français-CA',
      value: 'fr-CA'
    }, {
      label: 'Deutsch-DE',
      value: 'de-DE'
    }, {
      label: 'Español-MX',
      value: 'es-MX'
    }, {
      label: '日本語-JP',
      value: 'ja-JP'
    }, {
      label: 'Nederlands-NL',
      value: 'nl-NL'
    }, {
      label: 'Italiano-IT',
      value: 'it-IT'
    }],
    onChange: function onChange(nextLanguage) {
      return setAttributes({
        language: nextLanguage
      });
    }
  }), Object(react["createElement"])(opentable_inspector_controls_RadioControl, {
    label: opentable_inspector_controls_('Layout', '__plugin_txtd'),
    value: layoutForm,
    selected: layoutForm,
    options: [{
      label: 'Horizontal',
      value: 'wide'
    }, {
      label: 'Vertical',
      value: 'standard'
    }],
    onChange: function onChange(nextLayout) {
      return setAttributes({
        layoutForm: nextLayout
      });
    }
  }), Object(react["createElement"])(opentable_inspector_controls_ToggleControl, {
    label: opentable_inspector_controls_('Show OpenTable Logo', '__plugin_txtd'),
    checked: showOpenTableLogo,
    onChange: function onChange() {
      return setAttributes({
        showOpenTableLogo: !showOpenTableLogo
      });
    }
  }))));
};

/* harmony default export */ var opentable_inspector_controls = (inspector_controls_OpenTableInspectorControls);
// CONCATENATED MODULE: ./src/blocks/opentable/edit.js



/**
 * WordPress dependencies
 */

var opentable_edit_Fragment = wp.element.Fragment;

var edit_OpenTable = function OpenTable(props) {
  return Object(react["createElement"])(opentable_edit_Fragment, null, Object(react["createElement"])(opentable_preview, props), Object(react["createElement"])(opentable_inspector_controls, props));
};

/* harmony default export */ var opentable_edit = (edit_OpenTable);
// CONCATENATED MODULE: ./src/blocks/opentable/save.js


/**
 * WordPress dependencies.
 */

var opentable_save_ = wp.i18n.__;

var save_OpenTableSave = function OpenTableSave(props) {
  var _props$attributes = props.attributes,
      restaurantId = _props$attributes.restaurantId,
      language = _props$attributes.language,
      showOpenTableLogo = _props$attributes.showOpenTableLogo,
      layoutForm = _props$attributes.layoutForm,
      className = props.className;
  var formSrc = "//www.opentable.com/widget/reservation/loader?rid=".concat(restaurantId, "&domain=com&type=standard&theme=").concat(layoutForm, "&iframe=false&overlay=false&domain=com&lang=").concat(language);
  var classNames = classnames_default()(className, "novablocks-opentable", "novablocks-opentable__".concat(layoutForm), {
    'has-opentable-logo': showOpenTableLogo === true
  });
  return Object(react["createElement"])("div", {
    className: classNames
  }, Object(react["createElement"])("script", {
    type: "text/javascript",
    src: formSrc
  }));
};

/* harmony default export */ var opentable_save = (save_OpenTableSave);
// CONCATENATED MODULE: ./src/blocks/opentable/index.js
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var opentable_ = wp.i18n.__;
var opentable_registerBlockType = wp.blocks.registerBlockType;

function opentable_init() {
  opentable_registerBlockType('novablocks/opentable', {
    title: opentable_('OpenTable Reservation', '__plugin_txtd'),
    description: opentable_('Add OpenTable online reservation booking to your site.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: opentable,
    // Additional search terms
    keywords: [opentable_('reservations', '__plugin_txtd'), opentable_('bookings', '__plugin_txtd')],
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
    edit: opentable_edit,
    save: opentable_save
  });
}

/* harmony default export */ var blocks_opentable = (opentable_init);
// CONCATENATED MODULE: ./src/blocks/openhours/preview.js







/**
 * WordPress dependencies
 */
var openhours_preview_ = wp.i18n.__;
var openhours_preview_Component = wp.element.Component;

var preview_OpenHoursPreview = /*#__PURE__*/function (_Component) {
  inherits_default()(OpenHoursPreview, _Component);

  function OpenHoursPreview() {
    classCallCheck_default()(this, OpenHoursPreview);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(OpenHoursPreview).apply(this, arguments));
  }

  createClass_default()(OpenHoursPreview, [{
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          text = _this$props$attribute.text,
          parsedText = _this$props$attribute.parsedText,
          openHoursStyle = _this$props$attribute.openHoursStyle,
          timeFormat = _this$props$attribute.timeFormat,
          openNote = _this$props$attribute.openNote,
          closedNote = _this$props$attribute.closedNote,
          closedLabel = _this$props$attribute.closedLabel,
          compressOpeningHours = _this$props$attribute.compressOpeningHours,
          hideClosedDays = _this$props$attribute.hideClosedDays,
          useShortName = _this$props$attribute.useShortName;
      return [Object(react["createElement"])(wp.serverSideRender, {
        block: "novablocks/openhours",
        attributes: {
          text: text,
          parsedText: parsedText,
          openHoursStyle: openHoursStyle,
          timeFormat: timeFormat,
          openNote: openNote,
          closedNote: closedNote,
          closedLabel: closedLabel,
          compressOpeningHours: compressOpeningHours,
          hideClosedDays: hideClosedDays,
          useShortName: useShortName
        }
      })];
    }
  }]);

  return OpenHoursPreview;
}(openhours_preview_Component);

/* harmony default export */ var openhours_preview = (preview_OpenHoursPreview);
// CONCATENATED MODULE: ./src/blocks/openhours/inspector-controls.js



/**
 * WordPress dependencies
 */
var inspector_controls_wp$element = wp.element,
    openhours_inspector_controls_Fragment = inspector_controls_wp$element.Fragment,
    inspector_controls_useState = inspector_controls_wp$element.useState;
var openhours_inspector_controls_ = wp.i18n.__;

var openhours_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var openhours_inspector_controls_wp$components = wp.components,
    openhours_inspector_controls_PanelBody = openhours_inspector_controls_wp$components.PanelBody,
    openhours_inspector_controls_RadioControl = openhours_inspector_controls_wp$components.RadioControl,
    openhours_inspector_controls_TextControl = openhours_inspector_controls_wp$components.TextControl,
    TextareaControl = openhours_inspector_controls_wp$components.TextareaControl,
    openhours_inspector_controls_ToggleControl = openhours_inspector_controls_wp$components.ToggleControl,
    Modal = openhours_inspector_controls_wp$components.Modal,
    inspector_controls_Button = openhours_inspector_controls_wp$components.Button,
    ExternalLink = openhours_inspector_controls_wp$components.ExternalLink;

var inspector_controls_OpenHoursInspectorControls = function OpenHoursInspectorControls(props) {
  var _props$attributes = props.attributes,
      openHoursStyle = _props$attributes.openHoursStyle,
      text = _props$attributes.text,
      parsedText = _props$attributes.parsedText,
      timeFormat = _props$attributes.timeFormat,
      openNote = _props$attributes.openNote,
      closedNote = _props$attributes.closedNote,
      closedLabel = _props$attributes.closedLabel,
      compressOpeningHours = _props$attributes.compressOpeningHours,
      hideClosedDays = _props$attributes.hideClosedDays,
      useShortName = _props$attributes.useShortName,
      setAttributes = props.setAttributes;
  var timeFormattingUrl = 'https://wordpress.org/support/article/formatting-date-and-time/';

  var AvailableTagsModal = function AvailableTagsModal() {
    var _useState = inspector_controls_useState(false),
        _useState2 = slicedToArray_default()(_useState, 2),
        isOpen = _useState2[0],
        setOpen = _useState2[1];

    var openModal = function openModal() {
      return setOpen(true);
    };

    var closeModal = function closeModal() {
      return setOpen(false);
    };

    return Object(react["createElement"])(openhours_inspector_controls_Fragment, null, Object(react["createElement"])(inspector_controls_Button, {
      className: 'novablocks__label',
      isLink: true,
      onClick: openModal
    }, "See available tags"), isOpen && Object(react["createElement"])(Modal, {
      onRequestClose: closeModal,
      shouldCloseOnEsc: true,
      shouldCloseOnClickOutside: true,
      className: "novablocks-openhours__modal"
    }));
  };

  var timeFormattingInstructions = Object(react["createElement"])(openhours_inspector_controls_Fragment, null, Object(react["createElement"])(ExternalLink, {
    href: timeFormattingUrl
  }, openhours_inspector_controls_('Learn more about time formatting', '__plugin_txtd')));
  return Object(react["createElement"])(openhours_inspector_controls_Fragment, null, Object(react["createElement"])(openhours_inspector_controls_InspectorControls, null, Object(react["createElement"])(openhours_inspector_controls_PanelBody, {
    title: openhours_inspector_controls_('Setup', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(TextareaControl, {
    label: "Write your opening hours in a simple human readable format",
    value: text,
    className: "original-text",
    onChange: function onChange(text) {
      return setAttributes({
        text: text,
        parsedText: parseContent(text)
      });
    }
  }), Object(react["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example novablocks__example--multi"
  }, openhours_inspector_controls_('Monday 10am - 3pm\n' + 'Tuesday to Friday 9 - 17\n' + 'Sat noon - 2am', '__plugin_txtd'))), Object(react["createElement"])(openhours_inspector_controls_PanelBody, {
    title: openhours_inspector_controls_('Display', '__plugin_txtd'),
    initialOpen: true
  }, Object(react["createElement"])(openhours_inspector_controls_RadioControl, {
    label: openhours_inspector_controls_('Displaying the opening hours', '__plugin_txtd'),
    value: openHoursStyle,
    selected: openHoursStyle,
    options: [{
      label: 'Overview',
      value: 'overview'
    }, {
      label: 'Current Status',
      value: 'status'
    }],
    onChange: function onChange(nextOpenHoursStyle) {
      return setAttributes({
        openHoursStyle: nextOpenHoursStyle
      });
    }
  }), openHoursStyle === 'status' && Object(react["createElement"])("div", {
    className: "components-base-control__label novablocks__label"
  }, "Write the \"Open\" and \"Closed\" messages using the tags displayed below."), openHoursStyle === 'status' && Object(react["createElement"])(AvailableTagsModal, null), openHoursStyle === 'status' && Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Open Note",
    value: openNote,
    onChange: function onChange(openNote) {
      return setAttributes({
        openNote: openNote
      });
    }
  }), openHoursStyle === 'status' && Object(react["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('It\'s {time} and we\'re Open until {today-closing-time}.', '__plugin_txtd')), openHoursStyle === 'status' && Object(react["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('{time} - It\'s today, we\'re Open.', '__plugin_txtd')), openHoursStyle === 'status' && Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Closed Note",
    value: closedNote,
    onChange: function onChange(closedNote) {
      return setAttributes({
        closedNote: closedNote
      });
    }
  }), openHoursStyle === 'status' && Object(react["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('We\'re closed until {next-opening-day} at {next-opening-time}.', '__plugin_txtd')), openHoursStyle === 'status' && Object(react["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('{time} - it\'s closed now.', '__plugin_txtd')), openHoursStyle === 'overview' && Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Closed Label",
    value: closedLabel,
    onChange: function onChange(closedLabel) {
      return setAttributes({
        closedLabel: closedLabel
      });
    }
  }), openHoursStyle === 'overview' && Object(react["createElement"])(openhours_inspector_controls_ToggleControl, {
    label: openhours_inspector_controls_('Compress Opening Hours', '__plugin_txtd'),
    checked: compressOpeningHours,
    onChange: function onChange() {
      return setAttributes({
        compressOpeningHours: !compressOpeningHours
      });
    }
  }), openHoursStyle === 'overview' && Object(react["createElement"])(openhours_inspector_controls_ToggleControl, {
    label: openhours_inspector_controls_('Hide Closed Days', '__plugin_txtd'),
    checked: hideClosedDays,
    onChange: function onChange() {
      return setAttributes({
        hideClosedDays: !hideClosedDays
      });
    }
  }), openHoursStyle === 'overview' && Object(react["createElement"])(openhours_inspector_controls_ToggleControl, {
    label: openhours_inspector_controls_('Use Short Day Name', '__plugin_txtd'),
    checked: useShortName,
    onChange: function onChange() {
      return setAttributes({
        useShortName: !useShortName
      });
    }
  }), Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Time Format",
    value: timeFormat,
    help: timeFormattingInstructions,
    onChange: function onChange(timeFormat) {
      return setAttributes({
        timeFormat: timeFormat
      });
    }
  }))));
};

/* harmony default export */ var openhours_inspector_controls = (inspector_controls_OpenHoursInspectorControls);
// CONCATENATED MODULE: ./src/blocks/openhours/edit.js



/**
 * WordPress dependencies
 */

var openhours_edit_Fragment = wp.element.Fragment;

var edit_OpenHours = function OpenHours(props) {
  return Object(react["createElement"])(openhours_edit_Fragment, null, Object(react["createElement"])(openhours_inspector_controls, props), Object(react["createElement"])(openhours_preview, props));
};

/* harmony default export */ var openhours_edit = (edit_OpenHours);
// CONCATENATED MODULE: ./src/blocks/openhours/index.js
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var openhours_ = wp.i18n.__;
var openhours_registerBlockType = wp.blocks.registerBlockType;

function openhours_init() {
  openhours_registerBlockType('novablocks/openhours', {
    title: openhours_('OpenHours', '__plugin_txtd'),
    description: openhours_('Display Opening Hours for any kind of venue.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: opentable,
    edit: openhours_edit,
    save: function save() {
      return null;
    }
  });
}

/* harmony default export */ var openhours = (openhours_init);
// CONCATENATED MODULE: ./src/editor.js

























var dispatch = wp.data.dispatch;
var updateCategory = wp.blocks.updateCategory;

var editor_novaBlocks = /*#__PURE__*/function () {
  function novaBlocks() {
    classCallCheck_default()(this, novaBlocks);
  }

  createClass_default()(novaBlocks, [{
    key: "initialize",
    value: function initialize(settings) {
      separator_addSeparatorFilters(settings);
      dispatch(STORE_NAME).updateSettings(settings);
      updateCategory('nova-blocks', {
        icon: nova
      });
      var supports = typeof_default()(settings['theme_support']) === 'object' ? Object.values(settings['theme_support']) : settings['theme_support'];

      if (supports.indexOf('announcement-bar') > -1) {
        announcement_bar();
      }

      if (supports.indexOf('google-map') > -1) {
        google_map();
      }

      if (supports.indexOf('header') > -1) {
        blocks_header();
        blocks_logo();
      }

      if (supports.indexOf('headline') > -1) {
        blocks_headline();
      }

      if (supports.indexOf('navigation') > -1) {
        blocks_navigation();
      }

      if (supports.indexOf('menu-food') > -1) {
        menu_food();
        menu_food_section();
        menu_food_item();
      }

      if (supports.indexOf('opentable') > -1) {
        blocks_opentable();
      }

      blocks_hero();
      blocks_media();
      blocks_slideshow();
      openhours();
    }
  }]);

  return novaBlocks;
}();

wp.novaBlocks = new editor_novaBlocks();

/***/ })
/******/ ]);