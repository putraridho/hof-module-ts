"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
exports.default = filter;
