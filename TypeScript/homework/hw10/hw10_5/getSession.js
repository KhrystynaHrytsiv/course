"use strict";
let res = localStorage.getItem('sessionList');
if (res) {
    let list = JSON.parse(res);
    for (let item of list) {
        let p = document.createElement('p');
        p.innerText = item;
        document.body.appendChild(p);
    }
}
