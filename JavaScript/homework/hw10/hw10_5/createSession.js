// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionList = [];
if (localStorage.getItem('sessionList')){
    sessionList = JSON.parse(localStorage.getItem('sessionList'))
}
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList));

// let sessionList =  JSON.parse(localStorage.getItem('sessionList')) ||[];
//
// sessionList.push(new Date());
// localStorage.setItem('sessionList', JSON.stringify(sessionList));
