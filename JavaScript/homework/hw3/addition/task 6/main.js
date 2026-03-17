// #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let array = [];
array[0] = 89;
array[1] = null;
array[2] = 'asd';
array[3] = false;
array[4] = [];
array[5] = undefined;
array[6] = NaN;
array[7] = true;
array[8] = 75;
array[9] = 'lorem';
for (let item of array){
    console.log(item);
}