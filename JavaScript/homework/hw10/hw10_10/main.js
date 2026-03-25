// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let itemsArray = Array.from({length: 100}, (_, index) => `${index + 1}`)
let page = 0;
let perPage = 10;
let prev = document.getElementsByTagName('button')[0];
let next = document.getElementsByTagName('button')[1];
let itemsDiv = document.getElementsByClassName('items')[0];

function show(page){
    const start = page * perPage;
    const end = start + perPage;
    itemsDiv.innerHTML = itemsArray.slice(start, end).join('<br>')
}
prev.onclick = function (){
    if(page > 0){
    page--;
    }
    show(page)

}
next.onclick = function (){
page++;
show(page)
}
show(page)
