"use strict";
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let aa = 'hello world';
let bb = 'lorem ipsum';
let cc = 'javascript is cool';
let strs = [aa, bb, cc];
for (let str of strs) {
    console.log(str.toUpperCase());
}
