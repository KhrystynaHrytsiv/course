let array = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
// let i = 0;
// while (i < array.length){
// let number = array[i];
//     console.log(number);
//     i++
// }

// 2. перебрати його циклом for
// for (const number of array) {
//     console.log(number);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < array.length){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
//     i++;
//
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < array.length; j++) {
//     const arrayElement = array[j];
//     if( j % 2 !== 0){
//         console.log(arrayElement);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < array.length ){
//     if (i % 2 === 0){
//     console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++){
//     if (i % 2 === 0){
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length; i++) {
//     if (i % 3 === 0){
//         array[i] = 'okten';
//     }
// }
//     console.log(array);

// 8. вивести масив в зворотньому порядку.

const reversed = [];
for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
}
console.log(reversed);
