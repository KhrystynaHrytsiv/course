"use strict";
// type MyString = string;
// let s:MyString =  'swfv';
//
// type Primitives = number | string | boolean
// let x: Primitives = true;
//
// type Falsy = 0 | false | null | undefined | '';
// // let j:Falsy = true;
//
// type UserType = {
//     name: string,
//     age:number,
//     status:boolean
// };
// type UserType2 = UserType & {id:number}
// // type UserType2 = UserType & {id:number; login:string} & {} &{}
// let users :UserType2 [] = [
//             {id:1, name: 'vasya', age: 31, status: false},
//             {id:1, name: 'petya', age: 30, status: true},
//             {id:1, name: 'kolya', age: 29, status: true},
//             {id:1, name: 'olya', age: 28, status: false},
//             {id:1, name: 'max', age: 30, status: true},
//             {id:1, name: 'anya', age: 31, status: false},
//             {id:1, name: 'oleg', age: 28, status: false},
//             {id:1, name: 'andrey', age: 29, status: true},
//             {id:1, name: 'masha', age: 30, status: true},
//             {id:1, name: 'yulia', age: 31, status: false},
//             {id:1, name: 'ivan', age: 31, status: true}
//         ];
//
// type MyFn = (a:number) =>void;
// interface IUserInter {
//     name:string,
//     age:number,
//     status:boolean
// }
// interface IUserInter {
//     id?:number,
// }
// // interface IUserInter2 extends IUserInter{
// //     id: number;
// // }
//
// let users: IUserInter[] = [
//             {id:1, name: 'vasya', age: 31, status: false},
//             {id:1, name: 'petya', age: 30, status: true},
//             {id:1, name: 'kolya', age: 29, status: true},
//             {id:1, name: 'olya', age: 28, status: false},
//             {id:1, name: 'max', age: 30, status: true},
//             {id:1, name: 'anya', age: 31, status: false},
//             {id:1, name: 'oleg', age: 28, status: false},
//             {id:1, name: 'andrey', age: 29, status: true},
//             {id:1, name: 'masha', age: 30, status: true},
//             {id:1, name: 'yulia', age: 31, status: false},
//             {id:1, name: 'ivan', age: 31, status: true}
//         ];
//@ts-ignore
class User {
    // private name:string;
    // private age: number;
    // private status:boolean;
    constructor(_name, _age, _status) {
        this._name = _name;
        this._age = _age;
        this._status = _status;
        this._name = _name;
        this._age = _age;
        this._status = _status;
    }
    greeting() {
        console.log('hello');
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
let user = new User('asdef', 1, true);
console.log(user.name);
user.name = 'sderf';
class User2 extends User {
    // id:number;
    constructor(_id, _name, _age, _status) {
        super(_name, _age, _status);
        this._id = _id;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let user2 = new User2(1, 'dvfs', 12, false);
console.log(user2.name);
console.log(user2.id);
