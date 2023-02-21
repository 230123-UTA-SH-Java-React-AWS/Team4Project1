package com.revature;

import com.revature.model.Pokemon;
import com.revature.repository.PokemonRepository;
import com.revature.service.PokemonService;

import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 */
public final class App {
    private App() {
    }

    /**
     * Says hello to the world.
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {
        System.out.println("Hello World!");


        //============= This is the old way before spring framework is used ==============
        PokemonRepository pokeRepo = new PokemonRepository();
        PokemonService pokeserv = new PokemonService(pokeRepo);
        PokemonService pokeServ = new PokemonService(pokeRepo);


        Pokemon poke1 = new Pokemon();
        Pokemon poke2 = new Pokemon();
        Pokemon poke3 = new Pokemon();

        //===================================================================

        System.out.println("======================== Spring way ===========================");
        //============ Spring way of how objects are created ==============
        try (ClassPathXmlApplicationContext container = new ClassPathXmlApplicationContext("beans.xml")) {
            System.out.println("We just created the Spring IoC container");
            
            PokemonRepository pokemonRepo = container.getBean(PokemonRepository.class);
            PokemonRepository pokemonRepo1 = container.getBean("pokemonRepository",PokemonRepository.class);
            PokemonRepository pokemonRepo2 = container.getBean(PokemonRepository.class);

            PokemonService pokemonService = container.getBean(PokemonService.class);
            PokemonService pokemonService2 = container.getBean(PokemonService.class);
            PokemonService pokemonService3 = container.getBean(PokemonService.class);

            Pokemon poke4 = container.getBean(Pokemon.class);
            Pokemon poke5 = container.getBean(Pokemon.class);
            Pokemon poke6 = container.getBean(Pokemon.class);

            poke4.setName("Pikachu");

            System.out.println(poke4.getName());
            System.out.println(poke5.getName());
            System.out.println(poke6.getName());
        } 
    }
}
