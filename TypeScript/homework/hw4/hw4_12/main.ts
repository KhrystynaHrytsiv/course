// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr:number[], index1:number, index2:number):number[] | string{
    if( index1 < arr.length && index2 < arr.length){
    let item = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = item;
    return arr
    }
    return 'asd'
}

console.log(swap([11, 22, 33, 77, 55], 2, 4));