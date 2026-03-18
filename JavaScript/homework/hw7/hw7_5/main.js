// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
function Client(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, "Ivan", "Ivanov", "ivan1@gmail.com", "+380111111111", [{title: 'phone', price: 25000}, {title: 'tv', price: 35000}]),
    new Client(2, "Petro", "Petrenko", "petro2@gmail.com", "+380222222222", [{title: 'tv', price: 35000}]),
    new Client(3, "Oleg", "Olegov", "oleg3@gmail.com", "+380333333333", [{title: 'fan', price: 2500}]),
    new Client(4, "Anna", "Ivanenko", "anna4@gmail.com", "+380444444444", [{title: 'laptop', price: 85000}]),
    new Client(5, "Maria", "Petrova", "maria5@gmail.com", "+380555555555", [{title: 'phone', price: 25000}, {title: 'fan', price: 2500}]),
    new Client(6, "Sergiy", "Sydorenko", "sergiy6@gmail.com", "+380666666666",[{title: 'phone', price: 25000}, {title: 'tv', price: 35000}, {title: 'laptop', price: 85000}]),
    new Client(7, "Olga", "Koval", "olga7@gmail.com", "+380777777777", [{title: 'fan', price: 2500},{title: 'watch', price: 8500}]),
    new Client(8, "Andriy", "Bondar", "andriy8@gmail.com", "+380888888888", [{title: 'phone', price: 25000}]),
    new Client(9, "Natalia", "Tkachenko", "natalia9@gmail.com", "+380999999999", [{title: 'laptop', price: 85000}]),
    new Client(10, "Dmytro", "Melnyk", "dmytro10@gmail.com", "+380000000000",[{title: 'phone', price: 20000}, {title: 'airpods', price: '11500'}]),

];

let sorted = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sorted);