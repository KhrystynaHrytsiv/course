"use strict";
Array.prototype.ownForEach = function (callback) {
    let arr = this;
    for (let item of arr) {
        callback(item);
    }
};
let nums = [11, 22, 33, 44];
nums.ownForEach((a) => console.log(a));
Array.prototype.ownFilter = function (predicate) {
    let arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};
let users79 = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'yulia', age: 31, status: false },
    { name: 'ivan', age: 31, status: true }
];
console.log(users79.ownFilter((user) => !user.status));
