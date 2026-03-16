// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let item of listOfItems) {
    document.write(`<li>${item}</li>`)
}
document.write(`</ul>`)