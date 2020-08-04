import {
  vailPassword,
  isDigital,
  isPhoneNumber,
  isTelephoneNumber,
  isEmpty,
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
    expect(isPhoneNumber('17043763147')).toBe(true);
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
