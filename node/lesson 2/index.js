const {foo:helperFoo}= require('./helper/helper');
const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');
const EventsEmitter = require('node:events');
const os = require('node:os');

const foo = async () => {

    //FS(file system)модуль який призначений для взаємодії з файлевою системою на пк фбо сервері
    // const pathFile = path.join(__dirname, 'text.txt')
    // await fsPromises.writeFile(pathFile, 'hello world\n');//after command node index create a text file with name test and its has inside hello world
    // const data = await fsPromises.readFile(pathFile, 'utf-8');
    // console.log(data);//покаже весь вміст даного файла якщо буде кодування 'utf-8'

    // const data = await fsPromises.readFile(pathFile);
    // console.log(data.toString();//покаже весь вміст даного файла без кодування, але тільки якщо буде функція toString()
    // await fsPromises.appendFile(pathFile, 'Some new data')
    // await fsPromises.mkdir(path.join(__dirname, 'new-folder'), {recursive:true})
    // await fsPromises.mkdir(path.join(__dirname, 'new-folder', 'another'), {recursive:true})//create folder inside folder in case there isn`t create these folders
    // await fsPromises.rm(path.join(__dirname, 'new-folder'), {recursive:true})//delete folders
    // await fsPromises.unlink(pathFile)//delete file
    // await fsPromises.rename(pathFile, path.join(__dirname, 'new-folder', 'file.txt'))
    // await fsPromises.copyFile(pathFile, path.join(__dirname, 'new-folder', 'file.txt' ))// create text.txt and copy to new-folder file.txt
    // const stats = await fsPromises.stat(pathFile);
    // console.log(stats.isDirectory());
    // console.log(stats.isFile());


//Streams бере великий файл і розбиває його на кусочки
//     const pathToFile = path.join(__dirname, 'resume.pdf');
//     const readStream = fs.createReadStream(pathToFile);
//     const writeStream = fs.createWriteStream(path.join(__dirname, 'new-big-file.pdf'));
    // readStream.on('data', (piece)=>{
    //     console.log('chunk', piece.length);
    //     writeStream.write(piece)
    // })
    // readStream.pipe(writeStream)//the same as readStream.on

    //Events
    // const emitter = new EventsEmitter();
    // emitter.once('event', (...args) => {
    //     console.log(args)
    // })
    // emitter.on('event', (...args) => {
    //     console.log('event happened 2')
    //     console.log(args)
    // })
    // emitter.emit('event', 'hi', true, 555) //рішає хто відпрацює лише ключ 'event'
    // emitter.emit('event')
    // emitter.emit('event', 123)

    //OS - operating system
    // console.log(os.arch());
    // console.log(os.cpus());
    // console.log(os.totalmem() / 1024 / 1024 / 1024, 'gb');
    // console.log(os.freemem() / 1024 / 1024 / 1024, 'gb');//free memory on PC
    // console.log(os.homedir());
    // console.log(os.hostname());
    // console.log(os.platform());
    // console.log(os.userInfo());
}
void foo();

