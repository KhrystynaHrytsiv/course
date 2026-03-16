// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
function exchange (sumUAH, currencyValues, exchangeCurrency){
    return exchangeCurrency + ' ' + sumUAH / currencyValues ;
}

console.log(exchange(1200, 43.50, "USD"));
