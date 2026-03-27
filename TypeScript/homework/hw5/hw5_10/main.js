"use strict";
// - створити функцію яка повертає найменьше число з масиву
let minCount = (arr) => {
    let minNumber = arr[0];
    for (let number of arr) {
        if (minNumber > number) {
            minNumber = number;
        }
    }
    return minNumber;
    // console.log(minNumber);
};
minCount([11, -2, 0, 78, 15, 100, -100]);
