// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
type Prim = string | number | boolean
let arrNew:Prim[]  = [11, true, 25, 'asd', false, 'qwe'];
let createNew = (arrNew:Prim[]):void => {
    document.write(`<ul>`)
    for (let element of arr){
        document.write(`<li>${element}</li>`)
    }
}
createNew(arrNew)