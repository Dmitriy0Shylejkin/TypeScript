type Matrix = Array<Array<string | number>>;

interface ISplitResult {
  strings: string[];
  numbers: number[];
}

const getRandomString = (i: number): string => {
  const randomPart = Math.random().toString(36);
  const indexPart = i.toString(36);
  return (randomPart + indexPart).substring(7);
};

const generateMatrix = (n: number, m: number): Matrix => {
  const result: Matrix = [];
  for (let i = 0; i < n; i += 1) {
    result[i] = [];
    for (let j = 0; j < m; j += 1) {
      if (Math.random() > 0.5) {
        result[i][j] = getRandomString(i);
      } else {
        result[i][j] = i + j;
      }
    }
  }
  return result;
};

const matrix = generateMatrix(2, 3);

const flat = (inputMatrix: Matrix): Array<string | number> => {
  return inputMatrix.reduce(
    (acc: Array<string | number>, row: Array<string | number>): Array<string | number> => {
      acc.push(...row);
      return acc;
    },
    [],
  );
};

const flattenedList = flat(matrix);

const splitByType = (inputList: Array<string | number>): ISplitResult => {
  const result: ISplitResult = {
    strings: [],
    numbers: [],
  };
  inputList.forEach((item: string | number): void => {
    if (typeof item === 'string') {
      result.strings.push(item);
    } else {
      result.numbers.push(item);
    }
  });
  return result;
};

const splited = splitByType(flattenedList);

// eslint-disable-next-line no-console
console.log(splited);
