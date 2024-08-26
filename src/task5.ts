// Матрци вида
// n - рядов, m - элементов в ряду
// например для n = 2, m = 3
// matrix = [
//  [1, 'abs', 2],
//  [0, 2, 'cdb'],
// ]
const getRandomString = (i: number): string => (Math.random() + i).toString(36).substring(7);

const generateMatrix = (n: number, m: number): (string | number)[][] => {
    const matrix: (string | number)[][] = [];
    for (let i = 0; i < n; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < m; j += 1) {
            if (Math.random() > 0.5) {
                matrix[i][j] = getRandomString(i);
            } else {
                matrix[i][j] = i + j;
            }
        }
    }
    return matrix;
}

const matrix = generateMatrix(2, 3);

const flat = (matrix: (string | number)[][]): (string | number)[] => {
    return matrix.reduce((acc, row) => {
        acc.push(...row);
        return acc;
    }, []);
}

const list = flat(matrix);

const splitByType = (list: (string | number)[]): { strings: string[], numbers: number[] } => {
    const result: { strings: string[], numbers: number[] } = {
        strings: [],
        numbers: [],
    }
    list.forEach((item) => {
        const isNaN = Number.isNaN(item as number / 2);
        if (isNaN) result.strings.push(item as string);
        else result.numbers.push(item as number);
    });

    return result;
}

const splited = splitByType(list);

console.log(splited);
