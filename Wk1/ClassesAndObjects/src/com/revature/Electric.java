package com.revature;

//Pokemon is the super class
//Electric is the child class
//Inheritance allows us to obtain the class members from the parent/super class
public class Electric extends Pokemon implements Thunder, Lightning {

    //Came from the interface
    //We have to IMPLEMENT an abstract method from the interface 
    @Override
    public void noise() {
        // TODO Auto-generated method stub
        System.out.println("Thunder noise");
    }

    @Override
    public void clap() {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void bounce() {
        // TODO Auto-generated method stub
        
    }

    //Even though this class is empty, it has the same class members (if it is public) as the parent class
    
}
