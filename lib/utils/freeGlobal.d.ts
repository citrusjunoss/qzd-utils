/// <reference types="node" />
/** Detect free variable `global` from Node.js. */
declare const freeGlobal: false | (NodeJS.Global & typeof globalThis);
export default freeGlobal;
