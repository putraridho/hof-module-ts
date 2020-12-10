function map<T, U>(array: T[], callback: (item: T, index: number) => U): U[] {
  const mappedArray: U[] = [];

  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i], i));
  }

  return mappedArray;
}

export default map;
