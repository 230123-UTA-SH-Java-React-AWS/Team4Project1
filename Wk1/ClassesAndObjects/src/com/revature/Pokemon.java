
//package is like a virtual folder within your java app
//It will store your classes inside of this folder
package com.revature;

//Classes are made by specifying an access modifier
//class keyword
//finally the actualy name of the class
public class Pokemon {
    //Field
    //Holds information for the object
    //Fields are like variables but they are inside of a class
    public String name;

    //Constructors
    //They are like methods in which they will have a behavior
    //But, they specialize in the creation process of an object
    public Pokemon(String name) {
        //This block will execute everytime you make a new object
        System.out.println("A pokemon is being created!");

        //this keyword will select a class member within this class
        this.name = name;
    }
    
    //I want my pokemon to talk to the terminal when I want it to
    //Methods are essentially associated with behaviors in real life
    //[Access modifier] [datatype to give back] [nameOfMethod](Parameters) {}
    //Void datatype means the method will not give anything
    public void talk(){
        System.out.println("Pikachu!!!");
    }

    public String talk2()
    {
        //Return keyword will specify that this method will return [someValue]
        return "This is talk2 giving a string";
    }

    //Parameters are great for methods that needs extra information to work as intended
    //In this case, whoever uses this method MUST give me a string value
    public void talk3(String talkText) {
        System.out.println(talkText);
    }

    

}
