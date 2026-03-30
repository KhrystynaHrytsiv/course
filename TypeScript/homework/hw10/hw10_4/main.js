"use strict";
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//@ts-ignore
let div = document.getElementsByTagName('div')[0];
let n = Number(localStorage.getItem('number'));
n++;
localStorage.setItem('number', n.toString());
div.innerText = n.toString();
