// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
//     Для кожного об’єкту окремий блок.
type UserType = {
    id:number,
    name: string,
    age:number
}
function foobar (users:UserType[]):void{
    for (const user of users){
    document.write(`<div>
        <h2>${user.id} - ${user.name} - ${user.age}</h2>
    </div>`)
    }
}
    foobar([
        {id:1, name:'max', age:15},
        {id:2, name:'olia', age:20},
        {id:3, name:'vika', age:18},
        {id:4, name:'orest', age:25},
        {id:5, name:'ihor', age:17}
    ]);