// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.5
interface IUser5 {
    id: number,
    name:string,
    age:number
}
let userBuilder = (users5:IUser5[]):void =>{
    for (let user of users5){
        const {id, name, age} = user;
        document.write(`<div>${id} - ${name} - ${age}</div>`)
    }
}
userBuilder([
    {id: 1, name: 'vika', age: 20},
    {id: 2, name: 'olia', age: 22},
    {id: 2, name: 'sonia', age: 25},
])