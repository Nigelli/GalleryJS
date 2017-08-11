import Template from "./slider-area.html";
import Helpers from "../helpers.js"

export default class SliderArea {
    constructor(ID) {
        let container = $('#' + ID)
        if (!container.length) {
            console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);
            return;
        }
        this._ID = ID;
        this._template = Helpers.prependTemplateIds(Template, ID, 'LGS');
        
        container[0].innerHTML = this._template;
    }
}