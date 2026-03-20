// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let input = document.getElementsByTagName('input')[0];
let div = document.getElementsByClassName('pound')[0];
input.oninput = function (){
div.innerText = +input.value * 2.2046
}
