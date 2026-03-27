"use strict";
let userBuilder = (users5) => {
    for (let user of users5) {
        const { id, name, age } = user;
        document.write(`<div>${id} - ${name} - ${age}</div>`);
    }
};
userBuilder([
    { id: 1, name: 'vika', age: 20 },
    { id: 2, name: 'olia', age: 22 },
    { id: 2, name: 'sonia', age: 25 },
]);
