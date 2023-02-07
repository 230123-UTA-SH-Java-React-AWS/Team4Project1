package OOP;

public class Polymorphism extends SuperClass{

    //It is possible to do it to more than just methods
    public Polymorphism() {
        super();
    }

    public Polymorphism(String someString) {
        super();
    }

    //Method Overloading
    //When two or more methods are within the same class has the same method signature except for their parameters
    //ONLY PARAMETERS
    public void someMethod()
    {
        System.out.println("Some implementation");
    }

    public void someMethod(String someString)
    {
        System.out.println("Another Implemention " + someString);
    }

    //Method Overriding
    //When one method in the child has the same method signature as the parent class
    @Override //Not required BUT your compiler will help enforce that this method SHOULD be overriding something
    public void superMethod()
    {
        //Is it really good to just override the entire thing from the parent class?
        //CODE REUSABLE
        //Whole goal is the extend the existing functionality of the parent method
        super.superMethod();
        System.out.println("Child method was invoked instead");
    }

    //Fun fact, it is possble to have different return type for your overriden
    //Hint: it goes back to inheritance
}
