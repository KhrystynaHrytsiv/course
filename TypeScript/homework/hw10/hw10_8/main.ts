// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
let table:HTMLTableElement = document.getElementsByTagName('table')[0];
//@ts-ignore
let form3:HTMLFormElement = document.forms['form'][0];
form3.onsubmit = function (ev) {
    table.innerText = '';
    ev.preventDefault()
    let rows:number = +form3.row.value;
    let columns:number = +form3.column.value;
    let data:string = form3.text.value;
    console.log(rows, columns, data);

    for (let i = 0; i < rows; i++) {
        let tr:HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td:HTMLTableCellElement = document.createElement('td');
            td.innerText = data;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
