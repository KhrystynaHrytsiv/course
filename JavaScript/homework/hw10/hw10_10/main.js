// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
let array = [];
for (let i = 0; i < 100; i++){
    let item = array[i];
    let div = document.createElement('div');
    div.innerText = item
}
let prev = document.getElementsByTagName('button')[0];
let next = document.getElementsByTagName('button')[1];
prev.onclick = function (){

}
if (item <= 9){
    prev.style.display = 'none';
    next.on
}