"use strict";
exports.__esModule = true;
exports.accDiv = exports.isConsecutive = void 0;
/**
 *
 * @param str           需要检测的字符串
 * @param isReverse     是否反序检测
 */
function isConsecutive(str, isReverse) {
    if (isReverse === void 0) { isReverse = true; }
    var arr = str.split('');
    var flag = true;
    for (var i = 1; i < arr.length - 1; i++) {
        var firstIndex = arr[i - 1].charCodeAt(0);
        var secondIndex = arr[i].charCodeAt(0);
        var thirdIndex = arr[i + 1].charCodeAt(0);
        if ((thirdIndex - secondIndex == 1 && secondIndex - firstIndex == 1) ||
            (isReverse &&
                thirdIndex - secondIndex == -1 &&
                secondIndex - firstIndex == -1)) {
            flag = false;
        }
    }
    if (!flag) {
        return flag;
    }
    return flag;
}
exports.isConsecutive = isConsecutive;
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0;
    try {
        var a = arg1.toString().split('.');
        t1 = a.length > 1 ? a[1].length : 0;
    }
    catch (e) {
        throw new Error(e);
    }
    try {
        var a = arg2.toString().split('.');
        t2 = a.length > 1 ? a[1].length : 0;
    }
    catch (e) {
        throw new Error(e);
    }
    var r1 = Number(arg1.toString().replace('.', ''));
    var r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}
exports.accDiv = accDiv;
