var LittleGalleryJS =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
        key: 'isArray',
        value: function isArray(obj) {
            if (obj && Object.prototype.toString.call(obj) === '[object Array]') {
                return true;
            }
            return false;
        }
    }, {
        key: 'isArrayAndIsNotEmpty',
        value: function isArrayAndIsNotEmpty(arr) {
            if (arr && Object.prototype.toString.call(arr) === '[object Array]' && arr.length) {
                return true;
            }
            return false;
        }
    }, {
        key: 'hasOwnProperty',
        value: function hasOwnProperty(obj, prop) {
            var proto = obj.__proto__ || obj.constructor.prototype;
            return prop in obj && (!(prop in proto) || proto[prop] !== obj[prop]);
        }
    }, {
        key: 'prependTemplateIds',
        value: function prependTemplateIds(template, prependId, currentId) {
            var replace = 'id=' + currentId;
            var replaceWith = 'id=' + prependId + '-' + currentId;
            var re = new RegExp(replace, "g");
            return template.replace(re, replaceWith);
        }
    }]);

    return Helpers;
}();

exports.default = Helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = undefined;

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

var _toolbar = __webpack_require__(2);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _previewBar = __webpack_require__(4);

var _previewBar2 = _interopRequireDefault(_previewBar);

var _sliderArea = __webpack_require__(6);

var _sliderArea2 = _interopRequireDefault(_sliderArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// GalleryJs

var Gallery = exports.Gallery = function Gallery(imgUrls, options) {
  _classCallCheck(this, Gallery);

  // Ensure image urls have been provide in an array.
  if (_helpers2.default.isArrayAndIsNotEmpty(imgUrls)) {
    this._imgUrls = imgUrls;
  } else {
    console.log("No Url's have been supplied or have not been supplied in the correct format. https://github.com/Nigelli/LittleGalleryJS");
    return;
  }

  // Set Component ID's if provided 
  this._sliderContainerID = getOptionIfSet(options, 'sliderContainerID');
  this._toolbarContainerID = getOptionIfSet(options, 'toolbarContainerID');
  this._previewBarContainerID = getOptionIfSet(options, 'previewBarContainerID');

  if (this._sliderContainerID) {
    this._slider = new _sliderArea2.default(this._sliderContainerID);
    for (var i = 0; i < imgUrls.length; i++) {
      this._slider.attachLoader(i);
    }
    imgUrls.forEach(function (url, i) {
      var _this = this;

      loadImage(url).then(function (img) {
        _this._slider.attachImage(img, i);
      }, function (error) {
        console.log(error);
      });
    }, this);
  }
  if (this._toolbarContainerID) {
    this._toolbar = new _toolbar2.default(this._toolbarContainerID);
  }
  if (this._previewBarContainerID) {
    this._previewBar = new _previewBar2.default(this._previewBarContainerID);
  }
};

function loadImage(url) {
  return new Promise(function (resolve, reject) {
    var img = $("<img>");
    img.on('load', function (e) {
      resolve(e.currentTarget);
    });
    img.on('error', function (e) {
      reject("Image could not be loaded from url: " + url);
    });
    /*** Debug Only ***/
    setTimeout(function () {
      img.attr("src", url);
    }, Math.random() * (5000 - 1000) + 1000);
    /*** ---------  ***/
    // img.attr("src", url);
  });
}

function getOptionIfSet(options, option) {
  if (options && option) {
    if (_helpers2.default.hasOwnProperty(options, option)) {
      return options[option];
    }
  }
  return false;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toolbar = __webpack_require__(3);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toolbar = function Toolbar(ID) {
    _classCallCheck(this, Toolbar);

    var container = $('#' + ID);
    if (!container.length) {
        console.log("No element with the ID " + ID + " can be found. check usage at https://github.com/Nigelli/LittleGalleryJS");
        return;
    }
    this._ID = ID;
    this._template = _helpers2.default.prependTemplateIds(_toolbar2.default, ID, 'LGS');

    container[0].innerHTML = this._template;
};

exports.default = Toolbar;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div> <h3>this is the toolbar html</h3> <p>We need to display the slide controls here</p> </div>";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _previewBar = __webpack_require__(5);

var _previewBar2 = _interopRequireDefault(_previewBar);

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PreviewBar = function PreviewBar(ID) {
    _classCallCheck(this, PreviewBar);

    var container = $('#' + ID);
    if (!container.length) {
        console.log("No element with the ID " + ID + " can be found. check usage at https://github.com/Nigelli/LittleGalleryJS");
        return;
    }
    this._ID = ID;
    this._template = _helpers2.default.prependTemplateIds(_previewBar2.default, ID, 'LGS');

    container[0].innerHTML = this._template;
};

exports.default = PreviewBar;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div> <h3>this is the preview bar html</h3> <p>We need to display the thumbnails here</p> </div>";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sliderArea = __webpack_require__(7);

var _sliderArea2 = _interopRequireDefault(_sliderArea);

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SliderArea = function () {
    function SliderArea(ID) {
        _classCallCheck(this, SliderArea);

        this._container = $('#' + ID);
        if (!this._container.length) {
            console.log("No element with the ID " + ID + " can be found. check usage at https://github.com/Nigelli/LittleGalleryJS");
            return;
        }
        this._templateBaseID = "LGS";
        this._ID = ID;

        this._container[0].innerHTML = _helpers2.default.prependTemplateIds(_sliderArea2.default, this._ID, this._templateBaseID);
    }

    _createClass(SliderArea, [{
        key: "attachLoader",
        value: function attachLoader(id) {
            var loader = $("<div id=\"LGS-Loader-" + id + "\" class=\"LGS-Loader\"><p>Loading..</p></div>");
            loader.css({ 'max-height': this._container.height() });
            loader.css({ 'padding-top': this._container.height() / 2 - 20 });
            loader.css({ 'max-width': this._container.width() });
            this._container.find("#" + this._ID + "-" + this._templateBaseID + "-Slider").append(loader);
        }
    }, {
        key: "attachImage",
        value: function attachImage(image, id) {
            $(image).css({ 'max-height': this._container.height() });
            $(image).css({ 'max-width': this._container.width() });
            this._container.find("#LGS-Loader-" + id).replaceWith($(image));
        }
    }]);

    return SliderArea;
}();

exports.default = SliderArea;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div id=LGS-Slider class=LGS-Slider> </div>";

/***/ })
/******/ ]);