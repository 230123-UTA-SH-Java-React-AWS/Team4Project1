# SQL
* Structured Query Language or SQL is the standard language for working with RDBMS systems
* SQL is used to administer and manipulate SQL servers 
* SQL is a scripting language that is interpreted by the database server
## What's a RDBMS?
* Relational Database Management System or RDBMS is a set of software and capabilities that enable IT teams to create, update, administer and interact with a relational database
* Structured data model
* Large scale concurrent data access
* Fault tolerance
* Distributed data storage
* Enforced data integrity
* Support for multiple client types
## What's a Database?
* A database is a system of software and capabilites that make validating, storing, searching, filtering, aggregating, grouping, and administering data possible. 
* In enterprise applications databases fall into 2 main categories SQL and NoSQL.
    * SQL uses... well SQL
    * noSQL is anything that doesn't use SQL. Ex: MongoDB

## Sublanguages
### DDL
* Data Definition Language is the SQL language subset used for defining data or altering structure in the database
* **Schema** is the technical terminalogy when we mention the structure of your database
* CREATE - Creates a table (or other entities in DB)
* DROP - Removes a table from the Schema (or other entities in DB)
* ALTER - Will alter the table structure
* TRUNCATE - Will remove all data from a table
    * Impossible to recover the data that was lost
    * Has some nice optimization steps for clearing up memory
    * It will reset your auto_increment counter
### DML
* Data Modification Language is the SQL language subset used for modifying data in the database
* INSERT - Creates data in a table
* UPDATE - Updates data in a table
* DELETE - Delets data in a table
    * Can be used with a where clause
    * It is possible to retrieve the data back if a savepoint was used
    * does not reset your auto_increment counter
### DQL
* The Data Query Language is the SQL sublanguage used for querying data from the database. It is the major sublanguage used by applications to search, project, filter, join, aggregate and group data for displaying application state
* SELECT - Retrieves data and displays a **ResultSet**
* **ResultSet** - it is the result of a query that was executed
### TCL
* A Transaction is a set of SQL statements that are executed
* Unique property in that any failure during the transaction will safely rollback to the state the database was in before the transaction
* COMMIT - This command is used to save the data permanently
* ROLLBACK - This command is used to get the data or restore the data to the last savepoint or last committed state
* SAVEPOINT - This command is used to save the data at a particular point temporarily, so that whenever needed can be rollback to that particular point.
### DCL
* The Data Control Language of SQL is used to control rights, and permissions of users on database objects.
* GRANT - grants a specific user's certain permissions
* REVOKE - revokes a specific user's existing permissions

## Constraints
* Used to limit the data that is inserted into a specific column
* Unique - make every value of a column is different
* Not null - ensures that a column doesnt contain null values
* Primary key - used to uniquely identify each record in a table. It is inheritly unique and not null
* Foreign key - a column in one table, that refers to the primary key in another table
* Composite key - combination of columns used to uniquely identify a table
* Default - to set a default value for a column

## Multiplicity
* Defining the relationships between two tables
### One to One
* When Table A relates to only one row in Table B and vice versa.
* Must specify the **FK to be Unique**
* Ex: One human has one heart and one heart only relates to one human
### One to Many
* When Table A relates to only one row in Table B but Table B relates to multiple rows in Table A
* Ex: One student has only one instructor but the instructor has many students
### Many to Many
* When Table A relates to multiple rows in Table B and vice versa.
* Ex: One pokemon has many abilities and one abilities can belong to many pokemons

## Normalization
* Normalization is the process of efficiently organising data in a database. * * Eliminate redundant data ie to make sure that the same data is not stored twice 
* Ensure data dependencies make sense
### First Normal Form: The first normal form (1NF
* All the data in the tables are atomic. 
* Must have a primary key
### Second Normal Form: Second normal form (2NF)
* Elimination of partial dependencies.
* If every non-key column is completely dependent on both primary keys (since it is a composite key)
### Third Normal Form: Third normal form (3NF) 
* Elimination of transitive dependencies
* Every non-key column must depend on the primary key
* TLDR just ensure the columns all relate with each other and it makes sense
    * Ex: person table shouldn't have catName as a column
### Referential Integerity
* A nice safeguard tool to ensure we don't have data inconsistency
* SQL will prevent you from delete tables that have relationship with another table
    * Another way of saying it is when a table depends on another table (they have a foreign key)
* SQL will also prevent you from adding data that doesn't point to anywhere
    * Basically adding an ID in the FK column but that ID doesn't exist anywhere
* It is possible to completely ignore this safeguard by using ON CASCADE but... I would avoid that as much as possible

