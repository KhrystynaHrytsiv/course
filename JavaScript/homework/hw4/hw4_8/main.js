// створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write
function getArray(arr){
    document.write(`<ul>`)
    for (const item of arr){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
};
getArray([1, 2, true, 1565, 'asd', false])