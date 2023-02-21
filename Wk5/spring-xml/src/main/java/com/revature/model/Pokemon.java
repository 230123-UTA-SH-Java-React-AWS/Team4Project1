package com.revature.model;

public class Pokemon {
    private String name;
    private int level;
    private int health;

    public Pokemon() {
        System.out.println("Pokemon object was created!");
    }

    public Pokemon(String name, int level, int health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
