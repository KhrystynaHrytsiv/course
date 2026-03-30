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
// class User{
//     // private name:string;
//     // private age: number;
//     // private status:boolean;
//
//     constructor(private _name: string, private _age: number, private _status: boolean) {
//         this._name = _name;
//         this._age = _age;
//         this._status = _status;
//     }
//     public greeting(){
//         console.log('hello');
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get age(): number {
//         return this._age;
//     }
//
//     set age(value: number) {
//         this._age = value;
//     }
//
//     get status(): boolean {
//         return this._status;
//     }
//
//     set status(value: boolean) {
//         this._status = value;
//     }
// }
// let user = new User('asdef', 1, true);
// console.log(user.name);
// user.name = 'sderf'
// //@ts-ignore
// class User2 extends User{
//     // id:number;
//
//     constructor(private _id: number, _name: string, _age: number, _status: boolean){
//         super(_name, _age, _status );
//         this._id = _id;
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
// }
// let user2 = new User2(1, 'dvfs', 12, false);
// console.log(user2.name);
// console.log(user2.id);
