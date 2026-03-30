"use strict";
// (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
let blockDiv = document.getElementsByTagName('div')[0];
let number = Number(localStorage.getItem('number')) || 100;
let timer = new Date().getTime();
console.log(typeof timer);
let lastRefresh = Number(localStorage.getItem('refresh')) || timer;
if (timer - lastRefresh > 10000) {
    number += 10;
    localStorage.setItem('number', number.toString());
}
blockDiv.innerText = `${number}uan`.toString();
localStorage.setItem('refresh', time.toString());
