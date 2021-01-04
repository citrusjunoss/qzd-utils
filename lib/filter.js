"use strict";
/**
 *  主要包含一些数据转换方法
 */
exports.__esModule = true;
exports.translateHMS = exports.hideNickname = exports.hidePhone = exports.toThousandsString = exports.numToChinese = void 0;
/**
 * @name 阿拉伯数字转换为中文数字
 * @param  {number} num
 */
function numToChinese(num) {
    var numStr = num + '';
    if (numStr === '')
        return '';
    if (!/^\d*(\.\d*)?$/.test(numStr))
        return '';
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
 * @name 货币格式化(千分位计数)
 * @param num | string | number
 * @see Number.toLocalString() 有一定兼容问题
 */
function toThousandsString(num) {
    if (!num)
        return '0';
    var splitNumber = ("" + num).split('.');
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
/**
 * @name 隐藏手机号
 * @param string
 * @see 130 **** 3027
 */
function hidePhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}
exports.hidePhone = hidePhone;
/**
 * @name 隐藏昵称
 * @param string
 * @see 程珀尔塔 -> 程****塔 / 程 -> 程****  / ‘’ -> ****
 */
function hideNickname(nickname) {
    var res = nickname.replace(/^(.).*(.)$/, '$1***$2');
    if (res.length === 1) {
        res = res + "****";
    }
    else if (res.length === 0) {
        res = '****';
    }
    return res;
}
exports.hideNickname = hideNickname;
/**
 * @name 毫秒时长转时分秒 考虑业务场景 匹配模式最大到天
 * @param duration 毫秒时长
 * @param pattern  模板匹配 DD/dd表示天 HH/hh表示小时 MM/mm表示分钟 SS/ss秒
 */
function translateHMS(duration, pattern) {
    if (pattern === void 0) { pattern = 'dd HH:mm:ss'; }
    var days = Math.floor(duration / (24 * 3600 * 1000)); // 计算出相差天数
    var leave1 = duration % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000)); // 计算相差小时数
    var leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000)); // 计算相差分钟数
    var leave3 = leave2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    var ds = String(days).length === 1 ? '0' + days : String(days);
    var hs = String(hours).length === 1 ? '0' + hours : String(hours);
    var ms = String(minutes).length === 1 ? '0' + minutes : String(minutes);
    var ss = String(seconds).length === 1 ? '0' + seconds : String(seconds);
    var exp = /d{1,2}|h{1,2}|m{1,2}|s{1,2}/gi;
    return pattern.replace(exp, function (match) {
        switch (true) {
            case match.toLocaleLowerCase() === 'd':
                return String(days).slice(0, 1);
            case match.toLocaleLowerCase() === 'dd':
                return ds;
            case match.toLocaleLowerCase() === 'h':
                return String(hours).slice(0, 1);
            case match.toLocaleLowerCase() === 'hh':
                return hs;
            case match.toLocaleLowerCase() === 'm':
                return String(minutes).slice(0, 1);
            case match.toLocaleLowerCase() === 'mm':
                return ms;
            case match.toLocaleLowerCase() === 's':
                return String(seconds).slice(0, 1);
            case match.toLocaleLowerCase() === 'ss':
                return ss;
            default:
                return '';
        }
    });
}
exports.translateHMS = translateHMS;
