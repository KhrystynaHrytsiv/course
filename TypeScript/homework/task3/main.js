"use strict";
function result(url) {
    return fetch(url)
        .then(response => response.json());
}
result('https://jsonplaceholder.typicode.com/users');
