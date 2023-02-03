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

alter table pokemon add column pokeId serial primary key

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
 	
----------------- Many to Many --------------
create table pokemon_ability(
	pokeId integer references pokemon(pokeId),
	abId integer references ability(abid)
)

insert into pokemon_ability 
values (5, 2),
	(5,1),
	(3,1)
 	
----------- Scalar Functions -----------------
 --Scalar will manipulate each data in a column
 
 --Upper will uppercase each data on the selected column
 select upper(pokename), pokelevel from pokemon
 
 --Lower will lowercase each data on the selected column
 select lower(pokename) from pokemon
 
--Length will give the length of the string
 select length(pokename) from pokemon
 
--Time scalar functions
 select now();

--------------- Aggregate Functions --------------------
--Aggregate will combine all the data from that column

--Summation
select sum(pokelevel) from pokemon

--Average
select avg(pokelevel) from pokemon

--Minimal
select min(pokelevel) from pokemon p 

--Maximum
select max(pokelevel) from pokemon p 

--Count
select count(pokelevel) from pokemon


----------- Group By and Order By --------------
--Can you give me the summation of all level for each distinct pokemon?
--Can you order the name as well?
select pokename, sum(pokelevel) as "summation", count(*) as "How many rows" from pokemon
group by pokename
order by summation, pokename

------------------- User-defined functions --------------------
create or replace function pikachu_was_fainted()
returns trigger
language plpgsql
as $$
begin
	DELETE FROM pokemon WHERE pokename = 'Pikachu';
	return null;
end $$


drop function pikachu_was_fainted()

--Referential Integrity 
--It ensures that deleting something will not lead to data inconsistency
--TLDR a foreign key will always point to an existing row
select pikachu_was_fainted();


--------------- Stored Procedure -----------------------
--It is like a function but it has multiple outputs and inputs
create or replace procedure proc_create_pokemon(
	pname varchar,
	plevel integer,
	phealth integer,
	pdamage integer,
	pspeed integer
)
language plpgsql
as $$
begin 
	insert into pokemon(pokename, pokelevel, health, damage, speed) 
	values(pname, plevel, phealth, pdamage, pspeed);
end
$$

call proc_create_pokemon ('Pikachu', 123, 43, 54, 65);

----------------- Triggers -------------------------
--It will trigger a function when a certain event happens such as insert, delete, update
--You must supply a pre-made function

--The moment I add a new pokemon in the pokemon table, go ahead and delete all pikachu
create or replace trigger trig_new_pokemon_remove_all_pikachu
	after insert on Pokemon --before insert means we are looking at any insert event in Pokemon table 
							--before means execute this function before you finish the insert
	for each statement --Will repeat the execution of the selected function depending if you choose statement or row
	execute function pikachu_was_fainted();

insert into Pokemon(pokename, pokelevel, health, damage, speed)
	values ('Pikachu', 12, 34, 43, 12)
	
---------------- TCL or Transaction Control Language ---------------------
	
--Make sure to put the transaction by itself on another SQL script
begin;
	insert into Pokemon(pokename, pokelevel, health, damage, speed)
		values ('Eevee', 12,23,43,43);
	
	insert into Ability(abname, abpower, abpp)
		values('Take down', 120, 5);
commit;
	