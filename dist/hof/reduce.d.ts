declare function reduce<T>(array: T[], callback: (accumulator: T, item: T, index: number) => T): T;
declare function reduce<T, U>(array: T[], callback: (accumulator: T, item: T, index: number) => T, initialValue: T): T;
export default reduce;
