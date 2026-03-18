// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    let str = 'Ревуть воли як ясла повні';

function stringToArray(str){
    if(str){
    let split = str.split(' ');
    return split
    }
    return [''];
}

console.log(stringToArray(str));

