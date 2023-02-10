
# OOP Pillars

## Encapsulation
* The process of wrapping code and data together into a single unit
* So any validation and processing of data in your class will be handled by the class itself
* They **prevent unauthorize access** to your object's properties and setting vlaues that shouldn't be there
* **Key note:** this is only possible if you make your fields private so nothing can access it but the class itself

## Polymorphism
* The ability of an object to take on many forms
* It allows you to substitute different implementation details for different needs
* Inheritance allows us to re-use code but with polymorphism, we can add more functionality to our code
### Method Overriding
* When a child class changes the implementation details of a method from the super class
* Utilizing the @Override annotation is good coding practice but not required to achieve overriding
    * Compiler will help check that you are indeed overriding a method
* It is good practice to extend the capability of a super method than replacing it entirely
### Method Overloading
* When there are multiple method but with different parameters and most of the time, different implementation details
### Constructor overloading also exists

## Abstraction
* The process of hiding the implementation details and only showing the functionality to the user
* A way to simplify complex application and not worry about the implementation details and just really focuse on the functionality of something.
* Ex: You know how to send a text with your phone but you don't know the process on how that text gets send over to the other person
* The way we implement abstraction is through the use of interfaces and abstract classes
* In a more real sense, we use it enforce certain behaviors a class must have and implemented
    * This way, we can integrate their custom class with our own classes (like how we used HTTPHandler interface)
### Interface
* It contains nothing but abstract methods and static final fields
    * That just means you don't have to write implementation details when you create an interface
* You can implement multiple interfaces
### Abstract class
* May contain some methods and properties with implementation
* May also contain abstract methods and properties
* You cannot inherit multiple abstract classes

# Collection Interface

## List Interface
* Duplicated but ordered elements
### ArrayList
* The same as an array except with dynamically changing size
* Still zero-based index and random access (because the behind the scenes it uses arrays)
* It will expand the array within this collection by 50% if the size of the array was exceeded
* Retrieval O(1)
* Insert and removal O(n)
* Traversal O(n)

### LinkedList
* Composed of Nodes
    * Each node has its value and references for the next and previous node
* Traversal is O(n)
* Insert and removal O(1)

### Vector
* It is the legacy version of ArrayList (legacy just means older)
* Slower than ArrayList in terms of performance
    * Expands the array by 100% if you exceed the size of the array
* Thread-safe (This is safe to use when you are executing multiple methods at the same time)

## Set Interface
* No duplicated values

### HashSet
* Uses the hash algorithm to convert objects into numerical values
* Has no order
* Insert, Remove, and Search O(1)
* Traversal O(n)

# TreeSet
* Maintains the sorted order whenever you insert something
* O(log n) for adding, removal due to the inherit sorting it does with the tree
* Since it is sorted by default, searching for a value is O(log(n))
    * It uses Binary Search Tree which has the same concept as Binary Search but in tree form

# Iterable Interface
* Defines that the data structure is possible to be iterated using the for each enhanced loop
* The entire collection interface inherits this interface, so you can bet that any List and Set and Queue can be iterate using the enhanced for loop
# Iterator Interface
* The actual class that will specify how can you iterate through the data structure
* hasNext() - Will give a boolean that specifies if there is any value left in the DS
* Next() - Returns the next element in the DS

# Map Interface
* **Does not inherit collection interface**
* It is used to identify a value by a key, and each entry in a map is a key-value pair
* It does not implement Iterable, Maps cannot be iterated over directly
    * We would need to convert the map into a Set that can be iterated (entrySet() method will do the conversion)
* It shares similarities with the Set interface due to keys being unique and also share the same concrete implementation of the classes

## HashMap
* Works the same and has the same time complexities as HashSet but uses key-value pair

## TreeMap
* Works the same and has the same time complexities as TreeSet but uses key-value pair

## HashTable
* Similar to HashMap but legacy code
* Thread-safe
* Another main difference, it doesn't allow null keys or null values

# Java 8 new features

