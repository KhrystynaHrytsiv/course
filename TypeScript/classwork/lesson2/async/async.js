"use strict";
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {
    console.log(users[0].name);
});
async function foo() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json());
    return users;
}
