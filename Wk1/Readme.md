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
