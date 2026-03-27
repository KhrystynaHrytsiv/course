// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
let sumArr = (array:number[]):number =>{
    let item = 0;
    for (let number of array){
       item = number + item
    }
    return item
}
console.log(sumArr([1, 2, 7]));