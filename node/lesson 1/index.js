// require('./helper');
const {foo:helperFoo}= require('./helper/helper');

const http = require('node:http');
const path = require('node:path');
const readline = require('node:readline/promises');

// const foo =() =>{
//     console.log('1111');
//     helperFoo()
// }
// foo();

const foo =async () =>{
    //HTTP
    // const server = http.createServer((req, res) => {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({
    //         data: 'Hello World!',
    //     }));
    // });
    // server.listen(3000);

    //Path
    // const pathToFile = __filename;
    // console.log(pathToFile);
    // console.log(path.dirname(pathToFile))//показує весь шлях до файлу
    // console.log(path.extname(pathToFile))//дістає розширення файлу
    // console.log(path.basename(pathToFile))//дістає name файлу
    // console.log(path.parse(pathToFile))// ось так виглядатиме відповідь
    // // {
    // //     root: 'D:\\',
    // //         dir: 'D:\\Projects\\node.js-old',
    // //     base: 'index.js',
    // //     ext: '.js',
    // //     name: 'index'
    // // }
    // console.log(path.isAbsolute(pathToFile))
    // console.log(path.isAbsolute('./node.js-old'))

    //Readline
    const rlInstance = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const name = await rlInstance.question('Name?');
    console.log(`Your name is ${name}`)
    process.exit(0)


}
void foo();

