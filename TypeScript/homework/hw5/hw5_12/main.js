"use strict";
// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapper = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let item = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = item;
        return arr;
    }
    return 'array is shorter then your value of index';
};
console.log(swapper([11, 22, 33, 44], 1, 2));
