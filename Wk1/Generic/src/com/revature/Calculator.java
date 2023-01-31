package com.revature;

//It acts like placeholder
//Lower bound and upper bound generics
public class Calculator<T, U> {

    public U variable;
    
    //numerical datatypes
    /*
        int - 32bit, whole numbers
        double - 64bit, floating numbers
        long - 64bit, whole numbers
        short - 16 bit, whole numbers
        
        I want the capability to add any numerical datatypes
    */
    public void addition(T num1, U num2)
    {
        System.out.println(num1 + " " + num2);
    }
}
