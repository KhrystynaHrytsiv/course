"use strict";
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arrayOfStrings = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (let item of arrayOfStrings) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
