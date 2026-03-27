// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
interface IUser {
    name: string,
    age:number,
    status: boolean
}
let users3:IUser[] = [
            {name: 'vasya', age: 31, status: false},
            {name: 'petya', age: 30, status: true},
            {name: 'kolya', age: 29, status: true},
            {name: 'olya', age: 28, status: false},
            {name: 'max', age: 30, status: true},
            {name: 'anya', age: 31, status: false},
            {name: 'oleg', age: 28, status: false},
            {name: 'andrey', age: 29, status: true},
            {name: 'masha', age: 30, status: true},
            {name: 'yulia', age: 31, status: false},
            {name: 'ivan', age: 31, status: true}
        ];

for (let user of users3) {
    if(user.status){
        console.log(user);
    }
}

for (let user of users3) {
    if(!user.status){
        console.log(user);
    }
}
for (let user of users3) {
    if(user.age > 30){
        console.log(user);
    }
}