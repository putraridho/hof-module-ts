function filter<T>(array: T[], callback: (item: T, index: number) => T): T[] {
  const filteredArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

export default filter;
