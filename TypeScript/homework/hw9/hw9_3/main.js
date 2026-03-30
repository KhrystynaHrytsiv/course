"use strict";
let coursesAndDurationArray3 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const item of coursesAndDurationArray3) {
    let course = document.createElement('div');
    course.innerText = `${item.title}  - ${item.monthDuration}`;
    document.body.appendChild(course);
}
