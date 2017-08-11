import Template from "./slider-area.html";
import Helpers from "../helpers.js"

export default class SliderArea {
    constructor(ID) {
        this._container = $('#' + ID)
        if (!this._container.length) {
            console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);
            return;
        }
        this._templateBaseID = "LGS";
        this._ID = ID;
        
        this._container[0].innerHTML = Helpers.prependTemplateIds(Template, this._ID, this._templateBaseID);
    }

    attachLoader(id) {
        let loader = $(`<div id="LGS-Loader-${id}" class="LGS-Loader"><p>Loading..</p></div>`);
        loader.css({'max-height':  this._container.height()});
        loader.css({'padding-top':  this._container.height()/2-20});
        loader.css({'max-width':  this._container.width()});
        this._container.find(`#${this._ID}-${this._templateBaseID}-Slider`).append(loader);
    }

    attachImage(image, id) {
        $(image).css({'max-height':  this._container.height()});
        $(image).css({'max-width':  this._container.width()});
        this._container.find(`#LGS-Loader-${id}`).replaceWith($(image));
    }
}