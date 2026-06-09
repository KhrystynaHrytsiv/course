const foo =() =>{
    console.log('22222');
    console.log(__dirname);//D:\Projects\node.js-old\helpers
    console.log(__filename);//D:\Projects\node.js-old\helpers\helper.js
    console.log(process.cwd());//current work directory показує місце де відбувся запит, із-за того що виконуємо команду node index D:\Projects\node.js-old
}

module.exports = {
    foo
}

