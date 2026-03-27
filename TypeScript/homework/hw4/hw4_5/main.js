"use strict";
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writer(text) {
    document.write(`<p>${text}</p>`);
}
writer('lorem');
