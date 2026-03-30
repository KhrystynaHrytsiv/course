// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let itemsArray:any[] = Array.from({length: 100}, (_, index) => `${index + 1}`)
let page:number = 0;
let perPage:number = 10;
let prev:HTMLButtonElement = document.getElementsByTagName('button')[0];
let next:HTMLButtonElement = document.getElementsByTagName('button')[1];
let itemsDiv:HTMLDivElement = document.getElementsByTagName('div')[0];

function show(page:number):void{
    const start:number = page * perPage;
    const end:number = start + perPage;
    itemsDiv.innerHTML = itemsArray.slice(start, end).join('<br>')
}
prev.onclick = function ():void{
    if(page > 0){
    page--;
    }
    show(page)

}
next.onclick = function ():void{
page++;
show(page)
}
show(page)
