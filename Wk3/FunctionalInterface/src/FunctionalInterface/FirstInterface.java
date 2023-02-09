package FunctionalInterface;

/*
    Functional interfaces are SAM interfaces
    Single Abstract Method
*/
@FunctionalInterface //The compiler will help you out in enforcing the rule of a functional interface
public interface FirstInterface {
    public void someMethod();
}
