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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 6 */
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
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(35);

var assertThisInitialized = __webpack_require__(22);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(47);

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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _objectWithoutProperties; });

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

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
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

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ TAB; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ESCAPE; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ LEFT; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ UP; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ RIGHT; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DOWN; });

// UNUSED EXPORTS: BACKSPACE, ENTER, SPACE, DELETE, F10, ALT, CTRL, COMMAND, SHIFT, modifiers, rawShortcut, displayShortcutList, displayShortcut, shortcutAriaLabel, isKeyboardEvent

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(20);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@tannin/postfix/index.js
var PRECEDENCE, OPENERS, TERMINATORS, PATTERN;

/**
 * Operator precedence mapping.
 *
 * @type {Object}
 */
PRECEDENCE = {
	'(': 9,
	'!': 8,
	'*': 7,
	'/': 7,
	'%': 7,
	'+': 6,
	'-': 6,
	'<': 5,
	'<=': 5,
	'>': 5,
	'>=': 5,
	'==': 4,
	'!=': 4,
	'&&': 3,
	'||': 2,
	'?': 1,
	'?:': 1,
};

/**
 * Characters which signal pair opening, to be terminated by terminators.
 *
 * @type {string[]}
 */
OPENERS = [ '(', '?' ];

/**
 * Characters which signal pair termination, the value an array with the
 * opener as its first member. The second member is an optional operator
 * replacement to push to the stack.
 *
 * @type {string[]}
 */
TERMINATORS = {
	')': [ '(' ],
	':': [ '?', '?:' ],
};

/**
 * Pattern matching operators and openers.
 *
 * @type {RegExp}
 */
PATTERN = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;

/**
 * Given a C expression, returns the equivalent postfix (Reverse Polish)
 * notation terms as an array.
 *
 * If a postfix string is desired, simply `.join( ' ' )` the result.
 *
 * @example
 *
 * ```js
 * import postfix from '@tannin/postfix';
 *
 * postfix( 'n > 1' );
 * // ⇒ [ 'n', '1', '>' ]
 * ```
 *
 * @param {string} expression C expression.
 *
 * @return {string[]} Postfix terms.
 */
function postfix( expression ) {
	var terms = [],
		stack = [],
		match, operator, term, element;

	while ( ( match = expression.match( PATTERN ) ) ) {
		operator = match[ 0 ];

		// Term is the string preceding the operator match. It may contain
		// whitespace, and may be empty (if operator is at beginning).
		term = expression.substr( 0, match.index ).trim();
		if ( term ) {
			terms.push( term );
		}

		while ( ( element = stack.pop() ) ) {
			if ( TERMINATORS[ operator ] ) {
				if ( TERMINATORS[ operator ][ 0 ] === element ) {
					// Substitution works here under assumption that because
					// the assigned operator will no longer be a terminator, it
					// will be pushed to the stack during the condition below.
					operator = TERMINATORS[ operator ][ 1 ] || operator;
					break;
				}
			} else if ( OPENERS.indexOf( element ) >= 0 || PRECEDENCE[ element ] < PRECEDENCE[ operator ] ) {
				// Push to stack if either an opener or when pop reveals an
				// element of lower precedence.
				stack.push( element );
				break;
			}

			// For each popped from stack, push to terms.
			terms.push( element );
		}

		if ( ! TERMINATORS[ operator ] ) {
			stack.push( operator );
		}

		// Slice matched fragment from expression to continue match.
		expression = expression.substr( match.index + operator.length );
	}

	// Push remainder of operand, if exists, to terms.
	expression = expression.trim();
	if ( expression ) {
		terms.push( expression );
	}

	// Pop remaining items from stack into terms.
	return terms.concat( stack.reverse() );
}

// CONCATENATED MODULE: ./node_modules/@tannin/evaluate/index.js
/**
 * Operator callback functions.
 *
 * @type {Object}
 */
var OPERATORS = {
	'!': function( a ) {
		return ! a;
	},
	'*': function( a, b ) {
		return a * b;
	},
	'/': function( a, b ) {
		return a / b;
	},
	'%': function( a, b ) {
		return a % b;
	},
	'+': function( a, b ) {
		return a + b;
	},
	'-': function( a, b ) {
		return a - b;
	},
	'<': function( a, b ) {
		return a < b;
	},
	'<=': function( a, b ) {
		return a <= b;
	},
	'>': function( a, b ) {
		return a > b;
	},
	'>=': function( a, b ) {
		return a >= b;
	},
	'==': function( a, b ) {
		return a === b;
	},
	'!=': function( a, b ) {
		return a !== b;
	},
	'&&': function( a, b ) {
		return a && b;
	},
	'||': function( a, b ) {
		return a || b;
	},
	'?:': function( a, b, c ) {
		if ( a ) {
			throw b;
		}

		return c;
	},
};

/**
 * Given an array of postfix terms and operand variables, returns the result of
 * the postfix evaluation.
 *
 * @example
 *
 * ```js
 * import evaluate from '@tannin/evaluate';
 *
 * // 3 + 4 * 5 / 6 ⇒ '3 4 5 * 6 / +'
 * const terms = [ '3', '4', '5', '*', '6', '/', '+' ];
 *
 * evaluate( terms, {} );
 * // ⇒ 6.333333333333334
 * ```
 *
 * @param {string[]} postfix   Postfix terms.
 * @param {Object}   variables Operand variables.
 *
 * @return {*} Result of evaluation.
 */
function evaluate_evaluate( postfix, variables ) {
	var stack = [],
		i, j, args, getOperatorResult, term, value;

	for ( i = 0; i < postfix.length; i++ ) {
		term = postfix[ i ];

		getOperatorResult = OPERATORS[ term ];
		if ( getOperatorResult ) {
			// Pop from stack by number of function arguments.
			j = getOperatorResult.length;
			args = Array( j );
			while ( j-- ) {
				args[ j ] = stack.pop();
			}

			try {
				value = getOperatorResult.apply( null, args );
			} catch ( earlyReturn ) {
				return earlyReturn;
			}
		} else if ( variables.hasOwnProperty( term ) ) {
			value = variables[ term ];
		} else {
			value = +term;
		}

		stack.push( value );
	}

	return stack[ 0 ];
}

// CONCATENATED MODULE: ./node_modules/@tannin/compile/index.js



/**
 * Given a C expression, returns a function which can be called to evaluate its
 * result.
 *
 * @example
 *
 * ```js
 * import compile from '@tannin/compile';
 *
 * const evaluate = compile( 'n > 1' );
 *
 * evaluate( { n: 2 } );
 * // ⇒ true
 * ```
 *
 * @param {string} expression C expression.
 *
 * @return {(variables?:{[variable:string]:*})=>*} Compiled evaluator.
 */
function compile( expression ) {
	var terms = postfix( expression );

	return function( variables ) {
		return evaluate_evaluate( terms, variables );
	};
}

// CONCATENATED MODULE: ./node_modules/@tannin/plural-forms/index.js


/**
 * Given a C expression, returns a function which, when called with a value,
 * evaluates the result with the value assumed to be the "n" variable of the
 * expression. The result will be coerced to its numeric equivalent.
 *
 * @param {string} expression C expression.
 *
 * @return {Function} Evaluator function.
 */
function pluralForms( expression ) {
	var evaluate = compile( expression );

	return function( n ) {
		return +evaluate( { n: n } );
	};
}

// CONCATENATED MODULE: ./node_modules/tannin/index.js


/**
 * Tannin constructor options.
 *
 * @typedef {Object} TanninOptions
 *
 * @property {string}   [contextDelimiter] Joiner in string lookup with context.
 * @property {Function} [onMissingKey]     Callback to invoke when key missing.
 */

/**
 * Domain metadata.
 *
 * @typedef {Object} TanninDomainMetadata
 *
 * @property {string}            [domain]       Domain name.
 * @property {string}            [lang]         Language code.
 * @property {(string|Function)} [plural_forms] Plural forms expression or
 *                                              function evaluator.
 */

/**
 * Domain translation pair respectively representing the singular and plural
 * translation.
 *
 * @typedef {[string,string]} TanninTranslation
 */

/**
 * Locale data domain. The key is used as reference for lookup, the value an
 * array of two string entries respectively representing the singular and plural
 * translation.
 *
 * @typedef {{[key:string]:TanninDomainMetadata|TanninTranslation,'':TanninDomainMetadata|TanninTranslation}} TanninLocaleDomain
 */

/**
 * Jed-formatted locale data.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @typedef {{[domain:string]:TanninLocaleDomain}} TanninLocaleData
 */

/**
 * Default Tannin constructor options.
 *
 * @type {TanninOptions}
 */
var DEFAULT_OPTIONS = {
	contextDelimiter: '\u0004',
	onMissingKey: null,
};

/**
 * Given a specific locale data's config `plural_forms` value, returns the
 * expression.
 *
 * @example
 *
 * ```
 * getPluralExpression( 'nplurals=2; plural=(n != 1);' ) === '(n != 1)'
 * ```
 *
 * @param {string} pf Locale data plural forms.
 *
 * @return {string} Plural forms expression.
 */
function getPluralExpression( pf ) {
	var parts, i, part;

	parts = pf.split( ';' );

	for ( i = 0; i < parts.length; i++ ) {
		part = parts[ i ].trim();
		if ( part.indexOf( 'plural=' ) === 0 ) {
			return part.substr( 7 );
		}
	}
}

/**
 * Tannin constructor.
 *
 * @class
 *
 * @param {TanninLocaleData} data      Jed-formatted locale data.
 * @param {TanninOptions}    [options] Tannin options.
 */
function Tannin( data, options ) {
	var key;

	/**
	 * Jed-formatted locale data.
	 *
	 * @name Tannin#data
	 * @type {TanninLocaleData}
	 */
	this.data = data;

	/**
	 * Plural forms function cache, keyed by plural forms string.
	 *
	 * @name Tannin#pluralForms
	 * @type {Object<string,Function>}
	 */
	this.pluralForms = {};

	/**
	 * Effective options for instance, including defaults.
	 *
	 * @name Tannin#options
	 * @type {TanninOptions}
	 */
	this.options = {};

	for ( key in DEFAULT_OPTIONS ) {
		this.options[ key ] = options !== undefined && key in options
			? options[ key ]
			: DEFAULT_OPTIONS[ key ];
	}
}

/**
 * Returns the plural form index for the given domain and value.
 *
 * @param {string} domain Domain on which to calculate plural form.
 * @param {number} n      Value for which plural form is to be calculated.
 *
 * @return {number} Plural form index.
 */
Tannin.prototype.getPluralForm = function( domain, n ) {
	var getPluralForm = this.pluralForms[ domain ],
		config, plural, pf;

	if ( ! getPluralForm ) {
		config = this.data[ domain ][ '' ];

		pf = (
			config[ 'Plural-Forms' ] ||
			config[ 'plural-forms' ] ||
			// Ignore reason: As known, there's no way to document the empty
			// string property on a key to guarantee this as metadata.
			// @ts-ignore
			config.plural_forms
		);

		if ( typeof pf !== 'function' ) {
			plural = getPluralExpression(
				config[ 'Plural-Forms' ] ||
				config[ 'plural-forms' ] ||
				// Ignore reason: As known, there's no way to document the empty
				// string property on a key to guarantee this as metadata.
				// @ts-ignore
				config.plural_forms
			);

			pf = pluralForms( plural );
		}

		getPluralForm = this.pluralForms[ domain ] = pf;
	}

	return getPluralForm( n );
};

/**
 * Translate a string.
 *
 * @param {string}      domain   Translation domain.
 * @param {string|void} context  Context distinguishing terms of the same name.
 * @param {string}      singular Primary key for translation lookup.
 * @param {string=}     plural   Fallback value used for non-zero plural
 *                               form index.
 * @param {number=}     n        Value to use in calculating plural form.
 *
 * @return {string} Translated string.
 */
Tannin.prototype.dcnpgettext = function( domain, context, singular, plural, n ) {
	var index, key, entry;

	if ( n === undefined ) {
		// Default to singular.
		index = 0;
	} else {
		// Find index by evaluating plural form for value.
		index = this.getPluralForm( domain, n );
	}

	key = singular;

	// If provided, context is prepended to key with delimiter.
	if ( context ) {
		key = context + this.options.contextDelimiter + singular;
	}

	entry = this.data[ domain ][ key ];

	// Verify not only that entry exists, but that the intended index is within
	// range and non-empty.
	if ( entry && entry[ index ] ) {
		return entry[ index ];
	}

	if ( this.options.onMissingKey ) {
		this.options.onMissingKey( singular, domain );
	}

	// If entry not found, fall back to singular vs. plural with zero index
	// representing the singular value.
	return index === 0 ? singular : plural;
};

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__(45);
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// EXTERNAL MODULE: ./node_modules/@wordpress/i18n/node_modules/sprintf-js/src/sprintf.js
var sprintf = __webpack_require__(36);
var sprintf_default = /*#__PURE__*/__webpack_require__.n(sprintf);

// CONCATENATED MODULE: ./node_modules/@wordpress/i18n/build-module/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */



/**
 * @typedef {{[key: string]: any}} LocaleData
 */

/**
 * Default locale data to use for Tannin domain when not otherwise provided.
 * Assumes an English plural forms expression.
 *
 * @type {LocaleData}
 */

var DEFAULT_LOCALE_DATA = {
  '': {
    plural_forms: function plural_forms(n) {
      return n === 1 ? 0 : 1;
    }
  }
};
/**
 * Log to console, once per message; or more precisely, per referentially equal
 * argument set. Because Jed throws errors, we log these to the console instead
 * to avoid crashing the application.
 *
 * @param {...*} args Arguments to pass to `console.error`
 */

var logErrorOnce = memize_default()(console.error); // eslint-disable-line no-console

/**
 * The underlying instance of Tannin to which exported functions interface.
 *
 * @type {Tannin}
 */

var i18n = new Tannin({});
/**
 * Merges locale data into the Tannin instance by domain. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {LocaleData} [data]   Locale data configuration.
 * @param {string}     [domain] Domain for which configuration applies.
 */

function setLocaleData(data) {
  var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  i18n.data[domain] = _objectSpread({}, DEFAULT_LOCALE_DATA, {}, i18n.data[domain], {}, data); // Populate default domain configuration (supported locale date which omits
  // a plural forms expression).

  i18n.data[domain][''] = _objectSpread({}, DEFAULT_LOCALE_DATA[''], {}, i18n.data[domain]['']);
}
/**
 * Wrapper for Tannin's `dcnpgettext`. Populates default locale data if not
 * otherwise previously assigned.
 *
 * @param {string|undefined} domain   Domain to retrieve the translated text.
 * @param {string|undefined} context  Context information for the translators.
 * @param {string}           single   Text to translate if non-plural. Used as
 *                                    fallback return value on a caught error.
 * @param {string}           [plural] The text to be used if the number is
 *                                    plural.
 * @param {number}           [number] The number to compare against to use
 *                                    either the singular or plural form.
 *
 * @return {string} The translated string.
 */

function dcnpgettext() {
  var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  var context = arguments.length > 1 ? arguments[1] : undefined;
  var single = arguments.length > 2 ? arguments[2] : undefined;
  var plural = arguments.length > 3 ? arguments[3] : undefined;
  var number = arguments.length > 4 ? arguments[4] : undefined;

  if (!i18n.data[domain]) {
    setLocaleData(undefined, domain);
  }

  return i18n.dcnpgettext(domain, context, single, plural, number);
}
/**
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 *
 * @param {string} text     Text to translate.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated text.
 */


function __(text, domain) {
  return dcnpgettext(domain, undefined, text);
}
/**
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 *
 * @param {string} text     Text to translate.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated context string without pipe.
 */

function _x(text, context, domain) {
  return dcnpgettext(domain, context, text);
}
/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */

function _n(single, plural, number, domain) {
  return dcnpgettext(domain, undefined, single, plural, number);
}
/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */

function _nx(single, plural, number, context, domain) {
  return dcnpgettext(domain, context, single, plural, number);
}
/**
 * Returns a formatted string. If an error occurs in applying the format, the
 * original format string is returned.
 *
 * @param {string}    format The format of the string to generate.
 * @param {...string} args   Arguments to apply to the format.
 *
 * @see http://www.diveintojavascript.com/projects/javascript-sprintf
 *
 * @return {string} The formatted string.
 */

function build_module_sprintf(format) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return sprintf_default.a.sprintf.apply(sprintf_default.a, [format].concat(args));
  } catch (error) {
    logErrorOnce('sprintf error: \n\n' + error.toString());
    return format;
  }
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/keycodes/build-module/platform.js
/**
 * External dependencies
 */

/**
 * Return true if platform is MacOS.
 *
 * @param {Object} _window   window object by default; used for DI testing.
 *
 * @return {boolean}         True if MacOS; false otherwise.
 */

function isAppleOS() {
  var _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  var platform = _window.navigator.platform;
  return platform.indexOf('Mac') !== -1 || Object(external_lodash_["includes"])(['iPad', 'iPhone'], platform);
}
//# sourceMappingURL=platform.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/keycodes/build-module/index.js



/**
 * Note: The order of the modifier keys in many of the [foo]Shortcut()
 * functions in this file are intentional and should not be changed. They're
 * designed to fit with the standard menu keyboard shortcuts shown in the
 * user's platform.
 *
 * For example, on MacOS menu shortcuts will place Shift before Command, but
 * on Windows Control will usually come first. So don't provide your own
 * shortcut combos directly to keyboardShortcut().
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


/**
 * @typedef {'primary'|'primaryShift'|'primaryAlt'|'secondary'|'access'|'ctrl'|'alt'|'ctrlShift'|'shift'|'shiftAlt'} WPKeycodeModifier
 */

/**
 * An object of handler functions for each of the possible modifier
 * combinations. A handler will return a value for a given key.
 *
 * @typedef {{[M in WPKeycodeModifier]:(key:string)=>any}} WPKeycodeHandlerByModifier
 */

/**
 * Keycode for BACKSPACE key.
 */

var BACKSPACE = 8;
/**
 * Keycode for TAB key.
 */

var TAB = 9;
/**
 * Keycode for ENTER key.
 */

var ENTER = 13;
/**
 * Keycode for ESCAPE key.
 */

var ESCAPE = 27;
/**
 * Keycode for SPACE key.
 */

var SPACE = 32;
/**
 * Keycode for LEFT key.
 */

var LEFT = 37;
/**
 * Keycode for UP key.
 */

var UP = 38;
/**
 * Keycode for RIGHT key.
 */

var RIGHT = 39;
/**
 * Keycode for DOWN key.
 */

var DOWN = 40;
/**
 * Keycode for DELETE key.
 */

var DELETE = 46;
/**
 * Keycode for F10 key.
 */

var F10 = 121;
/**
 * Keycode for ALT key.
 */

var ALT = 'alt';
/**
 * Keycode for CTRL key.
 */

var CTRL = 'ctrl';
/**
 * Keycode for COMMAND/META key.
 */

var COMMAND = 'meta';
/**
 * Keycode for SHIFT key.
 */

var SHIFT = 'shift';
/**
 * Object that contains functions that return the available modifier
 * depending on platform.
 *
 * - `primary`: takes a isApple function as a parameter.
 * - `primaryShift`: takes a isApple function as a parameter.
 * - `primaryAlt`: takes a isApple function as a parameter.
 * - `secondary`: takes a isApple function as a parameter.
 * - `access`: takes a isApple function as a parameter.
 * - `ctrl`
 * - `alt`
 * - `ctrlShift`
 * - `shift`
 * - `shiftAlt`
 */

var modifiers = {
  primary: function primary(_isApple) {
    return _isApple() ? [COMMAND] : [CTRL];
  },
  primaryShift: function primaryShift(_isApple) {
    return _isApple() ? [SHIFT, COMMAND] : [CTRL, SHIFT];
  },
  primaryAlt: function primaryAlt(_isApple) {
    return _isApple() ? [ALT, COMMAND] : [CTRL, ALT];
  },
  secondary: function secondary(_isApple) {
    return _isApple() ? [SHIFT, ALT, COMMAND] : [CTRL, SHIFT, ALT];
  },
  access: function access(_isApple) {
    return _isApple() ? [CTRL, ALT] : [SHIFT, ALT];
  },
  ctrl: function ctrl() {
    return [CTRL];
  },
  alt: function alt() {
    return [ALT];
  },
  ctrlShift: function ctrlShift() {
    return [CTRL, SHIFT];
  },
  shift: function shift() {
    return [SHIFT];
  },
  shiftAlt: function shiftAlt() {
    return [SHIFT, ALT];
  }
};
/**
 * An object that contains functions to get raw shortcuts.
 * E.g. rawShortcut.primary( 'm' ) will return 'meta+m' on Mac.
 * These are intended for user with the KeyboardShortcuts component or TinyMCE.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to raw shortcuts.
 */

var rawShortcut = Object(external_lodash_["mapValues"])(modifiers, function (modifier) {
  return function (character) {
    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    return [].concat(Object(toConsumableArray["a" /* default */])(modifier(_isApple)), [character.toLowerCase()]).join('+');
  };
});
/**
 * Return an array of the parts of a keyboard shortcut chord for display
 * E.g displayShortcutList.primary( 'm' ) will return [ '⌘', 'M' ] on Mac.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to shortcut
 *                                    sequences.
 */

var displayShortcutList = Object(external_lodash_["mapValues"])(modifiers, function (modifier) {
  return function (character) {
    var _replacementKeyMap;

    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    var isApple = _isApple();

    var replacementKeyMap = (_replacementKeyMap = {}, Object(defineProperty["a" /* default */])(_replacementKeyMap, ALT, isApple ? '⌥' : 'Alt'), Object(defineProperty["a" /* default */])(_replacementKeyMap, CTRL, isApple ? '^' : 'Ctrl'), Object(defineProperty["a" /* default */])(_replacementKeyMap, COMMAND, '⌘'), Object(defineProperty["a" /* default */])(_replacementKeyMap, SHIFT, isApple ? '⇧' : 'Shift'), _replacementKeyMap);
    var modifierKeys = modifier(_isApple).reduce(function (accumulator, key) {
      var replacementKey = Object(external_lodash_["get"])(replacementKeyMap, key, key); // If on the Mac, adhere to platform convention and don't show plus between keys.

      if (isApple) {
        return [].concat(Object(toConsumableArray["a" /* default */])(accumulator), [replacementKey]);
      }

      return [].concat(Object(toConsumableArray["a" /* default */])(accumulator), [replacementKey, '+']);
    }, []);
    var capitalizedCharacter = Object(external_lodash_["capitalize"])(character);
    return [].concat(Object(toConsumableArray["a" /* default */])(modifierKeys), [capitalizedCharacter]);
  };
});
/**
 * An object that contains functions to display shortcuts.
 * E.g. displayShortcut.primary( 'm' ) will return '⌘M' on Mac.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to display
 *                                    shortcuts.
 */

var displayShortcut = Object(external_lodash_["mapValues"])(displayShortcutList, function (shortcutList) {
  return function (character) {
    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    return shortcutList(character, _isApple).join('');
  };
});
/**
 * An object that contains functions to return an aria label for a keyboard shortcut.
 * E.g. shortcutAriaLabel.primary( '.' ) will return 'Command + Period' on Mac.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to shortcut ARIA
 *                                    labels.
 */

var shortcutAriaLabel = Object(external_lodash_["mapValues"])(modifiers, function (modifier) {
  return function (character) {
    var _replacementKeyMap2;

    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    var isApple = _isApple();

    var replacementKeyMap = (_replacementKeyMap2 = {}, Object(defineProperty["a" /* default */])(_replacementKeyMap2, SHIFT, 'Shift'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, COMMAND, isApple ? 'Command' : 'Control'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, CTRL, 'Control'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, ALT, isApple ? 'Option' : 'Alt'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, ',', __('Comma')), Object(defineProperty["a" /* default */])(_replacementKeyMap2, '.', __('Period')), Object(defineProperty["a" /* default */])(_replacementKeyMap2, '`', __('Backtick')), _replacementKeyMap2);
    return [].concat(Object(toConsumableArray["a" /* default */])(modifier(_isApple)), [character]).map(function (key) {
      return Object(external_lodash_["capitalize"])(Object(external_lodash_["get"])(replacementKeyMap, key, key));
    }).join(isApple ? ' ' : ' + ');
  };
});
/**
 * An object that contains functions to check if a keyboard event matches a
 * predefined shortcut combination.
 * E.g. isKeyboardEvent.primary( event, 'm' ) will return true if the event
 * signals pressing ⌘M.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to match events.
 */

var isKeyboardEvent = Object(external_lodash_["mapValues"])(modifiers, function (getModifiers) {
  return function (event, character) {
    var _isApple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isAppleOS;

    var mods = getModifiers(_isApple);

    if (!mods.every(function (key) {
      return event["".concat(key, "Key")];
    })) {
      return false;
    }

    if (!character) {
      return Object(external_lodash_["includes"])(mods, event.key.toLowerCase());
    }

    return event.key === character;
  };
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var ToolbarContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (ToolbarContext);
//# sourceMappingURL=index.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ deprecated; });

// UNUSED EXPORTS: logged

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/validateNamespace.js
/**
 * Validate a namespace string.
 *
 * @param  {string} namespace The namespace to validate - should take the form
 *                            `vendor/plugin/function`.
 *
 * @return {boolean}             Whether the namespace is valid.
 */
function validateNamespace(namespace) {
  if ('string' !== typeof namespace || '' === namespace) {
    // eslint-disable-next-line no-console
    console.error('The namespace must be a non-empty string.');
    return false;
  }

  if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
    // eslint-disable-next-line no-console
    console.error('The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.');
    return false;
  }

  return true;
}

/* harmony default export */ var build_module_validateNamespace = (validateNamespace);
//# sourceMappingURL=validateNamespace.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/validateHookName.js
/**
 * Validate a hookName string.
 *
 * @param  {string} hookName The hook name to validate. Should be a non empty string containing
 *                           only numbers, letters, dashes, periods and underscores. Also,
 *                           the hook name cannot begin with `__`.
 *
 * @return {boolean}            Whether the hook name is valid.
 */
function validateHookName(hookName) {
  if ('string' !== typeof hookName || '' === hookName) {
    // eslint-disable-next-line no-console
    console.error('The hook name must be a non-empty string.');
    return false;
  }

  if (/^__/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name cannot begin with `__`.');
    return false;
  }

  if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name can only contain numbers, letters, dashes, periods and underscores.');
    return false;
  }

  return true;
}

/* harmony default export */ var build_module_validateHookName = (validateHookName);
//# sourceMappingURL=validateHookName.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createAddHook.js
/**
 * Internal dependencies
 */



/**
 * Returns a function which, when invoked, will add a hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that adds a new hook.
 */

function createAddHook(hooks) {
  /**
   * Adds the hook to the appropriate hooks container.
   *
   * @param {string}   hookName  Name of hook to add
   * @param {string}   namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
   * @param {Function} callback  Function to call when the hook is run
   * @param {?number}  priority  Priority of this hook (default=10)
   */
  return function addHook(hookName, namespace, callback) {
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    if (!build_module_validateHookName(hookName)) {
      return;
    }

    if (!build_module_validateNamespace(namespace)) {
      return;
    }

    if ('function' !== typeof callback) {
      // eslint-disable-next-line no-console
      console.error('The hook callback must be a function.');
      return;
    } // Validate numeric priority


    if ('number' !== typeof priority) {
      // eslint-disable-next-line no-console
      console.error('If specified, the hook priority must be a number.');
      return;
    }

    var handler = {
      callback: callback,
      priority: priority,
      namespace: namespace
    };

    if (hooks[hookName]) {
      // Find the correct insert index of the new hook.
      var handlers = hooks[hookName].handlers;
      var i;

      for (i = handlers.length; i > 0; i--) {
        if (priority >= handlers[i - 1].priority) {
          break;
        }
      }

      if (i === handlers.length) {
        // If append, operate via direct assignment.
        handlers[i] = handler;
      } else {
        // Otherwise, insert before index via splice.
        handlers.splice(i, 0, handler);
      } // We may also be currently executing this hook.  If the callback
      // we're adding would come after the current callback, there's no
      // problem; otherwise we need to increase the execution index of
      // any other runs by 1 to account for the added element.


      (hooks.__current || []).forEach(function (hookInfo) {
        if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
          hookInfo.currentIndex++;
        }
      });
    } else {
      // This is the first hook of its type.
      hooks[hookName] = {
        handlers: [handler],
        runs: 0
      };
    }

    if (hookName !== 'hookAdded') {
      doAction('hookAdded', hookName, namespace, callback, priority);
    }
  };
}

/* harmony default export */ var build_module_createAddHook = (createAddHook);
//# sourceMappingURL=createAddHook.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRemoveHook.js
/**
 * Internal dependencies
 */



/**
 * Returns a function which, when invoked, will remove a specified hook or all
 * hooks by the given name.
 *
 * @param  {Object}   hooks      Stored hooks, keyed by hook name.
 * @param  {boolean}     removeAll  Whether to remove all callbacks for a hookName, without regard to namespace. Used to create `removeAll*` functions.
 *
 * @return {Function}            Function that removes hooks.
 */

function createRemoveHook(hooks, removeAll) {
  /**
   * Removes the specified callback (or all callbacks) from the hook with a
   * given hookName and namespace.
   *
   * @param {string}    hookName  The name of the hook to modify.
   * @param {string}    namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
   *
   * @return {number}             The number of callbacks removed.
   */
  return function removeHook(hookName, namespace) {
    if (!build_module_validateHookName(hookName)) {
      return;
    }

    if (!removeAll && !build_module_validateNamespace(namespace)) {
      return;
    } // Bail if no hooks exist by this name


    if (!hooks[hookName]) {
      return 0;
    }

    var handlersRemoved = 0;

    if (removeAll) {
      handlersRemoved = hooks[hookName].handlers.length;
      hooks[hookName] = {
        runs: hooks[hookName].runs,
        handlers: []
      };
    } else {
      // Try to find the specified callback to remove.
      var handlers = hooks[hookName].handlers;

      var _loop = function _loop(i) {
        if (handlers[i].namespace === namespace) {
          handlers.splice(i, 1);
          handlersRemoved++; // This callback may also be part of a hook that is
          // currently executing.  If the callback we're removing
          // comes after the current callback, there's no problem;
          // otherwise we need to decrease the execution index of any
          // other runs by 1 to account for the removed element.

          (hooks.__current || []).forEach(function (hookInfo) {
            if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
              hookInfo.currentIndex--;
            }
          });
        }
      };

      for (var i = handlers.length - 1; i >= 0; i--) {
        _loop(i);
      }
    }

    if (hookName !== 'hookRemoved') {
      doAction('hookRemoved', hookName, namespace);
    }

    return handlersRemoved;
  };
}

/* harmony default export */ var build_module_createRemoveHook = (createRemoveHook);
//# sourceMappingURL=createRemoveHook.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createHasHook.js
/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether any handlers are
 *                          attached to a particular hook and optional namespace.
 */
function createHasHook(hooks) {
  /**
   * Returns whether any handlers are attached for the given hookName and optional namespace.
   *
   * @param {string}  hookName  The name of the hook to check for.
   * @param {?string} namespace Optional. The unique namespace identifying the callback
   *                                      in the form `vendor/plugin/function`.
   *
   * @return {boolean} Whether there are handlers that are attached to the given hook.
   */
  return function hasHook(hookName, namespace) {
    // Use the namespace if provided.
    if ('undefined' !== typeof namespace) {
      return hookName in hooks && hooks[hookName].handlers.some(function (hook) {
        return hook.namespace === namespace;
      });
    }

    return hookName in hooks;
  };
}

/* harmony default export */ var build_module_createHasHook = (createHasHook);
//# sourceMappingURL=createHasHook.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRunHook.js


/**
 * Returns a function which, when invoked, will execute all callbacks
 * registered to a hook of the specified type, optionally returning the final
 * value of the call chain.
 *
 * @param  {Object}   hooks          Stored hooks, keyed by hook name.
 * @param  {?boolean}    returnFirstArg Whether each hook callback is expected to
 *                                   return its first argument.
 *
 * @return {Function}                Function that runs hook callbacks.
 */
function createRunHook(hooks, returnFirstArg) {
  /**
   * Runs all callbacks for the specified hook.
   *
   * @param  {string} hookName The name of the hook to run.
   * @param  {...*}   args     Arguments to pass to the hook callbacks.
   *
   * @return {*}               Return value of runner, if applicable.
   */
  return function runHooks(hookName) {
    if (!hooks[hookName]) {
      hooks[hookName] = {
        handlers: [],
        runs: 0
      };
    }

    hooks[hookName].runs++;
    var handlers = hooks[hookName].handlers; // The following code is stripped from production builds.

    if (false) {}

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!handlers || !handlers.length) {
      return returnFirstArg ? args[0] : undefined;
    }

    var hookInfo = {
      name: hookName,
      currentIndex: 0
    };

    hooks.__current.push(hookInfo);

    while (hookInfo.currentIndex < handlers.length) {
      var handler = handlers[hookInfo.currentIndex];
      var result = handler.callback.apply(null, args);

      if (returnFirstArg) {
        args[0] = result;
      }

      hookInfo.currentIndex++;
    }

    hooks.__current.pop();

    if (returnFirstArg) {
      return args[0];
    }
  };
}

/* harmony default export */ var build_module_createRunHook = (createRunHook);
//# sourceMappingURL=createRunHook.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createCurrentHook.js
/**
 * Returns a function which, when invoked, will return the name of the
 * currently running hook, or `null` if no hook of the given type is currently
 * running.
 *
 * @param  {Object}   hooks          Stored hooks, keyed by hook name.
 *
 * @return {Function}                Function that returns the current hook.
 */
function createCurrentHook(hooks) {
  /**
   * Returns the name of the currently running hook, or `null` if no hook of
   * the given type is currently running.
   *
   * @return {?string}             The name of the currently running hook, or
   *                               `null` if no hook is currently running.
   */
  return function currentHook() {
    if (!hooks.__current || !hooks.__current.length) {
      return null;
    }

    return hooks.__current[hooks.__current.length - 1].name;
  };
}

/* harmony default export */ var build_module_createCurrentHook = (createCurrentHook);
//# sourceMappingURL=createCurrentHook.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createDoingHook.js
/**
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether a hook is currently
 *                          being executed.
 */
function createDoingHook(hooks) {
  /**
   * Returns whether a hook is currently being executed.
   *
   * @param  {?string} hookName The name of the hook to check for.  If
   *                            omitted, will check for any hook being executed.
   *
   * @return {boolean}             Whether the hook is being executed.
   */
  return function doingHook(hookName) {
    // If the hookName was not passed, check for any current hook.
    if ('undefined' === typeof hookName) {
      return 'undefined' !== typeof hooks.__current[0];
    } // Return the __current hook.


    return hooks.__current[0] ? hookName === hooks.__current[0].name : false;
  };
}

/* harmony default export */ var build_module_createDoingHook = (createDoingHook);
//# sourceMappingURL=createDoingHook.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createDidHook.js
/**
 * Internal dependencies
 */

/**
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns a hook's call count.
 */

function createDidHook(hooks) {
  /**
   * Returns the number of times an action has been fired.
   *
   * @param  {string} hookName The hook name to check.
   *
   * @return {number}          The number of times the hook has run.
   */
  return function didHook(hookName) {
    if (!build_module_validateHookName(hookName)) {
      return;
    }

    return hooks[hookName] && hooks[hookName].runs ? hooks[hookName].runs : 0;
  };
}

/* harmony default export */ var build_module_createDidHook = (createDidHook);
//# sourceMappingURL=createDidHook.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createHooks.js
/**
 * Internal dependencies
 */







/**
 * Returns an instance of the hooks object.
 *
 * @return {Object} Object that contains all hooks.
 */

function createHooks() {
  var actions = Object.create(null);
  var filters = Object.create(null);
  actions.__current = [];
  filters.__current = [];
  return {
    addAction: build_module_createAddHook(actions),
    addFilter: build_module_createAddHook(filters),
    removeAction: build_module_createRemoveHook(actions),
    removeFilter: build_module_createRemoveHook(filters),
    hasAction: build_module_createHasHook(actions),
    hasFilter: build_module_createHasHook(filters),
    removeAllActions: build_module_createRemoveHook(actions, true),
    removeAllFilters: build_module_createRemoveHook(filters, true),
    doAction: build_module_createRunHook(actions),
    applyFilters: build_module_createRunHook(filters, true),
    currentAction: build_module_createCurrentHook(actions),
    currentFilter: build_module_createCurrentHook(filters),
    doingAction: build_module_createDoingHook(actions),
    doingFilter: build_module_createDoingHook(filters),
    didAction: build_module_createDidHook(actions),
    didFilter: build_module_createDidHook(filters),
    actions: actions,
    filters: filters
  };
}

/* harmony default export */ var build_module_createHooks = (createHooks);
//# sourceMappingURL=createHooks.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/index.js
/**
 * Internal dependencies
 */


var _createHooks = build_module_createHooks(),
    addAction = _createHooks.addAction,
    addFilter = _createHooks.addFilter,
    removeAction = _createHooks.removeAction,
    removeFilter = _createHooks.removeFilter,
    hasAction = _createHooks.hasAction,
    hasFilter = _createHooks.hasFilter,
    removeAllActions = _createHooks.removeAllActions,
    removeAllFilters = _createHooks.removeAllFilters,
    doAction = _createHooks.doAction,
    applyFilters = _createHooks.applyFilters,
    currentAction = _createHooks.currentAction,
    currentFilter = _createHooks.currentFilter,
    doingAction = _createHooks.doingAction,
    doingFilter = _createHooks.doingFilter,
    didAction = _createHooks.didAction,
    didFilter = _createHooks.didFilter,
    build_module_actions = _createHooks.actions,
    build_module_filters = _createHooks.filters;


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/deprecated/build-module/index.js
/**
 * WordPress dependencies
 */

/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 *
 * @type {Object}
 */

var logged = Object.create(null);
/**
 * Logs a message to notify developers about a deprecated feature.
 *
 * @param {string}  feature             Name of the deprecated feature.
 * @param {?Object} options             Personalisation options
 * @param {?string} options.version     Version in which the feature will be removed.
 * @param {?string} options.alternative Feature to use instead
 * @param {?string} options.plugin      Plugin name if it's a plugin feature
 * @param {?string} options.link        Link to documentation
 * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
 *
 * @example
 * ```js
 * import deprecated from '@wordpress/deprecated';
 *
 * deprecated( 'Eating meat', {
 * 	version: 'the future',
 * 	alternative: 'vegetables',
 * 	plugin: 'the earth',
 * 	hint: 'You may find it beneficial to transition gradually.',
 * } );
 *
 * // Logs: 'Eating meat is deprecated and will be removed from the earth in the future. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
 * ```
 */

function deprecated(feature) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var version = options.version,
      alternative = options.alternative,
      plugin = options.plugin,
      link = options.link,
      hint = options.hint;
  var pluginMessage = plugin ? " from ".concat(plugin) : '';
  var versionMessage = version ? " and will be removed".concat(pluginMessage, " in version ").concat(version) : '';
  var useInsteadMessage = alternative ? " Please use ".concat(alternative, " instead.") : '';
  var linkMessage = link ? " See: ".concat(link) : '';
  var hintMessage = hint ? " Note: ".concat(hint) : '';
  var message = "".concat(feature, " is deprecated").concat(versionMessage, ".").concat(useInsteadMessage).concat(linkMessage).concat(hintMessage); // Skip if already logged.

  if (message in logged) {
    return;
  }
  /**
   * Fires whenever a deprecated feature is encountered
   *
   * @param {string}  feature             Name of the deprecated feature.
   * @param {?Object} options             Personalisation options
   * @param {?string} options.version     Version in which the feature will be removed.
   * @param {?string} options.alternative Feature to use instead
   * @param {?string} options.plugin      Plugin name if it's a plugin feature
   * @param {?string} options.link        Link to documentation
   * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
   * @param {?string} message             Message sent to console.warn
   */


  doAction('deprecated', feature, options, message); // eslint-disable-next-line no-console

  console.warn(message);
  logged[message] = true;
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(52);

var iterableToArrayLimit = __webpack_require__(53);

var nonIterableRest = __webpack_require__(54);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(48);

var iterableToArray = __webpack_require__(49);

var nonIterableSpread = __webpack_require__(50);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(51);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies;
 */
var isShallowEqualObjects = __webpack_require__( 72 );
var isShallowEqualArrays = __webpack_require__( 73 );

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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var reakit_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _toolbar_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ToolbarItem(_ref, ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["children"]);

  var accessibleToolbarState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_toolbar_context__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // https://reakit.io/docs/composition/#props-hooks

  var itemProps = Object(reakit_Toolbar__WEBPACK_IMPORTED_MODULE_2__[/* useToolbarItem */ "a"])(accessibleToolbarState, _objectSpread({}, props, {
    ref: ref
  }));

  if (typeof children !== 'function') {
    typeof process !== "undefined" && process.env && "production" !== "production" ? Object(_wordpress_warning__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('`ToolbarItem` is a generic headless component that accepts only function children props') : void 0;
    return null;
  }

  if (!accessibleToolbarState) {
    typeof process !== "undefined" && process.env && "production" !== "production" ? Object(_wordpress_warning__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('`ToolbarItem` should be rendered within `<Toolbar __experimentalAccessibilityLabel="label">`') : void 0;
    return null;
  }

  return children(itemProps);
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(ToolbarItem));
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)))

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warning; });
function isDev() {
  return typeof process !== 'undefined' && process.env && "production" !== 'production';
}
/**
 * Shows a warning with `message` if environment is not `production`.
 *
 * @param {string} message Message to show in the warning.
 *
 * @example
 * ```js
 * import warning from '@wordpress/warning';
 *
 * function MyComponent( props ) {
 *   if ( ! props.title ) {
 *     warning( '`props.title` was not passed' );
 *   }
 *   ...
 * }
 * ```
 */


function warning(message) {
  if (!isDev()) {
    return;
  } // eslint-disable-next-line no-console


  console.warn(message); // Throwing an error and catching it immediately to improve debugging
  // A consumer can use 'pause on caught exceptions'
  // https://github.com/facebook/react/issues/4216

  try {
    throw Error(message);
  } catch (x) {// do nothing
  }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(41),
    getRawTag = __webpack_require__(64),
    objectToString = __webpack_require__(65);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(61);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(55);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),
/* 46 */,
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 51 */
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
/* 52 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 53 */
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
/* 54 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(56),
    isIterateeCall = __webpack_require__(57),
    toFinite = __webpack_require__(68);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(58),
    isArrayLike = __webpack_require__(59),
    isIndex = __webpack_require__(67),
    isObject = __webpack_require__(34);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(60),
    isLength = __webpack_require__(66);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(40),
    isObject = __webpack_require__(34);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(62);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(63)))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(41);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(69);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34),
    isSymbol = __webpack_require__(70);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(40),
    isObjectLike = __webpack_require__(71);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
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
var aa=__webpack_require__(1),n=__webpack_require__(75),r=__webpack_require__(76);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),
/* 75 */
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(77);
} else {}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 78 */
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

// NAMESPACE OBJECT: ./node_modules/@wordpress/dom/build-module/focusable.js
var focusable_namespaceObject = {};
__webpack_require__.r(focusable_namespaceObject);
__webpack_require__.d(focusable_namespaceObject, "find", function() { return find; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/dom/build-module/tabbable.js
var tabbable_namespaceObject = {};
__webpack_require__.r(tabbable_namespaceObject);
__webpack_require__.d(tabbable_namespaceObject, "isTabbableIndex", function() { return isTabbableIndex; });
__webpack_require__.d(tabbable_namespaceObject, "find", function() { return tabbable_find; });
__webpack_require__.d(tabbable_namespaceObject, "findPrevious", function() { return findPrevious; });
__webpack_require__.d(tabbable_namespaceObject, "findNext", function() { return findNext; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(35);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(6);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);

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
          return Object(external_React_["createElement"])(BlockEdit, this.props);
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
          return Object(external_React_["createElement"])(BlockEdit, this.props);
        }
      }]);

      return BetterBlockEdit;
    }(with_block_index_Component)
  );
}, "withBlockIndexAttribute");
with_block_index_addFilter('editor.BlockEdit', 'novablocks/with-blockIndex-attribute', withBlockIndexAttribute);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
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
    return Object(external_React_["createElement"])(Fragment, null, Object(external_React_["createElement"])(WrappedComponent, props), Object(external_React_["createElement"])(InspectorControls, null, Object(external_React_["createElement"])(PanelBody, {
      title: __('Text Settings', '__plugin_txtd'),
      className: "blocks-custom-font-size"
    }, Object(external_React_["createElement"])(SelectControl, {
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
      return Object(external_React_["createElement"])(OriginalComponent, props);
    }

    return Object(external_React_["createElement"])(BetterComponent, props);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

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
// CONCATENATED MODULE: ./src/components/emphasis-level-controls/index.js


var emphasis_level_controls_ = wp.i18n.__;
var emphasis_level_controls_Fragment = wp.element.Fragment;
var emphasis_level_controls_wp$components = wp.components,
    emphasis_level_controls_PanelBody = emphasis_level_controls_wp$components.PanelBody,
    RadioControl = emphasis_level_controls_wp$components.RadioControl,
    createSlotFill = emphasis_level_controls_wp$components.createSlotFill;
var EmphasisContentAreaSlotFill = createSlotFill('EmphasisContentArea');
var EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
var EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;
var EmphasisBlockAreaSlotFill = createSlotFill('EmphasisBlockArea');
var EmphasisBlockAreaSlot = EmphasisBlockAreaSlotFill.Slot;
var EmphasisBlockAreaFill = EmphasisBlockAreaSlotFill.Fill;

var emphasis_level_controls_EmphasisLevelControls = function EmphasisLevelControls(props) {
  var _props$attributes = props.attributes,
      contentStyle = _props$attributes.contentStyle,
      blockStyle = _props$attributes.blockStyle,
      setAttributes = props.setAttributes,
      _props$settings$media = props.settings.media,
      contentAreaOptions = _props$settings$media.contentAreaOptions,
      blockAreaOptions = _props$settings$media.blockAreaOptions;
  return Object(external_React_["createElement"])(emphasis_level_controls_Fragment, null, Object(external_React_["createElement"])(emphasis_level_controls_PanelBody, {
    title: emphasis_level_controls_('Content Area', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(RadioControl, {
    label: emphasis_level_controls_('Emphasis Level', '__plugin_txtd'),
    value: contentStyle,
    selected: contentStyle,
    options: contentAreaOptions,
    onChange: function onChange(nextContentStyle) {
      return setAttributes({
        contentStyle: nextContentStyle
      });
    }
  }), Object(external_React_["createElement"])(EmphasisContentAreaSlot, null)), Object(external_React_["createElement"])(emphasis_level_controls_PanelBody, {
    title: emphasis_level_controls_('Block Area', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(RadioControl, {
    label: emphasis_level_controls_('Emphasis Level', '__plugin_txtd'),
    value: blockStyle,
    selected: blockStyle,
    options: blockAreaOptions,
    onChange: function onChange(nextBlockStyle) {
      return setAttributes({
        blockStyle: nextBlockStyle
      });
    }
  }), Object(external_React_["createElement"])(EmphasisBlockAreaSlot, null)));
};


/* harmony default export */ var emphasis_level_controls = (with_settings(emphasis_level_controls_EmphasisLevelControls));
// CONCATENATED MODULE: ./src/filters/with-emphasis-level/index.js


var with_emphasis_level_InspectorControls = wp.blockEditor.InspectorControls;
var with_emphasis_level_createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var with_emphasis_level_addFilter = wp.hooks.addFilter;
var with_emphasis_level_Fragment = wp.element.Fragment;
var with_emphasis_level_enableFontSizeControlOnBlocks = ['novablocks/media', 'novablocks/cards-collection'];
var withEmphasisLevelControls = with_emphasis_level_createHigherOrderComponent(function (OriginalComponent) {
  return function (props) {
    if (!with_emphasis_level_enableFontSizeControlOnBlocks.includes(props.name)) {
      return Object(external_React_["createElement"])(OriginalComponent, props);
    }

    return Object(external_React_["createElement"])(with_emphasis_level_Fragment, null, Object(external_React_["createElement"])(with_emphasis_level_InspectorControls, null, Object(external_React_["createElement"])(emphasis_level_controls, props)), Object(external_React_["createElement"])(OriginalComponent, props));
  };
});
with_emphasis_level_addFilter('editor.BlockEdit', 'novablocks/with-ehpasis-level-controls', withEmphasisLevelControls);

function addEmphasisLevelAttribute(block) {
  if (!with_emphasis_level_enableFontSizeControlOnBlocks.includes(block.name)) {
    return block;
  }

  if (typeof block.attributes === 'undefined') {
    block.attributes = {};
  }

  block.attributes = Object.assign(block.attributes, {
    blockStyle: {
      type: 'string',
      default: 'basic'
    },
    contentStyle: {
      type: 'string',
      default: 'basic'
    }
  });
  return block;
}

with_emphasis_level_addFilter('blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addEmphasisLevelAttribute);
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
    return Object(external_React_["createElement"])("div", {
      className: className,
      dangerouslySetInnerHTML: {
        __html: settings.separator && settings.separator.markup
      }
    });
  };

  var replaceSeparatorEdit = wp.compose.createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      if ('core/separator' === props.name) {
        return Object(external_React_["createElement"])(Separator, {
          className: props.attributes.className
        });
      } else {
        return Object(external_React_["createElement"])(BlockEdit, props);
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
    icons_SVG = icons_wp$components.SVG,
    icons_Path = icons_wp$components.Path;
var nova = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18ZM12.0398 14C12.4069 10.626 15.2652 8 18.7368 8H20.4211C24.6068 8 28 11.3932 28 15.5789V16.381C28 20.3809 24.9177 23.6609 20.9987 23.9753C20.9996 23.9324 21 23.8893 21 23.8462V21.2727C21 17.2561 17.7439 14 13.7273 14H12.0398Z",
  fill: "#6565F2"
}), Object(external_React_["createElement"])("path", {
  d: "M8 21.2857C8 18.9188 9.91878 17 12.2857 17H13.4545C15.9649 17 18 19.0351 18 21.5455V23.1538C18 25.278 16.278 27 14.1538 27H13.7143C10.5584 27 8 24.4416 8 21.2857Z",
  fill: "#FFE42E"
}));
var hero = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, Object(external_React_["createElement"])("rect", {
  width: "24",
  height: "24",
  rx: "12",
  fill: "#6565F2"
})), Object(external_React_["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4 8.49123C4 6.01079 7.01619 4 10.7368 4H11.619C16.2477 4 20 6.50152 20 9.5873C20 12.3926 16.5888 14.6667 12.381 14.6667H11.5789C7.39321 14.6667 4 12.4045 4 9.61403V8.49123Z",
  fill: "#6565F2"
}), Object(external_React_["createElement"])("path", {
  d: "M7 18.7143C7 19.4244 7.57563 20 8.28571 20H15.5C16.3284 20 17 19.3284 17 18.5V18.5C17 17.6716 16.3284 17 15.5 17H8.71429C7.76751 17 7 17.7675 7 18.7143V18.7143Z",
  fill: "#FFE42E"
})));
var icons_media = Object(external_React_["createElement"])("svg", {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("mask", {
  id: "path-1-outside-1",
  maskUnits: "userSpaceOnUse",
  x: "-2",
  y: "-2",
  width: "40",
  height: "40",
  fill: "black"
}, Object(external_React_["createElement"])("rect", {
  fill: "white",
  x: "-2",
  y: "-2",
  width: "40",
  height: "40"
}), Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM23.4737 25C20.4507 25 18 22.5493 18 19.5263V18.8095C18 15.0487 21.0487 12 24.8095 12C28.2284 12 31 14.7716 31 18.1905V18.8421C31 22.243 28.243 25 24.8421 25H23.4737Z"
})), Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0ZM23.4737 25C20.4507 25 18 22.5493 18 19.5263V18.8095C18 15.0487 21.0487 12 24.8095 12C28.2284 12 31 14.7716 31 18.1905V18.8421C31 22.243 28.243 25 24.8421 25H23.4737Z",
  fill: "#6565F2"
}), Object(external_React_["createElement"])("path", {
  d: "M2 18C2 9.16344 9.16344 2 18 2V-2C6.95431 -2 -2 6.95431 -2 18H2ZM18 34C9.16344 34 2 26.8366 2 18H-2C-2 29.0457 6.95431 38 18 38V34ZM34 18C34 26.8366 26.8366 34 18 34V38C29.0457 38 38 29.0457 38 18H34ZM18 2C26.8366 2 34 9.16344 34 18H38C38 6.95431 29.0457 -2 18 -2V2ZM16 19.5263C16 23.6539 19.3461 27 23.4737 27V23C21.5552 23 20 21.4448 20 19.5263H16ZM16 18.8095V19.5263H20V18.8095H16ZM24.8095 10C19.9442 10 16 13.9442 16 18.8095H20C20 16.1533 22.1533 14 24.8095 14V10ZM33 18.1905C33 13.667 29.333 10 24.8095 10V14C27.1239 14 29 15.8761 29 18.1905H33ZM33 18.8421V18.1905H29V18.8421H33ZM24.8421 27C29.3476 27 33 23.3476 33 18.8421H29C29 21.1384 27.1384 23 24.8421 23V27ZM23.4737 27H24.8421V23H23.4737V27Z",
  fill: "white",
  mask: "url(#path-1-outside-1)"
}), Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 30C8.68629 30 6 27.3137 6 24V14C6 9.58172 9.58172 6 14 6H16C18.728 6 20.9458 8.18475 20.999 10.9C18.0388 12.3471 16 15.3878 16 18.9048V19.8421C16 22.9484 17.9786 25.5925 20.7443 26.5829C20.0821 28.5685 18.2082 30 16 30H12Z",
  fill: "#FFE42E"
}));
var slideshow = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, Object(external_React_["createElement"])("rect", {
  width: "24",
  height: "24",
  rx: "12",
  fill: "#6565F2"
})), Object(external_React_["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(external_React_["createElement"])("path", {
  d: "M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z",
  fill: "#6565F2"
}), Object(external_React_["createElement"])("path", {
  d: "M17.3982 8.99283C17.8831 9.39282 17.8831 10.1358 17.3982 10.5357L14.9673 12.5407C14.315 13.0787 13.331 12.6147 13.331 11.7692V7.75933C13.331 6.91386 14.315 6.44992 14.9673 6.98788L17.3982 8.99283Z",
  fill: "white"
}), Object(external_React_["createElement"])("path", {
  d: "M6.60184 8.99283C6.11689 9.39282 6.11689 10.1358 6.60184 10.5357L9.03272 12.5407C9.68496 13.0787 10.669 12.6147 10.669 11.7692V7.75933C10.669 6.91386 9.68496 6.44992 9.03272 6.98788L6.60184 8.99283Z",
  fill: "white"
}), Object(external_React_["createElement"])("path", {
  d: "M7 18.2751C7 18.8033 7.42818 19.2314 7.95637 19.2314H8.2172C8.7774 19.2314 9.23154 18.7773 9.23154 18.2171V17.8582C9.23154 17.3842 8.84727 16.9999 8.37325 16.9999H8.27517C7.57091 16.9999 7 17.5708 7 18.2751V18.2751Z",
  fill: "#FFE42E"
}), Object(external_React_["createElement"])("path", {
  d: "M10.7192 18.2751C10.7192 18.8033 11.1474 19.2314 11.6756 19.2314H11.9364C12.4966 19.2314 12.9508 18.7773 12.9508 18.2171V17.8582C12.9508 17.3842 12.5665 16.9999 12.0925 16.9999H11.9944C11.2901 16.9999 10.7192 17.5708 10.7192 18.2751V18.2751Z",
  fill: "#FFE42E"
}), Object(external_React_["createElement"])("path", {
  d: "M14.4385 18.2751C14.4385 18.8033 14.8667 19.2314 15.3948 19.2314H15.6557C16.2159 19.2314 16.67 18.7773 16.67 18.2171V17.8582C16.67 17.3842 16.2857 16.9999 15.8117 16.9999H15.7136C15.0094 16.9999 14.4385 17.5708 14.4385 18.2751V18.2751Z",
  fill: "#FFE42E"
})));
var foodmenu = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "24",
  height: "24"
}, Object(external_React_["createElement"])("path", {
  d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z",
  fill: "#6565F2"
})), Object(external_React_["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(external_React_["createElement"])("path", {
  d: "M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
  fill: "#6565F2"
}), Object(external_React_["createElement"])("path", {
  d: "M18.0001 9.73684C19.1047 9.73684 20.0394 8.81569 19.7116 7.76087C17.739 1.41304 6.26117 1.41304 4.28861 7.76087C3.96084 8.81569 4.89552 9.73684 6.00009 9.73684H18.0001Z",
  fill: "white"
}), Object(external_React_["createElement"])("path", {
  d: "M5 13.1429C5 13.6162 5.38376 14 5.85714 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H6.14286C5.51167 12 5 12.5117 5 13.1429ZM5 17.1429C5 17.6162 5.38376 18 5.85714 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H6.14286C5.51167 16 5 16.5117 5 17.1429ZM18 13.1429C18 13.6162 18.3838 14 18.8571 14H19.0909C19.593 14 20 13.593 20 13.0909V12.7692C20 12.3444 19.6556 12 19.2308 12H19.1429C18.5117 12 18 12.5117 18 13.1429ZM18 17.1429C18 17.6162 18.3838 18 18.8571 18H19.0909C19.593 18 20 17.593 20 17.0909V16.7692C20 16.3444 19.6556 16 19.2308 16H19.1429C18.5117 16 18 16.5117 18 17.1429Z",
  fill: "#FFE42E"
})));
var opentable = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM8.85456 12.3999C8.85456 9.09043 11.5325 6.3999 14.8546 6.3999C18.164 6.3999 20.8419 9.09043 20.8546 12.3999C20.8546 15.7094 18.164 18.3999 14.8546 18.3999C11.5451 18.3999 8.85456 15.7094 8.85456 12.3999ZM13.3514 12.3999C13.3514 13.2336 14.0209 13.9031 14.8546 13.9031C15.6756 13.9031 16.3451 13.2336 16.3577 12.3999C16.3577 11.5662 15.6882 10.8967 14.8546 10.8967C14.0209 10.8967 13.3514 11.5662 13.3514 12.3999ZM5.82298 10.8967C4.9893 10.8967 4.31982 11.5662 4.31982 12.3999C4.31982 13.2336 4.9893 13.9031 5.82298 13.9031C6.65667 13.9031 7.32614 13.2336 7.32614 12.3999C7.32614 11.5662 6.65667 10.8967 5.82298 10.8967Z",
  fill: "#6565F2"
}));
var alignBottom = Object(external_React_["createElement"])(icons_SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(external_React_["createElement"])(icons_Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(external_React_["createElement"])(icons_Path, {
  d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
}));
var alignCenter = Object(external_React_["createElement"])(icons_SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(external_React_["createElement"])(icons_Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(external_React_["createElement"])(icons_Path, {
  d: "M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"
}));
var alignTop = Object(external_React_["createElement"])(icons_SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24"
}, Object(external_React_["createElement"])(icons_Path, {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(external_React_["createElement"])(icons_Path, {
  d: "M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"
}));
var alignment = Object(external_React_["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  d: "M15.54 5.54L13.77 7.3L12 5.54L10.23 7.3L8.46 5.54L12 2L15.54 5.54ZM18.46 15.54L16.7 13.77L18.46 12L16.7 10.23L18.46 8.46L22 12L18.46 15.54ZM8.46 18.46L10.23 16.7L12 18.46L13.77 16.7L15.54 18.46L12 22L8.46 18.46ZM5.54 8.46L7.3 10.23L5.54 12L7.3 13.77L5.54 15.54L2 12L5.54 8.46Z",
  fill: "currentColor"
}), Object(external_React_["createElement"])("path", {
  d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
  fill: "currentColor"
}));
var invert = Object(external_React_["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  d: "M20 15.3099L23.31 11.9999L20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099ZM12 17.9999V5.99994C15.31 5.99994 18 8.68994 18 11.9999C18 15.3099 15.31 17.9999 12 17.9999Z",
  fill: "currentColor"
}));
var swap = Object(external_React_["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  d: "M18 2L20 6H18L16 2H13L15 6H13L11 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V2H18ZM20 14H10V4.4L11.8 8H20V14Z",
  fill: "currentColor"
}), Object(external_React_["createElement"])("path", {
  d: "M14 20H4V10H7V8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20V17H14V20Z",
  fill: "currentColor"
}), Object(external_React_["createElement"])("path", {
  d: "M5 19H13L11.41 17H9.24L8.4 18.1L7 16.3L5 19Z",
  fill: "currentColor"
}));
var map = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, Object(external_React_["createElement"])("path", {
  fill: "#6565F2",
  fillRule: "evenodd",
  d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.45 10.55a6.55 6.55 0 1113.1 0c0 2.236-2.504 5.893-4.416 8.359a2.677 2.677 0 01-4.268 0c-1.912-2.466-4.415-6.123-4.415-8.36zm3.4-.186a3.15 3.15 0 106.301 0 3.15 3.15 0 00-6.301 0z",
  clipRule: "evenodd"
}));
var announcement = Object(external_React_["createElement"])("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 18 18",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none"
}, Object(external_React_["createElement"])("path", {
  fill: "#6565F2",
  fillRule: "evenodd",
  d: "M2 0a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2H2zm14 2H2v4h14V2z",
  clipRule: "evenodd"
}));
var headline = Object(external_React_["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, Object(external_React_["createElement"])("path", {
  fill: "#6565F2",
  fillRule: "evenodd",
  d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.147 16.208a1 1 0 01-.978.792h-.762a1 1 0 01-.979-1.207l.428-2.023a1 1 0 00-.978-1.207h-2.333a1 1 0 00-.978.792l-.608 2.854A1 1 0 017.98 17h-.746a1 1 0 01-.978-1.208l1.915-9A1 1 0 019.15 6h.754a1 1 0 01.978 1.207l-.403 1.9a1 1 0 00.979 1.208h2.332a1 1 0 00.978-.791l.584-2.733a1 1 0 01.978-.79h.754a1 1 0 01.978 1.207l-1.915 9z",
  clipRule: "evenodd"
}));
var header = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 12C0 5.37258 5.37258 0 12 0c6.6274 0 12 5.37258 12 12 0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12zm10 7c-.55228 0-1-.4477-1-1s.44772-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4zm0 2c-1.65685 0-3-1.3431-3-3s1.34315-3 3-3h4c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3h-4zM8 4C5.79086 4 4 5.79086 4 8v3c0 1.1046.89543 2 2 2h12c1.1046 0 2-.8954 2-2V8c0-2.20914-1.7909-4-4-4H8z",
  fill: "#6565F2"
}));
var logo = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zm0 7c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5 2.7614 0 5-2.2386 5-5 0-2.76142-2.2386-5-5-5zm-7 5c0 3.866 3.13401 7 7 7 3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7z",
  fill: "#6565F2"
}));
var navigation = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zM5.85714 8C5.38376 8 5 7.61624 5 7.14286 5 6.51167 5.51167 6 6.14286 6H18c.5523 0 1 .44772 1 1s-.4477 1-1 1H5.85714zM5 12.1429c0 .4733.38376.8571.85714.8571H18c.5523 0 1-.4477 1-1s-.4477-1-1-1H6.14286C5.51167 11 5 11.5117 5 12.1429zM5.85714 18C5.38376 18 5 17.6162 5 17.1429 5 16.5117 5.51167 16 6.14286 16H18c.5523 0 1 .4477 1 1s-.4477 1-1 1H5.85714z",
  fill: "#6565F2"
}));
var openhours = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("g", {
  clipPath: "url(#clip0)"
}, Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12zM6.63604 7.63604l5.16786 5.16786 4.6597-2.6903c.4782-.2761 1.0898-.1122 1.366.3661.2761.4783.1122 1.0898-.366 1.366l-5.2973 3.0584c-.3897.2249-.8678.1578-1.181-.1334-.0738-.0457-.1436-.1006-.2076-.1646L5.22183 9.05025c-.39053-.39052-.39053-1.02369 0-1.41421.39052-.39053 1.02368-.39053 1.41421 0z",
  fill: "#6565F2"
})), Object(external_React_["createElement"])("defs", null, Object(external_React_["createElement"])("clipPath", {
  id: "clip0"
}, Object(external_React_["createElement"])("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
var placeholder = Object(external_React_["createElement"])("svg", {
  width: "100",
  height: "67",
  viewBox: "0 0 100 67",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("path", {
  d: "M96.722 0H3.279C1.229 0 0 1.229 0 3.279V63.115C0 65.164 1.229 66.393 3.279 66.393H96.721C98.771 66.393 99.999 65.164 99.999 63.115V3.279C100 1.229 98.771 0 96.722 0ZM4.918 6.558C4.918 5.533 5.532 4.918 6.557 4.918H93.443C94.468 4.918 95.082 5.533 95.082 6.558V59.836C95.082 60.08 95.045 60.3 94.978 60.495C88.865 54.214 68.521 33.606 64.755 33.606C60.757 33.606 39.42 56.811 35.172 61.475H31.447C33.415 59.153 36.274 55.808 39.525 52.107C34.42 47.976 29.403 44.263 27.87 44.263C25.059 44.263 11.092 56.738 5.979 61.391C5.309 61.196 4.919 60.648 4.919 59.836V6.558H4.918Z",
  fill: "#323067"
}), Object(external_React_["createElement"])("path", {
  d: "M38.119 16.629C42.731 16.629 46.471 20.366 46.471 24.978C46.471 29.59 42.731 33.328 38.119 33.328C33.508 33.328 29.768 29.59 29.768 24.978C29.769 20.367 33.508 16.629 38.119 16.629Z",
  fill: "#323067"
}));
var card = Object(external_React_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_React_["createElement"])("rect", {
  y: "24",
  width: "24",
  height: "24",
  rx: "12",
  transform: "rotate(-90 0 24)",
  fill: "white"
}), Object(external_React_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12ZM20 14.5455C20 17.5579 17.5579 20 14.5455 20H10.1538C6.75517 20 4 17.2448 4 13.8462C4 11.9122 5.42745 10.3116 7.28625 10.0405C8.25862 11.9925 10.2743 13.3335 12.6032 13.3335H13.2281C15.1634 13.3335 16.8296 12.1814 17.5783 10.5256C19.0187 11.2882 20 12.8022 20 14.5455ZM13.0175 12C15.0329 12 16.6667 10.3662 16.6667 8.35088V7.4386C16.6667 5.17132 14.8287 3.33333 12.5614 3.33333H12.127C9.84771 3.33333 8 5.18105 8 7.46032C8 9.96751 10.0325 12 12.5397 12H13.0175Z",
  fill: "#6565F2"
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(29);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/blocks/announcement-bar/deprecated.js



function deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { deprecated_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _lodash = lodash,
    omit = _lodash.omit;
var createBlock = wp.blocks.createBlock;
var blockAttributes = {
  align: {
    type: 'string',
    default: 'full'
  },
  url: {
    type: 'string',
    default: ''
  },
  opensInNewTab: {
    type: 'boolean',
    default: false
  }
};
var deprecated = [{
  isEligible: function isEligible(attributes, innerBlocks) {
    return typeof attributes.content !== 'undefined' && !innerBlocks.length;
  },
  attributes: deprecated_objectSpread({
    content: {
      type: 'string',
      default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.'
    }
  }, blockAttributes),
  migrate: function migrate(attributes, innerBlocks) {
    return [omit(attributes, 'content'), [createBlock('core/paragraph', {
      content: attributes.content
    })].concat(toConsumableArray_default()(innerBlocks))];
  },
  save: function save() {}
}];
/* harmony default export */ var announcement_bar_deprecated = (deprecated);
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
    URLInput = _wp$blockEditor.URLInput,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['novablocks/openhours', 'core/paragraph'];
var ANNOUNCEMENT_BAR_TEMPLATE = [['novablocks/openhours', {
  openHoursStyle: 'status'
}]];

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
    attributes: {
      align: {
        type: 'string',
        default: 'full'
      },
      url: {
        type: 'string',
        default: ''
      },
      opensInNewTab: {
        type: 'boolean',
        default: false
      },
      content: {
        type: 'string',
        default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.'
      }
    },
    save: function save() {
      return Object(external_React_["createElement"])(InnerBlocks.Content, null);
    },
    edit: function edit(props) {
      var className = props.className,
          _props$attributes = props.attributes,
          url = _props$attributes.url,
          opensInNewTab = _props$attributes.opensInNewTab,
          content = _props$attributes.content,
          setAttributes = props.setAttributes,
          isSelected = props.isSelected;
      var classNames = classnames_default()(className, 'novablocks-announcement-bar');
      return Object(external_React_["createElement"])(announcement_bar_Fragment, null, Object(external_React_["createElement"])("div", {
        className: classNames
      }, Object(external_React_["createElement"])(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: ANNOUNCEMENT_BAR_TEMPLATE
      })), isSelected && Object(external_React_["createElement"])("div", {
        className: "novablocks-announcement-bar__url-field-wrapper"
      }, Object(external_React_["createElement"])(BaseControl, {
        label: announcement_bar_('Add a link to make the whole Announcement Bar clickable.', '__plugin_txtd'),
        className: "wp-block-button__inline-link"
      }, Object(external_React_["createElement"])(URLInput, {
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
      })), Object(external_React_["createElement"])(ToggleControl, {
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
    },
    deprecated: announcement_bar_deprecated
  });
}

/* harmony default export */ var announcement_bar = (init);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(19);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(22);
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
      var icon = Object(external_React_["createElement"])("div", {
        className: "editor-block-icon block-editor-block-icon"
      }, map);
      return Object(external_React_["createElement"])(Placeholder, {
        icon: icon,
        label: placeholder_('Location Map of The World', '__plugin_txtd')
      }, apiKeyInstructions && Object(external_React_["createElement"])("div", {
        className: "components-placeholder__instructions"
      }, apiKeyInstructions), Object(external_React_["createElement"])(TextControl, {
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
      }), Object(external_React_["createElement"])(Button, {
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

/* harmony default export */ var google_map_placeholder = (placeholder_MapPlaceholder);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(30);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(26);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/blocks/google-map/pin.js
/* harmony default export */ var pin = ("<svg width=\"62\" height=\"75\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 62 75\">\n\t<defs>\n\t\t<path id=\"b\" d=\"M31 69s27-18 27-40C58 14.088 46 2 31 2S4 14.088 4 29c0 22 27 40 27 40zm7.725-31.206c-4.26 4.275-11.264 4.275-15.53 0-4.26-4.277-4.26-11.305 0-15.587 4.26-4.276 11.265-4.276 15.53 0 4.367 4.282 4.367 11.304 0 15.587z\"></path>\n\t\t<filter id=\"a\" width=\"200%\" height=\"200%\" x=\"-50%\" y=\"-50%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n\t\t\t<feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"2\"></feGaussianBlur>\n\t\t\t<feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\"></feColorMatrix>\n\t\t</filter>\n\t</defs>\n\t<g fill=\"none\" fillRule=\"evenodd\">\n\t\t<use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\" style=\"display:none\"></use>\n\t\t<use fill=\"%ACCENT_COLOR%\" xlink:href=\"#b\"></use>\n\t</g>\n</svg>");
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
  return Object(external_React_["createElement"])(padding_Fragment, null, Object(external_React_["createElement"])("label", null, padding_('Content Padding', '__plugin_txtd')), Object(external_React_["createElement"])(ButtonGroup, null, contentPaddingOptions.map(function (option) {
    return Object(external_React_["createElement"])(padding_Button, {
      key: option.value,
      isDefault: option.value !== contentPadding,
      isPrimary: option.value === contentPadding,
      onClick: function onClick() {
        setAttributes({
          contentPadding: option.value
        });
      }
    }, option.label);
  })), 'custom' === contentPadding && Object(external_React_["createElement"])(RangeControl, {
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

/* harmony default export */ var layout_panel_padding = (with_settings(padding_PaddingControls));
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
  return Object(external_React_["createElement"])(width_Fragment, null, Object(external_React_["createElement"])("label", null, width_('Content Width', '__plugin_txtd')), Object(external_React_["createElement"])(width_ButtonGroup, {
    label: "Content Width"
  }, contentWidthOptions.map(function (option) {
    return Object(external_React_["createElement"])(width_Button, {
      key: option.value,
      isDefault: option.value !== contentWidth,
      isPrimary: option.value === contentWidth,
      onClick: function onClick() {
        setAttributes({
          contentWidth: option.value
        });
      }
    }, option.label);
  })), 'custom' === contentWidth && Object(external_React_["createElement"])(width_RangeControl, {
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
  return Object(external_React_["createElement"])(layout_panel_PanelBody, {
    className: "pixelgrade-hero-button-group-wrapper",
    title: layout_panel_('Layout', '__plugin_txtd'),
    initialOpen: false
  }, Object(external_React_["createElement"])(layout_panel_padding, props), Object(external_React_["createElement"])(width, props), props.children);
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
    parallax_panel_RadioControl = parallax_panel_wp$components.RadioControl,
    parallax_panel_ToggleControl = parallax_panel_wp$components.ToggleControl;

var parallax_panel_ParallaxPanel = function ParallaxPanel(props) {
  var _props$attributes = props.attributes,
      enableParallax = _props$attributes.enableParallax,
      parallaxAmount = _props$attributes.parallaxAmount,
      parallaxCustomAmount = _props$attributes.parallaxCustomAmount,
      focalPoint = _props$attributes.focalPoint,
      setAttributes = props.setAttributes,
      parallaxOptions = props.settings.parallaxOptions;
  return Object(external_React_["createElement"])(parallax_panel_PanelBody, {
    title: parallax_panel_('Parallax', '__plugin_txtd'),
    initialOpen: false
  }, Object(external_React_["createElement"])(parallax_panel_ToggleControl, {
    label: parallax_panel_('Enable Parallax Scrolling', '__plugin_txtd'),
    checked: enableParallax,
    onChange: function onChange() {
      return setAttributes({
        enableParallax: !enableParallax
      });
    }
  }), !!enableParallax && Object(external_React_["createElement"])(parallax_panel_RadioControl, {
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
  }), !!enableParallax && 'custom' === parallaxAmount && Object(external_React_["createElement"])(parallax_panel_RangeControl, {
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
  return Object(external_React_["createElement"])(position_indicators_panel_PanelBody, {
    title: position_indicators_panel_('Position Indicators', '__plugin_txtd'),
    initialOpen: false
  }, Object(external_React_["createElement"])(position_indicators_panel_ToggleControl, {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(43);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(28);
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
    var $parallax = $container.find('.novablocks-parallax');
    $container.data('parallax', $parallax);

    function parallaxUpdateState() {
      var newConfig = Object.assign({}, config, {
        scrollContainerHeight: window.innerHeight
      });
      var state = getState(container, newConfig);
      $container.data('state', state);
      $container.data('config', newConfig);
      frameRendered = false;
    }

    external_jQuery_default()(window).on('scroll', parallaxUpdateState);
    external_jQuery_default()(window).on('resize', parallaxUpdateState);
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
        $container.data('parallax').css(styles);
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
var utils_range = function range(min, max) {
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
    return show && Object(external_React_["createElement"])(Component, props);
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

  return Object(external_React_["createElement"])(scrolling_effect_controls_Fragment, null, Object(external_React_["createElement"])(scrolling_effect_controls_ScrollingEffectPanel, props, Object(external_React_["createElement"])(scrolling_effect_controls_DopplerPresetsPanel, props), Object(external_React_["createElement"])(scrolling_effect_controls_StartFramePanel, props), Object(external_React_["createElement"])(scrolling_effect_controls_EndFramePanel, props)));
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

  return Object(external_React_["createElement"])(scrolling_effect_controls_PanelBody, {
    title: "Scrolling Effect:",
    className: 'novablocks-scrolling-effect-panel'
  }, Object(external_React_["createElement"])(scrolling_effect_controls_RadioControl, {
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

  return Object(external_React_["createElement"])(scrolling_effect_controls_PanelBody, {
    title: "Doppler Scrolling Settings"
  }, Object(external_React_["createElement"])(scrolling_effect_controls_RadioControl, {
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
  }), Object(external_React_["createElement"])("div", null, Object(external_React_["createElement"])(scrolling_effect_controls_Button, {
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
  return Object(external_React_["createElement"])(scrolling_effect_controls_PanelBody, {
    title: panelTitle,
    className: className
  }, Object(external_React_["createElement"])(FocalPointPicker, {
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
  }), Object(external_React_["createElement"])(scrolling_effect_controls_RangeControl, {
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
  }), scrollingEffect === 'doppler' && Object(external_React_["createElement"])(scrolling_effect_controls_ToggleControl, {
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
  return Object(external_React_["createElement"])(scrolling_effect_controls_PanelBody, {
    title: scrolling_effect_controls_('End Frame', '__plugin_txtd'),
    className: className
  }, Object(external_React_["createElement"])(FocalPointPicker, {
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
  }), Object(external_React_["createElement"])(scrolling_effect_controls_RangeControl, {
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
  }), Object(external_React_["createElement"])(scrolling_effect_controls_ToggleControl, {
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
// CONCATENATED MODULE: ./src/components/toggle-group/index.js

var toggle_group_Fragment = wp.element.Fragment;
var toggle_group_wp$components = wp.components,
    toggle_group_PanelBody = toggle_group_wp$components.PanelBody,
    toggle_group_ToggleControl = toggle_group_wp$components.ToggleControl;

var toggle_group_ToggleGroup = function ToggleGroup(props) {
  var toggles = props.toggles,
      _onChange = props.onChange,
      label = props.label;
  var enabledToggles = toggles.filter(function (toggle) {
    return !!toggle.value;
  });
  var disabledToggles = toggles.filter(function (toggle) {
    return !toggle.value;
  });
  return Object(external_React_["createElement"])(toggle_group_PanelBody, {
    initialOpen: true,
    title: label
  }, Object(external_React_["createElement"])("div", {
    className: 'components-toggle-group'
  }, !!enabledToggles.length && Object(external_React_["createElement"])("div", {
    className: 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--enabled'
  }, enabledToggles.map(function (toggle, idx) {
    return Object(external_React_["createElement"])("div", {
      key: idx,
      className: "components-toggle-group__toggle-list-item"
    }, Object(external_React_["createElement"])(toggle_group_ToggleControl, {
      label: toggle.label,
      checked: !!toggle.value,
      onChange: function onChange() {
        _onChange(toggle.attribute);
      }
    }));
  })), !!disabledToggles.length && Object(external_React_["createElement"])(toggle_group_Fragment, null, Object(external_React_["createElement"])("label", {
    className: 'components-toggle-group__toggle-list-label'
  }, "Elements you aren't using"), Object(external_React_["createElement"])("div", {
    className: 'components-toggle-group__toggle-list  components-toggle-group__toggle-list--disabled'
  }, disabledToggles.map(function (toggle, idx) {
    return Object(external_React_["createElement"])("div", {
      key: idx,
      className: "components-toggle-group__toggle-list-item"
    }, Object(external_React_["createElement"])(toggle_group_ToggleControl, {
      label: toggle.label,
      checked: !!toggle.value,
      onChange: function onChange() {
        _onChange(toggle.attribute);
      }
    }));
  })))));
};

/* harmony default export */ var toggle_group = (toggle_group_ToggleGroup);
// EXTERNAL MODULE: ./node_modules/lodash/range.js
var lodash_range = __webpack_require__(44);
var range_default = /*#__PURE__*/__webpack_require__.n(lodash_range);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var esm_objectWithoutProperties = __webpack_require__(12);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@wordpress/deprecated/build-module/index.js + 11 modules
var build_module = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var esm_classCallCheck = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var esm_createClass = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var esm_possibleConstructorReturn = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var esm_getPrototypeOf = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var esm_inherits = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/react.js



function react_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function react_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { react_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { react_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Object containing a React element.
 *
 * @typedef {import('react').ReactElement} WPElement
 */

/**
 * Object containing a React component.
 *
 * @typedef {import('react').Component} WPComponent
 */

/**
 * Object containing a React synthetic event.
 *
 * @typedef {import('react').SyntheticEvent} WPSyntheticEvent
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
 *                                      set to apply to DOM node or values to
 *                                      pass through to element creator
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
 * Checks if an object is a valid WPElement.
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

  return childrenArguments.reduce(function (accumulator, children, i) {
    external_React_["Children"].forEach(children, function (child, j) {
      if (child && 'string' !== typeof child) {
        child = Object(external_React_["cloneElement"])(child, {
          key: [i, j].join()
        });
      }

      accumulator.push(child);
    });
    return accumulator;
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
  return children && external_React_["Children"].map(children, function (elt, index) {
    if (Object(external_lodash_["isString"])(elt)) {
      return Object(external_React_["createElement"])(nodeName, {
        key: index
      }, elt);
    }

    var _elt$props = elt.props,
        childrenProp = _elt$props.children,
        props = Object(esm_objectWithoutProperties["a" /* default */])(_elt$props, ["children"]);

    return Object(external_React_["createElement"])(nodeName, react_objectSpread({
      key: index
    }, props), childrenProp);
  });
}
//# sourceMappingURL=react.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var esm_slicedToArray = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/@wordpress/dom/build-module/dom.js
/**
 * External dependencies
 */

/**
 * Browser dependencies
 */

var _window = window,
    DOMParser = _window.DOMParser,
    getComputedStyle = _window.getComputedStyle;
var _window$Node = window.Node,
    TEXT_NODE = _window$Node.TEXT_NODE,
    ELEMENT_NODE = _window$Node.ELEMENT_NODE,
    DOCUMENT_POSITION_PRECEDING = _window$Node.DOCUMENT_POSITION_PRECEDING,
    DOCUMENT_POSITION_FOLLOWING = _window$Node.DOCUMENT_POSITION_FOLLOWING;
/**
 * Returns true if the given selection object is in the forward direction, or
 * false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
 *
 * @param {Selection} selection Selection object to check.
 *
 * @return {boolean} Whether the selection is forward.
 */

function isSelectionForward(selection) {
  var anchorNode = selection.anchorNode,
      focusNode = selection.focusNode,
      anchorOffset = selection.anchorOffset,
      focusOffset = selection.focusOffset;
  var position = anchorNode.compareDocumentPosition(focusNode); // Disable reason: `Node#compareDocumentPosition` returns a bitmask value,
  // so bitwise operators are intended.

  /* eslint-disable no-bitwise */
  // Compare whether anchor node precedes focus node. If focus node (where
  // end of selection occurs) is after the anchor node, it is forward.

  if (position & DOCUMENT_POSITION_PRECEDING) {
    return false;
  }

  if (position & DOCUMENT_POSITION_FOLLOWING) {
    return true;
  }
  /* eslint-enable no-bitwise */
  // `compareDocumentPosition` returns 0 when passed the same node, in which
  // case compare offsets.


  if (position === 0) {
    return anchorOffset <= focusOffset;
  } // This should never be reached, but return true as default case.


  return true;
}
/**
 * Check whether the selection is at the edge of the container. Checks for
 * horizontal position by default. Set `onlyVertical` to true to check only
 * vertically.
 *
 * @param {Element} container    Focusable element.
 * @param {boolean} isReverse    Set to true to check left, false to check right.
 * @param {boolean} onlyVertical Set to true to check only vertical position.
 *
 * @return {boolean} True if at the edge, false if not.
 */


function isEdge(container, isReverse, onlyVertical) {
  if (Object(external_lodash_["includes"])(['INPUT', 'TEXTAREA'], container.tagName)) {
    if (container.selectionStart !== container.selectionEnd) {
      return false;
    }

    if (isReverse) {
      return container.selectionStart === 0;
    }

    return container.value.length === container.selectionStart;
  }

  if (!container.isContentEditable) {
    return true;
  }

  var selection = window.getSelection();

  if (!selection.rangeCount) {
    return false;
  }

  var originalRange = selection.getRangeAt(0);
  var range = originalRange.cloneRange();
  var isForward = isSelectionForward(selection);
  var isCollapsed = selection.isCollapsed; // Collapse in direction of selection.

  if (!isCollapsed) {
    range.collapse(!isForward);
  }

  var rangeRect = getRectangleFromRange(range);

  if (!rangeRect) {
    return false;
  }

  var computedStyle = window.getComputedStyle(container);
  var lineHeight = parseInt(computedStyle.lineHeight, 10) || 0; // Only consider the multiline selection at the edge if the direction is
  // towards the edge.

  if (!isCollapsed && rangeRect.height > lineHeight && isForward === isReverse) {
    return false;
  }

  var padding = parseInt(computedStyle["padding".concat(isReverse ? 'Top' : 'Bottom')], 10) || 0; // Calculate a buffer that is half the line height. In some browsers, the
  // selection rectangle may not fill the entire height of the line, so we add
  // 3/4 the line height to the selection rectangle to ensure that it is well
  // over its line boundary.

  var buffer = 3 * parseInt(lineHeight, 10) / 4;
  var containerRect = container.getBoundingClientRect();
  var originalRangeRect = getRectangleFromRange(originalRange);
  var verticalEdge = isReverse ? containerRect.top + padding > originalRangeRect.top - buffer : containerRect.bottom - padding < originalRangeRect.bottom + buffer;

  if (!verticalEdge) {
    return false;
  }

  if (onlyVertical) {
    return true;
  } // In the case of RTL scripts, the horizontal edge is at the opposite side.


  var direction = computedStyle.direction;
  var isReverseDir = direction === 'rtl' ? !isReverse : isReverse; // To calculate the horizontal position, we insert a test range and see if
  // this test range has the same horizontal position. This method proves to
  // be better than a DOM-based calculation, because it ignores empty text
  // nodes and a trailing line break element. In other words, we need to check
  // visual positioning, not DOM positioning.

  var x = isReverseDir ? containerRect.left + 1 : containerRect.right - 1;
  var y = isReverse ? containerRect.top + buffer : containerRect.bottom - buffer;
  var testRange = hiddenCaretRangeFromPoint(document, x, y, container);

  if (!testRange) {
    return false;
  }

  var side = isReverseDir ? 'left' : 'right';
  var testRect = getRectangleFromRange(testRange); // Allow the position to be 1px off.

  return Math.abs(testRect[side] - rangeRect[side]) <= 1;
}
/**
 * Check whether the selection is horizontally at the edge of the container.
 *
 * @param {Element} container Focusable element.
 * @param {boolean} isReverse Set to true to check left, false for right.
 *
 * @return {boolean} True if at the horizontal edge, false if not.
 */


function isHorizontalEdge(container, isReverse) {
  return isEdge(container, isReverse);
}
/**
 * Check whether the selection is vertically at the edge of the container.
 *
 * @param {Element} container Focusable element.
 * @param {boolean} isReverse Set to true to check top, false for bottom.
 *
 * @return {boolean} True if at the vertical edge, false if not.
 */

function isVerticalEdge(container, isReverse) {
  return isEdge(container, isReverse, true);
}
/**
 * Get the rectangle of a given Range.
 *
 * @param {Range} range The range.
 *
 * @return {DOMRect} The rectangle.
 */

function getRectangleFromRange(range) {
  // For uncollapsed ranges, get the rectangle that bounds the contents of the
  // range; this a rectangle enclosing the union of the bounding rectangles
  // for all the elements in the range.
  if (!range.collapsed) {
    return range.getBoundingClientRect();
  }

  var _range = range,
      startContainer = _range.startContainer; // Correct invalid "BR" ranges. The cannot contain any children.

  if (startContainer.nodeName === 'BR') {
    var parentNode = startContainer.parentNode;
    var index = Array.from(parentNode.childNodes).indexOf(startContainer);
    range = document.createRange();
    range.setStart(parentNode, index);
    range.setEnd(parentNode, index);
  }

  var rect = range.getClientRects()[0]; // If the collapsed range starts (and therefore ends) at an element node,
  // `getClientRects` can be empty in some browsers. This can be resolved
  // by adding a temporary text node with zero-width space to the range.
  //
  // See: https://stackoverflow.com/a/6847328/995445

  if (!rect) {
    var padNode = document.createTextNode("\u200B"); // Do not modify the live range.

    range = range.cloneRange();
    range.insertNode(padNode);
    rect = range.getClientRects()[0];
    padNode.parentNode.removeChild(padNode);
  }

  return rect;
}
/**
 * Get the rectangle for the selection in a container.
 *
 * @return {?DOMRect} The rectangle.
 */

function computeCaretRect() {
  var selection = window.getSelection();
  var range = selection.rangeCount ? selection.getRangeAt(0) : null;

  if (!range) {
    return;
  }

  return getRectangleFromRange(range);
}
/**
 * Places the caret at start or end of a given element.
 *
 * @param {Element} container Focusable element.
 * @param {boolean} isReverse True for end, false for start.
 */

function placeCaretAtHorizontalEdge(container, isReverse) {
  if (!container) {
    return;
  }

  if (Object(external_lodash_["includes"])(['INPUT', 'TEXTAREA'], container.tagName)) {
    container.focus();

    if (isReverse) {
      container.selectionStart = container.value.length;
      container.selectionEnd = container.value.length;
    } else {
      container.selectionStart = 0;
      container.selectionEnd = 0;
    }

    return;
  }

  container.focus();

  if (!container.isContentEditable) {
    return;
  } // Select on extent child of the container, not the container itself. This
  // avoids the selection always being `endOffset` of 1 when placed at end,
  // where `startContainer`, `endContainer` would always be container itself.


  var rangeTarget = container[isReverse ? 'lastChild' : 'firstChild']; // If no range target, it implies that the container is empty. Focusing is
  // sufficient for caret to be placed correctly.

  if (!rangeTarget) {
    return;
  }

  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(rangeTarget);
  range.collapse(!isReverse);
  selection.removeAllRanges();
  selection.addRange(range);
}
/**
 * Polyfill.
 * Get a collapsed range for a given point.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint
 *
 * @param {Document} doc The document of the range.
 * @param {number}    x   Horizontal position within the current viewport.
 * @param {number}    y   Vertical position within the current viewport.
 *
 * @return {?Range} The best range for the given point.
 */

function caretRangeFromPoint(doc, x, y) {
  if (doc.caretRangeFromPoint) {
    return doc.caretRangeFromPoint(x, y);
  }

  if (!doc.caretPositionFromPoint) {
    return null;
  }

  var point = doc.caretPositionFromPoint(x, y); // If x or y are negative, outside viewport, or there is no text entry node.
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint

  if (!point) {
    return null;
  }

  var range = doc.createRange();
  range.setStart(point.offsetNode, point.offset);
  range.collapse(true);
  return range;
}
/**
 * Get a collapsed range for a given point.
 * Gives the container a temporary high z-index (above any UI).
 * This is preferred over getting the UI nodes and set styles there.
 *
 * @param {Document} doc       The document of the range.
 * @param {number}    x         Horizontal position within the current viewport.
 * @param {number}    y         Vertical position within the current viewport.
 * @param {Element}  container Container in which the range is expected to be found.
 *
 * @return {?Range} The best range for the given point.
 */


function hiddenCaretRangeFromPoint(doc, x, y, container) {
  var originalZIndex = container.style.zIndex;
  var originalPosition = container.style.position; // A z-index only works if the element position is not static.

  container.style.zIndex = '10000';
  container.style.position = 'relative';
  var range = caretRangeFromPoint(doc, x, y);
  container.style.zIndex = originalZIndex;
  container.style.position = originalPosition;
  return range;
}
/**
 * Places the caret at the top or bottom of a given element.
 *
 * @param {Element} container           Focusable element.
 * @param {boolean} isReverse           True for bottom, false for top.
 * @param {DOMRect} [rect]              The rectangle to position the caret with.
 * @param {boolean} [mayUseScroll=true] True to allow scrolling, false to disallow.
 */


function placeCaretAtVerticalEdge(container, isReverse, rect) {
  var mayUseScroll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!container) {
    return;
  }

  if (!rect || !container.isContentEditable) {
    placeCaretAtHorizontalEdge(container, isReverse);
    return;
  } // Offset by a buffer half the height of the caret rect. This is needed
  // because caretRangeFromPoint may default to the end of the selection if
  // offset is too close to the edge. It's unclear how to precisely calculate
  // this threshold; it may be the padded area of some combination of line
  // height, caret height, and font size. The buffer offset is effectively
  // equivalent to a point at half the height of a line of text.


  var buffer = rect.height / 2;
  var editableRect = container.getBoundingClientRect();
  var x = rect.left;
  var y = isReverse ? editableRect.bottom - buffer : editableRect.top + buffer;
  var range = hiddenCaretRangeFromPoint(document, x, y, container);

  if (!range || !container.contains(range.startContainer)) {
    if (mayUseScroll && (!range || !range.startContainer || !range.startContainer.contains(container))) {
      // Might be out of view.
      // Easier than attempting to calculate manually.
      container.scrollIntoView(isReverse);
      placeCaretAtVerticalEdge(container, isReverse, rect, false);
      return;
    }

    placeCaretAtHorizontalEdge(container, isReverse);
    return;
  }

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  container.focus(); // Editable was already focussed, it goes back to old range...
  // This fixes it.

  selection.removeAllRanges();
  selection.addRange(range);
}
/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 *
 * See: https://html.spec.whatwg.org/#textFieldSelection
 *
 * @param {HTMLElement} element The HTML element.
 *
 * @return {boolean} True if the element is an text field, false if not.
 */

function isTextField(element) {
  try {
    var nodeName = element.nodeName,
        selectionStart = element.selectionStart,
        contentEditable = element.contentEditable;
    return nodeName === 'INPUT' && selectionStart !== null || nodeName === 'TEXTAREA' || contentEditable === 'true';
  } catch (error) {
    // Safari throws an exception when trying to get `selectionStart`
    // on non-text <input> elements (which, understandably, don't
    // have the text selection API). We catch this via a try/catch
    // block, as opposed to a more explicit check of the element's
    // input types, because of Safari's non-standard behavior. This
    // also means we don't have to worry about the list of input
    // types that support `selectionStart` changing as the HTML spec
    // evolves over time.
    return false;
  }
}
/**
 * Check wether the current document has a selection.
 * This checks both for focus in an input field and general text selection.
 *
 * @return {boolean} True if there is selection, false if not.
 */

function documentHasSelection() {
  if (isTextField(document.activeElement)) {
    return true;
  }

  var selection = window.getSelection();
  var range = selection.rangeCount ? selection.getRangeAt(0) : null;
  return range && !range.collapsed;
}
/**
 * Check whether the contents of the element have been entirely selected.
 * Returns true if there is no possibility of selection.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} True if entirely selected, false if not.
 */

function isEntirelySelected(element) {
  if (Object(external_lodash_["includes"])(['INPUT', 'TEXTAREA'], element.nodeName)) {
    return element.selectionStart === 0 && element.value.length === element.selectionEnd;
  }

  if (!element.isContentEditable) {
    return true;
  }

  var selection = window.getSelection();
  var range = selection.rangeCount ? selection.getRangeAt(0) : null;

  if (!range) {
    return true;
  }

  var startContainer = range.startContainer,
      endContainer = range.endContainer,
      startOffset = range.startOffset,
      endOffset = range.endOffset;

  if (startContainer === element && endContainer === element && startOffset === 0 && endOffset === element.childNodes.length) {
    return true;
  }

  var lastChild = element.lastChild;
  var lastChildContentLength = lastChild.nodeType === TEXT_NODE ? lastChild.data.length : lastChild.childNodes.length;
  return startContainer === element.firstChild && endContainer === element.lastChild && startOffset === 0 && endOffset === lastChildContentLength;
}
/**
 * Given a DOM node, finds the closest scrollable container node.
 *
 * @param {Element} node Node from which to start.
 *
 * @return {?Element} Scrollable container node, if found.
 */

function getScrollContainer(node) {
  if (!node) {
    return;
  } // Scrollable if scrollable height exceeds displayed...


  if (node.scrollHeight > node.clientHeight) {
    // ...except when overflow is defined to be hidden or visible
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (/(auto|scroll)/.test(overflowY)) {
      return node;
    }
  } // Continue traversing


  return getScrollContainer(node.parentNode);
}
/**
 * Returns the closest positioned element, or null under any of the conditions
 * of the offsetParent specification. Unlike offsetParent, this function is not
 * limited to HTMLElement and accepts any Node (e.g. Node.TEXT_NODE).
 *
 * @see https://drafts.csswg.org/cssom-view/#dom-htmlelement-offsetparent
 *
 * @param {Node} node Node from which to find offset parent.
 *
 * @return {?Node} Offset parent.
 */

function getOffsetParent(node) {
  // Cannot retrieve computed style or offset parent only anything other than
  // an element node, so find the closest element node.
  var closestElement;

  while (closestElement = node.parentNode) {
    if (closestElement.nodeType === ELEMENT_NODE) {
      break;
    }
  }

  if (!closestElement) {
    return null;
  } // If the closest element is already positioned, return it, as offsetParent
  // does not otherwise consider the node itself.


  if (getComputedStyle(closestElement).position !== 'static') {
    return closestElement;
  }

  return closestElement.offsetParent;
}
/**
 * Given two DOM nodes, replaces the former with the latter in the DOM.
 *
 * @param {Element} processedNode Node to be removed.
 * @param {Element} newNode       Node to be inserted in its place.
 * @return {void}
 */

function replace(processedNode, newNode) {
  insertAfter(newNode, processedNode.parentNode);
  remove(processedNode);
}
/**
 * Given a DOM node, removes it from the DOM.
 *
 * @param {Element} node Node to be removed.
 * @return {void}
 */

function remove(node) {
  node.parentNode.removeChild(node);
}
/**
 * Given two DOM nodes, inserts the former in the DOM as the next sibling of
 * the latter.
 *
 * @param {Element} newNode       Node to be inserted.
 * @param {Element} referenceNode Node after which to perform the insertion.
 * @return {void}
 */

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
/**
 * Unwrap the given node. This means any child nodes are moved to the parent.
 *
 * @param {Node} node The node to unwrap.
 *
 * @return {void}
 */

function unwrap(node) {
  var parent = node.parentNode;

  while (node.firstChild) {
    parent.insertBefore(node.firstChild, node);
  }

  parent.removeChild(node);
}
/**
 * Replaces the given node with a new node with the given tag name.
 *
 * @param {Element}  node    The node to replace
 * @param {string}   tagName The new tag name.
 *
 * @return {Element} The new node.
 */

function replaceTag(node, tagName) {
  var newNode = node.ownerDocument.createElement(tagName);

  while (node.firstChild) {
    newNode.appendChild(node.firstChild);
  }

  node.parentNode.replaceChild(newNode, node);
  return newNode;
}
/**
 * Wraps the given node with a new node with the given tag name.
 *
 * @param {Element} newNode       The node to insert.
 * @param {Element} referenceNode The node to wrap.
 */

function wrap(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
  newNode.appendChild(referenceNode);
}
/**
 * Removes any HTML tags from the provided string.
 *
 * @param {string} html The string containing html.
 *
 * @return {string} The text content with any html removed.
 */

function __unstableStripHTML(html) {
  var document = new DOMParser().parseFromString(html, 'text/html');
  return document.body.textContent || '';
}
//# sourceMappingURL=dom.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/dom/build-module/focusable.js
/**
 * References:
 *
 * Focusable:
 *  - https://www.w3.org/TR/html5/editing.html#focus-management
 *
 * Sequential focus navigation:
 *  - https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
 *
 * Disabled elements:
 *  - https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
 *
 * getClientRects algorithm (requiring layout box):
 *  - https://www.w3.org/TR/cssom-view-1/#extension-to-the-element-interface
 *
 * AREA elements associated with an IMG:
 *  - https://w3c.github.io/html/editing.html#data-model
 */
var SELECTOR = ['[tabindex]', 'a[href]', 'button:not([disabled])', 'input:not([type="hidden"]):not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'iframe', 'object', 'embed', 'area[href]', '[contenteditable]:not([contenteditable=false])'].join(',');
/**
 * Returns true if the specified element is visible (i.e. neither display: none
 * nor visibility: hidden).
 *
 * @param {Element} element DOM element to test.
 *
 * @return {boolean} Whether element is visible.
 */

function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}
/**
 * Returns true if the specified area element is a valid focusable element, or
 * false otherwise. Area is only focusable if within a map where a named map
 * referenced by an image somewhere in the document.
 *
 * @param {Element} element DOM area element to test.
 *
 * @return {boolean} Whether area element is valid for focus.
 */


function isValidFocusableArea(element) {
  var map = element.closest('map[name]');

  if (!map) {
    return false;
  }

  var img = document.querySelector('img[usemap="#' + map.name + '"]');
  return !!img && isVisible(img);
}
/**
 * Returns all focusable elements within a given context.
 *
 * @param {Element} context Element in which to search.
 *
 * @return {Element[]} Focusable elements.
 */


function find(context) {
  var elements = context.querySelectorAll(SELECTOR);
  return Array.from(elements).filter(function (element) {
    if (!isVisible(element)) {
      return false;
    }

    var nodeName = element.nodeName;

    if ('AREA' === nodeName) {
      return isValidFocusableArea(element);
    }

    return true;
  });
}
//# sourceMappingURL=focusable.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/dom/build-module/tabbable.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Returns the tab index of the given element. In contrast with the tabIndex
 * property, this normalizes the default (0) to avoid browser inconsistencies,
 * operating under the assumption that this function is only ever called with a
 * focusable node.
 *
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1190261
 *
 * @param {Element} element Element from which to retrieve.
 *
 * @return {?number} Tab index of element (default 0).
 */

function getTabIndex(element) {
  var tabIndex = element.getAttribute('tabindex');
  return tabIndex === null ? 0 : parseInt(tabIndex, 10);
}
/**
 * Returns true if the specified element is tabbable, or false otherwise.
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is tabbable.
 */


function isTabbableIndex(element) {
  return getTabIndex(element) !== -1;
}
/**
 * Returns a stateful reducer function which constructs a filtered array of
 * tabbable elements, where at most one radio input is selected for a given
 * name, giving priority to checked input, falling back to the first
 * encountered.
 *
 * @return {Function} Radio group collapse reducer.
 */

function createStatefulCollapseRadioGroup() {
  var CHOSEN_RADIO_BY_NAME = {};
  return function collapseRadioGroup(result, element) {
    var nodeName = element.nodeName,
        type = element.type,
        checked = element.checked,
        name = element.name; // For all non-radio tabbables, construct to array by concatenating.

    if (nodeName !== 'INPUT' || type !== 'radio' || !name) {
      return result.concat(element);
    }

    var hasChosen = CHOSEN_RADIO_BY_NAME.hasOwnProperty(name); // Omit by skipping concatenation if the radio element is not chosen.

    var isChosen = checked || !hasChosen;

    if (!isChosen) {
      return result;
    } // At this point, if there had been a chosen element, the current
    // element is checked and should take priority. Retroactively remove
    // the element which had previously been considered the chosen one.


    if (hasChosen) {
      var hadChosenElement = CHOSEN_RADIO_BY_NAME[name];
      result = Object(external_lodash_["without"])(result, hadChosenElement);
    }

    CHOSEN_RADIO_BY_NAME[name] = element;
    return result.concat(element);
  };
}
/**
 * An array map callback, returning an object with the element value and its
 * array index location as properties. This is used to emulate a proper stable
 * sort where equal tabIndex should be left in order of their occurrence in the
 * document.
 *
 * @param {Element} element Element.
 * @param {number}  index   Array index of element.
 *
 * @return {Object} Mapped object with element, index.
 */


function mapElementToObjectTabbable(element, index) {
  return {
    element: element,
    index: index
  };
}
/**
 * An array map callback, returning an element of the given mapped object's
 * element value.
 *
 * @param {Object} object Mapped object with index.
 *
 * @return {Element} Mapped object element.
 */


function mapObjectTabbableToElement(object) {
  return object.element;
}
/**
 * A sort comparator function used in comparing two objects of mapped elements.
 *
 * @see mapElementToObjectTabbable
 *
 * @param {Object} a First object to compare.
 * @param {Object} b Second object to compare.
 *
 * @return {number} Comparator result.
 */


function compareObjectTabbables(a, b) {
  var aTabIndex = getTabIndex(a.element);
  var bTabIndex = getTabIndex(b.element);

  if (aTabIndex === bTabIndex) {
    return a.index - b.index;
  }

  return aTabIndex - bTabIndex;
}
/**
 * Givin focusable elements, filters out tabbable element.
 *
 * @param {Array} focusables Focusable elements to filter.
 *
 * @return {Array} Tabbable elements.
 */


function filterTabbable(focusables) {
  return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(createStatefulCollapseRadioGroup(), []);
}

function tabbable_find(context) {
  return filterTabbable(find(context));
}
/**
 * Given a focusable element, find the preceding tabbable element.
 *
 * @param {Element} element The focusable element before which to look. Defaults
 *                          to the active element.
 */

function findPrevious() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.activeElement;
  var focusables = find(document.body);
  var index = focusables.indexOf(element); // Remove all focusables after and including `element`.

  focusables.length = index;
  return Object(external_lodash_["last"])(filterTabbable(focusables));
}
/**
 * Given a focusable element, find the next tabbable element.
 *
 * @param {Element} element The focusable element after which to look. Defaults
 *                          to the active element.
 */

function findNext() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.activeElement;
  var focusables = find(document.body);
  var index = focusables.indexOf(element); // Remove all focusables before and inside `element`.

  var remaining = focusables.slice(index + 1).filter(function (node) {
    return !element.contains(node);
  });
  return Object(external_lodash_["first"])(filterTabbable(remaining));
}
//# sourceMappingURL=tabbable.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/dom/build-module/index.js
/**
 * Internal dependencies
 */


/**
 * Object grouping `focusable` and `tabbable` utils
 * under the keys with the same name.
 */

var build_module_focus = {
  focusable: focusable_namespaceObject,
  tabbable: tabbable_namespaceObject
};

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/keycodes/build-module/index.js + 7 modules
var keycodes_build_module = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js


/**
 * WordPress dependencies
 */

/**
 * Runs a media query and returns its value when it changes.
 *
 * @param {string} [query] Media Query.
 * @return {boolean} return value of the media query.
 */

function useMediaQuery(query) {
  var _useState = Object(external_React_["useState"])(false),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      match = _useState2[0],
      setMatch = _useState2[1];

  Object(external_React_["useEffect"])(function () {
    if (!query) {
      return;
    }

    var updateMatch = function updateMatch() {
      return setMatch(window.matchMedia(query).matches);
    };

    updateMatch();
    var list = window.matchMedia(query);
    list.addListener(updateMatch);
    return function () {
      list.removeListener(updateMatch);
    };
  }, [query]);
  return query && match;
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * @typedef {"huge"|"wide"|"large"|"medium"|"small"|"mobile"} WPBreakpoint
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Object<WPBreakpoint,number>}
 */

var BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};
/**
 * @typedef {">="|"<"} WPViewportOperator
 */

/**
 * Object mapping media query operators to the condition to be used.
 *
 * @type {Object<WPViewportOperator,string>}
 */

var CONDITIONS = {
  '>=': 'min-width',
  '<': 'max-width'
};
/**
 * Object mapping media query operators to a function that given a breakpointValue and a width evaluates if the operator matches the values.
 *
 * @type {Object<WPViewportOperator,Function>}
 */

var OPERATOR_EVALUATORS = {
  '>=': function _(breakpointValue, width) {
    return width >= breakpointValue;
  },
  '<': function _(breakpointValue, width) {
    return width < breakpointValue;
  }
};
var ViewportMatchWidthContext = Object(external_React_["createContext"])(null);
/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {WPBreakpoint}       breakpoint      Breakpoint size name.
 * @param {WPViewportOperator} [operator=">="] Viewport operator.
 *
 * @example
 *
 * ```js
 * useViewportMatch( 'huge', <' );
 * useViewportMatch( 'medium' );
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */

var use_viewport_match_useViewportMatch = function useViewportMatch(breakpoint) {
  var operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '>=';
  var simulatedWidth = Object(external_React_["useContext"])(ViewportMatchWidthContext);
  var mediaQuery = !simulatedWidth && "(".concat(CONDITIONS[operator], ": ").concat(BREAKPOINTS[breakpoint], "px)");
  var mediaQueryResult = useMediaQuery(mediaQuery);

  if (simulatedWidth) {
    return OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint], simulatedWidth);
  }

  return mediaQueryResult;
};

use_viewport_match_useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
/* harmony default export */ var use_viewport_match = (use_viewport_match_useViewportMatch);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js



function svg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function svg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { svg_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { svg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var svg_Circle = function Circle(props) {
  return Object(external_React_["createElement"])('circle', props);
};
var svg_G = function G(props) {
  return Object(external_React_["createElement"])('g', props);
};
var svg_Path = function Path(props) {
  return Object(external_React_["createElement"])('path', props);
};
var svg_Polygon = function Polygon(props) {
  return Object(external_React_["createElement"])('polygon', props);
};
var svg_Rect = function Rect(props) {
  return Object(external_React_["createElement"])('rect', props);
};
var svg_Defs = function Defs(props) {
  return Object(external_React_["createElement"])('defs', props);
};
var svg_RadialGradient = function RadialGradient(props) {
  return Object(external_React_["createElement"])('radialGradient', props);
};
var svg_LinearGradient = function LinearGradient(props) {
  return Object(external_React_["createElement"])('linearGradient', props);
};
var svg_Stop = function Stop(props) {
  return Object(external_React_["createElement"])('stop', props);
};
var svg_SVG = function SVG(_ref) {
  var className = _ref.className,
      isPressed = _ref.isPressed,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["className", "isPressed"]);

  var appliedProps = svg_objectSpread({}, props, {
    className: classnames_default()(className, {
      'is-pressed': isPressed
    }) || undefined,
    role: 'img',
    'aria-hidden': 'true',
    focusable: 'false'
  }); // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements


  return Object(external_React_["createElement"])("svg", appliedProps);
};
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js


/**
 * WordPress dependencies
 */

var close_close = Object(external_React_["createElement"])(svg_SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_React_["createElement"])(svg_Path, {
  d: "M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"
}));
/* harmony default export */ var library_close = (close_close);
//# sourceMappingURL=close.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/popover/utils.js



function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { utils_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/**
 * Module constants
 */

var HEIGHT_OFFSET = 10; // used by the arrow and a bit of empty space

/**
 * Utility used to compute the popover position over the xAxis
 *
 * @param {Object}  anchorRect  Anchor Rect.
 * @param {Object}  contentSize Content Size.
 * @param {string}  xAxis       Desired xAxis.
 * @param {string}  corner      Desired corner.
 * @param {boolean} sticky      Whether or not to stick the popover to the
 *                              scroll container edge when part of the anchor
 *                              leaves view.
 * @param {string}  chosenYAxis yAxis to be used.
 *
 * @return {Object} Popover xAxis position and constraints.
 */

function computePopoverXAxisPosition(anchorRect, contentSize, xAxis, corner, sticky, chosenYAxis) {
  var width = contentSize.width;
  var isRTL = document.documentElement.dir === 'rtl'; // Correct xAxis for RTL support

  if (xAxis === 'left' && isRTL) {
    xAxis = 'right';
  } else if (xAxis === 'right' && isRTL) {
    xAxis = 'left';
  }

  if (corner === 'left' && isRTL) {
    corner = 'right';
  } else if (corner === 'right' && isRTL) {
    corner = 'left';
  } // x axis alignment choices


  var anchorMidPoint = Math.round(anchorRect.left + anchorRect.width / 2);
  var centerAlignment = {
    popoverLeft: anchorMidPoint,
    contentWidth: (anchorMidPoint - width / 2 > 0 ? width / 2 : anchorMidPoint) + (anchorMidPoint + width / 2 > window.innerWidth ? window.innerWidth - anchorMidPoint : width / 2)
  };
  var leftAlignmentX = anchorRect.left;

  if (corner === 'right') {
    leftAlignmentX = anchorRect.right;
  } else if (chosenYAxis !== 'middle') {
    leftAlignmentX = anchorMidPoint;
  }

  var rightAlignmentX = anchorRect.right;

  if (corner === 'left') {
    rightAlignmentX = anchorRect.left;
  } else if (chosenYAxis !== 'middle') {
    rightAlignmentX = anchorMidPoint;
  }

  var leftAlignment = {
    popoverLeft: leftAlignmentX,
    contentWidth: leftAlignmentX - width > 0 ? width : leftAlignmentX
  };
  var rightAlignment = {
    popoverLeft: rightAlignmentX,
    contentWidth: rightAlignmentX + width > window.innerWidth ? window.innerWidth - rightAlignmentX : width
  }; // Choosing the x axis

  var chosenXAxis = xAxis;
  var contentWidth = null;

  if (!sticky) {
    if (xAxis === 'center' && centerAlignment.contentWidth === width) {
      chosenXAxis = 'center';
    } else if (xAxis === 'left' && leftAlignment.contentWidth === width) {
      chosenXAxis = 'left';
    } else if (xAxis === 'right' && rightAlignment.contentWidth === width) {
      chosenXAxis = 'right';
    } else {
      chosenXAxis = leftAlignment.contentWidth > rightAlignment.contentWidth ? 'left' : 'right';
      var chosenWidth = chosenXAxis === 'left' ? leftAlignment.contentWidth : rightAlignment.contentWidth;
      contentWidth = chosenWidth !== width ? chosenWidth : null;
    }
  }

  var popoverLeft;

  if (chosenXAxis === 'center') {
    popoverLeft = centerAlignment.popoverLeft;
  } else if (chosenXAxis === 'left') {
    popoverLeft = leftAlignment.popoverLeft;
  } else {
    popoverLeft = rightAlignment.popoverLeft;
  }

  return {
    xAxis: chosenXAxis,
    popoverLeft: popoverLeft,
    contentWidth: contentWidth
  };
}
/**
 * Utility used to compute the popover position over the yAxis
 *
 * @param {Object}  anchorRect        Anchor Rect.
 * @param {Object}  contentSize       Content Size.
 * @param {string}  yAxis             Desired yAxis.
 * @param {string}  corner            Desired corner.
 * @param {boolean} sticky            Whether or not to stick the popover to the
 *                                    scroll container edge when part of the
 *                                    anchor leaves view.
 * @param {Element} anchorRef         The anchor element.
 * @param {Element} relativeOffsetTop If applicable, top offset of the relative
 *                                    positioned parent container.
 *
 * @return {Object} Popover xAxis position and constraints.
 */

function computePopoverYAxisPosition(anchorRect, contentSize, yAxis, corner, sticky, anchorRef, relativeOffsetTop) {
  var height = contentSize.height;

  if (sticky) {
    var scrollContainerEl = getScrollContainer(anchorRef) || document.body;
    var scrollRect = scrollContainerEl.getBoundingClientRect();

    if (anchorRect.top - height <= scrollRect.top) {
      return {
        yAxis: yAxis,
        popoverTop: Math.min(anchorRect.bottom - relativeOffsetTop, scrollRect.top + height - relativeOffsetTop)
      };
    }
  } // y axis alignment choices


  var anchorMidPoint = anchorRect.top + anchorRect.height / 2;

  if (corner === 'bottom') {
    anchorMidPoint = anchorRect.bottom;
  } else if (corner === 'top') {
    anchorMidPoint = anchorRect.top;
  }

  var middleAlignment = {
    popoverTop: anchorMidPoint,
    contentHeight: (anchorMidPoint - height / 2 > 0 ? height / 2 : anchorMidPoint) + (anchorMidPoint + height / 2 > window.innerHeight ? window.innerHeight - anchorMidPoint : height / 2)
  };
  var topAlignment = {
    popoverTop: anchorRect.top,
    contentHeight: anchorRect.top - HEIGHT_OFFSET - height > 0 ? height : anchorRect.top - HEIGHT_OFFSET
  };
  var bottomAlignment = {
    popoverTop: anchorRect.bottom,
    contentHeight: anchorRect.bottom + HEIGHT_OFFSET + height > window.innerHeight ? window.innerHeight - HEIGHT_OFFSET - anchorRect.bottom : height
  }; // Choosing the y axis

  var chosenYAxis = yAxis;
  var contentHeight = null;

  if (!sticky) {
    if (yAxis === 'middle' && middleAlignment.contentHeight === height) {
      chosenYAxis = 'middle';
    } else if (yAxis === 'top' && topAlignment.contentHeight === height) {
      chosenYAxis = 'top';
    } else if (yAxis === 'bottom' && bottomAlignment.contentHeight === height) {
      chosenYAxis = 'bottom';
    } else {
      chosenYAxis = topAlignment.contentHeight > bottomAlignment.contentHeight ? 'top' : 'bottom';
      var chosenHeight = chosenYAxis === 'top' ? topAlignment.contentHeight : bottomAlignment.contentHeight;
      contentHeight = chosenHeight !== height ? chosenHeight : null;
    }
  }

  var popoverTop;

  if (chosenYAxis === 'middle') {
    popoverTop = middleAlignment.popoverTop;
  } else if (chosenYAxis === 'top') {
    popoverTop = topAlignment.popoverTop;
  } else {
    popoverTop = bottomAlignment.popoverTop;
  }

  return {
    yAxis: chosenYAxis,
    popoverTop: popoverTop,
    contentHeight: contentHeight
  };
}
/**
 * Utility used to compute the popover position and the content max width/height
 * for a popover given its anchor rect and its content size.
 *
 * @param {Object}  anchorRect        Anchor Rect.
 * @param {Object}  contentSize       Content Size.
 * @param {string}  position          Position.
 * @param {boolean} sticky            Whether or not to stick the popover to the
 *                                    scroll container edge when part of the
 *                                    anchor leaves view.
 * @param {Element} anchorRef         The anchor element.
 * @param {number}  relativeOffsetTop If applicable, top offset of the relative
 *                                    positioned parent container.
 *
 * @return {Object} Popover position and constraints.
 */

function computePopoverPosition(anchorRect, contentSize) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
  var sticky = arguments.length > 3 ? arguments[3] : undefined;
  var anchorRef = arguments.length > 4 ? arguments[4] : undefined;
  var relativeOffsetTop = arguments.length > 5 ? arguments[5] : undefined;

  var _position$split = position.split(' '),
      _position$split2 = Object(esm_slicedToArray["a" /* default */])(_position$split, 3),
      yAxis = _position$split2[0],
      _position$split2$ = _position$split2[1],
      xAxis = _position$split2$ === void 0 ? 'center' : _position$split2$,
      corner = _position$split2[2];

  var yAxisPosition = computePopoverYAxisPosition(anchorRect, contentSize, yAxis, corner, sticky, anchorRef, relativeOffsetTop);
  var xAxisPosition = computePopoverXAxisPosition(anchorRect, contentSize, xAxis, corner, sticky, yAxisPosition.yAxis);
  return utils_objectSpread({}, xAxisPosition, {}, yAxisPosition);
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var esm_toConsumableArray = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js
var create_higher_order_component = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var esm_assertThisInitialized = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-return/context.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var _createContext = Object(external_React_["createContext"])({
  focusHistory: []
}),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

Provider.displayName = 'FocusReturnProvider';
Consumer.displayName = 'FocusReturnConsumer';
/**
 * The maximum history length to capture for the focus stack. When exceeded,
 * items should be shifted from the stack for each consecutive push.
 *
 * @type {number}
 */

var MAX_STACK_LENGTH = 100;

var context_FocusReturnProvider =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(FocusReturnProvider, _Component);

  function FocusReturnProvider() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, FocusReturnProvider);

    _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(FocusReturnProvider).apply(this, arguments));
    _this.onFocus = _this.onFocus.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      focusHistory: []
    };
    return _this;
  }

  Object(esm_createClass["a" /* default */])(FocusReturnProvider, [{
    key: "onFocus",
    value: function onFocus(event) {
      var focusHistory = this.state.focusHistory; // Push the focused element to the history stack, keeping only unique
      // members but preferring the _last_ occurrence of any duplicates.
      // Lodash's `uniq` behavior favors the first occurrence, so the array
      // is temporarily reversed prior to it being called upon. Uniqueness
      // helps avoid situations where, such as in a constrained tabbing area,
      // the user changes focus enough within a transient element that the
      // stack may otherwise only consist of members pending destruction, at
      // which point focus might have been lost.

      var nextFocusHistory = Object(external_lodash_["uniq"])([].concat(Object(esm_toConsumableArray["a" /* default */])(focusHistory), [event.target]).slice(-1 * MAX_STACK_LENGTH).reverse()).reverse();
      this.setState({
        focusHistory: nextFocusHistory
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return Object(external_React_["createElement"])(Provider, {
        value: this.state
      }, Object(external_React_["createElement"])("div", {
        onFocus: this.onFocus,
        className: className
      }, children));
    }
  }]);

  return FocusReturnProvider;
}(external_React_["Component"]);

/* harmony default export */ var with_focus_return_context = (context_FocusReturnProvider);

//# sourceMappingURL=context.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-return/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Returns true if the given object is component-like. An object is component-
 * like if it is an instance of wp.element.Component, or is a function.
 *
 * @param {*} object Object to test.
 *
 * @return {boolean} Whether object is component-like.
 */

function isComponentLike(object) {
  return object instanceof external_React_["Component"] || typeof object === 'function';
}
/**
 * Higher Order Component used to be used to wrap disposable elements like
 * sidebars, modals, dropdowns. When mounting the wrapped component, we track a
 * reference to the current active element so we know where to restore focus
 * when the component is unmounted.
 *
 * @param {(WPComponent|Object)} options The component to be enhanced with
 *                                      focus return behavior, or an object
 *                                      describing the component and the
 *                                      focus return characteristics.
 *
 * @return {WPComponent} Component with the focus restauration behaviour.
 */


function withFocusReturn(options) {
  // Normalize as overloaded form `withFocusReturn( options )( Component )`
  // or as `withFocusReturn( Component )`.
  if (isComponentLike(options)) {
    var WrappedComponent = options;
    return withFocusReturn({})(WrappedComponent);
  }

  var _options$onFocusRetur = options.onFocusReturn,
      onFocusReturn = _options$onFocusRetur === void 0 ? external_lodash_["stubTrue"] : _options$onFocusRetur;
  return function (WrappedComponent) {
    var FocusReturn =
    /*#__PURE__*/
    function (_Component) {
      Object(esm_inherits["a" /* default */])(FocusReturn, _Component);

      function FocusReturn() {
        var _this;

        Object(esm_classCallCheck["a" /* default */])(this, FocusReturn);

        _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(FocusReturn).apply(this, arguments));
        _this.ownFocusedElements = new Set();
        _this.activeElementOnMount = document.activeElement;

        _this.setIsFocusedFalse = function () {
          return _this.isFocused = false;
        };

        _this.setIsFocusedTrue = function (event) {
          _this.ownFocusedElements.add(event.target);

          _this.isFocused = true;
        };

        return _this;
      }

      Object(esm_createClass["a" /* default */])(FocusReturn, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var activeElementOnMount = this.activeElementOnMount,
              isFocused = this.isFocused,
              ownFocusedElements = this.ownFocusedElements;

          if (!isFocused) {
            return;
          } // Defer to the component's own explicit focus return behavior,
          // if specified. The function should return `false` to prevent
          // the default behavior otherwise occurring here. This allows
          // for support that the `onFocusReturn` decides to allow the
          // default behavior to occur under some conditions.


          if (onFocusReturn() === false) {
            return;
          }

          var stack = [].concat(Object(esm_toConsumableArray["a" /* default */])(external_lodash_["without"].apply(void 0, [this.props.focus.focusHistory].concat(Object(esm_toConsumableArray["a" /* default */])(ownFocusedElements)))), [activeElementOnMount]);
          var candidate;

          while (candidate = stack.pop()) {
            if (document.body.contains(candidate)) {
              candidate.focus();
              return;
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(external_React_["createElement"])("div", {
            onFocus: this.setIsFocusedTrue,
            onBlur: this.setIsFocusedFalse
          }, Object(external_React_["createElement"])(WrappedComponent, this.props.childProps));
        }
      }]);

      return FocusReturn;
    }(external_React_["Component"]);

    return function (props) {
      return Object(external_React_["createElement"])(Consumer, null, function (context) {
        return Object(external_React_["createElement"])(FocusReturn, {
          childProps: props,
          focus: context
        });
      });
    };
  };
}

/* harmony default export */ var with_focus_return = (Object(create_higher_order_component["a" /* default */])(withFocusReturn, 'withFocusReturn'));

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-constrained-tabbing/index.js








/**
 * WordPress dependencies
 */




var withConstrainedTabbing = Object(create_higher_order_component["a" /* default */])(function (WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(esm_inherits["a" /* default */])(_class, _Component);

      function _class() {
        var _this;

        Object(esm_classCallCheck["a" /* default */])(this, _class);

        _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(_class).apply(this, arguments));
        _this.focusContainRef = Object(external_React_["createRef"])();
        _this.handleTabBehaviour = _this.handleTabBehaviour.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
        return _this;
      }

      Object(esm_createClass["a" /* default */])(_class, [{
        key: "handleTabBehaviour",
        value: function handleTabBehaviour(event) {
          if (event.keyCode !== keycodes_build_module["e" /* TAB */]) {
            return;
          }

          var tabbables = build_module_focus.tabbable.find(this.focusContainRef.current);

          if (!tabbables.length) {
            return;
          }

          var firstTabbable = tabbables[0];
          var lastTabbable = tabbables[tabbables.length - 1];

          if (event.shiftKey && event.target === firstTabbable) {
            event.preventDefault();
            lastTabbable.focus();
          } else if (!event.shiftKey && event.target === lastTabbable) {
            event.preventDefault();
            firstTabbable.focus();
            /*
             * When pressing Tab and none of the tabbables has focus, the keydown
             * event happens on the wrapper div: move focus on the first tabbable.
             */
          } else if (!tabbables.includes(event.target)) {
            event.preventDefault();
            firstTabbable.focus();
          }
        }
      }, {
        key: "render",
        value: function render() {
          // Disable reason: this component is non-interactive, but must capture
          // events from the wrapped component to determine when the Tab key is used.

          /* eslint-disable jsx-a11y/no-static-element-interactions */
          return Object(external_React_["createElement"])("div", {
            onKeyDown: this.handleTabBehaviour,
            ref: this.focusContainRef,
            tabIndex: "-1"
          }, Object(external_React_["createElement"])(WrappedComponent, this.props));
          /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
      }]);

      return _class;
    }(external_React_["Component"])
  );
}, 'withConstrainedTabbing');
/* harmony default export */ var with_constrained_tabbing = (withConstrainedTabbing);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Input types which are classified as button types, for use in considering
 * whether element is a (focus-normalized) button.
 *
 * @type {string[]}
 */

var INPUT_BUTTON_TYPES = ['button', 'submit'];
/**
 * Returns true if the given element is a button element subject to focus
 * normalization, or false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is a button.
 */

function isFocusNormalizedButton(element) {
  switch (element.nodeName) {
    case 'A':
    case 'BUTTON':
      return true;

    case 'INPUT':
      return Object(external_lodash_["includes"])(INPUT_BUTTON_TYPES, element.type);
  }

  return false;
}

/* harmony default export */ var with_focus_outside = (Object(create_higher_order_component["a" /* default */])(function (WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(esm_inherits["a" /* default */])(_class, _Component);

      function _class() {
        var _this;

        Object(esm_classCallCheck["a" /* default */])(this, _class);

        _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(_class).apply(this, arguments));
        _this.bindNode = _this.bindNode.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
        _this.cancelBlurCheck = _this.cancelBlurCheck.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
        _this.queueBlurCheck = _this.queueBlurCheck.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
        _this.normalizeButtonFocus = _this.normalizeButtonFocus.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
        return _this;
      }

      Object(esm_createClass["a" /* default */])(_class, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.cancelBlurCheck();
        }
      }, {
        key: "bindNode",
        value: function bindNode(node) {
          if (node) {
            this.node = node;
          } else {
            delete this.node;
            this.cancelBlurCheck();
          }
        }
      }, {
        key: "queueBlurCheck",
        value: function queueBlurCheck(event) {
          var _this2 = this;

          // React does not allow using an event reference asynchronously
          // due to recycling behavior, except when explicitly persisted.
          event.persist(); // Skip blur check if clicking button. See `normalizeButtonFocus`.

          if (this.preventBlurCheck) {
            return;
          }

          this.blurCheckTimeout = setTimeout(function () {
            // If document is not focused then focus should remain
            // inside the wrapped component and therefore we cancel
            // this blur event thereby leaving focus in place.
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus.
            if (!document.hasFocus()) {
              event.preventDefault();
              return;
            }

            if ('function' === typeof _this2.node.handleFocusOutside) {
              _this2.node.handleFocusOutside(event);
            }
          }, 0);
        }
      }, {
        key: "cancelBlurCheck",
        value: function cancelBlurCheck() {
          clearTimeout(this.blurCheckTimeout);
        }
        /**
         * Handles a mousedown or mouseup event to respectively assign and
         * unassign a flag for preventing blur check on button elements. Some
         * browsers, namely Firefox and Safari, do not emit a focus event on
         * button elements when clicked, while others do. The logic here
         * intends to normalize this as treating click on buttons as focus.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
         *
         * @param {MouseEvent} event Event for mousedown or mouseup.
         */

      }, {
        key: "normalizeButtonFocus",
        value: function normalizeButtonFocus(event) {
          var type = event.type,
              target = event.target;
          var isInteractionEnd = Object(external_lodash_["includes"])(['mouseup', 'touchend'], type);

          if (isInteractionEnd) {
            this.preventBlurCheck = false;
          } else if (isFocusNormalizedButton(target)) {
            this.preventBlurCheck = true;
          }
        }
      }, {
        key: "render",
        value: function render() {
          // Disable reason: See `normalizeButtonFocus` for browser-specific
          // focus event normalization.

          /* eslint-disable jsx-a11y/no-static-element-interactions */
          return Object(external_React_["createElement"])("div", {
            onFocus: this.cancelBlurCheck,
            onMouseDown: this.normalizeButtonFocus,
            onMouseUp: this.normalizeButtonFocus,
            onTouchStart: this.normalizeButtonFocus,
            onTouchEnd: this.normalizeButtonFocus,
            onBlur: this.queueBlurCheck
          }, Object(external_React_["createElement"])(WrappedComponent, Object(esm_extends["a" /* default */])({
            ref: this.bindNode
          }, this.props)));
          /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
      }]);

      return _class;
    }(external_React_["Component"])
  );
}, 'withFocusOutside'));
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/popover/detect-outside.js






/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var detect_outside_PopoverDetectOutside =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(PopoverDetectOutside, _Component);

  function PopoverDetectOutside() {
    Object(esm_classCallCheck["a" /* default */])(this, PopoverDetectOutside);

    return Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(PopoverDetectOutside).apply(this, arguments));
  }

  Object(esm_createClass["a" /* default */])(PopoverDetectOutside, [{
    key: "handleFocusOutside",
    value: function handleFocusOutside(event) {
      this.props.onFocusOutside(event);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return PopoverDetectOutside;
}(external_React_["Component"]);

/* harmony default export */ var detect_outside = (with_focus_outside(detect_outside_PopoverDetectOutside));
//# sourceMappingURL=detect-outside.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/scroll-lock/index.js






/**
 * WordPress dependencies
 */

/**
 * Creates a ScrollLock component bound to the specified document.
 *
 * This function creates a ScrollLock component for the specified document
 * and is exposed so we can create an isolated component for unit testing.
 *
 * @param {Object} args Keyword args.
 * @param {HTMLDocument} args.htmlDocument The document to lock the scroll for.
 * @param {string} args.className The name of the class used to lock scrolling.
 * @return {WPComponent} The bound ScrollLock component.
 */

function createScrollLockComponent() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$htmlDocument = _ref.htmlDocument,
      htmlDocument = _ref$htmlDocument === void 0 ? document : _ref$htmlDocument,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'lockscroll' : _ref$className;

  var lockCounter = 0;
  /*
   * Setting `overflow: hidden` on html and body elements resets body scroll in iOS.
   * Save scroll top so we can restore it after locking scroll.
   *
   * NOTE: It would be cleaner and possibly safer to find a localized solution such
   * as preventing default on certain touchmove events.
   */

  var previousScrollTop = 0;
  /**
   * Locks and unlocks scroll depending on the boolean argument.
   *
   * @param {boolean} locked Whether or not scroll should be locked.
   */

  function setLocked(locked) {
    var scrollingElement = htmlDocument.scrollingElement || htmlDocument.body;

    if (locked) {
      previousScrollTop = scrollingElement.scrollTop;
    }

    var methodName = locked ? 'add' : 'remove';
    scrollingElement.classList[methodName](className); // Adding the class to the document element seems to be necessary in iOS.

    htmlDocument.documentElement.classList[methodName](className);

    if (!locked) {
      scrollingElement.scrollTop = previousScrollTop;
    }
  }
  /**
   * Requests scroll lock.
   *
   * This function tracks requests for scroll lock. It locks scroll on the first
   * request and counts each request so `releaseLock` can unlock scroll when
   * all requests have been released.
   */


  function requestLock() {
    if (lockCounter === 0) {
      setLocked(true);
    }

    ++lockCounter;
  }
  /**
   * Releases a request for scroll lock.
   *
   * This function tracks released requests for scroll lock. When all requests
   * have been released, it unlocks scroll.
   */


  function releaseLock() {
    if (lockCounter === 1) {
      setLocked(false);
    }

    --lockCounter;
  }

  return (
    /*#__PURE__*/
    function (_Component) {
      Object(esm_inherits["a" /* default */])(ScrollLock, _Component);

      function ScrollLock() {
        Object(esm_classCallCheck["a" /* default */])(this, ScrollLock);

        return Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(ScrollLock).apply(this, arguments));
      }

      Object(esm_createClass["a" /* default */])(ScrollLock, [{
        key: "componentDidMount",

        /**
         * Requests scroll lock on mount.
         */
        value: function componentDidMount() {
          requestLock();
        }
        /**
         * Releases scroll lock before unmount.
         */

      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          releaseLock();
        }
        /**
         * Render nothing as this component is merely a way to declare scroll lock.
         *
         * @return {null} Render nothing by returning `null`.
         */

      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return ScrollLock;
    }(external_React_["Component"])
  );
}
/* harmony default export */ var scroll_lock = (createScrollLockComponent());
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/isolated-event-container/index.js




/**
 * WordPress dependencies
 */


function stopPropagation(event) {
  event.stopPropagation();
}

/* harmony default export */ var isolated_event_container = (Object(external_React_["forwardRef"])(function (_ref, ref) {
  var children = _ref.children,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["children"]);

  // Disable reason: this stops certain events from propagating outside of the component.
  //   - onMouseDown is disabled as this can cause interactions with other DOM elements

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return Object(external_React_["createElement"])("div", Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    onMouseDown: stopPropagation
  }), children);
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}));
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js
/**
 * WordPress dependencies
 */

var SlotFillContext = Object(external_React_["createContext"])({
  slots: {},
  fills: {},
  registerSlot: function registerSlot() {},
  unregisterSlot: function unregisterSlot() {},
  registerFill: function registerFill() {},
  unregisterFill: function unregisterFill() {}
});
/* harmony default export */ var slot_fill_context = (SlotFillContext);
//# sourceMappingURL=slot-fill-context.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js


function use_slot_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_slot_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_slot_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_slot_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function use_slot_useSlot(name) {
  var registry = Object(external_React_["useContext"])(slot_fill_context);
  var slot = registry.slots[name] || {};
  var slotFills = registry.fills[name];
  var fills = Object(external_React_["useMemo"])(function () {
    return slotFills || [];
  }, [slotFills]);
  var updateSlot = Object(external_React_["useCallback"])(function (slotRef, slotFillProps) {
    registry.updateSlot(name, slotRef, slotFillProps);
  }, [name, registry.updateSlot]);
  var unregisterSlot = Object(external_React_["useCallback"])(function (slotRef) {
    registry.unregisterSlot(name, slotRef);
  }, [name, registry.unregisterSlot]);
  var registerFill = Object(external_React_["useCallback"])(function (fillRef) {
    registry.registerFill(name, fillRef);
  }, [name, registry.registerFill]);
  var unregisterFill = Object(external_React_["useCallback"])(function (fillRef) {
    registry.unregisterFill(name, fillRef);
  }, [name, registry.unregisterFill]);
  return use_slot_objectSpread({}, slot, {
    updateSlot: updateSlot,
    unregisterSlot: unregisterSlot,
    fills: fills,
    registerFill: registerFill,
    unregisterFill: unregisterFill
  });
}
//# sourceMappingURL=use-slot.js.map
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
  if (Object(external_lodash_["isNumber"])(element)) {
    return false;
  }

  if (Object(external_lodash_["isString"])(element) || Object(external_lodash_["isArray"])(element)) {
    return !element.length;
  }

  return !element;
};
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-provider.js







function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return Object(esm_typeof["a" /* default */])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (Object(esm_typeof["a" /* default */])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Object(esm_typeof["a" /* default */])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function slot_fill_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function slot_fill_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slot_fill_provider_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slot_fill_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function useSlotRegistry() {
  var _useState = Object(external_React_["useState"])({}),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      slots = _useState2[0],
      setSlots = _useState2[1];

  var _useState3 = Object(external_React_["useState"])({}),
      _useState4 = Object(esm_slicedToArray["a" /* default */])(_useState3, 2),
      fills = _useState4[0],
      setFills = _useState4[1];

  var registerSlot = Object(external_React_["useCallback"])(function (name, ref, fillProps) {
    setSlots(function (prevSlots) {
      return slot_fill_provider_objectSpread({}, prevSlots, Object(esm_defineProperty["a" /* default */])({}, name, slot_fill_provider_objectSpread({}, prevSlots[name], {
        ref: ref || prevSlots[name].ref,
        fillProps: fillProps || prevSlots[name].fillProps || {}
      })));
    });
  }, []);
  var unregisterSlot = Object(external_React_["useCallback"])(function (name, ref) {
    setSlots(function (prevSlots) {
      // eslint-disable-next-line no-unused-vars
      var slot = prevSlots[name],
          nextSlots = Object(esm_objectWithoutProperties["a" /* default */])(prevSlots, [name].map(_toPropertyKey)); // Make sure we're not unregistering a slot registered by another element
      // See https://github.com/WordPress/gutenberg/pull/19242#issuecomment-590295412


      if (slot.ref === ref) {
        return nextSlots;
      }

      return prevSlots;
    });
  }, []);
  var registerFill = Object(external_React_["useCallback"])(function (name, ref) {
    setFills(function (prevFills) {
      return slot_fill_provider_objectSpread({}, prevFills, Object(esm_defineProperty["a" /* default */])({}, name, [].concat(Object(esm_toConsumableArray["a" /* default */])(prevFills[name] || []), [ref])));
    });
  }, []);
  var unregisterFill = Object(external_React_["useCallback"])(function (name, ref) {
    setFills(function (prevFills) {
      if (prevFills[name]) {
        return slot_fill_provider_objectSpread({}, prevFills, Object(esm_defineProperty["a" /* default */])({}, name, prevFills[name].filter(function (fillRef) {
          return fillRef !== ref;
        })));
      }

      return prevFills;
    });
  }, []); // Memoizing the return value so it can be directly passed to Provider value

  var registry = Object(external_React_["useMemo"])(function () {
    return {
      slots: slots,
      fills: fills,
      registerSlot: registerSlot,
      // Just for readability
      updateSlot: registerSlot,
      unregisterSlot: unregisterSlot,
      registerFill: registerFill,
      unregisterFill: unregisterFill
    };
  }, [slots, fills, registerSlot, unregisterSlot, registerFill, unregisterFill]);
  return registry;
}

function slot_fill_provider_SlotFillProvider(_ref) {
  var children = _ref.children;
  var registry = useSlotRegistry();
  return Object(external_React_["createElement"])(slot_fill_context.Provider, {
    value: registry
  }, children);
}
//# sourceMappingURL=slot-fill-provider.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/context.js










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var context_SlotFillContext = Object(external_React_["createContext"])({
  registerSlot: function registerSlot() {},
  unregisterSlot: function unregisterSlot() {},
  registerFill: function registerFill() {},
  unregisterFill: function unregisterFill() {},
  getSlot: function getSlot() {},
  getFills: function getFills() {},
  subscribe: function subscribe() {}
});
var context_Provider = context_SlotFillContext.Provider,
    context_Consumer = context_SlotFillContext.Consumer;

var context_SlotFillProvider =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(SlotFillProvider, _Component);

  function SlotFillProvider() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, SlotFillProvider);

    _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(SlotFillProvider).apply(this, arguments));
    _this.registerSlot = _this.registerSlot.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.registerFill = _this.registerFill.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.unregisterSlot = _this.unregisterSlot.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.unregisterFill = _this.unregisterFill.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.getSlot = _this.getSlot.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.getFills = _this.getFills.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.hasFills = _this.hasFills.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.subscribe = _this.subscribe.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.slots = {};
    _this.fills = {};
    _this.listeners = [];
    _this.contextValue = {
      registerSlot: _this.registerSlot,
      unregisterSlot: _this.unregisterSlot,
      registerFill: _this.registerFill,
      unregisterFill: _this.unregisterFill,
      getSlot: _this.getSlot,
      getFills: _this.getFills,
      hasFills: _this.hasFills,
      subscribe: _this.subscribe
    };
    return _this;
  }

  Object(esm_createClass["a" /* default */])(SlotFillProvider, [{
    key: "registerSlot",
    value: function registerSlot(name, slot) {
      var previousSlot = this.slots[name];
      this.slots[name] = slot;
      this.triggerListeners(); // Sometimes the fills are registered after the initial render of slot
      // But before the registerSlot call, we need to rerender the slot

      this.forceUpdateSlot(name); // If a new instance of a slot is being mounted while another with the
      // same name exists, force its update _after_ the new slot has been
      // assigned into the instance, such that its own rendering of children
      // will be empty (the new Slot will subsume all fills for this name).

      if (previousSlot) {
        previousSlot.forceUpdate();
      }
    }
  }, {
    key: "registerFill",
    value: function registerFill(name, instance) {
      this.fills[name] = [].concat(Object(esm_toConsumableArray["a" /* default */])(this.fills[name] || []), [instance]);
      this.forceUpdateSlot(name);
    }
  }, {
    key: "unregisterSlot",
    value: function unregisterSlot(name, instance) {
      // If a previous instance of a Slot by this name unmounts, do nothing,
      // as the slot and its fills should only be removed for the current
      // known instance.
      if (this.slots[name] !== instance) {
        return;
      }

      delete this.slots[name];
      this.triggerListeners();
    }
  }, {
    key: "unregisterFill",
    value: function unregisterFill(name, instance) {
      this.fills[name] = Object(external_lodash_["without"])(this.fills[name], instance);
      this.resetFillOccurrence(name);
      this.forceUpdateSlot(name);
    }
  }, {
    key: "getSlot",
    value: function getSlot(name) {
      return this.slots[name];
    }
  }, {
    key: "getFills",
    value: function getFills(name, slotInstance) {
      // Fills should only be returned for the current instance of the slot
      // in which they occupy.
      if (this.slots[name] !== slotInstance) {
        return [];
      }

      return Object(external_lodash_["sortBy"])(this.fills[name], 'occurrence');
    }
  }, {
    key: "hasFills",
    value: function hasFills(name) {
      return this.fills[name] && !!this.fills[name].length;
    }
  }, {
    key: "resetFillOccurrence",
    value: function resetFillOccurrence(name) {
      Object(external_lodash_["forEach"])(this.fills[name], function (instance) {
        instance.occurrence = undefined;
      });
    }
  }, {
    key: "forceUpdateSlot",
    value: function forceUpdateSlot(name) {
      var slot = this.getSlot(name);

      if (slot) {
        slot.forceUpdate();
      }
    }
  }, {
    key: "triggerListeners",
    value: function triggerListeners() {
      this.listeners.forEach(function (listener) {
        return listener();
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      var _this2 = this;

      this.listeners.push(listener);
      return function () {
        _this2.listeners = Object(external_lodash_["without"])(_this2.listeners, listener);
      };
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_React_["createElement"])(context_Provider, {
        value: this.contextValue
      }, Object(external_React_["createElement"])(slot_fill_provider_SlotFillProvider, null, this.props.children));
    }
  }]);

  return SlotFillProvider;
}(external_React_["Component"]);
/**
 * React hook returning the active slot given a name.
 *
 * @param {string} name Slot name.
 * @return {Object} Slot object.
 */


var context_useSlot = function useSlot(name) {
  var _useContext = Object(external_React_["useContext"])(context_SlotFillContext),
      getSlot = _useContext.getSlot,
      subscribe = _useContext.subscribe;

  var _useState = Object(external_React_["useState"])(getSlot(name)),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      slot = _useState2[0],
      setSlot = _useState2[1];

  Object(external_React_["useEffect"])(function () {
    setSlot(getSlot(name));
    var unsubscribe = subscribe(function () {
      setSlot(getSlot(name));
    });
    return unsubscribe;
  }, [name]);
  return slot;
};
/* harmony default export */ var build_module_slot_fill_context = (context_SlotFillProvider);

//# sourceMappingURL=context.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/slot.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var slot_SlotComponent =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(SlotComponent, _Component);

  function SlotComponent() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, SlotComponent);

    _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(SlotComponent).apply(this, arguments));
    _this.bindNode = _this.bindNode.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(esm_createClass["a" /* default */])(SlotComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var registerSlot = this.props.registerSlot;
      registerSlot(this.props.name, this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unregisterSlot = this.props.unregisterSlot;
      unregisterSlot(this.props.name, this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          name = _this$props.name,
          unregisterSlot = _this$props.unregisterSlot,
          registerSlot = _this$props.registerSlot;

      if (prevProps.name !== name) {
        unregisterSlot(prevProps.name);
        registerSlot(name, this);
      }
    }
  }, {
    key: "bindNode",
    value: function bindNode(node) {
      this.node = node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          name = _this$props2.name,
          _this$props2$fillProp = _this$props2.fillProps,
          fillProps = _this$props2$fillProp === void 0 ? {} : _this$props2$fillProp,
          getFills = _this$props2.getFills;
      var fills = Object(external_lodash_["map"])(getFills(name, this), function (fill) {
        var fillKey = fill.occurrence;
        var fillChildren = Object(external_lodash_["isFunction"])(fill.children) ? fill.children(fillProps) : fill.children;
        return external_React_["Children"].map(fillChildren, function (child, childIndex) {
          if (!child || Object(external_lodash_["isString"])(child)) {
            return child;
          }

          var childKey = "".concat(fillKey, "---").concat(child.key || childIndex);
          return Object(external_React_["cloneElement"])(child, {
            key: childKey
          });
        });
      }).filter( // In some cases fills are rendered only when some conditions apply.
      // This ensures that we only use non-empty fills when rendering, i.e.,
      // it allows us to render wrappers only when the fills are actually present.
      Object(external_lodash_["negate"])(utils_isEmptyElement));
      return Object(external_React_["createElement"])(external_React_["Fragment"], null, Object(external_lodash_["isFunction"])(children) ? children(fills) : fills);
    }
  }]);

  return SlotComponent;
}(external_React_["Component"]);

var slot_Slot = function Slot(props) {
  return Object(external_React_["createElement"])(context_Consumer, null, function (_ref) {
    var registerSlot = _ref.registerSlot,
        unregisterSlot = _ref.unregisterSlot,
        getFills = _ref.getFills;
    return Object(external_React_["createElement"])(slot_SlotComponent, Object(esm_extends["a" /* default */])({}, props, {
      registerSlot: registerSlot,
      unregisterSlot: unregisterSlot,
      getFills: getFills
    }));
  });
};

/* harmony default export */ var slot_fill_slot = (slot_Slot);
//# sourceMappingURL=slot.js.map
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/fill.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var occurrences = 0;

function fill_FillComponent(_ref) {
  var name = _ref.name,
      children = _ref.children,
      registerFill = _ref.registerFill,
      unregisterFill = _ref.unregisterFill;
  var slot = context_useSlot(name);
  var ref = Object(external_React_["useRef"])({
    name: name,
    children: children
  });

  if (!ref.current.occurrence) {
    ref.current.occurrence = ++occurrences;
  }

  Object(external_React_["useLayoutEffect"])(function () {
    registerFill(name, ref.current);
    return function () {
      return unregisterFill(name, ref.current);
    };
  }, []);
  Object(external_React_["useLayoutEffect"])(function () {
    ref.current.children = children;

    if (slot) {
      slot.forceUpdate();
    }
  }, [children]);
  Object(external_React_["useLayoutEffect"])(function () {
    if (name === ref.current.name) {
      // ignore initial effect
      return;
    }

    unregisterFill(ref.current.name, ref.current);
    ref.current.name = name;
    registerFill(name, ref.current);
  }, [name]);

  if (!slot || !slot.node) {
    return null;
  } // If a function is passed as a child, provide it with the fillProps.


  if (Object(external_lodash_["isFunction"])(children)) {
    children = children(slot.props.fillProps);
  }

  return Object(react_dom["createPortal"])(children, slot.node);
}

var fill_Fill = function Fill(props) {
  return Object(external_React_["createElement"])(context_Consumer, null, function (_ref2) {
    var registerFill = _ref2.registerFill,
        unregisterFill = _ref2.unregisterFill;
    return Object(external_React_["createElement"])(fill_FillComponent, Object(esm_extends["a" /* default */])({}, props, {
      registerFill: registerFill,
      unregisterFill: unregisterFill
    }));
  });
};

/* harmony default export */ var slot_fill_fill = (fill_Fill);
//# sourceMappingURL=fill.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/is-shallow-equal/index.js
var is_shallow_equal = __webpack_require__(31);
var is_shallow_equal_default = /*#__PURE__*/__webpack_require__.n(is_shallow_equal);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot.js




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function bubbles_virtually_slot_Slot(_ref) {
  var name = _ref.name,
      _ref$fillProps = _ref.fillProps,
      fillProps = _ref$fillProps === void 0 ? {} : _ref$fillProps,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["name", "fillProps", "as"]);

  var registry = Object(external_React_["useContext"])(slot_fill_context);
  var ref = Object(external_React_["useRef"])();
  var slot = use_slot_useSlot(name);
  Object(external_React_["useLayoutEffect"])(function () {
    registry.registerSlot(name, ref, fillProps);
    return function () {
      registry.unregisterSlot(name, ref);
    }; // We are not including fillProps in the deps because we don't want to
    // unregister and register the slot whenever fillProps change, which would
    // cause the fill to be re-mounted. We are only considering the initial value
    // of fillProps.
  }, [registry.registerSlot, registry.unregisterSlot, name]); // fillProps may be an update that interact with the layout, so
  // we useLayoutEffect

  Object(external_React_["useLayoutEffect"])(function () {
    if (slot.fillProps && !is_shallow_equal_default()(slot.fillProps, fillProps)) {
      registry.updateSlot(name, ref, fillProps);
    }
  });
  return Object(external_React_["createElement"])(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, props));
}
//# sourceMappingURL=slot.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/fill.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function bubbles_virtually_fill_Fill(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var slot = use_slot_useSlot(name);
  var ref = Object(external_React_["useRef"])();
  Object(external_React_["useEffect"])(function () {
    // We register fills so we can keep track of their existance.
    // Some Slot implementations need to know if there're already fills
    // registered so they can choose to render themselves or not.
    slot.registerFill(ref);
    return function () {
      slot.unregisterFill(ref);
    };
  }, [slot.registerFill, slot.unregisterFill]);

  if (!slot.ref || !slot.ref.current) {
    return null;
  }

  if (typeof children === 'function') {
    children = children(slot.fillProps);
  }

  return Object(react_dom["createPortal"])(children, slot.ref.current);
}
//# sourceMappingURL=fill.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/index.js




/**
 * Internal dependencies
 */






function slot_fill_Slot(_ref) {
  var bubblesVirtually = _ref.bubblesVirtually,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["bubblesVirtually"]);

  if (bubblesVirtually) {
    return Object(external_React_["createElement"])(bubbles_virtually_slot_Slot, props);
  }

  return Object(external_React_["createElement"])(slot_fill_slot, props);
}
function slot_fill_Fill(props) {
  // We're adding both Fills here so they can register themselves before
  // their respective slot has been registered. Only the Fill that has a slot
  // will render. The other one will return null.
  return Object(external_React_["createElement"])(external_React_["Fragment"], null, Object(external_React_["createElement"])(slot_fill_fill, props), Object(external_React_["createElement"])(bubbles_virtually_fill_Fill, props));
}
function slot_fill_createSlotFill(name) {
  var FillComponent = function FillComponent(props) {
    return Object(external_React_["createElement"])(slot_fill_Fill, Object(esm_extends["a" /* default */])({
      name: name
    }, props));
  };

  FillComponent.displayName = name + 'Fill';

  var SlotComponent = function SlotComponent(props) {
    return Object(external_React_["createElement"])(slot_fill_Slot, Object(esm_extends["a" /* default */])({
      name: name
    }, props));
  };

  SlotComponent.displayName = name + 'Slot';
  return {
    Fill: FillComponent,
    Slot: SlotComponent
  };
}

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/animate/index.js



/**
 * External dependencies
 */


function Animate(_ref) {
  var type = _ref.type,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      children = _ref.children;

  if (type === 'appear') {
    var _classnames;

    var _options$origin = options.origin,
        origin = _options$origin === void 0 ? 'top' : _options$origin;

    var _origin$split = origin.split(' '),
        _origin$split2 = Object(esm_slicedToArray["a" /* default */])(_origin$split, 2),
        yAxis = _origin$split2[0],
        _origin$split2$ = _origin$split2[1],
        xAxis = _origin$split2$ === void 0 ? 'center' : _origin$split2$;

    return children({
      className: classnames_default()('components-animate__appear', (_classnames = {}, Object(esm_defineProperty["a" /* default */])(_classnames, 'is-from-' + xAxis, xAxis !== 'center'), Object(esm_defineProperty["a" /* default */])(_classnames, 'is-from-' + yAxis, yAxis !== 'middle'), _classnames))
    });
  }

  if (type === 'slide-in') {
    var _options$origin2 = options.origin,
        _origin = _options$origin2 === void 0 ? 'left' : _options$origin2;

    return children({
      className: classnames_default()('components-animate__slide-in', 'is-from-' + _origin)
    });
  }

  if (type === 'loading') {
    return children({
      className: classnames_default()('components-animate__loading')
    });
  }

  return children({});
}

/* harmony default export */ var build_module_animate = (Animate);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/popover/index.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */










var FocusManaged = with_constrained_tabbing(with_focus_return(function (_ref) {
  var children = _ref.children;
  return children;
}));
/**
 * Name of slot in which popover should fill.
 *
 * @type {string}
 */

var SLOT_NAME = 'Popover';

function computeAnchorRect(anchorRefFallback, anchorRect, getAnchorRect) {
  var anchorRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var shouldAnchorIncludePadding = arguments.length > 4 ? arguments[4] : undefined;

  if (anchorRect) {
    return anchorRect;
  }

  if (getAnchorRect) {
    if (!anchorRefFallback.current) {
      return;
    }

    return getAnchorRect(anchorRefFallback.current);
  }

  if (anchorRef !== false) {
    if (!anchorRef) {
      return;
    }

    if (anchorRef instanceof window.Range) {
      return getRectangleFromRange(anchorRef);
    }

    if (anchorRef instanceof window.Element) {
      var _rect2 = anchorRef.getBoundingClientRect();

      if (shouldAnchorIncludePadding) {
        return _rect2;
      }

      return withoutPadding(_rect2, anchorRef);
    }

    var top = anchorRef.top,
        bottom = anchorRef.bottom;
    var topRect = top.getBoundingClientRect();
    var bottomRect = bottom.getBoundingClientRect();

    var _rect = new window.DOMRect(topRect.left, topRect.top, topRect.width, bottomRect.bottom - topRect.top);

    if (shouldAnchorIncludePadding) {
      return _rect;
    }

    return withoutPadding(_rect, anchorRef);
  }

  if (!anchorRefFallback.current) {
    return;
  }

  var parentNode = anchorRefFallback.current.parentNode;
  var rect = parentNode.getBoundingClientRect();

  if (shouldAnchorIncludePadding) {
    return rect;
  }

  return withoutPadding(rect, parentNode);
}

function withoutPadding(rect, element) {
  var _window$getComputedSt = window.getComputedStyle(element),
      paddingTop = _window$getComputedSt.paddingTop,
      paddingBottom = _window$getComputedSt.paddingBottom,
      paddingLeft = _window$getComputedSt.paddingLeft,
      paddingRight = _window$getComputedSt.paddingRight;

  var top = paddingTop ? parseInt(paddingTop, 10) : 0;
  var bottom = paddingBottom ? parseInt(paddingBottom, 10) : 0;
  var left = paddingLeft ? parseInt(paddingLeft, 10) : 0;
  var right = paddingRight ? parseInt(paddingRight, 10) : 0;
  return {
    x: rect.left + left,
    y: rect.top + top,
    width: rect.width - left - right,
    height: rect.height - top - bottom,
    left: rect.left + left,
    right: rect.right - right,
    top: rect.top + top,
    bottom: rect.bottom - bottom
  };
}
/**
 * Hook used to focus the first tabbable element on mount.
 *
 * @param {boolean|string} focusOnMount Focus on mount mode.
 * @param {Object}         contentRef   Reference to the popover content element.
 */


function useFocusContentOnMount(focusOnMount, contentRef) {
  // Focus handling
  Object(external_React_["useEffect"])(function () {
    /*
     * Without the setTimeout, the dom node is not being focused. Related:
     * https://stackoverflow.com/questions/35522220/react-ref-with-focus-doesnt-work-without-settimeout-my-example
     *
     * TODO: Treat the cause, not the symptom.
     */
    var focusTimeout = setTimeout(function () {
      if (!focusOnMount || !contentRef.current) {
        return;
      }

      if (focusOnMount === 'firstElement') {
        // Find first tabbable node within content and shift focus, falling
        // back to the popover panel itself.
        var firstTabbable = build_module_focus.tabbable.find(contentRef.current)[0];

        if (firstTabbable) {
          firstTabbable.focus();
        } else {
          contentRef.current.focus();
        }

        return;
      }

      if (focusOnMount === 'container') {
        // Focus the popover panel itself so items in the popover are easily
        // accessed via keyboard navigation.
        contentRef.current.focus();
      }
    }, 0);
    return function () {
      return clearTimeout(focusTimeout);
    };
  }, []);
}
/**
 * Sets or removes an element attribute.
 *
 * @param {Element} element The element to modify.
 * @param {string}  name    The attribute name to set or remove.
 * @param {?string} value   The value to set. A falsy value will remove the
 *                          attribute.
 */


function setAttribute(element, name, value) {
  if (!value) {
    if (element.hasAttribute(name)) {
      element.removeAttribute(name);
    }
  } else if (element.getAttribute(name) !== value) {
    element.setAttribute(name, value);
  }
}
/**
 * Sets or removes an element style property.
 *
 * @param {Element} element  The element to modify.
 * @param {string}  property The property to set or remove.
 * @param {?string} value    The value to set. A falsy value will remove the
 *                           property.
 */


function setStyle(element, property) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (element.style[property] !== value) {
    element.style[property] = value;
  }
}
/**
 * Sets or removes an element class.
 *
 * @param {Element} element The element to modify.
 * @param {string}  name    The class to set or remove.
 * @param {boolean} toggle  True to set the class, false to remove.
 */


function setClass(element, name, toggle) {
  if (toggle) {
    if (!element.classList.contains(name)) {
      element.classList.add(name);
    }
  } else if (element.classList.contains(name)) {
    element.classList.remove(name);
  }
}

var popover_Popover = function Popover(_ref2) {
  var headerTitle = _ref2.headerTitle,
      onClose = _ref2.onClose,
      onKeyDown = _ref2.onKeyDown,
      children = _ref2.children,
      className = _ref2.className,
      _ref2$noArrow = _ref2.noArrow,
      noArrow = _ref2$noArrow === void 0 ? false : _ref2$noArrow,
      _ref2$position = _ref2.position,
      position = _ref2$position === void 0 ? 'top' : _ref2$position,
      range = _ref2.range,
      _ref2$focusOnMount = _ref2.focusOnMount,
      focusOnMount = _ref2$focusOnMount === void 0 ? 'firstElement' : _ref2$focusOnMount,
      anchorRef = _ref2.anchorRef,
      shouldAnchorIncludePadding = _ref2.shouldAnchorIncludePadding,
      anchorRect = _ref2.anchorRect,
      getAnchorRect = _ref2.getAnchorRect,
      expandOnMobile = _ref2.expandOnMobile,
      _ref2$animate = _ref2.animate,
      animate = _ref2$animate === void 0 ? true : _ref2$animate,
      onClickOutside = _ref2.onClickOutside,
      onFocusOutside = _ref2.onFocusOutside,
      __unstableSticky = _ref2.__unstableSticky,
      _ref2$__unstableSlotN = _ref2.__unstableSlotName,
      __unstableSlotName = _ref2$__unstableSlotN === void 0 ? SLOT_NAME : _ref2$__unstableSlotN,
      __unstableAllowVerticalSubpixelPosition = _ref2.__unstableAllowVerticalSubpixelPosition,
      __unstableAllowHorizontalSubpixelPosition = _ref2.__unstableAllowHorizontalSubpixelPosition,
      _ref2$__unstableFixed = _ref2.__unstableFixedPosition,
      __unstableFixedPosition = _ref2$__unstableFixed === void 0 ? true : _ref2$__unstableFixed,
      contentProps = Object(esm_objectWithoutProperties["a" /* default */])(_ref2, ["headerTitle", "onClose", "onKeyDown", "children", "className", "noArrow", "position", "range", "focusOnMount", "anchorRef", "shouldAnchorIncludePadding", "anchorRect", "getAnchorRect", "expandOnMobile", "animate", "onClickOutside", "onFocusOutside", "__unstableSticky", "__unstableSlotName", "__unstableAllowVerticalSubpixelPosition", "__unstableAllowHorizontalSubpixelPosition", "__unstableFixedPosition"]);

  var anchorRefFallback = Object(external_React_["useRef"])(null);
  var contentRef = Object(external_React_["useRef"])(null);
  var containerRef = Object(external_React_["useRef"])();
  var contentRect = Object(external_React_["useRef"])();
  var isMobileViewport = use_viewport_match('medium', '<');

  var _useState = Object(external_React_["useState"])(),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      animateOrigin = _useState2[0],
      setAnimateOrigin = _useState2[1];

  var slot = use_slot_useSlot(__unstableSlotName);
  var isExpanded = expandOnMobile && isMobileViewport;
  noArrow = isExpanded || noArrow;
  Object(external_React_["useEffect"])(function () {
    if (isExpanded) {
      setClass(containerRef.current, 'is-without-arrow', noArrow);
      setAttribute(containerRef.current, 'data-x-axis');
      setAttribute(containerRef.current, 'data-y-axis');
      setStyle(containerRef.current, 'top');
      setStyle(containerRef.current, 'left');
      setStyle(contentRef.current, 'maxHeight');
      setStyle(contentRef.current, 'maxWidth');
      setStyle(containerRef.current, 'position');
      return;
    }

    var refresh = function refresh() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          subpixels = _ref3.subpixels;

      if (!containerRef.current || !contentRef.current) {
        return;
      }

      var anchor = computeAnchorRect(anchorRefFallback, anchorRect, getAnchorRect, anchorRef, shouldAnchorIncludePadding);

      if (!anchor) {
        return;
      }

      if (!contentRect.current) {
        contentRect.current = contentRef.current.getBoundingClientRect();
      }

      var relativeOffsetTop = 0; // If there is a positioned ancestor element that is not the body,
      // subtract the position from the anchor rect. If the position of
      // the popover is fixed, the offset parent is null or the body
      // element, in which case the position is relative to the viewport.
      // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent

      if (!__unstableFixedPosition) {
        setStyle(containerRef.current, 'position', 'absolute');
        var offsetParent = containerRef.current.offsetParent;
        var offsetParentRect = offsetParent.getBoundingClientRect();
        relativeOffsetTop = offsetParentRect.top;
        anchor = new window.DOMRect(anchor.left - offsetParentRect.left, anchor.top - offsetParentRect.top, anchor.width, anchor.height);
      } else {
        setStyle(containerRef.current, 'position');
      }

      var _computePopoverPositi = computePopoverPosition(anchor, contentRect.current, position, __unstableSticky, containerRef.current, relativeOffsetTop),
          popoverTop = _computePopoverPositi.popoverTop,
          popoverLeft = _computePopoverPositi.popoverLeft,
          xAxis = _computePopoverPositi.xAxis,
          yAxis = _computePopoverPositi.yAxis,
          contentHeight = _computePopoverPositi.contentHeight,
          contentWidth = _computePopoverPositi.contentWidth;

      if (typeof popoverTop === 'number' && typeof popoverLeft === 'number') {
        if (subpixels && __unstableAllowVerticalSubpixelPosition) {
          setStyle(containerRef.current, 'left', popoverLeft + 'px');
          setStyle(containerRef.current, 'top');
          setStyle(containerRef.current, 'transform', "translateY(".concat(popoverTop, "px)"));
        } else if (subpixels && __unstableAllowHorizontalSubpixelPosition) {
          setStyle(containerRef.current, 'top', popoverTop + 'px');
          setStyle(containerRef.current, 'left');
          setStyle(containerRef.current, 'transform', "translate(".concat(popoverLeft, "px)"));
        } else {
          setStyle(containerRef.current, 'top', popoverTop + 'px');
          setStyle(containerRef.current, 'left', popoverLeft + 'px');
          setStyle(containerRef.current, 'transform');
        }
      }

      setClass(containerRef.current, 'is-without-arrow', noArrow || xAxis === 'center' && yAxis === 'middle');
      setAttribute(containerRef.current, 'data-x-axis', xAxis);
      setAttribute(containerRef.current, 'data-y-axis', yAxis);
      setStyle(contentRef.current, 'maxHeight', typeof contentHeight === 'number' ? contentHeight + 'px' : '');
      setStyle(contentRef.current, 'maxWidth', typeof contentWidth === 'number' ? contentWidth + 'px' : ''); // Compute the animation position

      var yAxisMapping = {
        top: 'bottom',
        bottom: 'top'
      };
      var xAxisMapping = {
        left: 'right',
        right: 'left'
      };
      var animateYAxis = yAxisMapping[yAxis] || 'middle';
      var animateXAxis = xAxisMapping[xAxis] || 'center';
      setAnimateOrigin(animateXAxis + ' ' + animateYAxis);
    }; // Height may still adjust between now and the next tick.


    var timeoutId = window.setTimeout(refresh);
    /*
     * There are sometimes we need to reposition or resize the popover that
     * are not handled by the resize/scroll window events (i.e. CSS changes
     * in the layout that changes the position of the anchor).
     *
     * For these situations, we refresh the popover every 0.5s
     */

    var intervalHandle = window.setInterval(refresh, 500);
    var rafId;

    var refreshOnAnimationFrame = function refreshOnAnimationFrame() {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(refresh);
    }; // Sometimes a click trigger a layout change that affects the popover
    // position. This is an opportunity to immediately refresh rather than
    // at the interval.


    window.addEventListener('click', refreshOnAnimationFrame);
    window.addEventListener('resize', refresh);
    window.addEventListener('scroll', refresh, true);
    var observer;
    var observeElement = __unstableAllowVerticalSubpixelPosition || __unstableAllowHorizontalSubpixelPosition;

    if (observeElement) {
      observer = new window.MutationObserver(function () {
        return refresh({
          subpixels: true
        });
      });
      observer.observe(observeElement, {
        attributes: true
      });
    }

    return function () {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalHandle);
      window.removeEventListener('resize', refresh);
      window.removeEventListener('scroll', refresh, true);
      window.removeEventListener('click', refreshOnAnimationFrame);
      window.cancelAnimationFrame(rafId);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [isExpanded, anchorRect, getAnchorRect, anchorRef, shouldAnchorIncludePadding, position, __unstableSticky, __unstableAllowVerticalSubpixelPosition, __unstableAllowHorizontalSubpixelPosition]);
  useFocusContentOnMount(focusOnMount, contentRef); // Event handlers

  var maybeClose = function maybeClose(event) {
    // Close on escape
    if (event.keyCode === keycodes_build_module["b" /* ESCAPE */] && onClose) {
      event.stopPropagation();
      onClose();
    } // Preserve original content prop behavior


    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  /**
   * Shims an onFocusOutside callback to be compatible with a deprecated
   * onClickOutside prop function, if provided.
   *
   * @param {FocusEvent} event Focus event from onFocusOutside.
   */


  function handleOnFocusOutside(event) {
    // Defer to given `onFocusOutside` if specified. Call `onClose` only if
    // both `onFocusOutside` and `onClickOutside` are unspecified. Doing so
    // assures backwards-compatibility for prior `onClickOutside` default.
    if (onFocusOutside) {
      onFocusOutside(event);
      return;
    } else if (!onClickOutside) {
      if (onClose) {
        onClose();
      }

      return;
    } // Simulate MouseEvent using FocusEvent#relatedTarget as emulated click
    // target. MouseEvent constructor is unsupported in Internet Explorer.


    var clickEvent;

    try {
      clickEvent = new window.MouseEvent('click');
    } catch (error) {
      clickEvent = document.createEvent('MouseEvent');
      clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }

    Object.defineProperty(clickEvent, 'target', {
      get: function get() {
        return event.relatedTarget;
      }
    });
    Object(build_module["a" /* default */])('Popover onClickOutside prop', {
      alternative: 'onFocusOutside'
    });
    onClickOutside(clickEvent);
  } // Disable reason: We care to capture the _bubbled_ events from inputs
  // within popover as inferring close intent.


  var content = Object(external_React_["createElement"])(detect_outside, {
    onFocusOutside: handleOnFocusOutside
  }, Object(external_React_["createElement"])(build_module_animate, {
    type: animate && animateOrigin ? 'appear' : null,
    options: {
      origin: animateOrigin
    }
  }, function (_ref4) {
    var animateClassName = _ref4.className;
    return Object(external_React_["createElement"])(isolated_event_container, Object(esm_extends["a" /* default */])({
      className: classnames_default()('components-popover', className, animateClassName, {
        'is-expanded': isExpanded,
        'is-without-arrow': noArrow
      })
    }, contentProps, {
      onKeyDown: maybeClose,
      ref: containerRef
    }), isExpanded && Object(external_React_["createElement"])(scroll_lock, null), isExpanded && Object(external_React_["createElement"])("div", {
      className: "components-popover__header"
    }, Object(external_React_["createElement"])("span", {
      className: "components-popover__header-title"
    }, headerTitle), Object(external_React_["createElement"])(build_module_button, {
      className: "components-popover__close",
      icon: library_close,
      onClick: onClose
    })), Object(external_React_["createElement"])("div", {
      ref: contentRef,
      className: "components-popover__content",
      tabIndex: "-1"
    }, children));
  })); // Apply focus to element as long as focusOnMount is truthy; false is
  // the only "disabled" value.

  if (focusOnMount) {
    content = Object(external_React_["createElement"])(FocusManaged, null, content);
  }

  if (slot.ref) {
    content = Object(external_React_["createElement"])(slot_fill_Fill, {
      name: __unstableSlotName
    }, content);
  }

  if (anchorRef || anchorRect) {
    return content;
  }

  return Object(external_React_["createElement"])("span", {
    ref: anchorRefFallback
  }, content);
};

var PopoverContainer = popover_Popover;

PopoverContainer.Slot = function (_ref5) {
  var _ref5$name = _ref5.name,
      name = _ref5$name === void 0 ? SLOT_NAME : _ref5$name;
  return Object(external_React_["createElement"])(slot_fill_Slot, {
    bubblesVirtually: true,
    name: name
  });
};

/* harmony default export */ var popover = (PopoverContainer);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/shortcut/index.js


/**
 * External dependencies
 */


function Shortcut(_ref) {
  var shortcut = _ref.shortcut,
      className = _ref.className;

  if (!shortcut) {
    return null;
  }

  var displayText;
  var ariaLabel;

  if (Object(external_lodash_["isString"])(shortcut)) {
    displayText = shortcut;
  }

  if (Object(external_lodash_["isObject"])(shortcut)) {
    displayText = shortcut.display;
    ariaLabel = shortcut.ariaLabel;
  }

  return Object(external_React_["createElement"])("span", {
    className: className,
    "aria-label": ariaLabel
  }, displayText);
}

/* harmony default export */ var build_module_shortcut = (Shortcut);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/tooltip/index.js







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Time over children to wait before showing tooltip
 *
 * @type {number}
 */

var TOOLTIP_DELAY = 700;

var tooltip_Tooltip =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(Tooltip, _Component);

  function Tooltip() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, Tooltip);

    _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(Tooltip).apply(this, arguments));
    _this.delayedSetIsOver = Object(external_lodash_["debounce"])(function (isOver) {
      return _this.setState({
        isOver: isOver
      });
    }, TOOLTIP_DELAY);
    /**
     * Prebound `isInMouseDown` handler, created as a constant reference to
     * assure ability to remove in component unmount.
     *
     * @type {Function}
     */

    _this.cancelIsMouseDown = _this.createSetIsMouseDown(false);
    /**
     * Whether a the mouse is currently pressed, used in determining whether
     * to handle a focus event as displaying the tooltip immediately.
     *
     * @type {boolean}
     */

    _this.isInMouseDown = false;
    _this.state = {
      isOver: false
    };
    return _this;
  }

  Object(esm_createClass["a" /* default */])(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.delayedSetIsOver.cancel();
      document.removeEventListener('mouseup', this.cancelIsMouseDown);
    }
  }, {
    key: "emitToChild",
    value: function emitToChild(eventName, event) {
      var children = this.props.children;

      if (external_React_["Children"].count(children) !== 1) {
        return;
      }

      var child = external_React_["Children"].only(children);

      if (typeof child.props[eventName] === 'function') {
        child.props[eventName](event);
      }
    }
  }, {
    key: "createToggleIsOver",
    value: function createToggleIsOver(eventName, isDelayed) {
      var _this2 = this;

      return function (event) {
        // Preserve original child callback behavior
        _this2.emitToChild(eventName, event); // Mouse events behave unreliably in React for disabled elements,
        // firing on mouseenter but not mouseleave.  Further, the default
        // behavior for disabled elements in some browsers is to ignore
        // mouse events. Don't bother trying to to handle them.
        //
        // See: https://github.com/facebook/react/issues/4251


        if (event.currentTarget.disabled) {
          return;
        } // A focus event will occur as a result of a mouse click, but it
        // should be disambiguated between interacting with the button and
        // using an explicit focus shift as a cue to display the tooltip.


        if ('focus' === event.type && _this2.isInMouseDown) {
          return;
        } // Needed in case unsetting is over while delayed set pending, i.e.
        // quickly blur/mouseleave before delayedSetIsOver is called


        _this2.delayedSetIsOver.cancel();

        var isOver = Object(external_lodash_["includes"])(['focus', 'mouseenter'], event.type);

        if (isOver === _this2.state.isOver) {
          return;
        }

        if (isDelayed) {
          _this2.delayedSetIsOver(isOver);
        } else {
          _this2.setState({
            isOver: isOver
          });
        }
      };
    }
    /**
     * Creates an event callback to handle assignment of the `isInMouseDown`
     * instance property in response to a `mousedown` or `mouseup` event.
     *
     * @param {boolean} isMouseDown Whether handler is to be created for the
     *                              `mousedown` event, as opposed to `mouseup`.
     *
     * @return {Function} Event callback handler.
     */

  }, {
    key: "createSetIsMouseDown",
    value: function createSetIsMouseDown(isMouseDown) {
      var _this3 = this;

      return function (event) {
        // Preserve original child callback behavior
        _this3.emitToChild(isMouseDown ? 'onMouseDown' : 'onMouseUp', event); // On mouse down, the next `mouseup` should revert the value of the
        // instance property and remove its own event handler. The bind is
        // made on the document since the `mouseup` might not occur within
        // the bounds of the element.


        document[isMouseDown ? 'addEventListener' : 'removeEventListener']('mouseup', _this3.cancelIsMouseDown);
        _this3.isInMouseDown = isMouseDown;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          position = _this$props.position,
          text = _this$props.text,
          shortcut = _this$props.shortcut;

      if (external_React_["Children"].count(children) !== 1) {
        if (false) {}

        return children;
      }

      var child = external_React_["Children"].only(children);
      var isOver = this.state.isOver;
      return Object(external_React_["cloneElement"])(child, {
        onMouseEnter: this.createToggleIsOver('onMouseEnter', true),
        onMouseLeave: this.createToggleIsOver('onMouseLeave'),
        onClick: this.createToggleIsOver('onClick'),
        onFocus: this.createToggleIsOver('onFocus'),
        onBlur: this.createToggleIsOver('onBlur'),
        onMouseDown: this.createSetIsMouseDown(true),
        children: concatChildren(child.props.children, isOver && Object(external_React_["createElement"])(popover, {
          focusOnMount: false,
          position: position,
          className: "components-tooltip",
          "aria-hidden": "true",
          animate: false
        }, text, Object(external_React_["createElement"])(build_module_shortcut, {
          className: "components-tooltip__shortcut",
          shortcut: shortcut
        })))
      });
    }
  }]);

  return Tooltip;
}(external_React_["Component"]);

/* harmony default export */ var tooltip = (tooltip_Tooltip);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/dashicon/index.js









/* !!!
IF YOU ARE EDITING dashicon/index.jsx
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE DASHICONS REPO!
DO NOT EDIT THAT FILE! EDIT index-header.jsx and index-footer.jsx instead
OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */

/**
 * WordPress dependencies
 */



var dashicon_Dashicon =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(Dashicon, _Component);

  function Dashicon() {
    Object(esm_classCallCheck["a" /* default */])(this, Dashicon);

    return Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(Dashicon).apply(this, arguments));
  }

  Object(esm_createClass["a" /* default */])(Dashicon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 20 : _this$props$size,
          className = _this$props.className,
          extraProps = Object(esm_objectWithoutProperties["a" /* default */])(_this$props, ["icon", "size", "className"]);

      var path;

      switch (icon) {
        case 'admin-appearance':
          path = 'M14.48 11.06L7.41 3.99l1.5-1.5c.5-.56 2.3-.47 3.51.32 1.21.8 1.43 1.28 2.91 2.1 1.18.64 2.45 1.26 4.45.85zm-.71.71L6.7 4.7 4.93 6.47c-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39.39 1.03 0 1.42-.6.6-1.43 1.11-2.21 1.69-.35.26-.7.53-1.01.84C1.43 14.23.4 16.08 1.4 17.07c.99 1 2.84-.03 4.18-1.36.31-.31.58-.66.85-1.02.57-.78 1.08-1.61 1.69-2.21.39-.39 1.02-.39 1.41 0l1.06 1.06c.39.39 1.02.39 1.41 0z';
          break;

        case 'admin-collapse':
          path = 'M10 2.16c4.33 0 7.84 3.51 7.84 7.84s-3.51 7.84-7.84 7.84S2.16 14.33 2.16 10 5.71 2.16 10 2.16zm2 11.72V6.12L6.18 9.97z';
          break;

        case 'admin-comments':
          path = 'M5 2h9c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-2l-5 5v-5H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z';
          break;

        case 'admin-customizer':
          path = 'M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z';
          break;

        case 'admin-generic':
          path = 'M18 12h-2.18c-.17.7-.44 1.35-.81 1.93l1.54 1.54-2.1 2.1-1.54-1.54c-.58.36-1.23.63-1.91.79V19H8v-2.18c-.68-.16-1.33-.43-1.91-.79l-1.54 1.54-2.12-2.12 1.54-1.54c-.36-.58-.63-1.23-.79-1.91H1V9.03h2.17c.16-.7.44-1.35.8-1.94L2.43 5.55l2.1-2.1 1.54 1.54c.58-.37 1.24-.64 1.93-.81V2h3v2.18c.68.16 1.33.43 1.91.79l1.54-1.54 2.12 2.12-1.54 1.54c.36.59.64 1.24.8 1.94H18V12zm-8.5 1.5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z';
          break;

        case 'admin-home':
          path = 'M16 8.5l1.53 1.53-1.06 1.06L10 4.62l-6.47 6.47-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z';
          break;

        case 'admin-links':
          path = 'M17.74 2.76c1.68 1.69 1.68 4.41 0 6.1l-1.53 1.52c-1.12 1.12-2.7 1.47-4.14 1.09l2.62-2.61.76-.77.76-.76c.84-.84.84-2.2 0-3.04-.84-.85-2.2-.85-3.04 0l-.77.76-3.38 3.38c-.37-1.44-.02-3.02 1.1-4.14l1.52-1.53c1.69-1.68 4.42-1.68 6.1 0zM8.59 13.43l5.34-5.34c.42-.42.42-1.1 0-1.52-.44-.43-1.13-.39-1.53 0l-5.33 5.34c-.42.42-.42 1.1 0 1.52.44.43 1.13.39 1.52 0zm-.76 2.29l4.14-4.15c.38 1.44.03 3.02-1.09 4.14l-1.52 1.53c-1.69 1.68-4.41 1.68-6.1 0-1.68-1.68-1.68-4.42 0-6.1l1.53-1.52c1.12-1.12 2.7-1.47 4.14-1.1l-4.14 4.15c-.85.84-.85 2.2 0 3.05.84.84 2.2.84 3.04 0z';
          break;

        case 'admin-media':
          path = 'M13 11V4c0-.55-.45-1-1-1h-1.67L9 1H5L3.67 3H2c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h10c.55 0 1-.45 1-1zM7 4.5c1.38 0 2.5 1.12 2.5 2.5S8.38 9.5 7 9.5 4.5 8.38 4.5 7 5.62 4.5 7 4.5zM14 6h5v10.5c0 1.38-1.12 2.5-2.5 2.5S14 17.88 14 16.5s1.12-2.5 2.5-2.5c.17 0 .34.02.5.05V9h-3V6zm-4 8.05V13h2v3.5c0 1.38-1.12 2.5-2.5 2.5S7 17.88 7 16.5 8.12 14 9.5 14c.17 0 .34.02.5.05z';
          break;

        case 'admin-multisite':
          path = 'M14.27 6.87L10 3.14 5.73 6.87 5 6.14l5-4.38 5 4.38zM14 8.42l-4.05 3.43L6 8.38v-.74l4-3.5 4 3.5v.78zM11 9.7V8H9v1.7h2zm-1.73 4.03L5 10 .73 13.73 0 13l5-4.38L10 13zm10 0L15 10l-4.27 3.73L10 13l5-4.38L20 13zM5 11l4 3.5V18H1v-3.5zm10 0l4 3.5V18h-8v-3.5zm-9 6v-2H4v2h2zm10 0v-2h-2v2h2z';
          break;

        case 'admin-network':
          path = 'M16.95 2.58c1.96 1.95 1.96 5.12 0 7.07-1.51 1.51-3.75 1.84-5.59 1.01l-1.87 3.31-2.99.31L5 18H2l-1-2 7.95-7.69c-.92-1.87-.62-4.18.93-5.73 1.95-1.96 5.12-1.96 7.07 0zm-2.51 3.79c.74 0 1.33-.6 1.33-1.34 0-.73-.59-1.33-1.33-1.33-.73 0-1.33.6-1.33 1.33 0 .74.6 1.34 1.33 1.34z';
          break;

        case 'admin-page':
          path = 'M6 15V2h10v13H6zm-1 1h8v2H3V5h2v11z';
          break;

        case 'admin-plugins':
          path = 'M13.11 4.36L9.87 7.6 8 5.73l3.24-3.24c.35-.34 1.05-.2 1.56.32.52.51.66 1.21.31 1.55zm-8 1.77l.91-1.12 9.01 9.01-1.19.84c-.71.71-2.63 1.16-3.82 1.16H6.14L4.9 17.26c-.59.59-1.54.59-2.12 0-.59-.58-.59-1.53 0-2.12l1.24-1.24v-3.88c0-1.13.4-3.19 1.09-3.89zm7.26 3.97l3.24-3.24c.34-.35 1.04-.21 1.55.31.52.51.66 1.21.31 1.55l-3.24 3.25z';
          break;

        case 'admin-post':
          path = 'M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z';
          break;

        case 'admin-settings':
          path = 'M18 16V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h13c.55 0 1-.45 1-1zM8 11h1c.55 0 1 .45 1 1s-.45 1-1 1H8v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V13H6c-.55 0-1-.45-1-1s.45-1 1-1h1V5.5c0-.28.22-.5.5-.5s.5.22.5.5V11zm5-2h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V5.5c0-.28.22-.5.5-.5s.5.22.5.5V7h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9z';
          break;

        case 'admin-site-alt':
          path = 'M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm7.5 6.48c-.274.896-.908 1.64-1.75 2.05-.45-1.69-1.658-3.074-3.27-3.75.13-.444.41-.83.79-1.09-.43-.28-1-.42-1.34.07-.53.69 0 1.61.21 2v.14c-.555-.337-.99-.84-1.24-1.44-.966-.03-1.922.208-2.76.69-.087-.565-.032-1.142.16-1.68.733.07 1.453-.23 1.92-.8.46-.52-.13-1.18-.59-1.58h.36c1.36-.01 2.702.335 3.89 1 1.36 1.005 2.194 2.57 2.27 4.26.24 0 .7-.55.91-.92.172.34.32.69.44 1.05zM9 16.84c-2.05-2.08.25-3.75-1-5.24-.92-.85-2.29-.26-3.11-1.23-.282-1.473.267-2.982 1.43-3.93.52-.44 4-1 5.42.22.83.715 1.415 1.674 1.67 2.74.46.035.918-.066 1.32-.29.41 2.98-3.15 6.74-5.73 7.73zM5.15 2.09c.786-.3 1.676-.028 2.16.66-.42.38-.94.63-1.5.72.02-.294.085-.584.19-.86l-.85-.52z';
          break;

        case 'admin-site-alt2':
          path = 'M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm2.92 12.34c0 .35.14.63.36.66.22.03.47-.22.58-.6l.2.08c.718.384 1.07 1.22.84 2-.15.69-.743 1.198-1.45 1.24-.49-1.21-2.11.06-3.56-.22-.612-.154-1.11-.6-1.33-1.19 1.19-.11 2.85-1.73 4.36-1.97zM8 11.27c.918 0 1.695-.68 1.82-1.59.44.54.41 1.324-.07 1.83-.255.223-.594.325-.93.28-.335-.047-.635-.236-.82-.52zm3-.76c.41.39 3-.06 3.52 1.09-.95-.2-2.95.61-3.47-1.08l-.05-.01zM9.73 5.45v.27c-.65-.77-1.33-1.07-1.61-.57-.28.5 1 1.11.76 1.88-.24.77-1.27.56-1.88 1.61-.61 1.05-.49 2.42 1.24 3.67-1.192-.132-2.19-.962-2.54-2.11-.4-1.2-.09-2.26-.78-2.46C4 7.46 3 8.71 3 9.8c-1.26-1.26.05-2.86-1.2-4.18C3.5 1.998 7.644.223 11.44 1.49c-1.1 1.02-1.722 2.458-1.71 3.96z';
          break;

        case 'admin-site-alt3':
          path = 'M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z';
          break;

        case 'admin-site':
          path = 'M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm3.46 11.95c0 1.47-.8 3.3-4.06 4.7.3-4.17-2.52-3.69-3.2-5 .126-1.1.804-2.063 1.8-2.55-1.552-.266-3-.96-4.18-2 .05.47.28.904.64 1.21-.782-.295-1.458-.817-1.94-1.5.977-3.225 3.883-5.482 7.25-5.63-.84 1.38-1.5 4.13 0 5.57C7.23 7 6.26 5 5.41 5.79c-1.13 1.06.33 2.51 3.42 3.08 3.29.59 3.66 1.58 3.63 3.08zm1.34-4c-.32-1.11.62-2.23 1.69-3.14 1.356 1.955 1.67 4.45.84 6.68-.77-1.89-2.17-2.32-2.53-3.57v.03z';
          break;

        case 'admin-tools':
          path = 'M16.68 9.77c-1.34 1.34-3.3 1.67-4.95.99l-5.41 6.52c-.99.99-2.59.99-3.58 0s-.99-2.59 0-3.57l6.52-5.42c-.68-1.65-.35-3.61.99-4.95 1.28-1.28 3.12-1.62 4.72-1.06l-2.89 2.89 2.82 2.82 2.86-2.87c.53 1.58.18 3.39-1.08 4.65zM3.81 16.21c.4.39 1.04.39 1.43 0 .4-.4.4-1.04 0-1.43-.39-.4-1.03-.4-1.43 0-.39.39-.39 1.03 0 1.43z';
          break;

        case 'admin-users':
          path = 'M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81 0 0-.41 3.44-2.68 3.44zm0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z';
          break;

        case 'album':
          path = 'M0 18h10v-.26c1.52.4 3.17.35 4.76-.24 4.14-1.52 6.27-6.12 4.75-10.26-1.43-3.89-5.58-6-9.51-4.98V2H0v16zM9 3v14H1V3h8zm5.45 8.22c-.68 1.35-2.32 1.9-3.67 1.23-.31-.15-.57-.35-.78-.59V8.13c.8-.86 2.11-1.13 3.22-.58 1.35.68 1.9 2.32 1.23 3.67zm-2.75-.82c.22.16.53.12.7-.1.16-.22.12-.53-.1-.7s-.53-.12-.7.1c-.16.21-.12.53.1.7zm3.01 3.67c-1.17.78-2.56.99-3.83.69-.27-.06-.44-.34-.37-.61s.34-.43.62-.36l.17.04c.96.17 1.98-.01 2.86-.59.47-.32.86-.72 1.14-1.18.15-.23.45-.3.69-.16.23.15.3.46.16.69-.36.57-.84 1.08-1.44 1.48zm1.05 1.57c-1.48.99-3.21 1.32-4.84 1.06-.28-.05-.47-.32-.41-.6.05-.27.32-.45.61-.39l.22.04c1.31.15 2.68-.14 3.87-.94.71-.47 1.27-1.07 1.7-1.74.14-.24.45-.31.68-.16.24.14.31.45.16.69-.49.79-1.16 1.49-1.99 2.04z';
          break;

        case 'align-center':
          path = 'M3 5h14V3H3v2zm12 8V7H5v6h10zM3 17h14v-2H3v2z';
          break;

        case 'align-full-width':
          path = 'M17 13V3H3v10h14zM5 17h10v-2H5v2z';
          break;

        case 'align-left':
          path = 'M3 5h14V3H3v2zm9 8V7H3v6h9zm2-4h3V7h-3v2zm0 4h3v-2h-3v2zM3 17h14v-2H3v2z';
          break;

        case 'align-none':
          path = 'M3 5h14V3H3v2zm10 8V7H3v6h10zM3 17h14v-2H3v2z';
          break;

        case 'align-pull-left':
          path = 'M9 16V4H3v12h6zm2-7h6V7h-6v2zm0 4h6v-2h-6v2z';
          break;

        case 'align-pull-right':
          path = 'M17 16V4h-6v12h6zM9 7H3v2h6V7zm0 4H3v2h6v-2z';
          break;

        case 'align-right':
          path = 'M3 5h14V3H3v2zm0 4h3V7H3v2zm14 4V7H8v6h9zM3 13h3v-2H3v2zm0 4h14v-2H3v2z';
          break;

        case 'align-wide':
          path = 'M5 5h10V3H5v2zm12 8V7H3v6h14zM5 17h10v-2H5v2z';
          break;

        case 'analytics':
          path = 'M18 18V2H2v16h16zM16 5H4V4h12v1zM7 7v3h3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3zm1 2V7c1.1 0 2 .9 2 2H8zm8-1h-4V7h4v1zm0 3h-4V9h4v2zm0 2h-4v-1h4v1zm0 3H4v-1h12v1z';
          break;

        case 'archive':
          path = 'M19 4v2H1V4h18zM2 7h16v10H2V7zm11 3V9H7v1h6z';
          break;

        case 'arrow-down-alt':
          path = 'M9 2h2v12l4-4 2 1-7 7-7-7 2-1 4 4V2z';
          break;

        case 'arrow-down-alt2':
          path = 'M5 6l5 5 5-5 2 1-7 7-7-7z';
          break;

        case 'arrow-down':
          path = 'M15 8l-4.03 6L7 8h8z';
          break;

        case 'arrow-left-alt':
          path = 'M18 9v2H6l4 4-1 2-7-7 7-7 1 2-4 4h12z';
          break;

        case 'arrow-left-alt2':
          path = 'M14 5l-5 5 5 5-1 2-7-7 7-7z';
          break;

        case 'arrow-left':
          path = 'M13 14L7 9.97 13 6v8z';
          break;

        case 'arrow-right-alt':
          path = 'M2 11V9h12l-4-4 1-2 7 7-7 7-1-2 4-4H2z';
          break;

        case 'arrow-right-alt2':
          path = 'M6 15l5-5-5-5 1-2 7 7-7 7z';
          break;

        case 'arrow-right':
          path = 'M8 6l6 4.03L8 14V6z';
          break;

        case 'arrow-up-alt':
          path = 'M11 18H9V6l-4 4-2-1 7-7 7 7-2 1-4-4v12z';
          break;

        case 'arrow-up-alt2':
          path = 'M15 14l-5-5-5 5-2-1 7-7 7 7z';
          break;

        case 'arrow-up':
          path = 'M7 13l4.03-6L15 13H7z';
          break;

        case 'art':
          path = 'M8.55 3.06c1.01.34-1.95 2.01-.1 3.13 1.04.63 3.31-2.22 4.45-2.86.97-.54 2.67-.65 3.53 1.23 1.09 2.38.14 8.57-3.79 11.06-3.97 2.5-8.97 1.23-10.7-2.66-2.01-4.53 3.12-11.09 6.61-9.9zm1.21 6.45c.73 1.64 4.7-.5 3.79-2.8-.59-1.49-4.48 1.25-3.79 2.8z';
          break;

        case 'awards':
          path = 'M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z';
          break;

        case 'backup':
          path = 'M13.65 2.88c3.93 2.01 5.48 6.84 3.47 10.77s-6.83 5.48-10.77 3.47c-1.87-.96-3.2-2.56-3.86-4.4l1.64-1.03c.45 1.57 1.52 2.95 3.08 3.76 3.01 1.54 6.69.35 8.23-2.66 1.55-3.01.36-6.69-2.65-8.24C9.78 3.01 6.1 4.2 4.56 7.21l1.88.97-4.95 3.08-.39-5.82 1.78.91C4.9 2.4 9.75.89 13.65 2.88zm-4.36 7.83C9.11 10.53 9 10.28 9 10c0-.07.03-.12.04-.19h-.01L10 5l.97 4.81L14 13l-4.5-2.12.02-.02c-.08-.04-.16-.09-.23-.15z';
          break;

        case 'block-default':
          path = 'M15 6V4h-3v2H8V4H5v2H4c-.6 0-1 .4-1 1v8h14V7c0-.6-.4-1-1-1h-1z';
          break;

        case 'book-alt':
          path = 'M5 17h13v2H5c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3h13v14H5c-.55 0-1 .45-1 1s.45 1 1 1zm2-3.5v-11c0-.28-.22-.5-.5-.5s-.5.22-.5.5v11c0 .28.22.5.5.5s.5-.22.5-.5z';
          break;

        case 'book':
          path = 'M16 3h2v16H5c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3h9v14H5c-.55 0-1 .45-1 1s.45 1 1 1h11V3z';
          break;

        case 'buddicons-activity':
          path = 'M8 1v7h2V6c0-1.52 1.45-3 3-3v.86c.55-.52 1.26-.86 2-.86v3h1c1.1 0 2 .9 2 2s-.9 2-2 2h-1v6c0 .55-.45 1-1 1s-1-.45-1-1v-2.18c-.31.11-.65.18-1 .18v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c-.35 0-.69-.07-1-.18V16c0 .55-.45 1-1 1s-1-.45-1-1v-4H2v-1c0-1.66 1.34-3 3-3h2V1h1zm5 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z';
          break;

        case 'buddicons-bbpress-logo':
          path = 'M8.5 12.6c.3-1.3 0-2.3-1.1-2.3-.8 0-1.6.6-1.8 1.5l-.3 1.7c-.3 1 .3 1.5 1 1.5 1.2 0 1.9-1.1 2.2-2.4zm-4-6.4C3.7 7.3 3.3 8.6 3.3 10c0 1 .2 1.9.6 2.8l1-4.6c.3-1.7.4-2-.4-2zm9.3 6.4c.3-1.3 0-2.3-1.1-2.3-.8 0-1.6.6-1.8 1.5l-.4 1.7c-.2 1.1.4 1.6 1.1 1.6 1.1-.1 1.9-1.2 2.2-2.5zM10 3.3c-2 0-3.9.9-5.1 2.3.6-.1 1.4-.2 1.8-.3.2 0 .2.1.2.2 0 .2-1 4.8-1 4.8.5-.3 1.2-.7 1.8-.7.9 0 1.5.4 1.9.9l.5-2.4c.4-1.6.4-1.9-.4-1.9-.4 0-.4-.5 0-.6.6-.1 1.8-.2 2.3-.3.2 0 .2.1.2.2l-1 4.8c.5-.4 1.2-.7 1.9-.7 1.7 0 2.5 1.3 2.1 3-.3 1.7-2 3-3.8 3-1.3 0-2.1-.7-2.3-1.4-.7.8-1.7 1.3-2.8 1.4 1.1.7 2.4 1.1 3.7 1.1 3.7 0 6.7-3 6.7-6.7s-3-6.7-6.7-6.7zM10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 15.5c-2.1 0-4-.8-5.3-2.2-.3-.4-.7-.8-1-1.2-.7-1.2-1.2-2.6-1.2-4.1 0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z';
          break;

        case 'buddicons-buddypress-logo':
          path = 'M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10 4.48 0 10 0zm0 .5C4.75.5.5 4.75.5 10s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5S15.25.5 10 .5zm0 1c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S5.3 1.5 10 1.5zm1.8 1.71c-.57 0-1.1.17-1.55.45 1.56.37 2.73 1.77 2.73 3.45 0 .69-.21 1.33-.55 1.87 1.31-.29 2.29-1.45 2.29-2.85 0-1.61-1.31-2.92-2.92-2.92zm-2.38 1c-1.61 0-2.92 1.31-2.92 2.93 0 1.61 1.31 2.92 2.92 2.92 1.62 0 2.93-1.31 2.93-2.92 0-1.62-1.31-2.93-2.93-2.93zm4.25 5.01l-.51.59c2.34.69 2.45 3.61 2.45 3.61h1.28c0-4.71-3.22-4.2-3.22-4.2zm-2.1.8l-2.12 2.09-2.12-2.09C3.12 10.24 3.89 15 3.89 15h11.08c.47-4.98-3.4-4.98-3.4-4.98z';
          break;

        case 'buddicons-community':
          path = 'M9 3c0-.67-.47-1.43-1-2-.5.5-1 1.38-1 2 0 .48.45 1 1 1s1-.47 1-1zm4 0c0-.67-.47-1.43-1-2-.5.5-1 1.38-1 2 0 .48.45 1 1 1s1-.47 1-1zM9 9V5.5c0-.55-.45-1-1-1-.57 0-1 .49-1 1V9c0 .55.45 1 1 1 .57 0 1-.49 1-1zm4 0V5.5c0-.55-.45-1-1-1-.57 0-1 .49-1 1V9c0 .55.45 1 1 1 .57 0 1-.49 1-1zm4 1c0-1.48-1.41-2.77-3.5-3.46V9c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V6.01c-.17 0-.33-.01-.5-.01s-.33.01-.5.01V9c0 .83-.67 1.5-1.5 1.5S6.5 9.83 6.5 9V6.54C4.41 7.23 3 8.52 3 10c0 1.41.95 2.65 3.21 3.37 1.11.35 2.39 1.12 3.79 1.12s2.69-.78 3.79-1.13C16.04 12.65 17 11.41 17 10zm-7 5.43c1.43 0 2.74-.79 3.88-1.11 1.9-.53 2.49-1.34 3.12-2.32v3c0 2.21-3.13 4-7 4s-7-1.79-7-4v-3c.64.99 1.32 1.8 3.15 2.33 1.13.33 2.44 1.1 3.85 1.1z';
          break;

        case 'buddicons-forums':
          path = 'M13.5 7h-7C5.67 7 5 6.33 5 5.5S5.67 4 6.5 4h1.59C8.04 3.84 8 3.68 8 3.5 8 2.67 8.67 2 9.5 2h1c.83 0 1.5.67 1.5 1.5 0 .18-.04.34-.09.5h1.59c.83 0 1.5.67 1.5 1.5S14.33 7 13.5 7zM4 8h12c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zm1 3h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm2 3h6c.55 0 1 .45 1 1s-.45 1-1 1h-1.09c.05.16.09.32.09.5 0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5 0-.18.04-.34.09-.5H7c-.55 0-1-.45-1-1s.45-1 1-1z';
          break;

        case 'buddicons-friends':
          path = 'M8.75 5.77C8.75 4.39 7 2 7 2S5.25 4.39 5.25 5.77 5.9 7.5 7 7.5s1.75-.35 1.75-1.73zm6 0C14.75 4.39 13 2 13 2s-1.75 2.39-1.75 3.77S11.9 7.5 13 7.5s1.75-.35 1.75-1.73zM9 17V9c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1zm6 0V9c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2c.55 0 1-.45 1-1zm-9-6l2-1v2l-2 1v-2zm6 0l2-1v2l-2 1v-2zm-6 3l2-1v2l-2 1v-2zm6 0l2-1v2l-2 1v-2z';
          break;

        case 'buddicons-groups':
          path = 'M15.45 6.25c1.83.94 1.98 3.18.7 4.98-.8 1.12-2.33 1.88-3.46 1.78L10.05 18H9l-2.65-4.99c-1.13.16-2.73-.63-3.55-1.79-1.28-1.8-1.13-4.04.71-4.97.48-.24.96-.33 1.43-.31-.01.4.01.8.07 1.21.26 1.69 1.41 3.53 2.86 4.37-.19.55-.49.99-.88 1.25L9 16.58v-5.66C7.64 10.55 6.26 8.76 6 7c-.4-2.65 1-5 3.5-5s3.9 2.35 3.5 5c-.26 1.76-1.64 3.55-3 3.92v5.77l2.07-3.84c-.44-.23-.77-.71-.99-1.3 1.48-.83 2.65-2.69 2.91-4.4.06-.41.08-.82.07-1.22.46-.01.92.08 1.39.32z';
          break;

        case 'buddicons-pm':
          path = 'M10 2c3 0 8 5 8 5v11H2V7s5-5 8-5zm7 14.72l-3.73-2.92L17 11l-.43-.37-2.26 1.3.24-4.31-8.77-.52-.46 4.54-1.99-.95L3 11l3.73 2.8-3.44 2.85.4.43L10 13l6.53 4.15z';
          break;

        case 'buddicons-replies':
          path = 'M17.54 10.29c1.17 1.17 1.17 3.08 0 4.25-1.18 1.17-3.08 1.17-4.25 0l-.34-.52c0 3.66-2 4.38-2.95 4.98-.82-.6-2.95-1.28-2.95-4.98l-.34.52c-1.17 1.17-3.07 1.17-4.25 0-1.17-1.17-1.17-3.08 0-4.25 0 0 1.02-.67 2.1-1.3C3.71 7.84 3.2 6.42 3.2 4.88c0-.34.03-.67.08-1C3.53 5.66 4.47 7.22 5.8 8.3c.67-.35 1.85-.83 2.37-.92H8c-1.1 0-2-.9-2-2s.9-2 2-2v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5h2v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5c1.1 0 2 .9 2 2s-.9 2-2 2h-.17c.51.09 1.78.61 2.38.92 1.33-1.08 2.27-2.64 2.52-4.42.05.33.08.66.08 1 0 1.54-.51 2.96-1.36 4.11 1.08.63 2.09 1.3 2.09 1.3zM8.5 6.38c.5 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm3-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-2.3 5.73c-.12.11-.19.26-.19.43.02.25.23.46.49.46h1c.26 0 .47-.21.49-.46 0-.15-.07-.29-.19-.43-.08-.06-.18-.11-.3-.11h-1c-.12 0-.22.05-.3.11zM12 12.5c0-.12-.06-.28-.19-.38-.09-.07-.19-.12-.31-.12h-3c-.12 0-.22.05-.31.12-.11.1-.19.25-.19.38 0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5zM8.5 15h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm1 2h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5z';
          break;

        case 'buddicons-topics':
          path = 'M10.44 1.66c-.59-.58-1.54-.58-2.12 0L2.66 7.32c-.58.58-.58 1.53 0 2.12.6.6 1.56.56 2.12 0l5.66-5.66c.58-.58.59-1.53 0-2.12zm2.83 2.83c-.59-.59-1.54-.59-2.12 0l-5.66 5.66c-.59.58-.59 1.53 0 2.12.6.6 1.56.55 2.12 0l5.66-5.66c.58-.58.58-1.53 0-2.12zm1.06 6.72l4.18 4.18c.59.58.59 1.53 0 2.12s-1.54.59-2.12 0l-4.18-4.18-1.77 1.77c-.59.58-1.54.58-2.12 0-.59-.59-.59-1.54 0-2.13l5.66-5.65c.58-.59 1.53-.59 2.12 0 .58.58.58 1.53 0 2.12zM5 15c0-1.59-1.66-4-1.66-4S2 13.78 2 15s.6 2 1.34 2h.32C4.4 17 5 16.59 5 15z';
          break;

        case 'buddicons-tracking':
          path = 'M10.98 6.78L15.5 15c-1 2-3.5 3-5.5 3s-4.5-1-5.5-3L9 6.82c-.75-1.23-2.28-1.98-4.29-2.03l2.46-2.92c1.68 1.19 2.46 2.32 2.97 3.31.56-.87 1.2-1.68 2.7-2.12l1.83 2.86c-1.42-.34-2.64.08-3.69.86zM8.17 10.4l-.93 1.69c.49.11 1 .16 1.54.16 1.35 0 2.58-.36 3.55-.95l-1.01-1.82c-.87.53-1.96.86-3.15.92zm.86 5.38c1.99 0 3.73-.74 4.74-1.86l-.98-1.76c-1 1.12-2.74 1.87-4.74 1.87-.62 0-1.21-.08-1.76-.21l-.63 1.15c.94.5 2.1.81 3.37.81z';
          break;

        case 'building':
          path = 'M3 20h14V0H3v20zM7 3H5V1h2v2zm4 0H9V1h2v2zm4 0h-2V1h2v2zM7 6H5V4h2v2zm4 0H9V4h2v2zm4 0h-2V4h2v2zM7 9H5V7h2v2zm4 0H9V7h2v2zm4 0h-2V7h2v2zm-8 3H5v-2h2v2zm4 0H9v-2h2v2zm4 0h-2v-2h2v2zm-4 7H5v-6h6v6zm4-4h-2v-2h2v2zm0 3h-2v-2h2v2z';
          break;

        case 'businessman':
          path = 'M7.3 6l-.03-.19c-.04-.37-.05-.73-.03-1.08.02-.36.1-.71.25-1.04.14-.32.31-.61.52-.86s.49-.46.83-.6c.34-.15.72-.23 1.13-.23.69 0 1.26.2 1.71.59s.76.87.91 1.44.18 1.16.09 1.78l-.03.19c-.01.09-.05.25-.11.48-.05.24-.12.47-.2.69-.08.21-.19.45-.34.72-.14.27-.3.49-.47.69-.18.19-.4.34-.67.48-.27.13-.55.19-.86.19s-.59-.06-.87-.19c-.26-.13-.49-.29-.67-.5-.18-.2-.34-.42-.49-.66-.15-.25-.26-.49-.34-.73-.09-.25-.16-.47-.21-.67-.06-.21-.1-.37-.12-.5zm9.2 6.24c.41.7.5 1.41.5 2.14v2.49c0 .03-.12.08-.29.13-.18.04-.42.13-.97.27-.55.12-1.1.24-1.65.34s-1.19.19-1.95.27c-.75.08-1.46.12-2.13.12-.68 0-1.39-.04-2.14-.12-.75-.07-1.4-.17-1.98-.27-.58-.11-1.08-.23-1.56-.34-.49-.11-.8-.21-1.06-.29L3 16.87v-2.49c0-.75.07-1.46.46-2.15s.81-1.25 1.5-1.68C5.66 10.12 7.19 10 8 10l1.67 1.67L9 13v3l1.02 1.08L11 16v-3l-.68-1.33L11.97 10c.77 0 2.2.07 2.9.52.71.45 1.21 1.02 1.63 1.72z';
          break;

        case 'button':
          path = 'M17 5H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm1 7c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v5z';
          break;

        case 'calendar-alt':
          path = 'M15 4h3v15H2V4h3V3c0-.41.15-.76.44-1.06.29-.29.65-.44 1.06-.44s.77.15 1.06.44c.29.3.44.65.44 1.06v1h4V3c0-.41.15-.76.44-1.06.29-.29.65-.44 1.06-.44s.77.15 1.06.44c.29.3.44.65.44 1.06v1zM6 3v2.5c0 .14.05.26.15.36.09.09.21.14.35.14s.26-.05.35-.14c.1-.1.15-.22.15-.36V3c0-.14-.05-.26-.15-.35-.09-.1-.21-.15-.35-.15s-.26.05-.35.15c-.1.09-.15.21-.15.35zm7 0v2.5c0 .14.05.26.14.36.1.09.22.14.36.14s.26-.05.36-.14c.09-.1.14-.22.14-.36V3c0-.14-.05-.26-.14-.35-.1-.1-.22-.15-.36-.15s-.26.05-.36.15c-.09.09-.14.21-.14.35zm4 15V8H3v10h14zM7 9v2H5V9h2zm2 0h2v2H9V9zm4 2V9h2v2h-2zm-6 1v2H5v-2h2zm2 0h2v2H9v-2zm4 2v-2h2v2h-2zm-6 1v2H5v-2h2zm4 2H9v-2h2v2zm4 0h-2v-2h2v2z';
          break;

        case 'calendar':
          path = 'M15 4h3v14H2V4h3V3c0-.83.67-1.5 1.5-1.5S8 2.17 8 3v1h4V3c0-.83.67-1.5 1.5-1.5S15 2.17 15 3v1zM6 3v2.5c0 .28.22.5.5.5s.5-.22.5-.5V3c0-.28-.22-.5-.5-.5S6 2.72 6 3zm7 0v2.5c0 .28.22.5.5.5s.5-.22.5-.5V3c0-.28-.22-.5-.5-.5s-.5.22-.5.5zm4 14V8H3v9h14zM7 16V9H5v7h2zm4 0V9H9v7h2zm4 0V9h-2v7h2z';
          break;

        case 'camera':
          path = 'M6 5V3H3v2h3zm12 10V4H9L7 6H2v9h16zm-7-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z';
          break;

        case 'carrot':
          path = 'M2 18.43c1.51 1.36 11.64-4.67 13.14-7.21.72-1.22-.13-3.01-1.52-4.44C15.2 5.73 16.59 9 17.91 8.31c.6-.32.99-1.31.7-1.92-.52-1.08-2.25-1.08-3.42-1.21.83-.2 2.82-1.05 2.86-2.25.04-.92-1.13-1.97-2.05-1.86-1.21.14-1.65 1.88-2.06 3-.05-.71-.2-2.27-.98-2.95-1.04-.91-2.29-.05-2.32 1.05-.04 1.33 2.82 2.07 1.92 3.67C11.04 4.67 9.25 4.03 8.1 4.7c-.49.31-1.05.91-1.63 1.69.89.94 2.12 2.07 3.09 2.72.2.14.26.42.11.62-.14.21-.42.26-.62.12-.99-.67-2.2-1.78-3.1-2.71-.45.67-.91 1.43-1.34 2.23.85.86 1.93 1.83 2.79 2.41.2.14.25.42.11.62-.14.21-.42.26-.63.12-.85-.58-1.86-1.48-2.71-2.32C2.4 13.69 1.1 17.63 2 18.43z';
          break;

        case 'cart':
          path = 'M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6v1zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19 4 18.33 4 17.5 4.67 16 5.5 16zm9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z';
          break;

        case 'category':
          path = 'M5 7h13v10H2V4h7l2 2H4v9h1V7z';
          break;

        case 'chart-area':
          path = 'M18 18l.01-12.28c.59-.35.99-.99.99-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.47 1.48 1.14 1.8l-4.13 6.58c-.33-.24-.73-.38-1.16-.38-.84 0-1.55.51-1.85 1.24l-2.14-1.53c.09-.22.14-.46.14-.71 0-1.11-.89-2-2-2-1.1 0-2 .89-2 2 0 .73.4 1.36.98 1.71L1 18h17zM17 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM5 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5.85 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z';
          break;

        case 'chart-bar':
          path = 'M18 18V2h-4v16h4zm-6 0V7H8v11h4zm-6 0v-8H2v8h4z';
          break;

        case 'chart-line':
          path = 'M18 3.5c0 .62-.38 1.16-.92 1.38v13.11H1.99l4.22-6.73c-.13-.23-.21-.48-.21-.76C6 9.67 6.67 9 7.5 9S9 9.67 9 10.5c0 .13-.02.25-.05.37l1.44.63c.27-.3.67-.5 1.11-.5.18 0 .35.04.51.09l3.58-6.41c-.36-.27-.59-.7-.59-1.18 0-.83.67-1.5 1.5-1.5.19 0 .36.04.53.1l.05-.09v.11c.54.22.92.76.92 1.38zm-1.92 13.49V5.85l-3.29 5.89c.13.23.21.48.21.76 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5l.01-.07-1.63-.72c-.25.18-.55.29-.88.29-.18 0-.35-.04-.51-.1l-3.2 5.09h12.29z';
          break;

        case 'chart-pie':
          path = 'M10 10V3c3.87 0 7 3.13 7 7h-7zM9 4v7h7c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7z';
          break;

        case 'clipboard':
          path = 'M11.9.39l1.4 1.4c1.61.19 3.5-.74 4.61.37s.18 3 .37 4.61l1.4 1.4c.39.39.39 1.02 0 1.41l-9.19 9.2c-.4.39-1.03.39-1.42 0L1.29 11c-.39-.39-.39-1.02 0-1.42l9.2-9.19c.39-.39 1.02-.39 1.41 0zm.58 2.25l-.58.58 4.95 4.95.58-.58c-.19-.6-.2-1.22-.15-1.82.02-.31.05-.62.09-.92.12-1 .18-1.63-.17-1.98s-.98-.29-1.98-.17c-.3.04-.61.07-.92.09-.6.05-1.22.04-1.82-.15zm4.02.93c.39.39.39 1.03 0 1.42s-1.03.39-1.42 0-.39-1.03 0-1.42 1.03-.39 1.42 0zm-6.72.36l-.71.7L15.44 11l.7-.71zM8.36 5.34l-.7.71 6.36 6.36.71-.7zM6.95 6.76l-.71.7 6.37 6.37.7-.71zM5.54 8.17l-.71.71 6.36 6.36.71-.71zM4.12 9.58l-.71.71 6.37 6.37.71-.71z';
          break;

        case 'clock':
          path = 'M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm0 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.71-5.29c.07.05.14.1.23.15l-.02.02L14 13l-3.03-3.19L10 5l-.97 4.81h.01c0 .02-.01.05-.02.09S9 9.97 9 10c0 .28.1.52.29.71z';
          break;

        case 'cloud-saved':
          path = 'M14.8 9c.1-.3.2-.6.2-1 0-2.2-1.8-4-4-4-1.5 0-2.9.9-3.5 2.2-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16h10c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.4-3.3-3.2-3.5zm-6.3 5.9l-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z';
          break;

        case 'cloud-upload':
          path = 'M14.8 9c.1-.3.2-.6.2-1 0-2.2-1.8-4-4-4-1.5 0-2.9.9-3.5 2.2-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16H8v-3H5l4.5-4.5L14 13h-3v3h3.5c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.4-3.3-3.2-3.5z';
          break;

        case 'cloud':
          path = 'M14.9 9c1.8.2 3.1 1.7 3.1 3.5 0 1.9-1.6 3.5-3.5 3.5h-10C2.6 16 1 14.4 1 12.5 1 10.7 2.3 9.3 4.1 9 4 8.9 4 8.7 4 8.5 4 7.1 5.1 6 6.5 6c.3 0 .7.1.9.2C8.1 4.9 9.4 4 11 4c2.2 0 4 1.8 4 4 0 .4-.1.7-.1 1z';
          break;

        case 'columns':
          path = 'M3 15h6V5H3v10zm8 0h6V5h-6v10z';
          break;

        case 'controls-back':
          path = 'M2 10l10-6v3.6L18 4v12l-6-3.6V16z';
          break;

        case 'controls-forward':
          path = 'M18 10L8 16v-3.6L2 16V4l6 3.6V4z';
          break;

        case 'controls-pause':
          path = 'M5 16V4h3v12H5zm7-12h3v12h-3V4z';
          break;

        case 'controls-play':
          path = 'M5 4l10 6-10 6V4z';
          break;

        case 'controls-repeat':
          path = 'M5 7v3l-2 1.5V5h11V3l4 3.01L14 9V7H5zm10 6v-3l2-1.5V15H6v2l-4-3.01L6 11v2h9z';
          break;

        case 'controls-skipback':
          path = 'M11.98 7.63l6-3.6v12l-6-3.6v3.6l-8-4.8v4.8h-2v-12h2v4.8l8-4.8v3.6z';
          break;

        case 'controls-skipforward':
          path = 'M8 12.4L2 16V4l6 3.6V4l8 4.8V4h2v12h-2v-4.8L8 16v-3.6z';
          break;

        case 'controls-volumeoff':
          path = 'M2 7h4l5-4v14l-5-4H2V7z';
          break;

        case 'controls-volumeon':
          path = 'M2 7h4l5-4v14l-5-4H2V7zm12.69-2.46C14.82 4.59 18 5.92 18 10s-3.18 5.41-3.31 5.46c-.06.03-.13.04-.19.04-.2 0-.39-.12-.46-.31-.11-.26.02-.55.27-.65.11-.05 2.69-1.15 2.69-4.54 0-3.41-2.66-4.53-2.69-4.54-.25-.1-.38-.39-.27-.65.1-.25.39-.38.65-.27zM16 10c0 2.57-2.23 3.43-2.32 3.47-.06.02-.12.03-.18.03-.2 0-.39-.12-.47-.32-.1-.26.04-.55.29-.65.07-.02 1.68-.67 1.68-2.53s-1.61-2.51-1.68-2.53c-.25-.1-.38-.39-.29-.65.1-.25.39-.39.65-.29.09.04 2.32.9 2.32 3.47z';
          break;

        case 'cover-image':
          path = 'M2.2 1h15.5c.7 0 1.3.6 1.3 1.2v11.5c0 .7-.6 1.2-1.2 1.2H2.2c-.6.1-1.2-.5-1.2-1.1V2.2C1 1.6 1.6 1 2.2 1zM17 13V3H3v10h14zm-4-4s0-5 3-5v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V7c2 0 3 4 3 4s1-4 3-4 3 2 3 2zM4 17h12v2H4z';
          break;

        case 'dashboard':
          path = 'M3.76 16h12.48c1.1-1.37 1.76-3.11 1.76-5 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 1.89.66 3.63 1.76 5zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5.37 5.55L12 7v6c0 1.1-.9 2-2 2s-2-.9-2-2c0-.57.24-1.08.63-1.45zM4 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z';
          break;

        case 'desktop':
          path = 'M3 2h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-5v2h2c.55 0 1 .45 1 1v1H5v-1c0-.55.45-1 1-1h2v-2H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm13 9V4H4v7h12zM5 5h9L5 9V5z';
          break;

        case 'dismiss':
          path = 'M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm5 11l-3-3 3-3-2-2-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3z';
          break;

        case 'download':
          path = 'M14.01 4v6h2V2H4v8h2.01V4h8zm-2 2v6h3l-5 6-5-6h3V6h4z';
          break;

        case 'edit':
          path = 'M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z';
          break;

        case 'editor-aligncenter':
          path = 'M14 5V3H6v2h8zm3 4V7H3v2h14zm-3 4v-2H6v2h8zm3 4v-2H3v2h14z';
          break;

        case 'editor-alignleft':
          path = 'M12 5V3H3v2h9zm5 4V7H3v2h14zm-5 4v-2H3v2h9zm5 4v-2H3v2h14z';
          break;

        case 'editor-alignright':
          path = 'M17 5V3H8v2h9zm0 4V7H3v2h14zm0 4v-2H8v2h9zm0 4v-2H3v2h14z';
          break;

        case 'editor-bold':
          path = 'M6 4v13h4.54c1.37 0 2.46-.33 3.26-1 .8-.66 1.2-1.58 1.2-2.77 0-.84-.17-1.51-.51-2.01s-.9-.85-1.67-1.03v-.09c.57-.1 1.02-.4 1.36-.9s.51-1.13.51-1.91c0-1.14-.39-1.98-1.17-2.5C12.75 4.26 11.5 4 9.78 4H6zm2.57 5.15V6.26h1.36c.73 0 1.27.11 1.61.32.34.22.51.58.51 1.07 0 .54-.16.92-.47 1.15s-.82.35-1.51.35h-1.5zm0 2.19h1.6c1.44 0 2.16.53 2.16 1.61 0 .6-.17 1.05-.51 1.34s-.86.43-1.57.43H8.57v-3.38z';
          break;

        case 'editor-break':
          path = 'M16 4h2v9H7v3l-5-4 5-4v3h9V4z';
          break;

        case 'editor-code':
          path = 'M9 6l-4 4 4 4-1 2-6-6 6-6zm2 8l4-4-4-4 1-2 6 6-6 6z';
          break;

        case 'editor-contract':
          path = 'M15.75 6.75L18 3v14l-2.25-3.75L17 12h-4v4l1.25-1.25L18 17H2l3.75-2.25L7 16v-4H3l1.25 1.25L2 17V3l2.25 3.75L3 8h4V4L5.75 5.25 2 3h16l-3.75 2.25L13 4v4h4z';
          break;

        case 'editor-customchar':
          path = 'M10 5.4c1.27 0 2.24.36 2.91 1.08.66.71 1 1.76 1 3.13 0 1.28-.23 2.37-.69 3.27-.47.89-1.27 1.52-2.22 2.12v2h6v-2h-3.69c.92-.64 1.62-1.34 2.12-2.34.49-1.01.74-2.13.74-3.35 0-1.78-.55-3.19-1.65-4.22S11.92 3.54 10 3.54s-3.43.53-4.52 1.57c-1.1 1.04-1.65 2.44-1.65 4.2 0 1.21.24 2.31.73 3.33.48 1.01 1.19 1.71 2.1 2.36H3v2h6v-2c-.98-.64-1.8-1.28-2.24-2.17-.45-.89-.67-1.96-.67-3.22 0-1.37.33-2.41 1-3.13C7.75 5.76 8.72 5.4 10 5.4z';
          break;

        case 'editor-expand':
          path = 'M7 8h6v4H7zm-5 5v4h4l-1.2-1.2L7 12l-3.8 2.2M14 17h4v-4l-1.2 1.2L13 12l2.2 3.8M14 3l1.3 1.3L13 8l3.8-2.2L18 7V3M6 3H2v4l1.2-1.2L7 8 4.7 4.3';
          break;

        case 'editor-help':
          path = 'M17 10c0-3.87-3.14-7-7-7-3.87 0-7 3.13-7 7s3.13 7 7 7c3.86 0 7-3.13 7-7zm-6.3 1.48H9.14v-.43c0-.38.08-.7.24-.98s.46-.57.88-.89c.41-.29.68-.53.81-.71.14-.18.2-.39.2-.62 0-.25-.09-.44-.28-.58-.19-.13-.45-.19-.79-.19-.58 0-1.25.19-2 .57l-.64-1.28c.87-.49 1.8-.74 2.77-.74.81 0 1.45.2 1.92.58.48.39.71.91.71 1.55 0 .43-.09.8-.29 1.11-.19.32-.57.67-1.11 1.06-.38.28-.61.49-.71.63-.1.15-.15.34-.15.57v.35zm-1.47 2.74c-.18-.17-.27-.42-.27-.73 0-.33.08-.58.26-.75s.43-.25.77-.25c.32 0 .57.09.75.26s.27.42.27.74c0 .3-.09.55-.27.72-.18.18-.43.27-.75.27-.33 0-.58-.09-.76-.26z';
          break;

        case 'editor-indent':
          path = 'M3 5V3h9v2H3zm10-1V3h4v1h-4zm0 3h2V5l4 3.5-4 3.5v-2h-2V7zM3 8V6h9v2H3zm2 3V9h7v2H5zm-2 3v-2h9v2H3zm10 0v-1h4v1h-4zm-4 3v-2h3v2H9z';
          break;

        case 'editor-insertmore':
          path = 'M17 7V3H3v4h14zM6 11V9H3v2h3zm6 0V9H8v2h4zm5 0V9h-3v2h3zm0 6v-4H3v4h14z';
          break;

        case 'editor-italic':
          path = 'M14.78 6h-2.13l-2.8 9h2.12l-.62 2H4.6l.62-2h2.14l2.8-9H8.03l.62-2h6.75z';
          break;

        case 'editor-justify':
          path = 'M2 3h16v2H2V3zm0 4h16v2H2V7zm0 4h16v2H2v-2zm0 4h16v2H2v-2z';
          break;

        case 'editor-kitchensink':
          path = 'M19 2v6H1V2h18zm-1 5V3H2v4h16zM5 4v2H3V4h2zm3 0v2H6V4h2zm3 0v2H9V4h2zm3 0v2h-2V4h2zm3 0v2h-2V4h2zm2 5v9H1V9h18zm-1 8v-7H2v7h16zM5 11v2H3v-2h2zm3 0v2H6v-2h2zm3 0v2H9v-2h2zm6 0v2h-5v-2h5zm-6 3v2H3v-2h8zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2z';
          break;

        case 'editor-ltr':
          path = 'M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM14 14l5-4-5-4v8z';
          break;

        case 'editor-ol-rtl':
          path = 'M15.025 8.75a1.048 1.048 0 0 1 .45-.1.507.507 0 0 1 .35.11.455.455 0 0 1 .13.36.803.803 0 0 1-.06.3 1.448 1.448 0 0 1-.19.33c-.09.11-.29.32-.58.62l-.99 1v.58h2.76v-.7h-1.72v-.04l.51-.48a7.276 7.276 0 0 0 .7-.71 1.75 1.75 0 0 0 .3-.49 1.254 1.254 0 0 0 .1-.51.968.968 0 0 0-.16-.56 1.007 1.007 0 0 0-.44-.37 1.512 1.512 0 0 0-.65-.14 1.98 1.98 0 0 0-.51.06 1.9 1.9 0 0 0-.42.15 3.67 3.67 0 0 0-.48.35l.45.54a2.505 2.505 0 0 1 .45-.3zM16.695 15.29a1.29 1.29 0 0 0-.74-.3v-.02a1.203 1.203 0 0 0 .65-.37.973.973 0 0 0 .23-.65.81.81 0 0 0-.37-.71 1.72 1.72 0 0 0-1-.26 2.185 2.185 0 0 0-1.33.4l.4.6a1.79 1.79 0 0 1 .46-.23 1.18 1.18 0 0 1 .41-.07c.38 0 .58.15.58.46a.447.447 0 0 1-.22.43 1.543 1.543 0 0 1-.7.12h-.31v.66h.31a1.764 1.764 0 0 1 .75.12.433.433 0 0 1 .23.41.55.55 0 0 1-.2.47 1.084 1.084 0 0 1-.63.15 2.24 2.24 0 0 1-.57-.08 2.671 2.671 0 0 1-.52-.2v.74a2.923 2.923 0 0 0 1.18.22 1.948 1.948 0 0 0 1.22-.33 1.077 1.077 0 0 0 .43-.92.836.836 0 0 0-.26-.64zM15.005 4.17c.06-.05.16-.14.3-.28l-.02.42V7h.84V3h-.69l-1.29 1.03.4.51zM4.02 5h9v1h-9zM4.02 10h9v1h-9zM4.02 15h9v1h-9z';
          break;

        case 'editor-ol':
          path = 'M6 7V3h-.69L4.02 4.03l.4.51.46-.37c.06-.05.16-.14.3-.28l-.02.42V7H6zm2-2h9v1H8V5zm-1.23 6.95v-.7H5.05v-.04l.51-.48c.33-.31.57-.54.7-.71.14-.17.24-.33.3-.49.07-.16.1-.33.1-.51 0-.21-.05-.4-.16-.56-.1-.16-.25-.28-.44-.37s-.41-.14-.65-.14c-.19 0-.36.02-.51.06-.15.03-.29.09-.42.15-.12.07-.29.19-.48.35l.45.54c.16-.13.31-.23.45-.3.15-.07.3-.1.45-.1.14 0 .26.03.35.11s.13.2.13.36c0 .1-.02.2-.06.3s-.1.21-.19.33c-.09.11-.29.32-.58.62l-.99 1v.58h2.76zM8 10h9v1H8v-1zm-1.29 3.95c0-.3-.12-.54-.37-.71-.24-.17-.58-.26-1-.26-.52 0-.96.13-1.33.4l.4.6c.17-.11.32-.19.46-.23.14-.05.27-.07.41-.07.38 0 .58.15.58.46 0 .2-.07.35-.22.43s-.38.12-.7.12h-.31v.66h.31c.34 0 .59.04.75.12.15.08.23.22.23.41 0 .22-.07.37-.2.47-.14.1-.35.15-.63.15-.19 0-.38-.03-.57-.08s-.36-.12-.52-.2v.74c.34.15.74.22 1.18.22.53 0 .94-.11 1.22-.33.29-.22.43-.52.43-.92 0-.27-.09-.48-.26-.64s-.42-.26-.74-.3v-.02c.27-.06.49-.19.65-.37.15-.18.23-.39.23-.65zM8 15h9v1H8v-1z';
          break;

        case 'editor-outdent':
          path = 'M7 4V3H3v1h4zm10 1V3H8v2h9zM7 7H5V5L1 8.5 5 12v-2h2V7zm10 1V6H8v2h9zm-2 3V9H8v2h7zm2 3v-2H8v2h9zM7 14v-1H3v1h4zm4 3v-2H8v2h3z';
          break;

        case 'editor-paragraph':
          path = 'M15 2H7.54c-.83 0-1.59.2-2.28.6-.7.41-1.25.96-1.65 1.65C3.2 4.94 3 5.7 3 6.52s.2 1.58.61 2.27c.4.69.95 1.24 1.65 1.64.69.41 1.45.61 2.28.61h.43V17c0 .27.1.51.29.71.2.19.44.29.71.29.28 0 .51-.1.71-.29.2-.2.3-.44.3-.71V5c0-.27.09-.51.29-.71.2-.19.44-.29.71-.29s.51.1.71.29c.19.2.29.44.29.71v12c0 .27.1.51.3.71.2.19.43.29.71.29.27 0 .51-.1.71-.29.19-.2.29-.44.29-.71V4H15c.27 0 .5-.1.7-.3.2-.19.3-.43.3-.7s-.1-.51-.3-.71C15.5 2.1 15.27 2 15 2z';
          break;

        case 'editor-paste-text':
          path = 'M12.38 2L15 5v1H5V5l2.64-3h4.74zM10 5c.55 0 1-.44 1-1 0-.55-.45-1-1-1s-1 .45-1 1c0 .56.45 1 1 1zm5.45-1H17c.55 0 1 .45 1 1v12c0 .56-.45 1-1 1H3c-.55 0-1-.44-1-1V5c0-.55.45-1 1-1h1.55L4 4.63V7h12V4.63zM14 11V9H6v2h3v5h2v-5h3z';
          break;

        case 'editor-paste-word':
          path = 'M12.38 2L15 5v1H5V5l2.64-3h4.74zM10 5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 12V5c0-.55-.45-1-1-1h-1.54l.54.63V7H4V4.62L4.55 4H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1zm-3-8l-2 7h-2l-1-5-1 5H6.92L5 9h2l1 5 1-5h2l1 5 1-5h2z';
          break;

        case 'editor-quote':
          path = 'M9.49 13.22c0-.74-.2-1.38-.61-1.9-.62-.78-1.83-.88-2.53-.72-.29-1.65 1.11-3.75 2.92-4.65L7.88 4c-2.73 1.3-5.42 4.28-4.96 8.05C3.21 14.43 4.59 16 6.54 16c.85 0 1.56-.25 2.12-.75s.83-1.18.83-2.03zm8.05 0c0-.74-.2-1.38-.61-1.9-.63-.78-1.83-.88-2.53-.72-.29-1.65 1.11-3.75 2.92-4.65L15.93 4c-2.73 1.3-5.41 4.28-4.95 8.05.29 2.38 1.66 3.95 3.61 3.95.85 0 1.56-.25 2.12-.75s.83-1.18.83-2.03z';
          break;

        case 'editor-removeformatting':
          path = 'M14.29 4.59l1.1 1.11c.41.4.61.94.61 1.47v2.12c0 .53-.2 1.07-.61 1.47l-6.63 6.63c-.4.41-.94.61-1.47.61s-1.07-.2-1.47-.61l-1.11-1.1-1.1-1.11c-.41-.4-.61-.94-.61-1.47v-2.12c0-.54.2-1.07.61-1.48l6.63-6.62c.4-.41.94-.61 1.47-.61s1.06.2 1.47.61zm-6.21 9.7l6.42-6.42c.39-.39.39-1.03 0-1.43L12.36 4.3c-.19-.19-.45-.29-.72-.29s-.52.1-.71.29l-6.42 6.42c-.39.4-.39 1.04 0 1.43l2.14 2.14c.38.38 1.04.38 1.43 0z';
          break;

        case 'editor-rtl':
          path = 'M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM19 6l-5 4 5 4V6z';
          break;

        case 'editor-spellcheck':
          path = 'M15.84 2.76c.25 0 .49.04.71.11.23.07.44.16.64.25l.35-.81c-.52-.26-1.08-.39-1.69-.39-.58 0-1.09.13-1.52.37-.43.25-.76.61-.99 1.08C13.11 3.83 13 4.38 13 5c0 .99.23 1.75.7 2.28s1.15.79 2.02.79c.6 0 1.13-.09 1.6-.26v-.84c-.26.08-.51.14-.74.19-.24.05-.49.08-.74.08-.59 0-1.04-.19-1.34-.57-.32-.37-.47-.93-.47-1.66 0-.7.16-1.25.48-1.65.33-.4.77-.6 1.33-.6zM6.5 8h1.04L5.3 2H4.24L2 8h1.03l.58-1.66H5.9zM8 2v6h2.17c.67 0 1.19-.15 1.57-.46.38-.3.56-.72.56-1.26 0-.4-.1-.72-.3-.95-.19-.24-.5-.39-.93-.47v-.04c.35-.06.6-.21.78-.44.18-.24.28-.53.28-.88 0-.52-.19-.9-.56-1.14-.36-.24-.96-.36-1.79-.36H8zm.98 2.48V2.82h.85c.44 0 .77.06.97.19.21.12.31.33.31.61 0 .31-.1.53-.29.66-.18.13-.48.2-.89.2h-.95zM5.64 5.5H3.9l.54-1.56c.14-.4.25-.76.32-1.1l.15.52c.07.23.13.4.17.51zm3.34-.23h.99c.44 0 .76.08.98.23.21.15.32.38.32.69 0 .34-.11.59-.32.75s-.52.24-.93.24H8.98V5.27zM4 13l5 5 9-8-1-1-8 6-4-3z';
          break;

        case 'editor-strikethrough':
          path = 'M15.82 12.25c.26 0 .5-.02.74-.07.23-.05.48-.12.73-.2v.84c-.46.17-.99.26-1.58.26-.88 0-1.54-.26-2.01-.79-.39-.44-.62-1.04-.68-1.79h-.94c.12.21.18.48.18.79 0 .54-.18.95-.55 1.26-.38.3-.9.45-1.56.45H8v-2.5H6.59l.93 2.5H6.49l-.59-1.67H3.62L3.04 13H2l.93-2.5H2v-1h1.31l.93-2.49H5.3l.92 2.49H8V7h1.77c1 0 1.41.17 1.77.41.37.24.55.62.55 1.13 0 .35-.09.64-.27.87l-.08.09h1.29c.05-.4.15-.77.31-1.1.23-.46.55-.82.98-1.06.43-.25.93-.37 1.51-.37.61 0 1.17.12 1.69.38l-.35.81c-.2-.1-.42-.18-.64-.25s-.46-.11-.71-.11c-.55 0-.99.2-1.31.59-.23.29-.38.66-.44 1.11H17v1h-2.95c.06.5.2.9.44 1.19.3.37.75.56 1.33.56zM4.44 8.96l-.18.54H5.3l-.22-.61c-.04-.11-.09-.28-.17-.51-.07-.24-.12-.41-.14-.51-.08.33-.18.69-.33 1.09zm4.53-1.09V9.5h1.19c.28-.02.49-.09.64-.18.19-.13.28-.35.28-.66 0-.28-.1-.48-.3-.61-.2-.12-.53-.18-.97-.18h-.84zm-3.33 2.64v-.01H3.91v.01h1.73zm5.28.01l-.03-.02H8.97v1.68h1.04c.4 0 .71-.08.92-.23.21-.16.31-.4.31-.74 0-.31-.11-.54-.32-.69z';
          break;

        case 'editor-table':
          path = 'M18 17V3H2v14h16zM16 7H4V5h12v2zm-7 4H4V9h5v2zm7 0h-5V9h5v2zm-7 4H4v-2h5v2zm7 0h-5v-2h5v2z';
          break;

        case 'editor-textcolor':
          path = 'M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z';
          break;

        case 'editor-ul':
          path = 'M5.5 7C4.67 7 4 6.33 4 5.5 4 4.68 4.67 4 5.5 4 6.32 4 7 4.68 7 5.5 7 6.33 6.32 7 5.5 7zM8 5h9v1H8V5zm-2.5 7c-.83 0-1.5-.67-1.5-1.5C4 9.68 4.67 9 5.5 9c.82 0 1.5.68 1.5 1.5 0 .83-.68 1.5-1.5 1.5zM8 10h9v1H8v-1zm-2.5 7c-.83 0-1.5-.67-1.5-1.5 0-.82.67-1.5 1.5-1.5.82 0 1.5.68 1.5 1.5 0 .83-.68 1.5-1.5 1.5zM8 15h9v1H8v-1z';
          break;

        case 'editor-underline':
          path = 'M14 5h-2v5.71c0 1.99-1.12 2.98-2.45 2.98-1.32 0-2.55-1-2.55-2.96V5H5v5.87c0 1.91 1 4.54 4.48 4.54 3.49 0 4.52-2.58 4.52-4.5V5zm0 13v-2H5v2h9z';
          break;

        case 'editor-unlink':
          path = 'M17.74 2.26c1.68 1.69 1.68 4.41 0 6.1l-1.53 1.52c-.32.33-.69.58-1.08.77L13 10l1.69-1.64.76-.77.76-.76c.84-.84.84-2.2 0-3.04-.84-.85-2.2-.85-3.04 0l-.77.76-.76.76L10 7l-.65-2.14c.19-.38.44-.75.77-1.07l1.52-1.53c1.69-1.68 4.42-1.68 6.1 0zM2 4l8 6-6-8zm4-2l4 8-2-8H6zM2 6l8 4-8-2V6zm7.36 7.69L10 13l.74 2.35-1.38 1.39c-1.69 1.68-4.41 1.68-6.1 0-1.68-1.68-1.68-4.42 0-6.1l1.39-1.38L7 10l-.69.64-1.52 1.53c-.85.84-.85 2.2 0 3.04.84.85 2.2.85 3.04 0zM18 16l-8-6 6 8zm-4 2l-4-8 2 8h2zm4-4l-8-4 8 2v2z';
          break;

        case 'editor-video':
          path = 'M16 2h-3v1H7V2H4v15h3v-1h6v1h3V2zM6 3v1H5V3h1zm9 0v1h-1V3h1zm-2 1v5H7V4h6zM6 5v1H5V5h1zm9 0v1h-1V5h1zM6 7v1H5V7h1zm9 0v1h-1V7h1zM6 9v1H5V9h1zm9 0v1h-1V9h1zm-2 1v5H7v-5h6zm-7 1v1H5v-1h1zm9 0v1h-1v-1h1zm-9 2v1H5v-1h1zm9 0v1h-1v-1h1zm-9 2v1H5v-1h1zm9 0v1h-1v-1h1z';
          break;

        case 'ellipsis':
          path = 'M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z';
          break;

        case 'email-alt':
          path = 'M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51-.13.16-.43.15-.56.05l-4.37-3.73-2.14 1.95-2.13-1.95-4.37 3.73c-.13.1-.43.11-.56-.05-.14-.15-.06-.37.06-.51l3.9-4.06-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04 6.25-5.04c.28-.24.62-.4.95-.07z';
          break;

        case 'email-alt2':
          path = 'M18.01 11.18V2.51c0-1.19-.9-1.81-2-1.37L4 5.91c-1.1.44-2 1.77-2 2.97v8.66c0 1.2.9 1.81 2 1.37l12.01-4.77c1.1-.44 2-1.76 2-2.96zm-1.43-7.46l-6.04 9.33-6.65-4.6c-.1-.07-.36-.32-.17-.64.21-.36.65-.21.65-.21l6.3 2.32s4.83-6.34 5.11-6.7c.13-.17.43-.34.73-.13.29.2.16.49.07.63z';
          break;

        case 'email':
          path = 'M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17-.3.41-.11.87.13 1.07z';
          break;

        case 'embed-audio':
          path = 'M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 3H7v4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.4 0 .7.1 1 .3V5h4v2zm4 3.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z';
          break;

        case 'embed-generic':
          path = 'M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 6.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z';
          break;

        case 'embed-photo':
          path = 'M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 8H3V6h7v6zm4-1.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3zm-6-4V8.5L7.2 10 6 9.2 4 11h5zM4.6 8.6c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z';
          break;

        case 'embed-post':
          path = 'M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.6 9l-.4.3c-.4.4-.5 1.1-.2 1.6l-.8.8-1.1-1.1-1.3 1.3c-.2.2-1.6 1.3-1.8 1.1-.2-.2.9-1.6 1.1-1.8l1.3-1.3-1.1-1.1.8-.8c.5.3 1.2.3 1.6-.2l.3-.3c.5-.5.5-1.2.2-1.7L8 5l3 2.9-.8.8c-.5-.2-1.2-.2-1.6.3zm5.4 1.5L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z';
          break;

        case 'embed-video':
          path = 'M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 6.5L8 9.1V11H3V6h5v1.8l2-1.3v4zm4 0L12.5 12l1.5 1.5V15l-3-3 3-3v1.5zm1 4.5v-1.5l1.5-1.5-1.5-1.5V9l3 3-3 3z';
          break;

        case 'excerpt-view':
          path = 'M19 18V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6V3h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6v-6h11z';
          break;

        case 'exit':
          path = 'M13 3v2h2v10h-2v2h4V3h-4zm0 8V9H5.4l4.3-4.3-1.4-1.4L1.6 10l6.7 6.7 1.4-1.4L5.4 11H13z';
          break;

        case 'external':
          path = 'M9 3h8v8l-2-1V6.92l-5.6 5.59-1.41-1.41L14.08 5H10zm3 12v-3l2-2v7H3V6h8L9 8H5v7h7z';
          break;

        case 'facebook-alt':
          path = 'M8.46 18h2.93v-7.3h2.45l.37-2.84h-2.82V6.04c0-.82.23-1.38 1.41-1.38h1.51V2.11c-.26-.03-1.15-.11-2.19-.11-2.18 0-3.66 1.33-3.66 3.76v2.1H6v2.84h2.46V18z';
          break;

        case 'facebook':
          path = 'M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89c-.49 0-.89-.4-.89-.88V2.88c0-.49.4-.88.89-.88z';
          break;

        case 'feedback':
          path = 'M2 2h16c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm15 14V7H3v9h14zM4 8v1h3V8H4zm4 0v3h8V8H8zm-4 4v1h3v-1H4zm4 0v3h8v-3H8z';
          break;

        case 'filter':
          path = 'M3 4.5v-2s3.34-1 7-1 7 1 7 1v2l-5 7.03v6.97s-1.22-.09-2.25-.59S8 16.5 8 16.5v-4.97z';
          break;

        case 'flag':
          path = 'M5 18V3H3v15h2zm1-6V4c3-1 7 1 11 0v8c-3 1.27-8-1-11 0z';
          break;

        case 'format-aside':
          path = 'M1 1h18v12l-6 6H1V1zm3 3v1h12V4H4zm0 4v1h12V8H4zm6 5v-1H4v1h6zm2 4l5-5h-5v5z';
          break;

        case 'format-audio':
          path = 'M6.99 3.08l11.02-2c.55-.08.99.45.99 1V14.5c0 1.94-1.57 3.5-3.5 3.5S12 16.44 12 14.5c0-1.93 1.57-3.5 3.5-3.5.54 0 1.04.14 1.5.35V5.08l-9 2V16c-.24 1.7-1.74 3-3.5 3C2.57 19 1 17.44 1 15.5 1 13.57 2.57 12 4.5 12c.54 0 1.04.14 1.5.35V4.08c0-.55.44-.91.99-1z';
          break;

        case 'format-chat':
          path = 'M11 6h-.82C9.07 6 8 7.2 8 8.16V10l-3 3v-3H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3zm0 1h6c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2h-2v3l-3-3h-1c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z';
          break;

        case 'format-gallery':
          path = 'M16 4h1.96c.57 0 1.04.47 1.04 1.04v12.92c0 .57-.47 1.04-1.04 1.04H5.04C4.47 19 4 18.53 4 17.96V16H2.04C1.47 16 1 15.53 1 14.96V2.04C1 1.47 1.47 1 2.04 1h12.92c.57 0 1.04.47 1.04 1.04V4zM3 14h11V3H3v11zm5-8.5C8 4.67 7.33 4 6.5 4S5 4.67 5 5.5 5.67 7 6.5 7 8 6.33 8 5.5zm2 4.5s1-5 3-5v8H4V7c2 0 2 3 2 3s.33-2 2-2 2 2 2 2zm7 7V6h-1v8.96c0 .57-.47 1.04-1.04 1.04H6v1h11z';
          break;

        case 'format-image':
          path = 'M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z';
          break;

        case 'format-quote':
          path = 'M8.54 12.74c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L6.65 1.94C3.45 3.46.31 6.96.85 11.37 1.19 14.16 2.8 16 5.08 16c1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45l-1.63-2.28c-3.2 1.52-6.34 5.02-5.8 9.43.34 2.79 1.95 4.63 4.23 4.63 1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38z';
          break;

        case 'format-status':
          path = 'M10 1c7 0 9 2.91 9 6.5S17 14 10 14s-9-2.91-9-6.5S3 1 10 1zM5.5 9C6.33 9 7 8.33 7 7.5S6.33 6 5.5 6 4 6.67 4 7.5 4.67 9 5.5 9zM10 9c.83 0 1.5-.67 1.5-1.5S10.83 6 10 6s-1.5.67-1.5 1.5S9.17 9 10 9zm4.5 0c.83 0 1.5-.67 1.5-1.5S15.33 6 14.5 6 13 6.67 13 7.5 13.67 9 14.5 9zM6 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z';
          break;

        case 'format-video':
          path = 'M2 1h16c.55 0 1 .45 1 1v16l-18-.02V2c0-.55.45-1 1-1zm4 1L4 5h1l2-3H6zm4 0H9L7 5h1zm3 0h-1l-2 3h1zm3 0h-1l-2 3h1zm1 14V6H3v10h14zM8 7l6 4-6 4V7z';
          break;

        case 'forms':
          path = 'M2 2h7v7H2V2zm9 0v7h7V2h-7zM5.5 4.5L7 3H4zM12 8V3h5v5h-5zM4.5 5.5L3 4v3zM8 4L6.5 5.5 8 7V4zM5.5 6.5L4 8h3zM9 18v-7H2v7h7zm9 0h-7v-7h7v7zM8 12v5H3v-5h5zm6.5 1.5L16 12h-3zM12 16l1.5-1.5L12 13v3zm3.5-1.5L17 16v-3zm-1 1L13 17h3z';
          break;

        case 'googleplus':
          path = 'M6.73 10h5.4c.05.29.09.57.09.95 0 3.27-2.19 5.6-5.49 5.6-3.17 0-5.73-2.57-5.73-5.73 0-3.17 2.56-5.73 5.73-5.73 1.54 0 2.84.57 3.83 1.5l-1.55 1.5c-.43-.41-1.17-.89-2.28-.89-1.96 0-3.55 1.62-3.55 3.62 0 1.99 1.59 3.61 3.55 3.61 2.26 0 3.11-1.62 3.24-2.47H6.73V10zM19 10v1.64h-1.64v1.63h-1.63v-1.63h-1.64V10h1.64V8.36h1.63V10H19z';
          break;

        case 'grid-view':
          path = 'M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z';
          break;

        case 'groups':
          path = 'M8.03 4.46c-.29 1.28.55 3.46 1.97 3.46 1.41 0 2.25-2.18 1.96-3.46-.22-.98-1.08-1.63-1.96-1.63-.89 0-1.74.65-1.97 1.63zm-4.13.9c-.25 1.08.47 2.93 1.67 2.93s1.92-1.85 1.67-2.93c-.19-.83-.92-1.39-1.67-1.39s-1.48.56-1.67 1.39zm8.86 0c-.25 1.08.47 2.93 1.66 2.93 1.2 0 1.92-1.85 1.67-2.93-.19-.83-.92-1.39-1.67-1.39-.74 0-1.47.56-1.66 1.39zm-.59 11.43l1.25-4.3C14.2 10 12.71 8.47 10 8.47c-2.72 0-4.21 1.53-3.44 4.02l1.26 4.3C8.05 17.51 9 18 10 18c.98 0 1.94-.49 2.17-1.21zm-6.1-7.63c-.49.67-.96 1.83-.42 3.59l1.12 3.79c-.34.2-.77.31-1.2.31-.85 0-1.65-.41-1.85-1.03l-1.07-3.65c-.65-2.11.61-3.4 2.92-3.4.27 0 .54.02.79.06-.1.1-.2.22-.29.33zm8.35-.39c2.31 0 3.58 1.29 2.92 3.4l-1.07 3.65c-.2.62-1 1.03-1.85 1.03-.43 0-.86-.11-1.2-.31l1.11-3.77c.55-1.78.08-2.94-.42-3.61-.08-.11-.18-.23-.28-.33.25-.04.51-.06.79-.06z';
          break;

        case 'hammer':
          path = 'M17.7 6.32l1.41 1.42-3.47 3.41-1.42-1.42.84-.82c-.32-.76-.81-1.57-1.51-2.31l-4.61 6.59-5.26 4.7c-.39.39-1.02.39-1.42 0l-1.2-1.21c-.39-.39-.39-1.02 0-1.41l10.97-9.92c-1.37-.86-3.21-1.46-5.67-1.48 2.7-.82 4.95-.93 6.58-.3 1.7.66 2.82 2.2 3.91 3.58z';
          break;

        case 'heading':
          path = 'M12.5 4v5.2h-5V4H5v13h2.5v-5.2h5V17H15V4';
          break;

        case 'heart':
          path = 'M10 17.12c3.33-1.4 5.74-3.79 7.04-6.21 1.28-2.41 1.46-4.81.32-6.25-1.03-1.29-2.37-1.78-3.73-1.74s-2.68.63-3.63 1.46c-.95-.83-2.27-1.42-3.63-1.46s-2.7.45-3.73 1.74c-1.14 1.44-.96 3.84.34 6.25 1.28 2.42 3.69 4.81 7.02 6.21z';
          break;

        case 'hidden':
          path = 'M17.2 3.3l.16.17c.39.39.39 1.02 0 1.41L4.55 17.7c-.39.39-1.03.39-1.41 0l-.17-.17c-.39-.39-.39-1.02 0-1.41l1.59-1.6c-1.57-1-2.76-2.3-3.56-3.93.81-1.65 2.03-2.98 3.64-3.99S8.04 5.09 10 5.09c1.2 0 2.33.21 3.4.6l2.38-2.39c.39-.39 1.03-.39 1.42 0zm-7.09 4.01c-.23.25-.34.54-.34.88 0 .31.12.58.31.81l1.8-1.79c-.13-.12-.28-.21-.45-.26-.11-.01-.28-.03-.49-.04-.33.03-.6.16-.83.4zM2.4 10.59c.69 1.23 1.71 2.25 3.05 3.05l1.28-1.28c-.51-.69-.77-1.47-.77-2.36 0-1.06.36-1.98 1.09-2.76-1.04.27-1.96.7-2.76 1.26-.8.58-1.43 1.27-1.89 2.09zm13.22-2.13l.96-.96c1.02.86 1.83 1.89 2.42 3.09-.81 1.65-2.03 2.98-3.64 3.99s-3.4 1.51-5.36 1.51c-.63 0-1.24-.07-1.83-.18l1.07-1.07c.25.02.5.05.76.05 1.63 0 3.13-.4 4.5-1.21s2.4-1.84 3.1-3.09c-.46-.82-1.09-1.51-1.89-2.09-.03-.01-.06-.03-.09-.04zm-5.58 5.58l4-4c-.01 1.1-.41 2.04-1.18 2.81-.78.78-1.72 1.18-2.82 1.19z';
          break;

        case 'html':
          path = 'M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zM7 16v-4H5.6v-1h3.7v1H8v4H7zM10 16v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zM19 16h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z';
          break;

        case 'id-alt':
          path = 'M18 18H2V2h16v16zM8.05 7.53c.13-.07.24-.15.33-.24.09-.1.17-.21.24-.34.07-.14.13-.26.17-.37s.07-.22.1-.34L8.95 6c0-.04.01-.07.01-.09.05-.32.03-.61-.04-.9-.08-.28-.23-.52-.46-.72C8.23 4.1 7.95 4 7.6 4c-.2 0-.39.04-.56.11-.17.08-.31.18-.41.3-.11.13-.2.27-.27.44-.07.16-.11.33-.12.51s0 .36.01.55l.02.09c.01.06.03.15.06.25s.06.21.1.33.1.25.17.37c.08.12.16.23.25.33s.2.19.34.25c.13.06.28.09.43.09s.3-.03.43-.09zM16 5V4h-5v1h5zm0 2V6h-5v1h5zM7.62 8.83l-1.38-.88c-.41 0-.79.11-1.14.32-.35.22-.62.5-.81.85-.19.34-.29.7-.29 1.07v1.25l.2.05c.13.04.31.09.55.14.24.06.51.12.8.17.29.06.62.1 1 .14.37.04.73.06 1.07.06s.69-.02 1.07-.06.7-.09.98-.14c.27-.05.54-.1.82-.17.27-.06.45-.11.54-.13.09-.03.16-.05.21-.06v-1.25c0-.36-.1-.72-.31-1.07s-.49-.64-.84-.86-.72-.33-1.11-.33zM16 9V8h-3v1h3zm0 2v-1h-3v1h3zm0 3v-1H4v1h12zm0 2v-1H4v1h12z';
          break;

        case 'id':
          path = 'M18 16H2V4h16v12zM7.05 8.53c.13-.07.24-.15.33-.24.09-.1.17-.21.24-.34.07-.14.13-.26.17-.37s.07-.22.1-.34L7.95 7c0-.04.01-.07.01-.09.05-.32.03-.61-.04-.9-.08-.28-.23-.52-.46-.72C7.23 5.1 6.95 5 6.6 5c-.2 0-.39.04-.56.11-.17.08-.31.18-.41.3-.11.13-.2.27-.27.44-.07.16-.11.33-.12.51s0 .36.01.55l.02.09c.01.06.03.15.06.25s.06.21.1.33.1.25.17.37c.08.12.16.23.25.33s.2.19.34.25c.13.06.28.09.43.09s.3-.03.43-.09zM17 9V5h-5v4h5zm-10.38.83l-1.38-.88c-.41 0-.79.11-1.14.32-.35.22-.62.5-.81.85-.19.34-.29.7-.29 1.07v1.25l.2.05c.13.04.31.09.55.14.24.06.51.12.8.17.29.06.62.1 1 .14.37.04.73.06 1.07.06s.69-.02 1.07-.06.7-.09.98-.14c.27-.05.54-.1.82-.17.27-.06.45-.11.54-.13.09-.03.16-.05.21-.06v-1.25c0-.36-.1-.72-.31-1.07s-.49-.64-.84-.86-.72-.33-1.11-.33zM17 11v-1h-5v1h5zm0 2v-1h-5v1h5zm0 2v-1H3v1h14z';
          break;

        case 'image-crop':
          path = 'M19 12v3h-4v4h-3v-4H4V7H0V4h4V0h3v4h7l3-3 1 1-3 3v7h4zm-8-5H7v4zm-3 5h4V8z';
          break;

        case 'image-filter':
          path = 'M14 5.87c0-2.2-1.79-4-4-4s-4 1.8-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4zM3.24 10.66c-1.92 1.1-2.57 3.55-1.47 5.46 1.11 1.92 3.55 2.57 5.47 1.47 1.91-1.11 2.57-3.55 1.46-5.47-1.1-1.91-3.55-2.56-5.46-1.46zm9.52 6.93c1.92 1.1 4.36.45 5.47-1.46 1.1-1.92.45-4.36-1.47-5.47-1.91-1.1-4.36-.45-5.46 1.46-1.11 1.92-.45 4.36 1.46 5.47z';
          break;

        case 'image-flip-horizontal':
          path = 'M19 3v14h-8v3H9v-3H1V3h8V0h2v3h8zm-8.5 14V3h-1v14h1zM7 6.5L3 10l4 3.5v-7zM17 10l-4-3.5v7z';
          break;

        case 'image-flip-vertical':
          path = 'M20 9v2h-3v8H3v-8H0V9h3V1h14v8h3zM6.5 7h7L10 3zM17 9.5H3v1h14v-1zM13.5 13h-7l3.5 4z';
          break;

        case 'image-rotate-left':
          path = 'M7 5H5.05c0-1.74.85-2.9 2.95-2.9V0C4.85 0 2.96 2.11 2.96 5H1.18L3.8 8.39zm13-4v14h-5v5H1V10h9V1h10zm-2 2h-6v7h3v3h3V3zm-5 9H3v6h10v-6z';
          break;

        case 'image-rotate-right':
          path = 'M15.95 5H14l3.2 3.39L19.82 5h-1.78c0-2.89-1.89-5-5.04-5v2.1c2.1 0 2.95 1.16 2.95 2.9zM1 1h10v9h9v10H6v-5H1V1zm2 2v10h3v-3h3V3H3zm5 9v6h10v-6H8z';
          break;

        case 'image-rotate':
          path = 'M10.25 1.02c5.1 0 8.75 4.04 8.75 9s-3.65 9-8.75 9c-3.2 0-6.02-1.59-7.68-3.99l2.59-1.52c1.1 1.5 2.86 2.51 4.84 2.51 3.3 0 6-2.79 6-6s-2.7-6-6-6c-1.97 0-3.72 1-4.82 2.49L7 8.02l-6 2v-7L2.89 4.6c1.69-2.17 4.36-3.58 7.36-3.58z';
          break;

        case 'images-alt':
          path = 'M4 15v-3H2V2h12v3h2v3h2v10H6v-3H4zm7-12c-1.1 0-2 .9-2 2h4c0-1.1-.89-2-2-2zm-7 8V6H3v5h1zm7-3h4c0-1.1-.89-2-2-2-1.1 0-2 .9-2 2zm-5 6V9H5v5h1zm9-1c1.1 0 2-.89 2-2 0-1.1-.9-2-2-2s-2 .9-2 2c0 1.11.9 2 2 2zm2 4v-2c-5 0-5-3-10-3v5h10z';
          break;

        case 'images-alt2':
          path = 'M5 3h14v11h-2v2h-2v2H1V7h2V5h2V3zm13 10V4H6v9h12zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1 6v-1H5V6H4v9h12zM7 6l10 6H7V6zm7 11v-1H3V8H2v9h12z';
          break;

        case 'index-card':
          path = 'M1 3.17V18h18V4H8v-.83c0-.32-.12-.6-.35-.83S7.14 2 6.82 2H2.18c-.33 0-.6.11-.83.34-.24.23-.35.51-.35.83zM10 6v2H3V6h7zm7 0v10h-5V6h5zm-7 4v2H3v-2h7zm0 4v2H3v-2h7z';
          break;

        case 'info-outline':
          path = 'M9 15h2V9H9v6zm1-10c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm0-4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z';
          break;

        case 'info':
          path = 'M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1 4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 9V9H9v6h2z';
          break;

        case 'insert-after':
          path = 'M9 12h2v-2h2V8h-2V6H9v2H7v2h2v2zm1 4c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zm0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM3 19h14v-2H3v2z';
          break;

        case 'insert-before':
          path = 'M11 8H9v2H7v2h2v2h2v-2h2v-2h-2V8zm-1-4c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM3 1v2h14V1H3z';
          break;

        case 'insert':
          path = 'M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z';
          break;

        case 'instagram':
          path = 'M12.67 10A2.67 2.67 0 1 0 10 12.67 2.68 2.68 0 0 0 12.67 10zm1.43 0A4.1 4.1 0 1 1 10 5.9a4.09 4.09 0 0 1 4.1 4.1zm1.13-4.27a1 1 0 1 1-1-1 1 1 0 0 1 1 1zM10 3.44c-1.17 0-3.67-.1-4.72.32a2.67 2.67 0 0 0-1.52 1.52c-.42 1-.32 3.55-.32 4.72s-.1 3.67.32 4.72a2.74 2.74 0 0 0 1.52 1.52c1 .42 3.55.32 4.72.32s3.67.1 4.72-.32a2.83 2.83 0 0 0 1.52-1.52c.42-1.05.32-3.55.32-4.72s.1-3.67-.32-4.72a2.74 2.74 0 0 0-1.52-1.52c-1.05-.42-3.55-.32-4.72-.32zM18 10c0 1.1 0 2.2-.05 3.3a4.84 4.84 0 0 1-1.29 3.36A4.8 4.8 0 0 1 13.3 18H6.7a4.84 4.84 0 0 1-3.36-1.29 4.84 4.84 0 0 1-1.29-3.41C2 12.2 2 11.1 2 10V6.7a4.84 4.84 0 0 1 1.34-3.36A4.8 4.8 0 0 1 6.7 2.05C7.8 2 8.9 2 10 2h3.3a4.84 4.84 0 0 1 3.36 1.29A4.8 4.8 0 0 1 18 6.7V10z';
          break;

        case 'keyboard-hide':
          path = 'M18,0 L2,0 C0.9,0 0.01,0.9 0.01,2 L0,12 C0,13.1 0.9,14 2,14 L18,14 C19.1,14 20,13.1 20,12 L20,2 C20,0.9 19.1,0 18,0 Z M18,12 L2,12 L2,2 L18,2 L18,12 Z M9,3 L11,3 L11,5 L9,5 L9,3 Z M9,6 L11,6 L11,8 L9,8 L9,6 Z M6,3 L8,3 L8,5 L6,5 L6,3 Z M6,6 L8,6 L8,8 L6,8 L6,6 Z M3,6 L5,6 L5,8 L3,8 L3,6 Z M3,3 L5,3 L5,5 L3,5 L3,3 Z M6,9 L14,9 L14,11 L6,11 L6,9 Z M12,6 L14,6 L14,8 L12,8 L12,6 Z M12,3 L14,3 L14,5 L12,5 L12,3 Z M15,6 L17,6 L17,8 L15,8 L15,6 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M10,20 L14,16 L6,16 L10,20 Z';
          break;

        case 'laptop':
          path = 'M3 3h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm13 2H4v8h12V5zm-3 1H5v4zm6 11v-1H1v1c0 .6.5 1 1.1 1h15.8c.6 0 1.1-.4 1.1-1z';
          break;

        case 'layout':
          path = 'M2 2h5v11H2V2zm6 0h5v5H8V2zm6 0h4v16h-4V2zM8 8h5v5H8V8zm-6 6h11v4H2v-4z';
          break;

        case 'leftright':
          path = 'M3 10.03L9 6v8zM11 6l6 4.03L11 14V6z';
          break;

        case 'lightbulb':
          path = 'M10 1c3.11 0 5.63 2.52 5.63 5.62 0 1.84-2.03 4.58-2.03 4.58-.33.44-.6 1.25-.6 1.8v1c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-1c0-.55-.27-1.36-.6-1.8 0 0-2.02-2.74-2.02-4.58C4.38 3.52 6.89 1 10 1zM7 16.87V16h6v.87c0 .62-.13 1.13-.75 1.13H12c0 .62-.4 1-1.02 1h-2c-.61 0-.98-.38-.98-1h-.25c-.62 0-.75-.51-.75-1.13z';
          break;

        case 'list-view':
          path = 'M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11z';
          break;

        case 'location-alt':
          path = 'M13 13.14l1.17-5.94c.79-.43 1.33-1.25 1.33-2.2 0-1.38-1.12-2.5-2.5-2.5S10.5 3.62 10.5 5c0 .95.54 1.77 1.33 2.2zm0-9.64c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm1.72 4.8L18 6.97v9L13.12 18 7 15.97l-5 2v-9l5-2 4.27 1.41 1.73 7.3z';
          break;

        case 'location':
          path = 'M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89.43.37 1.18.96 1.85 1.83.74.97 1.41 2.01 1.62 2.71.21-.7.88-1.74 1.62-2.71.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6zm0 2.56c1.9 0 3.44 1.54 3.44 3.44S11.9 11.44 10 11.44 6.56 9.9 6.56 8 8.1 4.56 10 4.56z';
          break;

        case 'lock':
          path = 'M14 9h1c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1h1V6c0-2.21 1.79-4 4-4s4 1.79 4 4v3zm-2 0V6c0-1.1-.9-2-2-2s-2 .9-2 2v3h4zm-1 7l-.36-2.15c.51-.24.86-.75.86-1.35 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .6.35 1.11.86 1.35L9 16h2z';
          break;

        case 'marker':
          path = 'M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm0 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z';
          break;

        case 'media-archive':
          path = 'M12 2l4 4v12H4V2h8zm0 4h3l-3-3v3zM8 3.5v2l1.8-1zM11 5L9.2 6 11 7V5zM8 6.5v2l1.8-1zM11 8L9.2 9l1.8 1V8zM8 9.5v2l1.8-1zm3 1.5l-1.8 1 1.8 1v-2zm-1.5 6c.83 0 1.62-.72 1.5-1.63-.05-.38-.49-1.61-.49-1.61l-1.99-1.1s-.45 1.95-.52 2.71c-.07.77.67 1.63 1.5 1.63zm0-2.39c.42 0 .76.34.76.76 0 .43-.34.77-.76.77s-.76-.34-.76-.77c0-.42.34-.76.76-.76z';
          break;

        case 'media-audio':
          path = 'M12 2l4 4v12H4V2h8zm0 4h3l-3-3v3zm1 7.26V8.09c0-.11-.04-.21-.12-.29-.07-.08-.16-.11-.27-.1 0 0-3.97.71-4.25.78C8.07 8.54 8 8.8 8 9v3.37c-.2-.09-.42-.07-.6-.07-.38 0-.7.13-.96.39-.26.27-.4.58-.4.96 0 .37.14.69.4.95.26.27.58.4.96.4.34 0 .7-.04.96-.26.26-.23.64-.65.64-1.12V10.3l3-.6V12c-.67-.2-1.17.04-1.44.31-.26.26-.39.58-.39.95 0 .38.13.69.39.96.27.26.71.39 1.08.39.38 0 .7-.13.96-.39.26-.27.4-.58.4-.96z';
          break;

        case 'media-code':
          path = 'M12 2l4 4v12H4V2h8zM9 13l-2-2 2-2-1-1-3 3 3 3zm3 1l3-3-3-3-1 1 2 2-2 2z';
          break;

        case 'media-default':
          path = 'M12 2l4 4v12H4V2h8zm0 4h3l-3-3v3z';
          break;

        case 'media-document':
          path = 'M12 2l4 4v12H4V2h8zM5 3v1h6V3H5zm7 3h3l-3-3v3zM5 5v1h6V5H5zm10 3V7H5v1h10zM5 9v1h4V9H5zm10 3V9h-5v3h5zM5 11v1h4v-1H5zm10 3v-1H5v1h10zm-3 2v-1H5v1h7z';
          break;

        case 'media-interactive':
          path = 'M12 2l4 4v12H4V2h8zm0 4h3l-3-3v3zm2 8V8H6v6h3l-1 2h1l1-2 1 2h1l-1-2h3zm-6-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-2v2h-3V9h3zm0 3v1H7v-1h6z';
          break;

        case 'media-spreadsheet':
          path = 'M12 2l4 4v12H4V2h8zm-1 4V3H5v3h6zM8 8V7H5v1h3zm3 0V7H9v1h2zm4 0V7h-3v1h3zm-7 2V9H5v1h3zm3 0V9H9v1h2zm4 0V9h-3v1h3zm-7 2v-1H5v1h3zm3 0v-1H9v1h2zm4 0v-1h-3v1h3zm-7 2v-1H5v1h3zm3 0v-1H9v1h2zm4 0v-1h-3v1h3zm-7 2v-1H5v1h3zm3 0v-1H9v1h2z';
          break;

        case 'media-text':
          path = 'M12 2l4 4v12H4V2h8zM5 3v1h6V3H5zm7 3h3l-3-3v3zM5 5v1h6V5H5zm10 3V7H5v1h10zm0 2V9H5v1h10zm0 2v-1H5v1h10zm-4 2v-1H5v1h6z';
          break;

        case 'media-video':
          path = 'M12 2l4 4v12H4V2h8zm0 4h3l-3-3v3zm-1 8v-3c0-.27-.1-.51-.29-.71-.2-.19-.44-.29-.71-.29H7c-.27 0-.51.1-.71.29-.19.2-.29.44-.29.71v3c0 .27.1.51.29.71.2.19.44.29.71.29h3c.27 0 .51-.1.71-.29.19-.2.29-.44.29-.71zm3 1v-5l-2 2v1z';
          break;

        case 'megaphone':
          path = 'M18.15 5.94c.46 1.62.38 3.22-.02 4.48-.42 1.28-1.26 2.18-2.3 2.48-.16.06-.26.06-.4.06-.06.02-.12.02-.18.02-.06.02-.14.02-.22.02h-6.8l2.22 5.5c.02.14-.06.26-.14.34-.08.1-.24.16-.34.16H6.95c-.1 0-.26-.06-.34-.16-.08-.08-.16-.2-.14-.34l-1-5.5H4.25l-.02-.02c-.5.06-1.08-.18-1.54-.62s-.88-1.08-1.06-1.88c-.24-.8-.2-1.56-.02-2.2.18-.62.58-1.08 1.06-1.3l.02-.02 9-5.4c.1-.06.18-.1.24-.16.06-.04.14-.08.24-.12.16-.08.28-.12.5-.18 1.04-.3 2.24.1 3.22.98s1.84 2.24 2.26 3.86zm-2.58 5.98h-.02c.4-.1.74-.34 1.04-.7.58-.7.86-1.76.86-3.04 0-.64-.1-1.3-.28-1.98-.34-1.36-1.02-2.5-1.78-3.24s-1.68-1.1-2.46-.88c-.82.22-1.4.96-1.7 2-.32 1.04-.28 2.36.06 3.72.38 1.36 1 2.5 1.8 3.24.78.74 1.62 1.1 2.48.88zm-2.54-7.08c.22-.04.42-.02.62.04.38.16.76.48 1.02 1s.42 1.2.42 1.78c0 .3-.04.56-.12.8-.18.48-.44.84-.86.94-.34.1-.8-.06-1.14-.4s-.64-.86-.78-1.5c-.18-.62-.12-1.24.02-1.72s.48-.84.82-.94z';
          break;

        case 'menu-alt':
          path = 'M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z';
          break;

        case 'menu':
          path = 'M17 7V5H3v2h14zm0 4V9H3v2h14zm0 4v-2H3v2h14z';
          break;

        case 'microphone':
          path = 'M12 9V3c0-1.1-.89-2-2-2-1.12 0-2 .94-2 2v6c0 1.1.9 2 2 2 1.13 0 2-.94 2-2zm4 0c0 2.97-2.16 5.43-5 5.91V17h2c.56 0 1 .45 1 1s-.44 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1h2v-2.09C6.17 14.43 4 11.97 4 9c0-.55.45-1 1-1 .56 0 1 .45 1 1 0 2.21 1.8 4 4 4 2.21 0 4-1.79 4-4 0-.55.45-1 1-1 .56 0 1 .45 1 1z';
          break;

        case 'migrate':
          path = 'M4 6h6V4H2v12.01h8V14H4V6zm2 2h6V5l6 5-6 5v-3H6V8z';
          break;

        case 'minus':
          path = 'M4 9h12v2H4V9z';
          break;

        case 'money':
          path = 'M0 3h20v12h-.75c0-1.79-1.46-3.25-3.25-3.25-1.31 0-2.42.79-2.94 1.91-.25-.1-.52-.16-.81-.16-.98 0-1.8.63-2.11 1.5H0V3zm8.37 3.11c-.06.15-.1.31-.11.47s-.01.33.01.5l.02.08c.01.06.02.14.05.23.02.1.06.2.1.31.03.11.09.22.15.33.07.12.15.22.23.31s.18.17.31.23c.12.06.25.09.4.09.14 0 .27-.03.39-.09s.22-.14.3-.22c.09-.09.16-.2.22-.32.07-.12.12-.23.16-.33s.07-.2.09-.31c.03-.11.04-.18.05-.22s.01-.07.01-.09c.05-.29.03-.56-.04-.82s-.21-.48-.41-.66c-.21-.18-.47-.27-.79-.27-.19 0-.36.03-.52.1-.15.07-.28.16-.38.28-.09.11-.17.25-.24.4zm4.48 6.04v-1.14c0-.33-.1-.66-.29-.98s-.45-.59-.77-.79c-.32-.21-.66-.31-1.02-.31l-1.24.84-1.28-.82c-.37 0-.72.1-1.04.3-.31.2-.56.46-.74.77-.18.32-.27.65-.27.99v1.14l.18.05c.12.04.29.08.51.14.23.05.47.1.74.15.26.05.57.09.91.13.34.03.67.05.99.05.3 0 .63-.02.98-.05.34-.04.64-.08.89-.13.25-.04.5-.1.76-.16l.5-.12c.08-.02.14-.04.19-.06zm3.15.1c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75c-.73 0-1.38-.3-1.87-.77.23-.35.37-.78.37-1.23 0-.77-.39-1.46-.99-1.86.43-.96 1.37-1.64 2.49-1.64zm-5.5 3.5c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75-.79 1.75-1.75 1.75-1.75-.79-1.75-1.75z';
          break;

        case 'move':
          path = 'M19 10l-4 4v-3h-4v4h3l-4 4-4-4h3v-4H5v3l-4-4 4-4v3h4V5H6l4-4 4 4h-3v4h4V6z';
          break;

        case 'nametag':
          path = 'M12 5V2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1zm-2-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 13V7c0-1.1-.9-2-2-2h-3v.33C13 6.25 12.25 7 11.33 7H8.67C7.75 7 7 6.25 7 5.33V5H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-1-6v6H3V9h14zm-8 2c0-.55-.22-1-.5-1s-.5.45-.5 1 .22 1 .5 1 .5-.45.5-1zm3 0c0-.55-.22-1-.5-1s-.5.45-.5 1 .22 1 .5 1 .5-.45.5-1zm-5.96 1.21c.92.48 2.34.79 3.96.79s3.04-.31 3.96-.79c-.21 1-1.89 1.79-3.96 1.79s-3.75-.79-3.96-1.79z';
          break;

        case 'networking':
          path = 'M18 13h1c.55 0 1 .45 1 1.01v2.98c0 .56-.45 1.01-1 1.01h-4c-.55 0-1-.45-1-1.01v-2.98c0-.56.45-1.01 1-1.01h1v-2h-5v2h1c.55 0 1 .45 1 1.01v2.98c0 .56-.45 1.01-1 1.01H8c-.55 0-1-.45-1-1.01v-2.98c0-.56.45-1.01 1-1.01h1v-2H4v2h1c.55 0 1 .45 1 1.01v2.98C6 17.55 5.55 18 5 18H1c-.55 0-1-.45-1-1.01v-2.98C0 13.45.45 13 1 13h1v-2c0-1.1.9-2 2-2h5V7H8c-.55 0-1-.45-1-1.01V3.01C7 2.45 7.45 2 8 2h4c.55 0 1 .45 1 1.01v2.98C13 6.55 12.55 7 12 7h-1v2h5c1.1 0 2 .9 2 2v2z';
          break;

        case 'no-alt':
          path = 'M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z';
          break;

        case 'no':
          path = 'M12.12 10l3.53 3.53-2.12 2.12L10 12.12l-3.54 3.54-2.12-2.12L7.88 10 4.34 6.46l2.12-2.12L10 7.88l3.54-3.53 2.12 2.12z';
          break;

        case 'palmtree':
          path = 'M8.58 2.39c.32 0 .59.05.81.14 1.25.55 1.69 2.24 1.7 3.97.59-.82 2.15-2.29 3.41-2.29s2.94.73 3.53 3.55c-1.13-.65-2.42-.94-3.65-.94-1.26 0-2.45.32-3.29.89.4-.11.86-.16 1.33-.16 1.39 0 2.9.45 3.4 1.31.68 1.16.47 3.38-.76 4.14-.14-2.1-1.69-4.12-3.47-4.12-.44 0-.88.12-1.33.38C8 10.62 7 14.56 7 19H2c0-5.53 4.21-9.65 7.68-10.79-.56-.09-1.17-.15-1.82-.15C6.1 8.06 4.05 8.5 2 10c.76-2.96 2.78-4.1 4.69-4.1 1.25 0 2.45.5 3.2 1.29-.66-2.24-2.49-2.86-4.08-2.86-.8 0-1.55.16-2.05.35.91-1.29 3.31-2.29 4.82-2.29zM13 11.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z';
          break;

        case 'paperclip':
          path = 'M17.05 2.7c1.93 1.94 1.93 5.13 0 7.07L10 16.84c-1.88 1.89-4.91 1.93-6.86.15-.06-.05-.13-.09-.19-.15-1.93-1.94-1.93-5.12 0-7.07l4.94-4.95c.91-.92 2.28-1.1 3.39-.58.3.15.59.33.83.58 1.17 1.17 1.17 3.07 0 4.24l-4.93 4.95c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l4.93-4.95c.39-.39.39-1.02 0-1.41-.38-.39-1.02-.39-1.4 0l-4.94 4.95c-.91.92-1.1 2.29-.57 3.4.14.3.32.59.57.84s.54.43.84.57c1.11.53 2.47.35 3.39-.57l7.05-7.07c1.16-1.17 1.16-3.08 0-4.25-.56-.55-1.28-.83-2-.86-.08.01-.16.01-.24 0-.22-.03-.43-.11-.6-.27-.39-.4-.38-1.05.02-1.45.16-.16.36-.24.56-.28.14-.02.27-.01.4.02 1.19.06 2.36.52 3.27 1.43z';
          break;

        case 'performance':
          path = 'M3.76 17.01h12.48C17.34 15.63 18 13.9 18 12c0-4.41-3.58-8-8-8s-8 3.59-8 8c0 1.9.66 3.63 1.76 5.01zM9 6c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zM4 8c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm4.52 3.4c.84-.83 6.51-3.5 6.51-3.5s-2.66 5.68-3.49 6.51c-.84.84-2.18.84-3.02 0-.83-.83-.83-2.18 0-3.01zM3 13c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1z';
          break;

        case 'phone':
          path = 'M12.06 6l-.21-.2c-.52-.54-.43-.79.08-1.3l2.72-2.75c.81-.82.96-1.21 1.73-.48l.21.2zm.53.45l4.4-4.4c.7.94 2.34 3.47 1.53 5.34-.73 1.67-1.09 1.75-2 3-1.85 2.11-4.18 4.37-6 6.07-1.26.91-1.31 1.33-3 2-1.8.71-4.4-.89-5.38-1.56l4.4-4.4 1.18 1.62c.34.46 1.2-.06 1.8-.66 1.04-1.05 3.18-3.18 4-4.07.59-.59 1.12-1.45.66-1.8zM1.57 16.5l-.21-.21c-.68-.74-.29-.9.52-1.7l2.74-2.72c.51-.49.75-.6 1.27-.11l.2.21z';
          break;

        case 'playlist-audio':
          path = 'M17 3V1H2v2h15zm0 4V5H2v2h15zm-7 4V9H2v2h8zm7.45-1.96l-6 1.12c-.16.02-.19.03-.29.13-.11.09-.16.22-.16.37v4.59c-.29-.13-.66-.14-.93-.14-.54 0-1 .19-1.38.57s-.56.84-.56 1.38c0 .53.18.99.56 1.37s.84.57 1.38.57c.49 0 .92-.16 1.29-.48s.59-.71.65-1.19v-4.95L17 11.27v3.48c-.29-.13-.56-.19-.83-.19-.54 0-1.11.19-1.49.57-.38.37-.57.83-.57 1.37s.19.99.57 1.37.84.57 1.38.57c.53 0 .99-.19 1.37-.57s.57-.83.57-1.37V9.6c0-.16-.05-.3-.16-.41-.11-.12-.24-.17-.39-.15zM8 15v-2H2v2h6zm-2 4v-2H2v2h4z';
          break;

        case 'playlist-video':
          path = 'M17 3V1H2v2h15zm0 4V5H2v2h15zM6 11V9H2v2h4zm2-2h9c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm3 7l3.33-2L11 12v4zm-5-1v-2H2v2h4zm0 4v-2H2v2h4z';
          break;

        case 'plus-alt':
          path = 'M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6-3.21 3.2-8.39 3.2-11.6 0C1 12.59 1 7.41 4.2 4.2 7.41 1 12.59 1 15.8 4.2zm-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z';
          break;

        case 'plus-light':
          path = 'M17 9v2h-6v6H9v-6H3V9h6V3h2v6h6z';
          break;

        case 'plus':
          path = 'M17 7v3h-5v5H9v-5H4V7h5V2h3v5h5z';
          break;

        case 'portfolio':
          path = 'M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5zm4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1zM2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83.44-2.19 1.68-8.44 1.68-8.44.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5 0 0-1.59 6.7-1.72 7.33-.07.37-.22.99-.51 1.42zM15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1z';
          break;

        case 'post-status':
          path = 'M14 6c0 1.86-1.28 3.41-3 3.86V16c0 1-2 2-2 2V9.86c-1.72-.45-3-2-3-3.86 0-2.21 1.79-4 4-4s4 1.79 4 4zM8 5c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z';
          break;

        case 'pressthis':
          path = 'M14.76 1C16.55 1 18 2.46 18 4.25c0 1.78-1.45 3.24-3.24 3.24-.23 0-.47-.03-.7-.08L13 8.47V19H2V4h9.54c.13-2 1.52-3 3.22-3zm0 5.49C16 6.49 17 5.48 17 4.25 17 3.01 16 2 14.76 2s-2.24 1.01-2.24 2.25c0 .37.1.72.27 1.03L9.57 8.5c-.28.28-1.77 2.22-1.5 2.49.02.03.06.04.1.04.49 0 2.14-1.28 2.39-1.53l3.24-3.24c.29.14.61.23.96.23z';
          break;

        case 'products':
          path = 'M17 8h1v11H2V8h1V6c0-2.76 2.24-5 5-5 .71 0 1.39.15 2 .42.61-.27 1.29-.42 2-.42 2.76 0 5 2.24 5 5v2zM5 6v2h2V6c0-1.13.39-2.16 1.02-3H8C6.35 3 5 4.35 5 6zm10 2V6c0-1.65-1.35-3-3-3h-.02c.63.84 1.02 1.87 1.02 3v2h2zm-5-4.22C9.39 4.33 9 5.12 9 6v2h2V6c0-.88-.39-1.67-1-2.22z';
          break;

        case 'randomize':
          path = 'M18 6.01L14 9V7h-4l-5 8H2v-2h2l5-8h5V3zM2 5h3l1.15 2.17-1.12 1.8L4 7H2V5zm16 9.01L14 17v-2H9l-1.15-2.17 1.12-1.8L10 13h4v-2z';
          break;

        case 'redo':
          path = 'M8 5h5V2l6 4-6 4V7H8c-2.2 0-4 1.8-4 4s1.8 4 4 4h5v2H8c-3.3 0-6-2.7-6-6s2.7-6 6-6z';
          break;

        case 'rest-api':
          path = 'M3 4h2v12H3z';
          break;

        case 'rss':
          path = 'M14.92 18H18C18 9.32 10.82 2.25 2 2.25v3.02c7.12 0 12.92 5.71 12.92 12.73zm-5.44 0h3.08C12.56 12.27 7.82 7.6 2 7.6v3.02c2 0 3.87.77 5.29 2.16C8.7 14.17 9.48 16.03 9.48 18zm-5.35-.02c1.17 0 2.13-.93 2.13-2.09 0-1.15-.96-2.09-2.13-2.09-1.18 0-2.13.94-2.13 2.09 0 1.16.95 2.09 2.13 2.09z';
          break;

        case 'saved':
          path = 'M15.3 5.3l-6.8 6.8-2.8-2.8-1.4 1.4 4.2 4.2 8.2-8.2';
          break;

        case 'schedule':
          path = 'M2 2h16v4H2V2zm0 10V8h4v4H2zm6-2V8h4v2H8zm6 3V8h4v5h-4zm-6 5v-6h4v6H8zm-6 0v-4h4v4H2zm12 0v-3h4v3h-4z';
          break;

        case 'screenoptions':
          path = 'M9 9V3H3v6h6zm8 0V3h-6v6h6zm-8 8v-6H3v6h6zm8 0v-6h-6v6h6z';
          break;

        case 'search':
          path = 'M12.14 4.18c1.87 1.87 2.11 4.75.72 6.89.12.1.22.21.36.31.2.16.47.36.81.59.34.24.56.39.66.47.42.31.73.57.94.78.32.32.6.65.84 1 .25.35.44.69.59 1.04.14.35.21.68.18 1-.02.32-.14.59-.36.81s-.49.34-.81.36c-.31.02-.65-.04-.99-.19-.35-.14-.7-.34-1.04-.59-.35-.24-.68-.52-1-.84-.21-.21-.47-.52-.77-.93-.1-.13-.25-.35-.47-.66-.22-.32-.4-.57-.56-.78-.16-.2-.29-.35-.44-.5-2.07 1.09-4.69.76-6.44-.98-2.14-2.15-2.14-5.64 0-7.78 2.15-2.15 5.63-2.15 7.78 0zm-1.41 6.36c1.36-1.37 1.36-3.58 0-4.95-1.37-1.37-3.59-1.37-4.95 0-1.37 1.37-1.37 3.58 0 4.95 1.36 1.37 3.58 1.37 4.95 0z';
          break;

        case 'share-alt':
          path = 'M16.22 5.8c.47.69.29 1.62-.4 2.08-.69.47-1.62.29-2.08-.4-.16-.24-.35-.46-.55-.67-.21-.2-.43-.39-.67-.55s-.5-.3-.77-.41c-.27-.12-.55-.21-.84-.26-.59-.13-1.23-.13-1.82-.01-.29.06-.57.15-.84.27-.27.11-.53.25-.77.41s-.46.35-.66.55c-.21.21-.4.43-.56.67s-.3.5-.41.76c-.01.02-.01.03-.01.04-.1.24-.17.48-.23.72H1V6h2.66c.04-.07.07-.13.12-.2.27-.4.57-.77.91-1.11s.72-.65 1.11-.91c.4-.27.83-.51 1.28-.7s.93-.34 1.41-.43c.99-.21 2.03-.21 3.02 0 .48.09.96.24 1.41.43s.88.43 1.28.7c.39.26.77.57 1.11.91s.64.71.91 1.11zM12.5 10c0-1.38-1.12-2.5-2.5-2.5S7.5 8.62 7.5 10s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-8.72 4.2c-.47-.69-.29-1.62.4-2.09.69-.46 1.62-.28 2.08.41.16.24.35.46.55.67.21.2.43.39.67.55s.5.3.77.41c.27.12.55.2.84.26.59.13 1.23.12 1.82 0 .29-.06.57-.14.84-.26.27-.11.53-.25.77-.41s.46-.35.66-.55c.21-.21.4-.44.56-.67.16-.25.3-.5.41-.76.01-.02.01-.03.01-.04.1-.24.17-.48.23-.72H19v3h-2.66c-.04.06-.07.13-.12.2-.27.4-.57.77-.91 1.11s-.72.65-1.11.91c-.4.27-.83.51-1.28.7s-.93.33-1.41.43c-.99.21-2.03.21-3.02 0-.48-.1-.96-.24-1.41-.43s-.88-.43-1.28-.7c-.39-.26-.77-.57-1.11-.91s-.64-.71-.91-1.11z';
          break;

        case 'share-alt2':
          path = 'M18 8l-5 4V9.01c-2.58.06-4.88.45-7 2.99.29-3.57 2.66-5.66 7-5.94V3zM4 14h11v-2l2-1.6V16H2V5h9.43c-1.83.32-3.31 1-4.41 2H4v7z';
          break;

        case 'share':
          path = 'M14.5 12c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-.24.03-.46.09-.69l-4.38-2.3c-.55.61-1.33.99-2.21.99-1.66 0-3-1.34-3-3s1.34-3 3-3c.88 0 1.66.39 2.21.99l4.38-2.3c-.06-.23-.09-.45-.09-.69 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.88 0-1.66-.39-2.21-.99l-4.38 2.3c.06.23.09.45.09.69s-.03.46-.09.69l4.38 2.3c.55-.61 1.33-.99 2.21-.99z';
          break;

        case 'shield-alt':
          path = 'M10 2s3 2 7 2c0 11-7 14-7 14S3 15 3 4c4 0 7-2 7-2z';
          break;

        case 'shield':
          path = 'M10 2s3 2 7 2c0 11-7 14-7 14S3 15 3 4c4 0 7-2 7-2zm0 8h5s1-1 1-5c0 0-5-1-6-2v7H5c1 4 5 7 5 7v-7z';
          break;

        case 'shortcode':
          path = 'M6 14H4V6h2V4H2v12h4M7.1 17h2.1l3.7-14h-2.1M14 4v2h2v8h-2v2h4V4';
          break;

        case 'slides':
          path = 'M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z';
          break;

        case 'smartphone':
          path = 'M6 2h8c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm7 12V4H7v10h6zM8 5h4l-4 5V5z';
          break;

        case 'smiley':
          path = 'M7 5.2c1.1 0 2 .89 2 2 0 .37-.11.71-.28 1C8.72 8.2 8 8 7 8s-1.72.2-1.72.2c-.17-.29-.28-.63-.28-1 0-1.11.9-2 2-2zm6 0c1.11 0 2 .89 2 2 0 .37-.11.71-.28 1 0 0-.72-.2-1.72-.2s-1.72.2-1.72.2c-.17-.29-.28-.63-.28-1 0-1.11.89-2 2-2zm-3 13.7c3.72 0 7.03-2.36 8.23-5.88l-1.32-.46C15.9 15.52 13.12 17.5 10 17.5s-5.9-1.98-6.91-4.94l-1.32.46c1.2 3.52 4.51 5.88 8.23 5.88z';
          break;

        case 'sort':
          path = 'M11 7H1l5 7zm-2 7h10l-5-7z';
          break;

        case 'sos':
          path = 'M18 10c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8zM7.23 3.57L8.72 7.3c-.62.29-1.13.8-1.42 1.42L3.57 7.23c.71-1.64 2.02-2.95 3.66-3.66zm9.2 3.66L12.7 8.72c-.29-.62-.8-1.13-1.42-1.42l1.49-3.73c1.64.71 2.95 2.02 3.66 3.66zM10 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6.43.77l3.73-1.49c.29.62.8 1.13 1.42 1.42l-1.49 3.73c-1.64-.71-2.95-2.02-3.66-3.66zm9.2 3.66l-1.49-3.73c.62-.29 1.13-.8 1.42-1.42l3.73 1.49c-.71 1.64-2.02 2.95-3.66 3.66z';
          break;

        case 'star-empty':
          path = 'M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88l-4.68 2.34.87-5.15-3.18-3.56 4.65-.58z';
          break;

        case 'star-filled':
          path = 'M10 1l3 6 6 .75-4.12 4.62L16 19l-6-3-6 3 1.13-6.63L1 7.75 7 7z';
          break;

        case 'star-half':
          path = 'M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88V3.24z';
          break;

        case 'sticky':
          path = 'M5 3.61V1.04l8.99-.01-.01 2.58c-1.22.26-2.16 1.35-2.16 2.67v.5c.01 1.31.93 2.4 2.17 2.66l-.01 2.58h-3.41l-.01 2.57c0 .6-.47 4.41-1.06 4.41-.6 0-1.08-3.81-1.08-4.41v-2.56L5 12.02l.01-2.58c1.23-.25 2.15-1.35 2.15-2.66v-.5c0-1.31-.92-2.41-2.16-2.67z';
          break;

        case 'store':
          path = 'M1 10c.41.29.96.43 1.5.43.55 0 1.09-.14 1.5-.43.62-.46 1-1.17 1-2 0 .83.37 1.54 1 2 .41.29.96.43 1.5.43.55 0 1.09-.14 1.5-.43.62-.46 1-1.17 1-2 0 .83.37 1.54 1 2 .41.29.96.43 1.51.43.54 0 1.08-.14 1.49-.43.62-.46 1-1.17 1-2 0 .83.37 1.54 1 2 .41.29.96.43 1.5.43.55 0 1.09-.14 1.5-.43.63-.46 1-1.17 1-2V7l-3-7H4L0 7v1c0 .83.37 1.54 1 2zm2 8.99h5v-5h4v5h5v-7c-.37-.05-.72-.22-1-.43-.63-.45-1-.73-1-1.56 0 .83-.38 1.11-1 1.56-.41.3-.95.43-1.49.44-.55 0-1.1-.14-1.51-.44-.63-.45-1-.73-1-1.56 0 .83-.38 1.11-1 1.56-.41.3-.95.43-1.5.44-.54 0-1.09-.14-1.5-.44-.63-.45-1-.73-1-1.57 0 .84-.38 1.12-1 1.57-.29.21-.63.38-1 .44v6.99z';
          break;

        case 'table-col-after':
          path = 'M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z';
          break;

        case 'table-col-before':
          path = 'M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z';
          break;

        case 'table-col-delete':
          path = 'M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z';
          break;

        case 'table-row-after':
          path = 'M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z';
          break;

        case 'table-row-before':
          path = 'M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z';
          break;

        case 'table-row-delete':
          path = 'M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z';
          break;

        case 'tablet':
          path = 'M4 2h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm11 14V4H5v12h10zM6 5h6l-6 5V5z';
          break;

        case 'tag':
          path = 'M11 2h7v7L8 19l-7-7zm3 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z';
          break;

        case 'tagcloud':
          path = 'M11 3v4H1V3h10zm8 0v4h-7V3h7zM7 8v3H1V8h6zm12 0v3H8V8h11zM9 12v2H1v-2h8zm10 0v2h-9v-2h9zM6 15v1H1v-1h5zm5 0v1H7v-1h4zm3 0v1h-2v-1h2zm5 0v1h-4v-1h4z';
          break;

        case 'testimonial':
          path = 'M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3zm11 2H4v1h11V5zm1 3H4v1h12V8zm-3 3H4v1h9v-1z';
          break;

        case 'text':
          path = 'M18 3v2H2V3h16zm-6 4v2H2V7h10zm6 0v2h-4V7h4zM8 11v2H2v-2h6zm10 0v2h-8v-2h8zm-4 4v2H2v-2h12z';
          break;

        case 'thumbs-down':
          path = 'M7.28 18c-.15.02-.26-.02-.41-.07-.56-.19-.83-.79-.66-1.35.17-.55 1-3.04 1-3.58 0-.53-.75-1-1.35-1h-3c-.6 0-1-.4-1-1s2-7 2-7c.17-.39.55-1 1-1H14v9h-2.14c-.41.41-3.3 4.71-3.58 5.27-.21.41-.6.68-1 .73zM18 12h-2V3h2v9z';
          break;

        case 'thumbs-up':
          path = 'M12.72 2c.15-.02.26.02.41.07.56.19.83.79.66 1.35-.17.55-1 3.04-1 3.58 0 .53.75 1 1.35 1h3c.6 0 1 .4 1 1s-2 7-2 7c-.17.39-.55 1-1 1H6V8h2.14c.41-.41 3.3-4.71 3.58-5.27.21-.41.6-.68 1-.73zM2 8h2v9H2V8z';
          break;

        case 'tickets-alt':
          path = 'M20 6.38L18.99 9.2v-.01c-.52-.19-1.03-.16-1.53.08s-.85.62-1.04 1.14-.16 1.03.07 1.53c.24.5.62.84 1.15 1.03v.01l-1.01 2.82-15.06-5.38.99-2.79c.52.19 1.03.16 1.53-.08.5-.23.84-.61 1.03-1.13s.16-1.03-.08-1.53c-.23-.49-.61-.83-1.13-1.02L4.93 1zm-4.97 5.69l1.37-3.76c.12-.31.1-.65-.04-.95s-.39-.53-.7-.65L8.14 3.98c-.64-.23-1.37.12-1.6.74L5.17 8.48c-.24.65.1 1.37.74 1.6l7.52 2.74c.14.05.28.08.43.08.52 0 1-.33 1.17-.83zM7.97 4.45l7.51 2.73c.19.07.34.21.43.39.08.18.09.38.02.57l-1.37 3.76c-.13.38-.58.59-.96.45L6.09 9.61c-.39-.14-.59-.57-.45-.96l1.37-3.76c.1-.29.39-.49.7-.49.09 0 .17.02.26.05zm6.82 12.14c.35.27.75.41 1.2.41H16v3H0v-2.96c.55 0 1.03-.2 1.41-.59.39-.38.59-.86.59-1.41s-.2-1.02-.59-1.41-.86-.59-1.41-.59V10h1.05l-.28.8 2.87 1.02c-.51.16-.89.62-.89 1.18v4c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-1.75l.83.3c.12.43.36.78.71 1.04zM3.25 17v-4c0-.41.34-.75.75-.75h.83l7.92 2.83V17c0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75z';
          break;

        case 'tickets':
          path = 'M20 5.38L18.99 8.2v-.01c-1.04-.37-2.19.18-2.57 1.22-.37 1.04.17 2.19 1.22 2.56v.01l-1.01 2.82L1.57 9.42l.99-2.79c1.04.38 2.19-.17 2.56-1.21s-.17-2.18-1.21-2.55L4.93 0zm-5.45 3.37c.74-2.08-.34-4.37-2.42-5.12-2.08-.74-4.37.35-5.11 2.42-.74 2.08.34 4.38 2.42 5.12 2.07.74 4.37-.35 5.11-2.42zm-2.56-4.74c.89.32 1.57.94 1.97 1.71-.01-.01-.02-.01-.04-.02-.33-.12-.67.09-.78.4-.1.28-.03.57.05.91.04.27.09.62-.06 1.04-.1.29-.33.58-.65 1l-.74 1.01.08-4.08.4.11c.19.04.26-.24.08-.29 0 0-.57-.15-.92-.28-.34-.12-.88-.36-.88-.36-.18-.08-.3.19-.12.27 0 0 .16.08.34.16l.01 1.63L9.2 9.18l.08-4.11c.2.06.4.11.4.11.19.04.26-.23.07-.29 0 0-.56-.15-.91-.28-.07-.02-.14-.05-.22-.08.93-.7 2.19-.94 3.37-.52zM7.4 6.19c.17-.49.44-.92.78-1.27l.04 5c-.94-.95-1.3-2.39-.82-3.73zm4.04 4.75l2.1-2.63c.37-.41.57-.77.69-1.12.05-.12.08-.24.11-.35.09.57.04 1.18-.17 1.77-.45 1.25-1.51 2.1-2.73 2.33zm-.7-3.22l.02 3.22c0 .02 0 .04.01.06-.4 0-.8-.07-1.2-.21-.33-.12-.63-.28-.9-.48zm1.24 6.08l2.1.75c.24.84 1 1.45 1.91 1.45H16v3H0v-2.96c1.1 0 2-.89 2-2 0-1.1-.9-2-2-2V9h1.05l-.28.8 4.28 1.52C4.4 12.03 4 12.97 4 14c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.07-.02-.13-.02-.2zm-6.53-2.33l1.48.53c-.14.04-.15.27.03.28 0 0 .18.02.37.03l.56 1.54-.78 2.36-1.31-3.9c.21-.01.41-.03.41-.03.19-.02.17-.31-.02-.3 0 0-.59.05-.96.05-.07 0-.15 0-.23-.01.13-.2.28-.38.45-.55zM4.4 14c0-.52.12-1.02.32-1.46l1.71 4.7C5.23 16.65 4.4 15.42 4.4 14zm4.19-1.41l1.72.62c.07.17.12.37.12.61 0 .31-.12.66-.28 1.16l-.35 1.2zM11.6 14c0 1.33-.72 2.49-1.79 3.11l1.1-3.18c.06-.17.1-.31.14-.46l.52.19c.02.11.03.22.03.34zm-4.62 3.45l1.08-3.14 1.11 3.03c.01.02.01.04.02.05-.37.13-.77.21-1.19.21-.35 0-.69-.06-1.02-.15z';
          break;

        case 'tide':
          path = 'M17 7.2V3H3v7.1c2.6-.5 4.5-1.5 6.4-2.6.2-.2.4-.3.6-.5v3c-1.9 1.1-4 2.2-7 2.8V17h14V9.9c-2.6.5-4.4 1.5-6.2 2.6-.3.1-.5.3-.8.4V10c2-1.1 4-2.2 7-2.8z';
          break;

        case 'translation':
          path = 'M11 7H9.49c-.63 0-1.25.3-1.59.7L7 5H4.13l-2.39 7h1.69l.74-2H7v4H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v2zM6.51 9H4.49l1-2.93zM10 8h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2zm7.25 5v-1.08h-3.17V9.75h-1.16v2.17H9.75V13h1.28c.11.85.56 1.85 1.28 2.62-.87.36-1.89.62-2.31.62-.01.02.22.97.2 1.46.84 0 2.21-.5 3.28-1.15 1.09.65 2.48 1.15 3.34 1.15-.02-.49.2-1.44.2-1.46-.43 0-1.49-.27-2.38-.63.7-.77 1.14-1.77 1.25-2.61h1.36zm-3.81 1.93c-.5-.46-.85-1.13-1.01-1.93h2.09c-.17.8-.51 1.47-1 1.93l-.04.03s-.03-.02-.04-.03z';
          break;

        case 'trash':
          path = 'M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z';
          break;

        case 'twitter':
          path = 'M18.94 4.46c-.49.73-1.11 1.38-1.83 1.9.01.15.01.31.01.47 0 4.85-3.69 10.44-10.43 10.44-2.07 0-4-.61-5.63-1.65.29.03.58.05.88.05 1.72 0 3.3-.59 4.55-1.57-1.6-.03-2.95-1.09-3.42-2.55.22.04.45.07.69.07.33 0 .66-.05.96-.13-1.67-.34-2.94-1.82-2.94-3.6v-.04c.5.27 1.06.44 1.66.46-.98-.66-1.63-1.78-1.63-3.06 0-.67.18-1.3.5-1.84 1.81 2.22 4.51 3.68 7.56 3.83-.06-.27-.1-.55-.1-.84 0-2.02 1.65-3.66 3.67-3.66 1.06 0 2.01.44 2.68 1.16.83-.17 1.62-.47 2.33-.89-.28.85-.86 1.57-1.62 2.02.75-.08 1.45-.28 2.11-.57z';
          break;

        case 'undo':
          path = 'M12 5H7V2L1 6l6 4V7h5c2.2 0 4 1.8 4 4s-1.8 4-4 4H7v2h5c3.3 0 6-2.7 6-6s-2.7-6-6-6z';
          break;

        case 'universal-access-alt':
          path = 'M19 10c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zm-9-7.4c.83 0 1.5.67 1.5 1.5s-.67 1.51-1.5 1.51c-.82 0-1.5-.68-1.5-1.51s.68-1.5 1.5-1.5zM3.4 7.36c0-.65 6.6-.76 6.6-.76s6.6.11 6.6.76-4.47 1.4-4.47 1.4 1.69 8.14 1.06 8.38c-.62.24-3.19-5.19-3.19-5.19s-2.56 5.43-3.18 5.19c-.63-.24 1.06-8.38 1.06-8.38S3.4 8.01 3.4 7.36z';
          break;

        case 'universal-access':
          path = 'M10 2.6c.83 0 1.5.67 1.5 1.5s-.67 1.51-1.5 1.51c-.82 0-1.5-.68-1.5-1.51s.68-1.5 1.5-1.5zM3.4 7.36c0-.65 6.6-.76 6.6-.76s6.6.11 6.6.76-4.47 1.4-4.47 1.4 1.69 8.14 1.06 8.38c-.62.24-3.19-5.19-3.19-5.19s-2.56 5.43-3.18 5.19c-.63-.24 1.06-8.38 1.06-8.38S3.4 8.01 3.4 7.36z';
          break;

        case 'unlock':
          path = 'M12 9V6c0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4v3h1c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1h7zm-1 7l-.36-2.15c.51-.24.86-.75.86-1.35 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .6.35 1.11.86 1.35L9 16h2z';
          break;

        case 'update':
          path = 'M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z';
          break;

        case 'upload':
          path = 'M8 14V8H5l5-6 5 6h-3v6H8zm-2 2v-6H4v8h12.01v-8H14v6H6z';
          break;

        case 'vault':
          path = 'M18 17V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1zm-1 0H3V3h14v14zM4.75 4h10.5c.41 0 .75.34.75.75V6h-1v3h1v2h-1v3h1v1.25c0 .41-.34.75-.75.75H4.75c-.41 0-.75-.34-.75-.75V4.75c0-.41.34-.75.75-.75zM13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zM9 7l.77 1.15C10.49 8.46 11 9.17 11 10c0 1.1-.9 2-2 2s-2-.9-2-2c0-.83.51-1.54 1.23-1.85z';
          break;

        case 'video-alt':
          path = 'M8 5c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1 0 .57.49 1 1 1h5c.55 0 1-.45 1-1zm6 5l4-4v10l-4-4v-2zm-1 4V8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z';
          break;

        case 'video-alt2':
          path = 'M12 13V7c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2zm1-2.5l6 4.5V5l-6 4.5v1z';
          break;

        case 'video-alt3':
          path = 'M19 15V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2zM8 14V6l6 4z';
          break;

        case 'visibility':
          path = 'M19.7 9.4C17.7 6 14 3.9 10 3.9S2.3 6 .3 9.4L0 10l.3.6c2 3.4 5.7 5.5 9.7 5.5s7.7-2.1 9.7-5.5l.3-.6-.3-.6zM10 14.1c-3.1 0-6-1.6-7.7-4.1C3.6 8 5.7 6.6 8 6.1c-.9.6-1.5 1.7-1.5 2.9 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-1.2-.6-2.3-1.5-2.9 2.3.5 4.4 1.9 5.7 3.9-1.7 2.5-4.6 4.1-7.7 4.1z';
          break;

        case 'warning':
          path = 'M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z';
          break;

        case 'welcome-add-page':
          path = 'M17 7V4h-2V2h-3v1H3v15h11V9h1V7h2zm-1-2v1h-2v2h-1V6h-2V5h2V3h1v2h2z';
          break;

        case 'welcome-comments':
          path = 'M5 2h10c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2l-5 5v-5H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm8.5 8.5L11 8l2.5-2.5-1-1L10 7 7.5 4.5l-1 1L9 8l-2.5 2.5 1 1L10 9l2.5 2.5z';
          break;

        case 'welcome-learn-more':
          path = 'M10 10L2.54 7.02 3 18H1l.48-11.41L0 6l10-4 10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5 1-.22 1-.5-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3-.3-.04-.61-.07-.93-.07-2.55 0-4.78 1.37-6 3.41C8.78 13.37 6.55 12 4 12c-.32 0-.63.03-.93.07.16-1.23.65-2.36 1.36-3.3z';
          break;

        case 'welcome-view-site':
          path = 'M18 14V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1zm-8-8c2.3 0 4.4 1.14 6 3-1.6 1.86-3.7 3-6 3s-4.4-1.14-6-3c1.6-1.86 3.7-3 6-3zm2 3c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm2 8h3v1H3v-1h3v-1h8v1z';
          break;

        case 'welcome-widgets-menus':
          path = 'M19 16V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1zM4 4h13v4H4V4zm1 1v2h3V5H5zm4 0v2h3V5H9zm4 0v2h3V5h-3zm-8.5 5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 10h4v1H6v-1zm6 0h5v5h-5v-5zm-7.5 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 12h4v1H6v-1zm7 0v2h3v-2h-3zm-8.5 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 14h4v1H6v-1z';
          break;

        case 'welcome-write-blog':
          path = 'M16.89 1.2l1.41 1.41c.39.39.39 1.02 0 1.41L14 8.33V18H3V3h10.67l1.8-1.8c.4-.39 1.03-.4 1.42 0zm-5.66 8.48l5.37-5.36-1.42-1.42-5.36 5.37-.71 2.12z';
          break;

        case 'wordpress-alt':
          path = 'M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z';
          break;

        case 'wordpress':
          path = 'M20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10 10-4.48 10-10zM10 1.01c4.97 0 8.99 4.02 8.99 8.99s-4.02 8.99-8.99 8.99S1.01 14.97 1.01 10 5.03 1.01 10 1.01zM8.01 14.82L4.96 6.61c.49-.03 1.05-.08 1.05-.08.43-.05.38-1.01-.06-.99 0 0-1.29.1-2.13.1-.15 0-.33 0-.52-.01 1.44-2.17 3.9-3.6 6.7-3.6 2.09 0 3.99.79 5.41 2.09-.6-.08-1.45.35-1.45 1.42 0 .66.38 1.22.79 1.88.31.54.5 1.22.5 2.21 0 1.34-1.27 4.48-1.27 4.48l-2.71-7.5c.48-.03.75-.16.75-.16.43-.05.38-1.1-.05-1.08 0 0-1.3.11-2.14.11-.78 0-2.11-.11-2.11-.11-.43-.02-.48 1.06-.05 1.08l.84.08 1.12 3.04zm6.02 2.15L16.64 10s.67-1.69.39-3.81c.63 1.14.94 2.42.94 3.81 0 2.96-1.56 5.58-3.94 6.97zM2.68 6.77L6.5 17.25c-2.67-1.3-4.47-4.08-4.47-7.25 0-1.16.2-2.23.65-3.23zm7.45 4.53l2.29 6.25c-.75.27-1.57.42-2.42.42-.72 0-1.41-.11-2.06-.3z';
          break;

        case 'yes-alt':
          path = 'M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-.615 12.66h-1.34l-3.24-4.54 1.34-1.25 2.57 2.4 5.14-5.93 1.34.94-5.81 8.38z';
          break;

        case 'yes':
          path = 'M14.83 4.89l1.34.94-5.81 8.38H9.02L5.78 9.67l1.34-1.25 2.57 2.4z';
          break;
      }

      if (!path) {
        return null;
      }

      var iconClass = ['dashicon', 'dashicons-' + icon, className].filter(Boolean).join(' ');
      return Object(external_React_["createElement"])(svg_SVG, Object(esm_extends["a" /* default */])({
        "aria-hidden": true,
        role: "img",
        focusable: "false",
        className: iconClass,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 20 20"
      }, extraProps), Object(external_React_["createElement"])(svg_Path, {
        d: path
      }));
    }
  }]);

  return Dashicon;
}(external_React_["Component"]);


//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/icon/index.js




function icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { icon_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function Icon(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      size = _ref.size,
      additionalProps = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["icon", "size"]);

  // Dashicons should be 20x20 by default.
  var dashiconSize = size || 20;

  if ('string' === typeof icon) {
    return Object(external_React_["createElement"])(dashicon_Dashicon, Object(esm_extends["a" /* default */])({
      icon: icon,
      size: dashiconSize
    }, additionalProps));
  }

  if (icon && dashicon_Dashicon === icon.type) {
    return Object(external_React_["cloneElement"])(icon, icon_objectSpread({
      size: dashiconSize
    }, additionalProps));
  } // Icons should be 24x24 by default.


  var iconSize = size || 24;

  if ('function' === typeof icon) {
    if (icon.prototype instanceof external_React_["Component"]) {
      return Object(external_React_["createElement"])(icon, icon_objectSpread({
        size: iconSize
      }, additionalProps));
    }

    return icon(icon_objectSpread({
      size: iconSize
    }, additionalProps));
  }

  if (icon && (icon.type === 'svg' || icon.type === svg_SVG)) {
    var appliedProps = icon_objectSpread({
      width: iconSize,
      height: iconSize
    }, icon.props, {}, additionalProps);

    return Object(external_React_["createElement"])(svg_SVG, appliedProps);
  }

  if (Object(external_React_["isValidElement"])(icon)) {
    return Object(external_React_["cloneElement"])(icon, icon_objectSpread({
      size: iconSize
    }, additionalProps));
  }

  return icon;
}

/* harmony default export */ var build_module_icon = (Icon);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/button/index.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var disabledEventsOnDisabledButton = ['onMouseDown', 'onClick'];
function button_Button(props, ref) {
  var href = props.href,
      target = props.target,
      isPrimary = props.isPrimary,
      isLarge = props.isLarge,
      isSmall = props.isSmall,
      isTertiary = props.isTertiary,
      isPressed = props.isPressed,
      isBusy = props.isBusy,
      isDefault = props.isDefault,
      isSecondary = props.isSecondary,
      isLink = props.isLink,
      isDestructive = props.isDestructive,
      className = props.className,
      disabled = props.disabled,
      icon = props.icon,
      iconSize = props.iconSize,
      showTooltip = props.showTooltip,
      tooltipPosition = props.tooltipPosition,
      shortcut = props.shortcut,
      label = props.label,
      children = props.children,
      isFocusable = props.__experimentalIsFocusable,
      additionalProps = Object(esm_objectWithoutProperties["a" /* default */])(props, ["href", "target", "isPrimary", "isLarge", "isSmall", "isTertiary", "isPressed", "isBusy", "isDefault", "isSecondary", "isLink", "isDestructive", "className", "disabled", "icon", "iconSize", "showTooltip", "tooltipPosition", "shortcut", "label", "children", "__experimentalIsFocusable"]);

  if (isDefault) {
    Object(build_module["a" /* default */])('Button isDefault prop', {
      alternative: 'isSecondary'
    });
  }

  var classes = classnames_default()('components-button', className, {
    'is-secondary': isDefault || isSecondary,
    'is-primary': isPrimary,
    'is-large': isLarge,
    'is-small': isSmall,
    'is-tertiary': isTertiary,
    'is-pressed': isPressed,
    'is-busy': isBusy,
    'is-link': isLink,
    'is-destructive': isDestructive,
    'has-text': !!icon && !!children,
    'has-icon': !!icon
  });
  var trulyDisabled = disabled && !isFocusable;
  var Tag = href !== undefined && !trulyDisabled ? 'a' : 'button';
  var tagProps = Tag === 'a' ? {
    href: href,
    target: target
  } : {
    type: 'button',
    disabled: trulyDisabled,
    'aria-pressed': isPressed
  };

  if (disabled && isFocusable) {
    // In this case, the button will be disabled, but still focusable and
    // perceivable by screen reader users.
    tagProps['aria-disabled'] = true;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = disabledEventsOnDisabledButton[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var disabledEvent = _step.value;

        additionalProps[disabledEvent] = function (event) {
          event.stopPropagation();
          event.preventDefault();
        };
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } // Should show the tooltip if...


  var shouldShowTooltip = !trulyDisabled && ( // an explicit tooltip is passed or...
  showTooltip && label || // there's a shortcut or...
  shortcut || // there's a label and...
  !!label && ( // the children are empty and...
  !children || Object(external_lodash_["isArray"])(children) && !children.length) && // the tooltip is not explicitly disabled.
  false !== showTooltip);
  var element = Object(external_React_["createElement"])(Tag, Object(esm_extends["a" /* default */])({}, tagProps, additionalProps, {
    className: classes,
    "aria-label": additionalProps['aria-label'] || label,
    ref: ref
  }), icon && Object(external_React_["createElement"])(build_module_icon, {
    icon: icon,
    size: iconSize
  }), children);

  if (!shouldShowTooltip) {
    return element;
  }

  return Object(external_React_["createElement"])(tooltip, {
    text: label,
    shortcut: shortcut,
    position: tooltipPosition
  }, element);
}
/* harmony default export */ var build_module_button = (Object(external_React_["forwardRef"])(button_Button));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/toolbar-item/index.js
var toolbar_item = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/toolbar-context/index.js
var toolbar_context = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/toolbar-button/toolbar-button-container.js


var toolbar_button_container_ToolbarButtonContainer = function ToolbarButtonContainer(props) {
  return Object(external_React_["createElement"])("div", {
    className: props.className
  }, props.children);
};

/* harmony default export */ var toolbar_button_container = (toolbar_button_container_ToolbarButtonContainer);
//# sourceMappingURL=toolbar-button-container.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/toolbar-button/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function ToolbarButton(_ref) {
  var containerClassName = _ref.containerClassName,
      className = _ref.className,
      extraProps = _ref.extraProps,
      children = _ref.children,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["containerClassName", "className", "extraProps", "children"]);

  var accessibleToolbarState = Object(external_React_["useContext"])(toolbar_context["a" /* default */]);

  if (!accessibleToolbarState) {
    // This should be deprecated when <Toolbar __experimentalAccessibilityLabel="label">
    // becomes stable.
    return Object(external_React_["createElement"])(toolbar_button_container, {
      className: containerClassName
    }, Object(external_React_["createElement"])(build_module_button, Object(esm_extends["a" /* default */])({
      icon: props.icon,
      label: props.title,
      shortcut: props.shortcut,
      "data-subscript": props.subscript,
      onClick: function onClick(event) {
        event.stopPropagation();

        if (props.onClick) {
          props.onClick(event);
        }
      },
      className: classnames_default()('components-toolbar__control', className),
      isPressed: props.isActive,
      disabled: props.isDisabled
    }, extraProps)), children);
  } // ToobarItem will pass all props to the render prop child, which will pass
  // all props to Button. This means that ToolbarButton has the same API as
  // Button.


  return Object(external_React_["createElement"])(toolbar_item["a" /* default */], Object(esm_extends["a" /* default */])({
    className: classnames_default()('components-toolbar-button', className)
  }, props), function (toolbarItemProps) {
    return Object(external_React_["createElement"])(build_module_button, toolbarItemProps, children);
  });
}

/* harmony default export */ var toolbar_button = (ToolbarButton);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/toolbar-group/toolbar-group-container.js




var toolbar_group_container_ToolbarGroupContainer = function ToolbarGroupContainer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["className", "children"]);

  return Object(external_React_["createElement"])("div", Object(esm_extends["a" /* default */])({
    className: className
  }, props), children);
};

/* harmony default export */ var toolbar_group_container = (toolbar_group_container_ToolbarGroupContainer);
//# sourceMappingURL=toolbar-group-container.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/dropdown/index.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var dropdown_Dropdown =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(Dropdown, _Component);

  function Dropdown() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, Dropdown);

    _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(Dropdown).apply(this, arguments));
    _this.toggle = _this.toggle.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.close = _this.close.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.closeIfFocusOutside = _this.closeIfFocusOutside.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.containerRef = Object(external_React_["createRef"])();
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(esm_createClass["a" /* default */])(Dropdown, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.state.isOpen;
      var onToggle = this.props.onToggle;

      if (isOpen && onToggle) {
        onToggle(false);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var onToggle = this.props.onToggle;

      if (prevState.isOpen !== isOpen && onToggle) {
        onToggle(isOpen);
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    }
    /**
     * Closes the dropdown if a focus leaves the dropdown wrapper. This is
     * intentionally distinct from `onClose` since focus loss from the popover
     * is expected to occur when using the Dropdown's toggle button, in which
     * case the correct behavior is to keep the dropdown closed. The same applies
     * in case when focus is moved to the modal dialog.
     */

  }, {
    key: "closeIfFocusOutside",
    value: function closeIfFocusOutside() {
      if (!this.containerRef.current.contains(document.activeElement) && !document.activeElement.closest('[role="dialog"]')) {
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this.props.onClose) {
        this.props.onClose();
      }

      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          renderContent = _this$props.renderContent,
          renderToggle = _this$props.renderToggle,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 'bottom' : _this$props$position,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          expandOnMobile = _this$props.expandOnMobile,
          headerTitle = _this$props.headerTitle,
          focusOnMount = _this$props.focusOnMount,
          popoverProps = _this$props.popoverProps;
      var args = {
        isOpen: isOpen,
        onToggle: this.toggle,
        onClose: this.close
      };
      return Object(external_React_["createElement"])("div", {
        className: classnames_default()('components-dropdown', className),
        ref: this.containerRef
      }, renderToggle(args), isOpen && Object(external_React_["createElement"])(popover, Object(esm_extends["a" /* default */])({
        className: contentClassName,
        position: position,
        onClose: this.close,
        onFocusOutside: this.closeIfFocusOutside,
        expandOnMobile: expandOnMobile,
        headerTitle: headerTitle,
        focusOnMount: focusOnMount
      }, popoverProps), renderContent(args)));
    }
  }]);

  return Dropdown;
}(external_React_["Component"]);

/* harmony default export */ var dropdown = (dropdown_Dropdown);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/navigable-container/container.js










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function cycleValue(value, total, offset) {
  var nextValue = value + offset;

  if (nextValue < 0) {
    return total + nextValue;
  } else if (nextValue >= total) {
    return nextValue - total;
  }

  return nextValue;
}

var container_NavigableContainer =
/*#__PURE__*/
function (_Component) {
  Object(esm_inherits["a" /* default */])(NavigableContainer, _Component);

  function NavigableContainer() {
    var _this;

    Object(esm_classCallCheck["a" /* default */])(this, NavigableContainer);

    _this = Object(esm_possibleConstructorReturn["a" /* default */])(this, Object(esm_getPrototypeOf["a" /* default */])(NavigableContainer).apply(this, arguments));
    _this.onKeyDown = _this.onKeyDown.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.bindContainer = _this.bindContainer.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.getFocusableContext = _this.getFocusableContext.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    _this.getFocusableIndex = _this.getFocusableIndex.bind(Object(esm_assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(esm_createClass["a" /* default */])(NavigableContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // We use DOM event listeners instead of React event listeners
      // because we want to catch events from the underlying DOM tree
      // The React Tree can be different from the DOM tree when using
      // portals. Block Toolbars for instance are rendered in a separate
      // React Trees.
      this.container.addEventListener('keydown', this.onKeyDown);
      this.container.addEventListener('focus', this.onFocus);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener('keydown', this.onKeyDown);
      this.container.removeEventListener('focus', this.onFocus);
    }
  }, {
    key: "bindContainer",
    value: function bindContainer(ref) {
      var forwardedRef = this.props.forwardedRef;
      this.container = ref;

      if (Object(external_lodash_["isFunction"])(forwardedRef)) {
        forwardedRef(ref);
      } else if (forwardedRef && 'current' in forwardedRef) {
        forwardedRef.current = ref;
      }
    }
  }, {
    key: "getFocusableContext",
    value: function getFocusableContext(target) {
      var onlyBrowserTabstops = this.props.onlyBrowserTabstops;
      var finder = onlyBrowserTabstops ? build_module_focus.tabbable : build_module_focus.focusable;
      var focusables = finder.find(this.container);
      var index = this.getFocusableIndex(focusables, target);

      if (index > -1 && target) {
        return {
          index: index,
          target: target,
          focusables: focusables
        };
      }

      return null;
    }
  }, {
    key: "getFocusableIndex",
    value: function getFocusableIndex(focusables, target) {
      var directIndex = focusables.indexOf(target);

      if (directIndex !== -1) {
        return directIndex;
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }

      var getFocusableContext = this.getFocusableContext;
      var _this$props = this.props,
          _this$props$cycle = _this$props.cycle,
          cycle = _this$props$cycle === void 0 ? true : _this$props$cycle,
          eventToOffset = _this$props.eventToOffset,
          _this$props$onNavigat = _this$props.onNavigate,
          onNavigate = _this$props$onNavigat === void 0 ? external_lodash_["noop"] : _this$props$onNavigat,
          stopNavigationEvents = _this$props.stopNavigationEvents;
      var offset = eventToOffset(event); // eventToOffset returns undefined if the event is not handled by the component

      if (offset !== undefined && stopNavigationEvents) {
        // Prevents arrow key handlers bound to the document directly interfering
        event.stopImmediatePropagation(); // When navigating a collection of items, prevent scroll containers
        // from scrolling.

        if (event.target.getAttribute('role') === 'menuitem') {
          event.preventDefault();
        }
      }

      if (!offset) {
        return;
      }

      var context = getFocusableContext(document.activeElement);

      if (!context) {
        return;
      }

      var index = context.index,
          focusables = context.focusables;
      var nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;

      if (nextIndex >= 0 && nextIndex < focusables.length) {
        focusables[nextIndex].focus();
        onNavigate(nextIndex, focusables[nextIndex]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          props = Object(esm_objectWithoutProperties["a" /* default */])(_this$props2, ["children"]);

      return Object(external_React_["createElement"])("div", Object(esm_extends["a" /* default */])({
        ref: this.bindContainer
      }, Object(external_lodash_["omit"])(props, ['stopNavigationEvents', 'eventToOffset', 'onNavigate', 'onKeyDown', 'cycle', 'onlyBrowserTabstops', 'forwardedRef'])), children);
    }
  }]);

  return NavigableContainer;
}(external_React_["Component"]);

var container_forwardedNavigableContainer = function forwardedNavigableContainer(props, ref) {
  return Object(external_React_["createElement"])(container_NavigableContainer, Object(esm_extends["a" /* default */])({}, props, {
    forwardedRef: ref
  }));
};

container_forwardedNavigableContainer.displayName = 'NavigableContainer';
/* harmony default export */ var navigable_container_container = (Object(external_React_["forwardRef"])(container_forwardedNavigableContainer));
//# sourceMappingURL=container.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/navigable-container/menu.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function NavigableMenu(_ref, ref) {
  var _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'menu' : _ref$role,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'vertical' : _ref$orientation,
      rest = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["role", "orientation"]);

  var eventToOffset = function eventToOffset(evt) {
    var keyCode = evt.keyCode;
    var next = [keycodes_build_module["a" /* DOWN */]];
    var previous = [keycodes_build_module["f" /* UP */]];

    if (orientation === 'horizontal') {
      next = [keycodes_build_module["d" /* RIGHT */]];
      previous = [keycodes_build_module["c" /* LEFT */]];
    }

    if (orientation === 'both') {
      next = [keycodes_build_module["d" /* RIGHT */], keycodes_build_module["a" /* DOWN */]];
      previous = [keycodes_build_module["c" /* LEFT */], keycodes_build_module["f" /* UP */]];
    }

    if (Object(external_lodash_["includes"])(next, keyCode)) {
      return 1;
    } else if (Object(external_lodash_["includes"])(previous, keyCode)) {
      return -1;
    }
  };

  return Object(external_React_["createElement"])(navigable_container_container, Object(esm_extends["a" /* default */])({
    ref: ref,
    stopNavigationEvents: true,
    onlyBrowserTabstops: false,
    role: role,
    "aria-orientation": role === 'presentation' ? null : orientation,
    eventToOffset: eventToOffset
  }, rest));
}
/* harmony default export */ var menu = (Object(external_React_["forwardRef"])(NavigableMenu));
//# sourceMappingURL=menu.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/dropdown-menu/index.js




function dropdown_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dropdown_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dropdown_menu_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dropdown_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function mergeProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var mergedProps = dropdown_menu_objectSpread({}, defaultProps, {}, props);

  if (props.className && defaultProps.className) {
    mergedProps.className = classnames_default()(props.className, defaultProps.className);
  }

  return mergedProps;
}

function DropdownMenu(_ref) {
  var children = _ref.children,
      className = _ref.className,
      controls = _ref.controls,
      _ref$hasArrowIndicato = _ref.hasArrowIndicator,
      hasArrowIndicator = _ref$hasArrowIndicato === void 0 ? false : _ref$hasArrowIndicato,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'menu' : _ref$icon,
      label = _ref.label,
      popoverProps = _ref.popoverProps,
      toggleProps = _ref.toggleProps,
      menuProps = _ref.menuProps,
      menuLabel = _ref.menuLabel,
      position = _ref.position;

  if (menuLabel) {
    Object(build_module["a" /* default */])('`menuLabel` prop in `DropdownComponent`', {
      alternative: '`menuProps` object and its `aria-label` property',
      plugin: 'Gutenberg'
    });
  }

  if (position) {
    Object(build_module["a" /* default */])('`position` prop in `DropdownComponent`', {
      alternative: '`popoverProps` object and its `position` property',
      plugin: 'Gutenberg'
    });
  }

  if (Object(external_lodash_["isEmpty"])(controls) && !Object(external_lodash_["isFunction"])(children)) {
    return null;
  } // Normalize controls to nested array of objects (sets of controls)


  var controlSets;

  if (!Object(external_lodash_["isEmpty"])(controls)) {
    controlSets = controls;

    if (!Array.isArray(controlSets[0])) {
      controlSets = [controlSets];
    }
  }

  var mergedPopoverProps = mergeProps({
    className: 'components-dropdown-menu__popover',
    position: position
  }, popoverProps);
  return Object(external_React_["createElement"])(dropdown, {
    className: classnames_default()('components-dropdown-menu', className),
    popoverProps: mergedPopoverProps,
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;

      var openOnArrowDown = function openOnArrowDown(event) {
        if (!isOpen && event.keyCode === keycodes_build_module["a" /* DOWN */]) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };

      var mergedToggleProps = mergeProps({
        className: classnames_default()('components-dropdown-menu__toggle', {
          'is-opened': isOpen
        })
      }, toggleProps);
      return Object(external_React_["createElement"])(build_module_button, Object(esm_extends["a" /* default */])({}, mergedToggleProps, {
        icon: icon,
        onClick: function onClick(event) {
          onToggle(event);

          if (mergedToggleProps.onClick) {
            mergedToggleProps.onClick(event);
          }
        },
        onKeyDown: function onKeyDown(event) {
          openOnArrowDown(event);

          if (mergedToggleProps.onKeyDown) {
            mergedToggleProps.onKeyDown(event);
          }
        },
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        label: label,
        showTooltip: true
      }), (!icon || hasArrowIndicator) && Object(external_React_["createElement"])("span", {
        className: "components-dropdown-menu__indicator"
      }));
    },
    renderContent: function renderContent(props) {
      var mergedMenuProps = mergeProps({
        'aria-label': menuLabel || label,
        className: 'components-dropdown-menu__menu'
      }, menuProps);
      return Object(external_React_["createElement"])(menu, Object(esm_extends["a" /* default */])({}, mergedMenuProps, {
        role: "menu"
      }), Object(external_lodash_["isFunction"])(children) ? children(props) : null, Object(external_lodash_["flatMap"])(controlSets, function (controlSet, indexOfSet) {
        return controlSet.map(function (control, indexOfControl) {
          return Object(external_React_["createElement"])(build_module_button, {
            key: [indexOfSet, indexOfControl].join(),
            onClick: function onClick(event) {
              event.stopPropagation();
              props.onClose();

              if (control.onClick) {
                control.onClick();
              }
            },
            className: classnames_default()('components-dropdown-menu__menu-item', {
              'has-separator': indexOfSet > 0 && indexOfControl === 0,
              'is-active': control.isActive
            }),
            icon: control.icon,
            "aria-checked": control.role === 'menuitemcheckbox' || control.role === 'menuitemradio' ? control.isActive : undefined,
            role: control.role === 'menuitemcheckbox' || control.role === 'menuitemradio' ? control.role : 'menuitem',
            disabled: control.isDisabled
          }, control.title);
        });
      }));
    }
  });
}

/* harmony default export */ var dropdown_menu = (DropdownMenu);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/toolbar-group/toolbar-group-collapsed.js




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





function ToolbarGroupCollapsed(_ref) {
  var _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? [] : _ref$controls,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["controls"]);

  // It'll contain state if `ToolbarGroup` is being used within
  // `<Toolbar __experimentalAccessibilityLabel="label" />`
  var accessibleToolbarState = Object(external_React_["useContext"])(toolbar_context["a" /* default */]);

  var renderDropdownMenu = function renderDropdownMenu(toggleProps) {
    return Object(external_React_["createElement"])(dropdown_menu, Object(esm_extends["a" /* default */])({
      hasArrowIndicator: true,
      controls: controls,
      toggleProps: toggleProps
    }, props));
  };

  if (accessibleToolbarState) {
    return Object(external_React_["createElement"])(toolbar_item["a" /* default */], null, renderDropdownMenu);
  }

  return renderDropdownMenu();
}

/* harmony default export */ var toolbar_group_collapsed = (ToolbarGroupCollapsed);
//# sourceMappingURL=toolbar-group-collapsed.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/toolbar-group/index.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Renders a collapsible group of controls
 *
 * The `controls` prop accepts an array of sets. A set is an array of controls.
 * Controls have the following shape:
 *
 * ```
 * {
 *   icon: string,
 *   title: string,
 *   subscript: string,
 *   onClick: Function,
 *   isActive: boolean,
 *   isDisabled: boolean
 * }
 * ```
 *
 * For convenience it is also possible to pass only an array of controls. It is
 * then assumed this is the only set.
 *
 * Either `controls` or `children` is required, otherwise this components
 * renders nothing.
 *
 * @param {Object}                props               Component props.
 * @param {Array}                 [props.controls]    The controls to render in this toolbar.
 * @param {WPElement}             [props.children]    Any other things to render inside the toolbar besides the controls.
 * @param {string}                [props.className]   Class to set on the container div.
 * @param {boolean}               [props.isCollapsed] Turns ToolbarGroup into a dropdown menu.
 * @param {WPBlockTypeIconRender} [props.icon]        The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * @param {string}                [props.label]       The menu item text.
 */

function ToolbarGroup(_ref) {
  var _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? [] : _ref$controls,
      children = _ref.children,
      className = _ref.className,
      isCollapsed = _ref.isCollapsed,
      title = _ref.title,
      props = Object(esm_objectWithoutProperties["a" /* default */])(_ref, ["controls", "children", "className", "isCollapsed", "title"]);

  // It'll contain state if `ToolbarGroup` is being used within
  // `<Toolbar accessibilityLabel="label" />`
  var accessibleToolbarState = Object(external_React_["useContext"])(toolbar_context["a" /* default */]);

  if ((!controls || !controls.length) && !children) {
    return null;
  }

  var finalClassName = classnames_default()( // Unfortunately, there's legacy code referencing to `.components-toolbar`
  // So we can't get rid of it
  accessibleToolbarState ? 'components-toolbar-group' : 'components-toolbar', className); // Normalize controls to nested array of objects (sets of controls)

  var controlSets = controls;

  if (!Array.isArray(controlSets[0])) {
    controlSets = [controlSets];
  }

  if (isCollapsed) {
    return Object(external_React_["createElement"])(toolbar_group_collapsed, Object(esm_extends["a" /* default */])({
      label: title,
      controls: controlSets,
      className: finalClassName,
      children: children
    }, props));
  }

  return Object(external_React_["createElement"])(toolbar_group_container, Object(esm_extends["a" /* default */])({
    className: finalClassName
  }, props), Object(external_lodash_["flatMap"])(controlSets, function (controlSet, indexOfSet) {
    return controlSet.map(function (control, indexOfControl) {
      return Object(external_React_["createElement"])(toolbar_button, Object(esm_extends["a" /* default */])({
        key: [indexOfSet, indexOfControl].join(),
        containerClassName: indexOfSet > 0 && indexOfControl === 0 ? 'has-left-divider' : null
      }, control));
    });
  }), children);
}

/* harmony default export */ var toolbar_group = (ToolbarGroup);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./src/components/heading-level-icon/index.js


/**
 * WordPress dependencies
 */
var heading_level_icon_wp$components = wp.components,
    heading_level_icon_Path = heading_level_icon_wp$components.Path,
    heading_level_icon_SVG = heading_level_icon_wp$components.SVG;
function Index(_ref) {
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

  return Object(external_React_["createElement"])(heading_level_icon_SVG, {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(external_React_["createElement"])(heading_level_icon_Path, {
    d: levelToPath[level]
  }));
}
// CONCATENATED MODULE: ./src/components/heading-toolbar/index.js








/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    heading_toolbar_ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var heading_toolbar_Component = wp.element.Component;

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
        icon: Object(external_React_["createElement"])(Index, {
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
      return Object(external_React_["createElement"])(toolbar_group, {
        icon: Object(external_React_["createElement"])(Index, {
          level: selectedLevel
        }),
        controls: range_default()(minLevel, maxLevel).map(function (index) {
          return _this.createLevelControl(index, selectedLevel, onChange);
        })
      });
    }
  }]);

  return HeadingToolbar;
}(heading_toolbar_Component);

/* harmony default export */ var heading_toolbar = (heading_toolbar_HeadingToolbar);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/readOnlyError.js
var readOnlyError = __webpack_require__(38);
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








var createContext = wp.element.createContext;




/**
 * WordPress dependencies
 */

var with_parallax_wp$element = wp.element,
    with_parallax_Component = with_parallax_wp$element.Component,
    with_parallax_Fragment = with_parallax_wp$element.Fragment;
var with_parallax_InspectorControls = wp.blockEditor.InspectorControls;
var with_parallax_compose = wp.compose.compose;
var ParallaxContext = createContext();

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

          return Object(external_React_["createElement"])(with_parallax_Fragment, null, Object(external_React_["createElement"])("div", {
            ref: function ref(el) {
              return _this3.container = el;
            }
          }, Object(external_React_["createElement"])(ParallaxContext.Provider, {
            value: {
              style: this.getElementStyle(),
              state: this.state,
              container: this.container,
              scrollContainer: this.scrollContainer
            }
          }, Object(external_React_["createElement"])(WrappedComponent, this.props))));
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
          return Object(external_React_["createElement"])(with_parallax_Fragment, null, Object(external_React_["createElement"])(with_parallax_InspectorControls, null, Object(external_React_["createElement"])(scrolling_effect_controls, extends_default()({}, this.props, {
            isScrolling: this.state.isScrolling,
            previewScrolling: this.previewScrolling
          }))), Object(external_React_["createElement"])(WrappedComponent, this.props));
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

          return Object(external_React_["createElement"])(ParallaxContext.Consumer, null, function (context) {
            return Object(external_React_["createElement"])(WrappedComponent, extends_default()({
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

  return Object(external_React_["createElement"])(MediaPlaceholder, {
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
      return Object(external_React_["createElement"])("ul", {
        className: "novablocks-slideshow__gallery-edit"
      }, galleryImages.map(function (img, index) {
        var classes = ['novablocks-slideshow__gallery-item'];

        if (selected === index) {
          classes.push('novablocks-slideshow__gallery-item--active');
        }

        return Object(external_React_["createElement"])("li", {
          key: img.id || img.url,
          onClick: function onClick() {
            onSelectImage(index);
          }
        }, Object(external_React_["createElement"])("div", {
          className: classes.join(' ')
        }, Object(external_React_["createElement"])("img", {
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
    color_controls_Dropdown = color_controls_wp$components.Dropdown,
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
  return Object(external_React_["createElement"])(color_controls_Fragment, null, Object(external_React_["createElement"])(color_controls_RadioControl, {
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
  }), overlayFilterStyle !== 'none' && Object(external_React_["createElement"])(color_controls_RangeControl, {
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
  return Object(external_React_["createElement"])(color_controls_BaseControl, {
    label: color_controls_('Content Color', '__plugin_txtd')
  }, Object(external_React_["createElement"])(ColorPalette, {
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
  return Object(external_React_["createElement"])(PanelColorSettings, {
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
  }, Object(external_React_["createElement"])(color_controls_OverlayControls, props));
};

var color_controls_ColorToolbar = function ColorToolbar(props) {
  return Object(external_React_["createElement"])(Toolbar, {
    className: "pixelgrade-hero-block-toolbar"
  }, Object(external_React_["createElement"])(color_controls_Dropdown, {
    position: "bottom",
    className: "pixelgrade-hero-block-toolbar-dropdown",
    contentClassName: "components-nova--popover",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(external_React_["createElement"])(IconButton, {
        onClick: onToggle,
        icon: invert,
        "aria-expanded": isOpen,
        label: color_controls_('Colors', '__plugin_txtd'),
        labelPosition: "bottom"
      });
    },
    focusOnMount: false,
    renderContent: function renderContent() {
      return Object(external_React_["createElement"])(color_controls_Fragment, null, Object(external_React_["createElement"])(color_controls_ColorControls, props), Object(external_React_["createElement"])(color_controls_OverlayControls, props));
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
var block_horizontal_alignment_toolbar_createContext = wp.element.createContext;

var components_block_horizontal_alignment_toolbar_createContext = block_horizontal_alignment_toolbar_createContext({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: function setFocusedElement() {},
  clientId: null
}),
    block_horizontal_alignment_toolbar_Consumer = components_block_horizontal_alignment_toolbar_createContext.Consumer;

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
  return Object(external_React_["createElement"])(block_horizontal_alignment_toolbar_Toolbar, {
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
      return Object(external_React_["createElement"])(block_horizontal_alignment_toolbar_Consumer, null, function (context) {
        return Object(external_React_["createElement"])(OriginalComponent, extends_default()({}, props, mapContextToProps(context, props)));
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
  return Object(external_React_["createElement"])(block_vertical_alignment_toolbar_Toolbar, {
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
      return Object(external_React_["createElement"])(block_vertical_alignment_toolbar_Consumer, null, function (context) {
        return Object(external_React_["createElement"])(OriginalComponent, extends_default()({}, props, mapContextToProps(context, props)));
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
  return Object(external_React_["createElement"])(alignment_controls_Toolbar, {
    className: "pixelgrade-hero-block-toolbar"
  }, Object(external_React_["createElement"])(alignment_controls_Dropdown, {
    position: "bottom",
    className: "pixelgrade-hero-block-toolbar-dropdown",
    contentClassName: "components-nova--popover",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(external_React_["createElement"])(alignment_controls_IconButton, {
        onClick: onToggle,
        icon: alignment,
        "aria-expanded": isOpen,
        label: alignment_controls_('Content Position', '__plugin_txtd'),
        labelPosition: "bottom"
      });
    },
    focusOnMount: false,
    renderContent: function renderContent() {
      return Object(external_React_["createElement"])(alignment_controls_AlignmentControls, props);
    }
  }));
};

var alignment_controls_AlignmentControls = function AlignmentControls(props) {
  var _props$attributes = props.attributes,
      horizontalAlignment = _props$attributes.horizontalAlignment,
      verticalAlignment = _props$attributes.verticalAlignment,
      setAttributes = props.setAttributes;
  return Object(external_React_["createElement"])(alignment_controls_Fragment, null, Object(external_React_["createElement"])(PanelRow, null, Object(external_React_["createElement"])("span", null, alignment_controls_('Horizontal', '__plugin_txtd')), Object(external_React_["createElement"])(block_horizontal_alignment_toolbar, {
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
  })), Object(external_React_["createElement"])(PanelRow, null, Object(external_React_["createElement"])("span", null, alignment_controls_('Vertical', '__plugin_txtd')), Object(external_React_["createElement"])(block_vertical_alignment_toolbar, {
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
  return index === 0 && Object(external_React_["createElement"])(scroll_indicator_panel_PanelBody, {
    title: scroll_indicator_panel_('Scroll Indicator', '__plugin_txtd'),
    initialOpen: false
  }, Object(external_React_["createElement"])(scroll_indicator_panel_ToggleControl, {
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
      return Object(external_React_["createElement"])("div", {
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

    return Object(external_React_["createElement"])("div", {
      className: "novablocks-map"
    }, Object(external_React_["createElement"])("div", {
      className: "novablocks-map__search-box"
    }, Object(external_React_["createElement"])(map_Placeholder, {
      style: searchBoxStyles
    }, Object(external_React_["createElement"])("input", {
      type: "text",
      id: "novablocks-google-map-search-input-".concat(props.clientId),
      placeholder: map_('Enter an address to drop a pin on this map')
    }))), Object(external_React_["createElement"])("div", {
      className: "novablocks-map__map-container"
    }, Object(external_React_["createElement"])("div", {
      className: "novablocks-mask"
    }, Object(external_React_["createElement"])("div", {
      style: parallax.style
    }, Object(external_React_["createElement"])(Map, otherProps)))));
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

      return Object(external_React_["createElement"])(api_key_panel_body_PanelBody, {
        title: api_key_panel_body_('Google Maps API Key', '__plugin_txtd')
      }, Object(external_React_["createElement"])(api_key_panel_body_TextControl, {
        placeholder: api_key_panel_body_('Paste API key here', '__plugin_txtd'),
        value: apiKey,
        onChange: onChangeApiKey,
        help: apiKeyInstructions
      }), Object(external_React_["createElement"])(api_key_panel_body_Button, {
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
      return Object(external_React_["createElement"])("div", {
        className: "components-base-control"
      }, Object(external_React_["createElement"])("div", {
        className: "editor-block-styles block-editor-block-styles novablocks-block-editor-map-styles"
      }, options.map(function (option) {
        var style = _this2.getStaticStyle(_this2.compileStyles(option.styles));

        var size = '200x200';
        var mapType = 'roadmap';
        var url = 'https://maps.googleapis.com/maps/api/staticmap';
        var src = "".concat(url, "?center=").concat(latitude, ",").concat(longitude, "&zoom=").concat(zoom, "&size=").concat(size, "&maptype=").concat(mapType, "&").concat(style, "&key=").concat(apiKey);
        return Object(external_React_["createElement"])("div", {
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
        }, Object(external_React_["createElement"])("div", {
          className: "editor-block-styles__item-preview block-editor-block-styles__item-preview"
        }, Object(external_React_["createElement"])("img", {
          src: src,
          alt: "".concat(option.label, " map style preview")
        })), Object(external_React_["createElement"])("div", {
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

      return Object(external_React_["createElement"])(inspector_controls_InspectorControls, null, Object(external_React_["createElement"])(inspector_controls_PanelBody, {
        title: inspector_controls_('Map Design', '__plugin_txtd')
      }, Object(external_React_["createElement"])(map_style_select, extends_default()({}, this.props, {
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
      })), Object(external_React_["createElement"])(inspector_controls_ToggleControl, {
        label: inspector_controls_('Show Nearby Venues', '__plugin_txtd'),
        checked: showIcons,
        onChange: function onChange() {
          return setAttributes({
            showIcons: !showIcons
          });
        }
      }), Object(external_React_["createElement"])(inspector_controls_ToggleControl, {
        label: inspector_controls_('Show Street Labels', '__plugin_txtd'),
        checked: showLabels,
        onChange: function onChange() {
          return setAttributes({
            showLabels: !showLabels
          });
        }
      }), Object(external_React_["createElement"])(inspector_controls_ToggleControl, {
        label: inspector_controls_('Show Controls', '__plugin_txtd'),
        checked: showControls,
        onChange: function onChange() {
          return setAttributes({
            showControls: !showControls
          });
        }
      })), Object(external_React_["createElement"])(inspector_controls_PanelBody, {
        title: inspector_controls_('Zoom Level', '__plugin_txtd')
      }, Object(external_React_["createElement"])(inspector_controls_RangeControl, {
        value: zoom,
        onChange: function onChange(newZoom) {
          return setAttributes({
            zoom: newZoom
          });
        },
        min: 5,
        max: 20
      })), Object(external_React_["createElement"])(api_key_panel_body, this.props));
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
        return Object(external_React_["createElement"])(Spinner, null);
      }

      if (!fetchedScript || !savedApiKey || gmAuthFailure) {
        return Object(external_React_["createElement"])(google_map_placeholder, {
          saveApiKey: this.saveApiKey.bind(this),
          apiKey: savedApiKey,
          apiKeyInstructions: this.getInstructions()
        });
      }

      return Object(external_React_["createElement"])(edit_Fragment, null, Object(external_React_["createElement"])(google_map_map, extends_default()({}, this.props, {
        onChange: this.onChangeMarkers
      })));
    }
  }, {
    key: "getInstructions",
    value: function getInstructions() {
      var gmAuthFailure = this.state.gmAuthFailure;
      var url = '//developers.google.com/maps/documentation/javascript/get-api-key';
      var hyperlink = Object(external_React_["createElement"])("a", {
        target: "_blank",
        href: url
      }, edit_('register a Google Maps API Key', '__plugin_txtd'));

      if (gmAuthFailure) {
        return Object(external_React_["createElement"])(edit_Fragment, null, edit_('It seems that your Google Maps API key is INVALID. Please REFRESH the page, double check that you pasted it correctly, and that it is a valid API key. More information about how to', '__plugin_txtd'), " ", hyperlink);
      }

      return Object(external_React_["createElement"])(edit_Fragment, null, edit_('To display the map, you need to', '__plugin_txtd'), " ", hyperlink, " ", edit_('and include it bellow.', '__plugin_txtd'));
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

      return Object(external_React_["createElement"])(edit_Fragment, null, Object(external_React_["createElement"])(BlockControls, null, Object(external_React_["createElement"])(BlockAlignmentToolbar, {
        value: align,
        onChange: function onChange(align) {
          return setAttributes({
            align: align
          });
        },
        controls: ['center', 'full']
      })), !!fetchedApiKey && !!fetchedScript && !!savedApiKey && !gmAuthFailure && Object(external_React_["createElement"])(inspector_controls, extends_default()({}, newProps, {
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
    header_icons_SVG = header_icons_wp$components.SVG,
    header_icons_Path = header_icons_wp$components.Path;
var logoLeft = Object(external_React_["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48px",
  height: "48px",
  viewBox: "0 0 48 48"
}, Object(external_React_["createElement"])("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, Object(external_React_["createElement"])("path", {
  fill: "#6565F3",
  d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
  transform: "translate(0 17)"
}), Object(external_React_["createElement"])("path", {
  fill: "#FAE547",
  d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
  transform: "translate(0 17)"
}), Object(external_React_["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M20 20H48V28H20z"
})));
var logoRight = Object(external_React_["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48px",
  height: "48px",
  viewBox: "0 0 48 48"
}, Object(external_React_["createElement"])("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, Object(external_React_["createElement"])("path", {
  fill: "#6565F3",
  d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
  transform: "translate(34 17)"
}), Object(external_React_["createElement"])("path", {
  fill: "#FAE547",
  d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
  transform: "translate(34 17)"
}), Object(external_React_["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M0 20H28V28H0z"
})));
var logoCenter = Object(external_React_["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48px",
  height: "48px",
  viewBox: "0 0 48 48"
}, Object(external_React_["createElement"])("g", {
  fill: "none",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1"
}, Object(external_React_["createElement"])("path", {
  fill: "#6565F3",
  d: "M7.172 0C10.912 0 14 3.033 14 6.774 14 10.764 10.734 14 6.744 14 3.034 14 0 10.993 0 7.285v-.17C0 3.185 3.242 0 7.172 0zm.115 3.111a2.62 2.62 0 00-2.605 2.333h.656a2.828 2.828 0 012.829 2.829v1.05a2.963 2.963 0 002.722-2.953v-.312a2.947 2.947 0 00-2.947-2.947h-.655z",
  transform: "translate(17 17)"
}), Object(external_React_["createElement"])("path", {
  fill: "#FAE547",
  d: "M4.714 7C3.768 7 3 7.768 3 8.714A2.286 2.286 0 005.286 11h.176C6.312 11 7 10.311 7 9.462v-.644A1.818 1.818 0 005.182 7h-.468z",
  transform: "translate(17 17)"
}), Object(external_React_["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M0 20H9V28H0z"
}), Object(external_React_["createElement"])("path", {
  fill: "#A5A5A5",
  d: "M0 20H11V28H0z"
}), Object(external_React_["createElement"])("path", {
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
    edit_InnerBlocks = header_edit_wp$blockEditor.InnerBlocks;
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
  return [Object(external_React_["createElement"])(edit_BlockControls, null, Object(external_React_["createElement"])(edit_Toolbar, null, Object(external_React_["createElement"])(edit_IconButton, {
    className: "components-icon-button components-toolbar__control",
    label: header_edit_('Change Layout', '__plugin_txtd'),
    onClick: function onClick() {
      return setTemplate(null);
    },
    icon: "edit"
  }))), Object(external_React_["createElement"])("div", {
    className: classNames
  }, Object(external_React_["createElement"])(edit_InnerBlocks, {
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
      return Object(external_React_["createElement"])(header_InnerBlocks.Content, null);
    }
  });
}

/* harmony default export */ var blocks_header = (header_init);
// CONCATENATED MODULE: ./src/blocks/headline/edit.js




var headline_edit_ = wp.i18n.__;
var headline_edit_Fragment = wp.element.Fragment;
/**
 * WordPress dependencies
 */

var headline_edit_wp$blockEditor = wp.blockEditor,
    RichText = headline_edit_wp$blockEditor.RichText,
    edit_AlignmentToolbar = headline_edit_wp$blockEditor.AlignmentToolbar,
    headline_edit_BlockControls = headline_edit_wp$blockEditor.BlockControls,
    edit_InspectorControls = headline_edit_wp$blockEditor.InspectorControls;
var edit_PanelBody = wp.components.PanelBody;
function HeadlineEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className;
  var align = attributes.align,
      primary = attributes.primary,
      secondary = attributes.secondary,
      level = attributes.level;
  var TagName = "h".concat(level);
  return Object(external_React_["createElement"])(headline_edit_Fragment, null, Object(external_React_["createElement"])(headline_edit_BlockControls, null, Object(external_React_["createElement"])(heading_toolbar, {
    minLevel: 2,
    maxLevel: 4,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  }), Object(external_React_["createElement"])(edit_AlignmentToolbar, {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(external_React_["createElement"])(edit_InspectorControls, null, Object(external_React_["createElement"])(edit_PanelBody, {
    title: headline_edit_('Heading settings', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])("p", null, headline_edit_('Level', '__plugin_txtd')), Object(external_React_["createElement"])(heading_toolbar, {
    minLevel: 1,
    maxLevel: 6,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  }))), Object(external_React_["createElement"])(TagName, {
    className: classnames_default()(className, 'c-headline', defineProperty_default()({}, "has-text-align-".concat(align), align))
  }, Object(external_React_["createElement"])(RichText, {
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
  }), Object(external_React_["createElement"])(RichText, {
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
  return Object(external_React_["createElement"])(TagName, {
    className: className ? className : undefined
  }, Object(external_React_["createElement"])(save_RichText.Content, {
    className: "c-headline__secondary",
    value: secondary,
    tagName: "span"
  }), Object(external_React_["createElement"])(save_RichText.Content, {
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
    description: headline_('Advanced heading block with a fancier display.', '__plugin_txtd'),
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

  return Object(external_React_["createElement"])("div", {
    className: "novablocks-mask"
  }, Object(external_React_["createElement"])("div", {
    className: "novablocks-hero__background"
  }, media.type === 'image' && typeof media.sizes !== 'undefined' && Object(external_React_["createElement"])("img", {
    className: "novablocks-hero__media",
    src: media.sizes.full.url,
    alt: media.alt,
    style: styles
  }), media.type === 'video' && Object(external_React_["createElement"])("video", {
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
  return Object(external_React_["createElement"])("div", {
    className: classes.join(' '),
    style: styles.hero
  }, Object(external_React_["createElement"])(background, props), Object(external_React_["createElement"])("div", {
    className: "novablocks-hero__foreground novablocks-u-content-padding novablocks-u-content-align",
    style: styles.foreground
  }, Object(external_React_["createElement"])("div", {
    className: "novablocks-hero__inner-container novablocks-u-content-width",
    style: styles.content
  }, Object(external_React_["createElement"])(preview_InnerBlocks, {
    template: settings.hero.template
  })), scrollIndicator && Object(external_React_["createElement"])("div", {
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
  return Object(external_React_["createElement"])(block_controls_BlockControls, null, Object(external_React_["createElement"])(alignment_controls_AlignmentToolbar, props), Object(external_React_["createElement"])(color_controls_ColorToolbar, props), Object(external_React_["createElement"])(block_controls_Toolbar, null, Object(external_React_["createElement"])(MediaUpload, {
    allowedTypes: block_controls_ALLOWED_MEDIA_TYPES,
    onSelect: function onSelect(media) {
      return setAttributes({
        media: media
      });
    },
    render: function render(_ref) {
      var open = _ref.open;
      return Object(external_React_["createElement"])(block_controls_IconButton, {
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
    hero_edit_PanelBody = hero_edit_wp$components.PanelBody,
    edit_RadioControl = hero_edit_wp$components.RadioControl;
var hero_edit_wp$element = wp.element,
    hero_edit_Component = hero_edit_wp$element.Component,
    hero_edit_Fragment = hero_edit_wp$element.Fragment;
var hero_edit_wp$compose = wp.compose,
    hero_edit_compose = hero_edit_wp$compose.compose,
    hero_edit_createHigherOrderComponent = hero_edit_wp$compose.createHigherOrderComponent;
var edit_select = wp.data.select;
var FirstBlockControls = utils_withFirstBlockConditions(function (props) {
  return Object(external_React_["createElement"])(hero_edit_Fragment, null, Object(external_React_["createElement"])(ScrollIndicatorPanel, props), Object(external_React_["createElement"])(position_indicators_panel, props));
});

var edit_BlockHeightControls = function BlockHeightControls(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      settings = props.settings;
  var minHeightFallback = attributes.minHeightFallback;
  return Object(external_React_["createElement"])(hero_edit_PanelBody, {
    title: hero_edit_('Height', '__plugin_txtd'),
    initialOpen: false
  }, Object(external_React_["createElement"])(edit_RadioControl, {
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
      return Object(external_React_["createElement"])(hero_edit_Fragment, null, Object(external_React_["createElement"])(preview, this.props), Object(external_React_["createElement"])(block_controls, this.props), Object(external_React_["createElement"])(hero_edit_InspectorControls, null, Object(external_React_["createElement"])(layout_panel, this.props), Object(external_React_["createElement"])(edit_BlockHeightControls, this.props), usePostMetaAttributes && Object(external_React_["createElement"])(FirstBlockControls, extends_default()({}, this.props, {
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
      return Object(external_React_["createElement"])(hero_InnerBlocks.Content, null);
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
      return Object(external_React_["createElement"])(wp.serverSideRender, {
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
  var galleryImages = images;

  if (images.length && typeof images[0] === 'string') {
    galleryImages = images.map(function (image) {
      return JSON.parse(image);
    });
  }

  var hasImages = !!galleryImages.length;
  return Object(external_React_["createElement"])(media_block_controls_BlockControls, null, Object(external_React_["createElement"])(media_block_controls_Toolbar, {
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
  }), Object(external_React_["createElement"])(alignment_controls_AlignmentToolbar, props), hasImages && Object(external_React_["createElement"])(media_block_controls_Toolbar, null, Object(external_React_["createElement"])(block_controls_MediaUpload, {
    type: "image",
    multiple: true,
    gallery: true,
    value: galleryImages.map(function (image) {
      return image.id;
    }),
    onSelect: updateImages,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(external_React_["createElement"])(media_block_controls_IconButton, {
        className: "components-icon-button components-toolbar__control",
        label: media_block_controls_('Change Media', '__plugin_txtd'),
        icon: swap,
        onClick: open
      });
    }
  })));
};

/* harmony default export */ var media_block_controls = (block_controls_MediaBlockControls);
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
  var classNames = classnames_default()(className, "novablocks-block", "novablocks-media", "has-image-on-the-".concat(mediaPosition), "block-is-".concat(blockStyle), "content-is-".concat(contentStyle), {
    'has-background': blockStyle !== 'basic'
  });
  var galleryImages = images;

  if (images.length && typeof images[0] === 'string') {
    galleryImages = images.map(function (image) {
      return JSON.parse(image);
    });
  }

  var displayImages = function displayImages(imagesArray) {
    if (0 === imagesArray.length) {
      return Object(external_React_["createElement"])(preview_MediaPlaceholder, {
        icon: Object(external_React_["createElement"])(BlockIcon, {
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
      return Object(external_React_["createElement"])("div", {
        key: image.id,
        className: "novablocks-media__image"
      }, Object(external_React_["createElement"])("img", {
        alt: image.alt,
        src: image.url
      }));
    });
  };

  return Object(external_React_["createElement"])("div", {
    className: classNames
  }, Object(external_React_["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, Object(external_React_["createElement"])("div", {
    className: "wp-block",
    "data-align": "wide"
  }, Object(external_React_["createElement"])("div", {
    className: "novablocks-media__layout"
  }, Object(external_React_["createElement"])("div", {
    className: "novablocks-media__content"
  }, Object(external_React_["createElement"])("div", {
    className: "novablocks-media__inner-container novablocks-block__content"
  }, Object(external_React_["createElement"])(media_preview_InnerBlocks, {
    allowedBlocks: settings.media.allowedBlocks,
    template: settings.media.template
  }))), Object(external_React_["createElement"])("div", {
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

  return Object(external_React_["createElement"])(media_edit_Fragment, null, Object(external_React_["createElement"])(media_preview, media_edit_objectSpread({}, props, {
    updateImages: updateImages
  })), Object(external_React_["createElement"])(media_block_controls, media_edit_objectSpread({}, props, {
    updateImages: updateImages
  })));
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
      return Object(external_React_["createElement"])(media_InnerBlocks.Content, null);
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

  return Object(external_React_["createElement"])("div", {
    className: "novablocks-mask"
  }, Object(external_React_["createElement"])("div", {
    className: "novablocks-slideshow__background"
  }, Object(external_React_["createElement"])("img", {
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
      return Object(external_React_["createElement"])(preview_Fragment, null, !!galleryImages.length && Object(external_React_["createElement"])("div", {
        className: classes.join(' '),
        style: styles.slideshow
      }, Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__slider"
      }, Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__slide"
      }, previewImage && Object(external_React_["createElement"])(preview_Fragment, null, Object(external_React_["createElement"])(slideshow_background, this.props), Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__content novablocks-u-content-padding",
        style: styles.foreground
      }, Object(external_React_["createElement"])("div", {
        className: "novablocks-u-content-align"
      }, Object(external_React_["createElement"])("div", {
        className: "novablocks-u-content-width",
        style: styles.content
      }, !!previewImage.title && !!previewImage.title.rendered && Object(external_React_["createElement"])("h2", null, previewImage.title.rendered), !!previewImage.caption && Object(external_React_["createElement"])("p", null, previewImage.caption))))))), Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__controls"
      }, Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled",
        onClick: this.props.onPrevArrowClick
      }), Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled",
        onClick: this.props.onNextArrowClick
      }))), !galleryImages.length && Object(external_React_["createElement"])(preview_Fragment, null, Object(external_React_["createElement"])(gallery_options_GalleryPlaceholder, this.props), Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__controls"
      }, Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled"
      }), Object(external_React_["createElement"])("div", {
        className: "novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dimensions = this.state.dimensions;
      return Object(external_React_["createElement"])("div", {
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
    inspector_controls_RadioControl = slideshow_inspector_controls_wp$components.RadioControl,
    slideshow_inspector_controls_RangeControl = slideshow_inspector_controls_wp$components.RangeControl;
var slideshow_inspector_controls_InspectorControls = wp.blockEditor.InspectorControls;
var inspector_controls_Fragment = wp.element.Fragment;

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
  return Object(external_React_["createElement"])(slideshow_inspector_controls_InspectorControls, null, !!galleryImages.length && Object(external_React_["createElement"])(slideshow_inspector_controls_PanelBody, {
    className: 'nova-blocks-slideshow-type-panel',
    title: slideshow_inspector_controls_('Slides', '__plugin_txtd')
  }, Object(external_React_["createElement"])(gallery_options_GalleryPreview, {
    galleryImages: galleryImages,
    onSelectImage: setIndex,
    selected: selectedIndex
  }), selectedImage && Object(external_React_["createElement"])(inspector_controls_Fragment, null, Object(external_React_["createElement"])(inspector_controls_FocalPointPicker, {
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
  }))), 'gallery' === slideshowType && Object(external_React_["createElement"])(inspector_controls_Fragment, null, Object(external_React_["createElement"])(layout_panel, props), Object(external_React_["createElement"])(slideshow_inspector_controls_PanelBody, {
    title: slideshow_inspector_controls_('Height', '__plugin_txtd'),
    initialOpen: false
  }, Object(external_React_["createElement"])(inspector_controls_RadioControl, {
    label: slideshow_inspector_controls_('Minimum Height', '__plugin_txtd'),
    selected: minHeight,
    onChange: function onChange(nextMinHeight) {
      setAttributes({
        minHeight: parseInt(nextMinHeight, 10)
      });
    },
    options: minHeightOptions
  }))), 'gallery' !== slideshowType && Object(external_React_["createElement"])(slideshow_inspector_controls_PanelBody, null, slideshow_inspector_controls_('Coming Soon', '__plugin_txtd')));
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

  return Object(external_React_["createElement"])(slideshow_block_controls_BlockControls, null, Object(external_React_["createElement"])(alignment_controls_AlignmentToolbar, props), Object(external_React_["createElement"])(color_controls_ColorToolbar, props), Object(external_React_["createElement"])(slideshow_block_controls_Toolbar, null, Object(external_React_["createElement"])(slideshow_block_controls_MediaUpload, {
    type: "image",
    multiple: true,
    gallery: true,
    value: galleryImages.map(function (image) {
      return image.id;
    }),
    onSelect: onChangeGallery,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(external_React_["createElement"])(slideshow_block_controls_IconButton, {
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

      return Object(external_React_["createElement"])(slideshow_edit_Fragment, null, Object(external_React_["createElement"])(slideshow_preview, extends_default()({}, this.props, {
        previewImage: galleryImages[selectedIndex],
        onPrevArrowClick: this.onPrevArrowClick.bind(this),
        onNextArrowClick: this.onNextArrowClick.bind(this)
      })), Object(external_React_["createElement"])(slideshow_inspector_controls, slideshow_edit_objectSpread({}, this.props, {
        setIndex: setIndex,
        selectedIndex: selectedIndex
      })), Object(external_React_["createElement"])(slideshow_block_controls, this.props));
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
      return Object(external_React_["createElement"])(slideshow_InnerBlocks.Content, null);
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
      return [Object(external_React_["createElement"])(wp.serverSideRender, {
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
  return Object(external_React_["createElement"])(menu_food_inspector_controls_Fragment, null, Object(external_React_["createElement"])(menu_food_inspector_controls_InspectorControls, null, Object(external_React_["createElement"])(menu_food_inspector_controls_PanelBody, {
    title: menu_food_inspector_controls_('Layout', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(menu_food_inspector_controls_ToggleControl, {
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
var preview_createBlock = wp.blocks.createBlock;
var preview_IconButton = wp.components.IconButton;
var preview_ALLOWED_BLOCKS = ['novablocks/menu-food-section'];
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
    var block = preview_createBlock('novablocks/menu-food-section');
    var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
  };

  var classNames = classnames_default()(className, "nova-food-menu", {
    'nova-food-menu--layout': enableTwoColumns === true
  });
  return Object(external_React_["createElement"])("div", {
    className: classNames
  }, Object(external_React_["createElement"])(menu_food_preview_InnerBlocks, {
    allowedBlocks: preview_ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: false
  }), Object(external_React_["createElement"])(preview_IconButton, {
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
  return Object(external_React_["createElement"])(menu_food_edit_Fragment, null, Object(external_React_["createElement"])(menu_food_preview, props), Object(external_React_["createElement"])(menu_food_inspector_controls, props));
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
  return Object(external_React_["createElement"])("div", {
    className: classNames,
    itemScope: true,
    itemType: "http://schema.org/Menu"
  }, Object(external_React_["createElement"])(save_InnerBlocks.Content, null));
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
      },
      align: {
        type: 'string',
        default: 'wide'
      }
    },
    example: {
      attributes: {
        enableTwoColumns: false
      }
    },
    styles: [{
      name: 'classic',
      label: menu_food_('Classic'),
      isDefault: true
    }, {
      name: 'basic',
      label: menu_food_('Basic')
    }],
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
var menu_food_section_preview_createBlock = wp.blocks.createBlock;
var menu_food_section_preview_IconButton = wp.components.IconButton;
/**
 * Internal dependencies.
 */

var menu_food_section_preview_ALLOWED_BLOCKS = ['novablocks/menu-food-item'];
var preview_TEMPLATE = [['novablocks/menu-food-item']];

var preview_FoodMenuSectionPreview = function FoodMenuSectionPreview(props) {
  var sectionTitle = props.attributes.sectionTitle,
      setAttributes = props.setAttributes,
      clientId = props.clientId,
      className = props.className;

  var addFoodMenuItem = function addFoodMenuItem() {
    var block = menu_food_section_preview_createBlock('novablocks/menu-food-item');
    var index = wp.data.select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks.length;
    wp.data.dispatch('core/block-editor').insertBlock(block, index, clientId);
  };

  var classNames = classnames_default()(className, "nova-food-menu__section");
  return Object(external_React_["createElement"])("div", {
    className: classNames
  }, Object(external_React_["createElement"])("header", {
    className: "nova-food-menu__header"
  }, Object(external_React_["createElement"])(preview_RichText, {
    tagName: "h3",
    className: "section-title",
    value: sectionTitle,
    onChange: function onChange(sectionTitle) {
      return setAttributes({
        sectionTitle: sectionTitle
      });
    }
  })), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu__items"
  }, Object(external_React_["createElement"])(menu_food_section_preview_InnerBlocks, {
    allowedBlocks: menu_food_section_preview_ALLOWED_BLOCKS,
    template: preview_TEMPLATE,
    renderAppender: false
  })), Object(external_React_["createElement"])(menu_food_section_preview_IconButton, {
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
  return Object(external_React_["createElement"])(menu_food_section_edit_Fragment, null, Object(external_React_["createElement"])(menu_food_section_preview, props));
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
  return Object(external_React_["createElement"])("div", {
    className: classNames,
    itemScope: true,
    itemType: "http://schema.org/MenuSection"
  }, Object(external_React_["createElement"])("header", {
    className: "nova-food-menu__header"
  }, Object(external_React_["createElement"])(menu_food_section_save_RichText.Content, {
    tagName: "h3",
    className: "section-title",
    value: sectionTitle,
    onChange: function onChange(sectionTitle) {
      return setAttributes({
        sectionTitle: sectionTitle
      });
    },
    itemprop: "name"
  })), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu__items"
  }, Object(external_React_["createElement"])(menu_food_section_save_InnerBlocks.Content, null)));
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
  return Object(external_React_["createElement"])("div", {
    className: classNames
  }, enableHighlightFoodItem && Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__highlight-label"
  }, Object(external_React_["createElement"])(menu_food_item_preview_RichText, {
    tagName: "h5",
    className: "nova-food-menu-item__label",
    value: highlightLabel,
    onChange: function onChange(highlightLabel) {
      return setAttributes({
        highlightLabel: highlightLabel
      });
    },
    allowedFormats: []
  })), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__title"
  }, Object(external_React_["createElement"])(menu_food_item_preview_RichText, {
    value: title,
    tagName: "h4",
    className: "item-title",
    placeholder: menu_food_item_preview_('Product Title', '__plugin_txtd'),
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  })), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__prices"
  }, Object(external_React_["createElement"])(menu_food_item_preview_RichText, {
    value: price,
    tagName: "span",
    className: "item-price",
    placeholder: menu_food_item_preview_('$0.00', '__plugin_txtd'),
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    }
  }), enableSalePrice && Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__price--sale"
  }, Object(external_React_["createElement"])(menu_food_item_preview_RichText, {
    tagName: "span",
    className: "item-price--sale",
    value: salePrice,
    onChange: function onChange(salePrice) {
      return setAttributes({
        salePrice: salePrice
      });
    },
    allowedFormats: []
  }))), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__description"
  }, Object(external_React_["createElement"])(menu_food_item_preview_RichText, {
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
  return Object(external_React_["createElement"])(menu_food_item_inspector_controls_Fragment, null, Object(external_React_["createElement"])(menu_food_item_inspector_controls_InspectorControls, null, Object(external_React_["createElement"])(menu_food_item_inspector_controls_PanelBody, {
    title: menu_food_item_inspector_controls_('Menu Item', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(menu_food_item_inspector_controls_ToggleControl, {
    label: menu_food_item_inspector_controls_('Highlight item', '__plugin_txtd'),
    help: menu_food_item_inspector_controls_('Use it if you want to highlight some of the menu items and make them stand out.', '__plugin_txtd'),
    checked: enableHighlightFoodItem,
    onChange: function onChange() {
      return setAttributes({
        enableHighlightFoodItem: !enableHighlightFoodItem
      });
    }
  }), Object(external_React_["createElement"])(menu_food_item_inspector_controls_ToggleControl, {
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
  return Object(external_React_["createElement"])(menu_food_item_edit_Fragment, null, Object(external_React_["createElement"])(menu_food_item_preview, props), Object(external_React_["createElement"])(menu_food_item_inspector_controls, props));
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
  return Object(external_React_["createElement"])("div", {
    className: classNames,
    itemscope: true,
    itemtype: "http://schema.org/MenuItem"
  }, enableHighlightFoodItem && Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__highlight-label"
  }, Object(external_React_["createElement"])("h5", {
    className: "nova-food-menu-item__label"
  }, " ", highlightLabel, " ")), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__title"
  }, Object(external_React_["createElement"])(menu_food_item_save_RichText.Content, {
    value: title,
    tagName: "h4",
    className: "item-title",
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    itemprop: "name"
  })), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__prices",
    itemscope: true,
    itemtype: "http://schema.org/offers"
  }, Object(external_React_["createElement"])(menu_food_item_save_RichText.Content, {
    value: price,
    tagName: "span",
    className: "item-price",
    onChange: function onChange(price) {
      return setAttributes({
        price: price
      });
    },
    itemprop: "price"
  }), enableSalePrice && Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__price--sale"
  }, Object(external_React_["createElement"])("span", {
    className: "item-price--sale"
  }, " ", salePrice, " "))), Object(external_React_["createElement"])("div", {
    className: "nova-food-menu-item__description"
  }, Object(external_React_["createElement"])(menu_food_item_save_RichText.Content, {
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
        return Object(external_React_["createElement"])(SandBox, props);
      };

      var html = "<div class=\"novablocks-opentable ".concat(classNames, "\">") + "<script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=".concat(restaurantId, "&type=standard&theme=").concat(layoutForm, "&iframe=false&overlay=false&domain=com&lang=").concat(language, "'></script>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.frontend_blocks_stylesheet, "\" type=\"text/css\"/>") + "<link rel=\"stylesheet\" href=\"".concat(novablocks_urls.editor_blocks_stylesheet, "\" type=\"text/css\"/>") + '</div>';
      return Object(external_React_["createElement"])(OpenTable, {
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
  return Object(external_React_["createElement"])(opentable_inspector_controls_Fragment, null, Object(external_React_["createElement"])(opentable_inspector_controls_InspectorControls, null, Object(external_React_["createElement"])(opentable_inspector_controls_PanelBody, {
    title: opentable_inspector_controls_('Settings', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(inspector_controls_TextControl, {
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
  }), Object(external_React_["createElement"])(opentable_inspector_controls_SelectControl, {
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
  }), Object(external_React_["createElement"])(opentable_inspector_controls_RadioControl, {
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
  }), Object(external_React_["createElement"])(opentable_inspector_controls_ToggleControl, {
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
  return Object(external_React_["createElement"])(opentable_edit_Fragment, null, Object(external_React_["createElement"])(opentable_preview, props), Object(external_React_["createElement"])(opentable_inspector_controls, props));
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
  return Object(external_React_["createElement"])("div", {
    className: classNames
  }, Object(external_React_["createElement"])("script", {
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
      return [Object(external_React_["createElement"])(wp.serverSideRender, {
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

    return Object(external_React_["createElement"])(openhours_inspector_controls_Fragment, null, Object(external_React_["createElement"])(inspector_controls_Button, {
      className: 'novablocks__label',
      isLink: true,
      onClick: openModal
    }, "See available tags"), isOpen && Object(external_React_["createElement"])(Modal, {
      onRequestClose: closeModal,
      shouldCloseOnEsc: true,
      shouldCloseOnClickOutside: true,
      className: "novablocks-openhours__modal"
    }));
  };

  var timeFormattingInstructions = Object(external_React_["createElement"])(openhours_inspector_controls_Fragment, null, Object(external_React_["createElement"])(ExternalLink, {
    href: timeFormattingUrl
  }, openhours_inspector_controls_('Learn more about time formatting', '__plugin_txtd')));
  return Object(external_React_["createElement"])(openhours_inspector_controls_Fragment, null, Object(external_React_["createElement"])(openhours_inspector_controls_InspectorControls, null, Object(external_React_["createElement"])(openhours_inspector_controls_PanelBody, {
    title: openhours_inspector_controls_('Setup', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(TextareaControl, {
    label: "Write your opening hours in a simple human readable format",
    value: text,
    className: "original-text",
    onChange: function onChange(text) {
      return setAttributes({
        text: text,
        parsedText: parseContent(text)
      });
    }
  }), Object(external_React_["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example novablocks__example--multi"
  }, openhours_inspector_controls_('Monday 10am - 3pm\n' + 'Tuesday to Friday 9 - 17\n' + 'Sat noon - 2am', '__plugin_txtd'))), Object(external_React_["createElement"])(openhours_inspector_controls_PanelBody, {
    title: openhours_inspector_controls_('Display', '__plugin_txtd'),
    initialOpen: true
  }, Object(external_React_["createElement"])(openhours_inspector_controls_RadioControl, {
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
  }), openHoursStyle === 'status' && Object(external_React_["createElement"])("div", {
    className: "components-base-control__label novablocks__label"
  }, "Write the \"Open\" and \"Closed\" messages using the tags displayed below."), openHoursStyle === 'status' && Object(external_React_["createElement"])(AvailableTagsModal, null), openHoursStyle === 'status' && Object(external_React_["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Open Note",
    value: openNote,
    onChange: function onChange(openNote) {
      return setAttributes({
        openNote: openNote
      });
    }
  }), openHoursStyle === 'status' && Object(external_React_["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('It\'s {time} and we\'re Open until {today-closing-time}.', '__plugin_txtd')), openHoursStyle === 'status' && Object(external_React_["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('{time} - It\'s today, we\'re Open.', '__plugin_txtd')), openHoursStyle === 'status' && Object(external_React_["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Closed Note",
    value: closedNote,
    onChange: function onChange(closedNote) {
      return setAttributes({
        closedNote: closedNote
      });
    }
  }), openHoursStyle === 'status' && Object(external_React_["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('We\'re closed until {next-opening-day} at {next-opening-time}.', '__plugin_txtd')), openHoursStyle === 'status' && Object(external_React_["createElement"])("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, openhours_inspector_controls_('{time} - it\'s closed now.', '__plugin_txtd')), openHoursStyle === 'overview' && Object(external_React_["createElement"])(openhours_inspector_controls_TextControl, {
    label: "Closed Label",
    value: closedLabel,
    onChange: function onChange(closedLabel) {
      return setAttributes({
        closedLabel: closedLabel
      });
    }
  }), openHoursStyle === 'overview' && Object(external_React_["createElement"])(openhours_inspector_controls_ToggleControl, {
    label: openhours_inspector_controls_('Compress Opening Hours', '__plugin_txtd'),
    checked: compressOpeningHours,
    onChange: function onChange() {
      return setAttributes({
        compressOpeningHours: !compressOpeningHours
      });
    }
  }), openHoursStyle === 'overview' && Object(external_React_["createElement"])(openhours_inspector_controls_ToggleControl, {
    label: openhours_inspector_controls_('Hide Closed Days', '__plugin_txtd'),
    checked: hideClosedDays,
    onChange: function onChange() {
      return setAttributes({
        hideClosedDays: !hideClosedDays
      });
    }
  }), openHoursStyle === 'overview' && Object(external_React_["createElement"])(openhours_inspector_controls_ToggleControl, {
    label: openhours_inspector_controls_('Use Short Day Name', '__plugin_txtd'),
    checked: useShortName,
    onChange: function onChange() {
      return setAttributes({
        useShortName: !useShortName
      });
    }
  }), Object(external_React_["createElement"])(openhours_inspector_controls_TextControl, {
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
  return Object(external_React_["createElement"])(openhours_edit_Fragment, null, Object(external_React_["createElement"])(openhours_inspector_controls, props), Object(external_React_["createElement"])(openhours_preview, props));
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
    icon: openhours,
    edit: openhours_edit,
    save: function save() {
      return null;
    }
  });
}

/* harmony default export */ var blocks_openhours = (openhours_init);
// CONCATENATED MODULE: ./src/components/editable-text/index.js



var forwardRef = wp.element.forwardRef;
var editable_text_RichText = wp.blockEditor.RichText;
var EditableText = forwardRef(function (props, ref) {
  return Object(external_React_["createElement"])(editable_text_RichText, extends_default()({
    ref: ref
  }, props, {
    __unstableDisableFormats: true
  }));
});

EditableText.Content = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$tagName = _ref.tagName,
      Tag = _ref$tagName === void 0 ? 'div' : _ref$tagName,
      props = objectWithoutProperties_default()(_ref, ["value", "tagName"]);

  return Object(external_React_["createElement"])(Tag, props, value);
};
/**
 * Renders an editable text input in which text formatting is not allowed.
 */


/* harmony default export */ var editable_text = (EditableText);
// CONCATENATED MODULE: ./src/blocks/card/edit.js



/**
 * WordPress dependencies
 */


var card_edit_wp$blockEditor = wp.blockEditor,
    card_edit_InnerBlocks = card_edit_wp$blockEditor.InnerBlocks,
    edit_MediaUpload = card_edit_wp$blockEditor.MediaUpload;
var card_edit_createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var _wp$data = wp.data,
    card_edit_select = _wp$data.select,
    dispatch = _wp$data.dispatch;

var edit_CardEdit = function CardEdit(props) {
  var blockClassName = 'novablocks-card';
  var _props$attributes = props.attributes,
      level = _props$attributes.level,
      title = _props$attributes.title,
      subtitle = _props$attributes.subtitle,
      description = _props$attributes.description,
      media = _props$attributes.media,
      meta = _props$attributes.meta,
      contentAlign = _props$attributes.contentAlign,
      showMedia = _props$attributes.showMedia,
      showTitle = _props$attributes.showTitle,
      showSubtitle = _props$attributes.showSubtitle,
      showDescription = _props$attributes.showDescription,
      showButtons = _props$attributes.showButtons,
      showMeta = _props$attributes.showMeta,
      className = props.className,
      setAttributes = props.setAttributes;

  var CardMedia = function CardMedia(props) {
    var media = props.attributes.media,
        open = props.open;

    if (!!media && !!media.url) {
      return Object(external_React_["createElement"])("img", {
        className: "".concat(blockClassName, "__media-image"),
        src: media.url,
        onClick: open
      });
    }

    return Object(external_React_["createElement"])("div", {
      className: "".concat(blockClassName, "__media-placeholder"),
      onClick: open
    }, placeholder);
  };

  return Object(external_React_["createElement"])("div", {
    className: "".concat(blockClassName, " ").concat(className, " novablocks-card__inner-container novablocks-block__content")
  }, Object(external_React_["createElement"])("div", {
    className: "block-editor-block-list__layout"
  }, showMedia && Object(external_React_["createElement"])("div", {
    className: "".concat(blockClassName, "__media-wrap block-editor-block-list__block")
  }, Object(external_React_["createElement"])("div", {
    className: "".concat(blockClassName, "__media")
  }, Object(external_React_["createElement"])(edit_MediaUpload, {
    type: "image",
    value: !!media && media.id,
    onSelect: function onSelect(media) {
      return setAttributes({
        media: media
      });
    },
    render: function render(_ref) {
      var open = _ref.open;
      return Object(external_React_["createElement"])(CardMedia, extends_default()({}, props, {
        open: open
      }));
    }
  }))), showMeta && Object(external_React_["createElement"])(editable_text, {
    className: "".concat(blockClassName, "__meta block-editor-block-list__block is-style-meta"),
    tagName: 'p',
    value: meta,
    onChange: function onChange(meta) {
      setAttributes({
        meta: meta
      });
    }
  }), showTitle && Object(external_React_["createElement"])(editable_text, {
    className: "".concat(blockClassName, "__title block-editor-block-list__block"),
    tagName: "h".concat(level + 1),
    value: title,
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    }
  }), showSubtitle && Object(external_React_["createElement"])(editable_text, {
    className: "".concat(blockClassName, "__subtitle block-editor-block-list__block"),
    tagName: "h".concat(level + 2),
    value: subtitle,
    onChange: function onChange(subtitle) {
      setAttributes({
        subtitle: subtitle
      });
    }
  }), showDescription && Object(external_React_["createElement"])(editable_text, {
    className: "".concat(blockClassName, "__description block-editor-block-list__block"),
    tagName: 'p',
    value: description,
    onChange: function onChange(description) {
      setAttributes({
        description: description
      });
    }
  }), showButtons && Object(external_React_["createElement"])("div", {
    className: "".concat(blockClassName, "__buttons block-editor-block-list__block")
  }, Object(external_React_["createElement"])(card_edit_InnerBlocks, {
    allowedBlocks: ['core/buttons'],
    renderAppender: false,
    template: [['core/buttons', {
      align: contentAlign
    }, [['core/button', {
      text: 'Button'
    }]]]]
  }))));
};

var withCollectionVisibilityAttributes = card_edit_createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if ('novablocks/card' === props.name) {
      var clientId = props.clientId;
      var parentClientId = card_edit_select('core/editor').getBlockHierarchyRootClientId(clientId);
      var parentBlock = card_edit_select('core/editor').getBlock(parentClientId);
      var parentBlockAttributes = parentBlock.attributes;

      var newAttributes = function (_ref2) {
        var level = _ref2.level,
            contentAlign = _ref2.contentAlign,
            showMedia = _ref2.showMedia,
            showTitle = _ref2.showTitle,
            showSubtitle = _ref2.showSubtitle,
            showDescription = _ref2.showDescription,
            showButtons = _ref2.showButtons,
            showMeta = _ref2.showMeta;
        return {
          level: level,
          contentAlign: contentAlign,
          showMedia: showMedia,
          showTitle: showTitle,
          showSubtitle: showSubtitle,
          showDescription: showDescription,
          showButtons: showButtons,
          showMeta: showMeta
        };
      }(parentBlock.attributes);

      dispatch('core/block-editor').updateBlockAttributes(clientId, newAttributes);
    }

    return Object(external_React_["createElement"])(BlockListBlock, props);
  };
}, 'withCollectionVisibilityAttributes');
wp.hooks.addFilter('editor.BlockListBlock', 'novablocks/with-collection-visibility-attributes', withCollectionVisibilityAttributes);
/* harmony default export */ var card_edit = (edit_CardEdit);
// CONCATENATED MODULE: ./src/blocks/card/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var card_ = wp.i18n.__;
var card_registerBlockType = wp.blocks.registerBlockType;
var card_InnerBlocks = wp.blockEditor.InnerBlocks;

function card_init() {
  card_registerBlockType('novablocks/card', {
    title: card_('Card', '__plugin_txtd'),
    description: card_('Display related pieces of information in a flexible container visually resembling a playing card.', '__plugin_txtd'),
    category: 'nova-blocks',
    parent: ['novablocks/cards-collection'],
    icon: card,
    keywords: [card_('image with text', '__plugin_txtd')],
    edit: card_edit,
    save: function save() {
      return Object(external_React_["createElement"])(card_InnerBlocks.Content, null);
    }
  });
}

/* harmony default export */ var blocks_card = (card_init);
// CONCATENATED MODULE: ./src/blocks/cards-collection/inspector-controls.js




var cards_collection_inspector_controls_ = wp.i18n.__;
var cards_collection_inspector_controls_Fragment = wp.element.Fragment;
var cards_collection_inspector_controls_wp$components = wp.components,
    cards_collection_inspector_controls_PanelBody = cards_collection_inspector_controls_wp$components.PanelBody,
    inspector_controls_PanelRow = cards_collection_inspector_controls_wp$components.PanelRow,
    cards_collection_inspector_controls_RadioControl = cards_collection_inspector_controls_wp$components.RadioControl,
    cards_collection_inspector_controls_RangeControl = cards_collection_inspector_controls_wp$components.RangeControl;
var inspector_controls_wp$blockEditor = wp.blockEditor,
    cards_collection_inspector_controls_InspectorControls = inspector_controls_wp$blockEditor.InspectorControls,
    inspector_controls_AlignmentToolbar = inspector_controls_wp$blockEditor.AlignmentToolbar;
var inspector_controls_wp$data = wp.data,
    inspector_controls_dispatch = inspector_controls_wp$data.dispatch,
    inspector_controls_select = inspector_controls_wp$data.select;

var inspector_controls_CardsCollectionInspectorControls = function CardsCollectionInspectorControls(props) {
  var attributes = props.attributes,
      childrenBlocks = props.childrenBlocks,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected;
  var level = attributes.level,
      imageResizing = attributes.imageResizing,
      containerHeight = attributes.containerHeight,
      contentAlign = attributes.contentAlign,
      showCollectionTitle = attributes.showCollectionTitle,
      showCollectionSubtitle = attributes.showCollectionSubtitle,
      showMedia = attributes.showMedia,
      showTitle = attributes.showTitle,
      showSubtitle = attributes.showSubtitle,
      showDescription = attributes.showDescription,
      showButtons = attributes.showButtons,
      showMeta = attributes.showMeta;

  var toggleAttribute = function toggleAttribute(attribute) {
    var newAttributes = defineProperty_default()({}, attribute, !attributes[attribute]);

    childrenBlocks.forEach(function (_ref) {
      var clientId = _ref.clientId;
      wp.data.dispatch('core/block-editor').updateBlockAttributes(clientId, newAttributes);
    });
    setAttributes(newAttributes);
  };

  var toggles = [{
    label: cards_collection_inspector_controls_('Collection Title'),
    value: attributes['showCollectionTitle'],
    attribute: 'showCollectionTitle'
  }, {
    label: cards_collection_inspector_controls_('Collection Subtitle'),
    value: attributes['showCollectionSubtitle'],
    attribute: 'showCollectionSubtitle'
  }, {
    label: cards_collection_inspector_controls_('Media'),
    value: attributes['showMedia'],
    attribute: 'showMedia'
  }, {
    label: cards_collection_inspector_controls_('Title'),
    value: attributes['showTitle'],
    attribute: 'showTitle'
  }, {
    label: cards_collection_inspector_controls_('Subtitle'),
    value: attributes['showSubtitle'],
    attribute: 'showSubtitle'
  }, {
    label: cards_collection_inspector_controls_('Description'),
    value: attributes['showDescription'],
    attribute: 'showDescription'
  }, {
    label: cards_collection_inspector_controls_('Buttons'),
    value: attributes['showButtons'],
    attribute: 'showButtons'
  }, {
    label: cards_collection_inspector_controls_('Meta'),
    value: attributes['showMeta'],
    attribute: 'showMeta'
  }];
  return Object(external_React_["createElement"])(cards_collection_inspector_controls_Fragment, null, Object(external_React_["createElement"])(EmphasisBlockAreaFill, null, isSelected && Object(external_React_["createElement"])(inspector_controls_PanelRow, null, Object(external_React_["createElement"])("span", null, cards_collection_inspector_controls_('Title Level', '__plugin_txtd')), Object(external_React_["createElement"])(heading_toolbar, {
    minLevel: 2,
    maxLevel: 4,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  }))), Object(external_React_["createElement"])(EmphasisContentAreaFill, null, isSelected && Object(external_React_["createElement"])(inspector_controls_PanelRow, null, Object(external_React_["createElement"])("span", null, cards_collection_inspector_controls_('Content Alignment', '__plugin_txtd')), Object(external_React_["createElement"])(inspector_controls_AlignmentToolbar, {
    value: contentAlign,
    isCollapsed: false,
    onChange: function onChange(contentAlign) {
      var _select = inspector_controls_select('core/block-editor'),
          getSelectedBlock = _select.getSelectedBlock;

      var _dispatch = inspector_controls_dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      getSelectedBlock().innerBlocks.map(function (block) {
        block.innerBlocks.map(function (innerBlock) {
          updateBlockAttributes(innerBlock.clientId, {
            align: contentAlign
          });
        });
      });
      setAttributes({
        contentAlign: contentAlign
      });
    }
  }))), Object(external_React_["createElement"])(cards_collection_inspector_controls_InspectorControls, null, Object(external_React_["createElement"])(toggle_group, {
    label: cards_collection_inspector_controls_('Cards Manager', '__plugin_txtd'),
    onChange: toggleAttribute,
    toggles: toggles
  }), showMedia && Object(external_React_["createElement"])(cards_collection_inspector_controls_PanelBody, {
    initialOpen: true,
    title: cards_collection_inspector_controls_('Cards Media Area')
  }, Object(external_React_["createElement"])(cards_collection_inspector_controls_RadioControl, {
    label: 'Image resizing',
    selected: imageResizing,
    onChange: function onChange(imageResizing) {
      setAttributes({
        imageResizing: imageResizing
      });
    },
    options: [{
      label: 'Stretch to fill the container',
      value: 'cropped'
    }, {
      label: 'Shrink to fit (no crop)',
      value: 'original'
    }]
  }), Object(external_React_["createElement"])(cards_collection_inspector_controls_RangeControl, {
    label: cards_collection_inspector_controls_('Image container height', '__plugin_txtd'),
    value: containerHeight,
    onChange: function onChange(containerHeight) {
      console.log(containerHeight);
      setAttributes({
        containerHeight: containerHeight
      });
    },
    min: 0,
    max: 100,
    step: 5
  }))));
};

/* harmony default export */ var cards_collection_inspector_controls = (inspector_controls_CardsCollectionInspectorControls);
// CONCATENATED MODULE: ./src/blocks/cards-collection/edit.js



function cards_collection_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cards_collection_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cards_collection_edit_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cards_collection_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * WordPress dependencies
 */

var cards_collection_edit_Fragment = wp.element.Fragment;
var cards_collection_edit_ = wp.i18n.__;
var cards_collection_edit_InnerBlocks = wp.blockEditor.InnerBlocks;
var edit_withSelect = wp.data.withSelect;
var edit_ALLOWED_BLOCKS = ['novablocks/card'];
var CARDS_COLLECTION_TEMPLATE = [['novablocks/card'], ['novablocks/card'], ['novablocks/card']];

var edit_CardsCollectionEdit = function CardsCollectionEdit(props) {
  var attributes = props.attributes,
      childrenBlocks = props.childrenBlocks,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
  var blockStyle = attributes.blockStyle,
      contentStyle = attributes.contentStyle,
      title = attributes.title,
      subtitle = attributes.subtitle,
      contentAlign = attributes.contentAlign,
      level = attributes.level,
      imageResizing = attributes.imageResizing,
      containerHeight = attributes.containerHeight,
      showCollectionTitle = attributes.showCollectionTitle,
      showCollectionSubtitle = attributes.showCollectionSubtitle,
      showMedia = attributes.showMedia,
      showTitle = attributes.showTitle,
      showSubtitle = attributes.showSubtitle,
      showDescription = attributes.showDescription,
      showButtons = attributes.showButtons,
      showMeta = attributes.showMeta;
  var blockClassName = 'novablocks-cards-collection';
  var hasAppender = childrenBlocks.length < 4;
  var className = classnames_default()(props.className, blockClassName, 'novablocks-block', "".concat(blockClassName, "--align-").concat(contentAlign), "block-is-".concat(blockStyle), "content-is-".concat(contentStyle), {
    'has-background': blockStyle !== 'basic',
    'has-appender': hasAppender
  });

  var getCardMediaPaddingTop = function getCardMediaPaddingTop(containerHeight) {
    var compiledHeight = containerHeight / 50 - 1;

    if (compiledHeight < 0) {
      compiledHeight *= 3;
    }

    var numerator = 1;
    var denominator = 1;
    compiledHeight = Math.min(Math.max(-3, compiledHeight), 1);

    if (compiledHeight > 0) {
      numerator = 1 + compiledHeight;
    }

    if (compiledHeight < 0) {
      denominator = 1 + Math.abs(compiledHeight);
    }

    return "".concat(numerator * 100 / denominator, "%");
  };

  var style = {
    '--card-media-padding-top': getCardMediaPaddingTop(containerHeight),
    '--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down'
  };
  return Object(external_React_["createElement"])(cards_collection_edit_Fragment, null, Object(external_React_["createElement"])("div", {
    className: className,
    style: style
  }, Object(external_React_["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, showCollectionTitle && Object(external_React_["createElement"])("div", {
    className: "block-editor-block-list__block wp-block novablocks-cards-collection__title"
  }, Object(external_React_["createElement"])(editable_text, {
    tagName: "h".concat(level),
    value: title,
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    }
  })), showCollectionSubtitle && Object(external_React_["createElement"])("div", {
    className: "block-editor-block-list__block wp-block novablocks-cards-collection__subtitle"
  }, Object(external_React_["createElement"])(editable_text, {
    tagName: 'p',
    className: 'is-style-lead',
    value: subtitle,
    onChange: function onChange(subtitle) {
      setAttributes({
        subtitle: subtitle
      });
    }
  })), Object(external_React_["createElement"])("div", {
    className: "block-editor-block-list__block wp-block novablocks-cards-collection__cards",
    "data-align": "wide"
  }, Object(external_React_["createElement"])("div", {
    className: "".concat(blockClassName, "__layout")
  }, Object(external_React_["createElement"])(cards_collection_edit_InnerBlocks, {
    allowedBlocks: edit_ALLOWED_BLOCKS,
    template: CARDS_COLLECTION_TEMPLATE,
    renderAppender: hasAppender ? window.undefined : false
  }))))), Object(external_React_["createElement"])(cards_collection_inspector_controls, props));
};

var CardCollectionWithChildren = edit_withSelect(function (select, props) {
  var clientId = props.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var parentBlock = getBlock(clientId);
  var childrenBlocks = parentBlock.innerBlocks;
  return cards_collection_edit_objectSpread({
    childrenBlocks: childrenBlocks
  }, props);
})(edit_CardsCollectionEdit);
/* harmony default export */ var cards_collection_edit = (CardCollectionWithChildren);
// CONCATENATED MODULE: ./src/blocks/cards-collection/index.js


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var cards_collection_ = wp.i18n.__;
var cards_collection_registerBlockType = wp.blocks.registerBlockType;
var cards_collection_InnerBlocks = wp.blockEditor.InnerBlocks;

function cards_collection_init() {
  cards_collection_registerBlockType('novablocks/cards-collection', {
    title: cards_collection_('Cards Collection', '__plugin_txtd'),
    description: cards_collection_('Display a list of related items placed within a coherent layout.', '__plugin_txtd'),
    category: 'nova-blocks',
    icon: card,
    keywords: [cards_collection_('grid', '__plugin_txtd'), cards_collection_('columns', '__plugin_txtd'), cards_collection_('collection', '__plugin_txtd'), cards_collection_('group', '__plugin_txtd')],
    edit: cards_collection_edit,
    save: function save() {
      return Object(external_React_["createElement"])(cards_collection_InnerBlocks.Content, null);
    },
    getEditWrapperProps: function getEditWrapperProps() {
      var settings = wp.data.select('core/block-editor').getSettings();
      return settings.alignWide ? {
        'data-align': 'full'
      } : {};
    }
  });
}

/* harmony default export */ var cards_collection = (cards_collection_init);
// CONCATENATED MODULE: ./src/editor.js




























var editor_dispatch = wp.data.dispatch;
var updateCategory = wp.blocks.updateCategory;

var editor_novaBlocks = /*#__PURE__*/function () {
  function novaBlocks() {
    classCallCheck_default()(this, novaBlocks);
  }

  createClass_default()(novaBlocks, [{
    key: "initialize",
    value: function initialize(settings) {
      separator_addSeparatorFilters(settings);
      editor_dispatch(STORE_NAME).updateSettings(settings);
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

      if (supports.indexOf('cards-collection') > -1) {
        blocks_card();
        cards_collection();
      }

      blocks_hero();
      blocks_media();
      blocks_slideshow();
      blocks_openhours();
    }
  }]);

  return novaBlocks;
}();

wp.novaBlocks = new editor_novaBlocks();

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useToolbarItem; });

// UNUSED EXPORTS: ToolbarItem

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/reakit-system/es/_rollupPluginBabelHelpers-ce04ac6e.js
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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



// CONCATENATED MODULE: ./node_modules/reakit-system/es/SystemContext.js


var SystemContext = Object(external_React_["createContext"])({});



// CONCATENATED MODULE: ./node_modules/reakit-system/es/useCreateElement.js




function isRenderProp(children) {
  return typeof children === "function";
}

/**
 * Custom hook that will call `children` if it's a function. If
 * `useCreateElement` has been passed to the context, it'll be used instead.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useCreateElement } from "reakit-system";
 *
 * const system = {
 *   useCreateElement(type, props, children = props.children) {
 *     // very similar to what `useCreateElement` does already
 *     if (typeof children === "function") {
 *       const { children: _, ...rest } = props;
 *       return children(rest);
 *     }
 *     return React.createElement(type, props, children);
 *   }
 * };
 *
 * function Component(props) {
 *   return useCreateElement("div", props);
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component url="url">{({ url }) => <a href={url}>link</a>}</Component>
 *     </SystemProvider>
 *   );
 * }
 */

var useCreateElement_useCreateElement = function useCreateElement(type, props, children) {
  if (children === void 0) {
    children = props.children;
  }

  var context = Object(external_React_["useContext"])(SystemContext);

  if (context.useCreateElement) {
    return context.useCreateElement(type, props, children);
  }

  if (isRenderProp(children)) {
    var _ = props.children,
        rest = _objectWithoutPropertiesLoose(props, ["children"]);

    return children(rest);
  }

  return Object(external_React_["createElement"])(type, props, children);
};



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/splitProps.js
/**
 * Splits an object (`props`) into a tuple where the first item is an object
 * with the passed `keys`, and the second item is an object with these keys
 * omitted.
 *
 * @example
 * import { splitProps } from "reakit-utils";
 *
 * splitProps({ a: "a", b: "b" }, ["a"]); // [{ a: "a" }, { b: "b" }]
 */
function splitProps(props, keys) {
  var propsKeys = Object.keys(props);
  var picked = {};
  var omitted = {};

  for (var _i = 0, _propsKeys = propsKeys; _i < _propsKeys.length; _i++) {
    var key = _propsKeys[_i];

    if (keys.indexOf(key) >= 0) {
      picked[key] = props[key];
    } else {
      omitted[key] = props[key];
    }
  }

  return [picked, omitted];
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/createComponent.js






function memo(component, propsAreEqual) {
  return Object(external_React_["memo"])(component, propsAreEqual);
}

function forwardRef(component) {
  return Object(external_React_["forwardRef"])(component);
}

/**
 * Creates a React component.
 *
 * @example
 * import { createComponent } from "reakit-system";
 *
 * const A = createComponent({ as: "a" });
 *
 * @param options
 */
function createComponent(_ref) {
  var type = _ref.as,
      useHook = _ref.useHook,
      _ref$keys = _ref.keys,
      keys = _ref$keys === void 0 ? useHook && useHook.__keys || [] : _ref$keys,
      _ref$propsAreEqual = _ref.propsAreEqual,
      propsAreEqual = _ref$propsAreEqual === void 0 ? useHook && useHook.__propsAreEqual : _ref$propsAreEqual,
      _ref$useCreateElement = _ref.useCreateElement,
      useCreateElement$1 = _ref$useCreateElement === void 0 ? useCreateElement_useCreateElement : _ref$useCreateElement;

  var Comp = function Comp(_ref2, ref) {
    var _ref2$as = _ref2.as,
        as = _ref2$as === void 0 ? type : _ref2$as,
        props = _objectWithoutPropertiesLoose(_ref2, ["as"]);

    if (useHook) {
      var _splitProps = splitProps(props, keys),
          _options = _splitProps[0],
          htmlProps = _splitProps[1];

      var _useHook = useHook(_options, _objectSpread2({
        ref: ref
      }, htmlProps)),
          wrapElement = _useHook.wrapElement,
          elementProps = _objectWithoutPropertiesLoose(_useHook, ["wrapElement"]); // @ts-ignore


      var asKeys = as.render ? as.render.__keys : as.__keys;
      var asOptions = asKeys ? splitProps(props, asKeys)[0] : {};

      var _element = useCreateElement$1(as, _objectSpread2({}, elementProps, {}, asOptions));

      if (wrapElement) {
        return wrapElement(_element);
      }

      return _element;
    }

    return useCreateElement$1(as, props);
  };

  Comp.__keys = keys;

  if (false) {}

  return memo(forwardRef(Comp), propsAreEqual);
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/useToken.js



/**
 * React custom hook that returns the value of any token defined in the
 * SystemContext. It's mainly used internally in [`useOptions`](#useoptions)
 * and [`useProps`](#useprops).
 *
 * @example
 * import { SystemProvider, useToken } from "reakit-system";
 *
 * const system = {
 *   token: "value"
 * };
 *
 * function Component(props) {
 *   const token = useToken("token", "default value");
 *   return <div {...props}>{token}</div>;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component />
 *     </SystemProvider>
 *   );
 * }
 */

function useToken(token, defaultValue) {
  Object(external_React_["useDebugValue"])(token);
  var context = Object(external_React_["useContext"])(SystemContext);
  return context[token] != null ? context[token] : defaultValue;
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/useProps.js




/**
 * React custom hook that returns the props returned by a given
 * `use${name}Props` in the SystemContext.
 *
 * @example
 * import { SystemProvider, useProps } from "reakit-system";
 *
 * const system = {
 *   useAProps(options, htmlProps) {
 *     return {
 *       ...htmlProps,
 *       href: options.url
 *     };
 *   }
 * };
 *
 * function A({ url, ...htmlProps }) {
 *   const props = useProps("A", { url }, htmlProps);
 *   return <a {...props} />;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <A url="url">It will convert url into href in useAProps</A>
 *     </SystemProvider>
 *   );
 * }
 */

function useProps_useProps(name, options, htmlProps) {
  if (options === void 0) {
    options = {};
  }

  if (htmlProps === void 0) {
    htmlProps = {};
  }

  var hookName = "use" + name + "Props";
  Object(external_React_["useDebugValue"])(hookName);
  var useHook = useToken(hookName);

  if (useHook) {
    return useHook(options, htmlProps);
  }

  return htmlProps;
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/useOptions.js





/**
 * React custom hook that returns the options returned by a given
 * `use${name}Options` in the SystemContext.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useOptions } from "reakit-system";
 *
 * const system = {
 *   useAOptions(options, htmlProps) {
 *     return {
 *       ...options,
 *       url: htmlProps.href
 *     };
 *   }
 * };
 *
 * function A({ url, ...htmlProps }) {
 *   const options = useOptions("A", { url }, htmlProps);
 *   return <a href={options.url} {...htmlProps} />;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <A href="url">
 *         It will convert href into url in useAOptions and then url into href in A
 *       </A>
 *     </SystemProvider>
 *   );
 * }
 */

function useOptions_useOptions(name, options, htmlProps) {
  if (options === void 0) {
    options = {};
  }

  if (htmlProps === void 0) {
    htmlProps = {};
  }

  var hookName = "use" + name + "Options";
  Object(external_React_["useDebugValue"])(hookName);
  var useHook = useToken(hookName);

  if (useHook) {
    return _objectSpread2({}, options, {}, useHook(options, htmlProps));
  }

  return options;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/isObject.js
/**
 * Checks whether `arg` is an object or not.
 *
 * @returns {boolean}
 */
function isObject(arg) {
  return typeof arg === "object" && arg != null;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/toArray.js
/**
 * Transforms `arg` into an array if it's not already.
 *
 * @example
 * import { toArray } from "reakit-utils";
 *
 * toArray("a"); // ["a"]
 * toArray(["a"]); // ["a"]
 */
function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return typeof arg !== "undefined" ? [arg] : [];
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/createHook.js









function deepEqual(objA, objB, depth) {
  if (depth === void 0) {
    depth = 1;
  }

  if (objA === objB) return true;
  if (!objA || !objB) return false;
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var length = aKeys.length;
  if (bKeys.length !== length) return false;

  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var key = _aKeys[_i];

    if (objA[key] !== objB[key]) {
      if (!depth || !isObject(objA[key]) || !isObject(objB[key]) || !deepEqual(objA[key], objB[key], depth - 1)) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Creates a React custom hook that will return component props.
 *
 * @example
 * import { createHook } from "reakit-system";
 *
 * const useA = createHook({
 *   name: "A",
 *   keys: ["url"], // custom props/options keys
 *   useProps(options, htmlProps) {
 *     return {
 *       ...htmlProps,
 *       href: options.url
 *     };
 *   }
 * });
 *
 * function A({ url, ...htmlProps }) {
 *   const props = useA({ url }, htmlProps);
 *   return <a {...props} />;
 * }
 *
 * @param options
 */
function createHook(options) {
  var composedHooks = toArray(options.compose);

  var __useOptions = function __useOptions(hookOptions, htmlProps) {
    // Call the current hook's useOptions first
    if (options.useOptions) {
      hookOptions = options.useOptions(hookOptions, htmlProps);
    } // If there's name, call useOptions from the system context


    if (options.name) {
      hookOptions = useOptions_useOptions(options.name, hookOptions, htmlProps);
    }

    return hookOptions;
  };

  var useHook = function useHook(hookOptions, htmlProps, unstable_ignoreUseOptions) {
    if (hookOptions === void 0) {
      hookOptions = {};
    }

    if (htmlProps === void 0) {
      htmlProps = {};
    }

    if (unstable_ignoreUseOptions === void 0) {
      unstable_ignoreUseOptions = false;
    }

    // This won't execute when useHook was called from within another useHook
    if (!unstable_ignoreUseOptions) {
      hookOptions = __useOptions(hookOptions, htmlProps);
    } // We're already calling composed useOptions here
    // That's why we ignoreUseOptions for composed hooks


    if (options.compose) {
      composedHooks.forEach(function (hook) {
        hookOptions = hook.__useOptions(hookOptions, htmlProps);
      });
    } // Call the current hook's useProps


    if (options.useProps) {
      htmlProps = options.useProps(hookOptions, htmlProps);
    } // If there's name, call useProps from the system context


    if (options.name) {
      htmlProps = useProps_useProps(options.name, hookOptions, htmlProps);
    }

    if (options.compose) {
      if (options.useComposeOptions) {
        hookOptions = options.useComposeOptions(hookOptions, htmlProps);
      }

      composedHooks.forEach(function (hook) {
        // @ts-ignore The third option is only used internally
        htmlProps = hook(hookOptions, htmlProps, true);
      });
    }

    return htmlProps;
  };

  if (false) {}

  useHook.__useOptions = __useOptions; // It's used by createComponent to split option props (keys) and html props

  useHook.__keys = [].concat(composedHooks.reduce(function (allKeys, hook) {
    allKeys.push.apply(allKeys, hook.__keys || []);
    return allKeys;
  }, []), options.useState ? options.useState.__keys : [], options.keys || []);
  var hasPropsAreEqual = Boolean(options.propsAreEqual || composedHooks.find(function (hook) {
    return Boolean(hook.__propsAreEqual);
  }));

  if (hasPropsAreEqual) {
    useHook.__propsAreEqual = function (prev, next) {
      var result = options.propsAreEqual && options.propsAreEqual(prev, next);

      if (result != null) {
        return result;
      }

      for (var _iterator = composedHooks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var hook = _ref;
        var propsAreEqual = hook.__propsAreEqual;
        var hookResult = propsAreEqual && propsAreEqual(prev, next);

        if (hookResult != null) {
          return hookResult;
        }
      }

      return deepEqual(prev, next);
    };
  }

  return useHook;
}



// CONCATENATED MODULE: ./node_modules/reakit/es/_rollupPluginBabelHelpers-f089acec.js
function _rollupPluginBabelHelpers_f089acec_defineProperty(obj, key, value) {
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

function _rollupPluginBabelHelpers_f089acec_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _rollupPluginBabelHelpers_f089acec_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      _rollupPluginBabelHelpers_f089acec_ownKeys(Object(source), true).forEach(function (key) {
        _rollupPluginBabelHelpers_f089acec_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      _rollupPluginBabelHelpers_f089acec_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(source, excluded) {
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



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/useForkRef.js


// https://github.com/mui-org/material-ui/blob/2bcc874cf07b81202968f769cb9c2398c7c11311/packages/material-ui/src/utils/useForkRef.js

function setRef(ref, value) {
  if (value === void 0) {
    value = null;
  }

  if (!ref) return;

  if (typeof ref === "function") {
    ref(value);
  } else {
    ref.current = value;
  }
}
/**
 * Merges up to two React Refs into a single memoized function React Ref so you
 * can pass it to an element.
 *
 * @example
 * import React from "react";
 * import { useForkRef } from "reakit-utils";
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useForkRef(internalRef, ref)} />;
 * });
 */


function useForkRef(refA, refB) {
  return Object(external_React_["useMemo"])(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (value) {
      setRef(refA, value);
      setRef(refB, value);
    };
  }, [refA, refB]);
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/getDocument.js
/**
 * Returns `element.ownerDocument || window.document`.
 */
function getDocument(element) {
  return element ? element.ownerDocument || element : window.document;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/hasFocusWithin.js


/**
 * Checks if `element` has focus.
 *
 * @example
 * import { hasFocusWithin } from "reakit-utils";
 *
 * hasFocusWithin(document.getElementById("id"));
 */

function hasFocusWithin(element) {
  var document = getDocument(element);
  if (!document.activeElement) return false;
  return element.contains(document.activeElement);
}



// CONCATENATED MODULE: ./node_modules/reakit/es/Box/Box.js



var useBox = createHook({
  name: "Box",
  keys: ["unstable_system"]
});
var Box = createComponent({
  as: "div",
  useHook: useBox
});



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/isButton.js
var buttonInputTypes = ["button", "color", "file", "image", "reset", "submit"];
/**
 * Checks whether `element` is a native HTML button element or not.
 *
 * @example
 * import { isButton } from "reakit-utils";
 *
 * isButton(document.querySelector("button")); // true
 * isButton(document.querySelector("input[type='button']")); // true
 * isButton(document.querySelector("div")); // false
 * isButton(document.querySelector("input[type='text']")); // false
 *
 * @returns {boolean}
 */

function isButton(element) {
  if (element.tagName === "BUTTON") return true;

  if (element.tagName === "INPUT") {
    var input = element;
    return buttonInputTypes.indexOf(input.type) !== -1;
  }

  return false;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/closest.js
function matches(element, selectors) {
  if ("matches" in element) return element.matches(selectors);
  if ("msMatchesSelector" in element) return element.msMatchesSelector(selectors);
  return element.webkitMatchesSelector(selectors);
}

/**
 * Ponyfill for `Element.prototype.closest`
 *
 * @example
 * import { closest } from "reakit-utils";
 *
 * closest(document.getElementById("id"), "div");
 * // same as
 * document.getElementById("id").closest("div");
 */
function closest(element, selectors) {
  if ("closest" in element) return element.closest(selectors);

  do {
    if (matches(element, selectors)) return element;
    element = element.parentElement || element.parentNode;
  } while (element !== null && element.nodeType === 1);

  return null;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/getActiveElement.js


/**
 * Returns `element.ownerDocument.activeElement`.
 */

function getActiveElement(element) {
  return getDocument(element).activeElement;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/tabbable.js




/** @module tabbable */
var selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), " + "textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], " + "iframe, object, embed, area[href], audio[controls], video[controls], " + "[contenteditable]:not([contenteditable='false'])";

function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}

function hasNegativeTabIndex(element) {
  var tabIndex = parseInt(element.getAttribute("tabIndex") || "0", 10);
  return tabIndex < 0;
}
/**
 * Checks whether `element` is focusable or not.
 *
 * @memberof tabbable
 *
 * @example
 * import { isFocusable } from "reakit-utils";
 *
 * isFocusable(document.querySelector("input")); // true
 * isFocusable(document.querySelector("input[tabindex='-1']")); // true
 * isFocusable(document.querySelector("input[hidden]")); // false
 * isFocusable(document.querySelector("input:disabled")); // false
 */


function isFocusable(element) {
  return element.matches(selector) && isVisible(element);
}
/**
 * Checks whether `element` is tabbable or not.
 *
 * @memberof tabbable
 *
 * @example
 * import { isTabbable } from "reakit-utils";
 *
 * isTabbable(document.querySelector("input")); // true
 * isTabbable(document.querySelector("input[tabindex='-1']")); // false
 * isTabbable(document.querySelector("input[hidden]")); // false
 * isTabbable(document.querySelector("input:disabled")); // false
 */

function isTabbable(element) {
  return isFocusable(element) && !hasNegativeTabIndex(element);
}
/**
 * Returns all the focusable elements in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element[]}
 */

function getAllFocusableIn(container) {
  var allFocusable = Array.from(container.querySelectorAll(selector));
  allFocusable.unshift(container);
  return allFocusable.filter(isFocusable);
}
/**
 * Returns the first focusable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element|null}
 */

function getFirstFocusableIn(container) {
  var allFocusable = getAllFocusableIn(container);
  return allFocusable.length ? allFocusable[0] : null;
}
/**
 * Returns all the tabbable elements in `container`, including the container
 * itself.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return focusable elements if there are no tabbable ones.
 *
 * @returns {Element[]}
 */

function getAllTabbableIn(container, fallbackToFocusable) {
  var allFocusable = Array.from(container.querySelectorAll(selector));
  var allTabbable = allFocusable.filter(isTabbable);

  if (isTabbable(container)) {
    allTabbable.unshift(container);
  }

  if (!allTabbable.length && fallbackToFocusable) {
    return allFocusable;
  }

  return allTabbable;
}
/**
 * Returns the first tabbable element in `container`, including the container
 * itself if it's tabbable.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the first focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getFirstTabbableIn(container, fallbackToFocusable) {
  var _getAllTabbableIn = getAllTabbableIn(container, fallbackToFocusable),
      first = _getAllTabbableIn[0];

  return first || null;
}
/**
 * Returns the last tabbable element in `container`, including the container
 * itself if it's tabbable.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the last focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getLastTabbableIn(container, fallbackToFocusable) {
  var allTabbable = getAllTabbableIn(container, fallbackToFocusable);
  return allTabbable[allTabbable.length - 1] || null;
}
/**
 * Returns the next tabbable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the next focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getNextTabbableIn(container, fallbackToFocusable) {
  var activeElement = getActiveElement(container);
  var allFocusable = getAllFocusableIn(container);
  var index = allFocusable.indexOf(activeElement);
  var slice = allFocusable.slice(index + 1);
  return slice.find(isTabbable) || allFocusable.find(isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
/**
 * Returns the previous tabbable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the previous focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getPreviousTabbableIn(container, fallbackToFocusable) {
  var activeElement = getActiveElement(container);
  var allFocusable = getAllFocusableIn(container).reverse();
  var index = allFocusable.indexOf(activeElement);
  var slice = allFocusable.slice(index + 1);
  return slice.find(isTabbable) || allFocusable.find(isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
/**
 * Returns the closest focusable parent of `element`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element|null}
 */

function getClosestFocusable(element) {
  var container = null;

  do {
    container = closest(element, selector);
  } while (container && !isFocusable(container));

  return container;
}

function defaultIsActive(element) {
  return getActiveElement(element) === element;
}

/**
 * Ensures `element` will receive focus if it's not already.
 *
 * @memberof tabbable
 *
 * @example
 * import { ensureFocus } from "reakit-utils";
 *
 * ensureFocus(document.activeElement); // does nothing
 *
 * const element = document.querySelector("input");
 *
 * ensureFocus(element); // focuses element
 * ensureFocus(element, { preventScroll: true }); // focuses element preventing scroll jump
 *
 * function isActive(el) {
 *   return el.dataset.active === "true";
 * }
 *
 * ensureFocus(document.querySelector("[data-active='true']"), { isActive }); // does nothing
 *
 * @returns {number} `requestAnimationFrame` call ID so it can be passed to `cancelAnimationFrame` if needed.
 */
function ensureFocus(element, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? defaultIsActive : _ref$isActive,
      preventScroll = _ref.preventScroll;

  if (isActive(element)) return -1;
  element.focus({
    preventScroll: preventScroll
  });
  if (isActive(element)) return -1;
  return requestAnimationFrame(function () {
    element.focus({
      preventScroll: preventScroll
    });
  });
}



// CONCATENATED MODULE: ./node_modules/reakit/es/Tabbable/Tabbable.js










function isNativeTabbable(element) {
  return element.tagName === "BUTTON" || element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "A" || element.tagName === "AUDIO" || element.tagName === "VIDEO";
} // https://twitter.com/diegohaz/status/1176998102139572225


function isUserAgent(string) {
  if (typeof window === "undefined") return false;
  return window.navigator.userAgent.indexOf(string) !== -1;
}

var isSafariOrFirefoxOnMac = isUserAgent("Mac") && (isUserAgent("Safari") || isUserAgent("Firefox"));
var useTabbable = createHook({
  name: "Tabbable",
  compose: useBox,
  keys: ["disabled", "focusable", "unstable_clickOnEnter", "unstable_clickOnSpace"],
  useOptions: function useOptions(_ref, _ref2) {
    var disabled = _ref2.disabled;

    var _ref$unstable_clickOn = _ref.unstable_clickOnEnter,
        unstable_clickOnEnter = _ref$unstable_clickOn === void 0 ? true : _ref$unstable_clickOn,
        _ref$unstable_clickOn2 = _ref.unstable_clickOnSpace,
        unstable_clickOnSpace = _ref$unstable_clickOn2 === void 0 ? true : _ref$unstable_clickOn2,
        options = _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(_ref, ["unstable_clickOnEnter", "unstable_clickOnSpace"]);

    return _rollupPluginBabelHelpers_f089acec_objectSpread2({
      disabled: disabled,
      unstable_clickOnEnter: unstable_clickOnEnter,
      unstable_clickOnSpace: unstable_clickOnSpace
    }, options);
  },
  useProps: function useProps(options, _ref3) {
    var htmlRef = _ref3.ref,
        htmlTabIndex = _ref3.tabIndex,
        htmlOnClick = _ref3.onClick,
        htmlOnMouseDown = _ref3.onMouseDown,
        htmlOnKeyDown = _ref3.onKeyDown,
        htmlStyle = _ref3.style,
        htmlProps = _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(_ref3, ["ref", "tabIndex", "onClick", "onMouseDown", "onKeyDown", "style"]);

    var ref = Object(external_React_["useRef"])(null);
    var trulyDisabled = options.disabled && !options.focusable;

    var _React$useState = Object(external_React_["useState"])(true),
        nativeTabbable = _React$useState[0],
        setNativeTabbable = _React$useState[1];

    var tabIndex = nativeTabbable ? htmlTabIndex : htmlTabIndex || 0;
    var style = trulyDisabled ? _rollupPluginBabelHelpers_f089acec_objectSpread2({
      pointerEvents: "none"
    }, htmlStyle) : htmlStyle;
    Object(external_React_["useEffect"])(function () {
      var tabbable = ref.current;

      if (tabbable && !isNativeTabbable(tabbable)) {
        setNativeTabbable(false);
      }
    }, []);
    var onClick = Object(external_React_["useCallback"])(function (event) {
      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
      } else if (htmlOnClick) {
        htmlOnClick(event);
      }
    }, [options.disabled, htmlOnClick]);
    var onMouseDown = Object(external_React_["useCallback"])(function (event) {
      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      var self = event.currentTarget;
      var target = event.target;

      if (isSafariOrFirefoxOnMac && isButton(self) && self.contains(target)) {
        event.preventDefault();
        var isFocusControl = isFocusable(target) || target instanceof HTMLLabelElement;

        if (!hasFocusWithin(self) || self === target || !isFocusControl) {
          self.focus();
        }
      }

      if (htmlOnMouseDown) {
        htmlOnMouseDown(event);
      }
    }, [options.disabled, htmlOnMouseDown]);
    var onKeyDown = Object(external_React_["useCallback"])(function (event) {
      if (htmlOnKeyDown) {
        htmlOnKeyDown(event);
      }

      if (options.disabled || isNativeTabbable(event.currentTarget) || event.metaKey) {
        return;
      } // Per the spec, space only triggers button click on key up.
      // On key down, it triggers the :active state.
      // Since we can't mimic this behavior, we trigger click on key down.


      if (options.unstable_clickOnEnter && event.key === "Enter" || options.unstable_clickOnSpace && event.key === " ") {
        event.preventDefault();
        event.target.dispatchEvent(new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: false
        }));
      }
    }, [options.disabled, options.unstable_clickOnEnter, options.unstable_clickOnSpace, htmlOnKeyDown]);
    return _rollupPluginBabelHelpers_f089acec_objectSpread2({
      ref: useForkRef(ref, htmlRef),
      disabled: trulyDisabled,
      tabIndex: trulyDisabled ? undefined : tabIndex,
      "aria-disabled": options.disabled,
      onClick: onClick,
      onMouseDown: onMouseDown,
      onKeyDown: onKeyDown,
      style: style
    }, htmlProps);
  }
});
var Tabbable = createComponent({
  as: "button",
  useHook: useTabbable
});



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/useAllCallbacks.js


/**
 * React custom hook that combines multiple callbacks into one.
 *
 * @example
 * import React from "react";
 * import { useAllCallbacks } from "reakit-utils";
 *
 * function Component(props) {
 *   const onClick = () => {};
 *   return (
 *     <button onClick={useAllCallbacks(onClick, props.onClick)}>Button</button>
 *   );
 * }
 */
function useAllCallbacks() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return Object(external_React_["useCallback"])(function () {
    var fns = callbacks.filter(Boolean);

    for (var _iterator = fns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var callback = _ref;
      callback.apply(void 0, arguments);
    }
  }, callbacks);
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/createOnKeyDown.js
/**
 * Returns an `onKeyDown` handler to be passed to a component.
 *
 * @param options
 */
function createOnKeyDown(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      keyMap = _ref.keyMap,
      onKey = _ref.onKey,
      stopPropagation = _ref.stopPropagation,
      onKeyDown = _ref.onKeyDown,
      _ref$shouldKeyDown = _ref.shouldKeyDown,
      shouldKeyDown = _ref$shouldKeyDown === void 0 ? function () {
    return true;
  } : _ref$shouldKeyDown,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;

  return function (event) {
    if (!keyMap) return;
    var finalKeyMap = typeof keyMap === "function" ? keyMap(event) : keyMap;
    var shouldPreventDefault = typeof preventDefault === "function" ? preventDefault(event) : preventDefault;
    var shouldStopPropagation = typeof stopPropagation === "function" ? stopPropagation(event) : stopPropagation;

    if (event.key in finalKeyMap) {
      var action = finalKeyMap[event.key];

      if (typeof action === "function" && shouldKeyDown(event)) {
        if (shouldPreventDefault) event.preventDefault();
        if (shouldStopPropagation) event.stopPropagation();
        if (onKey) onKey(event);
        action(event); // Prevent onKeyDown from being called twice for the same keys

        return;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };
}



// CONCATENATED MODULE: ./node_modules/reakit/es/Id/IdProvider.js


var defaultPrefix = "id";
function generateRandomString(prefix) {
  if (prefix === void 0) {
    prefix = defaultPrefix;
  }

  return "" + (prefix ? prefix + "-" : "") + Math.random().toString(32).substr(2, 6);
}

var unstable_IdContext = Object(external_React_["createContext"])(generateRandomString);
function unstable_IdProvider(_ref) {
  var children = _ref.children,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? defaultPrefix : _ref$prefix;
  var count = Object(external_React_["useRef"])(0);
  var generateId = Object(external_React_["useCallback"])(function (localPrefix) {
    if (localPrefix === void 0) {
      localPrefix = prefix;
    }

    return "" + (localPrefix ? localPrefix + "-" : "") + ++count.current;
  }, []);
  return Object(external_React_["createElement"])(unstable_IdContext.Provider, {
    value: generateId
  }, children);
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/useSealedState.js


/**
 * React custom hook that returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 */
function useSealedState(initialState) {
  var _React$useState = Object(external_React_["useState"])(initialState),
      sealed = _React$useState[0];

  return sealed;
}



// CONCATENATED MODULE: ./node_modules/reakit/es/Id/IdState.js




function unstable_useIdState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      initialBaseId = _useSealedState.baseId;

  var generateId = Object(external_React_["useContext"])(unstable_IdContext);
  var idCountRef = Object(external_React_["useRef"])(0);

  var _React$useState = Object(external_React_["useState"])(function () {
    return initialBaseId || generateId();
  }),
      baseId = _React$useState[0],
      setBaseId = _React$useState[1];

  return {
    baseId: baseId,
    unstable_setBaseId: setBaseId,
    unstable_idCountRef: idCountRef
  };
}
var IdState_keys = ["baseId", "unstable_setBaseId", "unstable_idCountRef"];
unstable_useIdState.__keys = IdState_keys;



// CONCATENATED MODULE: ./node_modules/reakit/es/Id/Id.js









var unstable_useId = createHook({
  name: "Id",
  compose: useBox,
  useState: unstable_useIdState,
  keys: ["id"],
  useOptions: function useOptions(options, htmlProps) {
    var generateId = Object(external_React_["useContext"])(unstable_IdContext);

    var _React$useState = Object(external_React_["useState"])(function () {
      // This comes from useIdState
      if (options.unstable_idCountRef) {
        options.unstable_idCountRef.current += 1;
        return "-" + options.unstable_idCountRef.current;
      } // If there's no useIdState, we check if `baseId` was passed (as a prop,
      // not from useIdState).


      if (options.baseId) {
        return "-" + generateId("");
      }

      return "";
    }),
        suffix = _React$useState[0]; // `baseId` will be the prop passed directly as a prop or via useIdState.
    // If there's neither, then it'll fallback to Context's generateId.
    // This generateId can result in a sequential ID (if there's a Provider)
    // or a random string (without Provider).


    var baseId = Object(external_React_["useMemo"])(function () {
      return options.baseId || generateId();
    }, [options.baseId, generateId]);
    var id = options.id || htmlProps.id || "" + baseId + suffix;
    return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, options, {
      id: id
    });
  },
  useProps: function useProps(options, htmlProps) {
    var id = typeof htmlProps.id === "undefined" ? options.id : htmlProps.id;
    return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, htmlProps, {
      id: id
    });
  }
});
var unstable_Id = createComponent({
  as: "div",
  useHook: unstable_useId
});



// CONCATENATED MODULE: ./node_modules/reakit/es/Rover/RoverState.js






function reducer(state, action) {
  var stops = state.stops,
      currentId = state.currentId,
      pastId = state.unstable_pastId,
      moves = state.unstable_moves,
      loop = state.loop;

  switch (action.type) {
    case "register":
      {
        var _id = action.id,
            _ref = action.ref;

        if (stops.length === 0) {
          return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
            stops: [{
              id: _id,
              ref: _ref
            }]
          });
        }

        var index = stops.findIndex(function (stop) {
          return stop.id === _id;
        });

        if (index >= 0) {
          return state;
        }

        var indexToInsertAt = stops.findIndex(function (stop) {
          if (!stop.ref.current || !_ref.current) return false; // Return true if the new rover element is located earlier in the DOM
          // than stop's element, else false:

          return Boolean(stop.ref.current.compareDocumentPosition(_ref.current) & Node.DOCUMENT_POSITION_PRECEDING);
        }); // findIndex returns -1 when the new rover should be inserted
        // at the end of stops (the compareDocumentPosition test
        // always returns false in that case).

        if (indexToInsertAt === -1) {
          return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
            stops: [].concat(stops, [{
              id: _id,
              ref: _ref
            }])
          });
        }

        return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
          stops: [].concat(stops.slice(0, indexToInsertAt), [{
            id: _id,
            ref: _ref
          }], stops.slice(indexToInsertAt))
        });
      }

    case "unregister":
      {
        var _id2 = action.id;
        var nextStops = stops.filter(function (stop) {
          return stop.id !== _id2;
        });

        if (nextStops.length === stops.length) {
          return state;
        }

        return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
          stops: nextStops,
          unstable_pastId: pastId && pastId === _id2 ? null : pastId,
          currentId: currentId && currentId === _id2 ? null : currentId
        });
      }

    case "move":
      {
        var _id3 = action.id,
            silent = action.silent;
        var nextMoves = silent ? moves : moves + 1;

        if (_id3 === null) {
          return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
            currentId: null,
            unstable_pastId: currentId,
            unstable_moves: nextMoves
          });
        }

        var _index = stops.findIndex(function (stop) {
          return stop.id === _id3;
        }); // Item doesn't exist, so we don't count a move


        if (_index === -1) {
          return state;
        }

        if (stops[_index].id === currentId) {
          return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
            unstable_moves: nextMoves
          });
        }

        return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
          currentId: stops[_index].id,
          unstable_pastId: currentId,
          unstable_moves: nextMoves
        });
      }

    case "next":
      {
        if (currentId == null) {
          return reducer(state, {
            type: "move",
            id: stops[0] && stops[0].id
          });
        }

        var _index2 = stops.findIndex(function (stop) {
          return stop.id === currentId;
        }); // If loop is truthy, turns [0, currentId, 2, 3] into [currentId, 2, 3, 0]
        // Otherwise turns into [currentId, 2, 3]


        var reorderedStops = [].concat(stops.slice(_index2 + 1), loop ? stops.slice(0, _index2) : []);
        var nextIndex = reorderedStops.findIndex(function (stop) {
          return stop.id === currentId;
        }) + 1;
        return reducer(state, {
          type: "move",
          id: reorderedStops[nextIndex] && reorderedStops[nextIndex].id
        });
      }

    case "previous":
      {
        var _reducer = reducer(_rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
          stops: stops.slice().reverse()
        }), {
          type: "next"
        }),
            _ = _reducer.stops,
            nextState = _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(_reducer, ["stops"]);

        return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {}, nextState);
      }

    case "first":
      {
        var stop = stops[0];
        return reducer(state, {
          type: "move",
          id: stop && stop.id
        });
      }

    case "last":
      {
        var _stop = stops[stops.length - 1];
        return reducer(state, {
          type: "move",
          id: _stop && _stop.id
        });
      }

    case "reset":
      {
        return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
          currentId: null,
          unstable_pastId: null
        });
      }

    case "orientate":
      return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, state, {
        orientation: action.orientation
      });

    default:
      throw new Error();
  }
}

function useRoverState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      orientation = _useSealedState.orientation,
      _useSealedState$curre = _useSealedState.currentId,
      currentId = _useSealedState$curre === void 0 ? null : _useSealedState$curre,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? false : _useSealedState$loop,
      sealed = _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(_useSealedState, ["orientation", "currentId", "loop"]);

  var _React$useReducer = Object(external_React_["useReducer"])(reducer, {
    orientation: orientation,
    stops: [],
    currentId: currentId,
    unstable_pastId: null,
    unstable_moves: 0,
    loop: loop
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var idState = unstable_useIdState(sealed);
  return _rollupPluginBabelHelpers_f089acec_objectSpread2({}, idState, {}, state, {
    register: Object(external_React_["useCallback"])(function (id, ref) {
      return dispatch({
        type: "register",
        id: id,
        ref: ref
      });
    }, []),
    unregister: Object(external_React_["useCallback"])(function (id) {
      return dispatch({
        type: "unregister",
        id: id
      });
    }, []),
    move: Object(external_React_["useCallback"])(function (id, silent) {
      return dispatch({
        type: "move",
        id: id,
        silent: silent
      });
    }, []),
    next: Object(external_React_["useCallback"])(function () {
      return dispatch({
        type: "next"
      });
    }, []),
    previous: Object(external_React_["useCallback"])(function () {
      return dispatch({
        type: "previous"
      });
    }, []),
    first: Object(external_React_["useCallback"])(function () {
      return dispatch({
        type: "first"
      });
    }, []),
    last: Object(external_React_["useCallback"])(function () {
      return dispatch({
        type: "last"
      });
    }, []),
    unstable_reset: Object(external_React_["useCallback"])(function () {
      return dispatch({
        type: "reset"
      });
    }, []),
    unstable_orientate: Object(external_React_["useCallback"])(function (o) {
      return dispatch({
        type: "orientate",
        orientation: o
      });
    }, [])
  });
}
var RoverState_keys = [].concat(unstable_useIdState.__keys, ["orientation", "stops", "currentId", "unstable_pastId", "unstable_moves", "loop", "register", "unregister", "move", "next", "previous", "first", "last", "unstable_reset", "unstable_orientate"]);
useRoverState.__keys = RoverState_keys;



// CONCATENATED MODULE: ./node_modules/reakit/es/Rover/Rover.js



















var useRover = createHook({
  name: "Rover",
  compose: [useTabbable, unstable_useId],
  useState: useRoverState,
  keys: ["stopId"],
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        _ref$tabIndex = _ref.tabIndex,
        htmlTabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
        htmlOnFocus = _ref.onFocus,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlProps = _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(_ref, ["ref", "tabIndex", "onFocus", "onKeyDown"]);

    var ref = Object(external_React_["useRef"])(null);
    var stopId = options.stopId || options.id || htmlProps.id;
    var trulyDisabled = options.disabled && !options.focusable;
    var noFocused = options.currentId == null;
    var focused = options.currentId === stopId;
    var isFirst = (options.stops || [])[0] && options.stops[0].id === stopId;
    var shouldTabIndex = focused || isFirst && noFocused;
    Object(external_React_["useEffect"])(function () {
      if (trulyDisabled || !stopId) return undefined;
      options.register && options.register(stopId, ref);
      return function () {
        return options.unregister && options.unregister(stopId);
      };
    }, [stopId, trulyDisabled, options.register, options.unregister]);
    Object(external_React_["useEffect"])(function () {
      var rover = ref.current;

      if (!rover) {
         false ? undefined : void 0;
        return;
      }

      if (options.unstable_moves && focused && !hasFocusWithin(rover)) {
        rover.focus();
      }
    }, [focused, options.unstable_moves]);
    var onFocus = Object(external_React_["useCallback"])(function (event) {
      if (!stopId || !event.currentTarget.contains(event.target)) return; // this is already focused, so we move silently

      options.move(stopId, true);
    }, [options.move, stopId]);
    var onKeyDown = Object(external_React_["useMemo"])(function () {
      return createOnKeyDown({
        onKeyDown: htmlOnKeyDown,
        stopPropagation: true,
        shouldKeyDown: function shouldKeyDown(event) {
          return (// Ignore portals
            // https://github.com/facebook/react/issues/11387
            event.currentTarget.contains(event.target)
          );
        },
        keyMap: {
          ArrowUp: options.orientation !== "horizontal" && options.previous,
          ArrowRight: options.orientation !== "vertical" && options.next,
          ArrowDown: options.orientation !== "horizontal" && options.next,
          ArrowLeft: options.orientation !== "vertical" && options.previous,
          Home: options.first,
          End: options.last,
          PageUp: options.first,
          PageDown: options.last
        }
      });
    }, [htmlOnKeyDown, options.orientation, options.previous, options.next, options.first, options.last]);
    return _rollupPluginBabelHelpers_f089acec_objectSpread2({
      ref: useForkRef(ref, htmlRef),
      id: stopId,
      tabIndex: shouldTabIndex ? htmlTabIndex : -1,
      onFocus: useAllCallbacks(onFocus, htmlOnFocus),
      onKeyDown: onKeyDown
    }, htmlProps);
  }
});
var Rover = createComponent({
  as: "button",
  useHook: useRover
});



// CONCATENATED MODULE: ./node_modules/reakit/es/Toolbar/ToolbarState.js







function useToolbarState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$orien = _useSealedState.orientation,
      orientation = _useSealedState$orien === void 0 ? "horizontal" : _useSealedState$orien,
      sealed = _rollupPluginBabelHelpers_f089acec_objectWithoutPropertiesLoose(_useSealedState, ["orientation"]);

  return useRoverState(_rollupPluginBabelHelpers_f089acec_objectSpread2({
    orientation: orientation
  }, sealed));
}
var ToolbarState_keys = [].concat(useRoverState.__keys);
useToolbarState.__keys = ToolbarState_keys;



// CONCATENATED MODULE: ./node_modules/reakit/es/Toolbar/ToolbarItem.js





















var useToolbarItem = createHook({
  name: "ToolbarItem",
  compose: useRover,
  useState: useToolbarState
});
var ToolbarItem = createComponent({
  as: "button",
  useHook: useToolbarItem
});




/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param {Function} mapComponentToEnhancedComponent Function mapping component
 *                                                   to enhanced component.
 * @param {string}   modifierName                    Seed name from which to
 *                                                   generated display name.
 *
 * @return {WPComponent} Component class with generated display name assigned.
 */

function createHigherOrderComponent(mapComponentToEnhancedComponent, modifierName) {
  return function (OriginalComponent) {
    var EnhancedComponent = mapComponentToEnhancedComponent(OriginalComponent);
    var _OriginalComponent$di = OriginalComponent.displayName,
        displayName = _OriginalComponent$di === void 0 ? OriginalComponent.name || 'Component' : _OriginalComponent$di;
    EnhancedComponent.displayName = "".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(modifierName)), "(").concat(displayName, ")");
    return EnhancedComponent;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent);
//# sourceMappingURL=index.js.map

/***/ }),
/* 85 */
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
  module.exports = __webpack_require__(74);
} else {}


/***/ })
/******/ ]);