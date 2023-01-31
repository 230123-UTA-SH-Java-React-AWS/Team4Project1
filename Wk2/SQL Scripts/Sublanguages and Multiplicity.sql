--This is a comment in SQL

/*
 * This is a multi line comment
 */

----------------------- DDL or Data Definition Langauge -----------------------

--Create statement will create a table in our schema
create table Pokemon (
	--Specify the columns here
	pokename varchar(50),
	pokelevel Integer,
	health Integer,
	damage Integer
)

--alter statement will manipulate/change the table structure
alter table pokemon add column speed Integer

--this will drop/remove a column instead
alter table pokemon drop column speed

--Remove the table
drop table pokemon

--Will delete all data from that table
--Table will still exist
truncate table pokemon

---------- DML or Data Manipulation Language ------------

--Insert statement will insert data into pokemon table
insert into pokemon (pokename, pokelevel, health, damage)
	values ('Pikachu', 10, 100, 120),
			('Ditto', 2, 30, 50)

-- This insert statement will also work if you plan on adding all the values for each column
insert into pokemon 
	values ('Bulbasaur', 12, 40, 201)

-- You can select certain columns to add data, it will make the rest as NULL
insert into pokemon (pokename, pokelevel)
	values('Charizard', -10)

--Update statement will update existing data in a table
--We usually add a where clause to specifically target certain rows
update pokemon set health = 200
	where pokename = 'Charizard' --Will select specific rows in your table to update

--Delete statement will delete data inside the table
delete from pokemon 
	where pokename = 'Charizard'
	
----------------- DQL or Data Query Languages --------------------------

-- It will select every row in pokemon and display them in ResultSet
select * from pokemon

select * from pokemon
	where pokename = 'Pikachu'
	
select * from pokemon
	where pokelevel > 5

select * from pokemon
	where pokename = 'Pikachu' and pokelevel > 5
	
select * from pokemon
	where pokename like '%a%' --wildcards allows you to have a condition that is not exactly the same

-- Allows you to select only a couple of columns
select pokename, pokelevel from pokemon

--Aliasing, using the as keyword to replace the name of a column
select pokename as "name" from pokemon

-------------------- Multiplicity ---------------------------

------------- One to One relationship ----------
create table person (
	SSN serial primary key, --serial will auto increment for you
	personName varchar(50),
	strength integer
)

create table heart (
	heartId serial primary key,
	health bool,
	personSSN Integer references person(ssn) unique --Adding unique constraint enforces the 1on1 relationship
)
----------------------------------

insert into person (personName, strength)
	values ('Tawfik', 1000),
		('Keshawn', 2000),
		('Khareen', 9999)
		
insert into heart (health, personSSN)
	values (true, 1),
		(false, 3),
		(true, 2)
		
------------- One to Many -----------------
create table finger (
	fingerId serial primary key,
	fingerType varchar(15),
	personSSN Integer references person(ssn) 
)

insert into finger (fingerType, personSSN)
 values('pointerFinger', 2),
 	('thumbFinger', 2),
 	('middleFinger', 3)