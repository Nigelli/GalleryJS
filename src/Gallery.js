import Helpers from "./helpers.js";
import Toolbar from "./toolbar/toolbar.js";
import PreviewBar from "./preview-bar/preview-bar.js";
import SliderArea from "./slider-area/slider-area.js";

// GalleryJs

export class Gallery {
  constructor(imgUrls, options) {
    // Ensure image urls have been provide in an array.
    if (Helpers.isArrayAndIsNotEmpty(imgUrls)) {
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
      this._slider = new SliderArea(this._sliderContainerID);
      for (var i = 0; i < imgUrls.length; i++) {
        this._slider.attachLoader(i);
      }
      imgUrls.forEach(function(url, i) {
        loadImage(url).then(img => {
          this._slider.attachImage(img, i);
        }, error => {
          console.log(error);
        })
      }, this);

    }
    if (this._toolbarContainerID) {
      this._toolbar = new Toolbar(this._toolbarContainerID);
    }
    if (this._previewBarContainerID) {
      this._previewBar = new PreviewBar(this._previewBarContainerID)
    }
  }
}

function loadImage(url) { 
  return new Promise((resolve, reject) => {
    let img = $(`<img>`); 
    img.on('load', e => { 
      resolve(e.currentTarget);
     });
    img.on('error', e => { 
      reject(`Image could not be loaded from url: ${url}`) ;
    });
/*** Debug Only ***/
    setTimeout(function() {
      img.attr("src", url);
    }, Math.random() * (5000 - 1000) + 1000);
/*** ---------  ***/
    // img.attr("src", url);
    
  })
}

function getOptionIfSet(options, option) {
  if (options && option) {
      if (Helpers.hasOwnProperty(options, option)) {
        return options[option];
      }
  }
  return false;
}