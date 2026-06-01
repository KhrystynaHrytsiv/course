"use strict";
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
class Horse {
    sound() {
    }
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
}
