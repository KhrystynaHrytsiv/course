// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage <T>(arrayName:string, objToAdd:T):void{
    if(!localStorage.getItem(arrayName)){
        throw new Error('there isn`t that array')
    }
    let arr:T [] = JSON.parse(localStorage.getItem(arrayName) || '[]');
    if (typeof objToAdd === 'object'){
        arr.push(objToAdd)
    }
    localStorage.setItem(arrayName, JSON.stringify(arr))
}
addToLocalStorage('sessionList', {})