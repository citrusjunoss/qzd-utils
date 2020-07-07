"use strict";
exports.__esModule = true;
exports.isTypes = exports.filterParams = void 0;
var validate_1 = require("./validate");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function filterParams(params) {
    var res = {};
    if (!isTypes(params, ['Object', 'Array']))
        return params;
    Object.keys(params).forEach(function (k) {
        if (isTypes(params[k], 'Array')) {
            res[k] = params[k].map(function (item) { return filterParams(item); });
        }
        else if (isTypes(params[k], 'Object')) {
            res[k] = filterParams(params[k]);
        }
        else if (!validate_1.isEmpty(params[k])) {
            res[k] = params[k];
        }
    });
    return res;
}
exports.filterParams = filterParams;
/**
 * @description 查询数据是否是属于某种类型 或者 某几种类型中的 1 个
 * @param params 数据
 * @param types string | string [] eg: 'null' or ['null']
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function isTypes(params, types) {
    var dataList = [
        'function',
        'array',
        'object',
        'number',
        'date',
        'string',
        'boolean',
        'symbol',
        'null',
        'undefined',
    ];
    // 数组item
    if (Object.prototype.toString.call(types) === '[object Array]') {
        return types.some(function (item) { return isType(params, item); });
    }
    else if (Object.prototype.toString.call(types) === '[object String]') {
        return isType(params, types);
    }
    function isType(params, type) {
        if (!dataList.includes(type.toLowerCase())) {
            console.error("type " + type + " is not defined");
            return false;
        }
        return (Object.prototype.toString.call(params).toLowerCase() ===
            ("[object " + type + "]").toLowerCase());
    }
}
exports.isTypes = isTypes;
