package com.revature;

//Utilize interface keyword instead of class to specify that this is an interface
//It is a contract that a class must follow
//Allows you to implement multiple interfaces for a single class
public interface Thunder {
    
    //It will nothing but abstract methods
    //Methods that does not require any implementation (they are empty)
    public void noise();
    public void clap();
}
