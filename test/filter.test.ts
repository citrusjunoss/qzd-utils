import { hideNickname, toThousandsString, numToChinese, hidePhone } from '../src/filter';

describe('filter.test hideNickname', () => {
  test('hideNickname test pass', () => {
    expect(hideNickname('程珀尔塔')).toBe('程***塔');
  });
  test('hideNickname test  pass', () => {
    expect(hideNickname('程')).toBe('程****');
  });
  test('hideNickname test  pass', () => {
    expect(hideNickname('')).toBe('****');
  });
});

describe('filter.test hidePhone', () => {
  test('hidePhone test pass', () => {
    expect(hidePhone('13027513027')).toBe('130****3027');
  });
});

describe('filter.test toThousandsString', () => {
  test('toThousandsString test number pass', () => {
    expect(toThousandsString(100000)).toBe('100,000');
  });
  test('toThousandsString test string pass', () => {
    expect(toThousandsString('100000.11')).toBe('100,000.11');
  });
});

describe('filter.test numToChinese', () => {
  test('numToChinese test pass', () => {
    expect(numToChinese(100000)).toBe('一十万');
  });
  test('numToChinese test pass', () => {
    expect(numToChinese(0)).toBe('零');
  });
  test('numToChinese test pass', () => {
    expect(numToChinese(10001.11)).toBe('一万零一点一一');
  });
  test('numToChinese test not pass', () => {
    expect(numToChinese(100000.11)).toBe('一十万点一一');
  });
});
