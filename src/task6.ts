interface ICharDict {
  [key: string]: number;
}

const transform = <T>(
  value: string,
  cb: (dict: ICharDict) => T,
): T => {
  const chars = value.split('');
  const dict = chars.reduce<ICharDict>((acc, item): ICharDict => {
    acc[item] = item.charCodeAt(0);
    return acc;
  }, {});

  return cb(dict);
};

const getKeys = (dict: ICharDict): string[] => Object.keys(dict);
const getValues = (dict: ICharDict): number[] => Object.values(dict);

const keys = transform('test', getKeys);
const values = transform('test', getValues);

// eslint-disable-next-line no-console
console.log(`keys: ${keys.join(', ')}`);
// eslint-disable-next-line no-console
console.log(`values: ${values.join(', ')}`);
