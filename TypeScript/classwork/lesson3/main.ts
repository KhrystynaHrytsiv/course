// abstract class Animal{
//     isAlive:boolean;
//     constructor(isAlive: boolean) {
//         this.isAlive = isAlive;
//     }
//     abstract bark():void;
// }
// class Bird extends Animal{
//     wings:boolean;
//     constructor(isAlive: boolean, wings: boolean) {
//         super(isAlive);
//         this.wings = wings;
//     }
//     bark() {
//         console.log('chik');
//     }
// }

// interface IAnimal {
//     isAlive:boolean;
//     sound:()=>void
// }
// interface X{
//     id:number
// }
// class Bird implements IAnimal, X{
//     private _isAlive:boolean;
//     private _wings:boolean;
//     private _id: number
//
//     constructor(isAlive:boolean,wings: boolean, id:number) {
//         this._isAlive = isAlive;
//         this._wings = wings;
//         this._id = id
//     }
//     get isAlive(): boolean {
//         return this._isAlive;
//     }
//
//     set isAlive(value: boolean) {
//         this._isAlive = value;
//     }
//
//     get wings(): boolean {
//         return this._wings;
//     }
//
//     set wings(value: boolean) {
//         this._wings = value;
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
//     sound():void{
//
// }
// }


type AnimalType ={
    isAlive:boolean,
    sound:()=> void
}
class Horse implements AnimalType{
    isAlive:boolean;
    sound():void{

    }
    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }
}