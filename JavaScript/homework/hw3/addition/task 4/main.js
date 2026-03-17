// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings = ['qwe', 'fved', 'gre', 'okl', 'zdf', 'tyu', 'hrt', 'ert', 'rew', 'csd'];
for (let element of strings){
    console.log(element);
}
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixed = [null, false, 7845, 'gved', undefined, true, [], 146, 'asd', 7];
for (let item of mixed){
    console.log(item);
}