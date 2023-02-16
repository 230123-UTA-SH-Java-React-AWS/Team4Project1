drop table users;

create table users (
	id serial primary key,
	fname varchar(50),
	lname varchar(50),
	address varchar(50),
	username varchar(50) unique,
	email varchar(50) unique,
	pass varchar(50) not null
);
insert into users (username, email, pass) values ('testuser', 'test@test.com', 'test');

