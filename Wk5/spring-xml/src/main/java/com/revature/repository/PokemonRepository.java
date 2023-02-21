package com.revature.repository;

public class PokemonRepository {
    
    public PokemonRepository() {
        System.out.println("PokemonRepository object was created");
    }

    public void someCustomInitializationMethod(){
        System.out.println("Custom Initialization was invoked");
    }

    public void someCustomDestroyMethod()
    {
        System.out.println("Bean was executed");
    }
}
