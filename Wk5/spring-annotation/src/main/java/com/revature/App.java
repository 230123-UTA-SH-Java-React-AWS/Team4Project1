package com.revature;

import com.revature.config.AppConfig;
import com.revature.model.Pokemon;
import com.revature.service.PokemonService;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

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

        try (AnnotationConfigApplicationContext container = new AnnotationConfigApplicationContext(AppConfig.class)) {

            PokemonService pokeServ = container.getBean(PokemonService.class);
            PokemonService pokeServ2 = container.getBean(PokemonService.class);
            PokemonService pokeServ3 = container.getBean(PokemonService.class);

            Pokemon poke1 = container.getBean(Pokemon.class);
            Pokemon poke2 = container.getBean(Pokemon.class);

            poke2.setName("Pikachu");
            Pokemon poke3 = container.getBean(Pokemon.class);

            System.out.println(poke1.getName());
            System.out.println(poke2.getName());
            System.out.println(poke3.getName());
        } 
    }
}
