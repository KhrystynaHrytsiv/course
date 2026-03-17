// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
let userBuilder = (users) =>{
    for (let user of users){
        const {id, name, age} = user;
        document.write(`<div>${id} - ${name} - ${age}</div>`)
    }
}
userBuilder([
    {id: 1, name: 'vika', age: 20},
    {id: 2, name: 'olia', age: 22},
    {id: 2, name: 'sonia', age: 25},
])