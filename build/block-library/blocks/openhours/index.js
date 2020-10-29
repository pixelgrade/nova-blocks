this["novablocks"] = this["novablocks"] || {}; this["novablocks"]["./build/block-library/blocks/openhours/index"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/block-library/build/blocks/openhours/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./packages/block-library/build/blocks/openhours/HoursParser.js":
/*!**********************************************************************!*\
  !*** ./packages/block-library/build/blocks/openhours/HoursParser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseContent = void 0;
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

exports.parseContent = parseContent;


/***/ }),

/***/ "./packages/block-library/build/blocks/openhours/attributes.json":
/*!***********************************************************************!*\
  !*** ./packages/block-library/build/blocks/openhours/attributes.json ***!
  \***********************************************************************/
/*! exports provided: text, parsedText, timeFormat, openHoursStyle, openNote, closedNote, closedLabel, compressOpeningHours, hideClosedDays, useShortName, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"text\":{\"type\":\"string\",\"default\":\"Monday 10am - 3pm\\nTuesday to Friday 9 - 17\\nSat noon - 2am\"},\"parsedText\":{\"type\":\"string\",\"default\":\"{\\\"timeframes\\\":[{\\\"days\\\":[1],\\\"open\\\":[{\\\"start\\\":\\\"1000\\\",\\\"end\\\":\\\"2200\\\"}]},{\\\"days\\\":[2,3,4,5],\\\"open\\\":[{\\\"start\\\":\\\"0900\\\",\\\"end\\\":\\\"1700\\\"}]},{\\\"days\\\":[6],\\\"open\\\":[{\\\"start\\\":\\\"1200\\\",\\\"end\\\":\\\"+0200\\\"}]}]}\"},\"timeFormat\":{\"type\":\"string\",\"default\":\"g:ia\"},\"openHoursStyle\":{\"type\":\"string\",\"default\":\"overview\"},\"openNote\":{\"type\":\"string\",\"default\":\"It's {time} and we're Open until {today-closing-time}\"},\"closedNote\":{\"type\":\"string\",\"default\":\"We're closed until {next-opening-day} at {next-opening-time}\"},\"closedLabel\":{\"type\":\"string\",\"default\":\"Closed\"},\"compressOpeningHours\":{\"type\":\"boolean\",\"default\":false},\"hideClosedDays\":{\"type\":\"boolean\",\"default\":false},\"useShortName\":{\"type\":\"boolean\",\"default\":false}}");

/***/ }),

/***/ "./packages/block-library/build/blocks/openhours/edit.js":
/*!***************************************************************!*\
  !*** ./packages/block-library/build/blocks/openhours/edit.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _preview = _interopRequireDefault(__webpack_require__(/*! ./preview */ "./packages/block-library/build/blocks/openhours/preview.js"));

var _inspectorControls = _interopRequireDefault(__webpack_require__(/*! ./inspector-controls */ "./packages/block-library/build/blocks/openhours/inspector-controls.js"));

/**
 * WordPress dependencies
 */
var OpenHours = function OpenHours(props) {
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_inspectorControls.default, props), (0, _element.createElement)(_preview.default, props));
};

var _default = OpenHours;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/openhours/index.js":
/*!****************************************************************!*\
  !*** ./packages/block-library/build/blocks/openhours/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var icons = _interopRequireWildcard(__webpack_require__(/*! @novablocks/icons */ "@novablocks/icons"));

var _edit = _interopRequireDefault(__webpack_require__(/*! ./edit */ "./packages/block-library/build/blocks/openhours/edit.js"));

var _attributes = _interopRequireDefault(__webpack_require__(/*! ./attributes */ "./packages/block-library/build/blocks/openhours/attributes.json"));

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _blocks = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
(0, _blocks.registerBlockType)('novablocks/openhours', {
  title: (0, _i18n.__)('OpenHours', '__plugin_txtd'),
  description: (0, _i18n.__)('Display Opening Hours for any kind of venue.', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: icons.openhours,
  attributes: _attributes.default,
  edit: _edit.default,
  save: function save() {}
});


/***/ }),

/***/ "./packages/block-library/build/blocks/openhours/inspector-controls.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-library/build/blocks/openhours/inspector-controls.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _components = __webpack_require__(/*! @novablocks/components */ "@novablocks/components");

var _i18n = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");

var _HoursParser = __webpack_require__(/*! ./HoursParser */ "./packages/block-library/build/blocks/openhours/HoursParser.js");

var _components2 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * WordPress dependencies
 */
