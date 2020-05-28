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
 *
 * @param params
 */
export declare function vailPassword(params: vailPasswordOption): vailPasswordResult;
export declare function validateURL(textval: string): boolean;
export declare function validateLowerCase(str: string): boolean;
export declare function validateUpperCase(str: string): boolean;
export declare function validatAlphabets(str: string): boolean;
/**
 * @description 判断是否全为数字
 * @param str
 * @returns {boolean}
 */
export declare function isDigital(str: string): boolean;
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export declare function validateEmail(email: string): boolean;
/**
 * @description 判断是否为电话号码
 * @param str
 * @returns {boolean}
 */
export declare function isPhoneNumber(str: string): boolean;
export declare function isTelephoneNumber(str: string): boolean;
export {};
