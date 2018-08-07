(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ctjs-util"] = factory();
	else
		root["ctjs-util"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enum = __webpack_require__(1);

Object.defineProperty(exports, 'Enum', {
  enumerable: true,
  get: function get() {
    return _enum.Enum;
  }
});

var _options = __webpack_require__(2);

Object.defineProperty(exports, 'Option', {
  enumerable: true,
  get: function get() {
    return _options.Option;
  }
});
Object.defineProperty(exports, 'Options', {
  enumerable: true,
  get: function get() {
    return _options.Options;
  }
});

var _urlBuilder = __webpack_require__(3);

Object.defineProperty(exports, 'UrlBuilder', {
  enumerable: true,
  get: function get() {
    return _urlBuilder.UrlBuilder;
  }
});

var _util = __webpack_require__(4);

Object.defineProperty(exports, 'Util', {
  enumerable: true,
  get: function get() {
    return _util.Util;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enum = exports.Enum = function () {
  function Enum(init) {
    _classCallCheck(this, Enum);

    this._entries = [];
    if (Object.is(init, undefined) || Object.is(init, null)) {
      throw new Error('ConstMap init is not defined');
    } else {
      for (var key in init) {
        if (init.hasOwnProperty(key)) {
          var value = init[key];
          value = value !== null && value !== undefined ? value : key;
          this[key] = value;
          this._entries.push({ key: key, value: value });
        }
      }
    }
    Object.freeze(this);
    Object.freeze(this._entries);
  }

  _createClass(Enum, [{
    key: 'keys',
    value: function keys() {
      return Array.from(this._entries, function (e) {
        return e.keys;
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return Array.from(this._entries, function (e) {
        return e.value;
      });
    }
  }, {
    key: 'valuesExcluding',
    value: function valuesExcluding(exclude) {
      return Array.from(this.entriesExcluding(exclude), function (e) {
        return e.value;
      });
    }
  }, {
    key: 'entries',
    value: function entries() {
      return this._entries.slice();
    }
  }, {
    key: 'entriesExcluding',
    value: function entriesExcluding(exclude) {
      if (exclude === null || exclude === undefined) {
        return this._entries;
      }
      var found = [];
      if (Array.isArray(exclude)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            if (!exclude.includes(e.value)) {
              found.push(e.value);
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
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _e = _step2.value;

            if (_e.value !== exclude) {
              found.push(_e.value);
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
      return found;
    }
  }]);

  return Enum;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Option = exports.Option = function () {
  function Option(key, init) {
    _classCallCheck(this, Option);

    if (Object.is(key, undefined)) {
      throw Error('Option key is undefined');
    }
    this.key = key;
    if (typeof init === 'string' || init instanceof String) {
      this.title = init;
      this.value = key;
    } else {
      init = init === null || init === undefined ? {} : init;
      this.title = !Object.is(init.title, undefined) ? init.title : key;
      this.value = !Object.is(init.value, undefined) ? init.value : key;
    }
    Object.freeze(this);
  }

  _createClass(Option, [{
    key: 'toString',
    value: function toString() {
      return this.title;
    }
  }]);

  return Option;
}();

var Options = exports.Options = function () {
  function Options(optionsInit) {
    _classCallCheck(this, Options);

    this._all = [];
    this._keys = [];
    if (Object.is(optionsInit, undefined)) {
      throw new Error('Options init is null');
    } else if (Array.isArray(optionsInit)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = optionsInit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var option = new Option(key);
          this[key] = option;
          this._all.push(option);
          this._keys.push(key);
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
      for (var _key in optionsInit) {
        if (optionsInit.hasOwnProperty(_key)) {
          var init = optionsInit[_key];
          var _option = new Option(_key, init);
          this[_key] = _option;
          this._all.push(_option);
          this._keys.push(_key);
        }
      }
    }
    Object.freeze(this);
    Object.freeze(this._all);
    Object.freeze(this._keys);
  }

  _createClass(Options, [{
    key: 'list',
    value: function list() {
      return this._all.slice();
    }
  }, {
    key: 'listExcluding',
    value: function listExcluding(exclude) {
      if (exclude === null || exclude === undefined) {
        return this._all;
      }
      var found = [];
      if (Array.isArray(exclude)) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._all[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var o = _step2.value;

            if (!exclude.includes(o)) {
              found.push(o);
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
      } else {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this._all[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _o = _step3.value;

            if (_o !== exclude) {
              found.push(_o);
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
      }
      return found;
    }
  }, {
    key: 'keys',
    value: function keys() {
      return this._keys.slice();
    }
  }, {
    key: 'forKey',
    value: function forKey(key, ifUndefined) {
      var option = this[key];
      if (option === undefined) {
        return ifUndefined !== undefined ? ifUndefined : null;
      }
      return option;
    }
  }]);

  return Options;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlBuilder = function () {
  function UrlBuilder(baseUrl) {
    _classCallCheck(this, UrlBuilder);

    this.baseUrl = baseUrl;
    this._paths = [];
    this._queryParams = [];
  }

  _createClass(UrlBuilder, [{
    key: 'path',
    value: function path() {
      var _this = this;

      for (var _len = arguments.length, pathsArg = Array(_len), _key = 0; _key < _len; _key++) {
        pathsArg[_key] = arguments[_key];
      }

      if (pathsArg === null || pathsArg === undefined || pathsArg.length === 0) {
        throw new Error('Attempting to add empty set of sub paths to UrlBuilder');
      } else if (pathsArg.length === 1 && Object.prototype.toString.call(pathsArg[0]) === '[object Array]') {
        // If the argument itself is an array
        pathsArg = pathsArg[0];
      }

      pathsArg.forEach(function (path) {
        if (path === null || path === undefined || path.length === 0) {
          throw new Error('Null sub path provided to UrlBuilder, path so far: ' + _this._paths.join('/'));
        }
        // Remove any leading/trailing spaces or /'s
        path = path.toString().replace(/^\/+|^\s+|\/+$|\s+$/g, '');
        if (path === 0) {
          throw new Error('Empty sub path provided to UrlBuilder.');
        }
        _this._paths.push(path);
      });
      return this;
    }
  }, {
    key: 'query',
    value: function query(_query) {
      if (_query) {
        for (var key in _query) {
          if (_query.hasOwnProperty(key)) {
            var value = _query[key];
            if (value != null) {
              this._queryParams.push({ key: key, value: value });
            }
          }
        }
      }
    }
  }, {
    key: 'build',
    value: function build() {
      // Use first path element as our base.
      var url = this._baseUrl;
      this._paths.forEach(function (subPath) {
        url += '/' + subPath;
      });

      if (this._queryParams.length > 0) {
        var query = '';
        this._queryParams.forEach(function (queryParam) {
          query += queryParam.key + '=' + queryParam.value + '&';
        });
        url += '?' + query.substring(0, query.length - 1); // Removes last &
      }
      return url;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._baseUrl = '';
      this._paths = [];
      this._queryParams = [];
      return this;
    }
  }, {
    key: 'clearPath',
    value: function clearPath() {
      this._paths = [];
      return this;
    }
  }, {
    key: 'clearParams',
    value: function clearParams() {
      this._queryParams = [];
      return this;
    }
  }, {
    key: 'baseUrl',
    get: function get() {
      return this._baseUrl;
    },
    set: function set(baseUrl) {
      this._baseUrl = baseUrl != null ? baseUrl : '';
      // Remove leading/trailing spaces and trailing /'s (except when we only have a /)
      if (this._baseUrl !== '/') {
        this._baseUrl = baseUrl != null ? baseUrl.replace(/^\s+|\/+$|\s+$/g, '') : '';
      }
      return this;
    }
  }]);

  return UrlBuilder;
}();

exports.UrlBuilder = UrlBuilder;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'startsWith',
    value: function startsWith(value, prefix) {
      var str = void 0;
      if (!value || !prefix) {
        return false;
      }
      str = value.toString();
      return str.toString().indexOf(prefix) !== -1;
    }
  }, {
    key: 'endsWith',
    value: function endsWith(value, suffix) {
      var str = void 0;
      if (!value || !suffix) {
        return false;
      }
      str = value.toString();
      return str.toString().indexOf(suffix, str.length - suffix.length) !== -1;
    }
  }, {
    key: 'removeTrailing',
    value: function removeTrailing(value, remove) {
      if (!value || !remove) {
        return value;
      }
      var hasTrailing = value.indexOf(remove, value.length - remove.length) !== -1;
      if (hasTrailing) {
        value = value.substring(0, value.length - remove.length);
      }
      return value;
    }
  }, {
    key: 'type',
    value: function type(object) {
      return Object.prototype.toString.call(object);
    }
  }, {
    key: 'className',
    value: function className(object) {
      return object != null ? object.constructor.name : null;
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(obj) {
      return typeof obj === 'undefined';
    }
  }, {
    key: 'isUserDefinedObject',
    value: function isUserDefinedObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    }
  }, {
    key: 'isString',
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: 'isObject',
    value: function isObject(value) {
      return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
    }
  }, {
    key: 'isFunction',
    value: function isFunction(value) {
      return typeof value === 'function';
    }
  }, {
    key: 'isArray',
    value: function isArray(array) {
      return Array.isArray(array);
    }
  }, {
    key: 'isError',
    value: function isError(obj) {
      return obj instanceof Error;
    }
  }, {
    key: 'isDate',
    value: function isDate(obj) {
      return Object.prototype.toString.call(obj) === '[object Date]';
    }
  }, {
    key: 'toJson',
    value: function toJson(obj) {
      return JSON.stringify(obj);
    }
  }]);

  return Util;
}();

/***/ })
/******/ ]);
});