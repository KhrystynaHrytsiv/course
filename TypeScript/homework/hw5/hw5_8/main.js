"use strict";
let arrNew = [11, true, 25, 'asd', false, 'qwe'];
let createNew = (arrNew) => {
    document.write(`<ul>`);
    for (let element of arr) {
        document.write(`<li>${element}</li>`);
    }
};
createNew(arrNew);
