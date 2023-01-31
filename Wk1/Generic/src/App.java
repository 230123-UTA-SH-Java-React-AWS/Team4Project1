import java.util.ArrayList;
import java.util.List;

import com.revature.Calculator;
import com.revature.Pokemon;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        Calculator<Integer, Double> cal = new Calculator<Integer, Double>();
        cal.addition(10, 20.5);

        cal.variable = 10.5;

        //ArrayList class uses generics when they made this class
        //This allows the class to hold more than one datatype and also changes its methods to hold that datatype
        //Almost like an array but it has dynamically changing size
        List<String> holdsInts = new ArrayList<>();
        holdsInts.add("someString");
        holdsInts.add("20.4");
        holdsInts.add("klajfhw");
        holdsInts.remove("someString");

        //Difference between a reference type and primitive type
        Pokemon poke1 = new Pokemon();
        Pokemon poke2 = new Pokemon();
        poke2.name = "Ditto";

        poke2 = poke1; 

        poke1.name = "Pikachu";

        System.out.println(poke2.name);

        //What gets outputed by
        /* 
            Pikachu - 4
            ditto - 2
        */

        int x1 = 10;
        int x2 = 100;

        x2 = x1;

        x1 = 320;

        x2 = x1;

        System.out.println(x2);

        //What object gets garbage collected?
        //poke2

        //Reference type
        String s1 = "Hello";
        String s2 = "World";

        s2 = s1;

        s1 = "Hello World";

        s1 = s1 + "Another!";

        s1 = "World";

        System.out.println(s2);
    }
}
