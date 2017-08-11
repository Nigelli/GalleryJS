# Little Gallery JS

A general purpose JavaScript photo gallery plugin  

## Currently in early development

The goal is to provide a gallery that will dynamically fit where placed by the user.
It will have optional control buttons either as a part of the main slider or as a seperate element elsewhere on the page.
There will also be an optional preview bar that can be placed on the page to display thumbnail images in a scrollable pane.  

## Contribute

Built using Webpack so super easy to build yourself. 
1. Pull the project down
2. `npm install`
3. `webpack` to compile the dist file
4. Add the compiled `gallery.dist.js` file to your chosen html page for testing

## Usage

Add the following tag to the header of your page. making sure you set the src to the location of little gallary.
`<script src="/location/of/littlegalleryjs.dist.js"></script>`
Add an script tag at the bottom of your `body` tag.
You need to create a new instance of the gallery inside this tag. See the example below.

```
var gallery1 = new LittleGalleryJS.Gallery(
   [
       '/path/to/image1.jpg'
   ],
   {
       sliderContainerID: 'gallerySliderArea', 
       toolbarContainerID: 'galleryToolbarArea' 
   }
);
```

This will add a new gallery with the main slider with seperate controls.

## Arguments

### Required

1. Array of image sources
2. Options object containing the `{ sliderContainerID: yourSliderElementsID }`. The needs to be the id of the element that will contain the slider.  

### Optional

1. ID's for the element you would like the house the preview bar and or the toolbar.
```
{ 
    toolbarContainerID: yourToolbarElementsID, 
    previewBarContainerID: yourpreviewBarElementsID 
}
```