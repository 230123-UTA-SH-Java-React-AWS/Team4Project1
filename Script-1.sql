drop table accounts;
drop table account_types;
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

create table account_types (
	id integer primary key,
	account_type varchar(50)
);
insert into account_types (id, account_type) values (1, 'CHECKING'), (2, 'SAVINGS');
	

create table accounts (
	id serial primary key,
	user_id integer references users(id) not null,
	account_name varchar(50) not null,
	balance decimal default 0.00,
	account_type integer references account_types(id) default 1
);
insert into accounts (user_id, account_name) values (1, 'test');

create table transaction_types (
	id integer primary key,
	transaction_type varchar(50)
);
insert into transaction_types (id, transaction_type) values (1, 'INCOME'), (2, 'EXPENSE');

create table transactions (
	id serial primary key,
	account_id integer references accounts(id) not null,
	amount decimal not null,
	transaction_type integer references transaction_types(id) not null
);
insert into transactions (account_id, amount, transaction_type) values (1, 1.00, 1);