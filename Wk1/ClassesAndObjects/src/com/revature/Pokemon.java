
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
    
    //Usually in private access modifier
    private int level;

    //Static keyword with a field will now belong to the entire class
    //It is universally shared between objects
    public static int health;

    //Constructors
    //They are like methods in which they will have a behavior/function
    //But, they specialize in the creation process of an object
    public Pokemon(String name) {
        //This block will execute everytime you make a new object
        System.out.println("A pokemon is being created!");

        //this keyword will select a class member within this class
        this.name = name;
    }

    //Default constructors have 0 parameters
    //Provided automatically if you don't explicitly write a constructor
    public Pokemon() {
        super();
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

    
    //Setters
    //Methods that is responsible for setting a value of a field
    //An extra step is recommended so we have better CONTROL over our fields
    public void setLevel(int level)
    {
        //We can attach extra validation to ensure that what we store is what we want
        //In this case, we are going to ensure that is it above 0
        if (level > 0) {
            this.level = level;
        }
        else {
            System.out.println("You cannot set levels below 0!");
        }
    }

    //Getters
    //Methods that is responsible for getting a value of a field
    public int getLevel(){
        return this.level;
    }

    //Non-access modifier static
    //static keyword will allow us to have access to this method without creating a class
    //Usually done with methods that you want to have universal access without the need to make an obj
    //Ex: Math class given by Java
    public static void thisIsStatic()
    {
        System.out.println("Executing the static method");
    }
}
