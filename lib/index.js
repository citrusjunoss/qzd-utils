"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function (m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
var queryParse_1 = require("./queryParse");
// 验证模块
__exportStar(require("./validate"), exports);
// 加密模块
__exportStar(require("./signture"), exports);
console.log(11111111111);

var a = queryParse_1.filterParams({
  a: 1,
  b: 0,
  c: false,
  d: null,
  e: void 0,
  f: '',
  h: { a: [{ b: 0, c: null }] }
})
console.log(a, 2222222);


console.log(2222222)
