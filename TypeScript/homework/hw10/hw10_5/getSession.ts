let res: string | null = localStorage.getItem('sessionList');
if (res){
let list:string[] = JSON.parse(res) ;
for (let item of list){
    let p:HTMLParagraphElement = document.createElement('p');
    p.innerText = item;
    document.body.appendChild(p)

}

}
