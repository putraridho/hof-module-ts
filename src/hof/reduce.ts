function reduce<T>(
  array: T[],
  callback: (accumulator: T, item: T, index: number) => T
): T;

function reduce<T, U>(
  array: T[],
  callback: (accumulator: T, item: T, index: number) => T,
  initialValue: T
): T;

function reduce<T, U>(
  array: T[],
  callback: (accumulator: T | U, item: T, index: number) => T | U,
  initialValue?: U
): T | U {
  let returnedValue = initialValue || array[0];

  for (let i = initialValue ? 0 : 1; i < array.length; i++) {
    returnedValue = callback(returnedValue, array[i], i);
  }

  return returnedValue;
}

export default reduce;
