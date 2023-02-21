package com.revature.service;

import com.revature.repository.PokemonRepository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

    private PokemonRepository pokeRepo;

    public PokemonService(PokemonRepository pokeRepo) {
        this.pokeRepo = pokeRepo;
        System.out.println("PokemonService Object was made");
    }
}
