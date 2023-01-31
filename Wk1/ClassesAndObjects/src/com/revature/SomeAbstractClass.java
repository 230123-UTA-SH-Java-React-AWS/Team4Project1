package com.revature;

//Adding an abstract non-access modifier will change a class into an abstract class
public abstract class SomeAbstractClass {


    //Constructor overloading
    public SomeAbstractClass() {
        System.out.println("A constructor is possible in abstract class");
    }

    public SomeAbstractClass(String someString)
    {
        System.out.println(someString);
    }

    public void notAbstract(){
        //implementation details
    }

    public abstract void abstractMethod();
    //No implementation details
}
