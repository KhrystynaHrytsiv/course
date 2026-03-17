// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [11, true, 25, 'asd', false, 'qwe'];
let create = (arr) => {
    document.write(`<ul>`)
    for (let element of arr){
        document.write(`<li>${element}</li>`)
    }
}
create(arr)