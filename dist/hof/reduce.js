"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(array, callback, initialValue) {
    let returnedValue = initialValue || array[0];
    for (let i = initialValue ? 0 : 1; i < array.length; i++) {
        returnedValue = callback(returnedValue, array[i], i);
    }
    return returnedValue;
}
exports.default = reduce;
