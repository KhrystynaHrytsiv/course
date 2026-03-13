// Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = prompt('enter the day');
switch (day){
    case 'Monday':
        console.log('Training at gym');
        console.log('Learning JS');
        break;
    case 'Tuesday':
        console.log('Learning JS');
        console.log('English classes');
        break;
    case 'Wednesday':
        console.log('Training at gym');
        console.log('Learning JS');
        break;
    case 'Thursday':
        console.log('Learning JS');
        console.log('English classes');
        break;
    case 'Friday':
        console.log('Training at gym');
        console.log('Learning JS');
        break;
    case 'Saturday':
        console.log('English classes');
        console.log('Cleaning the house');
        break;
    case 'Sunday':
        console.log('Volleyball match');
        break
}