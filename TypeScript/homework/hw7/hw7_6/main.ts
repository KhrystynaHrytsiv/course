// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1{
    model:string;
    producer:string;
    year:number;
    maxSpeed:number;
    volume:number;
    driver?:{name:string}
    constructor(model:string, producer:string, year:number, maxSpeed:number, volume:number) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    }
    drive():void{
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info():void{
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed(newSpeed:number):void{
        if (newSpeed> 0) this.maxSpeed = newSpeed
    };
    changeYear(newValue:number):void {
        this.year = newValue
    }
    addDriver(driver:{name:string}):void{
        if (driver) this.driver = driver
    }
}
let car1:Car1 = new Car('porsche', 'Germany', 2022, 320, 450);
console.log(car);
car.drive();
car.info()
car.increaseMaxSpeed(350);
console.log(car);
car.changeYear(2023);
console.log(car);
car.addDriver({name:'jb'})
console.log(car);


