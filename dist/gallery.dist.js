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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_bar_preview_bar_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_area_slider_area_js__ = __webpack_require__(6);
// GalleryJs
class Gallery{constructor(imgUrls,options){// Ensure image urls have been provide in an array.
if(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* default */].isArrayAndIsNotEmpty(imgUrls)){this._imgUrls=imgUrls}else{console.log("No Url's have been supplied or have not been supplied in the correct format. https://github.com/Nigelli/LittleGalleryJS");return}// Set Component ID's if provided 
this._sliderContainerID=mapOptionIfSet(options,"sliderContainerID");this._toolbarContainerID=mapOptionIfSet(options,"toolbarContainerID");this._previewBarContainerID=mapOptionIfSet(options,"previewBarContainerID");if(this._sliderContainerID){this._slider=new __WEBPACK_IMPORTED_MODULE_3__slider_area_slider_area_js__["a" /* default */](this._sliderContainerID)}if(this._toolbarContainerID){this._toolbar=new __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_js__["a" /* default */](this._toolbarContainerID)}if(this._previewBarContainerID){this._previewBar=new __WEBPACK_IMPORTED_MODULE_2__preview_bar_preview_bar_js__["a" /* default */](this._previewBarContainerID)}}}
/* harmony export (immutable) */ __webpack_exports__["Gallery"] = Gallery;
function mapOptionIfSet(options,option){if(options&&option){if(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* default */].hasOwnProperty(options,option)){return options[option]}}return false}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Helpers{static isArray(obj){if(obj&&Object.prototype.toString.call(obj)==='[object Array]'){return true}return false}static isArrayAndIsNotEmpty(arr){if(arr&&Object.prototype.toString.call(arr)==='[object Array]'&&arr.length){return true}return false}static hasOwnProperty(obj,prop){let proto=obj.__proto__||obj.constructor.prototype;return prop in obj&&(!(prop in proto)||proto[prop]!==obj[prop])}static prependTemplateIds(template,prependId,currentId){let replace='id='+currentId;let replaceWith='id='+prependId+'-'+currentId;var re=new RegExp(replace,'g');return template.replace(re,replaceWith)}}
/* harmony export (immutable) */ __webpack_exports__["a"] = Helpers;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toolbar_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_js__ = __webpack_require__(1);
class Toolbar{constructor(ID){let container=$("#"+ID);if(!container.length){console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);return}this._ID=ID;this._template=__WEBPACK_IMPORTED_MODULE_1__helpers_js__["a" /* default */].prependTemplateIds(__WEBPACK_IMPORTED_MODULE_0__toolbar_html___default.a,ID,"LGS");container[0].innerHTML=this._template}}
/* harmony export (immutable) */ __webpack_exports__["a"] = Toolbar;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div> <h3>this is the toolbar html</h3> <p>We need to display the slide controls here</p> </div>";

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview_bar_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preview_bar_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__preview_bar_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_js__ = __webpack_require__(1);
class PreviewBar{constructor(ID){let container=$("#"+ID);if(!container.length){console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);return}this._ID=ID;this._template=__WEBPACK_IMPORTED_MODULE_1__helpers_js__["a" /* default */].prependTemplateIds(__WEBPACK_IMPORTED_MODULE_0__preview_bar_html___default.a,ID,"LGS");container[0].innerHTML=this._template}}
/* harmony export (immutable) */ __webpack_exports__["a"] = PreviewBar;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div> <h3>this is the preview bar html</h3> <p>We need to display the thumbnails here</p> </div>";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_area_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_area_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__slider_area_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_js__ = __webpack_require__(1);
class SliderArea{constructor(ID){let container=$("#"+ID);if(!container.length){console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);return}this._ID=ID;this._template=__WEBPACK_IMPORTED_MODULE_1__helpers_js__["a" /* default */].prependTemplateIds(__WEBPACK_IMPORTED_MODULE_0__slider_area_html___default.a,ID,"LGS");container[0].innerHTML=this._template}}
/* harmony export (immutable) */ __webpack_exports__["a"] = SliderArea;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div id=LGSslider> <div id=LGS1> </div> <div id=LGS2> </div> <div id=LGS3> </div> </div>";

/***/ })
/******/ ]);