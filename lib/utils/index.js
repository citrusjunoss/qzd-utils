"use strict";
exports.__esModule = true;
exports.isConsecutive = void 0;
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
