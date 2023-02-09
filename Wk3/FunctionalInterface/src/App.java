import FunctionalInterface.SomeConcreteClass;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        SomeConcreteClass someObj = new SomeConcreteClass();

        //Using SAM interfaces, we can create functions in Java
        //This makes it easier to read your code essentially
        //It will also make it cleaner
        someObj.concreteMethod(() -> System.out.println("I just made a method without a class whaaaat?"));

        //Lambda Expression
        //It is uses "() -> {}"
        someObj.concreteMethod(() -> System.out.println("Another function being executed whaaat?"));

        //You can add multiline lambda expressions with {}
        someObj.concreteMethod(() -> {
            int x = 10 + 20;

            System.out.println(x);

            String test = "Hello World";

            System.out.println(test);
        });

        //Parameters can be defined within the parenthesis of the lambda expression
        //The values of these parameters will come from the concreteMethod
        someObj.concreteMethod((s1) -> {
            System.out.println(s1);
            System.out.println("This is from the function method now");
        });

        someObj.concreteMethod(() -> {
            return "This is coming from the function method";
        });
    }
}
