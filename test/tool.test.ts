import { getFileExtension, getfilesize, getFileNameByPath } from '../src/tool';

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
describe('tool.test getFileNameByPath', () => {
  test('getFileNameByPath noExt test pass', () => {
    expect(getFileNameByPath('/test/test/.斗破苍穹.mobi.text')).toBe('.斗破苍穹.mobi.text');
  });
  test('getfilesize Ext test pass', () => {
    expect(getFileNameByPath('/test/test/.斗破苍穹.mobi.text', true)).toBe('.斗破苍穹.mobi');
  });
});
