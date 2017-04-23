// GalleryJs

// Image should be passed into the Gallery as an object {string:id, string:src, optional string:alt}
// When initializing the Gallery an array off thumbnails can be passed in to the Gallery

/* TODO:
  1: add and remove loading image for thumbnails and images
  2: work out the best way to manage the image slider for the main gallery
  3: work out which animations/interaction shuld happen on the slider vs previews
  4: link thumbnails to images
  5: load images from html elements attached to the gallery element
  6: auto resize components to available parent containers
*/

{
  class Gallery {
    constructor(images = [], thumbnails = []) {
      this._PreviewArea = this.getPreviewArea();
      this._ButtonArea = this.getButtonArea();
      this._SliderArea = this.getSliderArea();
      if (!this._PreviewArea || !this._ButtonArea || !this._SliderArea) {
        return error('Failed to initialize Gallery, Check that you have included the required elements');
      }

      this.addThumbnails(thumbnails);
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

    addThumbnails(thumbnails) {
      thumbnails.forEach((thumbnail) => {
        this.setThumbnail(thumbnail);
      })
    }

    addImages(images) {
      images.forEach((image) => {
        this.setImage(image);
      })
    }

    setThumbnail(image) {
      let alt = !image.alt ? "" : image.alt;
      if (!image.src) {
        return error("image source not provided", image)
      }
      if (!image.id) {
        return error("image id not provided", image)
      }
      let imgThumb = $(`<img src="${image.src}" id="thumb-${image.id}" alt="${alt}" class="gallery-thumbnail hidden">`)
      $(imgThumb).load(() => {
        $(this._PreviewArea).append(imgThumb);
      })
    }

    setImage(image) {
      let alt = !image.alt ? "" : image.alt;
      if (!image.src) {
        return error("image source not provided", image)
      }
      if (!image.id) {
        return error("image id not provided", image)
      }
      let imgThumb = $(`<img src="${image.src}" id="thumb-${image.id}" alt="${alt}" class="gallery-image hidden">`)
      $(imgThumb).load(() => {
        $(this._PreviewArea).append(imgThumb);
      })
    }

    error(err, object) {
      if (object) {
        console.log(err);
        console.log(object;
      } else {
        console.log(err);
      }
    }
  }

}
