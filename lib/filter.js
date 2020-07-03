"use strict";
/**
 *  主要包含一些数据转换方法
 */
exports.__esModule = true;
exports.toThousandsString = exports.numToChinese = void 0;
/**
 * @description 阿拉伯数字转换为中文数字
 * @param  {number} num
 */
function numToChinese(num) {
    var numStr = num + '';
    if (numStr === '')
        return '';
    if (!/^\d*(\.\d*)?$/.test(numStr)) {
        console.error('Not Number!');
        return '';
    }
    var cnNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    var cnIntRadice = ['', '十', '百', '千'];
    var cnIntUnits = ['', '万', '亿', '兆'];
    var integerNum;
    var decimalNum;
    var chineseStr = '';
    var parts;
    if (Number(numStr) - 0 === 0) {
        chineseStr = cnNums[0];
        return chineseStr;
    }
    if (numStr.indexOf('.') === -1) {
        integerNum = numStr;
        decimalNum = '';
    }
    else {
        parts = numStr.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 2);
    }
    // 整数部分
    if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (var i = 0; i < IntLen; i++) {
            var n = integerNum.substr(i, 1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n === '0') {
                zeroCount++;
            }
            else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m === 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
    }
    // 小数部分
    if (decimalNum !== '') {
        var decLen = decimalNum.length;
        var decimalNumStr = '';
        for (var i = 0; i < decLen; i++) {
            var n = decimalNum.substr(i, 1);
            if (n !== '0') {
                decimalNumStr += cnNums[Number(n)];
            }
        }
        if (decimalNumStr)
            chineseStr += "\u70B9" + decimalNumStr;
    }
    return chineseStr;
}
exports.numToChinese = numToChinese;
/**
 * @description 货币格式化(千分位计数)
 * @param number | string
 * @see Number.toLocalString() 有一定兼容问题
 */
function toThousandsString(number) {
    var splitNumber = number.toString().split('.');
    var integer = splitNumber[0];
    var decimal = splitNumber[1] || '';
    var result = '';
    while (integer.length > 3) {
        result = ',' + integer.slice(-3) + result;
        integer = integer.slice(0, integer.length - 3);
    }
    if (integer) {
        result = integer + result;
    }
    if (decimal === '') {
        return result;
    }
    return result + '.' + decimal;
}
exports.toThousandsString = toThousandsString;
