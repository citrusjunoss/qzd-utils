/**
 *  主要包含一些数据转换方法
 */
/**
 * @name 阿拉伯数字转换为中文数字
 * @param  {number} num
 */
export declare function numToChinese(num: number): string;
/**
 * @name 货币格式化(千分位计数)
 * @param num | string | number
 * @see Number.toLocalString() 有一定兼容问题
 */
export declare function toThousandsString(num: number | string): string;
/**
 * @name 隐藏手机号
 * @param string
 * @see 130 **** 3027
 */
export declare function hidePhone(phone: string): string;
/**
 * @name 隐藏昵称
 * @param string
 * @see 程珀尔塔 -> 程****塔 / 程 -> 程****  / ‘’ -> ****
 */
export declare function hideNickname(nickname: string): string;
/**
 * @name 毫秒时长转时分秒 考虑业务场景 匹配模式最大到天
 * @param duration 毫秒时长
 * @param pattern  模板匹配 DD/dd表示天 HH/hh表示小时 MM/mm表示分钟 SS/ss秒
 */
export declare function translateHMS(duration: number, pattern?: string): string;
