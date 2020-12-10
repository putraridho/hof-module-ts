"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i));
    }
    return mappedArray;
}
exports.default = map;
