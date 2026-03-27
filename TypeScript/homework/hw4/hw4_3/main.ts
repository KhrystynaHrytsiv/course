// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function calc(r:number, h:number):number{
    return 2 * Math.PI * r * h
}

console.log(calc(5, 15));