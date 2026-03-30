// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arrayOfStrings:string[] =  ['Main','Products','About us','Contacts'];
let ul:HTMLUListElement = document.createElement('ul');
    document.body.appendChild(ul)
for (let item of arrayOfStrings){
    let li:HTMLLIElement = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