var OpenHoursInspectorControls = function OpenHoursInspectorControls(props) {
  var _props$attributes = props.attributes,
      openHoursStyle = _props$attributes.openHoursStyle,
      text = _props$attributes.text,
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
    var _useState = (0, _element.useState)(false),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        isOpen = _useState2[0],
        setOpen = _useState2[1];

    var openModal = function openModal() {
      return setOpen(true);
    };

    var closeModal = function closeModal() {
      return setOpen(false);
    };

    return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components2.Button, {
      className: 'novablocks__label',
      isLink: true,
      onClick: openModal
    }, "See available tags"), isOpen && (0, _element.createElement)(_components2.Modal, {
      onRequestClose: closeModal,
      shouldCloseOnEsc: true,
      shouldCloseOnClickOutside: true,
      className: "novablocks-openhours__modal"
    }));
  };

  var timeFormattingInstructions = (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components2.ExternalLink, {
    href: timeFormattingUrl
  }, (0, _i18n.__)('Learn more about time formatting', '__plugin_txtd')));
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Setup')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.TextareaControl, {
    key: 'openhours-schedule-controls',
    label: (0, _i18n.__)('Write your opening hours in a simple human readable format'),
    value: text,
    className: "original-text",
    onChange: function onChange(text) {
      return setAttributes({
        text: text,
        parsedText: (0, _HoursParser.parseContent)(text)
      });
    }
  }), (0, _element.createElement)("div", {
    className: "components-base-control__label novablocks__label novablocks__example novablocks__example--multi"
  }, (0, _i18n.__)('Monday 10am - 3pm\n' + 'Tuesday to Friday 9 - 17\n' + 'Sat noon - 2am', '__plugin_txtd')))), (0, _element.createElement)(_components.ControlsSection, {
    label: (0, _i18n.__)('Display')
  }, (0, _element.createElement)(_components.ControlsTab, {
    label: (0, _i18n.__)('Settings')
  }, (0, _element.createElement)(_components2.RadioControl, {
    key: 'openhours-display-controls',
    label: (0, _i18n.__)('Displaying the opening hours', '__plugin_txtd'),
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
  }), openHoursStyle === 'status' && (0, _element.createElement)("div", {
    className: "components-base-control__label novablocks__label"
  }, "Write the \"Open\" and \"Closed\" messages using the tags displayed below."), openHoursStyle === 'status' && (0, _element.createElement)(AvailableTagsModal, null), openHoursStyle === 'status' && (0, _element.createElement)(_components2.TextControl, {
    label: "Open Note",
    value: openNote,
    onChange: function onChange(openNote) {
      return setAttributes({
        openNote: openNote
      });
    }
  }), openHoursStyle === 'status' && (0, _element.createElement)("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, (0, _i18n.__)('It\'s {time} and we\'re Open until {today-closing-time}.', '__plugin_txtd')), openHoursStyle === 'status' && (0, _element.createElement)("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, (0, _i18n.__)('{time} - It\'s today, we\'re Open.', '__plugin_txtd')), openHoursStyle === 'status' && (0, _element.createElement)(_components2.TextControl, {
    label: "Closed Note",
    value: closedNote,
    onChange: function onChange(closedNote) {
      return setAttributes({
        closedNote: closedNote
      });
    }
  }), openHoursStyle === 'status' && (0, _element.createElement)("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, (0, _i18n.__)('We\'re closed until {next-opening-day} at {next-opening-time}.', '__plugin_txtd')), openHoursStyle === 'status' && (0, _element.createElement)("div", {
    className: "components-base-control__label novablocks__label novablocks__example"
  }, (0, _i18n.__)('{time} - it\'s closed now.', '__plugin_txtd')), openHoursStyle === 'overview' && (0, _element.createElement)(_components2.TextControl, {
    label: "Closed Label",
    value: closedLabel,
    onChange: function onChange(closedLabel) {
      return setAttributes({
        closedLabel: closedLabel
      });
    }
  }), openHoursStyle === 'overview' && (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Compress Opening Hours', '__plugin_txtd'),
    checked: compressOpeningHours,
    onChange: function onChange() {
      return setAttributes({
        compressOpeningHours: !compressOpeningHours
      });
    }
  }), openHoursStyle === 'overview' && (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Hide Closed Days', '__plugin_txtd'),
    checked: hideClosedDays,
    onChange: function onChange() {
      return setAttributes({
        hideClosedDays: !hideClosedDays
      });
    }
  }), openHoursStyle === 'overview' && (0, _element.createElement)(_components2.ToggleControl, {
    label: (0, _i18n.__)('Use Short Day Name', '__plugin_txtd'),
    checked: useShortName,
    onChange: function onChange() {
      return setAttributes({
        useShortName: !useShortName
      });
    }
  }), (0, _element.createElement)(_components2.TextControl, {
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

var _default = OpenHoursInspectorControls;
exports.default = _default;


/***/ }),

/***/ "./packages/block-library/build/blocks/openhours/preview.js":
/*!******************************************************************!*\
  !*** ./packages/block-library/build/blocks/openhours/preview.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");

var OpenHoursPreview = function OpenHoursPreview(props) {
  console.log(props.attributes);
  return (0, _element.createElement)(wp.serverSideRender, {
    block: "novablocks/openhours",
    attributes: props.attributes
  });
};

var _default = OpenHoursPreview;
exports.default = _default;


/***/ }),

/***/ "@novablocks/components":
/*!*****************************************************!*\
  !*** external {"this":["novablocks","components"]} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["components"]; }());

/***/ }),

/***/ "@novablocks/icons":
/*!************************************************!*\
  !*** external {"this":["novablocks","icons"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["novablocks"]["icons"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map