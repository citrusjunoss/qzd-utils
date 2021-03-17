declare type browserType = 'trident' | 'presto' | 'webKit' | 'gecko' | 'mobile' | 'ios' | 'android' | 'iPhone' | 'iPad' | 'webApp' | 'QQbrw' | 'weiXin' | 'wxApp' | 'QQ' | 'weiBo' | 'ucLowEnd' | 'ucweb' | 'ucSpecial' | 'webview' | 'Symbian' | 'ucSB' | 'qzd' | 'huaWei';
/**
 * @description 判断是否是在某个环境内运行 支持数组 和 字符串 目前支持类型有
 * @param  | 'trident' | 'presto' | 'webKit' | 'gecko' | 'mobile' | 'ios' | 'android' | 'iPhone' | 'iPad'| 'webApp'
 * @param   | 'QQbrw'| 'weiXin'| 'QQ'| 'weiBo'| 'ucLowEnd'| 'ucweb'| 'ucSpecial'| 'webview'| 'Symbian'| 'ucSB'| 'qzd';
 */
export declare function browserEnv(env: browserType | browserType[]): boolean;
export {};
