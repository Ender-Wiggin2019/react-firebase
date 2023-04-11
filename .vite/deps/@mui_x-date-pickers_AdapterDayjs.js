import {
  buildWarning
} from "./chunk-RW3DMCEO.js";
import {
  require_dayjs_min
} from "./chunk-QFO535XJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  "node_modules/dayjs/plugin/weekOfYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
    }(exports, function() {
      "use strict";
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2)
            return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s))
              return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var a = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3)
            return 0;
          if ("Z" === e3)
            return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], h = function(e2) {
        var t2 = o[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, u = function(e2, t2) {
        var n2, r2 = o.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1)
            if (e2.indexOf(r2(i2, 0, t2)) > -1) {
              n2 = i2 > 12;
              break;
            }
        } else
          n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, d = { A: [i, function(e2) {
        this.afternoon = u(e2, false);
      }], a: [i, function(e2) {
        this.afternoon = u(e2, true);
      }], S: [/\d/, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [n, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [r, a("seconds")], ss: [r, a("seconds")], m: [r, a("minutes")], mm: [r, a("minutes")], H: [r, a("hours")], h: [r, a("hours")], HH: [r, a("hours")], hh: [r, a("hours")], D: [r, a("day")], DD: [n, a("day")], Do: [i, function(e2) {
        var t2 = o.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2)
          for (var r2 = 1; r2 <= 31; r2 += 1)
            t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], M: [r, a("month")], MM: [n, a("month")], MMM: [i, function(e2) {
        var t2 = h("months"), n2 = (h("monthsShort") || t2.map(function(e3) {
          return e3.slice(0, 3);
        })).indexOf(e2) + 1;
        if (n2 < 1)
          throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [i, function(e2) {
        var t2 = h("months").indexOf(e2) + 1;
        if (t2 < 1)
          throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(e2) {
        this.year = s(e2);
      }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
      function c(n2) {
        var r2, i2;
        r2 = n2, i2 = o && o.formats;
        for (var s2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
          var o2 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a2 = s2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = s2[f2], u2 = d[h2], c2 = u2 && u2[0], l = u2 && u2[1];
          s2[f2] = l ? { regex: c2, parser: l } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = s2[n3];
            if ("string" == typeof i3)
              r3 += i3.length;
            else {
              var o2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = o2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (s = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, s2 = e3.args;
          this.$u = r3;
          var a2 = s2[1];
          if ("string" == typeof a2) {
            var f2 = true === s2[2], h2 = true === s2[3], u2 = f2 || h2, d2 = s2[2];
            h2 && (d2 = s2[2]), o = this.$locale(), !f2 && d2 && (o = n2.Ls[d2]), this.$d = function(e4, t4, n3) {
              try {
                if (["x", "X"].indexOf(t4) > -1)
                  return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var r4 = c(t4)(e4), i3 = r4.year, o2 = r4.month, s3 = r4.day, a3 = r4.hours, f3 = r4.minutes, h3 = r4.seconds, u3 = r4.milliseconds, d3 = r4.zone, l2 = /* @__PURE__ */ new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
                i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
                var p = a3 || 0, v = f3 || 0, D = h3 || 0, g = u3 || 0;
                return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a2, r3), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
          } else if (a2 instanceof Array)
            for (var l = a2.length, m = 1; m <= l; m += 1) {
              s2[1] = a2[m - 1];
              var M = n2.apply(this, s2);
              if (M.isValid()) {
                this.$d = M.$d, this.$L = M.$L, this.init();
                break;
              }
              m === l && (this.$d = /* @__PURE__ */ new Date(""));
            }
          else
            i2.call(this, e3);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/localizedFormat.js
var require_localizedFormat = __commonJS({
  "node_modules/dayjs/plugin/localizedFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_localizedFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, o, n) {
        var r = o.prototype, i = r.format;
        n.en.formats = e, r.format = function(t2) {
          void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
          var o2 = this.$locale().formats, n2 = function(t3, o3) {
            return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n3, r2) {
              var i2 = r2 && r2.toUpperCase();
              return n3 || o3[r2] || e[r2] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t5, o4) {
                return t5 || o4.slice(1);
              });
            });
          }(t2, void 0 === o2 ? {} : o2);
          return i.call(this, n2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    }(exports, function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    });
  }
});

// node_modules/@mui/x-date-pickers/AdapterDayjs/index.js
var import_dayjs2 = __toESM(require_dayjs_min());
var import_weekOfYear = __toESM(require_weekOfYear());

// node_modules/@date-io/dayjs/build/index.esm.js
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
var import_localizedFormat = __toESM(require_localizedFormat());
var import_isBetween = __toESM(require_isBetween());
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_localizedFormat.default);
import_dayjs.default.extend(import_isBetween.default);
var withLocale = function(dayjs, locale) {
  return !locale ? dayjs : function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return dayjs.apply(void 0, args).locale(locale);
  };
};
var defaultFormats = {
  normalDateWithWeekday: "ddd, MMM D",
  normalDate: "D MMMM",
  shortDate: "MMM D",
  monthAndDate: "MMMM D",
  dayOfMonth: "D",
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  monthAndYear: "MMMM YYYY",
  weekday: "dddd",
  weekdayShort: "ddd",
  minutes: "mm",
  hours12h: "hh",
  hours24h: "HH",
  seconds: "ss",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  fullDate: "ll",
  fullDateWithWeekday: "dddd, LL",
  fullDateTime: "lll",
  fullDateTime12h: "ll hh:mm A",
  fullDateTime24h: "ll HH:mm",
  keyboardDate: "L",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
};
var DayjsUtils = (
  /** @class */
  function() {
    function DayjsUtils2(_a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, locale = _b.locale, formats = _b.formats, instance = _b.instance;
      this.lib = "dayjs";
      this.is12HourCycleInCurrentLocale = function() {
        var _a2, _b2;
        return /A|a/.test((_b2 = (_a2 = _this.rawDayJsInstance.Ls[_this.locale || "en"]) === null || _a2 === void 0 ? void 0 : _a2.formats) === null || _b2 === void 0 ? void 0 : _b2.LT);
      };
      this.getCurrentLocaleCode = function() {
        return _this.locale || "en";
      };
      this.getFormatHelperText = function(format) {
        var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;
        return format.match(localFormattingTokens).map(function(token) {
          var _a2, _b2;
          var firstCharacter = token[0];
          if (firstCharacter === "L") {
            return (_b2 = (_a2 = _this.rawDayJsInstance.Ls[_this.locale || "en"]) === null || _a2 === void 0 ? void 0 : _a2.formats[token]) !== null && _b2 !== void 0 ? _b2 : token;
          }
          return token;
        }).join("").replace(/a/gi, "(a|p)m").toLocaleLowerCase();
      };
      this.parseISO = function(isoString) {
        return _this.dayjs(isoString);
      };
      this.toISO = function(value) {
        return value.toISOString();
      };
      this.parse = function(value, format) {
        if (value === "") {
          return null;
        }
        return _this.dayjs(value, format, _this.locale, true);
      };
      this.date = function(value) {
        if (value === null) {
          return null;
        }
        return _this.dayjs(value);
      };
      this.toJsDate = function(value) {
        return value.toDate();
      };
      this.isValid = function(value) {
        return _this.dayjs(value).isValid();
      };
      this.isNull = function(date) {
        return date === null;
      };
      this.getDiff = function(date, comparing, units) {
        return date.diff(comparing, units);
      };
      this.isAfter = function(date, value) {
        return date.isAfter(value);
      };
      this.isBefore = function(date, value) {
        return date.isBefore(value);
      };
      this.isAfterDay = function(date, value) {
        return date.isAfter(value, "day");
      };
      this.isBeforeDay = function(date, value) {
        return date.isBefore(value, "day");
      };
      this.isBeforeYear = function(date, value) {
        return date.isBefore(value, "year");
      };
      this.isAfterYear = function(date, value) {
        return date.isAfter(value, "year");
      };
      this.startOfDay = function(date) {
        return date.startOf("day");
      };
      this.endOfDay = function(date) {
        return date.endOf("day");
      };
      this.format = function(date, formatKey) {
        return _this.formatByString(date, _this.formats[formatKey]);
      };
      this.formatByString = function(date, formatString) {
        return _this.dayjs(date).format(formatString);
      };
      this.formatNumber = function(numberToFormat) {
        return numberToFormat;
      };
      this.getHours = function(date) {
        return date.hour();
      };
      this.addSeconds = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "second") : date.add(count, "second");
      };
      this.addMinutes = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "minute") : date.add(count, "minute");
      };
      this.addHours = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "hour") : date.add(count, "hour");
      };
      this.addDays = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "day") : date.add(count, "day");
      };
      this.addWeeks = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "week") : date.add(count, "week");
      };
      this.addMonths = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "month") : date.add(count, "month");
      };
      this.addYears = function(date, count) {
        return count < 0 ? date.subtract(Math.abs(count), "year") : date.add(count, "year");
      };
      this.setMonth = function(date, count) {
        return date.set("month", count);
      };
      this.setHours = function(date, count) {
        return date.set("hour", count);
      };
      this.getMinutes = function(date) {
        return date.minute();
      };
      this.setMinutes = function(date, count) {
        return date.set("minute", count);
      };
      this.getSeconds = function(date) {
        return date.second();
      };
      this.setSeconds = function(date, count) {
        return date.set("second", count);
      };
      this.getMonth = function(date) {
        return date.month();
      };
      this.getDate = function(date) {
        return date.date();
      };
      this.setDate = function(date, count) {
        return date.set("date", count);
      };
      this.getDaysInMonth = function(date) {
        return date.daysInMonth();
      };
      this.isSameDay = function(date, comparing) {
        return date.isSame(comparing, "day");
      };
      this.isSameMonth = function(date, comparing) {
        return date.isSame(comparing, "month");
      };
      this.isSameYear = function(date, comparing) {
        return date.isSame(comparing, "year");
      };
      this.isSameHour = function(date, comparing) {
        return date.isSame(comparing, "hour");
      };
      this.getMeridiemText = function(ampm) {
        return ampm === "am" ? "AM" : "PM";
      };
      this.startOfYear = function(date) {
        return date.startOf("year");
      };
      this.endOfYear = function(date) {
        return date.endOf("year");
      };
      this.startOfMonth = function(date) {
        return date.startOf("month");
      };
      this.endOfMonth = function(date) {
        return date.endOf("month");
      };
      this.startOfWeek = function(date) {
        return date.startOf("week");
      };
      this.endOfWeek = function(date) {
        return date.endOf("week");
      };
      this.getNextMonth = function(date) {
        return date.add(1, "month");
      };
      this.getPreviousMonth = function(date) {
        return date.subtract(1, "month");
      };
      this.getMonthArray = function(date) {
        var firstMonth = date.startOf("year");
        var monthArray = [firstMonth];
        while (monthArray.length < 12) {
          var prevMonth = monthArray[monthArray.length - 1];
          monthArray.push(_this.getNextMonth(prevMonth));
        }
        return monthArray;
      };
      this.getYear = function(date) {
        return date.year();
      };
      this.setYear = function(date, year) {
        return date.set("year", year);
      };
      this.mergeDateAndTime = function(date, time) {
        return date.hour(time.hour()).minute(time.minute()).second(time.second());
      };
      this.getWeekdays = function() {
        var start = _this.dayjs().startOf("week");
        return [0, 1, 2, 3, 4, 5, 6].map(function(diff) {
          return _this.formatByString(start.add(diff, "day"), "dd");
        });
      };
      this.isEqual = function(value, comparing) {
        if (value === null && comparing === null) {
          return true;
        }
        return _this.dayjs(value).isSame(comparing);
      };
      this.getWeekArray = function(date) {
        var start = _this.dayjs(date).startOf("month").startOf("week");
        var end = _this.dayjs(date).endOf("month").endOf("week");
        var count = 0;
        var current = start;
        var nestedWeeks = [];
        while (current.isBefore(end)) {
          var weekNumber = Math.floor(count / 7);
          nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
          nestedWeeks[weekNumber].push(current);
          current = current.add(1, "day");
          count += 1;
        }
        return nestedWeeks;
      };
      this.getYearRange = function(start, end) {
        var startDate = _this.dayjs(start).startOf("year");
        var endDate = _this.dayjs(end).endOf("year");
        var years = [];
        var current = startDate;
        while (current.isBefore(endDate)) {
          years.push(current);
          current = current.add(1, "year");
        }
        return years;
      };
      this.isWithinRange = function(date, _a2) {
        var start = _a2[0], end = _a2[1];
        return date.isBetween(start, end, null, "[]");
      };
      this.rawDayJsInstance = instance || import_dayjs.default;
      this.dayjs = withLocale(this.rawDayJsInstance, locale);
      this.locale = locale;
      this.formats = Object.assign({}, defaultFormats, formats);
    }
    return DayjsUtils2;
  }()
);

