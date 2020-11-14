import { getFileExtension, getfilesize, getFileNameByPath, createUniqueString, deepClone, accAdd, accSubtr, accMul, accDiv } from '../src/tool';

describe('tool.test getFileExtension', () => {
  test('getFileExtension test pass', () => {
    expect(getFileExtension('斗破苍穹.mobi')).toBe('mobi');
  });
  test('getFileExtension test is pass', () => {
    expect(getFileExtension('.斗破苍穹.mobi.text')).toBe('text');
  });
});

describe('tool.test getfilesize', () => {
  test('getfilesize test pass', () => {
    expect(getfilesize(1023)).toBe('1023.00B');
  });
  test('getfilesize test is pass', () => {
    expect(getfilesize(1024 ** 3 * 3 + 1)).toBe('3.01G');
  });
});

describe('tool.test createUniqueString', () => {
  test('createUniqueString test pass', () => {
    expect(createUniqueString() === createUniqueString()).toBe(false);
  });
});
describe('tool.test deepClone', () => {
  test('deepClone test pass', () => {
    const a = { b : {c: 2}};
    const c = deepClone(a)
    a.b.c = 3
    expect(c.b !== a.b.c).toBe(true);
  });
});
describe('tool.test getFileNameByPath', () => {
  test('getFileNameByPath noExt test pass', () => {
    expect(getFileNameByPath('/test/test/.斗破苍穹.mobi.text')).toBe('.斗破苍穹.mobi.text');
  });
  test('getfilesize Ext test pass', () => {
    expect(getFileNameByPath('/test/test/.斗破苍穹.mobi.text', true)).toBe('.斗破苍穹.mobi');
  });
});


describe('tool.test acc', () => {
  test('accAdd  test pass', () => {
    expect(accAdd(0.1, 0.2)).toBe(0.3);
  });
  test('accSubtr  test pass', () => {
    expect(accSubtr(0.5, 0.12)).toBe(0.38);
  });
  test('accMul  test pass', () => {
    expect(accMul(0.113, 0.20)).toBe(0.0226);
  });
  test('accDiv  test pass', () => {
    expect(accDiv(1.40, 7)).toBe(0.2);
  });
});