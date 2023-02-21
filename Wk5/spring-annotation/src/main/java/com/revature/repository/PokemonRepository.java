package com.revature.repository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


public class PokemonRepository  implements BaseRepository{
    public PokemonRepository() {
        System.out.println("PokemonRepository object was made");
    }

    @Override
    public Object getSomething() {
        // TODO Auto-generated method stub
        return null;
    }
}
