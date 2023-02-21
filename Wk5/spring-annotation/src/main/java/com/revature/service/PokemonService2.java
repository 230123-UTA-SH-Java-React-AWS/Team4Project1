package com.revature.service;

import com.revature.repository.BaseRepository;
import com.revature.repository.PokemonRepository;
import com.revature.repository.TrainerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class PokemonService2 {

    //In the event that you don't want to use DI pattern to specify dependencies for Spring to automatically handle for you
    //You can use AutoWire annotation to give that dependency
    @Autowired
    @Qualifier("pokemonRepo")
    private BaseRepository pokeRepo;
    
    public PokemonService2() {
        System.out.println("PokemonService2 object was created");
    }

    /*
        You can also apply @Autowire to setters to give even further implementations when adding that bean
    */
    @Autowired
    public void setPokemonRepo(PokemonRepository pokeRepo)
    {
        //You can have your custom implementation details to how to set it as well
        this.pokeRepo = pokeRepo;
    }
}
