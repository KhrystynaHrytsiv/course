// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
function exchange (sumUAH:number, currencyValues:{currency:string, value:number}[], exchangeCurrency:string):number{
    let chooseCurrency;
    for (let currency of currencyValues ) {
        if(currency.currency === exchangeCurrency){
           chooseCurrency = currency;
        }
    }
    return sumUAH / chooseCurrency.value ;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
