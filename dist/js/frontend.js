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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
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
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(26);

var iterableToArray = __webpack_require__(27);

var nonIterableSpread = __webpack_require__(28);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.toJson = toJson;

var _constants = __webpack_require__(7);

var _utils = __webpack_require__(8);

var _auth = __webpack_require__(18);

var _auth2 = _interopRequireDefault(_auth);

var _currentUser = __webpack_require__(19);

var _currentUser2 = _interopRequireDefault(_currentUser);

var _users = __webpack_require__(20);

var _users2 = _interopRequireDefault(_users);

var _photos = __webpack_require__(21);

var _photos2 = _interopRequireDefault(_photos);

var _collections = __webpack_require__(23);

var _collections2 = _interopRequireDefault(_collections);

var _search = __webpack_require__(24);

var _search2 = _interopRequireDefault(_search);

var _stats = __webpack_require__(25);

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Unsplash = function () {
  function Unsplash(options) {
    _classCallCheck(this, Unsplash);

    this._apiUrl = options.apiUrl || _constants.API_URL;
    this._apiVersion = options.apiVersion || _constants.API_VERSION;
    this._accessKey = options.accessKey;
    this._secret = options.secret;
    this._callbackUrl = options.callbackUrl;
    this._bearerToken = options.bearerToken;
    this._headers = options.headers || {};
    this._timeout = options.timeout || 0; // 0 defaults to the OS timeout behaviour.

    this.auth = _auth2.default.bind(this)();
    this.currentUser = _currentUser2.default.bind(this)();
    this.users = _users2.default.bind(this)();
    this.photos = _photos2.default.bind(this)();
    this.collections = _collections2.default.bind(this)();
    this.search = _search2.default.bind(this)();
    this.stats = _stats2.default.bind(this)();
  }

  _createClass(Unsplash, [{
    key: "request",
    value: function request(requestOptions) {
      var _buildFetchOptions$bi = _utils.buildFetchOptions.bind(this)(requestOptions),
          url = _buildFetchOptions$bi.url,
          options = _buildFetchOptions$bi.options;

      return fetch(url, options);
    }
  }]);

  return Unsplash;
}();

