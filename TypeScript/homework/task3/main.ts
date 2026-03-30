// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь
interface IUser {
    
}
function result<T> (url:string):Promise<T>{
      return  fetch(url)
        .then(response => response.json() as T);
}
result<IUser[]>('https://jsonplaceholder.typicode.com/users')
