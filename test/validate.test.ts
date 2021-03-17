import {
  vailPassword,
  isDigital,
  isPhoneNumber,
  isTelephoneNumber,
  isEmpty,
  isFlotNum,
  validateURL,
  isPINum,
  validateLowerCase,
  validateUpperCase,
  validatAlphabets,
  validateEmail,
  isQQ,
  isIDCard,
  isEmptyObj
} from '../src/validate';

describe('validate.test vailPassword', () => {
  test('vailPassword test pass', () => {
    expect(
      vailPassword({ account: 'admin1', password: 'admin.8741df' }).errCode,
    ).toBe(0);
  });
  test('vailPassword test to simple', () => {
    expect(
      vailPassword({ account: 'admin', password: 'acnmkosdji' }).errCode,
    ).toBe(1);
  });
  test('vailPassword test string isConsecutive', () => {
    expect(
      vailPassword({ account: 'admin', password: 'cbatest1244gg' }).errCode,
    ).toBe(2);
  });
  test('vailPassword test some string', () => {
    expect(
      vailPassword({ account: 'admin', password: 'aaaaaaaaaa1' }).errCode,
    ).toBe(3);
  });
  test('vailPassword test includs account', () => {
    expect(
      vailPassword({ account: 'admin', password: 'admin.8741df' }).errCode,
    ).toBe(4);
  });
});

describe('validate.test isDigital', () => {
  test('isDigital test pass', () => {
    expect(isDigital('12131212')).toBe(true);
  });
  test('vailPassword test not pass', () => {
    expect(isDigital('121312sdf12')).toBe(false);
  });
});

describe('validate.test isPhoneNumber', () => {
  test('isPhoneNumber test pass', () => {
    expect(isPhoneNumber('13027513027')).toBe(true);
  });
  test('isPhoneNumber test not pass', () => {
    expect(isPhoneNumber('121312sdf12')).toBe(false);
  });
  test('isPhoneNumber test new phone code', () => {
    expect(isPhoneNumber('19965412404')).toBe(true);
  });
});

describe('validate.test isTelephoneNumber', () => {
  test('isTelephoneNumber test pass', () => {
    expect(isTelephoneNumber('0375-519179342')).toBe(true);
  });
  test('isTelephoneNumber test not pass', () => {
    expect(isTelephoneNumber('121312sdf12')).toBe(false);
  });
});

describe('validate.test isEmpty', () => {
  test('isEmpty test pass', () => {
    expect(isEmpty('')).toBe(true);
  });
  test('isEmpty test not pass', () => {
    expect(isEmpty(0)).toBe(false);
  });
});

describe('validate.test isEmptyObj', () => {
  test('isEmptyObj test obj pass', () => {
    expect(isEmptyObj({})).toBe(true);
  });
  test('isEmptyObj test arry pass', () => {
    expect(isEmptyObj([])).toBe(true);
  });
  test('isEmpty test not pass', () => {
    expect(isEmptyObj({a: 1})).toBe(false);
  });
  
  test('isEmpty test not pass', () => {
    expect(isEmptyObj(1)).toBe(false);
  });
  test('isEmpty test not pass', () => {
    expect(isEmptyObj([1])).toBe(false);
  });

});
describe('validate.test isFlotNum', () => {
  test('isFlotNum test pass', () => {
    expect(isFlotNum('11.11', 2, 2 )).toBe(true);
  });
  test('isFlotNum test not pass', () => {
    expect(isFlotNum('11.11')).toBe(false);
  });
});

describe('validate.test isPINum', () => {
  test('isPINum test pass', () => {
    expect(isPINum('-1')).toBe(false);
  });
  test('isPINum test not pass', () => {
    expect(isPINum('11')).toBe(true);
  });
});
describe('validate.test validateURL', () => {
  test('validateURL test pass', () => {
    expect(validateURL('https://1aeracc.com')).toBe(true);
  });
  test('validateURL test not pass', () => {
    expect(isPINum('https//1aera/cc.com')).toBe(false);
  });
});
describe('validate.test validateLowerCase', () => {
  test('validateLowerCase test pass', () => {
    expect(validateLowerCase('httpsaeracccom')).toBe(true);
  });
  test('validateLowerCase test not pass', () => {
    expect(validateLowerCase('validateLowerCase')).toBe(false);
  });
});
describe('validate.test validateUpperCase', () => {
  test('validateUpperCase test pass', () => {
    expect(validateUpperCase('ASFDASFA')).toBe(true);
  });
  test('validateUpperCase test not pass', () => {
    expect(validateUpperCase('AAAAsdAAAAA')).toBe(false);
  });
});
describe('validate.test validatAlphabets', () => {
  test('validatAlphabets test pass', () => {
    expect(validatAlphabets('ASFDASFAs')).toBe(true);
  });
  test('validatAlphabets test not pass', () => {
    expect(validatAlphabets('AAAAsdAAAAA,')).toBe(false);
  });
});
describe('validate.test validateEmail', () => {
  test('validateEmail test pass', () => {
    expect(validateEmail('cheng#@gmail.com')).toBe(true);
  });
  test('validateEmail test not pass', () => {
    expect(validateEmail('12312sedf#$qq.com,')).toBe(false);
  });
});
describe('validate.test isQQ', () => {
  test('isQQ test pass', () => {
    expect(isQQ('4123112312')).toBe(true);
  });
  test('isQQ test not pass', () => {
    expect(isQQ('12312sedf#$qq.com,')).toBe(false);
  });
});
describe('validate.test isIDCard', () => {
  test('isIDCard test pass', () => {
    expect(isIDCard('41231123121912301X')).toBe(true);
  });
  test('isIDCard test not pass', () => {
    expect(isIDCard('12312sedf#$qq.com,')).toBe(false);
  });
});
