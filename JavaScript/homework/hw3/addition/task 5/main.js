// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr = [ 15, 786, 36, 'assd', 'mango', true, false, 'tree', 'brz', 91];
for (let item of arr){
    if (typeof item === 'boolean'){
        console.log(item);
    }
}
for (let item of arr) {
    if (typeof item === "number"){
        console.log(item);
    }

}
for (let item of arr) {
    if (typeof item === "string"){
        console.log(item);
    }
}
