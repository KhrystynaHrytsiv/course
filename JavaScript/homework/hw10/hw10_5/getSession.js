let list = JSON.parse(localStorage.getItem('sessionList')) ;
for (let item of list){
    let p = document.createElement('p');
    p.innerText = item;
    document.body.appendChild(p)

}