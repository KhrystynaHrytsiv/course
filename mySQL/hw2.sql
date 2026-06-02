use user123456;
# 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName)<6;

# 2.Вибрати львівські відділення банку.
select * from department where DepartmentCity='lviv';

# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education='high' order by LastName;

# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from application order by idApplication desc limit 5;

# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like '%ov' or  LastName like '%ova';

# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client
    join department d on client.Department_idDepartment = d.idDepartment where DepartmentCity='kyiv';

# 7.Знайти унікальні імена клієнтів.
select distinct FirstName from client;

# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.
select * from client join application on client.idClient = application.Client_idClient where Sum > 5000 and Currency='Gryvnia';

# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select (select count(*) from client join department d on client.Department_idDepartment = d.idDepartment) as allClients,
       (select count(*) from client join department on client.Department_idDepartment = department.idDepartment where DepartmentCity='lviv')  as LvivCount;


# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select max(Sum), client.* from application
    join client on application.Client_idClient = client.idClient group by Client_idClient;

# 11. Визначити кількість заявок на кредит для кожного клієнта.
select count(*), client.* from application join client on application.Client_idClient = client.idClient group by Client_idClient;

# 12. Визначити найбільший та найменший кредити.
select (select max(sum) from application) as maxCredit, (select min(sum) from application) as minCredit;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(*), idClient, FirstName, LastName from application join client on application.Client_idClient = client.idClient
                                               where Education='high' group by idClient;

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select avg(Sum) as avg , client.* from  client
    join application on client.idClient = application.Client_idClient
                                  group by idClient order by avg desc limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select sum(sum), DepartmentCity from application
    join client on application.Client_idClient = client.idClient
join department on client.Department_idDepartment = department.idDepartment group by DepartmentCity limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.
select max(sum), DepartmentCity from application join client on application.Client_idClient = client.idClient
                                                 join department on client.Department_idDepartment = department.idDepartment
                                group by DepartmentCity limit 1;

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application join client on application.Client_idClient = client.idClient set sum =6000  where Education='high' ;
select *from client join application on client.idClient = application.Client_idClient;

# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client join department on client.Department_idDepartment = department.idDepartment set City= 'kyiv' where DepartmentCity='kyiv';
select * from client join department on client.Department_idDepartment = department.idDepartment;

# 19. Видалити усі кредити, які є повернені.
delete from application where CreditState='Returned';

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete application from application join client on application.Client_idClient = client.idClient
                   where LastName like '_a%'
                      or LastName like '_o%'
                      or LastName like '_y%'
                      or LastName like '_u%'
                      or LastName like '_e%'
                      or LastName like '_i%';

# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select sum(Sum) as sum, DepartmentCity, idDepartment from application join client on application.Client_idClient = client.idClient
join department on client.Department_idDepartment = department.idDepartment
                       where DepartmentCity='lviv'  group by idDepartment having sum(Sum) > 5000;

# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select * , sum from client
    join application on client.idClient = application.Client_idClient where CreditState='Returned' and Sum > 5000;

# 23.Знайти максимальний неповернений кредит.
select max(Sum) from application where CreditState='Not returned';

# 24.Знайти клієнта, сума кредиту якого найменша
select  idClient, FirstName, LastName, Sum from client join application on client.idClient = application.Client_idClient order by Sum limit 1;

# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
select * from application where Sum> (select avg(Sum) from application);

# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
select * from client where City = ( select c.City from client c join application a on c.idclient = a.client_idclient
    group by idclient order by count(*) desc limit 1);

# 27. Місто клієнта з найбільшою кількістю кредитів
select city from client join application on client.idClient = application.Client_idClient group by Client_idClient order by count(*) desc limit 1;