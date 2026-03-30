"use strict";
let target = document.getElementsByClassName('target');
console.log(target);
let elementsByTagName = document.getElementsByTagName('div');
let forms = document.forms;
let f1 = forms[0];
console.log(f1.username);
//@ts-ignore
let input = f1['username'];
console.log(input);
let p = document.createElement('p');
//@ts-ignore
let users21 = [
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
for (const user of users21) {
    let div = document.createElement('div');
    div.innerText = user.name;
    document.body.appendChild(div);
}
function appender(tag) {
    document.createElement(tag);
}
