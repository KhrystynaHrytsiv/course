// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".
let div = document.createElement('div');
div.id = 'text';
div.style.width = '200px';
div.style.height = '200px';
div.style.background = 'pink';
let button = document.createElement('button');
button.innerText = 'hide';
button.onclick = function (){
    if (div){
        // div.remove();
        div.style.display = 'none'
    }
}
document.body.append(div, button)