create database if not exists node;

create table if not exists user(
    id int not null auto_increment primary key,
    name varchar(100) not null,
    age int not null,
    sex varchar(10)
);