//import statement essentially specify where to find a specific class
import com.revature.Electric;
import com.revature.Pikachu;
import com.revature.Pokemon;
import com.revature.Thunder;

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

        poke1.setLevel(10);
        poke1.setLevel(-10);

        System.out.println(poke1.getLevel());

        //Access a static method without creating an object
        Pokemon.thisIsStatic();

        poke1.health = 10;
        System.out.println(poke1.health);

        poke2.health = 20;
        System.out.println(poke1.health);
        //10 - 1
        //20 - 4
        //1020 - 1

        //Casting or type casting
        double someDouble = 35;
        
        System.out.println(someDouble);
        //We are explicitly telling the compiler that I do not mind the conversion
        //Explicit casting might result in loss of information
        int someInt = (int)someDouble;

        System.out.println(someInt);

        //In the event that there is no information loss, conversion is done for you
        //No need to use casting
        //Implicit casting
        someDouble = someInt;

        Electric electr1 = new Electric();

        //Variance - another type of polymorphism
        Thunder electricPokemon = new Pikachu();

        electricPokemon.noise();

        electricPokemon = new Electric();
        
        electricPokemon.noise();
    }
}
