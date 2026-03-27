// – створити функцію яка повертає найменьше число з масиву
function filter(numbers:number[]):number{
    let min = numbers[0]
    for (let number of numbers){
        if (number < min){
            min = number
        }
    }
    return min;
}

console.log(filter([11, 89, -15, -28, 78, 100]));