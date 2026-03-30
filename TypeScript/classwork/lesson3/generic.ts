// //@ts-ignore
// class User<T> {
//     id: T;
//     name:string
//
//     constructor(id: T, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
// let user = new User<number>(1, 'csdc');
// let user1 = new User<string>('one', 'sdvs');
// let user2 = new User<{x:number}>({x:156}, 'vsdc ');
// let arr:Array<number> = [11, 22, 33];

interface IUserLS {
    id:number,
    name:string
}
let item = localStorage.getItem('x');
if (item){
let obj = JSON.parse(item);
let user:IUserLS = obj as IUserLS;
}

interface IDog{
    aka:string
}
let dogJson = localStorage.getItem('god');
if (dogJson){
    let dog = JSON.parse(dogJson) as IDog;
}
function foobar<T>(key:string):T{
    let objJson = localStorage.getItem(key);
    if (objJson){
        return JSON.parse(objJson) as T;
    }
    return {} as T;
}
let iDog = foobar<IDog>('dog');
let iUserLS = foobar<IUserLS>('user');
