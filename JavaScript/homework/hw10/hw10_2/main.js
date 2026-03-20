// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.getElementById('age');
let button = document.getElementsByTagName('button')[0];
let p = document.createElement('p');
document.body.appendChild(p)
button.onclick = function (){
    if (input.value >= 18){
        p.innerText = `As your are ${input.value} you can do this`
    }
    else {
        p.innerText = `Your age is lower than 18`;
    }
}

