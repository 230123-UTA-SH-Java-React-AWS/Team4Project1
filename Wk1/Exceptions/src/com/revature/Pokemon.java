package com.revature;

public class Pokemon {
    private int level;

    public Pokemon() {
        level = 1;
    }

    //Setters
    //level cannot be less than or equal 0
    //adding throws keyword next to the method signature will ignore any exception within the method
    public void setLevel(int level) throws Exception
    {
        if (level > 0) {
            this.level = level;
        }
        else
        {
            //If someone uses this set method wrongfully, give an exception
            throw new Exception("You set the value of level to be less than 0");
        }
    }

    public void method1()
    {
        System.out.println("Executing method1");
        int x = 100/0; //Will give an Exception
    }

    public void method2()
    {
        System.out.println("Executing method2");
        method1();
    }

    public void method3()
    {
        System.out.println("Executing method3");
        method2();
    }

    //Getters
}
