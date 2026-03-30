// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input1:HTMLInputElement = document.getElementsByTagName('input')[0];
let button1:HTMLButtonElement = document.getElementsByTagName('button')[0];
let p1:HTMLParagraphElement = document.createElement('p');
document.body.appendChild(p1)
button1.onclick = function (){
    if (input1){
    if (+input1.value >= 18){
        p1.innerText = `As your are ${input1.value} you can do this`
    }
    else {
        p1.innerText = `Your age is lower than 18`;
    }

    }
}

