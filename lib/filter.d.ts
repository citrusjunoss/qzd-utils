/**
 *  主要包含一些数据转换方法
 */
/**
 * @description 阿拉伯数字转换为中文数字
 * @param  {number} num
 */
export declare function numToChinese(num: number): string;
/**
 * @description 货币格式化(千分位计数)
 * @param number | string
 * @see Number.toLocalString() 有一定兼容问题
 */
export declare function toThousandsString(number: number | string): string;
