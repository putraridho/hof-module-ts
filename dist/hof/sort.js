"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sort(array, callback) {
    const length = array.length;
    const sortedArray = [...array];
    for (let i = length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            let condition;
            if (callback) {
                condition = callback(sortedArray[j - 1], sortedArray[j]);
            }
            else {
                condition = sortedArray[j - 1] > sortedArray[j];
            }
            if (condition) {
                let temp = sortedArray[j - 1];
                sortedArray[j - 1] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    return sortedArray;
}
exports.default = sort;
