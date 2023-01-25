//import statement essentially specify where to find a specific class
import com.revature.Pokemon;

public class App {

    //Main method
    public static void main(String[] args) throws Exception{
        System.out.println("Hello, World!");

        //Creating a pokemon object and having poke variable point to this new object
        Pokemon poke1 = new Pokemon("Pikachu");

        poke1.talk();
        poke1.talk();
        poke1.talk();

        //This is similar as writing System.out.println("This is talk2 giving a string");
        System.out.println(poke1.talk2());

        String anotherString = poke1.talk2();

        poke1.talk3("Hello this is a string that came from the main method");
        poke1.talk3("This is like sysout we have been doing");

        Pokemon poke2 = new Pokemon("Charizard");

        poke1.name = "Pikachu";
        System.out.println(poke1.name);

        poke2.name = "Bulbasaur";
        System.out.println(poke2.name);

        Pokemon poke3 = new Pokemon("Ditto");
        System.out.println(poke3.name);
    }
}
