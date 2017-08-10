import Helpers from "./helpers.js";
import Toolbar from "./toolbar/toolbar.js";
import PreviewBar from "./preview-bar/preview-bar.js";
import SliderArea from "./slider-area/slider-area.js";
import toolbarTemplate from "./toolbar/toolbar.html";
import previewBarTemplate from "./preview-bar/preview-bar.html";
import sliderAreaTemplate from "./slider-area/slider-area.html";

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
    this._sliderContainerID = mapOptionIfSet(options, 'sliderContainerID');
    this._toolbarContainerID = mapOptionIfSet(options, 'toolbarContainerID');
    this._previewBarContainerID = mapOptionIfSet(options, 'previewBarContainerID');

    if (this._sliderContainerID) {
      this._slider = new SliderArea(this._sliderContainerID);
    }
    if (this._toolbarContainerID) {
      this._toolbar = new Toolbar(this._toolbarContainerID);
    }
    if (this._previewBarContainerID) {
      this._previewBar = new PreviewBar(this._previewBarContainerID)
    }
  }
}

function mapOptionIfSet(options, option) {
  if (options && option) {
      if (Helpers.hasOwnProperty(options, option)) {
        return options[option];
      }
  }
  return false;
}