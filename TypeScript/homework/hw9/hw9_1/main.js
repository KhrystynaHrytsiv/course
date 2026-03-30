"use strict";
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div');
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
block.style.background = 'silver';
block.style.color = 'black';
block.style.fontSize = '25px';
block.style.height = '100px';
document.body.appendChild(block);
let cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock);
