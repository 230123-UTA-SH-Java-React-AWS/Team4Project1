package com.revature.service;

import com.revature.repository.PokemonRepository;

public class PokemonService {
    //============== Dependency Injection Pattern ==============
    private PokemonRepository pokeRepo;

    public PokemonService(PokemonRepository pokeRepo) {
        this.pokeRepo = pokeRepo;
        System.out.println("PokemonService object was created!");
    }

    //==========================================================
}
