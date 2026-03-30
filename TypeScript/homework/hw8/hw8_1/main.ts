// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
interface IArray1{
    title:string,
    monthDuration:number
}
interface IArray2 extends IArray1{
   id:number
}
//@ts-ignore
let coursesAndDurationArray: IArray[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let map = coursesAndDurationArray.map<IArray2>((course, index) => ({...course, id: index + 1}));
console.log(map);