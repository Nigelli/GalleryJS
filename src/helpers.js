export default class Helpers {
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
        var proto = obj.__proto__ || obj.constructor.prototype;
        return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
    }
}