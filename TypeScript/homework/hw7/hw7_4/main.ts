// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// function Client (id, name, surname, email, phone, order){
//     User.apply(this, arguments)
//     this.order = order;
// }

class Client{
    id:number;
    name:string;
    surname:string;
    email:string;
    phone:string;
    order:{title:string, price:number}[]
    constructor(    id:number, name:string, surname:string, email:string, phone:string, order:{title:string, price:number}[]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;

    }
}

let clients1:Client[] = [
    new Client(1, "Ivan", "Ivanov", "ivan1@gmail.com", "+380111111111", [{title: 'phone', price: 25000}, {title: 'tv', price: 35000}]),
    new Client(2, "Petro", "Petrenko", "petro2@gmail.com", "+380222222222", [{title: 'tv', price: 35000}]),
    new Client(3, "Oleg", "Olegov", "oleg3@gmail.com", "+380333333333", [{title: 'fan', price: 2500}]),
    new Client(4, "Anna", "Ivanenko", "anna4@gmail.com", "+380444444444", [{title: 'laptop', price: 85000}]),
    new Client(5, "Maria", "Petrova", "maria5@gmail.com", "+380555555555", [{title: 'phone', price: 25000}, {title: 'fan', price: 2500}]),
    new Client(6, "Sergiy", "Sydorenko", "sergiy6@gmail.com", "+380666666666",[{title: 'phone', price: 25000}, {title: 'tv', price: 35000}, {title: 'laptop', price: 85000}]),
    new Client(7, "Olga", "Koval", "olga7@gmail.com", "+380777777777", [{title: 'fan', price: 2500},{title: 'watch', price: 8500}]),
    new Client(8, "Andriy", "Bondar", "andriy8@gmail.com", "+380888888888", [{title: 'phone', price: 25000}]),
    new Client(9, "Natalia", "Tkachenko", "natalia9@gmail.com", "+380999999999", [{title: 'laptop', price: 85000}]),
    new Client(10, "Dmytro", "Melnyk", "dmytro10@gmail.com", "+380000000000",[{title: 'phone', price: 20000}, {title: 'airpods', price: 11500}]),

];
console.log(clients1);