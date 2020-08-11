"use strict";
exports.__esModule = true;
exports.browserEnv = void 0;
function isUcWeb(ua) {
    try {
        return (parseFloat(ua.match(/ucweb\d+\.\d+/gi)
            .toString()
            .match(/\d+\.\d+/)
            .toString()) >= 8.2);
    }
    catch (e) {
        if (ua.indexOf('UC') > -1) {
            return true;
        }
        return false;
    }
}
// 判断浏览器内核、手机系统等，使用 browser.userAgent.mobile
function allEnv() {
    var ua = navigator.userAgent;
    var ualower = navigator.userAgent.toLocaleLowerCase();
    return {
        trident: ua.indexOf('Trident') > -1,
        presto: ua.indexOf('Presto') > -1,
        webKit: ua.indexOf('AppleWebKit') > -1,
        gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1,
        mobile: !!ua.match(/AppleWebKit.*Mobile.*/) || !!ua.match(/AppleWebKit/),
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: ua.indexOf('Android') > -1 || ua.indexOf('Mac') > -1,
        iPhone: ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1,
        iPad: ua.indexOf('iPad') > -1,
        webApp: ua.indexOf('Safari') == -1,
        QQbrw: ua.indexOf('MQQBrowser') > -1,
        weiXin: ua.indexOf('MicroMessenger') > -1,
        QQ: ualower.match(/\sQQ/i) == ' qq',
        weiBo: ualower.match(/WeiBo/i) == 'weibo',
        ucLowEnd: ua.indexOf('UCWEB7.') > -1,
        ucSpecial: ua.indexOf('rv:1.2.3.4') > -1,
        webview: (!(ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)) &&
            ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)),
        ucweb: isUcWeb(ua),
        Symbian: ua.indexOf('Symbian') > -1,
        ucSB: ua.indexOf('Firofox/1.') > -1,
        qzd: ua.indexOf('QZDVName') > -1
    };
}
/**
 * @description 判断是否是在某个环境内运行 支持数组 和 字符串 目前支持类型有
 * @param  | 'trident' | 'presto' | 'webKit' | 'gecko' | 'mobile' | 'ios' | 'android' | 'iPhone' | 'iPad'| 'webApp'
 * @param   | 'QQbrw'| 'weiXin'| 'QQ'| 'weiBo'| 'ucLowEnd'| 'ucweb'| 'ucSpecial'| 'webview'| 'Symbian'| 'ucSB'| 'qzd';
 */
function browserEnv(env) {
    // node 环境直接返回false
    if (typeof window === 'undefined')
        return false;
    var allEnvs = allEnv();
    if (typeof env === 'string') {
        return allEnvs[env];
    }
    if (Array.isArray(env)) {
        return env.every(function (item) { return allEnvs[item]; });
    }
    return false;
}
exports.browserEnv = browserEnv;
