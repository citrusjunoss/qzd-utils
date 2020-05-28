"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConsecutive = void 0;
// 检测是否连续
function isConsecutive(str, isReverse) {
    if (isReverse === void 0) { isReverse = true; }
    var arr = str.split('');
    var flag = true;
    for (var i = 1; i < arr.length - 1; i++) {
        var firstIndex = arr[i - 1].charCodeAt(0);
        var secondIndex = arr[i].charCodeAt(0);
        var thirdIndex = arr[i + 1].charCodeAt(0);
        thirdIndex - secondIndex == 1;
        secondIndex - firstIndex == 1;
        if ((thirdIndex - secondIndex == 1 && secondIndex - firstIndex == 1) ||
            (thirdIndex - secondIndex == -1 && secondIndex - firstIndex == -1)) {
            flag = false;
        }
    }
    if (!flag) {
        return flag;
    }
    return flag;
}
exports.isConsecutive = isConsecutive;
