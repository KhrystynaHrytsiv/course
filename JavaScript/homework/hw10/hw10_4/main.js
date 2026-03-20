// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let div = document.getElementsByClassName('block')[0];
let n = +localStorage.getItem('number');
n ++;
localStorage.setItem('number', n);
div.innerText = n;
