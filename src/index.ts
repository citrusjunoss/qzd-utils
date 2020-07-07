import { filterParams } from './queryParse';

// 验证模块
export * from './validate';
// 加密模块
export * from './signture';
console.log(11111111111);

console.log(
  filterParams({
    a: 1,
    b: 0,
    c: false,
    d: null,
    e: void 0,
    f: '',
    h: { a: [{ b: 0, c: null }] },
  }),
  2222222,
);
