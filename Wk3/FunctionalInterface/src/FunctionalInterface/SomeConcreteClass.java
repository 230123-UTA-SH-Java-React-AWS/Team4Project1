package FunctionalInterface;

public class SomeConcreteClass {
    

    public void concreteMethod(FirstInterface FI)
    {
        FI.someMethod(); 
        System.out.println("Invoking concrete method");
    }

    public void concreteMethod(SecondInterface FI2)
    {
        FI2.someMethod("This coming from the method of the concrete class");
    }

    public void concreteMethod(ThirdInterface FI3)
    {
        String result = FI3.someMethod();

        System.out.println("From the concrete method: " + result);
    }
}
