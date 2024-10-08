"use strict";
const transform = (value, cb) => {
    const chars = value.split('');
    const dict = chars.reduce((acc, item) => {
        acc[item] = item.charCodeAt(0);
        return acc;
    }, {});
    return cb(dict);
};
const getKeys = (dict) => Object.keys(dict);
const getValues = (dict) => Object.values(dict);
const keys = transform('test', getKeys);
const values = transform('test', getValues);
// eslint-disable-next-line no-console
console.log(`keys: ${keys.join(', ')}`);
// eslint-disable-next-line no-console
console.log(`values: ${values.join(', ')}`);
