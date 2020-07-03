"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.shaEncryption = exports.formatObject2values = void 0;
var js_md5_1 = __importDefault(require("js-md5"));
var js_sha1_1 = __importDefault(require("js-sha1"));
/**
 * 格式化请求参数，取所有的value值，并储存到数组arr中
 * @param {Object} data
 * @param {Array} arr
 */
function formatObject2values(data, arr) {
    if (data === void 0) { data = {}; }
    if (arr === void 0) { arr = []; }
    Object.keys(data).forEach(function (key) {
        if (Object.prototype.toString.call(data[key]) === '[object Array]' ||
            Object.prototype.toString.call(data[key]) === '[object Object]') {
            formatObject2values(data[key], arr);
        }
        else {
            if (data[key] || data[key] === 0 || data[key] + '' === 'false')
                arr.push(data[key]);
        }
    });
    return arr;
}
exports.formatObject2values = formatObject2values;
function shaEncryption(data, paramSig) {
    var unique = formatObject2values(data);
    var x = __spreadArrays(unique);
    var sort = x.sort().join('');
    if (paramSig) {
        return js_md5_1["default"](js_sha1_1["default"](js_md5_1["default"](sort)) + paramSig);
    }
    return js_sha1_1["default"](js_md5_1["default"](sort));
}
exports.shaEncryption = shaEncryption;
