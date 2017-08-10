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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preview_bar_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_area_js__ = __webpack_require__(3);




// GalleryJs

// Image should be passed into the Gallery as an object {string:src, string:thumbsrc, optional string:alt}
// When initializing the Gallery an array off thumbnails can be passed in to the Gallery

/* TODO:
  1: add and remove loading image for thumbnails and images
  2: work out the best way to manage the image slider for the main gallery
  3: work out which animations/interaction shuld happen on the slider vs previews
  5: load images from html elements attached to the gallery element
  6: auto resize components to available parent containers
*/

{
  class Gallery {
    constructor(images = [], thumbnails = true) {
      this._PreviewArea = this.getPreviewArea();
      this._ButtonArea = this.getButtonArea();
      this._SliderArea = this.getSliderArea();
      if (!this._PreviewArea || !this._ButtonArea || !this._SliderArea) {
        return error('Failed to initialize Gallery, Check that you have included the required elements');
      }

      this.addImages(images);
    }
    // The three areas required in order to initialize the Gallery
    getPreviewArea() {
      return document.getElementById('#galleryPreviewArea');
    }
    getButtonArea() {
      return document.getElementById('#galleryButtonArea');
    }
    getSliderArea() {
      return document.getElementById('#gallerySliderArea');
    }

    addImages(images) {
      images.forEach(image => {
        this.size = this.size + 1;
        if (!noThumbnails) {
          this.setThumbnail(image);
        }
        this.setImage(image);
      });
    }

    setThumbnail(image) {
      let alt = !image.alt ? "" : image.alt;
      if (!image.thumbsrc) {
        return error("thumbnail source not provided", image);
      }
      let imgThumb = $(`<img src="${image.thumbsrc}" id="thumb-${this.size}" alt="${alt}" class="gallery-thumbnail hidden">`);
      $(imgThumb).load(() => {
        $(this._PreviewArea).append(imgThumb);
        $(imgThumb).on('click', e => {
          slideToImage(this.size);
        });
      });
    }

    setImage(image) {
      let alt = !image.alt ? "" : image.alt;
      if (!image.src) {
        return error("image source not provided", image);
      }
      let imgThumb = $(`<img src="${image.src}" id="image-${this.size}" alt="${alt}" class="gallery-image hidden">`);
      $(imgThumb).load(() => {
        $(this._PreviewArea).append(imgThumb);
      });
    }

    slideLeft() {
      $('#galleryPreviewArea').animate({ left: $('#galleryPreviewArea').left() - $('#galleryPreviewArea').width() });
    }

    slideRight() {
      $('#galleryPreviewArea').animate({ left: $('#galleryPreviewArea').left() + $('#galleryPreviewArea').width() });
    }

    slideToImage(posInGallery) {
      $('#galleryPreviewArea').animate({ left: 0 - (posInGallery - 1) * $('#galleryPreviewArea').width() });
    }

    error(err, object) {
      if (object) {
        console.log(err);
        console.log(object);
      } else {
        console.log(err);
      }
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Toolbar {}
/* unused harmony export Toolbar */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PreviewBar {}
/* unused harmony export PreviewBar */


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SliderArea {}
/* unused harmony export SliderArea */


/***/ })
/******/ ]);