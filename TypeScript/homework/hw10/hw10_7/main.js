"use strict";
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    if (!localStorage.getItem(arrayName)) {
        throw new Error('there isn`t that array');
    }
    let arr = JSON.parse(localStorage.getItem(arrayName) || '[]');
    if (typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}
addToLocalStorage('sessionList', {});
