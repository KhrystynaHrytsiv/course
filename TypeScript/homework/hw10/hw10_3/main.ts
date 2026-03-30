// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та
// вивести об’єкт в документ.Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let f2:HTMLCollectionOf<HTMLFormElement> = document.forms;
let form:HTMLFormElement = f2[0];
let p2:HTMLParagraphElement = document.createElement('p');
form.onsubmit = function (ev:Event){
    ev.preventDefault();
    let nameValue:string = form.firstname.value;
    let surnameValue:string = form.surname.value;
    let ageValue:number = +form.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    p2.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
    form.reset()
}

document.body.appendChild(p)