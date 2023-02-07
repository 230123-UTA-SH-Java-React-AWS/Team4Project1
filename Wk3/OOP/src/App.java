import java.util.ArrayList;
import java.util.List;

import ClassesToUseInterface.AnotherConcreteClass;
import ClassesToUseInterface.SomeConcreteClass;
import OOP.Abstraction;
import OOP.Encapsulation;
import OOP.Polymorphism;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("============== Encapsulation ==============");
        Encapsulation en = new Encapsulation();
        en.setMustBeGreaterThan0(10);
        // en.setMustBeGreaterThan0(-10); //Will fail due to our validation to enforce that behavior

        System.out.println("============== Polymorphism ==============");
        Polymorphism op = new Polymorphism();
        op.someMethod();
        op.someMethod("We have another String as parameter");
        op.superMethod();

        System.out.println("============== Abstraction ==============");
        List<Abstraction> someList = new ArrayList<>();
        someList.add(new SomeConcreteClass());
        someList.add(new AnotherConcreteClass());
        someList.add(new AnotherConcreteClass());
        someList.add(new SomeConcreteClass());

        //This combines inheritance, abstraction, polymorphism
        //covariance
        for (Abstraction abstraction : someList) {
            abstraction.someAbstractMethod();
        }
    }
}
