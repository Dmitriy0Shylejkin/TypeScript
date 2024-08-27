"use strict";
const flattenConstructor = (dict) => Object.values(dict);
const flat1 = flattenConstructor;
const r1 = flat1({ a: 1, b: 2 });
// eslint-disable-next-line no-console
console.log(r1);
const flat2 = flattenConstructor;
const r2 = flat2({ a: '1', b: '2' });
// eslint-disable-next-line no-console
console.log(r2);
