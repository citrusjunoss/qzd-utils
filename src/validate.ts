import { isConsecutive } from './utils';

interface vailPasswordOption {
  /** 密码字符串 */
  password: string;
  /** 用户名 */
  account?: string;
}

interface vailPasswordResult {
  /* 是否检验通过 */
  success: boolean;
  /* 状态码 0 成功  1  密码过于简单  2 有连续字符 3 有重复字符 4 密码包含账户名*/
  errCode: 0 | 1 | 2 | 3 | 4;
  /* 默认错误提示 */
  text: string;
}
/**
 * @param params
 * @returns
 */
export function vailPassword(params: vailPasswordOption): vailPasswordResult {
  const { password, account } = params;
  //密码必须包含数字和字母
  //10-20位包含数字、字母、特殊字符两种以上的密码
  const regex = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
  if (!regex.test(password)) {
    return {
      success: false,
      errCode: 1,
      text: '10-20位包含数字、字母、特殊字符两种以上的密码',
    };
  }
  //不能连续字符（如123、abc）连续3位或3位以上
  if (!isConsecutive(password)) {
    return {
      success: false,
      errCode: 2,
      text: '您的密码不能连续字符（如123、abc、321、cba）连续3位或3位以上',
    };
  }
  //不能相同字符（如111、aaa）连续3位或3位以上
  const re = /(\w)*(\w)\2{2}(\w)*/g;
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

/**
 * @name 是否合法uri
 * @param str
 * @returns {boolean}
 */
export function validateURL(textval: string): boolean {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/**
 * @name 小写字母
 * @param str
 * @returns {boolean}
 */
export function validateLowerCase(str: string): boolean {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * @name 大写字母
 * @param str
 * @returns {boolean}
 */
export function validateUpperCase(str: string): boolean {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * @name 大小写字母
 * @param str
 * @returns {boolean}
 */
export function validatAlphabets(str: string): boolean {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * @name 判断是否全为数字
 * @param str
 * @returns {boolean}
 */
export function isDigital(str: string): boolean {
  const reg = /^[0-9]+$/;
  return reg.test(str);
}

/**
 * @name 判断是否为邮箱
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email: string): boolean {
  /* eslint-disable-next-line */
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * @name 判断是否为电话号码
 * @param str
 * @returns {boolean}
 */
export function isPhoneNumber(str: string): boolean {
  const reg = /^1\d{10}$/;
  return reg.test(str);
}

/**
 * @name 判断是否为固定电话
 * @param str
 * @returns {boolean}
 */
export function isTelephoneNumber(str: string): boolean {
  const reg = /^(0?(13[0-9]|15[012356789]|166|17[013678]|18[0-9]|14[57])[0-9]{8})|(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;
  return reg.test(str);
}

/**
 * @name 是否为QQ号
 * @param qq
 */
export function isQQ(qq: string): boolean {
  const qq_reg = new RegExp(/^[1-9][0-9]{4,}$/);
  if (!qq_reg.test(qq)) {
    return false;
  }
  return true;
}

/**
 * @name 是否是身份证号码
 * @param str 身份证号码
 * @returns {boolean}
 */
export function isIDCard(str: string): boolean {
  const IDCardReg = new RegExp(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
  if (!IDCardReg.test(str)) {
    return false;
  }
  return true;
}

/**
 * @name  数据为空(包含null,undefined,空字符)
 * @param str
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isEmpty(str: any): boolean {
  if (
    str == null ||
    typeof str == 'undefined' ||
    (typeof str === 'string' && str.trim() == '')
  ) {
    return true;
  }
  return false;
}
/**
 * @name  数据为空(包含null,undefined,空字符)
 * @param str
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isEmptyObj(obj: any): boolean {
  if (isEmpty(obj)) return true;
  return typeof obj === 'object' && Object.keys(obj).length === 0;
}

/**
 *
 * @param {*} str 检测字符串
 * @param {*} num 几位数 默认 2
 * @param {*} count 几位小数 默认1
 */
export function isFlotNum(str: string, num = 2, count = 1): boolean {
  return new RegExp(`^\\d{0,${num}}([\\b]*|\\.|\\.\\d{0,${count}}|$)$`).test(
    str,
  );
}

/**
 * 是否正整数
 * @param {*} num
 */
export function isPINum(num: string): boolean {
  const result = /^\+?[1-9][0-9]*$/.test(num);
  return result;
}

/**
 * @name 是否object
 * @param value
 *  * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
export function isObject(value: any): boolean {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
