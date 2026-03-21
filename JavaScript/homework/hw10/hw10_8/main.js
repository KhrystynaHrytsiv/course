// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
let table = document.getElementById('table');
let form = document.forms['form'];
form.onsubmit = function (ev) {
    table.innerText = '';
    ev.preventDefault()
    let rows = +form.row.value;
    let columns = +form.column.value;
    let data = form.text.value;
    console.log(rows, columns, data);

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = data;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
