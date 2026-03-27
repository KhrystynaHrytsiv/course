// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let aa:string = 'hello world';
let bb:string = 'lorem ipsum';
let cc:string = 'javascript is cool';

let strs:string[] = [aa, bb, cc];
for (let str of strs){
    console.log(str.toUpperCase());
}