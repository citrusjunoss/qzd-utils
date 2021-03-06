"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var freeGlobal_1 = __importDefault(require("./freeGlobal"));
/** Detect free variable `globalThis` */
var freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis;
/** Detect free variable `self`. */
var freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobalThis || freeGlobal_1["default"] || freeSelf || Function('return this')();
exports["default"] = root;
