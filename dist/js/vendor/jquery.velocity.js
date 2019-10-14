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
/******/ 	return __webpack_require__(__webpack_require__.s = 254);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(8);
var has = __webpack_require__(9);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(45);
var toPrimitive = __webpack_require__(38);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(32);
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(47);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(60)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function (iterated) {
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
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(62);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(29)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(37)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(51).appendChild(iframe);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
var global = __webpack_require__(1);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(61);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(50);
var ITERATOR = __webpack_require__(2)('iterator');
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(30);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(17);
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(63)(false);
var IE_PROTO = __webpack_require__(29)('IE_PROTO');

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(20);
var IE_PROTO = __webpack_require__(29)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 52 */
/***/ (function(module, exports) {



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(2)('toStringTag');
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
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(47);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(0);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var defined = __webpack_require__(28);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(64);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var call = __webpack_require__(91);
var isArrayIter = __webpack_require__(92);
var anObject = __webpack_require__(6);
var toLength = __webpack_require__(42);
var getIterFn = __webpack_require__(66);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(32);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(71);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(73);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(36);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(38);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(45);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(40);
module.exports = __webpack_require__(43).f('iterator');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83);
var step = __webpack_require__(72);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(52);
__webpack_require__(87);
__webpack_require__(88);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(46);
var META = __webpack_require__(55).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(33);
var setToStringTag = __webpack_require__(25);
var uid = __webpack_require__(22);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(86);
var isArray = __webpack_require__(74);
var anObject = __webpack_require__(6);
var isObject = __webpack_require__(7);
var toObject = __webpack_require__(20);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(38);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(75);
var $GOPD = __webpack_require__(76);
var $GOPS = __webpack_require__(49);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(21);
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
  __webpack_require__(36).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(17)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(36);
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('observable');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(6);
var aFunction = __webpack_require__(32);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var invoke = __webpack_require__(116);
var html = __webpack_require__(51);
var cel = __webpack_require__(37);
var global = __webpack_require__(1);
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
/* 95 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(67);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var dP = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(3);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(20);
var $getPrototypeOf = __webpack_require__(50);

__webpack_require__(59)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(112) });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(3);
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(36);
var toObject = __webpack_require__(20);
var IObject = __webpack_require__(48);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
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
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(34);
__webpack_require__(40);
__webpack_require__(115);
__webpack_require__(119);
__webpack_require__(120);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var global = __webpack_require__(1);
var ctx = __webpack_require__(18);
var classof = __webpack_require__(53);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(32);
var anInstance = __webpack_require__(90);
var forOf = __webpack_require__(65);
var speciesConstructor = __webpack_require__(93);
var task = __webpack_require__(94).set;
var microtask = __webpack_require__(117)();
var newPromiseCapabilityModule = __webpack_require__(67);
var perform = __webpack_require__(95);
var userAgent = __webpack_require__(118);
var promiseResolve = __webpack_require__(96);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(97)($Promise.prototype, {
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
__webpack_require__(25)($Promise, PROMISE);
__webpack_require__(103)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(98)(function (iter) {
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(94).set;
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(0);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(93);
var promiseResolve = __webpack_require__(96);

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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(67);
var perform = __webpack_require__(95);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
__webpack_require__(34);
module.exports = __webpack_require__(123);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var get = __webpack_require__(66);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(20);
var $keys = __webpack_require__(21);

__webpack_require__(59)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(5).f;
var create = __webpack_require__(39);
var redefineAll = __webpack_require__(97);
var ctx = __webpack_require__(18);
var anInstance = __webpack_require__(90);
var forOf = __webpack_require__(65);
var $iterDefine = __webpack_require__(41);
var step = __webpack_require__(72);
var setSpecies = __webpack_require__(103);
var DESCRIPTORS = __webpack_require__(3);
var fastKey = __webpack_require__(55).fastKey;
var validate = __webpack_require__(133);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var $export = __webpack_require__(4);
var meta = __webpack_require__(55);
var fails = __webpack_require__(11);
var hide = __webpack_require__(8);
var redefineAll = __webpack_require__(97);
var forOf = __webpack_require__(65);
var anInstance = __webpack_require__(90);
var isObject = __webpack_require__(7);
var setToStringTag = __webpack_require__(25);
var dP = __webpack_require__(5).f;
var each = __webpack_require__(261)(0);
var DESCRIPTORS = __webpack_require__(3);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(53);
var from = __webpack_require__(265);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(4);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(4);
var aFunction = __webpack_require__(32);
var ctx = __webpack_require__(18);
var forOf = __webpack_require__(65);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_own_property_names__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_own_property_names___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_own_property_names__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_create__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_set__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_freeze__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof__);















/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Version: 1.0.0
 *
 * http://velocityjs.org/
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof___default()(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && __webpack_require__(132) ? define(factory) : global.Velocity = factory();
})(this, function () {
	'use strict';

	var _typeof = typeof __WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol___default.a === "function" && __WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof___default()(__WEBPACK_IMPORTED_MODULE_12_babel_runtime_core_js_symbol_iterator___default.a) === "symbol" ? function (obj) {
		return typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof___default()(obj);
	} : function (obj) {
		return obj && typeof __WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol___default.a === "function" && obj.constructor === __WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol___default.a && obj !== __WEBPACK_IMPORTED_MODULE_13_babel_runtime_core_js_symbol___default.a.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_14_babel_runtime_helpers_typeof___default()(obj);
	};

	var classCallCheck = function classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};

	var createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property___default()(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var defineProperty = function defineProperty(obj, key, value) {
		if (key in obj) {
			__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property___default()(obj, key, {
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

	/**
  * Check if a variable is a boolean.
  */
	function isBoolean(variable) {
		return variable === true || variable === false;
	}
	/**
  * Check if a variable is a function.
  */
	function isFunction(variable) {
		return Object.prototype.toString.call(variable) === "[object Function]";
	}
	/**
  * Check if a variable is an HTMLElement or SVGElement.
  */
	function isNode(variable) {
		return !!(variable && variable.nodeType);
	}
	/**
  * Check if a variable is a number.
  */
	function isNumber(variable) {
		return typeof variable === "number";
	}
	/**
  * Check if a variable is a plain object (and not an instance).
  */
	function isPlainObject(variable) {
		if (!variable || (typeof variable === "undefined" ? "undefined" : _typeof(variable)) !== "object" || variable.nodeType || Object.prototype.toString.call(variable) !== "[object Object]") {
			return false;
		}
		var proto = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(variable);
		return !proto || proto.hasOwnProperty("constructor") && proto.constructor === Object;
	}
	/**
  * Check if a variable is a string.
  */
	function isString(variable) {
		return typeof variable === "string";
	}
	/**
  * Check if a variable is the result of calling Velocity.
  */
	function isVelocityResult(variable) {
		return variable && isNumber(variable.length) && isFunction(variable.velocity);
	}
	/**
  * Check if a variable is an array-like wrapped jQuery, Zepto or similar, where
  * each indexed value is a Node.
  */
	function isWrapped(variable) {
		return variable && variable !== window && isNumber(variable.length) && !isString(variable) && !isFunction(variable) && !isNode(variable) && (variable.length === 0 || isNode(variable[0]));
	}
	/**
  * Check is a property is an enumerable member of an object.
  */
	function propertyIsEnumerable(obj, property) {
		return Object.prototype.propertyIsEnumerable.call(obj, property);
	}

	// Project
	/**
  * Add a single className to an Element.
  */
	function addClass(element, className) {
		if (element instanceof Element) {
			if (element.classList) {
				element.classList.add(className);
			} else {
				removeClass(element, className);
				element.className += (element.className.length ? " " : "") + className;
			}
		}
	}
	/**
  * Clone an array, works for array-like too.
  */
	function cloneArray(arrayLike) {
		return Array.prototype.slice.call(arrayLike, 0);
	}
	/**
  * The <strong><code>defineProperty()</code></strong> function provides a
  * shortcut to defining a property that cannot be accidentally iterated across.
  */
	function defineProperty$1(proto, name, value, readonly) {
		if (proto) {
			__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property___default()(proto, name, {
				configurable: !readonly,
				writable: !readonly,
				value: value
			});
		}
	}
	/**
  * When there are multiple locations for a value pass them all in, then get the
  * first value that is valid.
  */
	function getValue() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(arguments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var arg = _step.value;

				if (arg !== undefined && arg === arg) {
					return arg;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	/**
  * Shim to get the current milliseconds - on anything except old IE it'll use
  * Date.now() and save creating an object. If that doesn't exist then it'll
  * create one that gets GC.
  */
	var now = Date.now ? Date.now : function () {
		return new Date().getTime();
	};
	/**
  * Remove a single className from an Element.
  */
	function removeClass(element, className) {
		if (element instanceof Element) {
			if (element.classList) {
				element.classList.remove(className);
			} else {
				// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
				element.className = element.className.replace(new RegExp("(^|\\s)" + className + "(\\s|$)", "gi"), " ");
			}
		}
	}

	// Project
	// Constants
	var Actions = {};
	/**
  * Used to register an action. This should never be called by users
  * directly, instead it should be called via  an action:<br/>
  * <code>Velocity("registerAction", "name", VelocityActionFn);</code>
  */
	function registerAction(args, internal) {
		var name = args[0],
		    callback = args[1];
		if (!isString(name)) {
			console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:", name);
		} else if (!isFunction(callback)) {
			console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:", name, callback);
		} else if (Actions[name] && !propertyIsEnumerable(Actions, name)) {
			console.warn("VelocityJS: Trying to override internal 'registerAction' callback", name);
		} else if (internal === true) {
			defineProperty$1(Actions, name, callback);
		} else {
			Actions[name] = callback;
		}
	}
	registerAction(["registerAction", registerAction], true);

	/**
  * Without this it will only un-prefix properties that have a valid "normal"
  * version.
  */
	var DURATION_FAST = 200;
	var DURATION_NORMAL = 400;
	var DURATION_SLOW = 600;
	var FUZZY_MS_PER_SECOND = 980;
	var DEFAULT_CACHE = true;
	var DEFAULT_DELAY = 0;
	var DEFAULT_DURATION = DURATION_NORMAL;
	var DEFAULT_EASING = "swing";
	var DEFAULT_FPSLIMIT = 60;
	var DEFAULT_LOOP = 0;
	var DEFAULT_PROMISE = true;
	var DEFAULT_PROMISE_REJECT_EMPTY = true;
	var DEFAULT_QUEUE = "";
	var DEFAULT_REPEAT = 0;
	var DEFAULT_SPEED = 1;
	var DEFAULT_SYNC = true;
	var CLASSNAME = "velocity-animating";
	var Duration = {
		fast: DURATION_FAST,
		normal: DURATION_NORMAL,
		slow: DURATION_SLOW
	};

	// Project
	// Constants
	var Easings = {};
	/**
  * Used to register a easing. This should never be called by users
  * directly, instead it should be called via an action:<br/>
  * <code>Velocity("registerEasing", "name", VelocityEasingFn);</code>
  */
	function registerEasing(args) {
		var name = args[0],
		    callback = args[1];
		if (!isString(name)) {
			console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:", name);
		} else if (!isFunction(callback)) {
			console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:", name, callback);
		} else if (Easings[name]) {
			console.warn("VelocityJS: Trying to override 'registerEasing' callback", name);
		} else {
			Easings[name] = callback;
		}
	}
	registerAction(["registerEasing", registerEasing], true);
	/**
  * Linear easing, used for sequence parts that don't have an actual easing
  * function.
  */
	function linearEasing(percentComplete, startValue, endValue, property) {
		return startValue + percentComplete * (endValue - startValue);
	}
	/**
  * Swing is the default for jQuery and Velocity.
  */
	function swingEasing(percentComplete, startValue, endValue) {
		return startValue + (0.5 - Math.cos(percentComplete * Math.PI) / 2) * (endValue - startValue);
	}
	/**
  * A less exaggerated version of easeInOutElastic.
  */
	function springEasing(percentComplete, startValue, endValue) {
		return startValue + (1 - Math.cos(percentComplete * 4.5 * Math.PI) * Math.exp(-percentComplete * 6)) * (endValue - startValue);
	}
	registerEasing(["linear", linearEasing]);
	registerEasing(["swing", swingEasing]);
	registerEasing(["spring", springEasing]);

	// Project
	/**
  * Fix to a range of <code>0 <= num <= 1</code>.
  */
	function fixRange(num) {
		return Math.min(Math.max(num, 0), 1);
	}
	function A(aA1, aA2) {
		return 1 - 3 * aA2 + 3 * aA1;
	}
	function B(aA1, aA2) {
		return 3 * aA2 - 6 * aA1;
	}
	function C(aA1) {
		return 3 * aA1;
	}
	function calcBezier(aT, aA1, aA2) {
		return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
	}
	function getSlope(aT, aA1, aA2) {
		return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
	}
	function generateBezier(mX1, mY1, mX2, mY2) {
		var NEWTON_ITERATIONS = 4,
		    NEWTON_MIN_SLOPE = 0.001,
		    SUBDIVISION_PRECISION = 0.0000001,
		    SUBDIVISION_MAX_ITERATIONS = 10,
		    kSplineTableSize = 11,
		    kSampleStepSize = 1 / (kSplineTableSize - 1),
		    float32ArraySupported = "Float32Array" in window;
		/* Must contain four arguments. */
		if (arguments.length !== 4) {
			return;
		}
		/* Arguments must be numbers. */
		for (var i = 0; i < 4; ++i) {
			if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
				return;
			}
		}
		/* X values must be in the [0, 1] range. */
		mX1 = fixRange(mX1);
		mX2 = fixRange(mX2);
		var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
		function newtonRaphsonIterate(aX, aGuessT) {
			for (var _i = 0; _i < NEWTON_ITERATIONS; ++_i) {
				var currentSlope = getSlope(aGuessT, mX1, mX2);
				if (currentSlope === 0) {
					return aGuessT;
				}
				var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
				aGuessT -= currentX / currentSlope;
			}
			return aGuessT;
		}
		function calcSampleValues() {
			for (var _i2 = 0; _i2 < kSplineTableSize; ++_i2) {
				mSampleValues[_i2] = calcBezier(_i2 * kSampleStepSize, mX1, mX2);
			}
		}
		function binarySubdivide(aX, aA, aB) {
			var currentX = void 0,
			    currentT = void 0,
			    i = 0;
			do {
				currentT = aA + (aB - aA) / 2;
				currentX = calcBezier(currentT, mX1, mX2) - aX;
				if (currentX > 0) {
					aB = currentT;
				} else {
					aA = currentT;
				}
			} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
			return currentT;
		}
		function getTForX(aX) {
			var lastSample = kSplineTableSize - 1;
			var intervalStart = 0,
			    currentSample = 1;
			for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
				intervalStart += kSampleStepSize;
			}
			--currentSample;
			var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
			    guessForT = intervalStart + dist * kSampleStepSize,
			    initialSlope = getSlope(guessForT, mX1, mX2);
			if (initialSlope >= NEWTON_MIN_SLOPE) {
				return newtonRaphsonIterate(aX, guessForT);
			} else if (initialSlope === 0) {
				return guessForT;
			} else {
				return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
			}
		}
		var precomputed = false;
		function precompute() {
			precomputed = true;
			if (mX1 !== mY1 || mX2 !== mY2) {
				calcSampleValues();
			}
		}
		var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")",
		    f = function f(percentComplete, startValue, endValue, property) {
			if (!precomputed) {
				precompute();
			}
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			if (mX1 === mY1 && mX2 === mY2) {
				return startValue + percentComplete * (endValue - startValue);
			}
			return startValue + calcBezier(getTForX(percentComplete), mY1, mY2) * (endValue - startValue);
		};
		f.getControlPoints = function () {
			return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
		};
		f.toString = function () {
			return str;
		};
		return f;
	}
	/* Common easings */
	var easeIn = generateBezier(0.42, 0, 1, 1),
	    easeOut = generateBezier(0, 0, 0.58, 1),
	    easeInOut = generateBezier(0.42, 0, 0.58, 1);
	registerEasing(["ease", generateBezier(0.25, 0.1, 0.25, 1)]);
	registerEasing(["easeIn", easeIn]);
	registerEasing(["ease-in", easeIn]);
	registerEasing(["easeOut", easeOut]);
	registerEasing(["ease-out", easeOut]);
	registerEasing(["easeInOut", easeInOut]);
	registerEasing(["ease-in-out", easeInOut]);
	registerEasing(["easeInSine", generateBezier(0.47, 0, 0.745, 0.715)]);
	registerEasing(["easeOutSine", generateBezier(0.39, 0.575, 0.565, 1)]);
	registerEasing(["easeInOutSine", generateBezier(0.445, 0.05, 0.55, 0.95)]);
	registerEasing(["easeInQuad", generateBezier(0.55, 0.085, 0.68, 0.53)]);
	registerEasing(["easeOutQuad", generateBezier(0.25, 0.46, 0.45, 0.94)]);
	registerEasing(["easeInOutQuad", generateBezier(0.455, 0.03, 0.515, 0.955)]);
	registerEasing(["easeInCubic", generateBezier(0.55, 0.055, 0.675, 0.19)]);
	registerEasing(["easeOutCubic", generateBezier(0.215, 0.61, 0.355, 1)]);
	registerEasing(["easeInOutCubic", generateBezier(0.645, 0.045, 0.355, 1)]);
	registerEasing(["easeInQuart", generateBezier(0.895, 0.03, 0.685, 0.22)]);
	registerEasing(["easeOutQuart", generateBezier(0.165, 0.84, 0.44, 1)]);
	registerEasing(["easeInOutQuart", generateBezier(0.77, 0, 0.175, 1)]);
	registerEasing(["easeInQuint", generateBezier(0.755, 0.05, 0.855, 0.06)]);
	registerEasing(["easeOutQuint", generateBezier(0.23, 1, 0.32, 1)]);
	registerEasing(["easeInOutQuint", generateBezier(0.86, 0, 0.07, 1)]);
	registerEasing(["easeInExpo", generateBezier(0.95, 0.05, 0.795, 0.035)]);
	registerEasing(["easeOutExpo", generateBezier(0.19, 1, 0.22, 1)]);
	registerEasing(["easeInOutExpo", generateBezier(1, 0, 0, 1)]);
	registerEasing(["easeInCirc", generateBezier(0.6, 0.04, 0.98, 0.335)]);
	registerEasing(["easeOutCirc", generateBezier(0.075, 0.82, 0.165, 1)]);
	registerEasing(["easeInOutCirc", generateBezier(0.785, 0.135, 0.15, 0.86)]);

	/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
   then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
	function springAccelerationForState(state) {
		return -state.tension * state.x - state.friction * state.v;
	}
	function springEvaluateStateWithDerivative(initialState, dt, derivative) {
		var state = {
			x: initialState.x + derivative.dx * dt,
			v: initialState.v + derivative.dv * dt,
			tension: initialState.tension,
			friction: initialState.friction
		};
		return {
			dx: state.v,
			dv: springAccelerationForState(state)
		};
	}
	function springIntegrateState(state, dt) {
		var a = {
			dx: state.v,
			dv: springAccelerationForState(state)
		},
		    b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
		    c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
		    d = springEvaluateStateWithDerivative(state, dt, c),
		    dxdt = 1 / 6 * (a.dx + 2 * (b.dx + c.dx) + d.dx),
		    dvdt = 1 / 6 * (a.dv + 2 * (b.dv + c.dv) + d.dv);
		state.x = state.x + dxdt * dt;
		state.v = state.v + dvdt * dt;
		return state;
	}
	function generateSpringRK4(tension, friction, duration) {
		var initState = {
			x: -1,
			v: 0,
			tension: parseFloat(tension) || 500,
			friction: parseFloat(friction) || 20
		},
		    path = [0],
		    tolerance = 1 / 10000,
		    DT = 16 / 1000,
		    haveDuration = duration != null; // deliberate "==", as undefined == null != 0
		var timeLapsed = 0,
		    dt = void 0,
		    lastState = void 0;
		/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
		if (haveDuration) {
			/* Run the simulation without a duration. */
			timeLapsed = generateSpringRK4(initState.tension, initState.friction);
			/* Compute the adjusted time delta. */
			dt = timeLapsed / duration * DT;
		} else {
			dt = DT;
		}
		while (true) {
			/* Next/step function .*/
			lastState = springIntegrateState(lastState || initState, dt);
			/* Store the position. */
			path.push(1 + lastState.x);
			timeLapsed += 16;
			/* If the change threshold is reached, break. */
			if (!(Math.abs(lastState.x) > tolerance && Math.abs(lastState.v) > tolerance)) {
				break;
			}
		}
		/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
       computed path and returns a snapshot of the position according to a given percentComplete. */
		return !haveDuration ? timeLapsed : function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return startValue + path[Math.floor(percentComplete * (path.length - 1))] * (endValue - startValue);
		};
	}

	// Constants
	var cache = {};
	function generateStep(steps) {
		var fn = cache[steps];
		if (fn) {
			return fn;
		}
		return cache[steps] = function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return startValue + Math.round(percentComplete * steps) * (1 / steps) * (endValue - startValue);
		};
	}

	// Project
	/**
  * Parse a duration value and return an ms number. Optionally return a
  * default value if the number is not valid.
  */
	function parseDuration(duration, def) {
		if (isNumber(duration)) {
			return duration;
		}
		if (isString(duration)) {
			return Duration[duration.toLowerCase()] || parseFloat(duration.replace("ms", "").replace("s", "000"));
		}
		return def == null ? undefined : parseDuration(def);
	}
	/**
  * Validate a <code>cache</code> option.
  */
	function validateCache(value) {
		if (isBoolean(value)) {
			return value;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'cache' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>begin</code> option.
  */
	function validateBegin(value) {
		if (isFunction(value)) {
			return value;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'begin' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>complete</code> option.
  */
	function validateComplete(value, noError) {
		if (isFunction(value)) {
			return value;
		}
		if (value != null && !noError) {
			console.warn("VelocityJS: Trying to set 'complete' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>delay</code> option.
  */
	function validateDelay(value) {
		var parsed = parseDuration(value);
		if (!isNaN(parsed)) {
			return parsed;
		}
		if (value != null) {
			console.error("VelocityJS: Trying to set 'delay' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>duration</code> option.
  */
	function validateDuration(value, noError) {
		var parsed = parseDuration(value);
		if (!isNaN(parsed) && parsed >= 0) {
			return parsed;
		}
		if (value != null && !noError) {
			console.error("VelocityJS: Trying to set 'duration' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>easing</code> option.
  */
	function validateEasing(value, duration, noError) {
		if (isString(value)) {
			// Named easing
			return Easings[value];
		}
		if (isFunction(value)) {
			return value;
		}
		// TODO: We should only do these if the correct function exists - don't force loading.
		if (Array.isArray(value)) {
			if (value.length === 1) {
				// Steps
				return generateStep(value[0]);
			}
			if (value.length === 2) {
				// springRK4 must be passed the animation's duration.
				// Note: If the springRK4 array contains non-numbers,
				// generateSpringRK4() returns an easing function generated with
				// default tension and friction values.
				return generateSpringRK4(value[0], value[1], duration);
			}
			if (value.length === 4) {
				// Note: If the bezier array contains non-numbers, generateBezier()
				// returns undefined.
				return generateBezier.apply(null, value) || false;
			}
		}
		if (value != null && !noError) {
			console.error("VelocityJS: Trying to set 'easing' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>fpsLimit</code> option.
  */
	function validateFpsLimit(value) {
		if (value === false) {
			return 0;
		} else {
			var parsed = parseInt(value, 10);
			if (!isNaN(parsed) && parsed >= 0) {
				return Math.min(parsed, 60);
			}
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>loop</code> option.
  */
	function validateLoop(value) {
		switch (value) {
			case false:
				return 0;
			case true:
				return true;
			default:
				var parsed = parseInt(value, 10);
				if (!isNaN(parsed) && parsed >= 0) {
					return parsed;
				}
				break;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'loop' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>progress</code> option.
  */
	function validateProgress(value) {
		if (isFunction(value)) {
			return value;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'progress' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>promise</code> option.
  */
	function validatePromise(value) {
		if (isBoolean(value)) {
			return value;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'promise' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>promiseRejectEmpty</code> option.
  */
	function validatePromiseRejectEmpty(value) {
		if (isBoolean(value)) {
			return value;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>queue</code> option.
  */
	function validateQueue(value, noError) {
		if (value === false || isString(value)) {
			return value;
		}
		if (value != null && !noError) {
			console.warn("VelocityJS: Trying to set 'queue' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>repeat</code> option.
  */
	function validateRepeat(value) {
		switch (value) {
			case false:
				return 0;
			case true:
				return true;
			default:
				var parsed = parseInt(value, 10);
				if (!isNaN(parsed) && parsed >= 0) {
					return parsed;
				}
				break;
		}
		if (value != null) {
			console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>speed</code> option.
  */
	function validateSpeed(value) {
		if (isNumber(value)) {
			return value;
		}
		if (value != null) {
			console.error("VelocityJS: Trying to set 'speed' to an invalid value:", value);
		}
	}
	/**
  * Validate a <code>sync</code> option.
  */
	function validateSync(value) {
		if (isBoolean(value)) {
			return value;
		}
		if (value != null) {
			console.error("VelocityJS: Trying to set 'sync' to an invalid value:", value);
		}
	}

	// Project
	// NOTE: Add the variable here, then add the default state in "reset" below.
	var cache$1 = void 0,
	    begin = void 0,
	    complete = void 0,
	    delay = void 0,
	    duration = void 0,
	    easing = void 0,
	    fpsLimit = void 0,
	    loop = void 0,
	    mobileHA = void 0,
	    minFrameTime = void 0,
	    promise = void 0,
	    promiseRejectEmpty = void 0,
	    queue = void 0,
	    repeat = void 0,
	    speed = void 0,
	    sync = void 0;
	var defaults$1 = function () {
		function defaults$$1() {
			classCallCheck(this, defaults$$1);
		}

		createClass(defaults$$1, null, [{
			key: "reset",
			value: function reset() {
				cache$1 = DEFAULT_CACHE;
				begin = undefined;
				complete = undefined;
				delay = DEFAULT_DELAY;
				duration = DEFAULT_DURATION;
				easing = validateEasing(DEFAULT_EASING, DEFAULT_DURATION);
				fpsLimit = DEFAULT_FPSLIMIT;
				loop = DEFAULT_LOOP;
				minFrameTime = FUZZY_MS_PER_SECOND / DEFAULT_FPSLIMIT;
				promise = DEFAULT_PROMISE;
				promiseRejectEmpty = DEFAULT_PROMISE_REJECT_EMPTY;
				queue = DEFAULT_QUEUE;
				repeat = DEFAULT_REPEAT;
				speed = DEFAULT_SPEED;
				sync = DEFAULT_SYNC;
			}
		}, {
			key: "cache",
			get: function get$$1() {
				return cache$1;
			},
			set: function set$$1(value) {
				value = validateCache(value);
				if (value !== undefined) {
					cache$1 = value;
				}
			}
		}, {
			key: "begin",
			get: function get$$1() {
				return begin;
			},
			set: function set$$1(value) {
				value = validateBegin(value);
				if (value !== undefined) {
					begin = value;
				}
			}
		}, {
			key: "complete",
			get: function get$$1() {
				return complete;
			},
			set: function set$$1(value) {
				value = validateComplete(value);
				if (value !== undefined) {
					complete = value;
				}
			}
		}, {
			key: "delay",
			get: function get$$1() {
				return delay;
			},
			set: function set$$1(value) {
				value = validateDelay(value);
				if (value !== undefined) {
					delay = value;
				}
			}
		}, {
			key: "duration",
			get: function get$$1() {
				return duration;
			},
			set: function set$$1(value) {
				value = validateDuration(value);
				if (value !== undefined) {
					duration = value;
				}
			}
		}, {
			key: "easing",
			get: function get$$1() {
				return easing;
			},
			set: function set$$1(value) {
				value = validateEasing(value, duration);
				if (value !== undefined) {
					easing = value;
				}
			}
		}, {
			key: "fpsLimit",
			get: function get$$1() {
				return fpsLimit;
			},
			set: function set$$1(value) {
				value = validateFpsLimit(value);
				if (value !== undefined) {
					fpsLimit = value;
					minFrameTime = FUZZY_MS_PER_SECOND / value;
				}
			}
		}, {
			key: "loop",
			get: function get$$1() {
				return loop;
			},
			set: function set$$1(value) {
				value = validateLoop(value);
				if (value !== undefined) {
					loop = value;
				}
			}
		}, {
			key: "mobileHA",
			get: function get$$1() {
				return mobileHA;
			},
			set: function set$$1(value) {
				if (isBoolean(value)) {
					mobileHA = value;
				}
			}
		}, {
			key: "minFrameTime",
			get: function get$$1() {
				return minFrameTime;
			}
		}, {
			key: "promise",
			get: function get$$1() {
				return promise;
			},
			set: function set$$1(value) {
				value = validatePromise(value);
				if (value !== undefined) {
					promise = value;
				}
			}
		}, {
			key: "promiseRejectEmpty",
			get: function get$$1() {
				return promiseRejectEmpty;
			},
			set: function set$$1(value) {
				value = validatePromiseRejectEmpty(value);
				if (value !== undefined) {
					promiseRejectEmpty = value;
				}
			}
		}, {
			key: "queue",
			get: function get$$1() {
				return queue;
			},
			set: function set$$1(value) {
				value = validateQueue(value);
				if (value !== undefined) {
					queue = value;
				}
			}
		}, {
			key: "repeat",
			get: function get$$1() {
				return repeat;
			},
			set: function set$$1(value) {
				value = validateRepeat(value);
				if (value !== undefined) {
					repeat = value;
				}
			}
		}, {
			key: "repeatAgain",
			get: function get$$1() {
				return repeat;
			}
		}, {
			key: "speed",
			get: function get$$1() {
				return speed;
			},
			set: function set$$1(value) {
				value = validateSpeed(value);
				if (value !== undefined) {
					speed = value;
				}
			}
		}, {
			key: "sync",
			get: function get$$1() {
				return sync;
			},
			set: function set$$1(value) {
				value = validateSync(value);
				if (value !== undefined) {
					sync = value;
				}
			}
		}]);
		return defaults$$1;
	}();
	__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_freeze___default()(defaults$1);
	// Reset to our default values, currently everything is undefined.
	defaults$1.reset();

	/**
  * The highest type index for finding the best normalization for a property.
  */
	/**
  * Unlike "actions", normalizations can always be replaced by users.
  */
	var Normalizations = [];
	/**
  * Store a cross-reference to units to be added to specific normalization
  * functions if the user supplies a unit-less number.
  *
  * This is pretty much confined to adding "px" to several css properties.
  */
	var NormalizationUnits = {};
	/**
  * Any normalisations that should never be cached are listed here.
  * Faster than an array - https://jsperf.com/array-includes-and-find-methods-vs-set-has
  */
	var NoCacheNormalizations = new __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_set___default.a();
	/**
  * An array of classes used for the per-class normalizations. This
  * translates into a bitwise enum for quick cross-reference, and so that
  * the element doesn't need multiple <code>instanceof</code> calls every
  * frame.
  */
	var constructors = [];
	/**
  * A cache of the various constructors we've found and mapping to their real
  * name - saves expensive lookups.
  */
	var constructorCache = new __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map___default.a();

	// Project
	// Constants
	var dataName = "velocityData";
	/**
  * Get (and create) the internal data store for an element.
  */
	function Data(element) {
		// Use a string member so Uglify doesn't mangle it.
		var data = element[dataName];
		if (data) {
			return data;
		}
		var window = element.ownerDocument.defaultView;
		var types = 0;
		for (var index = 0; index < constructors.length; index++) {
			var _constructor = constructors[index];
			if (isString(_constructor)) {
				if (element instanceof window[_constructor]) {
					types |= 1 << index; // tslint:disable-line:no-bitwise
				}
			} else if (element instanceof _constructor) {
				types |= 1 << index; // tslint:disable-line:no-bitwise
			}
		}
		// Use an intermediate object so it errors on incorrect data.
		var newData = {
			types: types,
			count: 0,
			computedStyle: null,
			cache: {},
			queueList: {},
			lastAnimationList: {},
			lastFinishList: {},
			window: window
		};
		__WEBPACK_IMPORTED_MODULE_11_babel_runtime_core_js_object_define_property___default()(element, dataName, {
			value: newData
		});
		return newData;
	}

	// Constants
	var isClient = window && window === window.window,
	    windowScrollAnchor = isClient && window.pageYOffset !== undefined;
	var State = {
		isClient: isClient,
		isMobile: isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isGingerbread: isClient && /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
		prefixElement: isClient && document.createElement("div"),
		windowScrollAnchor: windowScrollAnchor,
		scrollAnchor: windowScrollAnchor ? window : !isClient || document.documentElement || document.body.parentNode || document.body,
		scrollPropertyLeft: windowScrollAnchor ? "pageXOffset" : "scrollLeft",
		scrollPropertyTop: windowScrollAnchor ? "pageYOffset" : "scrollTop",
		className: CLASSNAME,
		isTicking: false,
		first: undefined,
		last: undefined,
		firstNew: undefined
	};

	// Project
	/**
  * Simple queue management. Un-named queue is directly within the element data,
  * named queue is within an object within it.
  */
	function animate(animation) {
		var prev = State.last;
		animation._prev = prev;
		animation._next = undefined;
		if (prev) {
			prev._next = animation;
		} else {
			State.first = animation;
		}
		State.last = animation;
		if (!State.firstNew) {
			State.firstNew = animation;
		}
		var element = animation.element,
		    data = Data(element);
		if (!data.count++) {
			////////////////////////
			// Feature: Classname //
			////////////////////////
			addClass(element, State.className);
		}
	}
	/**
  * Add an item to an animation queue.
  */
	function queue$1(element, animation, queueName) {
		var data = Data(element);
		if (queueName !== false) {
			// Store the last animation added so we can use it for the
			// beginning of the next one.
			data.lastAnimationList[queueName] = animation;
		}
		if (queueName === false) {
			animate(animation);
		} else {
			if (!isString(queueName)) {
				queueName = "";
			}
			var last = data.queueList[queueName];
			if (!last) {
				if (last === null) {
					data.queueList[queueName] = animation;
				} else {
					data.queueList[queueName] = null;
					animate(animation);
				}
			} else {
				while (last._next) {
					last = last._next;
				}
				last._next = animation;
				animation._prev = last;
			}
		}
	}
	/**
  * Start the next animation on this element's queue (named or default).
  *
  * @returns the next animation that is starting.
  */
	function dequeue(element, queueName, skip) {
		if (queueName !== false) {
			if (!isString(queueName)) {
				queueName = "";
			}
			var data = Data(element),
			    animation = data.queueList[queueName];
			if (animation) {
				data.queueList[queueName] = animation._next || null;
				if (!skip) {
					animate(animation);
				}
			} else if (animation === null) {
				delete data.queueList[queueName];
			}
			return animation;
		}
	}
	/**
  * Remove an animation from the active animation list. If it has a queue set
  * then remember it as the last animation for that queue, and free the one
  * that was previously there. If the animation list is completely empty then
  * mark us as finished.
  */
	function freeAnimationCall(animation) {
		var next = animation._next,
		    prev = animation._prev,
		    queueName = animation.queue == null ? animation.options.queue : animation.queue;
		if (State.firstNew === animation) {
			State.firstNew = next;
		}
		if (State.first === animation) {
			State.first = next;
		} else if (prev) {
			prev._next = next;
		}
		if (State.last === animation) {
			State.last = prev;
		} else if (next) {
			next._prev = prev;
		}
		if (queueName) {
			var data = Data(animation.element);
			if (data) {
				animation._next = animation._prev = undefined;
			}
		}
	}

	var SequencesObject = {};

	// Project
	/**
  * Call the complete method of an animation in a separate function so it can
  * benefit from JIT compiling while still having a try/catch block.
  */
	function callComplete(activeCall) {
		var callback = activeCall.complete || activeCall.options.complete;
		if (callback) {
			try {
				var elements = activeCall.elements;
				callback.call(elements, elements, activeCall);
			} catch (error) {
				setTimeout(function () {
					throw error;
				}, 1);
			}
		}
	}
	/**
  * Complete an animation. This might involve restarting (for loop or repeat
  * options). Once it is finished we also check for any callbacks or Promises
  * that need updating.
  */
	function completeCall(activeCall) {
		// TODO: Check if it's not been completed already
		var options = activeCall.options,
		    queue = getValue(activeCall.queue, options.queue),
		    isLoop = getValue(activeCall.loop, options.loop, defaults$1.loop),
		    isRepeat = getValue(activeCall.repeat, options.repeat, defaults$1.repeat),
		    isStopped = activeCall._flags & 8 /* STOPPED */; // tslint:disable-line:no-bitwise
		if (!isStopped && (isLoop || isRepeat)) {
			////////////////////
			// Option: Loop   //
			// Option: Repeat //
			////////////////////
			if (isRepeat && isRepeat !== true) {
				activeCall.repeat = isRepeat - 1;
			} else if (isLoop && isLoop !== true) {
				activeCall.loop = isLoop - 1;
				activeCall.repeat = getValue(activeCall.repeatAgain, options.repeatAgain, defaults$1.repeatAgain);
			}
			if (isLoop) {
				activeCall._flags ^= 64 /* REVERSE */; // tslint:disable-line:no-bitwise
			}
			if (queue !== false) {
				// Can't be called when stopped so no need for an extra check.
				Data(activeCall.element).lastFinishList[queue] = activeCall.timeStart + getValue(activeCall.duration, options.duration, defaults$1.duration);
			}
			activeCall.timeStart = activeCall.ellapsedTime = activeCall.percentComplete = 0;
			activeCall._flags &= ~4 /* STARTED */; // tslint:disable-line:no-bitwise
		} else {
			var element = activeCall.element,
			    data = Data(element);
			if (! --data.count && !isStopped) {
				////////////////////////
				// Feature: Classname //
				////////////////////////
				removeClass(element, State.className);
			}
			//////////////////////
			// Option: Complete //
			//////////////////////
			// If this is the last animation in this list then we can check for
			// and complete calls or Promises.
			// TODO: When deleting an element we need to adjust these values.
			if (options && ++options._completed === options._total) {
				if (!isStopped && options.complete) {
					// We don't call the complete if the animation is stopped,
					// and we clear the key to prevent it being called again.
					callComplete(activeCall);
					options.complete = null;
				}
				var resolver = options._resolver;
				if (resolver) {
					// Fulfil the Promise
					resolver(activeCall.elements);
					delete options._resolver;
				}
			}
			///////////////////
			// Option: Queue //
			///////////////////
			if (queue !== false) {
				// We only do clever things with queues...
				if (!isStopped) {
					// If we're not stopping an animation, we need to remember
					// what time it finished so that the next animation in
					// sequence gets the correct start time.
					data.lastFinishList[queue] = activeCall.timeStart + getValue(activeCall.duration, options.duration, defaults$1.duration);
				}
				// Start the next animation in sequence, or delete the queue if
				// this was the last one.
				dequeue(element, queue);
			}
			// Cleanup any pointers, and remember the last animation etc.
			freeAnimationCall(activeCall);
		}
	}

	// Project
	/**
  * Used to register a normalization. This should never be called by users
  * directly, instead it should be called via an action:<br/>
  * <code>Velocity("registerNormalization", "Element", "name", VelocityNormalizationsFn[, false]);</code>
  *
  * The second argument is the class of the animatable object. If this is passed
  * as a class name (ie, `"Element"` -> `window["Element"]`) then this will work
  * cross-iframe. If passed as an actual class (ie `Element`) then it will
  * attempt to find the class on the window and use that name instead. If it
  * can't find it then it will use the class passed, which allows for custom
  * animation targets, but will not work cross-iframe boundary.
  *
  * The fourth argument can be an explicit <code>false</code>, which prevents
  * the property from being cached. Please note that this can be dangerous
  * for performance!
  */
	function registerNormalization(args) {
		var constructor = args[0],
		    name = args[1],
		    callback = args[2];
		if (isString(constructor) && !(window[constructor] instanceof Object) || !isString(constructor) && !(constructor instanceof Object)) {
			console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:", constructor);
		} else if (!isString(name)) {
			console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:", name);
		} else if (!isFunction(callback)) {
			console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:", name, callback);
		} else {
			var index = constructors.indexOf(constructor),
			    nextArg = 3;
			if (index < 0 && !isString(constructor)) {
				if (constructorCache.has(constructor)) {
					index = constructors.indexOf(constructorCache.get(constructor));
				} else {
					for (var property in window) {
						if (window[property] === constructor) {
							index = constructors.indexOf(property);
							if (index < 0) {
								index = constructors.push(property) - 1;
								Normalizations[index] = {};
								constructorCache.set(constructor, property);
							}
							break;
						}
					}
				}
			}
			if (index < 0) {
				index = constructors.push(constructor) - 1;
				Normalizations[index] = {};
			}
			Normalizations[index][name] = callback;
			if (isString(args[nextArg])) {
				var unit = args[nextArg++];
				var units = NormalizationUnits[unit];
				if (!units) {
					units = NormalizationUnits[unit] = [];
				}
				units.push(callback);
			}
			if (args[nextArg] === false) {
				NoCacheNormalizations.add(name);
			}
		}
	}
	/**
  * Used to check if a normalisation exists on a specific class.
  */
	function hasNormalization(args) {
		var constructor = args[0],
		    name = args[1];
		var index = constructors.indexOf(constructor);
		if (index < 0 && !isString(constructor)) {
			if (constructorCache.has(constructor)) {
				index = constructors.indexOf(constructorCache.get(constructor));
			} else {
				for (var property in window) {
					if (window[property] === constructor) {
						index = constructors.indexOf(property);
						break;
					}
				}
			}
		}
		return index >= 0 && Normalizations[index].hasOwnProperty(name);
	}
	/**
  * Get the unit to add to a unitless number based on the normalization used.
  */
	function getNormalizationUnit(fn) {
		for (var unit in NormalizationUnits) {
			if (NormalizationUnits[unit].includes(fn)) {
				return unit;
			}
		}
		return "";
	}
	/**
  * Get the normalization for an element and propertyName combination. This
  * value should be cached at asking time, as it may change if the user adds
  * more normalizations.
  */
	function getNormalization(element, propertyName) {
		var data = Data(element);
		var fn = void 0;
		for (var index = constructors.length - 1, types = data.types; !fn && index >= 0; index--) {
			if (types & 1 << index) {
				// tslint:disable-line:no-bitwise
				fn = Normalizations[index][propertyName];
			}
		}
		return fn;
	}
	registerAction(["registerNormalization", registerNormalization]);
	registerAction(["hasNormalization", hasNormalization]);

	// Project
	/**
  * The singular setPropertyValue, which routes the logic for all
  * normalizations.
  */
	function setPropertyValue(element, propertyName, propertyValue, fn) {
		var noCache = NoCacheNormalizations.has(propertyName),
		    data = !noCache && Data(element);
		if (noCache || data && data.cache[propertyName] !== propertyValue) {
			// By setting it to undefined we force a true "get" later
			if (!noCache) {
				data.cache[propertyName] = propertyValue || undefined;
			}
			fn = fn || getNormalization(element, propertyName);
			if (fn) {
				fn(element, propertyValue);
			}
			if (Velocity$$1.debug >= 2) {
				console.info("Set \"" + propertyName + "\": \"" + propertyValue + "\"", element);
			}
		}
	}

	/**
  * Remove nested `calc(0px + *)` or `calc(* + (0px + *))` correctly.
  */
	function removeNestedCalc(value) {
		if (value.indexOf("calc(") >= 0) {
			var tokens = value.split(/([\(\)])/);
			var depth = 0;
			for (var i = 0; i < tokens.length; i++) {
				var token = tokens[i];
				switch (token) {
					case "(":
						depth++;
						break;
					case ")":
						depth--;
						break;
					default:
						if (depth && token[0] === "0") {
							tokens[i] = token.replace(/^0[a-z%]+ \+ /, "");
						}
						break;
				}
			}
			return tokens.join("").replace(/(?:calc)?\(([0-9\.]+[a-z%]+)\)/g, "$1");
		}
		return value;
	}

	/**
  * Cache every camelCase match to avoid repeating lookups.
  */
	var cache$2 = {};
	/**
  * Camelcase a property name into its JavaScript notation (e.g.
  * "background-color" ==> "backgroundColor"). Camelcasing is used to
  * normalize property names between and across calls.
  */
	function camelCase(property) {
		var fixed = cache$2[property];
		if (fixed) {
			return fixed;
		}
		return cache$2[property] = property.replace(/-([a-z])/g, function ($, letter) {
			return letter.toUpperCase();
		});
	}

	// Constants
	var rxColor6 = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,
	    rxColor3 = /#([a-f\d])([a-f\d])([a-f\d])/gi,
	    rxColorName = /(rgba?\(\s*)?(\b[a-z]+\b)/g,
	    rxRGB = /rgb(a?)\(([^\)]+)\)/gi,
	    rxSpaces = /\s+/g;
	/**
  * This is the list of color names -> rgb values. The object is in here so
  * that the actual name conversion can be in a separate file and not
  * included for custom builds.
  */
	var ColorNames = {};
	/**
  * Convert a hex list to an rgba value. Designed to be used in replace.
  */
	function makeRGBA(ignore, r, g, b) {
		return "rgba(" + parseInt(r, 16) + "," + parseInt(g, 16) + "," + parseInt(b, 16) + ",1)";
	}
	/**
  * Replace any css colour name with its rgba() value. It is possible to use
  * the name within an "rgba(blue, 0.4)" string this way.
  */
	function fixColors(str) {
		return str.replace(rxColor6, makeRGBA).replace(rxColor3, function ($0, r, g, b) {
			return makeRGBA($0, r + r, g + g, b + b);
		}).replace(rxColorName, function ($0, $1, $2) {
			if (ColorNames[$2]) {
				return ($1 ? $1 : "rgba(") + ColorNames[$2] + ($1 ? "" : ",1)");
			}
			return $0;
		}).replace(rxRGB, function ($0, $1, $2) {
			return "rgba(" + ($2.replace(rxSpaces, "") + ($1 ? "" : ",1")) + ")";
		});
	}

	// Project
	/**
  * Figure out the dimensions for this width / height based on the
  * potential borders and whether we care about them.
  */
	function augmentDimension(element, name, wantInner) {
		var isBorderBox = getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
		if (isBorderBox === wantInner) {
			// in box-sizing mode, the CSS width / height accessors already
			// give the outerWidth / outerHeight.
			var sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
			    fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
			var augment = 0;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(fields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var field = _step.value;

					var value = parseFloat(getPropertyValue(element, field));
					if (!isNaN(value)) {
						augment += value;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return wantInner ? -augment : augment;
		}
		return 0;
	}

	// Project
	/**
  * Get the width or height of an element, pulled out as it can be used when the
  * in two locations so don't want to repeat it.
  */
	function getWidthHeight(element, property) {
		return element.getBoundingClientRect()[property] + augmentDimension(element, property, true) + "px";
	}
	// TODO: This is still a complete mess
	function computePropertyValue(element, property) {
		var data = Data(element),


		// If computedStyle is cached, use it. If not then get the correct one
		// for the element to support cross-iframe boundaries.
		computedStyle = data.computedStyle ? data.computedStyle : data.window.getComputedStyle(element, null);
		var computedValue = 0;
		if (!data.computedStyle) {
			data.computedStyle = computedStyle;
		}
		if (computedStyle["display"] === "none") {
			switch (property) {
				case "width":
				case "height":
					// Browsers do not return height and width values for elements
					// that are set to display:"none". Thus, we temporarily toggle
					// display to the element type's default value.
					setPropertyValue(element, "display", "auto");
					computedValue = getWidthHeight(element, property);
					setPropertyValue(element, "display", "none");
					return String(computedValue);
			}
		}
		/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
		/* TODO: There is a borderColor normalisation in legacy/ - figure out where this is needed... */
		computedValue = computedStyle[property];
		/* Fall back to the property's style value (if defined) when computedValue returns nothing,
       which can happen when the element hasn't been painted. */
		if (!computedValue) {
			computedValue = element.style[property];
		}
		/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
       defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
       effect as being set to 0, so no conversion is necessary.) */
		/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
       property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
       to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
		if (computedValue === "auto") {
			switch (property) {
				case "width":
				case "height":
					computedValue = getWidthHeight(element, property);
					break;
				case "top":
				case "left":

				case "right":
				case "bottom":
					var position = getPropertyValue(element, "position");
					if (position === "fixed" || position === "absolute") {
						// Note: this has no pixel unit on its returned values,
						// we re-add it here to conform with
						// computePropertyValue's behavior.
						computedValue = element.getBoundingClientRect[property] + "px";
						break;
					}
				// Deliberate fallthrough!
				default:
					computedValue = "0px";
					break;
			}
		}
		return computedValue ? String(computedValue) : "";
	}
	/**
  * Get a property value. This will grab via the cache if it exists, then
  * via any normalisations.
  */
	function getPropertyValue(element, propertyName, fn, skipCache) {
		var data = Data(element);
		var propertyValue = void 0;
		if (NoCacheNormalizations.has(propertyName)) {
			skipCache = true;
		}
		if (!skipCache && data && data.cache[propertyName] != null) {
			propertyValue = data.cache[propertyName];
		} else {
			fn = fn || getNormalization(element, propertyName);
			if (fn) {
				propertyValue = fn(element);
				if (data) {
					data.cache[propertyName] = propertyValue;
				}
			}
		}
		if (Velocity$$1.debug >= 2) {
			console.info("Get \"" + propertyName + "\": \"" + propertyValue + "\"", element);
		}
		return propertyValue;
	}

	// Project
	// Constants
	var rxHex = /^#([A-f\d]{3}){1,2}$/i,
	    commands = {
		function: function _function(value, element, elements, elementArrayIndex, propertyName, tween) {
			return value.call(element, elementArrayIndex, elements.length, propertyName);
		},
		number: function number(value, element, elements, elementArrayIndex, propertyName, tween) {
			return String(value) + getNormalizationUnit(tween.fn);
		},
		string: function string(value, element, elements, elementArrayIndex, propertyName, tween) {
			return fixColors(value);
		},
		undefined: function undefined(value, element, elements, elementArrayIndex, propertyName, tween) {
			return fixColors(getPropertyValue(element, propertyName, tween.fn) || "");
		}
	};
	/**
  * Expand a VelocityProperty argument into a valid sparse Tween array. This
  * pre-allocates the array as it is then the correct size and slightly
  * faster to access.
  */
	function expandProperties(animation, properties) {
		var tweens = animation.tweens = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_create___default()(null),
		    elements = animation.elements,
		    element = animation.element,
		    elementArrayIndex = elements.indexOf(element),
		    data = Data(element),
		    queue = getValue(animation.queue, animation.options.queue),
		    duration = getValue(animation.options.duration, defaults$1.duration);
		for (var property in properties) {
			if (properties.hasOwnProperty(property)) {
				var propertyName = camelCase(property),
				    fn = getNormalization(element, propertyName);
				var valueData = properties[property];
				if (!fn && propertyName !== "tween") {
					if (Velocity$$1.debug) {
						console.log("Skipping \"" + property + "\" due to a lack of browser support.");
					}
					continue;
				}
				if (valueData == null) {
					if (Velocity$$1.debug) {
						console.log("Skipping \"" + property + "\" due to no value supplied.");
					}
					continue;
				}
				var tween = tweens[propertyName] = {};
				var endValue = void 0,
				    startValue = void 0;
				tween.fn = fn;
				if (isFunction(valueData)) {
					// If we have a function as the main argument then resolve
					// it first, in case it returns an array that needs to be
					// split.
					valueData = valueData.call(element, elementArrayIndex, elements.length, elements);
				}
				if (Array.isArray(valueData)) {
					// valueData is an array in the form of
					// [ endValue, [, easing] [, startValue] ]
					var arr1 = valueData[1],
					    arr2 = valueData[2];
					endValue = valueData[0];
					if (isString(arr1) && (/^[\d-]/.test(arr1) || rxHex.test(arr1)) || isFunction(arr1) || isNumber(arr1)) {
						startValue = arr1;
					} else if (isString(arr1) && Easings[arr1] || Array.isArray(arr1)) {
						tween.easing = validateEasing(arr1, duration);
						startValue = arr2;
					} else {
						startValue = arr1 || arr2;
					}
				} else {
					endValue = valueData;
				}
				tween.end = commands[typeof endValue === "undefined" ? "undefined" : _typeof(endValue)](endValue, element, elements, elementArrayIndex, propertyName, tween);
				if (startValue != null || queue === false || data.queueList[queue] === undefined) {
					tween.start = commands[typeof startValue === "undefined" ? "undefined" : _typeof(startValue)](startValue, element, elements, elementArrayIndex, propertyName, tween);
					explodeTween(propertyName, tween, duration);
				}
			}
		}
	}
	// TODO: Needs a better match for "translate3d" etc - a number must be preceded by some form of break...
	var rxToken = /((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,
	    rxNumber = /^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;
	/**
  * Find a pattern between multiple strings, return a VelocitySequence with
  * the pattern and the tokenised values.
  *
  * If number then animate.
  * If a string then must match.
  * If units then convert between them by wrapping in a calc().
  * - If already in a calc then nest another layer.
  * If in an rgba() then the first three numbers are rounded.
  */
	function findPattern(parts, propertyName) {
		var partsLength = parts.length,
		    tokens = [],
		    indexes = [];
		var numbers = void 0;
		// First tokenise the strings - these have all values, we will pull
		// numbers later.
		for (var part = 0; part < partsLength; part++) {
			if (isString(parts[part])) {
				if (parts[part] === "") {
					tokens[part] = [""];
				} else {
					tokens[part] = cloneArray(parts[part].match(rxToken));
				}
				indexes[part] = 0;
				// If it matches more than one thing then we've got a number.
				numbers = numbers || tokens[part].length > 1;
				//console.log(`tokens:`, parts[part], tokens[part])
			} else {
				// We have an incomplete lineup, it will get tried again later...
				return;
			}
		}
		var sequence = [],
		    pattern = sequence.pattern = [],
		    addString = function addString(text) {
			if (isString(pattern[pattern.length - 1])) {
				pattern[pattern.length - 1] += text;
			} else if (text) {
				pattern.push(text);
				for (var _part = 0; _part < partsLength; _part++) {
					sequence[_part].push(null);
				}
			}
		},
		    returnStringType = function returnStringType() {
			if (numbers || pattern.length > 1) {
				//console.error(`Velocity: Trying to pattern match mis-matched strings "${propertyName}":`, parts);
				return;
			}
			var isDisplay = propertyName === "display",
			    isVisibility = propertyName === "visibility";
			for (var _part2 = 0; _part2 < partsLength; _part2++) {
				var value = parts[_part2];
				sequence[_part2][0] = value;
				// Don't care about duration...
				sequence[_part2].easing = validateEasing(isDisplay && value === "none" || isVisibility && value === "hidden" || !isDisplay && !isVisibility ? "at-end" : "at-start", 400);
			}
			pattern[0] = false;
			return sequence;
		};
		var more = true;
		for (var _part3 = 0; _part3 < partsLength; _part3++) {
			sequence[_part3] = [];
		}
		while (more) {
			var bits = [],
			    units = [];
			var text = void 0,
			    isUnitless = false,
			    hasNumbers = false;
			for (var _part4 = 0; _part4 < partsLength; _part4++) {
				var index = indexes[_part4]++,
				    token = tokens[_part4][index];
				if (token) {
					var num = token.match(rxNumber); // [ignore, change, number, unit]
					if (num) {
						// It's a number, possibly with a += change and unit.
						if (text) {
							return returnStringType();
						}
						var digits = parseFloat(num[2]),
						    unit = num[3],
						    change = num[1] ? num[1][0] + unit : undefined,
						    changeOrUnit = change || unit;
						if (digits && !units.includes(changeOrUnit)) {
							// Will be an empty string at the least.
							units.push(changeOrUnit);
						}
						if (!unit) {
							if (digits) {
								hasNumbers = true;
							} else {
								isUnitless = true;
							}
						}
						bits[_part4] = change ? [digits, changeOrUnit, true] : [digits, changeOrUnit];
					} else if (bits.length) {
						return returnStringType();
					} else {
						// It's a string.
						if (!text) {
							text = token;
						} else if (text !== token) {
							return returnStringType();
						}
					}
				} else if (!_part4) {
					for (; _part4 < partsLength; _part4++) {
						var index2 = indexes[_part4]++;
						if (tokens[_part4][index2]) {
							return returnStringType();
						}
					}
					// IMPORTANT: This is the exit point.
					more = false;
					break;
				} else {
					// Different
					return;
				}
			}
			if (text) {
				addString(text);
			} else if (units.length) {
				if (units.length === 2 && isUnitless && !hasNumbers) {
					// If we only have two units, and one is empty, and it's only empty on "0", then treat us as having one unit
					units.splice(units[0] ? 1 : 0, 1);
				}
				if (units.length === 1) {
					// All the same units, so append number then unit.
					var _unit = units[0],
					    firstLetter = _unit[0];
					switch (firstLetter) {
						case "+":
						case "-":
						case "*":
						case "/":
							if (propertyName) {
								console.error("Velocity: The first property must not contain a relative function \"" + propertyName + "\":", parts);
							}
							return;
					}
					pattern.push(false);
					for (var _part5 = 0; _part5 < partsLength; _part5++) {
						sequence[_part5].push(bits[_part5][0]);
					}
					addString(_unit);
				} else {
					// Multiple units, so must be inside a calc.
					addString("calc(");
					var patternCalc = pattern.length - 1; // Store the beginning of our calc.
					for (var i = 0; i < units.length; i++) {
						var _unit2 = units[i],
						    _firstLetter = _unit2[0],
						    isComplex = _firstLetter === "*" || _firstLetter === "/",
						    isMaths = isComplex || _firstLetter === "+" || _firstLetter === "-";
						if (isComplex) {
							// TODO: Not sure this should be done automatically!
							pattern[patternCalc] += "(";
							addString(")");
						}
						if (i) {
							addString(" " + (isMaths ? _firstLetter : "+") + " ");
						}
						pattern.push(false);
						for (var _part6 = 0; _part6 < partsLength; _part6++) {
							var bit = bits[_part6],
							    value = bit[1] === _unit2 ? bit[0] : bit.length === 3 ? sequence[_part6 - 1][sequence[_part6 - 1].length - 1] : isComplex ? 1 : 0;
							sequence[_part6].push(value);
						}
						addString(isMaths ? _unit2.substring(1) : _unit2);
					}
					addString(")");
				}
			}
		}
		// We've got here, so a valid sequence - now check and fix RGB rounding
		// and calc() nesting...
		// TODO: Nested calc(a + calc(b + c)) -> calc(a + (b + c))
		for (var _i = 0, inRGB = 0; _i < pattern.length; _i++) {
			var _text = pattern[_i];
			if (isString(_text)) {
				if (inRGB && _text.indexOf(",") >= 0) {
					inRGB++;
				} else if (_text.indexOf("rgb") >= 0) {
					inRGB = 1;
				}
			} else if (inRGB) {
				if (inRGB < 4) {
					pattern[_i] = true;
				} else {
					inRGB = 0;
				}
			}
		}
		return sequence;
	}
	/**
  * Convert a string-based tween with start and end strings, into a pattern
  * based tween with arrays.
  */
	function explodeTween(propertyName, tween, duration, starting) {
		var startValue = tween.start,
		    endValue = tween.end;
		if (!isString(endValue) || !isString(startValue)) {
			return;
		}
		var sequence = findPattern([startValue, endValue], propertyName);
		if (!sequence && starting) {
			// This little piece will take a startValue, split out the
			// various numbers in it, then copy the endValue into the
			// startValue while replacing the numbers in it to match the
			// original start numbers as a repeating sequence.
			// Finally this function will run again with the new
			// startValue and a now matching pattern.
			var startNumbers = startValue.match(/\d\.?\d*/g) || ["0"],
			    count = startNumbers.length;
			var index = 0;
			sequence = findPattern([endValue.replace(/\d+\.?\d*/g, function () {
				return startNumbers[index++ % count];
			}), endValue], propertyName);
		}
		if (sequence) {
			if (Velocity$$1.debug) {
				console.log("Velocity: Sequence found:", sequence);
			}
			sequence[0].percent = 0;
			sequence[1].percent = 1;
			tween.sequence = sequence;
			switch (tween.easing) {
				case Easings["at-start"]:
				case Easings["during"]:
				case Easings["at-end"]:
					sequence[0].easing = sequence[1].easing = tween.easing;
					break;
			}
		}
	}
	/**
  * Expand all queued animations that haven't gone yet
  *
  * This will automatically expand the properties map for any recently added
  * animations so that the start and end values are correct.
  */
	function validateTweens(activeCall) {
		// This might be called on an already-ready animation
		if (State.firstNew === activeCall) {
			State.firstNew = activeCall._next;
		}
		// Check if we're actually already ready
		if (activeCall._flags & 1 /* EXPANDED */) {
				// tslint:disable-line:no-bitwise
				return;
			}
		var element = activeCall.element,
		    tweens = activeCall.tweens,
		    duration = getValue(activeCall.options.duration, defaults$1.duration);
		// tslint:disable-next-line:forin
		for (var propertyName in tweens) {
			var tween = tweens[propertyName];
			if (tween.start == null) {
				// Get the start value as it's not been passed in
				var startValue = getPropertyValue(activeCall.element, propertyName);
				if (isString(startValue)) {
					tween.start = fixColors(startValue);
					explodeTween(propertyName, tween, duration, true);
				} else if (!Array.isArray(startValue)) {
					console.warn("bad type", tween, propertyName, startValue);
				}
			}
			if (Velocity$$1.debug) {
				console.log("tweensContainer \"" + propertyName + "\": " + __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(tween), element);
			}
		}
		activeCall._flags |= 1 /* EXPANDED */; // tslint:disable-line:no-bitwise
	}

	// Project
	/**
  * Call the begin method of an animation in a separate function so it can
  * benefit from JIT compiling while still having a try/catch block.
  */
	function beginCall(activeCall) {
		var callback = activeCall.begin || activeCall.options.begin;
		if (callback) {
			try {
				var elements = activeCall.elements;
				callback.call(elements, elements, activeCall);
			} catch (error) {
				setTimeout(function () {
					throw error;
				}, 1);
			}
		}
	}
	/**
  * Call the progress method of an animation in a separate function so it can
  * benefit from JIT compiling while still having a try/catch block.
  */
	function progressCall(activeCall) {
		var callback = activeCall.progress || activeCall.options.progress;
		if (callback) {
			try {
				var elements = activeCall.elements,
				    percentComplete = activeCall.percentComplete,
				    options = activeCall.options,
				    tweenValue = activeCall.tween;
				callback.call(elements, elements, percentComplete, Math.max(0, activeCall.timeStart + (activeCall.duration != null ? activeCall.duration : options.duration != null ? options.duration : defaults$1.duration) - lastTick), tweenValue !== undefined ? tweenValue : String(percentComplete * 100), activeCall);
			} catch (error) {
				setTimeout(function () {
					throw error;
				}, 1);
			}
		}
	}
	/**
  * Call callbacks, potentially run async with the main animation thread.
  */
	function asyncCallbacks() {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(progressed), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var activeCall = _step.value;

				progressCall(activeCall);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		progressed.clear();
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(completed), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _activeCall = _step2.value;

				completeCall(_activeCall);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		completed.clear();
	}
	/**************
  Timing
  **************/
	var FRAME_TIME = 1000 / 60,


	/**
  * Animations with a Complete callback.
  */
	completed = new __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_set___default.a(),


	/**
  * Animations with a Progress callback.
  */
	progressed = new __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_set___default.a(),


	/**
  * Shim for window.performance in case it doesn't exist
  */
	performance = function () {
		var perf = window.performance || {};
		if (typeof perf.now !== "function") {
			var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : now();
			perf.now = function () {
				return now() - nowOffset;
			};
		}
		return perf;
	}(),


	/**
  * Proxy function for when rAF is not available.
  *
  * This should hopefully never be used as the browsers often throttle
  * this to less than one frame per second in the background, making it
  * completely unusable.
  */
	rAFProxy = function rAFProxy(callback) {
		return setTimeout(callback, Math.max(0, FRAME_TIME - (performance.now() - lastTick)));
	},


	/**
  * Either requestAnimationFrame, or a shim for it.
  */
	rAFShim = window.requestAnimationFrame || rAFProxy;
	/**
  * Set if we are currently inside a tick() to prevent double-calling.
  */
	var ticking = void 0,


	/**
  * A background WebWorker that sends us framerate messages when we're in
  * the background. Without this we cannot maintain frame accuracy.
  */
	worker = void 0;
	/**
  * The time that the last animation frame ran at. Set from tick(), and used
  * for missing rAF (ie, when not in focus etc).
  */
	var lastTick = 0;
	/**
  * WebWorker background function.
  *
  * When we're in the background this will send us a msg every tick, when in
  * the foreground it won't.
  *
  * When running in the background the browser reduces allowed CPU etc, so
  * we raun at 30fps instead of 60fps.
  */
	function workerFn() {
		var _this = this;

		var interval = void 0;
		this.onmessage = function (e) {
			switch (e.data) {
				case true:
					if (!interval) {
						interval = setInterval(function () {
							_this.postMessage(true);
						}, 1000 / 30);
					}
					break;
				case false:
					if (interval) {
						clearInterval(interval);
						interval = 0;
					}
					break;
				default:
					_this.postMessage(e.data);
					break;
			}
		};
	}
	try {
		// Create the worker - this might not be supported, hence the try/catch.
		worker = new Worker(URL.createObjectURL(new Blob(["(" + workerFn + ")()"])));
		// Whenever the worker sends a message we tick()
		worker.onmessage = function (e) {
			if (e.data === true) {
				tick();
			} else {
				asyncCallbacks();
			}
		};
		// And watch for going to the background to start the WebWorker running.
		if (!State.isMobile && document.hidden !== undefined) {
			document.addEventListener("visibilitychange", function () {
				worker.postMessage(State.isTicking && document.hidden);
			});
		}
	} catch (e) {}
	/*
   * WebWorkers are not supported in this format. This can happen in IE10
   * where it can't create one from a blob this way. We fallback, but make
   * no guarantees towards accuracy in this case.
   */

	/**
  * Called on every tick, preferably through rAF. This is reponsible for
  * initialising any new animations, then starting any that need starting.
  * Finally it will expand any tweens and set the properties relating to
  * them. If there are any callbacks relating to the animations then they
  * will attempt to call at the end (with the exception of "begin").
  */
	function tick(timestamp) {
		if (ticking) {
			// Should never happen - but if we've swapped back from hidden to
			// visibile then we want to make sure
			return;
		}
		ticking = true;
		/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
       We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
       the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
       calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
       the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
       by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
		if (timestamp !== false) {
			var timeCurrent = performance.now(),
			    deltaTime = lastTick ? timeCurrent - lastTick : FRAME_TIME,
			    defaultSpeed = defaults$1.speed,
			    defaultEasing = defaults$1.easing,
			    defaultDuration = defaults$1.duration;
			var activeCall = void 0,
			    nextCall = void 0;
			if (deltaTime >= defaults$1.minFrameTime || !lastTick) {
				lastTick = timeCurrent;
				/********************
     Call Iteration
     ********************/
				// Expand any tweens that might need it.
				while (State.firstNew) {
					validateTweens(State.firstNew);
				}
				// Iterate through each active call.
				for (activeCall = State.first; activeCall && activeCall !== State.firstNew; activeCall = activeCall._next) {
					var element = activeCall.element,
					    data = Data(element);
					// Check to see if this element has been deleted midway
					// through the animation. If it's gone then end this
					// animation.
					if (!element.parentNode || !data) {
						// TODO: Remove safely - decrease count, delete data, remove from arrays
						freeAnimationCall(activeCall);
						continue;
					}
					// Don't bother getting until we can use these.
					var options = activeCall.options,
					    flags = activeCall._flags;
					var timeStart = activeCall.timeStart;
					// If this is the first time that this call has been
					// processed by tick() then we assign timeStart now so that
					// it's value is as close to the real animation start time
					// as possible.
					if (!timeStart) {
						var queue = activeCall.queue != null ? activeCall.queue : options.queue;
						timeStart = timeCurrent - deltaTime;
						if (queue !== false) {
							timeStart = Math.max(timeStart, data.lastFinishList[queue] || 0);
						}
						activeCall.timeStart = timeStart;
					}
					// If this animation is paused then skip processing unless
					// it has been set to resume.
					if (flags & 16 /* PAUSED */) {
							// tslint:disable-line:no-bitwise
							// Update the time start to accomodate the paused
							// completion amount.
							activeCall.timeStart += deltaTime;
							continue;
						}
					// Check if this animation is ready - if it's synced then it
					// needs to wait for all other animations in the sync
					if (!(flags & 2 /* READY */)) {
						// tslint:disable-line:no-bitwise
						activeCall._flags |= 2 /* READY */; // tslint:disable-line:no-bitwise
						options._ready++;
					}
				}
				// Need to split the loop, as ready sync animations must all get
				// the same start time.
				for (activeCall = State.first; activeCall && activeCall !== State.firstNew; activeCall = nextCall) {
					var _flags = activeCall._flags;
					nextCall = activeCall._next;
					if (!(_flags & 2 /* READY */) || _flags & 16 /* PAUSED */) {
							// tslint:disable-line:no-bitwise
							continue;
						}
					var _options = activeCall.options;
					if (_flags & 32 /* SYNC */ && _options._ready < _options._total) {
						// tslint:disable-line:no-bitwise
						activeCall.timeStart += deltaTime;
						continue;
					}
					var speed = activeCall.speed != null ? activeCall.speed : _options.speed != null ? _options.speed : defaultSpeed;
					var _timeStart = activeCall.timeStart;
					// Don't bother getting until we can use these.
					if (!(_flags & 4 /* STARTED */)) {
						// tslint:disable-line:no-bitwise
						var delay = activeCall.delay != null ? activeCall.delay : _options.delay;
						// Make sure anything we've delayed doesn't start
						// animating yet, there might still be an active delay
						// after something has been un-paused
						if (delay) {
							if (_timeStart + delay / speed > timeCurrent) {
								continue;
							}
							activeCall.timeStart = _timeStart += delay / (delay > 0 ? speed : 1);
						}
						activeCall._flags |= 4 /* STARTED */; // tslint:disable-line:no-bitwise
						// The begin callback is fired once per call, not once
						// per element, and is passed the full raw DOM element
						// set as both its context and its first argument.
						if (_options._started++ === 0) {
							_options._first = activeCall;
							if (_options.begin) {
								// Pass to an external fn with a try/catch block for optimisation
								beginCall(activeCall);
								// Only called once, even if reversed or repeated
								_options.begin = undefined;
							}
						}
					}
					if (speed !== 1) {
						// On the first frame we may have a shorter delta
						// const delta = Math.min(deltaTime, timeCurrent - timeStart);
						activeCall.timeStart = _timeStart += Math.min(deltaTime, timeCurrent - _timeStart) * (1 - speed);
					}
					var activeEasing = activeCall.easing != null ? activeCall.easing : _options.easing != null ? _options.easing : defaultEasing,
					    millisecondsEllapsed = activeCall.ellapsedTime = timeCurrent - _timeStart,
					    duration = activeCall.duration != null ? activeCall.duration : _options.duration != null ? _options.duration : defaultDuration,
					    percentComplete = activeCall.percentComplete = Velocity$$1.mock ? 1 : Math.min(millisecondsEllapsed / duration, 1),
					    tweens = activeCall.tweens,
					    reverse = _flags & 64 /* REVERSE */; // tslint:disable-line:no-bitwise
					if (activeCall.progress || _options._first === activeCall && _options.progress) {
						progressed.add(activeCall);
					}
					if (percentComplete === 1) {
						completed.add(activeCall);
					}
					// tslint:disable-next-line:forin
					for (var property in tweens) {
						// For every element, iterate through each property.
						var tween = tweens[property],
						    sequence = tween.sequence,
						    pattern = sequence.pattern;
						var currentValue = "",
						    i = 0;
						if (pattern) {
							var easingComplete = (tween.easing || activeEasing)(percentComplete, 0, 1, property);
							var best = 0;
							for (var j = 0; j < sequence.length - 1; j++) {
								if (sequence[j].percent < easingComplete) {
									best = j;
								}
							}
							var tweenFrom = sequence[best],
							    tweenTo = sequence[best + 1] || tweenFrom,
							    rawPercent = (percentComplete - tweenFrom.percent) / (tweenTo.percent - tweenFrom.percent),
							    tweenPercent = reverse ? 1 - rawPercent : rawPercent,
							    easing = tweenTo.easing || activeEasing || linearEasing;
							for (; i < pattern.length; i++) {
								var startValue = tweenFrom[i];
								if (startValue == null) {
									currentValue += pattern[i];
								} else {
									var endValue = tweenTo[i];
									if (startValue === endValue) {
										currentValue += startValue;
									} else {
										// All easings must deal with numbers except for our internal ones.
										var result = easing(tweenPercent, startValue, endValue, property);
										currentValue += pattern[i] !== true ? result : Math.round(result);
									}
								}
							}
							if (property !== "tween") {
								if (percentComplete === 1) {
									currentValue = removeNestedCalc(currentValue);
								}
								// TODO: To solve an IE<=8 positioning bug, the unit type must be dropped when setting a property value of 0 - add normalisations to legacy
								setPropertyValue(activeCall.element, property, currentValue, tween.fn);
							} else {
								// Skip the fake 'tween' property as that is only
								// passed into the progress callback.
								activeCall.tween = currentValue;
							}
						} else {
							console.warn("VelocityJS: Missing pattern:", property, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_json_stringify___default()(tween[property]));
							delete tweens[property];
						}
					}
				}
				if (progressed.size || completed.size) {
					if (!document.hidden) {
						asyncCallbacks();
					} else if (worker) {
						worker.postMessage("");
					} else {
						setTimeout(asyncCallbacks, 1);
					}
				}
			}
		}
		if (State.first) {
			State.isTicking = true;
			if (!document.hidden) {
				rAFShim(tick);
			} else if (!worker) {
				rAFProxy(tick);
			} else if (timestamp === false) {
				// Make sure we turn on the messages.
				worker.postMessage(true);
			}
		} else {
			State.isTicking = false;
			lastTick = 0;
			if (document.hidden && worker) {
				// Make sure we turn off the messages.
				worker.postMessage(false);
			}
		}
		ticking = false;
	}

	// Project
	/**
  * Check if an animation should be finished, and if so we set the tweens to
  * the final value for it, then call complete.
  */
	function checkAnimationShouldBeFinished(animation, queueName, defaultQueue) {
		validateTweens(animation);
		if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
			if (!(animation._flags & 4 /* STARTED */)) {
				// tslint:disable-line:no-bitwise
				// Copied from tick.ts - ensure that the animation is completely
				// valid and run begin() before complete().
				var options = animation.options;
				// The begin callback is fired once per call, not once per
				// element, and is passed the full raw DOM element set as both
				// its context and its first argument.
				if (options._started++ === 0) {
					options._first = animation;
					if (options.begin) {
						// Pass to an external fn with a try/catch block for optimisation
						beginCall(animation);
						// Only called once, even if reversed or repeated
						options.begin = undefined;
					}
				}
				animation._flags |= 4 /* STARTED */; // tslint:disable-line:no-bitwise
			}
			// tslint:disable-next-line:forin
			for (var property in animation.tweens) {
				var tween = animation.tweens[property],
				    sequence = tween.sequence,
				    pattern = sequence.pattern;
				var currentValue = "",
				    i = 0;
				if (pattern) {
					var endValues = sequence[sequence.length - 1];
					for (; i < pattern.length; i++) {
						var endValue = endValues[i];
						currentValue += endValue == null ? pattern[i] : endValue;
					}
				}
				setPropertyValue(animation.element, property, currentValue, tween.fn);
			}
			completeCall(animation);
		}
	}
	/**
  * When the finish action is triggered, the elements' currently active call is
  * immediately finished. When an element is finished, the next item in its
  * animation queue is immediately triggered. If passed via a chained call
  * then this will only target the animations in that call, and not the
  * elements linked to it.
  *
  * A queue name may be passed in to specify that only animations on the
  * named queue are finished. The default queue is named "". In addition the
  * value of `false` is allowed for the queue name.
  *
  * An final argument may be passed in to clear an element's remaining queued
  * calls. This may only be the value `true`.
  */
	function finish(args, elements, promiseHandler) {
		var queueName = validateQueue(args[0], true),
		    defaultQueue = defaults$1.queue,
		    finishAll = args[queueName === undefined ? 0 : 1] === true;
		if (isVelocityResult(elements) && elements.velocity.animations) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements.velocity.animations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var animation = _step.value;

					checkAnimationShouldBeFinished(animation, queueName, defaultQueue);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		} else {
			while (State.firstNew) {
				validateTweens(State.firstNew);
			}
			for (var activeCall = State.first, nextCall; activeCall && (finishAll || activeCall !== State.firstNew); activeCall = nextCall || State.firstNew) {
				nextCall = activeCall._next;
				if (!elements || elements.includes(activeCall.element)) {
					checkAnimationShouldBeFinished(activeCall, queueName, defaultQueue);
				}
			}
		}
		if (promiseHandler) {
			if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
				elements.then(promiseHandler._resolver);
			} else {
				promiseHandler._resolver(elements);
			}
		}
	}
	registerAction(["finish", finish], true);

	/**
  * Used to map getters for the various AnimationFlags.
  */
	var animationFlags = {
		isExpanded: 1 /* EXPANDED */
		, isReady: 2 /* READY */
		, isStarted: 4 /* STARTED */
		, isStopped: 8 /* STOPPED */
		, isPaused: 16 /* PAUSED */
		, isSync: 32 /* SYNC */
		, isReverse: 64 /* REVERSE */
	};
	/**
  * Get or set an option or running AnimationCall data value. If there is no
  * value passed then it will get, otherwise we will set.
  *
  * NOTE: When using "get" this will not touch the Promise as it is never
  * returned to the user.
  */
	function option(args, elements, promiseHandler, action) {
		var key = args[0],
		    queue = action.indexOf(".") >= 0 ? action.replace(/^.*\./, "") : undefined,
		    queueName = queue === "false" ? false : validateQueue(queue, true);
		var animations = void 0,
		    value = args[1];
		if (!key) {
			console.warn("VelocityJS: Cannot access a non-existant key!");
			return null;
		}
		// If we're chaining the return value from Velocity then we are only
		// interested in the values related to that call
		if (isVelocityResult(elements) && elements.velocity.animations) {
			animations = elements.velocity.animations;
		} else {
			animations = [];
			for (var activeCall = State.first; activeCall; activeCall = activeCall._next) {
				if (elements.indexOf(activeCall.element) >= 0 && getValue(activeCall.queue, activeCall.options.queue) === queueName) {
					animations.push(activeCall);
				}
			}
			// If we're dealing with multiple elements that are pointing at a
			// single running animation, then instead treat them as a single
			// animation.
			if (elements.length > 1 && animations.length > 1) {
				var i = 1,
				    options = animations[0].options;
				while (i < animations.length) {
					if (animations[i++].options !== options) {
						options = null;
						break;
					}
				}
				// TODO: this needs to check that they're actually a sync:true animation to merge the results, otherwise the individual values may be different
				if (options) {
					animations = [animations[0]];
				}
			}
		}
		// GET
		if (value === undefined) {
			var result = [],
			    flag = animationFlags[key];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(animations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var animation = _step.value;

					if (flag === undefined) {
						// A normal key to get.
						result.push(getValue(animation[key], animation.options[key]));
					} else {
						// A flag that we're checking against.
						result.push((animation._flags & flag) === 0); // tslint:disable-line:no-bitwise
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			if (elements.length === 1 && animations.length === 1) {
				// If only a single animation is found and we're only targetting a
				// single element, then return the value directly
				return result[0];
			}
			return result;
		}
		// SET
		var isPercentComplete = void 0;
		switch (key) {
			case "cache":
				value = validateCache(value);
				break;
			case "begin":
				value = validateBegin(value);
				break;
			case "complete":
				value = validateComplete(value);
				break;
			case "delay":
				value = validateDelay(value);
				break;
			case "duration":
				value = validateDuration(value);
				break;
			case "fpsLimit":
				value = validateFpsLimit(value);
				break;
			case "loop":
				value = validateLoop(value);
				break;
			case "percentComplete":
				isPercentComplete = true;
				value = parseFloat(value);
				break;
			case "repeat":
			case "repeatAgain":
				value = validateRepeat(value);
				break;
			default:
				if (key[0] !== "_") {
					var num = parseFloat(value);
					if (value === String(num)) {
						value = num;
					}
					break;
				}
			// deliberate fallthrough
			case "queue":
			case "promise":
			case "promiseRejectEmpty":
			case "easing":
			case "started":
				console.warn("VelocityJS: Trying to set a read-only key:", key);
				return;
		}
		if (value === undefined || value !== value) {
			console.warn("VelocityJS: Trying to set an invalid value:" + key + "=" + value + " (" + args[1] + ")");
			return null;
		}
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(animations), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _animation = _step2.value;

				if (isPercentComplete) {
					_animation.timeStart = lastTick - getValue(_animation.duration, _animation.options.duration, defaults$1.duration) * value;
				} else {
					_animation[key] = value;
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		if (promiseHandler) {
			if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
				elements.then(promiseHandler._resolver);
			} else {
				promiseHandler._resolver(elements);
			}
		}
	}
	registerAction(["option", option], true);

	// Project
	/**
  * Check if an animation should be paused / resumed.
  */
	function checkAnimation(animation, queueName, defaultQueue, isPaused) {
		if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
			if (isPaused) {
				animation._flags |= 16 /* PAUSED */; // tslint:disable-line:no-bitwise
			} else {
				animation._flags &= ~16 /* PAUSED */; // tslint:disable-line:no-bitwise
			}
		}
	}
	/**
  * Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a
  * single element will cause any calls that contain tweens for that element to be paused/resumed
  * as well.
  */
	function pauseResume(args, elements, promiseHandler, action) {
		var isPaused = action.indexOf("pause") === 0,
		    queue = action.indexOf(".") >= 0 ? action.replace(/^.*\./, "") : undefined,
		    queueName = queue === "false" ? false : validateQueue(args[0]),
		    defaultQueue = defaults$1.queue;
		if (isVelocityResult(elements) && elements.velocity.animations) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements.velocity.animations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var animation = _step.value;

					checkAnimation(animation, queueName, defaultQueue, isPaused);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		} else {
			var activeCall = State.first;
			while (activeCall) {
				if (!elements || elements.includes(activeCall.element)) {
					checkAnimation(activeCall, queueName, defaultQueue, isPaused);
				}
				activeCall = activeCall._next;
			}
		}
		if (promiseHandler) {
			if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
				elements.then(promiseHandler._resolver);
			} else {
				promiseHandler._resolver(elements);
			}
		}
	}
	registerAction(["pause", pauseResume], true);
	registerAction(["resume", pauseResume], true);

	// Project
	/**
  * Get or set a style of Nomralised property value on one or more elements.
  * If there is no value passed then it will get, otherwise we will set.
  *
  * NOTE: When using "get" this will not touch the Promise as it is never
  * returned to the user.
  *
  * This can fail to set, and will reject the Promise if it does so.
  *
  * Velocity(elements, "style", "property", "value") => elements;
  * Velocity(elements, "style", {"property": "value", ...}) => elements;
  * Velocity(element, "style", "property") => "value";
  * Velocity(elements, "style", "property") => ["value", ...];
  */
	function propertyAction(args, elements, promiseHandler, action) {
		var property = args[0],
		    value = args[1];
		if (!property) {
			console.warn("VelocityJS: Cannot access a non-existant property!");
			return null;
		}
		// GET
		if (value === undefined && !isPlainObject(property)) {
			if (Array.isArray(property)) {
				if (elements.length === 1) {
					var result = {};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(property), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var prop = _step.value;

							result[prop] = fixColors(getPropertyValue(elements[0], prop));
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return result;
				} else {
					var _result = [];
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var element = _step2.value;

							var res = {};
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(property), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var _prop = _step3.value;

									res[_prop] = fixColors(getPropertyValue(element, _prop));
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}

							_result.push(res);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					return _result;
				}
			} else {
				// If only a single animation is found and we're only targetting a
				// single element, then return the value directly
				if (elements.length === 1) {
					return fixColors(getPropertyValue(elements[0], property));
				}
				var _result2 = [];
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _element = _step4.value;

						_result2.push(fixColors(getPropertyValue(_element, property)));
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				return _result2;
			}
		}
		// SET
		var error = [];
		if (isPlainObject(property)) {
			for (var propertyName in property) {
				if (property.hasOwnProperty(propertyName)) {
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var _element2 = _step5.value;

							var propertyValue = property[propertyName];
							if (isString(propertyValue) || isNumber(propertyValue)) {
								setPropertyValue(_element2, propertyName, property[propertyName]);
							} else {
								error.push("Cannot set a property \"" + propertyName + "\" to an unknown type: " + (typeof propertyValue === "undefined" ? "undefined" : _typeof(propertyValue)));
								console.warn("VelocityJS: Cannot set a property \"" + propertyName + "\" to an unknown type:", propertyValue);
							}
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}
				}
			}
		} else if (isString(value) || isNumber(value)) {
			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var _element3 = _step6.value;

					setPropertyValue(_element3, property, String(value));
				}
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}
		} else {
			error.push("Cannot set a property \"" + property + "\" to an unknown type: " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
			console.warn("VelocityJS: Cannot set a property \"" + property + "\" to an unknown type:", value);
		}
		if (promiseHandler) {
			if (error.length) {
				promiseHandler._rejecter(error.join(", "));
			} else if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
				elements.then(promiseHandler._resolver);
			} else {
				promiseHandler._resolver(elements);
			}
		}
	}
	registerAction(["property", propertyAction], true);

	// Project
	registerAction(["reverse", function (args, elements, promiseHandler, action) {
		// NOTE: Code needs to split out before here - but this is needed to prevent it being overridden
		throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.");
	}], true);

	// Project
	/**
  * Check if an animation should be stopped, and if so then set the STOPPED
  * flag on it, then call complete.
  */
	function checkAnimationShouldBeStopped(animation, queueName, defaultQueue) {
		validateTweens(animation);
		if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
			animation._flags |= 8 /* STOPPED */; // tslint:disable-line:no-bitwise
			completeCall(animation);
		}
	}
	/**
  * When the stop action is triggered, the elements' currently active call is
  * immediately stopped. When an element is stopped, the next item in its
  * animation queue is immediately triggered. If passed via a chained call
  * then this will only target the animations in that call, and not the
  * elements linked to it.
  *
  * A queue name may be passed in to specify that only animations on the
  * named queue are stopped. The default queue is named "". In addition the
  * value of `false` is allowed for the queue name.
  *
  * An final argument may be passed in to clear an element's remaining queued
  * calls. This may only be the value `true`.
  *
  * Note: The stop command runs prior to Velocity's Queueing phase since its
  * behavior is intended to take effect *immediately*, regardless of the
  * element's current queue state.
  */
	function stop(args, elements, promiseHandler, action) {
		var queueName = validateQueue(args[0], true),
		    defaultQueue = defaults$1.queue,
		    finishAll = args[queueName === undefined ? 0 : 1] === true;
		if (isVelocityResult(elements) && elements.velocity.animations) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(elements.velocity.animations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var animation = _step.value;

					checkAnimationShouldBeStopped(animation, queueName, defaultQueue);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		} else {
			while (State.firstNew) {
				validateTweens(State.firstNew);
			}
			for (var activeCall = State.first, nextCall; activeCall && (finishAll || activeCall !== State.firstNew); activeCall = nextCall || State.firstNew) {
				nextCall = activeCall._next;
				if (!elements || elements.includes(activeCall.element)) {
					checkAnimationShouldBeStopped(activeCall, queueName, defaultQueue);
				}
			}
		}
		if (promiseHandler) {
			if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
				elements.then(promiseHandler._resolver);
			} else {
				promiseHandler._resolver(elements);
			}
		}
	}
	registerAction(["stop", stop], true);

	// Project
	registerAction(["style", propertyAction], true);

	// Project
	/**
  *
  */
	function tweenAction(args, elements, promiseHandler, action) {
		var requireForcefeeding = void 0;
		if (!elements) {
			if (!args.length) {
				console.info("Velocity(<element>, \"tween\", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, \"tween\", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}");
				return null;
			}
			elements = [document.body];
			requireForcefeeding = true;
		} else if (elements.length !== 1) {
			// TODO: Allow more than a single element to return an array of results
			throw new Error("VelocityJS: Cannot tween more than one element!");
		}
		var percentComplete = args[0],
		    fakeAnimation = {
			elements: elements,
			element: elements[0],
			queue: false,
			options: {
				duration: 1000
			},
			tweens: null
		},
		    result = {};
		var properties = args[1],
		    singleResult = void 0,
		    maybeSequence = void 0,
		    easing = args[2],
		    count = 0;
		if (isString(args[1])) {
			if (SequencesObject && SequencesObject[args[1]]) {
				maybeSequence = SequencesObject[args[1]];
				properties = {};
				easing = args[2];
			} else {
				singleResult = true;
				properties = defineProperty({}, args[1], args[2]);
				easing = args[3];
			}
		} else if (Array.isArray(args[1])) {
			singleResult = true;
			properties = {
				tween: args[1]
			};
			easing = args[2];
		}
		if (!isNumber(percentComplete) || percentComplete < 0 || percentComplete > 1) {
			throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");
		}
		if (!isPlainObject(properties)) {
			throw new Error("VelocityJS: Cannot tween an invalid property!");
		}
		if (requireForcefeeding) {
			for (var property in properties) {
				if (properties.hasOwnProperty(property) && (!Array.isArray(properties[property]) || properties[property].length < 2)) {
					throw new Error("VelocityJS: When not supplying an element you must force-feed values: " + property);
				}
			}
		}
		var activeEasing = validateEasing(getValue(easing, defaults$1.easing), DEFAULT_DURATION);
		if (maybeSequence) {
			expandSequence(fakeAnimation, maybeSequence);
		} else {
			expandProperties(fakeAnimation, properties);
		}
		// tslint:disable-next-line:forin
		for (var _property in fakeAnimation.tweens) {
			// For every element, iterate through each property.
			var propertyTween = fakeAnimation.tweens[_property],
			    sequence = propertyTween.sequence,
			    pattern = sequence.pattern;
			var currentValue = "",
			    i = 0;
			count++;
			if (pattern) {
				var easingComplete = (propertyTween.easing || activeEasing)(percentComplete, 0, 1, _property);
				var best = 0;
				for (var j = 0; j < sequence.length - 1; j++) {
					if (sequence[j].percent < easingComplete) {
						best = j;
					}
				}
				var tweenFrom = sequence[best],
				    tweenTo = sequence[best + 1] || tweenFrom,
				    tweenPercent = (percentComplete - tweenFrom.percent) / (tweenTo.percent - tweenFrom.percent),
				    tweenEasing = tweenTo.easing || linearEasing;
				for (; i < pattern.length; i++) {
					var startValue = tweenFrom[i];
					if (startValue == null) {
						currentValue += pattern[i];
					} else {
						var endValue = tweenTo[i];
						if (startValue === endValue) {
							currentValue += startValue;
						} else {
							// All easings must deal with numbers except for our internal ones.
							var value = tweenEasing(tweenPercent, startValue, endValue, _property);
							currentValue += pattern[i] === true ? Math.round(value) : value;
						}
					}
				}
				result[_property] = currentValue;
			}
		}
		if (singleResult && count === 1) {
			for (var _property2 in result) {
				if (result.hasOwnProperty(_property2)) {
					return result[_property2];
				}
			}
		}
		return result;
	}
	registerAction(["tween", tweenAction], true);

	// Project
	/**
  * Converting from hex as it makes for a smaller file.
  */
	var colorValues = {
		aliceblue: 0xF0F8FF,
		antiquewhite: 0xFAEBD7,
		aqua: 0x00FFFF,
		aquamarine: 0x7FFFD4,
		azure: 0xF0FFFF,
		beige: 0xF5F5DC,
		bisque: 0xFFE4C4,
		black: 0x000000,
		blanchedalmond: 0xFFEBCD,
		blue: 0x0000FF,
		blueviolet: 0x8A2BE2,
		brown: 0xA52A2A,
		burlywood: 0xDEB887,
		cadetblue: 0x5F9EA0,
		chartreuse: 0x7FFF00,
		chocolate: 0xD2691E,
		coral: 0xFF7F50,
		cornflowerblue: 0x6495ED,
		cornsilk: 0xFFF8DC,
		crimson: 0xDC143C,
		cyan: 0x00FFFF,
		darkblue: 0x00008B,
		darkcyan: 0x008B8B,
		darkgoldenrod: 0xB8860B,
		darkgray: 0xA9A9A9,
		darkgrey: 0xA9A9A9,
		darkgreen: 0x006400,
		darkkhaki: 0xBDB76B,
		darkmagenta: 0x8B008B,
		darkolivegreen: 0x556B2F,
		darkorange: 0xFF8C00,
		darkorchid: 0x9932CC,
		darkred: 0x8B0000,
		darksalmon: 0xE9967A,
		darkseagreen: 0x8FBC8F,
		darkslateblue: 0x483D8B,
		darkslategray: 0x2F4F4F,
		darkslategrey: 0x2F4F4F,
		darkturquoise: 0x00CED1,
		darkviolet: 0x9400D3,
		deeppink: 0xFF1493,
		deepskyblue: 0x00BFFF,
		dimgray: 0x696969,
		dimgrey: 0x696969,
		dodgerblue: 0x1E90FF,
		firebrick: 0xB22222,
		floralwhite: 0xFFFAF0,
		forestgreen: 0x228B22,
		fuchsia: 0xFF00FF,
		gainsboro: 0xDCDCDC,
		ghostwhite: 0xF8F8FF,
		gold: 0xFFD700,
		goldenrod: 0xDAA520,
		gray: 0x808080,
		grey: 0x808080,
		green: 0x008000,
		greenyellow: 0xADFF2F,
		honeydew: 0xF0FFF0,
		hotpink: 0xFF69B4,
		indianred: 0xCD5C5C,
		indigo: 0x4B0082,
		ivory: 0xFFFFF0,
		khaki: 0xF0E68C,
		lavender: 0xE6E6FA,
		lavenderblush: 0xFFF0F5,
		lawngreen: 0x7CFC00,
		lemonchiffon: 0xFFFACD,
		lightblue: 0xADD8E6,
		lightcoral: 0xF08080,
		lightcyan: 0xE0FFFF,
		lightgoldenrodyellow: 0xFAFAD2,
		lightgray: 0xD3D3D3,
		lightgrey: 0xD3D3D3,
		lightgreen: 0x90EE90,
		lightpink: 0xFFB6C1,
		lightsalmon: 0xFFA07A,
		lightseagreen: 0x20B2AA,
		lightskyblue: 0x87CEFA,
		lightslategray: 0x778899,
		lightslategrey: 0x778899,
		lightsteelblue: 0xB0C4DE,
		lightyellow: 0xFFFFE0,
		lime: 0x00FF00,
		limegreen: 0x32CD32,
		linen: 0xFAF0E6,
		magenta: 0xFF00FF,
		maroon: 0x800000,
		mediumaquamarine: 0x66CDAA,
		mediumblue: 0x0000CD,
		mediumorchid: 0xBA55D3,
		mediumpurple: 0x9370DB,
		mediumseagreen: 0x3CB371,
		mediumslateblue: 0x7B68EE,
		mediumspringgreen: 0x00FA9A,
		mediumturquoise: 0x48D1CC,
		mediumvioletred: 0xC71585,
		midnightblue: 0x191970,
		mintcream: 0xF5FFFA,
		mistyrose: 0xFFE4E1,
		moccasin: 0xFFE4B5,
		navajowhite: 0xFFDEAD,
		navy: 0x000080,
		oldlace: 0xFDF5E6,
		olive: 0x808000,
		olivedrab: 0x6B8E23,
		orange: 0xFFA500,
		orangered: 0xFF4500,
		orchid: 0xDA70D6,
		palegoldenrod: 0xEEE8AA,
		palegreen: 0x98FB98,
		paleturquoise: 0xAFEEEE,
		palevioletred: 0xDB7093,
		papayawhip: 0xFFEFD5,
		peachpuff: 0xFFDAB9,
		peru: 0xCD853F,
		pink: 0xFFC0CB,
		plum: 0xDDA0DD,
		powderblue: 0xB0E0E6,
		purple: 0x800080,
		rebeccapurple: 0x663399,
		red: 0xFF0000,
		rosybrown: 0xBC8F8F,
		royalblue: 0x4169E1,
		saddlebrown: 0x8B4513,
		salmon: 0xFA8072,
		sandybrown: 0xF4A460,
		seagreen: 0x2E8B57,
		seashell: 0xFFF5EE,
		sienna: 0xA0522D,
		silver: 0xC0C0C0,
		skyblue: 0x87CEEB,
		slateblue: 0x6A5ACD,
		slategray: 0x708090,
		slategrey: 0x708090,
		snow: 0xFFFAFA,
		springgreen: 0x00FF7F,
		steelblue: 0x4682B4,
		tan: 0xD2B48C,
		teal: 0x008080,
		thistle: 0xD8BFD8,
		tomato: 0xFF6347,
		turquoise: 0x40E0D0,
		violet: 0xEE82EE,
		wheat: 0xF5DEB3,
		white: 0xFFFFFF,
		whitesmoke: 0xF5F5F5,
		yellow: 0xFFFF00,
		yellowgreen: 0x9ACD32
	};
	for (var name in colorValues) {
		if (colorValues.hasOwnProperty(name)) {
			var color = colorValues[name];
			ColorNames[name] = Math.floor(color / 65536) + "," + Math.floor(color / 256 % 256) + "," + color % 256;
		}
	}

	// Project
	function registerBackIn(name, amount) {
		registerEasing([name, function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return Math.pow(percentComplete, 2) * ((amount + 1) * percentComplete - amount) * (endValue - startValue);
		}]);
	}
	function registerBackOut(name, amount) {
		registerEasing([name, function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return (Math.pow(--percentComplete, 2) * ((amount + 1) * percentComplete + amount) + 1) * (endValue - startValue);
		}]);
	}
	function registerBackInOut(name, amount) {
		amount *= 1.525;
		registerEasing([name, function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			percentComplete *= 2;
			return (percentComplete < 1 ? Math.pow(percentComplete, 2) * ((amount + 1) * percentComplete - amount) : Math.pow(percentComplete - 2, 2) * ((amount + 1) * (percentComplete - 2) + amount) + 2) * 0.5 * (endValue - startValue);
		}]);
	}
	registerBackIn("easeInBack", 1.7);
	registerBackOut("easeOutBack", 1.7);
	registerBackInOut("easeInOutBack", 1.7);
	// TODO: Expose these as actions to register custom easings?

	// Project
	function easeOutBouncePercent(percentComplete) {
		if (percentComplete < 1 / 2.75) {
			return 7.5625 * percentComplete * percentComplete;
		}
		if (percentComplete < 2 / 2.75) {
			return 7.5625 * (percentComplete -= 1.5 / 2.75) * percentComplete + 0.75;
		}
		if (percentComplete < 2.5 / 2.75) {
			return 7.5625 * (percentComplete -= 2.25 / 2.75) * percentComplete + 0.9375;
		}
		return 7.5625 * (percentComplete -= 2.625 / 2.75) * percentComplete + 0.984375;
	}
	function easeInBouncePercent(percentComplete) {
		return 1 - easeOutBouncePercent(1 - percentComplete);
	}
	function easeInBounce(percentComplete, startValue, endValue) {
		if (percentComplete === 0) {
			return startValue;
		}
		if (percentComplete === 1) {
			return endValue;
		}
		return easeInBouncePercent(percentComplete) * (endValue - startValue);
	}
	function easeOutBounce(percentComplete, startValue, endValue) {
		if (percentComplete === 0) {
			return startValue;
		}
		if (percentComplete === 1) {
			return endValue;
		}
		return easeOutBouncePercent(percentComplete) * (endValue - startValue);
	}
	function easeInOutBounce(percentComplete, startValue, endValue) {
		if (percentComplete === 0) {
			return startValue;
		}
		if (percentComplete === 1) {
			return endValue;
		}
		return (percentComplete < 0.5 ? easeInBouncePercent(percentComplete * 2) * 0.5 : easeOutBouncePercent(percentComplete * 2 - 1) * 0.5 + 0.5) * (endValue - startValue);
	}
	registerEasing(["easeInBounce", easeInBounce]);
	registerEasing(["easeOutBounce", easeOutBounce]);
	registerEasing(["easeInOutBounce", easeInOutBounce]);

	// Project
	// Constants
	var PI2 = Math.PI * 2;
	function registerElasticIn(name, amplitude, period) {
		registerEasing([name, function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return -(amplitude * Math.pow(2, 10 * (percentComplete -= 1)) * Math.sin((percentComplete - period / PI2 * Math.asin(1 / amplitude)) * PI2 / period)) * (endValue - startValue);
		}]);
	}
	function registerElasticOut(name, amplitude, period) {
		registerEasing([name, function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return (amplitude * Math.pow(2, -10 * percentComplete) * Math.sin((percentComplete - period / PI2 * Math.asin(1 / amplitude)) * PI2 / period) + 1) * (endValue - startValue);
		}]);
	}
	function registerElasticInOut(name, amplitude, period) {
		registerEasing([name, function (percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			var s = period / PI2 * Math.asin(1 / amplitude);
			percentComplete = percentComplete * 2 - 1;
			return (percentComplete < 0 ? -0.5 * (amplitude * Math.pow(2, 10 * percentComplete) * Math.sin((percentComplete - s) * PI2 / period)) : amplitude * Math.pow(2, -10 * percentComplete) * Math.sin((percentComplete - s) * PI2 / period) * 0.5 + 1) * (endValue - startValue);
		}]);
	}
	registerElasticIn("easeInElastic", 1, 0.3);
	registerElasticOut("easeOutElastic", 1, 0.3);
	registerElasticInOut("easeInOutElastic", 1, 0.3 * 1.5);
	// TODO: Expose these as actions to register custom easings?

	// Project
	/**
  * Easing function that sets to the specified value immediately after the
  * animation starts.
  */
	function atStart(percentComplete, startValue, endValue) {
		return percentComplete === 0 ? startValue : endValue;
	}
	/**
  * Easing function that sets to the specified value while the animation is
  * running.
  */
	function during(percentComplete, startValue, endValue) {
		return percentComplete === 0 || percentComplete === 1 ? startValue : endValue;
	}
	/**
  * Easing function that sets to the specified value when the animation ends.
  */
	function atEnd(percentComplete, startValue, endValue) {
		return percentComplete === 1 ? endValue : startValue;
	}
	registerEasing(["at-start", atStart]);
	registerEasing(["during", during]);
	registerEasing(["at-end", atEnd]);

	// Project
	/**
  * Get/set the inner/outer dimension.
  */
	function getDimension(name, wantInner) {
		return function (element, propertyValue) {
			if (propertyValue === undefined) {
				return augmentDimension(element, name, wantInner) + "px";
			}
			setPropertyValue(element, name, parseFloat(propertyValue) - augmentDimension(element, name, wantInner) + "px");
		};
	}
	registerNormalization(["Element", "innerWidth", getDimension("width", true)]);
	registerNormalization(["Element", "innerHeight", getDimension("height", true)]);
	registerNormalization(["Element", "outerWidth", getDimension("width", false)]);
	registerNormalization(["Element", "outerHeight", getDimension("height", false)]);

	// Project
	// Constants
	var inlineRx = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,
	    listItemRx = /^(li)$/i,
	    tableRowRx = /^(tr)$/i,
	    tableRx = /^(table)$/i,
	    tableRowGroupRx = /^(tbody)$/i;
	function display(element, propertyValue) {
		var style = element.style;
		if (propertyValue === undefined) {
			return computePropertyValue(element, "display");
		}
		if (propertyValue === "auto") {
			var nodeName = element && element.nodeName,
			    data = Data(element);
			if (inlineRx.test(nodeName)) {
				propertyValue = "inline";
			} else if (listItemRx.test(nodeName)) {
				propertyValue = "list-item";
			} else if (tableRowRx.test(nodeName)) {
				propertyValue = "table-row";
			} else if (tableRx.test(nodeName)) {
				propertyValue = "table";
			} else if (tableRowGroupRx.test(nodeName)) {
				propertyValue = "table-row-group";
			} else {
				// Default to "block" when no match is found.
				propertyValue = "block";
			}
			// IMPORTANT: We need to do this as getPropertyValue bypasses the
			// Normalisation when it exists in the cache.
			data.cache["display"] = propertyValue;
		}
		style.display = propertyValue;
	}
	registerNormalization(["Element", "display", display]);

	// Project
	function clientWidth(element, propertyValue) {
		if (propertyValue == null) {
			return element.clientWidth + "px";
		}
	}
	function scrollWidth(element, propertyValue) {
		if (propertyValue == null) {
			return element.scrollWidth + "px";
		}
	}
	function clientHeight(element, propertyValue) {
		if (propertyValue == null) {
			return element.clientHeight + "px";
		}
	}
	function scrollHeight(element, propertyValue) {
		if (propertyValue == null) {
			return element.scrollHeight + "px";
		}
	}
	function scroll(direction, end) {
		return function (element, propertyValue) {
			if (propertyValue == null) {
				// Make sure we have these values cached.
				getPropertyValue(element, "client" + direction, null, true);
				getPropertyValue(element, "scroll" + direction, null, true);
				return element["scroll" + end] + "px";
			}
			var value = parseFloat(propertyValue),
			    unit = propertyValue.replace(String(value), "");
			switch (unit) {
				case "":
				case "px":
					element["scroll" + end] = value;
					break;
				case "%":
					var client = parseFloat(getPropertyValue(element, "client" + direction)),
					    scrollValue = parseFloat(getPropertyValue(element, "scroll" + direction));
					element["scroll" + end] = Math.max(0, scrollValue - client) * value / 100;
					break;
			}
		};
	}
	registerNormalization(["HTMLElement", "scroll", scroll("Height", "Top"), false]);
	registerNormalization(["HTMLElement", "scrollTop", scroll("Height", "Top"), false]);
	registerNormalization(["HTMLElement", "scrollLeft", scroll("Width", "Left"), false]);
	registerNormalization(["HTMLElement", "scrollWidth", scrollWidth]);
	registerNormalization(["HTMLElement", "clientWidth", clientWidth]);
	registerNormalization(["HTMLElement", "scrollHeight", scrollHeight]);
	registerNormalization(["HTMLElement", "clientHeight", clientHeight]);

	// Project
	/**
  * An RegExp pattern for the following list of css words using
  * http://kemio.com.ar/tools/lst-trie-re.php to generate:
  *
  * blockSize
  * borderBottomLeftRadius
  * borderBottomRightRadius
  * borderBottomWidth
  * borderImageOutset
  * borderImageWidth
  * borderLeftWidth
  * borderRadius
  * borderRightWidth
  * borderSpacing
  * borderTopLeftRadius
  * borderTopRightRadius
  * borderTopWidth
  * borderWidth
  * bottom
  * columnGap
  * columnRuleWidth
  * columnWidth
  * flexBasis
  * fontSize
  * gridColumnGap
  * gridGap
  * gridRowGap
  * height
  * inlineSize
  * left
  * letterSpacing
  * margin
  * marginBottom
  * marginLeft
  * marginRight
  * marginTop
  * maxBlockSize
  * maxHeight
  * maxInlineSize
  * maxWidth
  * minBlockSize
  * minHeight
  * minInlineSize
  * minWidth
  * objectPosition
  * outlineOffset
  * outlineWidth
  * padding
  * paddingBottom
  * paddingLeft
  * paddingRight
  * paddingTop
  * perspective
  * right
  * shapeMargin
  * strokeDashoffset
  * strokeWidth
  * textIndent
  * top
  * transformOrigin
  * width
  * wordSpacing
  */
	// tslint:disable-next-line:max-line-length
	var rxAddPx = /^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;
	/**
  * Return a Normalisation that can be used to set / get a prefixed style
  * property.
  */
	function getSetPrefixed(propertyName, unprefixed) {
		return function (element, propertyValue) {
			if (propertyValue === undefined) {
				return computePropertyValue(element, propertyName) || computePropertyValue(element, unprefixed);
			}
			element.style[propertyName] = element.style[unprefixed] = propertyValue;
		};
	}
	/**
  * Return a Normalisation that can be used to set / get a style property.
  */
	function getSetStyle(propertyName) {
		return function (element, propertyValue) {
			if (propertyValue === undefined) {
				return computePropertyValue(element, propertyName);
			}
			element.style[propertyName] = propertyValue;
		};
	}
	/**
  * Vendor prefixes. Chrome / Safari, Firefox, IE / Edge, Opera.
  */
	var rxVendors = /^(webkit|moz|ms|o)[A-Z]/,
	    prefixElement = State.prefixElement;
	if (prefixElement) {
		for (var propertyName in prefixElement.style) {
			if (rxVendors.test(propertyName)) {
				var unprefixed = propertyName.replace(/^[a-z]+([A-Z])/, function ($, letter) {
					return letter.toLowerCase();
				});
				{
					var addUnit = rxAddPx.test(unprefixed) ? "px" : undefined;
					registerNormalization(["Element", unprefixed, getSetPrefixed(propertyName, unprefixed), addUnit]);
				}
			} else if (!hasNormalization(["Element", propertyName])) {
				var _addUnit = rxAddPx.test(propertyName) ? "px" : undefined;
				registerNormalization(["Element", propertyName, getSetStyle(propertyName), _addUnit]);
			}
		}
	}

	// Project
	/**
  * Get/set an attribute.
  */
	function getAttribute(name) {
		return function (element, propertyValue) {
			if (propertyValue === undefined) {
				return element.getAttribute(name);
			}
			element.setAttribute(name, propertyValue);
		};
	}
	var base = document.createElement("div"),
	    rxSubtype = /^SVG(.*)Element$/,
	    rxElement = /Element$/;
	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_own_property_names___default()(window).forEach(function (property) {
		var subtype = rxSubtype.exec(property);
		if (subtype && subtype[1] !== "SVG") {
			// Don't do SVGSVGElement.
			try {
				var element = subtype[1] ? document.createElementNS("http://www.w3.org/2000/svg", (subtype[1] || "svg").toLowerCase()) : document.createElement("svg");
				// tslint:disable-next-line:forin
				for (var attribute in element) {
					// Although this isn't a tween without prototypes, we do
					// want to get hold of all attributes and not just own ones.
					var value = element[attribute];
					if (isString(attribute) && !(attribute[0] === "o" && attribute[1] === "n") && attribute !== attribute.toUpperCase() && !rxElement.test(attribute) && !(attribute in base) && !isFunction(value)) {
						// TODO: Should this all be set on the generic SVGElement, it would save space and time, but not as powerful
						registerNormalization([property, attribute, getAttribute(attribute)]);
					}
				}
			} catch (e) {
				console.error("VelocityJS: Error when trying to identify SVG attributes on " + property + ".", e);
			}
		}
	});

	// Project
	/**
  * Get/set the width or height.
  */
	function getDimension$1(name) {
		return function (element, propertyValue) {
			if (propertyValue === undefined) {
				// Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM.
				try {
					return element.getBBox()[name] + "px";
				} catch (e) {
					return "0px";
				}
			}
			element.setAttribute(name, propertyValue);
		};
	}
	registerNormalization(["SVGElement", "width", getDimension$1("width")]);
	registerNormalization(["SVGElement", "height", getDimension$1("height")]);

	// Project
	/**
  * A fake normalization used to allow the "tween" property easy access.
  */
	function getSetTween(element, propertyValue) {
		if (propertyValue === undefined) {
			return "";
		}
	}
	registerNormalization(["Element", "tween", getSetTween]);

	// Automatically generated
	var VERSION = "2.0.5";

	// Project
	var Velocity$$1 = Velocity$1;
	/**
  * These parts of Velocity absolutely must be included, even if they're unused!
  */
	var VelocityStatic;
	(function (VelocityStatic) {
		/**
   * Actions cannot be replaced if they are internal (hasOwnProperty is false
   * but they still exist). Otherwise they can be replaced by users.
   *
   * All external method calls should be using actions rather than sub-calls
   * of Velocity itself.
   */
		VelocityStatic.Actions = Actions;
		/**
   * Our known easing functions.
   */
		VelocityStatic.Easings = Easings;
		/**
   * The currently registered sequences.
   */
		VelocityStatic.Sequences = SequencesObject;
		/**
   * Current internal state of Velocity.
   */
		VelocityStatic.State = State; // tslint:disable-line:no-shadowed-variable
		/**
   * Velocity option defaults, which can be overriden by the user.
   */
		VelocityStatic.defaults = defaults$1;
		/**
   * Used to patch any object to allow Velocity chaining. In order to chain an
   * object must either be treatable as an array - with a <code>.length</code>
   * property, and each member a Node, or a Node directly.
   *
   * By default Velocity will try to patch <code>window</code>,
   * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
   * Nodes or lists of Nodes.
   */
		VelocityStatic.patch = patch;
		/**
   * Set to true, 1 or 2 (most verbose) to output debug info to console.
   */
		VelocityStatic.debug = false;
		/**
   * In mock mode, all animations are forced to complete immediately upon the
   * next rAF tick. If there are further animations queued then they will each
   * take one single frame in turn. Loops and repeats will be disabled while
   * <code>mock = true</code>.
   */
		VelocityStatic.mock = false;
		/**
   * Save our version number somewhere visible.
   */
		VelocityStatic.version = VERSION;
		/**
   * Added as a fallback for "import {Velocity} from 'velocity-animate';".
   */
		VelocityStatic.Velocity = Velocity$1; // tslint:disable-line:no-shadowed-variable
	})(VelocityStatic || (VelocityStatic = {}));
	/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
	var IE = function () {
		if (document.documentMode) {
			return document.documentMode;
		} else {
			for (var i = 7; i > 4; i--) {
				var div = document.createElement("div");
				div.innerHTML = "<!" + "--" + "[if IE " + i + "]><span></span><![endif]-->";
				if (div.getElementsByTagName("span").length) {
					div = null;
					return i;
				}
			}
		}
		return undefined;
	}();
	/******************
  Unsupported
  ******************/
	if (IE <= 8) {
		throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
	}
	/******************
  Frameworks
  ******************/
	if (window) {
		/*
       * Both jQuery and Zepto allow their $.fn object to be extended to allow
       * wrapped elements to be subjected to plugin calls. If either framework is
       * loaded, register a "velocity" extension pointing to Velocity's core
       * animate() method. Velocity also registers itself onto a global container
       * (window.jQuery || window.Zepto || window) so that certain features are
       * accessible beyond just a per-element scope. Accordingly, Velocity can
       * both act on wrapped DOM elements and stand alone for targeting raw DOM
       * elements.
       */
		var jQuery = window.jQuery,
		    Zepto = window.Zepto;
		patch(window, true);
		patch(Element && Element.prototype);
		patch(NodeList && NodeList.prototype);
		patch(HTMLCollection && HTMLCollection.prototype);
		patch(jQuery, true);
		patch(jQuery && jQuery.fn);
		patch(Zepto, true);
		patch(Zepto && Zepto.fn);
	}
	// Make sure that the values within Velocity are read-only and upatchable.

	var _loop = function _loop(property) {
		if (VelocityStatic.hasOwnProperty(property)) {
			switch (typeof property === "undefined" ? "undefined" : _typeof(property)) {
				case "number":
				case "boolean":
					defineProperty$1(Velocity$$1, property, {
						get: function get$$1() {
							return VelocityStatic[property];
						},
						set: function set$$1(value) {
							VelocityStatic[property] = value;
						}
					}, true);
					break;
				default:
					defineProperty$1(Velocity$$1, property, VelocityStatic[property], true);
					break;
			}
		}
	};

	for (var property in VelocityStatic) {
		_loop(property);
	}
	__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_freeze___default()(Velocity$$1);

	// Project
	var rxPercents = /(\d*\.\d+|\d+\.?|from|to)/g;
	function expandSequence(animation, sequence) {
		var tweens = animation.tweens = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_create___default()(null),
		    element = animation.element;
		for (var propertyName in sequence.tweens) {
			if (sequence.tweens.hasOwnProperty(propertyName)) {
				var fn = getNormalization(element, propertyName);
				if (!fn && propertyName !== "tween") {
					if (Velocity$$1.debug) {
						console.log("Skipping [" + propertyName + "] due to a lack of browser support.");
					}
					continue;
				}
				tweens[propertyName] = {
					fn: fn,
					sequence: sequence.tweens[propertyName]
				};
			}
		}
	}
	/**
  * Used to register a sequence. This should never be called by users
  * directly, instead it should be called via an action:<br/>
  * <code>Velocity("registerSequence", ""name", VelocitySequence);</code>
  */
	function registerSequence(args) {
		if (isPlainObject(args[0])) {
			for (var name in args[0]) {
				if (args[0].hasOwnProperty(name)) {
					registerSequence([name, args[0][name]]);
				}
			}
		} else if (isString(args[0])) {
			var _name = args[0],
			    sequence = args[1];
			if (!isString(_name)) {
				console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:", _name);
			} else if (!isPlainObject(sequence)) {
				console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:", _name, sequence);
			} else {
				if (SequencesObject[_name]) {
					console.warn("VelocityJS: Replacing named sequence:", _name);
				}
				var percents = {},
				    steps = new Array(100),
				    properties = [],
				    sequenceList = SequencesObject[_name] = {},
				    duration = validateDuration(sequence.duration);
				sequenceList.tweens = {};
				if (isNumber(duration)) {
					sequenceList.duration = duration;
				}
				for (var part in sequence) {
					if (sequence.hasOwnProperty(part)) {
						var keys = String(part).match(rxPercents);
						if (keys) {
							var _iteratorNormalCompletion = true;
							var _didIteratorError = false;
							var _iteratorError = undefined;

							try {
								for (var _iterator = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var key = _step.value;

									var percent = key === "from" ? 0 : key === "to" ? 100 : parseFloat(key);
									if (percent < 0 || percent > 100) {
										console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):", _name, percent);
									} else if (isNaN(percent)) {
										console.warn("VelocityJS: Trying to use an invalid number as a percentage:", _name, part, key);
									} else {
										if (!percents[String(percent)]) {
											percents[String(percent)] = [];
										}
										percents[String(percent)].push(part);
										for (var property in sequence[part]) {
											if (!properties.includes(property)) {
												properties.push(property);
											}
										}
									}
								}
							} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion && _iterator.return) {
										_iterator.return();
									}
								} finally {
									if (_didIteratorError) {
										throw _iteratorError;
									}
								}
							}
						}
					}
				}
				var orderedPercents = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(percents).sort(function (a, b) {
					var a1 = parseFloat(a),
					    b1 = parseFloat(b);
					return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
				});
				orderedPercents.forEach(function (key) {
					steps.push.apply(percents[key]);
				});
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(properties), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _property = _step2.value;

						var parts = [],
						    propertyName = camelCase(_property);
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(orderedPercents), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var _key = _step3.value;
								var _iteratorNormalCompletion6 = true;
								var _didIteratorError6 = false;
								var _iteratorError6 = undefined;

								try {
									for (var _iterator6 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(percents[_key]), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
										var _value = _step6.value;

										var stepProperties = sequence[_value];
										if (stepProperties[propertyName]) {
											parts.push(isString(stepProperties[propertyName]) ? stepProperties[propertyName] : stepProperties[propertyName][0]);
										}
									}
								} catch (err) {
									_didIteratorError6 = true;
									_iteratorError6 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion6 && _iterator6.return) {
											_iterator6.return();
										}
									} finally {
										if (_didIteratorError6) {
											throw _iteratorError6;
										}
									}
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						if (parts.length) {
							var realSequence = findPattern(parts, propertyName);
							var index = 0;
							if (realSequence) {
								var _iteratorNormalCompletion4 = true;
								var _didIteratorError4 = false;
								var _iteratorError4 = undefined;

								try {
									for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(orderedPercents), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
										var _key2 = _step4.value;
										var _iteratorNormalCompletion5 = true;
										var _didIteratorError5 = false;
										var _iteratorError5 = undefined;

										try {
											for (var _iterator5 = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_get_iterator___default()(percents[_key2]), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
												var value = _step5.value;

												var originalProperty = sequence[value][propertyName];
												if (originalProperty) {
													if (Array.isArray(originalProperty) && originalProperty.length > 1 && (isString(originalProperty[1]) || Array.isArray(originalProperty[1]))) {
														realSequence[index].easing = validateEasing(originalProperty[1], sequenceList.duration || DEFAULT_DURATION);
													}
													realSequence[index++].percent = parseFloat(_key2) / 100;
												}
											}
										} catch (err) {
											_didIteratorError5 = true;
											_iteratorError5 = err;
										} finally {
											try {
												if (!_iteratorNormalCompletion5 && _iterator5.return) {
													_iterator5.return();
												}
											} finally {
												if (_didIteratorError5) {
													throw _iteratorError5;
												}
											}
										}
									}
								} catch (err) {
									_didIteratorError4 = true;
									_iteratorError4 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion4 && _iterator4.return) {
											_iterator4.return();
										}
									} finally {
										if (_didIteratorError4) {
											throw _iteratorError4;
										}
									}
								}

								sequenceList.tweens[propertyName] = realSequence;
							}
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}
	}
	registerAction(["registerSequence", registerSequence], true);

	// Project
	var globalPromise = void 0;
	try {
		globalPromise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a;
	} catch ( /**/_a) {/**/}
	var noPromiseOption = ", if that is deliberate then pass `promiseRejectEmpty:false` as an option";
	/**
  * Patch a VelocityResult with a Promise.
  */
	function patchPromise(promiseObject, result) {
		defineProperty$1(result, "promise", promiseObject);
		defineProperty$1(result, "then", promiseObject.then.bind(promiseObject));
		defineProperty$1(result, "catch", promiseObject.catch.bind(promiseObject));
		if (promiseObject.finally) {
			// Semi-standard
			defineProperty$1(result, "finally", promiseObject.finally.bind(promiseObject));
		}
	}
	/* tslint:enable:max-line-length */
	function Velocity$1() {
		for (var _len = arguments.length, argsList = Array(_len), _key = 0; _key < _len; _key++) {
			argsList[_key] = arguments[_key];
		}

		var
		/**
   * A shortcut to the default options.
   */
		defaults$$1 = defaults$1,


		/**
   * Shortcut to arguments for file size.
   */
		args = arguments,


		/**
   * Cache of the first argument - this is used often enough to be saved.
   */
		args0 = args[0],


		/**
   * To allow for expressive CoffeeScript code, Velocity supports an
   * alternative syntax in which "elements" (or "e"), "properties" (or
   * "p"), and "options" (or "o") objects are defined on a container
   * object that's passed in as Velocity's sole argument.
   *
   * Note: Some browsers automatically populate arguments with a
   * "properties" object. We detect it by checking for its default
   * "names" property.
   */
		// TODO: Confirm which browsers - if <=IE8 the we can drop completely
		syntacticSugar = isPlainObject(args0) && (args0.p || isPlainObject(args0.properties) && !args0.properties.names || isString(args0.properties));
		var
		/**
   *  When Velocity is called via the utility function (Velocity()),
   * elements are explicitly passed in as the first parameter. Thus,
   * argument positioning varies.
   */
		argumentIndex = 0,


		/**
   * The list of elements, extended with Promise and Velocity.
   */
		elements = void 0,


		/**
   * The properties being animated. This can be a string, in which case it
   * is either a function for these elements, or it is a "named" animation
   * sequence to use instead. Named sequences start with either "callout."
   * or "transition.". When used as a callout the values will be reset
   * after finishing. When used as a transtition then there is no special
   * handling after finishing.
   */
		propertiesMap = void 0,


		/**
   * Options supplied, this will be mapped and validated into
   * <code>options</code>.
   */
		optionsMap = void 0,


		/**
   * If called via a chain then this contains the <b>last</b> calls
   * animations. If this does not have a value then any access to the
   * element's animations needs to be to the currently-running ones.
   */
		animations = void 0,


		/**
   * The promise that is returned.
   */
		promise = void 0,


		// Used when the animation is finished
		resolver = void 0,


		// Used when there was an issue with one or more of the Velocity arguments
		rejecter = void 0;
		//console.log(`Velocity`, _arguments)
		// First get the elements, and the animations connected to the last call if
		// this is chained.
		// TODO: Clean this up a bit
		// TODO: Throw error if the chain is called with elements as the first argument. isVelocityResult(this) && ( (isNode(arg0) || isWrapped(arg0)) && arg0 == this)
		if (isNode(this)) {
			// This is from a chain such as document.getElementById("").velocity(...)
			elements = [this];
		} else if (isWrapped(this)) {
			// This might be a chain from something else, but if chained from a
			// previous Velocity() call then grab the animations it's related to.
			elements = cloneArray(this);
			if (isVelocityResult(this)) {
				animations = this.velocity.animations;
			}
		} else if (syntacticSugar) {
			elements = cloneArray(args0.elements || args0.e);
			argumentIndex++;
		} else if (isNode(args0)) {
			elements = cloneArray([args0]);
			argumentIndex++;
		} else if (isWrapped(args0)) {
			elements = cloneArray(args0);
			argumentIndex++;
		}
		// Allow elements to be chained.
		if (elements) {
			defineProperty$1(elements, "velocity", Velocity$1.bind(elements));
			if (animations) {
				defineProperty$1(elements.velocity, "animations", animations);
			}
		}
		// Next get the propertiesMap and options.
		if (syntacticSugar) {
			propertiesMap = getValue(args0.properties, args0.p);
		} else {
			// TODO: Should be possible to call Velocity("pauseAll") - currently not possible
			propertiesMap = args[argumentIndex++];
		}
		// Get any options map passed in as arguments first, expand any direct
		// options if possible.
		var isReverse = propertiesMap === "reverse",
		    isAction = !isReverse && isString(propertiesMap),
		    maybeSequence = isAction && SequencesObject[propertiesMap],
		    opts = syntacticSugar ? getValue(args0.options, args0.o) : args[argumentIndex];
		if (isPlainObject(opts)) {
			optionsMap = opts;
		}
		// Create the promise if supported and wanted.
		if (globalPromise && getValue(optionsMap && optionsMap.promise, defaults$$1.promise)) {
			promise = new globalPromise(function (resolve, reject) {
				rejecter = reject;
				// IMPORTANT:
				// If a resolver tries to run on a Promise then it will wait until
				// that Promise resolves - but in this case we're running on our own
				// Promise, so need to make sure it's not seen as one. Removing
				// these values for the duration of the resolve.
				// Due to being an async call, they should be back to "normal"
				// before the <code>.then()</code> function gets called.
				resolver = function resolver(result) {
					if (isVelocityResult(result) && result.promise) {
						delete result.then;
						delete result.catch;
						delete result.finally;
						resolve(result);
						patchPromise(result.promise, result);
					} else {
						resolve(result);
					}
				};
			});
			if (elements) {
				patchPromise(promise, elements);
			}
		}
		if (promise) {
			var optionPromiseRejectEmpty = optionsMap && optionsMap.promiseRejectEmpty,
			    promiseRejectEmpty = getValue(optionPromiseRejectEmpty, defaults$$1.promiseRejectEmpty);
			if (!elements && !isAction) {
				if (promiseRejectEmpty) {
					rejecter("Velocity: No elements supplied" + (isBoolean(optionPromiseRejectEmpty) ? "" : noPromiseOption) + ". Aborting.");
				} else {
					resolver();
				}
			} else if (!propertiesMap) {
				if (promiseRejectEmpty) {
					rejecter("Velocity: No properties supplied" + (isBoolean(optionPromiseRejectEmpty) ? "" : noPromiseOption) + ". Aborting.");
				} else {
					resolver();
				}
			}
		}
		if (!elements && !isAction || !propertiesMap) {
			return promise;
		}
		// NOTE: Can't use isAction here due to type inference - there are callbacks
		// between so the type isn't considered safe.
		if (isAction) {
			var actionArgs = [],
			    promiseHandler = promise && {
				_promise: promise,
				_resolver: resolver,
				_rejecter: rejecter
			};
			while (argumentIndex < args.length) {
				actionArgs.push(args[argumentIndex++]);
			}
			// Velocity's behavior is categorized into "actions". If a string is
			// passed in instead of a propertiesMap then that will call a function
			// to do something special to the animation linked.
			// There is one special case - "reverse" - which is handled differently,
			// by being stored on the animation and then expanded when the animation
			// starts.
			var action = propertiesMap.replace(/\..*$/, ""),
			    callback = Actions[action];
			if (callback) {
				var result = callback(actionArgs, elements, promiseHandler, propertiesMap);
				if (result !== undefined) {
					return result;
				}
				return elements || promise;
			} else if (!maybeSequence) {
				console.error("VelocityJS: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.");
				return;
			}
		}
		var hasValidDuration = void 0;
		if (isPlainObject(propertiesMap) || isReverse || maybeSequence) {
			/**
    * The options for this set of animations.
    */
			var options = {};
			var isSync = defaults$$1.sync;
			// Private options first - set as non-enumerable, and starting with an
			// underscore so we can filter them out.
			if (promise) {
				defineProperty$1(options, "_promise", promise);
				defineProperty$1(options, "_rejecter", rejecter);
				defineProperty$1(options, "_resolver", resolver);
			}
			defineProperty$1(options, "_ready", 0);
			defineProperty$1(options, "_started", 0);
			defineProperty$1(options, "_completed", 0);
			defineProperty$1(options, "_total", 0);
			// Now check the optionsMap
			if (isPlainObject(optionsMap)) {
				var validDuration = validateDuration(optionsMap.duration);
				hasValidDuration = validDuration !== undefined;
				options.duration = getValue(validDuration, defaults$$1.duration);
				options.delay = getValue(validateDelay(optionsMap.delay), defaults$$1.delay);
				// Need the extra fallback here in case it supplies an invalid
				// easing that we need to overrride with the default.
				options.easing = validateEasing(getValue(optionsMap.easing, defaults$$1.easing), options.duration) || validateEasing(defaults$$1.easing, options.duration);
				options.loop = getValue(validateLoop(optionsMap.loop), defaults$$1.loop);
				options.repeat = options.repeatAgain = getValue(validateRepeat(optionsMap.repeat), defaults$$1.repeat);
				if (optionsMap.speed != null) {
					options.speed = getValue(validateSpeed(optionsMap.speed), 1);
				}
				if (isBoolean(optionsMap.promise)) {
					options.promise = optionsMap.promise;
				}
				options.queue = getValue(validateQueue(optionsMap.queue), defaults$$1.queue);
				if (optionsMap.mobileHA && !State.isGingerbread) {
					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
                   on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: velocity-animate/#mobileHA. */
					options.mobileHA = true;
				}
				if (optionsMap.drag === true) {
					options.drag = true;
				}
				if (isNumber(optionsMap.stagger) || isFunction(optionsMap.stagger)) {
					options.stagger = optionsMap.stagger;
				}
				if (!isReverse) {
					if (optionsMap["display"] != null) {
						propertiesMap.display = optionsMap["display"];
						console.error("Deprecated \"options.display\" used, this is now a property:", optionsMap["display"]);
					}
					if (optionsMap["visibility"] != null) {
						propertiesMap.visibility = optionsMap["visibility"];
						console.error("Deprecated \"options.visibility\" used, this is now a property:", optionsMap["visibility"]);
					}
				}
				// TODO: Allow functional options for different options per element
				var optionsBegin = validateBegin(optionsMap.begin),
				    optionsComplete = validateComplete(optionsMap.complete),
				    optionsProgress = validateProgress(optionsMap.progress),
				    optionsSync = validateSync(optionsMap.sync);
				if (optionsBegin != null) {
					options.begin = optionsBegin;
				}
				if (optionsComplete != null) {
					options.complete = optionsComplete;
				}
				if (optionsProgress != null) {
					options.progress = optionsProgress;
				}
				if (optionsSync != null) {
					isSync = optionsSync;
				}
			} else if (!syntacticSugar) {
				// Expand any direct options if possible.
				var offset = 0;
				options.duration = validateDuration(args[argumentIndex], true);
				if (options.duration === undefined) {
					options.duration = defaults$$1.duration;
				} else {
					hasValidDuration = true;
					offset++;
				}
				if (!isFunction(args[argumentIndex + offset])) {
					// Despite coming before Complete, we can't pass a fn easing
					var easing = validateEasing(args[argumentIndex + offset], getValue(options && validateDuration(options.duration), defaults$$1.duration), true);
					if (easing !== undefined) {
						offset++;
						options.easing = easing;
					}
				}
				var complete = validateComplete(args[argumentIndex + offset], true);
				if (complete !== undefined) {
					options.complete = complete;
				}
				options.delay = defaults$$1.delay;
				options.loop = defaults$$1.loop;
				options.repeat = options.repeatAgain = defaults$$1.repeat;
			}
			if (isReverse && options.queue === false) {
				throw new Error("VelocityJS: Cannot reverse a queue:false animation.");
			}
			if (!hasValidDuration && maybeSequence && maybeSequence.duration) {
				options.duration = maybeSequence.duration;
			}
			// When a set of elements is targeted by a Velocity call, the set is
			// broken up and each element has the current Velocity call individually
			// queued onto it. In this way, each element's existing queue is
			// respected; some elements may already be animating and accordingly
			// should not have this current Velocity call triggered immediately
			// unless the sync:true option is used.
			var rootAnimation = {
				options: options,
				elements: elements,
				_prev: undefined,
				_next: undefined,
				_flags: isSync ? 32 /* SYNC */ : 0,
				percentComplete: 0,
				ellapsedTime: 0,
				timeStart: 0
			};
			animations = [];
			for (var index = 0; index < elements.length; index++) {
				var element = elements[index];
				var flags = 0;
				if (isNode(element)) {
					// TODO: This needs to check for valid animation targets, not just Elements
					if (isReverse) {
						var lastAnimation = Data(element).lastAnimationList[options.queue];
						propertiesMap = lastAnimation && lastAnimation.tweens;
						if (!propertiesMap) {
							console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:", element);
							continue;
						}
						flags |= 64 /* REVERSE */ & ~(lastAnimation._flags & 64 /* REVERSE */); // tslint:disable-line:no-bitwise
					}
					var animation = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, rootAnimation, { element: element, _flags: rootAnimation._flags | flags });
					options._total++;
					animations.push(animation);
					if (options.stagger) {
						if (isFunction(options.stagger)) {
							var num = optionCallback(options.stagger, element, index, elements.length, elements, "stagger");
							if (isNumber(num)) {
								animation.delay = options.delay + num;
							}
						} else {
							animation.delay = options.delay + options.stagger * index;
						}
					}
					if (options.drag) {
						animation.duration = options.duration - options.duration * Math.max(1 - (index + 1) / elements.length, 0.75);
					}
					if (maybeSequence) {
						expandSequence(animation, maybeSequence);
					} else if (isReverse) {
						// In this case we're using the previous animation, so
						// it will be expanded correctly when that one runs.
						animation.tweens = propertiesMap;
					} else {
						animation.tweens = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_create___default()(null);
						expandProperties(animation, propertiesMap);
					}
					queue$1(element, animation, options.queue);
				}
			}
			if (State.isTicking === false) {
				// If the animation tick isn't running, start it. (Velocity shuts it
				// off when there are no active calls to process.)
				tick(false);
			}
			if (animations) {
				defineProperty$1(elements.velocity, "animations", animations);
			}
		}
		/***************
   Chaining
   ***************/
		/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
		return elements || promise;
	}
	/**
  * Call an option callback in a try/catch block and report an error if needed.
  */
	function optionCallback(fn, element, index, length, elements, option) {
		try {
			return fn.call(element, index, length, elements, option);
		} catch (e) {
			console.error("VelocityJS: Exception when calling '" + option + "' callback:", e);
		}
	}

	// Project
	/**
  * Used to patch any object to allow Velocity chaining. In order to chain an
  * object must either be treatable as an array - with a <code>.length</code>
  * property, and each member a Node, or a Node directly.
  *
  * By default Velocity will try to patch <code>window</code>,
  * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
  * Nodes or lists of Nodes.
  */
	function patch(proto, global) {
		try {
			defineProperty$1(proto, (global ? "V" : "v") + "elocity", Velocity$1);
		} catch (e) {
			console.warn("VelocityJS: Error when trying to add prototype.", e);
		}
	}

	// Project
	var Velocity$2 = Velocity$1;
	/**
  * These parts of Velocity absolutely must be included, even if they're unused!
  */
	var VelocityStatic$1;
	(function (VelocityStatic) {
		/**
   * Actions cannot be replaced if they are internal (hasOwnProperty is false
   * but they still exist). Otherwise they can be replaced by users.
   *
   * All external method calls should be using actions rather than sub-calls
   * of Velocity itself.
   */
		VelocityStatic.Actions = Actions;
		/**
   * Our known easing functions.
   */
		VelocityStatic.Easings = Easings;
		/**
   * The currently registered sequences.
   */
		VelocityStatic.Sequences = SequencesObject;
		/**
   * Current internal state of Velocity.
   */
		VelocityStatic.State = State; // tslint:disable-line:no-shadowed-variable
		/**
   * Velocity option defaults, which can be overriden by the user.
   */
		VelocityStatic.defaults = defaults$1;
		/**
   * Used to patch any object to allow Velocity chaining. In order to chain an
   * object must either be treatable as an array - with a <code>.length</code>
   * property, and each member a Node, or a Node directly.
   *
   * By default Velocity will try to patch <code>window</code>,
   * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
   * Nodes or lists of Nodes.
   */
		VelocityStatic.patch = patch;
		/**
   * Set to true, 1 or 2 (most verbose) to output debug info to console.
   */
		VelocityStatic.debug = false;
		/**
   * In mock mode, all animations are forced to complete immediately upon the
   * next rAF tick. If there are further animations queued then they will each
   * take one single frame in turn. Loops and repeats will be disabled while
   * <code>mock = true</code>.
   */
		VelocityStatic.mock = false;
		/**
   * Save our version number somewhere visible.
   */
		VelocityStatic.version = VERSION;
		/**
   * Added as a fallback for "import {Velocity} from 'velocity-animate';".
   */
		VelocityStatic.Velocity = Velocity$1; // tslint:disable-line:no-shadowed-variable
	})(VelocityStatic$1 || (VelocityStatic$1 = {}));
	/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
	var IE$1 = function () {
		if (document.documentMode) {
			return document.documentMode;
		} else {
			for (var i = 7; i > 4; i--) {
				var div = document.createElement("div");
				div.innerHTML = "<!" + "--" + "[if IE " + i + "]><span></span><![endif]-->";
				if (div.getElementsByTagName("span").length) {
					div = null;
					return i;
				}
			}
		}
		return undefined;
	}();
	/******************
  Unsupported
  ******************/
	if (IE$1 <= 8) {
		throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
	}
	/******************
  Frameworks
  ******************/
	if (window) {
		/*
       * Both jQuery and Zepto allow their $.fn object to be extended to allow
       * wrapped elements to be subjected to plugin calls. If either framework is
       * loaded, register a "velocity" extension pointing to Velocity's core
       * animate() method. Velocity also registers itself onto a global container
       * (window.jQuery || window.Zepto || window) so that certain features are
       * accessible beyond just a per-element scope. Accordingly, Velocity can
       * both act on wrapped DOM elements and stand alone for targeting raw DOM
       * elements.
       */
		var jQuery$1 = window.jQuery,
		    Zepto$1 = window.Zepto;
		patch(window, true);
		patch(Element && Element.prototype);
		patch(NodeList && NodeList.prototype);
		patch(HTMLCollection && HTMLCollection.prototype);
		patch(jQuery$1, true);
		patch(jQuery$1 && jQuery$1.fn);
		patch(Zepto$1, true);
		patch(Zepto$1 && Zepto$1.fn);
	}
	// Make sure that the values within Velocity are read-only and upatchable.

	var _loop$1 = function _loop(property) {
		if (VelocityStatic$1.hasOwnProperty(property)) {
			switch (typeof property === "undefined" ? "undefined" : _typeof(property)) {
				case "number":
				case "boolean":
					defineProperty$1(Velocity$2, property, {
						get: function get$$1() {
							return VelocityStatic$1[property];
						},
						set: function set$$1(value) {
							VelocityStatic$1[property] = value;
						}
					}, true);
					break;
				default:
					defineProperty$1(Velocity$2, property, VelocityStatic$1[property], true);
					break;
			}
		}
	};

	for (var property$1 in VelocityStatic$1) {
		_loop$1(property$1);
	}
	__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_freeze___default()(Velocity$2);

	return Velocity$2;
});
//# sourceMappingURL=velocity.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(131)(module)))

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(59)('getOwnPropertyNames', function () {
  return __webpack_require__(75).f;
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(34);
__webpack_require__(40);
__webpack_require__(260);
__webpack_require__(264);
__webpack_require__(266);
__webpack_require__(267);
module.exports = __webpack_require__(0).Map;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(141);
var validate = __webpack_require__(133);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(142)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(18);
var IObject = __webpack_require__(48);
var toObject = __webpack_require__(20);
var toLength = __webpack_require__(42);
var asc = __webpack_require__(262);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(263);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var isArray = __webpack_require__(74);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(4);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(143)('Map') });


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(65);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(144)('Map');


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(145)('Map');


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(269), __esModule: true };

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(34);
__webpack_require__(40);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
module.exports = __webpack_require__(0).Set;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(141);
var validate = __webpack_require__(133);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(142)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(4);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(143)('Set') });


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(144)('Set');


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(145)('Set');


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(275), __esModule: true };

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(276);
module.exports = __webpack_require__(0).Object.freeze;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(7);
var meta = __webpack_require__(55).onFreeze;

__webpack_require__(59)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ })
/******/ ]);