const transform = (value: string, cb: (dict: { [key: string]: number }) => any): any => {
  const chars = value.split('');
  const dict = chars.reduce((acc, item) => {
      acc[item] = item.charCodeAt(0);
      return acc;
  }, {} as { [key: string]: number });

  return cb(dict);
};

const getKeys = (dict: { [key: string]: number }): string[] => Object.keys(dict);
const getValues = (dict: { [key: string]: number }): number[] => Object.values(dict);

const keys = transform('test', getKeys);
const values = transform('test', getValues);

console.log(`keys: ${keys.join(', ')}`);
console.log(`values: ${values.join(', ')}`);
