// Copyright 2014 Foursquare Labs Inc. All Rights Reserved.

var fourSq = fourSq || {};
fourSq.util = fourSq.util || {}

fourSq.util.Hours = {
  /**
   * Pads times to be HHMM
   * @param {string} text
   * @return {string}
   */
  padTimes: function(text) {
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
  toTimeframe: function(days, startMinutes, endMinutes) {
    // If we've day wrapped and end before 4am, push the ending value up 24 hours.
    if (startMinutes >= endMinutes && endMinutes <= 240) {
      endMinutes += 1440;
    }
    var startFormatted = fourSq.util.Hours.formatMinutes(startMinutes);
    var endFormatted = fourSq.util.Hours.formatMinutes(endMinutes);

    return /** @type {fourSq.api.models.hours.MachineTimeframe} */ (({
      days: days,
      open: [(/** @type {fourSq.api.models.hours.MachineSegment} */({
        start: startFormatted,
        end: endFormatted
      }))]
    }));
  },

  /**
   * @param {number} minutes after minute
   * @return {string} the hhmm format that API takes for the input hours
   */
  formatMinutes: function(minutes) {
    var hh = Math.floor(minutes / 60);
    var mm = minutes % 60;
    var intoNextDay = ((hh % 24) !== hh);
    hh = (hh % 24);
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
  minutesAfterMidnight: function(hoursText, minutesText, meridiem) {
    var hours = parseInt(hoursText, 10);
    var minutes = (minutesText !== undefined) ? parseInt(minutesText, 10) : 0;
    if (hours === 12 && meridiem) {
      hours -= 12;
    }
    if (meridiem && meridiem[0] === 'p') {
      hours += 12;
    }

    return (hours * 60) + minutes;
  }
}

fourSq.util.HoursParser = {

  /**
   * @return {fourSq.api.models.hours.MachineHours}
   */
  parse: function(text) {
    text = text.toLowerCase();

    // Normalize new lines to ';'
    text = text.replace(/\n/g, ' ; ');

    // Massage times
    // TODO(ss): translate and do weekend/weekday subs
    text = text.replace(/(12|12:00)?midnight/g, '1200a');
    text = text.replace(/(12|12:00)?noon/g, '1200p');
    text = text.replace(/(open)?\s*24\s*hours?/g, '1200a-1200a');

    // Standardize conjunctions to '&'
    text = text.replace(/\s*(and|,|\+|&)\s*/g, '&');

    // Standardize range tokens to '-'
    text = text.replace(/\s*(-|to|thru|through|till?|'till?|until)\s*/g, '-');

    // Standardize am/pm
    text = text.replace(/\s*a\.?m?\.?/g, 'a');
    text = text.replace(/\s*p\.?m?\.?/g, 'p');

    // Not sure this happens, but add trailing zeros to things like 5:3pm
    text = text.replace(/([0-9])(h|:|\.)([0-9])([^0-9]|$)/g, '$1$2$30$4');

    // Remove separators from times (e.g. ':')...
    // if they both have separators
//    text = text.replace(/([0-9]+)\s*[^0-9]\s*([0-9]{2})([^0-9]+?)([0-9]+)\s*[^0-9]\s*([0-9]{2})/g, '$1$2$3$4$5');
    // if only the start time has a separator
    text = text.replace(/([0-9]+)\s*(h|:|\.)\s*([0-9]{2})/g, '$1$3');
    // if only the end time has a separator
    //text = text.replace(/([0-9]+)([^0-9ap]+?)([0-9]+)\s*(h|:|\.)\s*([0-9]{2})/g, '$1$2$3$5');

    text = fourSq.util.Hours.padTimes(text);

    // Massage days
    var dayCanonicals = _.map(_.range(1, 8), function(dayI) {
      var allNames = fourSq.util.HoursParser.dayAliases(dayI);
      var canonical = _.head(allNames); // Shortest is at the front
      var aliases = _.tail(allNames);
      aliases.reverse();  // Need to have the largest alias first for replacing
      if (canonical && aliases) {
        _.each(aliases, function(alias) {
          text = text.replace(new RegExp(alias, 'g'), canonical);
        });
      }
      return canonical;
    });

    var dayPattern = '(' + dayCanonicals.join('|') + ')';
    var timePattern = '([0-9][0-9])([0-9][0-9])\\s*([ap])?';
    var globTimePattern =  '[0-9]{4}\\s*[ap]?';
    var globTimeRangePattern = '(' + globTimePattern + '[^0-9]+' + globTimePattern + ')';

    // Need to establish whether days come before times (forward) or not (backward)
    var forwardTimeframePattern = dayPattern + '.*?' + globTimeRangePattern;
    var backwardTimeframePattern = globTimeRangePattern + '.*?' + dayPattern;

    var forwardPosition = text.search(new RegExp(forwardTimeframePattern));
    var backwardPosition = text.search(new RegExp(backwardTimeframePattern));

    // If a forward pattern is found first, consider it a forward facing text
    var isForward = (forwardPosition !== -1 && forwardPosition <= backwardPosition) || backwardPosition === -1;
    // TODO(ss): may be better to normalize the string to be forward facing at this point
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
    var timeframePattern = isForward ? (
        dayRangePattern + '.*?' + timeRangePattern
    ) : (
        timeRangePattern + '.*?' + dayRangePattern
    );
    var dayTimeMatcher = new RegExp(timeframePattern, 'g');

    var matches = [];
    do {
      var dayTimeMatch = dayTimeMatcher.exec(text);
      if (dayTimeMatch) {
        matches.push(dayTimeMatch);
      }
    } while (dayTimeMatch)

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

    var timeframes = _.map(matches, function(match) {
      // day slots in the regex match array
      var day1 = isForward ? match[1] : match[7];
      var day2 = isForward ? match[2] : match[8];
      var startDay = (day1 !== undefined) ? dayCanonicals.indexOf(day1) : 0;

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
      var days = _.map(_.range(startDay, endDay + 1), function(day) {
        // Days start at 1 for Monday
        return (day % 7) + 1;
      });

      // time slots in the regex match array
      var startHour = isForward ? match[3] : match[1];
      var startMinute = isForward ? match[4] : match[2];
      var startMeridiem = isForward ? match[5] : match[3];
      var endHour = isForward ? match[6] : match[4];
      var endMinute = isForward ? match[7] : match[5];
      var endMeridiem = isForward ? match[8] : match[6];
      // TODO(ss): hint the meridiem based on endHour < startHour and > 4
      var startTime = fourSq.util.Hours.minutesAfterMidnight(startHour, startMinute, startMeridiem);
      var endTime = fourSq.util.Hours.minutesAfterMidnight(endHour, endMinute, endMeridiem);
      return fourSq.util.Hours.toTimeframe(days, startTime, endTime);
    });

    if (timeframes.length) {
      return /** @type {fourSq.api.models.hours.MachineHours} */ (({
        timeframes: timeframes
      }));
    } else {
      return null;
    }
  },

  /**
   * @param {number} day starting at 1 for monday
   * @return {Array.<string>} all aliases of the day, sorted by length
   */
  dayAliases: function(day) {
    var text = '';
    var aliases = '';
    switch(day) {
      case 1: aliases = ['mondays','monday','monda','mond','mon','mo','m']; break;
      case 2: aliases = ['tuesdays','tuesday','tuesd','tues','tue','tu']; break;
      case 3: aliases = ['wednesdays','wednesday','wednes','wedne','wedn','wed','we','w']; break;
      case 4: aliases = ['thursdays','thursday','thurs','thur','thu','th']; break;
      case 5: aliases = ['fridays','friday','frida','frid','fri','fr','f']; break;
      case 6: aliases = ['saturdays','saturday','satur','satu','sat','sa']; break;
      case 7: aliases = ['sundays','sunday','sunda','sund','sun','su']; break;
      default: return [];
    }
    return _.sortBy(aliases, function(alias) {
      return alias.length;
    });
  }
}

// Remove the days in which the business is closed. The parser doesn't need those days anyways.
function removeClosedDays( schedule ) {
  var hoursString ='';
  var lines = schedule.split('\n');
  for (var i=0; i< lines.length; i++) {
    if (lines[i].includes('closed') || lines[i].includes('Closed') || !lines[i].match(/\d+/g)) {
      // don't add it to the list
    } else {
      hoursString += lines[i] + '\n';
    }
  }

  return hoursString;
}

export const parseContent = function( currentValue ) {
    currentValue = removeClosedDays(currentValue);
    var hours = fourSq.util.HoursParser.parse(currentValue);
    return JSON.stringify(hours);
};
