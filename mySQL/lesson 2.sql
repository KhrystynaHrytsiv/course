create table cities(
    id int primary key auto_increment,
    city varchar(20)
);
create table users (
    id int primary key auto_increment,
    name varchar(20) not null,
    age int not null,
    cityId int,
    foreign key (cityId) references cities(id)
);

select * from users
    join cities on cities.id = users.cityId;


select * from users left join cities on cities.id = users.cityId;

select * from users right join cities on cities.id = users.cityId;

select * from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment = d.idDepartment
where Sum > 10000;

select idClient, FirstName, LastName, Education, Passport, City, Age, Department_idDepartment from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment = d.idDepartment
where Sum > 10000;
# можна вручну прописувати поля які показувати, а можна вибрати всі поля з таблички і дописувати якісь поля з іншої таблиички
select client.*, CountOfWorkers from client
    join application a on client.idClient = a.Client_idClient
    join department d on d.idDepartment = client.Department_idDepartment = d.idDepartment
where Sum > 10000;
