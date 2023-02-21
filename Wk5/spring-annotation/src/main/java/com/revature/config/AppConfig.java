package com.revature.config;

import com.revature.repository.PokemonRepository;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration //Telling Spring that this class is to configure my beans
@ComponentScan("com.revature") //This is telling Spring where to scan to find your classes
public class AppConfig {
    

    @Bean(name = "pokemonRepo")
    public PokemonRepository getPokemonRepo()
    {
        System.out.println("Add your own custom execution of code here");
        //Create for complex creation of beans
        return new PokemonRepository();
    }

}
