// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function deepCopy (obj){
    if (obj){
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function'){
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        let clone = JSON.parse(JSON.stringify(obj));
        for (let func of functions){
             clone[func.key] = func.functionClone;
        }
        console.log(clone);
        return clone
    }
    throw new Error('msg');

}
deepCopy({id: 1, name: 'max', greeting(){}, foo(){}})
