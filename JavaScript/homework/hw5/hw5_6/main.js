// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulCreator = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulCreator('h1')