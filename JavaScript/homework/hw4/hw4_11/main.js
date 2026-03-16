// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
function sumArray(arr){
    let number = 0;
    for (let item of arr){
        number = number + item;
    }
    return number
}

console.log(sumArray([10, 25, 45, 20]));