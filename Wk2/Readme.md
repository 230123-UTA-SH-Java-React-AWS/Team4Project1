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
* Normalization is the process of efficiently organising data in a database. **Eliminate redundant data is to make sure that the same data is not stored twice** 
* Ensure data dependencies make sense
### First Normal Form: The first normal form (1NF)
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

## Joins
* A way to combine two tables together based on a matching condition
* INNER JOIN - selects all rows from both tables as long as there is a match between the columns. It will ignore non-matching rows
* LEFT JOIN - returns all records from the left table, and the records that match the condition from the right table.
* RIGHT JOIN returns all records from the right table, and the records that match the condition from the left table.
* CROSS JOIN - returns all possible row combinations from each table

## Alias
* Aliases is used to give a temporary name to a table or a column in a table
* It provides a very useful feature that allows us to achieve complex tasks quickly.
* It makes column or table name more readable.

## Scalar Functions
* Pre-defined functions in SQL
* The output returned by these functions will always be a single value
* See sql script for examples

## Aggregate Functions 
* Provides the output as a single value after performing different operations on a set of values
* See sql script for examples

# JDBC API
* Java Database Connectivity 
* It is a relatively low-level API used to write Java code that interacts with relational databases
* Don't forget to add the driver dependency for your JDBC!
    * They helps JDBC interact with a specific DB engine like postgressql
## Classes & Interfaces used
* DriverManager class - to make a connection with a database driver
* Connection interface - represents a physical connection with a database
* SQLException class - a general exception thrown when something goes wrong when accessing the database
* Statement interface - used for executing static SQL statements
* PreparedStatement interface - represents pre-compiled SQL statements
    * Also helps prevent **SQL Injection**
* ResultSet interface - represents data returned from the database
## DAO Design Pattern
* Using pre-defined just helps prevent sphagetti codes (code that is just disgusting and hard to read)
* Logically separate the code that accesses the database into Data Access Objects helps make a simple distinction for a class
* Creating an interface will help enforce the design pattern

# PostgreSql
* A superset of SQL
    * Meaning it has all the capabilities of SQL but MOAR
* TLDR things you won't use normally unless you are a data engineer
## User-defined functions
* It is like a method and it can be used to execute multiple SQL statements
* Like a method, it can only return one value
* Mainly used for **calculation**, you do not want to use functions to alter tables
    * Since it doesn't behave like a transaction
## Triggers
* It will execute a function depending if an event has happened
* We will focus on DML events on a given table
* Can execute a function before or after an event
* Must supply a pre-defined function that returns a trigger
## Stored Procedures
* It is similar to functions but it can have multiple outputs and inputs
## Sequence
* Think of our auto_incrementing primary key, that itself is a sequence
* User-defined schema bound object that produces a sequence of numeric values

# Mockito 
* Mockito is a popular open source framework for mocking objects in software test
* Using Mockito greatly simplifies the development of tests for classes with external dependencies
* It allows to define the output of certain method calls

# REST API
* Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services
    * Web services is essentially applications that is available in the web
* REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, and is simple and flexible making it more suitable for internet usage
* All communication done via REST API uses only HTTP requests

## Wonderful Constriants to follow 
* Client-Server: This constraint operates on the concept that the client and the server should be separate from each other and allowed to evolve individually
    * Hence we have a backend and a frontend
* Stateless: REST APIs are stateless, meaning that calls can be made independently of one another, and each call contains all of the data necessary to complete itself successfully
    * I don't know who you are
    * Client themselves are the one that keeps up the current state instead of the backend
* Cache: Because a stateless API can increase request overhead by handling large loads of incoming and outbound calls, a REST API should be designed to encourage the storage of cacheable data
    * If everyone keeps asking for a list of employees... why not just save it internally until everyone stops asking for it
* Uniform Interface: The key to the decoupling client from server is having a uniform interface that allows independent evolution of the application without having the application’s services, or models and actions, tightly coupled to the API layer itself
    * We didn't implement this but every layer should have its designated interface essentially
    * Main idea so if we change the implementation of a class, it will be an easy solution
* Layered System: REST APIs have different layers of their architecture working together to build a hierarchy that helps create a more scalable and modular application
    * We have implemented this, we have designated layers with their corresponding responsibilities
* Code on Demand: Code on Demand allows for code or applets to be transmitted via the API for use within the application
    * Rarely a thing nowawadays
    * Remember the time when you play games in a website, the game has to download certain things to your browser to run? That's code on demand
