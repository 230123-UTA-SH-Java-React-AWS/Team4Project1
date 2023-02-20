package com.revature.model;

public class Account {
    private int id;
    private int userId;
    private String name;
    private float balance;
    private String type;

    public Account() {
        super();
    }

    public Account(int userId, String name) {
        this.userId = userId;
        this.name = name;
        this.balance = 0.00f;
        this.type = "CHECKING";
    }

    public Account(int userId, String name, float balance) {
        this.userId = userId;
        this.name = name;
        this.balance = balance;
        this.type = "CHECKING";
    }

    public Account(int userId, String name, float balance, String type) {
        this.userId = userId;
        this.name = name;
        this.balance = balance;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