## Functional Interfaces
* Interfaces that have only one abstract method
* Also known as SAM interfaces
* They allow us to create "functions" within Java
### Lambda Expressions
* () -> {} is the syntax
* Allows us to create functions within Java and it is with functional interfaces
* Their main benefit is to make your code cleaner and easier to understand

## Stream API
* Uses functional interface to manipulate your collection in some shape or form
* **It does not store data**, you would need to save the result
* stream() - gives us a Stream object that has the required methods to do some operations 
    * stream() method exists as long as it inherits the collection interface
* filter() - great for filtering the collection
    * Essentially the same as the where clause in SQL
* collect() - it will dictate how this stream should give the collection back
    * Essentially the same as the select statement
### Method referencing
* Method references are a special type of lambda expressions
* They're often used to create simple lambda expressions by referencing existing methods
* Compiler will understand that you want to execute that method

# HTML
* Hypertext Markup Language
* Another markup language so that means it is just telling the computer what to do and not compiling it into machine code
* Very similar to xml (our pom.xml files) but HTML is used to define the structure of our webpages
* Our browsers are essentially experts at reading this files and interpreting it to display something on the browser
* We are currently on version HTML 5

## HTML elements
* so like XML, it uses tags to define what something should be displayed and instead of calling them "tags" we also call them HTML elements
* They are, for the most part, a basic graphical unit of something you want to display/structure on your web page

## HTML Tags
* Don't confuse with HTMl elements although they are used synonymously online
* HTML element is the actual unit while HTML tag is used to refer to that HTML element
* Ex: paragraph HTML element will display long text in your website and you use `<p> <\p>` HTML tag to display it


### Inline vs Block elements
* Block elements will add the element in a new line in HTML
* Inline elements will add the element in the same line as the previous element as long as there is enough space

## HTML attributes
* They are used to provide extra information that the tag can use
* Ex: img tag using src attribute to find a specific image to display

## Web Accessiblity
* In the past only a computer has access to a website and so usually websites are created for a pc only. That's not the case anymore.
* So Web accessiblity is configuring your website in a way so it is also readable beyond pc users such as phone, tablets, gaming consoles, etc. 
* This is usually done by manipulating CSS 

# CSS
* Cascading Style Sheets
    * Cascading is in the name because it will cascade each rule and keep on adding on until there isn't any rules left
* A way to stop making your website looking like it came from the 90s

## CSS Selectors
* Before applying styles everywhere, we need a way to select specific or group of HTMl elements first so we give them their own type of look
* There are three basic fundamental selectors we should keep in mind:
1. Element selector - When you want to select multiple elements of the same tag
2. Class selector - When you want to select multiple elements of differing tag by using the class attribute
3. Id selector - When you want to select one (mostly) or a couple elements using the id attribute
4. Child selector - When you want to select nested elements
    * Uses ">" syntax 
5. Universal selector - When you want to select all of the elements
    * Uses "*" syntax

## Different ways to include CSS
* Inline CSS
    * Applies CSS to a single element
    * It uses the style attribute
    * Has the highest priority
* Internal CSS
    * Applies CSS by using the style tag inside of a HTML doc
    * Used to apply multiple css to multiple elements
* External CSS
    * Creating an external .css file to apply css to multiple HTML docs (you can just apply it to one HTML but that kind of defeats the purpose of using an external css)
    * HTML doc must use the link tag to reference the external css
    * Used to apply multiple css to multiple elements in multiple HTML docs
        * So useful to create a universal theme of your website

## CSS Specificity
* Key thing is the term "Specificity"
* This will determine what style we should apply to a particular element because sometimes some styling will collide with another
* General rule: 
    * Inline css will have a very high priority
    * Id selector will have the second priority
    * Class selector will have the third
    * Element selector will have the last

## CSS Box Model
* A way to enlarge/separate/resize your elements into the right size and spacing
* From inside to outside: Content > Padding > Border > Margin

## CSS Grid
* A way to put elements in a grid like system
* https://css-tricks.com/snippets/css/complete-guide-grid/

## CSS Flexbox
* Bootstrap uses this feature extensively
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/

