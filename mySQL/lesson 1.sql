use user123456;
show tables ;
create table users (
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null,
    gender varchar(6) not null
);
insert into users values (null, 'Max', 18, 'male');

select * from users;
select id, name from users;

select * from users where  name='oleg';
select * from users where name like 'o%';
select * from users where name like '%o%';
select * from users where name like '__e%';

select * from users where age=30;
select * from users where age>20;
select * from users where age<20;
select * from users where age<=20;
select * from users where age!=20;

select * from users where age between 20 and 30;

select * from users where age not between 10 and 20;

select * from users where name='oleg' or name='olha' and age=20;

select * from users where age in (18, 30, 35);
select * from users where age  not in (18, 30, 35);

select * from users where length(name) > 5;

select * from users order by age desc;
select * from users limit 2 offset 4;

select max(age) from users;
select min(age) as minAge from users;
select avg(age) as avg from users;
select count(*) as count from users where name='anna';
select sum(age) as sum from users;

select count(*) as count, gender from users group by gender;
select max(age) as max, gender from users group by gender;


select count(*) as count, model from cars where year > 2020 group by model having count>=2;

delete from users where id=3;
update users set age=99 where id=1;
