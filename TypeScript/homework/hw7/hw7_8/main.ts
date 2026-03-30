// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princes {
    name:string;
    age:number;
    footSize:number;
    constructor(name:string, age:number, footSize:number) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;

    }
}
let princesses:Princes[] = [
    new Princes('avrora', 18, 37),
    new Princes('ariel', 16, 35),
    new Princes('mulan', 20, 36),
    new Princes('moanna', 17, 38),
    new Princes('vaynna', 10, 33),
    new Princes('cinderella', 21, 37.5),
    new Princes('jasmin', 16, 36.5),
    new Princes('princess', 15, 37),
    new Princes('rapuncel', 19, 39),
    new Princes('bilosnizka', 16, 35.5),
];

class Prince {
    name:string;
    age:number;
    foundShoes:number;
    constructor(name:string, age:number, foundShoes:number) {
        this.name = name;
        this.age = age;
        this.foundShoes = foundShoes;
    }

}
let prince:Prince = new Prince('avram', 23, 37.5);
for (let princess of princesses){
    if (princess.footSize === prince.foundShoes){
        console.log(princess);
    }
};

let find = princesses.find(princess => princess.footSize === prince.foundShoes);
console.log(find);