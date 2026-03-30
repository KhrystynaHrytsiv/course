// *Через Array.prototype. створити власний foreach, filter
interface IUser7{
    name:string,
    age:number,
    status:boolean
}
interface Array <T>{
ownForEach(callback:(value: T) => void):void;
ownFilter(callback:(value: T)=>boolean):T[];
}
Array.prototype.ownForEach = function (callback){
    let arr = this;
    for (let item of arr){
        callback(item)
    }
}
let nums:number[] = [11, 22, 33, 44];
nums.ownForEach((a) => console.log(a))

Array.prototype.ownFilter = function <T>(predicate:(value:T) =>boolean): T[]{
    let arr = [];
    for (const item of this) {
        if (predicate(item)){
            arr.push(item)
        }
    }
    return arr
}

let users79:IUser7[] = [
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
console.log(users79.ownFilter((user) => !user.status));