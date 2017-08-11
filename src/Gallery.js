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
      loadImagesByUrl(this._imgUrls).then(images => {
        this._slider.attachImages(images);
      }, error => {});
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
      this._slider.attachImages();
    }
    if (this._toolbarContainerID) {
      this._toolbar = new Toolbar(this._toolbarContainerID);
    }
    if (this._previewBarContainerID) {
      this._previewBar = new PreviewBar(this._previewBarContainerID)
    }
  }
}

function loadImagesByUrl(urls) {
  return new Promise((resolve, reject) => {
    let images = [];
    urls.forEach(function(url) {
      let img = $(`<img>`); 
      img.on('load', function() {
        images.push(img);
        if (images.length === urls.length) {
          resolve(images);
        }
      })
      img.attr("src", url);
    }, this);
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