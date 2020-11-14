import { hideNickname, toThousandsString, numToChinese, translateHMS } from '../src/filter';

describe('filter.test hideNickname', () => {
  test('hideNickname test pass', () => {
    expect(hideNickname('程珀尔塔')).toBe('程***塔');
  });
  test('hideNickname test  pass', () => {
    expect(hideNickname('程')).toBe('程****');
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
  test('numToChinese test not pass', () => {
    expect(numToChinese(100000.11)).toBe('一十万点一一');
  });
});


describe('filter.test translateHMS', () => {
  test('translateHMS test pass', () => {
    expect(translateHMS((1*60 + 50) *1000, 'hh:mm:ss')).toBe('00:01:50');
  });
  test('translateHMS test pass', () => {
    expect(translateHMS((48*3600 + 2*3600 + 10*60 + 20)*1000, 'dd天HH时mm分ss秒')).toBe('02天02时10分20秒');
  });
  test('translateHMS test pass', () => {
    expect(translateHMS((1*3600 + 5*60 + 8)*1000, 'h小时m分钟s秒')).toBe('1小时5分钟8秒');
  });
  test('translateHMS test pass', () => {
    expect(translateHMS((2*60 + 8)*1000, '总时长（分:秒） mm:ss')).toBe('总时长（分:秒） 02:08');
  });
  test('translateHMS test pass', () => {
    expect(translateHMS((2*3600 + 10*60 + 20)*1000)).toBe('00 02:10:20');
  });
});