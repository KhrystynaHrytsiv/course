// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

let strs = [a, b, c];
for (let str of strs){
    console.log(str.toUpperCase());
}