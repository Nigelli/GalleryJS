import Template from "./preview-bar.html";
import Utils from "../utilities/utils.js"

export default class PreviewBar {
    constructor(ID) {
        let container = $('#' + ID)
        if (!container.length) {
            console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);
            return;
        }
        this._ID = ID;
        this._template = Utils.prependTemplateIds(Template, ID, 'LGS');
        
        container[0].innerHTML = this._template;
    }
}