exports.default = Unsplash;
function toJson(res) {
  return typeof res.json === "function" ? res.json() : res;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = exports.API_URL = "https://api.unsplash.com";
var API_VERSION = exports.API_VERSION = "v1";
var OAUTH_AUTHORIZE_URL = exports.OAUTH_AUTHORIZE_URL = "https://unsplash.com/oauth/authorize";
var OAUTH_TOKEN_URL = exports.OAUTH_TOKEN_URL = "https://unsplash.com/oauth/token";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.formUrlEncode = formUrlEncode;
exports.getUrlComponents = getUrlComponents;
exports.buildFetchOptions = buildFetchOptions;

var _querystring = __webpack_require__(9);

var _formUrlencoded = __webpack_require__(14);

var _formUrlencoded2 = _interopRequireDefault(_formUrlencoded);

var _urlParse = __webpack_require__(15);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formUrlEncode(body) {
  return (0, _formUrlencoded2.default)(body);
}

function getUrlComponents(uri) {
  return (0, _urlParse2.default)(uri, {}, true);
}

function buildFetchOptions(options) {
  var method = options.method,
      query = options.query,
      oauth = options.oauth,
      body = options.body;

  var url = oauth === true ? options.url : "" + this._apiUrl + options.url;
  var headers = _extends({}, this._headers, options.headers, {
    "Accept-Version": this._apiVersion,
    "Authorization": this._bearerToken ? "Bearer " + this._bearerToken : "Client-ID " + this._accessKey
  });
  var timeout = this._timeout;

  if (body) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  if (query) {
    url = decodeURIComponent(url + "?" + (0, _querystring.stringify)(query));
  }

  return {
    url: url,
    options: {
      method: method,
      headers: headers,
      timeout: timeout,
      body: method !== "GET" && body ? formUrlEncode(body) : undefined
    }
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(12);
exports.encode = exports.stringify = __webpack_require__(13);


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Filename: formurlencoded.js
// Timestamp: 2016.01.18-15:36:37 (last modified)
// Author(s): Bumblehead (www.bumblehead.com), JBlashill (james@blashill.com)
//
// http://www.w3.org/TR/html5/forms.html#url-encoded-form-data
// input: {one:1,two:2} return: '[one]=1&[two]=2'

var formurlencoded = module.exports = function (data, opts) {
  opts = typeof opts === 'object' ? opts : {};

  function encode (value) {
    return String(value)
      .replace(/[^ !'()~\*]*/g, encodeURIComponent)
      .replace(/ /g, '+')
      .replace(/[!'()~\*]/g, function (ch) {
        return '%' + ch.charCodeAt().toString(16).slice(-2).toUpperCase();
      });
  }

  function keys (obj) {
    var keys = Object.keys(obj);

    return opts.sorted ? keys.sort() : keys;
  }

  function filterjoin (arr) {
    return arr.filter(function (e) { return e; }).join('&');
  }

  function objnest (name, obj) {
    return filterjoin(keys(obj).map(function (key) {
      return nest(name + '[' + key + ']', obj[key]);
    }));
  }

  function arrnest (name, arr) {
    return filterjoin(arr.map(function (elem) {
      return nest(name + '[]', elem);
    }));
  }

  function nest (name, value) {
    var type = typeof value,
        f = null;

    if (value === f) {
      f = opts.ignorenull ? f : encode(name) + '=' + f;
    } else if (/string|number|boolean/.test(type)) {
      f = encode(name) + '=' + encode(value);
    } else if (Array.isArray(value)) {
      f = arrnest(name, value);
    } else if (type === 'object') {
      f = objnest(name, value);
    }

    return f;
  }

  return filterjoin(keys(data).map(function (key) {
    return nest(key, data[key]);
  }));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(16)
  , qs = __webpack_require__(17)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = auth;

var _querystring = __webpack_require__(9);

var _querystring2 = _interopRequireDefault(_querystring);

var _constants = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function auth() {
  var _this = this;

  return {
    getAuthenticationUrl: function getAuthenticationUrl() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["public"];

      var querystrings = _querystring2.default.stringify({
        client_id: _this._accessKey,
        redirect_uri: _this._callbackUrl,
        response_type: "code",
        scope: scope.length > 1 ? scope.join("+") : scope.toString()
      });

      return decodeURIComponent(_constants.OAUTH_AUTHORIZE_URL + "?" + querystrings);
    },

    userAuthentication: function userAuthentication(code) {
      var url = _constants.OAUTH_TOKEN_URL;

      return _this.request({
        url: url,
        method: "POST",
        body: {
          client_id: _this._accessKey,
          client_secret: _this._secret,
          redirect_uri: _this._callbackUrl,
          grant_type: "authorization_code",
          code: code
        },
        oauth: true
      });
    },

    setBearerToken: function setBearerToken(accessToken) {
      if (accessToken) {
        _this._bearerToken = accessToken;
      }
    }
  };
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currentUser;
function currentUser() {
  var _this = this;

  return {
    profile: function profile() {
      var url = "/me";

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    updateProfile: function updateProfile(options) {
      var endpointUrl = "/me";
      var username = options.username,
          firstName = options.firstName,
          lastName = options.lastName,
          email = options.email,
          url = options.url,
          location = options.location,
          bio = options.bio,
          instagramUsername = options.instagramUsername;

      var body = {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        url: url,
        location: location,
        bio: bio,
        instagram_username: instagramUsername
      };

      Object.keys(body).forEach(function (key) {
        if (!body[key]) {
          delete body[key];
        }
      });

      return _this.request({
        url: endpointUrl,
        method: "PUT",
        body: body
      });
    }
  };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = users;
function users() {
  var _this = this;

  return {
    profile: function profile(username) {
      var url = "/users/" + username;

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    photos: function photos(username) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
      var stats = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var url = "/users/" + username + "/photos";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy,
        stats: stats
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    likes: function likes(username) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";

      var url = "/users/" + username + "/likes";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    collections: function collections(username) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "published";

      var url = "/users/" + username + "/collections";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    statistics: function statistics(username) {
      var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "days";
      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var url = "/users/" + username + "/statistics";
      var query = {
        resolution: resolution,
        quantity: quantity
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    }
  };
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = photos;

var _utils = __webpack_require__(8);

var _lodash = __webpack_require__(22);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function photos() {
  var _this = this;

  return {
    listPhotos: function listPhotos() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var orderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";

      var url = "/photos";
      var query = {
        page: page,
        per_page: perPage,
        order_by: orderBy
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    getPhoto: function getPhoto(id) {
      var url = "/photos/" + id;

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    getPhotoStats: function getPhotoStats(id) {
      var url = "/photos/" + id + "/statistics";

      return _this.request({
        url: url,
        method: "GET"
      });
    },

    getRandomPhoto: function getRandomPhoto() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var url = "/photos/random";
      var collections = options.collections || [];

      var query = {
        featured: options.featured,
        username: options.username,
        orientation: options.orientation,
        collections: collections.join(),
        query: options.query,
        c: options.cacheBuster || new Date().getTime(), // Avoid ajax response caching
        count: options.count
      };

      Object.keys(query).forEach(function (key) {
        if (!query[key]) {
          delete query[key];
        }
      });

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    likePhoto: function likePhoto(id) {
      if (!_this._bearerToken) {
        throw new Error("Requires a bearerToken to be set.");
      }

      var url = "/photos/" + id + "/like";

      return _this.request({
        url: url,
        method: "POST"
      });
    },

    unlikePhoto: function unlikePhoto(id) {
      if (!_this._bearerToken) {
        throw new Error("Requires a bearerToken to be set.");
      }

      var url = "/photos/" + id + "/like";

      return _this.request({
        url: url,
        method: "DELETE"
      });
    },

    downloadPhoto: function downloadPhoto(photo) {
      var downloadLocation = (0, _lodash2.default)(photo, "links.download_location", undefined);

      if (downloadLocation === undefined) {
        throw new Error("Object received is not a photo. " + photo);
      }

      var urlComponents = (0, _utils.getUrlComponents)(downloadLocation);

      return _this.request({
        url: urlComponents.pathname,
        method: "GET",
        query: urlComponents.query
      });
    }
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = collections;
function collections() {
  var _this = this;

  return {
    listCollections: function listCollections() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var url = "/collections";

      var query = {
        page: page,
        per_page: perPage
      };

      return _this.request({
        url: url,
        method: "GET",
        query: query
      });
    },

    getCollection: collection.bind(this),

    getCollectionPhotos: collectionPhotos.bind(this),

    createCollection: createUpdateCollection.bind(this, null),

    updateCollection: createUpdateCollection.bind(this),

    deleteCollection: function deleteCollection(id) {
      var url = "/collections/" + id;

      return _this.request({
        url: url,
        method: "DELETE"
      });
    },

    addPhotoToCollection: function addPhotoToCollection(collectionId, photoId) {
      var url = "/collections/" + collectionId + "/add";

      return _this.request({
        url: url,
        method: "POST",
        body: {
          photo_id: photoId
        }
      });
    },

    removePhotoFromCollection: function removePhotoFromCollection(collectionId, photoId) {
      var url = "/collections/" + collectionId + "/remove?photo_id=" + photoId;

      return _this.request({
        url: url,
        method: "DELETE"
      });
    },

    listRelatedCollections: function listRelatedCollections(collectionId) {
      var url = "/collections/" + collectionId + "/related";

      return _this.request({
        url: url,
        method: "GET"
      });
    }
  };
}

function collection(id) {
  return this.request({
    url: "/collections/" + id,
    method: "GET"
  });
}

function collectionPhotos(id) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";

  var query = {
    page: page,
    per_page: perPage,
    order_by: orderBy
  };

  return this.request({
    url: "/collections/" + id + "/photos",
    method: "GET",
    query: query
  });
}

function createUpdateCollection(id, title, description, isPrivate) {
  var url = id ? "/collections/" + id : "/collections";
  var body = {
    title: title,
    description: description,
    "private": isPrivate
  };

  return this.request({
    url: url,
    method: id ? "PUT" : "POST",
    body: body
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function search() {
  var _this = this;

  return {
    photos: function photos() {
      var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var filters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var collections = filters.collections || [];
      var query = {
        query: encodeURIComponent(keyword),
        per_page: perPage,
        orientation: filters.orientation,
        collections: collections.join(),
        page: page
      };

      Object.keys(query).forEach(function (key) {
        if (!query[key] && key != "query") {
          delete query[key];
        }
      });

      return _this.request({
        url: "/search/photos",
        method: "GET",
        query: query
      });
    },

    users: function users() {
      var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      var query = {
        query: encodeURIComponent(keyword),
        per_page: perPage,
        page: page
      };

      return _this.request({
        url: "/search/users",
        method: "GET",
        query: query
      });
    },

    collections: function collections() {
      var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      var query = {
        query: encodeURIComponent(keyword),
        per_page: perPage,
        page: page
      };

      return _this.request({
        url: "/search/collections",
        method: "GET",
        query: query
      });
    }
  };
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stats;
function stats() {
  var _this = this;

  return {
    total: function total() {
      var url = "/stats/total";

      return _this.request({
        url: url,
        method: "GET"
      });
    }
  };
}

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(0);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/unsplash-js/lib/unsplash.js
var unsplash = __webpack_require__(5);
var unsplash_default = /*#__PURE__*/__webpack_require__.n(unsplash);

// CONCATENATED MODULE: ./src/utils/unsplash.js



var APP_NAME = 'Nova Blocks';
var COLLECTION_ID = 10606015;
var URL_PARAMS = encodeURI("utm_source=".concat(APP_NAME, "&utm_medium=referral"));

var unsplash_PlaceholderImagesCollection = /*#__PURE__*/function () {
  function PlaceholderImagesCollection() {
    classCallCheck_default()(this, PlaceholderImagesCollection);

    this.fetchedImages = false;
    this.images = [];
  }

  createClass_default()(PlaceholderImagesCollection, [{
    key: "fetch",
    value: function fetch() {
      var _window,
          _window$pixcare,
          _window$pixcare$theme,
          _this = this;

      var normalize = this.normalize.bind(this);
      var apiKey = (_window = window) === null || _window === void 0 ? void 0 : (_window$pixcare = _window.pixcare) === null || _window$pixcare === void 0 ? void 0 : (_window$pixcare$theme = _window$pixcare.themeConfig) === null || _window$pixcare$theme === void 0 ? void 0 : _window$pixcare$theme.unsplashApiKey;

      if (!apiKey) {
        this.fetchedImages = true;
        return [];
      }

      this.api = new unsplash_default.a({
        accessKey: apiKey
      });
      return this.api.collections.getCollectionPhotos(COLLECTION_ID).then(unsplash["toJson"]).then(function (photos) {
        _this.images = photos.map(normalize);
        return _this.images;
      }).finally(function () {
        _this.fetchedImages = true;
      });
    }
  }, {
    key: "get",
    value: function get() {
      if (this.fetchedImages) {
        return this.images;
      }

      return this.fetch();
    }
  }, {
    key: "normalize",
    value: function normalize(photo) {
      var _this2 = this;

      return {
        id: photo.id,
        url: photo.urls.full,
        type: 'image',
        width: photo.width,
        height: photo.height,
        sizes: {
          full: {
            url: photo.urls.full,
            width: photo.width,
            height: photo.height
          },
          large: {
            url: photo.urls.regular
          },
          medium: {
            url: photo.urls.small
          },
          thumbnail: {
            url: photo.urls.thumb
          },
          novablocks_huge: {
            url: photo.urls.full
          },
          novablocks_large: {
            url: photo.urls.regular
          },
          novablocks_medium: {
            url: photo.urls.small
          },
          novablocks_tiny: {
            url: photo.urls.thumb
          }
        },
        title: photo.description,
        caption: "<p class=\"credits\">Photo by <a target=\"_blank\" href=\"".concat(photo.user.links.html, "?").concat(URL_PARAMS, "\">").concat(photo.user.name, "</a> on <a target=\"_blank\" href=\"https://unsplash.com?").concat(URL_PARAMS, "\">Unsplash</a></p>"),
        download: function download() {
          _this2.api.photos.downloadPhoto(photo);
        }
      };
    }
  }]);

  return PlaceholderImagesCollection;
}();

var instance = new unsplash_PlaceholderImagesCollection();
var getPlaceholderImages = instance.get.bind(instance);

// CONCATENATED MODULE: ./src/utils/index.js


var getRandomBetween = function getRandomBetween(min, max) {
  var random = Math.max(0, Math.random() - Number.MIN_VALUE);
  return Math.floor(random * (max - min + 1) + min);
};
var getRandomArrayFromArray = function getRandomArrayFromArray(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);

  if (!len) {
    return [];
  }

  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  return result;
};
var getRandomBooleanValue = function getRandomBooleanValue() {
  return getRandomArrayFromArray([true, false], 1)[0];
};
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
var utils_getControlsClasses = function getControlsClasses(attributes, compileAttributes) {
  var classes = ['novablocks-controls-wrap'];
  var compiledAttributes = compileAttributes(attributes);

  if (Object.keys(compiledAttributes).some(function (key) {
    return compiledAttributes[key] !== attributes[key];
  })) {
    classes.push('novablocks-controls-wrap--dirty');
  }

  return classnames_default()(classes);
};
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
var breakpoints = {
  desktop: 1366,
  lap: 1024,
  tablet: 768
};
var below = function below(breakpoint) {
  var width = breakpoints[breakpoint];
  return window.innerWidth < width;
};
var above = function above(breakpoint) {
  var width = breakpoints[breakpoint];
  return window.innerWidth >= width;
};
// CONCATENATED MODULE: ./src/components/viewportObserver.js





var viewportObserver_viewportObserver = /*#__PURE__*/function () {
  function viewportObserver() {
    classCallCheck_default()(this, viewportObserver);

    this.useOrientation = hasTouchScreen() && 'orientation' in window;
    this.bindEvents();
  }

  createClass_default()(viewportObserver, [{
    key: "bindEvents",
    value: function bindEvents() {
      var $window = external_jQuery_default()(window);
      var updateViewportUnits = this.updateViewportUnits.bind(this);
      updateViewportUnits();

      if (this.useOrientation) {
        $window.on('orientationchange', function () {
          $window.one('resize', updateViewportUnits);
        });
      } else {
        $window.on('resize', updateViewportUnits);
      }
    }
  }, {
    key: "updateViewportUnits",
    value: function updateViewportUnits() {
      var root = document.documentElement;
      var windowWidth = this.useOrientation && window.screen && window.screen.availWidth || window.innerWidth;
      var windowHeight = this.useOrientation && window.screen && window.screen.availHeight || window.innerHeight;
      var vw = windowWidth / 100 + 'px';
      var vh = windowHeight / 100 + 'px';
      root.style.setProperty('--novablocks-1vw', vw);
      root.style.setProperty('--novablocks-1vh', vh);
    }
  }]);

  return viewportObserver;
}();

/* harmony default export */ var components_viewportObserver = (new viewportObserver_viewportObserver());
// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(6);
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./src/blocks/announcement-bar/announcement-bar.js




var announcement_bar_AnnouncementBar = /*#__PURE__*/function () {
  function AnnouncementBar(element, args) {
    classCallCheck_default()(this, AnnouncementBar);

    this.element = element;
    this.pieces = this.getPieces();
    this.id = jQuery(element).data('id');
    this.cookieName = 'novablocks-announcement-' + this.id + '-disabled';
    var disabled = js_cookie_default.a.get(this.cookieName);
    var loggedIn = jQuery('body').hasClass('logged-in');

    if (disabled && !loggedIn) {
      return;
    }

    this.pieces.element.removeClass('is-hidden');
    this.bindEvents();
  }

  createClass_default()(AnnouncementBar, [{
    key: "getPieces",
    value: function getPieces() {
      var $element = jQuery(this.element);
      return {
        element: $element,
        close: $element.find('.novablocks-announcement-bar__close')
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.pieces.close.on('click', this.onClose.bind(this));
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var cookieName = this.cookieName;
      this.pieces.element.addClass('is-hidden');
      js_cookie_default.a.set(cookieName, true, {
        expires: 365
      });
    }
  }]);

  return AnnouncementBar;
}();


// CONCATENATED MODULE: ./src/blocks/announcement-bar/frontend.js


(function ($, window, undefined) {
  $(function () {
    var announcementElements = document.getElementsByClassName('novablocks-announcement-bar');
    var announcementElementsArray = Array.from(announcementElements);
    var AnnouncementCollection = announcementElementsArray.map(function (element) {
      return new announcement_bar_AnnouncementBar(element);
    });
  });
})(jQuery, window);
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
  var shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;
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
      focalPoint = props.focalPoint;
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

function getScrollContainerHeight() {
  var useOrientation = hasTouchScreen() && 'orientation' in window;
  return useOrientation && window.screen && window.screen.availHeight || window.innerHeight;
}

var util_parallaxInit = function parallaxInit($blocks) {
  var frameRendered = false;
  var scrollContainerHeight = getScrollContainerHeight();
  $blocks.each(function (i, container) {
    var $container = external_jQuery_default()(container);
    var followThroughStart = !!$container.data('smooth-start');
    var followThroughEnd = !!$container.data('smooth-end');
    var scrollingEffect = $container.data('scrolling-effect');
    var focalPoint = $container.data('focal-point');
    var finalFocalPoint = $container.data('final-focal-point');
    var initialBackgroundScale = $container.data('initial-background-scale');
    var finalBackgroundScale = $container.data('final-background-scale');
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
        scrollContainerHeight: getScrollContainerHeight()
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
// CONCATENATED MODULE: ./src/blocks/google-map/frontend.js




(function ($, window, undefined) {
  var $blocks = $('.novablocks-map');
  util_parallaxInit($blocks);
  mapInit();

  function mapInit() {
    if (typeof google === "undefined" || typeof google.maps === "undefined") {
      return;
    }

    $('.js-novablocks-google-map').each(function (i, obj) {
      var $obj = $(obj),
          markers = $obj.data('markers'),
          showLabels = $obj.data('show-labels'),
          showIcons = $obj.data('show-icons'),
          styles = $obj.data('styles'),
          zoom = $obj.data('zoom'),
          hideControls = !$obj.data('controls'),
          pinColor = $obj.data('pin-color'),
          mapOptions = {
        mapTypeId: 'roadmap',
        center: utils_getCenterFromMarkers(markers),
        zoom: zoom,
        styles: addVisibilityToStyles(styles, showLabels, showIcons),
        disableDefaultUI: hideControls,
        clickableIcons: false,
        keyboardShortcuts: false
      },
          map = new google.maps.Map(obj, mapOptions);
      var pinMarkup = pin.replace(/%ACCENT_COLOR%/g, pinColor);
      markers.forEach(function (markerString) {
        var marker = JSON.parse(markerString);
        new google.maps.Marker({
          map: map,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pinMarkup)
          },
          title: marker.title,
          position: marker.geometry.location
        });
      });
    });
  }
})(jQuery, window);
// CONCATENATED MODULE: ./src/blocks/hero/frontend.js


(function ($, window, undefined) {
  var $heroes = $('.novablocks-hero');
  var windowScrollY;
  var scrollButtonHidden = false;
  var $scrollButton = $('.novablocks-hero__indicator');
  util_parallaxInit($heroes);
  bulletsInit();
  scrollButtonInit();
  updateScroll();
  $(window).on('scroll', updateScroll);

  function updateScroll() {
    windowScrollY = window.scrollY;

    if (windowScrollY > 200) {
      hideScrollButton();
    }
  }

  function bulletsInit() {
    var $body = $('body');
    var shouldHaveBullets = $body.is('.novablocks-has-position-indicators') && $('.novablocks-hero').length > 1;

    if (shouldHaveBullets && typeof $.fn.bully !== 'undefined') {
      $('.novablocks-hero').bully();
    }
  }

  function hideScrollButton() {
    if (scrollButtonHidden) {
      return;
    }

    $scrollButton.filter('.novablocks-hero__indicator--middle').addClass('novablocks-hero__indicator--hidden');
    scrollButtonHidden = true;
  }

  function scrollButtonInit() {
    var $hero = $scrollButton.closest('.novablocks-hero');

    if ($hero.length) {
      $scrollButton.on('click', function () {
        var heroBox = $hero.get(0).getBoundingClientRect();
        var heroBoxTop = heroBox.y || heroBox.top;
        window.scrollTo({
          top: heroBoxTop + heroBox.height + windowScrollY,
          behavior: 'smooth'
        });
      });
    }
  }
})(jQuery, window);
// CONCATENATED MODULE: ./src/blocks/slideshow/frontend.js


var BLOCK_SELECTOR = '.novablocks-slideshow';
var SLIDER_SELECTOR = '.novablocks-slideshow__slider';
var SLIDE_SELECTOR = '.novablocks-slideshow__slide';
var FOREGROUND_SELECTOR = '.novablocks-slideshow__foreground';
var TRANSITION_DURATION = 1000;
var TRANSITION_EASING = "easeInOutCirc";

(function ($, window, undefined) {
  var $window = $(window);
  var $blocks = $(BLOCK_SELECTOR);
  var useOrientation = hasTouchScreen() && 'orientation' in window;
  var onDebouncedResize = debounce(onResize, 300);
  $blocks.each(function (index, block) {
    var $block = $(block),
        $slider = $block.find(SLIDER_SELECTOR),
        $arrowContainer;
    resetBlockMinHeight($block);

    if ($slider.children().length > 1) {
      $arrowContainer = $('<div class="novablocks-slideshow__controls">').appendTo($block);
      $slider.on('beforeChange', onBeforeSlideChange);
      $slider.slick({
        rows: 0,
        // for simpler reveal transitions between slides
        fade: true,
        prevArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev"></div>',
        nextArrow: '<div class="novablocks-slideshow__arrow novablocks-slideshow__arrow--next"></div>',
        appendArrows: $arrowContainer,
        speed: 0
      });
    }

    $block.addClass('is-ready');
  });
  util_parallaxInit($blocks);

  if (useOrientation) {
    $window.on('orientationchange', function () {
      $window.one('resize', onResize);
    });
  } else {
    $window.on('resize', onDebouncedResize);
  }

  function resetBlockMinHeight($block) {
    $block.css('minHeight', '');
    $block.css('minHeight', getBlockMinHeight($block));
    $(window).trigger('scroll');
  }

  function getBlockMinHeight($block) {
    var windowWidth = window.innerWidth;
    var $slider = $block.find(SLIDER_SELECTOR);
    var sliderWidth = $block.find(SLIDER_SELECTOR).outerWidth();
    var windowHeight = window.innerHeight;
    var sliderMinHeight = parseInt($block.data('min-height')) * windowHeight / 100;
    var mediaMinHeight = 0;
    var slideMaxHeight = 0;
    var maxAspectRatio = 0;
    $block.find(SLIDE_SELECTOR).each(function (i, obj) {
      var $slide = $(obj),
          $media = $slide.find('.novablocks-slideshow__media'),
          width = $media.data('width'),
          height = $media.data('height'),
          aspectRatio = width / height,
          slideHeight = $slide.outerHeight();
      maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
      mediaMinHeight = sliderWidth / maxAspectRatio;
      slideMaxHeight = slideHeight > slideMaxHeight ? slideHeight : slideMaxHeight;
    });
    return Math.max(sliderMinHeight, slideMaxHeight, mediaMinHeight);
  }

  function onResize() {
    $blocks.each(function (index, block) {
      var $block = $(block);
      var $slider = $block.find(SLIDER_SELECTOR);
      resetBlockMinHeight($block);

      if ($slider.is('.slick-initialized')) {
        $slider.slick('setPosition');
      }
    });
  }

  function onBeforeSlideChange(event, slick, currentSlide, nextSlide) {
    var $currentSlide = $(slick.$slides[currentSlide]);
    var $nextSlide = $(slick.$slides[nextSlide]);
    var $slides = $(slick.$slides);
    transition($currentSlide, $nextSlide, getDirection(slick, currentSlide, nextSlide));
  }

  function hasFixedBackground($slide) {
    var fixed = false;

    if ($slide.find('.novablocks-parallax').css('position') === 'fixed') {
      return true;
    }

    return fixed;
  }

  function transition($current, $next) {
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var slideWidth = $current.outerWidth();
    var move = 300;
    var isFixed = hasFixedBackground($current);
    $current.velocity({
      tween: [0, 1]
    }, {
      duration: TRANSITION_DURATION,
      easing: TRANSITION_EASING,
      begin: function begin() {
        $current.addClass('novablocks-slideshow__slide--current');
        $next.addClass('novablocks-slideshow__slide--next');
      },
      progress: function progress(elements, percentComplete, remaining, tweenValue, activeCall) {
        var next = $next.find('.novablocks-slideshow__slide-wrap').get(0);
        var nextBg = $next.find('.novablocks-slideshow__media').get(0);
        var nextFg = $next.find(FOREGROUND_SELECTOR).get(0);
        var current = $current.get(0);
        var currentBg = $current.find('.novablocks-slideshow__media').get(0);
        var currentFg = $current.find(FOREGROUND_SELECTOR).get(0);

        if (isFixed) {
          next.style.left = slideWidth * tweenValue + 'px';
          nextBg.style.left = move * tweenValue + 'px';
          nextFg.style.left = slideWidth * -tweenValue + 'px';
          currentBg.style.left = move * (tweenValue - 1) + 'px';
        } else {
          next.style.left = slideWidth * tweenValue + 'px';
          nextBg.style.left = (move - slideWidth) * tweenValue + 'px';
          nextFg.style.left = (move - slideWidth) * tweenValue + 'px';
          currentBg.style.left = move * (tweenValue - 1) + 'px';
        }
      },
      complete: function complete() {
        $current.removeClass('novablocks-slideshow__slide--current');
        $next.removeClass('novablocks-slideshow__slide--next');
      }
    });
  }

  function getDirection(slick, currentSlide, nextSlide) {
    var direction = 1;

    if (slick.slideCount > 2) {
      if (currentSlide === 0 && nextSlide === slick.slideCount - 1) {
        direction = -1;
      }

      if (nextSlide < currentSlide && (nextSlide !== 0 || currentSlide !== slick.slideCount - 1)) {
        direction = -1;
      }
    }

    return direction;
  }
})(jQuery, window);
// CONCATENATED MODULE: ./src/components/advanced-gallery/util.js


var util_getRandomAttributes = function getRandomAttributes() {
  return {
    sizeContrast: getRandomBetween(0, 5) * 20,
    positionShift: getRandomBetween(0, 20) * 5,
    elementsDistance: getRandomBetween(0, 5) * 20,
    placementVariation: getRandomBetween(1, 4) * 25,
    stylePreset: 'just-my-style'
  };
};
var getGalleryStyle = function getGalleryStyle(attributes) {
  var containerHeight = attributes.containerHeight / 50 - 1;
  var numerator = 1;
  var denominator = 1;
  containerHeight = Math.min(Math.max(-1, containerHeight), 1);

  if (containerHeight > 0) {
    numerator = 1 + containerHeight;
  }

  if (containerHeight < 0) {
    denominator = 1 + Math.abs(containerHeight);
  }

  return {
    paddingTop: "".concat(numerator * 100 / denominator, "%")
  };
};
var getGridStyle = function getGridStyle(attributes) {
  var elementsDistance = attributes.elementsDistance;
  return {
    '--novablocks-advanced-gallery-grid-gap': "".concat(elementsDistance, "px")
  };
};
var util_safariHeightFix = function safariHeightFix(grid) {
  if (!isSafari) {
    return;
  }

  var parent = grid.parentNode;
  var $grid = external_jQuery_default()(grid);
  var $parent = external_jQuery_default()(parent);

  var resetHeight = function resetHeight() {
    var newHeight = $parent.outerHeight();
    $grid.css('height', newHeight);
  };

  var debouncedResetHeight = debounce(resetHeight, 30);
  resetHeight();

  if (typeof window.ResizeObserver !== "undefined") {
    var observer = new ResizeObserver(function (entries) {
      debouncedResetHeight();
    });
    observer.observe(parent);
  } else {
    external_jQuery_default()(window).on('resize', function () {
      debouncedResetHeight();
    });
  }
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(4);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/components/advanced-gallery/grid-item.js



var ITEM_SIZE = 20;
var grid_item_GridItemCollection = /*#__PURE__*/function () {
  function GridItemCollection(images, attributes) {
    classCallCheck_default()(this, GridItemCollection);

    var placementVariation = attributes.placementVariation / 25 - 1;
    this.gridItems = images.map(function (image, index) {
      var groupStart = Math.floor(index / 4) * 4;
      var groupEnd = Math.min(groupStart + 4, images.length);
      var isGroupOfThree = groupEnd - groupStart === 3;
      return new grid_item_GridItem(image, index, attributes, isGroupOfThree);
    });
    this.removeExtra();

    if (placementVariation === 1 || placementVariation === 2) {
      this.flipX();
    }

    if (placementVariation === 2 || placementVariation === 3) {
      this.flipY();
    }
  }

  createClass_default()(GridItemCollection, [{
    key: "removeExtra",
    value: function removeExtra() {
      var extraLeft = this.getExtraLeft();
      var extraTop = this.getExtraTop();
      var extraBetween = this.getExtraBetween();
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        var groupIndex = Math.floor(index / 4);
        gridItem.x = gridItem.x - extraLeft;
        gridItem.y = gridItem.y - extraTop - groupIndex * extraBetween;
        return gridItem;
      });
    }
  }, {
    key: "flipX",
    value: function flipX() {
      var maxX = Math.max.apply(Math, toConsumableArray_default()(this.gridItems.map(function (gridItem) {
        return gridItem.x + gridItem.width;
      })));
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        gridItem.x = maxX - gridItem.x - gridItem.width + 1;
        return gridItem;
      });
    }
  }, {
    key: "flipY",
    value: function flipY() {
      var maxY = Math.max.apply(Math, toConsumableArray_default()(this.gridItems.map(function (gridItem) {
        return gridItem.y + gridItem.height;
      })));
      this.gridItems = this.gridItems.map(function (gridItem, index) {
        gridItem.y = maxY - gridItem.y - gridItem.height + 1;
        return gridItem;
      });
    }
  }, {
    key: "getExtraLeft",
    value: function getExtraLeft() {
      return Math.min.apply(Math, toConsumableArray_default()(this.gridItems.map(function (gridItem) {
        return gridItem.x;
      }))) - 1;
    }
  }, {
    key: "getExtraTop",
    value: function getExtraTop() {
      return Math.min.apply(Math, toConsumableArray_default()(this.gridItems.map(function (gridItem) {
        return gridItem.y;
      }))) - 1;
    }
  }, {
    key: "getExtraBetween",
    value: function getExtraBetween() {
      var firstGroup = this.gridItems.slice(0, 4);
      var maxBottom = Math.max.apply(Math, toConsumableArray_default()(firstGroup.map(function (gridItem) {
        return gridItem.y + gridItem.height;
      })));
      return ITEM_SIZE * 2 - maxBottom + 1;
    }
  }]);

  return GridItemCollection;
}();

var grid_item_GridItem = /*#__PURE__*/function () {
  function GridItem(image, index, attributes, isGroupOfThree) {
    classCallCheck_default()(this, GridItem);

    this.sizeContrast = attributes.sizeContrast / 20;
    this.positionShift = attributes.positionShift / 5;
    this.objectPosition = attributes.objectPosition;
    this.imageResizing = attributes.imageResizing;
    this.imageRotation = attributes.imageRotation;
    this.image = image;
    this.index = index;
    this.idx = this.getIndex(index);
    this.col = this.idx % 2;
    this.row = Math.floor(index / 2);

    if (!!isGroupOfThree) {
      if (index === 0) {
        this.positionShift = Math.min(this.positionShift, 10);
      }

      if (index === 2) {
        this.positionShift = Math.max(this.positionShift, 10);
      }
    }

    var _this$getOffsets = this.getOffsets(),
        offsetX = _this$getOffsets.offsetX,
        offsetY = _this$getOffsets.offsetY;

    var size = ITEM_SIZE - this.sizeContrast * (index % 4);
    this.x = ITEM_SIZE * this.col + 1 + offsetX;
    this.y = ITEM_SIZE * this.row + 1 + offsetY;
    this.width = size;
    this.height = size;
  }

  createClass_default()(GridItem, [{
    key: "getOffsets",
    value: function getOffsets() {
      var row = this.row,
          col = this.col,
          index = this.index,
          sizeContrast = this.sizeContrast,
          positionShift = this.positionShift; // offset for positioning

      var offsetX = (1 - col % 2) * (index % 4) * sizeContrast;
      var offsetY = (1 - row % 2) * (index % 4) * sizeContrast; // offset from offset
      // move 1st to right

      offsetX += (1 - col % 2) * (1 - row % 2) * positionShift; // move 3rd to left

      offsetX -= col % 2 * (row % 2) * positionShift; // move 2nd down

      offsetY -= (1 - col % 2) * (row % 2) * positionShift; // move 4th up

      offsetY += col % 2 * (1 - row % 2) * positionShift;
      return {
        offsetX: offsetX,
        offsetY: offsetY
      };
    } // reoder to display items clockwise

  }, {
    key: "getIndex",
    value: function getIndex(index) {
      if (index % 4 === 3) return index - 1;
      if (index % 4 === 2) return index + 1;
      return index;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var index = this.index,
          x = this.x,
          y = this.y,
          width = this.width,
          height = this.height,
          imageRotation = this.imageRotation;
      var rotation = "rotate(".concat((index % 2 - 0.5) * imageRotation / 10, "deg)");
      return {
        gridColumnStart: x + '',
        gridColumnEnd: "span ".concat(width),
        gridRowStart: y + '',
        gridRowEnd: "span ".concat(height),
        transform: rotation
      };
    }
  }, {
    key: "getImageStyle",
    value: function getImageStyle() {
      var row = this.row,
          col = this.col,
          objectPosition = this.objectPosition,
          imageResizing = this.imageResizing;
      var positionY = row % 2 === 0 ? 100 - objectPosition : objectPosition;
      var positionX = col % 2 === 0 ? 100 - objectPosition : objectPosition;
      return {
        objectFit: imageResizing === 'cropped' ? 'cover' : 'scale-down',
        objectPosition: "".concat(positionX, "% ").concat(positionY, "%")
      };
    }
  }]);

  return GridItem;
}();


// CONCATENATED MODULE: ./src/blocks/media/frontend.js



(function ($, window, undefined) {
  $('.novablocks-advanced-gallery').each(function (i, gallery) {
    var $gallery = $(gallery),
        $grid = $gallery.find('.novablocks-advanced-gallery__grid'),
        images = $gallery.find('.novablocks-advanced-gallery__image').toArray();
    var attributes = {
      imageResizing: $gallery.data('imageresizing'),
      containerHeight: $gallery.data('containerheight'),
      positionShift: $gallery.data('positionshift'),
      sizeContrast: $gallery.data('sizecontrast'),
      imageRotation: $gallery.data('imagerotation'),
      placementVariation: $gallery.data('placementvariation'),
      elementsDistance: $gallery.data('elementsdistance'),
      verticalSpacing: $gallery.data('verticalspacing'),
      objectPosition: $gallery.data('objectposition')
    };
    var gridItemsCollection = new grid_item_GridItemCollection(images, attributes);
    gridItemsCollection.gridItems.map(function (gridItem, index) {
      var $image = $(gridItem.image),
          $item = $image.closest('.novablocks-advanced-gallery__grid-item');
      $item.css(gridItem.getStyle());
      $image.css(gridItem.getImageStyle());
    });
    var galleryStyle = getGalleryStyle(attributes);

    for (var propertyName in galleryStyle) {
      $gallery.css(galleryStyle);

      if (propertyName.indexOf('--') === 0) {
        gallery.style.setProperty(propertyName, galleryStyle[propertyName]);
      }
    }

    if ($grid.length) {
      var gridStyle = getGridStyle(attributes);
      $grid.css(gridStyle);

      for (var _propertyName in gridStyle) {
        if (_propertyName.indexOf('--') === 0) {
          $grid.get(0).style.setProperty(_propertyName, gridStyle[_propertyName]);
        }
      }
    }
  });
})(jQuery, window);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(11);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/components/grid-generator/utils.js

var utils_getGridStyle = function getGridStyle(attributes) {
  var _getGridColumnsAndRow = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow.gridcolumns,
      gridrows = _getGridColumnsAndRow.gridrows;

  return {
    display: 'grid',
    gridTemplateColumns: "repeat( ".concat(gridcolumns, ", 1fr )"),
    gridTemplateRows: "repeat( ".concat(gridrows, ", auto )")
  };
}; // Sums optimal posts count value from each area

var getPostsCount = function getPostsCount(areaColumns) {
  return areaColumns.reduce(function (total, areaColumn) {
    return total + areaColumn.areas.reduce(function (columnTotal, area) {
      return columnTotal + area.postsCount;
    }, 0);
  }, 0);
};
var redistributeCardsInAreas = function redistributeCardsInAreas(areaColumns, cardsCount, attributes) {
  var totalSpots = getPostsCount(areaColumns);
  var totalPosts = cardsCount;
  var remainingPosts = totalPosts;
  var totalRatio = 0;

  for (var i = 0; i < areaColumns.length; i++) {
    var areaColumn = areaColumns[i];
    var areaColumnSpotRatio = 0;

    for (var j = 0; j < areaColumn.areas.length; j++) {
      var area = areaColumn.areas[j]; // we shouldn't fill the area with the featured card

      area.spotRatio = getCardRatio(area, attributes);
      areaColumnSpotRatio += area.spotRatio;
      totalRatio += area.spotRatio;
    }

    areaColumn.spotRatio = areaColumnSpotRatio;
  }

  var extraPosts = totalPosts - totalSpots;

  if (totalSpots === totalPosts) {
    return;
  }

  for (var _i = 0; _i < areaColumns.length; _i++) {
    var _areaColumn = areaColumns[_i];
    var areas = _areaColumn.areas;

    for (var _j = 0; _j < areas.length; _j++) {
      var _area = areas[_j];
      var areaExtraPosts = Math.round(extraPosts * _area.spotRatio / totalRatio);
      _area.postsCount = Math.max(0, _area.postsCount + areaExtraPosts);
      totalRatio -= _area.spotRatio;
      extraPosts -= areaExtraPosts;
      if (remainingPosts <= 0) return;
    }
  }
};
var getOptimalHeaderPosition = function getOptimalHeaderPosition(areaColumns) {
  var index = 1;
  var positions = [0];

  for (var columnIndex = 0; columnIndex < areaColumns.length; columnIndex++) {
    var areaColumn = areaColumns[columnIndex];
    var areas = areaColumn.areas,
        row = areaColumn.row;

    for (var areaIndex = 0; areaIndex < areas.length; areaIndex++) {
      var area = areas[areaIndex];

      if (row === 1 && areaIndex === 0) {
        positions.push(index);
      }

      index += area.postsCount;
    }
  }

  return positions;
};

var getCardRatio = function getCardRatio(area, attributes) {
  var _getGridColumnsAndRow2 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow2.gridcolumns;

  var width = area.width,
      height = area.height,
      postsCount = area.postsCount;
  var ratio = postsCount / height; // when the card is landscape and very small
  // we hide the content so the ratio should be bigger

  if (isLandscape(area, attributes)) {
    ratio *= 2;
  }

  ratio *= gridcolumns / width;
  return ratio;
};

var isLandscape = function isLandscape(area, attributes) {
  var _getGridColumnsAndRow3 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow3.gridcolumns,
      gridrows = _getGridColumnsAndRow3.gridrows;

  var nth = area.nth,
      width = area.width,
      height = area.height,
      initialPostsCount = area.initialPostsCount;
  var isLandscape = width * initialPostsCount / height > 1.33;

  if (width / gridcolumns >= 0.5) {
    return isLandscape || attributes.subfeature && nth === 2;
  }

  return isLandscape;
};
var utils_getParametricLayoutAreaClassName = function getParametricLayoutAreaClassName(area, attributes) {
  var _getGridColumnsAndRow4 = getGridColumnsAndRows(attributes),
      gridcolumns = _getGridColumnsAndRow4.gridcolumns,
      gridrows = _getGridColumnsAndRow4.gridrows;

  var width = area.width,
      height = area.height;
  return classnames_default()([utils_getAreaBaseClassname(area), utils_getAreaClassnameByWidthRatio(width / gridcolumns), utils_getAreaClassnameByHeightRatio(height / gridrows), utils_getAreaClassnameByAspectRatio(area, attributes)]);
};
var utils_getAreaBaseClassname = function getAreaBaseClassname(area) {
  var nth = area.nth;
  return classnames_default()(['novablocks-grid__area', "novablocks-grid__area--nth-".concat(nth)]);
};
var utils_getAreaClassnameByAspectRatio = function getAreaClassnameByAspectRatio(area, attributes) {
  return classnames_default()([{
    'novablocks-grid__area--portrait': !isLandscape(area, attributes),
    'novablocks-grid__area--landscape': isLandscape(area, attributes)
  }]);
};
var utils_getAreaClassnameByWidthRatio = function getAreaClassnameByWidthRatio(widthRatio) {
  return classnames_default()([{
    'novablocks-grid__area--width-xs': widthRatio < 0.3,
    'novablocks-grid__area--width-s': 0.3 <= widthRatio && widthRatio < 0.5,
    'novablocks-grid__area--width-m': 0.5 <= widthRatio && widthRatio < 0.66,
    'novablocks-grid__area--width-l': 0.66 <= widthRatio && widthRatio < 0.80,
    'novablocks-grid__area--width-xl': 0.80 <= widthRatio && widthRatio < 0.95,
    'novablocks-grid__area--width-full': 0.95 <= widthRatio
  }]);
};
var utils_getAreaClassnameByHeightRatio = function getAreaClassnameByHeightRatio(heightRatio) {
  return classnames_default()([{
    'novablocks-grid__area--height-xs': heightRatio < 0.34,
    'novablocks-grid__area--height-s': 0.34 <= heightRatio && heightRatio < 0.5,
    'novablocks-grid__area--height-m': 0.5 <= heightRatio && heightRatio < 0.66,
    'novablocks-grid__area--height-l': 0.66 <= heightRatio && heightRatio < 0.80,
    'novablocks-grid__area--height-xl': 0.80 <= heightRatio
  }]);
};
var getGridColumnsAndRows = function getGridColumnsAndRows(attributes) {
  return {
    gridcolumns: !attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows,
    gridrows: !attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns
  };
};
var transposeMatrix = function transposeMatrix(source) {
  return Object.keys(source[0]).map(function (column) {
    return source.map(function (row) {
      return row[column];
    });
  });
};
// CONCATENATED MODULE: ./src/components/grid-generator/layoutEngine.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // This is the main workhorse containing the logic of our layout "engine".
// Given a state, it will return a list of posts with details to handle their layout.

var layoutEngine_applyLayoutEngine = function applyLayoutEngine(state) {
  var debug = false; // Before we can get to generating the "grid areas" for each post (meaning start col and row plus end col and ro),
  // we need to do a couple of preliminary calculations.
  // To hold the data, we will work with matrices, uni or bidimensional, representing the actual columns and rows.
  // This way we gain an easier understanding of what is going on at each step of the logic.
  // In each matrix we will ignore index 0 since it is easier to start from 1,
  // the same way CSS grid columns and rows behave.
  // The order of these operation is important!

  debug ? console.log("\nGenerating a new layout...\n\n") : false; // The "null" character:

  var emptyChar = "X"; // These are the matrices we are going to calculate:
  // The nth matrix: a bidimensional matrix the same size as the grid, holding in each cell what nth post should that cell belong to.
  // From this matrix we can extrapolate many details since the same nth value will be used to fill all the cells belonging to a post.
  // So we know the position and dimensions.

  var nthMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // The image weight matrix

  var imageWeightMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // The meta-details matrix

  var metaDetailsMatrix = initBidimensionalMatrix([], state.gridcolumns, state.gridrows, emptyChar); // Helper matrices.
  // The columns width matrix

  var widthMatrix = initUnidimensionalMatrix([], state.gridcolumns, emptyChar); // The vertical fragment size matrix

  var verticalFragmentSizeMatrix = initUnidimensionalMatrix([], state.gridcolumns, emptyChar);
  var i, j; // Lets start PRELIMINARY CALCULATIONS!

  /*
  1. Calculate the columns width matrix.
     We will take into account the feature position, feature size and fragmentation value.
     The fragmentation value is interpreted in it's bit format, where 1 means a "cut".
     The fragmentation value represents the fragmentation of the remaining gridcolumns after the feature size was deducted.
   */

  var widthIdx = 1; // First, mark the feature.

  for (i = state.featureposition; i < state.featureposition + state.featuresize; i++) {
    widthMatrix[i] = widthIdx;
  } // Next, go from left to right in the columns width matrix, and fill each columns with the same unique number,
  // Taking into account the fragmentation.
  // And remember the positions we are int the virtual matrix without the feature.


  var frgIdx = 0;
  widthIdx++;

  for (i = 1; i <= state.gridcolumns; i++) {
    if (widthMatrix[i] === emptyChar) {
      frgIdx++; // If the previous position has a different number than the current one, it is clear we should increment and write.

      if (widthMatrix[i - 1] !== widthIdx) {
        widthIdx++;
      } else {
        // If the previous position has the same value as the current one, we need to determine
        // if the fragmentation bit pattern imposes a "cut".
        var cutMarker = 1 << state.gridcolumns - state.featuresize - frgIdx; // If there is a 1 at this position, make a cut aka increase the number.

        if ((cutMarker & state.fragmentation) === cutMarker) {
          widthIdx++;
        }
      }

      widthMatrix[i] = widthIdx;
    }
  }

  debug ? console.log("The width matrix: ".padEnd(45, ' ') + widthMatrix) : false;
  /*
  2. Calculate the image weight matrix.
     We will spread the image weight range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
    */

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var end = i;

    while (widthMatrix[end + 1] === widthMatrix[i]) {
      end++;
    } // Now calculate.


    if (i === 1) {
      imageWeightMatrix[1][i] = state.imageweightleft;
    } else if (end === state.gridcolumns) {
      imageWeightMatrix[1][i] = state.imageweightright;
    } else {
      imageWeightMatrix[1][i] = Math.round(state.imageweightleft - (state.imageweightleft - state.imageweightright) * (i + end - 1) / (2 * state.gridcolumns));
    } // Fill the entire column with the same meta-details value.


    for (j = i; j <= end; j++) {
      imageWeightMatrix[1][j] = imageWeightMatrix[1][i];
    }

    i = end;
  } // Copy the first row to all of the rest.


  for (i = 2; i <= state.gridrows; i++) {
    imageWeightMatrix[i] = imageWeightMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log("The image weight matrix: ".padEnd(45, ' ') + imageWeightMatrix[1]) : false;
  /*
  3. Calculate the meta-details matrix.
     We will spread the meta-details range left-to-right. Each column will consume the range according to its width.
     Even it is a bidimensional matrix, for now we will only generate one row and copy it.
   */

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var _end = i;

    while (widthMatrix[_end + 1] === widthMatrix[i]) {
      _end++;
    } // Now calculate.


    if (i === 1) {
      metaDetailsMatrix[1][i] = state.metadetailsleft;
    } else if (_end === state.gridcolumns) {
      metaDetailsMatrix[1][i] = state.metadetailsright;
    } else {
      metaDetailsMatrix[1][i] = state.metadetailsleft - (state.metadetailsleft - state.metadetailsright) * (i + _end - 1) / (2 * state.gridcolumns); // If we are instructed to balance MD with IW, we will multiply the MD value with the "distance" of the IW value from the "center" of the IW range.

      if (state.balancemdandiw && 0 !== state.imageweightleft - state.imageweightright) {
        metaDetailsMatrix[1][i] = metaDetailsMatrix[1][i] * (Math.abs(state.imageweightleft - state.imageweightright) / 2 / imageWeightMatrix[1][i]);
      }

      metaDetailsMatrix[1][i] = Math.round(metaDetailsMatrix[1][i]);
    } // Fill the entire column with the same meta-details value.


    for (j = i; j <= _end; j++) {
      metaDetailsMatrix[1][j] = metaDetailsMatrix[1][i];
    }

    i = _end;
  } // Copy the first row to all of the rest.


  for (i = 2; i <= state.gridrows; i++) {
    metaDetailsMatrix[i] = metaDetailsMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
  }

  debug ? console.log("The meta-details matrix: ".padEnd(45, ' ') + metaDetailsMatrix[1]) : false;
  /*
  4. Handle the boost feature emphasis.
     We will assign the maximum meta-details and image weight value to the feature, and assign its current value to the column holding the maximum values.
  */

  if (state.boostfeature && state.featuresize > 0) {
    // Find column with maximum meta-details value, if the feature isn't already at the max.
    var maxMetaDetailsPos = 1,
        maxImageWeightPos = 1;

    for (i = 1; i <= state.gridcolumns; i++) {
      if (metaDetailsMatrix[1][i] > metaDetailsMatrix[1][maxMetaDetailsPos]) {
        maxMetaDetailsPos = i;
      }

      if (imageWeightMatrix[1][i] > imageWeightMatrix[1][maxImageWeightPos]) {
        maxImageWeightPos = i;
      }
    }

    if (maxMetaDetailsPos !== state.featureposition) {
      // We have something to switch.
      var featureValue = metaDetailsMatrix[1][state.featureposition];
      var maxValue = metaDetailsMatrix[1][maxMetaDetailsPos]; // Go and fill each column with the switched values.

      i = maxMetaDetailsPos;

      while (widthMatrix[i] === widthMatrix[maxMetaDetailsPos]) {
        metaDetailsMatrix[1][i] = featureValue;
        i++;
      }

      i = state.featureposition;

      while (widthMatrix[i] === widthMatrix[state.featureposition]) {
        metaDetailsMatrix[1][i] = maxValue;
        i++;
      } // Copy the first row to all of the rest.


      for (i = 2; i <= state.gridrows; i++) {
        metaDetailsMatrix[i] = metaDetailsMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log("The boosted feature meta-details matrix: ".padEnd(45, ' ') + metaDetailsMatrix[1]) : false;
    }

    if (maxImageWeightPos !== state.featureposition) {
      // We have something to switch.
      var _featureValue = imageWeightMatrix[1][state.featureposition];
      var _maxValue = imageWeightMatrix[1][maxImageWeightPos]; // Go and fill each column with the switched values.

      i = maxImageWeightPos;

      while (widthMatrix[i] === widthMatrix[maxImageWeightPos]) {
        imageWeightMatrix[1][i] = _featureValue;
        i++;
      }

      i = state.featureposition;

      while (widthMatrix[i] === widthMatrix[state.featureposition]) {
        imageWeightMatrix[1][i] = _maxValue;
        i++;
      } // Copy the first row to all of the rest.


      for (i = 2; i <= state.gridrows; i++) {
        imageWeightMatrix[i] = imageWeightMatrix[1].slice(); // .slice() creates a copy of the array, not reference.
      }

      debug ? console.log("The boosted feature image weight matrix: ".padEnd(45, ' ') + imageWeightMatrix[1]) : false;
    }
  }
  /*
  5. Determine the vertical fragment size matrix.
     The fragment size will range in the number of grid rows and 1.
  */
  // First determine the max meta-details and image weight value.


  var maxMetaDetailsValue = metaDetailsMatrix[1][1],
      maxImageWeightValue = imageWeightMatrix[1][1];

  for (i = 1; i <= state.gridcolumns; i++) {
    if (metaDetailsMatrix[1][i] > maxMetaDetailsValue) {
      maxMetaDetailsValue = metaDetailsMatrix[1][i];
    }

    if (imageWeightMatrix[1][i] > maxImageWeightValue) {
      maxImageWeightValue = imageWeightMatrix[1][i];
    }
  } // For the purpose of these calculations, maxMetaDetailsValue and maxImageWeightValue can't be zero.


  if (maxImageWeightValue < 1) {
    maxImageWeightValue = 1;
  }

  if (maxMetaDetailsValue < 1) {
    maxMetaDetailsValue = 1;
  }

  for (i = 1; i <= state.gridcolumns; i++) {
    // Determine the other end of the current column.
    var _end2 = i;

    while (widthMatrix[_end2 + 1] === widthMatrix[i]) {
      _end2++;
    } // Now calculate.


    verticalFragmentSizeMatrix[i] = Math.round((metaDetailsMatrix[1][i] / maxMetaDetailsValue + imageWeightMatrix[1][i] / maxImageWeightValue) / 2 * state.gridrows); // The vertical fragment size can't be more than 3 times the column width (a really tall post).

    if (verticalFragmentSizeMatrix[i] > (_end2 - i + 1) * 3) {
      verticalFragmentSizeMatrix[i] = (_end2 - i + 1) * 3;
    } // Also the vertical fragment size can't be less than 1.


    if (verticalFragmentSizeMatrix[i] < 1) {
      verticalFragmentSizeMatrix[i] = 1;
    } // If the sub feature option is active, and we have a single column for the feature, reduce the vertical fragmentation with 25%.


    if (state.subfeature && i === state.featureposition && state.featuresize > 0 && verticalFragmentSizeMatrix[i] === state.gridrows) {
      verticalFragmentSizeMatrix[i] = Math.floor(verticalFragmentSizeMatrix[i] * 0.75);
    } // Safety measures.


    if (verticalFragmentSizeMatrix[i] < 1) {
      verticalFragmentSizeMatrix[i] = 1;
    } else if (verticalFragmentSizeMatrix[i] > state.gridrows) {
      verticalFragmentSizeMatrix[i] = state.gridrows;
    } // Fill the entire column with the same fragment size.


    for (j = i; j <= _end2; j++) {
      verticalFragmentSizeMatrix[j] = verticalFragmentSizeMatrix[i];
    }

    i = _end2;
  }

  debug ? console.log("The vertical fragment size matrix: ".padEnd(45, ' ') + verticalFragmentSizeMatrix) : false;
  /*
  6. Determine the nth bidimensional matrix.
     Each grid cell will be filled with the nth post that cell belongs to. From this matrix we can determine the post grid coordinates,
     its aspect ratio, area, etc.
  */
  // We start with the first post in the list.

  var currentNth = 1; // Start with the feature column.

  if (state.featuresize > 0) {
    i = 1;

    while (i <= verticalFragmentSizeMatrix[state.featureposition]) {
      j = state.featureposition;

      do {
        nthMatrix[i][j] = currentNth;
        j++;
      } while (widthMatrix[state.featureposition] === widthMatrix[j]);

      i++;
    }

    currentNth++;

    if (i <= state.gridrows) {
      // We have room under the feature for a secondary feature post.
      // We will reduce the meta-details and image weight by 33% that of the main feature post.
      while (i <= state.gridrows) {
        j = state.featureposition;

        do {
          nthMatrix[i][j] = currentNth; // Adjust the meta-details and image weight.

          metaDetailsMatrix[i][j] = Math.round(metaDetailsMatrix[i][j] * 0.66);
          imageWeightMatrix[i][j] = Math.round(imageWeightMatrix[i][j] * 0.66);
          j++;
        } while (widthMatrix[state.featureposition] === widthMatrix[j]);

        i++;
      }

      currentNth++;
    }
  } // Now start from the left top corner and go through each column, left to right.


  var currentColumnStartCol = 1;
  var currentPostStartRow;

  while (currentColumnStartCol <= state.gridcolumns) {
    if (nthMatrix[1][currentColumnStartCol] !== emptyChar) {
      currentColumnStartCol++;
      continue;
    } // Fill the current column with posts.


    currentPostStartRow = 1;

    while (currentPostStartRow <= state.gridrows) {
      i = currentPostStartRow;

      while (i <= currentPostStartRow + verticalFragmentSizeMatrix[currentColumnStartCol] - 1 && i <= state.gridrows) {
        j = currentColumnStartCol;

        do {
          nthMatrix[i][j] = currentNth;
          j++;
        } while (widthMatrix[currentColumnStartCol] === widthMatrix[j]);

        i++;
      }

      currentNth++;
      currentPostStartRow = i;
    }
  }

  if (debug) {
    console.log("\nThe nth matrix: ".padEnd(42, ' ') + '0 - ' + nthMatrix[0].join(' '));

    for (i = 1; i < nthMatrix.length; i++) {
      console.log(' '.padEnd(41, ' ') + i + ' - ' + nthMatrix[i].join(' '));
    }
  }
  /*
  7. Handle the hierarchy crossing.
     We will not cross into the feature post. We will only cross left to right, only "over" a post with a lower nth count.
     We will only cross if the left post matches in height a post or more on the right.
     The rate of consumption is related to the nth, area, IW and MD of the post being expanded and the post(s) being replaced.
     Also, crossing at the top of the layout is more expensive than crossing at a lower row.
  */
  // We start with the first post in the list.


  var maxNth = currentNth;
  var hierachyCrossingStrenth = state.hierarchycrossing;
  currentNth = 1;

  while (hierachyCrossingStrenth > 0 && currentNth <= maxNth) {
    var currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (false === currentPostDetails) {
      currentNth++;
      continue;
    } // If the current post is all the way to the right edge, stop.


    if (currentPostDetails.endGridColumn === state.gridcolumns) {
      break;
    } // Now identify its right-side neighbors.


    var topNeighborPostDetails = getNthPostDetails(nthMatrix[currentPostDetails.startGridRow][currentPostDetails.endGridColumn + 1], nthMatrix, metaDetailsMatrix, imageWeightMatrix);
    var bottomNeighborPostDetails = getNthPostDetails(nthMatrix[currentPostDetails.endGridRow][currentPostDetails.endGridColumn + 1], nthMatrix, metaDetailsMatrix, imageWeightMatrix); // If the neighbors don't match the height in rows of the current post, skip this post from crossing.

    if (topNeighborPostDetails.startGridRow !== currentPostDetails.startGridRow || bottomNeighborPostDetails.endGridRow !== currentPostDetails.endGridRow) {
      currentNth++;
      continue;
    } // Calculate the score of the to-be replaced post(s).
    // Each post's score correlated to its nth value. The lower the nth value the bigger the score boost.


    var replacedPostScore = maxNth / topNeighborPostDetails.nth * (topNeighborPostDetails.area + topNeighborPostDetails.imageWeight + topNeighborPostDetails.metaDetails);

    if (bottomNeighborPostDetails.nth !== topNeighborPostDetails.nth) {
      var counter = 1;

      for (i = topNeighborPostDetails.nth + 1; i <= bottomNeighborPostDetails.nth; i++) {
        var postDetails = getNthPostDetails(i, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

        if (false === postDetails) {
          continue;
        }

        counter++; // It is increasingly "harder" to replace multiple posts.

        replacedPostScore += maxNth / postDetails.nth * (postDetails.area + postDetails.imageWeight + postDetails.metaDetails * counter) * counter;
      }
    } // If the to-be replaced post(s) score is larger than the remaining hierarchy crossing strength, nothing to do.


    if (hierachyCrossingStrenth < replacedPostScore) {
      currentNth++;
      continue;
    }

    var currentPostScore = maxNth / currentPostDetails.nth * (currentPostDetails.area + currentPostDetails.imageWeight + currentPostDetails.metaDetails) * Math.pow(2 * hierachyCrossingStrenth / 50, 3); // If the current post score is bigger than the to-be replaced post(s) score, it's a go.

    if (currentPostScore > replacedPostScore) {
      // Expand the current post over the replaced ones.
      for (i = topNeighborPostDetails.startGridRow; i <= bottomNeighborPostDetails.endGridRow; i++) {
        for (j = topNeighborPostDetails.startGridColumn; j <= topNeighborPostDetails.endGridColumn; j++) {
          nthMatrix[i][j] = currentNth; // Also replace the image weight and meta-details.

          imageWeightMatrix[i][j] = currentPostDetails.imageWeight;
          metaDetailsMatrix[i][j] = currentPostDetails.metaDetails;
        }
      } // Decrease the crossing strength.


      hierachyCrossingStrenth -= replacedPostScore; // We now have a gap in the post list. We need to renumber the posts after the replaced ones and adjust the maxnth.
      // The image weight and meta-details remain unchanged.
      // Work with the new maxNth.

      maxNth = renumberNthMatrix(nthMatrix);
    }

    currentNth++;
  } // Transpose all matrices if flipcolssrows attribute is set to true


  var finalNthMatrix = !state.flipcolsrows ? nthMatrix : transposeMatrix(nthMatrix);
  var finalMetaMatrix = !state.flipcolsrows ? metaDetailsMatrix : transposeMatrix(metaDetailsMatrix);
  var finalImageMatrix = !state.flipcolsrows ? imageWeightMatrix : transposeMatrix(imageWeightMatrix);
  /*
  8. Finally, generate the posts list.
  */

  var areaColumns = getGroupedPostAreas(state, finalNthMatrix, finalMetaMatrix, finalImageMatrix);
  ;
  moveLargestColumnToStart(areaColumns);
  return areaColumns;
};

var moveLargestColumnToStart = function moveLargestColumnToStart(areaColumns) {
  var firstRowColumns = areaColumns.filter(function (column) {
    return column.row === 1;
  }).sort(function (col1, col2) {
    return col2.width - col1.width;
  });
  var largestColumnIndex = areaColumns.findIndex(function (column) {
    return column === firstRowColumns[0];
  });
  areaColumns.splice(0, 0, areaColumns.splice(largestColumnIndex, 1)[0]);
  return areaColumns;
};

var logMatrix = function logMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    console.log(' '.padEnd(41, ' ') + i + ' - ' + matrix[i].join(' '));
  }
};

function getGroupedPostAreas(state, nthMatrix, metaDetailsMatrix, imageWeightMatrix) {
  var areasArray = getAreasArray(nthMatrix, metaDetailsMatrix, imageWeightMatrix);
  mergeSimilarAreas(nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state);
  areasArray = normalizeAreas(nthMatrix, areasArray);
  areasArray = areasArray.map(function (area) {
    return _objectSpread({
      initialPostsCount: area.postsCount
    }, area);
  });
  var columns = areasArray.map(function (area) {
    return {
      row: area.row,
      col: area.col,
      width: area.width,
      height: area.height,
      areas: [area]
    };
  }); // loop through columns

  columns.forEach(function (currentColumn) {
    // loop through "current" column's areas
    currentColumn.areas.forEach(function (currentArea, i) {
      // loop again through columns except the current column
      columns.filter(function (column) {
        return column !== currentColumn;
      }).forEach(function (compareColumn) {
        // loop through the "compare" column's areas
        compareColumn.areas.forEach(function (compareArea, j) {
          // check if the areas have the same column and the same width
          if (!compareArea.merged && currentArea.col === compareArea.col && currentArea.width === compareArea.width && ( // and if the two areas are continuous
          currentArea.row + currentArea.height === compareArea.row || currentArea.row === compareArea.row + compareArea.height)) {
            // if so, move the compared area to the current column's areas array and update the column height
            compareArea.merged = true;
            currentColumn.areas.push(compareArea);
            compareColumn.height += compareArea.height;
            compareColumn.areas.splice(j, 1);
          }
        });
      });
    });
  });
  return columns.filter(function (randomColumn) {
    return randomColumn.areas.length > 0;
  });
}

function getNthValues(nthMatrix) {
  var values = [];
  var value;

  for (var i = 1; i < nthMatrix.length - 1; i++) {
    for (var j = 1; j < nthMatrix[i].length - 1; j++) {
      value = nthMatrix[i][j];

      if (values.indexOf(value) === -1) {
        values.push(value);
      }
    }
  }

  return values;
}

function normalizeAreas(nthMatrix, areasArray) {
  var values = getNthValues(nthMatrix);
  values.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < values.length; i++) {
    if (i + 1 !== values[i]) {
      replaceNth(values[i], i + 1, nthMatrix);
    }
  }

  return values.map(function (nth, index) {
    var area = areasArray.find(function (area) {
      return area.nth === nth;
    });
    area.nth = index + 1;
    return area;
  });
}

function replaceNth(nth1, nth2, nthMatrix) {
  for (var i = 1; i < nthMatrix.length - 1; i++) {
    for (var j = 1; j < nthMatrix[i].length - 1; j++) {
      if (nthMatrix[i][j] === nth1) {
        nthMatrix[i][j] = nth2;
      }
    }
  }
}

var mergeSimilarAreas = function mergeSimilarAreas(nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state) {
  var currentPostDetails;

  for (var currentNth = 1; currentNth <= getMaxNth(nthMatrix); currentNth++) {
    currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (currentPostDetails) {
      mergeAreaNeighbours(currentPostDetails.startGridRow, currentPostDetails.startGridColumn, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state);
    }
  }
};

var mergeAreaNeighbours = function mergeAreaNeighbours(row, col, nthMatrix, metaDetailsMatrix, imageWeightMatrix, areasArray, state) {
  var nth = nthMatrix[row][col];
  var width = getAreaWidth(nth, nthMatrix);
  var height = getAreaHeight(nth, nthMatrix);
  var initialWidth = width;
  var initialHeight = height;
  var currentAreaIndex = -1;

  if (Array.isArray(areasArray)) {
    currentAreaIndex = areasArray.findIndex(function (area) {
      return area.nth === nthMatrix[row][col];
    });
  } // Featured area should not be merged


  if (nth === 1) {
    return;
  }

  var nextRow,
      nextCol,
      nextWidth,
      nextHeight,
      nextNth,
      nextNthStart,
      searching = true,
      mergeable = false;

  while (searching) {
    nextNth = nthMatrix[row + height][col];
    nextNthStart = getFirstOccurence(nextNth, nthMatrix);
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;
    nextWidth = getAreaWidth(nextNth, nthMatrix);
    nextHeight = getAreaHeight(nextNth, nthMatrix);

    if (width === nextWidth && col === nextCol && Math.abs(initialHeight - nextHeight) <= 1 && Math.abs(metaDetailsMatrix[row][col] - metaDetailsMatrix[nextRow][col]) <= 1 && Math.abs(imageWeightMatrix[row][col] - imageWeightMatrix[nextRow][col]) <= 1) {
      height = height + nextHeight;
      mergeable = true;

      if (currentAreaIndex > -1) {
        areasArray[currentAreaIndex].postsCount += 1;
        areasArray[currentAreaIndex].height = height;
      }
    } else {
      searching = false;
    }
  }

  searching = !mergeable;

  while (searching && !state.flipcolsrows) {
    nextNth = nthMatrix[row][col + width];
    nextNthStart = getFirstOccurence(nextNth, nthMatrix);
    nextRow = nextNthStart.row;
    nextCol = nextNthStart.col;
    nextWidth = getAreaWidth(nextNth, nthMatrix);
    nextHeight = getAreaHeight(nextNth, nthMatrix);

    if (height === nextHeight && row === nextRow && Math.abs(initialWidth - nextWidth) <= 1 && Math.abs(metaDetailsMatrix[row][col] - metaDetailsMatrix[row][nextCol]) <= 1 && Math.abs(imageWeightMatrix[row][col] - imageWeightMatrix[row][nextCol]) <= 1) {
      width = width + nextWidth;
      mergeable = true;

      if (currentAreaIndex > -1) {
        areasArray[currentAreaIndex].postsCount += 1;
        areasArray[currentAreaIndex].width = width;
      }
    } else {
      searching = false;
    }
  }

  fillArea(nthMatrix, row, col, width, height);
};

var fillArea = function fillArea(nthMatrix, row, col, width, height) {
  for (var i = row; i < row + height; i++) {
    for (var j = col; j < col + width; j++) {
      nthMatrix[i][j] = nthMatrix[row][col];
    }
  }
};

var getFirstOccurence = function getFirstOccurence(nth, nthMatrix) {
  for (var i = 0; i < nthMatrix.length; i++) {
    for (var j = 0; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] === nth) {
        return {
          row: i,
          col: j
        };
      }
    }
  }

  return {};
};

var getAreaWidth = function getAreaWidth(nth, nthMatrix) {
  var _getFirstOccurence = getFirstOccurence(nth, nthMatrix),
      row = _getFirstOccurence.row,
      col = _getFirstOccurence.col;

  var width = 1;

  while (nth === nthMatrix[row][col + width]) {
    width = width + 1;
  }

  return width;
};

var getAreaHeight = function getAreaHeight(nth, nthMatrix) {
  var _getFirstOccurence2 = getFirstOccurence(nth, nthMatrix),
      row = _getFirstOccurence2.row,
      col = _getFirstOccurence2.col;

  var height = 1;

  while ("undefined" !== typeof nthMatrix[row + height] && nth === nthMatrix[row + height][col]) {
    height = height + 1;
  }

  return height;
};

var renumberNthMatrix = function renumberNthMatrix(nthMatrix) {
  var newNth = 1;
  var postDetails;

  for (var nth = 1; nth <= getMaxNth(nthMatrix); nth++) {
    // If we can't find a nth post, it means it was removed and we need to adjust.
    postDetails = getNthPostDetails(nth, nthMatrix);

    if (false === postDetails) {
      continue;
    }

    if (postDetails.nth > newNth) {
      // Change the current post's nth.
      for (var i = postDetails.startGridRow; i <= postDetails.endGridRow; i++) {
        for (var j = postDetails.startGridColumn; j <= postDetails.endGridColumn; j++) {
          nthMatrix[i][j] = newNth;
        }
      }
    }

    newNth++;
  } // Return the maxNth.


  return newNth - 1;
};

var getMaxNth = function getMaxNth(nthMatrix) {
  var maxNth = 0;

  for (var i = 1; i < nthMatrix.length; i++) {
    for (var j = 1; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] > maxNth) {
        maxNth = nthMatrix[i][j];
      }
    }
  }

  return maxNth;
};

var getAreasArray = function getAreasArray(nthMatrix, metaDetailsMatrix, imageWeightMatrix) {
  var currentPostDetails;
  var areasArray = [];

  for (var currentNth = 1; currentNth <= getMaxNth(nthMatrix); currentNth++) {
    currentPostDetails = getNthPostDetails(currentNth, nthMatrix, metaDetailsMatrix, imageWeightMatrix);

    if (currentPostDetails) {
      areasArray.push({
        nth: currentPostDetails.nth,
        col: currentPostDetails.startGridColumn,
        row: currentPostDetails.startGridRow,
        width: currentPostDetails.endGridColumn - currentPostDetails.startGridColumn + 1,
        height: currentPostDetails.endGridRow - currentPostDetails.startGridRow + 1,
        metaDetails: currentPostDetails.metaDetails,
        imageWeight: currentPostDetails.imageWeight,
        postsCount: 1
      });
    }
  }

  return areasArray;
};

var getNthPostDetails = function getNthPostDetails(nth, nthMatrix) {
  var metaDetailsMatrix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var imageWeightMatrix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var postDetails = false; // Go through the nthMatrix and search for the currentNth value.

  for (var i = 1; i < nthMatrix.length; i++) {
    for (var j = 1; j < nthMatrix[i].length; j++) {
      if (nthMatrix[i][j] === nth) {
        // Found the left top corner.
        postDetails = {
          'nth': nth,
          'startGridColumn': j,
          'startGridRow': i,
          'endGridColumn': j,
          'endGridRow': i,
          'metaDetails': metaDetailsMatrix ? metaDetailsMatrix[i][j] : false,
          'imageWeight': imageWeightMatrix ? imageWeightMatrix[i][j] : false,
          'area': 1
        }; // Find the right bottom corner.

        while (j < nthMatrix[i].length && nthMatrix[i][j] === nthMatrix[i][j + 1]) {
          j++;
        }

        postDetails.endGridColumn = j;

        while (i < nthMatrix.length && nthMatrix[i][j] === nthMatrix[i + 1][j]) {
          i++;
        }

        postDetails.endGridRow = i; // Calculate the area.

        postDetails.area = (postDetails.endGridRow - postDetails.startGridRow + 1) * (postDetails.endGridColumn - postDetails.startGridColumn + 1);
        return postDetails;
      }
    }
  }

  return postDetails;
};

var initUnidimensionalMatrix = function initUnidimensionalMatrix(matrix, length) {
  var character = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "X";
  // The 0 index will be filled with a different character for easier logic.
  matrix.push("/"); // Go to equal the length, since the 0 index will be ignored.
  // Fill with "null" entries with the provided character.

  for (var i = 1; i <= length; i++) {
    matrix.push(character);
  } // Put an extra entry for easier logic.


  matrix.push("/");
  return matrix;
};

var initBidimensionalMatrix = function initBidimensionalMatrix(matrix, width, height, nullChar) {
  // Put in a guard row, at index 0.
  matrix.push(initUnidimensionalMatrix([], width, "/")); // Go to equal the width, since the 0 index will be ignored.

  for (var i = 0; i < height; i++) {
    matrix.push(initUnidimensionalMatrix([], width, nullChar));
  } // Put in an extra guard row.


  matrix.push(initUnidimensionalMatrix([], width, "/"));
  return matrix;
};
// CONCATENATED MODULE: ./src/blocks/posts-collection/frontend.js






(function ($, window, undefined) {
  var defaultBlockWidth = 1162; // magic

  $('.novablocks-grid').each(function (i, block) {
    var $grid = $(block);
    var $block = $grid.closest('.novablocks-block');
    var $cards = $grid.closest('.novablocks-collection__cards');
    var $posts = $grid.children('.novablocks-card');
    var attributes = $grid.data();
    var cardsCount = $posts.length;
    var $title = $block.find('.novablocks-collection__title').detach();
    var $subtitle = $block.find('.novablocks-collection__subtitle').detach();
    var addedCards;

    if (attributes.layoutstyle !== 'parametric') {
      $grid.removeClass('novablocks-grid');
      $grid.addClass('novablocks-collection__layout spanac');
      $grid.addClass(utils_getAreaClassnameByWidthRatio(1 / attributes.columns));
      return;
    }

    block.style.setProperty('--card-media-padding', attributes.imagepadding);
    block.style.setProperty('--card-media-padding-top', getCardMediaPaddingTop(attributes.containerheight));
    block.style.setProperty('--card-media-object-fit', attributes.imageresizing === 'cropped' ? 'cover' : 'scale-down');

    function createLayout() {
      var gridcolumns = attributes.gridcolumns;
      var blockWidth = $grid.outerWidth();
      $posts.detach();
      $grid.empty();
      addedCards = 0;
      var areaColumns = layoutEngine_applyLayoutEngine(attributes);
      var columnsCount = areaColumns.length;
      var firstSet = Math.floor((columnsCount - 1) / 2);
      var secondSet = columnsCount - 1 - firstSet;

      if (below('desktop')) {
        for (var _i = 0; _i < firstSet; _i++) {
          gridcolumns -= removeSmallestColumn(areaColumns);
        }

        if (below('lap')) {
          for (var _i2 = 0; _i2 < secondSet; _i2++) {
            gridcolumns -= removeSmallestColumn(areaColumns);
          }
        }
      }

      redistributeCardsInAreas(areaColumns, cardsCount, attributes);
      $grid.css(utils_getGridStyle(Object.assign({}, attributes, {
        gridcolumns: gridcolumns
      })));
      $('.js-collection-element-clone').remove();

      if (below('desktop') || attributes.headerposition === 0) {
        $title.clone().addClass('js-collection-element-clone').insertBefore($cards);
        $subtitle.clone().addClass('js-collection-element-clone').insertBefore($cards);
      }

      for (var _i3 = 0; _i3 < areaColumns.length; _i3++) {
        var areaColumn = areaColumns[_i3];
        var areas = areaColumn.areas,
            row = areaColumn.row,
            col = areaColumn.col,
            width = areaColumn.width,
            height = areaColumn.height;
        var $column = $('<div class="novablocks-grid__column">');
        $column.css('grid-area', "".concat(row, " / ").concat(col, " / span ").concat(height, " / span ").concat(width));
        $column.attr('data-area', "".concat(row, " / ").concat(col, " / span ").concat(height, " / span ").concat(width));

        var _loop = function _loop(j) {
          var area = areas[j];
          var blockWidthRatio = Math.min(1, blockWidth / defaultBlockWidth);
          var areaClassName = getAreaClassname(area, attributes, blockWidthRatio);
          addedCards += area.postsCount;
          var $area = $("<div class=\"".concat(areaClassName, "\">"));
          Array.from(Array(area.postsCount).keys()).map(function (i) {
            var $gridItem = $('<div class="novablocks-grid__item">');
            var $card = $posts.eq(addedCards - area.postsCount + i);
            var landscape = isLandscape(area, attributes);
            $card.toggleClass('novablocks-card--landscape', !!landscape);
            $card.toggleClass('novablocks-card--portrait', !landscape);
            $card.appendTo($gridItem);

            if (!below('desktop') && attributes.headerposition === addedCards - area.postsCount + i + 1) {
              var $header = $('<div class="novablocks-grid__item js-collection-element-clone">');
              $title.clone().appendTo($header);
              $subtitle.clone().appendTo($header);
              $header.appendTo($area);
            }

            $gridItem.appendTo($area);
          });
          $area.appendTo($column);
        };

        for (var j = 0; j < areas.length; j++) {
          _loop(j);
        }

        $column.appendTo($grid);
      }
    }

    createLayout();

    function recreateLayout() {
      $grid.contents().replaceWith($posts);
      $grid.css({
        display: '',
        gridTemplateColumns: '',
        gridTemplateRowss: ''
      });
      $posts.removeClass('novablocks-card--portrait');
      $posts.removeClass('novablocks-card--landscape');
      createLayout();
    }

    var onResize = debounce(recreateLayout, 100);
    $(window).on('resize', onResize);
  });

  function getAreaClassname(area, attributes) {
    var widthRatioMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var width = area.width,
        height = area.height;

    var _getGridColumnsAndRow = getGridColumnsAndRows(attributes),
        gridcolumns = _getGridColumnsAndRow.gridcolumns,
        gridrows = _getGridColumnsAndRow.gridrows;

    return classnames_default()([utils_getAreaBaseClassname(area), utils_getAreaClassnameByWidthRatio(widthRatioMultiplier * width / gridcolumns), utils_getAreaClassnameByHeightRatio(height / gridrows), utils_getAreaClassnameByAspectRatio(area, attributes)]);
  }

  function removeSmallestColumn(areaColumns) {
    var data = areaColumns.map(function (area, index) {
      return {
        area: area,
        index: index
      };
    });
    data.sort(function (obj1, obj2) {
      return obj1.area.width - obj2.area.width;
    });
    var indexToRemove = data[0].index;

    if (data[0].area.nth === 1) {
      indexToRemove = data[data.length].index;
    }

    var colToRemove = areaColumns[indexToRemove].col;
    var widthToRemove = areaColumns[indexToRemove].width;
    areaColumns.splice(indexToRemove, 1); //		for ( let i = 0; i < areaColumns.length; i++ ) {
    //			if ( areaColumns[i].col > colToRemove ) {
    //				areaColumns[i].col -= widthToRemove;
    //			}
    //		}

    return widthToRemove;
  }
})(jQuery, window);
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
    //    text = text.replace(/([0-9]+)\s*[^0-9]\s*([0-9]{2})([^0-9]+?)([0-9]+)\s*[^0-9]\s*([0-9]{2})/g, '$1$2$3$4$5');
    // if only the start time has a separator

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
// CONCATENATED MODULE: ./src/components/advanced-gallery/frontend.js


(function ($, window, undefined) {
  $('.novablocks-advanced-gallery__grid').each(function (i, obj) {
    util_safariHeightFix(obj);
  });
})(jQuery, window);
// CONCATENATED MODULE: ./src/frontend.js










/***/ })
/******/ ]);
//# sourceMappingURL=frontend.js.map