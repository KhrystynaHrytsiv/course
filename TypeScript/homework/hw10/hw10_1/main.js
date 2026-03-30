"use strict";
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".
let div1 = document.createElement('div');
div1.id = 'text';
div1.style.width = '200px';
div1.style.height = '200px';
div1.style.background = 'pink';
let button = document.createElement('button');
button.innerText = 'hide';
button.onclick = function () {
    if (div1) {
        // div.remove();
        div1.style.display = 'none';
    }
};
document.body.append(div1, button);
