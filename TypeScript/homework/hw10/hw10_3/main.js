"use strict";
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та
// вивести об’єкт в документ.Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
let f2 = document.forms;
let form = f2[0];
let p2 = document.createElement('p');
form.onsubmit = function (ev) {
    ev.preventDefault();
    let nameValue = form.firstname.value;
    let surnameValue = form.surname.value;
    let ageValue = +form.age.value;
    let obj = { nameValue, surnameValue, ageValue };
    p2.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
    form.reset();
};
document.body.appendChild(p);
