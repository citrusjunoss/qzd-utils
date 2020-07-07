import { isTypes, filterParams } from '../src/queryParse';

describe('queryParse.test isTypes', () => {
  test('isTypes test pass', () => {
    expect(isTypes('12131212', 'string')).toBe(true);
  });
  test('vailPassword test not pass', () => {
    expect(isTypes('121312sdf12', 'number')).toBe(false);
  });
});

describe('queryParse.test filterParams', () => {
  test('isTypes test pass', () => {
    expect(
      filterParams({
        a: 1,
        b: 0,
        c: false,
        d: null,
        e: void 0,
        f: '',
        h: { a: [{ b: 0, c: null }] },
      }),
    ).toEqual({ a: 1, b: 0, c: false, h: { a: [{ b: 0 }] } });
  });
});
