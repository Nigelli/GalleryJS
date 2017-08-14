export default class Utils {
    static isArray(obj) {
        if (obj && Object.prototype.toString.call( obj ) === '[object Array]') {
            return true
        }
        return false;
    }
    static isArrayAndIsNotEmpty(arr) {
        if (arr && Object.prototype.toString.call( arr ) === '[object Array]' && arr.length) {
            return true;
        }
        return false;
    }
    static hasOwnProperty(obj, prop) {
        let proto = obj.__proto__ || obj.constructor.prototype;
        return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
    }

    static prependTemplateIds(template, prependId, currentId) {
        let replace = 'id=' + currentId;
        let replaceWith = 'id=' + prependId + '-' + currentId;
        var re = new RegExp(replace,"g");
        return template.replace(re, replaceWith)
    }
}