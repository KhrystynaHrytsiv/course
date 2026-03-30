// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
//     для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
interface ICoursesArray2 {
    title:string,
    monthDuration:number,
    hourDuration:number,
    modules: string[]
}
let coursesArray2:ICoursesArray2[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (let item of coursesArray){
    let container:HTMLDivElement = document.createElement('div');
    container.classList.add('container')
    let h3:HTMLHeadingElement = document.createElement('h3');
    h3.innerText = item.title;
    let durationContainer:HTMLDivElement = document.createElement('div');
    durationContainer.classList.add('durationContainer');
    let month:HTMLParagraphElement = document.createElement('p');
    let hour:HTMLParagraphElement = document.createElement('p');
    month.innerText = `monthDuration: ${item.monthDuration}`;
    hour.innerText = `hourDuration: ${item.hourDuration}`;
    durationContainer.append(month, hour);
    let ul:HTMLUListElement = document.createElement('ul');
    for (let liElement of item.modules ){
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = liElement
        ul.appendChild(li)
    }
    container.append(h3, durationContainer, ul);
    document.body.appendChild(container)
}
