type browserType =
  | 'trident'
  | 'presto'
  | 'webKit'
  | 'gecko'
  | 'mobile'
  | 'ios'
  | 'android'
  | 'iPhone'
  | 'iPad'
  | 'webApp'
  | 'QQbrw'
  | 'weiXin'
  | 'wxApp'
  | 'QQ'
  | 'weiBo'
  | 'ucLowEnd'
  | 'ucweb'
  | 'ucSpecial'
  | 'webview'
  | 'Symbian'
  | 'ucSB'
  | 'qzd'
  | 'huaWei';

function isUcWeb(ua: string): boolean {
  try {
    return (
      parseFloat(
        (ua.match(/ucweb\d+\.\d+/gi) as any)
          .toString()
          .match(/\d+\.\d+/)
          .toString(),
      ) >= 8.2
    );
  } catch (e) {
    if (ua.indexOf('UC') > -1) {
      return true;
    }
    return false;
  }
}
// 判断浏览器内核、手机系统等，使用 browser.userAgent.mobile
function allEnv(): {
  [key in browserType]: boolean;
} {
  const ua = navigator.userAgent;
  const ualower: string = navigator.userAgent.toLocaleLowerCase();
  return {
    trident: ua.indexOf('Trident') > -1, // IE内核
    presto: ua.indexOf('Presto') > -1, // opera内核
    webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, // 火狐内核
    mobile: !!ua.match(/AppleWebKit.*Mobile.*/) || !!ua.match(/AppleWebKit/), // 是否为移动终端
    ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // IOS终端
    android: ua.indexOf('Android') > -1 || ua.indexOf('Mac') > -1, // 安卓终端
    iPhone: ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1, // 是否为iphone或QQHD浏览器
    iPad: ua.indexOf('iPad') > -1, // 是否为iPad
    webApp: ua.indexOf('Safari') == -1, // 是否web应用程序，没有头部与底部
    QQbrw: ua.indexOf('MQQBrowser') > -1, // QQ浏览器(手机上的)
    weiXin: ua.indexOf('MicroMessenger') > -1, // 微信
    wxApp: ua.indexOf('miniProgram') > -1, // 微信小程序
    QQ: (ualower.match(/\sQQ/i) as any) == ' qq', // QQ App内置浏览器（需要配合使用）
    weiBo: (ualower.match(/WeiBo/i) as any) == 'weibo', // 微博
    ucLowEnd: ua.indexOf('UCWEB7.') > -1, //
    ucSpecial: ua.indexOf('rv:1.2.3.4') > -1,
    webview: (!(ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)) &&
      ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)) as boolean,
    ucweb: isUcWeb(ua),
    Symbian: ua.indexOf('Symbian') > -1,
    ucSB: ua.indexOf('Firofox/1.') > -1,
    qzd: ua.indexOf('QZDVName') > -1,
    huaWei: ua.indexOf('HUAWEI') > -1,
  };
}

/**
 * @description 判断是否是在某个环境内运行 支持数组 和 字符串 目前支持类型有
 * @param  | 'trident' | 'presto' | 'webKit' | 'gecko' | 'mobile' | 'ios' | 'android' | 'iPhone' | 'iPad'| 'webApp'
 * @param   | 'QQbrw'| 'weiXin'| 'QQ'| 'weiBo'| 'ucLowEnd'| 'ucweb'| 'ucSpecial'| 'webview'| 'Symbian'| 'ucSB'| 'qzd';
 */
export function browserEnv(env: browserType | browserType[]): boolean {
  // node 环境直接返回false
  if (typeof window === 'undefined') return false;
  const allEnvs = allEnv();
  if (typeof env === 'string') {
    return allEnvs[env];
  }
  if (Array.isArray(env)) {
    return env.every((item) => allEnvs[item]);
  }
  return false;
}
