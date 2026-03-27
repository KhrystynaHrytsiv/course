"use strict";
// створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function create(text) {
    document.write(`<ul>
     <li>${text}</li>
     <li>${text}</li>
     <li>${text}</li>
</ul>`);
}
create('qwe');
