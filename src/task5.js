"use strict";
const getRandomString = (i) => {
    const randomPart = Math.random().toString(36);
    const indexPart = i.toString(36);
    return (randomPart + indexPart).substring(7);
};
const generateMatrix = (n, m) => {
    const result = [];
    for (let i = 0; i < n; i += 1) {
        result[i] = [];
        for (let j = 0; j < m; j += 1) {
            if (Math.random() > 0.5) {
                result[i][j] = getRandomString(i);
            }
            else {
                result[i][j] = i + j;
            }
        }
    }
    return result;
};
const matrix = generateMatrix(2, 3);
const flat = (inputMatrix) => {
    return inputMatrix.reduce((acc, row) => {
        acc.push(...row);
        return acc;
    }, []);
};
const flattenedList = flat(matrix);
const splitByType = (inputList) => {
    const result = {
        strings: [],
        numbers: [],
    };
    inputList.forEach((item) => {
        if (typeof item === 'string') {
            result.strings.push(item);
        }
        else {
            result.numbers.push(item);
        }
    });
    return result;
};
const splited = splitByType(flattenedList);
// eslint-disable-next-line no-console
console.log(splited);
