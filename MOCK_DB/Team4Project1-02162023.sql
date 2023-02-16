--------------------------------DDL-------------------------------------
create table customer (
	c_id serial primary key,
	fname varchar(50) not null,
	lname varchar(50) not null,
	account_id integer references account(account_id),
	email varchar(250) unique,
	pw varchar(50) not null
)

create table account (
	account_id  serial primary key,
	balance decimal (50,2),
	type_id integer references account_type(type_id)
)

create table account_type (
	type_id serial primary key,
	accType varchar(50) unique
)

CREATE TABLE history (
history_id serial PRIMARY KEY,
description varchar(1000) NOT NULL,
debit decimal(100,2),
credit decimal(100,2),
account_id integer REFERENCES account(account_id)
)

drop table account_type

-----------------DQL--------------------------------------
select * from customer c 
select * from account a 
select * from account_type t




















-------MOCK DATA---------------

insert into customer (c_id, fname, lname, email, pw) values (1, 'Findlay', 'Davson', 'fdavson0@yolasite.com', 'ZlhVfpv6PxdL');
insert into customer (c_id, fname, lname, email, pw) values (2, 'Brody', 'Wilford', 'bwilford1@state.gov', 'n9HNQe0P4eHy');
insert into customer (c_id, fname, lname, email, pw) values (3, 'Aigneis', 'Daintier', 'adaintier2@loc.gov', '3OozFFbCq5sI');
insert into customer (c_id, fname, lname, email, pw) values (4, 'Ingamar', 'M''Barron', 'imbarron3@parallels.com', '4H7uIo');
insert into customer (c_id, fname, lname, email, pw) values (5, 'Larine', 'Penreth', 'lpenreth4@netvibes.com', 'fOSzNd');
insert into customer (c_id, fname, lname, email, pw) values (6, 'Goraud', 'Kulas', 'gkulas5@ibm.com', 'QqadoHIkYNZ');
insert into customer (c_id, fname, lname, email, pw) values (7, 'Harp', 'Ivanikhin', 'hivanikhin6@dmoz.org', 'wz40WXe6y7h8');
insert into customer (c_id, fname, lname, email, pw) values (8, 'Fiona', 'Godding', 'fgodding7@plala.or.jp', 'biWzJL');
insert into customer (c_id, fname, lname, email, pw) values (9, 'Adan', 'Eskell', 'aeskell8@vistaprint.com', 'sdVfzo');
insert into customer (c_id, fname, lname, email, pw) values (10, 'Barnabas', 'Louedey', 'blouedey9@surveymonkey.com', '9ZaIXY');
insert into customer (c_id, fname, lname, email, pw) values (11, 'Marita', 'Crease', 'mcreasea@businessweek.com', 'CNs7UIszm');
insert into customer (c_id, fname, lname, email, pw) values (12, 'Sean', 'Scamp', 'sscampb@telegraph.co.uk', 'qor4VUbJeuTi');
insert into customer (c_id, fname, lname, email, pw) values (13, 'Roland', 'Novotni', 'rnovotnic@exblog.jp', 'KxByqFtuErG');
insert into customer (c_id, fname, lname, email, pw) values (14, 'Kasey', 'Godart', 'kgodartd@apple.com', 'jzzHZ8Add46T');
insert into customer (c_id, fname, lname, email, pw) values (15, 'Reggie', 'Dmych', 'rdmyche@webs.com', '8U24MPP8xeae');
insert into customer (c_id, fname, lname, email, pw) values (16, 'Moses', 'Westraw', 'mwestrawf@spotify.com', 'OzOmn7T4CSW');
insert into customer (c_id, fname, lname, email, pw) values (17, 'Chad', 'De''Vere - Hunt', 'cdeverehuntg@webeden.co.uk', 'sPmqeD');
insert into customer (c_id, fname, lname, email, pw) values (18, 'Tess', 'Skyram', 'tskyramh@amazon.de', 'xGB26PZ6r');
insert into customer (c_id, fname, lname, email, pw) values (19, 'Chandler', 'Masden', 'cmasdeni@phpbb.com', 'K4zJZNbq');
insert into customer (c_id, fname, lname, email, pw) values (20, 'Derk', 'Pople', 'dpoplej@trellian.com', 'HKjXfIcqp');



​insert into account (account_id, balance) values (1, 88898.54);
insert into account (account_id, balance) values (2, 69823.8);
insert into account (account_id, balance) values (3, 34536.42);
insert into account (account_id, balance) values (4, 77728.31);
insert into account (account_id, balance) values (5, 35694.12);
insert into account (account_id, balance) values (6, 34257.41);
insert into account (account_id, balance) values (7, 78681.33);
insert into account (account_id, balance) values (8, 67621.44);
insert into account (account_id, balance) values (9, 66691.95);
insert into account (account_id, balance) values (10, 7965.01);
insert into account (account_id, balance) values (11, 81135.71);
insert into account (account_id, balance) values (12, 88039.8);
insert into account (account_id, balance) values (13, 49228.21);
insert into account (account_id, balance) values (14, 68808.9);
insert into account (account_id, balance) values (15, 54076.08);
insert into account (account_id, balance) values (16, 80549.19);
insert into account (account_id, balance) values (17, 40321.17);
insert into account (account_id, balance) values (18, 63715.49);
insert into account (account_id, balance) values (19, 68574.55);
insert into account (account_id, balance) values (20, 36763.5);

insert into account_type (type_id, accType) values (1, 'Savings');
insert into account_type (type_id, accType) values (2, 'Checking');

-------------------MOCK DATA---------------------------------------------
