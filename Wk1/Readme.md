# Fullstack Big Picture
* Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate development domains: the front end and the back end
* The front end includes everything that a client, or site viewer, can see and interact with
* Back end developers, in contrast, refine the software code that communicates with servers, databases, or other proprietary software that conveys information to front end interfaces
* Both front end and back end are called full stack developers, meaning they are well versed in both disciplines

# What is an Operating System? (OS)
* An operating system, or "OS," is software that communicates with the hardware and allows other programs to run. It is comprised of system software, or the fundamental files your computer needs to boot up and function. Every desktop computer, tablet, and smartphone includes an operating system that provides basic functionality for the device

# Basic Unix/Linux commands
* One of your main ways of interacting with your computer
* Flags (ex: -a, -v, -s) are used to change the behavior of a command
1. pwd – shows the current location of your terminal
2. Ls – lists files and directories
3. Cd – Changes the current directory
4. Mkdir – Creates a directory
5. Touch – creates a file
6. Cat – views the file (also can combine two files together) 
7. Cp – copies a file and paste it on a specified location
8. Mv – move a file to a directory
9. Rm – removes a file (use –r to remove a directory and all its content)
10. Diff – shows the difference between two files line by line
11. Grep – Searches for specific texts within a file and prints that entire line

# Linear Data Structures
## Array
* An array is typically going to be the most basic form of data structure that you'll find in any given programming language. An array is an index-based linear collection of elements. More often than not, we collect items of similar data types within an array, which makes it much easier to work with the data
* Allows random access with zero-based index
* **Fixed size**
## Linked List
* Dynamically changing size meaning they can increase or decrease in size
* Efficient in inserting, deleting, or shifting the position of elements inside the list
## Stack
* Last In First Out (LIFO) or First In Last Out (FILO) ordering
* Conceptualize stacks using a stack of plates placed in a box
* Ex: The back button functionality of your browser follows a stack data structure
## Queue
* First In First Out (FIFO) order
* Conceptualize stacks using a line forming to buy some movie tickets
* Ex: Joining an online game with a massive player base

# Git
* Version Control System (VCS)
* Maintain multiple versions of code
* An ability to go back to any previous version
* Developers can work in parallel
* Audit traceability with clear picture on whom, which when, where and what are the changes.
* Synchronize the code
* Copy/Merge/Undo the changes
* Find out the difference between versions
* Review the history of the change

## Three states:
* Figure out the git commands necessary to move to each state
* New/Modified – a new file was added or changed
* Staged – Files added to this state will be ready to be committed
* Committed – means the data is permanent and saved

## Git commands
* Every command will start with “git”
* Git init – initializes git and create a repository
* Git status – Checks the current state of each file
* Git add – tracks new/modified files within the repo (git add . Will add all files into staging)
* Git commit –m “message” – commits all the changes we have done and attach a message to it
* Git remote add - will add the location of the remote repo
* Git push - will push all changes from the local repo to the remote repo
* Git pull - will pull all changes from the remote repo to the local repo

## Github vs Git
* Github and Git are **NOT** the same
* Github is a remote repository
* It stores your repository online
* Mainly used to share your application to multiple people
* Multiple people can also contribute to the remote repository

# Algorithms
* A set of instructions that aims to solve a problem or operation

## Time Complexity
* Measures the growth of your algorithm number of operations as sample size/input increases
* Big-Oh notation. Using this notation, we might say, for example, that an algorithm has a running time that is O(n^2) or O(n) or O(log(n)). These notations are read "Big-Oh of n squared," "Big-Oh of n," and "Big-Oh of log n" 

## Common Big O notations
* O(1) : Constant time
* O(N) : Linear time
* O(N^2) : Quadratic time
* O(log(n)) : Logarithmic time

## Bubble Sort
* Worst case scenario - Time complexity of O(n^2) 
* [step by step process of how Bubble sort sorts](https://www.programiz.com/dsa/bubble-sort)
* [Animation of Bubble Sort](https://visualgo.net/en/sorting)

## Merge Sort
* Average case scenario - Time complexity of O(n*log(n))
* [step by step process of how Merge sort sorts](https://www.programiz.com/dsa/merge-sort)
* [Animation of Merge Sort](https://visualgo.net/en/sorting)

## Linear Search
* Worst case scenario - Time complexity of O(n)
* [step by step process of how Linear search searches](https://www.programiz.com/dsa/linear-search)
* [Animation of both linear and binary search](https://blog.penjee.com/binary-vs-linear-search-animated-gifs/)

## Binary Search
* Worst case scenario - Time complexity of O(log(n))
* [step by step process of how Binary search searches](https://www.programiz.com/dsa/binary-search)
* [Animation of both linear and binary search](https://blog.penjee.com/binary-vs-linear-search-animated-gifs/)

# Java
* high-level and compiled programming language
* Strongly-typed - datatypes are enforced and cannot be changed (unless it can be casted)
* Object-Oriented programming style
* Platform independent
* Automatic memory management

## Main method
* This is the method that is executed at the very beginning of your java app.

## Classes
* the blueprints for how to create objects that contain a certain state 
* **this** keyword is used to reference any of the class members of a class
* **super** keyword is used to reference any of the class members of a parent/super class

### Class members
* Constructor
    * When we use the new keyword in order to create an object, the JVM is invoking a special class member called a constructor.
    * Declares how an object is to be instantiated and initialized from the class 
* Method
    * Used to specify a behavior or functionality you want the object to have
    * Parameters are used to add inputs to a method
    * Return datatype is used to specify the output of a method
* Field
    * Stores information
    * Usually private to keep encapsulation
* Getters
    * Like methods but are specifically responsible for getting information from fields
    * Allows fields to be readable
    * Naming convention: setField(datatype field)
* Setters
    * Like methods but are specifically responsible for setting information for fields
    * Allows fields to be writable
    * Naming convention: getField()

### Static non-access modifier
* The class or class member belongs to the class
* static field will share its value across multiple objects
* static method will be accessible without create an object from the class
* static class will force every class member within the class to be static as well

## Casting
* The process of converting a data type to another data type
### Explicit Casting
* When the end result of the conversion might result in information loss
* Must specify (datatype)variableName explicitly
* Ex: Converting a double into an integer
### Implicit Casting
* When the end result will not result in loss of information
* Your compiler will do the conversion for you
* Ex: Converting an integer to a double

## Primitive datatypes
* Datatype is defined by the language itself
* It stores the value directly into the stack memory
| Datatype | Memory         | What it stores                |
|----------|----------------|-------------------------------|
| boolean  | Depends on JVM | True or False                 |
| byte     | 8-bit          | numerical, integer values     |
| short    | 16-bit         | numerical, integral values    |
| char     | 16-bit         | numerical & single characters |
| int      | 32-bit         | numerical, integral values    |
| long     | 64-bit         | numerical, integral values    |
| float    | 32-bit         | floating values, more precise |
| double   | 64-bit         | floating values               |