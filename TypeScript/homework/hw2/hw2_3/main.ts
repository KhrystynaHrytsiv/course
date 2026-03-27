// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
interface IBook{
    title:string,
    pageCount: number,
    genre:string,
    authors:IAuthor[]
}
interface IAuthor {
    name: string,
    age:number
}
let book4:IBook = {
    title: 'Spoilt',
    pageCount: 650,
    genre: 'dark romance',
    authors: [
        {name: 'Penelopa', age: 20},
        {name: 'Duglas', age: 21}
    ]
};
let book5:IBook = {
    title: 'Death on Nil',
    pageCount: 300,
    genre: 'detective',
    authors: [
        {name: 'Agata', age: 40},
        {name: 'Cristi', age: 21}
    ]
};
let book6 :IBook = {
    title: 'Forth wing',
    pageCount: 900 ,
    genre: 'drama',
    authors: [
        {name: 'Rebecca', age: 25},
        {name: 'Yaros', age: 27}
    ]
};