// node_modules/@mui/x-date-pickers/AdapterDayjs/index.js
var localeNotFoundWarning = buildWarning(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale with `require('dayjs/locale/{localeUsed}')`", "fallback on English locale"]);
var formatTokenMap = {
  // Year
  YY: "year",
  YYYY: "year",
  // Month
  M: "month",
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: "day",
  DD: "day",
  Do: "day",
  // Day of the week
  d: "weekDay",
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: "hours",
  HH: "hours",
  h: "hours",
  hh: "hours",
  // Minutes
  m: "minutes",
  mm: "minutes",
  // Seconds
  s: "seconds",
  ss: "seconds"
};
var AdapterDayjs = class extends DayjsUtils {
  constructor(options) {
    super(options);
    this.isMUIAdapter = true;
    this.formatTokenMap = formatTokenMap;
    this.escapedCharacters = {
      start: "[",
      end: "]"
    };
    this.getLocaleFormats = () => {
      var _this$rawDayJsInstanc;
      const locales = (_this$rawDayJsInstanc = this.rawDayJsInstance.Ls) != null ? _this$rawDayJsInstanc : import_dayjs2.default.Ls;
      const locale = this.locale || "en";
      let localeObject = locales[locale];
      if (localeObject === void 0) {
        localeNotFoundWarning();
        localeObject = locales.en;
      }
      return localeObject.formats;
    };
    this.is12HourCycleInCurrentLocale = () => {
      return /A|a/.test(this.getLocaleFormats().LT || "");
    };
    this.expandFormat = (format) => {
      const localeFormats = this.getLocaleFormats();
      const t = (formatBis) => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
      return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
        const B = b && b.toUpperCase();
        return a || localeFormats[b] || t(localeFormats[B]);
      });
    };
    this.getFormatHelperText = (format) => {
      return this.expandFormat(format).replace(/a/gi, "(a|p)m").toLocaleLowerCase();
    };
    this.getWeekNumber = (date) => {
      return date.week();
    };
    import_dayjs2.default.extend(import_weekOfYear.default);
  }
};
export {
  AdapterDayjs
};
//# sourceMappingURL=@mui_x-date-pickers_AdapterDayjs.js.map
