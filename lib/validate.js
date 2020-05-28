"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTelephoneNumber = exports.isPhoneNumber = exports.validateEmail = exports.isDigital = exports.validatAlphabets = exports.validateUpperCase = exports.validateLowerCase = exports.validateURL = exports.vailPassword = void 0;
var utils_1 = require("./utils");
/**
 *
 * @param params
 */
function vailPassword(params) {
    var password = params.password, account = params.account;
    //密码必须包含数字和字母
    //10-20位包含数字、字母、特殊字符两种以上的密码
    var regex = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
    if (!regex.test(password)) {
        return {
            success: false,
            errCode: 1,
            text: '10-20位包含数字、字母、特殊字符两种以上的密码',
        };
    }
    //不能连续字符（如123、abc）连续3位或3位以上
    if (!utils_1.isConsecutive(password)) {
        return {
            success: false,
            errCode: 2,
            text: '您的密码不能连续字符（如123、abc、321、cba）连续3位或3位以上',
        };
    }
    //不能相同字符（如111、aaa）连续3位或3位以上
    var re = /(\w)*(\w)\2{2}(\w)*/g;
    if (re.test(password)) {
        return {
            success: false,
            errCode: 3,
            text: '您的密码不能相同字符（如111、aaa）连续3位或3位以上',
        };
    }
    if (account && password.trim().indexOf(account.trim()) > -1) {
        return {
            success: false,
            errCode: 4,
            text: '您的密码不能包含用户名',
        };
    }
    return {
        success: true,
        errCode: 0,
        text: '校验通过',
    };
}
exports.vailPassword = vailPassword;
/* 合法uri*/
function validateURL(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}
exports.validateURL = validateURL;
/* 小写字母*/
function validateLowerCase(str) {
    var reg = /^[a-z]+$/;
    return reg.test(str);
}
exports.validateLowerCase = validateLowerCase;
/* 大写字母*/
function validateUpperCase(str) {
    var reg = /^[A-Z]+$/;
    return reg.test(str);
}
exports.validateUpperCase = validateUpperCase;
/* 大小写字母*/
function validatAlphabets(str) {
    var reg = /^[A-Za-z]+$/;
    return reg.test(str);
}
exports.validatAlphabets = validatAlphabets;
/**
 * @description 判断是否全为数字
 * @param str
 * @returns {boolean}
 */
function isDigital(str) {
    var reg = /^[0-9]+$/;
    return reg.test(str);
}
exports.isDigital = isDigital;
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
exports.validateEmail = validateEmail;
/**
 * @description 判断是否为电话号码
 * @param str
 * @returns {boolean}
 */
function isPhoneNumber(str) {
    var reg = /^0?(13[0-9]|15[012356789]|166|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(str);
}
exports.isPhoneNumber = isPhoneNumber;
/*
  判断是否是 固定电话
  @returns {boolean}
*/
function isTelephoneNumber(str) {
    var reg = /^(0?(13[0-9]|15[012356789]|166|17[013678]|18[0-9]|14[57])[0-9]{8})|(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
    return reg.test(str);
}
exports.isTelephoneNumber = isTelephoneNumber;
