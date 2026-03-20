// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та
// вивести об’єкт в документ.Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let form = document.forms.f1;
let p = document.createElement('p');
form.onsubmit = function (ev){
    ev.preventDefault();
    let nameValue = form.name.value;
    let surnameValue = form.surname.value;
    let ageValue = +form.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    p.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
    form.reset()
}

document.body.appendChild(p)