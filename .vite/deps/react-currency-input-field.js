import {
  require_react
} from "./chunk-JFTBQ7A7.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-currency-input-field/dist/index.esm.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || from);
}
var escapeRegExp = function(stringToGoIntoTheRegex) {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};
var abbrMap = { k: 1e3, m: 1e6, b: 1e9 };
var parseAbbrValue = function(value, decimalSeparator) {
  if (decimalSeparator === void 0) {
    decimalSeparator = ".";
  }
  var reg = new RegExp("(\\d+(" + escapeRegExp(decimalSeparator) + "\\d*)?)([kmb])$", "i");
  var match = value.match(reg);
  if (match) {
    var digits = match[1], abbr = match[3];
    var multiplier = abbrMap[abbr.toLowerCase()];
    return Number(digits.replace(decimalSeparator, ".")) * multiplier;
  }
  return void 0;
};
var removeSeparators = function(value, separator) {
  if (separator === void 0) {
    separator = ",";
  }
  var reg = new RegExp(escapeRegExp(separator), "g");
  return value.replace(reg, "");
};
var removeInvalidChars = function(value, validChars) {
  var chars = escapeRegExp(validChars.join(""));
  var reg = new RegExp("[^\\d" + chars + "]", "gi");
  return value.replace(reg, "");
};
var cleanValue = function(_a) {
  var value = _a.value, _b = _a.groupSeparator, groupSeparator = _b === void 0 ? "," : _b, _c = _a.decimalSeparator, decimalSeparator = _c === void 0 ? "." : _c, _d = _a.allowDecimals, allowDecimals = _d === void 0 ? true : _d, _e = _a.decimalsLimit, decimalsLimit = _e === void 0 ? 2 : _e, _f = _a.allowNegativeValue, allowNegativeValue = _f === void 0 ? true : _f, _g = _a.disableAbbreviations, disableAbbreviations = _g === void 0 ? false : _g, _h = _a.prefix, prefix = _h === void 0 ? "" : _h, _j = _a.transformRawValue, transformRawValue = _j === void 0 ? function(rawValue) {
    return rawValue;
  } : _j;
  var transformedValue = transformRawValue(value);
  if (transformedValue === "-") {
    return transformedValue;
  }
  var abbreviations = disableAbbreviations ? [] : ["k", "m", "b"];
  var reg = new RegExp("((^|\\D)-\\d)|(-" + escapeRegExp(prefix) + ")");
  var isNegative = reg.test(transformedValue);
  var _k = RegExp("(\\d+)-?" + escapeRegExp(prefix)).exec(value) || [], prefixWithValue = _k[0], preValue = _k[1];
  var withoutPrefix = prefix ? prefixWithValue ? transformedValue.replace(prefixWithValue, "").concat(preValue) : transformedValue.replace(prefix, "") : transformedValue;
  var withoutSeparators = removeSeparators(withoutPrefix, groupSeparator);
  var withoutInvalidChars = removeInvalidChars(withoutSeparators, __spreadArray([
    groupSeparator,
    decimalSeparator
  ], abbreviations));
  var valueOnly = withoutInvalidChars;
  if (!disableAbbreviations) {
    if (abbreviations.some(function(letter) {
      return letter === withoutInvalidChars.toLowerCase();
    })) {
      return "";
    }
    var parsed = parseAbbrValue(withoutInvalidChars, decimalSeparator);
    if (parsed) {
      valueOnly = String(parsed);
    }
  }
  var includeNegative = isNegative && allowNegativeValue ? "-" : "";
  if (decimalSeparator && valueOnly.includes(decimalSeparator)) {
    var _l = withoutInvalidChars.split(decimalSeparator), int = _l[0], decimals = _l[1];
    var trimmedDecimals = decimalsLimit && decimals ? decimals.slice(0, decimalsLimit) : decimals;
    var includeDecimals = allowDecimals ? "" + decimalSeparator + trimmedDecimals : "";
    return "" + includeNegative + int + includeDecimals;
  }
  return "" + includeNegative + valueOnly;
};
var fixedDecimalValue = function(value, decimalSeparator, fixedDecimalLength) {
  if (fixedDecimalLength && value.length > 1) {
    if (value.includes(decimalSeparator)) {
      var _a = value.split(decimalSeparator), int = _a[0], decimals = _a[1];
      if (decimals.length > fixedDecimalLength) {
        return "" + int + decimalSeparator + decimals.slice(0, fixedDecimalLength);
      }
    }
    var reg = value.length > fixedDecimalLength ? new RegExp("(\\d+)(\\d{" + fixedDecimalLength + "})") : new RegExp("(\\d)(\\d+)");
    var match = value.match(reg);
    if (match) {
      var int = match[1], decimals = match[2];
      return "" + int + decimalSeparator + decimals;
    }
  }
  return value;
};
var getSuffix = function(value, _a) {
  var _b = _a.groupSeparator, groupSeparator = _b === void 0 ? "," : _b, _c = _a.decimalSeparator, decimalSeparator = _c === void 0 ? "." : _c;
  var suffixReg = new RegExp("\\d([^" + escapeRegExp(groupSeparator) + escapeRegExp(decimalSeparator) + "0-9]+)");
  var suffixMatch = value.match(suffixReg);
  return suffixMatch ? suffixMatch[1] : void 0;
};
var formatValue = function(options) {
  var _value = options.value, decimalSeparator = options.decimalSeparator, intlConfig = options.intlConfig, decimalScale = options.decimalScale, _a = options.prefix, prefix = _a === void 0 ? "" : _a, _b = options.suffix, suffix = _b === void 0 ? "" : _b;
  if (_value === "" || _value === void 0) {
    return "";
  }
  if (_value === "-") {
    return "-";
  }
  var isNegative = new RegExp("^\\d?-" + (prefix ? escapeRegExp(prefix) + "?" : "") + "\\d").test(_value);
  var value = decimalSeparator !== "." ? replaceDecimalSeparator(_value, decimalSeparator, isNegative) : _value;
  var defaultNumberFormatOptions = {
    minimumFractionDigits: decimalScale || 0,
    maximumFractionDigits: 20
  };
  var numberFormatter = intlConfig ? new Intl.NumberFormat(intlConfig.locale, intlConfig.currency ? __assign(__assign({}, defaultNumberFormatOptions), { style: "currency", currency: intlConfig.currency }) : defaultNumberFormatOptions) : new Intl.NumberFormat(void 0, defaultNumberFormatOptions);
  var parts = numberFormatter.formatToParts(Number(value));
  var formatted = replaceParts(parts, options);
  var intlSuffix = getSuffix(formatted, __assign({}, options));
  var includeDecimalSeparator = _value.slice(-1) === decimalSeparator ? decimalSeparator : "";
  var _c = value.match(RegExp("\\d+\\.(\\d+)")) || [], decimals = _c[1];
  if (decimalScale === void 0 && decimals && decimalSeparator) {
    if (formatted.includes(decimalSeparator)) {
      formatted = formatted.replace(RegExp("(\\d+)(" + escapeRegExp(decimalSeparator) + ")(\\d+)", "g"), "$1$2" + decimals);
    } else {
      if (intlSuffix && !suffix) {
        formatted = formatted.replace(intlSuffix, "" + decimalSeparator + decimals + intlSuffix);
      } else {
        formatted = "" + formatted + decimalSeparator + decimals;
      }
    }
  }
  if (suffix && includeDecimalSeparator) {
    return "" + formatted + includeDecimalSeparator + suffix;
  }
  if (intlSuffix && includeDecimalSeparator) {
    return formatted.replace(intlSuffix, "" + includeDecimalSeparator + intlSuffix);
  }
  if (intlSuffix && suffix) {
    return formatted.replace(intlSuffix, "" + includeDecimalSeparator + suffix);
  }
  return [formatted, includeDecimalSeparator, suffix].join("");
};
var replaceDecimalSeparator = function(value, decimalSeparator, isNegative) {
  var newValue = value;
  if (decimalSeparator && decimalSeparator !== ".") {
    newValue = newValue.replace(RegExp(escapeRegExp(decimalSeparator), "g"), ".");
    if (isNegative && decimalSeparator === "-") {
      newValue = "-" + newValue.slice(1);
    }
  }
  return newValue;
};
var replaceParts = function(parts, _a) {
  var prefix = _a.prefix, groupSeparator = _a.groupSeparator, decimalSeparator = _a.decimalSeparator, decimalScale = _a.decimalScale, _b = _a.disableGroupSeparators, disableGroupSeparators = _b === void 0 ? false : _b;
  return parts.reduce(function(prev, _a2, i) {
    var type = _a2.type, value = _a2.value;
    if (i === 0 && prefix) {
      if (type === "minusSign") {
        return [value, prefix];
      }
      if (type === "currency") {
        return __spreadArray(__spreadArray([], prev), [prefix]);
      }
      return [prefix, value];
    }
    if (type === "currency") {
      return prefix ? prev : __spreadArray(__spreadArray([], prev), [value]);
    }
    if (type === "group") {
      return !disableGroupSeparators ? __spreadArray(__spreadArray([], prev), [groupSeparator !== void 0 ? groupSeparator : value]) : prev;
    }
    if (type === "decimal") {
      if (decimalScale !== void 0 && decimalScale === 0) {
        return prev;
      }
      return __spreadArray(__spreadArray([], prev), [decimalSeparator !== void 0 ? decimalSeparator : value]);
    }
    if (type === "fraction") {
      return __spreadArray(__spreadArray([], prev), [decimalScale !== void 0 ? value.slice(0, decimalScale) : value]);
    }
    return __spreadArray(__spreadArray([], prev), [value]);
  }, [""]).join("");
};
var defaultConfig = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
};
var getLocaleConfig = function(intlConfig) {
  var _a = intlConfig || {}, locale = _a.locale, currency = _a.currency;
  var numberFormatter = locale ? new Intl.NumberFormat(locale, currency ? { currency, style: "currency" } : void 0) : new Intl.NumberFormat();
  return numberFormatter.formatToParts(1000.1).reduce(function(prev, curr, i) {
    if (curr.type === "currency") {
      if (i === 0) {
        return __assign(__assign({}, prev), { currencySymbol: curr.value, prefix: curr.value });
      } else {
        return __assign(__assign({}, prev), { currencySymbol: curr.value, suffix: curr.value });
      }
    }
    if (curr.type === "group") {
      return __assign(__assign({}, prev), { groupSeparator: curr.value });
    }
    if (curr.type === "decimal") {
      return __assign(__assign({}, prev), { decimalSeparator: curr.value });
    }
    return prev;
  }, defaultConfig);
};
var isNumber = function(input) {
  return RegExp(/\d/, "gi").test(input);
};
var padTrimValue = function(value, decimalSeparator, decimalScale) {
  if (decimalSeparator === void 0) {
    decimalSeparator = ".";
  }
  if (decimalScale === void 0 || value === "" || value === void 0) {
    return value;
  }
  if (!value.match(/\d/g)) {
    return "";
  }
  var _a = value.split(decimalSeparator), int = _a[0], decimals = _a[1];
  if (decimalScale === 0) {
    return int;
  }
  var newValue = decimals || "";
  if (newValue.length < decimalScale) {
    while (newValue.length < decimalScale) {
      newValue += "0";
    }
  } else {
    newValue = newValue.slice(0, decimalScale);
  }
  return "" + int + decimalSeparator + newValue;
};
var repositionCursor = function(_a) {
  var selectionStart = _a.selectionStart, value = _a.value, lastKeyStroke = _a.lastKeyStroke, stateValue = _a.stateValue, groupSeparator = _a.groupSeparator;
  var cursorPosition = selectionStart;
  var modifiedValue = value;
  if (stateValue && cursorPosition) {
    var splitValue = value.split("");
    if (lastKeyStroke === "Backspace" && stateValue[cursorPosition] === groupSeparator) {
      splitValue.splice(cursorPosition - 1, 1);
      cursorPosition -= 1;
    }
    if (lastKeyStroke === "Delete" && stateValue[cursorPosition] === groupSeparator) {
      splitValue.splice(cursorPosition, 1);
      cursorPosition += 1;
    }
    modifiedValue = splitValue.join("");
    return { modifiedValue, cursorPosition };
  }
  return { modifiedValue, cursorPosition: selectionStart };
};
var CurrencyInput = (0, import_react.forwardRef)(function(_a, ref) {
  var _b = _a.allowDecimals, allowDecimals = _b === void 0 ? true : _b, _c = _a.allowNegativeValue, allowNegativeValue = _c === void 0 ? true : _c, id = _a.id, name = _a.name, className = _a.className, customInput = _a.customInput, decimalsLimit = _a.decimalsLimit, defaultValue = _a.defaultValue, _d = _a.disabled, disabled = _d === void 0 ? false : _d, userMaxLength = _a.maxLength, userValue = _a.value, onValueChange = _a.onValueChange, fixedDecimalLength = _a.fixedDecimalLength, placeholder = _a.placeholder, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, intlConfig = _a.intlConfig, step = _a.step, min = _a.min, max = _a.max, _e = _a.disableGroupSeparators, disableGroupSeparators = _e === void 0 ? false : _e, _f = _a.disableAbbreviations, disableAbbreviations = _f === void 0 ? false : _f, _decimalSeparator = _a.decimalSeparator, _groupSeparator = _a.groupSeparator, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, transformRawValue = _a.transformRawValue, props = __rest(_a, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue"]);
  if (_decimalSeparator && isNumber(_decimalSeparator)) {
    throw new Error("decimalSeparator cannot be a number");
  }
  if (_groupSeparator && isNumber(_groupSeparator)) {
    throw new Error("groupSeparator cannot be a number");
  }
  var localeConfig = (0, import_react.useMemo)(function() {
    return getLocaleConfig(intlConfig);
  }, [intlConfig]);
  var decimalSeparator = _decimalSeparator || localeConfig.decimalSeparator || "";
  var groupSeparator = _groupSeparator || localeConfig.groupSeparator || "";
  if (decimalSeparator && groupSeparator && decimalSeparator === groupSeparator && disableGroupSeparators === false) {
    throw new Error("decimalSeparator cannot be the same as groupSeparator");
  }
  var formatValueOptions = {
    decimalSeparator,
    groupSeparator,
    disableGroupSeparators,
    intlConfig,
    prefix: prefix || localeConfig.prefix,
    suffix
  };
  var cleanValueOptions = {
    decimalSeparator,
    groupSeparator,
    allowDecimals,
    decimalsLimit: decimalsLimit || fixedDecimalLength || 2,
    allowNegativeValue,
    disableAbbreviations,
    prefix: prefix || localeConfig.prefix,
    transformRawValue
  };
  var formattedStateValue = defaultValue !== void 0 && defaultValue !== null ? formatValue(__assign(__assign({}, formatValueOptions), { decimalScale, value: String(defaultValue) })) : userValue !== void 0 && userValue !== null ? formatValue(__assign(__assign({}, formatValueOptions), { decimalScale, value: String(userValue) })) : "";
  var _g = (0, import_react.useState)(formattedStateValue), stateValue = _g[0], setStateValue = _g[1];
  var _h = (0, import_react.useState)(false), dirty = _h[0], setDirty = _h[1];
  var _j = (0, import_react.useState)(0), cursor = _j[0], setCursor = _j[1];
  var _k = (0, import_react.useState)(0), changeCount = _k[0], setChangeCount = _k[1];
  var _l = (0, import_react.useState)(null), lastKeyStroke = _l[0], setLastKeyStroke = _l[1];
  var inputRef = (0, import_react.useRef)(null);
  (0, import_react.useImperativeHandle)(ref, function() {
    return inputRef.current;
  });
  var processChange = function(value, selectionStart) {
    setDirty(true);
    var _a2 = repositionCursor({
      selectionStart,
      value,
      lastKeyStroke,
      stateValue,
      groupSeparator
    }), modifiedValue = _a2.modifiedValue, cursorPosition = _a2.cursorPosition;
    var stringValue = cleanValue(__assign({ value: modifiedValue }, cleanValueOptions));
    if (userMaxLength && stringValue.replace(/-/g, "").length > userMaxLength) {
      return;
    }
    if (stringValue === "" || stringValue === "-" || stringValue === decimalSeparator) {
      onValueChange && onValueChange(void 0, name, { float: null, formatted: "", value: "" });
      setStateValue(stringValue);
      return;
    }
    var stringValueWithoutSeparator = decimalSeparator ? stringValue.replace(decimalSeparator, ".") : stringValue;
    var numberValue = parseFloat(stringValueWithoutSeparator);
    var formattedValue = formatValue(__assign({ value: stringValue }, formatValueOptions));
    if (cursorPosition !== void 0 && cursorPosition !== null) {
      var newCursor = cursorPosition + (formattedValue.length - value.length);
      newCursor = newCursor <= 0 ? prefix ? prefix.length : 0 : newCursor;
      setCursor(newCursor);
      setChangeCount(changeCount + 1);
    }
    setStateValue(formattedValue);
    if (onValueChange) {
      var values = {
        float: numberValue,
        formatted: formattedValue,
        value: stringValue
      };
      onValueChange(stringValue, name, values);
    }
  };
  var handleOnChange = function(event) {
    var _a2 = event.target, value = _a2.value, selectionStart = _a2.selectionStart;
    processChange(value, selectionStart);
    onChange && onChange(event);
  };
  var handleOnFocus = function(event) {
    onFocus && onFocus(event);
    return stateValue ? stateValue.length : 0;
  };
  var handleOnBlur = function(event) {
    var value = event.target.value;
    var valueOnly = cleanValue(__assign({ value }, cleanValueOptions));
    if (valueOnly === "-" || !valueOnly) {
      setStateValue("");
      onBlur && onBlur(event);
      return;
    }
    var fixedDecimals = fixedDecimalValue(valueOnly, decimalSeparator, fixedDecimalLength);
    var newValue = padTrimValue(fixedDecimals, decimalSeparator, decimalScale !== void 0 ? decimalScale : fixedDecimalLength);
    var numberValue = parseFloat(newValue.replace(decimalSeparator, "."));
    var formattedValue = formatValue(__assign(__assign({}, formatValueOptions), { value: newValue }));
    if (onValueChange) {
      onValueChange(newValue, name, {
        float: numberValue,
        formatted: formattedValue,
        value: newValue
      });
    }
    setStateValue(formattedValue);
    onBlur && onBlur(event);
  };
  var handleOnKeyDown = function(event) {
    var key = event.key;
    setLastKeyStroke(key);
    if (step && (key === "ArrowUp" || key === "ArrowDown")) {
      event.preventDefault();
      setCursor(stateValue.length);
      var currentValue = parseFloat(userValue !== void 0 && userValue !== null ? String(userValue).replace(decimalSeparator, ".") : cleanValue(__assign({ value: stateValue }, cleanValueOptions))) || 0;
      var newValue = key === "ArrowUp" ? currentValue + step : currentValue - step;
      if (min !== void 0 && newValue < min) {
        return;
      }
      if (max !== void 0 && newValue > max) {
        return;
      }
      var fixedLength = String(step).includes(".") ? Number(String(step).split(".")[1].length) : void 0;
      processChange(String(fixedLength ? newValue.toFixed(fixedLength) : newValue).replace(".", decimalSeparator));
    }
    onKeyDown && onKeyDown(event);
  };
  var handleOnKeyUp = function(event) {
    var key = event.key, selectionStart = event.currentTarget.selectionStart;
    if (key !== "ArrowUp" && key !== "ArrowDown" && stateValue !== "-") {
      var suffix_1 = getSuffix(stateValue, { groupSeparator, decimalSeparator });
      if (suffix_1 && selectionStart && selectionStart > stateValue.length - suffix_1.length) {
        if (inputRef.current) {
          var newCursor = stateValue.length - suffix_1.length;
          inputRef.current.setSelectionRange(newCursor, newCursor);
        }
      }
    }
    onKeyUp && onKeyUp(event);
  };
  (0, import_react.useEffect)(function() {
    if (dirty && stateValue !== "-" && inputRef.current && document.activeElement === inputRef.current) {
      inputRef.current.setSelectionRange(cursor, cursor);
    }
  }, [stateValue, cursor, inputRef, dirty, changeCount]);
  var getRenderValue = function() {
    if (userValue !== void 0 && userValue !== null && stateValue !== "-" && (!decimalSeparator || stateValue !== decimalSeparator)) {
      return formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: dirty ? void 0 : decimalScale, value: String(userValue) }));
    }
    return stateValue;
  };
  var inputProps = __assign({
    type: "text",
    inputMode: "decimal",
    id,
    name,
    className,
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    onFocus: handleOnFocus,
    onKeyDown: handleOnKeyDown,
    onKeyUp: handleOnKeyUp,
    placeholder,
    disabled,
    value: getRenderValue(),
    ref: inputRef
  }, props);
  if (customInput) {
    var CustomInput = customInput;
    return import_react.default.createElement(CustomInput, __assign({}, inputProps));
  }
  return import_react.default.createElement("input", __assign({}, inputProps));
});
CurrencyInput.displayName = "CurrencyInput";
var index_esm_default = CurrencyInput;
export {
  index_esm_default as default,
  formatValue
};
/*! Bundled license information:

react-currency-input-field/dist/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=react-currency-input-field.js.map
