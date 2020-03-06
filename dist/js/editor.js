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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(15);

var assertThisInitialized = __webpack_require__(10);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(21);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(22);
} else {}


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

module.exports = undefined;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(23);
} else {}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(27);

var iterableToArrayLimit = __webpack_require__(28);

var nonIterableRest = __webpack_require__(29);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(26);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(32);

var iterableToArray = __webpack_require__(33);

var nonIterableSpread = __webpack_require__(34);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies;
 */
var isShallowEqualObjects = __webpack_require__( 35 );
var isShallowEqualArrays = __webpack_require__( 36 );

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
/* 21 */
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
/* 22 */
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

var h=__webpack_require__(14),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(5),m=__webpack_require__(14),q=__webpack_require__(24);function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw t(Error(96),a);if(!ea[c]){if(!b.extractEvents)throw t(Error(97),a);ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],h=b,g=d;if(fa.hasOwnProperty(g))throw t(Error(99),g);fa[g]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],h,g);e=!0}else f.registrationName?(ha(f.registrationName,h,g),e=!0):e=!1;if(!e)throw t(Error(98),d,a);}}}}
function ha(a,b,c){if(ia[a])throw t(Error(100),a);ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,h,g,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,h,g,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,h,g,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw t(Error(198));na||(na=!0,oa=l)}}var sa=null,ta=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw t(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw t(Error(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw t(Error(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw t(Error(102),c);ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw t(Error(231),b,typeof c);
return c}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Ma(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}
function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);
function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),ab=Wa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
function fb(){if(eb)return eb;var a,b=db,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var h=c-a;for(d=1;d<=h&&b[c-d]===e[f-d];d++);return eb=e.slice(a,1<d?1-d:void 0)}function gb(){return!0}function hb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?gb:hb;this.isPropagationStopped=hb;return this}
m(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=hb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;m(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=m({},d.Interface,a);c.extend=d.extend;ib(c);return c};ib(y);function jb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function kb(a){if(!(a instanceof this))throw t(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function ib(a){a.eventPool=[];a.getPooled=jb;a.release=kb}var lb=y.extend({data:null}),mb=y.extend({data:null}),nb=[9,13,27,32],ob=Ra&&"CompositionEvent"in window,pb=null;Ra&&"documentMode"in document&&(pb=document.documentMode);
var qb=Ra&&"TextEvent"in window&&!pb,sb=Ra&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function Ab(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Bb(a,b){if(yb)return"compositionend"===a||!ob&&wb(a,b)?(a=fb(),eb=db=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Cb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(ob)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=fb()):(cb=d,db="value"in cb?cb.value:cb.textContent,yb=
!0)),e=lb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=qb?Ab(a,c):Bb(a,c))?(b=mb.getPooled(ub.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=ta(a)){if("function"!==typeof Db)throw t(Error(280));var b=sa(a.stateNode);Db(a.stateNode,a.type,b)}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a])}}
function Jb(a,b){return a(b)}function Kb(a,b,c,d){return a(b,c,d)}function Lb(){}var Mb=Jb,Nb=!1;function Ob(){if(null!==Eb||null!==Fb)Lb(),Ib()}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xb.hasOwnProperty("ReactCurrentDispatcher")||(Xb.ReactCurrentDispatcher={current:null});Xb.hasOwnProperty("ReactCurrentBatchConfig")||(Xb.ReactCurrentBatchConfig={suspense:null});
var Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):60113,ic=B?Symbol.for("react.suspense_list"):
60120,jc=B?Symbol.for("react.memo"):60115,kc=B?Symbol.for("react.lazy"):60116;B&&Symbol.for("react.fundamental");B&&Symbol.for("react.responder");var lc="function"===typeof Symbol&&Symbol.iterator;function mc(a){if(null===a||"object"!==typeof a)return null;a=lc&&a[lc]||a["@@iterator"];return"function"===typeof a?a:null}
function oc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense";case ic:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jc:return oc(a.type);case kc:if(a=1===a._status?a._result:null)return oc(a)}return null}function pc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=oc(a.type);c=null;d&&(c=oc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
function uc(a){if(rc.call(tc,a))return!0;if(rc.call(sc,a))return!1;if(qc.test(a))return tc[a]=!0;sc[a]=!0;return!1}function vc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wc(a,b,c,d){if(null===b||"undefined"===typeof b||vc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new D(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new D(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new D(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new D(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new D(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){F[a]=new D(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){F[a]=new D(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){F[a]=new D(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){F[a]=new D(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
yc);F[b]=new D(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!1)});
F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!0)});
function zc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(wc(b,c,e,d)&&(c=null),d||null===e?uc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Cc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ac(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Dc(a,b){b=b.checked;null!=b&&zc(a,"checked",b,!1)}
function Ec(a,b){Dc(a,b);var c=Ac(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fc(a,b.type,Ac(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ic(a,b,c){a=y.getPooled(Hc.change,a,b,c);a.type="change";Hb(c);Qa(a);return a}var Jc=null,Kc=null;function Lc(a){Ba(a)}
function Mc(a){var b=Ja(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Ra&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){if("value"===a.propertyName&&Mc(Kc))if(a=Ic(Kc,a,Rb(a)),Nb)Ba(a);else{Nb=!0;try{Jb(Lc,a)}finally{Nb=!1,Ob()}}}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}
function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,h=void 0,g=e.nodeName&&e.nodeName.toLowerCase();"select"===g||"input"===g&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,h=Rc):(g=e.nodeName)&&"input"===g.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Ic(f,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fc(e,"number",e.value)}},Wc=y.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var h=void 0,g=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)h=dd,g=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)h=ed,g=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var n=null==f?e:Ja(f);e=null==b?e:Ja(b);a=h.getPooled(g,f,c,d);a.type=l+"leave";a.target=n;a.relatedTarget=e;c=h.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=n;d=b;if(f&&d)a:{b=f;e=d;l=0;for(h=b;h;h=La(h))l++;h=0;for(k=e;k;k=La(k))h++;for(;0<l-h;)b=La(b),l--;for(;0<h-l;)e=La(e),h--;for(;l--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id=Object.prototype.hasOwnProperty;
function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a,b){return{responder:a,props:b}}new Map;new Map;new Set;new Map;
function ld(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function od(a){if(2!==ld(a))throw t(Error(188));}
function pd(a){var b=a.alternate;if(!b){b=ld(a);if(3===b)throw t(Error(188));return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return od(e),a;if(f===d)return od(e),b;f=f.sibling}throw t(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var h=!1,g=e.child;g;){if(g===c){h=!0;c=e;d=f;break}if(g===d){h=!0;d=e;c=f;break}g=g.sibling}if(!h){for(g=f.child;g;){if(g===
c){h=!0;c=f;d=e;break}if(g===d){h=!0;d=f;c=e;break}g=g.sibling}if(!h)throw t(Error(189));}}if(c.alternate!==d)throw t(Error(190));}if(3!==c.tag)throw t(Error(188));return c.stateNode.current===c?a:b}function qd(a){a=pd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var rd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),sd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),td=Wc.extend({relatedTarget:null});function ud(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd=Wc.extend({key:function(a){if(a.key){var b=vd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ud(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?wd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?ud(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ud(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),yd=dd.extend({dataTransfer:null}),zd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),Ad=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Bd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Cd=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],
["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",
1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Xa,"animationEnd",2],[Ya,"animationIteration",2],[Za,"animationStart",2],["canplay","canPlay",2],["canplaythrough",
"canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",
2],[ab,"transitionEnd",2],["waiting","waiting",2]],Dd={},Ed={},Fd=0;for(;Fd<Cd.length;Fd++){var Gd=Cd[Fd],Hd=Gd[0],Id=Gd[1],Jd=Gd[2],Kd="on"+(Id[0].toUpperCase()+Id.slice(1)),Ld={phasedRegistrationNames:{bubbled:Kd,captured:Kd+"Capture"},dependencies:[Hd],eventPriority:Jd};Dd[Id]=Ld;Ed[Hd]=Ld}
var Md={eventTypes:Dd,getEventPriority:function(a){a=Ed[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ed[a];if(!e)return null;switch(a){case "keypress":if(0===ud(c))return null;case "keydown":case "keyup":a=xd;break;case "blur":case "focus":a=td;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
yd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=zd;break;case Xa:case Ya:case Za:a=rd;break;case ab:a=Ad;break;case "scroll":a=Wc;break;case "wheel":a=Bd;break;case "copy":case "cut":case "paste":a=sd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},Nd=Md.getEventPriority,Od=[];
function Pd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,h=null,g=0;g<ea.length;g++){var k=ea[g];k&&(k=k.extractEvents(d,b,f,e))&&(h=xa(h,k))}Ba(h)}}var Qd=!0;function G(a,b){Rd(b,a,!1)}
function Rd(a,b,c){switch(Nd(b)){case 0:var d=Sd.bind(null,b,1);break;case 1:d=Td.bind(null,b,1);break;default:d=Ud.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Sd(a,b,c){Nb||Lb();var d=Ud,e=Nb;Nb=!0;try{Kb(d,a,b,c)}finally{(Nb=e)||Ob()}}function Td(a,b,c){Ud(a,b,c)}
function Ud(a,b,c){if(Qd){b=Rb(c);b=Ha(b);null===b||"number"!==typeof b.tag||2===ld(b)||(b=null);if(Od.length){var d=Od.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Nb)Pd(c,void 0);else{Nb=!0;try{Mb(Pd,c,void 0)}finally{Nb=!1,Ob()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Od.length&&Od.push(a)}}}var Vd=new ("function"===typeof WeakMap?WeakMap:Map);
function Wd(a){var b=Vd.get(a);void 0===b&&(b=new Set,Vd.set(a,b));return b}function Xd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Yd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Zd(a,b){var c=Yd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Yd(c)}}function $d(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?$d(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function ae(){for(var a=window,b=Xd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xd(a.document)}return b}function be(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var ce=Ra&&"documentMode"in document&&11>=document.documentMode,de={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ee=null,fe=null,ge=null,he=!1;
function ie(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(he||null==ee||ee!==Xd(c))return null;c=ee;"selectionStart"in c&&be(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return ge&&jd(ge,c)?null:(ge=c,a=y.getPooled(de.select,fe,a,b),a.type="select",a.target=ee,Qa(a),a)}
var je={eventTypes:de,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Wd(e);f=ja.onSelect;for(var h=0;h<f.length;h++)if(!e.has(f[h])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)ee=e,fe=b,ge=null;break;case "blur":ge=fe=ee=null;break;case "mousedown":he=!0;break;case "contextmenu":case "mouseup":case "dragend":return he=!1,ie(c,d);case "selectionchange":if(ce)break;
case "keydown":case "keyup":return ie(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=Ka;ta=Ia;va=Ja;Ca.injectEventPluginsByName({SimpleEventPlugin:Md,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:je,BeforeInputEventPlugin:Cb});function ke(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function le(a,b){a=m({children:void 0},b);if(b=ke(b.children))a.children=b;return a}function me(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ac(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function oe(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw t(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw t(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:Ac(c)}}
function pe(a,b){var c=Ac(b.value),d=Ac(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function qe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var re={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function se(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?se(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ue=void 0,ve=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==re.svg||"innerHTML"in a)a.innerHTML=b;else{ue=ue||document.createElement("div");ue.innerHTML="<svg>"+b+"</svg>";for(b=ue.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function we(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var xe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(a){ye.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);xe[b]=xe[a]})});function ze(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||xe.hasOwnProperty(a)&&xe[a]?(""+b).trim():b+"px"}
function Ae(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ze(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Ce=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function De(a,b){if(b){if(Ce[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw t(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw t(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw t(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw t(Error(62),"");}}
function Ee(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function Fe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Wd(a);b=ja[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Rd(a,"scroll",!0);break;case "focus":case "blur":Rd(a,"focus",!0);Rd(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Sb(e)&&Rd(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&G(e,a)}c.add(e)}}}function Ge(){}var He=null,Ie=null;
function Je(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ke(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Le="function"===typeof setTimeout?setTimeout:void 0,Me="function"===typeof clearTimeout?clearTimeout:void 0;
function Ne(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}new Set;var Oe=[],Pe=-1;function H(a){0>Pe||(a.current=Oe[Pe],Oe[Pe]=null,Pe--)}function J(a,b){Pe++;Oe[Pe]=a.current;a.current=b}var Qe={},L={current:Qe},M={current:!1},Re=Qe;
function Se(a,b){var c=a.type.contextTypes;if(!c)return Qe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Te(a){H(M,a);H(L,a)}function Ue(a){H(M,a);H(L,a)}
function Ve(a,b,c){if(L.current!==Qe)throw t(Error(168));J(L,b,a);J(M,c,a)}function We(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw t(Error(108),oc(b)||"Unknown",e);return m({},c,d)}function Xe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Qe;Re=L.current;J(L,b,a);J(M,M.current,a);return!0}
function Ye(a,b,c){var d=a.stateNode;if(!d)throw t(Error(169));c?(b=We(a,b,Re),d.__reactInternalMemoizedMergedChildContext=b,H(M,a),H(L,a),J(L,b,a)):H(M,a);J(M,c,a)}
var Ze=q.unstable_runWithPriority,$e=q.unstable_scheduleCallback,af=q.unstable_cancelCallback,bf=q.unstable_shouldYield,cf=q.unstable_requestPaint,df=q.unstable_now,ef=q.unstable_getCurrentPriorityLevel,ff=q.unstable_ImmediatePriority,hf=q.unstable_UserBlockingPriority,jf=q.unstable_NormalPriority,kf=q.unstable_LowPriority,lf=q.unstable_IdlePriority,mf={},nf=void 0!==cf?cf:function(){},of=null,pf=null,qf=!1,rf=df(),sf=1E4>rf?df:function(){return df()-rf};
function tf(){switch(ef()){case ff:return 99;case hf:return 98;case jf:return 97;case kf:return 96;case lf:return 95;default:throw t(Error(332));}}function uf(a){switch(a){case 99:return ff;case 98:return hf;case 97:return jf;case 96:return kf;case 95:return lf;default:throw t(Error(332));}}function vf(a,b){a=uf(a);return Ze(a,b)}function wf(a,b,c){a=uf(a);return $e(a,b,c)}function xf(a){null===of?(of=[a],pf=$e(ff,yf)):of.push(a);return mf}function O(){null!==pf&&af(pf);yf()}
function yf(){if(!qf&&null!==of){qf=!0;var a=0;try{var b=of;vf(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});of=null}catch(c){throw null!==of&&(of=of.slice(a+1)),$e(ff,O),c;}finally{qf=!1}}}function zf(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function Af(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function Bf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var Cf={current:null},Df=null,Ef=null,Ff=null;function Gf(){Ff=Ef=Df=null}
function Hf(a,b){var c=a.type._context;J(Cf,c._currentValue,a);c._currentValue=b}function If(a){var b=Cf.current;H(Cf,a);a.type._context._currentValue=b}function Jf(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function Kf(a,b){Df=a;Ff=Ef=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(Lf=!0),a.firstContext=null)}function Mf(a,b){if(Ff!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ff=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===Ef){if(null===Df)throw t(Error(308));Ef=b;Df.dependencies={expirationTime:0,firstContext:b,responders:null}}else Ef=Ef.next=b}return a._currentValue}var Nf=!1;
function Of(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Pf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Qf(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Rf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Sf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Of(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Of(a.memoizedState),e=c.updateQueue=Of(c.memoizedState)):d=a.updateQueue=Pf(e):null===e&&(e=c.updateQueue=Pf(d));null===e||d===e?Rf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Rf(d,b),Rf(e,b)):(Rf(d,b),e.lastUpdate=b)}
function Tf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Of(a.memoizedState):Uf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Uf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Pf(b));return b}
function Vf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return m({},d,e);case 2:Nf=!0}return d}
function Wf(a,b,c,d,e){Nf=!1;b=Uf(a,b);for(var f=b.baseState,h=null,g=0,k=b.firstUpdate,l=f;null!==k;){var n=k.expirationTime;n<e?(null===h&&(h=k,f=l),g<n&&(g=n)):(Xf(n,k.suspenseConfig),l=Vf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}n=null;for(k=b.firstCapturedUpdate;null!==k;){var z=k.expirationTime;z<e?(null===n&&(n=k,null===h&&(f=l)),g<z&&(g=z)):(l=Vf(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===h&&(b.lastUpdate=null);null===n?b.lastCapturedUpdate=null:a.effectTag|=32;null===h&&null===n&&(f=l);b.baseState=f;b.firstUpdate=h;b.firstCapturedUpdate=n;a.expirationTime=g;a.memoizedState=l}
function Yf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Zf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Zf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Zf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw t(Error(191),c);c.call(d)}a=a.nextEffect}}
var $f=Xb.ReactCurrentBatchConfig,ag=(new aa.Component).refs;function bg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var fg={isMounted:function(a){return(a=a._reactInternalFiber)?2===ld(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=cg(),d=$f.suspense;
c=dg(c,a,d);d=Qf(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Sf(a,d);eg(a,c)}};function gg(a,b,c,d,e,f,h){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,h):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function hg(a,b,c){var d=!1,e=Qe;var f=b.contextType;"object"===typeof f&&null!==f?f=Mf(f):(e=N(b)?Re:L.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Se(a,e):Qe);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=fg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function ig(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&fg.enqueueReplaceState(b,b.state,null)}
function jg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=ag;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Mf(f):(f=N(b)?Re:L.current,e.context=Se(a,f));f=a.updateQueue;null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(bg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&fg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var kg=Array.isArray;
function lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;if(c){if(1!==c.tag)throw t(Error(309));d=c.stateNode}if(!d)throw t(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===ag&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw t(Error(284));if(!c._owner)throw t(Error(290),a);}return a}
function mg(a,b){if("textarea"!==a.type)throw t(Error(31),"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function ng(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=og(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function h(b){a&&null===b.alternate&&(b.effectTag=2);return b}function g(a,b,c,d){if(null===b||6!==b.tag)return b=pg(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=lg(a,b,c),d.return=a,d;d=qg(c.type,c.key,c.props,null,a.mode,d);d.ref=lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=rg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=sg(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=pg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=qg(b.type,b.key,b.props,null,a.mode,c),c.ref=lg(a,null,b),c.return=a,c;case $b:return b=rg(b,a.mode,c),b.return=a,b}if(kg(b)||
mc(b))return b=sg(b,a.mode,c,null),b.return=a,b;mg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:g(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(kg(c)||mc(c))return null!==e?null:n(a,b,c,d,null);mg(a,c)}return null}function v(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,g(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(kg(d)||mc(d))return a=a.get(c)||null,n(b,a,d,e,null);mg(b,d)}return null}function rb(e,h,g,k){for(var l=null,u=null,n=h,w=h=0,C=null;null!==n&&w<g.length;w++){n.index>w?(C=n,n=null):C=n.sibling;var p=x(e,n,g[w],k);if(null===p){null===n&&(n=C);break}a&&
n&&null===p.alternate&&b(e,n);h=f(p,h,w);null===u?l=p:u.sibling=p;u=p;n=C}if(w===g.length)return c(e,n),l;if(null===n){for(;w<g.length;w++)n=z(e,g[w],k),null!==n&&(h=f(n,h,w),null===u?l=n:u.sibling=n,u=n);return l}for(n=d(e,n);w<g.length;w++)C=v(n,e,w,g[w],k),null!==C&&(a&&null!==C.alternate&&n.delete(null===C.key?w:C.key),h=f(C,h,w),null===u?l=C:u.sibling=C,u=C);a&&n.forEach(function(a){return b(e,a)});return l}function Be(e,h,g,k){var l=mc(g);if("function"!==typeof l)throw t(Error(150));g=l.call(g);
if(null==g)throw t(Error(151));for(var n=l=null,u=h,w=h=0,C=null,p=g.next();null!==u&&!p.done;w++,p=g.next()){u.index>w?(C=u,u=null):C=u.sibling;var r=x(e,u,p.value,k);if(null===r){null===u&&(u=C);break}a&&u&&null===r.alternate&&b(e,u);h=f(r,h,w);null===n?l=r:n.sibling=r;n=r;u=C}if(p.done)return c(e,u),l;if(null===u){for(;!p.done;w++,p=g.next())p=z(e,p.value,k),null!==p&&(h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);return l}for(u=d(e,u);!p.done;w++,p=g.next())p=v(u,e,w,p.value,k),null!==p&&(a&&null!==
p.alternate&&u.delete(null===p.key?w:p.key),h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,g){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,g);d.ref=lg(a,k,f);d.return=a;a=d;break a}c(a,
k);break}else b(a,k);k=k.sibling}f.type===ac?(d=sg(f.props.children,a.mode,g,f.key),d.return=a,a=d):(g=qg(f.type,f.key,f.props,null,a.mode,g),g.ref=lg(a,d,f),g.return=a,a=g)}return h(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],g);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=rg(f,a.mode,g);d.return=a;a=d}return h(a)}if("string"===typeof f||
"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,g),d.return=a,a=d):(c(a,d),d=pg(f,a.mode,g),d.return=a,a=d),h(a);if(kg(f))return rb(a,d,f,g);if(mc(f))return Be(a,d,f,g);l&&mg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,t(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}var tg=ng(!0),ug=ng(!1),vg={},wg={current:vg},xg={current:vg},yg={current:vg};function zg(a){if(a===vg)throw t(Error(174));return a}
function Ag(a,b){J(yg,b,a);J(xg,a,a);J(wg,vg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:te(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=te(b,c)}H(wg,a);J(wg,b,a)}function Bg(a){H(wg,a);H(xg,a);H(yg,a)}function Cg(a){zg(yg.current);var b=zg(wg.current);var c=te(b,a.type);b!==c&&(J(xg,a,a),J(wg,c,a))}function Dg(a){xg.current===a&&(H(wg,a),H(xg,a))}var Eg=1,Fg=1,Gg=2,P={current:0};
function Hg(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}
var Ig=0,Jg=2,Kg=4,Lg=8,Mg=16,Ng=32,Og=64,Pg=128,Qg=Xb.ReactCurrentDispatcher,Rg=0,Sg=null,Q=null,Tg=null,Ug=null,R=null,Vg=null,Wg=0,Xg=null,Yg=0,Zg=!1,$g=null,ah=0;function bh(){throw t(Error(321));}function ch(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}
function dh(a,b,c,d,e,f){Rg=f;Sg=b;Tg=null!==a?a.memoizedState:null;Qg.current=null===Tg?eh:fh;b=c(d,e);if(Zg){do Zg=!1,ah+=1,Tg=null!==a?a.memoizedState:null,Vg=Ug,Xg=R=Q=null,Qg.current=fh,b=c(d,e);while(Zg);$g=null;ah=0}Qg.current=hh;a=Sg;a.memoizedState=Ug;a.expirationTime=Wg;a.updateQueue=Xg;a.effectTag|=Yg;a=null!==Q&&null!==Q.next;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;if(a)throw t(Error(300));return b}
function ih(){Qg.current=hh;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;Zg=!1;$g=null;ah=0}function jh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?Ug=R=a:R=R.next=a;return R}function kh(){if(null!==Vg)R=Vg,Vg=R.next,Q=Tg,Tg=null!==Q?Q.next:null;else{if(null===Tg)throw t(Error(310));Q=Tg;var a={memoizedState:Q.memoizedState,baseState:Q.baseState,queue:Q.queue,baseUpdate:Q.baseUpdate,next:null};R=null===R?Ug=a:R.next=a;Tg=Q.next}return R}
function lh(a,b){return"function"===typeof b?b(a):b}
function mh(a){var b=kh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<ah){var d=c.dispatch;if(null!==$g){var e=$g.get(c);if(void 0!==e){$g.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var h=b.baseUpdate;f=b.baseState;null!==h?(null!==d&&(d.next=null),d=h.next):d=null!==d?d.next:null;if(null!==
d){var g=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Rg?(l||(l=!0,g=h,e=f),n>Wg&&(Wg=n)):(Xf(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));h=k;k=k.next}while(null!==k&&k!==d);l||(g=h,e=f);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate=g;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function nh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Xg?(Xg={lastEffect:null},Xg.lastEffect=a.next=a):(b=Xg.lastEffect,null===b?Xg.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Xg.lastEffect=a));return a}function oh(a,b,c,d){var e=jh();Yg|=a;e.memoizedState=nh(b,c,void 0,void 0===d?null:d)}
function ph(a,b,c,d){var e=kh();d=void 0===d?null:d;var f=void 0;if(null!==Q){var h=Q.memoizedState;f=h.destroy;if(null!==d&&ch(d,h.deps)){nh(Ig,c,f,d);return}}Yg|=a;e.memoizedState=nh(b,c,f,d)}function qh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function rh(){}
function sh(a,b,c){if(!(25>ah))throw t(Error(301));var d=a.alternate;if(a===Sg||null!==d&&d===Sg)if(Zg=!0,a={expirationTime:Rg,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===$g&&($g=new Map),c=$g.get(b),void 0===c)$g.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=cg(),f=$f.suspense;e=dg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var h=b.last;if(null===h)f.next=f;else{var g=h.next;null!==g&&
(f.next=g);h.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(hd(l,k))return}catch(n){}finally{}eg(a,e)}}
var hh={readContext:Mf,useCallback:bh,useContext:bh,useEffect:bh,useImperativeHandle:bh,useLayoutEffect:bh,useMemo:bh,useReducer:bh,useRef:bh,useState:bh,useDebugValue:bh,useResponder:bh},eh={readContext:Mf,useCallback:function(a,b){jh().memoizedState=[a,void 0===b?null:b];return a},useContext:Mf,useEffect:function(a,b){return oh(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return oh(4,Kg|Ng,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return oh(4,
Kg|Ng,a,b)},useMemo:function(a,b){var c=jh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=jh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=sh.bind(null,Sg,a);return[d.memoizedState,a]},useRef:function(a){var b=jh();a={current:a};return b.memoizedState=a},useState:function(a){var b=jh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue=
{last:null,dispatch:null,lastRenderedReducer:lh,lastRenderedState:a};a=a.dispatch=sh.bind(null,Sg,a);return[b.memoizedState,a]},useDebugValue:rh,useResponder:kd},fh={readContext:Mf,useCallback:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:Mf,useEffect:function(a,b){return ph(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ph(4,Kg|Ng,qh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return ph(4,Kg|Ng,a,b)},useMemo:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:mh,useRef:function(){return kh().memoizedState},useState:function(a){return mh(lh,a)},useDebugValue:rh,useResponder:kd},th=null,uh=null,vh=!1;
function wh(a,b){var c=xh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function yh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function zh(a){if(vh){var b=uh;if(b){var c=b;if(!yh(a,b)){b=Ne(c.nextSibling);if(!b||!yh(a,b)){a.effectTag|=2;vh=!1;th=a;return}wh(th,c)}th=a;uh=Ne(b.firstChild)}else a.effectTag|=2,vh=!1,th=a}}function Ah(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;th=a}
function Bh(a){if(a!==th)return!1;if(!vh)return Ah(a),vh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ke(b,a.memoizedProps))for(b=uh;b;)wh(a,b),b=Ne(b.nextSibling);Ah(a);uh=th?Ne(a.stateNode.nextSibling):null;return!0}function Ch(){uh=th=null;vh=!1}var Dh=Xb.ReactCurrentOwner,Lf=!1;function S(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d)}
function Eh(a,b,c,d,e){c=c.render;var f=b.ref;Kf(b,e);d=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Gh(a,b,c,d,e,f){if(null===a){var h=c.type;if("function"===typeof h&&!Hh(h)&&void 0===h.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=h,Ih(a,b,h,d,e,f);a=qg(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}h=a.child;if(e<f&&(e=h.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Fh(a,b,f);b.effectTag|=1;a=og(h,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Ih(a,b,c,d,e,f){return null!==a&&jd(a.memoizedProps,d)&&a.ref===b.ref&&(Lf=!1,e<f)?Fh(a,b,f):Jh(a,b,c,d,f)}function Kh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Jh(a,b,c,d,e){var f=N(c)?Re:L.current;f=Se(b,f);Kf(b,e);c=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Lh(a,b,c,d,e){if(N(c)){var f=!0;Xe(b)}else f=!1;Kf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),hg(b,c,d,e),jg(b,c,d,e),d=!0;else if(null===a){var h=b.stateNode,g=b.memoizedProps;h.props=g;var k=h.context,l=c.contextType;"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l));var n=c.getDerivedStateFromProps,z="function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate;z||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&
"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l);Nf=!1;var x=b.memoizedState;k=h.state=x;var v=b.updateQueue;null!==v&&(Wf(b,v,d,h,e),k=b.memoizedState);g!==d||x!==k||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),k=b.memoizedState),(g=Nf||gg(b,c,g,d,x,k,l))?(z||"function"!==typeof h.UNSAFE_componentWillMount&&"function"!==typeof h.componentWillMount||("function"===typeof h.componentWillMount&&h.componentWillMount(),"function"===typeof h.UNSAFE_componentWillMount&&
h.UNSAFE_componentWillMount()),"function"===typeof h.componentDidMount&&(b.effectTag|=4)):("function"===typeof h.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),h.props=d,h.state=k,h.context=l,d=g):("function"===typeof h.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.stateNode,g=b.memoizedProps,h.props=b.type===b.elementType?g:Af(b.type,g),k=h.context,l=c.contextType,"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l)),n=c.getDerivedStateFromProps,(z=
"function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate)||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l),Nf=!1,k=b.memoizedState,x=h.state=k,v=b.updateQueue,null!==v&&(Wf(b,v,d,h,e),x=b.memoizedState),g!==d||k!==x||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),x=b.memoizedState),(n=Nf||gg(b,c,g,d,k,x,l))?(z||"function"!==typeof h.UNSAFE_componentWillUpdate&&"function"!==typeof h.componentWillUpdate||
("function"===typeof h.componentWillUpdate&&h.componentWillUpdate(d,x,l),"function"===typeof h.UNSAFE_componentWillUpdate&&h.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof h.componentDidUpdate&&(b.effectTag|=4),"function"===typeof h.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=x),h.props=d,h.state=x,h.context=l,d=n):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Mh(a,b,c,d,f,e)}
function Mh(a,b,c,d,e,f){Kh(a,b);var h=0!==(b.effectTag&64);if(!d&&!h)return e&&Ye(b,c,!1),Fh(a,b,f);d=b.stateNode;Dh.current=b;var g=h&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&h?(b.child=tg(b,a.child,null,f),b.child=tg(b,null,g,f)):S(a,b,g,f);b.memoizedState=d.state;e&&Ye(b,c,!0);return b.child}function Nh(a){var b=a.stateNode;b.pendingContext?Ve(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ve(a,b.context,!1);Ag(a,b.containerInfo)}
var Oh={};
function Ph(a,b,c){var d=b.mode,e=b.pendingProps,f=P.current,h=null,g=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Gg)&&(null===a||null!==a.memoizedState));k?(h=Oh,g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=Fg);f&=Eg;J(P,f,b);if(null===a)if(g){e=e.fallback;a=sg(null,d,0,null);a.return=b;if(0===(b.mode&2))for(g=null!==b.memoizedState?b.child.child:b.child,a.child=g;null!==g;)g.return=a,g=g.sibling;c=sg(e,d,c,null);c.return=b;a.sibling=
c;d=a}else d=c=ug(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,g){e=e.fallback;c=og(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==f.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;e=og(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=tg(b,f.child,e.children,c);else if(f=a.child,g){g=e.fallback;e=sg(null,d,0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&
2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=sg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=tg(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=h;b.child=d;return c}function Qh(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}
function Rh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=P.current;if(0!==(d&Gg))d=d&Eg|Gg,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var h=a.alternate;null!==h&&h.expirationTime<c&&(h.expirationTime=c);Jf(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===
b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Eg}J(P,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Hg(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Qh(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Hg(d)){b.child=e;break}d=e.sibling;e.sibling=c;c=e;e=d}Qh(b,!0,c,null,f);break;case "together":Qh(b,
!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fh(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw t(Error(153));if(null!==b.child){a=b.child;c=og(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=og(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Sh(a){a.effectTag|=4}
var Th=void 0,Uh=void 0,Vh=void 0,Wh=void 0;Th=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Uh=function(){};
Vh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var h=b.stateNode;zg(wg.current);a=null;switch(c){case "input":f=Bc(h,f);d=Bc(h,d);a=[];break;case "option":f=le(h,f);d=le(h,d);a=[];break;case "select":f=m({},f,{value:void 0});d=m({},d,{value:void 0});a=[];break;case "textarea":f=ne(h,f);d=ne(h,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(h.onclick=Ge)}De(c,d);h=c=void 0;var g=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(h in k)k.hasOwnProperty(h)&&(g||(g={}),g[h]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ia.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(h in k)!k.hasOwnProperty(h)||l&&l.hasOwnProperty(h)||(g||(g={}),g[h]="");for(h in l)l.hasOwnProperty(h)&&k[h]!==l[h]&&(g||
(g={}),g[h]=l[h])}else g||(a||(a=[]),a.push(c,g)),g=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ia.hasOwnProperty(c)?(null!=l&&Fe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}g&&(a=a||[]).push("style",g);e=a;(b.updateQueue=e)&&Sh(b)}};Wh=function(a,b,c,d){c!==d&&Sh(b)};
function $h(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function ai(a){switch(a.tag){case 1:N(a.type)&&Te(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Bg(a);Ue(a);b=a.effectTag;if(0!==(b&64))throw t(Error(285));a.effectTag=b&-2049|64;return a;case 5:return Dg(a),null;case 13:return H(P,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return H(P,a),null;case 4:return Bg(a),null;case 10:return If(a),null;default:return null}}function bi(a,b){return{value:a,source:b,stack:pc(b)}}
var ci="function"===typeof WeakSet?WeakSet:Set;function di(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=pc(c));null!==c&&oc(c.type);b=b.value;null!==a&&1===a.tag&&oc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function ei(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){fi(a,c)}}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fi(a,c)}else b.current=null}
function hi(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Ig){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Ig&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function ii(a,b){"function"===typeof ji&&ji(a);switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;vf(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var h=a;try{c()}catch(g){fi(h,g)}}b=b.next}while(b!==d)})}break;case 1:gi(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&ei(a,b);break;case 5:gi(a);break;case 4:ki(a,b)}}
function li(a,b){for(var c=a;;)if(ii(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function mi(a){return 5===a.tag||3===a.tag||4===a.tag}
function ni(a){a:{for(var b=a.return;null!==b;){if(mi(b)){var c=b;break a}b=b.return}throw t(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw t(Error(161));}c.effectTag&16&&(we(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||mi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var h=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var g=h;h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(h,c);else d?(g=b,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=Ge)):
b.appendChild(h)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function ki(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw t(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(li(c,b),f){var h=e,g=c.stateNode;8===h.nodeType?h.parentNode.removeChild(g):h.removeChild(g)}else e.removeChild(c.stateNode);else if(20===c.tag)g=c.stateNode.instance,li(c,b),f?(h=e,8===h.nodeType?h.parentNode.removeChild(g):
h.removeChild(g)):e.removeChild(g);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(ii(c,b),null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function oi(a,b){switch(b.tag){case 0:case 11:case 14:case 15:hi(Kg,Lg,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ga]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Dc(c,d);Ee(a,e);b=Ee(a,d);for(e=0;e<f.length;e+=2){var h=f[e],g=f[e+1];"style"===h?Ae(c,g):"dangerouslySetInnerHTML"===h?ve(c,g):"children"===h?we(c,g):zc(c,h,g,b)}switch(a){case "input":Ec(c,d);break;case "textarea":pe(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?me(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?me(c,!!d.multiple,d.defaultValue,!0):me(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw t(Error(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,pi=sf());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=
f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ze("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===
a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}qi(b);break;case 19:qi(b);break;case 17:break;case 20:break;default:throw t(Error(163));}}function qi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new ci);b.forEach(function(b){var d=ri.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var si="function"===typeof WeakMap?WeakMap:Map;
function ti(a,b,c){c=Qf(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){ui||(ui=!0,vi=d);di(a,b)};return c}
function wi(a,b,c){c=Qf(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){di(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===xi?xi=new Set([this]):xi.add(this),di(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var yi=Math.ceil,zi=Xb.ReactCurrentDispatcher,Ai=Xb.ReactCurrentOwner,T=0,Bi=8,Ci=16,Di=32,Ei=0,Fi=1,Gi=2,Hi=3,Ii=4,U=T,Ji=null,V=null,W=0,X=Ei,Ki=1073741823,Li=1073741823,Mi=null,Ni=!1,pi=0,Oi=500,Y=null,ui=!1,vi=null,xi=null,Pi=!1,Qi=null,Ri=90,Si=0,Ti=null,Ui=0,Vi=null,Wi=0;function cg(){return(U&(Ci|Di))!==T?1073741821-(sf()/10|0):0!==Wi?Wi:Wi=1073741821-(sf()/10|0)}
function dg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=tf();if(0===(b&4))return 99===d?1073741823:1073741822;if((U&Ci)!==T)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw t(Error(326));}null!==Ji&&a===W&&--a;return a}var Xi=0;
function eg(a,b){if(50<Ui)throw Ui=0,Vi=null,t(Error(185));a=Yi(a,b);if(null!==a){a.pingTime=0;var c=tf();if(1073741823===b)if((U&Bi)!==T&&(U&(Ci|Di))===T)for(var d=Z(a,1073741823,!0);null!==d;)d=d(!0);else Zi(a,99,1073741823),U===T&&O();else Zi(a,c,b);(U&4)===T||98!==c&&99!==c||(null===Ti?Ti=new Map([[a,b]]):(c=Ti.get(a),(void 0===c||c>b)&&Ti.set(a,b)))}}
function Yi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=
b);return e}function Zi(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==mf&&af(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=xf($i.bind(null,a,Z.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-sf()}),a.callbackNode=wf(b,$i.bind(null,a,Z.bind(null,a,c)),d))}}function $i(a,b,c){var d=a.callbackNode,e=null;try{return e=b(c),null!==e?$i.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}
function aj(){(U&(1|Ci|Di))===T&&(bj(),cj())}function dj(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(wf(97,function(){c._onComplete();return null}),!0):!1}function bj(){if(null!==Ti){var a=Ti;Ti=null;a.forEach(function(a,c){xf(Z.bind(null,c,a))});O()}}function ej(a,b){var c=U;U|=1;try{return a(b)}finally{U=c,U===T&&O()}}function fj(a,b,c,d){var e=U;U|=4;try{return vf(98,a.bind(null,b,c,d))}finally{U=e,U===T&&O()}}
function gj(a,b){var c=U;U&=-2;U|=Bi;try{return a(b)}finally{U=c,U===T&&O()}}
function hj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Me(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Te(d);break;case 3:Bg(d);Ue(d);break;case 5:Dg(d);break;case 4:Bg(d);break;case 13:H(P,d);break;case 19:H(P,d);break;case 10:If(d)}c=c.return}Ji=a;V=og(a.current,null,b);W=b;X=Ei;Li=Ki=1073741823;Mi=null;Ni=!1}
function Z(a,b,c){if((U&(Ci|Di))!==T)throw t(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return ij.bind(null,a);cj();if(a!==Ji||b!==W)hj(a,b);else if(X===Hi)if(Ni)hj(a,b);else{var d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d)}if(null!==V){d=U;U|=Ci;var e=zi.current;null===e&&(e=hh);zi.current=hh;if(c){if(1073741823!==b){var f=cg();if(f<b)return U=d,Gf(),zi.current=e,Z.bind(null,a,f)}}else Wi=0;do try{if(c)for(;null!==V;)V=jj(V);else for(;null!==V&&!bf();)V=
jj(V);break}catch(rb){Gf();ih();f=V;if(null===f||null===f.return)throw hj(a,b),U=d,rb;a:{var h=a,g=f.return,k=f,l=rb,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var z=l,x=0!==(P.current&Fg);l=g;do{var v;if(v=13===l.tag)null!==l.memoizedState?v=!1:(v=l.memoizedProps,v=void 0===v.fallback?!1:!0!==v.unstable_avoidThisFallback?!0:x?!1:!0);if(v){g=l.updateQueue;null===g?(g=new Set,g.add(z),l.updateQueue=g):g.add(z);if(0===(l.mode&
2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Qf(1073741823,null),n.tag=2,Sf(k,n)));k.expirationTime=1073741823;break a}k=h;h=n;x=k.pingCache;null===x?(x=k.pingCache=new si,g=new Set,x.set(z,g)):(g=x.get(z),void 0===g&&(g=new Set,x.set(z,g)));g.has(h)||(g.add(h),k=kj.bind(null,k,z,h),z.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==l);l=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
pc(k))}X!==Ii&&(X=Fi);l=bi(l,k);k=g;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=ti(k,l,n);Tf(k,n);break a;case 1:if(z=l,h=k.type,g=k.stateNode,0===(k.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==g&&"function"===typeof g.componentDidCatch&&(null===xi||!xi.has(g)))){k.effectTag|=2048;k.expirationTime=n;n=wi(k,z,n);Tf(k,n);break a}}k=k.return}while(null!==k)}V=lj(f)}while(1);U=d;Gf();zi.current=e;if(null!==V)return Z.bind(null,a,b)}a.finishedWork=a.current.alternate;
a.finishedExpirationTime=b;if(dj(a,b))return null;Ji=null;switch(X){case Ei:throw t(Error(328));case Fi:return d=a.lastPendingTime,d<b?Z.bind(null,a,d):c?ij.bind(null,a):(hj(a,b),xf(Z.bind(null,a,b)),null);case Gi:if(1073741823===Ki&&!c&&(c=pi+Oi-sf(),10<c)){if(Ni)return hj(a,b),Z.bind(null,a,b);d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d);a.timeoutHandle=Le(ij.bind(null,a),c);return null}return ij.bind(null,a);case Hi:if(!c){if(Ni)return hj(a,b),Z.bind(null,a,b);c=a.lastPendingTime;if(c<b)return Z.bind(null,
a,c);1073741823!==Li?c=10*(1073741821-Li)-sf():1073741823===Ki?c=0:(c=10*(1073741821-Ki)-5E3,d=sf(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*yi(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=Le(ij.bind(null,a),c),null}return ij.bind(null,a);case Ii:return!c&&1073741823!==Ki&&null!==Mi&&(d=Ki,e=Mi,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=sf()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=
Le(ij.bind(null,a),b),null):ij.bind(null,a);default:throw t(Error(329));}}function Xf(a,b){a<Ki&&1<a&&(Ki=a);null!==b&&a<Li&&1<a&&(Li=a,Mi=b)}function jj(a){var b=mj(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=lj(a));Ai.current=null;return b}
function lj(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&1024)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&Te(b);break;case 3:Bg(b);Ue(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===c||null===c.child)Bh(b),b.effectTag&=-3;Uh(b);break;case 5:Dg(b);d=zg(yg.current);var f=b.type;if(null!==c&&null!=b.stateNode)Vh(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var h=
zg(wg.current);if(Bh(b)){c=b;e=void 0;f=c.stateNode;var g=c.type,k=c.memoizedProps;f[Fa]=c;f[Ga]=k;switch(g){case "iframe":case "object":case "embed":G("load",f);break;case "video":case "audio":for(var l=0;l<bb.length;l++)G(bb[l],f);break;case "source":G("error",f);break;case "img":case "image":case "link":G("error",f);G("load",f);break;case "form":G("reset",f);G("submit",f);break;case "details":G("toggle",f);break;case "input":Cc(f,k);G("invalid",f);Fe(d,"onChange");break;case "select":f._wrapperState=
{wasMultiple:!!k.multiple};G("invalid",f);Fe(d,"onChange");break;case "textarea":oe(f,k),G("invalid",f),Fe(d,"onChange")}De(g,k);l=null;for(e in k)k.hasOwnProperty(e)&&(h=k[e],"children"===e?"string"===typeof h?f.textContent!==h&&(l=["children",h]):"number"===typeof h&&f.textContent!==""+h&&(l=["children",""+h]):ia.hasOwnProperty(e)&&null!=h&&Fe(d,e));switch(g){case "input":Vb(f);Gc(f,k,!0);break;case "textarea":Vb(f);qe(f,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(f.onclick=Ge)}d=l;c.updateQueue=d;null!==d&&Sh(b)}else{k=f;c=e;g=b;l=9===d.nodeType?d:d.ownerDocument;h===re.html&&(h=se(k));h===re.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(h,k);k=l;k[Fa]=g;k[Ga]=c;c=k;Th(c,b,!1,!1);g=c;var n=d,z=Ee(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
g);d=e;break;case "video":case "audio":for(d=0;d<bb.length;d++)G(bb[d],g);d=e;break;case "source":G("error",g);d=e;break;case "img":case "image":case "link":G("error",g);G("load",g);d=e;break;case "form":G("reset",g);G("submit",g);d=e;break;case "details":G("toggle",g);d=e;break;case "input":Cc(g,e);d=Bc(g,e);G("invalid",g);Fe(n,"onChange");break;case "option":d=le(g,e);break;case "select":g._wrapperState={wasMultiple:!!e.multiple};d=m({},e,{value:void 0});G("invalid",g);Fe(n,"onChange");break;case "textarea":oe(g,
e);d=ne(g,e);G("invalid",g);Fe(n,"onChange");break;default:d=e}De(f,d);k=void 0;l=f;h=g;var x=d;for(k in x)if(x.hasOwnProperty(k)){var v=x[k];"style"===k?Ae(h,v):"dangerouslySetInnerHTML"===k?(v=v?v.__html:void 0,null!=v&&ve(h,v)):"children"===k?"string"===typeof v?("textarea"!==l||""!==v)&&we(h,v):"number"===typeof v&&we(h,""+v):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ia.hasOwnProperty(k)?null!=v&&Fe(n,k):null!=v&&zc(h,k,v,z))}switch(f){case "input":Vb(g);
Gc(g,e,!1);break;case "textarea":Vb(g);qe(g,e);break;case "option":null!=e.value&&g.setAttribute("value",""+Ac(e.value));break;case "select":d=g;g=e;d.multiple=!!g.multiple;k=g.value;null!=k?me(d,!!g.multiple,k,!1):null!=g.defaultValue&&me(d,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof d.onClick&&(g.onclick=Ge)}Je(f,e)&&Sh(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)Wh(c,b,c.memoizedProps,
e);else{if("string"!==typeof e&&null===b.stateNode)throw t(Error(166));c=zg(yg.current);zg(wg.current);Bh(b)?(d=b.stateNode,c=b.memoizedProps,d[Fa]=b,d.nodeValue!==c&&Sh(b)):(d=b,c=(9===c.nodeType?c:c.ownerDocument).createTextNode(e),c[Fa]=b,d.stateNode=c)}break;case 11:break;case 13:H(P,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Bh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=
f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&Fg))X===Ei&&(X=Gi);else if(X===Ei||X===Gi)X=Hi;if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Bg(b);Uh(b);break;case 10:If(b);break;case 9:break;case 14:break;case 17:N(b.type)&&Te(b);break;case 18:break;case 19:H(P,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;
if(null===g)if(f)$h(e,!1);else{if(X!==Ei||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Hg(c);if(null!==g){b.effectTag|=64;$h(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(c=b.child;null!==c;)e=c,f=d,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,g=e.alternate,null===g?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=
g.childExpirationTime,e.expirationTime=g.expirationTime,e.child=g.child,e.memoizedProps=g.memoizedProps,e.memoizedState=g.memoizedState,e.updateQueue=g.updateQueue,f=g.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),c=c.sibling;J(P,P.current&Eg|Gg,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Hg(g),null!==c){if(b.effectTag|=64,f=!0,$h(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else sf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,$h(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=sf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;c=P.current;c=f?c&Eg|Gg:c&Eg;J(P,c,b);b=d;break a}break;case 20:break;
default:throw t(Error(156));}b=null}d=V;if(1===W||1!==d.childExpirationTime){c=0;for(e=d.child;null!==e;)f=e.expirationTime,g=e.childExpirationTime,f>c&&(c=f),g>c&&(c=g),e=e.sibling;d.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,
a.lastEffect=V))}else{b=ai(V,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===Ei&&(X=Ii);return null}function ij(a){var b=tf();vf(99,nj.bind(null,a,b));null!==Qi&&wf(97,function(){cj();return null});return null}
function nj(a,b){cj();if((U&(Ci|Di))!==T)throw t(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw t(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ji&&(V=Ji=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;
if(null!==e){f=U;U|=Di;Ai.current=null;He=Qd;var h=ae();if(be(h)){if("selectionStart"in h)var g={start:h.selectionStart,end:h.selectionEnd};else a:{g=(g=h.ownerDocument)&&g.defaultView||window;var k=g.getSelection&&g.getSelection();if(k&&0!==k.rangeCount){g=k.anchorNode;var l=k.anchorOffset,n=k.focusNode;k=k.focusOffset;try{g.nodeType,n.nodeType}catch(zb){g=null;break a}var z=0,x=-1,v=-1,rb=0,Be=0,u=h,w=null;b:for(;;){for(var C;;){u!==g||0!==l&&3!==u.nodeType||(x=z+l);u!==n||0!==k&&3!==u.nodeType||
(v=z+k);3===u.nodeType&&(z+=u.nodeValue.length);if(null===(C=u.firstChild))break;w=u;u=C}for(;;){if(u===h)break b;w===g&&++rb===l&&(x=z);w===n&&++Be===k&&(v=z);if(null!==(C=u.nextSibling))break;u=w;w=u.parentNode}u=C}g=-1===x||-1===v?null:{start:x,end:v}}else g=null}g=g||{start:0,end:0}}else g=null;Ie={focusedElem:h,selectionRange:g};Qd=!1;Y=e;do try{for(;null!==Y;){if(0!==(Y.effectTag&256)){var I=Y.alternate;h=Y;switch(h.tag){case 0:case 11:case 15:hi(Jg,Ig,h);break;case 1:if(h.effectTag&256&&null!==
I){var E=I.memoizedProps,ua=I.memoizedState,gh=h.stateNode,oj=gh.getSnapshotBeforeUpdate(h.elementType===h.type?E:Af(h.type,E),ua);gh.__reactInternalSnapshotBeforeUpdate=oj}break;case 3:case 5:case 6:case 4:case 17:break;default:throw t(Error(163));}}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(I=b;null!==Y;){var A=Y.effectTag;A&16&&we(Y.stateNode,"");if(A&128){var p=Y.alternate;if(null!==p){var r=p.ref;null!==r&&("function"===typeof r?
r(null):r.current=null)}}switch(A&14){case 2:ni(Y);Y.effectTag&=-3;break;case 6:ni(Y);Y.effectTag&=-3;oi(Y.alternate,Y);break;case 4:oi(Y.alternate,Y);break;case 8:E=Y;ki(E,I);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var K=E.alternate;null!==K&&(K.return=null,K.child=null,K.memoizedState=null,K.updateQueue=null,K.dependencies=null)}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);r=Ie;p=ae();A=r.focusedElem;
I=r.selectionRange;if(p!==A&&A&&A.ownerDocument&&$d(A.ownerDocument.documentElement,A)){null!==I&&be(A)&&(p=I.start,r=I.end,void 0===r&&(r=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(r,A.value.length)):(r=(p=A.ownerDocument||document)&&p.defaultView||window,r.getSelection&&(r=r.getSelection(),E=A.textContent.length,K=Math.min(I.start,E),I=void 0===I.end?K:Math.min(I.end,E),!r.extend&&K>I&&(E=I,I=K,K=E),E=Zd(A,K),ua=Zd(A,I),E&&ua&&(1!==r.rangeCount||r.anchorNode!==E.node||r.anchorOffset!==
E.offset||r.focusNode!==ua.node||r.focusOffset!==ua.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),r.removeAllRanges(),K>I?(r.addRange(p),r.extend(ua.node,ua.offset)):(p.setEnd(ua.node,ua.offset),r.addRange(p))))));p=[];for(r=A;r=r.parentNode;)1===r.nodeType&&p.push({element:r,left:r.scrollLeft,top:r.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)r=p[A],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}Ie=null;Qd=!!He;He=null;a.current=c;Y=e;do try{for(A=d;null!==
Y;){var $a=Y.effectTag;if($a&36){var nc=Y.alternate;p=Y;r=A;switch(p.tag){case 0:case 11:case 15:hi(Mg,Ng,p);break;case 1:var md=p.stateNode;if(p.effectTag&4)if(null===nc)md.componentDidMount();else{var Fj=p.elementType===p.type?nc.memoizedProps:Af(p.type,nc.memoizedProps);md.componentDidUpdate(Fj,nc.memoizedState,md.__reactInternalSnapshotBeforeUpdate)}var Xh=p.updateQueue;null!==Xh&&Yf(p,Xh,md,r);break;case 3:var Yh=p.updateQueue;if(null!==Yh){K=null;if(null!==p.child)switch(p.child.tag){case 5:K=
p.child.stateNode;break;case 1:K=p.child.stateNode}Yf(p,Yh,K,r)}break;case 5:var Gj=p.stateNode;null===nc&&p.effectTag&4&&(r=Gj,Je(p.type,p.memoizedProps)&&r.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw t(Error(163));}}if($a&128){var nd=Y.ref;if(null!==nd){var Zh=Y.stateNode;switch(Y.tag){case 5:var gf=Zh;break;default:gf=Zh}"function"===typeof nd?nd(gf):nd.current=gf}}$a&512&&(Pi=!0);Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));
fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=null;nf();U=f}else a.current=c;if(Pi)Pi=!1,Qi=a,Si=d,Ri=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0!==b?($a=cg(),$a=zf($a,b),Zi(a,$a,b)):xi=null;"function"===typeof pj&&pj(c.stateNode,d);1073741823===b?a===Vi?Ui++:(Ui=0,Vi=a):Ui=0;if(ui)throw ui=!1,a=vi,vi=null,a;if((U&Bi)!==T)return null;O();return null}
function cj(){if(null===Qi)return!1;var a=Qi,b=Si,c=Ri;Qi=null;Si=0;Ri=90;return vf(97<c?97:c,qj.bind(null,a,b))}function qj(a){if((U&(Ci|Di))!==T)throw t(Error(331));var b=U;U|=Di;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:hi(Pg,Ig,c),hi(Ig,Og,c)}}catch(d){if(null===a)throw t(Error(330));fi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}U=b;O();return!0}
function rj(a,b,c){b=bi(c,b);b=ti(a,b,1073741823);Sf(a,b);a=Yi(a,1073741823);null!==a&&Zi(a,99,1073741823)}function fi(a,b){if(3===a.tag)rj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){rj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===xi||!xi.has(d))){a=bi(b,a);a=wi(c,a,1073741823);Sf(c,a);c=Yi(c,1073741823);null!==c&&Zi(c,99,1073741823);break}}c=c.return}}
function kj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ji===a&&W===c?X===Hi||X===Gi&&1073741823===Ki&&sf()-pi<Oi?hj(a,W):Ni=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=cg(),b=zf(b,c),Zi(a,b,c)))}function ri(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=cg();b=dg(c,a,null);c=zf(c,b);a=Yi(a,b);null!==a&&Zi(a,c,b)}var mj=void 0;
mj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)Lf=!0;else if(d<c){Lf=!1;switch(b.tag){case 3:Nh(b);Ch();break;case 5:Cg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Xe(b);break;case 4:Ag(b,b.stateNode.containerInfo);break;case 10:Hf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ph(a,b,c);J(P,P.current&
Eg,b);b=Fh(a,b,c);return null!==b?b.sibling:null}J(P,P.current&Eg,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Rh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);J(P,P.current,b);if(!d)return null}return Fh(a,b,c)}}else Lf=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Se(b,L.current);Kf(b,c);e=dh(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&
null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;ih();if(N(d)){var f=!0;Xe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var h=d.getDerivedStateFromProps;"function"===typeof h&&bg(b,d,h,a);e.updater=fg;b.stateNode=e;e._reactInternalFiber=b;jg(b,d,a,c);b=Mh(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Bf(e);b.type=e;f=b.tag=sj(e);
a=Af(e,a);switch(f){case 0:b=Jh(null,b,e,a,c);break;case 1:b=Lh(null,b,e,a,c);break;case 11:b=Eh(null,b,e,a,c);break;case 14:b=Gh(null,b,e,Af(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Jh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Lh(a,b,d,e,c);case 3:Nh(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Wf(b,d,b.pendingProps,
null,c);d=b.memoizedState.element;if(d===e)Ch(),b=Fh(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)uh=Ne(b.stateNode.containerInfo.firstChild),th=b,e=vh=!0;e?(b.effectTag|=2,b.child=ug(b,null,d,c)):(S(a,b,d,c),Ch());b=b.child}return b;case 5:return Cg(b),null===a&&zh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,h=e.children,Ke(d,e)?h=null:null!==f&&Ke(d,f)&&(b.effectTag|=16),Kh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):
(S(a,b,h,c),b=b.child),b;case 6:return null===a&&zh(b),null;case 13:return Ph(a,b,c);case 4:return Ag(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=tg(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Eh(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;h=b.memoizedProps;
f=e.value;Hf(b,f);if(null!==h){var g=h.value;f=hd(g,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(g,f):1073741823)|0;if(0===f){if(h.children===e.children&&!M.current){b=Fh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){var k=g.dependencies;if(null!==k){h=g.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===g.tag&&(l=Qf(c,null),l.tag=2,Sf(g,l));g.expirationTime<c&&(g.expirationTime=c);l=g.alternate;null!==l&&l.expirationTime<
c&&(l.expirationTime=c);Jf(g.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else h=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Kf(b,c),e=Mf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=Af(e,b.pendingProps),
f=Af(e.type,f),Gh(a,b,e,f,d,c);case 15:return Ih(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Xe(b)):a=!1,Kf(b,c),hg(b,d,e,c),jg(b,d,e,c),Mh(null,b,d,!0,a,c);case 19:return Rh(a,b,c)}throw t(Error(156));};var pj=null,ji=null;
function tj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);pj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};ji=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function uj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function xh(a,b,c,d){return new uj(a,b,c,d)}
function Hh(a){a=a.prototype;return!(!a||!a.isReactComponent)}function sj(a){if("function"===typeof a)return Hh(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===jc)return 14}return 2}
function og(a,b){var c=a.alternate;null===c?(c=xh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function qg(a,b,c,d,e,f){var h=2;d=a;if("function"===typeof a)Hh(a)&&(h=1);else if("string"===typeof a)h=5;else a:switch(a){case ac:return sg(c.children,e,f,b);case fc:h=8;e|=7;break;case bc:h=8;e|=1;break;case cc:return a=xh(12,c,b,e|8),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=xh(13,c,b,e),a.type=hc,a.elementType=hc,a.expirationTime=f,a;case ic:return a=xh(19,c,b,e),a.elementType=ic,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:h=
10;break a;case ec:h=9;break a;case gc:h=11;break a;case jc:h=14;break a;case kc:h=16;d=null;break a}throw t(Error(130),null==a?a:typeof a,"");}b=xh(h,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function sg(a,b,c,d){a=xh(7,a,d,b);a.expirationTime=c;return a}function pg(a,b,c){a=xh(6,a,null,b);a.expirationTime=c;return a}
function rg(a,b,c){b=xh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function vj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=this.firstPendingTime=this.callbackExpirationTime=0}function wj(a,b,c){a=new vj(a,b,c);b=xh(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}
function xj(a,b,c,d,e,f){var h=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==ld(c)||1!==c.tag)throw t(Error(170));var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(N(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);throw t(Error(171));}if(1===c.tag){var k=c.type;if(N(k)){c=We(c,k,g);break a}}c=g}else c=Qe;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Qf(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&
(e.callback=b);Sf(h,e);eg(h,d);return d}function yj(a,b,c,d){var e=b.current,f=cg(),h=$f.suspense;e=dg(f,e,h);return xj(a,b,c,e,h,d)}function zj(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Aj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Db=function(a,b,c){switch(b){case "input":Ec(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);if(!e)throw t(Error(90));Wb(d);Ec(d,e)}}}break;case "textarea":pe(a,c);break;case "select":b=c.value,null!=b&&me(a,!!c.multiple,b,!1)}};
function Bj(a){var b=1073741821-25*(((1073741821-cg()+500)/25|0)+1);b<=Xi&&--b;this._expirationTime=Xi=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bj.prototype.render=function(a){if(!this._defer)throw t(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Cj;xj(a,b,null,c,null,d._onCommit);return d};
Bj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw t(Error(251));if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw t(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((U&(Ci|Di))!==T)throw t(Error(253));xf(Z.bind(null,a,b));O();b=this._next;this._next=
null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Cj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Cj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Cj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw t(Error(191),c);c()}}};function Dj(a,b,c){this._internalRoot=wj(a,b,c)}function Ej(a,b){this._internalRoot=wj(a,2,b)}Ej.prototype.render=Dj.prototype.render=function(a,b){var c=this._internalRoot,d=new Cj;b=void 0===b?null:b;null!==b&&d.then(b);yj(a,c,null,d._onCommit);return d};
Ej.prototype.unmount=Dj.prototype.unmount=function(a){var b=this._internalRoot,c=new Cj;a=void 0===a?null:a;null!==a&&c.then(a);yj(null,b,null,c._onCommit);return c};Ej.prototype.createBatch=function(){var a=new Bj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};
function Hj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ej;Kb=fj;Lb=aj;Mb=function(a,b){var c=U;U|=2;try{return a(b)}finally{U=c,U===T&&O()}};function Ij(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dj(a,0,b)}
function Jj(a,b,c,d,e){var f=c._reactRootContainer,h=void 0;if(f){h=f._internalRoot;if("function"===typeof e){var g=e;e=function(){var a=zj(h);g.call(a)}}yj(b,h,a,e)}else{f=c._reactRootContainer=Ij(c,d);h=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=zj(h);k.call(a)}}gj(function(){yj(b,h,a,e)})}return zj(h)}function Kj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Hj(b))throw t(Error(200));return Aj(a,b,null,c)}
var Nj={createPortal:Kj,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw t(Error(188));throw t(Error(268),Object.keys(a));}a=qd(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!0,c)},render:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Hj(c))throw t(Error(200));
if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return Jj(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Hj(a))throw t(Error(40));return a._reactRootContainer?(gj(function(){Jj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Kj.apply(void 0,arguments)},unstable_batchedUpdates:ej,unstable_interactiveUpdates:function(a,b,c,d){aj();return fj(a,b,c,d)},unstable_discreteUpdates:fj,unstable_flushDiscreteUpdates:aj,flushSync:function(a,
b){if((U&(Ci|Di))!==T)throw t(Error(187));var c=U;U|=1;try{return vf(99,a.bind(null,b))}finally{U=c,O()}},unstable_createRoot:Lj,unstable_createSyncRoot:Mj,unstable_flushControlled:function(a){var b=U;U|=1;try{vf(99,a)}finally{U=b,U===T&&O()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ca.injectEventPluginsByName,fa,Qa,function(a){ya(a,Pa)},Hb,Ib,Ud,Ba,cj,{current:!1}]}};
function Lj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Ej(a,null!=b&&!0===b.hydrate)}function Mj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Dj(a,1,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return tj(m({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=qd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.9.0",
rendererPackageName:"react-dom"});var Oj={default:Nj},Pj=Oj&&Nj||Oj;module.exports=Pj.default||Pj;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(25);
} else {}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=void 0,e=void 0,g=void 0,m=void 0,n=void 0;exports.unstable_now=void 0;exports.unstable_forceFrameRate=void 0;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,r=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(r,0),b;}};exports.unstable_now=function(){return Date.now()};d=function(a){null!==p?setTimeout(d,0,a):(p=a,setTimeout(r,0))};e=function(a,b){q=setTimeout(a,b)};g=function(){clearTimeout(q)};m=function(){return!1};n=exports.unstable_forceFrameRate=function(){}}else{var t=window.performance,u=window.Date,v=window.setTimeout,
w=window.clearTimeout,x=window.requestAnimationFrame,y=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));exports.unstable_now="object"===typeof t&&
"function"===typeof t.now?function(){return t.now()}:function(){return u.now()};var z=!1,A=null,B=-1,C=-1,D=33.33,E=-1,F=-1,G=0,H=!1;m=function(){return exports.unstable_now()>=G};n=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<a?(D=Math.floor(1E3/a),H=!0):(D=33.33,H=!1)};var J=function(){if(null!==A){var a=exports.unstable_now(),b=0<G-a;try{A(b,
a)||(A=null)}catch(c){throw I.postMessage(null),c;}}},K=new MessageChannel,I=K.port2;K.port1.onmessage=J;var L=function(a){if(null===A)F=E=-1,z=!1;else{z=!0;x(function(a){w(B);L(a)});var b=function(){G=exports.unstable_now()+D/2;J();B=v(b,3*D)};B=v(b,3*D);if(-1!==E&&.1<a-E){var c=a-E;!H&&-1!==F&&c<D&&F<D&&(D=c<F?F:c,8.33>D&&(D=8.33));F=c}E=a;G=a+D;I.postMessage(null)}};d=function(a){A=a;z||(z=!0,x(function(a){L(a)}))};e=function(a,b){C=v(function(){a(exports.unstable_now())},b)};g=function(){w(C);
C=-1}}var M=null,N=null,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a,b){var c=a.next;if(c===a)M=null;else{a===M&&(M=c);var f=a.previous;f.next=c;c.previous=f}a.next=a.previous=null;c=a.callback;f=P;var l=O;P=a.priorityLevel;O=a;try{var h=a.expirationTime<=b;switch(P){case 1:var k=c(h);break;case 2:k=c(h);break;case 3:k=c(h);break;case 4:k=c(h);break;case 5:k=c(h)}}catch(Z){throw Z;}finally{P=f,O=l}if("function"===typeof k)if(b=a.expirationTime,a.callback=k,null===M)M=a.next=a.previous=a;else{k=null;h=M;do{if(b<=h.expirationTime){k=h;break}h=h.next}while(h!==
M);null===k?k=M:k===M&&(M=a);b=k.previous;b.next=k.previous=a;a.next=k;a.previous=b}}function U(a){if(null!==N&&N.startTime<=a){do{var b=N,c=b.next;if(b===c)N=null;else{N=c;var f=b.previous;f.next=c;c.previous=f}b.next=b.previous=null;V(b,b.expirationTime)}while(null!==N&&N.startTime<=a)}}function W(a){S=!1;U(a);R||(null!==M?(R=!0,d(X)):null!==N&&e(W,N.startTime-a))}
function X(a,b){R=!1;S&&(S=!1,g());U(b);Q=!0;try{if(!a)for(;null!==M&&M.expirationTime<=b;)T(M,b),b=exports.unstable_now(),U(b);else if(null!==M){do T(M,b),b=exports.unstable_now(),U(b);while(null!==M&&!m())}if(null!==M)return!0;null!==N&&e(W,N.startTime-b);return!1}finally{Q=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}
function V(a,b){if(null===M)M=a.next=a.previous=a;else{var c=null,f=M;do{if(b<f.expirationTime){c=f;break}f=f.next}while(f!==M);null===c?c=M:c===M&&(M=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}var aa=n;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var f=exports.unstable_now();if("object"===typeof c&&null!==c){var l=c.delay;l="number"===typeof l&&0<l?f+l:f;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),l=f;c=l+c;a={callback:b,priorityLevel:a,startTime:l,expirationTime:c,next:null,previous:null};if(l>f){c=l;if(null===N)N=a.next=a.previous=a;else{b=null;var h=N;do{if(c<h.startTime){b=h;break}h=h.next}while(h!==N);null===b?b=N:b===N&&(N=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=
c}null===M&&N===a&&(S?g():S=!0,e(W,l-f))}else V(a,c),R||Q||(R=!0,d(X));return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(a===b)a===M?M=null:a===N&&(N=null);else{a===M?M=b:a===N&&(N=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};exports.unstable_getCurrentPriorityLevel=function(){return P};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();U(a);return null!==O&&null!==M&&M.startTime<=a&&M.expirationTime<O.expirationTime||m()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){R||Q||(R=!0,d(X))};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M};


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(31);
} else {}


/***/ }),
/* 31 */
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

var l=__webpack_require__(14),m=__webpack_require__(5);function r(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateSettings", function() { return updateSettings; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(15);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(2);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(5);

// EXTERNAL MODULE: external {"commonjs":"lodash","amd":"lodash"}
var external_commonjs_lodash_amd_lodash_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/react.js



/**
 * External dependencies
 */


/**
 * Object that provides utilities for dealing with React children.
 */


/**
 * Creates a copy of an element with extended props.
 *
 * @param {WPElement} element Element
 * @param {?Object}   props   Props to apply to cloned element
 *
 * @return {WPElement} Cloned element.
 */


/**
 * A base class to create WordPress Components (Refs, state and lifecycle hooks)
 */


/**
 * Creates a context object containing two components: a provider and consumer.
 *
 * @param {Object} defaultValue A default data stored in the context.
 *
 * @return {Object} Context object.
 */


/**
 * Returns a new element of given type. Type can be either a string tag name or
 * another function which itself returns an element.
 *
 * @param {?(string|Function)} type     Tag name or element creator
 * @param {Object}             props    Element properties, either attribute
 *                                       set to apply to DOM node or values to
 *                                       pass through to element creator
 * @param {...WPElement}       children Descendant elements
 *
 * @return {WPElement} Element.
 */


/**
 * Returns an object tracking a reference to a rendered element via its
 * `current` property as either a DOMElement or Element, dependent upon the
 * type of element rendered with the ref attribute.
 *
 * @return {Object} Ref object.
 */


/**
 * Component enhancer used to enable passing a ref to its wrapped component.
 * Pass a function argument which receives `props` and `ref` as its arguments,
 * returning an element using the forwarded ref. The return value is a new
 * component which forwards its ref.
 *
 * @param {Function} forwarder Function passed `props` and `ref`, expected to
 *                             return an element.
 *
 * @return {WPComponent} Enhanced component.
 */


/**
 * A component which renders its children without any wrapping element.
 */


/**
 * Checks if an object is a valid WPElement
 *
 * @param {Object} objectToCheck The object to be checked.
 *
 * @return {boolean} true if objectToTest is a valid WPElement and false otherwise.
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactmemo
 */


/**
 * Component that activates additional checks and warnings for its descendants.
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactlazy
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactsuspense
 */


/**
 * Concatenate two or more React children objects.
 *
 * @param {...?Object} childrenArguments Array of children arguments (array of arrays/strings/objects) to concatenate.
 *
 * @return {Array} The concatenated value.
 */

function concatChildren() {
  for (var _len = arguments.length, childrenArguments = new Array(_len), _key = 0; _key < _len; _key++) {
    childrenArguments[_key] = arguments[_key];
  }

  return childrenArguments.reduce(function (result, children, i) {
    react["Children"].forEach(children, function (child, j) {
      if (child && 'string' !== typeof child) {
        child = Object(react["cloneElement"])(child, {
          key: [i, j].join()
        });
      }

      result.push(child);
    });
    return result;
  }, []);
}
/**
 * Switches the nodeName of all the elements in the children object.
 *
 * @param {?Object} children Children object.
 * @param {string}  nodeName Node name.
 *
 * @return {?Object} The updated children object.
 */

function switchChildrenNodeName(children, nodeName) {
  return children && react["Children"].map(children, function (elt, index) {
    if (Object(external_commonjs_lodash_amd_lodash_["isString"])(elt)) {
      return Object(react["createElement"])(nodeName, {
        key: index
      }, elt);
    }

    var _elt$props = elt.props,
        childrenProp = _elt$props.children,
        props = _objectWithoutProperties(_elt$props, ["children"]);

    return Object(react["createElement"])(nodeName, _objectSpread({
      key: index
    }, props), childrenProp);
  });
}
//# sourceMappingURL=react.js.map
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/react-platform.js
/**
 * External dependencies
 */

/**
 * Creates a portal into which a component can be rendered.
 *
 * @see https://github.com/facebook/react/issues/10309#issuecomment-318433235
 *
 * @param {Component} component Component
 * @param {Element}   target    DOM node into which element should be rendered
 */


/**
 * Finds the dom node of a React component
 *
 * @param {Component} component component's instance
 * @param {Element}   target    DOM node into which element should be rendered
 */


/**
 * Renders a given element into the target DOM node.
 *
 * @param {WPElement} element Element to render
 * @param {Element}   target  DOM node into which element should be rendered
 */


/**
 * Removes any mounted element from the target DOM node.
 *
 * @param {Element} target DOM node in which element is to be removed
 */


//# sourceMappingURL=react-platform.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/utils.js
/**
 * External dependencies
 */

/**
 * Checks if the provided WP element is empty.
 *
 * @param {*} element WP element to check.
 * @return {boolean} True when an element is considered empty.
 */

var utils_isEmptyElement = function isEmptyElement(element) {
  if (Object(external_commonjs_lodash_amd_lodash_["isNumber"])(element)) {
    return false;
  }

  if (Object(external_commonjs_lodash_amd_lodash_["isString"])(element) || Object(external_commonjs_lodash_amd_lodash_["isArray"])(element)) {
    return !element.length;
  }

  return !element;
};
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@wordpress/escape-html/build-module/escape-greater.js
/**
 * Returns a string with greater-than sign replaced.
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to exist.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function __unstableEscapeGreaterThan(value) {
  return value.replace(/>/g, '&gt;');
}
//# sourceMappingURL=escape-greater.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/escape-html/build-module/index.js
/**
 * Internal dependencies
 */

/**
 * Regular expression matching invalid attribute names.
 *
 * "Attribute names must consist of one or more characters other than controls,
 * U+0020 SPACE, U+0022 ("), U+0027 ('), U+003E (>), U+002F (/), U+003D (=),
 * and noncharacters."
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
 *
 * @type {RegExp}
 */

var REGEXP_INVALID_ATTRIBUTE_NAME = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;
/**
 * Returns a string with ampersands escaped. Note that this is an imperfect
 * implementation, where only ampersands which do not appear as a pattern of
 * named, decimal, or hexadecimal character references are escaped. Invalid
 * named references (i.e. ambiguous ampersand) are are still permitted.
 *
 * @see https://w3c.github.io/html/syntax.html#character-references
 * @see https://w3c.github.io/html/syntax.html#ambiguous-ampersand
 * @see https://w3c.github.io/html/syntax.html#named-character-references
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeAmpersand(value) {
  return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, '&amp;');
}
/**
 * Returns a string with quotation marks replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeQuotationMark(value) {
  return value.replace(/"/g, '&quot;');
}
/**
 * Returns a string with less-than sign replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeLessThan(value) {
  return value.replace(/</g, '&lt;');
}
/**
 * Returns an escaped attribute value.
 *
 * @see https://w3c.github.io/html/syntax.html#elements-attributes
 *
 * "[...] the text cannot contain an ambiguous ampersand [...] must not contain
 * any literal U+0022 QUOTATION MARK characters (")"
 *
 * Note we also escape the greater than symbol, as this is used by wptexturize to
 * split HTML strings. This is a WordPress specific fix
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to be used.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Attribute value.
 *
 * @return {string} Escaped attribute value.
 */

function escapeAttribute(value) {
  return __unstableEscapeGreaterThan(escapeQuotationMark(escapeAmpersand(value)));
}
/**
 * Returns an escaped HTML element value.
 *
 * @see https://w3c.github.io/html/syntax.html#writing-html-documents-elements
 *
 * "the text must not contain the character U+003C LESS-THAN SIGN (<) or an
 * ambiguous ampersand."
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */

function escapeHTML(value) {
  return escapeLessThan(escapeAmpersand(value));
}
/**
 * Returns true if the given attribute name is valid, or false otherwise.
 *
 * @param {string} name Attribute name to test.
 *
 * @return {boolean} Whether attribute is valid.
 */

function isValidAttributeName(name) {
  return !REGEXP_INVALID_ATTRIBUTE_NAME.test(name);
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/raw-html.js



/**
 * Internal dependencies
 */

/**
 * Component used as equivalent of Fragment with unescaped HTML, in cases where
 * it is desirable to render dangerous HTML without needing a wrapper element.
 * To preserve additional props, a `div` wrapper _will_ be created if any props
 * aside from `children` are passed.
 *
 * @param {Object} props
 * @param {string} props.children HTML to render.
 * @param {Object} props.props    Any additonal props to be set on the containing div.
 *
 * @return {WPElement} Dangerously-rendering element.
 */

function RawHTML(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  // The DIV wrapper will be stripped by serializer, unless there are
  // non-children props present.
  return Object(react["createElement"])('div', _objectSpread({
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
}
//# sourceMappingURL=raw-html.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/serialize.js




/**
 * Parts of this source were derived and modified from fast-react-render,
 * released under the MIT license.
 *
 * https://github.com/alt-j/fast-react-render
 *
 * Copyright (c) 2016 Andrey Morozov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var _createContext = Object(react["createContext"])(),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var ForwardRef = Object(react["forwardRef"])(function () {
  return null;
});
/**
 * Valid attribute types.
 *
 * @type {Set}
 */

var ATTRIBUTES_TYPES = new Set(['string', 'boolean', 'number']);
/**
 * Element tags which can be self-closing.
 *
 * @type {Set}
 */

var SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
/**
 * Boolean attributes are attributes whose presence as being assigned is
 * meaningful, even if only empty.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => tr.lastChild.textContent.indexOf( 'Boolean attribute' ) !== -1 )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * @type {Set}
 */

var BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch']);
/**
 * Enumerated attributes are attributes which must be of a specific value form.
 * Like boolean attributes, these are meaningful if specified, even if not of a
 * valid enumerated value.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => /^("(.+?)";?\s*)+/.test( tr.lastChild.textContent.trim() ) )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * Some notable omissions:
 *
 *  - `alt`: https://blog.whatwg.org/omit-alt
 *
 * @type {Set}
 */

var ENUMERATED_ATTRIBUTES = new Set(['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap']);
/**
 * Set of CSS style properties which support assignment of unitless numbers.
 * Used in rendering of style properties, where `px` unit is assumed unless
 * property is included in this set or value is zero.
 *
 * Generated via:
 *
 * Object.entries( document.createElement( 'div' ).style )
 *     .filter( ( [ key ] ) => (
 *         ! /^(webkit|ms|moz)/.test( key ) &&
 *         ( e.style[ key ] = 10 ) &&
 *         e.style[ key ] === '10'
 *     ) )
 *     .map( ( [ key ] ) => key )
 *     .sort();
 *
 * @type {Set}
 */

var CSS_PROPERTIES_SUPPORTS_UNITLESS = new Set(['animation', 'animationIterationCount', 'baselineShift', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'columnCount', 'cx', 'cy', 'fillOpacity', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontWeight', 'gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'r', 'rx', 'ry', 'shapeImageThreshold', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'widows', 'x', 'y', 'zIndex', 'zoom']);
/**
 * Returns true if the specified string is prefixed by one of an array of
 * possible prefixes.
 *
 * @param {string}   string   String to check.
 * @param {string[]} prefixes Possible prefixes.
 *
 * @return {boolean} Whether string has prefix.
 */

function hasPrefix(string, prefixes) {
  return prefixes.some(function (prefix) {
    return string.indexOf(prefix) === 0;
  });
}
/**
 * Returns true if the given prop name should be ignored in attributes
 * serialization, or false otherwise.
 *
 * @param {string} attribute Attribute to check.
 *
 * @return {boolean} Whether attribute should be ignored.
 */

function isInternalAttribute(attribute) {
  return 'key' === attribute || 'children' === attribute;
}
/**
 * Returns the normal form of the element's attribute value for HTML.
 *
 * @param {string} attribute Attribute name.
 * @param {*}      value     Non-normalized attribute value.
 *
 * @return {string} Normalized attribute value.
 */


function getNormalAttributeValue(attribute, value) {
  switch (attribute) {
    case 'style':
      return renderStyle(value);
  }

  return value;
}
/**
 * Returns the normal form of the element's attribute name for HTML.
 *
 * @param {string} attribute Non-normalized attribute name.
 *
 * @return {string} Normalized attribute name.
 */


function getNormalAttributeName(attribute) {
  switch (attribute) {
    case 'htmlFor':
      return 'for';

    case 'className':
      return 'class';
  }

  return attribute.toLowerCase();
}
/**
 * Returns the normal form of the style property name for HTML.
 *
 * - Converts property names to kebab-case, e.g. 'backgroundColor' → 'background-color'
 * - Leaves custom attributes alone, e.g. '--myBackgroundColor' → '--myBackgroundColor'
 * - Converts vendor-prefixed property names to -kebab-case, e.g. 'MozTransform' → '-moz-transform'
 *
 * @param {string} property Property name.
 *
 * @return {string} Normalized property name.
 */


function getNormalStylePropertyName(property) {
  if (Object(external_commonjs_lodash_amd_lodash_["startsWith"])(property, '--')) {
    return property;
  }

  if (hasPrefix(property, ['ms', 'O', 'Moz', 'Webkit'])) {
    return '-' + Object(external_commonjs_lodash_amd_lodash_["kebabCase"])(property);
  }

  return Object(external_commonjs_lodash_amd_lodash_["kebabCase"])(property);
}
/**
 * Returns the normal form of the style property value for HTML. Appends a
 * default pixel unit if numeric, not a unitless property, and not zero.
 *
 * @param {string} property Property name.
 * @param {*}      value    Non-normalized property value.
 *
 * @return {*} Normalized property value.
 */


function getNormalStylePropertyValue(property, value) {
  if (typeof value === 'number' && 0 !== value && !CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)) {
    return value + 'px';
  }

  return value;
}
/**
 * Serializes a React element to string.
 *
 * @param {WPElement} element       Element to serialize.
 * @param {?Object}   context       Context object.
 * @param {?Object}   legacyContext Legacy context object.
 *
 * @return {string} Serialized element.
 */


function renderElement(element, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (null === element || undefined === element || false === element) {
    return '';
  }

  if (Array.isArray(element)) {
    return renderChildren(element, context, legacyContext);
  }

  switch (_typeof(element)) {
    case 'string':
      return escapeHTML(element);

    case 'number':
      return element.toString();
  }

  var type = element.type,
      props = element.props;

  switch (type) {
    case react["StrictMode"]:
    case react["Fragment"]:
      return renderChildren(props.children, context, legacyContext);

    case RawHTML:
      var children = props.children,
          wrapperProps = _objectWithoutProperties(props, ["children"]);

      return renderNativeComponent(Object(external_commonjs_lodash_amd_lodash_["isEmpty"])(wrapperProps) ? null : 'div', _objectSpread({}, wrapperProps, {
        dangerouslySetInnerHTML: {
          __html: children
        }
      }), context, legacyContext);
  }

  switch (_typeof(type)) {
    case 'string':
      return renderNativeComponent(type, props, context, legacyContext);

    case 'function':
      if (type.prototype && typeof type.prototype.render === 'function') {
        return renderComponent(type, props, context, legacyContext);
      }

      return renderElement(type(props, legacyContext), context, legacyContext);
  }

  switch (type && type.$$typeof) {
    case Provider.$$typeof:
      return renderChildren(props.children, props.value, legacyContext);

    case Consumer.$$typeof:
      return renderElement(props.children(context || type._currentValue), context, legacyContext);

    case ForwardRef.$$typeof:
      return renderElement(type.render(props), context, legacyContext);
  }

  return '';
}
/**
 * Serializes a native component type to string.
 *
 * @param {?string} type          Native component type to serialize, or null if
 *                                rendering as fragment of children content.
 * @param {Object}  props         Props object.
 * @param {?Object} context       Context object.
 * @param {?Object} legacyContext Legacy context object.
 *
 * @return {string} Serialized element.
 */

function renderNativeComponent(type, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var content = '';

  if (type === 'textarea' && props.hasOwnProperty('value')) {
    // Textarea children can be assigned as value prop. If it is, render in
    // place of children. Ensure to omit so it is not assigned as attribute
    // as well.
    content = renderChildren(props.value, context, legacyContext);
    props = Object(external_commonjs_lodash_amd_lodash_["omit"])(props, 'value');
  } else if (props.dangerouslySetInnerHTML && typeof props.dangerouslySetInnerHTML.__html === 'string') {
    // Dangerous content is left unescaped.
    content = props.dangerouslySetInnerHTML.__html;
  } else if (typeof props.children !== 'undefined') {
    content = renderChildren(props.children, context, legacyContext);
  }

  if (!type) {
    return content;
  }

  var attributes = renderAttributes(props);

  if (SELF_CLOSING_TAGS.has(type)) {
    return '<' + type + attributes + '/>';
  }

  return '<' + type + attributes + '>' + content + '</' + type + '>';
}
/**
 * Serializes a non-native component type to string.
 *
 * @param {Function} Component     Component type to serialize.
 * @param {Object}   props         Props object.
 * @param {?Object}  context       Context object.
 * @param {?Object}  legacyContext Legacy context object.
 *
 * @return {string} Serialized element
 */

function renderComponent(Component, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var instance = new Component(props, legacyContext);

  if (typeof instance.getChildContext === 'function') {
    Object.assign(legacyContext, instance.getChildContext());
  }

  var html = renderElement(instance.render(), context, legacyContext);
  return html;
}
/**
 * Serializes an array of children to string.
 *
 * @param {Array}   children      Children to serialize.
 * @param {?Object} context       Context object.
 * @param {?Object} legacyContext Legacy context object.
 *
 * @return {string} Serialized children.
 */

function renderChildren(children, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = '';
  children = Object(external_commonjs_lodash_amd_lodash_["castArray"])(children);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    result += renderElement(child, context, legacyContext);
  }

  return result;
}
/**
 * Renders a props object as a string of HTML attributes.
 *
 * @param {Object} props Props object.
 *
 * @return {string} Attributes string.
 */


function renderAttributes(props) {
  var result = '';

  for (var key in props) {
    var attribute = getNormalAttributeName(key);

    if (!isValidAttributeName(attribute)) {
      continue;
    }

    var value = getNormalAttributeValue(key, props[key]); // If value is not of serializeable type, skip.

    if (!ATTRIBUTES_TYPES.has(_typeof(value))) {
      continue;
    } // Don't render internal attribute names.


    if (isInternalAttribute(key)) {
      continue;
    }

    var isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute); // Boolean attribute should be omitted outright if its value is false.

    if (isBooleanAttribute && value === false) {
      continue;
    }

    var isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ['data-', 'aria-']) || ENUMERATED_ATTRIBUTES.has(attribute); // Only write boolean value as attribute if meaningful.

    if (typeof value === 'boolean' && !isMeaningfulAttribute) {
      continue;
    }

    result += ' ' + attribute; // Boolean attributes should write attribute name, but without value.
    // Mere presence of attribute name is effective truthiness.

    if (isBooleanAttribute) {
      continue;
    }

    if (typeof value === 'string') {
      value = escapeAttribute(value);
    }

    result += '="' + value + '"';
  }

  return result;
}
/**
 * Renders a style object as a string attribute value.
 *
 * @param {Object} style Style object.
 *
 * @return {string} Style attribute value.
 */

function renderStyle(style) {
  // Only generate from object, e.g. tolerate string value.
  if (!Object(external_commonjs_lodash_amd_lodash_["isPlainObject"])(style)) {
    return style;
  }

  var result;

  for (var property in style) {
    var value = style[property];

    if (null === value || undefined === value) {
      continue;
    }

    if (result) {
      result += ';';
    } else {
      result = '';
    }

    var normalName = getNormalStylePropertyName(property);
    var normalValue = getNormalStylePropertyValue(property, value);
    result += normalName + ':' + normalValue;
  }

  return result;
}
/* harmony default export */ var serialize = (renderElement);
//# sourceMappingURL=serialize.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/index.js





//# sourceMappingURL=index.js.map
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
  return (
    /*#__PURE__*/
    function (_Component) {
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
  return (
    /*#__PURE__*/
    function (_Component) {
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
var assertThisInitialized = __webpack_require__(10);
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

var placeholder_MapPlaceholder =
/*#__PURE__*/
function (_Component) {
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
var objectWithoutProperties = __webpack_require__(17);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-dom/server.browser.js
var server_browser = __webpack_require__(30);

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


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_STATE = {
  settings: {}
};
/* harmony default export */ var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return reducer_objectSpread({}, state, {
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

function with_settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { with_settings_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { with_settings_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
var toConsumableArray = __webpack_require__(18);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(19);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(12);
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
var readOnlyError = __webpack_require__(16);
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
  return (
    /*#__PURE__*/
    function (_Component) {
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
  return (
    /*#__PURE__*/
    function (_Component2) {
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
  return (
    /*#__PURE__*/
    function (_Component3) {
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

function gallery_options_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gallery_options_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gallery_options_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var gallery_options_GalleryPreview =
/*#__PURE__*/
function (_Component) {
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

function block_horizontal_alignment_toolbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_horizontal_alignment_toolbar_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_horizontal_alignment_toolbar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var block_horizontal_alignment_toolbar_createContext = createContext({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: function setFocusedElement() {},
  clientId: null
}),
    block_horizontal_alignment_toolbar_Consumer = block_horizontal_alignment_toolbar_createContext.Consumer;

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
      return Object(react["createElement"])(block_horizontal_alignment_toolbar_Consumer, null, function (context) {
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

function block_vertical_alignment_toolbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_vertical_alignment_toolbar_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_vertical_alignment_toolbar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var map_Map =
/*#__PURE__*/
function (_Component) {
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

var api_key_panel_body_ApiKeyPanelBody =
/*#__PURE__*/
function (_Component) {
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

var map_style_select_MapStyleSelect =
/*#__PURE__*/
function (_Component) {
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

var inspector_controls_ButtonInspectorControls =
/*#__PURE__*/
function (_Component) {
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

var edit_Edit =
/*#__PURE__*/
function (_Component) {
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



var heading_toolbar_HeadingToolbar =
/*#__PURE__*/
function (_Component) {
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

function background_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { background_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { background_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { edit_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { edit_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var edit_HeroEdit =
/*#__PURE__*/
function (_Component) {
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

function block_controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_controls_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_controls_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function media_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_edit_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_edit_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function slideshow_background_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slideshow_background_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slideshow_background_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var preview_SlideshowPreview =
/*#__PURE__*/
function (_Component) {
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

function slideshow_block_controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slideshow_block_controls_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slideshow_block_controls_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function slideshow_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slideshow_edit_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slideshow_edit_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var slideshow_edit_Edit =
/*#__PURE__*/
function (_Component) {
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

var navigation_edit_Edit =
/*#__PURE__*/
function (_Component) {
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
var is_shallow_equal = __webpack_require__(20);
var is_shallow_equal_default = /*#__PURE__*/__webpack_require__.n(is_shallow_equal);

// CONCATENATED MODULE: ./src/blocks/opentable/preview.js








/**
 * WordPress dependencies
 */

var opentable_preview_ = wp.i18n.__;
var opentable_preview_Component = wp.element.Component;
var SandBox = wp.components.SandBox;

var preview_OpenTablePreview =
/*#__PURE__*/
function (_Component) {
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

var preview_OpenHoursPreview =
/*#__PURE__*/
function (_Component) {
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
  return Object(react["createElement"])(openhours_inspector_controls_Fragment, null, Object(react["createElement"])(openhours_inspector_controls_InspectorControls, null, Object(react["createElement"])(TextareaControl, {
    label: "Open Hours",
    help: "Write your opening hours in a simple human readable format:",
    value: text,
    className: "original-text",
    onChange: function onChange(text) {
      return setAttributes({
        text: text,
        parsedText: parseContent(text)
      });
    }
  }), Object(react["createElement"])(openhours_inspector_controls_PanelBody, {
    title: openhours_inspector_controls_('Layout', '__plugin_txtd'),
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
  }), openHoursStyle === 'status' && Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Open Note",
    value: openNote,
    onChange: function onChange(openNote) {
      return setAttributes({
        openNote: openNote
      });
    }
  }), openHoursStyle === 'status' && Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Closed Note",
    value: closedNote,
    onChange: function onChange(closedNote) {
      return setAttributes({
        closedNote: closedNote
      });
    },
    help: Object(react["createElement"])(AvailableTagsModal, null)
  }), openHoursStyle === 'overview' && Object(react["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Closed",
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
    label: openhours_inspector_controls_('Use Short Name', '__plugin_txtd'),
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
    description: openhours_('Display Opening Hours for any kind of venue', '__plugin_txtd'),
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

var editor_novaBlocks =
/*#__PURE__*/
function () {
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