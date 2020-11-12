/**
 *  主要包含一些数据转换方法
 */

/**
 * @name 阿拉伯数字转换为中文数字
 * @param  {number} num
 */
export function numToChinese(num: number): string {
  const numStr = num + '';
  if (numStr === '') return '';
  if (!/^\d*(\.\d*)?$/.test(numStr)) {
    console.error('Not Number!');
    return '';
  }

  const cnNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const cnIntRadice = ['', '十', '百', '千'];
  const cnIntUnits = ['', '万', '亿', '兆'];
  let integerNum;
  let decimalNum;
  let chineseStr = '';
  let parts;

  if (Number(numStr) - 0 === 0) {
    chineseStr = cnNums[0];
    return chineseStr;
  }
  if (numStr.indexOf('.') === -1) {
    integerNum = numStr;
    decimalNum = '';
  } else {
    parts = numStr.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 2);
  }

  // 整数部分
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    const IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1);
      const p = IntLen - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
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
    const decLen = decimalNum.length;
    let decimalNumStr = '';
    for (let i = 0; i < decLen; i++) {
      const n = decimalNum.substr(i, 1);
      if (n !== '0') {
        decimalNumStr += cnNums[Number(n)];
      }
    }
    if (decimalNumStr) chineseStr += `点${decimalNumStr}`;
  }
  return chineseStr;
}

/**
 * @name 货币格式化(千分位计数)
 * @param num | string | number
 * @see Number.toLocalString() 有一定兼容问题
 */
export function toThousandsString(num: number | string): string {
  const splitNumber = `${num}`.toString().split('.');
  let integer = splitNumber[0];
  const decimal = splitNumber[1] || '';

  let result = '';
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

/**
 * @name 隐藏手机号
 * @param string
 * @see 130 **** 3027
 */
export function hidePhone(phone: string): string {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

/**
 * @name 隐藏昵称
 * @param string
 * @see 程珀尔塔 -> 程****塔 / 程 -> 程****  / ‘’ -> ****
 */
export function hideNickname(nickname: string): string {
  let res = nickname.replace(/^(.).*(.)$/, '$1***$2');
  if (res.length === 1) {
    res = `${res}****`;
  } else if (res.length === 0) {
    res = '****';
  }
  return res;
}
