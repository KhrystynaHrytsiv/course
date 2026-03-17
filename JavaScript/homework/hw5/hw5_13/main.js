// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange =(sumUAH,currencyValues,exchangeCurrency) =>{
    let chooseCurrency;
    for (let currency of currencyValues){
        if(currency.currency === exchangeCurrency){
            chooseCurrency = currency
        }
    }
    return sumUAH / chooseCurrency.value
}
console.log(exchange(10000,[{currency:'USD',value:42},{currency:'EUR',value:50}],'EUR'));