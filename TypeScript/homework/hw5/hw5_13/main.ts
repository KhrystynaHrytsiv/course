// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchangeFunction =(sumUAH:number,currencyValues:{currency:string, value:number}[],exchangeCurrency:string):number =>{
    let chooseCurrency;
    for (let currency of currencyValues){
        if(currency.currency === exchangeCurrency){
            chooseCurrency = currency
        }
    }
    if (chooseCurrency){
        return sumUAH / chooseCurrency.value
    }
    return -1;
}
console.log(exchangeFunction(10000,[{currency:'USD',value:42},{currency:'EUR',value:50}],'EUR'));