// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об’єм двигуна. додати в об’єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
        drive (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        info (){
            for (const key in this) {
                console.log(key, this[key]);
            }
        };
        increaseMaxSpeed (newSpeed) {
            if (newSpeed > 0) this.maxSpeed = newSpeed
        };
        changeYear (newValue) {
            if (newValue > 1815) this.year = newValue;
        }
        addDriver (driver) {
            if (driver) this.driver = driver
        }

}
    let car = new Car('porsche', 'Germany', 2022, 320, 450);
    car.drive();
    car.info()
    car.increaseMaxSpeed(350);
    car.changeYear(2023);
    car.addDriver({name: 'vika'})
    console.log(car);
