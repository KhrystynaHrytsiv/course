// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// @ts-ignore
 class User {
 constructor(private id:number, private name:string, private surname:string, private email:string, private phone:string){
         this.id = id;
         this.name = name;
         this.surname = surname;
         this.email = email;
         this.phone = phone;
 }
 }

let users7: User[] = [
    new User(1, "Ivan", "Ivanov", "ivan1@gmail.com", "+380111111111"),
    new User(2, "Petro", "Petrenko", "petro2@gmail.com", "+380222222222"),
    new User(3, "Oleg", "Olegov", "oleg3@gmail.com", "+380333333333"),
    new User(4, "Anna", "Ivanenko", "anna4@gmail.com", "+380444444444"),
    new User(5, "Maria", "Petrova", "maria5@gmail.com", "+380555555555"),
    new User(6, "Sergiy", "Sydorenko", "sergiy6@gmail.com", "+380666666666"),
    new User(7, "Olga", "Koval", "olga7@gmail.com", "+380777777777"),
    new User(8, "Andriy", "Bondar", "andriy8@gmail.com", "+380888888888"),
    new User(9, "Natalia", "Tkachenko", "natalia9@gmail.com", "+380999999999"),
    new User(10, "Dmytro", "Melnyk", "dmytro10@gmail.com", "+380000000000")
];
console.log(users7);