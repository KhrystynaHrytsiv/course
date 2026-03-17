// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {
        title: 'Harry Potter and the Philosopher`s Stone',
        pages: 320,
        authors: ['J.K. Rowling'],
        genres: ['fantasy', 'adventure', 'epic']
    },
    {
        title: 'The Lord of the Rings',
        pages: 1178,
        authors: ['J.R.R. Tolkien'],
        genres: ['fantasy', 'adventure']
    },
    {
        title: 'Good Omens',
        pages: 288,
        authors: ['Neil Gaiman', 'Terry Pratchett'],
        genres: ['fantasy', 'comedy']
    },
    {
        title: 'Clean Code',
        pages: 464,
        authors: ['Robert Martin'],
        genres: ['programming', 'education']
    }
];

// - знайти наібльшу книжку.
let biggestBook = books[0];
for (let book of books) {
    if (book.pages > biggestBook.pages){
        biggestBook = book;
    }
}
console.log(biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let moreGenres = books[0];
for (let book of books){
    if (book.genres.length > moreGenres.genres.length){
        moreGenres = book;
    }
}
console.log(moreGenres);

// - знайти книжку/ки з найдовшою назвою
let longestTitle = books[0];
for (let book of books) {
    if (book.title.length > longestTitle.title.length){
        longestTitle = book;
    }
}
console.log(longestTitle);

// - знайти книжку/ки які писали 2 автори
for (let book of books){
    if (book.authors.length === 2){
        console.log(book);
    }
}

// - знайти книжку/ки які писав 1 автор
for (let book of books){
    if (book.authors.length === 1){
        console.log(book);
    }
}

