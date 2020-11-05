import { hideNickname } from '../src/filter';

describe('filter.test hideNickname', () => {
  test('isTypes test pass', () => {
    expect(hideNickname('程珀尔塔')).toBe('程***塔');
  });
  test('filter test not pass', () => {
    expect(hideNickname('程')).toBe('程****');
  });
});
