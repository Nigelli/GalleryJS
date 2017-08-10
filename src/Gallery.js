import * as toolbar from "./toolbar/toolbar.js";
import * as previewBar from "./preview-bar/preview-bar.js";
import * as sliderArea from "./slider-area/slider-area.js";
import toolbarTemplate from "./toolbar/toolbar.html";
import previewBarTemplate from "./preview-bar/preview-bar.html";
import sliderAreaTemplate from "./slider-area/slider-area.html";

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
      images.forEach((image) => {
        this.size = this.size + 1;
        if (!noThumbnails) {
          this.setThumbnail(image);
        }
        this.setImage(image);
      })
    }

    setThumbnail(image) {
      let alt = !image.alt ? "" : image.alt;
      if (!image.thumbsrc) {
        return error("thumbnail source not provided", image)
      }
      let imgThumb = $(`<img src="${image.thumbsrc}" id="thumb-${this.size}" alt="${alt}" class="gallery-thumbnail hidden">`)
      $(imgThumb).load(() => {
        $(this._PreviewArea).append(imgThumb);
        $(imgThumb).on('click', (e) => {
          slideToImage(this.size);
        })
      })
    }

    setImage(image) {
      let alt = !image.alt ? "" : image.alt;
      if (!image.src) {
        return error("image source not provided", image)
      }
      let imgThumb = $(`<img src="${image.src}" id="image-${this.size}" alt="${alt}" class="gallery-image hidden">`)
      $(imgThumb).load(() => {
        $(this._PreviewArea).append(imgThumb);
      })
    }

    slideLeft() {
      $('#galleryPreviewArea').animate({left: ($('#galleryPreviewArea').left() - $('#galleryPreviewArea').width())})
    }

    slideRight() {
      $('#galleryPreviewArea').animate({left: ($('#galleryPreviewArea').left() + $('#galleryPreviewArea').width())})
    }

    slideToImage(posInGallery) {
      $('#galleryPreviewArea').animate({left: (0 - ((posInGallery - 1) * $('#galleryPreviewArea').width()))});
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
