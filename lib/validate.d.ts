interface vailPasswordOption {
    /** 密码字符串 */
    password: string;
    /** 用户名 */
    account?: string;
}
interface vailPasswordResult {
    success: boolean;
    errCode: 0 | 1 | 2 | 3 | 4;
    text: string;
}
/**
 * @param params
 * @returns
 */
export declare function vailPassword(params: vailPasswordOption): vailPasswordResult;
/**
 * @name 是否合法uri
 * @param str
 * @returns {boolean}
 */
export declare function validateURL(textval: string): boolean;
/**
 * @name 小写字母
 * @param str
 * @returns {boolean}
 */
export declare function validateLowerCase(str: string): boolean;
/**
 * @name 大写字母
 * @param str
 * @returns {boolean}
 */
export declare function validateUpperCase(str: string): boolean;
/**
 * @name 大小写字母
 * @param str
 * @returns {boolean}
 */
export declare function validatAlphabets(str: string): boolean;
/**
 * @name 判断是否全为数字
 * @param str
 * @returns {boolean}
 */
export declare function isDigital(str: string): boolean;
/**
 * @name 判断是否为邮箱
 * @param email
 * @returns {boolean}
 */
export declare function validateEmail(email: string): boolean;
/**
 * @name 判断是否为电话号码
 * @param str
 * @returns {boolean}
 */
export declare function isPhoneNumber(str: string): boolean;
/**
 * @name 判断是否为固定电话
 * @param str
 * @returns {boolean}
 */
export declare function isTelephoneNumber(str: string): boolean;
/**
 * @name 是否为QQ号
 * @param qq
 */
export declare function isQQ(qq: string): boolean;
/**
 * @name 是否是身份证号码
 * @param str 身份证号码
 * @returns {boolean}
 */
export declare function isIDCard(str: string): boolean;
/**
 * @name  数据为空(包含null,undefined,空字符)
 * @param str
 */
export declare function isEmpty(str: any): boolean;
export {};
